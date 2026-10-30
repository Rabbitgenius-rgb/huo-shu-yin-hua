import { Vector3 } from 'three';
import { BRANCH_GROWTH } from '../tree-src/fire-image-depth.js';
import { sampleBranchBundleAxis } from './branch-structure.js';

const VERSION = 'root-water-contact-grains-v1', COUNT = 800;
const D = 16.551724137931036, OX = -.32678571428571423, OY = 1.6541384108566706;
const END_U = .10;
const LAYOUT = Object.freeze({positions: 3, colors: 3, seeds: 3, energies: 1,
  normals: 3, florets: 2, crownWeights: 1, buds: 4, growth: 3,
  branchOutline: 3, branchDensity: 1, crownTone: 1, twigPresence: 1});
const clamp = v => Math.max(0, Math.min(1, v));
const smooth = v => { const t = clamp(v); return t * t * (3 - 2 * t); };
const mix = (a, b, t) => a + (b - a) * t;
function random(grain, channel) {
  let value = Math.imul(grain + 7307, 0x9e3779b1) ^ Math.imul(channel + 467, 0x85ebca6b);
  value = Math.imul(value ^ value >>> 16, 0x7feb352d);
  value = Math.imul(value ^ value >>> 15, 0x846ca68b);
  return ((value ^ value >>> 16) >>> 0) / 4294967296;
}
const register = p => new Vector3((p.x + OX) * (1 - p.z / D) - OX,
  (p.y + OY) * (1 - p.z / D) - OY, p.z);
const unregister = p => new Vector3((p.x + OX) / (1 - p.z / D) - OX,
  (p.y + OY) / (1 - p.z / D) - OY, p.z);
function centre(t) {
  const p = sampleBranchBundleAxis(0, 0, t * END_U);
  // The semantic root is 2 mm above water. At scale .225 this lower end is
  // 2.05 mm beneath water, then rejoins the existing first trunk curve.
  p.y -= .018 * (1 - smooth(t / .25));
  return register(p);
}

/** A short particulate stem crosses the real water plane; no old point moves. */
export function addRootContactParticles(cloud) {
  if (cloud?.rootContactVersion === VERSION) return cloud;
  if (!Number.isSafeInteger(cloud?.count) || cloud.count < 0) throw new TypeError('A valid tree cloud is required.');
  for (const [name, width] of Object.entries(LAYOUT)) {
    if (!(cloud[name] instanceof Float32Array) || cloud[name].length !== cloud.count * width) {
      throw new TypeError(`Invalid tree attribute: ${name}.`);
    }
  }
  const out = {...cloud, count: cloud.count + COUNT};
  for (const [name, width] of Object.entries(LAYOUT)) {
    out[name] = new Float32Array(out.count * width); out[name].set(cloud[name]);
  }
  const steps = 128, distances = [0];
  let previous = centre(0), length = 0;
  for (let i = 1; i <= steps; i++) {
    const next = centre(i / steps); length += next.distanceTo(previous);
    distances.push(length); previous = next;
  }
  for (let grain = 0; grain < COUNT; grain++) {
    const index = cloud.count + grain, k = index * 3;
    const fraction = grain === 0 ? 0 : grain === COUNT - 1 ? 1 : (grain + random(grain, 0) * .9) / COUNT;
    const target = fraction * length;
    let lo = 0, hi = steps;
    while (hi - lo > 1) { const mid = (lo + hi) >> 1; if (distances[mid] < target) lo = mid; else hi = mid; }
    const t = (lo + (target - distances[lo]) / Math.max(1e-9, distances[hi] - distances[lo])) / steps;
    const p = centre(t), tangent = centre(Math.min(1, t + .002)).sub(centre(Math.max(0, t - .002))).normalize();
    const reference = Math.abs(tangent.y) < .92 ? new Vector3(0, 1, 0) : new Vector3(1, 0, 0);
    const n = tangent.clone().cross(reference).normalize(), b = tangent.clone().cross(n).normalize();
    const angle = random(grain, 1) * Math.PI * 2;
    const normal = n.multiplyScalar(Math.cos(angle)).addScaledVector(b, Math.sin(angle));
    const radius = mix(.080, .110, smooth(fraction)) * Math.sqrt(random(grain, 2))
      * (.79 + .21 * Math.sin(fraction * 19 + .5) ** 2);
    if (grain && grain < COUNT - 1) p.addScaledVector(normal, radius);
    unregister(p).toArray(out.positions, k); normal.toArray(out.normals, k);
    out.seeds[k] = random(grain, 3) * .982;
    out.seeds[k + 1] = random(grain, 4); out.seeds[k + 2] = random(grain, 5);
    const dark = random(grain, 6) < .29 ? .28 + .18 * random(grain, 7) : 1;
    const glint = random(grain, 8) > .95 ? 1.38 : 1;
    const value = (.27 + .21 * random(grain, 9)) * dark * glint
      * (.70 + .30 * Math.sin(fraction * 31 + 1.1) ** 2);
    out.colors[k] = value; out.colors[k + 1] = value * (.55 + .14 * random(grain, 10));
    out.colors[k + 2] = value * (.25 + .14 * random(grain, 11));
    out.energies[index] = .54 + .20 * random(grain, 12);
    out.florets[index * 2] = .12; out.crownWeights[index] = 1; out.crownTone[index] = 1;
    const growth = BRANCH_GROWTH[0], v = t * END_U * (growth.length - 1), segment = Math.min(growth.length - 2, Math.floor(v));
    out.growth[k] = mix(growth[segment], growth[segment + 1], v - segment);
    out.growth[k + 1] = 1; out.growth[k + 2] = 1;
    out.branchDensity[index] = .68 * smooth(fraction / .10) * (1 - smooth((fraction - .72) / .28));
  }
  return {...out, rootContactBaseCount: cloud.count, rootContactAddedParticles: COUNT,
    rootContactVersion: VERSION, rootContactSourceU: [0, END_U], rootContactLowerOffset: -.018};
}
