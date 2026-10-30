// Coherent, source-registered subcrowns for the existing silver particles.
// Unlike fine 3D noise, these gaps survive integration through the full depth
// of the tree. This field only shades existing points: no new surfaces, moved
// image coordinates, seeded randomness, or replacement crown geometry.
import { branchGrowthAt } from './fire-image-depth.js';
const WORLD_PER_PIXEL = 12.2 / 1456;
const clamp01 = value => Math.max(0, Math.min(1, value));
const smooth = value => value * value * (3 - 2 * value);

// x/y and elliptical radii in the selected 1456 x 816 image; rotation degrees;
// depth center/radius in world units. Unequal sizes and staggered centers leave
// distinct channels through the broad central silver canopy. The old source
// silhouette and its luminous filaments remain supplied by the image itself.
const SOURCE_CLUSTERS = [
  [619, 76, 31, 27, -28, -.65, .95],
  [652, 129, 42, 32, -39, -.72, 1.12],
  [464, 122, 36, 34, 26, -1.40, 1.04],
  [407, 166, 26, 31, 25, -1.08, .91],
  [477, 190, 49, 43, -20, -1.20, 1.18],
  [565, 174, 39, 36, 17, .80, 1.16],
  [724, 162, 36, 32, -24, -.90, 1.03],
  [802, 162, 36, 35, 26, -1.35, 1.02],
  [852, 214, 30, 28, -37, -.42, .93],
  [222, 199, 35, 28, -15, -.65, .88],
  [281, 226, 36, 30, 32, -.43, 1.00],
  [349, 208, 40, 33, -31, -.62, 1.08],
  [312, 286, 33, 29, -25, -.28, .91],
  [389, 277, 37, 39, 35, .36, 1.05],
  [446, 328, 35, 30, -18, .68, 1.12],
  [492, 275, 41, 34, -35, .52, 1.22],
  [575, 253, 37, 32, 28, .92, 1.23],
  [646, 216, 32, 31, -19, .10, 1.12],
  [711, 249, 43, 38, 35, -1.00, 1.18],
  [792, 262, 31, 35, -24, -.97, 1.05],
  [861, 284, 39, 32, 22, -.17, 1.13],
  [938, 262, 35, 27, -16, .75, 1.01],
  [977, 303, 24, 21, 37, .22, .83],
  [552, 335, 43, 35, -18, 1.17, 1.20],
  [624, 312, 28, 31, 29, .50, 1.08],
  [674, 368, 29, 37, -20, -.13, 1.02],
  [609, 404, 38, 31, 24, .76, 1.16],
  [518, 409, 39, 35, -32, 1.18, 1.22],
  [469, 381, 24, 23, 17, .91, .99],
  [399, 370, 27, 25, -16, .62, .96],
  [318, 392, 37, 22, 8, 1.00, 1.02],
  [253, 400, 25, 18, -20, .90, .86],
  [653, 451, 23, 25, 29, .05, .89],
  [571, 463, 27, 20, -30, 1.10, 1.01],
  [722, 312, 24, 23, 28, -.92, .98],
  [819, 330, 26, 20, -18, -.30, .95],
  [933, 351, 33, 25, 15, -.75, 1.05],
  [1005, 337, 37, 28, -22, -.92, 1.17],
  [1080, 343, 31, 24, 29, .20, 1.18],
  [1152, 360, 36, 27, -15, .50, 1.17],
  [1215, 395, 30, 24, 31, .85, 1.06],
  [1007, 400, 35, 26, 25, -.70, 1.12],
  [1077, 414, 33, 30, -28, .48, 1.22],
  [1154, 426, 33, 28, 16, .58, 1.18],
  [1239, 456, 30, 25, -21, .94, 1.01],
  [1291, 448, 22, 24, 33, .90, .88],
  [1113, 474, 31, 20, -13, -.70, 1.02],
  [1190, 485, 30, 19, 22, .36, .99],
  [1257, 517, 22, 21, -26, .65, .85],
  // Small offset satellites break up an even beaded rhythm along the crown.
  [541, 119, 20, 22, -18, .32, .85],
  [686, 94, 17, 19, 22, -.68, .82],
  [762, 211, 19, 22, -31, -1.20, .94],
  [366, 337, 20, 18, 22, .40, .92],
  [889, 233, 17, 21, 18, .23, .93],
  [1049, 470, 18, 17, -21, -.70, .90],
];

// Some neighbours become one asymmetric spray; the remainder are much smaller
// satellites. These are 55 field generators, not 55 separately outlined buds.
const LEADERS = new Set([1, 4, 5, 7, 10, 13, 15, 18, 20, 23, 26, 27, 30, 37, 39, 42, 44]);
const CLUSTERS = SOURCE_CLUSTERS.map((p, index) => {
  const angle = p[4] * Math.PI / 180;
  const leader = LEADERS.has(index);
  const scaleX = leader ? 1.43 + .22 * Math.sin(index * 2.7) : index > 48 ? .78 : 1.02;
  const scaleY = leader ? 1.32 + .25 * Math.cos(index * 1.9) : index > 48 ? .82 : 1.00;
  return Object.freeze({
    x: p[0], y: p[1], rx: p[2] * scaleX, ry: p[3] * scaleY,
    cos: Math.cos(angle), sin: Math.sin(angle),
    z: p[5], rz: p[6], phase: index * 2.399963229728653,
  });
});

export const CROWN_CLUSTER_COUNT = CLUSTERS.length;
/** The 55 spray generators (source px centre, radii, rotation, prior depth). */
export const CROWN_CLUSTERS = CLUSTERS;

// Local exposure for the established flower pads. This changes direct-view
// silver cores only; the renderer keeps the original masks and mirror light.
// Upper crowns carry the broad silhouette, the right-hand pad is secondary,
// and the very dense low-left overlap no longer carries all of the light.
const PAD_RADIANCE = new Map([
  [1, 2.40], [4, 2.40], [5, 1.40], [7, 2.50],
  [10, 1.15], [11, 1.20], [15, .90], [16, .70], [17, 1.15], [18, 1.60], [20, 1.20],
  [23, .65], [26, .75], [27, .65],
  [37, 1.80], [38, 1.30], [39, 1.75], [42, 1.35],
]);

/** Renderer-only attribute; never mutates the source cloud or its gaps. */
export function createCrownRadiance(cloud) {
  const values = new Float32Array(cloud.count).fill(1);
  const centers = CLUSTERS.map(c => [(c.x - 728) * WORLD_PER_PIXEL, (408 - c.y) * WORLD_PER_PIXEL]);
  const counts = new Array(CLUSTERS.length).fill(0);
  let unmatched = 0;
  for (let i = 0; i < cloud.count; i++) {
    const k3 = i * 3, k4 = i * 4;
    if (cloud.growth[k3 + 1] > .5 || cloud.buds[k4 + 3] <= 0) continue;
    const x = cloud.positions[k3] + cloud.buds[k4];
    const y = cloud.positions[k3 + 1] + cloud.buds[k4 + 1];
    // Match the actual bud, not the nearest screen-space lobe. Filled-depth
    // clones share their source pad's x/y and inherit the same hierarchy.
    let pad = -1;
    for (let j = 0; j < centers.length; j++) {
      if ((x - centers[j][0]) ** 2 + (y - centers[j][1]) ** 2 < 1e-8) { pad = j; break; }
    }
    if (pad < 0) { unmatched++; continue; }
    values[i] = PAD_RADIANCE.get(pad) ?? 1;
    counts[pad]++;
  }
  return {values, unmatched, counts, gains: Object.fromEntries(PAD_RADIANCE)};
}

// Bloom order: a spray opens after the growth front has reached the branch
// nearest to it, a little later the farther it hangs from that branch. A small
// fixed per-spray offset keeps neighbours from popping as one smooth wave.
const BLOOM_ORDER = (() => {
  const raw = CLUSTERS.map((c, index) => {
    const { growth, distance } = branchGrowthAt(c.x, c.y);
    const jitter = (Math.sin(index * 12.9898 + 4.1) * 43758.5453) % 1;
    return growth + Math.min(distance, 140) / 1100 + jitter * .07;
  });
  // Blend spatial order with rank so bursts are evenly paced, never bunched.
  const lo = Math.min(...raw), hi = Math.max(...raw);
  const rank = raw.map((value, i) => [value, i]).sort((x, y) => x[0] - y[0])
    .reduce((out, [, i], r) => (out[i] = r / (raw.length - 1), out), []);
  return raw.map((value, i) => .45 * (value - lo) / (hi - lo) + .55 * rank[i]);
})();
export const SPRAY_BLOOM_ORDER = BLOOM_ORDER;

/**
 * Bud data for one existing crown particle (world x/y before ray compensation,
 * inferred z). Returns [dx, dy, dz, weight, bloomOrder]: the offset from the
 * particle's own destination to its spray's centre, how strongly it takes part
 * in that spray's gather-and-burst, and the spray's normalized opening time.
 * The destination itself never changes; this only shapes the approach.
 */
export function sampleBud(x, y, z) {
  if (![x, y, z].every(Number.isFinite)) return [0, 0, 0, 0, 1];
  const sx = x / WORLD_PER_PIXEL + 728;
  const sy = 408 - y / WORLD_PER_PIXEL;
  let best = Infinity, bestIndex = 0;
  for (let i = 0; i < CLUSTERS.length; i++) {
    const c = CLUSTERS[i];
    const dx = sx - c.x, dy = sy - c.y;
    const u = (dx * c.cos + dy * c.sin) / c.rx;
    const v = (-dx * c.sin + dy * c.cos) / c.ry;
    const depth = (z - c.z) / c.rz;
    const q = u * u + v * v + .45 * depth * depth;
    if (q < best) { best = q; bestIndex = i; }
  }
  const c = CLUSTERS[bestIndex];
  const weight = 1 - smooth(clamp01((best - 1.15) / 2.6));
  return [
    (c.x - sx) * WORLD_PER_PIXEL,
    (sy - c.y) * WORLD_PER_PIXEL,
    c.z - z,
    weight,
    BLOOM_ORDER[bestIndex],
    bestIndex,
  ];
}

/** Projected ellipse area of one spray generator, in source pixels². */
export function clusterArea(index) {
  const c = CLUSTERS[index];
  return Math.PI * c.rx * c.ry;
}

/**
 * Which sprays cover a source position, in the same warped, roughened space
 * that sampleCrownCluster uses for the front-view gaps, but without its depth
 * term: [[index, q], ...] for q <= limit, plus the nearest spray. Used to put
 * each crown point inside the 3D volume of a spray that actually covers it.
 */
export function sprayCoverage(x, y, limit = 1.25) {
  const sx = x / WORLD_PER_PIXEL + 728;
  const sy = 408 - y / WORLD_PER_PIXEL;
  const wx = sx + 15 * Math.sin(sy * .044 + sx * .021) + 6 * Math.sin(sy * .113);
  const wy = sy + 13 * Math.sin(sx * .049 - sy * .027) + 5 * Math.cos(sx * .102);
  const nWide = noise(sx / 31 + 8.3, sy / 31 - 4.7);
  const nFine = noise(sx / 11 - 13.2, sy / 11 + 2.8);
  const roughness = .92 * (nWide - .5) + .33 * (nFine - .5);
  const covering = [];
  let best = Infinity, bestIndex = 0;
  for (let i = 0; i < CLUSTERS.length; i++) {
    const c = CLUSTERS[i];
    const dx = wx - c.x, dy = wy - c.y;
    const u = (dx * c.cos + dy * c.sin) / c.rx;
    const v = (-dx * c.sin + dy * c.cos) / c.ry;
    const q = u * u + v * v + roughness;
    if (q < best) { best = q; bestIndex = i; }
    if (q <= limit) covering.push([i, q]);
  }
  return { covering, nearest: [bestIndex, best] };
}

function noise(x, y) {
  const ix = Math.floor(x), iy = Math.floor(y);
  const fx = smooth(x - ix), fy = smooth(y - iy);
  const hash = (a, b) => {
    let n = Math.imul(a, 374761393) ^ Math.imul(b, 668265263);
    n = Math.imul(n ^ n >>> 13, 1274126177);
    return ((n ^ n >>> 16) >>> 0) / 4294967296;
  };
  const a = hash(ix, iy), b = hash(ix + 1, iy);
  const c = hash(ix, iy + 1), d = hash(ix + 1, iy + 1);
  return (a + (b - a) * fx) * (1 - fy) + (c + (d - c) * fx) * fy;
}

/**
 * Immutable subcrown density in [0, 1]. Inputs are existing world-space source
 * x/y BEFORE ray compensation, plus existing inferred depth. Intended mapping:
 * alpha *= mix(1, .015 + 1.25 * weight, landed * silverCanopyMask).
 * Keep the original fine-point shader, source colors, and floret microdetail.
 * A large opacity floor would reconnect these deliberately dark gaps.
 */
export function sampleCrownCluster(x, y, z) {
  if (![x, y, z].every(Number.isFinite)) return 0;
  const sx = x / WORLD_PER_PIXEL + 728;
  const sy = 408 - y / WORLD_PER_PIXEL;

  // Coherent multi-scale deformation travels across adjacent generators.
  // It breaks ellipse outlines into lopsided branching tufts and loose fringes
  // rather than giving every bud a similarly scalloped or star-shaped edge.
  const wx = sx + 15 * Math.sin(sy * .044 + sx * .021) + 6 * Math.sin(sy * .113);
  const wy = sy + 13 * Math.sin(sx * .049 - sy * .027) + 5 * Math.cos(sx * .102);
  const nWide = noise(sx / 31 + 8.3, sy / 31 - 4.7);
  const nFine = noise(sx / 11 - 13.2, sy / 11 + 2.8);
  const roughness = .92 * (nWide - .5) + .33 * (nFine - .5);
  let best = Infinity;
  for (const c of CLUSTERS) {
    const dx = wx - c.x, dy = wy - c.y;
    if (Math.abs(dx) > c.rx + c.ry || Math.abs(dy) > c.rx + c.ry) continue;
    const u = (dx * c.cos + dy * c.sin) / c.rx;
    const v = (-dx * c.sin + dy * c.cos) / c.ry;
    const qxy = u * u + v * v;
    if (qxy > 2.1) continue;
    // Filled interiors have no bright shell. Stronger local depth falloff
    // prevents a subcrown becoming a long streak when seen at 45 degrees.
    const depth = (z - c.z) / c.rz;
    const q = qxy + .68 * depth * depth + roughness;
    if (q < best) best = q;
  }
  const body = 1 - smooth(clamp01((best - .10) / 1.34));
  const fringe = (1 - smooth(clamp01((best - .70) / 1.28))) * .10 * nFine;

  // Two softly ending, irregular channels divide the formerly continuous
  // central crown while allowing neighbouring sprays elsewhere to touch.
  // They are fields through existing particles, never drawn dark strokes.
  const bandA = smooth(clamp01((sy - 205) / 32)) * smooth(clamp01((376 - sy) / 39));
  const pathA = 530 + .66 * (sy - 220) + 12 * Math.sin(sy * .047);
  const gapA = (1 - smooth(clamp01((Math.abs(sx - pathA) - 7) / (11 + 8 * nWide)))) * bandA;
  const bandB = smooth(clamp01((sx - 331) / 37)) * smooth(clamp01((518 - sx) / 37));
  const pathB = 281 + .18 * (sx - 400) + 9 * Math.sin(sx * .048);
  const gapB = (1 - smooth(clamp01((Math.abs(sy - pathB) - 5) / (10 + 7 * nFine)))) * bandB;
  return clamp01(Math.max(body, fringe) * (1 - .965 * Math.max(gapA, gapB)));
}
