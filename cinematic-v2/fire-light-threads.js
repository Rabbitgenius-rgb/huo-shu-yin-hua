import * as THREE from 'three';
import { treeSwayGLSL } from './tree-sway.js';
import { BRANCH_GROWTH, PARENTS } from '../tree-src/fire-image-depth.js';
import { VOLUME_PATHS, belowWater, waterDepth } from '../tree-src/fire-tree-volume.js';
import { timelineGLSL, TIMELINE } from './fire-timeline.js';
import { createBranchRevealClock, connectBranchRevealProfiles } from './branch-reveal-clock.js';
import { reshapeCrownPosition } from './crown-volume-fill.js';
import { branchFiberRadius, branchFiberCurve } from './branch-structure.js';

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
uniform float uGhost;
${timelineGLSL}
${treeSwayGLSL}
float scoreRise(float t,float along){
 float rise=smoothstep(1.5,3.,t)*(1.-smoothstep(8.2,8.93,t));
 return pow(.5+.5*sin(t*.72-along*1.6),3.)*.5*rise;
}
attribute vec3 aTangent;
attribute float aSide;
attribute float aAlong;
attribute float aSeed;
attribute float aWidth;
attribute float aRank;
attribute float aGrowth;
attribute float aReveal;
varying float vAcross;
varying float vAlong;
varying float vSeed;
varying float vAlpha;
varying float vHead;
varying float vGrowing;
varying vec3 vColor;
vec3 registered(vec3 p){
 p.xy=(p.xy+uAlignmentOffset)*(1.-p.z/uAlignmentDistance)-uAlignmentOffset;
 return swayTree(p,uLiveTime,uMotion);
}
void main(){
 vec4 center=projectionMatrix*modelViewMatrix*vec4(registered(position),1.);
 vec4 next=projectionMatrix*modelViewMatrix*vec4(registered(position+aTangent),1.);
 vec2 direction=(next.xy/max(next.w,.001)-center.xy/max(center.w,.001))*uResolution;
 vec2 normal=normalize(vec2(-direction.y,direction.x)+vec2(.00001));
 float reveal=aReveal;
 float drawn=smoothstep(reveal,reveal+.24,uTime);
 // No symmetric pre-echo: the accent can only follow established particles.
 float head=drawn*exp(-pow((uTime-reveal-.16)*4.0,2.));
 // A subpixel luminous core remains fine even when the tree is zoomed in;
 // only the travelling head is a touch wider.
 center.xy+=normal*aSide*aWidth*(1.+head*1.6)*2./uResolution*center.w;
 gl_Position=center;
 float growing=1.-smoothstep(6.3,10.8,uTime);
 float join=smoothstep(0.,.07,aAlong);
 float taper=mix(join,.28+.72*join,growing)*(1.-smoothstep(.85,1.,aAlong));
 float settled=smoothstep(10.4,12.,uTime);
 float pulse=pow(max(0.,sin(uLiveTime*1.1-aGrowth*10.+aSeed*5.)),16.)*settled*uMotion;
 float shimmer=pow(max(0.,sin(uLiveTime*.75-aAlong*14.+aSeed*31.)),14.)*uMotion;
 // During the quiet opening, a slow glow follows already-drawn branch fibres.
 // After 8.93 seconds the low-frequency impacts and subtler subdivisions
 // energise those same fibres, with a short depth-dependent delay.
 float musical=scoreRise(uLiveTime,clamp(aGrowth,0.,1.))*(1.-settled)
  +(rhythmImpact(uLiveTime,.025+.075*clamp((position.z+2.)/4.,0.,1.))*.85
   +rhythmDetail(uLiveTime,position)*.6)*settled;
 musical*=uMotion*drawn;
 vAlpha=(drawn*(.66+shimmer*.30+pulse*.55+musical*.95)+head*1.15)*taper*sqrt(uDensityScale);
 // During growth the beads carry the silhouette; the internal fibers follow
 // quietly, then regain the accepted fine highlights as the flowers open.
 float growthAccent=mix(.28,.55,smoothstep(reveal+.25,reveal+1.0,uTime));
 growthAccent=mix(growthAccent,1.,smoothstep(6.3,10.8,uTime));
 vAlpha*=growthAccent;
 // v2r: thin boughs' fibres sit a step below the trunk's.
 vAlpha*=mix(.6,1.,aRank);
 // cinematic-v2 growth fuse: the travelling head is no longer held back by
 // the quiet growth accent, so a hot point visibly runs up every bough.
 float fuse=head*taper*(1.-smoothstep(7.,9.,uTime))*uMotion;
 vAlpha+=fuse*1.35*sqrt(uDensityScale);
 // Held breath before the shared beat.
 vAlpha*=1.-.40*smoothstep(8.05,8.86,uTime)*(1.-step(8.93,uTime))*uMotion;
 // cinematic-v2: once the flowers open, the fibres step back. The outer
 // spans inside the crown fade furthest so they no longer draw lines through
 // the silver; beat responses can still lift what remains.
 float afterBloom=smoothstep(9.,12.,uTime);
 float crownReach=smoothstep(.45,.85,aAlong);
 vAlpha*=mix(1.,mix(.14,.04,crownReach),afterBloom);
 // Root wisps below the junction are retired with their particles.
 // A small silver accent is confined to the tips, not all branch edges.
 float silver=smoothstep(.70,1.,aAlong)*step(.56,aSeed)*.72;
 vColor=mix(vec3(1.18,.74,.39),vec3(.88,.94,1.12),silver);
 vColor=mix(vColor,vec3(2.3,1.55,.80),min(1.,head*.95))*(1.+pulse*.5+musical*.32);
 // v3h closing ghost: behind the lettering the gold veins regrow from the
 // root to the tips as the trunk and limbs of the tree's ghost (the limb
 // grains themselves are in 火树). Crown spans stay faint.
 if(uGhost>0.){
  float front=smoothstep(aGrowth-.10,aGrowth+.02,uGhost*1.12);
  float ghostVein=front*(1.-smoothstep(.85,1.,aAlong))*mix(1.,.30,crownReach)*mix(.55,1.,aRank);
  vAlpha=ghostVein*1.05*sqrt(uDensityScale);
  vColor=vec3(1.18,.74,.39)*(1.+.5*smoothstep(aGrowth-.03,aGrowth,uGhost*1.12)*(1.-smoothstep(aGrowth,aGrowth+.03,uGhost*1.12)));
 }
 vAcross=aSide;vAlong=aAlong;vSeed=aSeed;vHead=head;vGrowing=growing;
}
`;

const ribbonFragment=/* glsl */`
varying float vAcross;
varying float vAlong;
varying float vSeed;
varying float vAlpha;
varying float vHead;
varying float vGrowing;
varying vec3 vColor;
void main(){
 float wave=sin(vAlong*(22.+vSeed*19.)+vSeed*53.)
   +.33*sin(vAlong*71.+vSeed*17.);
 // Slightly longer unbroken runs than before: fine threads, not scratches.
 float broken=mix(smoothstep(-.34,.42,wave),1.,vHead);
 // Keep a faint connected core while a bough grows. Its settled broken,
 // granular appearance is unchanged once the canopy has opened.
 broken=mix(broken,max(broken,.32),vGrowing);
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
${treeSwayGLSL}
attribute float aSeed;
attribute float aGrowth;
attribute float aReveal;
varying float vAlpha;
varying vec3 vColor;
void main(){
 vec3 p=position;
 p.xy=(p.xy+uAlignmentOffset)*(1.-p.z/uAlignmentDistance)-uAlignmentOffset;
 // Glints are attached to the same branch as fibres and settled points.
 p=swayTree(p,uLiveTime,uMotion);
 vec4 mv=modelViewMatrix*vec4(p,1.);
 gl_Position=projectionMatrix*mv;
 // The tip glint pops when the growth front arrives, then rests faintly.
 float reveal=aReveal;
 float settled=smoothstep(reveal,reveal+.6,uTime);
 float pop=settled*exp(-pow((uTime-reveal-.15)*2.6,2.))*uMotion;
 float pulse=pow(max(0.,sin(uLiveTime*(.65+aSeed*.4)+aSeed*59.)),18.);
 gl_PointSize=(1.1+pulse*.75*uMotion+pop*5.)*uPixelRatio;
 vAlpha=(settled*(.105+pulse*.34*uMotion)+pop*.55)*sqrt(uDensityScale);
 float growthAccent=mix(.28,.55,smoothstep(reveal+.25,reveal+1.0,uTime));
 vAlpha*=mix(growthAccent,1.,smoothstep(6.3,10.8,uTime));
 vAlpha+=pop*.85*sqrt(uDensityScale);
 vColor=mix(vec3(1.,.65,.31),vec3(.76,.87,1.),step(.56,aSeed)*.82);
 vColor=mix(vColor,vec3(2.2,1.5,.72),min(1.,pop*1.4));
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

// cinematic-v2: a small four-point flash where a child bough leaves its
// parent, at the moment the growth front passes that fork.
const forkVertex=/* glsl */`
uniform float uTime;
uniform float uMotion;
uniform float uPixelRatio;
uniform float uAlignmentDistance;
uniform vec2 uAlignmentOffset;
attribute float aReveal;
attribute float aWeight;
varying float vAlpha;
void main(){
 vec3 p=position;
 p.xy=(p.xy+uAlignmentOffset)*(1.-p.z/uAlignmentDistance)-uAlignmentOffset;
 gl_Position=projectionMatrix*modelViewMatrix*vec4(p,1.);
 float a=uTime-aReveal;
 float pop=smoothstep(-.03,.03,a)*exp(-max(0.,a)/.24)*uMotion*(1.-smoothstep(7.4,8.4,uTime));
 gl_PointSize=(5.+17.*aWeight)*pop*uPixelRatio;
 vAlpha=pop*(.55+.45*aWeight);
 if(vAlpha<.003){gl_Position=vec4(2.,2.,2.,1.);gl_PointSize=0.;}
}
`;
const forkFragment=/* glsl */`
varying float vAlpha;
void main(){
 vec2 uv=gl_PointCoord-.5;
 float r=length(uv)*2.;
 if(r>=1.)discard;
 vec2 a=abs(uv)*2.;
 float rays=max(exp(-a.x*16.)*exp(-a.y*2.6),exp(-a.y*16.)*exp(-a.x*2.6))*(1.-r);
 float shape=exp(-18.*r*r)+rays*.9+exp(-4.*r*r)*.18;
 gl_FragColor=vec4(vec3(2.4,1.62,.78),shape*vAlpha);
}
`;

function sampleFiber(curve,path,t,strand,seed,groundToWater,pathIndex){
 const p=curve.getPoint(t);
 const done=()=>{
   if(groundToWater&&belowWater(p.y,p.z))p.z=waterDepth(p.y,.01);
   // Carry the fibers with their upper particle boughs. The neighbouring
   // samples are deformed too, so the ribbon tangent follows the same curve.
   return p.fromArray(reshapeCrownPosition(p.toArray()));
 };
 const tangent=curve.getTangent(t);
 const span=Math.min(path.length-2,Math.floor(t*(path.length-1)));
 const local=t*(path.length-1)-span;
 const radius=branchFiberRadius(pathIndex,t,THREE.MathUtils.lerp(path[span][3],path[span+1][3],local)*PIXEL_WORLD);
 // Irregular, loosely twisting strands occupy the width of their parent
 // particle branch. Both ends converge, keeping joins and tips attached.
 // A second, shorter bend interrupts the otherwise straight wire silhouette.
 const join=THREE.MathUtils.smoothstep(t,0,.10)*(1-THREE.MathUtils.smoothstep(t,.88,1));
 const phase=t*TAU*(.72+seed*.38)+strand*2.39996+seed*5.;
 const bend=Math.sin(phase)*.48+Math.sin(t*TAU*(2.3+seed)+seed*13.)*.12;
 const side=radius*bend*join;
 const xyLength=Math.hypot(tangent.x,tangent.y)||1;
 const normal=new THREE.Vector3(-tangent.y/xyLength,tangent.x/xyLength,0);
 const binormal=new THREE.Vector3().crossVectors(tangent,normal).normalize();
 const depth=radius*(Math.cos(phase)*.64+Math.sin(t*TAU*1.8+seed*7.)*.11)*join;
 p.addScaledVector(normal,side).addScaledVector(binormal,depth);
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
export function createLightThreads(uniforms,{groundToWater=true,cloud}={}){
 const clock=cloud?createBranchRevealClock(cloud):null;
 const curves=VOLUME_PATHS.map((path,pathIndex)=>branchFiberCurve(pathIndex)||new THREE.CatmullRomCurve3(path.map(([x,y,z])=>new THREE.Vector3(
   (x-SOURCE_WIDTH*.5)*PIXEL_WORLD,(SOURCE_HEIGHT*.5-y)*PIXEL_WORLD,z,
 )),false,'centripetal'));
 const profiles=connectBranchRevealProfiles(VOLUME_PATHS.map((path,pathIndex)=>{
   const curve=curves[pathIndex],steps=Math.max(40,Math.ceil(curve.getLength()*42));
   const points=Array.from({length:steps+1},(_,step)=>sampleFiber(curve,path,step/steps,0,((pathIndex+1)*.61803398875)%1,groundToWater,pathIndex));
   const times=points.map((point,step)=>clock?clock.at(point):TIMELINE.growStart+growthAt(BRANCH_GROWTH[pathIndex],step/steps)*TIMELINE.growSpan+.35);
   return {points,times};
 }),PARENTS);
 const positions=[],tangents=[],sides=[],along=[],seeds=[],widths=[],growths=[],indices=[],ranks=[];
 const reveals=[],glintPositions=[],glintSeeds=[],glintGrowths=[],glintReveals=[];
 const forkPositions=[],forkReveals=[],forkWeights=[];
 let strandCount=0;
 VOLUME_PATHS.forEach((path,pathIndex)=>{
   // v2k: root paths draw no fibres; the roots now spread as a grain skirt
   // that no longer follows their original downward axes.
   // v2o: v1 roots, fibres included.
   const curve=curves[pathIndex],profile=profiles[pathIndex];
   const previousStrands=[0,1,5].includes(pathIndex)?3:(path[0][3]>4?2:1);
   const strands=[1,5].includes(pathIndex)?2:previousStrands===3?5:previousStrands===2?3:1;
   // Split the existing luminous width across strands, so extra fibers add
   // structure without raising total line coverage in the water reflection.
   const widthBudget=previousStrands/Math.max(strands,[1,5].includes(pathIndex)?5:1);
   // v2r: fibre brightness follows bough thickness (trunk 1 ... finest twig 0).
   const rank=THREE.MathUtils.smoothstep(path[0][3],2,12);
   const steps=Math.max(40,Math.ceil(curve.getLength()*42));
   for(let strand=0;strand<strands;strand++){
     const seed=((pathIndex+1)*.61803398875+strand*.38196601125)%1;
     const base=positions.length/3;
     let frontTime=0;
     for(let step=0;step<=steps;step++){
       const t=step/steps;
       const point=sampleFiber(curve,path,t,strand,seed,groundToWater,pathIndex);
       const previous=sampleFiber(curve,path,Math.max(0,t-.002),strand,seed,groundToWater,pathIndex);
       const next=sampleFiber(curve,path,Math.min(1,t+.002),strand,seed,groundToWater,pathIndex);
       const tangent=next.sub(previous).normalize().multiplyScalar(.008);
       const growth=growthAt(BRANCH_GROWTH[pathIndex],t);
       // Keep the visible front continuous even if a nearby particle belongs
       // to a different crossing bough. Never reveal an isolated distal span.
       frontTime=Math.max(frontTime,profile.times[step],clock?clock.at(point):TIMELINE.growStart+growth*TIMELINE.growSpan+.35);
       for(const side of [-1,1]){
         positions.push(point.x,point.y,point.z);
         tangents.push(tangent.x,tangent.y,tangent.z);
         sides.push(side);along.push(t);seeds.push(seed);growths.push(growth);reveals.push(frontTime);
         const taper=.42+.58*Math.pow(1-t,.55);
         const ripple=.92+.08*Math.sin(t*TAU*3.2+seed*17.);
         widths.push((.40+seed*.14)*widthBudget*taper*ripple);ranks.push(rank);
       }
       if(step<steps){
         const i=base+step*2;
         indices.push(i,i+1,i+2,i+1,i+3,i+2);
       }
     }
     if(strand===0&&PARENTS[pathIndex]>=0){
       const fork=sampleFiber(curve,path,0,strand,seed,groundToWater,pathIndex);
       if(fork.y>-2.52){
         forkPositions.push(fork.x,fork.y,fork.z);
         forkReveals.push(profile.times[0]);
         forkWeights.push(THREE.MathUtils.clamp((path[0][3]-1.5)/6,.25,1));
       }
     }
     // Only one small endpoint glint per branch: never an illuminated bulb.
     if(strand===0){
       const tip=sampleFiber(curve,path,.94,strand,seed,groundToWater,pathIndex);
       glintPositions.push(tip.x,tip.y,tip.z);glintSeeds.push(seed);
       glintGrowths.push(growthAt(BRANCH_GROWTH[pathIndex],.94));
       glintReveals.push(frontTime+.08);
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
 geometry.setAttribute('aRank',new THREE.Float32BufferAttribute(ranks,1));
 geometry.setAttribute('aGrowth',new THREE.Float32BufferAttribute(growths,1));
 geometry.setAttribute('aReveal',new THREE.Float32BufferAttribute(reveals,1));
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
 glintGeometry.setAttribute('aReveal',new THREE.Float32BufferAttribute(glintReveals,1));
 const glints=new THREE.Points(glintGeometry,new THREE.ShaderMaterial({
   uniforms,vertexShader:glintVertex,fragmentShader:glintFragment,
   transparent:true,depthWrite:false,depthTest:false,blending:THREE.AdditiveBlending,
 }));
 glints.name='branch-fiber-tip-glints';glints.frustumCulled=false;

 const forkGeometry=new THREE.BufferGeometry();
 forkGeometry.setAttribute('position',new THREE.Float32BufferAttribute(forkPositions,3));
 forkGeometry.setAttribute('aReveal',new THREE.Float32BufferAttribute(forkReveals,1));
 forkGeometry.setAttribute('aWeight',new THREE.Float32BufferAttribute(forkWeights,1));
 const forks=new THREE.Points(forkGeometry,new THREE.ShaderMaterial({
   uniforms,vertexShader:forkVertex,fragmentShader:forkFragment,
   transparent:true,depthWrite:false,depthTest:false,blending:THREE.AdditiveBlending,
 }));
 forks.name='branch-fork-flashes';forks.frustumCulled=false;

 const group=new THREE.Group();group.name='restrained-branch-light-threads';
 group.add(ribbons,glints,forks);
 group.userData={count:strandCount,tipGlints:glintSeeds.length,forkFlashes:forkReveals.length,method:'parent-connected-root-growth-fibers',revealClock:clock?.stats,
   branchRevealProfiles:profiles.map(({times,parent,gate,attachment})=>({times,parent,gate,attachment}))};
 return group;
}
