#include "../common/bindings.wgsl"

@binding(0) @group(0) var<uniform> commonUniforms : CommonUniforms;
@binding(1) @group(0) var<uniform> modelUniforms : ModelUniforms;
@binding(2) @group(0) var<uniform> light : LightUniforms;
@binding(3) @group(0) var waterSampler : sampler;
@binding(4) @group(0) var waterTexture : texture_2d<f32>;
@binding(5) @group(0) var causticTexture : texture_2d<f32>;
@binding(6) @group(0) var modelSampler : sampler;
@binding(7) @group(0) var modelTexture : texture_2d<f32>;

struct VertexOutput {
  @builtin(position) position : vec4f,
  @location(0) worldPos : vec3f,
  @location(1) normal : vec3f,
  @location(2) uv : vec2f,
}

@vertex
fn vs_main(
  @location(0) position : vec3f,
  @location(1) normal : vec3f,
  @location(2) uv : vec2f
) -> VertexOutput {
  var output : VertexOutput;
  let worldPos = modelUniforms.center + position * modelUniforms.scale;
  output.position = commonUniforms.viewProjectionMatrix * vec4f(worldPos, 1.0);
  output.worldPos = worldPos;
  output.normal = normal;
  output.uv = vec2f(uv.x, 1.0 - uv.y);
  return output;
}
