// v3h: fill thin stretches of a limb with grains.
//
// Where a limb runs over a dim, narrow part of the source image (limb 10 just
// after it leaves the trunk is the visible case) it got far fewer grains than
// the rest of the same limb, and seen from the side it read as a bare line
// with the growth light threads running along it. Along each listed limb this
// counts the grains already in its tube, bin by bin, and adds grains only where
// a bin falls short of the limb's own typical density, in a round tube as thick
// as the limb's fuller parts. The new grains use the colours of their
// neighbours, so the limb reads as one body. Runs after the twig layer and
// counts as part of it (positive twigPresence).
import { Vector3, CatmullRomCurve3 } from 'three';
import { VOLUME_PATHS } from '../tree-src/fire-tree-volume.js';
import { BRANCH_GROWTH } from '../tree-src/fire-image-depth.js';
import { branchLayoutPoint } from './crown-volume-fill.js';

const VERSION = 'limb-gap-fill-v1';
const WPP = 12.2 / 1456, BINS = 40;
const LIMBS = [{id: 10, tube: .06}, {id: 15, tube: .05}, {id: 6, tube: .065}];
const LAYOUT = Object.freeze({positions: 3, colors: 3, seeds: 3, energies: 1,
  normals: 3, florets: 2, crownWeights: 1, buds: 4, growth: 3,
  branchOutline: 3, branchDensity: 1, crownTone: 1, twigPresence: 1});
const clamp = v => Math.max(0, Math.min(1, v));
const local = p => new Vector3((p[0] - 728) * WPP, (408 - p[1]) * WPP, p[2]);
function random(a, b, c) {
  let v = Math.imul(a + 7919, 0x9e3779b1) ^ Math.imul(b + 131, 0x85ebca6b) ^ Math.imul(c + 17, 0xc2b2ae35);
  v = Math.imul(v ^ v >>> 16, 0x7feb352d); v = Math.imul(v ^ v >>> 15, 0x846ca68b);
  return ((v ^ v >>> 16) >>> 0) / 4294967296;
}
function growthAt(values, t) {
  const v = clamp(t) * (values.length - 1), i = Math.min(values.length - 2, Math.floor(v));
  return values[i] + (values[i + 1] - values[i]) * (v - i);
}

export function addLimbGapFill(cloud) {
  if (cloud?.limbGapVersion === VERSION) return cloud;
  const {positions, colors, growth} = cloud, plans = [];
  for (const [limb, {id, tube}] of LIMBS.entries()) {
    const curve = new CatmullRomCurve3(VOLUME_PATHS[id].map(local), false, 'centripetal');
    const samples = Array.from({length: BINS + 1}, (_, i) => new Vector3(...branchLayoutPoint(curve.getPoint(i / BINS).toArray(), 0)));
    const counts = new Float32Array(BINS), colour = Array.from({length: BINS}, () => [0, 0, 0]);
    const lo = new Vector3(Infinity, Infinity, Infinity), hi = new Vector3(-Infinity, -Infinity, -Infinity);
    samples.forEach(p => { lo.min(p); hi.max(p); });
    const reach = tube * 1.6, q = new Vector3();
    for (let i = 0; i < cloud.count; i++) {
      if (growth[i * 3 + 1] < .5) continue;
      const x = positions[i * 3], y = positions[i * 3 + 1], z = positions[i * 3 + 2];
      if (x < lo.x - reach || x > hi.x + reach || y < lo.y - reach || y > hi.y + reach || z < lo.z - reach || z > hi.z + reach) continue;
      q.set(x, y, z);
      let best = Infinity, bin = 0;
      for (let b = 0; b < BINS; b++) {
        const a = samples[b], c = samples[b + 1], ab = c.clone().sub(a);
        const t = clamp(q.clone().sub(a).dot(ab) / Math.max(1e-9, ab.lengthSq()));
        const d = a.clone().addScaledVector(ab, t).distanceTo(q);
        if (d < best) { best = d; bin = b; }
      }
      if (best > reach) continue;
      counts[bin]++;
      colour[bin][0] += colors[i * 3]; colour[bin][1] += colors[i * 3 + 1]; colour[bin][2] += colors[i * 3 + 2];
    }
    // The limb's own full density (its fullest sixth, plus half), tapering to the tip.
    const sorted = [...counts].sort((a, b) => a - b), typical = sorted[Math.floor(BINS * .85)] * 1.5;
    for (let b = 0; b < BINS; b++) {
      const want = typical * (1 - .55 * (b / BINS) ** 2), need = Math.max(0, Math.round(want - counts[b]));
      if (!need) continue;
      // Colour from this bin, or the nearest bin that has grains.
      let src = b;
      for (let k = 1; !counts[src] && k < BINS; k++) src = counts[b - k] ? b - k : counts[b + k] ? b + k : src;
      const n = Math.max(1, counts[src]);
      plans.push({limb, id, b, need, tube, curve, samples, colour: colour[src].map(v => v / n)});
    }
  }
  const added = plans.reduce((s, p) => s + p.need, 0);
  if (!added) return {...cloud, limbGapVersion: VERSION, limbGapParticles: 0};
  const out = {...cloud, count: cloud.count + added};
  for (const [name, width] of Object.entries(LAYOUT)) {
    out[name] = new Float32Array(out.count * width);
    if (cloud[name]) out[name].set(cloud[name]);
  }
  let cursor = cloud.count;
  for (const plan of plans) for (let g = 0; g < plan.need; g++, cursor++) {
    const s = (plan.b + random(plan.id, plan.b * 997 + g, 0)) / BINS;
    const p = new Vector3(...branchLayoutPoint(plan.curve.getPoint(s).toArray(), 0));
    const ahead = new Vector3(...branchLayoutPoint(plan.curve.getPoint(Math.min(1, s + .01)).toArray(), 0));
    const tangent = ahead.sub(p).normalize();
    const ref = Math.abs(tangent.y) < .92 ? new Vector3(0, 1, 0) : new Vector3(1, 0, 0);
    const n = tangent.clone().cross(ref).normalize(), m = tangent.clone().cross(n).normalize();
    const angle = random(plan.id, plan.b * 997 + g, 1) * Math.PI * 2;
    const normal = n.multiplyScalar(Math.cos(angle)).addScaledVector(m, Math.sin(angle));
    const radius = plan.tube * (1 - .45 * s) * Math.sqrt(random(plan.id, plan.b * 997 + g, 2));
    p.addScaledVector(normal, radius);
    const k = cursor * 3, jitter = .75 + .5 * random(plan.id, plan.b * 997 + g, 3);
    p.toArray(out.positions, k); normal.toArray(out.normals, k);
    out.colors[k] = plan.colour[0] * jitter; out.colors[k + 1] = plan.colour[1] * jitter; out.colors[k + 2] = plan.colour[2] * jitter;
    out.seeds[k] = random(plan.id, g, 4) * .982; out.seeds[k + 1] = random(plan.id, g, 5); out.seeds[k + 2] = random(plan.id, g, 6);
    out.energies[cursor] = .55 + .25 * random(plan.id, g, 7);
    out.florets[cursor * 2] = .12; out.crownWeights[cursor] = 1; out.crownTone[cursor] = 1;
    out.growth[k] = growthAt(BRANCH_GROWTH[plan.id], s); out.growth[k + 1] = 1; out.growth[k + 2] = 1;
    out.branchDensity[cursor] = .94; out.twigPresence[cursor] = .9;
  }
  return {...out, limbGapVersion: VERSION, limbGapParticles: added};
}
