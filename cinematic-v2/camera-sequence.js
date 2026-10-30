import { TIMELINE } from './fire-timeline.js';

// Camera heights are relative to the fixed particle-root anchor. This value
// is retained as `waterLevel` in the public API for existing scene callers.
// The source registration camera is deliberately outside this module.
// The shortened score reaches its own last hit at 30.57 s (source 37.77 s).
// The lettering flashes there, then picture and decaying score fade together.
export const DURATION = 32.2;
export const END_FADE = Object.freeze([31.0, DURATION]);

// v2b framing: the grown tree fills the frame top to bottom (was ~63% of the height).
const UNDER = Object.freeze({azimuth: 0, radius: 1.40, eye: .26, target: .64, fov: 55, narrowRetreat: 1.10, narrowFov: 76, narrowTarget: .64});
const ORBIT_ANGLE = Math.PI * 2 / 3;
const BIRTH = Object.freeze({azimuth: ORBIT_ANGLE, radius: .82, eye: .17, target: .045, fov: 46, narrowRetreat: 1.04, narrowFov: 60, narrowTarget: .05});
const RISING = Object.freeze({...UNDER, azimuth: .035, radius: 1.12, eye: .18, target: .26, fov: 50, narrowRetreat: 1.07, narrowFov: 66, narrowTarget: .26});
const BRANCHING = Object.freeze({...UNDER, azimuth: .055, radius: 1.42, eye: .21, target: .53, fov: 56, narrowRetreat: 1.10, narrowFov: 76, narrowTarget: .51});
// Start low at the rear-side angle, then turn 120 degrees back to the
// accepted front view during opening growth. The original root-following
// dolly and eye height arrive at the exact front composition before bloom.
const ORBIT_END = UNDER;
const ORBIT_START = 0, ORBIT_FINISH = 7.2;

// cinematic-v2 chapters. The shot ids drive the transport buttons.
export const SHOTS = Object.freeze([
  Object.freeze({id: 'seed', label: '一粟生光', time: .6, start: 0, end: 1.2}),
  Object.freeze({id: 'grow', label: '金脉上生', time: 3.6, start: 1.2, end: ORBIT_FINISH}),
  Object.freeze({id: 'bloom', label: '金银同绽', time: 9.6, start: ORBIT_FINISH, end: 13.74}),
  Object.freeze({id: 'tour', label: '火树环游', time: 16.0, start: 13.74, end: 18.55}),
  Object.freeze({id: 'letter', label: '炸树成字', time: 18.4, start: 18.55, end: 28.15}),
  Object.freeze({id: 'finale', label: '火树银花', time: 28.6, start: 28.15, end: DURATION}),
]);

// Mature act (after the opening orbit has returned to the front view).
// Monotone Hermite keys: each turning point (the high view on the 28.13 s
// phrase downbeat) is a gentle hang, not a bounce. Negative azimuth visits
// the side the opening orbit did not show.
const matureFrame = (azimuth, radius, eye, target, fov) => Object.freeze({
  azimuth, radius, eye, target, fov,
  narrowRetreat: UNDER.narrowRetreat, narrowFov: fov + (UNDER.narrowFov - UNDER.fov), narrowTarget: target,
});
const MATURE_KEYS = [
  [ORBIT_FINISH, UNDER],
  // v2j: the tour departs on the bloom itself (from rest, easing in) instead
  // of holding still until 13.74 s, so the camera picks up motion while the
  // iron sparks die out and the frame never comes to a dead stop.
  [8.93, UNDER],
  [20.93, matureFrame(-.46, 1.42, .42, .66, 54)],
  // v2s: the side tour used to swing out to -.86 rad (~50 deg). From there the
  // flat root cross lines up with the screen: a horizontal bar plus one root
  // pointing at the lens, topped by a round crown lump, read as a figure with
  // arms spread. Rendered at -20/-0 deg the base reads as a trunk with a root
  // flare, so the swing is capped near -.55 rad (~31 deg).
  [28.13, matureFrame(-.55, 1.62, .95, .70, 53)],
  [33.40, matureFrame(-.38, 1.44, .62, .66, 53)],
  [37.80, matureFrame(0, 1.42, .30, .64, 55)],
  [38.6, matureFrame(.015, 1.56, .32, .65, 55)],
];
// Hold-the-breath push before the shared bloom, then an impulse recoil on the
// impact itself (camera shake rides on top of this in main.js).
const PUSH_START = ORBIT_FINISH, PUSH_DEPTH = .075;
function bloomPush(time) {
  const hit = TIMELINE.bloomStart;
  if (time <= PUSH_START) return 0;
  if (time <= hit) return PUSH_DEPTH * smoother(clamp((time - PUSH_START) / (hit - PUSH_START), 0, 1));
  return PUSH_DEPTH * Math.exp(-(time - hit) / .48);
}
// v3h: the same held push before the tree bursts into the lettering; the
// lettering frame's pull-back takes over on the hit.
const BURST_PUSH = Object.freeze({start: 17.35, hit: 18.55, depth: .05});
function burstPush(time) {
  if (time <= BURST_PUSH.start) return 0;
  if (time <= BURST_PUSH.hit) return BURST_PUSH.depth * smoother(clamp((time - BURST_PUSH.start) / (BURST_PUSH.hit - BURST_PUSH.start), 0, 1));
  return BURST_PUSH.depth * Math.exp(-(time - BURST_PUSH.hit) / .48);
}
function matureKey(time) {
  const key = splineKey(MATURE_KEYS, clamp(time, ORBIT_FINISH, 38.6));
  const push = bloomPush(time) + burstPush(time);
  key.radius *= 1 - push;
  key.target += .45 * push; key.narrowTarget += .45 * push;
  return key;
}

const clamp = (value, min, max) => Math.min(max, Math.max(min, value));
const finite = (value, fallback) => Number.isFinite(Number(value)) ? Number(value) : fallback;
const smoother = t => t * t * t * (t * (t * 6 - 15) + 10);
const mix = (a, b, t) => a + (b - a) * t;

// v2s, tall panes only. Measured on a 605x860 pane the silver crown spanned
// 86-91 % of the width with only 1.5-3.6 % margin on the left from 12 s to 35 s.
// crownEase widens the narrow-pane fit radius (1 + value) so both margins stay
// above ~5 %. The crown's projected width changes with the viewing azimuth
// (widest near 21 s, narrowest 25-30 s), so the amount follows the tour.
const CROWN_EASE_KEYS = [
  [0, 0], [10, 0], [13, .06], [18, .06], [21, .10], [23.5, .05], [26, .01], [30, .01],
  [33, .06], [36, .06], [38.6, .024],
];
function crownEase(t) {
  const x = clamp(t, 0, DURATION);
  let i = 0;
  while (i < CROWN_EASE_KEYS.length - 2 && x > CROWN_EASE_KEYS[i + 1][0]) i++;
  const [t0, v0] = CROWN_EASE_KEYS[i], [t1, v1] = CROWN_EASE_KEYS[i + 1];
  return 1 + mix(v0, v1, smoother(clamp((x - t0) / (t1 - t0), 0, 1)));
}
// v2s: during the side tour the camera was only ~8 degrees above the target, so
// the flat root fan collapsed into a horizontal bar and the one root pointing
// at the lens hung down like a leg. A smooth lift of the eye (world units, tall
// panes only) opens the fan and separates the crown from the trunk.
const EYE_LIFT_KEYS = [[0, 0], [10, 0], [15, .12], [21, .22], [26, .33], [30, .30], [34, .14], [37.5, 0], [38.6, 0]];
function eyeLift(t) {
  const x = clamp(t, 0, DURATION);
  let i = 0;
  while (i < EYE_LIFT_KEYS.length - 2 && x > EYE_LIFT_KEYS[i + 1][0]) i++;
  const [t0, v0] = EYE_LIFT_KEYS[i], [t1, v1] = EYE_LIFT_KEYS[i + 1];
  return mix(v0, v1, smoother(clamp((x - t0) / (t1 - t0), 0, 1)));
}

// One short angular impact around the lens axis. Keep the optical centre,
// camera position and focal length fixed: no screen translation or dolly.
// Story time makes paused frames and replay match exactly.
export function sampleBurstShake(time, {motion=true}={}) {
  // v3b: the tree's burst into the lettering (18.55 s) hits like the bloom.
  const age=time>=18.55?time-18.55:time-TIMELINE.bloomStart;
  if(!motion||!Number.isFinite(age)||age<=0||age>=.56)return {roll:0};
  const attack=smoother(clamp(age/.018,0,1));
  const settle=1-smoother(clamp((age-.38)/.18,0,1));
  const envelope=attack*Math.exp(-age/.13)*settle;
  return {
    roll:(Math.PI/180)*envelope*(.78*Math.sin(age*83)+.22*Math.sin(age*127)),
  };
}

// Start turning on the first playback frame. Cubic ease-out keeps the
// requested fast-to-slow motion and reaches the front at zero angular speed.
function orbitProgress(time){
  const u=Math.min(1,Math.max(0,(time-ORBIT_START)/(ORBIT_FINISH-ORBIT_START)));
  return 1-(1-u)**3;
}
function orbitKey(time){
  return {...UNDER, azimuth: ORBIT_ANGLE*(1-orbitProgress(time))};
}

// Preserve the horizontal fit while smoothing the point where the narrow
// viewport switches between authored distance and fit distance. This avoids
// a change in velocity partway through the lift; the added margin is tiny.
function smoothFitMaximum(a,b,width){
  const gap=Math.abs(a-b);
  return Math.max(a,b)+(width>0&&gap<width?(width-gap)*(width-gap)/(4*width):0);
}

// The opening is a continuous dolly/tilt, with only the deliberate seed hold.
// Interior Hermite tangents are shared between spans, so the camera never
// brakes to zero at each intermediate growth beat.
const OPENING_KEYS=[[0,BIRTH],[1.2,BIRTH],[3.5,RISING],[6.4,BRANCHING],[10.8,UNDER],[12.4,UNDER]];
function splineKey(keys,t){
 let i=keys.findIndex((_,j)=>j<keys.length-1&&t<=keys[j+1][0]);
 if(i<0)i=keys.length-2;
 const a=keys[i],b=keys[i+1],h=b[0]-a[0],u=clamp((t-a[0])/h,0,1),u2=u*u,u3=u2*u;
 const tangent=(index,name)=>{
  if(index===0||index===keys.length-1)return 0;
  const p=keys[index-1],q=keys[index],r=keys[index+1];
  const h0=q[0]-p[0],h1=r[0]-q[0],d0=(q[1][name]-p[1][name])/h0,d1=(r[1][name]-q[1][name])/h1;
  if(d0*d1<=0)return 0;
  const w0=2*h1+h0,w1=h1+2*h0;
  return (w0+w1)/(w0/d0+w1/d1);
 };
 return Object.fromEntries(Object.keys(BIRTH).map(name=>[name,(2*u3-3*u2+1)*a[1][name]+(u3-2*u2+u)*h*tangent(i,name)+(-2*u3+3*u2)*b[1][name]+(u3-u2)*h*tangent(i+1,name)]));
}

export function shotTime(id) {
  return SHOTS.find(shot => shot.id === id)?.time ?? SHOTS[0].time;
}

function sampleAuthoredCamera(time, {waterLevel = .6197133937500414, aspect = 16 / 9} = {}) {
  const t = clamp(finite(time, 0), 0, DURATION);
  const water = finite(waterLevel, .6197133937500414);
  const screenAspect = Math.max(.3, finite(aspect, 16 / 9));
  // Preserve the authored seed view through 2s, then finish the growth dolly
  // at 7.2s so every bare branch is visible before its tips gather iron light.
  // This remaps the camera only; particles use unmodified story seconds.
  // The opening follows the root rather than inventing unmeasured pluck cues
  // for the newly selected recording.
  const growthCameraTime=t+3.6*smoother(clamp((t-2)/5.2,0,1));
  // Begin the orbit in the first seconds while the branches are still growing.
  // Root-following framing keeps the early seed visible, then returns to
  // the original front view before the gold-light anticipation.
  const key = t < ORBIT_FINISH ? splineKey(OPENING_KEYS,growthCameraTime) : matureKey(t);
  if(growthCameraTime>2&&growthCameraTime<10.8){
    const room=smoother(clamp((growthCameraTime-2)/2.1,0,1))*(1-smoother(clamp((growthCameraTime-8)/2.8,0,1)));
    key.radius+=.24*room;key.target+=.08*room;key.narrowTarget+=.08*room;
    key.fov+=4*room;key.narrowFov+=9*room;key.narrowRetreat+=.06*room;
  }
  if(t < ORBIT_FINISH) key.azimuth=ORBIT_ANGLE*(1-orbitProgress(t));
  // Hold the accepted front view after the opening orbit. Gold-tip light
  // and the simultaneous bloom play without another tilt or dolly pulse.

  // Keep the accepted wide shots exact. A wider vertical lens alone does not
  // protect a broad crown in a tall desktop panel: horizontal coverage is
  // radius * tan(verticalFov / 2) * aspect. Low views need 84% of the wide
  // composition's coverage; high views need only 67%, as the same crown is
  // narrower in projection. Blend by elevation so the overhead turn does
  // not retreat too far. Introduce the fit with growing branches, not the seed
  // close-up, so the first two seconds retain their original scale.
  const narrow = smoother(clamp((1.25-screenAspect)/.65,0,1));
  const fov = mix(key.fov,key.narrowFov,narrow);
  const lens = Math.tan(fov * Math.PI / 360);
  const wideLens = Math.tan(key.fov * Math.PI / 360);
  const authoredRadius = key.radius * mix(1,key.narrowRetreat,narrow);
  const overhead = smoother(clamp((key.eye-key.target)/.7,0,1));
  const horizontalCoverage = mix(.84,.67,overhead);
  const horizontalFit = key.radius * wideLens * (16 / 9) * horizontalCoverage / (lens * screenAspect) * crownEase(t);
  const growingFrame = smoother(clamp((growthCameraTime-2)/3.6,0,1));
  const radius = mix(authoredRadius,smoothFitMaximum(authoredRadius,horizontalFit,.08*narrow),growingFrame);
  const retreat = radius / key.radius;
  const targetY = water + mix(key.target,key.narrowTarget,narrow);
  // Keep low-view eye height stable as the frame retreats; elevated views
  // preserve their angle to the target across different viewport widths.
  const eyeY = water + key.eye + smoothFitMaximum(0,key.eye-key.target,.05) * (retreat - 1) + eyeLift(t) * narrow;
  const shot = [...SHOTS].reverse().find(item => t >= item.start) ?? SHOTS[0];

  return {
    position: [Math.sin(key.azimuth) * radius, eyeY, Math.cos(key.azimuth) * radius],
    target: [0, targetY, 0],
    fov,
    shot: shot.id,
    label: shot.label,
    phase: t < ORBIT_START ? 'root-opening' : t >= ORBIT_FINISH ? 'hold' : 'travel',
  };
}

// Ease directly into the accepted front framing, without overshooting its
// distance/lens and zooming back in during 5.5–7s. The lens and dolly settle
// before the unchanged 120-degree orbit finishes. Log interpolation keeps
// the 3–4s retreat gentle; height/target settle without a framing rebound.
const DOLLY_START = 1.8, DOLLY_END = 5.2;
let framingCurveCache = null;
function openingFramingCurve(aspect){
  if(framingCurveCache?.aspect===aspect)return framingCurveCache.curves;
  const epsilon=.001;
  const times=[DOLLY_START-epsilon,DOLLY_START,DOLLY_START+epsilon,ORBIT_FINISH];
  const samples=times.map(time=>sampleAuthoredCamera(time,{aspect,waterLevel:0}));
  const curves=[
    shot=>Math.log(Math.hypot(shot.position[0],shot.position[2])),
    shot=>Math.log(Math.tan(shot.fov*Math.PI/360)),
    shot=>shot.position[1],
    shot=>shot.target[1],
  ].map(read=>{
    const values=samples.map(read);
    return [values[1],values[3],(values[2]-values[0])/(2*epsilon)];
  });
  framingCurveCache={aspect,curves};
  return curves;
}

function sampleCameraBase(time, options = {}) {
  const t=clamp(finite(time,0),0,DURATION);
  const shot=sampleAuthoredCamera(t,options);
  if(t<=DOLLY_START||t>=ORBIT_FINISH)return shot;
  const aspect=Math.max(.3,finite(options.aspect,16/9));
  const water=finite(options.waterLevel,.6197133937500414);
  const h=DOLLY_END-DOLLY_START,u=clamp((t-DOLLY_START)/h,0,1),u2=u*u,u3=u2*u;
  const [logRadius,logLens,eye,target]=openingFramingCurve(aspect).map(([a,b,da])=>
    (2*u3-3*u2+1)*a+(u3-2*u2+u)*h*da+(-2*u3+3*u2)*b
  );
  const radius=Math.exp(logRadius),lens=Math.exp(logLens);
  const radialScale=radius/Math.hypot(shot.position[0],shot.position[2]);
  shot.position[0]*=radialScale;shot.position[2]*=radialScale;
  shot.position[1]=water+eye;shot.target[1]=water+target;
  shot.fov=Math.atan(lens)*360/Math.PI;
  return shot;
}

// v2p: frame the crown, not the trunk. The camera always looks at the trunk
// axis, but the silver crown is lopsided: measured over the whole piece its
// mass sits left of the trunk, so the left edge of the canopy touched the
// frame for most of the tour while 15-20 % of the right side stayed empty
// (both in a 16:9 window and in a tall narrow pane). The whole shot is
// slid sideways by a fraction of the visible width, camera and target
// together, so no view direction and no timing changes.
const SHIFT_KEYS = [
  [0, 0], [3, 0], [7.2, .02], [9.0, .03], [13, .035], [16.5, .052], [20, .050],
  [25, .050], [31, .064], [35, .060], [37.0, .040], [38.6, .035],
];
function frameShift(time) {
  const t = clamp(time, 0, DURATION);
  let i = 0;
  while (i < SHIFT_KEYS.length - 2 && t > SHIFT_KEYS[i + 1][0]) i++;
  const [t0, v0] = SHIFT_KEYS[i], [t1, v1] = SHIFT_KEYS[i + 1];
  return mix(v0, v1, smoother(clamp((t - t0) / (t1 - t0), 0, 1)));
}

// v2s, tall panes only: extra sideways slide on top of SHIFT_KEYS. At 3 s the
// left limb touched the frame edge (1 %) while 17 % stayed empty on the right;
// from 12 s the crown still sat ~3 % left of centre.
const NARROW_SHIFT_KEYS = [
  [0, 0], [1.2, 0], [2.4, .085], [3.2, .097], [4.2, .065], [5.2, .025], [6.2, 0], [8, .008], [10, .010], [13, .018], [18, .018], [21, .008], [24, .018],
  [35, .018], [37.5, .008], [38.6, .006],
];
function narrowShift(time) {
  const t = clamp(time, 0, DURATION);
  let i = 0;
  while (i < NARROW_SHIFT_KEYS.length - 2 && t > NARROW_SHIFT_KEYS[i + 1][0]) i++;
  const [t0, v0] = NARROW_SHIFT_KEYS[i], [t1, v1] = NARROW_SHIFT_KEYS[i + 1];
  return mix(v0, v1, smoother(clamp((t - t0) / (t1 - t0), 0, 1)));
}

// v3a: after the tree gathers into the lettering, the camera settles square
// on the column (it always faces the lens) and eases in slowly. Heights are in
// world units above the root anchor: the column centre sits LETTER.lift x tree
// scale above it, and is LETTER.height x tree scale tall.
// v3h: the column fills ~58 % of the height (was 82 %) and the slow push is
// smaller, leaving room for the 火 flames above and the 银 rain below; the
// closing tree ghost (about the column's height) also fits behind it.
const LETTER_FRAME = Object.freeze({start: 18.55, settle: 20.9, centre: .7445, height: 1.44, width: .52, fov: 45, push: .03, fill: .58});
function letterFrame(shot, time, aspect, waterLevel) {
  const t = clamp(finite(time, 0), 0, DURATION);
  if (t <= LETTER_FRAME.start) return shot;
  const a = smoother(clamp((t - LETTER_FRAME.start) / (LETTER_FRAME.settle - LETTER_FRAME.start), 0, 1));
  const lens = Math.tan(LETTER_FRAME.fov * Math.PI / 360);
  const fit = Math.max(LETTER_FRAME.height / LETTER_FRAME.fill / (2 * lens), LETTER_FRAME.width / .80 / (2 * lens * aspect));
  const radius = fit * (1 - LETTER_FRAME.push * smoother(clamp((t - LETTER_FRAME.settle) / 9, 0, 1)));
  const cy = finite(waterLevel, .6197133937500414) + .002 + LETTER_FRAME.centre;
  const to = {position: [0, cy, radius], target: [0, cy, 0]};
  shot.position = shot.position.map((v, i) => mix(v, to.position[i], a));
  shot.target = shot.target.map((v, i) => mix(v, to.target[i], a));
  shot.fov = mix(shot.fov, LETTER_FRAME.fov, a);
  // v3b: pull back while the tree bursts so the shell of sparks stays in frame.
  // v3h: sin(pi*x)^.7 had an infinite slope at the end, so the camera rushed
  // in and stopped dead at 20.9 s, just as 火 was being written. The squared
  // sine of a warped x keeps the sharp kick on the hit but lands at rest.
  const pull = Math.sin(Math.PI * clamp((t - LETTER_FRAME.start) / (LETTER_FRAME.settle - LETTER_FRAME.start), 0, 1) ** .6) ** 2;
  // Keep tree sparks and the arriving brush in a closer shared frame. The
  // impulse still lands at exactly the original 20.9 s writing composition.
  shot.position = shot.position.map((v, i) => shot.target[i] + (v - shot.target[i]) * (1 + .45 * pull));
  return shot;
}

export function sampleCamera(time, options = {}) {
  return letterFrame(sampleCameraShifted(time, options), time, Math.max(.3, finite(options.aspect, 16 / 9)), options.waterLevel);
}
function sampleCameraShifted(time, options = {}) {
  const shot = sampleCameraBase(time, options);
  const aspect = Math.max(.3, finite(options.aspect, 16 / 9));
  const narrow = smoother(clamp((1.25 - aspect) / .65, 0, 1));
  const fraction = frameShift(clamp(finite(time, 0), 0, DURATION)) + narrowShift(finite(time, 0)) * narrow;
  if (!fraction) return shot;
  const [px, py, pz] = shot.position, [tx, ty, tz] = shot.target;
  const fx = tx - px, fy = ty - py, fz = tz - pz, distance = Math.hypot(fx, fy, fz) || 1;
  const side = Math.hypot(fx, fz) || 1, rx = -fz / side, rz = fx / side; // screen-right on the ground plane
  const shift = fraction * 2 * distance * Math.tan(shot.fov * Math.PI / 360) * aspect;
  // Moving camera and target to the left slides the picture to the right.
  shot.position = [px - rx * shift, py, pz - rz * shift];
  shot.target = [tx - rx * shift, ty, tz - rz * shift];
  return shot;
}
