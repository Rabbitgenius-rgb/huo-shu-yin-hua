import { Vector3, CatmullRomCurve3 } from 'three';
import { VOLUME_PATHS } from '../tree-src/fire-tree-volume.js';
import { branchLayoutPoint } from './crown-volume-fill.js';

const WPP = 12.2 / 1456;
const clamp = v => Math.max(0, Math.min(1, v));
const smooth = v => { const t = clamp(v); return t * t * (3 - 2 * t); };
const mix = (a, b, t) => a + (b - a) * t;
const MAJOR = new Set([0, 1, 5]);
const local = p => new Vector3((p[0] - 728) * WPP, (408 - p[1]) * WPP, p[2]);
const curves = VOLUME_PATHS.map(path => new CatmullRomCurve3(path.map(local), false, 'centripetal'));
const originalCurves = curves.slice();
// Match the complete XYZ collar to the smooth parent axis. The first child
// direction rises out of that axis before turning outward; it no longer
// starts as a broad, nearly horizontal image-space strip.
for (const id of [1, 5]) {
  const start = curves[id].points[0], path = VOLUME_PATHS[0];
  let best = Infinity, u = 0;
  for (let index = 1; index < path.length; index++) {
    const a = local(path[index - 1]), b = local(path[index]), d = b.clone().sub(a);
    const xy2 = d.x * d.x + d.y * d.y;
    const t = clamp(((start.x - a.x) * d.x + (start.y - a.y) * d.y) / xy2);
    const distance = (start.x - a.x - d.x * t) ** 2 + (start.y - a.y - d.y * t) ** 2;
    if (distance < best) { best = distance; u = (index - 1 + t) / (path.length - 1); }
  }
  const root = curves[0].getPoint(u), parentDirection = curves[0].getTangent(u);
  const points = curves[id].points.map(p => p.clone());
  const span = points[1].distanceTo(points[0]);
  const outward = points[2].clone().sub(root).normalize();
  const direction = parentDirection.multiplyScalar(.34).addScaledVector(outward, .66).normalize();
  points[0].copy(root); points[1].copy(root).addScaledVector(direction, span);
  // The first bough formerly ran almost directly toward the low side view
  // (-X,+Z), stacking its whole collar over the trunk. Delay its depth turn
  // while it bends laterally; the common root and upper controls stay fixed.
  if (id === 1) {
    // A bough directed toward the viewer may project short. Preserve its
    // original axis; a genuinely narrow section supplies its visible form.
    for (let index = 0; index < points.length; index++) points[index].copy(originalCurves[1].points[index]);
  } else {
    const depthRelease = [.58, .70, .90], sideBend = [.020, .035, .015];
    for (let index = 1; index <= 3; index++) {
      points[index].z = mix(root.z, points[index].z, depthRelease[index - 1]);
      points[index].x += sideBend[index - 1];
    }
  }
  curves[id] = new CatmullRomCurve3(points, false, 'centripetal');
}
const distances = VOLUME_PATHS.map(path => {
  let along = 0;
  return path.map((p, index) => {
    if (index) along += Math.hypot(p[0] - path[index - 1][0], p[1] - path[index - 1][1]) * WPP;
    return along;
  });
});
function alongAt(id, u) {
  const v = clamp(u) * (distances[id].length - 1), i = Math.min(distances[id].length - 2, Math.floor(v));
  return mix(distances[id][i], distances[id][i + 1], v - i);
}
function sectionRadius(id, along) {
  return id === 0 ? .158 - .053 * smooth(along / 1.30) - .055 * smooth((along - 1.12) / .90)
    : id === 1 ? .075 - .037 * smooth(along / .65)
    : .100 - .043 * smooth(along / 1.20);
}
function localityAt(id, along) {
  return id === 0 ? smooth(along / .16) * (1 - smooth((along - 1.62) / .48))
    : 1 - smooth((along - .65) / .66);
}
export function branchFiberCurve(id) {
  if (!MAJOR.has(id)) return null;
  const path = VOLUME_PATHS[id];
  // Match the same soft attachment field used by particles: a subsidiary
  // twig keeps its original junction while the exposed collar bends outward.
  const points = Array.from({length: 121}, (_, step) => {
    const u = step / 120, v = u * (path.length - 1), index = Math.min(path.length - 2, Math.floor(v)), t = v - index;
    const x = mix(path[index][0], path[index + 1][0], t), y = mix(path[index][1], path[index + 1][1], t);
    const info = sourceInfo(x, y);
    const radius = mix(path[index][3], path[index + 1][3], t);
    const support = smooth(info.other / (radius * .60 + 5));
    const weight = localityAt(id, alongAt(id, u)) * support;
    return originalCurves[id].getPoint(u).lerp(curves[id].getPoint(u), weight);
  });
  return new CatmullRomCurve3(points, false, 'centripetal');
}
export function branchFiberRadius(id, t, radius) {
  if (!MAJOR.has(id)) return radius;
  const along = alongAt(id, t);
  const weight = localityAt(id, along);
  return mix(radius, sectionRadius(id, along), weight);
}
const segments = VOLUME_PATHS.flatMap((path, id) => {
  let along = 0;
  return path.slice(1).map((b, index) => {
    const a = path[index], dx = b[0] - a[0], dy = b[1] - a[1];
    const length = Math.hypot(dx, dy);
    const out = {a, b, dx, dy, length, along, id, index}; along += length * WPP;
    return out;
  });
});

function sourceInfo(x, y) {
  let best = Infinity, other = Infinity, result;
  for (const s of segments) {
    const t = clamp(((x - s.a[0]) * s.dx + (y - s.a[1]) * s.dy) / (s.length * s.length));
    const d2 = (x - s.a[0] - s.dx * t) ** 2 + (y - s.a[1] - s.dy * t) ** 2;
    if (!MAJOR.has(s.id)) other = Math.min(other, d2);
    if (d2 < best) { best = d2; result = {...s, t}; }
  }
  return {...result, distance: Math.sqrt(best), other: Math.sqrt(other)};
}

// Every fan shares the lower stem. It opens into a separate bough gradually
// along its own collar rather than duplicating the trunk into three sheets.
function centre(info, family, u) {
  const c = curves[info.id].getPoint(clamp(u));
  const direct = new Vector3(...branchLayoutPoint(c.toArray()));
  if (!family) return direct;
  const fan = new Vector3(...branchLayoutPoint(c.toArray(), family));
  const along = alongAt(info.id, u);
  const release = info.id === 0 ? smooth((along - 1.62) / .48) : smooth(along / 1.12);
  return direct.lerp(fan, release);
}

// The existing shared-root/fan axis, used by added side-branch neck grains.
export function sampleBranchBundleAxis(id, family, u) {
  return centre({id}, family, u);
}

function nearest3D(point, axes, id) {
  let best = Infinity, radius = .1, segment = null, progress = 0;
  for (const s of axes) {
    if (id !== undefined && s.id !== id) continue;
    const dx = point.x - s.a.x, dy = point.y - s.a.y, dz = point.z - s.a.z;
    const t = clamp((dx * s.delta.x + dy * s.delta.y + dz * s.delta.z) / s.length2);
    const d2 = (dx - s.delta.x * t) ** 2 + (dy - s.delta.y * t) ** 2 + (dz - s.delta.z * t) ** 2;
    if (d2 < best) { best = d2; radius = mix(s.ra, s.rb, t); segment = s; progress = t; }
  }
  return {distance: Math.sqrt(best), radius, segment, progress};
}

/** Local 3D stem/collar reconstruction after all crown fans have been made. */
export function refineBranchStructure(cloud) {
  const {structureSource: source, structureSources, structureFans,
    branchOutlineSourcePositions, ...retained} = cloud;
  if (!source || !structureSources) return cloud;
  const positions = cloud.positions.slice(), normals = cloud.normals.slice();
  const density = new Float32Array(cloud.count).fill(1);
  const infos = new Array(source.baseCount);
  let rebuilt = 0;
  for (let i = 0; i < cloud.count; i++) {
    const j = i * 3, origin = structureSources[i];
    if (origin >= source.baseCount || cloud.growth[j + 1] < .5 || cloud.growth[j + 2] >= 9) continue;
    let info = infos[origin];
    const k = origin * 3;
    if (!info) infos[origin] = info = sourceInfo(source.positions[k] / WPP + 728, 408 - source.positions[k + 1] / WPP);
    if (!MAJOR.has(info.id)) continue;
    const along = info.along + info.length * WPP * info.t;
    const radius = mix(info.a[3], info.b[3], info.t) * WPP;
    const locality = localityAt(info.id, along);
    const support = smooth((info.other - info.distance) / (info.a[3] * .60 + 5));
    const weight = locality * support;
    if (weight < .00001) continue;
    const px = (info.a[0] + info.dx * info.t - 728) * WPP;
    const py = (408 - info.a[1] - info.dy * info.t) * WPP;
    const across = ((source.positions[k] - px) * -info.dy
      - (source.positions[k + 1] - py) * info.dx) / info.length;
    const depth = source.positions[k + 2] - mix(info.a[2], info.b[2], info.t);
    const a = across / Math.max(.015, radius), b = depth / Math.max(.03, Math.min(.34, radius * 1.1));
    const u = (info.index + info.t) / (VOLUME_PATHS[info.id].length - 1);
    const family = structureFans[i], c = centre(info, family, u);
    const axisDelta = centre(info, family, u + .001).sub(centre(info, family, u - .001));
    const tangent = axisDelta.clone().normalize();
    const n = new Vector3(tangent.y, -tangent.x, 0).normalize();
    const binormal = n.clone().cross(tangent).normalize();
    const r = sectionRadius(info.id, along);
    const target = c.addScaledVector(n, a * r).addScaledVector(binormal, b * r * .94);
    for (let axis = 0; axis < 3; axis++) positions[j + axis] = mix(cloud.positions[j + axis], target.getComponent(axis), weight);
    const normal = n.multiplyScalar(a).addScaledVector(binormal, b).normalize();
    const blendedNormal = new Vector3().fromArray(normals, j).lerp(normal, weight).normalize();
    blendedNormal.toArray(normals, j);
    const duplication = family ? info.id === 0
      ? .065
      : .065 + .935 * smooth(along / 1.12) : info.id === 0 ? .65 : info.id === 1 ? .42 : .78;
    // Retain source-copy and arc-length compensation here. Edge/junction
    // density is resolved once against the final cloud, including new bundles.
    density[i] *= mix(1, duplication, weight);
    if (info.id === 1) {
      // Retaining the original number of grains must not overfill a locally
      // shorter span. Compensate its physical arc length, not its projection.
      const sourceA = local(info.a), sourceB = local(info.b);
      const sourceDerivative = sourceA.distanceTo(sourceB) * (VOLUME_PATHS[info.id].length - 1);
      const arcDensity = Math.min(1, axisDelta.length() / (.002 * Math.max(.001, sourceDerivative)));
      density[i] *= mix(1, arcDensity, weight);
    }
    rebuilt++;
  }

  // One compact shared field replaces the nearest-path switch at the first
  // collar. Both sides use the same parent/child displacement, normal and
  // density blend; outside this .34 region the accepted v7 branch is exact.
  const jointSource = local(VOLUME_PATHS[1][0]);
  const nearPath = (id, point) => {
    const x = point.x / WPP + 728, y = 408 - point.y / WPP;
    let best = Infinity, found;
    for (const s of segments) {
      if (s.id !== id) continue;
      const t = clamp(((x - s.a[0]) * s.dx + (y - s.a[1]) * s.dy) / (s.length * s.length));
      const d2 = (x - s.a[0] - s.dx * t) ** 2 + (y - s.a[1] - s.dy * t) ** 2;
      if (d2 < best) { best = d2; found = {...s, t}; }
    }
    return found;
  };
  const proposal = (info, point, family) => {
    const along = info.along + info.length * WPP * info.t;
    const radius = mix(info.a[3], info.b[3], info.t) * WPP;
    const px = (info.a[0] + info.dx * info.t - 728) * WPP, py = (408 - info.a[1] - info.dy * info.t) * WPP;
    const a = ((point.x - px) * -info.dy - (point.y - py) * info.dx) / (info.length * Math.max(.015, radius));
    const b = (point.z - mix(info.a[2], info.b[2], info.t)) / Math.max(.03, Math.min(.34, radius * 1.1));
    const u = (info.index + info.t) / (VOLUME_PATHS[info.id].length - 1), c = centre(info, family, u);
    const tangent = centre(info, family, u + .001).sub(centre(info, family, u - .001)).normalize();
    const n = new Vector3(tangent.y, -tangent.x, 0).normalize(), binormal = n.clone().cross(tangent).normalize();
    const position = c.addScaledVector(n, a * sectionRadius(info.id, along)).addScaledVector(binormal, b * sectionRadius(info.id, along) * .94);
    const normal = n.multiplyScalar(a).addScaledVector(binormal, b).normalize();
    const duplication = family ? info.id === 0 ? .065 : .065 + .935 * smooth(along / 1.12) : info.id === 0 ? .65 : .42;
    return {position, normal, q: Math.hypot(a, b), density: duplication};
  };
  for (let i = 0; i < cloud.count; i++) {
    const origin = structureSources[i], k = i * 3;
    if (origin >= source.baseCount || cloud.growth[k + 1] < .5) continue;
    const info = infos[origin];
    if (!info || (info.id !== 0 && info.id !== 1)) continue;
    const point = new Vector3().fromArray(source.positions, origin * 3), distance = point.distanceTo(jointSource);
    if (distance >= .34) continue;
    const kernel = 1 - smooth((distance - .12) / .22), family = structureFans[i];
    const parent = proposal(nearPath(0, point), point, family), child = proposal(nearPath(1, point), point, family);
    const blend = smooth((parent.q - child.q + .65) / 1.30);
    const sharedPosition = parent.position.lerp(child.position, blend);
    const sharedNormal = parent.normal.lerp(child.normal, blend).normalize();
    new Vector3().fromArray(positions, k).lerp(sharedPosition, kernel).toArray(positions, k);
    new Vector3().fromArray(normals, k).lerp(sharedNormal, kernel).normalize().toArray(normals, k);
    density[i] = mix(density[i], mix(parent.density, child.density, blend), kernel);
  }

  // The middle stem inherited two bright image-side strips even after they
  // were put in a round frame. Reuse only its own near-axis grains, filling
  // a circular cross-section in registered 3D space. The axis, route/growth,
  // root contact, collars, fan branches and every other grain stay intact.
  const regD = 16.551724137931036, regX = -.32678571428571423, regY = 1.6541384108566706;
  const registerStem = p => new Vector3((p.x + regX) * (1 - p.z / regD) - regX,
    (p.y + regY) * (1 - p.z / regD) - regY, p.z);
  const unregisterStem = p => new Vector3((p.x + regX) / (1 - p.z / regD) - regX,
    (p.y + regY) / (1 - p.z / regD) - regY, p.z);
  const stemPoint = u => registerStem(centre({id: 0}, 0, u));
  const stemSamples = Array.from({length: 97}, (_, index) => {
    const u = .08 + .33 * index / 96;
    return {u, p: stemPoint(u)};
  });
  let roundStemParticles = 0;
  for (let i = 0; i < cloud.count; i++) {
    const origin = structureSources[i], k = i * 3;
    if (origin >= source.baseCount || structureFans[i] !== 0 || cloud.growth[k + 1] < .5 || infos[origin]?.id !== 0) continue;
    const old = registerStem(new Vector3().fromArray(positions, k));
    let best = Infinity, u = 0;
    for (let index = 1; index < stemSamples.length; index++) {
      const a = stemSamples[index - 1], b = stemSamples[index], delta = b.p.clone().sub(a.p);
      const t = clamp(old.clone().sub(a.p).dot(delta) / delta.lengthSq());
      const d2 = old.clone().sub(a.p).addScaledVector(delta, -t).lengthSq();
      if (d2 < best) { best = d2; u = mix(a.u, b.u, t); }
    }
    const endFade = smooth((u - .10) / .045) * (1 - smooth((u - .335) / .055));
    if (!endFade) continue;
    const r = sectionRadius(0, alongAt(0, u));
    const radialFade = 1 - smooth((Math.sqrt(best) / r - 1.15) / .55);
    const weight = endFade * radialFade;
    if (weight < .0001) continue;
    const c = stemPoint(u), tangent = stemPoint(u + .001).sub(stemPoint(u - .001)).normalize();
    const reference = Math.abs(tangent.y) < .92 ? new Vector3(0, 1, 0) : new Vector3(1, 0, 0);
    const n = tangent.clone().cross(reference).normalize(), b = tangent.clone().cross(n).normalize();
    const angle = cloud.seeds[k] * Math.PI * 2;
    const radialNormal = n.multiplyScalar(Math.cos(angle)).addScaledVector(b, Math.sin(angle));
    const radius = r * Math.sqrt(cloud.seeds[k + 1]) * (.86 + .14 * cloud.seeds[k + 2]);
    const target = c.addScaledVector(radialNormal, radius);
    unregisterStem(old.lerp(target, weight)).toArray(positions, k);
    new Vector3().fromArray(normals, k).lerp(radialNormal, weight).normalize().toArray(normals, k);
    density[i] = mix(density[i], .56 + .14 * cloud.seeds[k + 2], weight);
    roundStemParticles++;
  }
  return {...retained, positions, normals, branchDensity: density,
    branchStructureVersion: 'orthogonal-stem-collars-v10', branchRebuiltParticles: rebuilt,
    branchHazeParticles: 0, branchJunctionParticles: 0, roundStemParticles};
}

/** Resolve the complete stem once, after roundStem and every appended bundle.
 * Positions, route clocks, seeds and particle order are deliberately unchanged.
 * branchOutline is [major role, final radial core, shared-junction suppression].
 */
export function finalizeBranchStructure(cloud) {
  const version = 'final-stem-density-v1';
  if (cloud?.branchFinalizationVersion === version) return cloud;
  if (!Number.isSafeInteger(cloud?.count) || cloud.count < 0) throw new TypeError('A complete particle cloud is required.');
  for (const [name, width] of Object.entries({positions:3, normals:3, colors:3, growth:3,
    buds:4, branchDensity:1, branchOutline:3})) {
    if (!(cloud[name] instanceof Float32Array) || cloud[name].length !== cloud.count * width)
      throw new TypeError(`Invalid final branch attribute: ${name}.`);
  }
  const density = cloud.branchDensity.slice(), normals = cloud.normals.slice(), outline = cloud.branchOutline.slice();
  const trunkAxes = [], collarAxes = [], fineAxes = [];
  const appendAxis = (list, point, id, family, start = 0, end = 1, steps = 64) => {
    for (let step = 0; step < steps; step++) {
      const u0 = mix(start, end, step / steps), u1 = mix(start, end, (step + 1) / steps);
      const a = point(u0), b = point(u1), delta = b.clone().sub(a);
      const l0 = alongAt(id, u0), l1 = alongAt(id, u1);
      list.push({a, delta, length2: Math.max(1e-12, delta.lengthSq()), id, family,
        ra: sectionRadius(id, l0), rb: sectionRadius(id, l1),
        wa: localityAt(id, l0), wb: localityAt(id, l1)});
    }
  };
  for (let family = 0; family < 3; family++) {
    for (const id of MAJOR) appendAxis(id ? collarAxes : trunkAxes, u => centre({id}, family, u), id, family);
    for (const s of segments) {
      if (MAJOR.has(s.id)) continue;
      const a = new Vector3(...branchLayoutPoint(local(s.a).toArray(), family));
      const b = new Vector3(...branchLayoutPoint(local(s.b).toArray(), family)), delta = b.clone().sub(a);
      fineAxes.push({a, delta, length2: Math.max(1e-12, delta.lengthSq()), id:s.id, family,
        ra:s.a[3]*WPP, rb:s.b[3]*WPP});
    }
  }
  const rootAxes = fineAxes.filter(axis => axis.id >= 19 && axis.family === 0);
  // Appended side bodies and their necks have their own continuous guides.
  // Their metadata supplies membership; nearby fine twigs cannot be mistaken
  // for a large limb merely because both are warm or cross in projection.
  const bundleGroups = [];
  for (const spec of cloud.bundleCurves || []) {
    const source = new CatmullRomCurve3(VOLUME_PATHS[spec.path].map(local), false, 'centripetal');
    const point = u => new Vector3(...branchLayoutPoint(source.getPoint(u).toArray(), spec.family));
    const axes = [];
    appendAxis(axes, point, spec.path, spec.family, spec.uStart, spec.uEnd, 48);
    bundleGroups.push({first:spec.firstParticle, end:spec.firstParticle+spec.count, axes});
    const neck = (cloud.bundleNecks || []).find(n => n.path === spec.path && n.family === spec.family);
    if (neck) {
      const neckAxes = [];
      appendAxis(neckAxes, u => sampleBranchBundleAxis(spec.path, spec.family, u)
        .lerp(point(u), smooth((u - (spec.uStart - .09)) / .105)),
      spec.path, spec.family, neck.uStart, neck.uEnd, 40);
      bundleGroups.push({first:neck.firstParticle, end:neck.firstParticle+neck.count, axes:neckAxes});
    }
  }
  const firstJoint = centre({id:1},0,0), secondJoint = centre({id:5},0,0);
  const occupancy = near => 1 - smooth((near.distance / Math.max(.045, near.radius) - .15) / 1.20);
  const p = new Vector3(), radial = new Vector3(), oldNormal = new Vector3();
  const inRange = (i, first, count) => Number.isInteger(first) && i >= first && i < first + count;
  const stats = {profileParticles:0, perimeterParticles:0, controlledPerimeterParticles:0,
    coreParticles:0, coreDensityBefore:0, coreDensityAfter:0, hazeParticles:0,
    junctionParticles:0, appendedBundleParticles:0, appendedJunctionParticles:0, normalParticles:0};
  for (let i = 0; i < cloud.count; i++) {
    const k = i*3, b = i*4;
    if (cloud.growth[k+2] >= 9 || inRange(i,cloud.rootContactBaseCount,cloud.rootContactAddedParticles)) continue;
    const branch = cloud.growth[k+1] > .5;
    const peak = Math.max(cloud.colors[k],cloud.colors[k+1],cloud.colors[k+2],.001);
    const warmth = (cloud.colors[k]-cloud.colors[k+2])/peak;
    // Silver, including the lower edge of a flower, never enters this field.
    if (!branch && (cloud.buds[b+3] > .18 || warmth < -.02)) continue;
    const bundle = bundleGroups.find(group => i >= group.first && i < group.end);
    if (!bundle && (inRange(i,cloud.twigBaseCount,cloud.twigAddedParticles) || cloud.twigPresence?.[i])) continue;
    p.fromArray(cloud.positions,k);
    if (p.y < -2.56 || p.y > -.38) continue;
    const trunk = nearest3D(p,trunkAxes), collar = nearest3D(p,collarAxes);
    const near = bundle ? nearest3D(p,bundle.axes) : trunk.distance < collar.distance ? trunk : collar;
    if (!near.segment || near.distance > Math.max(.90,near.radius*2.5)) continue;
    const q = near.distance / Math.max(.015,near.radius), s = near.segment;
    const locality = mix(s.wa,s.wb,near.progress);
    const fine = bundle ? null : nearest3D(p,fineAxes);
    const fineProtection = fine ? (1-smooth((fine.distance / Math.max(.018,fine.radius)-.8)/1.1))
      * (1-smooth((outline[k]-.35)/.35)) : 0;
    const role = (s.id === 0 ? 1 : .90) * locality;
    // Retain the source's known limb membership beyond the narrow new shaft;
    // otherwise its far skirt would escape this field and become brighter
    // when the earlier, source-space edge attenuation is removed.
    const membership = Math.max(1-smooth((q-1.6)/1.15),clamp(outline[k]/(s.id===0?1:.90)));
    const weight = locality * (1-fineProtection) * membership;
    const before = density[i];
    if (branch && weight > .0001) {
      // The inner 80% keeps its density. Only the outer skirt contracts
      // optically, so the uninterrupted load-bearing core does not get dimmed.
      const edge = mix(1,.025,smooth((q-.80)/.95));
      density[i] *= mix(1,edge,weight);
      outline[k] = mix(outline[k],role,weight);
      outline[k+1] = mix(outline[k+1],1-smooth((q-.12)/1.00),weight);
      outline[k+2] = 0;
      radial.copy(p).sub(s.a).addScaledVector(s.delta,-near.progress);
      // Remove the tiny tangent remainder at polyline segment boundaries.
      radial.addScaledVector(s.delta,-radial.dot(s.delta)/s.length2);
      if (radial.lengthSq() > 1e-12) {
        radial.normalize(); oldNormal.fromArray(normals,k).lerp(radial,weight).normalize().toArray(normals,k);
        stats.normalParticles++;
      }
      stats.profileParticles++;
      if (bundle) stats.appendedBundleParticles++;
      if (q >= 1.15) {
        stats.perimeterParticles++;
        if (density[i] < before*.75) stats.controlledPerimeterParticles++;
      }
    }
    // Legacy warm image dust is outside the coherent trunk, but the genuine
    // root shoots, subsidiary twigs and collar exterior remain protected.
    if (trunk.distance < .90 && !bundle) {
      const root = nearest3D(p,rootAxes);
      const protection = Math.max(1-smooth((root.distance-root.radius*1.10-.015)/.10),
        1-smooth((collar.distance-collar.radius*1.10-.015)/.10));
      const region = smooth((p.y+2.55)/.18)*(1-smooth((p.y+1.05)/.33))
        *(1-smooth((trunk.distance-.60)/.30))*(1-protection);
      const stray = smooth((trunk.distance/Math.max(.11,trunk.radius)-.95)/2.0);
      const factor = mix(1,.045,region*stray);
      density[i] *= factor;
      if (factor < .95) stats.hazeParticles++;
    }
    if (branch && weight > .0001) {
      const jointDistance = Math.min(p.distanceTo(firstJoint),p.distanceTo(secondJoint));
      if (jointDistance < .46) {
        const kernel = 1-smooth((jointDistance-.28)/.18);
        const left = occupancy(nearest3D(p,collarAxes,1)), right = occupancy(nearest3D(p,collarAxes,5));
        const t = occupancy(trunk), shared = kernel*Math.max(t*left,t*right,left*right)*(1-fineProtection);
        if (shared > .0001) {
          density[i] /= 1+1.35*shared;
          outline[k+2] = shared;
          stats.junctionParticles++;
          if (bundle) stats.appendedJunctionParticles++;
        }
      }
      if (q <= .80) {
        stats.coreParticles++; stats.coreDensityBefore += before; stats.coreDensityAfter += density[i];
      }
    }
  }
  stats.controlledPerimeterRatio = stats.perimeterParticles ? stats.controlledPerimeterParticles/stats.perimeterParticles : 0;
  stats.coreDensityRatio = stats.coreDensityBefore ? stats.coreDensityAfter/stats.coreDensityBefore : 1;
  return {...cloud, normals, branchDensity:density, branchOutline:outline,
    branchFinalizationVersion:version, branchFinalizationStats:stats,
    branchHazeParticles:stats.hazeParticles, branchJunctionParticles:stats.junctionParticles};
}
