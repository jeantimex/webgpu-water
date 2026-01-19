import type { PipelineConfig } from './types';

export class Water {
  private device: GPUDevice;
  private width: number;
  private height: number;

  // External resources
  private commonUniformBuffer: GPUBuffer;
  private lightUniformBuffer: GPUBuffer;
  private sphereUniformBuffer: GPUBuffer;
  private shadowUniformBuffer: GPUBuffer;
  private tileTexture: GPUTexture;
  private tileSampler: GPUSampler;
  private skyTexture: GPUTexture;
  private skySampler: GPUSampler;

  // Physics state
  textureA: GPUTexture;
  textureB: GPUTexture;
  causticsTexture: GPUTexture;
  sampler: GPUSampler;

  // Pipelines
  private dropPipeline!: PipelineConfig;
  private updatePipeline!: PipelineConfig;
  private normalPipeline!: PipelineConfig;
  private spherePipeline!: PipelineConfig;

  // Surface rendering
  private positionBuffer!: GPUBuffer;
  private indexBuffer!: GPUBuffer;
  private vertexCount!: number;
  private surfaceBindGroupLayout!: GPUBindGroupLayout;
  private surfacePipelineAbove!: GPURenderPipeline;
  private surfacePipelineUnder!: GPURenderPipeline;

  // Caustics
  private causticsPipeline!: GPURenderPipeline;

  constructor(
    device: GPUDevice,
    width: number,
    height: number,
    uniformBuffer: GPUBuffer,
    lightUniformBuffer: GPUBuffer,
    sphereUniformBuffer: GPUBuffer,
    shadowUniformBuffer: GPUBuffer,
    tileTexture: GPUTexture,
    tileSampler: GPUSampler,
    skyTexture: GPUTexture,
    skySampler: GPUSampler
  ) {
    this.device = device;
    this.width = width;
    this.height = height;

    // External resources
    this.commonUniformBuffer = uniformBuffer;
    this.lightUniformBuffer = lightUniformBuffer;
    this.sphereUniformBuffer = sphereUniformBuffer;
    this.shadowUniformBuffer = shadowUniformBuffer;
    this.tileTexture = tileTexture;
    this.tileSampler = tileSampler;
    this.skyTexture = skyTexture;
    this.skySampler = skySampler;

    // Physics state
    this.textureA = this.createTexture();
    this.textureB = this.createTexture();

    // Caustics Texture (Higher res for detail)
    this.causticsTexture = this.device.createTexture({
      size: [1024, 1024],
      format: 'rgba8unorm',
      usage: GPUTextureUsage.TEXTURE_BINDING | GPUTextureUsage.RENDER_ATTACHMENT,
    });

    this.sampler = device.createSampler({
      magFilter: 'linear',
      minFilter: 'linear',
      addressModeU: 'clamp-to-edge',
      addressModeV: 'clamp-to-edge',
    });

    this.createPipelines();
    this.createSurfaceMesh();
    this.createSurfacePipeline();
    this.createCausticsPipeline();
  }

  private createTexture(): GPUTexture {
    const format = this.device.features.has('float32-filterable') ? 'rgba32float' : 'rgba16float';
    return this.device.createTexture({
      size: [this.width, this.height],
      format: format,
      usage: GPUTextureUsage.TEXTURE_BINDING | GPUTextureUsage.RENDER_ATTACHMENT,
    });
  }

  private createPipelines(): void {
    const format: GPUTextureFormat = this.device.features.has('float32-filterable') ? 'rgba32float' : 'rgba16float';
    const fullscreenQuadVS = `
      struct VertexOutput {
        @builtin(position) position : vec4f,
        @location(0) uv : vec2f,
      }

      @vertex
      fn vs_main(@builtin(vertex_index) vertexIndex : u32) -> VertexOutput {
        var pos = array<vec2f, 6>(
          vec2f(-1.0, -1.0), vec2f(1.0, -1.0), vec2f(-1.0, 1.0),
          vec2f(-1.0, 1.0), vec2f(1.0, -1.0), vec2f(1.0, 1.0)
        );
        var output : VertexOutput;
        output.position = vec4f(pos[vertexIndex], 0.0, 1.0);
        output.uv = vec2f((pos[vertexIndex].x + 1.0) * 0.5, (1.0 - pos[vertexIndex].y) * 0.5);
        return output;
      }
    `;

    // Drop Shader
    this.dropPipeline = this.createPipeline('Drop', fullscreenQuadVS, `
      @group(0) @binding(0) var waterTexture : texture_2d<f32>;
      @group(0) @binding(1) var waterSampler : sampler;

      struct DropUniforms {
        center : vec2f,
        radius : f32,
        strength : f32,
      }
      @group(0) @binding(2) var<uniform> u : DropUniforms;

      @fragment
      fn fs_main(@location(0) uv : vec2f) -> @location(0) vec4f {
        var info = textureSample(waterTexture, waterSampler, uv);

        let drop = max(0.0, 1.0 - length(u.center * 0.5 + 0.5 - uv) / u.radius);
        let dropVal = 0.5 - cos(drop * 3.14159265) * 0.5;

        info.r += dropVal * u.strength;

        return info;
      }
    `, 32, format);

    // Update Shader
    this.updatePipeline = this.createPipeline('Update', fullscreenQuadVS, `
      @group(0) @binding(0) var waterTexture : texture_2d<f32>;
      @group(0) @binding(1) var waterSampler : sampler;

      struct UpdateUniforms {
        delta : vec2f,
      }
      @group(0) @binding(2) var<uniform> u : UpdateUniforms;

      @fragment
      fn fs_main(@location(0) uv : vec2f) -> @location(0) vec4f {
        var info = textureSample(waterTexture, waterSampler, uv);

        let dx = vec2f(u.delta.x, 0.0);
        let dy = vec2f(0.0, u.delta.y);

        let average = (
          textureSample(waterTexture, waterSampler, uv - dx).r +
          textureSample(waterTexture, waterSampler, uv - dy).r +
          textureSample(waterTexture, waterSampler, uv + dx).r +
          textureSample(waterTexture, waterSampler, uv + dy).r
        ) * 0.25;

        info.g += (average - info.r) * 2.0;
        info.g *= 0.995;
        info.r += info.g;

        return info;
      }
    `, 16, format);

    // Normal Shader
    this.normalPipeline = this.createPipeline('Normal', fullscreenQuadVS, `
      @group(0) @binding(0) var waterTexture : texture_2d<f32>;
      @group(0) @binding(1) var waterSampler : sampler;

      struct NormalUniforms {
        delta : vec2f,
      }
      @group(0) @binding(2) var<uniform> u : NormalUniforms;

      @fragment
      fn fs_main(@location(0) uv : vec2f) -> @location(0) vec4f {
        var info = textureSample(waterTexture, waterSampler, uv);

        let val_dx = textureSample(waterTexture, waterSampler, vec2f(uv.x + u.delta.x, uv.y)).r;
        let val_dy = textureSample(waterTexture, waterSampler, vec2f(uv.x, uv.y + u.delta.y)).r;

        let dx = vec3f(u.delta.x, val_dx - info.r, 0.0);
        let dy = vec3f(0.0, val_dy - info.r, u.delta.y);

        let normal = normalize(cross(dy, dx));
        info.b = normal.x;
        info.a = normal.z;

        return info;
      }
    `, 16, format);

    // Sphere Interaction Shader
    this.spherePipeline = this.createPipeline('Sphere', fullscreenQuadVS, `
      @group(0) @binding(0) var waterTexture : texture_2d<f32>;
      @group(0) @binding(1) var waterSampler : sampler;

      struct SphereUniforms {
        oldCenter : vec3f,
        radius : f32,
        newCenter : vec3f,
        padding : f32,
      }
      @group(0) @binding(2) var<uniform> u : SphereUniforms;

      fn volumeInSphere(center : vec3f, uv : vec2f, radius : f32) -> f32 {
        let p = vec3f(uv.x * 2.0 - 1.0, 0.0, uv.y * 2.0 - 1.0);
        let dist = length(p - center);
        let t = dist / radius;

        let dy = exp(-pow(t * 1.5, 6.0));
        let ymin = min(0.0, center.y - dy);
        let ymax = min(max(0.0, center.y + dy), ymin + 2.0 * dy);
        return (ymax - ymin) * 0.1;
      }

      @fragment
      fn fs_main(@location(0) uv : vec2f) -> @location(0) vec4f {
        var info = textureSample(waterTexture, waterSampler, uv);

        info.r += volumeInSphere(u.oldCenter, uv, u.radius);
        info.r -= volumeInSphere(u.newCenter, uv, u.radius);

        return info;
      }
    `, 32, format);
  }

  private createPipeline(label: string, vsCode: string, fsCode: string, uniformSize: number, format: GPUTextureFormat): PipelineConfig {
    const module = this.device.createShaderModule({
      label: label + ' Module',
      code: vsCode + fsCode
    });

    const pipeline = this.device.createRenderPipeline({
      label: label + ' Pipeline',
      layout: 'auto',
      vertex: {
        module: module,
        entryPoint: 'vs_main',
      },
      fragment: {
        module: module,
        entryPoint: 'fs_main',
        targets: [{ format: format }]
      },
      primitive: {
        topology: 'triangle-list',
      }
    });

    return {
      pipeline,
      uniformSize,
      uniformBuffer: this.device.createBuffer({
        size: uniformSize,
        usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST,
      })
    };
  }

  private runPipeline(pipelineObj: PipelineConfig, uniformsData: Float32Array<ArrayBuffer>): void {
    this.device.queue.writeBuffer(pipelineObj.uniformBuffer, 0, uniformsData);

    const bindGroup = this.device.createBindGroup({
      layout: pipelineObj.pipeline.getBindGroupLayout(0),
      entries: [
        { binding: 0, resource: this.textureA.createView() },
        { binding: 1, resource: this.sampler },
        { binding: 2, resource: { buffer: pipelineObj.uniformBuffer } }
      ]
    });

    const encoder = this.device.createCommandEncoder();
    const pass = encoder.beginRenderPass({
      colorAttachments: [{
        view: this.textureB.createView(),
        loadOp: 'clear',
        storeOp: 'store',
        clearValue: { r: 0, g: 0, b: 0, a: 0 }
      }]
    });

    pass.setPipeline(pipelineObj.pipeline);
    pass.setBindGroup(0, bindGroup);
    pass.draw(6);
    pass.end();

    this.device.queue.submit([encoder.finish()]);

    const temp = this.textureA;
    this.textureA = this.textureB;
    this.textureB = temp;
  }

  addDrop(x: number, y: number, radius: number, strength: number): void {
    const data = new Float32Array(4);
    data[0] = x; data[1] = y;
    data[2] = radius;
    data[3] = strength;
    this.runPipeline(this.dropPipeline, data);
  }

  stepSimulation(): void {
    const data = new Float32Array(2);
    data[0] = 1.0 / this.width;
    data[1] = 1.0 / this.height;
    this.runPipeline(this.updatePipeline, data);
  }

  updateNormals(): void {
    const data = new Float32Array(2);
    data[0] = 1.0 / this.width;
    data[1] = 1.0 / this.height;
    this.runPipeline(this.normalPipeline, data);
  }

  moveSphere(oldCenter: number[], newCenter: number[], radius: number): void {
    const data = new Float32Array(8);
    data[0] = oldCenter[0]; data[1] = oldCenter[1]; data[2] = oldCenter[2];
    data[3] = radius;
    data[4] = newCenter[0]; data[5] = newCenter[1]; data[6] = newCenter[2];
    data[7] = 0;
    this.runPipeline(this.spherePipeline, data);
  }

  // --- Surface Rendering ---

  private createSurfaceMesh(): void {
    const detail = 200;
    const positions: number[] = [];
    const indices: number[] = [];

    // Generate plane from -1 to 1 on X and Z
    for (let z = 0; z <= detail; z++) {
      const t = z / detail;
      for (let x = 0; x <= detail; x++) {
        const s = x / detail;
        positions.push(2 * s - 1, 2 * t - 1, 0);
      }
    }

    for (let z = 0; z < detail; z++) {
      for (let x = 0; x < detail; x++) {
        const i = x + z * (detail + 1);
        indices.push(i, i + 1, i + detail + 1);
        indices.push(i + detail + 1, i + 1, i + detail + 2);
      }
    }

    this.vertexCount = indices.length;

    this.positionBuffer = this.device.createBuffer({
      label: 'Water Surface Vertices',
      size: positions.length * 4,
      usage: GPUBufferUsage.VERTEX,
      mappedAtCreation: true,
    });
    new Float32Array(this.positionBuffer.getMappedRange()).set(positions);
    this.positionBuffer.unmap();

    this.indexBuffer = this.device.createBuffer({
      label: 'Water Surface Indices',
      size: indices.length * 4,
      usage: GPUBufferUsage.INDEX,
      mappedAtCreation: true,
    });
    new Uint32Array(this.indexBuffer.getMappedRange()).set(indices);
    this.indexBuffer.unmap();
  }

  private createSurfacePipeline(): void {
    const shaderCode = (isUnderwater: boolean): string => `
        struct CommonUniforms {
          viewProjectionMatrix : mat4x4f,
          eyePosition : vec3f,
        }
        @binding(0) @group(0) var<uniform> commonUniforms : CommonUniforms;

        struct LightUniforms {
           direction : vec3f,
        }
        @binding(1) @group(0) var<uniform> light : LightUniforms;

        struct SphereUniforms {
          center : vec3f,
          radius : f32,
        }
        @binding(2) @group(0) var<uniform> sphere : SphereUniforms;

        @binding(3) @group(0) var tileSampler : sampler;
        @binding(4) @group(0) var tileTexture : texture_2d<f32>;
        @binding(5) @group(0) var waterSampler : sampler;
        @binding(6) @group(0) var waterTexture : texture_2d<f32>;

        // Skybox
        @binding(7) @group(0) var skySampler : sampler;
        @binding(8) @group(0) var skyTexture : texture_cube<f32>;
        @binding(9) @group(0) var causticTexture : texture_2d<f32>;

        const IOR_AIR : f32 = 1.0;
        const IOR_WATER : f32 = 1.333;
        const ABOVewaterColor : vec3f = vec3f(0.25, 1.0, 1.25);
        const UNDERwaterColor : vec3f = vec3f(0.4, 0.9, 1.0);

        struct VertexOutput {
          @builtin(position) position : vec4f,
          @location(0) worldPos : vec3f,
        }

        @vertex
        fn vs_main(@location(0) position : vec3f) -> VertexOutput {
          var output : VertexOutput;

          let uv = position.xy * 0.5 + 0.5;
          let info = textureSampleLevel(waterTexture, waterSampler, uv, 0.0);

          var pos = position.xzy;
          pos.y = info.r;

          output.worldPos = pos;
          output.position = commonUniforms.viewProjectionMatrix * vec4f(pos, 1.0);

          return output;
        }

        fn intersectCube(origin: vec3f, ray: vec3f, cubeMin: vec3f, cubeMax: vec3f) -> vec2f {
          let tMin = (cubeMin - origin) / ray;
          let tMax = (cubeMax - origin) / ray;
          let t1 = min(tMin, tMax);
          let t2 = max(tMin, tMax);
          let tNear = max(max(t1.x, t1.y), t1.z);
          let tFar = min(min(t2.x, t2.y), t2.z);
          return vec2f(tNear, tFar);
        }

        fn intersectSphere(origin: vec3f, ray: vec3f, sphereCenter: vec3f, sphereRadius: f32) -> f32 {
            let toSphere = origin - sphereCenter;
            let a = dot(ray, ray);
            let b = 2.0 * dot(toSphere, ray);
            let c = dot(toSphere, toSphere) - sphereRadius * sphereRadius;
            let discriminant = b*b - 4.0*a*c;
            if (discriminant > 0.0) {
              let t = (-b - sqrt(discriminant)) / (2.0 * a);
              if (t > 0.0) { return t; }
            }
            return 1.0e6;
        }

        fn getSphereColor(point: vec3f, IOR_AIR: f32, IOR_WATER: f32) -> vec3f {
            var color = vec3f(0.5);
            let sphereRadius = sphere.radius;
            color *= 1.0 - 0.9 / pow((1.0 + sphereRadius - abs(point.x)) / sphereRadius, 3.0);
            color *= 1.0 - 0.9 / pow((1.0 + sphereRadius - abs(point.z)) / sphereRadius, 3.0);
            color *= 1.0 - 0.9 / pow((point.y + 1.0 + sphereRadius) / sphereRadius, 3.0);

            let sphereNormal = (point - sphere.center) / sphereRadius;
            let refractedLight = refract(-light.direction, vec3f(0.0, 1.0, 0.0), IOR_AIR / IOR_WATER);
            var diffuse = max(0.0, dot(-refractedLight, sphereNormal)) * 0.5;
            let info = textureSampleLevel(waterTexture, waterSampler, point.xz * 0.5 + 0.5, 0.0);
            if (point.y < info.r) {
                let causticUV = 0.75 * (point.xz - point.y * refractedLight.xz / refractedLight.y) * 0.5 + 0.5;
                let caustic = textureSampleLevel(causticTexture, waterSampler, causticUV, 0.0);
                diffuse *= caustic.r * 4.0;
            }
            color += diffuse;
            return color;
        }

        fn getWallColor(point: vec3f, IOR_AIR: f32, IOR_WATER: f32, poolHeight: f32) -> vec3f {
            var wallColor : vec3f;
            var normal = vec3f(0.0, 1.0, 0.0);
            if (abs(point.x) > 0.999) {
                wallColor = textureSampleLevel(tileTexture, tileSampler, point.yz * 0.5 + vec2f(1.0, 0.5), 0.0).rgb;
                normal = vec3f(-point.x, 0.0, 0.0);
            } else if (abs(point.z) > 0.999) {
                wallColor = textureSampleLevel(tileTexture, tileSampler, point.yx * 0.5 + vec2f(1.0, 0.5), 0.0).rgb;
                normal = vec3f(0.0, 0.0, -point.z);
            } else {
                wallColor = textureSampleLevel(tileTexture, tileSampler, point.xz * 0.5 + 0.5, 0.0).rgb;
            }

            var scale = 0.5;
            scale /= length(point);
            scale *= 1.0 - 0.9 / pow(length(point - sphere.center) / sphere.radius, 4.0);

            let refractedLight = -refract(-light.direction, vec3f(0.0, 1.0, 0.0), IOR_AIR / IOR_WATER);
            var diffuse = max(0.0, dot(refractedLight, normal));
            let info = textureSampleLevel(waterTexture, waterSampler, point.xz * 0.5 + 0.5, 0.0);
            if (point.y < info.r) {
                let causticUV = 0.75 * (point.xz - point.y * refractedLight.xz / refractedLight.y) * 0.5 + 0.5;
                let caustic = textureSampleLevel(causticTexture, waterSampler, causticUV, 0.0);
                scale += diffuse * caustic.r * 2.0 * caustic.g;
            } else {
                let t = intersectCube(point, refractedLight, vec3f(-1.0, -poolHeight, -1.0), vec3f(1.0, 2.0, 1.0));
                diffuse *= 1.0 / (1.0 + exp(-200.0 / (1.0 + 10.0 * (t.y - t.x)) * (point.y + refractedLight.y * t.y - 2.0 / 12.0)));
                scale += diffuse * 0.5;
            }

            return wallColor * scale;
        }

        fn getSurfaceRayColor(origin: vec3f, ray: vec3f, waterColor: vec3f) -> vec3f {
            var color : vec3f;
            let poolHeight = 1.0;

            let q = intersectSphere(origin, ray, sphere.center, sphere.radius);
            if (q < 1.0e6) {
                color = getSphereColor(origin + ray * q, IOR_AIR, IOR_WATER);
            } else if (ray.y < 0.0) {
                let t = intersectCube(origin, ray, vec3f(-1.0, -poolHeight, -1.0), vec3f(1.0, 2.0, 1.0));
                color = getWallColor(origin + ray * t.y, IOR_AIR, IOR_WATER, poolHeight);
            } else {
                let t = intersectCube(origin, ray, vec3f(-1.0, -poolHeight, -1.0), vec3f(1.0, 2.0, 1.0));
                let hit = origin + ray * t.y;
                if (hit.y < 2.0 / 12.0) {
                    color = getWallColor(hit, IOR_AIR, IOR_WATER, poolHeight);
                } else {
                    color = textureSampleLevel(skyTexture, skySampler, ray, 0.0).rgb;
                    let sunDir = normalize(light.direction);
                    let spec = pow(max(0.0, dot(sunDir, ray)), 5000.0);
                    color += vec3f(spec) * vec3f(10.0, 8.0, 6.0);
                }
            }

            if (ray.y < 0.0) {
                color *= waterColor;
            }
            return color;
        }

        @fragment
        fn fs_main(@location(0) worldPos : vec3f) -> @location(0) vec4f {
            var uv = worldPos.xz * 0.5 + 0.5;
            var info = textureSampleLevel(waterTexture, waterSampler, uv, 0.0);

            for (var i = 0; i < 5; i++) {
                uv += info.ba * 0.005;
                info = textureSampleLevel(waterTexture, waterSampler, uv, 0.0);
            }

            let ba = vec2f(info.b, info.a);
            var normal = vec3f(info.b, sqrt(max(0.0, 1.0 - dot(ba, ba))), info.a);

            let incomingRay = normalize(worldPos - commonUniforms.eyePosition);

            ${isUnderwater ? `
            normal = -normal;
            let reflectedRay = reflect(incomingRay, normal);
            let refractedRay = refract(incomingRay, normal, IOR_WATER / IOR_AIR);
            let fresnel = mix(0.5, 1.0, pow(1.0 - dot(normal, -incomingRay), 3.0));

            let reflectedColor = getSurfaceRayColor(worldPos, reflectedRay, UNDERwaterColor);
            let refractedColor = getSurfaceRayColor(worldPos, refractedRay, vec3f(1.0)) * vec3f(0.8, 1.0, 1.1);

            let finalColor = mix(reflectedColor, refractedColor, (1.0 - fresnel) * length(refractedRay));
            ` : `
            let reflectedRay = reflect(incomingRay, normal);
            let refractedRay = refract(incomingRay, normal, IOR_AIR / IOR_WATER);
            let fresnel = mix(0.25, 1.0, pow(1.0 - dot(normal, -incomingRay), 3.0));

            let reflectedColor = getSurfaceRayColor(worldPos, reflectedRay, ABOVewaterColor);
            let refractedColor = getSurfaceRayColor(worldPos, refractedRay, ABOVewaterColor);

            let finalColor = mix(refractedColor, reflectedColor, fresnel);
            `}

            return vec4f(finalColor, 1.0);
        }
        `;

    this.surfaceBindGroupLayout = this.device.createBindGroupLayout({
      label: 'Water Surface BindGroupLayout',
      entries: [
        { binding: 0, visibility: GPUShaderStage.VERTEX | GPUShaderStage.FRAGMENT, buffer: { type: 'uniform' } },
        { binding: 1, visibility: GPUShaderStage.FRAGMENT, buffer: { type: 'uniform' } },
        { binding: 2, visibility: GPUShaderStage.FRAGMENT, buffer: { type: 'uniform' } },
        { binding: 3, visibility: GPUShaderStage.FRAGMENT, sampler: {} },
        { binding: 4, visibility: GPUShaderStage.FRAGMENT, texture: {} },
        { binding: 5, visibility: GPUShaderStage.VERTEX | GPUShaderStage.FRAGMENT, sampler: {} },
        { binding: 6, visibility: GPUShaderStage.VERTEX | GPUShaderStage.FRAGMENT, texture: {} },
        { binding: 7, visibility: GPUShaderStage.FRAGMENT, sampler: {} },
        { binding: 8, visibility: GPUShaderStage.FRAGMENT, texture: { viewDimension: 'cube' } },
        { binding: 9, visibility: GPUShaderStage.FRAGMENT, texture: {} },
      ],
    });

    const surfacePipelineLayout = this.device.createPipelineLayout({
      label: 'Water Surface PipelineLayout',
      bindGroupLayouts: [this.surfaceBindGroupLayout],
    });

    const createSurfacePipeline = (label: string, isUnderwater: boolean, cullMode: GPUCullMode): GPURenderPipeline => {
      const shaderModule = this.device.createShaderModule({
        label: `${label} Shader`,
        code: shaderCode(isUnderwater),
      });

      return this.device.createRenderPipeline({
        label,
        layout: surfacePipelineLayout,
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
          targets: [{ format: navigator.gpu.getPreferredCanvasFormat() }]
        },
        primitive: {
          topology: 'triangle-list',
          cullMode,
        },
        depthStencil: {
          depthWriteEnabled: true,
          depthCompare: 'less',
          format: 'depth24plus',
        }
      });
    };

    this.surfacePipelineAbove = createSurfacePipeline(
      'Water Surface Above Pipeline',
      false,
      'front'
    );
    this.surfacePipelineUnder = createSurfacePipeline(
      'Water Surface Under Pipeline',
      true,
      'back'
    );
  }

  renderSurface(passEncoder: GPURenderPassEncoder): void {
    const bindGroup = this.device.createBindGroup({
      layout: this.surfaceBindGroupLayout,
      entries: [
        { binding: 0, resource: { buffer: this.commonUniformBuffer } },
        { binding: 1, resource: { buffer: this.lightUniformBuffer } },
        { binding: 2, resource: { buffer: this.sphereUniformBuffer } },
        { binding: 3, resource: this.tileSampler },
        { binding: 4, resource: this.tileTexture.createView() },
        { binding: 5, resource: this.sampler },
        { binding: 6, resource: this.textureA.createView() },
        { binding: 7, resource: this.skySampler },
        { binding: 8, resource: this.skyTexture.createView({ dimension: 'cube' }) },
        { binding: 9, resource: this.causticsTexture.createView() }
      ]
    });

    passEncoder.setPipeline(this.surfacePipelineAbove);
    passEncoder.setBindGroup(0, bindGroup);
    passEncoder.setVertexBuffer(0, this.positionBuffer);
    passEncoder.setIndexBuffer(this.indexBuffer, 'uint32');
    passEncoder.drawIndexed(this.vertexCount);

    passEncoder.setPipeline(this.surfacePipelineUnder);
    passEncoder.setBindGroup(0, bindGroup);
    passEncoder.drawIndexed(this.vertexCount);
  }

  // --- Caustics ---

  private createCausticsPipeline(): void {
    const shaderModule = this.device.createShaderModule({
      label: 'Caustics Shader',
      code: `
        struct LightUniforms {
           direction : vec3f,
        }
        @binding(0) @group(0) var<uniform> light : LightUniforms;

        struct SphereUniforms {
          center : vec3f,
          radius : f32,
        }
        @binding(1) @group(0) var<uniform> sphere : SphereUniforms;

        struct ShadowUniforms {
            rim : f32,
            sphere : f32,
            ao : f32,
        }
        @binding(4) @group(0) var<uniform> shadows : ShadowUniforms;

        @binding(2) @group(0) var waterSampler : sampler;
        @binding(3) @group(0) var waterTexture : texture_2d<f32>;

        struct VertexOutput {
          @builtin(position) position : vec4f,
          @location(0) oldPos : vec3f,
          @location(1) newPos : vec3f,
          @location(2) ray : vec3f,
        }

        fn intersectCube(origin: vec3f, ray: vec3f, cubeMin: vec3f, cubeMax: vec3f) -> vec2f {
          let tMin = (cubeMin - origin) / ray;
          let tMax = (cubeMax - origin) / ray;
          let t1 = min(tMin, tMax);
          let t2 = max(tMin, tMax);
          let tNear = max(max(t1.x, t1.y), t1.z);
          let tFar = min(min(t2.x, t2.y), t2.z);
          return vec2f(tNear, tFar);
        }

        fn project(origin: vec3f, ray: vec3f, refractedLight: vec3f) -> vec3f {
            let poolHeight = 1.0;
            var point = origin;
            let tcube = intersectCube(origin, ray, vec3f(-1.0, -poolHeight, -1.0), vec3f(1.0, 2.0, 1.0));
            point += ray * tcube.y;
            let tplane = (-point.y - 1.0) / refractedLight.y;
            return point + refractedLight * tplane;
        }

        @vertex
        fn vs_main(@location(0) position : vec3f) -> VertexOutput {
          var output : VertexOutput;
          let uv = position.xy * 0.5 + 0.5;

          let info = textureSampleLevel(waterTexture, waterSampler, uv, 0.0);

          let ba = info.ba * 0.5;
          let normal = vec3f(ba.x, sqrt(max(0.0, 1.0 - dot(ba, ba))), ba.y);

          let IOR_AIR = 1.0;
          let IOR_WATER = 1.333;
          let lightDir = normalize(light.direction);

          let refractedLight = refract(-lightDir, vec3f(0.0, 1.0, 0.0), IOR_AIR / IOR_WATER);
          let ray = refract(-lightDir, normal, IOR_AIR / IOR_WATER);

          let pos = vec3f(position.x, 0.0, position.y);

          output.oldPos = project(pos, refractedLight, refractedLight);
          output.newPos = project(pos + vec3f(0.0, info.r, 0.0), ray, refractedLight);
          output.ray = ray;

          let projectedPos = 0.75 * (output.newPos.xz - output.newPos.y * refractedLight.xz / refractedLight.y);
          output.position = vec4f(projectedPos.x, -projectedPos.y, 0.0, 1.0);

          return output;
        }

        @fragment
        fn fs_main(@location(0) oldPos : vec3f, @location(1) newPos : vec3f, @location(2) ray : vec3f) -> @location(0) vec4f {
            let oldArea = length(dpdx(oldPos)) * length(dpdy(oldPos));
            let newArea = length(dpdx(newPos)) * length(dpdy(newPos));

            var intensity = oldArea / newArea * 0.2;

            let IOR_AIR = 1.0;
            let IOR_WATER = 1.333;
            let lightDir = normalize(light.direction);
            let refractedLight = refract(-lightDir, vec3f(0.0, 1.0, 0.0), IOR_AIR / IOR_WATER);

            let dir = (sphere.center - newPos) / sphere.radius;
            let area = cross(dir, refractedLight);
            var shadow = dot(area, area);
            let dist = dot(dir, -refractedLight);

            shadow = 1.0 + (shadow - 1.0) / (0.05 + dist * 0.025);
            shadow = clamp(1.0 / (1.0 + exp(-shadow)), 0.0, 1.0);
            shadow = mix(1.0, shadow, clamp(dist * 2.0, 0.0, 1.0));
            shadow = mix(1.0, shadow, shadows.sphere);

            let poolHeight = 1.0;
            let t = intersectCube(newPos, -refractedLight, vec3f(-1.0, -poolHeight, -1.0), vec3f(1.0, 2.0, 1.0));
            let rimShadow = 1.0 / (1.0 + exp(-200.0 / (1.0 + 10.0 * (t.y - t.x)) * (newPos.y - refractedLight.y * t.y - 2.0 / 12.0)));
            intensity *= mix(1.0, rimShadow, shadows.rim);

            return vec4f(intensity, shadow, 0.0, 1.0);
        }
        `
    });

    this.causticsPipeline = this.device.createRenderPipeline({
      label: 'Caustics Pipeline',
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
        targets: [{
          format: 'rgba8unorm',
          blend: {
            color: {
              operation: 'add',
              srcFactor: 'one',
              dstFactor: 'one',
            },
            alpha: {
              operation: 'add',
              srcFactor: 'one',
              dstFactor: 'one',
            }
          }
        }]
      },
      primitive: {
        topology: 'triangle-list',
      }
    });
  }

  updateCaustics(): void {
    const bindGroup = this.device.createBindGroup({
      layout: this.causticsPipeline.getBindGroupLayout(0),
      entries: [
        { binding: 0, resource: { buffer: this.lightUniformBuffer } },
        { binding: 1, resource: { buffer: this.sphereUniformBuffer } },
        { binding: 2, resource: this.sampler },
        { binding: 3, resource: this.textureA.createView() },
        { binding: 4, resource: { buffer: this.shadowUniformBuffer } }
      ]
    });

    const encoder = this.device.createCommandEncoder();
    const pass = encoder.beginRenderPass({
      colorAttachments: [{
        view: this.causticsTexture.createView(),
        loadOp: 'clear',
        storeOp: 'store',
        clearValue: { r: 0, g: 0, b: 0, a: 0 }
      }]
    });

    pass.setPipeline(this.causticsPipeline);
    pass.setBindGroup(0, bindGroup);
    pass.setVertexBuffer(0, this.positionBuffer);
    pass.setIndexBuffer(this.indexBuffer, 'uint32');
    pass.drawIndexed(this.vertexCount);
    pass.end();

    this.device.queue.submit([encoder.finish()]);
  }
}
