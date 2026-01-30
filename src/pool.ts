/**
 * pool.ts - Swimming Pool Walls Renderer
 *
 * This module renders the walls of the swimming pool that contains the water.
 * The pool is rendered as a cube with the top face removed (open water surface).
 *
 * Key features:
 * - Textured walls using tile texture
 * - Caustic lighting effects underwater
 * - Ambient occlusion for realistic shading
 * - Sphere shadow integration
 * - Refracted light calculations through water surface
 */

// Import shader modules
import poolVertShader from './shaders/pool/pool.vert.wgsl';
import poolFragShader from './shaders/pool/pool.frag.wgsl';

/**
 * Renders the swimming pool walls with realistic underwater lighting effects.
 *
 * The Pool class creates a cube geometry (minus the top face) and applies
 * tile textures with dynamic caustic lighting. The shader handles:
 * - Refracted sunlight through water surface
 * - Caustic patterns projected onto underwater surfaces
 * - Ambient occlusion for corners and sphere proximity
 * - Underwater color tinting
 */
export class Pool {
  /** WebGPU device for creating GPU resources */
  private device: GPUDevice;

  /** Texture format matching the canvas (e.g., 'bgra8unorm') */
  private format: GPUTextureFormat;

  /** Uniform buffer containing view-projection matrix and eye position */
  private uniformBuffer: GPUBuffer;

  /** Tile texture applied to pool walls and floor */
  private tileTexture: GPUTexture;

  /** Sampler for the tile texture (repeat mode for tiling) */
  private tileSampler: GPUSampler;

  /** Uniform buffer containing light direction vector */
  private lightUniformBuffer: GPUBuffer;

  /** Uniform buffer containing sphere position and radius */
  private sphereUniformBuffer: GPUBuffer;

  /** Uniform buffer containing shadow toggle flags */
  private shadowUniformBuffer: GPUBuffer;

  /** Model shadow texture for projected silhouette */
  private modelShadowTexture: GPUTexture;

  /** Vertex buffer containing pool wall positions */
  private positionBuffer!: GPUBuffer;

  /** Index buffer for indexed drawing */
  private indexBuffer!: GPUBuffer;

  /** Number of indices to draw */
  private vertexCount!: number;

  /** The render pipeline for pool rendering */
  private pipeline!: GPURenderPipeline;

  /**
   * Creates a new Pool renderer.
   *
   * @param device - WebGPU device for resource creation
   * @param format - Canvas texture format
   * @param uniformBuffer - Buffer with view-projection matrix and eye position
   * @param tileTexture - Texture for pool walls
   * @param tileSampler - Sampler for tile texture
   * @param lightUniformBuffer - Buffer with light direction
   * @param sphereUniformBuffer - Buffer with sphere position and radius
   * @param shadowUniformBuffer - Buffer with shadow toggle flags
   */
  constructor(
    device: GPUDevice,
    format: GPUTextureFormat,
    uniformBuffer: GPUBuffer,
    tileTexture: GPUTexture,
    tileSampler: GPUSampler,
    lightUniformBuffer: GPUBuffer,
    sphereUniformBuffer: GPUBuffer,
    shadowUniformBuffer: GPUBuffer,
    modelShadowTexture: GPUTexture
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
    this.modelShadowTexture = modelShadowTexture;

    this.createGeometry();
    this.createPipeline();
  }

  /**
   * Creates the pool geometry as an open-top cube.
   *
   * The pool is constructed from 5 faces of a unit cube:
   * - 4 walls (±X and ±Z faces)
   * - 1 floor (+Y face, but positioned at bottom)
   *
   * The top face (-Y in cube coordinates) is omitted to allow
   * the water surface to be visible.
   *
   * Uses the octant picking technique to generate cube vertices
   * efficiently from binary indices.
   */
  private createGeometry(): void {
    /**
     * Generates a vertex position from an octant index (0-7).
     * Each bit of the index controls one axis:
     * - Bit 0: X axis (0 = -1, 1 = +1)
     * - Bit 1: Y axis (0 = -1, 1 = +1)
     * - Bit 2: Z axis (0 = -1, 1 = +1)
     */
    function pickOctant(i: number): [number, number, number] {
      return [(i & 1) * 2 - 1, (i & 2) - 1, (i & 4) / 2 - 1];
    }

    // Cube face definitions: [v0, v1, v2, v3, nx, ny, nz]
    // Each face is defined by 4 vertex indices and a normal direction
    // The -Y face (floor visible from above) is commented out as we use +Y
    const cubeData = [
      [0, 4, 2, 6, -1, 0, 0], // -x (left wall)
      [1, 3, 5, 7, +1, 0, 0], // +x (right wall)
      // [0, 1, 4, 5, 0, -1, 0], // -y (removed - this would be the open top)
      [2, 6, 3, 7, 0, +1, 0], // +y (floor)
      [0, 2, 1, 3, 0, 0, -1], // -z (front wall)
      [4, 5, 6, 7, 0, 0, +1], // +z (back wall)
    ];

    const positions: number[] = [];
    const indices: number[] = [];
    let vertexCount = 0;

    // Generate vertices and indices for each face
    for (const data of cubeData) {
      const vOffset = vertexCount;

      // Add 4 vertices for this face
      for (let j = 0; j < 4; j++) {
        const d = data[j];
        const pos = pickOctant(d);
        positions.push(...pos);
        vertexCount++;
      }

      // Add 2 triangles (6 indices) for this face
      // Triangle 1: v0, v1, v2
      // Triangle 2: v2, v1, v3
      indices.push(vOffset + 0, vOffset + 1, vOffset + 2);
      indices.push(vOffset + 2, vOffset + 1, vOffset + 3);
    }

    this.vertexCount = indices.length;

    // Create and populate vertex buffer
    this.positionBuffer = this.device.createBuffer({
      label: 'Pool Vertex Buffer',
      size: positions.length * 4,
      usage: GPUBufferUsage.VERTEX,
      mappedAtCreation: true,
    });
    new Float32Array(this.positionBuffer.getMappedRange()).set(positions);
    this.positionBuffer.unmap();

    // Create and populate index buffer
    this.indexBuffer = this.device.createBuffer({
      label: 'Pool Index Buffer',
      size: indices.length * 4,
      usage: GPUBufferUsage.INDEX,
      mappedAtCreation: true,
    });
    new Uint32Array(this.indexBuffer.getMappedRange()).set(indices);
    this.indexBuffer.unmap();
  }

  /**
   * Creates the render pipeline with WGSL shaders.
   *
   * The shader implements:
   * - Vertex transformation with Y-axis scaling for pool depth
   * - Tile texture mapping based on surface orientation
   * - Refracted light direction calculation using Snell's law
   * - Caustic texture sampling for underwater surfaces
   * - Ambient occlusion from pool corners and sphere proximity
   * - Underwater color tinting
   */
  private createPipeline(): void {
    // Create separate shader modules for vertex and fragment stages
    const vertexShaderModule = this.device.createShaderModule({
      label: 'Pool Vertex Shader',
      code: poolVertShader,
    });

    const fragmentShaderModule = this.device.createShaderModule({
      label: 'Pool Fragment Shader',
      code: poolFragShader,
    });

    // Create the render pipeline
    this.pipeline = this.device.createRenderPipeline({
      label: 'Pool Pipeline',
      layout: 'auto',
      vertex: {
        module: vertexShaderModule,
        entryPoint: 'vs_main',
        buffers: [
          {
            arrayStride: 3 * 4, // 3 floats per vertex (x, y, z)
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
        targets: [{ format: this.format }],
      },
      primitive: {
        topology: 'triangle-list',
        cullMode: 'back', // Back-face culling for inside-out cube
      },
      depthStencil: {
        depthWriteEnabled: true,
        depthCompare: 'less',
        format: 'depth24plus',
      },
    });
  }

  /**
   * Renders the pool walls to the current render pass.
   *
   * Creates a new bind group each frame to incorporate dynamic textures
   * (water height and caustics that change every frame).
   *
   * @param passEncoder - The active render pass encoder
   * @param waterTexture - Current water simulation texture (height/normals)
   * @param waterSampler - Sampler for water texture
   * @param causticsTexture - Pre-computed caustic pattern texture
   */
  render(
    passEncoder: GPURenderPassEncoder,
    waterTexture: GPUTexture,
    waterSampler: GPUSampler,
    causticsTexture: GPUTexture
  ): void {
    // Create bind group with all required resources
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
        { binding: 8, resource: { buffer: this.shadowUniformBuffer } },
        { binding: 9, resource: this.modelShadowTexture.createView() },
      ],
    });

    // Issue draw commands
    passEncoder.setPipeline(this.pipeline);
    passEncoder.setBindGroup(0, bindGroup);
    passEncoder.setVertexBuffer(0, this.positionBuffer);
    passEncoder.setIndexBuffer(this.indexBuffer, 'uint32');
    passEncoder.drawIndexed(this.vertexCount);
  }
}
