@group(0) @binding(0) var waterTexture : texture_2d<f32>;
@group(0) @binding(1) var heightMapOld : texture_2d<f32>;
@group(0) @binding(2) var heightMapNew : texture_2d<f32>;
@group(0) @binding(3) var waterSampler : sampler;

@fragment
fn fs_main(@location(0) uv : vec2f) -> @location(0) vec4f {
  var info = textureSampleLevel(waterTexture, waterSampler, uv, 0.0);
  
  let oldH = textureSampleLevel(heightMapOld, waterSampler, uv, 0.0).r;
  let newH = textureSampleLevel(heightMapNew, waterSampler, uv, 0.0).r;
  
  // Apply displacement change:
  // Add volume leaving (oldH) and subtract volume entering (newH)
  info.r += oldH - newH;
  
  return info;
}
