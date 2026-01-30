#include "../common/bindings.wgsl"

@binding(0) @group(0) var<uniform> light : LightUniforms;
@binding(1) @group(0) var<uniform> modelUniforms : ModelUniforms;

const IOR_AIR = 1.0;
const IOR_WATER = 1.333;

@vertex
fn vs_main(@location(0) position : vec3f) -> @builtin(position) vec4f {
    let worldPos = modelUniforms.center + position * modelUniforms.scale;

    // Refract light through flat water surface (same as caustics)
    let lightDir = normalize(light.direction);
    let refractedLight = refract(-lightDir, vec3f(0.0, 1.0, 0.0), IOR_AIR / IOR_WATER);

    // Project along refracted light onto pool floor, then to caustic UV space
    let projectedPos = 0.75 * (worldPos.xz - worldPos.y * refractedLight.xz / refractedLight.y);
    return vec4f(projectedPos.x, -projectedPos.y, 0.0, 1.0);
}
