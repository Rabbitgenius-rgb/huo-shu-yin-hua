import { Vector3, CatmullRomCurve3 } from 'three';
import { VOLUME_PATHS } from '../tree-src/fire-tree-volume.js';
import { BRANCH_GROWTH } from '../tree-src/fire-image-depth.js';
import { branchLayoutPoint } from './crown-volume-fill.js';

const VERSION = 'connected-twig-grains-v6';
const WPP = 12.2 / 1456, MAX_ADDED = 14000;
const LAYOUT = Object.freeze({positions: 3, colors: 3, seeds: 3, energies: 1,
  normals: 3, florets: 2, crownWeights: 1, buds: 4, growth: 3,
  branchOutline: 3, branchDensity: 1, crownTone: 1});
const PATHS = [2, 3, 4, 11, 12, 13, 14];
const SUPPORTS = [37, 50, 56, 62, 64];
const clamp = v => Math.max(0, Math.min(1, v));
const smooth = v => { const t = clamp(v); return t * t * (3 - 2 * t); };
const mix = (a, b, t) => a + (b - a) * t;
const local = p => new Vector3((p[0] - 728) * WPP, (408 - p[1]) * WPP, p[2]);

function random(group, grain, channel) {
  let value = Math.imul(group + 1973, 0x9e3779b1) ^ Math.imul(grain + 71, 0x85ebca6b) ^ Math.imul(channel + 13, 0xc2b2ae35);
  value = Math.imul(value ^ value >>> 16, 0x7feb352d);
  value = Math.imul(value ^ value >>> 15, 0x846ca68b);
  return ((value ^ value >>> 16) >>> 0) / 4294967296;
}
function growthAt(values, t) {
  const v = clamp(t) * (values.length - 1), i = Math.min(values.length - 2, Math.floor(v));
  return mix(values[i], values[i + 1], v - i);
}
// This is the existing support graph's cubic, including its irregular bow.
function supportPoint(control, t) {
  const a = 1 - t;
  const bow = Math.sin(Math.PI * t) ** 2 * (.71 + .29 * Math.sin(t * Math.PI * 1.8 + (control[5]?.[0] || 0)));
  return new Vector3(...[0, 1, 2].map(k => a ** 3 * control[0][k] + 3 * a * a * t * control[1][k]
    + 3 * a * t * t * control[2][k] + t ** 3 * control[3][k] + (control[4]?.[k] || 0) * bow));
}
function arcSampler(point) {
  const steps = 128, distances = [0];
  let previous = point(0), length = 0;
  for (let i = 1; i <= steps; i++) {
    const next = point(i / steps); length += next.distanceTo(previous);
    distances.push(length); previous = next;
  }
  return {length, parameter(fraction) {
    const target = clamp(fraction) * length;
    let lo = 0, hi = steps;
    while (hi - lo > 1) { const mid = (lo + hi) >> 1; if (distances[mid] < target) lo = mid; else hi = mid; }
    return (lo + (target - distances[lo]) / Math.max(1e-9, distances[hi] - distances[lo])) / steps;
  }};
}

/** Append grains only to verified fine branch/support curves after refinement. */
export function addTwigParticles(cloud) {
  if (cloud?.twigParticleVersion === VERSION) return cloud;
  if (!Number.isSafeInteger(cloud?.count) || cloud.count < 0) throw new TypeError('A valid refined tree cloud is required.');
  for (const [name, width] of Object.entries(LAYOUT)) {
    if (!(cloud[name] instanceof Float32Array) || cloud[name].length !== cloud.count * width) {
      throw new TypeError(`Invalid refined tree attribute: ${name}.`);
    }
  }
  const supportPaths = cloud.supportPaths || [], selected = new Set();
  const collect = id => {
    const path = supportPaths[id];
    if (!path || selected.has(id)) return;
    selected.add(id);
    if (path.parentKind === 'support') collect(path.parent);
  };
  SUPPORTS.forEach(collect);
  const definitions = PATHS.map(id => {
    const curve = new CatmullRomCurve3(VOLUME_PATHS[id].map(local), false, 'centripetal');
    return {kind: 'source', id, point: t => curve.getPoint(t), growth: t => growthAt(BRANCH_GROWTH[id], t),
      radius: Math.max(.016, Math.min(.036, VOLUME_PATHS[id][0][3] * WPP * .44))};
  });
  for (const id of [...selected].sort((a, b) => a - b)) {
    const path = supportPaths[id];
    definitions.push({kind: 'support', id, point: t => supportPoint(path.control, t),
      growth: t => mix(path.growthStart, path.growthEnd, t), radius: Math.max(.014, Math.min(.034, path.radiusStart * 1.12)),
      sourceParticles: path.particles});
  }
  const groups = [];
  // The observed gap is in the original connected branch family. Its two
  // existing depth fans remain intact, without outlining them a second time.
  for (const definition of definitions) for (let family = 0; family < 1; family++) {
    const point = t => new Vector3(...branchLayoutPoint(definition.point(t).toArray(), family));
    const arc = arcSampler(point), familyScale = family ? .85 : 1;
    const desired = Math.ceil((definition.kind === 'support' ? definition.sourceParticles * 2.2 : arc.length * 220) * familyScale);
    if (desired > 0 && arc.length > .02) groups.push({...definition, family, point, arc, desired});
  }
  const demand = groups.reduce((sum, group) => sum + group.desired, 0), scale = Math.min(1, MAX_ADDED / Math.max(1, demand));
  for (const group of groups) group.count = Math.floor(group.desired * scale);
  const added = groups.reduce((sum, group) => sum + group.count, 0), out = {...cloud, count: cloud.count + added};
  for (const [name, width] of Object.entries(LAYOUT)) {
    out[name] = new Float32Array(out.count * width); out[name].set(cloud[name]);
  }
  const twigPresence = new Float32Array(out.count);
  if (cloud.twigPresence instanceof Float32Array) twigPresence.set(cloud.twigPresence);
  // Preserve the original support grains' irregular placement. Their signed
  // mask restores readable light only in direct view, leaving the mirror and
  // the old trunk/flowers untouched. Positive values identify appended grains.
  for (const id of selected) {
    const path = supportPaths[id];
    twigPresence.fill(-1, path.firstParticle, path.firstParticle + path.particles);
  }
  let cursor = cloud.count;
  for (const [groupId, group] of groups.entries()) for (let grain = 0; grain < group.count; grain++, cursor++) {
    const fraction = grain === 0 ? 0 : grain === group.count - 1 ? 1 : (grain + random(groupId, grain, 0) * .88) / group.count;
    const t = group.arc.parameter(fraction), p = group.point(t);
    const tangent = group.point(Math.min(1, t + .002)).sub(group.point(Math.max(0, t - .002))).normalize();
    const reference = Math.abs(tangent.y) < .92 ? new Vector3(0, 1, 0) : new Vector3(1, 0, 0);
    const n = tangent.clone().cross(reference).normalize(), b = tangent.clone().cross(n).normalize();
    const angle = random(groupId, grain, 1) * Math.PI * 2;
    const normal = n.multiplyScalar(Math.cos(angle)).addScaledVector(b, Math.sin(angle));
    let radius = mix(group.radius, .0038, smooth(fraction))
      * (.76 + .24 * Math.sin(fraction * 21 + groupId * 1.7) ** 2) * Math.sqrt(random(groupId, grain, 2));
    // A few near-shaft grains sit beside the narrow core. Their uneven
    // spacing exposes the particle volume instead of tracing a single wire.
    const sideGrain = random(groupId, grain, 14) > .72;
    const sideEnvelope = smooth(fraction / .06) * (1 - smooth((fraction - .55) / .35));
    if (sideGrain) radius = Math.min(.064, radius * (1 + 2.1 * sideEnvelope));
    if (grain && grain < group.count - 1) p.addScaledVector(normal, radius);
    const k = cursor * 3, k2 = cursor * 2;
    p.toArray(out.positions, k); normal.toArray(out.normals, k);
    out.seeds[k] = random(groupId, grain, 3) * .982;
    out.seeds[k + 1] = random(groupId, grain, 4); out.seeds[k + 2] = random(groupId, grain, 5);
    const dark = random(groupId, grain, 6) < .26 ? .30 + .18 * random(groupId, grain, 7) : 1;
    const glint = random(groupId, grain, 8) > .935 ? 1.65 : 1;
    const texture = .65 + .35 * Math.sin(fraction * (31 + groupId % 9) + groupId * .9) ** 2;
    const value = (.31 + .20 * random(groupId, grain, 9)) * dark * glint * texture
      * (sideGrain ? 1 + 1.20 * sideEnvelope : .94)
      * (1 - .40 * smooth((fraction - .72) / .28)) * (group.family ? .86 : 1);
    out.colors[k] = value; out.colors[k + 1] = value * (.57 + .13 * random(groupId, grain, 10));
    out.colors[k + 2] = value * (.28 + .10 * random(groupId, grain, 11));
    out.energies[cursor] = .55 + .24 * random(groupId, grain, 12);
    out.florets[k2] = .12; out.crownWeights[cursor] = 1; out.crownTone[cursor] = 1;
    out.growth[k] = group.growth(t); out.growth[k + 1] = 1; out.growth[k + 2] = 1;
    out.branchDensity[cursor] = group.family ? .84 : .94;
    twigPresence[cursor] = (.45 + .55 * smooth(fraction / .035)) * (1 - smooth((fraction - .90) / .10));
  }
  return {...out, twigPresence, twigBaseCount: cloud.count, twigAddedParticles: added, twigParticleVersion: VERSION,
    twigCurveGroups: groups.map(({kind, id, family, count}) => ({kind, id, family, count}))};
}
