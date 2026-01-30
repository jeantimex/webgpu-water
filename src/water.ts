/**
 * water.ts - Water Simulation and Rendering System
 *
 * This is the core module that implements the interactive water simulation.
 * It handles both the physics simulation and the visual rendering of water.
 *
 * The simulation uses a heightfield approach where water height is stored
 * in a 2D texture. The simulation runs on the GPU using render passes.
 *
 * Key components:
 * - Physics simulation: Wave propagation using neighboring height values
 * - Drop creation: Adding ripples from user interaction
 * - Sphere interaction: Water displacement from moving sphere
 * - Normal calculation: Computing surface normals for lighting
 * - Surface rendering: Reflections and refractions using ray tracing
 * - Caustics: Light patterns on pool floor from water surface refraction
 */

import type { PipelineConfig } from './types';

// Import shader modules
import fullscreenVertShader from './shaders/water/fullscreen.vert.wgsl?raw';
import dropFragShader from './shaders/water/drop.frag.wgsl?raw';
import updateFragShader from './shaders/water/update.frag.wgsl?raw';
import normalFragShader from './shaders/water/normal.frag.wgsl?raw';
import sphereFragShader from './shaders/water/sphere.frag.wgsl?raw';
import surfaceVertShader from './shaders/water/surface.vert.wgsl';
import surfaceAboveFragShader from './shaders/water/surface-above.frag.wgsl';
import surfaceUnderFragShader from './shaders/water/surface-under.frag.wgsl';
import causticsVertShader from './shaders/water/caustics.vert.wgsl';
import causticsFragShader from './shaders/water/caustics.frag.wgsl';

/**
 * Main water simulation and rendering class.
 *
 * The Water class manages:
 * 1. Two ping-pong textures for double-buffered simulation
 * 2. Multiple compute pipelines for different simulation steps
 * 3. Surface mesh for rendering the water from above and below
 * 4. Caustics texture for underwater light patterns
 */
export class Water {
  /** WebGPU device for all GPU operations */
  private device: GPUDevice;

  /** Width of the simulation texture in pixels */
  private width: number;

  /** Height of the simulation texture in pixels */
  private height: number;

  // --- External Resources ---
  // These buffers and textures are passed in from main.ts

  /** Common uniform buffer (view-projection matrix, eye position) */
  private commonUniformBuffer: GPUBuffer;

  /** Light direction uniform buffer */
  private lightUniformBuffer: GPUBuffer;

  /** Sphere position and radius uniform buffer */
  private sphereUniformBuffer: GPUBuffer;

  /** Shadow toggle flags uniform buffer */
  private shadowUniformBuffer: GPUBuffer;

  /** Pool tile texture for refracted view */
  private tileTexture: GPUTexture;

  /** Sampler for tile texture */
  private tileSampler: GPUSampler;

  /** Skybox cubemap texture for reflections */
  private skyTexture: GPUTexture;

  /** Sampler for skybox texture */
  private skySampler: GPUSampler;

  /** Reflection camera uniform buffer for planar reflections */
  private reflectionUniformBuffer: GPUBuffer;

  /** Planar reflection texture for model reflections */
  private reflectionTexture: GPUTexture;

  /** Sampler for planar reflection texture */
  private reflectionSampler: GPUSampler;

  /** Refraction texture for model visibility under water */
  private refractionTexture: GPUTexture;

  /** Sampler for refraction texture */
  private refractionSampler: GPUSampler;

  // --- Physics State ---
  // Double-buffered textures for ping-pong rendering

  /**
   * Primary simulation texture (current state).
   * RGBA channels store:
   * - R: Water height
   * - G: Water velocity
   * - B: Surface normal X component
   * - A: Surface normal Z component
   */
  textureA: GPUTexture;

  /**
   * Secondary simulation texture (next state).
   * Swapped with textureA after each simulation step.
   */
  textureB: GPUTexture;

  /**
   * Caustics texture storing light intensity patterns.
   * Higher resolution (1024x1024) for visual detail.
   * - R: Light intensity
   * - G: Sphere shadow factor
   */
  causticsTexture: GPUTexture;

  /** Sampler for simulation textures (linear filtering, clamp edges) */
  sampler: GPUSampler;

  // --- Simulation Pipelines ---
  // Each pipeline performs one step of the simulation

  /** Pipeline for adding water drops (ripples) */
  private dropPipeline!: PipelineConfig;

  /** Pipeline for wave propagation physics */
  private updatePipeline!: PipelineConfig;

  /** Pipeline for computing surface normals */
  private normalPipeline!: PipelineConfig;

  /** Pipeline for sphere-water interaction */
  private spherePipeline!: PipelineConfig;

  // --- Surface Rendering ---

  /** Vertex buffer for water surface mesh */
  private positionBuffer!: GPUBuffer;

  /** Index buffer for water surface mesh */
  private indexBuffer!: GPUBuffer;

  /** Number of indices in the surface mesh */
  private vertexCount!: number;

  /** Bind group layout for surface rendering (shared by both pipelines) */
  private surfaceBindGroupLayout!: GPUBindGroupLayout;

  /** Pipeline for rendering water surface from above */
  private surfacePipelineAbove!: GPURenderPipeline;

  /** Pipeline for rendering water surface from below */
  private surfacePipelineUnder!: GPURenderPipeline;

  // --- Caustics ---

  /** Pipeline for rendering caustic light patterns */
  private causticsPipeline!: GPURenderPipeline;

  /**
   * Creates a new Water simulation system.
   *
   * @param device - WebGPU device
   * @param width - Simulation texture width
   * @param height - Simulation texture height
   * @param uniformBuffer - Common uniforms (matrices, eye position)
   * @param lightUniformBuffer - Light direction buffer
   * @param sphereUniformBuffer - Sphere position/radius buffer
   * @param shadowUniformBuffer - Shadow toggle flags buffer
   * @param tileTexture - Pool tile texture
   * @param tileSampler - Tile texture sampler
   * @param skyTexture - Skybox cubemap texture
   * @param skySampler - Skybox sampler
   * @param reflectionUniformBuffer - Reflection camera uniform buffer
   * @param reflectionTexture - Planar reflection texture
   * @param reflectionSampler - Sampler for planar reflection texture
   * @param refractionTexture - Refraction texture
   * @param refractionSampler - Refraction sampler
   */
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
    skySampler: GPUSampler,
    reflectionUniformBuffer: GPUBuffer,
    reflectionTexture: GPUTexture,
    reflectionSampler: GPUSampler,
    refractionTexture: GPUTexture,
    refractionSampler: GPUSampler
  ) {
    this.device = device;
    this.width = width;
    this.height = height;

    // Store external resources
    this.commonUniformBuffer = uniformBuffer;
    this.lightUniformBuffer = lightUniformBuffer;
    this.sphereUniformBuffer = sphereUniformBuffer;
    this.shadowUniformBuffer = shadowUniformBuffer;
    this.tileTexture = tileTexture;
    this.tileSampler = tileSampler;
    this.skyTexture = skyTexture;
    this.skySampler = skySampler;
    this.reflectionUniformBuffer = reflectionUniformBuffer;
    this.reflectionTexture = reflectionTexture;
    this.reflectionSampler = reflectionSampler;
    this.refractionTexture = refractionTexture;
    this.refractionSampler = refractionSampler;

    // Create double-buffered simulation textures
    this.textureA = this.createTexture();
    this.textureB = this.createTexture();

    // Caustics texture (higher resolution for detail)
    this.causticsTexture = this.device.createTexture({
      size: [1024, 1024],
      format: 'rgba8unorm',
      usage: GPUTextureUsage.TEXTURE_BINDING | GPUTextureUsage.RENDER_ATTACHMENT,
    });

    // Create sampler with linear filtering and edge clamping
    this.sampler = device.createSampler({
      magFilter: 'linear',
      minFilter: 'linear',
      addressModeU: 'clamp-to-edge',
      addressModeV: 'clamp-to-edge',
    });

    // Initialize all pipelines
    this.createPipelines();
    this.createSurfaceMesh();
    this.createSurfacePipeline();
    this.createCausticsPipeline();
  }

  /**
   * Creates a simulation texture with appropriate format.
   *
   * Uses float32 if available (higher precision), otherwise float16.
   * The texture stores height, velocity, and normal data in RGBA channels.
   */
  private createTexture(): GPUTexture {
    const format = this.device.features.has('float32-filterable') ? 'rgba32float' : 'rgba16float';
    return this.device.createTexture({
      size: [this.width, this.height],
      format: format,
      usage: GPUTextureUsage.TEXTURE_BINDING | GPUTextureUsage.RENDER_ATTACHMENT,
    });
  }

  /**
   * Creates all simulation pipelines (drop, update, normal, sphere).
   *
   * Each pipeline renders a fullscreen quad that processes every pixel
   * of the simulation texture. The output is written to textureB,
   * then textures are swapped.
   */
  private createPipelines(): void {
    const format: GPUTextureFormat = this.device.features.has('float32-filterable')
      ? 'rgba32float'
      : 'rgba16float';

    // --- Drop Pipeline ---
    // Adds circular ripples to the water at a given position
    // Uses cosine falloff for smooth drop shape
    this.dropPipeline = this.createPipeline(
      'Drop',
      fullscreenVertShader,
      dropFragShader,
      32,
      format
    );

    // --- Update Pipeline ---
    // Propagates waves using a simple finite difference scheme
    // Height moves toward neighbor average, velocity carries momentum
    this.updatePipeline = this.createPipeline(
      'Update',
      fullscreenVertShader,
      updateFragShader,
      16,
      format
    );

    // --- Normal Pipeline ---
    // Computes surface normals from height differences
    // Normals are stored in BA channels for lighting calculations
    this.normalPipeline = this.createPipeline(
      'Normal',
      fullscreenVertShader,
      normalFragShader,
      16,
      format
    );

    // --- Sphere Interaction Pipeline ---
    // Displaces water based on sphere movement
    // Adds volume where sphere leaves, removes where it enters
    this.spherePipeline = this.createPipeline(
      'Sphere',
      fullscreenVertShader,
      sphereFragShader,
      32,
      format
    );
  }

  /**
   * Helper to create a simulation pipeline.
   *
   * @param label - Debug label for the pipeline
   * @param vsCode - Vertex shader WGSL code
   * @param fsCode - Fragment shader WGSL code
   * @param uniformSize - Size of the uniform buffer in bytes
   * @param format - Texture format for output
   * @returns PipelineConfig with pipeline and uniform buffer
   */
  private createPipeline(
    label: string,
    vsCode: string,
    fsCode: string,
    uniformSize: number,
    format: GPUTextureFormat
  ): PipelineConfig {
    const module = this.device.createShaderModule({
      label: label + ' Module',
      code: vsCode + fsCode,
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
        targets: [{ format: format }],
      },
      primitive: {
        topology: 'triangle-list',
      },
    });

    return {
      pipeline,
      uniformSize,
      uniformBuffer: this.device.createBuffer({
        size: uniformSize,
        usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST,
      }),
    };
  }

  /**
   * Executes a simulation pipeline pass.
   *
   * Renders textureA through the pipeline to textureB,
   * then swaps the textures for double-buffering.
   *
   * @param pipelineObj - The pipeline configuration to run
   * @param uniformsData - Uniform data to upload
   */
  private runPipeline(pipelineObj: PipelineConfig, uniformsData: Float32Array<ArrayBuffer>): void {
    // Upload uniforms
    this.device.queue.writeBuffer(pipelineObj.uniformBuffer, 0, uniformsData);

    // Create bind group with input texture and uniforms
    const bindGroup = this.device.createBindGroup({
      layout: pipelineObj.pipeline.getBindGroupLayout(0),
      entries: [
        { binding: 0, resource: this.textureA.createView() },
        { binding: 1, resource: this.sampler },
        { binding: 2, resource: { buffer: pipelineObj.uniformBuffer } },
      ],
    });

    // Execute render pass
    const encoder = this.device.createCommandEncoder();
    const pass = encoder.beginRenderPass({
      colorAttachments: [
        {
          view: this.textureB.createView(),
          loadOp: 'clear',
          storeOp: 'store',
          clearValue: { r: 0, g: 0, b: 0, a: 0 },
        },
      ],
    });

    pass.setPipeline(pipelineObj.pipeline);
    pass.setBindGroup(0, bindGroup);
    pass.draw(6); // Fullscreen quad (2 triangles)
    pass.end();

    this.device.queue.submit([encoder.finish()]);

    // Swap textures for double-buffering
    const temp = this.textureA;
    this.textureA = this.textureB;
    this.textureB = temp;
  }

  /**
   * Adds a circular ripple to the water surface.
   *
   * @param x - X position in [-1, 1] range
   * @param y - Y position in [-1, 1] range
   * @param radius - Radius of the ripple
   * @param strength - Intensity (positive = up, negative = down)
   */
  addDrop(x: number, y: number, radius: number, strength: number): void {
    const data = new Float32Array(4);
    data[0] = x;
    data[1] = y;
    data[2] = radius;
    data[3] = strength;
    this.runPipeline(this.dropPipeline, data);
  }

  /**
   * Advances the water simulation by one time step.
   *
   * Should be called multiple times per frame for smoother simulation.
   */
  stepSimulation(): void {
    const data = new Float32Array(2);
    data[0] = 1.0 / this.width;
    data[1] = 1.0 / this.height;
    this.runPipeline(this.updatePipeline, data);
  }

  /**
   * Recomputes surface normals from current height data.
   *
   * Should be called after simulation steps, before rendering.
   */
  updateNormals(): void {
    const data = new Float32Array(2);
    data[0] = 1.0 / this.width;
    data[1] = 1.0 / this.height;
    this.runPipeline(this.normalPipeline, data);
  }

  /**
   * Updates water displacement based on sphere movement.
   *
   * @param oldCenter - Previous sphere position [x, y, z]
   * @param newCenter - Current sphere position [x, y, z]
   * @param radius - Sphere radius
   */
  moveSphere(oldCenter: number[], newCenter: number[], radius: number): void {
    const data = new Float32Array(8);
    data[0] = oldCenter[0];
    data[1] = oldCenter[1];
    data[2] = oldCenter[2];
    data[3] = radius;
    data[4] = newCenter[0];
    data[5] = newCenter[1];
    data[6] = newCenter[2];
    data[7] = 0; // padding
    this.runPipeline(this.spherePipeline, data);
  }

  // =========================================================================
  // Surface Rendering
  // =========================================================================

  /**
   * Creates the water surface mesh as a subdivided plane.
   *
   * The plane spans from -1 to 1 on X and Z axes.
   * Higher detail (200x200) provides smooth displacement from wave heights.
   */
  private createSurfaceMesh(): void {
    const detail = 200; // Grid resolution
    const positions: number[] = [];
    const indices: number[] = [];

    // Generate vertex grid from -1 to 1 on X and Z
    for (let z = 0; z <= detail; z++) {
      const t = z / detail;
      for (let x = 0; x <= detail; x++) {
        const s = x / detail;
        // Store as XY initially (Z will be sampled from texture)
        positions.push(2 * s - 1, 2 * t - 1, 0);
      }
    }

    // Generate triangle indices
    for (let z = 0; z < detail; z++) {
      for (let x = 0; x < detail; x++) {
        const i = x + z * (detail + 1);
        // Two triangles per quad
        indices.push(i, i + 1, i + detail + 1);
        indices.push(i + detail + 1, i + 1, i + detail + 2);
      }
    }

    this.vertexCount = indices.length;

    // Create vertex buffer
    this.positionBuffer = this.device.createBuffer({
      label: 'Water Surface Vertices',
      size: positions.length * 4,
      usage: GPUBufferUsage.VERTEX,
      mappedAtCreation: true,
    });
    new Float32Array(this.positionBuffer.getMappedRange()).set(positions);
    this.positionBuffer.unmap();

    // Create index buffer
    this.indexBuffer = this.device.createBuffer({
      label: 'Water Surface Indices',
      size: indices.length * 4,
      usage: GPUBufferUsage.INDEX,
      mappedAtCreation: true,
    });
    new Uint32Array(this.indexBuffer.getMappedRange()).set(indices);
    this.indexBuffer.unmap();
  }

  /**
   * Creates the water surface rendering pipelines.
   *
   * Two pipelines are created:
   * - Above: For viewing water from above (culls front faces)
   * - Under: For viewing water from below (culls back faces)
   *
   * The shader implements ray tracing for reflections and refractions,
   * with Fresnel blending between them.
   */
  private createSurfacePipeline(): void {
    /**
     * Creates vertex shader module.
     */
    const createVertexShaderModule = (label: string, vertCode: string): GPUShaderModule => {
      return this.device.createShaderModule({
        label: `${label} Vertex Shader`,
        code: vertCode,
      });
    };

    /**
     * Creates fragment shader module.
     */
    const createFragmentShaderModule = (label: string, fragCode: string): GPUShaderModule => {
      return this.device.createShaderModule({
        label: `${label} Fragment Shader`,
        code: fragCode,
      });
    };

    // Create bind group layout (shared by both pipelines)
    this.surfaceBindGroupLayout = this.device.createBindGroupLayout({
      label: 'Water Surface BindGroupLayout',
      entries: [
        {
          binding: 0,
          visibility: GPUShaderStage.VERTEX | GPUShaderStage.FRAGMENT,
          buffer: { type: 'uniform' },
        },
        { binding: 1, visibility: GPUShaderStage.FRAGMENT, buffer: { type: 'uniform' } },
        { binding: 2, visibility: GPUShaderStage.FRAGMENT, buffer: { type: 'uniform' } },
        { binding: 3, visibility: GPUShaderStage.FRAGMENT, sampler: {} },
        { binding: 4, visibility: GPUShaderStage.FRAGMENT, texture: {} },
        { binding: 5, visibility: GPUShaderStage.VERTEX | GPUShaderStage.FRAGMENT, sampler: {} },
        { binding: 6, visibility: GPUShaderStage.VERTEX | GPUShaderStage.FRAGMENT, texture: {} },
        { binding: 7, visibility: GPUShaderStage.FRAGMENT, sampler: {} },
        { binding: 8, visibility: GPUShaderStage.FRAGMENT, texture: { viewDimension: 'cube' } },
        { binding: 9, visibility: GPUShaderStage.FRAGMENT, texture: {} },
        { binding: 10, visibility: GPUShaderStage.FRAGMENT, buffer: { type: 'uniform' } },
        { binding: 11, visibility: GPUShaderStage.FRAGMENT, buffer: { type: 'uniform' } },
        { binding: 12, visibility: GPUShaderStage.FRAGMENT, sampler: {} },
        { binding: 13, visibility: GPUShaderStage.FRAGMENT, texture: {} },
        { binding: 14, visibility: GPUShaderStage.FRAGMENT, sampler: {} },
        { binding: 15, visibility: GPUShaderStage.FRAGMENT, texture: {} },
      ],
    });

    const surfacePipelineLayout = this.device.createPipelineLayout({
      label: 'Water Surface PipelineLayout',
      bindGroupLayouts: [this.surfaceBindGroupLayout],
    });

    /**
     * Helper to create a surface pipeline with specific settings.
     */
    const createSurfacePipeline = (
      label: string,
      vertShader: string,
      fragShader: string,
      cullMode: GPUCullMode
    ): GPURenderPipeline => {
      const vertexShaderModule = createVertexShaderModule(label, vertShader);
      const fragmentShaderModule = createFragmentShaderModule(label, fragShader);

      return this.device.createRenderPipeline({
        label,
        layout: surfacePipelineLayout,
        vertex: {
          module: vertexShaderModule,
          entryPoint: 'vs_main',
          buffers: [
            {
              arrayStride: 3 * 4,
              attributes: [
                {
                  shaderLocation: 0,
                  offset: 0,
                  format: 'float32x3',
                },
              ],
            },
          ],
        },
        fragment: {
          module: fragmentShaderModule,
          entryPoint: 'fs_main',
          targets: [{ format: navigator.gpu.getPreferredCanvasFormat() }],
        },
        primitive: {
          topology: 'triangle-list',
          cullMode,
        },
        depthStencil: {
          depthWriteEnabled: true,
          depthCompare: 'less',
          format: 'depth24plus',
        },
      });
    };

    // Create both pipelines
    this.surfacePipelineAbove = createSurfacePipeline(
      'Water Surface Above Pipeline',
      surfaceVertShader,
      surfaceAboveFragShader,
      'front' // Cull front faces (see back face = top of water)
    );
    this.surfacePipelineUnder = createSurfacePipeline(
      'Water Surface Under Pipeline',
      surfaceVertShader,
      surfaceUnderFragShader,
      'back' // Cull back faces (see front face = bottom of water)
    );
  }

  /**
   * Renders the water surface to the current render pass.
   *
   * Renders twice: once for above-water view, once for underwater view.
   * The appropriate pipeline is selected based on face culling.
   *
   * @param passEncoder - The active render pass encoder
   */
  renderSurface(passEncoder: GPURenderPassEncoder): void {
    // Create bind group with all required resources
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
        { binding: 9, resource: this.causticsTexture.createView() },
        { binding: 10, resource: { buffer: this.shadowUniformBuffer } },
        { binding: 11, resource: { buffer: this.reflectionUniformBuffer } },
        { binding: 12, resource: this.reflectionSampler },
        { binding: 13, resource: this.reflectionTexture.createView() },
        { binding: 14, resource: this.refractionSampler },
        { binding: 15, resource: this.refractionTexture.createView() },
      ],
    });

    // Render water surface from above
    passEncoder.setPipeline(this.surfacePipelineAbove);
    passEncoder.setBindGroup(0, bindGroup);
    passEncoder.setVertexBuffer(0, this.positionBuffer);
    passEncoder.setIndexBuffer(this.indexBuffer, 'uint32');
    passEncoder.drawIndexed(this.vertexCount);

    // Render water surface from below (same geometry, different shader)
    passEncoder.setPipeline(this.surfacePipelineUnder);
    passEncoder.setBindGroup(0, bindGroup);
    passEncoder.drawIndexed(this.vertexCount);
  }

  /**
   * Updates the planar reflection texture when the render target changes size.
   */
  setReflectionTexture(texture: GPUTexture): void {
    this.reflectionTexture = texture;
  }

  /**
   * Updates the refraction texture when the render target changes size.
   */
  setRefractionTexture(texture: GPUTexture): void {
    this.refractionTexture = texture;
  }

  // =========================================================================
  // Caustics Rendering
  // =========================================================================

  /**
   * Creates the caustics rendering pipeline.
   *
   * Caustics are the light patterns on the pool floor caused by
   * refraction through the water surface. The algorithm:
   * 1. For each water surface vertex, trace refracted light ray to pool floor
   * 2. Compare old position (flat water) to new position (displaced water)
   * 3. Light intensity is proportional to area ratio (convergence = brighter)
   *
   * Uses additive blending to accumulate light from multiple rays.
   */
  private createCausticsPipeline(): void {
    // Create separate shader modules for vertex and fragment stages
    const vertexShaderModule = this.device.createShaderModule({
      label: 'Caustics Vertex Shader',
      code: causticsVertShader,
    });

    const fragmentShaderModule = this.device.createShaderModule({
      label: 'Caustics Fragment Shader',
      code: causticsFragShader,
    });

    this.causticsPipeline = this.device.createRenderPipeline({
      label: 'Caustics Pipeline',
      layout: 'auto',
      vertex: {
        module: vertexShaderModule,
        entryPoint: 'vs_main',
        buffers: [
          {
            arrayStride: 3 * 4,
            attributes: [
              {
                shaderLocation: 0,
                offset: 0,
                format: 'float32x3',
              },
            ],
          },
        ],
      },
      fragment: {
        module: fragmentShaderModule,
        entryPoint: 'fs_main',
        targets: [
          {
            format: 'rgba8unorm',
            // Additive blending: multiple rays contribute to same pixel
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
              },
            },
          },
        ],
      },
      primitive: {
        topology: 'triangle-list',
      },
    });
  }

  /**
   * Updates the caustics texture.
   *
   * Should be called after water simulation and normal updates.
   * The caustics texture is then used by pool and sphere shaders.
   */
  updateCaustics(): void {
    const bindGroup = this.device.createBindGroup({
      layout: this.causticsPipeline.getBindGroupLayout(0),
      entries: [
        { binding: 0, resource: { buffer: this.lightUniformBuffer } },
        { binding: 1, resource: { buffer: this.sphereUniformBuffer } },
        { binding: 2, resource: this.sampler },
        { binding: 3, resource: this.textureA.createView() },
        { binding: 4, resource: { buffer: this.shadowUniformBuffer } },
      ],
    });

    const encoder = this.device.createCommandEncoder();
    const pass = encoder.beginRenderPass({
      colorAttachments: [
        {
          view: this.causticsTexture.createView(),
          loadOp: 'clear',
          storeOp: 'store',
          clearValue: { r: 0, g: 0, b: 0, a: 0 },
        },
      ],
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
