// Fine, branching particle supports for the inferred flower volumes. The
// source tree and its flowers stay byte-for-byte intact; this module only
// appends sparse warm grains. No mesh, line primitive or broad glow is used.
import { SPRAYS, VOLUME_PATHS } from './fire-tree-volume.js';
import { BRANCH_GROWTH } from './fire-image-depth.js';

const VERSION = 'crown-support-graph-v2';
const WPP = 12.2 / 1456;
const MAX_PARTICLES = 18000;
const LAYOUT = Object.freeze({ positions: 3, colors: 3, seeds: 3, energies: 1,
  normals: 3, florets: 2, crownWeights: 1, buds: 4, growth: 3 });
const clamp = (x, lo, hi) => Math.min(hi, Math.max(lo, x));
const mix = (a, b, t) => a.map((v, i) => v + (b[i] - v) * t);
const sub = (a, b) => a.map((v, i) => v - b[i]);
const length = v => Math.hypot(...v);
const unit = v => { const n = length(v) || 1; return v.map(x => x / n); };
const cross = (a, b) => [a[1] * b[2] - a[2] * b[1], a[2] * b[0] - a[0] * b[2], a[0] * b[1] - a[1] * b[0]];
const toLocal = p => [(p[0] - 728) * WPP, (408 - p[1]) * WPP, p[2]];

function randomAt(path, grain, channel) {
  let n = Math.imul(path + 1471, 0x9e3779b1) ^ Math.imul(grain + 41, 0x85ebca6b) ^ Math.imul(channel + 3, 0xc2b2ae35);
  n = Math.imul(n ^ n >>> 16, 0x7feb352d);
  n = Math.imul(n ^ n >>> 15, 0x846ca68b);
  return ((n ^ n >>> 16) >>> 0) / 4294967296;
}

function cubic(control, t) {
  const a = 1 - t;
  // Smooth, uneven bow through the exposed middle. The sin² envelope has
  // zero value and slope at both ends, so parent and flower joins stay exact.
  const bow = Math.sin(Math.PI * t) ** 2 * (.71 + .29 * Math.sin(t * Math.PI * 1.8 + (control[5]?.[0] || 0)));
  return [0, 1, 2].map(k => a ** 3 * control[0][k] + 3 * a * a * t * control[1][k]
    + 3 * a * t * t * control[2][k] + t ** 3 * control[3][k] + (control[4]?.[k] || 0) * bow);
}

function makeGraph(cloud) {
  const targets = SPRAYS.map(s => ({ id: `spray-${s.i}`, sourceSpray: s.i,
    center: [s.x, s.y, s.z], rx: s.rxw, ry: s.ryw, rz: s.rz, added: false }));
  for (const [i, c] of (cloud.crownFillConfigs || []).entries()) {
    if (!c.addedParticles) continue;
    const s = SPRAYS[c.sourceSpray];
    targets.push({ id: `fill-${i}`, sourceSpray: c.sourceSpray,
      center: [s.x, s.y, c.targetZ], rx: s.rxw * Math.sqrt(c.coreQ),
      ry: s.ryw * Math.sqrt(c.coreQ), rz: s.rz * c.depthScale,
      added: true });
  }
  // Grow from low flowers to high ones: upper sprays can share an ascending
  // secondary branch instead of every spray drawing a spoke from the trunk.
  targets.sort((a, b) => a.center[1] - b.center[1] || a.center[0] - b.center[0] || a.center[2] - b.center[2]);
  const candidates = [];
  VOLUME_PATHS.slice(0, 19).forEach((path, p) => {
    for (let seg = 0; seg < path.length - 1; seg++) {
      const a = toLocal(path[seg]), b = toLocal(path[seg + 1]);
      for (let j = 0; j <= 4; j++) {
        const t = j / 4;
        candidates.push({ point: mix(a, b, t), tangent: unit(sub(b, a)),
          growth: BRANCH_GROWTH[p][seg] + (BRANCH_GROWTH[p][seg + 1] - BRANCH_GROWTH[p][seg]) * t,
          parentKind: 'original', parent: p, segment: seg, t, order: 0, used: 0 });
      }
    }
  });
  const paths = [];
  for (const target of targets) {
    // Enter the lower interior, not the extreme fringe, so the twig is still
    // visibly inside the spray when its front/back grains separate on orbit.
    const end = [...target.center]; end[1] -= target.ry * .23;
    let parent = null, best = Infinity;
    for (const c of candidates) {
      if (c.used >= 2 || c.order >= 6) continue;
      const delta = sub(end, c.point), distance = length(delta);
      const down = Math.max(0, -delta[1] - .035);
      // Prefer an ascending local connection, and penalize cross-crown links.
      // Depth is real distance, not a visual coincidence in the front image.
      const sideways = Math.max(0, Math.abs(delta[0]) - Math.max(.24, delta[1] * 1.25));
      const score = distance + down * 7 + sideways * .42
        + Math.abs(delta[2]) * .10 + c.used * .20
        + (c.parentKind === 'original' ? 0 : .045 * c.order);
      if (score < best) { parent = c; best = score; }
    }
    if (!parent) continue;
    parent.used++;
    const start = [...parent.point], delta = sub(end, start), chord = length(delta);
    const dir = unit(delta), tangent = [...parent.tangent];
    if (tangent.reduce((sum, v, k) => sum + v * dir[k], 0) < .15) {
      for (let k = 0; k < 3; k++) tangent[k] = dir[k] * .72 + (k === 1 ? .28 : 0);
    }
    const c1 = start.map((v, k) => v + tangent[k] * chord * .31);
    const c2 = end.map((v, k) => v - dir[k] * chord * .23);
    const phase = (target.sourceSpray + 1) * 2.3999 + (target.added ? 1.7 : 0);
    const transverse = unit([-dir[1], dir[0], .38 * Math.sin(phase)]);
    const direction = Math.sin(phase * 1.37) >= 0 ? 1 : -1;
    // Short links need curvature too: several nearly straight short links
    // otherwise outline polygonal frames in the dark crown channels.
    const amount = Math.min(.24, .035 + chord * .12) * direction;
    const curveBow = transverse.map(v => v * amount);
    const control = [start, c1, c2, end, curveBow, [phase]];
    const points = Array.from({ length: 25 }, (_, i) => cubic(control, i / 24));
    const arcLength = points.slice(1).reduce((sum, p, i) => sum + length(sub(p, points[i])), 0);
    const index = paths.length;
    const growthEnd = clamp(parent.growth + arcLength / 11, parent.growth, 1);
    const path = { index, target: target.id, sourceSpray: target.sourceSpray,
      targetCenter: [...target.center], targetRadii: [target.rx, target.ry, target.rz],
      addedTarget: target.added, parentKind: parent.parentKind, parent: parent.parent,
      parentSegment: parent.segment, parentT: parent.t, order: parent.order + 1,
      start, end, control, points, length: arcLength,
      growthStart: parent.growth, growthEnd,
      radiusStart: clamp(.013 + arcLength * .008, .015, .043), radiusEnd: .0045 };
    paths.push(path);
    // Side shoots arise from several separated points along an established
    // branch. Stop before its flower: otherwise each flower becomes a hub.
    for (const step of [7, 11, 15, 19]) {
      const t = step / 24;
      candidates.push({ point: [...points[step]], tangent: unit(sub(points[step + 1], points[step - 1])),
        growth: parent.growth + (growthEnd - parent.growth) * t,
        parentKind: 'support', parent: index, segment: step, t,
        order: path.order, used: 0 });
    }
  }
  return paths;
}

/** Deterministic append; retains every original array element and object field. */
export function addCrownSupport(cloud) {
  if (cloud?.supportVersion === VERSION) return cloud;
  if (!Number.isSafeInteger(cloud?.count) || cloud.count < 0) throw new TypeError('A valid sampled cloud is required.');
  for (const [name, width] of Object.entries(LAYOUT)) {
    if (!(cloud[name] instanceof Float32Array) || cloud[name].length !== cloud.count * width) {
      throw new TypeError(`Invalid particle attribute: ${name}.`);
    }
  }
  const paths = makeGraph(cloud);
  const desired = paths.map(p => Math.max(60, Math.ceil(p.length * 150)));
  const demand = desired.reduce((sum, n) => sum + n, 0);
  const scale = Math.min(1, MAX_PARTICLES / Math.max(1, demand));
  const counts = desired.map(n => Math.floor(n * scale));
  const added = counts.reduce((sum, n) => sum + n, 0);
  const out = { ...cloud, count: cloud.count + added };
  for (const [name, width] of Object.entries(LAYOUT)) {
    out[name] = new Float32Array(out.count * width); out[name].set(cloud[name]);
  }
  let cursor = cloud.count;
  for (const [id, path] of paths.entries()) {
    const n = counts[id]; path.particles = n; path.firstParticle = cursor;
    for (let i = 0; i < n; i++, cursor++) {
      // Stratified random placement along a tapering, irregular dust tube.
      // The endpoints themselves have zero scatter, guaranteeing contact.
      const t = i === 0 ? 0 : i === n - 1 ? 1 : (i + randomAt(id, i, 0) * .86) / n;
      const p = cubic(path.control, t);
      const tangent = unit(sub(cubic(path.control, Math.min(1, t + .003)), cubic(path.control, Math.max(0, t - .003))));
      const side = unit(cross(tangent, Math.abs(tangent[1]) < .94 ? [0, 1, 0] : [1, 0, 0]));
      const up = unit(cross(tangent, side));
      const angle = randomAt(id, i, 1) * Math.PI * 2;
      const shell = Math.pow(randomAt(id, i, 2), .62);
      const radius = (path.radiusEnd + (path.radiusStart - path.radiusEnd) * (1 - t) ** 1.45)
        * (.72 + .28 * Math.sin(t * 17 + id) ** 2) * shell * (1.5 + 1.1 * clamp((t - .35) / .65, 0, 1));
      const scatter = i === 0 || i === n - 1 ? 0 : radius;
      const normal = side.map((v, k) => v * Math.cos(angle) + up[k] * Math.sin(angle));
      const k3 = cursor * 3, k2 = cursor * 2, k4 = cursor * 4;
      for (let k = 0; k < 3; k++) {
        out.positions[k3 + k] = p[k] + normal[k] * scatter;
        out.normals[k3 + k] = normal[k];
        out.seeds[k3 + k] = randomAt(id, i, 4 + k);
      }
      // Warmth matches the darker source twigs, with sparse brighter grains.
      // No silver-tone branch and no uniformly bright continuous skeleton.
      const sparkle = randomAt(id, i, 8) > .94;
      // Break the exposed shaft into grains without breaking its geometric
      // contact. Leave the junction intact; dim 24% of middle grains strongly
      // and let the thinner final part disappear naturally inside its flower.
      const middle = t > .14 && t < .88;
      const sparseGrain = middle && randomAt(id, i, 13) < .42 ? .16 : 1;
      const tipFade = 1 - .62 * clamp((t - .40) / .60, 0, 1);
      const value = (.26 + randomAt(id, i, 9) * .22) * (sparkle ? 1.45 : 1) * sparseGrain * tipFade;
      out.colors[k3] = value;
      out.colors[k3 + 1] = value * (.34 + randomAt(id, i, 10) * .11);
      out.colors[k3 + 2] = value * (.105 + randomAt(id, i, 11) * .055);
      out.energies[cursor] = .48 + randomAt(id, i, 12) * .27;
      out.florets[k2] = .12; out.florets[k2 + 1] = 0;
      out.crownWeights[cursor] = 1;
      out.buds[k4 + 3] = 0;
      out.growth[k3] = path.growthStart + (path.growthEnd - path.growthStart) * t;
      out.growth[k3 + 1] = 1; out.growth[k3 + 2] = 1;
    }
  }
  return { ...out, supportVersion: VERSION, supportParticles: added,
    supportBranches: paths.length, supportPaths: paths };
}
