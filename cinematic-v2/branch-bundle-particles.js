import { Vector3, CatmullRomCurve3 } from 'three';
import { VOLUME_PATHS } from '../tree-src/fire-tree-volume.js';
import { BRANCH_GROWTH } from '../tree-src/fire-image-depth.js';
import { branchLayoutPoint } from './crown-volume-fill.js';
import { sampleBranchBundleAxis } from './branch-structure.js';

const VERSION = 'three-side-particle-bundles-v4';
const WPP = 12.2 / 1456;
const SPECS = Object.freeze([
  {path: 1, family: 2, start: .26, end: .60, count: 1400, seedOffset: 0, radiusBase: .045, radiusRise: .017, sideCap: .078},
  {path: 5, family: 1, start: .30, end: .88, count: 1800, seedOffset: 5000, radiusBase: .038, radiusRise: .017, sideCap: .070},
  {path: 1, family: 1, start: .24, end: .50, count: 1000, seedOffset: 10000, radiusBase: .038, radiusRise: .017, sideCap: .070},
]);
const LAYOUT = Object.freeze({positions: 3, colors: 3, seeds: 3, energies: 1,
  normals: 3, florets: 2, crownWeights: 1, buds: 4, growth: 3,
  branchOutline: 3, branchDensity: 1, crownTone: 1});
const clamp = x => Math.max(0, Math.min(1, x));
const smooth = x => { const t = clamp(x); return t * t * (3 - 2 * t); };
const mix = (a, b, t) => a + (b - a) * t;
function random(grain, channel) {
  let n = Math.imul(grain + 193, 0x9e3779b1) ^ Math.imul(channel + 287, 0x85ebca6b);
  n = Math.imul(n ^ n >>> 16, 0x7feb352d);
  n = Math.imul(n ^ n >>> 15, 0x846ca68b);
  return ((n ^ n >>> 16) >>> 0) / 4294967296;
}

/** Only the three verified sparse side-bough segments gain particle volumes. */
export function addBranchBundleParticles(cloud) {
  if (cloud?.bundleParticleVersion === VERSION) return cloud;
  if (!Number.isSafeInteger(cloud?.count) || cloud.count < 0) throw new TypeError('A valid tree cloud is required.');
  for (const [name, width] of Object.entries(LAYOUT)) {
    if (!(cloud[name] instanceof Float32Array) || cloud[name].length !== cloud.count * width) {
      throw new TypeError(`Invalid particle attribute: ${name}.`);
    }
  }
  if (!(cloud.twigPresence instanceof Float32Array) || cloud.twigPresence.length !== cloud.count) {
    throw new TypeError('The existing twigPresence mask is required.');
  }
  const groups = SPECS.map(spec => {
    const START = spec.start, END = spec.end;
    const sourceCurve = new CatmullRomCurve3(VOLUME_PATHS[spec.path].map(p => new Vector3(
    (p[0] - 728) * WPP, (408 - p[1]) * WPP, p[2])), false, 'centripetal');
  const point = u => new Vector3(...branchLayoutPoint(sourceCurve.getPoint(u).toArray(), spec.family));
  const steps = 256, distances = [0];
  let previous = point(START), length = 0;
  for (let i = 1; i <= steps; i++) {
    const next = point(mix(START, END, i / steps));
    length += next.distanceTo(previous); distances.push(length); previous = next;
  }
  const parameter = fraction => {
    const target = fraction * length;
    let lo = 0, hi = steps;
    while (hi - lo > 1) { const mid = (lo + hi) >> 1; if (distances[mid] < target) lo = mid; else hi = mid; }
    return mix(START, END, (lo + (target - distances[lo]) / Math.max(1e-9, distances[hi] - distances[lo])) / steps);
  };
    return {...spec, point, length, parameter};
  });
  const COUNT = groups.reduce((sum, group) => sum + group.count, 0);
  const NECK_COUNT = 400, neckAdded = groups.length * NECK_COUNT;
  const out = {...cloud, count: cloud.count + COUNT + neckAdded};
  for (const [name, width] of Object.entries(LAYOUT)) {
    out[name] = new Float32Array(out.count * width); out[name].set(cloud[name]);
  }
  const twigPresence = new Float32Array(out.count); twigPresence.set(cloud.twigPresence);
  let cursor = cloud.count;
  for (const group of groups) {
    const COUNT = group.count, point = group.point, parameter = group.parameter;
    for (let grain = 0; grain < COUNT; grain++) {
    const index = cursor + grain, k = index * 3, seedGrain = grain + group.seedOffset;
    const fraction = grain === 0 ? 0 : grain === COUNT - 1 ? 1 : (grain + random(seedGrain, 0) * .90) / COUNT;
    const u = parameter(fraction), p = point(u);
    const tangent = point(Math.min(1, u + .001)).sub(point(Math.max(0, u - .001))).normalize();
    const reference = Math.abs(tangent.y) < .92 ? new Vector3(0, 1, 0) : new Vector3(1, 0, 0);
    const n = tangent.clone().cross(reference).normalize(), b = tangent.clone().cross(n).normalize();
    const angle = random(seedGrain, 1) * Math.PI * 2;
    const normal = n.multiplyScalar(Math.cos(angle)).addScaledVector(b, Math.sin(angle));
    const envelope = smooth(fraction / .10) * (1 - smooth((fraction - .86) / .14));
    const bodyRadius = group.radiusBase + group.radiusRise * Math.sin(fraction * Math.PI) ** 2;
    let radius = mix(.012, bodyRadius, envelope) * Math.sqrt(random(seedGrain, 2))
      * (.87 + .13 * Math.sin(fraction * 29 + .7) ** 2);
    const side = random(seedGrain, 13) > .82;
    if (side) radius = Math.min(group.sideCap, radius * (1 + .40 * envelope));
    if (grain && grain < COUNT - 1) p.addScaledVector(normal, radius);
    p.toArray(out.positions, k); normal.toArray(out.normals, k);
    out.seeds[k] = random(seedGrain, 3) * .982;
    out.seeds[k + 1] = random(seedGrain, 4); out.seeds[k + 2] = random(seedGrain, 5);
    const dark = random(seedGrain, 6) < .28 ? .24 + .20 * random(seedGrain, 7) : 1;
    const glint = random(seedGrain, 8) > .94 ? 1.60 : 1;
    const texture = .68 + .32 * Math.sin(fraction * 49 + 1.3) ** 2;
    const value = (.34 + .24 * random(seedGrain, 9)) * dark * glint * texture * (side ? 1.12 : 1);
    out.colors[k] = value; out.colors[k + 1] = value * (.57 + .15 * random(seedGrain, 10));
    out.colors[k + 2] = value * (.29 + .13 * random(seedGrain, 11));
    out.energies[index] = .57 + .24 * random(seedGrain, 12);
    out.florets[index * 2] = .12; out.crownWeights[index] = 1; out.crownTone[index] = 1;
    const growth = BRANCH_GROWTH[group.path], v = u * (growth.length - 1), segment = Math.min(growth.length - 2, Math.floor(v));
    out.growth[k] = clamp(mix(growth[segment], growth[segment + 1], v - segment) + (random(seedGrain, 14) - .5) * .024);
    out.growth[k + 1] = 1; out.growth[k + 2] = 1;
    out.branchDensity[index] = .88 * smooth(fraction / .06)
      * (1 - smooth((fraction - .91) / .09));
    twigPresence[index] = (.35 + .65 * smooth(fraction / .05)) * (1 - smooth((fraction - .93) / .07));
  }
    cursor += COUNT;
  }
  const bundleNecks = [];
  for (const [groupId, group] of groups.entries()) {
    const start = .03, end = group.start + .03, firstParticle = cursor;
    const point = u => {
      const shared = sampleBranchBundleAxis(group.path, group.family, u);
      const release = smooth((u - (group.start - .09)) / .105);
      return shared.lerp(group.point(u), release);
    };
    const steps = 128, distances = [0];
    let previous = point(start), length = 0;
    for (let i = 1; i <= steps; i++) {
      const next = point(mix(start, end, i / steps));
      length += next.distanceTo(previous); distances.push(length); previous = next;
    }
    for (let grain = 0; grain < NECK_COUNT; grain++, cursor++) {
      const seed = grain + 20000 + groupId * 5000;
      const fraction = grain === 0 ? 0 : grain === NECK_COUNT - 1 ? 1 : (grain + random(seed, 0) * .90) / NECK_COUNT;
      const target = fraction * length;
      let lo = 0, hi = steps;
      while (hi - lo > 1) { const mid = (lo + hi) >> 1; if (distances[mid] < target) lo = mid; else hi = mid; }
      const u = mix(start, end, (lo + (target - distances[lo]) / Math.max(1e-9, distances[hi] - distances[lo])) / steps);
      const p = point(u), tangent = point(Math.min(end, u + .001)).sub(point(Math.max(start, u - .001))).normalize();
      const reference = Math.abs(tangent.y) < .92 ? new Vector3(0, 1, 0) : new Vector3(1, 0, 0);
      const n = tangent.clone().cross(reference).normalize(), b = tangent.clone().cross(n).normalize();
      const angle = random(seed, 1) * Math.PI * 2;
      const normal = n.multiplyScalar(Math.cos(angle)).addScaledVector(b, Math.sin(angle));
      const radius = mix(.012, .030, smooth(fraction)) * Math.sqrt(random(seed, 2))
        * (.85 + .15 * Math.sin(fraction * 23 + groupId) ** 2);
      if (grain && grain < NECK_COUNT - 1) p.addScaledVector(normal, radius);
      const k = cursor * 3;
      p.toArray(out.positions, k); normal.toArray(out.normals, k);
      out.seeds[k] = random(seed, 3) * .982;
      out.seeds[k + 1] = random(seed, 4); out.seeds[k + 2] = random(seed, 5);
      const dark = random(seed, 6) < .28 ? .24 + .20 * random(seed, 7) : 1;
      const glint = random(seed, 8) > .94 ? 1.60 : 1;
      const value = .75 * (.34 + .24 * random(seed, 9)) * dark * glint
        * (.68 + .32 * Math.sin(fraction * 43 + groupId) ** 2);
      out.colors[k] = value; out.colors[k + 1] = value * (.57 + .15 * random(seed, 10));
      out.colors[k + 2] = value * (.29 + .13 * random(seed, 11));
      out.energies[cursor] = .57 + .24 * random(seed, 12);
      out.florets[cursor * 2] = .12; out.crownWeights[cursor] = 1; out.crownTone[cursor] = 1;
      const growth = BRANCH_GROWTH[group.path], v = u * (growth.length - 1), segment = Math.min(growth.length - 2, Math.floor(v));
      out.growth[k] = clamp(mix(growth[segment], growth[segment + 1], v - segment) + (random(seed, 14) - .5) * .024);
      out.growth[k + 1] = 1; out.growth[k + 2] = 1;
      const fade = smooth(fraction / .08) * (1 - smooth((fraction - .88) / .12));
      out.branchDensity[cursor] = .76 * fade;
      twigPresence[cursor] = fade;
    }
    bundleNecks.push({path: group.path, family: group.family, uStart: start, uEnd: end,
      firstParticle, count: NECK_COUNT, length});
  }
  let firstParticle = cloud.count;
  const bundleCurves = groups.map(group => {
    const value = {path: group.path, family: group.family, uStart: group.start, uEnd: group.end,
      count: group.count, firstParticle, length: group.length, seedOffset: group.seedOffset};
    firstParticle += group.count; return value;
  });
  return {...out, twigPresence, bundleBaseCount: cloud.count, bundleAddedParticles: COUNT + neckAdded,
    bundleBodyParticles: COUNT, bundleNeckParticles: neckAdded,
    bundleParticleVersion: VERSION, bundleCurve: bundleCurves[0], bundleCurves, bundleNecks};
}
