# Plan: Support Custom 3D Models (GLB/GLTF)

This plan outlines the steps to introduce support for loading and rendering custom 3D models in the WebGPU water simulation. The goal is to replace or augment the procedural sphere with an imported 3D asset while maintaining all visual effects (caustics, underwater tint, shadows).

## 1. Dependencies

We need a lightweight way to parse GLB files without bringing in a massive engine like Three.js.

- **Action:** Install `gltf-loader-ts` (or similar lightweight parser).
- **Reason:** Parsing the binary structure (JSON + Buffers) of GLTF manually is error-prone. This library provides raw access to accessors and buffer views, which maps well to WebGPU.

## 2. Architecture Changes

### A. Create `Mesh` Interface
Currently, `Pool` and `Sphere` are tightly coupled to their generation logic. We should define a common structure for renderable objects.

```typescript
interface Mesh {
  positionBuffer: GPUBuffer;
  normalBuffer: GPUBuffer; // New: We need explicit normals for imported models
  indexBuffer: GPUBuffer;
  vertexCount: number;
}
```

### B. Create `Model` Class
Create a new file `src/model.ts`. This class will be a generic version of `sphere.ts`.

- **Constructor:** Accepts the `device`, `uniforms`, etc.
- **`load(url: string)`:** Asynchronous method to:
    1. Fetch the .glb file.
    2. Parse it using the loader.
    3. Extract `POSITION` and `NORMAL` attributes.
    4. Create WebGPU buffers (`vertex`, `normal`, `index`).
- **`render(...)`:** Similar to `Sphere.render`, but binds the extra normal buffer (if we separate them) or a single interleaved buffer.

## 3. Shader Updates

The current `sphere.frag.wgsl` assumes the object is a sphere. It calculates normals mathematically (`normalize(localPos)`) because the local position on a unit sphere *is* the normal. This won't work for a complex model (e.g., a duck).

### A. Update `sphere.vert.wgsl`
- **Input:** Add a new attribute for normals `@location(1) normal : vec3f`.
- **Output:** Pass the transformed normal to the fragment shader.

### B. Update `sphere.frag.wgsl`
- **Input:** Receive the interpolated normal.
- **Logic:**
    - Remove `let sphereNormal = normalize(localPos);`.
    - Use the passed normal instead.
    - **Shadows:** The current shadow math relies on sphere SDF (Signed Distance Field) logic (`pow((1.0 + sphereRadius - abs(point.x))...`).
        - *Short term:* Keep the SDF shadow as a "blob shadow" approximation.
        - *Long term:* Implement shadow mapping (out of scope for this specific task).

## 4. Implementation Steps

1.  **Install Dependency:** `npm install gltf-loader-ts`
2.  **Update Shaders:** Modify `sphere.vert.wgsl` and `sphere.frag.wgsl` to accept and use vertex normals.
3.  **Refactor Sphere:** Update `sphere.ts` to generate and upload a normal buffer (even though it's redundant for a sphere, it unifies the pipeline).
4.  **Create Model Loader:** Implement `src/model.ts` to load a sample `.glb`.
5.  **Integration:**
    - In `main.ts`, replace `const sphere = new Sphere(...)` with `const duck = new Model(...)`.
    - Call `await duck.load('/assets/duck.glb')`.
    - Update the render loop to call `duck.render(...)`.

## 5. Challenges & Considerations

- **Transforms:** The sphere currently has a `center` and `radius`. A generic model will need a full Model Matrix (position, rotation, scale). We will need to update the `SphereUniforms` struct to include a `modelMatrix` or handle the transform in the vertex shader.
- **Normals:** Imported models might have different coordinate systems (Y-up vs Z-up). We might need to flip normals or positions during loading.
