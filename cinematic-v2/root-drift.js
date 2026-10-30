import * as THREE from 'three';
import { TIMELINE } from './fire-timeline.js';

// cinematic-v2n: root dust. Fine rose-gold grains keep leaving the roots, run
// a little further along them and are carried off sideways by a slow wind,
// like sand blown off a dune; a few large soft out-of-focus motes drift with
// them. Seekable on live seconds, analytic in the shader, no CPU per frame.
const GRAINS = 3800, MOTES = 46;
const hash = n => { const x = Math.sin(n * 12.9898 + 78.233) * 43758.5453; return x - Math.floor(x); };

const vertex = /* glsl */`
uniform float uLive;
uniform float uStory;
uniform float uMotion;
uniform float uPixelRatio;
uniform float uAlignmentDistance;
uniform vec2 uAlignmentOffset;
attribute vec3 aDir;
attribute vec4 aSeed;
attribute vec4 aInfo; // reveal (story s), period (s), kind (0 grain, 1 mote), along-root u
varying float vAlpha;
varying vec3 vColor;
varying float vSoft;
vec3 registered(vec3 p){
 p.xy=(p.xy+uAlignmentOffset)*(1.-p.z/uAlignmentDistance)-uAlignmentOffset;
 return p;
}
void main(){
 float mote=aInfo.z;
 float phase=uMotion>.5?fract(uLive/aInfo.y+aSeed.x):aSeed.x;
 // Along the root first, then lifted off by the wind toward screen right.
 vec3 drift=aDir*(.08+.16*aSeed.y)*phase;
 vec3 wind=vec3(.62,-.10,.18)*(.20+.45*aSeed.z)*pow(phase,1.45)*(1.+.8*mote);
 vec3 swirl=vec3(sin(phase*6.3+aSeed.w*21.),.5*cos(phase*5.1+aSeed.x*13.),sin(phase*4.4+aSeed.y*17.))*(.025+.03*mote)*phase;
 vec3 p=position+drift+wind+swirl;
 vec4 mv=modelViewMatrix*vec4(registered(p),1.);
 gl_Position=projectionMatrix*mv;
 float dist=max(.12,-mv.z);
 float base=mix(1.15+1.6*aSeed.w,9.+12.*aSeed.w,mote);
 gl_PointSize=clamp(base*1.25/dist,mix(1.,5.,mote),mix(5.,46.,mote))*uPixelRatio;
 // Appears once its root has grown; each grain fades in and out on its loop.
 float presence=smoothstep(aInfo.x+.4,aInfo.x+1.6,max(uStory,uLive));
 float life=pow(sin(3.14159265*phase),1.3);
 float twinkle=.65+.35*sin(uLive*(2.+3.*aSeed.y)+aSeed.z*40.);
 vAlpha=presence*life*mix((.38+.50*aSeed.y)*twinkle,.030+.035*aSeed.y,mote);
 float silver=step(.88,aSeed.z)*(1.-mote);
 vColor=mix(mix(vec3(1.25,.86,.64),vec3(1.05,.80,.66),mote),vec3(1.15,1.2,1.3),silver);
 vSoft=mote;
 if(vAlpha<.002){gl_Position=vec4(2.,2.,2.,1.);gl_PointSize=0.;}
}
`;
const fragment = /* glsl */`
varying float vAlpha;
varying vec3 vColor;
varying float vSoft;
void main(){
 float r=length(gl_PointCoord-.5)*2.;
 if(r>=1.)discard;
 float shape=mix(exp(-5.*r*r),(exp(-1.6*r*r)-.2)*(1.-smoothstep(.75,1.,r)),vSoft);
 gl_FragColor=vec4(vColor,max(0.,shape)*vAlpha);
}
`;

/** strands: [{points:[[x,y,z]...], radius, endRadius, terminal, reveal, span}] in source-local space. */
export function createRootDrift({content, strands, uniforms}) {
  const usable = (strands || []).filter(s => s.points?.length > 2);
  const count = usable.length ? GRAINS + MOTES : 0;
  const positions = new Float32Array(count * 3), dirs = new Float32Array(count * 3);
  const seeds = new Float32Array(count * 4), info = new Float32Array(count * 4);
  if (count) {
    const weights = usable.map(s => {
      let length = 0; for (let k = 1; k < s.points.length; k++) length += Math.hypot(...[0, 1, 2].map(a => s.points[k][a] - s.points[k - 1][a]));
      return length * (s.terminal ? 1.7 : .55);
    });
    const total = weights.reduce((a, b) => a + b, 0);
    for (let i = 0; i < count; i++) {
      const mote = i >= GRAINS;
      let pick = hash(i * 3 + 1) * total, k = 0;
      while (k < usable.length - 1 && pick > weights[k]) pick -= weights[k++];
      const s = usable[k], last = s.points.length - 1;
      // Mostly from the outer half of each root, where it frays.
      const u = mote ? .35 + .65 * hash(i * 3 + 2) : Math.pow(hash(i * 3 + 2), .55);
      const x = u * last, j = Math.min(last - 1, Math.floor(x)), f = x - j;
      const a = s.points[j], b = s.points[j + 1];
      const q = [0, 1, 2].map(c => a[c] + (b[c] - a[c]) * f);
      const t = [0, 1, 2].map(c => b[c] - a[c]), tl = Math.hypot(...t) || 1;
      const radius = (s.radius + (s.endRadius - s.radius) * u) * (1.2 + (mote ? 2.5 : .6) * hash(i * 3 + 3)) + (mote ? .18 + .35 * hash(i * 7 + 5) : 0);
      const angle = hash(i * 5 + 4) * Math.PI * 2;
      positions.set([q[0] + Math.cos(angle) * radius, q[1] + Math.sin(angle) * radius * .7, q[2] + Math.sin(angle) * radius], i * 3);
      dirs.set(t.map(v => v / tl), i * 3);
      seeds.set([hash(i * 11 + 1), hash(i * 11 + 2), hash(i * 11 + 3), hash(i * 11 + 4)], i * 4);
      const reveal = TIMELINE.growStart + (s.reveal + (s.span || 0) * u) * TIMELINE.growSpan;
      info.set([reveal, mote ? 7 + 5 * hash(i * 13 + 1) : 3.2 + 3.3 * hash(i * 13 + 1), mote ? 1 : 0, u], i * 4);
    }
  }
  const geometry = new THREE.BufferGeometry();
  geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
  geometry.setAttribute('aDir', new THREE.BufferAttribute(dirs, 3));
  geometry.setAttribute('aSeed', new THREE.BufferAttribute(seeds, 4));
  geometry.setAttribute('aInfo', new THREE.BufferAttribute(info, 4));
  const own = {uLive: {value: 0}, uStory: {value: 0}, uMotion: {value: 1}, uPixelRatio: {value: 1},
    uAlignmentDistance: uniforms.uAlignmentDistance, uAlignmentOffset: uniforms.uAlignmentOffset};
  const material = new THREE.ShaderMaterial({uniforms: own, vertexShader: vertex, fragmentShader: fragment,
    transparent: true, depthWrite: false, depthTest: true, blending: THREE.AdditiveBlending});
  const points = new THREE.Points(geometry, material);
  points.name = 'root-drift'; points.frustumCulled = false; points.renderOrder = 6; points.visible = count > 0;
  points.userData.directOnly = true;
  content.add(points);
  return {
    points,
    update({story = 0, live = story, motion = true, pixelRatio = 1} = {}) {
      own.uStory.value = story; own.uLive.value = Math.max(story, live);
      own.uMotion.value = motion ? 1 : 0; own.uPixelRatio.value = pixelRatio;
    },
    dispose() { content.remove(points); geometry.dispose(); material.dispose(); },
  };
}
