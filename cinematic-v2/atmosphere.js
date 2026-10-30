import * as THREE from 'three';
import { rhythmGLSL } from './rhythm-cues.js';

// cinematic-v2b: the space around the tree. A sparse drifting field of silver
// dust and a few embers fills the frame in front of and behind the tree. World space,
// seekable on story/live seconds, no per-frame CPU work beyond uniforms.
const hash = n => { const x = Math.sin(n * 12.9898 + 78.233) * 43758.5453; return x - Math.floor(x); };

const DUST = 2800;
const RIBBON_POINTS = 1400;
// Big beats measured in the score (rhythm-cues): the shared bloom, the third
// phrase downbeat and the final onset.
// v2c: the spiral ribbons were retired at review ("几条线旋转上去不太对");
// the code path stays for reference but no ribbon is built.
export const RIBBON_EVENTS = Object.freeze([]);

const dustVertex = /* glsl */`
uniform float uStory;
uniform float uLive;
uniform float uPixelRatio;
uniform float uMotion;
uniform vec3 uCrown;
${rhythmGLSL}
attribute vec4 aSeed;
attribute float aWarm;
varying float vAlpha;
varying vec3 vColor;
varying float vSoft;
void main(){
 float t=uLive;
 vec3 p=position;
 // Slow rise with a lateral breath; wraps inside a 2.2 m tall column.
 float rise=mod(p.y-uCrown.y+1.1+t*(.035+.05*aSeed.x)*uMotion,2.2)-1.1;
 p.y=uCrown.y+rise;
 p.x+=sin(t*(.21+.2*aSeed.y)+aSeed.z*6.28)*.07*uMotion;
 p.z+=cos(t*(.17+.2*aSeed.x)+aSeed.w*6.28)*.07*uMotion;
 // Released by the shared bloom: a short outward breath from the crown.
 float kick=step(8.93,uStory)*exp(-max(0.,uStory-8.93)/.9)*uMotion;
 p+=normalize(p-uCrown+vec3(.0001))*.22*kick;
 vec4 mv=modelViewMatrix*vec4(p,1.);
 gl_Position=projectionMatrix*mv;
 float dist=max(.15,-mv.z);
 float size=(1.1+2.4*aSeed.y)*1.35/dist;
 gl_PointSize=clamp(size*uPixelRatio*4.,1.2*uPixelRatio,16.*uPixelRatio);
 vSoft=smoothstep(4.,14.,gl_PointSize/uPixelRatio);
 float presence=mix(.22*aWarm,1.,smoothstep(8.9,9.7,uStory));
 float twinkle=.55+.45*sin(t*(1.3+aSeed.z*2.)+aSeed.x*40.);
 float beat=rhythmImpact(uStory,.05+.1*aSeed.w)*.8;
 // Near grains are soft and faint (out of focus); far ones small and crisp.
 vAlpha=presence*(.16+.22*aSeed.w)*twinkle*(1.+beat)*mix(1.,.35,vSoft)*smoothstep(.12,.45,dist);
 vColor=mix(vec3(.82,.88,1.05),vec3(1.25,.62,.26),aWarm);
 if(vAlpha<.003){gl_Position=vec4(2.,2.,2.,1.);gl_PointSize=0.;}
}
`;
const dustFragment = /* glsl */`
varying float vAlpha;
varying vec3 vColor;
varying float vSoft;
void main(){
 float r=length(gl_PointCoord-.5)*2.;
 if(r>=1.)discard;
 float shape=mix(exp(-5.5*r*r),exp(-2.2*r*r)*(1.-r),vSoft);
 gl_FragColor=vec4(vColor,shape*vAlpha);
}
`;

const ribbonVertex = /* glsl */`
uniform float uLive;
uniform float uPixelRatio;
uniform float uMotion;
uniform vec3 uCrown;
attribute float aU;
attribute vec4 aRibbon;   // start time, angle, turns(signed), radius
attribute vec4 aShape;    // height offset, rise, duration, scale
varying float vAlpha;
varying vec3 vColor;
void main(){
 float u=aU;
 float age=(uLive-aRibbon.x)/aShape.z;
 float head=1.-pow(1.-clamp(age,0.,1.2),2.);
 float tail=.32;
 float theta=aRibbon.y+u*aRibbon.z*6.2831853;
 float r=aRibbon.w*(.55+.62*u);
 vec3 p=uCrown+vec3(cos(theta)*r,aShape.x+(u-.5)*aShape.y+sin(u*9.+aRibbon.y)*.05,sin(theta)*r*.8);
 vec4 mv=modelViewMatrix*vec4(p,1.);
 gl_Position=projectionMatrix*mv;
 float lit=smoothstep(head-tail,head,u)*step(u,head);
 float fade=(1.-smoothstep(.75,1.15,age))*step(0.,age);
 float hot=exp(-pow((head-u)*22.,2.));
 vAlpha=(lit*lit*.55+hot*.9)*fade*aShape.w*uMotion;
 gl_PointSize=(1.6+2.6*hot)*uPixelRatio*clamp(1.7/max(.3,-mv.z),.6,1.6);
 vColor=mix(vec3(1.0,1.04,1.15),vec3(1.9,1.35,.7),hot);
 if(vAlpha<.003){gl_Position=vec4(2.,2.,2.,1.);gl_PointSize=0.;}
}
`;
const ribbonFragment = /* glsl */`
varying float vAlpha;
varying vec3 vColor;
void main(){
 float r=length(gl_PointCoord-.5)*2.;
 if(r>=1.)discard;
 gl_FragColor=vec4(vColor,exp(-4.*r*r)*vAlpha);
}
`;

export function createAtmosphere({scene, root, pixelRatio = 1}) {
  // Crown centre in world space (the tree spans ~0–1.3 m above the root).
  const crown = new THREE.Vector3(root.x, root.y + .92, root.z);
  const uniforms = {uStory: {value: 0}, uLive: {value: 0}, uPixelRatio: {value: pixelRatio},
    uMotion: {value: 1}, uCrown: {value: crown}};

  const dustPositions = new Float32Array(DUST * 3), dustSeeds = new Float32Array(DUST * 4), dustWarm = new Float32Array(DUST);
  for (let i = 0; i < DUST; i++) {
    // A wide, shallow-to-deep box around the tree; some grains close to the lens.
    const near = hash(i * 7 + 1) < .18;
    const x = (hash(i * 7 + 2) - .5) * (near ? 2.4 : 4.6);
    const z = near ? .9 + hash(i * 7 + 3) * .9 : (hash(i * 7 + 3) - .5) * 4.2;
    dustPositions.set([crown.x + x, crown.y + (hash(i * 7 + 4) - .5) * 2.2, crown.z + z], i * 3);
    dustSeeds.set([hash(i * 7 + 5), hash(i * 7 + 6), hash(i * 7 + 8), hash(i * 7 + 9)], i * 4);
    dustWarm[i] = hash(i * 7 + 10) < .28 ? 1 : 0;
  }
  const dustGeometry = new THREE.BufferGeometry();
  dustGeometry.setAttribute('position', new THREE.BufferAttribute(dustPositions, 3));
  dustGeometry.setAttribute('aSeed', new THREE.BufferAttribute(dustSeeds, 4));
  dustGeometry.setAttribute('aWarm', new THREE.BufferAttribute(dustWarm, 1));
  const material = (vertexShader, fragmentShader) => new THREE.ShaderMaterial({uniforms, vertexShader, fragmentShader,
    transparent: true, depthWrite: false, depthTest: true, blending: THREE.AdditiveBlending});
  const dust = new THREE.Points(dustGeometry, material(dustVertex, dustFragment));
  dust.name = 'atmosphere-dust';

  const ribbons = [];
  RIBBON_EVENTS.forEach((event, e) => {
    for (let k = 0; k < event.count; k++) ribbons.push({event, e, k});
  });
  const n = ribbons.length * RIBBON_POINTS;
  const us = new Float32Array(n), ribbonData = new Float32Array(n * 4), shapeData = new Float32Array(n * 4);
  ribbons.forEach(({event, e, k}, r) => {
    const s = e * 101 + k * 13;
    const start = event.time + k * .045 + hash(s) * .05;
    const angle = hash(s + 1) * 6.283, turns = (1.05 + .55 * hash(s + 2)) * (hash(s + 3) < .5 ? -1 : 1);
    const radius = (.85 + .45 * hash(s + 4)) * (.85 + .15 * event.scale);
    const height = (hash(s + 5) - .45) * .55, rise = (.6 + .7 * hash(s + 6)) * (hash(s + 7) < .7 ? 1 : -1);
    const duration = 1.5 + .7 * hash(s + 8);
    for (let j = 0; j < RIBBON_POINTS; j++) {
      const i = r * RIBBON_POINTS + j;
      us[i] = j / (RIBBON_POINTS - 1);
      ribbonData.set([start, angle, turns, radius], i * 4);
      shapeData.set([height, rise, duration, event.scale], i * 4);
    }
  });
  const ribbonGeometry = new THREE.BufferGeometry();
  ribbonGeometry.setAttribute('position', new THREE.BufferAttribute(new Float32Array(n * 3), 3));
  ribbonGeometry.setAttribute('aU', new THREE.BufferAttribute(us, 1));
  ribbonGeometry.setAttribute('aRibbon', new THREE.BufferAttribute(ribbonData, 4));
  ribbonGeometry.setAttribute('aShape', new THREE.BufferAttribute(shapeData, 4));
  const ribbonPoints = new THREE.Points(ribbonGeometry, material(ribbonVertex, ribbonFragment));
  ribbonPoints.name = 'atmosphere-light-ribbons';

  const group = new THREE.Group();
  group.name = 'cinematic-atmosphere';
  group.add(dust);
  if (n) group.add(ribbonPoints);
  group.traverse(object => { object.frustumCulled = false; object.renderOrder = 8; });
  scene.add(group);
  const ribbonWindows = RIBBON_EVENTS.map(event => [event.time - .05, event.time + 3]);
  function update({time = 0, liveTime = time, motion = true, pixelRatio: ratio} = {}) {
    uniforms.uStory.value = time; uniforms.uLive.value = Math.max(time, liveTime);
    uniforms.uMotion.value = motion ? 1 : 0;
    if (Number.isFinite(ratio)) uniforms.uPixelRatio.value = ratio;
    const live = uniforms.uLive.value;
    ribbonPoints.visible = n > 0 && motion && ribbonWindows.some(([a, b]) => live >= a && live <= b);
    dust.visible = true;
    return {ribbons: ribbonPoints.visible};
  }
  return {group, update, dispose() {
    scene.remove(group); dustGeometry.dispose(); ribbonGeometry.dispose();
    dust.material.dispose(); ribbonPoints.material.dispose();
  }};
}
