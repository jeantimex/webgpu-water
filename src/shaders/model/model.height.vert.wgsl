#include "../common/bindings.wgsl"

@binding(0) @group(0) var<uniform> modelUniforms : ModelUniforms;

struct VertexOutput {
  @builtin(position) position : vec4f,
  @location(0) worldPos : vec3f,
}

@vertex
fn vs_main(@location(0) position : vec3f) -> VertexOutput {
  var output : VertexOutput;
  let worldPos = modelUniforms.center + position * modelUniforms.scale;
  
  // Transform to orthographic top-down view covering [-1, 1] on X and Z
  output.position = vec4f(worldPos.x, worldPos.z, 0.0, 1.0);
  output.worldPos = worldPos;
  
  return output;
}
