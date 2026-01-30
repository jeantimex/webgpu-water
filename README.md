This is a WebGPU water simulation demo featuring:
- Interactive water ripples (click/drag on water)
- A draggable duck model (with physics interactions)
- Realistic water rendering with reflection, refraction, and caustics

## Controls
- **Click/Drag on Water:** Create ripples
- **Click/Drag on Duck:** Move the duck around
- **Right-Click/Drag (or drag on background):** Orbit the camera
- **Scroll:** Zoom in/out (if implemented, otherwise standard orbit controls)
- **Spacebar:** Pause/Resume simulation
- **G:** Toggle Gravity/Physics for the object
- **L (hold):** Adjust light direction by moving the camera

## Technical Details
- Built with WebGPU and TypeScript
- Uses `wgpu-matrix` for math
- Uses `vite` for building