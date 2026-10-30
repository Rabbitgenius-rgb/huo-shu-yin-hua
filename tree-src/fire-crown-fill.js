// A few compact sprays in the empty middle-depth band. Reuse real silver
// grains and their exact image coordinates: this adds depth, not new front
// silhouette pixels, widened sprites, opaque surfaces or a continuous haze.
import { SPRAYS } from './fire-tree-volume.js';
import { CROWN_CLUSTERS } from './fire-crown-clusters.js';

const LAYOUT = Object.freeze({
  positions: 3, colors: 3, seeds: 3, energies: 1, normals: 3,
  florets: 2, crownWeights: 1, buds: 4, growth: 3,
});
const VERSION = 'source-grain-depth-fill-v1';
const MAX_ADDED = 18000;

// Source spray, new depth, depth compression, maximum number, core ellipse q.
// Alternating depths and unequal core radii keep several channels through the
// canopy. The large original front/back sprays are never moved or replaced.
const FILL = Object.freeze([
  [15, -.75, .65, 900, .65],
  [16, -.10, .78, 800, .63],
  [18, .55, .62, 1100, .60],
  [23, -1.65, .68, 1000, .54],
  [24, .15, .78, 550, .67],
  [26, -.45, .62, 1100, .53],
  [27, -1.80, .65, 800, .58],
  [34, .25, .85, 500, .70],
  [5, .35, .65, 750, .62],
  [7, .55, .65, 1000, .54],
  [37, .80, .60, 800, .66],
  [42, -.75, .60, 700, .56],
].map(([sourceSpray, targetZ, depthScale, maximum, coreQ]) =>
  Object.freeze({sourceSpray, targetZ, depthScale, maximum, coreQ})));

function hash32(value) {
  value = Math.imul(value ^ value >>> 16, 0x7feb352d);
  value = Math.imul(value ^ value >>> 15, 0x846ca68b);
  return (value ^ value >>> 16) >>> 0;
}
const randomFor = (particle, spray, channel) =>
  hash32(particle ^ Math.imul(spray + 1, 0x9e3779b1) ^ Math.imul(channel + 1, 0x85ebca6b)) / 4294967296;
const clamp01 = value => Math.max(0, Math.min(1, value));

/**
 * Pure, deterministic append. All original attribute elements are retained
 * byte-for-byte; calling this on its own output is a no-op. No DOM, image
 * decoder or renderer is needed. The caller still owns the original cloud.
 */
export function addCrownDepthFill(cloud) {
  if (cloud?.crownFillVersion === VERSION) return cloud;
  if (!Number.isSafeInteger(cloud?.count) || cloud.count < 0) {
    throw new TypeError('A sampled particle cloud with a valid count is required.');
  }
  for (const [name, width] of Object.entries(LAYOUT)) {
    if (!(cloud[name] instanceof Float32Array) || cloud[name].length !== cloud.count * width) {
      throw new TypeError(`Invalid particle attribute: ${name}.`);
    }
  }

  const pools = FILL.map(() => []);
  for (let i = 0; i < cloud.count; i++) {
    const k3 = i * 3, k4 = i * 4;
    // Only bright, genuinely silver crown interiors. In particular do not
    // replicate branches, warm fringe dust, water mist or the existing gaps.
    if (cloud.growth[k3 + 1] > .1 || cloud.growth[k3 + 2] >= 9 ||
        cloud.buds[k4 + 3] < .8 || cloud.crownWeights[i] < .55 ||
        cloud.colors[k3 + 2] / Math.max(cloud.colors[k3], .001) < .72) continue;
    const x = cloud.positions[k3], y = cloud.positions[k3 + 1], z = cloud.positions[k3 + 2];
    const cx = x + cloud.buds[k4], cy = y + cloud.buds[k4 + 1], cz = z + cloud.buds[k4 + 2];
    for (let j = 0; j < FILL.length; j++) {
      const config = FILL[j], spray = SPRAYS[config.sourceSpray];
      // Bud + destination identifies the actual selected spray; nearest x/y
      // alone would misclassify the overlapping front/back source sprays.
      if ((cx - spray.x) ** 2 + (cy - spray.y) ** 2 + (cz - spray.z) ** 2 > 1e-8) continue;
      const source = CROWN_CLUSTERS[config.sourceSpray];
      const dx = x - spray.x, dy = y - spray.y;
      // Source ellipses use image y-down; these particle offsets are y-up.
      const u = (dx * source.cos - dy * source.sin) / spray.rxw;
      const v = (dx * source.sin + dy * source.cos) / spray.ryw;
      if (u * u + v * v > config.coreQ) break;
      pools[j].push({index: i, rank: randomFor(i, config.sourceSpray, 7)});
      break;
    }
  }

  let added = 0;
  const selected = pools.map((pool, j) => {
    // Fixed hash ranking thins the actual photographic microstructure evenly;
    // it does not draw a regular grid or synthesize a spherical particle puff.
    pool.sort((a, b) => a.rank - b.rank || a.index - b.index);
    const points = pool.slice(0, Math.min(FILL[j].maximum, MAX_ADDED - added));
    added += points.length;
    return points;
  });
  const out = {...cloud, count: cloud.count + added};
  for (const [name, width] of Object.entries(LAYOUT)) {
    out[name] = new Float32Array(out.count * width);
    out[name].set(cloud[name]);
  }

  let cursor = cloud.count;
  const configs = [];
  for (let j = 0; j < FILL.length; j++) {
    const config = FILL[j], spray = SPRAYS[config.sourceSpray];
    for (const {index} of selected[j]) {
      for (const [name, width] of Object.entries(LAYOUT)) {
        const source = cloud[name], target = out[name];
        for (let axis = 0; axis < width; axis++) target[cursor * width + axis] = source[index * width + axis];
      }
      const k3 = cursor * 3, k4 = cursor * 4;
      out.positions[k3 + 2] = config.targetZ + (cloud.positions[index * 3 + 2] - spray.z) * config.depthScale;
      out.buds[k4 + 2] = config.targetZ - out.positions[k3 + 2];
      // Transform the source volume normal for the same z compression. The
      // fine photographic floret detail and silver color are copied exactly.
      const nx = out.normals[k3], ny = out.normals[k3 + 1], nz = out.normals[k3 + 2] / config.depthScale;
      const length = Math.hypot(nx, ny, nz) || 1;
      out.normals[k3] = nx / length; out.normals[k3 + 1] = ny / length; out.normals[k3 + 2] = nz / length;
      for (let axis = 0; axis < 3; axis++) out.seeds[k3 + axis] = randomFor(index, config.sourceSpray, axis);
      // Open slightly before/after the source spray instead of repeating one
      // synchronized flash. growth.y remains the crown flag (zero).
      out.growth[k3] = clamp01(cloud.growth[index * 3] + (randomFor(j, config.sourceSpray, 4) - .5) * .07);
      out.growth[k3 + 1] = 0;
      cursor++;
    }
    configs.push({...config, sourceZ: spray.z, candidateCount: pools[j].length, addedParticles: selected[j].length});
  }
  return {
    ...out, crownFillVersion: VERSION, baseCount: cloud.count,
    addedCrownClusters: configs.filter(config => config.addedParticles > 0).length,
    addedParticles: added, crownFillConfigs: configs,
  };
}
