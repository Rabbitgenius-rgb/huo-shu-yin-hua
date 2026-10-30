import * as THREE from 'three';
import { BRANCH_GROWTH } from './fire-image-depth.js';
import { VOLUME_PATHS, belowWater, waterDepth } from './fire-tree-volume.js';
import { timelineGLSL } from './fire-timeline.js';

const SOURCE_WIDTH=1456, SOURCE_HEIGHT=816, PIXEL_WORLD=12.2/SOURCE_WIDTH;
const TAU=Math.PI*2;

// The fibers are surface detail inside the existing branches. Their narrow
// screen-space ribbons are deliberately broken up, never opaque branch tubes.
// silver-bloom: each fiber now draws itself along the growth front (a gold
// head travelling from the trunk base to the tips, in step with the landing
// embers), and after assembly faint pulses keep flowing upward into the crown.
const ribbonVertex=/* glsl */`
uniform float uTime;
uniform float uLiveTime;
uniform float uMotion;
uniform float uAlignmentDistance;
uniform vec2 uAlignmentOffset;
uniform vec2 uResolution;
uniform float uDensityScale;
${timelineGLSL}
attribute vec3 aTangent;
attribute float aSide;
attribute float aAlong;
attribute float aSeed;
attribute float aWidth;
attribute float aGrowth;
varying float vAcross;
varying float vAlong;
varying float vSeed;
varying float vAlpha;
varying float vHead;
varying vec3 vColor;
vec3 registered(vec3 p){
 p.xy=(p.xy+uAlignmentOffset)*(1.-p.z/uAlignmentDistance)-uAlignmentOffset;
 return p;
}
void main(){
 vec4 center=projectionMatrix*modelViewMatrix*vec4(registered(position),1.);
 vec4 next=projectionMatrix*modelViewMatrix*vec4(registered(position+aTangent),1.);
 vec2 direction=(next.xy/max(next.w,.001)-center.xy/max(center.w,.001))*uResolution;
 vec2 normal=normalize(vec2(-direction.y,direction.x)+vec2(.00001));
 float reveal=GROW_START+aGrowth*GROW_SPAN+.35;
 float drawn=smoothstep(reveal-.06,reveal+.32,uTime);
 float head=exp(-pow((uTime-reveal)*3.3,2.));
 // A subpixel luminous core remains fine even when the tree is zoomed in;
 // only the travelling head is a touch wider.
 center.xy+=normal*aSide*aWidth*(1.+head*.7)*2./uResolution*center.w;
 gl_Position=center;
 float taper=smoothstep(0.,.07,aAlong)*(1.-smoothstep(.85,1.,aAlong));
 float settled=smoothstep(10.4,12.,uTime);
 float pulse=pow(max(0.,sin(uLiveTime*1.1-aGrowth*10.+aSeed*5.)),16.)*settled*uMotion;
 float shimmer=pow(max(0.,sin(uLiveTime*.75-aAlong*14.+aSeed*31.)),14.)*uMotion;
 vAlpha=(drawn*(.66+shimmer*.30+pulse*.55)+head*1.15)*taper*sqrt(uDensityScale);
 // A small silver accent is confined to the tips, not all branch edges.
 float silver=smoothstep(.70,1.,aAlong)*step(.56,aSeed)*.72;
 vColor=mix(vec3(1.18,.74,.39),vec3(.88,.94,1.12),silver);
 vColor=mix(vColor,vec3(1.65,1.22,.72),head*.8)*(1.+pulse*.5);
 vAcross=aSide;vAlong=aAlong;vSeed=aSeed;vHead=head;
}
`;

const ribbonFragment=/* glsl */`
varying float vAcross;
varying float vAlong;
varying float vSeed;
varying float vAlpha;
varying float vHead;
varying vec3 vColor;
void main(){
 float wave=sin(vAlong*(22.+vSeed*19.)+vSeed*53.)
   +.33*sin(vAlong*71.+vSeed*17.);
 // Slightly longer unbroken runs than before: fine threads, not scratches.
 float broken=mix(smoothstep(-.34,.42,wave),1.,vHead);
 float fiber=exp(-4.8*vAcross*vAcross)*(1.-smoothstep(.68,1.,abs(vAcross)));
 float alpha=vAlpha*broken*fiber;
 if(alpha<.001)discard;
 // Lift only emitted light, preserving the existing narrow, interrupted
 // coverage. Tiny longitudinal peaks keep the brighter fibers granular.
 float bead=pow(max(0.,sin(vAlong*(145.+vSeed*80.)+vSeed*37.)),8.);
 gl_FragColor=vec4(vColor*(1.33+.15*bead),alpha);
}
`;

const glintVertex=/* glsl */`
uniform float uTime;
uniform float uLiveTime;
uniform float uMotion;
uniform float uPixelRatio;
uniform float uDensityScale;
uniform float uAlignmentDistance;
uniform vec2 uAlignmentOffset;
${timelineGLSL}
attribute float aSeed;
attribute float aGrowth;
varying float vAlpha;
varying vec3 vColor;
void main(){
 vec3 p=position;
 p.xy=(p.xy+uAlignmentOffset)*(1.-p.z/uAlignmentDistance)-uAlignmentOffset;
 vec4 mv=modelViewMatrix*vec4(p,1.);
 gl_Position=projectionMatrix*mv;
 // The tip glint pops when the growth front arrives, then rests faintly.
 float reveal=GROW_START+aGrowth*GROW_SPAN+.45;
 float settled=smoothstep(reveal,reveal+.6,uTime);
 float pop=exp(-pow((uTime-reveal-.15)*2.6,2.))*uMotion;
 float pulse=pow(max(0.,sin(uLiveTime*(.65+aSeed*.4)+aSeed*59.)),18.);
 gl_PointSize=(1.1+pulse*.75*uMotion+pop*2.)*uPixelRatio;
 vAlpha=(settled*(.105+pulse*.34*uMotion)+pop*.55)*sqrt(uDensityScale);
 vColor=mix(vec3(1.,.65,.31),vec3(.76,.87,1.),step(.56,aSeed)*.82);
}
`;

const glintFragment=/* glsl */`
varying float vAlpha;
varying vec3 vColor;
void main(){
 float r=length(gl_PointCoord-.5)*2.;
 if(r>=1.)discard;
 gl_FragColor=vec4(vColor,vAlpha*exp(-4.*r*r)*(1.-smoothstep(.65,1.,r)));
}
`;

function sampleFiber(curve,path,t,strand,seed,groundToWater){
 const p=curve.getPoint(t);
 const done=()=>{if(groundToWater&&belowWater(p.y,p.z))p.z=waterDepth(p.y,.01);return p;};
 const tangent=curve.getTangent(t);
 const span=Math.min(path.length-2,Math.floor(t*(path.length-1)));
 const local=t*(path.length-1)-span;
 const radius=THREE.MathUtils.lerp(path[span][3],path[span+1][3],local)*PIXEL_WORLD;
 const phase=t*(TAU*1.1+seed*TAU*.7)+strand*2.39996+seed*5.;
 const side=Math.sin(phase)*radius*.16;
 const xyLength=Math.hypot(tangent.x,tangent.y)||1;
 p.x-=tangent.y/xyLength*side;
 p.y+=tangent.x/xyLength*side;
 p.z+=Math.cos(phase)*radius*.75;
 // A fiber that would dip below the surface lies on the water along its ray.
 return done();
}

// Curve parameter t spans the control points uniformly (getPoint, not getPointAt).
function growthAt(growth,t){
 const span=Math.min(growth.length-2,Math.floor(t*(growth.length-1)));
 const local=t*(growth.length-1)-span;
 return growth[span]+(growth[span+1]-growth[span])*local;
}

/** Shares the scene's uniform objects: time, live time, motion, resolution,
 * density, pixel ratio, and the two front-view registration uniforms.
 */
export function createLightThreads(uniforms,{groundToWater=true}={}){
 const positions=[],tangents=[],sides=[],along=[],seeds=[],widths=[],growths=[],indices=[];
 const glintPositions=[],glintSeeds=[],glintGrowths=[];
 let strandCount=0;
 VOLUME_PATHS.forEach((path,pathIndex)=>{
   const curve=new THREE.CatmullRomCurve3(path.map(([x,y,z])=>new THREE.Vector3(
     (x-SOURCE_WIDTH*.5)*PIXEL_WORLD,
     (SOURCE_HEIGHT*.5-y)*PIXEL_WORLD,z,
   )),false,'centripetal');
   const strands=[0,1,5].includes(pathIndex)?3:(path[0][3]>4?2:1);
   const steps=Math.max(32,Math.ceil(curve.getLength()*30));
   for(let strand=0;strand<strands;strand++){
     const seed=((pathIndex+1)*.61803398875+strand*.38196601125)%1;
     const base=positions.length/3;
     for(let step=0;step<=steps;step++){
       const t=step/steps;
       const point=sampleFiber(curve,path,t,strand,seed,groundToWater);
       const previous=sampleFiber(curve,path,Math.max(0,t-.002),strand,seed,groundToWater);
       const next=sampleFiber(curve,path,Math.min(1,t+.002),strand,seed,groundToWater);
       const tangent=next.sub(previous).normalize().multiplyScalar(.008);
       const growth=growthAt(BRANCH_GROWTH[pathIndex],t);
       for(const side of [-1,1]){
         positions.push(point.x,point.y,point.z);
         tangents.push(tangent.x,tangent.y,tangent.z);
         sides.push(side);along.push(t);seeds.push(seed);growths.push(growth);
         widths.push((.40+seed*.14)*(.68+.32*Math.sin(Math.PI*t)));
       }
       if(step<steps){
         const i=base+step*2;
         indices.push(i,i+1,i+2,i+1,i+3,i+2);
       }
     }
     // Only one small endpoint glint per branch: never an illuminated bulb.
     if(strand===0){
       const tip=sampleFiber(curve,path,.94,strand,seed,groundToWater);
       glintPositions.push(tip.x,tip.y,tip.z);glintSeeds.push(seed);
       glintGrowths.push(growthAt(BRANCH_GROWTH[pathIndex],.94));
     }
     strandCount++;
   }
 });

 const geometry=new THREE.BufferGeometry();
 geometry.setAttribute('position',new THREE.Float32BufferAttribute(positions,3));
 geometry.setAttribute('aTangent',new THREE.Float32BufferAttribute(tangents,3));
 geometry.setAttribute('aSide',new THREE.Float32BufferAttribute(sides,1));
 geometry.setAttribute('aAlong',new THREE.Float32BufferAttribute(along,1));
 geometry.setAttribute('aSeed',new THREE.Float32BufferAttribute(seeds,1));
 geometry.setAttribute('aWidth',new THREE.Float32BufferAttribute(widths,1));
 geometry.setAttribute('aGrowth',new THREE.Float32BufferAttribute(growths,1));
 geometry.setIndex(indices);
 const ribbons=new THREE.Mesh(geometry,new THREE.ShaderMaterial({
   uniforms,vertexShader:ribbonVertex,fragmentShader:ribbonFragment,
   transparent:true,depthWrite:false,depthTest:false,
   side:THREE.DoubleSide,blending:THREE.AdditiveBlending,
 }));
 ribbons.name='fine-branch-light-fibers';ribbons.frustumCulled=false;

 const glintGeometry=new THREE.BufferGeometry();
 glintGeometry.setAttribute('position',new THREE.Float32BufferAttribute(glintPositions,3));
 glintGeometry.setAttribute('aSeed',new THREE.Float32BufferAttribute(glintSeeds,1));
 glintGeometry.setAttribute('aGrowth',new THREE.Float32BufferAttribute(glintGrowths,1));
 const glints=new THREE.Points(glintGeometry,new THREE.ShaderMaterial({
   uniforms,vertexShader:glintVertex,fragmentShader:glintFragment,
   transparent:true,depthWrite:false,depthTest:false,blending:THREE.AdditiveBlending,
 }));
 glints.name='branch-fiber-tip-glints';glints.frustumCulled=false;

 const group=new THREE.Group();group.name='restrained-branch-light-threads';
 group.add(ribbons,glints);
 group.userData={count:strandCount,tipGlints:glintSeeds.length,method:'growth-front-subpixel-3d-fibers'};
 return group;
}
