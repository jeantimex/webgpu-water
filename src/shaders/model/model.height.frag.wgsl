@fragment
fn fs_main(@location(0) worldPos : vec3f, @builtin(front_facing) is_front: bool) -> @location(0) vec4f {
  // Calculate submerged thickness using additive blending.
  // Front faces (top) contribute negative depth.
  // Back faces (bottom) contribute positive depth.
  // Result is Top - Bottom clamped to y=0.
  
  let y = min(0.0, worldPos.y);
  let val = select(-y, y, is_front);
  return vec4f(val, 0.0, 0.0, 1.0);
}
