// v3a: the grown tree gathers into the vertical brush lettering 火树银花.
//
// The lettering is a density map (one channel per character, RGBA = 火 树 银 花)
// rendered offline from the chosen cursive design. Branch grains write the
// gold 火树, crown grains write the silver 银花; every other grain fades out.
// v3e motion: after the burst the sparks hang in the air; each character is
// then written by an invisible brush tip that
// travels its stroke path (lettering-strokes.js) in writing order, pulling the
// streaming grains in behind it like a comet so the stroke lights up as it goes.
// Each chosen grain is packed into aLetter:
//   x, y  target offset from the lettering centre, in content units, laid out
//         on the camera's own right/up axes (the column always faces the lens)
//   z     kind*100 + character*10 + 9.99*s, s = place along the brush path
//   w     1 = in the lettering, -1 = falls away as an ember
// Sources and targets are matched in bands from top to bottom and left to
// right, so neighbouring grains fly to neighbouring places as coherent streams.
import densityUrl from './lettering-d-density.png';
import { STROKES } from './lettering-strokes.js';
import * as THREE from 'three';

export const LETTER = Object.freeze({
  start: 18.55,          // the loudest low onset of the score
  // v3h: each character starts on a measured low onset of the score and the
  // last one ends on the 25.73 s phrase beat (was four equal 1.3 s slots).
  // 火 starts on the strong 19.75 s onset (was 20.40) so the screen is not
  // left nearly black for ~2.5 s after the burst while the score stays loud.
  write: [19.75, 21.85, 23.05, 24.53, 25.73],
  height: 6.4,           // column height, content units
  lift: 3.3,             // column centre above the water-root, content units
  gold: 64000, silver: 64000,
  // Grains that keep leaving the finished characters as each one's own image:
  // 火 flames, 树 sprouting twigs, 银 silver rain, 花 opening blossoms.
  aura: [10000, 6000, 10000, 11000], blossoms: 12, sprouts: 18,
});
const STROKE_N = STROKES[0][0].length;

/** Stroke paths as a 256 x 4 float texture (x, y per sample; one row per character). */
export function createStrokeTexture() {
  const data = new Float32Array(STROKE_N * 4 * 4);
  STROKES.forEach(([xs, ys], c) => xs.forEach((x, i) => { const o = (c * STROKE_N + i) * 4; data[o] = x; data[o + 1] = ys[i]; }));
  const texture = new THREE.DataTexture(data, STROKE_N, 4, THREE.RGBAFormat, THREE.FloatType);
  texture.minFilter = texture.magFilter = THREE.NearestFilter; texture.needsUpdate = true;
  return texture;
}
/** Place (0..1) of the nearest brush-path sample to a lettering point. */
function pathPlace(c, x, y) {
  const [xs, ys] = STROKES[c]; let best = Infinity, k = 0;
  for (let i = 0; i < STROKE_N; i++) { const d = (xs[i] - x) ** 2 + (ys[i] - y) ** 2; if (d < best) { best = d; k = i; } }
  return k / (STROKE_N - 1);
}

function hash(n) { const x = Math.sin(n * 127.1 + 311.7) * 43758.5453123; return x - Math.floor(x); }

async function readDensity() {
  const image = new Image(); image.src = densityUrl; await image.decode();
  const canvas = document.createElement('canvas'); canvas.width = image.naturalWidth; canvas.height = image.naturalHeight;
  const ctx = canvas.getContext('2d', {willReadFrequently: true}); ctx.drawImage(image, 0, 0);
  const raw = ctx.getImageData(0, 0, canvas.width, canvas.height).data;
  // Left half RGB = 火 树 银, right half R = 花, G = aura spawn band (outline + flung dots).
  // No alpha: the canvas would premultiply it away.
  const w = canvas.width / 2, h = canvas.height, data = new Uint8ClampedArray(w * h * 4), aura = new Uint8Array(w * h);
  for (let y = 0; y < h; y++) for (let x = 0; x < w; x++) {
    const a = (y * canvas.width + x) * 4, b = (y * canvas.width + x + w) * 4, o = (y * w + x) * 4;
    data[o] = raw[a]; data[o + 1] = raw[a + 1]; data[o + 2] = raw[a + 2]; data[o + 3] = raw[b];
    aura[y * w + x] = raw[b + 1];
  }
  return {w, h, data, aura};
}

/** count target points for one or more channels, drawn proportionally to density. */
function sampleTargets({w, h, data, aura}, channels, count, seed, onAura = false) {
  const cdf = [], cells = [];
  let sum = 0;
  for (let y = 0; y < h; y++) for (let x = 0; x < w; x++) for (const c of channels) {
    let v = data[(y * w + x) * 4 + c];
    // v3f: the flung ink dots (aura 255) are left out entirely so the strokes
    // stand clean; images spawn from the stroke outline band (aura ~140) only.
    const band = aura[y * w + x];
    if (band > 200) continue;
    if (onAura) v = v > 2 ? band : 0;
    if (v < 3) continue;
    sum += v; cdf.push(sum); cells.push(x, y, c);
  }
  const out = new Float32Array(count * 3);
  for (let i = 0; i < count; i++) {
    const r = hash(seed + i * 1.618) * sum;
    let lo = 0, hi = cdf.length - 1;
    while (lo < hi) { const mid = (lo + hi) >> 1; if (cdf[mid] < r) lo = mid + 1; else hi = mid; }
    const x = cells[lo * 3] + hash(seed + i * 2.71), y = cells[lo * 3 + 1] + hash(seed + i * 3.14);
    out[i * 3] = (x - w / 2) / h * LETTER.height;
    out[i * 3 + 1] = (h / 2 - y) / h * LETTER.height;
    out[i * 3 + 2] = cells[lo * 3 + 2];
  }
  return out;
}

/** Match sources to targets band by band (top to bottom), each band left to right. */
function matchCoherent(srcXY, tgt, bands = 48) {
  const n = srcXY.length / 2;
  const order = (get, m) => {
    const byY = Array.from({length: m}, (_, i) => i).sort((a, b) => get(b, 1) - get(a, 1));
    const out = [];
    for (let k = 0; k < bands; k++) {
      const band = byY.slice(Math.floor(k * m / bands), Math.floor((k + 1) * m / bands));
      band.sort((a, b) => get(a, 0) - get(b, 0)); out.push(...band);
    }
    return out;
  };
  const s = order((i, a) => srcXY[i * 2 + a], n), t = order((i, a) => tgt[i * 3 + a], n);
  const pair = new Int32Array(n);
  for (let k = 0; k < n; k++) pair[s[k]] = t[k];
  return pair;
}

export async function createLetterAttribute(cloud, retainedCount, register) {
  const density = await readDensity();
  const letter = new Float32Array(cloud.count * 4);
  for (let i = 0; i < cloud.count; i++) letter[i * 4 + 3] = -1;
  const {growth, positions, energies} = cloud;
  const used = new Uint8Array(cloud.count);
  const pick = (test, want, salt) => {
    const pool = [];
    for (let i = 0; i < retainedCount; i++) if (!used[i] && test(i) && energies[i] > .12) pool.push(i);
    // A hashed order keeps the whole tree represented.
    pool.sort((a, b) => hash(a * .37 + salt) - hash(b * .37 + salt));
    const out = pool.slice(0, Math.min(want, pool.length)); out.forEach(i => used[i] = 1); return out;
  };
  const branch = i => growth[i * 3 + 1] > .5, crown = i => growth[i * 3 + 1] <= .5, any = () => true;
  const groups = [
    {chosen: pick(branch, LETTER.gold, 11), channels: [0, 1], seed: 101, kind: 0},
    {chosen: pick(crown, LETTER.silver, 23), channels: [2, 3], seed: 202, kind: 0},
  ];
  LETTER.aura.forEach((n, c) => groups.push({chosen: pick(c < 2 ? branch : any, n, 31 + c), channels: [c], seed: 303 + c * 101, kind: 1 + c, aura: true}));
  const p = [0, 0, 0];
  for (const {chosen, channels, seed, kind, aura} of groups) {
    const n = chosen.length; if (!n) continue;
    let targets = sampleTargets(density, channels, n, seed, aura);
    if (kind === 2 || kind === 4) {
      // Twigs (树) and blossoms (花) grow from a few shared points on the outline.
      const m = kind === 2 ? LETTER.sprouts : LETTER.blossoms;
      const centres = sampleTargets(density, channels, m, seed + 7, true);
      targets = new Float32Array(n * 3);
      for (let k = 0; k < n; k++) targets.set(centres.subarray((k % m) * 3, (k % m) * 3 + 3), k * 3);
    }
    const src = new Float32Array(n * 2);
    chosen.forEach((i, k) => { register(positions, i, p); src[k * 2] = p[0]; src[k * 2 + 1] = p[1]; });
    const pair = matchCoherent(src, targets);
    chosen.forEach((i, k) => {
      const t = pair[k], c = targets[t * 3 + 2], x = targets[t * 3], y = targets[t * 3 + 1];
      const place = Math.min(.999, pathPlace(c, x, y));
      letter.set([x, y, 100 * kind + 10 * c + 9.99 * place, 1], i * 4);
    });
  }
  return letter;
}

export const letterGLSL = /* glsl */`
attribute vec4 aLetter;
uniform vec3 uLetterCenter;
uniform vec3 uBurstCenter;
uniform sampler2D uStrokes;
const float LETTER_START=${LETTER.start.toFixed(3)};
const float WRITE_START=${LETTER.write[0].toFixed(3)};
const float WRITE_END=${LETTER.write[4].toFixed(3)};
float charStart(float c){return c<.5?${LETTER.write[0].toFixed(3)}:c<1.5?${LETTER.write[1].toFixed(3)}:c<2.5?${LETTER.write[2].toFixed(3)}:${LETTER.write[3].toFixed(3)};}
float charSlot(float c){return c<.5?${(LETTER.write[1]-LETTER.write[0]).toFixed(3)}:c<1.5?${(LETTER.write[2]-LETTER.write[1]).toFixed(3)}:c<2.5?${(LETTER.write[3]-LETTER.write[2]).toFixed(3)}:${(LETTER.write[4]-LETTER.write[3]).toFixed(3)};}
const float STROKE_N=${STROKE_N}.;
vec2 strokeAt(float c,float s){
 float f=clamp(s,0.,1.)*(STROKE_N-1.),i=floor(f);
 vec2 a=texture2D(uStrokes,vec2((i+.5)/STROKE_N,(c+.5)/4.)).xy;
 vec2 b=texture2D(uStrokes,vec2((min(i+1.,STROKE_N-1.)+.5)/STROKE_N,(c+.5)/4.)).xy;
 return mix(a,b,f-i);
}
float letterEase(float x){x=clamp(x,0.,1.);return x*x*x*(x*(x*6.-15.)+10.);}
float letterHash(vec2 q){return fract(sin(dot(q,vec2(127.1,311.7)))*43758.5453);}
// Column axes in content space: the rows of the model-view rotation.
vec3 letterRight(){return normalize(vec3(modelViewMatrix[0][0],modelViewMatrix[1][0],modelViewMatrix[2][0]));}
vec3 letterUp(){return normalize(vec3(modelViewMatrix[0][1],modelViewMatrix[1][1],modelViewMatrix[2][1]));}
vec3 letterToward(){return normalize(vec3(modelViewMatrix[0][2],modelViewMatrix[1][2],modelViewMatrix[2][2]));}
`;

// After the tree position p is final. The whole tree bursts on the beat; the
// chosen grains hang, then are drawn into the characters; the rest fall away
// as embers. Aura grains (kind 1-4) then keep leaving the outline as images.
export const letterMoveGLSL = /* glsl */`
 float letterK=0.,letterGone=0.,letterBurst=0.,auraEnv=1.,auraPhase=0.,brushHead=0.,silk=0.,gatherFlight=0.,callLight=1.;
 float letterKind=floor(aLetter.z/100.),letterChar=floor(mod(aLetter.z,100.)/10.),letterPlace=mod(aLetter.z,10.)/9.99;
 // The brush reaches this grain's place on its character's path here:
 float letterArrive=charStart(letterChar)+charSlot(letterChar)*.95*letterPlace;
 if(uStoryTime>LETTER_START){
  float tb=uStoryTime-LETTER_START;
  letterBurst=exp(-tb/.2);
  vec3 dir=normalize(p-uBurstCenter+(aSeed-.5)*.7);
  float reach=(1.6+2.6*aSeed.x)*(.8+.4*aSeed.y);
  float drift=.18*tb;
  vec3 R=letterRight(),U=letterUp(),F=letterToward();
  if(aLetter.w>-.5){
   // Burst, then silk: the blast decays into the flow field.
   // v3e: no silk threads. The burst keeps opening slowly and the sparks
   // float in place (a little sway) until the brush tip calls them in.
   // Keep the writing pool near its source boughs during the hovering beat.
   // The unselected falling embers keep their paths.
   vec3 E=p+dir*(reach*.72*(1.-exp(-tb/.22))+.065*tb);
   E+=(R*sin(tb*.9+aSeed.z*20.)+U*cos(tb*.7+aSeed.x*17.))*.12*smoothstep(.3,1.5,tb);
   // Waiting sparks sink slowly, like the last stars of a firework.
   float sink=max(0.,tb-.8);
   E-=U*(.22+.12*aSeed.y)*sink*(1.-.04*sink);
   vec3 silkPos=E;
   silk=smoothstep(.3,1.2,tb);
   vec3 target=uLetterCenter+R*aLetter.x+U*aLetter.y+F*(aSeed.z-.5)*.22;
   // The brush tip: grains join it during the last moments before it passes
   // their place, so a bright head runs along the stroke with a tail of
   // settled grains behind it.
   float lead=1.05+.30*aSeed.y;
   // Allow a short anticipatory flight without starting the next character's
   // whole plume while the previous character is still being written.
   float gatherStart=max(charStart(letterChar)-.55,letterArrive-lead);
   float tipPlace=clamp((uStoryTime-charStart(letterChar))/(charSlot(letterChar)*.95),0.,1.);
   vec2 own=strokeAt(letterChar,letterPlace),tip=strokeAt(letterChar,min(tipPlace,letterPlace));
   float tipSpread=smoothstep(-.35,0.,uStoryTime-letterArrive);
   vec2 tipAt=tip+(aLetter.xy-own)*tipSpread;
   vec3 atTip=uLetterCenter+R*tipAt.x+U*tipAt.y+F*(aSeed.z-.5)*.22;
   float travel=clamp((uStoryTime-gatherStart)/max(.01,letterArrive-gatherStart),0.,1.);
   float a=travel*travel*(3.-2.*travel);
   callLight=smoothstep(charStart(letterChar)-.18,charStart(letterChar)+.08,uStoryTime);
   gatherFlight=smoothstep(.03,.35,a)*(1.-smoothstep(.82,1.,a))*callLight;
   // Swing in from the side the grain is streaming on, not straight across.
   vec3 swing=(R*(aSeed.x-.5)+U*(aSeed.y-.3))*.35*sin(3.1416*a);
   p=uStoryTime<letterArrive?mix(silkPos,atTip,a)+swing*(1.-a):target;
   letterK=1.;
   // v3h: ease the last tenth in over .25 s so each grain no longer steps
   // from its flying to its written brightness in a single frame.
   letterGone=uStoryTime<letterArrive?a*.9:.9+.1*smoothstep(0.,.25,uStoryTime-letterArrive);
   brushHead=smoothstep(letterArrive-.25,letterArrive,uStoryTime)*exp(-max(0.,uStoryTime-letterArrive)/.22);
   if(uStoryTime>=letterArrive){
    if(letterKind>.5){
     // Image loop, faded in after the character is written.
     // v3e: images start only once all four characters are written.
     float on=smoothstep(WRITE_END+.15,WRITE_END+1.5,uStoryTime);
     float c=letterKind-1.;
     vec2 cell=floor(aLetter.xy*2.5);
     float period=c>2.5?3.4+1.2*letterHash(aLetter.xy):2.2+1.6*aSeed.y;
     float seedPhase=c>2.5?letterHash(aLetter.xy+3.1):aSeed.x;
     float ph=fract((uStoryTime-letterArrive)/period+seedPhase);
     vec3 off=vec3(0.);
     if(c<.5){            // 火: flame tongues licking upward
      float tongue=letterHash(cell);
      float h=ph*(1.0+.8*letterHash(cell+.3));
      float sway=sin(ph*5.+tongue*30.-uStoryTime*3.1)*.16*ph;
      off=U*h+R*(sway+(aSeed.z-.5)*.30*(1.-ph)*ph);
      auraEnv=smoothstep(0.,.05,ph)*pow(1.-ph,1.2);
     }else if(c<1.5){     // 树: twigs sprouting from the strokes, forking once
      // One stem per sprout point, forking twice; grains stream out along it.
      float a0=(letterHash(aLetter.xy)-.5)*2.6;
      float L=.38+.32*letterHash(aLetter.xy+1.7);
      float s1=step(.5,aSeed.y)*2.-1.,s2=step(.5,fract(aSeed.y*7.))*2.-1.;
      float f1=.38+.1*letterHash(aLetter.xy+2.3),f2=.68;
      vec2 d0=vec2(sin(a0),cos(a0)),d1=vec2(sin(a0+s1*.62),cos(a0+s1*.62)),d2=vec2(sin(a0+s1*.62+s2*.55),cos(a0+s1*.62+s2*.55));
      vec2 q=d0*min(ph,f1)+d1*clamp(ph-f1,0.,f2-f1)+d2*max(ph-f2,0.);
      q*=L*1.5; q.y+=ph*ph*.12;
      off=R*q.x+U*q.y+R*(aSeed.z-.5)*.012;
      auraEnv=smoothstep(0.,.06,ph)*(1.-smoothstep(.8,1.,ph));
     }else if(c<2.5){     // 银: silver rain falling from the strokes
      off=-U*ph*(1.3+1.1*aSeed.y)+R*(sin(uStoryTime*.9+aSeed.z*20.)*.04*ph-.12*ph);
      auraEnv=smoothstep(0.,.04,ph)*(1.-ph*ph);
     }else{               // 花: five-petal blossoms opening and drifting away
      float spin=letterHash(aLetter.xy+5.)*6.283+ph*.8;
      float open=smoothstep(0.,.22,ph);
      float S=(.30+.16*letterHash(aLetter.xy+9.))*open;
      // Five petal outlines (ellipses around the heart) plus a few heart grains.
      float k=floor(aSeed.x*5.),psi=fract(aSeed.x*5.)*6.283;
      float al=spin+k*1.2566;
      vec2 pe=vec2(.52+.48*cos(psi),.30*sin(psi))*S;
      vec2 q=vec2(cos(al)*pe.x-sin(al)*pe.y,sin(al)*pe.x+cos(al)*pe.y);
      if(aSeed.y>.9)q=vec2(cos(aSeed.z*6.283),sin(aSeed.z*6.283))*S*.14*fract(aSeed.y*9.);
      vec2 away=vec2((aLetter.x>0.?1.:-1.)*(.5+.6*letterHash(aLetter.xy+2.)),.3+.5*letterHash(aLetter.xy+4.));
      off=R*(q.x+away.x*ph*.9)+U*(q.y+away.y*ph*.8);
      auraEnv=smoothstep(0.,.08,ph)*(1.-smoothstep(.72,1.,ph));
     }
     p+=off*on;auraEnv=mix(1.,auraEnv,on);auraPhase=ph*on;
    }
   }
  }else{
   // Not in the lettering: thrown out with the burst, then falling embers.
   vec3 E=p+dir*(reach*(1.-exp(-tb/.22))+drift);
   E-=U*.55*tb*tb;
   p=E;
   // The fallout now fades over ~3 s, so the burst rains down and out of the
   // frame (gravity carries it) instead of vanishing into black.
   letterGone=smoothstep(.6,3.2,tb);
   // Fallen grains stay retired; the closing image belongs to the lettering.
  }
 }
`;

// At the very end, before the final visibility gate.
export const letterLookGLSL = /* glsl */`
 if(uStoryTime>LETTER_START){
  // v3h: the tree's burst stays below the 8.93 s bloom, the piece's main hit.
 float flash=1.+.35*letterBurst;
  if(aLetter.w>-.5){
   float landedL=smoothstep(.92,1.,letterGone);
   vec3 gold=vec3(1.30,.56,.17)*(.45+.65*aSeed.y);
   vec3 silver=vec3(.86,.93,1.12)*(.55+.75*aSeed.y);
   vec3 ink=aGrowth.y>.5?gold:silver;
   float c=letterKind-1.;
   if(letterKind>.5){
    if(c<.5)ink=mix(vec3(1.7,1.0,.35),vec3(1.4,.20,.04),smoothstep(0.,.7,auraPhase))*(.6+.5*aSeed.y);
    else if(c<1.5)ink=mix(vec3(1.3,.70,.22),vec3(1.05,.95,.45),auraPhase)*(.55+.5*aSeed.y);
    else if(c<2.5)ink=vec3(.95,1.05,1.40)*(.75+.7*aSeed.y)*(1.+2.2*step(.93,fract(aSeed.z*17.))*(.5+.5*sin(uLiveTime*7.+aSeed.x*50.)));
    else ink=mix(vec3(1.5,1.35,1.5),vec3(1.6,.95,1.2),smoothstep(0.,.5,auraPhase))*(.7+.5*aSeed.y);
   }
   float glint=step(.985,aSeed.x)*(.6+.4*sin(uLiveTime*3.+aSeed.z*40.));
   vec3 flying=ink*mix(1.5,mix(.7,1.2,clamp(letterGone/.9,0.,1.)),silk);
   vColor=mix(vColor*flash,mix(flying,ink*(1.+1.4*glint),landedL),smoothstep(0.,1.2,uStoryTime-LETTER_START));
   // v3h: the closing flash is back, on the written grains only (v3f had
   // none); uFlare peaks on the score's last hit and leaves an afterglow.
   // The flash is now the only closing mark (the ghost tree was removed), so
   // it lifts the written grains further (+20 % frame brightness was too shy).
   vColor*=mix(1.,1.4,landedL)*(1.+2.4*uFlare*landedL);
   vColor*=1.+2.4*brushHead;
   // On the 28.13 s hit a band of light runs down the written column (top to
   // bottom in about a second), so the held lettering answers the beat.
   float sweepFront=3.7-7.8*smoothstep(28.08,29.05,uStoryTime);
   float sweep=exp(-pow((aLetter.y-sweepFront)/.75,2.))*smoothstep(28.06,28.14,uStoryTime)*(1.-smoothstep(28.95,29.3,uStoryTime));
   vColor*=1.+2.2*sweep*landedL;
   // The current incoming grains lead the eye; this is zero after arrival.
   vColor*=1.+.65*gatherFlight;
   float auraOn=step(.5,letterKind)*step(.001,auraPhase);
   // Waiting sparks dim right down; they brighten again as the brush calls them.
   float called=clamp(letterGone/.9,0.,1.);
   // Sparse hovering sparks retain the source, without a bright cloud behind
   // the writing. The active plume returns to the original .62 on landing.
   float waitingAlpha=mix(.035,.12,step(.96,aSeed.x));
   float calledLight=smoothstep(.04,.65,called)*callLight;
   float airAlpha=mix(.70,mix(waitingAlpha,.62,calledLight)+.16*gatherFlight,silk);
   vAlpha=mix(vAlpha,mix(airAlpha,.62,landedL)*mix(1.,1.35,auraOn)*uDensityScale,letterK)*auraEnv;
   gl_PointSize=mix(gl_PointSize,(1.15+1.1*aSeed.y+1.4*glint)*mix(1.,1.3,auraOn)*uPixelRatio,letterK)*(1.+.22*letterBurst);
   float waitingSize=mix(.60,.86,step(.96,aSeed.x));
   gl_PointSize*=mix(1.,mix(waitingSize,1.,smoothstep(.03,.55,called)),silk);
  }else{
   vColor*=flash;
   vColor=mix(vColor,vColor*vec3(1.3,.75,.4),smoothstep(.3,1.2,uStoryTime-LETTER_START));
   vAlpha*=1.-letterGone;
   gl_PointSize*=1.+.22*letterBurst;
  }
 }
`;
