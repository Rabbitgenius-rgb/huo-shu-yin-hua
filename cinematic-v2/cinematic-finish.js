// cinematic-v2 construction-time finish. Runs once, after the accepted
// assembly, and touches only per-particle attributes:
//  1. Branch material: one ember family (vermilion twigs -> gold limb cores),
//     replacing the pink / beige / blue-white mix inherited from image pixels.
//  2. Crown ember grains: most warm grains inside the silver crown become
//     silver; a sparse remainder stays as small gold accents.
//  3. Radial flowers: every silver flower keeps its centre, particle count and
//     burst identity, but its grains are re-seated as a bright heart, a set of
//     radiating filaments and a faint halo. The shared bloom therefore opens
//     along the filaments, like the iron flowers it is born with.
// Geometry outside the silver flowers is untouched.
import * as THREE from 'three';
import { VOLUME_PATHS } from '../tree-src/fire-tree-volume.js';
import { branchFiberCurve, branchFiberRadius } from './branch-structure.js';
import { reshapeCrownPosition } from './crown-volume-fill.js';
import { BRANCH_GROWTH, PARENTS } from '../tree-src/fire-image-depth.js';

// Limb hierarchy: tube thickness multiplier and the share of relocated grains.
const LIMB_ROLE = new Map([[0, 1.75], [1, 1.5], [5, 1.5], [2, 1.25], [3, 1.2], [6, 1.25], [10, 1.2]]);
// v2e: the trunk is drawn fully into its clean tube; the boughs only part of
// the way, so they keep an irregular, grainy outline. Root wisps 19–22 retire.
// v2o: the roots are back to the v1 (cinematic-preview) roots: their
// grains are left exactly as sampled; the finish passes do not touch them.
const ROOT_ROOTS = new Set([19, 20, 21, 22]);
// v2i: boughs are drawn much closer to their own axis (the image sheets read
// as flat slabs with cut ends); their roughness now comes from a knobby radius
// and a fuzzy outer shell instead of from the leftover sheet.
const PULL = id => id === 0 ? 1 : LIMB_ROLE.has(id) ? .86 : ROOT_ROOTS.has(id) ? .55 : .78;
/** Knobby radius along a bough (trunk stays clean). */
const roughness = (id, t) => id === 0 ? 1
  : 1 + .22 * Math.sin(t * 37 + id * 2.3) * Math.sin(t * 13 + id * .7) + .10 * Math.sin(t * 109 + id * 5.1);
// v2g: only the upward-hooking wisp retires; 19/20/22 return as tapering roots.
const ROOT_WISPS = new Set();

const SOURCE_WIDTH = 1456, SOURCE_HEIGHT = 816, PIXEL_WORLD = 12.2 / SOURCE_WIDTH;

/** Branch axes exactly as the light fibres draw them (crown reshape included). */
function branchAxes() {
  const samples = [];
  VOLUME_PATHS.forEach((path, id) => {
    if (ROOT_WISPS.has(id)) return; // retired root wisps: their grains join the limbs
    const curve = branchFiberCurve(id) || new THREE.CatmullRomCurve3(path.map(([x, y, z]) => new THREE.Vector3(
      (x - SOURCE_WIDTH * .5) * PIXEL_WORLD, (SOURCE_HEIGHT * .5 - y) * PIXEL_WORLD, z)), false, 'centripetal');
    const steps = Math.max(60, Math.ceil(curve.getLength() * 70));
    for (let k = 0; k <= steps; k++) {
      const t = k / steps, span = Math.min(path.length - 2, Math.floor(t * (path.length - 1)));
      const local = t * (path.length - 1) - span;
      const radius = branchFiberRadius(id, t, THREE.MathUtils.lerp(path[span][3], path[span + 1][3], local) * PIXEL_WORLD);
      const a = reshapeCrownPosition(curve.getPoint(Math.max(0, t - .002)).toArray());
      const b = reshapeCrownPosition(curve.getPoint(Math.min(1, t + .002)).toArray());
      const q = reshapeCrownPosition(curve.getPoint(t).toArray());
      const tx = b[0] - a[0], ty = b[1] - a[1], tz = b[2] - a[2], tl = Math.hypot(tx, ty, tz) || 1;
      const g = BRANCH_GROWTH[id], gs = Math.min(g.length - 2, Math.floor(t * (g.length - 1)));
      const growthHere = g[gs] + (g[gs + 1] - g[gs]) * (t * (g.length - 1) - gs);
      samples.push({id, t, growth: growthHere, q, tangent: [tx / tl, ty / tl, tz / tl],
        // Root flare: the trunk widens over its lowest stretch.
        radius: Math.max(.018, radius) * (LIMB_ROLE.get(id) ?? (ROOT_ROOTS.has(id) ? 1.2 : 1.1)) * (id === 0 ? 1 + .32 * (1 - smooth(0, .14, t)) : 1),
        pull: PULL(id)});
    }
  });
  // v2h continuity: a child bough never starts thicker than its parent at the
  // fork, both thickness and tidiness blend across the joint, and main limbs
  // keep a floor radius instead of narrowing to a beak-like point.
  const byId = new Map();
  for (const sample of samples) (byId.get(sample.id) || byId.set(sample.id, []).get(sample.id)).push(sample);
  for (const [id, list] of [...byId].sort((a, b) => a[0] - b[0])) {
    if (LIMB_ROLE.has(id)) {
      const mid = list[Math.floor(list.length / 2)].radius;
      for (const sample of list) sample.radius = Math.max(sample.radius, .45 * mid);
    }
    // v2i: every bough tapers into its tip instead of ending in a blunt cut.
    if (id !== 0 && !ROOT_ROOTS.has(id)) for (const sample of list) sample.radius *= mix(1, .36, smooth(.74, 1, sample.t));
    if (id === 0) {
      // Above its last fork (t≈0.64) the trunk tapers like a bough.
      const atFork = list.reduce((best, sample) => Math.abs(sample.t - .64) < Math.abs(best.t - .64) ? sample : best, list[0]).radius;
      for (const sample of list) {
        sample.pull = mix(1, .62, smooth(.62, .9, sample.t));
        if (sample.t > .64) sample.radius = Math.min(sample.radius, atFork * mix(1, .45, smooth(.64, 1, sample.t)));
      }
    }
    const parent = byId.get(PARENTS[id]);
    if (!parent || ROOT_ROOTS.has(id)) continue;
    const start = list[0].q;
    let joint = parent[0], best = Infinity;
    for (const sample of parent) {
      const d = (sample.q[0] - start[0]) ** 2 + (sample.q[1] - start[1]) ** 2 + (sample.q[2] - start[2]) ** 2;
      if (d < best) { best = d; joint = sample; }
    }
    const jointRadius = .92 * joint.radius, shrink = Math.min(1, jointRadius / list[0].radius);
    if (globalThis.location && /debug/.test(globalThis.location.search)) (globalThis.__joints ||= {})[id] = {parent: PARENTS[id], t: +joint.t.toFixed(3)};
    for (const sample of list) {
      const blend = smooth(0, .14, sample.t);
      sample.radius = mix(jointRadius, sample.radius * shrink, blend);
      sample.pull = mix(joint.pull, sample.pull, smooth(0, .16, sample.t));
    }
  }
  return samples;
}

/** v2n root system: a delta of roots that divides level by level, like the
 * crown mirrored downward (reference: the trunk splits into a few thick
 * fibrous roots, each forking finer as it hangs, tips fraying into dust).
 * Curves live in source-local space and start at the trunk/root junction. */
export function buildRootStrands(junction) {
  const rand = (k, salt) => hash(k * 131 + 7, salt + 90);
  const strands = [];
  let counter = 0;
  const STEPS = 32;
  const frameOf = at => u => {
    const a = at(Math.max(0, u - .01)), b = at(Math.min(1, u + .01));
    let t = [b[0] - a[0], b[1] - a[1], b[2] - a[2]]; const tl = Math.hypot(...t) || 1; t = t.map(v => v / tl);
    const ref = Math.abs(t[1]) < .9 ? [0, 1, 0] : [1, 0, 0];
    let nn = [t[1] * ref[2] - t[2] * ref[1], t[2] * ref[0] - t[0] * ref[2], t[0] * ref[1] - t[1] * ref[0]];
    const nl = Math.hypot(...nn) || 1; nn = nn.map(v => v / nl);
    const bb = [t[1] * nn[2] - t[2] * nn[1], t[2] * nn[0] - t[0] * nn[2], t[0] * nn[1] - t[1] * nn[0]];
    return {t, n: nn, b: bb};
  };
  const grow = (origin, azimuth, pitch, length, radius, level, parent, dist0, prefix, terminalOverride) => {
    const id = counter++, seed = rand(id, 1);
    // Roots steepen as they hang; azimuth drifts and meanders a little.
    const pitchEnd = Math.min(1.30, pitch + .22 + .28 * rand(id, 2));
    const curl = (rand(id, 3) - .5) * 1.1, wave = .13 + .12 * rand(id, 4), freq = 1.2 + 1.4 * rand(id, 5);
    const pts = [origin.slice()];
    let q = origin.slice(), endAz = azimuth;
    for (let k = 1; k <= STEPS; k++) {
      const u = (k - .5) / STEPS;
      const pch = pitch + (pitchEnd - pitch) * Math.pow(u, 1.3) + .5 * wave * Math.sin(u * freq * Math.PI + seed * 6.28);
      const az = azimuth + curl * u + wave * Math.sin(u * freq * 2.1 * Math.PI + seed * 9.1);
      const ds = length / STEPS;
      q = [q[0] + Math.cos(pch) * Math.cos(az) * ds, q[1] - Math.sin(pch) * ds, q[2] + Math.cos(pch) * Math.sin(az) * ds];
      pts.push(q); endAz = az;
    }
    const at = u => {
      const x = Math.min(STEPS - 1e-6, Math.max(0, u * STEPS)), k = Math.floor(x), f = x - k;
      return [0, 1, 2].map(a => pts[k][a] + (pts[k + 1][a] - pts[k][a]) * f);
    };
    const terminal = terminalOverride ?? level >= 2;
    const strand = {at, frame: frameOf(at), length, radius, endRadius: terminal ? radius * .14 : radius * .80,
      fibres: level === 0 ? 16 : level === 1 ? 11 : 7, seed, parent, level, terminal, dist0, points: pts, path: [...prefix, ...pts.slice(1)]};
    strands.push(strand);
    const self = strands.length - 1;
    if (!terminal) {
      // Fork at the end: the children fan out around the parent's heading.
      const kids = level === 0 && rand(id, 6) < .45 ? 3 : 2;
      for (let c = 0; c < kids; c++) {
        const fan = (c - (kids - 1) / 2) * (.50 + .35 * rand(id, 7 + c)) + (rand(id, 10 + c) - .5) * .25;
        grow(pts[STEPS], endAz + fan, Math.max(.18, pitchEnd - .30 + .30 * rand(id, 13 + c)),
          length * (.72 + .28 * rand(id, 16 + c)), strand.endRadius * (kids === 3 ? .70 : .80),
          level + 1, self, dist0 + length, strand.path);
      }
      // One fine rootlet leaves the side of every thick root.
      const u0 = .45 + .25 * rand(id, 20), side = rand(id, 21) < .5 ? -1 : 1, k0 = Math.round(u0 * STEPS);
      grow(at(u0), azimuth + curl * u0 + side * (.9 + .5 * rand(id, 22)), Math.min(1.1, pitch + .25),
        length * (.45 + .25 * rand(id, 23)), radius * .30, level + 1, self, dist0 + u0 * length,
        [...prefix, ...pts.slice(1, k0 + 1)], true);
    }
    return strand;
  };
  // Level-0 roots: x is left/right in the front view, +z toward the camera.
  // The right root runs out low and long, the left group is fuller, and two
  // shorter roots go toward and away from the lens.
  const ROOTS = [[.10, .26, .74, .150], [2.98, .40, .70, .160], [3.95, .55, .52, .120], [1.70, .62, .46, .110], [5.20, .50, .50, .105]];
  ROOTS.forEach(([azimuth, pitch, length, radius], m) => {
    const az = azimuth + (rand(200 + m, 1) - .5) * .25;
    const origin = [junction[0] + Math.cos(az) * .06, junction[1] + .05, junction[2] + Math.sin(az) * .06];
    grow(origin, az, pitch, length * (.9 + .2 * rand(200 + m, 2)), radius, 0, -1, 0, [origin.slice()]);
  });
  return strands;
}

export const CINEMATIC_FINISH_VERSION = 'cinematic-finish-v2';

const clamp = (x, lo = 0, hi = 1) => Math.max(lo, Math.min(hi, x));
const smooth = (a, b, x) => { const t = clamp((x - a) / (b - a)); return t * t * (3 - 2 * t); };
const mix = (a, b, t) => a + (b - a) * t;
function hash(i, salt = 0) {
  let n = Math.imul((i | 0) + 0x9e3779b1 * (salt + 1), 0x85ebca6b) ^ Math.imul(salt + 7919, 0xc2b2ae35);
  n = Math.imul(n ^ n >>> 16, 0x7feb352d);
  n = Math.imul(n ^ n >>> 15, 0x846ca68b);
  return ((n ^ n >>> 16) >>> 0) / 4294967296;
}
const cellKey = (x, y, z) => `${x},${y},${z}`;

/** Same bud grouping as crown-layer-finish (a bud is one flower). */
function collectFlowers(cloud, positions, buds) {
  const groups = [], cells = new Map(), cellSize = .025;
  for (let i = 0; i < cloud.count; i++) {
    const p = i * 3, b = i * 4;
    if (cloud.growth[p + 1] > .5 || cloud.growth[p + 2] >= 9 || buds[b + 3] <= .05) continue;
    const center = [positions[p] + buds[b], positions[p + 1] + buds[b + 1], positions[p + 2] + buds[b + 2]];
    const cell = center.map(v => Math.floor(v / cellSize));
    let group, nearest = .012 ** 2;
    for (let x = -1; x <= 1; x++) for (let y = -1; y <= 1; y++) for (let z = -1; z <= 1; z++) {
      const bucket = cells.get(cellKey(cell[0] + x, cell[1] + y, cell[2] + z));
      for (const candidate of bucket || []) {
        const d = (center[0] - candidate.center[0]) ** 2 + (center[1] - candidate.center[1]) ** 2
          + (center[2] - candidate.center[2]) ** 2;
        if (d < nearest) { nearest = d; group = candidate; }
      }
    }
    if (!group) {
      group = {center, indices: []};
      groups.push(group);
      const key = cellKey(...cell), bucket = cells.get(key) || [];
      bucket.push(group); cells.set(key, bucket);
    }
    group.indices.push(i);
  }
  return groups;
}

/** Evenly spread directions (Fibonacci sphere), rotated per flower. */
function rayDirections(count, seed) {
  // Random rotation from a hashed unit quaternion.
  const u1 = hash(seed, 11), u2 = hash(seed, 12), u3 = hash(seed, 13);
  const qx = Math.sqrt(1 - u1) * Math.sin(2 * Math.PI * u2), qy = Math.sqrt(1 - u1) * Math.cos(2 * Math.PI * u2);
  const qz = Math.sqrt(u1) * Math.sin(2 * Math.PI * u3), qw = Math.sqrt(u1) * Math.cos(2 * Math.PI * u3);
  const rotate = ([x, y, z]) => {
    const ix = qw * x + qy * z - qz * y, iy = qw * y + qz * x - qx * z;
    const iz = qw * z + qx * y - qy * x, iw = -qx * x - qy * y - qz * z;
    return [ix * qw + iw * -qx + iy * -qz - iz * -qy, iy * qw + iw * -qy + iz * -qx - ix * -qz,
      iz * qw + iw * -qz + ix * -qy - iy * -qx];
  };
  const directions = [];
  for (let k = 0; k < count; k++) {
    const y = 1 - (2 * k + 1) / count, r = Math.sqrt(Math.max(0, 1 - y * y));
    const phi = k * 2.399963229728653 + hash(seed, 20 + k) * .35;
    // Filaments lean slightly upward, like the iron sparks they are born with.
    const d = rotate([Math.cos(phi) * r, y, Math.sin(phi) * r]);
    d[1] += .18; const length = Math.hypot(...d);
    directions.push({d: d.map(v => v / length), reach: .80 + .34 * hash(seed, 60 + k)});
  }
  return directions;
}

export function finishCinematicCloud(cloud, {radialFlowers = true} = {}) {
  if (cloud.cinematicFinishVersion === CINEMATIC_FINISH_VERSION) return cloud;
  const n = cloud.count, growth = cloud.growth, energies = cloud.energies;
  const colors = cloud.colors.slice();
  const outline = cloud.branchOutline;
  let branchRecolored = 0, crownEmbersToSilver = 0, crownEmbersKept = 0;

  // 1 + 2: materials.
  for (let i = 0; i < n; i++) {
    const c = i * 3, r = colors[c], g = colors[c + 1], b = colors[c + 2];
    const lum = .2126 * r + .7152 * g + .0722 * b;
    const peak = Math.max(r, g, b, .001), warm = smooth(.05, .48, (r - b) / peak);
    if (growth[c + 1] > .5) {
      // Hot gold along the large limb cores, vermilion toward twigs and edges.
      const core = outline ? outline[c + 1] : 0;
      const heat = clamp(.62 * energies[i] + .50 * core - .22 + (hash(i, 3) - .5) * .16);
      const hue = [1, mix(.30, .64, heat), mix(.10, .30, heat)];
      const level = Math.min(1.25, lum * 1.38 + .05);
      colors[c] = hue[0] * level; colors[c + 1] = hue[1] * level; colors[c + 2] = hue[2] * level;
      branchRecolored++;
    } else if (growth[c + 2] < 9 && warm > .5) {
      if (hash(i, 5) < 1.01) { // v2b: leaves and flowers are all silver
        const level = Math.min(1.2, lum * 1.12 + .04);
        colors[c] = level * .97; colors[c + 1] = level; colors[c + 2] = level * 1.04;
        crownEmbersToSilver++;
      } else {
        const level = Math.min(1.2, Math.max(lum, .35) * 1.15);
        colors[c] = level; colors[c + 1] = level * .66; colors[c + 2] = level * .30;
        crownEmbersKept++;
      }
    }
  }

  let positions = cloud.positions, buds = cloud.buds, florets = cloud.florets;
  let crownWeights = cloud.crownWeights, normals = cloud.normals;
  const flowerStats = {flowers: 0, reshaped: 0, core: 0, filament: 0, halo: 0};
  if (radialFlowers) {
    positions = positions.slice(); buds = buds.slice(); florets = florets.slice();
    crownWeights = crownWeights.slice(); normals = normals.slice();
    const groups = collectFlowers(cloud, cloud.positions, cloud.buds);
    flowerStats.flowers = groups.length;
    for (let gi = 0; gi < groups.length; gi++) {
      const group = groups[gi], count = group.indices.length;
      if (count < 60) continue;
      const seed = Math.round(group.center[0] * 997 + group.center[1] * 3571 + group.center[2] * 7919);
      // Flower radius from its own grains (85th percentile of distance).
      const lengths = group.indices.map(i => Math.hypot(cloud.buds[i * 4], cloud.buds[i * 4 + 1], cloud.buds[i * 4 + 2]))
        .sort((a, b) => a - b);
      const radius = Math.max(.05, lengths[Math.floor(lengths.length * .85)]);
      const rays = rayDirections(Math.min(13, 6 + Math.floor(hash(seed, 1) * 3) + (count > 1500 ? 2 : 0) + (count > 4000 ? 2 : 0)), seed);
      // Filaments droop a little under their own weight, like a willow shell.
      const droop = .30 + .26 * hash(seed, 2);
      // Hierarchy: large flowers lead; small fills recede a little.
      const presence = mix(.78, 1, smooth(350, 2600, count));
      for (const i of group.indices) {
        const p = i * 3, b = i * 4, f = i * 2;
        const cx = cloud.positions[p] + cloud.buds[b], cy = cloud.positions[p + 1] + cloud.buds[b + 1];
        const cz = cloud.positions[p + 2] + cloud.buds[b + 2];
        let ox = -cloud.buds[b], oy = -cloud.buds[b + 1], oz = -cloud.buds[b + 2];
        const length = Math.hypot(ox, oy, oz);
        if (length < 1e-6) continue;
        ox /= length; oy /= length; oz /= length;
        const role = hash(i, 7);
        let dx = ox, dy = oy, dz = oz, distance = length, density, vein, weight;
        if (role < .22) {
          // Heart: pulled in toward the centre, direction kept.
          distance = length * (.14 + .26 * hash(i, 8));
          density = .68; vein = 0; weight = .90;
          flowerStats.core++;
        } else if (role < .80) {
          // Filament: seated onto the nearest ray, reaching that ray's length.
          let best = rays[0], bestDot = -2;
          for (const ray of rays) {
            const dot = ox * ray.d[0] + oy * ray.d[1] + oz * ray.d[2];
            if (dot > bestDot) { bestDot = dot; best = ray; }
          }
          const pull = .74;
          dx = mix(ox, best.d[0], pull); dy = mix(oy, best.d[1], pull); dz = mix(oz, best.d[2], pull);
          const l = Math.hypot(dx, dy, dz); dx /= l; dy /= l; dz /= l;
          distance = Math.min(length, radius * 1.25) * best.reach;
          const tip = smooth(.62 * radius, 1.02 * radius, distance);
          density = .18 + .30 * tip; vein = hash(i, 9) < .18 ? .10 * tip : 0; weight = .70 + .20 * tip;
          flowerStats.filament++;
        } else {
          // Halo: stays where it was, mostly dithered out as soft air.
          density = .04; vein = 0; weight = .22;
          flowerStats.halo++;
        }
        const sag = role >= .22 && role < .80 ? droop * radius * (distance / (radius * 1.25)) ** 2 : 0;
        positions[p] = cx + dx * distance; positions[p + 1] = cy + dy * distance - sag; positions[p + 2] = cz + dz * distance;
        buds[b] = cx - positions[p]; buds[b + 1] = cy - positions[p + 1]; buds[b + 2] = cz - positions[p + 2];
        florets[f] = density; florets[f + 1] = vein;
        crownWeights[i] = weight * presence;
        normals[p] = dx; normals[p + 1] = dy; normals[p + 2] = dz;
        flowerStats.reshaped++;
      }
    }
  }
  // Branch hierarchy: the main trunk stays the thickest form. The dense
  // side bundles (added 10-26) read thicker than the trunk and are retired;
  // the cloned fan-copy limbs drop to a faint supporting presence.
  const branchDensity = cloud.branchDensity.slice();
  let bundleHidden = 0, cloneDimmed = 0;
  const cloneStart = (cloud.baseCount ?? 0) + 10000 + (cloud.supportParticles || 0);
  for (let i = 0; i < n; i++) {
    if (growth[i * 3 + 1] <= .5) continue;
    if (cloud.bundleBaseCount !== undefined && i >= cloud.bundleBaseCount && i < cloud.rootContactBaseCount) {
      branchDensity[i] = 0; bundleHidden++;
    } else if (cloud.twigBaseCount !== undefined && i >= cloneStart && i < cloud.twigBaseCount) {
      branchDensity[i] *= .35; cloneDimmed++;
    }
  }
  // v2c tidy limbs: every image-sampled limb grain is drawn into a clean
  // round tube around its nearest real branch axis (perpendicular offset
  // compressed to ~0.9 radius; position along the branch kept). Grains far
  // from every axis — loose fringe and blotches — fade instead of moving.
  // Support twigs, twig particles and the root contact keep their own forms.
  if (positions === cloud.positions) positions = positions.slice();
  // v2r: every placed bough grain records its axis (for the brightness ladder)
  // and gets a radial normal (for the view sheen and stem light).
  if (normals === cloud.normals) normals = normals.slice();
  const grainAxis = new Int16Array(n).fill(-1);
  const setRadial = (p, x, y, z) => { const l = Math.hypot(x, y, z); if (l > 1e-6) { normals[p] = x / l; normals[p + 1] = y / l; normals[p + 2] = z / l; } };
  const branchOutline = cloud.branchOutline ? cloud.branchOutline.slice() : null;
  const axes = branchAxes(), cell = .12, grid = new Map();
  const rootJunction = axes.find(sample => sample.id === 0 && sample.t === 0)?.q || [.33, -2.54, 0];
  const key = (x, y, z) => `${Math.floor(x / cell)},${Math.floor(y / cell)},${Math.floor(z / cell)}`;
  axes.forEach((sample, k) => { const id = key(...sample.q); (grid.get(id) || grid.set(id, []).get(id)).push(k); });
  const supportStart = (cloud.baseCount ?? 0) + 10000, supportEnd = supportStart + (cloud.supportParticles || 0);
  let limbsTidied = 0, limbFringeFaded = 0, limbFilled = 0, limbFringeKept = 0, gapFilled = 0;
  const BINS = 24, binCount = new Map();
  const fringe = [];
  const growthArray = cloud.growth.slice();
  // v2q root tips: the four root paths draw their light fibre to the very tip,
  // but the original shader retires the loose ember fan far from the trunk
  // (rootFringe), so the outer part of every root showed a bare line. Grains
  // within a tube around a root path are now flagged (outline z = 2) and are
  // exempt from that retirement; thin stretches are topped up from the loose pool.
  const ROOT_KEEP = .17;
  const rootBins = new Map(), rootHeld = new Map();
  let rootKept = 0, rootFilled = 0;
  const markRootTube = (i, p, k, d2) => {
    if (!branchOutline || k < 0) return;
    const s = axes[k];
    // The tube narrows toward the tip so each root ends in a taper, not a club.
    if (!ROOT_ROOTS.has(s.id) || Math.sqrt(d2) > ROOT_KEEP * (1 - .5 * smooth(.4, 1, s.t)) + 1.5 * s.radius) return;
    branchOutline[p + 2] = 2; rootKept++;
    // Fade toward the tip; grains lying beyond the path's end fade almost out.
    const reach = (positions[p] - s.q[0]) * s.tangent[0] + (positions[p + 1] - s.q[1]) * s.tangent[1] + (positions[p + 2] - s.q[2]) * s.tangent[2];
    branchDensity[i] *= (1 - .6 * smooth(.5, 1, s.t)) * (s.t > .98 && reach > .04 ? .2 : 1);
    const bin = `${s.id}:${Math.min(BINS - 1, Math.floor(s.t * BINS))}`;
    rootBins.set(bin, (rootBins.get(bin) || 0) + 1);
    (rootHeld.get(s.id) || rootHeld.set(s.id, []).get(s.id)).push(i);
  };
  for (let i = 0; i < n; i++) {
    if (growth[i * 3 + 1] <= .5 || branchDensity[i] === 0) continue;
    if (i >= supportStart && i < supportEnd) continue;
    if (cloud.twigBaseCount !== undefined && i >= cloud.twigBaseCount && i < (cloud.rootContactBaseCount + 800)) continue;
    const p = i * 3, x = positions[p], y = positions[p + 1], z = positions[p + 2];
    const belowJunction = y < rootJunction[1] + .03;   // v2o: v1 roots stay untouched (v2q: only flagged)
    const cx = Math.floor(x / cell), cy = Math.floor(y / cell), cz = Math.floor(z / cell);
    let best = -1, bestD = Infinity, second = -1, secondD = Infinity;
    for (let a = -2; a <= 2; a++) for (let b = -2; b <= 2; b++) for (let c = -2; c <= 2; c++) {
      const list = grid.get(`${cx + a},${cy + b},${cz + c}`);
      if (!list) continue;
      for (const k of list) {
        const q = axes[k].q, d = (x - q[0]) ** 2 + (y - q[1]) ** 2 + (z - q[2]) ** 2;
        if (d < bestD) {
          if (best >= 0 && axes[best].id !== axes[k].id) { second = best; secondD = bestD; }
          bestD = d; best = k;
        } else if (d < secondD && axes[k].id !== axes[best].id) { secondD = d; second = k; }
      }
    }
    if (belowJunction) { markRootTube(i, p, best, bestD); continue; }
    if (best < 0) { fringe.push(i); continue; }
    const {q, tangent, radius, id: axisId} = axes[best];
    if (ROOT_ROOTS.has(axisId)) { markRootTube(i, p, best, bestD); continue; }   // v2o: v1 roots stay untouched
    let vx = x - q[0], vy = y - q[1], vz = z - q[2];
    const along = vx * tangent[0] + vy * tangent[1] + vz * tangent[2];
    vx -= along * tangent[0]; vy -= along * tangent[1]; vz -= along * tangent[2];
    const d = Math.hypot(vx, vy, vz);
    if (d > radius * 2.6 + .10) {
      // Loose grains around a bough stay as a faint ember fringe (毛边);
      // only the trunk's own loose grains are gathered into the limbs.
      if (axisId !== 0 && hash(i, 36) < .14) { branchDensity[i] *= .32; limbFringeKept++; continue; }
      fringe.push(i); continue;
    }
    const knob = radius * roughness(axisId, axes[best].t);
    let target = knob * .92 * Math.tanh(d / (knob * 1.15));
    // Fuzzy shell: a share of each bough's grains sits just outside the tube.
    if (axisId !== 0 && !ROOT_ROOTS.has(axisId) && hash(i, 37) < .16) {
      target = knob * (1.02 + .70 * hash(i, 38)); branchDensity[i] *= .5;
    }
    const pull = axes[best].pull, scale = d > 1e-6 ? 1 - pull + pull * target / d : 0;
    const bin = `${axisId}:${Math.min(BINS - 1, Math.floor(axes[best].t * BINS))}`;
    binCount.set(bin, (binCount.get(bin) || 0) + 1);
    // Roots thin out toward their tips and dissolve into the dark.
    if (ROOT_ROOTS.has(axisId)) branchDensity[i] *= 1 - .9 * smooth(.30, 1, axes[best].t);
    // Past its last fork the trunk has become its limbs: the leftover stub
    // above that fork dissolves into the crown instead of hooking upward.
    if (axisId === 0) branchDensity[i] *= 1 - .88 * smooth(.70, .95, axes[best].t);
    else if (!ROOT_ROOTS.has(axisId)) branchDensity[i] *= 1 - .5 * smooth(.84, 1, axes[best].t);
    let nx = q[0] + along * tangent[0] + vx * scale;
    let ny = q[1] + along * tangent[1] + vy * scale;
    let nz = q[2] + along * tangent[2] + vz * scale;
    // Near a fork the grain is shared by both boughs: blend their placements
    // so the joint stays continuous instead of splitting along a seam.
    if (second >= 0 && Math.sqrt(secondD) < Math.sqrt(bestD) * 1.45 && !ROOT_ROOTS.has(axes[second].id)) {
      const s2 = axes[second];
      let wx = x - s2.q[0], wy = y - s2.q[1], wz = z - s2.q[2];
      const along2 = wx * s2.tangent[0] + wy * s2.tangent[1] + wz * s2.tangent[2];
      wx -= along2 * s2.tangent[0]; wy -= along2 * s2.tangent[1]; wz -= along2 * s2.tangent[2];
      const d2 = Math.hypot(wx, wy, wz);
      const target2 = s2.radius * .92 * Math.tanh(d2 / (s2.radius * 1.15));
      const scale2 = d2 > 1e-6 ? 1 - s2.pull + s2.pull * target2 / d2 : 0;
      const w = .5 * smooth(1.45, 1, Math.sqrt(secondD / Math.max(1e-9, bestD)));
      nx = mix(nx, s2.q[0] + along2 * s2.tangent[0] + wx * scale2, w);
      ny = mix(ny, s2.q[1] + along2 * s2.tangent[1] + wy * scale2, w);
      nz = mix(nz, s2.q[2] + along2 * s2.tangent[2] + wz * scale2, w);
    }
    positions[p] = nx; positions[p + 1] = ny; positions[p + 2] = nz;
    grainAxis[i] = axisId; setRadial(p, vx, vy, vz);
    if (/[?&]debug=axes\b/.test(globalThis.location?.search || '')) {
      const hue = (axisId * .618034) % 1, c6 = [Math.abs(hue * 6 - 3) - 1, 2 - Math.abs(hue * 6 - 2), 2 - Math.abs(hue * 6 - 4)].map(v => clamp(v));
      colors.set(c6.map(v => .15 + .85 * v), p);
      if (!globalThis.__axisLegend) globalThis.__axisLegend = {};
      globalThis.__axisLegend[axisId] = c6.map(v => +v.toFixed(2));
    }
    if (branchOutline && branchOutline[p] > 0) branchOutline[p + 1] = 1 - smooth(.24, 1.14, d * scale / radius);
    limbsTidied++;
  }
  // v2i gap fill: a bough whose image sheet thins out mid-way shows a break.
  // Interior stretches well below the bough's typical density are refilled
  // from the loose-grain pool, so every bough reads as one continuous form.
  // Stretches with no grains at either side (paths drawn by other layers) are
  // left alone.
  const fringeQueue = fringe.filter(i => hash(i, 31) <= .92);
  const fringeRest = fringe.filter(i => hash(i, 31) > .92);
  let fq = 0;
  const axesById = new Map();
  for (const sample of axes) (axesById.get(sample.id) || axesById.set(sample.id, []).get(sample.id)).push(sample);
  const seat = (i, sample, rScale = 1) => {
    const p = i * 3, {q, tangent, radius, growth: g, id} = sample;
    const ref = Math.abs(tangent[1]) < .9 ? [0, 1, 0] : [1, 0, 0];
    let ax = tangent[1] * ref[2] - tangent[2] * ref[1], ay = tangent[2] * ref[0] - tangent[0] * ref[2], az = tangent[0] * ref[1] - tangent[1] * ref[0];
    const al = Math.hypot(ax, ay, az) || 1; ax /= al; ay /= al; az /= al;
    const bx = tangent[1] * az - tangent[2] * ay, by = tangent[2] * ax - tangent[0] * az, bz = tangent[0] * ay - tangent[1] * ax;
    const knob = radius * roughness(id, sample.t) * rScale;
    const shell = id !== 0 && hash(i, 37) < .16;
    const angle = hash(i, 33) * Math.PI * 2, r = shell ? knob * (1.02 + .7 * hash(i, 38)) : knob * .9 * Math.tanh(1.6 * Math.sqrt(hash(i, 34)));
    const slide = (hash(i, 35) - .5) * .03;
    const ca = Math.cos(angle) * r, sa = Math.sin(angle) * r;
    positions[p] = q[0] + ax * ca + bx * sa + tangent[0] * slide;
    positions[p + 1] = q[1] + ay * ca + by * sa + tangent[1] * slide;
    positions[p + 2] = q[2] + az * ca + bz * sa + tangent[2] * slide;
    growthArray[p] = g;
    if (branchOutline) { branchOutline[p] = id === 0 ? 1 : .9; branchOutline[p + 1] = 1 - smooth(.24, 1.14, r / radius); }
    branchDensity[i] = shell ? .45 : .85;
    grainAxis[i] = id; setRadial(p, ax * ca + bx * sa, ay * ca + by * sa, az * ca + bz * sa);
    if (/[?&]debug=axes\b/.test(globalThis.location?.search || '')) colors.set([1, 1, 1], p);
  };
  for (const [id, list] of axesById) {
    if (id === 0 || ROOT_ROOTS.has(id) || ROOT_WISPS.has(id)) continue;
    const counts = Array.from({length: BINS}, (_, b) => binCount.get(`${id}:${b}`) || 0);
    const sorted = counts.filter(c => c > 0).sort((a, b) => a - b);
    if (sorted.length < 4) continue;
    const typical = sorted[Math.floor(sorted.length * .6)], floor = .55 * typical;
    for (let b = 0; b < BINS; b++) {
      if (counts[b] >= floor) continue;
      const before = counts.slice(0, b).some(c => c >= floor), after = counts.slice(b + 1).some(c => c >= floor);
      if (!before || !after) continue;
      const span = list.filter(sample => sample.t >= b / BINS && sample.t < (b + 1) / BINS);
      for (let k = counts[b]; k < floor && fq < fringeQueue.length && span.length; k++) {
        const i = fringeQueue[fq++];
        seat(i, span[Math.floor(hash(i, 39) * span.length)]);
        gapFilled++;
      }
    }
  }
  fringe.length = 0;
  fringe.push(...fringeQueue.slice(fq), ...fringeRest);
  // v2q: top up thin stretches of each root (mostly the outer third) from the
  // loose pool, so the grains reach as far as the light fibre does. Density is
  // matched to the root's own middle stretch and tapers toward the tip.
  const rootTipStats = {};
  for (const id of ROOT_ROOTS) {
    const list = axesById.get(id), held = rootHeld.get(id) || [];
    if (!list || !held.length || !branchOutline) continue;
    const counts = Array.from({length: BINS}, (_, b) => rootBins.get(`${id}:${b}`) || 0);
    const mid = counts.slice(Math.floor(.15 * BINS), Math.ceil(.55 * BINS)).sort((a, b) => a - b);
    const typical = mid[Math.floor(mid.length * .5)] || 0;
    rootTipStats[id] = {typical, counts: counts.join(',')};
    for (let b = 0; b < BINS; b++) {
      const t0 = b / BINS, floor = Math.round(.8 * typical * (1 - .45 * smooth(.45, 1, t0)));
      const span = list.filter(sample => sample.t >= t0 && sample.t < (b + 1) / BINS);
      if (!span.length) continue;
      for (let k = counts[b]; k < floor && fringe.length; k++) {
        const i = fringe.pop(), p = i * 3;
        const {q, tangent, growth: g, t} = span[Math.floor(hash(i, 81) * span.length)];
        const ref = Math.abs(tangent[1]) < .9 ? [0, 1, 0] : [1, 0, 0];
        let ax = tangent[1] * ref[2] - tangent[2] * ref[1], ay = tangent[2] * ref[0] - tangent[0] * ref[2], az = tangent[0] * ref[1] - tangent[1] * ref[0];
        const al = Math.hypot(ax, ay, az) || 1; ax /= al; ay /= al; az /= al;
        const bx = tangent[1] * az - tangent[2] * ay, by = tangent[2] * ax - tangent[0] * az, bz = tangent[0] * ay - tangent[1] * ax;
        const angle = hash(i, 82) * Math.PI * 2, spread = (.03 + .10 * (1 - .55 * t)) * Math.sqrt(hash(i, 83));
        const ca = Math.cos(angle) * spread, sa = Math.sin(angle) * spread, slide = (hash(i, 84) - .5) * .03;
        positions[p] = q[0] + ax * ca + bx * sa + tangent[0] * slide;
        positions[p + 1] = q[1] + ay * ca + by * sa + tangent[1] * slide;
        positions[p + 2] = q[2] + az * ca + bz * sa + tangent[2] * slide;
        growthArray[p] = g;
        branchOutline[p] = 0; branchOutline[p + 1] = 0; branchOutline[p + 2] = 2;
        branchDensity[i] = .9 * (1 - .6 * smooth(.5, 1, t));
        const donor = held[Math.floor(hash(i, 85) * held.length)] * 3;
        colors[p] = colors[donor]; colors[p + 1] = colors[donor + 1]; colors[p + 2] = colors[donor + 2];
        rootFilled++;
      }
    }
  }
  // Loose grains that belong to no limb are not thrown away: they thicken the
  // trunk and the main limbs, distributed by cross-section area, and grow in
  // with the limb they now belong to.
  // v2k: the trunk foot takes no extra grains (it read as a clump at the root).
  const main = axes.filter(sample => LIMB_ROLE.has(sample.id) && !(sample.id === 0 && (sample.t > .66 || sample.t < .12)));
  const weights = main.map(sample => sample.radius * sample.radius), total = weights.reduce((a, b) => a + b, 0);
  const cumulative = []; weights.reduce((sum, w) => { cumulative.push(sum + w); return sum + w; }, 0);
  // v2l: part of the loose pool feeds the new root strands.
  for (let f = 0; f < fringe.length; f++) {
    const i = fringe[f], p = i * 3;
    if (!main.length || hash(i, 31) > .92) { branchDensity[i] *= .15; limbFringeFaded++; continue; }
    const pick = hash(i, 32) * total;
    let lo = 0, hi = cumulative.length - 1;
    while (lo < hi) { const mid = (lo + hi) >> 1; if (cumulative[mid] < pick) lo = mid + 1; else hi = mid; }
    const {q, tangent, radius, growth: g, id} = main[lo];
    // Perpendicular basis around the tangent.
    const ref = Math.abs(tangent[1]) < .9 ? [0, 1, 0] : [1, 0, 0];
    let ax = tangent[1] * ref[2] - tangent[2] * ref[1], ay = tangent[2] * ref[0] - tangent[0] * ref[2], az = tangent[0] * ref[1] - tangent[1] * ref[0];
    const al = Math.hypot(ax, ay, az) || 1; ax /= al; ay /= al; az /= al;
    const bx = tangent[1] * az - tangent[2] * ay, by = tangent[2] * ax - tangent[0] * az, bz = tangent[0] * ay - tangent[1] * ax;
    const angle = hash(i, 33) * Math.PI * 2, r = radius * .9 * Math.tanh(1.6 * Math.sqrt(hash(i, 34)));
    const slide = (hash(i, 35) - .5) * .03;
    const ca = Math.cos(angle) * r, sa = Math.sin(angle) * r;
    positions[p] = q[0] + ax * ca + bx * sa + tangent[0] * slide;
    positions[p + 1] = q[1] + ay * ca + by * sa + tangent[1] * slide;
    positions[p + 2] = q[2] + az * ca + bz * sa + tangent[2] * slide;
    growthArray[p] = g;
    if (branchOutline) { branchOutline[p] = id === 0 ? 1 : .9; branchOutline[p + 1] = 1 - smooth(.24, 1.14, r / radius); }
    branchDensity[i] = Math.max(branchDensity[i], .85);
    grainAxis[i] = id; setRadial(p, ax * ca + bx * sa, ay * ca + by * sa, az * ca + bz * sa);
    if (/[?&]debug=axes\b/.test(globalThis.location?.search || '')) colors.set([1, 1, 1], p);
    limbFilled++;
  }
  // v2r brightness ladder. Thin boughs packed their grains into a much smaller
  // projected area than the trunk, so with additive light they read 2-5x
  // brighter per area. Measure each bough's light per projected area (all its
  // grains: tidied, refilled and the twig layers around it) and pull every
  // bough down to its rung: trunk 100 %, main limbs 92 %, secondary limbs 78 %,
  // fine boughs 50-65 % by thickness. Grains only dim; none move.
  const ladder = {};
  {
    for (let i = 0; i < n; i++) {
      if (grainAxis[i] >= 0 || growth[i * 3 + 1] <= .5 || branchDensity[i] === 0) continue;
      const p = i * 3, x = positions[p], y = positions[p + 1], z = positions[p + 2];
      if (y < rootJunction[1] + .03) continue;
      const cx = Math.floor(x / cell), cy = Math.floor(y / cell), cz = Math.floor(z / cell);
      let best = -1, bestD = Infinity;
      for (let a = -1; a <= 1; a++) for (let b = -1; b <= 1; b++) for (let c = -1; c <= 1; c++) {
        const list = grid.get(`${cx + a},${cy + b},${cz + c}`);
        if (list) for (const k of list) { const q = axes[k].q, d = (x - q[0]) ** 2 + (y - q[1]) ** 2 + (z - q[2]) ** 2; if (d < bestD) { bestD = d; best = k; } }
      }
      if (best >= 0 && !ROOT_ROOTS.has(axes[best].id) && Math.sqrt(bestD) < axes[best].radius * 3 + .12) grainAxis[i] = axes[best].id;
    }
    const light = new Map();
    for (let i = 0; i < n; i++) {
      const id = grainAxis[i];
      if (id < 0) continue;
      const p = i * 3;
      light.set(id, (light.get(id) || 0) + branchDensity[i] * (colors[p] + colors[p + 1] + colors[p + 2]) / 3);
    }
    const perArea = new Map(), radiusOf = new Map();
    for (const [id, list] of axesById) {
      if (ROOT_ROOTS.has(id) || !light.has(id)) continue;
      let length = 0, rSum = 0;
      for (let k = 1; k < list.length; k++) length += Math.hypot(...[0, 1, 2].map(a => list[k].q[a] - list[k - 1].q[a]));
      for (const s of list) rSum += s.radius;
      const r = rSum / list.length;
      // Below ~.03 the grains themselves, not the axis, set the visible width.
      radiusOf.set(id, r); perArea.set(id, light.get(id) / Math.max(1e-6, length * 2 * Math.max(.03, r)));
    }
    const reference = perArea.get(0) || 1;
    const factor = new Map();
    for (const [id, value] of perArea) {
      const rung = id === 0 ? 1 : (id === 1 || id === 5) ? .92 : LIMB_ROLE.has(id) ? .78 : .5 + .15 * smooth(.012, .04, radiusOf.get(id));
      // Soft: close ~half the gap in log terms, never below 42 %. Trunk and
      // the two main limbs are lifted a little instead (density capped at 1).
      const f = id === 0 || id === 1 || id === 5 ? 1.2 : Math.max(.42, Math.min(1, Math.pow(rung * reference / value, .6)));
      factor.set(id, f);
      ladder[id] = {before: Math.round(value), factor: +f.toFixed(2)};
    }
    for (let i = 0; i < n; i++) { const f = factor.get(grainAxis[i]); if (f !== undefined && f !== 1) branchDensity[i] = Math.min(1, branchDensity[i] * f); }
  }
  const rootSkirt = 0;
  // The grains come from the retired side bundles and the dimmed fan-copy
  // limbs (no new particles); each new flower copies the shape of an existing
  // cloud flower, scaled, so the texture matches the crown.
  const crownTone = cloud.crownTone ? cloud.crownTone.slice() : null;
  const crownOverlap = cloud.crownOverlap ? cloud.crownOverlap.slice() : null;
  const twigPresence = cloud.twigPresence ? cloud.twigPresence.slice() : null;
  const energyOut = cloud.energies.slice();
  if (buds === cloud.buds) buds = buds.slice();
  if (florets === cloud.florets) florets = florets.slice();
  if (crownWeights === cloud.crownWeights) crownWeights = crownWeights.slice();
  if (normals === cloud.normals) normals = normals.slice();
  const pool = [];
  for (let i = 0; i < n; i++) {
    if (growth[i * 3 + 1] <= .5) continue;
    const bundle = cloud.bundleBaseCount !== undefined && i >= cloud.bundleBaseCount && i < cloud.rootContactBaseCount;
    const clone = cloud.twigBaseCount !== undefined && i >= cloneStart && i < cloud.twigBaseCount;
    if (bundle || clone) pool.push(i);
  }
  const silverCell = .2, silverGrid = new Map();
  for (let i = 0; i < n; i += 2) {
    if (growth[i * 3 + 1] > .5 || growth[i * 3 + 2] >= 9) continue;
    const id = `${Math.floor(positions[i * 3] / silverCell)},${Math.floor(positions[i * 3 + 1] / silverCell)},${Math.floor(positions[i * 3 + 2] / silverCell)}`;
    silverGrid.set(id, (silverGrid.get(id) || 0) + 2);
  }
  const silverNear = q => {
    let total = 0;
    const cx = Math.floor(q[0] / silverCell), cy = Math.floor(q[1] / silverCell), cz = Math.floor(q[2] / silverCell);
    for (let a = -1; a <= 1; a++) for (let b = -1; b <= 1; b++) for (let c = -1; c <= 1; c++) total += silverGrid.get(`${cx + a},${cy + b},${cz + c}`) || 0;
    return total;
  };
  const candidates = axes.filter(sample => sample.id !== 0 && !ROOT_ROOTS.has(sample.id) && sample.t > .35 && silverNear(sample.q) < 60)
    .sort((a, b) => b.t - a.t);
  const centers = [];
  for (const sample of candidates) {
    if (centers.every(c => Math.hypot(c[0] - sample.q[0], c[1] - sample.q[1], c[2] - sample.q[2]) > .42)) {
      // Sit the flower slightly above the bough, like the crown's clouds.
      centers.push([sample.q[0], sample.q[1] + .08, sample.q[2]]);
    }
  }
  const donors = collectFlowers(cloud, cloud.positions, cloud.buds).filter(g => g.indices.length >= 300 && g.indices.length <= 2400);
  let blossomFlowers = 0, blossomGrains = 0, cursor = 0;
  const perFlower = centers.length ? Math.max(220, Math.min(700, Math.floor(pool.length / centers.length))) : 0;
  for (let f = 0; f < centers.length && cursor < pool.length && donors.length; f++) {
    const donor = donors[Math.floor(hash(f, 41) * donors.length)], center = centers[f];
    const lengths = donor.indices.map(i => Math.hypot(cloud.buds[i * 4], cloud.buds[i * 4 + 1], cloud.buds[i * 4 + 2])).sort((a, b) => a - b);
    const donorRadius = Math.max(.05, lengths[Math.floor(lengths.length * .85)]);
    const scale = (.16 + .10 * hash(f, 42)) / donorRadius;
    const count = Math.min(perFlower, donor.indices.length, pool.length - cursor);
    for (let j = 0; j < count; j++) {
      const i = pool[cursor++], d = donor.indices[Math.floor(j * donor.indices.length / count)];
      const p = i * 3, b = i * 4;
      const ox = -cloud.buds[d * 4] * scale, oy = -cloud.buds[d * 4 + 1] * scale, oz = -cloud.buds[d * 4 + 2] * scale;
      positions[p] = center[0] + ox; positions[p + 1] = center[1] + oy; positions[p + 2] = center[2] + oz;
      buds[b] = -ox; buds[b + 1] = -oy; buds[b + 2] = -oz; buds[b + 3] = cloud.buds[d * 4 + 3];
      for (let a = 0; a < 3; a++) { colors[p + a] = colors[d * 3 + a]; normals[p + a] = cloud.normals[d * 3 + a]; }
      growthArray[p] = cloud.growth[d * 3]; growthArray[p + 1] = 0; growthArray[p + 2] = cloud.growth[d * 3 + 2];
      florets[i * 2] = cloud.florets[d * 2]; florets[i * 2 + 1] = cloud.florets[d * 2 + 1];
      crownWeights[i] = cloud.crownWeights[d]; energyOut[i] = cloud.energies[d];
      if (crownTone) crownTone[i] = cloud.crownTone[d];
      if (crownOverlap) crownOverlap[i] = Math.min(.3, cloud.crownOverlap[d]);
      if (twigPresence) twigPresence[i] = cloud.twigPresence[d];
      if (branchOutline) { branchOutline[p] = 0; branchOutline[p + 1] = 0; branchOutline[p + 2] = 0; }
      branchDensity[i] = 1;
      blossomGrains++;
    }
    blossomFlowers++;
  }
  return {...cloud, colors, positions, buds, florets, crownWeights, normals, branchDensity, growth: growthArray, energies: energyOut,
    ...(crownTone ? {crownTone} : {}), ...(crownOverlap ? {crownOverlap} : {}), ...(twigPresence ? {twigPresence} : {}),
    blossomStats: {flowers: blossomFlowers, grains: blossomGrains, candidates: candidates.length, pool: pool.length},
    ...(branchOutline ? {branchOutline} : {}),
    cinematicFinishVersion: CINEMATIC_FINISH_VERSION,
    cinematicFinishStats: {branchRecolored, crownEmbersToSilver, crownEmbersKept, radialFlowers, bundleHidden, cloneDimmed, limbsTidied, limbFringeFaded, limbFilled, limbFringeKept, gapFilled, rootSkirt, rootKept, rootFilled, rootTipStats, ladder, ...flowerStats}};
}
