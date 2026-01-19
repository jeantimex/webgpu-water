import type { Mat4 } from 'wgpu-matrix';

// Pipeline configuration for simulation passes
export interface PipelineConfig {
  pipeline: GPURenderPipeline;
  uniformSize: number;
  uniformBuffer: GPUBuffer;
}

// Cubemap face URLs
export interface CubemapURLs {
  xpos: string;
  xneg: string;
  ypos: string;
  yneg: string;
  zpos: string;
  zneg: string;
}

// View/Projection matrices pair
export interface MatricesPair {
  projectionMatrix: Mat4;
  viewMatrix: Mat4;
}

// Interaction modes
export const enum InteractionMode {
  None = -1,
  AddDrops = 0,
  OrbitCamera = 1,
  MoveSphere = 2,
}

// Viewport array type [x, y, width, height]
export type Viewport = [number, number, number, number];

// 3D coordinate array
export type Vec3Array = [number, number, number];
