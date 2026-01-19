export class Pool {
  private device: GPUDevice;
  private format: GPUTextureFormat;
  private uniformBuffer: GPUBuffer;
  private tileTexture: GPUTexture;
  private tileSampler: GPUSampler;
  private lightUniformBuffer: GPUBuffer;
  private sphereUniformBuffer: GPUBuffer;
  private shadowUniformBuffer: GPUBuffer;
  private positionBuffer!: GPUBuffer;
  private indexBuffer!: GPUBuffer;
  private vertexCount!: number;
  private pipeline!: GPURenderPipeline;

  constructor(
    device: GPUDevice,
    format: GPUTextureFormat,
    uniformBuffer: GPUBuffer,
    tileTexture: GPUTexture,
    tileSampler: GPUSampler,
    lightUniformBuffer: GPUBuffer,
    sphereUniformBuffer: GPUBuffer,
    shadowUniformBuffer: GPUBuffer
  ) {
    this.device = device;
    this.format = format;

    // Store resources for per-frame bind group creation
    this.uniformBuffer = uniformBuffer;
    this.tileTexture = tileTexture;
    this.tileSampler = tileSampler;
    this.lightUniformBuffer = lightUniformBuffer;
    this.sphereUniformBuffer = sphereUniformBuffer;
    this.shadowUniformBuffer = shadowUniformBuffer;

    this.createGeometry();
    this.createPipeline();
  }

  private createGeometry(): void {
    function pickOctant(i: number): [number, number, number] {
      return [
        (i & 1) * 2 - 1,
        (i & 2) - 1,
        (i & 4) / 2 - 1
      ];
    }

    const cubeData = [
      [0, 4, 2, 6, -1, 0, 0], // -x
      [1, 3, 5, 7, +1, 0, 0], // +x
      // [0, 1, 4, 5, 0, -1, 0], // -y (REMOVED)
      [2, 6, 3, 7, 0, +1, 0], // +y
      [0, 2, 1, 3, 0, 0, -1], // -z
      [4, 5, 6, 7, 0, 0, +1]  // +z
    ];

    const positions: number[] = [];
    const indices: number[] = [];
    let vertexCount = 0;

    for (const data of cubeData) {
      const vOffset = vertexCount;
      for (let j = 0; j < 4; j++) {
        const d = data[j];
        const pos = pickOctant(d);
        positions.push(...pos);
        vertexCount++;
      }
      indices.push(vOffset + 0, vOffset + 1, vOffset + 2);
      indices.push(vOffset + 2, vOffset + 1, vOffset + 3);
    }

    this.vertexCount = indices.length;

    this.positionBuffer = this.device.createBuffer({
      label: 'Pool Vertex Buffer',
      size: positions.length * 4,
      usage: GPUBufferUsage.VERTEX,
      mappedAtCreation: true,
    });
    new Float32Array(this.positionBuffer.getMappedRange()).set(positions);
    this.positionBuffer.unmap();

    this.indexBuffer = this.device.createBuffer({
      label: 'Pool Index Buffer',
      size: indices.length * 4,
      usage: GPUBufferUsage.INDEX,
      mappedAtCreation: true,
    });
    new Uint32Array(this.indexBuffer.getMappedRange()).set(indices);
    this.indexBuffer.unmap();
  }

  private createPipeline(): void {
    const shaderModule = this.device.createShaderModule({
      label: 'Pool Shader',
      code: `
        struct Uniforms {
          modelViewProjectionMatrix : mat4x4f,
          eyePosition : vec3f,
        }
        @binding(0) @group(0) var<uniform> uniforms : Uniforms;
        @binding(1) @group(0) var tileSampler : sampler;
        @binding(2) @group(0) var tileTexture : texture_2d<f32>;

        struct LightUniforms {
           direction : vec3f,
        }
        @binding(3) @group(0) var<uniform> light : LightUniforms;

        struct SphereUniforms {
          center : vec3f,
          radius : f32,
        }
        @binding(4) @group(0) var<uniform> sphere : SphereUniforms;

        struct ShadowUniforms {
            rim : f32,
            sphere : f32,
            ao : f32,
        }
        @binding(8) @group(0) var<uniform> shadows : ShadowUniforms;

        @binding(5) @group(0) var waterSampler : sampler;
        @binding(6) @group(0) var waterTexture : texture_2d<f32>;
        @binding(7) @group(0) var causticTexture : texture_2d<f32>;

        struct VertexOutput {
          @builtin(position) position : vec4f,
          @location(0) localPos : vec3f,
        }

        // Helper functions
        fn intersectCube(origin: vec3f, ray: vec3f, cubeMin: vec3f, cubeMax: vec3f) -> vec2f {
          let tMin = (cubeMin - origin) / ray;
          let tMax = (cubeMax - origin) / ray;
          let t1 = min(tMin, tMax);
          let t2 = max(tMin, tMax);
          let tNear = max(max(t1.x, t1.y), t1.z);
          let tFar = min(min(t2.x, t2.y), t2.z);
          return vec2f(tNear, tFar);
        }

        @vertex
        fn vs_main(@location(0) position : vec3f) -> VertexOutput {
          var output : VertexOutput;

          var transformedPos = position;
          transformedPos.y = ((1.0 - position.y) * (7.0 / 12.0) - 1.0);

          output.position = uniforms.modelViewProjectionMatrix * vec4f(transformedPos, 1.0);
          output.localPos = transformedPos;
          return output;
        }

        @fragment
        fn fs_main(@location(0) localPos : vec3f) -> @location(0) vec4f {
          var wallColor : vec3f;
          let point = localPos;

          if (abs(point.x) > 0.999) {
            wallColor = textureSampleLevel(tileTexture, tileSampler, point.yz * 0.5 + vec2f(1.0, 0.5), 0.0).rgb;
          } else if (abs(point.z) > 0.999) {
            wallColor = textureSampleLevel(tileTexture, tileSampler, point.yx * 0.5 + vec2f(1.0, 0.5), 0.0).rgb;
          } else {
            wallColor = textureSampleLevel(tileTexture, tileSampler, point.xz * 0.5 + 0.5, 0.0).rgb;
          }

          let IOR_AIR = 1.0;
          let IOR_WATER = 1.333;
          let poolHeight = 1.0;

          var normal = vec3f(0.0, 1.0, 0.0);
          if (abs(point.x) > 0.999) { normal = vec3f(-point.x, 0.0, 0.0); }
          else if (abs(point.z) > 0.999) { normal = vec3f(0.0, 0.0, -point.z); }

          var scale = 0.5;

          // Pool ambient occlusion
          let poolAO = 1.0 / length(point);
          scale *= mix(1.0, poolAO, shadows.ao);

          // Sphere ambient occlusion (Replaces analytic shadow, keeps sphere uniform used)
          let dist = length(point - sphere.center) / sphere.radius;
          let sphereAO = 1.0 - 0.9 / pow(max(0.0, dist), 4.0);
          scale *= mix(1.0, sphereAO, shadows.sphere);

          let refractedLight = -refract(-light.direction, vec3f(0.0, 1.0, 0.0), IOR_AIR / IOR_WATER);

          let diffuse = max(0.0, dot(refractedLight, normal));

          let waterInfo = textureSampleLevel(waterTexture, waterSampler, point.xz * 0.5 + 0.5, 0.0);

          if (point.y < waterInfo.r) {
             // Underwater: Use caustics
             let causticUV = 0.75 * (point.xz - point.y * refractedLight.xz / refractedLight.y) * 0.5 + 0.5;
             let caustic = textureSampleLevel(causticTexture, tileSampler, causticUV, 0.0);

             var intensity = caustic.r;
             var sphereShadow = caustic.g;

             // Heuristic: If Rim Shadow is OFF, fill the black void (outside mesh) with ambient light
             if (shadows.rim < 0.5 && intensity < 0.001) {
                 intensity = 0.2;
                 sphereShadow = 1.0;
             }

             scale += diffuse * intensity * 2.0 * sphereShadow;
          } else {
             // Above water: Rim shadow
             let t = intersectCube(point, refractedLight, vec3f(-1.0, -poolHeight, -1.0), vec3f(1.0, 2.0, 1.0));
             let shadowFactor = 1.0 / (1.0 + exp(-200.0 / (1.0 + 10.0 * (t.y - t.x)) * (point.y + refractedLight.y * t.y - 2.0 / 12.0)));
             scale += diffuse * mix(1.0, shadowFactor, shadows.rim) * 0.5;
          }

          var finalColor = wallColor * scale;

          if (point.y < waterInfo.r) {
             let underwaterColor = vec3f(0.4, 0.9, 1.0);
             finalColor *= underwaterColor * 1.2;
          }

          return vec4f(finalColor, 1.0);
        }
      `
    });

    this.pipeline = this.device.createRenderPipeline({
      label: 'Pool Pipeline',
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
        { binding: 0, resource: { buffer: this.uniformBuffer } },
        { binding: 1, resource: this.tileSampler },
        { binding: 2, resource: this.tileTexture.createView() },
        { binding: 3, resource: { buffer: this.lightUniformBuffer } },
        { binding: 4, resource: { buffer: this.sphereUniformBuffer } },
        { binding: 5, resource: waterSampler },
        { binding: 6, resource: waterTexture.createView() },
        { binding: 7, resource: causticsTexture.createView() },
        { binding: 8, resource: { buffer: this.shadowUniformBuffer } }
      ]
    });

    passEncoder.setPipeline(this.pipeline);
    passEncoder.setBindGroup(0, bindGroup);
    passEncoder.setVertexBuffer(0, this.positionBuffer);
    passEncoder.setIndexBuffer(this.indexBuffer, 'uint32');
    passEncoder.drawIndexed(this.vertexCount);
  }
}
