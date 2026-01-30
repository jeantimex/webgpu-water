import { GltfLoader } from 'gltf-loader-ts';
import { mat4, vec3 } from 'wgpu-matrix';

import modelVertShader from './shaders/model/model.vert.wgsl';
import modelFragShader from './shaders/model/model.frag.wgsl';

type Gltf = {
  scenes?: { nodes?: number[] }[];
  scene?: number;
  nodes?: {
    children?: number[];
    mesh?: number;
    matrix?: number[];
    translation?: number[];
    rotation?: number[];
    scale?: number[];
  }[];
  meshes?: { primitives: { attributes: Record<string, number>; indices?: number; material?: number }[] }[];
  accessors?: {
    bufferView: number;
    byteOffset?: number;
    componentType: number;
    count: number;
    type: string;
  }[];
  bufferViews?: { buffer: number; byteOffset?: number; byteLength: number; byteStride?: number }[];
  buffers?: { uri: string }[];
  materials?: { pbrMetallicRoughness?: { baseColorTexture?: { index: number } } }[];
  textures?: { source: number; sampler?: number }[];
  images?: { uri: string }[];
  samplers?: { magFilter?: number; minFilter?: number; wrapS?: number; wrapT?: number }[];
};

export class Model {
  private device: GPUDevice;
  private format: GPUTextureFormat;

  private commonUniforms: GPUBuffer;
  private lightUniforms: GPUBuffer;
  private sphereUniforms: GPUBuffer;

  private positionBuffer!: GPUBuffer;
  private normalBuffer!: GPUBuffer;
  private uvBuffer!: GPUBuffer;
  private indexBuffer!: GPUBuffer;
  private indexFormat: GPUIndexFormat = 'uint16';
  private indexCount = 0;

  private pipeline!: GPURenderPipeline;
  private modelSampler!: GPUSampler;
  private modelTexture!: GPUTexture;

  private loaded = false;

  constructor(
    device: GPUDevice,
    format: GPUTextureFormat,
    uniformBuffer: GPUBuffer,
    lightUniformBuffer: GPUBuffer,
    sphereUniformBuffer: GPUBuffer
  ) {
    this.device = device;
    this.format = format;
    this.commonUniforms = uniformBuffer;
    this.lightUniforms = lightUniformBuffer;
    this.sphereUniforms = sphereUniformBuffer;

    this.createPipeline();
  }

  async load(url: string): Promise<void> {
    const loader = new GltfLoader();
    const asset = await loader.load(url);
    const gltf = asset.gltf as Gltf;

    if (!gltf.nodes || !gltf.meshes || !gltf.accessors || !gltf.bufferViews || !gltf.buffers) {
      throw new Error('Invalid GLTF: missing required sections.');
    }

    const baseUrl = url.substring(0, url.lastIndexOf('/') + 1);
    const binUrl = baseUrl + gltf.buffers[0].uri;
    const binBuffer = await fetch(binUrl).then((r) => r.arrayBuffer());

    const { nodeIndex, primitive } = this.findFirstMeshPrimitive(gltf);
    const worldMatrix = this.getWorldMatrix(gltf, nodeIndex);

    const positions = this.readFloatAccessor(gltf, binBuffer, primitive.attributes.POSITION);
    const normals = this.readFloatAccessor(gltf, binBuffer, primitive.attributes.NORMAL);
    const uvs = primitive.attributes.TEXCOORD_0 !== undefined
      ? this.readFloatAccessor(gltf, binBuffer, primitive.attributes.TEXCOORD_0)
      : new Float32Array((positions.length / 3) * 2);

    const transformedPositions = this.transformPositions(positions, worldMatrix);
    const transformedNormals = this.transformNormals(normals, worldMatrix);

    const { centered, radius } = this.centerAndNormalize(transformedPositions);
    const normalizedPositions = centered.map((v) => v / radius);
    this.alignToBottom(normalizedPositions, 0.02);

    this.positionBuffer = this.createBuffer(new Float32Array(normalizedPositions), GPUBufferUsage.VERTEX);
    this.normalBuffer = this.createBuffer(transformedNormals, GPUBufferUsage.VERTEX);
    this.uvBuffer = this.createBuffer(uvs, GPUBufferUsage.VERTEX);

    if (primitive.indices === undefined) {
      throw new Error('GLTF mesh primitive missing indices.');
    }

    const indexAccessor = gltf.accessors[primitive.indices];
    const indexData = this.readIndexAccessor(gltf, binBuffer, primitive.indices);
    this.indexBuffer = this.createBuffer(indexData, GPUBufferUsage.INDEX);
    this.indexFormat = indexAccessor.componentType === 5125 ? 'uint32' : 'uint16';
    this.indexCount = indexData.length;

    await this.loadTexture(gltf, baseUrl);
    this.loaded = true;
  }

  render(
    passEncoder: GPURenderPassEncoder,
    waterTexture: GPUTexture,
    waterSampler: GPUSampler,
    causticsTexture: GPUTexture
  ): void {
    if (!this.loaded) return;

    const bindGroup = this.device.createBindGroup({
      layout: this.pipeline.getBindGroupLayout(0),
      entries: [
        { binding: 0, resource: { buffer: this.commonUniforms } },
        { binding: 1, resource: { buffer: this.sphereUniforms } },
        { binding: 2, resource: { buffer: this.lightUniforms } },
        { binding: 3, resource: waterSampler },
        { binding: 4, resource: waterTexture.createView() },
        { binding: 5, resource: causticsTexture.createView() },
        { binding: 6, resource: this.modelSampler },
        { binding: 7, resource: this.modelTexture.createView() },
      ],
    });

    passEncoder.setPipeline(this.pipeline);
    passEncoder.setBindGroup(0, bindGroup);
    passEncoder.setVertexBuffer(0, this.positionBuffer);
    passEncoder.setVertexBuffer(1, this.normalBuffer);
    passEncoder.setVertexBuffer(2, this.uvBuffer);
    passEncoder.setIndexBuffer(this.indexBuffer, this.indexFormat);
    passEncoder.drawIndexed(this.indexCount);
  }

  private createPipeline(): void {
    const vertexShaderModule = this.device.createShaderModule({
      label: 'Model Vertex Shader',
      code: modelVertShader,
    });

    const fragmentShaderModule = this.device.createShaderModule({
      label: 'Model Fragment Shader',
      code: modelFragShader,
    });

    this.pipeline = this.device.createRenderPipeline({
      label: 'Model Pipeline',
      layout: 'auto',
      vertex: {
        module: vertexShaderModule,
        entryPoint: 'vs_main',
        buffers: [
          {
            arrayStride: 3 * 4,
            attributes: [{ shaderLocation: 0, offset: 0, format: 'float32x3' }],
          },
          {
            arrayStride: 3 * 4,
            attributes: [{ shaderLocation: 1, offset: 0, format: 'float32x3' }],
          },
          {
            arrayStride: 2 * 4,
            attributes: [{ shaderLocation: 2, offset: 0, format: 'float32x2' }],
          },
        ],
      },
      fragment: {
        module: fragmentShaderModule,
        entryPoint: 'fs_main',
        targets: [{ format: this.format }],
      },
      primitive: {
        topology: 'triangle-list',
        cullMode: 'back',
      },
      depthStencil: {
        depthWriteEnabled: true,
        depthCompare: 'less',
        format: 'depth24plus',
      },
    });
  }

  private async loadTexture(gltf: Gltf, baseUrl: string): Promise<void> {
    const textureIndex = gltf.materials?.[0]?.pbrMetallicRoughness?.baseColorTexture?.index ?? -1;
    const imageIndex = textureIndex >= 0 ? gltf.textures?.[textureIndex]?.source ?? -1 : -1;
    const imageUri = imageIndex >= 0 ? gltf.images?.[imageIndex]?.uri : undefined;

    if (!imageUri) {
      this.modelTexture = this.createSolidTexture([255, 255, 255, 255]);
      this.modelSampler = this.device.createSampler({ magFilter: 'linear', minFilter: 'linear' });
      return;
    }

    const imageUrl = baseUrl + imageUri;
    const imageBlob = await fetch(imageUrl).then((r) => r.blob());
    const bitmap = await createImageBitmap(imageBlob);

    this.modelTexture = this.device.createTexture({
      size: [bitmap.width, bitmap.height],
      format: 'rgba8unorm',
      usage:
        GPUTextureUsage.TEXTURE_BINDING |
        GPUTextureUsage.COPY_DST |
        GPUTextureUsage.RENDER_ATTACHMENT,
    });
    this.device.queue.copyExternalImageToTexture(
      { source: bitmap, flipY: true },
      { texture: this.modelTexture },
      { width: bitmap.width, height: bitmap.height }
    );

    const samplerIndex = textureIndex >= 0 ? gltf.textures?.[textureIndex]?.sampler ?? -1 : -1;
    const samplerDef = samplerIndex >= 0 ? gltf.samplers?.[samplerIndex] : undefined;
    this.modelSampler = this.device.createSampler({
      magFilter: this.mapFilter(samplerDef?.magFilter),
      minFilter: this.mapFilter(samplerDef?.minFilter),
      addressModeU: this.mapWrap(samplerDef?.wrapS),
      addressModeV: this.mapWrap(samplerDef?.wrapT),
    });
  }

  private createSolidTexture(color: [number, number, number, number]): GPUTexture {
    const texture = this.device.createTexture({
      size: [1, 1],
      format: 'rgba8unorm',
      usage: GPUTextureUsage.TEXTURE_BINDING | GPUTextureUsage.COPY_DST,
    });
    this.device.queue.writeTexture(
      { texture },
      new Uint8Array(color),
      { bytesPerRow: 4 },
      { width: 1, height: 1 }
    );
    return texture;
  }

  private mapFilter(filter?: number): GPUFilterMode {
    if (filter === 9729 || filter === 9986 || filter === 9987) return 'linear';
    return 'nearest';
  }

  private mapWrap(wrap?: number): GPUAddressMode {
    if (wrap === 10497) return 'repeat';
    if (wrap === 33648) return 'mirror-repeat';
    return 'clamp-to-edge';
  }

  private createBuffer(data: TypedArray, usage: GPUBufferUsageFlags): GPUBuffer {
    const buffer = this.device.createBuffer({
      size: data.byteLength,
      usage,
      mappedAtCreation: true,
    });
    if (data instanceof Float32Array) {
      new Float32Array(buffer.getMappedRange()).set(data);
    } else if (data instanceof Uint16Array) {
      new Uint16Array(buffer.getMappedRange()).set(data);
    } else {
      new Uint32Array(buffer.getMappedRange()).set(data);
    }
    buffer.unmap();
    return buffer;
  }

  private findFirstMeshPrimitive(gltf: Gltf): { nodeIndex: number; primitive: Gltf['meshes'][number]['primitives'][number] } {
    const nodes = gltf.nodes ?? [];
    const sceneIndex = gltf.scene ?? 0;
    const scene = gltf.scenes?.[sceneIndex];
    const roots = scene?.nodes ?? [];

    const stack = [...roots];
    while (stack.length) {
      const index = stack.pop()!;
      const node = nodes[index];
      if (!node) continue;
      if (node.mesh !== undefined && gltf.meshes?.[node.mesh]) {
        const primitive = gltf.meshes[node.mesh].primitives[0];
        return { nodeIndex: index, primitive };
      }
      if (node.children) {
        for (const child of node.children) stack.push(child);
      }
    }

    throw new Error('No mesh primitive found in GLTF.');
  }

  private getWorldMatrix(gltf: Gltf, nodeIndex: number): Float32Array {
    const nodes = gltf.nodes ?? [];
    const parents = new Map<number, number>();
    nodes.forEach((node, index) => {
      node.children?.forEach((child) => parents.set(child, index));
    });

    const buildLocalMatrix = (node: NonNullable<Gltf['nodes']>[number]): Float32Array => {
      if (node.matrix && node.matrix.length === 16) {
        const local = mat4.identity();
        local.set(node.matrix);
        return local;
      }

      const local = mat4.identity();
      if (node.translation) {
        mat4.translate(local, node.translation as [number, number, number], local);
      }
      if (node.rotation) {
        const [x, y, z, w] = node.rotation;
        const rot = mat4.fromQuat([x, y, z, w]);
        mat4.multiply(local, rot, local);
      }
      if (node.scale) {
        mat4.scale(local, node.scale as [number, number, number], local);
      }
      return local;
    };

    let world = mat4.identity();
    let current = nodeIndex;
    while (current !== undefined) {
      const node = nodes[current];
      if (!node) break;
      const local = buildLocalMatrix(node);
      world = mat4.multiply(local, world);
      current = parents.get(current) as number;
    }

    return world;
  }

  private readFloatAccessor(gltf: Gltf, buffer: ArrayBuffer, accessorIndex: number): Float32Array {
    const accessor = gltf.accessors![accessorIndex];
    const bufferView = gltf.bufferViews![accessor.bufferView];
    const componentCount = this.getComponentCount(accessor.type);
    const byteOffset = (bufferView.byteOffset ?? 0) + (accessor.byteOffset ?? 0);
    const stride = bufferView.byteStride ?? componentCount * 4;
    const elementCount = accessor.count;

    if (stride === componentCount * 4) {
      return new Float32Array(buffer, byteOffset, elementCount * componentCount);
    }

    const result = new Float32Array(elementCount * componentCount);
    const view = new DataView(buffer, byteOffset, stride * elementCount);
    for (let i = 0; i < elementCount; i++) {
      const base = i * stride;
      for (let c = 0; c < componentCount; c++) {
        result[i * componentCount + c] = view.getFloat32(base + c * 4, true);
      }
    }
    return result;
  }

  private readIndexAccessor(gltf: Gltf, buffer: ArrayBuffer, accessorIndex: number): Uint16Array | Uint32Array {
    const accessor = gltf.accessors![accessorIndex];
    const bufferView = gltf.bufferViews![accessor.bufferView];
    const byteOffset = (bufferView.byteOffset ?? 0) + (accessor.byteOffset ?? 0);
    if (accessor.componentType === 5125) {
      return new Uint32Array(buffer, byteOffset, accessor.count);
    }
    return new Uint16Array(buffer, byteOffset, accessor.count);
  }

  private getComponentCount(type: string): number {
    switch (type) {
      case 'SCALAR':
        return 1;
      case 'VEC2':
        return 2;
      case 'VEC3':
        return 3;
      case 'VEC4':
        return 4;
      default:
        return 3;
    }
  }

  private transformPositions(positions: Float32Array, matrix: Float32Array): Float32Array {
    const result = new Float32Array(positions.length);
    for (let i = 0; i < positions.length; i += 3) {
      const transformed = vec3.transformMat4([positions[i], positions[i + 1], positions[i + 2]], matrix);
      result[i] = transformed[0];
      result[i + 1] = transformed[1];
      result[i + 2] = transformed[2];
    }
    return result;
  }

  private transformNormals(normals: Float32Array, matrix: Float32Array): Float32Array {
    const result = new Float32Array(normals.length);
    for (let i = 0; i < normals.length; i += 3) {
      const x = normals[i];
      const y = normals[i + 1];
      const z = normals[i + 2];
      const nx = x * matrix[0] + y * matrix[4] + z * matrix[8];
      const ny = x * matrix[1] + y * matrix[5] + z * matrix[9];
      const nz = x * matrix[2] + y * matrix[6] + z * matrix[10];
      const len = Math.sqrt(nx * nx + ny * ny + nz * nz) || 1;
      result[i] = nx / len;
      result[i + 1] = ny / len;
      result[i + 2] = nz / len;
    }
    return result;
  }

  private centerAndNormalize(positions: Float32Array): { centered: number[]; radius: number } {
    const min = [Number.POSITIVE_INFINITY, Number.POSITIVE_INFINITY, Number.POSITIVE_INFINITY];
    const max = [Number.NEGATIVE_INFINITY, Number.NEGATIVE_INFINITY, Number.NEGATIVE_INFINITY];

    for (let i = 0; i < positions.length; i += 3) {
      const x = positions[i];
      const y = positions[i + 1];
      const z = positions[i + 2];
      min[0] = Math.min(min[0], x);
      min[1] = Math.min(min[1], y);
      min[2] = Math.min(min[2], z);
      max[0] = Math.max(max[0], x);
      max[1] = Math.max(max[1], y);
      max[2] = Math.max(max[2], z);
    }

    const center = [(min[0] + max[0]) / 2, (min[1] + max[1]) / 2, (min[2] + max[2]) / 2];
    let radius = 0;
    const centered: number[] = [];
    for (let i = 0; i < positions.length; i += 3) {
      const x = positions[i] - center[0];
      const y = positions[i + 1] - center[1];
      const z = positions[i + 2] - center[2];
      radius = Math.max(radius, Math.sqrt(x * x + y * y + z * z));
      centered.push(x, y, z);
    }

    return { centered, radius: radius || 1 };
  }

  private alignToBottom(positions: number[], padding: number): void {
    let minY = Number.POSITIVE_INFINITY;
    for (let i = 1; i < positions.length; i += 3) {
      minY = Math.min(minY, positions[i]);
    }
    const targetMinY = -1 - padding;
    const delta = targetMinY - minY;
    if (Math.abs(delta) < 1e-6) return;
    for (let i = 1; i < positions.length; i += 3) {
      positions[i] += delta;
    }
  }
}

type TypedArray = Float32Array | Uint16Array | Uint32Array;
