import type { CubemapURLs } from './types';

export class Cubemap {
  private device: GPUDevice;
  private texture: GPUTexture | null;

  constructor(device: GPUDevice) {
    this.device = device;
    this.texture = null;
  }

  async load(urls: CubemapURLs): Promise<GPUTexture> {
    const order: (keyof CubemapURLs)[] = ['xpos', 'xneg', 'ypos', 'yneg', 'zpos', 'zneg'];

    // Load all images first to get dimensions
    const images = await Promise.all(order.map(name =>
      fetch(urls[name]).then(res => res.blob()).then(blob => createImageBitmap(blob))
    ));

    const width = images[0].width;
    const height = images[0].height;

    this.texture = this.device.createTexture({
      size: [width, height, 6],
      format: 'rgba8unorm',
      usage: GPUTextureUsage.TEXTURE_BINDING | GPUTextureUsage.COPY_DST | GPUTextureUsage.RENDER_ATTACHMENT,
      viewFormats: ['rgba8unorm'],
    });

    for (let i = 0; i < 6; i++) {
      this.device.queue.copyExternalImageToTexture(
        { source: images[i], flipY: true },
        { texture: this.texture, origin: [0, 0, i] },
        { width, height }
      );
    }

    return this.texture;
  }
}
