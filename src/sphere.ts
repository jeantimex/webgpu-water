export class Sphere {
  private device: GPUDevice;
  private format: GPUTextureFormat;
  private commonUniformBuffer: GPUBuffer;
  private sphereUniformBuffer: GPUBuffer;
  private lightUniformBuffer: GPUBuffer;
  private center: number[];
  private radius: number;
  private positionBuffer!: GPUBuffer;
  private indexBuffer!: GPUBuffer;
  private vertexCount!: number;
  private pipeline!: GPURenderPipeline;

  constructor(
    device: GPUDevice,
    format: GPUTextureFormat,
    uniformBuffer: GPUBuffer,
    lightUniformBuffer: GPUBuffer,
    sphereUniformBuffer: GPUBuffer
  ) {
    this.device = device;
    this.format = format;
    this.commonUniformBuffer = uniformBuffer;
    this.sphereUniformBuffer = sphereUniformBuffer;
    this.lightUniformBuffer = lightUniformBuffer;

    this.center = [0, 0, 0];
    this.radius = 1;

    this.createGeometry();
    this.createPipeline();
  }

  update(center: number[], radius: number): void {
    this.center = center;
    this.radius = radius;

    // Update sphere specific uniforms
    const data = new Float32Array(4);
    data.set(this.center, 0);
    data[3] = this.radius;

    this.device.queue.writeBuffer(this.sphereUniformBuffer, 0, data);
  }

  private createGeometry(): void {
    const detail = 10;

    class Indexer {
      unique: number[][];
      map: Map<string, number>;

      constructor() {
        this.unique = [];
        this.map = new Map();
      }

      add(v: number[]): number {
        const key = v.join(',');
        if (!this.map.has(key)) {
          this.map.set(key, this.unique.length);
          this.unique.push(v);
        }
        return this.map.get(key)!;
      }
    }

    function pickOctant(i: number): [number, number, number] {
      return [
        (i & 1) * 2 - 1,
        (i & 2) - 1,
        (i & 4) / 2 - 1
      ];
    }

    function fix(x: number): number { return x + (x - x * x) / 2; }

    const indexer = new Indexer();
    const finalIndices: number[] = [];

    for (let octant = 0; octant < 8; octant++) {
      const scale = pickOctant(octant);
      const flip = scale[0] * scale[1] * scale[2] > 0;
      const data: number[] = [];

      for (let i = 0; i <= detail; i++) {
        for (let j = 0; i + j <= detail; j++) {
          const a = i / detail;
          const b = j / detail;
          const c = (detail - i - j) / detail;
          const v = [fix(a), fix(b), fix(c)];
          const len = Math.sqrt(v[0] * v[0] + v[1] * v[1] + v[2] * v[2]);
          const pos = [
            (v[0] / len) * scale[0],
            (v[1] / len) * scale[1],
            (v[2] / len) * scale[2]
          ];
          data.push(indexer.add(pos));
        }
      }

      for (let i = 0; i <= detail; i++) {
        if (i > 0) {
          for (let j = 0; i + j <= detail; j++) {
            const a = (i - 1) * (detail + 1) + ((i - 1) - (i - 1) * (i - 1)) / 2 + j;
            const b = i * (detail + 1) + (i - i * i) / 2 + j;

            if (flip) {
              finalIndices.push(data[a], data[b], data[a + 1]);
            } else {
              finalIndices.push(data[a], data[a + 1], data[b]);
            }

            if (i + j < detail) {
              if (flip) {
                finalIndices.push(data[b], data[b + 1], data[a + 1]);
              } else {
                finalIndices.push(data[b], data[a + 1], data[b + 1]);
              }
            }
          }
        }
      }
    }

    this.vertexCount = finalIndices.length;
    const finalPositions: number[] = [];
    for (const p of indexer.unique) {
      finalPositions.push(...p);
    }

    this.positionBuffer = this.device.createBuffer({
      label: 'Sphere Vertex Buffer',
      size: finalPositions.length * 4,
      usage: GPUBufferUsage.VERTEX,
      mappedAtCreation: true,
    });
    new Float32Array(this.positionBuffer.getMappedRange()).set(finalPositions);
    this.positionBuffer.unmap();

    this.indexBuffer = this.device.createBuffer({
      label: 'Sphere Index Buffer',
      size: finalIndices.length * 4,
      usage: GPUBufferUsage.INDEX,
      mappedAtCreation: true,
    });
    new Uint32Array(this.indexBuffer.getMappedRange()).set(finalIndices);
    this.indexBuffer.unmap();
  }

  private createPipeline(): void {
    const shaderModule = this.device.createShaderModule({
      label: 'Sphere Shader',
      code: `
        struct CommonUniforms {
          viewProjectionMatrix : mat4x4f,
        }
        @binding(0) @group(0) var<uniform> commonUniforms : CommonUniforms;

        struct SphereUniforms {
          center : vec3f,
          radius : f32,
        }
        @binding(1) @group(0) var<uniform> sphereUniforms : SphereUniforms;

        struct LightUniforms {
           direction : vec3f,
        }
        @binding(2) @group(0) var<uniform> light : LightUniforms;

        @binding(3) @group(0) var waterSampler : sampler;
        @binding(4) @group(0) var waterTexture : texture_2d<f32>;
        @binding(5) @group(0) var causticTexture : texture_2d<f32>;

        struct VertexOutput {
          @builtin(position) position : vec4f,
          @location(0) localPos : vec3f,
          @location(1) worldPos : vec3f,
        }

        @vertex
        fn vs_main(@location(0) position : vec3f) -> VertexOutput {
          var output : VertexOutput;

          let worldPos = sphereUniforms.center + position * sphereUniforms.radius;
          output.position = commonUniforms.viewProjectionMatrix * vec4f(worldPos, 1.0);
          output.localPos = position;
          output.worldPos = worldPos;
          return output;
        }

        @fragment
        fn fs_main(@location(0) localPos : vec3f, @location(1) worldPos : vec3f) -> @location(0) vec4f {
          let IOR_AIR = 1.0;
          let IOR_WATER = 1.333;

          var color = vec3f(0.5);

          let sphereRadius = sphereUniforms.radius;
          let point = worldPos;

          let dist_x = (1.0 + sphereRadius - abs(point.x)) / sphereRadius;
          let dist_z = (1.0 + sphereRadius - abs(point.z)) / sphereRadius;
          let dist_y = (point.y + 1.0 + sphereRadius) / sphereRadius;

          color *= 1.0 - 0.9 / pow(max(0.1, dist_x), 3.0);
          color *= 1.0 - 0.9 / pow(max(0.1, dist_z), 3.0);
          color *= 1.0 - 0.9 / pow(max(0.1, dist_y), 3.0);

          let refractedLight = refract(-light.direction, vec3f(0.0, 1.0, 0.0), IOR_AIR / IOR_WATER);
          let sphereNormal = normalize(localPos);

          var diffuse = max(0.0, dot(-refractedLight, sphereNormal)) * 0.5;

          let waterInfo = textureSampleLevel(waterTexture, waterSampler, point.xz * 0.5 + 0.5, 0.0);

          if (point.y < waterInfo.r) {
             let causticUV = 0.75 * (point.xz - point.y * refractedLight.xz / refractedLight.y) * 0.5 + 0.5;
             let caustic = textureSampleLevel(causticTexture, waterSampler, causticUV, 0.0);
             diffuse *= caustic.r * 4.0;
          }

          color += diffuse;

          // Underwater tint
          if (point.y < waterInfo.r) {
             let underwaterColor = vec3f(0.4, 0.9, 1.0);
             color *= underwaterColor * 1.2;
          }

          return vec4f(color, 1.0);
        }
      `
    });

    this.pipeline = this.device.createRenderPipeline({
      label: 'Sphere Pipeline',
      layout: 'auto',
      vertex: {
        module: shaderModule,
        entryPoint: 'vs_main',
        buffers: [{
          arrayStride: 3 * 4,
          attributes: [{
            shaderLocation: 0,
            offset: 0,
            format: 'float32x3'
          }]
        }]
      },
      fragment: {
        module: shaderModule,
        entryPoint: 'fs_main',
        targets: [{ format: this.format }]
      },
      primitive: {
        topology: 'triangle-list',
        cullMode: 'back',
      },
      depthStencil: {
        depthWriteEnabled: true,
        depthCompare: 'less',
        format: 'depth24plus',
      }
    });
  }

  render(passEncoder: GPURenderPassEncoder, waterTexture: GPUTexture, waterSampler: GPUSampler, causticsTexture: GPUTexture): void {
    const bindGroup = this.device.createBindGroup({
      layout: this.pipeline.getBindGroupLayout(0),
      entries: [
        { binding: 0, resource: { buffer: this.commonUniformBuffer } },
        { binding: 1, resource: { buffer: this.sphereUniformBuffer } },
        { binding: 2, resource: { buffer: this.lightUniformBuffer } },
        { binding: 3, resource: waterSampler },
        { binding: 4, resource: waterTexture.createView() },
        { binding: 5, resource: causticsTexture.createView() }
      ]
    });

    passEncoder.setPipeline(this.pipeline);
    passEncoder.setBindGroup(0, bindGroup);
    passEncoder.setVertexBuffer(0, this.positionBuffer);
    passEncoder.setIndexBuffer(this.indexBuffer, 'uint32');
    passEncoder.drawIndexed(this.vertexCount);
  }
}
