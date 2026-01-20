/**
 * main.ts - WebGPU Water Simulation Entry Point
 *
 * This is the main entry point for the interactive water simulation demo.
 * It initializes WebGPU, loads resources, sets up event handlers, and runs
 * the main render loop.
 *
 * Features:
 * - Interactive water ripples (click/drag on water surface)
 * - Draggable sphere with physics (gravity, buoyancy)
 * - Orbit camera controls (drag on empty space)
 * - Dynamic lighting (hold L key to adjust light direction)
 * - Pause/resume simulation (spacebar)
 *
 * Controls:
 * - Click on water: Add ripple
 * - Drag on water: Add multiple ripples
 * - Drag on sphere: Move sphere
 * - Drag elsewhere: Rotate camera
 * - G key: Toggle gravity/physics on sphere
 * - L key (hold): Adjust light direction with camera
 * - Spacebar: Pause/resume simulation
 */

import { mat4, vec3 } from 'wgpu-matrix';
import GUI from 'lil-gui';
import { Pool } from './pool';
import { Sphere } from './sphere';
import { Water } from './water';
import { Vector, Raytracer } from './lightgl';
import { Cubemap } from './cubemap';
import { InteractionMode } from './types';
import type { MatricesPair, Viewport } from './types';

/**
 * Main initialization function.
 * Sets up WebGPU, loads resources, and starts the render loop.
 */
async function init(): Promise<void> {
  // --- WebGPU Initialization ---

  const gpu = navigator.gpu;
  if (!gpu) {
    document.getElementById('loading')!.innerHTML = 'WebGPU not supported.';
    return;
  }

  const adapter = await gpu.requestAdapter();
  if (!adapter) {
    document.getElementById('loading')!.innerHTML = 'No WebGPU adapter found.';
    return;
  }

  // Request float32-filterable feature if available (better precision for water simulation)
  const requiredFeatures: GPUFeatureName[] = [];
  if (adapter.features.has('float32-filterable')) {
    requiredFeatures.push('float32-filterable');
  }

  const device = await adapter.requestDevice({ requiredFeatures });
  const canvas = document.querySelector('canvas')!;
  const context = canvas.getContext('webgpu')!;
  const format = navigator.gpu.getPreferredCanvasFormat();

  context.configure({ device, format, alphaMode: 'premultiplied' });

  // --- State Variables ---

  const help = document.getElementById('help')!;
  const ratio = window.devicePixelRatio || 1; // For high-DPI displays
  let prevTime = performance.now();

  // --- Texture Loading ---

  /**
   * Loads an image from URL and creates a WebGPU texture.
   * @param url - Path to the image file
   * @returns Promise resolving to the created GPUTexture
   */
  async function loadTexture(url: string): Promise<GPUTexture> {
    const res = await fetch(url);
    const blob = await res.blob();
    const source = await createImageBitmap(blob);

    const texture = device.createTexture({
      label: url,
      size: [source.width, source.height],
      format: 'rgba8unorm',
      usage: GPUTextureUsage.TEXTURE_BINDING | GPUTextureUsage.COPY_DST | GPUTextureUsage.RENDER_ATTACHMENT,
    });

    device.queue.copyExternalImageToTexture(
      { source, flipY: true },
      { texture },
      { width: source.width, height: source.height }
    );

    return texture;
  }

  // Base URL for assets (handles Vite dev server and production build)
  const base = import.meta.env.BASE_URL as string;

  // Load tile texture for pool walls
  const tileTexture = await loadTexture(`${base}tiles.jpg`);
  const tileSampler = device.createSampler({
    magFilter: 'linear',
    minFilter: 'linear',
    addressModeU: 'repeat',
    addressModeV: 'repeat',
  });

  // Load skybox cubemap for reflections
  const cubemap = new Cubemap(device);
  const skyTexture = await cubemap.load({
    xpos: `${base}xpos.jpg`, xneg: `${base}xneg.jpg`,
    ypos: `${base}ypos.jpg`, yneg: `${base}yneg.jpg`,
    zpos: `${base}zpos.jpg`, zneg: `${base}zneg.jpg`
  });
  const skySampler = device.createSampler({ magFilter: 'linear', minFilter: 'linear' });

  // --- Camera State ---

  /** Camera pitch angle in degrees */
  let angleX = -25;
  /** Camera yaw angle in degrees */
  let angleY = -200.5;

  /**
   * Computes the current view and projection matrices based on camera angles.
   * @returns Object containing projectionMatrix and viewMatrix
   */
  function getMatrices(): MatricesPair {
    const aspect = canvas.width / canvas.height;
    const projectionMatrix = mat4.perspective(Math.PI / 4, aspect, 0.01, 100);

    // Build view matrix: translate back, rotate, translate up
    const viewMatrix = mat4.identity();
    mat4.translate(viewMatrix, [0, 0, -4], viewMatrix);      // Camera distance
    mat4.rotateX(viewMatrix, -angleX * Math.PI / 180, viewMatrix); // Pitch
    mat4.rotateY(viewMatrix, -angleY * Math.PI / 180, viewMatrix); // Yaw
    mat4.translate(viewMatrix, [0, 0.5, 0], viewMatrix);     // Look slightly above center

    return { projectionMatrix, viewMatrix };
  }

  // --- Uniform Buffers ---

  // Common uniforms: view-projection matrix (64 bytes) + eye position (12 bytes) + padding (4 bytes)
  const uniformBuffer = device.createBuffer({
    size: 80,
    usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST,
  });

  // Light direction (vec3 + padding = 16 bytes)
  const lightUniformBuffer = device.createBuffer({
    size: 16,
    usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST,
  });

  // Sphere position and radius (vec3 + float = 16 bytes)
  const sphereUniformBuffer = device.createBuffer({
    size: 16,
    usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST,
  });

  // Shadow toggle flags (3 floats + padding = 16 bytes)
  const shadowUniformBuffer = device.createBuffer({
    size: 16,
    usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST,
  });

  // --- Lighting ---

  /** Current light direction (normalized) */
  let lightDir = new Vector(2.0, 2.0, -1.0).unit();

  /**
   * Updates the light direction uniform buffer.
   */
  function updateLight(): void {
    device.queue.writeBuffer(lightUniformBuffer, 0, new Float32Array([...lightDir.toArray(), 0]));
  }
  updateLight();

  // Initialize shadow flags (all enabled: rim=1, sphere=1, ao=1)
  device.queue.writeBuffer(shadowUniformBuffer, 0, new Float32Array([1.0, 1.0, 1.0, 0.0]));

  // --- Scene Objects ---

  // Create pool (walls and floor)
  const pool = new Pool(device, format, uniformBuffer, tileTexture, tileSampler, lightUniformBuffer, sphereUniformBuffer, shadowUniformBuffer);

  // Create interactive sphere
  const sphere = new Sphere(device, format, uniformBuffer, lightUniformBuffer, sphereUniformBuffer);

  // Create water simulation (256x256 resolution)
  const water = new Water(device, 256, 256, uniformBuffer, lightUniformBuffer, sphereUniformBuffer, shadowUniformBuffer, tileTexture, tileSampler, skyTexture, skySampler);

  // --- Sphere Physics State ---

  /** Current sphere center position */
  let center = new Vector(-0.4, -0.75, 0.2);
  /** Previous frame sphere position (for water displacement) */
  let oldCenter = center.clone();
  /** Sphere radius */
  const radius = 0.25;
  /** Current sphere velocity */
  let velocity = new Vector();
  /** Gravity acceleration vector */
  const gravity = new Vector(0, -4, 0);
  /** Whether physics (gravity/buoyancy) is enabled */
  let useSpherePhysics = false;
  /** Whether simulation is paused */
  let paused = false;

  // --- GUI ---
  const gui = new GUI({ title: 'Settings' });
  gui.close(); // Collapse by default
  
  const settings = {
    gravity: useSpherePhysics,
    followCamera: false
  };

  const gravityController = gui.add(settings, 'gravity').name('Toggle Gravity').onChange((v: boolean) => {
    useSpherePhysics = v;
  });
  gui.add(settings, 'followCamera').name('Light From Camera').onChange(() => {
    (document.activeElement as HTMLElement)?.blur();
  });

  // Initialize sphere position
  sphere.update(center.toArray(), radius);

  // Add initial random ripples
  for (let i = 0; i < 20; i++) {
    water.addDrop(Math.random() * 2 - 1, Math.random() * 2 - 1, 0.03, (i & 1) ? 0.01 : -0.01);
  }

  // --- Keyboard Input ---

  /** Currently pressed keys (uppercase) */
  const keys: Record<string, boolean> = {};

  window.addEventListener('keydown', (e) => {
    const key = e.key.toUpperCase();
    keys[key] = true;
    if (key === 'G') {
      useSpherePhysics = !useSpherePhysics; // Toggle gravity
      settings.gravity = useSpherePhysics;
      gravityController.updateDisplay();
    }
    else if (key === ' ') paused = !paused;                // Toggle pause
  });

  window.addEventListener('keyup', (e) => {
    keys[e.key.toUpperCase()] = false;
  });

  // --- Pointer Interaction (supports mouse, touch, and pen) ---

  /** Current interaction mode */
  let mode: InteractionMode = InteractionMode.None;
  /** Previous pointer X position */
  let oldX = 0;
  /** Previous pointer Y position */
  let oldY = 0;
  /** Previous hit point for sphere dragging */
  let prevHit: Vector;
  /** Plane normal for sphere dragging */
  let planeNormal: Vector;

  /**
   * Gets the current viewport as [x, y, width, height].
   */
  function getViewport(): Viewport {
    return [0, 0, canvas.width, canvas.height];
  }

  /**
   * Handles pointer down - determines interaction mode.
   * @param x - Pointer X position in canvas coordinates
   * @param y - Pointer Y position in canvas coordinates
   */
  function startDrag(x: number, y: number): void {
    oldX = x;
    oldY = y;
    const { projectionMatrix, viewMatrix } = getMatrices();
    const tracer = new Raytracer(viewMatrix, projectionMatrix, getViewport());
    const ray = tracer.getRayForPixel(x * ratio, y * ratio);

    // Check if clicking on sphere
    const sphereHit = Raytracer.hitTestSphere(tracer.eye, ray, center, radius);
    if (sphereHit) {
      mode = InteractionMode.MoveSphere;
      prevHit = sphereHit.hit;
      // Use camera forward direction as drag plane normal
      planeNormal = tracer.getRayForPixel(canvas.width / 2, canvas.height / 2).negative();
      return;
    }

    // Check if clicking on water surface (y=0 plane)
    const tPlane = -tracer.eye.y / ray.y;
    const pointOnPlane = tracer.eye.add(ray.multiply(tPlane));

    if (Math.abs(pointOnPlane.x) < 1 && Math.abs(pointOnPlane.z) < 1) {
      // Click is within water bounds
      mode = InteractionMode.AddDrops;
      water.addDrop(pointOnPlane.x, pointOnPlane.z, 0.03, 0.01);
    } else {
      // Click is outside water - orbit camera
      mode = InteractionMode.OrbitCamera;
    }
  }

  /**
   * Handles pointer move during drag.
   * @param x - Current pointer X position
   * @param y - Current pointer Y position
   */
  function duringDrag(x: number, y: number): void {
    if (mode === InteractionMode.OrbitCamera) {
      // Rotate camera based on pointer delta
      angleY -= x - oldX;
      angleX -= y - oldY;
      angleX = Math.max(-89.999, Math.min(89.999, angleX)); // Clamp pitch
    } else if (mode === InteractionMode.MoveSphere) {
      // Move sphere along drag plane
      const { projectionMatrix, viewMatrix } = getMatrices();
      const tracer = new Raytracer(viewMatrix, projectionMatrix, getViewport());
      const ray = tracer.getRayForPixel(x * ratio, y * ratio);

      // Intersect ray with drag plane
      const t = -planeNormal.dot(tracer.eye.subtract(prevHit)) / planeNormal.dot(ray);
      const nextHit = tracer.eye.add(ray.multiply(t));

      // Update sphere position with bounds checking
      center = center.add(nextHit.subtract(prevHit));
      center.x = Math.max(radius - 1, Math.min(1 - radius, center.x));
      center.y = Math.max(radius - 1, Math.min(10, center.y));
      center.z = Math.max(radius - 1, Math.min(1 - radius, center.z));

      sphere.update(center.toArray(), radius);
      prevHit = nextHit;
    } else if (mode === InteractionMode.AddDrops) {
      // Add ripples while dragging on water
      const { projectionMatrix, viewMatrix } = getMatrices();
      const tracer = new Raytracer(viewMatrix, projectionMatrix, getViewport());
      const ray = tracer.getRayForPixel(x * ratio, y * ratio);
      const tPlane = -tracer.eye.y / ray.y;
      const pointOnPlane = tracer.eye.add(ray.multiply(tPlane));

      if (Math.abs(pointOnPlane.x) < 1 && Math.abs(pointOnPlane.z) < 1) {
        water.addDrop(pointOnPlane.x, pointOnPlane.z, 0.03, 0.01);
      }
    }
    oldX = x;
    oldY = y;
  }

  /**
   * Handles pointer up - ends interaction and releases capture.
   */
  function stopDrag(): void {
    mode = InteractionMode.None;
  }

  // Pointer event listeners (unified mouse/touch/pen input)
  canvas.addEventListener('pointerdown', (e) => {
    e.preventDefault();
    canvas.setPointerCapture(e.pointerId); // Capture pointer for smooth dragging
    startDrag(e.offsetX, e.offsetY);
  });

  canvas.addEventListener('pointermove', (e) => {
    if (mode !== InteractionMode.None) {
      duringDrag(e.offsetX, e.offsetY);
    }
  });

  canvas.addEventListener('pointerup', (e) => {
    canvas.releasePointerCapture(e.pointerId);
    stopDrag();
  });

  canvas.addEventListener('pointercancel', (e) => {
    canvas.releasePointerCapture(e.pointerId);
    stopDrag();
  });

  // --- Rendering ---

  /** Depth texture for 3D rendering */
  let depthTexture: GPUTexture;

  /**
   * Handles window resize - updates canvas size and recreates depth texture.
   */
  function onResize(): void {
    const isMobile = window.matchMedia('(max-width: 600px)').matches;
    const width = isMobile ? window.innerWidth : window.innerWidth - help.clientWidth - 20;
    const height = window.innerHeight;
    canvas.width = Math.floor(width * ratio);
    canvas.height = Math.floor(height * ratio);
    canvas.style.width = `${width}px`;
    canvas.style.height = `${height}px`;

    // Recreate depth texture at new size
    if (depthTexture) depthTexture.destroy();
    depthTexture = device.createTexture({
      size: [canvas.width, canvas.height],
      format: 'depth24plus',
      usage: GPUTextureUsage.RENDER_ATTACHMENT,
    });

    render();
  }

  window.addEventListener('resize', onResize);

  const helpToggle = document.getElementById('help-toggle')!;
  helpToggle.addEventListener('click', () => {
    help.classList.toggle('collapsed');
    helpToggle.textContent = help.classList.contains('collapsed') ? 'menu' : 'chevron_right';
    onResize();
  });

  document.getElementById('loading')!.innerHTML = '';
  onResize();

  /**
   * Updates the common uniform buffer with current camera matrices.
   */
  function updateUniforms(): void {
    const { projectionMatrix, viewMatrix } = getMatrices();
    const viewProjectionMatrix = mat4.multiply(projectionMatrix, viewMatrix);

    // Calculate eye position from inverse view matrix
    const invView = mat4.invert(viewMatrix);
    const eyeVec = vec3.transformMat4([0, 0, 0], invView);

    // Pack into uniform buffer: mat4 (16 floats) + vec3 (3 floats) + padding (1 float)
    const uniformData = new Float32Array(20);
    uniformData.set(viewProjectionMatrix, 0);
    uniformData.set(eyeVec, 16);

    device.queue.writeBuffer(uniformBuffer, 0, uniformData);
  }

  /**
   * Main render function - called every frame.
   */
  function render(): void {
    // Calculate delta time
    const time = performance.now();
    let seconds = (time - prevTime) / 1000;
    prevTime = time;
    if (seconds > 1) seconds = 1; // Cap delta time to prevent physics explosion

    // Update light direction if L key is held or Follow Camera is enabled
    if (keys['L'] || settings.followCamera) {
      lightDir = Vector.fromAngles((90 - angleY) * Math.PI / 180, -angleX * Math.PI / 180);
      updateLight();
    }

    if (!paused) {
      // --- Physics Update ---

      if (mode === InteractionMode.MoveSphere) {
        // User is dragging sphere - stop physics
        velocity = new Vector();
      } else if (useSpherePhysics) {
        // Apply gravity and buoyancy
        const percentUnderWater = Math.max(0, Math.min(1, (radius - center.y) / (2 * radius)));

        // Gravity reduced by buoyancy when underwater
        velocity = velocity.add(gravity.multiply(seconds - 1.1 * seconds * percentUnderWater));
        // Water drag proportional to velocity squared
        velocity = velocity.subtract(velocity.unit().multiply(percentUnderWater * seconds * velocity.dot(velocity)));
        center = center.add(velocity.multiply(seconds));

        // Floor collision
        if (center.y < radius - 1) {
          center.y = radius - 1;
          velocity.y = Math.abs(velocity.y) * 0.7; // Bounce with energy loss
        }

        sphere.update(center.toArray(), radius);
      }

      // Update water displacement from sphere movement
      water.moveSphere(oldCenter.toArray(), center.toArray(), radius);
      oldCenter = center.clone();

      // Run water simulation (twice per frame for smoother waves)
      water.stepSimulation();
      water.stepSimulation();
      water.updateNormals();
      water.updateCaustics();
    }

    // Update camera uniforms
    updateUniforms();

    // --- GPU Render Pass ---

    const commandEncoder = device.createCommandEncoder();
    const passEncoder = commandEncoder.beginRenderPass({
      colorAttachments: [{
        view: context.getCurrentTexture().createView(),
        clearValue: { r: 0, g: 0, b: 0, a: 1 },
        loadOp: 'clear',
        storeOp: 'store',
      }],
      depthStencilAttachment: {
        view: depthTexture.createView(),
        depthClearValue: 1.0,
        depthLoadOp: 'clear',
        depthStoreOp: 'store',
      }
    });

    // Render scene objects
    pool.render(passEncoder, water.textureA, water.sampler, water.causticsTexture);
    sphere.render(passEncoder, water.textureA, water.sampler, water.causticsTexture);
    water.renderSurface(passEncoder);

    passEncoder.end();
    device.queue.submit([commandEncoder.finish()]);
  }

  /**
   * Animation loop - calls render every frame.
   */
  function animate(): void {
    requestAnimationFrame(animate);
    render();
  }

  // Start the animation loop
  requestAnimationFrame(animate);
}

// Initialize the application
init();
