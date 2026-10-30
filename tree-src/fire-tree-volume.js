// Real 3D volume for the image-registered fire tree (side-view rework).
//
// Every point still lies on its own front-camera ray through its source pixel,
// so the front view is unchanged; only depth along that ray is re-inferred.
// Diagnosis of the previous depth (measured on the sampled cloud):
//  * crown depth came from 21 large lobes, so the 55 visible sprays were only
//    brightness gates: each spray was ~3.2x deeper than wide (a rod along the
//    old view axis) and at 45°/90° all of them smeared into one fog;
//  * the crown was a tilted slab (height/depth correlation -0.52): from the
//    side it read as a disc leaning backwards rather than a canopy;
//  * branch tubes were 2.45x deeper than wide, and fine twigs / red sprays sat
//    flat at the depth of their nearest main branch.
// Here: sprays become compact 3D puffs placed by a small relaxation inside a
// canopy footprint, branch depth paths bend into the sprays they carry, tubes
// are round, twigs fan out in depth, and nothing falls below the water.
import { imageDepth, BRANCH_PATHS, BRANCH_GROWTH, PARENTS } from './fire-image-depth.js';
import { CROWN_CLUSTERS, sprayCoverage, SPRAY_BLOOM_ORDER } from './fire-crown-clusters.js';

const WPP = 12.2 / 1456;              // world units per source pixel
const D = 10.5;                        // front registration distance
const OX = -.42, OY = .06;             // registration offset == group offset
/** World-space water level: the trunk meets it near source y ≈ 738 px. */
export const WATER_Y = -2.70;
const clamp = (v, a, b) => Math.min(b, Math.max(a, v));
const smooth = v => { v = clamp(v, 0, 1); return v * v * (3 - 2 * v); };
const norm3 = (x, y, z) => { const l = Math.hypot(x, y, z); return l > 1e-9 ? [x / l, y / l, z / l] : [0, 0, 1]; };
const toLocal = (sx, sy) => [(sx - 728) * WPP, (408 - sy) * WPP];
const worldXY = (x, y, z) => { const k = 1 - z / D; return [(x + OX) * k, (y + OY) * k]; };

function vnoise(x, y) {
  const ix = Math.floor(x), iy = Math.floor(y), fx = x - ix, fy = y - iy;
  const sx = fx * fx * (3 - 2 * fx), sy = fy * fy * (3 - 2 * fy);
  const h = (a, b) => { let n = Math.imul(a, 374761393) ^ Math.imul(b, 668265263); n = Math.imul(n ^ n >>> 13, 1274126177); return ((n ^ n >>> 16) >>> 0) / 4294967296; };
  const a = h(ix, iy), b = h(ix + 1, iy), c = h(ix, iy + 1), d = h(ix + 1, iy + 1);
  return (a + (b - a) * sx) * (1 - sy) + (c + (d - c) * sx) * sy;
}

// ---------------------------------------------------------------------------
// 1. Spray layout. Prior depth = the previous front/back assignment, widened.
//    Sprays that overlap on screen are pushed apart along depth until they are
//    separate puffs in 3D; all stay within an umbrella footprint around the
//    trunk axis that narrows towards the crown top (a dome, not a slab), and
//    a tolerant cohesion term keeps outliers attached to their neighbours.
const AXIS_X = -.35, FOOT_A = 5.4, FOOT_B = 3.6, SPREAD = 2.5;
// v2t: the limb depths ran one way across the tree (left limbs in front, right
// limbs behind: corr(x, z) = -0.67 on the skeleton), a slab angled across the top
// view. DEPTH_PATHS now sends limbs to the front and back in turn, and the limbs
// lean a little less on the spray field (LIMB_PULL, was .9) so the new depths are
// not pulled straight back. The crown priors are untouched: the hand-placed fills
// in the cinematic layers were placed against the crown depth, and moving it
// shifts the front view. Limbs only, depth only.
const LIMB_PULL = .6;
export const SPRAYS = CROWN_CLUSTERS.map((c, i) => {
  const [x, y] = toLocal(c.x, c.y);
  return { i, x, y, rxw: c.rx * WPP, ryw: c.ry * WPP, prior: c.z * SPREAD, z: 0, rz: 0 };
});
(() => {
  // Remove 90% of the old height/depth tilt (least-squares slope), so the
  // crown wraps around the trunk instead of leaning back as one slab.
  const n = SPRAYS.length, my = SPRAYS.reduce((t, s) => t + s.y, 0) / n, mz = SPRAYS.reduce((t, s) => t + s.prior, 0) / n;
  let syz = 0, syy = 0;
  for (const s of SPRAYS) { syz += (s.y - my) * (s.prior - mz); syy += (s.y - my) ** 2; }
  const slope = syz / syy;
  for (const s of SPRAYS) { s.prior -= (s.y - my) * slope * .9 + mz * .8; s.z = s.prior; }
})();
(() => {
  const limit = p => {
    const [wx, wy] = worldXY(p.x, p.y, p.z);
    const b = FOOT_B * (1 - .42 * smooth((wy - 1.2) / 2));
    const e = (wx - AXIS_X) / FOOT_A;
    return b * Math.sqrt(Math.max(.06, 1 - e * e));
  };
  // Cohesion: each spray drifts towards the depth of its on-screen neighbours,
  // so small satellites stay attached to the canopy instead of floating off.
  const neighbours = SPRAYS.map(a => SPRAYS.filter(b => b !== a).map(b => {
    const reach = 2.2 * (a.rxw + a.ryw + b.rxw + b.ryw) * .5;
    const d2 = (a.x - b.x) ** 2 + (a.y - b.y) ** 2;
    return [b, Math.exp(-d2 / (2 * reach * reach)) * (b.rxw + b.ryw)];
  }).filter(([, w]) => w > .01));
  for (let it = 0; it < 600; it++) {
    for (const p of SPRAYS) p.z += .025 * (p.prior - p.z);
    SPRAYS.forEach((p, i) => {
      let sw = 0, sz = 0;
      for (const [o, w] of neighbours[i]) { sw += w; sz += w * o.z; }
      if (sw <= 0) return;
      // Only the excess beyond a tolerance is pulled in: outliers come home,
      // the canopy keeps its depth spread.
      const dev = sz / sw - p.z, tol = p.i > 48 ? .5 : 1.3;
      if (Math.abs(dev) > tol) p.z += (dev - Math.sign(dev) * tol) * .06;
    });
    for (let i = 0; i < SPRAYS.length; i++) {
      const a = SPRAYS[i], ka = 1 - a.z / D, [ax, ay] = worldXY(a.x, a.y, a.z);
      for (let j = i + 1; j < SPRAYS.length; j++) {
        const b = SPRAYS[j], kb = 1 - b.z / D, [bx, by] = worldXY(b.x, b.y, b.z);
        const need = (.5 * (a.rxw + a.ryw) * ka + .5 * (b.rxw + b.ryw) * kb) * .98;
        const dxy = Math.hypot(ax - bx, ay - by);
        if (dxy >= need) continue;
        const dzNeed = Math.sqrt(need * need - dxy * dxy), d = a.z - b.z;
        if (Math.abs(d) >= dzNeed) continue;
        const s = d !== 0 ? Math.sign(d) : (a.prior >= b.prior ? 1 : -1);
        const push = (dzNeed - Math.abs(d)) * .25;
        a.z += s * push; b.z -= s * push;
      }
    }
    for (const p of SPRAYS) { const l = limit(p); p.z = clamp(p.z, -l, l); }
  }
  // Puff depth matches its on-screen size: round, slightly wider than tall.
  for (const p of SPRAYS) p.rz = Math.max(p.rxw, p.ryw) * (1 - p.z / D) * 1.08;
})();

// ---------------------------------------------------------------------------
// 2. Branch depth paths. Same source-pixel centrelines; outer parts widen with
//    the crown and bend towards the depth of the sprays around them, so in the
//    side view each limb visibly carries its sprays.
export const VOLUME_PATHS = BRANCH_PATHS.map((path, p) => path.map(([x, y, z, r], j) => {
  const g = BRANCH_GROWTH[p][j];
  let depth = z * (1 + .4 * smooth((g - .2) / .55));
  let sw = 0, sz = 0;
  for (const s of SPRAYS) {
    const c = CROWN_CLUSTERS[s.i];
    const sigma = 42 + .7 * (c.rx + c.ry) * .5;
    const d2 = (x - c.x) ** 2 + (y - c.y) ** 2;
    const w = Math.exp(-d2 / (2 * sigma * sigma)) * c.rx * c.ry / 2000;
    sw += w; sz += w * s.z;
  }
  if (sw > 0) depth += (sz / sw - depth) * smooth((g - .28) / .45) * sw / (sw + .35) * LIMB_PULL;
  return [x, y, depth, r];
}));
function depthOnPath(path, x, y) {
  let best = Infinity, z = path[0][2];
  for (let i = 1; i < path.length; i++) {
    const a = path[i - 1], b = path[i], dx = b[0] - a[0], dy = b[1] - a[1];
    const t = clamp(((x - a[0]) * dx + (y - a[1]) * dy) / (dx * dx + dy * dy), 0, 1);
    const d2 = (x - a[0] - dx * t) ** 2 + (y - a[1] - dy * t) ** 2;
    if (d2 < best) { best = d2; z = a[2] + (b[2] - a[2]) * t; }
  }
  return z;
}
for (let p = 0; p < VOLUME_PATHS.length; p++) {
  if (PARENTS[p] < 0) continue;
  const path = VOLUME_PATHS[p];
  const correction = depthOnPath(VOLUME_PATHS[PARENTS[p]], path[0][0], path[0][1]) - path[0][2];
  [1, .55, .25].forEach((k, j) => { if (path[j]) path[j][2] += correction * k; });
}

// ---------------------------------------------------------------------------
// 3. Water: a point that would sit below the surface slides along its own
//    camera ray onto it (front view unchanged), becoming root mist on water.
/** Depth along the front ray of local (x, y) that lands on the water (+lift). */
export function waterDepth(y, lift = 0) {
  const yImg = y + OY;
  return D * (1 - (WATER_Y + lift) / yImg);
}
export function belowWater(y, z) {
  return (y + OY) * (1 - z / D) < WATER_Y;
}

// ---------------------------------------------------------------------------
// 4. Per-point depth.
// Depth radius (source px) per vertex where the mass is wider than the skeleton.
const ZMASS = new Map([[0, [0, 0, 0, 0, 0, 22, 27, 28, 26, 14]]]);
function branchVolume(info, sx, sy, rnd) {
  const a = VOLUME_PATHS[info.path][info.index], b = VOLUME_PATHS[info.path][info.index + 1];
  const zc = a[2] + (b[2] - a[2]) * info.t;
  const radius = Math.max(info.radius, Math.abs(info.across) * 1.08 + .55);
  const across = info.across / radius;
  // Round tube: depth half-extent equals the visible half-width.
  const radiusZ = clamp(radius * WPP * 1.1, .03, .34);
  const extent = Math.sqrt(Math.max(.015, 1 - across * across)) * radiusZ;
  const side = rnd() < .5 ? -1 : 1;
  const offset = side * extent * (rnd() < .2 ? .76 + rnd() * .24 : rnd() * .8);
  // v2u: depth thickness follows the visible mass, not the skeleton radius. The
  // trunk's top lump is ~60 px wide in the source but its path radius shrinks to
  // 12 -> 1 px, so it came out as a thin plate with a blunt edge. Only the z
  // spread grows (same random draws; the normal keeps the original radius), so
  // the front view and the shading are unchanged.
  let zScale = 1;
  const zr = ZMASS.get(info.path);
  if (zr) {
    const rb = Math.max(info.radius, zr[info.index] + (zr[info.index + 1] - zr[info.index]) * info.t, Math.abs(info.across) * 1.08 + .55);
    const ab = info.across / rb;
    zScale = Math.sqrt(Math.max(.015, 1 - ab * ab)) * clamp(rb * WPP * 1.1, .03, .34) / extent;
  }
  // Fine twigs and red sprays beyond the main tube fan out in depth. The
  // direction is a coherent field, so a twig stays one continuous spray.
  const beyond = info.distance - (info.radius * 1.15 + 2.5);
  const fan = beyond > 0 ? (vnoise(sx / 36 + 3.1, sy / 36 - 7.7) * 2 - 1) * beyond * WPP * 1.4 : 0;
  const tx = (b[0] - a[0]) * WPP, ty = -(b[1] - a[1]) * WPP, tz = b[2] - a[2];
  const [ux, uy, uz] = norm3(tx, ty, tz);
  let nx = info.perpendicular[0] * across, ny = info.perpendicular[1] * across, nz = offset / Math.max(radiusZ, .03);
  const axial = nx * ux + ny * uy + nz * uz; nx -= ux * axial; ny -= uy * axial; nz -= uz * axial;
  return { z: zc + offset * zScale + fan, normal: norm3(nx, ny, nz + fan * .6) };
}

// Smooth depth field of all sprays, precomputed on a coarse grid (local units).
const DUST = (() => {
  const x0 = -6.4, y0 = -1.8, step = .07, nx = 184, ny = 80, z = new Float32Array(nx * ny).fill(NaN);
  for (let j = 0; j < ny; j++) for (let i = 0; i < nx; i++) {
    const px = x0 + i * step, py = y0 + j * step;
    let sw = 0, sz = 0;
    for (const o of SPRAYS) {
      const d2 = (px - o.x) ** 2 + (py - o.y) ** 2, sig = .5 + (o.rxw + o.ryw) * .5;
      const w = Math.exp(-d2 / (2 * sig * sig)); sw += w; sz += w * o.z;
    }
    if (sw > 1e-6) z[j * nx + i] = sz / sw;
  }
  return { x0, y0, step, nx, ny, z };
})();
function dustDepth(px, py) {
  const fx = (px - DUST.x0) / DUST.step, fy = (py - DUST.y0) / DUST.step;
  const i = Math.floor(fx), j = Math.floor(fy);
  if (i < 0 || j < 0 || i >= DUST.nx - 1 || j >= DUST.ny - 1) return null;
  const tx = fx - i, ty = fy - j, g = DUST.z, n = DUST.nx;
  const v = (g[j * n + i] * (1 - tx) + g[j * n + i + 1] * tx) * (1 - ty) + (g[(j + 1) * n + i] * (1 - tx) + g[(j + 1) * n + i + 1] * tx) * ty;
  return Number.isFinite(v) ? v : null;
}

function sprayVolume(px, py, rnd, warm) {
  const { covering, nearest } = sprayCoverage(px, py, 1.25);
  let pick = nearest;
  if (covering.length) {
    let sum = 0;
    const weights = covering.map(([, q]) => (sum += .045 + Math.max(0, 1 - Math.max(q, 0)) ** .8));
    const choose = rnd() * sum;
    pick = covering[weights.findIndex(w => choose <= w)] ?? covering[covering.length - 1];
  }
  const [index, rawQ] = pick, s = SPRAYS[index], q = Math.max(rawQ, 0);
  const side = rnd() < .5 ? -1 : 1;
  let offset;
  if (q <= 1) {
    const lumpy = 1 + .22 * (vnoise(px * 2.6 + index * 7.1, py * 2.6 - index * 3.3) - .5);
    const extent = Math.sqrt(1 - q) * s.rz * lumpy;
    // Red tips sit on the outer surface of their spray; silver fills it.
    offset = side * extent * (warm ? .72 + .28 * rnd() : rnd() < .14 ? .84 + .16 * rnd() : rnd() * .9);
  } else {
    // Loose dust between sprays: a soft cloud whose depth drifts towards the
    // weighted depth of all nearby sprays, so it never collapses into a sheet.
    const far = Math.min(1.6, Math.sqrt(q) - 1);
    offset = side * s.rz * (.45 + .7 * far) * Math.pow(rnd(), .7);
    const field = dustDepth(px, py);
    if (field !== null) offset += (field - s.z) * smooth((q - 1.4) / 2.2);
  }
  const k = 1 - s.z / D;
  const normal = norm3((px - s.x) / (s.rxw * s.rxw), (py - s.y) / (s.ryw * s.ryw), offset / (s.rz * s.rz) * k);
  return { z: s.z + offset, normal, spray: index, q: rawQ };
}

/**
 * Depth for one sampled source pixel. Returns the previous inference too
 * (`frontZ`, used only for the unchanged front-view spray gating) plus the
 * spray a crown point belongs to, so its bud bursts from that spray's centre.
 * `rnd` should be an RNG independent of the image/depth sequences.
 */
export function treeVolume(sx, sy, r, g, b, depthRandom, rnd, px, py, groundToWater = true) {
  const base = imageDepth(sx, sy, r, g, b, depthRandom);
  return finishVolume(base, sx, sy, r, g, b, rnd, px, py, groundToWater);
}
export function finishVolume(base, sx, sy, r, g, b, rnd, px, py, groundToWater = true) {
  const [lx, ly] = px === undefined ? toLocal(sx, sy) : [px, py];
  const warm = (r - b) / Math.max(r, g, b, 1e-3) > .3;
  let vol;
  if (base.growth >= 0 && base.branch) vol = branchVolume(base.branch, sx, sy, rnd);
  else vol = sprayVolume(lx, ly, rnd, warm);
  let z = clamp(vol.z, -4.4, 3.3), normal = vol.normal, onWater = false;
  if (belowWater(ly, z) && ly + OY < -.5) {
    // Keep the incoming RNG sequence even when the host has its own water.
    const lift = rnd() * rnd() * .05;
    if (groundToWater) {
      z = clamp(waterDepth(ly, lift), -4.4, 3.4);
      normal = [0, 1, 0]; onWater = true;
    }
  }
  return { ...base, frontZ: base.z, z, normal, spray: vol.spray ?? -1, sprayQ: vol.q ?? 9, onWater };
}

export const SPRAY_ORDER = SPRAY_BLOOM_ORDER;
