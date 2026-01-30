#include "../common/bindings.wgsl"
#include "../common/functions.wgsl"

// Bindings (structs are in common/bindings.wgsl)
@binding(0) @group(0) var<uniform> commonUniforms : CommonUniforms;
@binding(1) @group(0) var<uniform> light : LightUniforms;
@binding(2) @group(0) var<uniform> sphere : SphereUniforms;
@binding(10) @group(0) var<uniform> shadows : ShadowUniforms;
@binding(3) @group(0) var tileSampler : sampler;
@binding(4) @group(0) var tileTexture : texture_2d<f32>;
@binding(5) @group(0) var waterSampler : sampler;
@binding(6) @group(0) var waterTexture : texture_2d<f32>;
@binding(7) @group(0) var skySampler : sampler;
@binding(8) @group(0) var skyTexture : texture_cube<f32>;
@binding(9) @group(0) var causticTexture : texture_2d<f32>;
@binding(11) @group(0) var<uniform> reflection : ReflectionUniforms;
@binding(12) @group(0) var reflectionSampler : sampler;
@binding(13) @group(0) var reflectionTexture : texture_2d<f32>;
@binding(14) @group(0) var refractionSampler : sampler;
@binding(15) @group(0) var refractionTexture : texture_2d<f32>;

// Physical constants
const IOR_AIR : f32 = 1.0;
const IOR_WATER : f32 = 1.333;
const ABOVEwaterColor : vec3f = vec3f(0.25, 1.0, 1.25);
const UNDERwaterColor : vec3f = vec3f(0.4, 0.9, 1.0);

// Ray-sphere intersection
fn intersectSphere(origin: vec3f, ray: vec3f, sphereCenter: vec3f, sphereRadius: f32) -> f32 {
    let toSphere = origin - sphereCenter;
    let a = dot(ray, ray);
    let b = 2.0 * dot(toSphere, ray);
    let c = dot(toSphere, toSphere) - sphereRadius * sphereRadius;
    let discriminant = b*b - 4.0*a*c;
    if (discriminant > 0.0) {
      let t = (-b - sqrt(discriminant)) / (2.0 * a);
      if (t > 0.0) { return t; }
    }
    return 1.0e6; // No hit
}

// Calculates sphere color at hit point (same as sphere.ts shader)
fn getSphereColor(point: vec3f, IOR_AIR: f32, IOR_WATER: f32) -> vec3f {
    var color = vec3f(0.5);
    let sphereRadius = sphere.radius;

    // Distance-based darkening near pool walls
    color *= 1.0 - 0.9 / pow((1.0 + sphereRadius - abs(point.x)) / sphereRadius, 3.0);
    color *= 1.0 - 0.9 / pow((1.0 + sphereRadius - abs(point.z)) / sphereRadius, 3.0);
    color *= 1.0 - 0.9 / pow((point.y + 1.0 + sphereRadius) / sphereRadius, 3.0);

    // Diffuse lighting with caustics
    let sphereNormal = (point - sphere.center) / sphereRadius;
    let refractedLight = refract(-light.direction, vec3f(0.0, 1.0, 0.0), IOR_AIR / IOR_WATER);
    var diffuse = max(0.0, dot(-refractedLight, sphereNormal)) * 0.5;

    let info = textureSampleLevel(waterTexture, waterSampler, point.xz * 0.5 + 0.5, 0.0);
    if (point.y < info.r) {
        let causticUV = 0.75 * (point.xz - point.y * refractedLight.xz / refractedLight.y) * 0.5 + 0.5;
        let caustic = textureSampleLevel(causticTexture, waterSampler, causticUV, 0.0);
        diffuse *= caustic.r * 4.0;
    }
    color += diffuse;
    return color;
}

// Calculates pool wall color at hit point
fn getWallColor(point: vec3f, IOR_AIR: f32, IOR_WATER: f32, poolHeight: f32) -> vec3f {
    var wallColor : vec3f;
    var normal = vec3f(0.0, 1.0, 0.0);

    // Sample tile texture based on wall orientation
    if (abs(point.x) > 0.999) {
        wallColor = textureSampleLevel(tileTexture, tileSampler, point.yz * 0.5 + vec2f(1.0, 0.5), 0.0).rgb;
        normal = vec3f(-point.x, 0.0, 0.0);
    } else if (abs(point.z) > 0.999) {
        wallColor = textureSampleLevel(tileTexture, tileSampler, point.yx * 0.5 + vec2f(1.0, 0.5), 0.0).rgb;
        normal = vec3f(0.0, 0.0, -point.z);
    } else {
        wallColor = textureSampleLevel(tileTexture, tileSampler, point.xz * 0.5 + 0.5, 0.0).rgb;
    }

    // Ambient occlusion
    var scale = 0.5;
    scale /= length(point);
    scale *= mix(1.0, 1.0 - 0.9 / pow(length(point - sphere.center) / sphere.radius, 4.0), shadows.sphere);

    // Lighting with caustics or rim shadow
    let refractedLight = -refract(-light.direction, vec3f(0.0, 1.0, 0.0), IOR_AIR / IOR_WATER);
    var diffuse = max(0.0, dot(refractedLight, normal));

    let info = textureSampleLevel(waterTexture, waterSampler, point.xz * 0.5 + 0.5, 0.0);
    if (point.y < info.r) {
        let causticUV = 0.75 * (point.xz - point.y * refractedLight.xz / refractedLight.y) * 0.5 + 0.5;
        let caustic = textureSampleLevel(causticTexture, waterSampler, causticUV, 0.0);
        scale += diffuse * caustic.r * 2.0 * caustic.g;
    } else {
        let t = intersectCube(point, refractedLight, vec3f(-1.0, -poolHeight, -1.0), vec3f(1.0, 2.0, 1.0));
        diffuse *= 1.0 / (1.0 + exp(-200.0 / (1.0 + 10.0 * (t.y - t.x)) * (point.y + refractedLight.y * t.y - 2.0 / 12.0)));
        scale += diffuse * 0.5;
    }

    return wallColor * scale;
}

// Traces a ray from water surface to find color
fn getSurfaceRayColor(origin: vec3f, ray: vec3f, waterColor: vec3f) -> vec3f {
    var color : vec3f;
    let poolHeight = 1.0;

    // Check sphere intersection first (only if sphere is enabled)
    var q = 1.0e6;
    if (shadows.sphere > 0.5) {
        q = intersectSphere(origin, ray, sphere.center, sphere.radius);
    }

    if (q < 1.0e6) {
        color = getSphereColor(origin + ray * q, IOR_AIR, IOR_WATER);
    } else if (ray.y < 0.0) {
        // Ray going down - hit pool walls/floor
        let t = intersectCube(origin, ray, vec3f(-1.0, -poolHeight, -1.0), vec3f(1.0, 2.0, 1.0));
        color = getWallColor(origin + ray * t.y, IOR_AIR, IOR_WATER, poolHeight);
    } else {
        // Ray going up - hit walls or sky
        let t = intersectCube(origin, ray, vec3f(-1.0, -poolHeight, -1.0), vec3f(1.0, 2.0, 1.0));
        let hit = origin + ray * t.y;
        if (hit.y < 2.0 / 12.0) {
            color = getWallColor(hit, IOR_AIR, IOR_WATER, poolHeight);
        } else {
            // Sample skybox
            color = textureSampleLevel(skyTexture, skySampler, ray, 0.0).rgb;
            // Add sun specular highlight
            let sunDir = normalize(light.direction);
            let spec = pow(max(0.0, dot(sunDir, ray)), 5000.0);
            color += vec3f(spec) * vec3f(10.0, 8.0, 6.0);
        }
    }

    // Apply underwater tint for downward rays
    if (ray.y < 0.0) {
        color *= waterColor;
    }
    return color;
}

// Samples the reflection texture for the duck's underwater reflection.
// Uses the same planar projection as the above-water sampleReflection:
// project through the mirrored VP and sample the reflectionTexture.
fn sampleUnderwaterReflection(worldPos: vec3f) -> vec4f {
    let clip = reflection.viewProjectionMatrix * vec4f(worldPos, 1.0);
    let ndc = clip.xyz / max(clip.w, 1.0e-6);
    let uv = vec2f(ndc.x * 0.5 + 0.5, 0.5 - ndc.y * 0.5);

    let uvClamped = clamp(uv, vec2f(0.0), vec2f(1.0));
    let inMin = step(vec2f(0.0), uv);
    let inMax = step(uv, vec2f(1.0));
    let inBounds = inMin.x * inMin.y * inMax.x * inMax.y;
    let validW = step(0.0, clip.w);
    let mask = inBounds * validW;
    return textureSampleLevel(reflectionTexture, reflectionSampler, uvClamped, 0.0) * mask;
}

@fragment
fn fs_main(@location(0) worldPos : vec3f) -> @location(0) vec4f {
    // Sample normal with UV refinement for smooth appearance
    var uv = worldPos.xz * 0.5 + 0.5;
    var info = textureSampleLevel(waterTexture, waterSampler, uv, 0.0);

    // Iteratively refine UV based on normal offset
    for (var i = 0; i < 5; i++) {
        uv += info.ba * 0.005;
        info = textureSampleLevel(waterTexture, waterSampler, uv, 0.0);
    }

    // Reconstruct normal from BA channels
    let ba = vec2f(info.b, info.a);
    var normal = vec3f(info.b, sqrt(max(0.0, 1.0 - dot(ba, ba))), info.a);

    // Ray from camera to water surface
    let incomingRay = normalize(worldPos - commonUniforms.eyePosition);

    // UNDERWATER VIEW: Looking up at water surface
    normal = -normal; // Flip normal for underwater
    let reflectedRay = reflect(incomingRay, normal);
    let refractedRay = refract(incomingRay, normal, IOR_WATER / IOR_AIR);
    let fresnel = mix(0.5, 1.0, pow(1.0 - dot(normal, -incomingRay), 3.0));

    var reflectedColor = getSurfaceRayColor(worldPos, reflectedRay, UNDERwaterColor);
    let underwaterReflection = sampleUnderwaterReflection(worldPos);
    reflectedColor = mix(reflectedColor, underwaterReflection.rgb, underwaterReflection.a);

    let refractedColor = getSurfaceRayColor(worldPos, refractedRay, vec3f(1.0)) * vec3f(0.8, 1.0, 1.1);

    let finalColor = mix(reflectedColor, refractedColor, (1.0 - fresnel) * length(refractedRay));

    return vec4f(finalColor, 1.0);
}
