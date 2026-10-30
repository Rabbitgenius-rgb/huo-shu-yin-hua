import * as THREE from 'three';
import { swayTreePoint } from './tree-sway.js';

const COUNT = 80, TRAILS = 8, SEGMENTS = 4, FIRST_FALL = 20.4;
const TRAIL_STRIDE = COUNT / TRAILS;
const TAU = Math.PI * 2;
const clamp = value => Math.max(0, Math.min(1, value));
const smooth = value => { const t = clamp(value); return t * t * (3 - 2 * t); };
const mix = (a, b, t) => a + (b - a) * t;
function hash(n) { const x = Math.sin(n * 127.1 + 31.7) * 43758.5453123; return x - Math.floor(x); }
const INTERVALS = Array.from({length: 12}, (_, i) => 5.6 + 2.1 * hash(i + 37));
const BLOCK_LENGTH = INTERVALS.reduce((a, b) => a + b, 0);

/** Absolute schedule: seek, pause and replay produce the same fall at a given time. */
export function silverFallCycleAt(time) {
  if (!Number.isFinite(time) || time < FIRST_FALL) return {cycle: -1, birth: FIRST_FALL, age: 0};
  const block = Math.floor((time - FIRST_FALL) / BLOCK_LENGTH);
  let birth = FIRST_FALL + block * BLOCK_LENGTH, cycle = block * INTERVALS.length;
  while (time >= birth + INTERVALS[cycle % INTERVALS.length]) {
    birth += INTERVALS[cycle % INTERVALS.length]; cycle++;
  }
  return {cycle, birth, age: time - birth};
}

function pickCrownEdges(cloud) {
  const groups = new Map(), {positions, buds, growth, colors} = cloud;
  // Each key is an existing bud centre, not a new emitter outside the canopy.
  for (let i = 5; i < cloud.count; i += 11) {
    const j = i * 3, k = i * 4;
    if (growth[j + 1] > .5 || buds[k + 3] < .65 || colors[j + 2] < colors[j] * .76) continue;
    const center = [positions[j] + buds[k], positions[j + 1] + buds[k + 1], positions[j + 2] + buds[k + 2]];
    if (center[1] < -.2) continue;
    const key = center.map(v => Math.round(v * 35)).join(',');
    let group = groups.get(key);
    if (!group) { group = {center, indices: [], count: 0}; groups.set(key, group); }
    group.count++;
    if (group.indices.length < 160) group.indices.push(i);
  }
  const pool = [...groups.values()].filter(g => g.count >= 14);
  const edges = pool.map(group => {
    const [cx, cy, cz] = group.center;
    const outwardX = Math.sign(cx - .3268);
    // Pick an actual lower/outward edge grain. The following fall is easier to
    // read against the space below a pad than against its bright interior.
    const scored = group.indices.map(i => {
      const j = i * 3, p = new THREE.Vector3(positions[j], positions[j + 1], positions[j + 2]);
      const dx = p.x - cx, dy = p.y - cy, dz = p.z - cz;
      const score = -dy * 1.15 + dx * outwardX * .35 + dz * .18
        - Math.abs(Math.hypot(dx, dy, dz) - .25) * .30;
      return {p, index: i, score};
    }).sort((a, b) => b.score - a.score);
    const anchor = scored[0].p;
    const near = scored.sort((a, b) => a.p.distanceToSquared(anchor) - b.p.distanceToSquared(anchor));
    // Keep a small real tuft (~.24 source units across), instead of collapsing
    // the sampled positions into the old almost invisible .085-radius speck.
    const offsets = Array.from({length: COUNT}, (_, n) => {
      const q = near[n % near.length].p.clone().sub(anchor);
      if (q.length() > .12) q.setLength(.12);
      return q;
    });
    let frontCover = 0, obliqueCover = 0;
    for (const other of pool) {
      if (other === group) continue;
      const dy = anchor.y - other.center[1];
      if (dy <= .12 || dy >= 1.15) continue;
      const dx = anchor.x - other.center[0], dz = anchor.z - other.center[2];
      const weight = 1 - dy / 1.3;
      frontCover += Math.exp(-Math.pow(dx / .35, 2)) * weight;
      obliqueCover += Math.exp(-Math.pow((dx - dz) / .50, 2)) * weight;
    }
    const clearBelow = .65 / (1 + frontCover) + .35 / (1 + obliqueCover);
    return {source: anchor.clone(), offsets, center: group.center, index: near[0].index,
      clearBelow, score: clearBelow * 2 + .10 * Math.abs(cx - .3268) + .05 * cz};
  }).sort((a, b) => b.score - a.score);
  const selected = [];
  for (const edge of edges) {
    if (selected.some(g => Math.hypot(...g.center.map((v, k) => v - edge.center[k])) < .53)) continue;
    selected.push(edge); if (selected.length === 20) break;
  }
  return selected;
}

const pointVertex = /* glsl */`
attribute vec3 color;
attribute float aAlpha;
attribute float aSize;
uniform float uPixelRatio;
varying vec3 vColor;
varying float vAlpha;
void main(){
 vec4 mv=modelViewMatrix*vec4(position,1.);
 gl_Position=projectionMatrix*mv;
 gl_PointSize=aSize*uPixelRatio*clamp(1.55/max(.65,-mv.z),.78,1.28);
 vColor=color;vAlpha=aAlpha;
 if(aAlpha<.002){gl_Position=vec4(2.,2.,2.,1.);gl_PointSize=0.;}
}
`;
const pointFragment = /* glsl */`
varying vec3 vColor;
varying float vAlpha;
void main(){
 float r=length(gl_PointCoord-.5)*2.;
 if(r>=1.)discard;
 float core=exp(-4.3*r*r)*(1.-smoothstep(.65,1.,r));
 gl_FragColor=vec4(vColor,vAlpha*core);
}
`;
const trailVertex = /* glsl */`
attribute vec3 color;
attribute float aAlpha;
varying vec3 vColor;
varying float vAlpha;
void main(){vColor=color;vAlpha=aAlpha;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}
`;
const trailFragment = /* glsl */`
varying vec3 vColor;
varying float vAlpha;
void main(){gl_FragColor=vec4(vColor,vAlpha);}
`;
const inactive = () => ({phase: 'rest', activeGrains: 0, silverGrains: 0, emberGrains: 0, cycle: -1, landings: []});

/** A readable 80-grain tuft from one real crown edge; most fades above water. */
export function createSilverFall({content, cloud, uniforms, waterLevel}) {
  const candidates = pickCrownEdges(cloud);
  const positions = new Float32Array(COUNT * 3), colors = new Float32Array(COUNT * 3);
  const alphas = new Float32Array(COUNT), sizes = new Float32Array(COUNT);
  for (let i = 0; i < COUNT; i++) sizes[i] = 1.10 + .75 * hash(i + 83);
  const geometry = new THREE.BufferGeometry();
  for (const [name, data, size] of [['position', positions, 3], ['color', colors, 3], ['aAlpha', alphas, 1], ['aSize', sizes, 1]]) {
    geometry.setAttribute(name, new THREE.BufferAttribute(data, size).setUsage(THREE.DynamicDrawUsage));
  }
  const ratio = {value: 1};
  const material = new THREE.ShaderMaterial({uniforms: {uPixelRatio: ratio}, vertexShader: pointVertex,
    fragmentShader: pointFragment, transparent: true, depthWrite: false, depthTest: true, blending: THREE.AdditiveBlending});
  const points = new THREE.Points(geometry, material);
  points.name = 'silver-tuft-to-iron-embers';
  points.frustumCulled = false; points.renderOrder = 6; points.layers.set(0); points.userData.directOnly = true;
  const tailCount = TRAILS * SEGMENTS * 2;
  const tailPositions = new Float32Array(tailCount * 3), tailColors = new Float32Array(tailCount * 3), tailAlphas = new Float32Array(tailCount);
  const tailGeometry = new THREE.BufferGeometry();
  for (const [name, data, size] of [['position', tailPositions, 3], ['color', tailColors, 3], ['aAlpha', tailAlphas, 1]]) {
    tailGeometry.setAttribute(name, new THREE.BufferAttribute(data, size).setUsage(THREE.DynamicDrawUsage));
  }
  const tailMaterial = new THREE.ShaderMaterial({vertexShader: trailVertex, fragmentShader: trailFragment,
    transparent: true, depthWrite: false, depthTest: true, blending: THREE.AdditiveBlending});
  const trails = new THREE.LineSegments(tailGeometry, tailMaterial);
  trails.name = 'silver-fall-late-ember-tails'; trails.frustumCulled = false; trails.renderOrder = 6; trails.layers.set(0); trails.userData.directOnly = true;
  content.add(points, trails);
  let disposed = false, state = inactive();
  const origin = new THREE.Vector3(), p = new THREE.Vector3(), world = new THREE.Vector3(), localWater = new THREE.Vector3();
  const landingWorld = new THREE.Vector3(), offset = new THREE.Vector3();
  function registered(source, out) {
    const d = uniforms.uAlignmentDistance.value, o = uniforms.uAlignmentOffset.value, k = 1 - source.z / d;
    return out.set((source.x + o.x) * k - o.x, (source.y + o.y) * k - o.y, source.z);
  }
  function eventData(cycle, birth) {
    // The first events use the clearest lower edges; later cycles still vary.
    const clearCount = Math.min(8, candidates.length);
    const preferred = Math.floor(hash(cycle + 7) * clearCount);
    const mayTouch = cycle % 5 === 2;
    const gravity = .54 + .12 * hash(cycle + 12);
    const vx = (hash(cycle + 51) - .5) * .075, vz = (hash(cycle + 61) - .5) * .06;
    let event;
    for (let attempt = 0; attempt < (mayTouch ? candidates.length : 1); attempt++) {
      const bud = candidates[(preferred + attempt) % candidates.length];
      registered(bud.source, origin); swayTreePoint(origin, birth, 1);
      world.copy(origin); content.localToWorld(world);
      localWater.set(world.x, waterLevel, world.z); content.worldToLocal(localWater);
      const distance = Math.max(.02, origin.y - localWater.y), vy = -.16;
      const hitTime = (vy + Math.sqrt(vy * vy + 2 * gravity * distance)) / gravity;
      landingWorld.copy(origin).add(new THREE.Vector3(vx * hitTime, vy * hitTime - .5 * gravity * hitTime * hitTime, vz * hitTime));
      content.localToWorld(landingWorld);
      const inside = Math.hypot(landingWorld.x, landingWorld.z) < .565;
      event = {bud, origin: origin.clone(), gravity, vx, vy, vz, hitTime,
        life: Math.min(4.15 + .35 * hash(cycle + 41), hitTime * .81), touches: mayTouch && inside,
        landing: {id: `silver-fall-${cycle}`, at: birth + hitTime, x: landingWorld.x, z: landingWorld.z, strength: .12 + .045 * hash(cycle + 19)}};
      if (!mayTouch || inside) break;
    }
    return event;
  }
  function grainPosition(event, index, age, out) {
    const rotation = age * (.65 + .35 * hash(index + 1));
    offset.copy(event.bud.offsets[index]);
    const x = offset.x, z = offset.z;
    offset.x = x * Math.cos(rotation) - z * Math.sin(rotation);
    offset.z = x * Math.sin(rotation) + z * Math.cos(rotation);
    // Hold a coherent tuft for its first half-second; then separate the grains.
    const loosen = smooth((age - .50) / Math.max(.6, event.life - .50));
    offset.multiplyScalar(1 + 1.8 * loosen);
    const disperse = loosen * .18;
    offset.x += (hash(index + 110) - .5) * disperse;
    offset.y += (hash(index + 120) - .5) * disperse;
    offset.z += (hash(index + 130) - .5) * disperse;
    if (index === 0 && event.touches) offset.set(0, 0, 0);
    out.copy(event.origin).add(offset);
    out.x += event.vx * age;
    out.y += event.vy * age - .5 * event.gravity * age * age;
    out.z += event.vz * age;
    if (!(index === 0 && event.touches)) {
      const flutter = (1 - Math.exp(-age * 2)) * .019;
      out.x += Math.sin(age * 2.4 + hash(index + 9) * TAU) * flutter;
      out.z += Math.sin(age * 1.8 + hash(index + 18) * TAU) * flutter;
    }
    return out;
  }
  function upload() {
    for (const name of ['position', 'color', 'aAlpha']) {
      geometry.getAttribute(name).needsUpdate = true; tailGeometry.getAttribute(name).needsUpdate = true;
    }
  }
  function reset() {
    alphas.fill(0); tailAlphas.fill(0); points.visible = trails.visible = false;
    state = inactive(); points.userData.state = state; upload(); return state;
  }
  function update({time, motion = true, pixelRatio = 1}) {
    if (disposed) return state;
    ratio.value = Math.max(.1, pixelRatio);
    const schedule = silverFallCycleAt(time);
    if (!motion || !candidates.length || schedule.cycle < 0) return reset();
    content.updateWorldMatrix(true, false);
    const {cycle, birth, age} = schedule, event = eventData(cycle, birth);
    alphas.fill(0); tailAlphas.fill(0);
    const landings = event.touches && age >= event.hitTime && age < event.hitTime + .30 ? [event.landing] : [];
    let activeGrains = 0, silverGrains = 0, emberGrains = 0;
    for (let i = 0; i < COUNT; i++) {
      const life = i === 0 && event.touches ? event.hitTime : event.life * (.84 + .16 * hash(i + 31));
      if (age >= life) continue;
      const q = clamp(age / life), heat = smooth((q - .26) / .48), ember = smooth((q - .63) / .27);
      const fade = i === 0 && event.touches ? 1 - smooth((q - .96) / .04) : 1 - smooth((q - .72) / .28);
      const alpha = smooth(age / .16) * fade * (.65 + .35 * hash(i + 72));
      if (alpha < .002) continue;
      grainPosition(event, i, age, p); p.toArray(positions, i * 3);
      const glint = .76 + .24 * Math.sin(age * (8 + hash(i) * 5) + i * 2.4) ** 2;
      colors[i * 3] = mix(1.65, 2.70, heat) * glint;
      colors[i * 3 + 1] = mix(mix(1.86, 1.35, heat), .44, ember) * glint;
      colors[i * 3 + 2] = mix(mix(2.15, .28, heat), .055, ember) * glint;
      alphas[i] = alpha;
      activeGrains++; if (heat < .35) silverGrains++; else emberGrains++;
      if (i % TRAIL_STRIDE === 0 && heat > .45) {
        for (let segment = 0; segment < SEGMENTS; segment++) for (let end = 0; end < 2; end++) {
          const at = ((i / TRAIL_STRIDE) * SEGMENTS + segment) * 2 + end, tail = (segment + end) / SEGMENTS;
          grainPosition(event, i, Math.max(0, age - tail * .105), p); p.toArray(tailPositions, at * 3);
          tailColors.set(colors.subarray(i * 3, i * 3 + 3), at * 3);
          tailAlphas[at] = alpha * .19 * (1 - tail) * heat;
        }
      }
    }
    points.visible = activeGrains > 0; trails.visible = emberGrains > 0;
    upload();
    state = {phase: !activeGrains ? 'rest' : emberGrains > silverGrains ? 'embers' : 'silver-fall', activeGrains, silverGrains, emberGrains,
      cycle, birth, age, sourceIndex: event.bud.index, candidates: candidates.length, landingTime: event.touches ? event.landing.at : null, landings};
    points.userData.state = state; return state;
  }
  points.userData.version = 'silver-fall-readable-tuft-v2';
  points.userData.grains = COUNT;
  points.userData.candidateSources = candidates.map(c => ({position: c.source.toArray(), index: c.index, clearBelow: c.clearBelow}));
  reset();
  return {points, trails, update, reset, getState: () => state, dispose() {
    if (disposed) return; reset(); disposed = true; content.remove(points, trails);
    geometry.dispose(); material.dispose(); tailGeometry.dispose(); tailMaterial.dispose();
  }};
}
