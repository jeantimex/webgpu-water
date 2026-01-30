#include "../common/bindings.wgsl"
#include "../common/functions.wgsl"

// Bindings (structs are in common/bindings.wgsl)
@binding(0) @group(0) var<uniform> uniforms : Uniforms;
@binding(1) @group(0) var tileSampler : sampler;
@binding(2) @group(0) var tileTexture : texture_2d<f32>;
@binding(3) @group(0) var<uniform> light : LightUniforms;
@binding(4) @group(0) var<uniform> sphere : SphereUniforms;
@binding(5) @group(0) var waterSampler : sampler;
@binding(6) @group(0) var waterTexture : texture_2d<f32>;
@binding(7) @group(0) var causticTexture : texture_2d<f32>;
@binding(8) @group(0) var<uniform> shadows : ShadowUniforms;
@binding(9) @group(0) var modelShadowTexture : texture_2d<f32>;

// Functions (intersectCube is in common/functions.wgsl)

@fragment
fn fs_main(@location(0) localPos : vec3f) -> @location(0) vec4f {
  var wallColor : vec3f;
  let point = localPos;

  // Sample tile texture based on which face we're rendering
  // Use different coordinate pairs for different wall orientations
  if (abs(point.x) > 0.999) {
    // X-facing walls: use YZ coordinates
    wallColor = textureSampleLevel(tileTexture, tileSampler, point.yz * 0.5 + vec2f(1.0, 0.5), 0.0).rgb;
  } else if (abs(point.z) > 0.999) {
    // Z-facing walls: use YX coordinates
    wallColor = textureSampleLevel(tileTexture, tileSampler, point.yx * 0.5 + vec2f(1.0, 0.5), 0.0).rgb;
  } else {
    // Floor: use XZ coordinates
    wallColor = textureSampleLevel(tileTexture, tileSampler, point.xz * 0.5 + 0.5, 0.0).rgb;
  }

  // Physical constants for light refraction
  let IOR_AIR = 1.0;
  let IOR_WATER = 1.333;
  let poolHeight = 1.0;

  // Determine surface normal based on face
  var normal = vec3f(0.0, 1.0, 0.0);
  if (abs(point.x) > 0.999) { normal = vec3f(-point.x, 0.0, 0.0); }
  else if (abs(point.z) > 0.999) { normal = vec3f(0.0, 0.0, -point.z); }

    // Ambient occlusion
    var scale = 0.5;
    scale /= length(point);
    scale *= mix(1.0, 1.0 - 0.9 / pow(length(point - sphere.center) / sphere.radius, 4.0), shadows.sphere);

    // Lighting with caustics or rim shadow

  // Calculate refracted light direction (Snell's law)
  let refractedLight = -refract(-light.direction, vec3f(0.0, 1.0, 0.0), IOR_AIR / IOR_WATER);

  // Model ambient occlusion from projected shadow (9-tap soft shadow)
  let modelShadowUV = 0.75 * (point.xz - point.y * refractedLight.xz / refractedLight.y) * 0.5 + 0.5;
  let d = 4.0 / 1024.0;
  var modelShadow = textureSampleLevel(modelShadowTexture, tileSampler, modelShadowUV, 0.0).r;
  modelShadow += textureSampleLevel(modelShadowTexture, tileSampler, modelShadowUV + vec2f(d, 0.0), 0.0).r;
  modelShadow += textureSampleLevel(modelShadowTexture, tileSampler, modelShadowUV + vec2f(-d, 0.0), 0.0).r;
  modelShadow += textureSampleLevel(modelShadowTexture, tileSampler, modelShadowUV + vec2f(0.0, d), 0.0).r;
  modelShadow += textureSampleLevel(modelShadowTexture, tileSampler, modelShadowUV + vec2f(0.0, -d), 0.0).r;
  modelShadow += textureSampleLevel(modelShadowTexture, tileSampler, modelShadowUV + vec2f(d, d), 0.0).r;
  modelShadow += textureSampleLevel(modelShadowTexture, tileSampler, modelShadowUV + vec2f(-d, d), 0.0).r;
  modelShadow += textureSampleLevel(modelShadowTexture, tileSampler, modelShadowUV + vec2f(d, -d), 0.0).r;
  modelShadow += textureSampleLevel(modelShadowTexture, tileSampler, modelShadowUV + vec2f(-d, -d), 0.0).r;
  modelShadow /= 9.0;
  scale *= 1.0 - modelShadow * 0.3;

  // Basic diffuse lighting
  let diffuse = max(0.0, dot(refractedLight, normal));

  // Sample water height at this XZ position
  let waterInfo = textureSampleLevel(waterTexture, waterSampler, point.xz * 0.5 + 0.5, 0.0);

  if (point.y < waterInfo.r) {
     // UNDERWATER: Apply caustic lighting
     // Project caustic UV based on refracted light direction
     let causticUV = 0.75 * (point.xz - point.y * refractedLight.xz / refractedLight.y) * 0.5 + 0.5;
     let caustic = textureSampleLevel(causticTexture, tileSampler, causticUV, 0.0);

     var intensity = caustic.r;       // Caustic brightness
     var sphereShadow = caustic.g;    // Sphere shadow in caustics

     // Fill black void outside caustic mesh with ambient light when rim shadow is off
     if (shadows.rim < 0.5 && intensity < 0.001) {
         intensity = 0.2;
         sphereShadow = 1.0;
     }

     scale += diffuse * intensity * 2.0 * sphereShadow;
  } else {
     // ABOVE WATER: Apply rim shadow at water edge
     let t = intersectCube(point, refractedLight, vec3f(-1.0, -poolHeight, -1.0), vec3f(1.0, 2.0, 1.0));
     let shadowFactor = 1.0 / (1.0 + exp(-200.0 / (1.0 + 10.0 * (t.y - t.x)) * (point.y + refractedLight.y * t.y - 2.0 / 12.0)));
     scale += diffuse * mix(1.0, shadowFactor, shadows.rim) * 0.5;
  }

  var finalColor = wallColor * scale;

  // Apply underwater color tint
  if (point.y < waterInfo.r) {
     let underwaterColor = vec3f(0.4, 0.9, 1.0);
     finalColor *= underwaterColor * 1.2;
  }

  return vec4f(finalColor, 1.0);
}
