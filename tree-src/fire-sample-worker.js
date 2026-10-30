// Builds the point cloud off the main thread. Same pure sampling function as
// the main-thread fallback; typed arrays are transferred back without copying.
import { sampleFromPixels, LAYOUT } from './fire-tree-cloud.js';

self.onmessage = async ({ data }) => {
  try {
    const response = await fetch(data.url);
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    // Match <img> decoding: no premultiply (opaque JPEG) and default color management.
    const bitmap = await createImageBitmap(await response.blob());
    const canvas = new OffscreenCanvas(bitmap.width, bitmap.height);
    const ctx = canvas.getContext('2d', { willReadFrequently: true });
    ctx.drawImage(bitmap, 0, 0);
    const pixels = ctx.getImageData(0, 0, bitmap.width, bitmap.height).data;
    const started = performance.now();
    const result = sampleFromPixels(pixels, bitmap.width, bitmap.height);
    result.sampleMs = performance.now() - started;
    self.postMessage({ ok: true, result }, Object.keys(LAYOUT).map(name => result[name].buffer));
  } catch (error) {
    self.postMessage({ ok: false, error: String(error) });
  }
};
