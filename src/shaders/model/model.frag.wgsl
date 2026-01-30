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
  let refractedLight = refract(-light.direction, vec3f(0.0, 1.0, 0.0), IOR_AIR / IOR_WATER);
  var diffuse = max(0.0, dot(-refractedLight, n)) * 0.6;

  let waterInfo = textureSampleLevel(waterTexture, waterSampler, worldPos.xz * 0.5 + 0.5, 0.0);
  if (worldPos.y < waterInfo.r) {
    let causticUV = 0.75 * (worldPos.xz - worldPos.y * refractedLight.xz / refractedLight.y) * 0.5 + 0.5;
    let caustic = textureSampleLevel(causticTexture, waterSampler, causticUV, 0.0);
    diffuse *= caustic.r * 4.0;
  }

  var color = baseColor * (0.4 + diffuse);

  if (worldPos.y < waterInfo.r) {
    color *= vec3f(0.4, 0.9, 1.0) * 1.2;
  }

  return vec4f(color, 1.0);
}
