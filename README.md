# WebGPU Water Simulation

A real-time water simulation using WebGPU, ported from [Evan Wallace's WebGL Water](https://madebyevan.com/webgl-water/).

https://github.com/user-attachments/assets/10f27799-944a-47e1-81dd-cb84540dd842

## Overview

This project is a WebGPU port of the classic WebGL water demonstration originally created by Evan Wallace. It showcases advanced real-time graphics techniques including raytraced reflections, refractions, caustics, and physically-based water simulation, all running in the browser using the modern WebGPU API.

## Features

- **Heightfield Water Simulation** - GPU-accelerated wave propagation using finite difference methods on a 256×256 grid
- **Raytraced Reflections & Refractions** - Accurate light behavior at the water surface using Snell's law
- **Real-time Caustics** - Dynamic light patterns projected onto the pool floor (1024×1024 resolution)
- **Fresnel Effect** - Realistic blending between reflection and refraction based on viewing angle
- **Analytic Ambient Occlusion** - Soft shadowing for the pool walls and sphere
- **Interactive Sphere** - Physically simulated object with buoyancy and water displacement
- **Cubemap Skybox** - Environmental reflections for realistic scene rendering

## Controls

| Action | Control |
|--------|---------|
| Draw ripples | Click/drag on water surface |
| Rotate camera | Click/drag on empty space |
| Move sphere | Click/drag on the sphere |
| Toggle gravity | Press `G` |
| Pause/Resume | Press `Spacebar` |
| Link light to camera | Hold `L` |

## Technical Implementation

### Water Physics

The water simulation uses a heightfield approach where each pixel in a 256×256 texture stores:
- **Red channel**: Water height
- **Green channel**: Vertical velocity
- **Blue/Alpha channels**: Surface normal (compressed)

The wave equation is discretized using finite differences:

```
velocity += (neighbor_average - height) * 2.0
velocity *= 0.995  // damping
height += velocity
```

The simulation runs two steps per frame for stability, using ping-pong textures to avoid read-after-write conflicts.

### Rendering Pipeline

1. **Simulation Pass** - Update water heights and velocities
2. **Normal Pass** - Compute surface normals from the heightfield
3. **Caustics Pass** - Project refracted light onto pool surfaces
4. **Scene Pass** - Render pool, sphere, and water surface with full lighting

### Caustics Generation

Caustics are computed by:
1. Refracting light rays through the water surface
2. Projecting rays onto the pool floor
3. Computing intensity based on area compression (using `dpdx`/`dpdy` derivatives)
4. Accumulating results with additive blending

## Challenges Porting from WebGL to WebGPU

Porting from WebGL to WebGPU involved several significant challenges:

### 1. Shader Language Translation (GLSL → WGSL)

WebGPU uses WGSL (WebGPU Shading Language) instead of GLSL. This required:
- Rewriting all shaders with different syntax (`vec3` → `vec3f`, `texture2D` → `textureSample`)
- Adapting to WGSL's stricter type system and explicit type conversions
- Handling different function signatures (e.g., `refract`, `reflect`, `normalize`)
- Using `textureSampleLevel` in vertex shaders since automatic LOD selection isn't available

### 2. Explicit Resource Binding

Unlike WebGL's implicit uniform binding, WebGPU requires explicit bind group layouts:
- All resources must be declared with `@group` and `@binding` attributes
- Bind group layouts must be created and managed manually
- Samplers and textures are separate bindings (not combined like GLSL's `sampler2D`)

### 3. Coordinate System Differences

WebGPU has different coordinate conventions:
- **Clip space Y**: WebGPU is Y-up (1 at top), requiring flips in certain projections
- **Texture coordinates**: Origin is top-left in WebGPU vs bottom-left in WebGL
- **Depth range**: WebGPU uses [0, 1] instead of WebGL's [-1, 1]

### 4. Render Target Management

WebGPU requires explicit texture management:
- Render attachments must specify `loadOp` and `storeOp`
- No implicit default framebuffer—must get texture view from canvas context each frame
- Depth textures must be explicitly created and managed on resize

### 5. Pipeline State Objects

WebGPU uses immutable pipeline state objects instead of WebGL's mutable state machine:
- All render state (blending, culling, depth test) must be declared upfront
- Separate pipelines needed for above-water and underwater rendering (different cull modes)
- Pipeline creation is more verbose but enables better GPU optimization

### 6. Float Texture Support

WebGL's `OES_texture_float` extension maps differently to WebGPU:
- Must check for `float32-filterable` feature at adapter request time
- Falls back to `rgba16float` if full float filtering isn't available
- Explicit feature request required in device creation

### 7. Extension Equivalents

WebGL extensions required for the original demo have different WebGPU equivalents:
- `OES_texture_float` → `float32-filterable` feature
- `OES_standard_derivatives` → Built-in `dpdx`/`dpdy` functions in WGSL
- No explicit extension loading needed—features are part of the core spec or optional features

### 8. Command Encoding Pattern

WebGPU uses a command buffer pattern instead of immediate mode:
- Commands are recorded into encoders, then submitted as batches
- Better maps to modern GPU architectures but requires different code structure
- Enables better CPU/GPU parallelism

### 9. No Global State

WebGPU has no concept of a "current" bound texture or buffer:
- All resources must be explicitly specified in bind groups
- Bind groups are set per-draw call
- More explicit but eliminates subtle state-related bugs

## Dependencies

- [wgpu-matrix](https://github.com/greggman/wgpu-matrix) - Matrix math library for WebGPU
- [Vite](https://vitejs.dev/) - Build tool and development server

## Credits

- **Original WebGL Implementation**: [Evan Wallace](https://madebyevan.com/)
- **WebGPU Port**: [jeantimex](https://github.com/jeantimex)

## References

- [Original WebGL Water Demo](https://madebyevan.com/webgl-water/)
- [Rendering Water Caustics](https://medium.com/@evanwallace/rendering-water-caustics-a3a7aae5b247) - Evan Wallace's article on caustics
- [WebGPU Specification](https://www.w3.org/TR/webgpu/)
- [WGSL Specification](https://www.w3.org/TR/WGSL/)

## License

This project is open source. The original WebGL water simulation was created by Evan Wallace.
