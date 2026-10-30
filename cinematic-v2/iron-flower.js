import * as THREE from 'three';
import { TIMELINE } from './fire-timeline.js';

const clamp = (x, a = 0, b = 1) => Math.max(a, Math.min(b, x));
const hash = n => { const x = Math.sin(n * 12.9898 + 78.233) * 43758.5453; return x - Math.floor(x); };
const at = (center, i) => Array.isArray(center) || ArrayBuffer.isView(center) ? center[i] : center[['x', 'y', 'z'][i]];
const budDelay = center => TIMELINE.bloomSpan * (.5 + .5 * Math.sin(at(center, 1) * 2.3 + at(center, 2) * .7));

// Both the warm spray and the simultaneous silver flower use the physical bud centre.
// Spatial groups only distribute the bright origins. Every flower ignites at
// the same global beat, and its silver core appears with the iron impact.
export const ironBudWave = center => Math.floor(clamp((at(center, 0) + 3.2) / 6.4, 0, .9999) * 3);
export const ironBurstTime = center => TIMELINE.bloomStart + budDelay(center);
export const silverBloomTime = center => ironBurstTime(center);
export const ironBudPhaseGLSL = /* glsl */`
float ironWave(vec3 c){return floor(clamp((c.x+3.2)/6.4,0.,.9999)*3.);}
float ironBudDelay(vec3 c){return ${TIMELINE.bloomSpan.toFixed(4)}*(.5+.5*sin(c.y*2.3+c.z*.7));}
float ironBurstTime(vec3 c){return ${TIMELINE.bloomStart.toFixed(4)}+ironBudDelay(c);}
float silverBloomTime(vec3 c){return ironBurstTime(c);}
`;

// cinematic-v2: smaller iron flowers answer the score's later phrase beats
// (call and response, left/right).
// v3h: the tree bursts into the lettering at 18.55 s, so the answers now fill
// the held tree before it (13.74 / 16.13 / 17.35 s measured onsets), smaller
// than the shared bloom; nothing is scheduled once the tree is gone.
export const ENCORES = Object.freeze([
  // Inner picks: the outermost buds burst half out of frame at the edges.
  {time: 13.74, pick: 'inner-left', count: 3, scale: .52},
  {time: 16.13, pick: 'inner-right', count: 3, scale: .52},
  {time: 17.35, pick: 'wings', count: 4, scale: .44},
]);
// Silver petals drift down from real flower positions while the tree stands.
const PETAL_WINDOWS = Object.freeze([
  // v2j afterfall: silver starts shedding while the iron sparks are still
  // falling, so falling motion hands over instead of stopping near 14 s.
  {from: 11.2, to: 13.6, rate: 46},
  {from: 13.6, to: 16.2, rate: 30},
  {from: 16.2, to: 18.55, rate: 24},
]);
const PETAL_FLURRIES = Object.freeze([]);
// Iron runs on live seconds after the story ends, so late sparks finish falling.
const LIFE_END = 46;

/** Pick bud ids for one encore, avoiding the buds that answered last time. */
function pickEncoreCenters(centers, prominent, event, previous) {
  const all = centers.map((c, id) => ({id, x: c.center[0], y: c.center[1], z: c.center[2], w: c.weight}));
  const fresh = all.filter(c => !previous.has(c.id));
  const pool = fresh.length >= event.count ? fresh : all;
  const take = (list, n) => list.slice(0, n).map(c => c.id);
  const midY = [...all].sort((a, b) => a.y - b.y)[Math.floor(all.length / 2)]?.y ?? 0;
  switch (event.pick) {
    case 'left': return take([...pool].sort((a, b) => (a.x - .25 * a.y) - (b.x - .25 * b.y)), event.count);
    case 'right': return take([...pool].sort((a, b) => (b.x + .25 * b.y) - (a.x + .25 * a.y)), event.count);
    case 'wings': {
      const upper = pool.filter(c => c.y >= midY - .2);
      const left = [...upper].sort((a, b) => a.x - b.x), right = [...upper].sort((a, b) => b.x - a.x);
      return [...new Set([...take(left, Math.ceil(event.count / 2)), ...take(right, Math.floor(event.count / 2))])];
    }
    // Buds on one side but inside the frame, from the crown's upper rim so the
    // gold sparks rise into dark sky instead of vanishing into the silver.
    case 'inner-left': case 'inner-right': {
      const xs = all.map(c => c.x).sort((a, b) => a - b), ys = all.map(c => c.y).sort((a, b) => a - b);
      const goal = event.pick === 'inner-left' ? xs[Math.floor(xs.length * .3)] : xs[Math.floor(xs.length * .7)];
      const rim = ys[Math.floor(ys.length * .6)];
      return take(pool.filter(c => c.y >= rim).sort((a, b) => Math.abs(a.x - goal) - Math.abs(b.x - goal)), event.count);
    }
    case 'top': return take([...pool].sort((a, b) => b.y - a.y), event.count);
    case 'prominent': return take([...pool].sort((a, b) => (prominent.has(b.id) - prominent.has(a.id)) || b.w - a.w), event.count);
    case 'center': return take([...pool].filter(c => c.y >= midY).sort((a, b) => Math.abs(a.x - .33) - Math.abs(b.x - .33)), event.count);
    default: {
      const sorted = [...all].sort((a, b) => a.x - b.x), step = sorted.length / event.count;
      return Array.from({length: event.count}, (_, k) => sorted[Math.min(sorted.length - 1, Math.floor((k + .5) * step))].id);
    }
  }
}

/** Choose existing flower origins, with coverage in depth as well as width. */
export function selectIronBudCenters(cloud, limit = 36) {
  const cells = new Map();
  for (let i = 0; i < cloud.count; i += 3) {
    const p = i * 3, b = i * 4;
    if (cloud.growth[p + 1] > .5 || cloud.growth[p + 2] >= 9 || cloud.buds[b + 3] < .72 || cloud.energies[i] < .28) continue;
    const center = [0, 1, 2].map(a => cloud.positions[p + a] + cloud.buds[b + a]);
    if (center[1] < -.45 || !center.every(Number.isFinite)) continue;
    const key = center.map(v => Math.round(v / .075)).join(',');
    let cell = cells.get(key);
    if (!cell) { cell = {center, index: i, weight: 0}; cells.set(key, cell); }
    cell.weight++;
  }
  const candidates = [...cells.values()].filter(c => c.weight >= 18).sort((a, b) => b.weight - a.weight);
  if (!candidates.length) return [];
  const chosen = [candidates.shift()];
  while (chosen.length < limit && candidates.length) {
    let best = -1, score = -1;
    for (let i = 0; i < candidates.length; i++) {
      const c = candidates[i];
      const distance = Math.min(...chosen.map(q => (c.center[0] - q.center[0]) ** 2 +
        (c.center[1] - q.center[1]) ** 2 + .72 * (c.center[2] - q.center[2]) ** 2));
      if (distance < .29 ** 2) continue;
      const candidateScore = distance * (.65 + .07 * Math.log1p(c.weight));
      if (candidateScore > score) { score = candidateScore; best = i; }
    }
    if (best < 0) break;
    chosen.push(candidates.splice(best, 1)[0]);
  }
  return chosen.sort((a, b) => ironBurstTime(a.center) - ironBurstTime(b.center));
}

// Shared analytic ballistic path. Horizontal drag differs per grain; vertical
// momentum is preserved until gravity turns the arc. Children inherit this
// exact position/velocity at their one fracture event, independent of seeking.
function ballisticPosition(record, age) {
  const [drag, gravity] = record.dynamics;
  const travel = (1 - Math.exp(-drag * age)) / drag, t2 = .5 * age * age;
  const verticalDrag = .55 * drag, rise = (1 - Math.exp(-verticalDrag * age)) / verticalDrag;
  return [record.center[0] + record.velocity[0] * travel + record.drift[0] * t2,
    record.center[1] + record.velocity[1] * rise - gravity * (age - rise) / verticalDrag,
    record.center[2] + record.velocity[2] * travel + record.drift[1] * t2];
}
export function sampleIronSpark(record, time) {
  const age = time - record.birth;
  if (age < 0 || age >= record.life) return null;
  if (record.stage !== 1) return record.center.slice();
  return ballisticPosition(record, age);
}
export function sampleIronVelocity(record, time) {
  const age = Math.max(0, time - record.birth), damping = Math.exp(-record.dynamics[0] * age);
  const verticalDrag = .55 * record.dynamics[0], verticalDamping = Math.exp(-verticalDrag * age);
  return [record.velocity[0] * damping + record.drift[0] * age,
    record.velocity[1] * verticalDamping - record.dynamics[1] * (1 - verticalDamping) / verticalDrag,
    record.velocity[2] * damping + record.drift[1] * age];
}

function prominentOrigins(centers) {
  const prominent = new Set();
  for (let wave = 0; wave < 3; wave++) {
    const pool = centers.map((c, id) => ({...c, id})).filter(c => ironBudWave(c.center) === wave), selected = [];
    for (let n = 0; n < [1, 2, 1][wave] && pool.length; n++) {
      const score = c => Math.log1p(c.weight) * Math.min(2, selected.length ? Math.min(...selected.map(q =>
        Math.hypot(c.center[0] - q.center[0], c.center[1] - q.center[1], .7 * (c.center[2] - q.center[2])))) : 1);
      pool.sort((a, b) => score(b) - score(a));
      const pick = pool.shift(); selected.push(pick); prominent.add(pick.id);
    }
  }
  return prominent;
}

/** Fixed geometry budget includes fracture children; no runtime particle spawns. */
export function createIronRecords(cloud) {
  const centers = selectIronBudCenters(cloud), prominent = prominentOrigins(centers), records = [];
  if (!centers.length) return {centers, prominent, records, tailIndices: [], explosionCount: 0};
  const weights = centers.map((_, i) => prominent.has(i) ? 9.0 : .38 + .32 * hash(i + 83));
  const sum = weights.reduce((a, b) => a + b, 0), cumulative = [];
  weights.reduce((a, b) => {cumulative.push(a + b); return a + b;}, 0);
  const choose = seed => {const q = hash(seed) * sum; return Math.max(0, cumulative.findIndex(w => q < w));};
  const medium = [], tailCandidates = [];
  const addGrain = (kind, ordinal) => {
    const seed = 13007 + ordinal * 23 + kind * 137791;
    const id = choose(seed + 1), center = centers[id].center, main = prominent.has(id);
    // Broad, leaning volumes instead of equal upward cones. Each bud has its
    // own axis and width, while every launch still belongs to the same beat.
    const azimuth = hash(seed + 2) * Math.PI * 2;
    const vertical = -.62 + 1.62 * hash(seed + 3), radial = Math.sqrt(1 - vertical * vertical);
    const lean = Math.sign(center[0] - .3268) * (.18 + .34 * hash(id + 907));
    const width = .78 + .48 * hash(id + 211);
    const direction = [Math.cos(azimuth) * radial * width + lean,
      vertical * (.85 + .40 * hash(id + 331)) + .45 + .28 * hash(id + 417),
      Math.sin(azimuth) * radial * (.62 + .25 * hash(id + 563)) + (hash(id + 619) - .5) * .48];
    const length = Math.hypot(...direction);
    const speed = (kind === 0 ? 3.5 + 3.3 * hash(seed + 6) : kind === 1 ? 4.3 + 3.8 * hash(seed + 6) : 5.7 + 3.1 * hash(seed + 6))
      * (main ? 1.10 : .72 + .18 * hash(id + 773));
    const drag = kind === 0 ? 1.0 + .85 * hash(seed + 8) : kind === 1 ? .58 + .56 * hash(seed + 8) : .38 + .42 * hash(seed + 8);
    const gravity = 2.65 + 1.05 * hash(seed + 9);
    const birth = ironBurstTime(center) + (.022 + .020 * hash(id + 5)) * hash(seed + 10);
    const life = Math.min(13.8 - birth, 3.05 + .80 * hash(seed + 11));
    const r = {center: center.slice(), velocity: direction.map(v => v / length * speed),
      seed: [hash(seed + 13), hash(seed + 14), hash(seed + 15)], birth, life, stage: 1,
      character: [main ? 1 : .48 + .24 * hash(seed + 16), kind,
        kind === 0 ? .035 + .045 * hash(seed + 17) : kind === 1 ? .12 + .13 * hash(seed + 17) : .23 + .14 * hash(seed + 17)],
      dynamics: [drag, gravity, 0], drift: [(hash(seed + 18) - .5) * .25, (hash(seed + 19) - .5) * .23, id],
      bud: id, kind, originalLife: life};
    const index = records.push(r) - 1;
    if (kind === 1) medium.push(index);
    if (kind > 0) tailCandidates.push({index, score: kind === 2 ? 2 + hash(seed + 20) : hash(seed + 20)});
    else if (ordinal < 14400 && ordinal % 16 === 0) tailCandidates.push({index, score: .6 + .3 * hash(seed + 20)});
  };
  // 14,592 direct fine grains + 4,608 fracture children = 19,200 fine grains.
  for (let i = 0; i < 14592; i++) addGrain(0, i);
  for (let i = 0; i < 4320; i++) addGrain(1, i);
  for (let i = 0; i < 480; i++) addGrain(2, i);
  const fractureParents = medium.map(index => ({index, priority: hash(index + 414)})).sort((a, b) => a.priority - b.priority).slice(0, 768);
  for (const {index} of fractureParents) {
    const parent = records[index], fractureAge = .30 + .38 * hash(index + 505), birth = parent.birth + fractureAge;
    const center = ballisticPosition(parent, fractureAge), incoming = sampleIronVelocity(parent, birth);
    parent.originalLife = parent.life; parent.life = fractureAge + .10; parent.dynamics[2] = 1;
    for (let j = 0; j < 6; j++) {
      const seed = index * 31 + j * 137, angle = hash(seed + 1) * Math.PI * 2;
      const spread = .22 + .42 * hash(seed + 2);
      records.push({center: center.slice(), velocity: [incoming[0] + Math.cos(angle) * spread,
        incoming[1] + (hash(seed + 3) - .38) * .75, incoming[2] + Math.sin(angle) * spread],
        seed: [hash(seed + 4), hash(seed + 5), hash(seed + 6)], birth,
        life: Math.min(13.8 - birth, 2.10 + .70 * hash(seed + 7)), stage: 1,
        character: [parent.character[0], 0, .03 + .045 * hash(seed + 8)],
        dynamics: [.72 + .57 * hash(seed + 9), 2.9 + 1.2 * hash(seed + 10), 0],
        drift: [(hash(seed + 11) - .5) * .28, (hash(seed + 12) - .5) * .25, parent.bud],
        bud: parent.bud, kind: 0, parent: index, fractureAge});
    }
  }
  const explosionCount = records.length;
  const tailIndices = tailCandidates.sort((a, b) => b.score - a.score).slice(0, 2600).map(item => item.index);
  for (let id = 0; id < centers.length; id++) {
    const center = centers[id].center, burst = ironBurstTime(center), main = prominent.has(id), strength = main ? 1 : .55;
    for (let j = 0; j < 36; j++) {
      const seed = id * 7919 + j * 13, angle = hash(id + (j % 5) * 17) * Math.PI * 2;
      const birth = 7.22 + .16 * hash(id + 9);
      records.push({center: center.slice(), velocity: [Math.cos(angle) * (.20 + .17 * hash(seed)),
        .28 + .34 * hash(seed + 1), Math.sin(angle) * (.18 + .12 * hash(seed + 2))],
        seed: [hash(seed + 3), hash(seed + 4), hash(seed + 5)], birth, life: burst + .05 - birth, stage: 0,
        character: [strength, 0, .06], dynamics: [1, 1, 0], drift: [0, 0, id]});
    }
    for (let j = 0; j < (main ? 36 : 8); j++) {
      const seed = id * 59 + j * 11, radius = .035 + .11 * Math.sqrt(hash(seed + 8));
      const angle = hash(seed + 7) * Math.PI * 2;
      records.push({center: center.slice(), velocity: [Math.cos(angle) * radius, (hash(seed + 1) - .25) * radius, Math.sin(angle) * radius],
        seed: [hash(seed + 3), hash(seed + 4), hash(seed + 5)], birth: burst,
        life: main ? .34 : .22, stage: 2,
        character: [strength, 0, .05], dynamics: [1, 1, 0], drift: [0, 0, id]});
    }
  }
  // --- cinematic-v2 encores -------------------------------------------------
  const encoreBursts = [], encoreTails = [];
  let previous = new Set();
  ENCORES.forEach((event, eventIndex) => {
    const picked = pickEncoreCenters(centers, prominent, event, previous);
    previous = new Set(picked);
    picked.forEach((id, slot) => {
      const center = centers[id].center, main = prominent.has(id);
      encoreBursts.push({center: center.slice(), birth: event.time, scale: event.scale});
      const kinds = [[0, Math.round(520 * event.scale)], [1, Math.round(150 * event.scale)], [2, Math.round(18 * event.scale)]];
      for (const [kind, total] of kinds) for (let ordinal = 0; ordinal < total; ordinal++) {
        const seed = 900001 + eventIndex * 104729 + slot * 7919 + ordinal * 23 + kind * 137;
        const azimuth = hash(seed + 2) * Math.PI * 2;
        const vertical = -.55 + 1.55 * hash(seed + 3), radial = Math.sqrt(1 - vertical * vertical);
        const lean = Math.sign(center[0] - .3268) * (.15 + .30 * hash(id + eventIndex * 31 + 907));
        const direction = [Math.cos(azimuth) * radial * (.80 + .40 * hash(seed + 4)) + lean,
          vertical * .95 + .52, Math.sin(azimuth) * radial * .70 + (hash(seed + 5) - .5) * .40];
        const length = Math.hypot(...direction);
        const speed = (kind === 0 ? 3.2 + 3.0 * hash(seed + 6) : kind === 1 ? 4.0 + 3.4 * hash(seed + 6) : 5.2 + 2.8 * hash(seed + 6))
          * (.72 + .30 * event.scale) * (main ? 1.05 : .90);
        const drag = kind === 0 ? 1.0 + .85 * hash(seed + 8) : kind === 1 ? .58 + .56 * hash(seed + 8) : .38 + .42 * hash(seed + 8);
        const birth = event.time + .014 * hash(seed + 10);
        const life = Math.min(LIFE_END - birth, (2.35 + .75 * hash(seed + 11)) * (.80 + .25 * event.scale));
        const index = records.push({center: center.slice(), velocity: direction.map(v => v / length * speed),
          seed: [hash(seed + 13), hash(seed + 14), hash(seed + 15)], birth, life, stage: 1,
          character: [main ? 1 : .62, kind, kind === 0 ? .035 + .04 * hash(seed + 17) : kind === 1 ? .11 + .12 * hash(seed + 17) : .2 + .12 * hash(seed + 17)],
          dynamics: [drag, 2.65 + 1.05 * hash(seed + 9), 0], drift: [(hash(seed + 18) - .5) * .25, (hash(seed + 19) - .5) * .23, id],
          bud: id, kind, encore: eventIndex}) - 1;
        if (kind > 0) encoreTails.push({index, score: kind === 2 ? 2 + hash(seed + 20) : hash(seed + 20)});
      }
      for (let j = 0; j < 18; j++) {
        const seed = 700001 + eventIndex * 3571 + slot * 59 + j * 11, radius = .035 + .10 * Math.sqrt(hash(seed + 8));
        const angle = hash(seed + 7) * Math.PI * 2;
        records.push({center: center.slice(), velocity: [Math.cos(angle) * radius, (hash(seed + 1) - .25) * radius, Math.sin(angle) * radius],
          seed: [hash(seed + 3), hash(seed + 4), hash(seed + 5)], birth: event.time,
          life: .26, stage: 2, character: [main ? 1 : .6, 0, .05], dynamics: [1, 1, 0], drift: [0, 0, id]});
      }
    });
  });
  const encoreTailIndices = encoreTails.sort((a, b) => b.score - a.score).slice(0, 900).map(item => item.index);

  // --- cinematic-v2 silver petals -------------------------------------------
  const crown = [];
  for (let i = 0; i < cloud.count; i += 5) {
    const p = i * 3, b = i * 4;
    if (cloud.growth[p + 1] > .5 || cloud.growth[p + 2] >= 9 || cloud.buds[b + 3] < .5) continue;
    // Detach from lit filaments and hearts, not from the dim halo air.
    if ((cloud.florets?.[i * 2] ?? .5) < .15) continue;
    crown.push(i);
  }
  const petalBirths = [];
  for (const w of PETAL_WINDOWS) {
    const total = Math.round((w.to - w.from) * w.rate);
    for (let k = 0; k < total; k++) petalBirths.push(w.from + (w.to - w.from) * (k + hash(k * 7 + 3 + w.from * 100)) / total);
  }
  for (const f of PETAL_FLURRIES) for (let k = 0; k < f.count; k++) petalBirths.push(f.time + .9 * Math.pow(hash(k * 13 + f.time * 10), 1.8));
  let petals = 0;
  if (crown.length) petalBirths.forEach((birth, k) => {
    const seed = 500009 + k * 31, i = crown[Math.floor(hash(seed) * crown.length)];
    const origin = [cloud.positions[i * 3], cloud.positions[i * 3 + 1], cloud.positions[i * 3 + 2]];
    records.push({center: origin, velocity: [hash(seed + 1) * 6.283, .05 + .10 * hash(seed + 2), .17 + .16 * hash(seed + 3)],
      seed: [hash(seed + 4), hash(seed + 5), hash(seed + 6)], birth, life: Math.min(LIFE_END - birth, 2.6 + 1.6 * hash(seed + 7)),
      stage: 3, character: [.62 + .38 * hash(seed + 8), 3, 0], dynamics: [0, 0, 0], drift: [0, 0, -1]});
    petals++;
  });
  return {centers, prominent, records, tailIndices: tailIndices.concat(encoreTailIndices), explosionCount, encoreBursts, petals};
}

const pathGLSL = /* glsl */`
uniform float uIronTime;
uniform float uIronPixelRatio;
uniform float uIronWaterY;
uniform float uAlignmentDistance;
uniform vec2 uAlignmentOffset;
attribute vec3 aOrigin;
attribute vec3 aVelocity;
attribute vec3 aSeed;
attribute vec3 aClock;
attribute vec3 aCharacter; // strength, grain class, tail duration
attribute vec3 aDynamics; // horizontal drag, gravity, fracture parent
attribute vec3 aDrift; // horizontal acceleration x/z, physical bud id
varying vec3 vIronColor;
varying float vIronAlpha;
vec3 ironRegistered(vec3 p){
 p.xy=(p.xy+uAlignmentOffset)*(1.-p.z/uAlignmentDistance)-uAlignmentOffset;
 return p;
}
// cinematic-v2e glittering-willow tail: launch, apex and most of the fall
// keep their speed. Only the last third of a spark's life eases down to 45%
// speed, and only its last ~0.8 s strobes, faster as it dies.
bool ironFlying(){return aClock.z>.5&&aClock.z<1.5&&aDynamics.z<.5;}
float ironWarp(float a){
 if(!ironFlying())return a;
 float S=.66*aClock.y,R=.35,k=.45;
 if(a<S)return a;
 float x=a-S;
 if(x<R)return S+x-(1.-k)*x*x/(2.*R);
 return S+R-(1.-k)*R*.5+(x-R)*k;
}
float ironRealLife(){
 float L=aClock.y;
 if(!ironFlying())return L;
 float S=.66*L,R=.35,k=.45,W=S+R-(1.-k)*R*.5;
 if(L<=W){float c=(1.-k)/(2.*R),d=L-S;return S+(1.-sqrt(max(0.,1.-4.*c*d)))/(2.*c);}
 return S+R+(L-W)/k;
}
float ironGlitter(float realAge,out float strobe){
 float remain=ironRealLife()-realAge;
 float on=(1.-smoothstep(.55,.80,remain))*step(.30,aSeed.y)*step(.5,aClock.z)*step(aClock.z,1.5);
 float freq=mix(6.,22.,1.-clamp(remain/.8,0.,1.))+aSeed.z*5.;
 strobe=step(.45,fract(realAge*freq+aSeed.x*3.));
 return on;
}
vec3 ironPosition(float time){
 float age=max(0.,time-aClock.x);
 if(aClock.z>2.5){
  // cinematic-v2 silver petal: a slow flutter that settles into a fall.
  float sway=min(1.,age*1.6);
  return ironRegistered(aOrigin+vec3(
   sin(age*(1.15+aSeed.x*.9)+aVelocity.x)*aVelocity.y*sway,
   -(aVelocity.z*age+.075*age*age),
   cos(age*(.95+aSeed.y*.8)+aVelocity.x*1.7)*aVelocity.y*.75*sway));
 }
 if(aClock.z>1.5)return ironRegistered(aOrigin+aVelocity*(1.+.12*sin(age*3.6+aSeed.z*13.)));
 if(aClock.z<.5){
  // A fixed, compact constellation at each bud. Only its light changes:
  // the anticipation is a gold glint, without outward particle travel.
  vec3 p=aOrigin+vec3(aVelocity.x,aVelocity.y-.43,aVelocity.z)*(.16+.18*aSeed.x);
  return ironRegistered(p);
 }
 age=ironWarp(age);
 float travel=(1.-exp(-aDynamics.x*age))/aDynamics.x,t2=.5*age*age;
 float verticalDrag=.55*aDynamics.x,rise=(1.-exp(-verticalDrag*age))/verticalDrag;
 return ironRegistered(aOrigin+vec3(aVelocity.x*travel+aDrift.x*t2,
  aVelocity.y*rise-aDynamics.y*(age-rise)/verticalDrag,aVelocity.z*travel+aDrift.y*t2));
}
float ironAlpha(float time,vec3 p){
 float realAge=time-aClock.x;
 float age=realAge<0.?realAge:ironWarp(realAge);
 if(realAge<0.||age>=aClock.y)return 0.;
 float q=age/aClock.y;
 float flicker=.68+.32*pow(sin(age*(18.+aSeed.z*17.)+aSeed.x*31.),2.);
 float alpha;
 if(aClock.z>2.5){
  float fade=smoothstep(0.,.22,age)*(1.-smoothstep(aClock.y*.55,aClock.y,age));
  float twinkle=.45+.55*pow(.5+.5*sin(age*(4.2+aSeed.z*5.)+aSeed.x*23.),2.);
  alpha=fade*twinkle*(.58+.52*aSeed.y)*aCharacter.x;
  flicker=1.;
 }else if(aClock.z>1.5){
  float joining=smoothstep(0.,.045,age);
  alpha=smoothstep(0.,.012,age)*mix(1.30,.65,joining)*(1.-smoothstep(.08,aClock.y,age));
  alpha*=mix(.62,1.,aCharacter.x);
 }else if(aClock.z<.5){
  // First reveal a steady ember. Bring in the independent light pulses only
  // after it has emerged, so a randomly bright phase cannot flash into view.
  float appearDelay=.10*aSeed.x+.10*fract(aDrift.z*.381966);
  float reveal=smoothstep(0.,.70+.12*aSeed.z,age-appearDelay);
  float pulseStart=.65+.16*aSeed.x;
  float pulsing=smoothstep(pulseStart,pulseStart+.36,age);
  float glint=pow(.5+.5*sin(age*(6.6+2.*aSeed.z)+aSeed.x*6.2831853),3.);
  flicker=mix(.36,.24+1.50*glint,pulsing);
  // Carry the gold light into the shared impact; fade only after ignition.
  float burstAge=aClock.y-.05;
  float charge=smoothstep(burstAge-.32,burstAge,age);
  flicker=mix(flicker,1.55,charge);
  // cinematic-v2: in the held breath before the shared beat, more of the
  // gathered gold shows and every bud burns brighter.
  float gather=smoothstep(7.6,8.86,time);
  float sparse=smoothstep(mix(.62,.34,gather),mix(.78,.52,gather),aSeed.y);
  alpha=reveal*(1.-smoothstep(burstAge,aClock.y,age))*(.52+.32*aSeed.y)*sparse*mix(1.,1.45,gather);
 }else{
  float fade=1.-smoothstep(.82,1.,q);
  if(aDynamics.z>.5)fade=1.-smoothstep(aClock.y-.10,aClock.y,age);
  alpha=smoothstep(0.,.018,age)*fade*(.63+.30*aSeed.y)*mix(.66,1.,aCharacter.x);
  alpha*=1.+.18*step(1.5,aCharacter.y);
  // Strobe glitter only at the very end of the fall.
  float strobe;
  float glitter=ironGlitter(realAge,strobe);
  alpha*=mix(1.,strobe*2.0,glitter);
 }
 float worldY=(modelMatrix*vec4(p,1.)).y;
 return alpha*flicker*smoothstep(uIronWaterY+.007,uIronWaterY+.055,worldY);
}
vec3 ironColor(float time){
 float realAge=max(0.,time-aClock.x);
 float age=ironWarp(realAge),q=clamp(age/max(.001,aClock.y),0.,1.);
 if(aClock.z>2.5)return mix(vec3(2.0,2.12,2.45),vec3(2.7,1.75,.85),step(.86,aSeed.z))*(1.-.35*q);
 if(aClock.z>1.5)return mix(vec3(8.0,4.4,1.4),vec3(8.4,8.0,6.9),smoothstep(0.,.32,age));
 if(aClock.z<.5)return mix(vec3(4.0,1.45,.24),vec3(7.5,4.4,1.55),aSeed.y);
 float hotGrain=step(1.5,aCharacter.y),warmWhite=step(.88,aSeed.z);
 vec3 hot=mix(vec3(8.7,4.5,1.65),vec3(12.0,9.5,5.8),max(hotGrain,warmWhite*.65));
 hot*=1.+.80*hotGrain*(1.-smoothstep(.025,.16,age));
 vec3 cooled=mix(hot,vec3(3.7,.82,.09),smoothstep(.44,.98,q));
 // Each strobe flash burns warm white again.
 float strobe;
 float glitter=ironGlitter(realAge,strobe);
 return mix(cooled,vec3(9.,7.4,4.8),glitter*strobe*.75);
}
`;
const headVertex = /* glsl */`
${pathGLSL}
void main(){
 vec3 p=ironPosition(uIronTime);
 vec4 mv=modelViewMatrix*vec4(p,1.);
 gl_Position=projectionMatrix*mv;
 vIronAlpha=ironAlpha(uIronTime,p);vIronColor=ironColor(uIronTime)*1.15;
 float size=mix(1.12,1.62,aSeed.y);
 if(aCharacter.y>.5)size=mix(1.5,2.15,aSeed.y);
 if(aCharacter.y>1.5)size=mix(2.0,2.85,aSeed.y);
 if(aClock.z<.5)size=mix(1.25,1.90,aSeed.y)*(1.+.85*smoothstep(7.6,8.9,uIronTime));
 if(aClock.z>1.5)size=mix(1.05,1.70,aSeed.y);
 if(aClock.z>2.5)size=mix(1.35,2.2,aSeed.y);
 float minPerspective=aClock.z>.5&&aClock.z<1.5&&aCharacter.y<.5?.95:.86;
 gl_PointSize=min(3.0,size*clamp(1.55/max(.6,-mv.z),minPerspective,1.20))*uIronPixelRatio;
 // Silver petals are larger, softer grains so the slow rain reads on screen.
 if(aClock.z>2.5)gl_PointSize=mix(2.2,3.4,aSeed.y)*clamp(1.9/max(.6,-mv.z),.8,1.3)*uIronPixelRatio;
 if(vIronAlpha<.002){gl_Position=vec4(2.,2.,2.,1.);gl_PointSize=0.;}
}
`;
const headFragment = /* glsl */`
varying vec3 vIronColor;
varying float vIronAlpha;
void main(){
 float r=length(gl_PointCoord-.5)*2.;
 if(r>=1.)discard;
 float core=exp(-3.35*r*r)*(1.-smoothstep(.68,1.,r));
 gl_FragColor=vec4(vIronColor,core*vIronAlpha);
}
`;
const tailVertex = /* glsl */`
${pathGLSL}
uniform vec2 uIronResolution;
varying float vAcross;
void main(){
 // At impact the heads outrun very short tails, keeping silver buds visible.
 // Long arcs develop only after the grains have cleared their flower origin.
 float along=position.x,age=max(0.,uIronTime-aClock.x);
 float lag=min(aCharacter.z,age*.22)*along;
 float sampleTime=max(aClock.x,uIronTime-lag);
 vec3 p=ironPosition(sampleTime);
 vec4 clip=projectionMatrix*modelViewMatrix*vec4(p,1.);
 vec4 next=projectionMatrix*modelViewMatrix*vec4(ironPosition(sampleTime+.008),1.);
 vec4 previous=projectionMatrix*modelViewMatrix*vec4(ironPosition(max(aClock.x,sampleTime-.008)),1.);
 vec2 tangent=(next.xy/max(next.w,.001)-previous.xy/max(previous.w,.001))*uIronResolution;
 vec2 normal=normalize(vec2(-tangent.y,tangent.x)+vec2(.00001));
 float hotGrain=step(1.5,aCharacter.y);
 float width=(.22+.15*aSeed.y+.11*hotGrain)*(1.-.72*along);
 clip.xy+=normal*position.y*width*2./uIronResolution*clip.w;
 gl_Position=clip;
 float broken=.18+.82*smoothstep(.18,.60,sin(along*(19.+aSeed.z*16.)+aSeed.x*21.)*.5+.5);
 broken=mix(broken,.60+.40*broken,hotGrain);
 vIronAlpha=ironAlpha(uIronTime,p)*pow(1.-along,1.1)*.70*broken*smoothstep(.35,2.1,length(tangent));
 vIronColor=ironColor(uIronTime)*.80;
 vAcross=position.y;
 if(ironAlpha(uIronTime,ironPosition(uIronTime))<.002||uIronTime<aClock.x)gl_Position=vec4(2.,2.,2.,1.);
}
`;
const tailFragment = /* glsl */`
varying vec3 vIronColor;
varying float vIronAlpha;
varying float vAcross;
void main(){
 float core=exp(-vAcross*vAcross*3.3)*(1.-smoothstep(.65,1.,abs(vAcross)));
 gl_FragColor=vec4(vIronColor,vIronAlpha*core);
}
`;

// Real seconds a record stays visible (flying grains are slowed after 0.95 s).
const realLife = r => {
  if (r.stage !== 1 || r.dynamics[2] > .5) return r.life;
  const L = r.life, S = .66 * L, R = .35, k = .45, W = S + R - (1 - k) * R * .5;
  if (L <= W) { const c = (1 - k) / (2 * R), d = L - S; return S + (1 - Math.sqrt(Math.max(0, 1 - 4 * c * d))) / (2 * c); }
  return S + R + (L - W) / k;
};
export function createIronFlower({content,cloud,uniforms,waterLevel}) {
  const {centers,prominent,records,tailIndices,explosionCount,encoreBursts=[],petals=0}=createIronRecords(cloud);
  const ownUniforms={uIronTime:{value:0},uIronPixelRatio:{value:1},uIronWaterY:{value:waterLevel},
    uIronResolution:{value:new THREE.Vector2(1280,720)},
    uAlignmentDistance:uniforms.uAlignmentDistance,uAlignmentOffset:uniforms.uAlignmentOffset};
  const attributes=(geometry,list,instanced)=>{
    const arrays={aOrigin:[],aVelocity:[],aSeed:[],aClock:[],aCharacter:[],aDynamics:[],aDrift:[]};
    for(const i of list){const r=records[i];arrays.aOrigin.push(...r.center);arrays.aVelocity.push(...r.velocity);
      arrays.aSeed.push(...r.seed);arrays.aClock.push(r.birth,r.life,r.stage);arrays.aCharacter.push(...r.character);
      arrays.aDynamics.push(...r.dynamics);arrays.aDrift.push(...r.drift);}
    const Attribute=instanced?THREE.InstancedBufferAttribute:THREE.BufferAttribute;
    for(const [name,values]of Object.entries(arrays))geometry.setAttribute(name,new Attribute(new Float32Array(values),3));
  };
  const headGeometry=new THREE.BufferGeometry();
  headGeometry.setAttribute('position',new THREE.BufferAttribute(new Float32Array(records.length*3),3));
  attributes(headGeometry,records.map((_,i)=>i),false);
  const material=(vertexShader,fragmentShader)=>new THREE.ShaderMaterial({uniforms:ownUniforms,vertexShader,fragmentShader,
    transparent:true,depthTest:true,depthWrite:false,blending:THREE.AdditiveBlending,side:THREE.DoubleSide});
  const heads=new THREE.Points(headGeometry,material(headVertex,headFragment));heads.name='iron-flower-spark-grains';
  const tailGeometry=new THREE.InstancedBufferGeometry(),vertices=[],indices=[],segments=8;
  for(let n=0;n<=segments;n++)vertices.push(n/segments,-1,0,n/segments,1,0);
  for(let n=0;n<segments;n++){const v=n*2;indices.push(v,v+1,v+2,v+1,v+3,v+2);}
  tailGeometry.setAttribute('position',new THREE.Float32BufferAttribute(vertices,3));tailGeometry.setIndex(indices);
  attributes(tailGeometry,tailIndices,true);tailGeometry.instanceCount=tailIndices.length;
  const tails=new THREE.Mesh(tailGeometry,material(tailVertex,tailFragment));tails.name='iron-flower-arc-trails';
  const group=new THREE.Group();group.name='iron-flower-curtain';group.visible=false;group.add(tails,heads);
  group.traverse(object=>{object.userData.directOnly=true;object.layers.set(0);object.frustumCulled=false;object.renderOrder=6;
    if(!object.material)return;object.onBeforeRender=renderer=>{renderer.getSize(ownUniforms.uIronResolution.value);
      ownUniforms.uIronPixelRatio.value=renderer.getPixelRatio();object.material.uniformsNeedUpdate=true;};});
  content.add(group);
  let disposed=false;
  const finish=Math.max(0,...records.map(r=>r.birth+realLife(r))),flyingFinish=Math.max(0,...records.filter(r=>r.stage===1).map(r=>r.birth+realLife(r)));
  const empty=()=>({phase:'inactive',activeSparks:0,activeSprouts:0,activeEmbers:0,centers:centers.length,prominentFans:prominent.size});
  let state=empty();
  function update({time=0,motion=true,pixelRatio=1}={}){
    const t=Number.isFinite(time)?time:0;ownUniforms.uIronTime.value=t;ownUniforms.uIronPixelRatio.value=Math.max(.1,pixelRatio);
    let activeSparks=0,activeSprouts=0,activeEmbers=0,activePetals=0;
    if(motion&&!disposed&&t>=7.2&&t<finish)for(const r of records){if(t<r.birth||t>=r.birth+realLife(r))continue;
      if(r.stage===1)activeSparks++;else if(r.stage===2)activeEmbers++;else if(r.stage===3)activePetals++;else activeSprouts++;}
    group.visible=activeSparks+activeSprouts+activeEmbers+activePetals>0;
    state={phase:activeSparks?'burst':activeSprouts?'sprout':activeEmbers?'ember':activePetals?'petal':'inactive',
      activeSparks,activeSprouts,activeEmbers,activePetals,centers:centers.length,prominentFans:prominent.size};
    group.userData.state=state;return state;
  }
  Object.assign(group.userData,{version:'iron-flower-curtain-v1',centers:centers.map(c=>c.center),
    prominentCenters:[...prominent].map(id=>centers[id].center),particles:records.length,
    explosionParticles:explosionCount,fractureChildren:records.filter(r=>r.parent!==undefined).length,
    trails:tailIndices.length,finish,flyingFinish,encoreBursts:encoreBursts.length,petals});
  return{group,update,encoreBursts,getState:()=>state,dispose(){if(disposed)return;disposed=true;group.visible=false;content.remove(group);
    for(const object of[heads,tails]){object.geometry.dispose();object.material.dispose();}}};
}
