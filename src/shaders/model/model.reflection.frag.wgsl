#include "../common/bindings.wgsl"

@binding(0) @group(0) var<uniform> commonUniforms : CommonUniforms;
@binding(1) @group(0) var<uniform> modelUniforms : ModelUniforms;
@binding(2) @group(0) var<uniform> light : LightUniforms;
@binding(3) @group(0) var waterSampler : sampler;
@binding(4) @group(0) var waterTexture : texture_2d<f32>;
@binding(5) @group(0) var causticTexture : texture_2d<f32>;
@binding(6) @group(0) var modelSampler : sampler;
@binding(7) @group(0) var modelTexture : texture_2d<f32>;

@fragment
fn fs_main(
  @location(0) worldPos : vec3f,
  @location(1) normal : vec3f,
  @location(2) uv : vec2f
) -> @location(0) vec4f {
  let IOR_AIR = 1.0;
  let IOR_WATER = 1.333;

  let baseColor = textureSample(modelTexture, modelSampler, uv).rgb;
  let n = normalize(normal);
  
  // Use direct light for reflection (not refracted light)
  let diffuse = max(0.0, dot(-light.direction, n)) * 0.6;
  
  // No caustics or underwater tint needed for reflection
  // Dummy usage of waterTexture and causticTexture to keep bind group layout compatible
  let unusedW = textureSampleLevel(waterTexture, waterSampler, vec2f(0.0), 0.0).r;
  let unusedC = textureSampleLevel(causticTexture, waterSampler, vec2f(0.0), 0.0).r;
  let color = baseColor * (0.4 + diffuse) + (unusedW + unusedC) * 0.00001;

  return vec4f(color, 1.0);
}
