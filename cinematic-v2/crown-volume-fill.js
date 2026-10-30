import { createCrownRadiance } from '../tree-src/fire-crown-clusters.js';
// The camera study needs a crown with lateral branches in depth, not another
// thin layer along the source-image rays. Two unequal bough fans turn out of
// the original crown, retaining its sampled grains and gathering sequence.
// Source light, grain and timing attributes remain intact; only upper geometry changes.
const LAYOUT = Object.freeze({
  positions: 3, colors: 3, seeds: 3, energies: 1, normals: 3,
  florets: 2, crownWeights: 1, buds: 4, growth: 3, branchOutline: 3,
});
const VERSION = 'balanced-crown-volume-v2';
const ROOT_X = (767 - 728) * 12.2 / 1456;
const clamp = (x, lo, hi) => Math.max(lo, Math.min(hi, x));
const smooth = x => { const t = clamp(x, 0, 1); return t * t * (3 - 2 * t); };
const FANS = Object.freeze([
  { angle: 1.18, depth: 1.18, lift: .06, silver: 75000, branches: 4200, light: .94 },
  { angle: -1.05, depth: 1.12, lift: -.02, silver: 70000, branches: 3600, light: .88 },
]);

// Local moves around established v9 bud centres, after the global silhouette
// field. X is depth for the side camera, so these separate the overhead band
// without changing its left-high/right-low Z outline. Compact support keeps
// neighbouring lower branch hollows and camera-near top sprays unchanged.
const LOCAL_SPRAYS = Object.freeze([
  // Carry the bright spray and its rear neighbours as one staggered bough.
  // Moving only its high centre left the large rear skirts bridging the seam.
  {at: [-2.00, .18, -1.60], radius: [.82, .70, .95], shift: [-1.02, .19, .08], core: .45},
  // One bright source spray coincided with unchanged front sprays after the
  // packet move. Offset that bud alone toward the upper-left of its bough;
  // keep its grains intact and leave both accepted dark saddles open.
  {at: [-2.188, .433, -1.848], radius: [.24, .20, .23], shift: [-.28, .15, .02], core: .20},
  {at: [-1.15, .55, -.65], radius: [.65, .55, .60], shift: [-.78, .14, -.04], core: .40},
  // The next two packets occupy different depths and heights rather than
  // forming a continuous necklace in the overhead view. The X offsets are
  // mainly depth for the side camera, leaving its descending Z outline intact.
  {at: [.85, 1.10, .45], radius: [.95, .45, .75], shift: [-.22, .43, .08], core: .38},
  {at: [.25, .45, -1.15], radius: [.90, .50, .70], shift: [1.03, .06, -.06], core: .42},
  {at: [-.67, .19, -1.95], radius: [.54, .40, .57], shift: [-.55, .11, .05], core: .35},
  // Keep the previously corrected upper-right bump low. Its skirt narrows
  // in a volume-preserving frame below instead of piling up into a dense core.
  {at: [.630, .588, -1.850], radius: [.56, .45, .52], shift: [.34, -.14, -.03]},
  // The accepted taper stays unchanged in this revision.
  {at: [-1.071, .108, -4.850], radius: [.58, .40, .58], shift: [-.42, -.10, .18]},
  {at: [.905, .005, -4.039], radius: [.60, .42, .60], shift: [-.48, -.07, .16]},
  {at: [2.352, .166, -2.292], radius: [.58, .43, .55], shift: [-.32, -.08, .10]},
]);

// Positions here are the accepted v14 centres, after the separation field.
// Only the outer twig packet and three middle-right sprays change. The twig
// tip follows its existing bough inward; no extra connecting line is added.
const NATURAL_SPRAYS = Object.freeze([
  {at: [3.34, -.32, -3.10], radius: [.70, .55, .85], shift: [-.48, .09, .26], core: .45},
  // The side camera sees Z horizontally and Y vertically. Alternating these
  // existing sprays gives a stepped, three-dimensional branch crown instead
  // of hiding the same continuous band by moving it only in viewing depth.
  // Release half the upper spray lift so its uneven skirt interrupts one
  // side of the gap; it remains a short layer seam, not a closed eye-shaped void.
  {at: [.408, .398, -1.528], radius: [.55, .40, .50], shift: [-.08, .10, .05], core: .30},
  {at: [.543, .164, -1.969], radius: [.46, .32, .40], shift: [-.12, -.13, -.26], core: .30},
  {at: [.970, .448, -1.880], radius: [.40, .36, .44], shift: [.03, .02, -.15], core: .25},
]);
function naturalSprayCentres(point) {
  const delta = [0, 0, 0];
  for (const patch of NATURAL_SPRAYS) {
    const q = point.reduce((sum, value, axis) => sum + ((value - patch.at[axis]) / patch.radius[axis]) ** 2, 0);
    if (q >= 1) continue;
    const weight = 1 - smooth((Math.sqrt(q) - patch.core) / (1 - patch.core));
    for (let axis = 0; axis < 3; axis++) delta[axis] += patch.shift[axis] * weight;
  }
  return point.map((value, axis) => value + delta[axis]);
}

function separateSprayCentres(point) {
  const delta = [0, 0, 0];
  for (const patch of LOCAL_SPRAYS) {
    const q = point.reduce((sum, value, axis) => sum + ((value - patch.at[axis]) / patch.radius[axis]) ** 2, 0);
    if (q >= 1) continue;
    const core = patch.core ?? 0;
    const weight = 1 - smooth((Math.sqrt(q) - core) / (1 - core));
    for (let axis = 0; axis < 3; axis++) delta[axis] += patch.shift[axis] * weight * .72;
  }
  return point.map((value, axis) => value + delta[axis]);
}

// Reshape only the broad skirts of the overlapping sprays. This is a
// volume-preserving local frame: shorten one horizontal axis and lengthen
// the orthogonal depth axis by its reciprocal. No grain is hidden or dimmed,
// and no depth clamp flattens a spray into a sheet.
const VOLUME_SPRAYS = Object.freeze([
  {at: [-1.893, -.105, -1.603], factor: .80},
  {at: [-1.165, -.016, -.973], factor: .82},
  {at: [-.157, .365, -1.495], factor: .76},
  {at: [.630, .588, -1.850], factor: .82},
]);
// Small physical core regions of the overlapping sprays. These centres are
// local offsets from their own buds, measured from the sampled microclusters;
// the exterior silhouette and the accepted intervening gaps are untouched.
const CORE_RELIEF = Object.freeze([
  {at: [-1.893, -.105, -1.603], core: [-.186, .172, -.081]},
  {at: [-2.182, .636, -.818], core: [.038, .022, .108]},
  {at: [-2.144, .271, -1.165], core: [.023, -.073, -.322]},
  {at: [-2.188, .433, -1.848], core: [.052, -.375, -.019]},
  {at: [-2.091, .187, -2.046], core: [-.069, -.037, .317]},
  {at: [-.671, 1.665, .660], core: [.038, -.260, .034]},
  {at: [-1.331, .566, -.518], core: [-.004, .045, -.013]},
  {at: [-2.042, .743, -.593], core: [.104, .029, .058]},
  {at: [.676, 1.872, 1.739], core: [.107, .032, -.086]},
  {at: [-1.130, .955, -.016], core: [-.116, .077, .109]},
  {at: [-.157, 1.322, .945], core: [-.120, .089, -.039]},
  {at: [-1.262, .494, -.766], core: [-.119, .023, .043]},
]);
function separateSprayVolume(centre, offset) {
  const base = reshapeCrownPosition(centre, false);
  let factor = 1;
  for (const patch of VOLUME_SPRAYS) {
    const distance = Math.hypot(...base.map((v, axis) => v - patch.at[axis]));
    if (distance < .22) factor *= 1 - (1 - patch.factor) * (1 - smooth(distance / .22));
  }
  let result = offset;
  if (factor !== 1) {
    const diagonal = Math.SQRT1_2;
    const across = (offset[0] - offset[2]) * diagonal * factor;
    const depth = (offset[0] + offset[2]) * diagonal / factor;
    result = [(across + depth) * diagonal, offset[1], (depth - across) * diagonal];
  }
  for (const patch of CORE_RELIEF) {
    const centreDistance = Math.hypot(...base.map((v, axis) => v - patch.at[axis]));
    if (centreDistance >= .10) continue;
    const local = result.map((v, axis) => v - patch.core[axis]);
    const radius = .60, q = Math.hypot(...local) / radius;
    if (q >= 1) break;
    const strength = 1 - smooth(centreDistance / .10);
    const expansion = .65 * strength * (1 - q * q) ** 2;
    // r' = r(1 + s(1-r²/R²)²), s <= 1: radial derivative >= .2.
    // Thus the dense core opens in 3D with no fold, shell, deletion or dimming;
    // displacement and slope both tend smoothly to zero at the outside edge.
    result = result.map((v, axis) => v + local[axis] * expansion);
    break;
  }
  return result;
}

// A shared physical bough coordinate crosses the front and rear parents.
// Independent daughter layouts left their fringes filling one another's gaps;
// here every silver grain in this local branch family follows the same three
// unequal volumes, including low-weight silver dust without an active bud.
function sharedBoughSprays([x, y, z]) {
  const arm = -z + .35 * x;
  const region = smooth((arm - 2.05) / .32) * (1 - smooth((arm - 5.20) / .55))
    * smooth((y + .90) / .35) * (1 - smooth((y - .80) / .45));
  if (region === 0) return [x, y, z];
  const irregular = .080 * Math.sin(y * 3.5 + x * 1.1)
    + .035 * Math.sin(y * 8.0 - x * 1.6);
  const member = arm + irregular;
  const inner = 2.38 + (arm - 2.53) * .84;
  const middle = 3.41 + (arm - 3.34) * .78;
  const outer = 4.25 + (arm - 4.16) * .72;
  // Short, unequal transitions spread a few existing edge grains through the
  // low-density saddles. No discontinuous boundary leaves a vertical U wall.
  const firstBlend = smooth((member - 2.80) / .24);
  const secondBlend = smooth((member - 3.68) / .20);
  const innerMiddle = inner + (middle - inner) * firstBlend;
  const arranged = innerMiddle + (outer - innerMiddle) * secondBlend;
  // The openings deepen through the upper half of the silver bough. Lower
  // irregular grains stay as a connection, so no closed eye or hard slot is
  // cut through the complete crown. These are displaced particles, not masks.
  const shallowInner = .10 * (1 - smooth((member - 3.18) / .34));
  const opening = smooth((y + .28 - shallowInner) / .45);
  const deltaArm = .76 * (arranged - arm) * opening * region;
  const alongDepth = -deltaArm / .65;
  const peakRelief = .40 * Math.max(0, alongDepth) * (1 - smooth((arm - 3.15) / .35));
  let px = x + alongDepth, py = y + .53 * alongDepth - peakRelief, pz = z + alongDepth;
  // Paired XYZ movement follows the overhead viewing depth approximately;
  // its two established gaps retain their planar relation. The side view
  // sees the same real volumes at different heights and branch distances.
  const tip = smooth((arm - 3.75) / 1.02) * region;
  const spine = -.10 - .045 * tip;
  py = spine + (py - spine) * (1 - .48 * tip);
  // Outermost grains travel progressively farther along the twig. The small
  // remaining fraction is spread into a loose end instead of a flat round cap.
  const extension = .16 * tip * tip;
  px += extension * .24;
  pz -= extension;
  return [px, py, pz];
}

// Pre-registration tree-local coordinates in and out. Branch particles and
// branch light fibres use this same field; it is exactly identity below the
// lower fork. Flower grains translate with their bud instead of being squashed.
export function reshapeCrownPosition([x, y, z], withLocal = true) {
  // The far outer twig can sit below this height although it is not trunk.
  // Only the compact natural-tip field reaches it; the root and lower fork
  // remain outside every patch and therefore exactly unchanged.
  if (y <= -.35) return withLocal ? naturalSprayCentres([x, y, z]) : [x, y, z];
  const upper = smooth((y + .35) / 2.05);
  const lowerTop = .30 * Math.max(0, y - .90);
  const lowerBack = .20 * Math.max(0, -z - .40) * smooth((y - .25) / 1.70);
  // The front-left outer sprays must not approach the low camera as the
  // crown widens: that perspective shift raised them into a detached island.
  // Bring only these centres back toward the main crown; preserve their volume.
  const nearLeft = smooth((z - 2.25) / .85) * smooth((-x - 1.05) / .90)
    * smooth((y - .30) / .65);
  // At the +X side camera, +Z is screen-left. Keep a higher, fuller main
  // crown there, while the -Z boughs step down and reach outward on the right.
  // Different depth/height bands move by different amounts: no single tilted
  // plane or level crown strip replaces the existing irregular little sprays.
  const crown = smooth((y + .15) / 1.15);
  const left = smooth((z - .15) / 1.35);
  const nearTip = smooth((z - 2.30) / .80);
  const mainLift = .88 * left * (1 - .82 * nearTip) * crown;
  const right = smooth((-z - .05) / 1.90);
  const rightDrop = .72 * right * smooth((y + .15) / 1.40);
  const rightReach = .38 * smooth((-z - .40) / 2.70) * smooth((y + .35) / 1.50);
  const centreTurn = .22 * Math.exp(-(((z - .10) / 1.20) ** 2)) * upper;
  // Gather the highest central sprays into the left main crown rather than
  // lifting its camera-near tip. A small height release offsets their forward
  // perspective shift, and the existing near-left recovery remains untouched.
  const centralTop = .95 * Math.exp(-(((z + .18) / .95) ** 2))
    * smooth((y - .70) / 1.40) * (1 - smooth((z - .30) / .70));
  const rearUpperDrop = .22 * right * smooth((y - .65) / 1.0);
  const silhouette = [
    ROOT_X + (x - ROOT_X) * (1 + .035 * upper) + .20 * nearLeft,
    y - lowerTop - lowerBack - .04 * nearLeft + mainLift - rightDrop
      - .18 * centralTop - rearUpperDrop,
    z * (1 + .12 * upper) - .55 * nearLeft - rightReach + centreTurn + centralTop,
  ];
  return withLocal ? naturalSprayCentres(separateSprayCentres(silhouette)) : silhouette;
}

// Separate little sprays bridge the upper edge of the large centre opening.
// Their varied depth, size and intervening gaps retain a visible dark channel.
const BRIDGES = Object.freeze([
  {center: [-.35, .02, .90], size: .66, count: 1600, donor: [-1.98, 1.11]},
  {center: [.10, -.06, .45], size: .58, count: 850, donor: [-1.98, 1.11]},
  {center: [.90, .02, .45], size: .62, count: 1250, donor: [-.14, 1.33]},
  {center: [.30, -.10, .90], size: .48, count: 650, donor: [-.14, 1.33]},
  {center: [1.10, -.26, -.10], size: .46, count: 900, donor: [1.11, 1.04]},
]);

function hash32(value) {
  value = Math.imul(value ^ value >>> 16, 0x7feb352d);
  value = Math.imul(value ^ value >>> 15, 0x846ca68b);
  return (value ^ value >>> 16) >>> 0;
}
const randomFor = (index, fan, channel) =>
  hash32(index ^ Math.imul(fan + 1, 0x9e3779b1) ^ Math.imul(channel + 1, 0x85ebca6b)) / 4294967296;

function fanPoint(x, y, z, fan) {
  // The lower trunk remains a common attachment. Above its fork, the same
  // transformation carries both the fine branch and the flower bud, avoiding
  // detached puffs and straight radial supports crossing the dark channels.
  const fork = smooth((y + 2.18) / 1.52);
  const angle = fan.angle * fork, cos = Math.cos(angle), sin = Math.sin(angle);
  const dx = x - ROOT_X;
  const depth = (dx * sin + z * cos) * (1 + (fan.depth - 1) * fork);
  // Backward branches can spread farther. The front fan approaches a smooth
  // limit before the low camera, rather than piling grains against a flat cap.
  const spreadZ = depth > 2.45 ? 2.45 + .90 * Math.tanh((depth - 2.45) / .90)
    : depth < -3.55 ? -3.55 - 1.10 * Math.tanh((-depth - 3.55) / 1.10) : depth;
  // The side silhouette needs a wide crown, not another diagonal stack.
  // Lower the upper/back fan only; the shared trunk and its fork stay put.
  const crown = smooth((y + .55) / 1.0);
  const lowerTop = .24 * Math.max(0, y - .30);
  const lowerBack = .16 * Math.max(0, -spreadZ - .40) * crown;
  return [ROOT_X + dx * cos - z * sin,
    y + fan.lift * fork * (.6 + .4 * Math.sin(dx * .7)) - lowerTop - lowerBack,
    spreadZ];
}

// Only the first copied fan's far silver arm turns back toward its parent.
// The root side has zero displacement/slope; distant packets rotate rigidly
// instead of being shortened by compressing their grains into a bright knot.
function fanTipFrame([x, y, z], family) {
  const weight = family === 1 ? smooth((-z - 3.12) / 1.15)
    * smooth((y + .75) / .35) * (1 - smooth((y - .50) / .45)) : 0;
  const angle = .30 * weight, cos = Math.cos(angle), sin = Math.sin(angle);
  const dx = x - 1.50, dz = z + 3.10;
  const shoulder = .085 * weight * Math.exp(-(((x - .20) / .75) ** 2) - (((z + 3.88) / .50) ** 2));
  return {point: [1.50 + dx * cos + dz * sin, y + shoulder, -3.10 - dx * sin + dz * cos], cos, sin};
}
// Bring the isolated high, camera-near packet back to its parent crown.
// Its soft support also carries the twig guides; the lower forks stay exact.
function unifyOuterSpray([x,y,z]){
  const w=smooth((z-2.35)/.65)*smooth((x-.65)/.55)*smooth((y-.45)/.90);
  return [x-.20*w,y-.38*w,z-.18*w];
}
export function branchLayoutPoint(point, family = 0) {
  const base = reshapeCrownPosition(family ? fanPoint(...point, FANS[family - 1]) : point);
  return unifyOuterSpray(family === 1 ? fanTipFrame(base, family).point : base);
}

/** Deterministic upper-canopy reshape and append; the input cloud is never mutated. */
export function addCrownVolume(cloud) {
  if (cloud?.crownVolumeVersion === VERSION) return cloud;
  if (!Number.isSafeInteger(cloud?.count) || cloud.count < 0) {
    throw new TypeError('A sampled particle cloud with a valid count is required.');
  }
  for (const [name, width] of Object.entries(LAYOUT)) {
    if (!(cloud[name] instanceof Float32Array) || cloud[name].length !== cloud.count * width) {
      throw new TypeError(`Invalid particle attribute: ${name}.`);
    }
  }

  // Local trunk contraction must not change which accepted source grains are
  // selected for the crown fans or their original fine bridge connections.
  const selectionPositions = cloud.branchOutlineSourcePositions ?? cloud.positions;
  const silver = [], branches = [];
  for (let i = 0; i < cloud.count; i++) {
    const k3 = i * 3, k4 = i * 4;
    if (cloud.growth[k3 + 2] >= 9 || selectionPositions[k3 + 1] < -2.17) continue;
    if (cloud.growth[k3 + 1] > .5) {
      // Sparse, sampled warm grains carry the new boughs. No water mist,
      // opaque tubes or duplicate ground/trunk carpet enters these fans.
      if (cloud.energies[i] > .24) branches.push(i);
    } else if (cloud.buds[k4 + 3] > .65 && cloud.crownWeights[i] > .35 &&
        selectionPositions[k3 + 1] > -.65 && cloud.energies[i] > .28 &&
        cloud.colors[k3 + 2] / Math.max(.001, cloud.colors[k3]) > .68) {
      silver.push(i);
    }
  }

  const selections = FANS.map((fan, f) => {
    // Hash thinning retains the real, irregular floret microstructure. Smaller
    // dim grains and darker edges stay in the mix; this is not a uniform cloud.
    const pick = (pool, limit, channel) => {
      const weight = i => channel === 11
        ? (.45 + .55 * cloud.crownWeights[i]) * (.72 + .28 * cloud.florets[i * 2]) : 1;
      return [...pool].sort((a, b) =>
        randomFor(a, f, channel) / weight(a) - randomFor(b, f, channel) / weight(b) || a - b).slice(0, limit);
    };
    return {fan, f, silver: pick(silver, fan.silver, 11), branches: pick(branches, fan.branches, 12)};
  });
  const bridges = BRIDGES.map((spec, id) => {
    const pool = silver.filter(i => {
      const k = i * 3, b = i * 4;
      return Math.hypot(selectionPositions[k] + cloud.buds[b] - spec.donor[0],
        selectionPositions[k + 1] + cloud.buds[b + 1] - spec.donor[1]) < .035;
    }).sort((a, b) => randomFor(a, id + 10, 11) - randomFor(b, id + 10, 11));
    let parent = -1, score = Infinity;
    for (const i of branches) {
      const k = i * 3, dx = spec.center[0] - selectionPositions[k];
      const dy = spec.center[1] - selectionPositions[k + 1], dz = spec.center[2] - selectionPositions[k + 2];
      const value = Math.hypot(dx, dy, dz) + Math.max(0, -dy) * 4;
      if (value < score) {score = value; parent = i;}
    }
    return {...spec, id, indices: pool.slice(0, spec.count), parent, twigCount: pool.length && parent >= 0 ? 160 : 0};
  });
  const addedSilver = selections.reduce((sum, s) => sum + s.silver.length, 0)
    + bridges.reduce((sum, b) => sum + b.indices.length, 0);
  const addedBranches = selections.reduce((sum, s) => sum + s.branches.length, 0)
    + bridges.reduce((sum, b) => sum + b.twigCount, 0);
  const added = addedSilver + addedBranches;
  const out = {...cloud, count: cloud.count + added};
  for (const [name, width] of Object.entries(LAYOUT)) {
    out[name] = new Float32Array(out.count * width);
    out[name].set(cloud[name]);
  }

  const structureSources = new Uint32Array(out.count).fill(0xffffffff);
  const structureFans = new Uint8Array(out.count);
  for (let i = 0; i < cloud.count; i++) structureSources[i] = i;
  let cursor = cloud.count;
  for (const {fan, f, silver: crown, branches: wood} of selections) {
    for (const index of [...wood, ...crown]) {
      structureSources[cursor] = index; structureFans[cursor] = f + 1;
      const source3 = index * 3, source4 = index * 4;
      const isCrown = cloud.growth[source3 + 1] < .5;
      for (const [name, width] of Object.entries(LAYOUT)) {
        out[name].set(cloud[name].subarray(index * width, (index + 1) * width), cursor * width);
      }
      const k3 = cursor * 3, k4 = cursor * 4;
      const x = cloud.positions[source3], y = cloud.positions[source3 + 1], z = cloud.positions[source3 + 2];
      const p = fanPoint(x, y, z, fan);
      const sourceBud = [x + cloud.buds[source4], y + cloud.buds[source4 + 1], z + cloud.buds[source4 + 2]];
      const bud = fanPoint(...sourceBud, fan);
      const frameY = isCrown ? sourceBud[1] : y;
      const fork = smooth((frameY + 2.18) / 1.52);
      const angle = fan.angle * fork;
      const cos = Math.cos(angle), sin = Math.sin(angle);
      if (isCrown) {
        // Reposition a spray by its centre only. Applying the camera-side
        // depth limiter to every grain compressed outer sprays into bright
        // sheets. A local frame preserves the sampled 3D floret thickness,
        // while the supporting twig still ends at the same transformed bud.
        const core = .86 + .14 * smooth((cloud.energies[index] - .72) / .25);
        const dx = x - sourceBud[0], dy = y - sourceBud[1], dz = z - sourceBud[2];
        p[0] = bud[0] + (dx * cos - dz * sin) * core;
        p[1] = bud[1] + dy * core;
        p[2] = bud[2] + (dx * sin + dz * cos) * (1 + (fan.depth - 1) * fork) * core;
      }
      const nx = cloud.normals[source3], ny = cloud.normals[source3 + 1], nz = cloud.normals[source3 + 2];
      const normal = [nx * cos - nz * sin, ny, (nx * sin + nz * cos) / fan.depth];
      const length = Math.hypot(...normal) || 1;
      for (let axis = 0; axis < 3; axis++) {
        out.positions[k3 + axis] = p[axis];
        out.buds[k4 + axis] = bud[axis] - p[axis];
        out.normals[k3 + axis] = normal[axis] / length;
        out.seeds[k3 + axis] = randomFor(index, f, axis);
        // New fans recede behind the original image grains. This avoids
        // solving a geometric gap by making the whole silver canopy brighter.
        out.colors[k3 + axis] *= isCrown ? fan.light : .76;
      }
      if (isCrown) {
        // Preserve the source's grain hierarchy. New fans add body, not a
        // second sprinkling of large diffraction stars over empty space.
        out.seeds[k3] = cloud.seeds[source3] * .986;
        out.seeds[k3 + 1] = cloud.seeds[source3 + 1];
      }
      out.growth[k3] = clamp(cloud.growth[source3] + (randomFor(index, f, 5) - .5) * .035, 0, 1);
      if (isCrown) out.growth[k3 + 2] *= .72;
      cursor++;
    }
  }
  for (const bridge of bridges) {
    for (const index of bridge.indices) {
      const s3 = index * 3, s4 = index * 4, k3 = cursor * 3, k4 = cursor * 4;
      for (const [name, width] of Object.entries(LAYOUT)) {
        out[name].set(cloud[name].subarray(index * width, (index + 1) * width), cursor * width);
      }
      const turn = .37 * (bridge.id - 2), cos = Math.cos(turn), sin = Math.sin(turn);
      const delta = [-cloud.buds[s4], -cloud.buds[s4 + 1], -cloud.buds[s4 + 2]];
      const local = [(delta[0] * cos - delta[2] * sin) * bridge.size,
        delta[1] * bridge.size, (delta[0] * sin + delta[2] * cos) * bridge.size];
      for (let a = 0; a < 3; a++) {
        out.positions[k3 + a] = bridge.center[a] + local[a];
        out.buds[k4 + a] = -local[a];
        out.colors[k3 + a] *= .90;
        out.seeds[k3 + a] = randomFor(index, bridge.id + 10, a);
      }
      const nx = cloud.normals[s3], nz = cloud.normals[s3 + 2];
      out.normals[k3] = nx * cos - nz * sin;
      out.normals[k3 + 2] = nx * sin + nz * cos;
      out.seeds[k3] = cloud.seeds[s3] * .986;
      out.seeds[k3 + 1] = cloud.seeds[s3 + 1];
      out.growth[k3] = clamp(.61 + bridge.id * .046 + (cloud.growth[s3] - .5) * .08, 0, 1);
      out.growth[k3 + 2] *= .72;
      cursor++;
    }
    if (!bridge.twigCount) continue;
    const s3 = bridge.parent * 3, start = Array.from(cloud.positions.subarray(s3, s3 + 3));
    const end = bridge.center, span = Math.hypot(...start.map((v, a) => end[a] - v));
    for (let j = 0; j < bridge.twigCount; j++, cursor++) {
      const t = j / (bridge.twigCount - 1), arc = Math.sin(Math.PI * t);
      const k3 = cursor * 3, k4 = cursor * 4;
      for (const [name, width] of Object.entries(LAYOUT)) {
        out[name].set(cloud[name].subarray(bridge.parent * width, (bridge.parent + 1) * width), cursor * width);
      }
      const jitter = .009 * arc * (1 - t * .7);
      for (let a = 0; a < 3; a++) {
        const bend = a === 1 ? -.10 * span * arc : a === 2 ? .07 * span * arc : .035 * span * Math.sin(t * Math.PI * 2);
        out.positions[k3 + a] = start[a] + (end[a] - start[a]) * t + bend
          + (randomFor(j, bridge.id + 20, a) - .5) * jitter;
        out.buds[k4 + a] = 0;
        out.colors[k3 + a] *= .76;
        out.seeds[k3 + a] = randomFor(j, bridge.id + 20, a + 3);
      }
      out.buds[k4 + 3] = 0;
      // These newly grown fine bridges are not original major limbs.
      out.branchOutline[cursor * 3] = 0;
      out.branchOutline[cursor * 3 + 1] = 0;
      out.branchOutline[cursor * 3 + 2] = 0;
      out.growth[k3] = cloud.growth[s3] + (.58 + bridge.id * .046 - cloud.growth[s3]) * t;
      out.growth[k3 + 1] = 1; out.growth[k3 + 2] = 1;
    }
  }

  // Retain the old direct-view exposure despite moving source bud centres.
  // The renderer may use this array instead of re-matching transformed x/y.
  const crownTone = new Float32Array(out.count).fill(1);
  const sourceRadiance = createCrownRadiance(cloud);
  crownTone.set(sourceRadiance.values);
  for (let i = 0; i < out.count; i++) {
    const k = i * 3, b = i * 4;
    if (out.growth[k + 2] >= 9) continue;
    const p = Array.from(out.positions.subarray(k, k + 3));
    const isCrown = out.growth[k + 1] < .5 && out.buds[b + 3] > .05;
    if (isCrown) {
      const centre = p.map((v, a) => v + out.buds[b + a]);
      const moved = reshapeCrownPosition(centre);
      const offset = separateSprayVolume(centre, p.map((v, axis) => v - centre[axis]));
      for (let a = 0; a < 3; a++) {
        out.positions[k + a] = moved[a] + offset[a];
        out.buds[b + a] = -offset[a];
      }
      // Bud remains at its connected branch tip after the local frame change.
    } else out.positions.set(reshapeCrownPosition(p), k);
  }
  // Run after the retained v16 geometry so the shared field includes all
  // foreground/background layers and the silver fringe between their buds.
  for (let i = 0; i < out.count; i++) {
    const k = i * 3, b = i * 4;
    if (out.growth[k + 1] > .5 || out.growth[k + 2] >= 9
        || out.colors[k + 2] / Math.max(.001, out.colors[k]) <= .68) continue;
    const p = Array.from(out.positions.subarray(k, k + 3));
    const moved = sharedBoughSprays(p);
    for (let axis = 0; axis < 3; axis++) {
      out.positions[k + axis] = moved[axis];
      out.buds[b + axis] += p[axis] - moved[axis];
    }
  }
  // Move a silver packet with its actual bud, rotating the original grain
  // offsets intact. Fine supports use the same continuous position field.
  let tipAdjustedParticles = 0;
  for (let i = 0; i < out.count; i++) {
    if (structureFans[i] !== 1) continue;
    const k = i * 3, b = i * 4;
    const p = Array.from(out.positions.subarray(k, k + 3));
    const crown = out.growth[k + 1] < .5 && out.buds[b + 3] > .05;
    const origin = crown ? p.map((v, axis) => v + out.buds[b + axis]) : p;
    const frame = fanTipFrame(origin, 1);
    if (frame.sin === 0 && frame.cos === 1 && frame.point[1] === origin[1]) continue;
    if (crown) {
      const offset = p.map((v, axis) => v - origin[axis]);
      const movedOffset = [offset[0] * frame.cos + offset[2] * frame.sin,
        offset[1], -offset[0] * frame.sin + offset[2] * frame.cos];
      for (let axis = 0; axis < 3; axis++) {
        out.positions[k + axis] = frame.point[axis] + movedOffset[axis];
        out.buds[b + axis] = -movedOffset[axis];
      }
    } else out.positions.set(frame.point, k);
    const nx = out.normals[k], nz = out.normals[k + 2];
    out.normals[k] = nx * frame.cos + nz * frame.sin;
    out.normals[k + 2] = -nx * frame.sin + nz * frame.cos;
    tipAdjustedParticles++;
  }
  // Translate complete flower volumes by their bud; avoid squashing them.
  for(let i=0;i<out.count;i++){
    const k=i*3,b=i*4;if(out.growth[k+2]>=9)continue;
    const p=Array.from(out.positions.subarray(k,k+3));
    const crown=out.growth[k+1]<.5&&out.buds[b+3]>.05;
    const anchor=crown?p.map((v,a)=>v+out.buds[b+a]):p;
    const moved=unifyOuterSpray(anchor);
    for(let a=0;a<3;a++)out.positions[k+a]+=moved[a]-anchor[a];
  }
  return {
    ...out, structureSource: cloud, structureSources, structureFans, crownTone, crownToneUnmatched: sourceRadiance.unmatched, bridgeClusters: bridges.filter(b => b.indices.length).length,
    crownVolumeVersion: VERSION, addedVolumeParticles: added,
    crownVolumeClusters: selections.filter(s => s.silver.length).length,
    addedVolumeSilver: addedSilver, addedVolumeBranches: addedBranches, tipAdjustedParticles,
  };
}
