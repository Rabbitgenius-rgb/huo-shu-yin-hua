// The selected Midjourney image supplies destinations and colors only.
// No image plane, image tiles, video, or texture is rendered in the scene.
// The sampling loop and both RNG sequences are unchanged from the accepted
// crown-clusters edition, so every source pixel, color and seed is identical.
// Depth along each pixel's front ray now comes from the 3D tree volume
// (fire-tree-volume.js); a third, independent RNG drives it, so the previous
// front-view spray gating (computed from the old depth) stays per-point identical.
// Output is now packed straight into typed arrays (no multi-million-element
// JS arrays), which can be transferred from a worker without copying.
import { sampleFloretDetail } from './fire-floret-detail.js';
import { sampleCrownCluster, CROWN_CLUSTER_COUNT } from './fire-crown-clusters.js';
import { treeVolume, SPRAYS, SPRAY_ORDER } from './fire-tree-volume.js';

export const SOURCE_URL = new URL('./public/fire-tree-mj-04.jpg', document.baseURI).href;

// Attribute layout: name → components per particle.
export const LAYOUT = Object.freeze({
  positions: 3, colors: 3, seeds: 3, energies: 1, normals: 3,
  florets: 2, crownWeights: 1, buds: 4, growth: 3,
});

function makeBuffers(capacity) {
  const buffers = {};
  for (const [name, size] of Object.entries(LAYOUT)) buffers[name] = new Float32Array(capacity * size);
  return buffers;
}

function growBuffers(buffers, capacity) {
  const next = makeBuffers(capacity);
  for (const name of Object.keys(LAYOUT)) next[name].set(buffers[name]);
  return next;
}

/** Pure sampling over RGBA bytes; runs on the main thread or in a worker. */
export function sampleFromPixels(pixels, w, h, {groundToWater = true} = {}) {
  let state = 20261023;
  const random = () => {
    state |= 0; state = state + 0x6D2B79F5 | 0;
    let t = Math.imul(state ^ state >>> 15, 1 | state);
    t = t + Math.imul(t ^ t >>> 7, 61 | t) ^ t;
    return ((t ^ t >>> 14) >>> 0) / 4294967296;
  };
  let depthState=38172026;
  const depthRandom=()=>{
    depthState=depthState+0x6D2B79F5|0;
    let t=Math.imul(depthState^depthState>>>15,1|depthState);
    t=t+Math.imul(t^t>>>7,61|t)^t;
    return ((t^t>>>14)>>>0)/4294967296;
  };
  let volumeState=52701937;
  const volumeRandom=()=>{
    volumeState=volumeState+0x6D2B79F5|0;
    let t=Math.imul(volumeState^volumeState>>>15,1|volumeState);
    t=t+Math.imul(t^t>>>7,61|t)^t;
    return ((t^t>>>14)>>>0)/4294967296;
  };
  let capacity = 320000, count = 0;
  let b = makeBuffers(capacity);
  let clusterOf = new Int16Array(capacity).fill(-1);
  let onWater = new Uint8Array(capacity);
  const sprayWeight = new Float64Array(CROWN_CLUSTER_COUNT), sprayR2 = new Float64Array(CROWN_CLUSTER_COUNT);
  const worldWidth = 12.2, worldHeight = worldWidth * h / w;
  // The deep teal silk is a backdrop, not a rectangular particle destination.
  // A soft luminance threshold retains the tree's fine silver and ember edges.
  for (let y = 2; y < h - 2; y += 1.65) {
    for (let x = 2; x < w - 2; x += 1.65) {
      const sx = Math.floor(x), sy = Math.floor(y), i = (sy * w + sx) * 4;
      const r = pixels[i] / 255, g = pixels[i + 1] / 255, bl = pixels[i + 2] / 255;
      const lum = r * .2126 + g * .7152 + bl * .0722;
      const warmth = Math.max(0, Math.min(1, (r - bl) * 4.2));
      const threshold = .19 - warmth * .035;
      if (lum < threshold) continue;
      const edge = Math.min(1, (lum - threshold) / .105);
      if (random() > edge * Math.min(1, .42 + lum * 1.05 + warmth * .22)) continue;
      const copies = lum > .58 ? 3 : lum > .34 || warmth > .2 ? 2 : 1;
      const energy = Math.min(1, Math.pow(lum, .65) + warmth * .1);
      const value = Math.pow(lum, 1.25) * 1.35;
      const max = Math.max(r, g, bl, .001);
      for (let n = 0; n < copies; n++) {
        if (count === capacity) {
          capacity = Math.ceil(capacity * 1.4); b = growBuffers(b, capacity);
          const next = new Int16Array(capacity).fill(-1); next.set(clusterOf); clusterOf = next;
          const water = new Uint8Array(capacity); water.set(onWater); onWater = water;
        }
        // Stratified subpixel scatter avoids a visible sampling lattice.
        // Depth follows this image-space ray; no branch or crown is redrawn.
        const px = ((x + (random() - .5) * 1.9) / w - .5) * worldWidth;
        const py = (.5 - (y + (random() - .5) * 1.9) / h) * worldHeight;
        const depth = treeVolume(sx,sy,r,g,bl,depthRandom,volumeRandom,px,py,groundToWater);
        const pz = depth.z;
        random(); // Keep the accepted edition's sampling/flight seed sequence.
        const k3 = count * 3, k2 = count * 2, k4 = count * 4;
        onWater[count] = depth.onWater ? 1 : 0;
        b.positions[k3] = px; b.positions[k3 + 1] = py; b.positions[k3 + 2] = pz;
        b.normals[k3] = depth.normal[0]; b.normals[k3 + 1] = depth.normal[1]; b.normals[k3 + 2] = depth.normal[2];
        const floret = sampleFloretDetail(px,py,pz);
        b.florets[k2] = floret[0]; b.florets[k2 + 1] = floret[1];
        // Front-view gaps: evaluated with the previous depth, so exactly the same
        // points stay lit in the front view as in the accepted edition.
        b.crownWeights[count] = depth.material===0 && sy<510 ? sampleCrownCluster(px,py,depth.frontZ) : 1;
        // Timing only: branch particles follow the growth front from the trunk
        // base; crown particles gather into their spray's bud, then open.
        if (depth.growth >= 0) {
          b.growth[k3] = depth.growth; b.growth[k3 + 1] = 1; b.growth[k3 + 2] = 1;
        } else {
          // Each crown point bursts from the 3D centre of the spray it belongs to.
          const spray = SPRAYS[depth.spray];
          const q = Math.max(0, depth.sprayQ), t = Math.min(1, Math.max(0, (q - 1.15) / 2.6));
          const weight = 1 - t * t * (3 - 2 * t);
          const dx = spray.x - px, dy = spray.y - py;
          b.buds[k4] = dx; b.buds[k4 + 1] = dy; b.buds[k4 + 2] = spray.z - pz; b.buds[k4 + 3] = weight;
          b.growth[k3] = SPRAY_ORDER[depth.spray]; b.growth[k3 + 1] = 0;
          clusterOf[count] = depth.spray;
          sprayWeight[depth.spray] += weight;
          sprayR2[depth.spray] += weight * (dx * dx + dy * dy);
        }
        // Source pixels are sRGB; linearize their chroma before the output pass,
        // otherwise the warm branches become nearly white after tone mapping.
        b.colors[k3] = Math.pow(r / max, 2.1) * value * (1 + warmth * .12);
        b.colors[k3 + 1] = Math.pow(g / max, 2.1) * value * (1 - warmth * .12);
        b.colors[k3 + 2] = Math.pow(bl / max, 2.1) * value * (1 - warmth * .18);
        b.seeds[k3] = random(); b.seeds[k3 + 1] = random(); b.seeds[k3 + 2] = random();
        b.energies[count] = energy;
        count++;
      }
    }
  }
  // Bud gain: a spray gathered from the brightest (3-copy) source region would
  // otherwise collapse into a blown-out blob. Normalize each bud's areal density.
  const density = Array.from(sprayWeight, (weight, i) => weight > 1 ? weight * weight / sprayR2[i] : 0);
  const sorted = density.filter(d => d > 0).sort((x, y) => x - y);
  const median = sorted[Math.floor(sorted.length / 2)] || 1;
  const gain = density.map(d => d > 0 ? Math.min(1.25, Math.max(.22, (median / d) ** .85)) : 1);
  for (let i = 0; i < count; i++) if (clusterOf[i] >= 0) b.growth[i * 3 + 2] = gain[clusterOf[i]];
  // growth.z >= 10 flags root mist lying on the water surface (gain = z - 10).
  for (let i = 0; i < count; i++) if (onWater[i]) b.growth[i * 3 + 2] += 10;
  const out = { count, sourceWidth: w, sourceHeight: h };
  for (const [name, size] of Object.entries(LAYOUT)) out[name] = b[name].slice(0, count * size);
  return out;
}

async function decodePixels(url) {
  const image = new Image();
  image.src = url;
  await image.decode();
  const canvas = document.createElement('canvas');
  canvas.width = image.naturalWidth;
  canvas.height = image.naturalHeight;
  const ctx = canvas.getContext('2d', { willReadFrequently: true });
  ctx.drawImage(image, 0, 0);
  return { pixels: ctx.getImageData(0, 0, canvas.width, canvas.height).data, w: canvas.width, h: canvas.height };
}

/** Main-thread path; also the fallback when module workers are unavailable. */
export async function sampleFireTree(url = SOURCE_URL, options = {}) {
  const { pixels, w, h } = await decodePixels(url);
  return sampleFromPixels(pixels, w, h, options);
}

/** Off-main-thread sampling keeps the page responsive while ~293K points build. */
export function sampleFireTreeInWorker() {
  if (typeof Worker === 'undefined' || typeof OffscreenCanvas === 'undefined') return sampleFireTree();
  return new Promise((resolve, reject) => {
    let worker;
    try {
      worker = new Worker(new URL('./fire-sample-worker.js', import.meta.url), { type: 'module' });
    } catch {
      sampleFireTree().then(resolve, reject);
      return;
    }
    const fallback = () => { worker.terminate(); sampleFireTree().then(resolve, reject); };
    worker.onerror = event => { event.preventDefault?.(); fallback(); };
    worker.onmessage = ({ data }) => {
      worker.terminate();
      if (data && data.ok) resolve(data.result); else fallback();
    };
    worker.postMessage({ url: new URL(SOURCE_URL, location.href).href });
  });
}
