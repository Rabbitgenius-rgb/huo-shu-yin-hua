import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { EffectComposer } from 'three/addons/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/addons/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/addons/postprocessing/UnrealBloomPass.js';
import { OutputPass } from 'three/addons/postprocessing/OutputPass.js';
import { ShaderPass } from 'three/addons/postprocessing/ShaderPass.js';
import { createFireTree } from './particle-tree.js';
import { DURATION, END_FADE, SHOTS, sampleCamera, sampleBurstShake, shotTime } from './camera-sequence.js';
import { sampleOpening, OPENING_END } from './opening-score.js';
import { createRootIgnition } from './root-ignition.js';
import { createSeedLight } from './seed-light.js';
import { createAtmosphere } from './atmosphere.js';
import { choreographyStage } from './particle-choreography.js';
import { createScore } from './score.js';

const $=id=>document.getElementById(id);
const params=new URLSearchParams(location.search), mediaReduced=matchMedia('(prefers-reduced-motion: reduce)');
// The optional preview override exercises the exact accessibility path without
// changing the viewer's system preference.
const reduced={get matches(){return params.get('motion')==='reduce'||mediaReduced.matches;},
 addEventListener:(type,listener)=>mediaReduced.addEventListener(type,listener)};
const GROWTH_END=OPENING_END, treeScale=.225, waterLevel=.6197133937500414;
let time=params.has('t')?THREE.MathUtils.clamp(Number(params.get('t'))||0,0,DURATION):reduced.matches?GROWTH_END:0;
if(reduced.matches)time=GROWTH_END;
let paused=params.has('t')||reduced.matches, autoCamera=true, last=performance.now(), resumeBlend=null;
let liveTime=params.has('t')?Math.max(0,Number(params.get('t'))||0):time;
if(params.has('clean'))document.body.classList.add('clean');

async function start(){
  const canvas=$('scene');
  // Particle-only scene. Keep the established root reference so all existing
  // registered-space paths and camera positions remain coherent, without
  // constructing porcelain, water, a reflector, or a hidden render pass.
  const renderer=new THREE.WebGLRenderer({canvas,antialias:true,alpha:false,premultipliedAlpha:false,preserveDrawingBuffer:true});
  renderer.outputColorSpace=THREE.SRGBColorSpace;
  renderer.toneMapping=THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure=1;
  const scene=new THREE.Scene();
  const root=new THREE.Vector3(0,waterLevel+.002,0);
  const settledSky=new THREE.Color(0x000000);
  scene.background=settledSky.clone();

  const camera=new THREE.PerspectiveCamera(60,innerWidth/innerHeight,.005,80);
  const unshakenQuaternion=new THREE.Quaternion();
  const controls=new OrbitControls(camera,canvas);
  controls.enableDamping=true;controls.dampingFactor=.07;controls.enablePan=false;
  controls.minDistance=.65;controls.maxDistance=5;controls.minPolarAngle=.1;controls.maxPolarAngle=Math.PI-.1;
  const dpr=()=>Math.min(devicePixelRatio||1,1.65,Math.sqrt(4200000/(innerWidth*innerHeight)));
  let ratio=dpr();renderer.setPixelRatio(ratio);renderer.setSize(innerWidth,innerHeight,false);
  const composer=new EffectComposer(renderer);composer.addPass(new RenderPass(scene,camera));
  composer.addPass(new UnrealBloomPass(new THREE.Vector2(innerWidth,innerHeight),.14,.12,.9));
  composer.addPass(new OutputPass());
  // v3c: the closing fade to black (picture and score together).
  const endFade=new ShaderPass({uniforms:{tDiffuse:{value:null},uFade:{value:1}},vertexShader:'varying vec2 vUv;void main(){vUv=uv;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}',fragmentShader:'uniform sampler2D tDiffuse;uniform float uFade;varying vec2 vUv;void main(){vec4 c=texture2D(tDiffuse,vUv);gl_FragColor=vec4(c.rgb*uFade,c.a);}'});
  composer.addPass(endFade);
  const ignition=createRootIgnition({scene,waterLevel,pixelRatio:ratio});
  const seedLight=createSeedLight({scene,root});
  const atmosphere=createAtmosphere({scene,root,pixelRatio:ratio});
  const tree=await createFireTree({scene,scale:treeScale,grainSize:.82,position:root,waterLevel,pixelRatio:ratio,screenHeight:innerHeight});
  tree.setReflection(false);
  const registrationCamera=camera.clone();
  // Scale about the water-root without re-solving the image's depth rays.
  const registrationScale=treeScale/.145;
  registrationCamera.position.set(0,root.y+(.75-root.y)*registrationScale,2.4*registrationScale);
  registrationCamera.updateMatrixWorld(true);tree.registerToCamera(registrationCamera);
  Object.assign(canvas.dataset,{registration:JSON.stringify(tree.group.userData.registration),particles:String(tree.count),addedVolumeParticles:String(tree.group.userData.addedVolumeParticles),waterLevel:String(waterLevel),treeRoot:JSON.stringify(root.toArray()),version:'cinematic-v2b-20261028',branchStructureVersion:String(tree.group.userData.branchStructureVersion||''),growthMode:'root-fed',growthRoutes:String(tree.group.userData.growthRoutes||0),rootContactParticles:String(tree.group.userData.rootContactParticles||0),rootGrowthVersion:String(tree.group.userData.rootGrowthVersion||''),bundleParticles:String(tree.group.userData.bundleAddedParticles||0),bundleVersion:String(tree.group.userData.bundleParticleVersion||'')});

  const score=createScore({
    getTime:()=>time, isPlaying:()=>!paused, duration:DURATION, fade:END_FADE,
    onState:({enabled,status})=>{
      const button=$('sound');
      button.textContent=status==='loading'?'配乐准备中':enabled?'配乐开':'配乐关';
      button.setAttribute('aria-pressed',String(enabled));
      button.title=status==='unsupported'?'当前浏览器不支持配乐':status==='error'?'配乐未能加载，请重试':'开启或关闭配乐';
      canvas.dataset.audioState=status;
    }
  });
  $('sound').addEventListener('click',()=>score.toggle());
  const smooth=x=>x*x*x*(x*(x*6-15)+10);
  function applyCamera(dt=0){
    const shot=sampleCamera(time,{waterLevel,aspect:camera.aspect});
    if(!autoCamera)return shot;
    const position=new THREE.Vector3(...shot.position),target=new THREE.Vector3(...shot.target);
    let fov=shot.fov;
    if(resumeBlend){
      if(!paused)resumeBlend.elapsed+=dt;
      const a=smooth(Math.min(1,resumeBlend.elapsed/1.2));
      const to=new THREE.Spherical().setFromVector3(position.clone().sub(target)),from=resumeBlend.orbit;
      const delta=THREE.MathUtils.euclideanModulo(to.theta-from.theta+Math.PI,Math.PI*2)-Math.PI;
      const orbit=new THREE.Spherical(
        Math.max(controls.minDistance,THREE.MathUtils.lerp(from.radius,to.radius,a)),
        THREE.MathUtils.lerp(from.phi,to.phi,a),from.theta+delta*a,
      );
      target.lerpVectors(resumeBlend.target,target,a);
      position.copy(target).add(new THREE.Vector3().setFromSpherical(orbit));
      fov=THREE.MathUtils.lerp(resumeBlend.fov,fov,a);
      if(a===1)resumeBlend=null;
    }
    // The spline owns the camera while touring; no residual orbit inertia.
    controls.enableDamping=false;controls.target.copy(target);camera.position.copy(position);
    camera.fov=fov;camera.updateProjectionMatrix();controls.update();controls.enableDamping=true;
    return shot;
  }
  applyCamera();
  // Reopen the user's observed low, opposite-side view for a matched review.
  // This sets only the initial orbit; replay and shot buttons retain the tour.
  if(['user-side','opposite-side'].includes(params.get('view'))){
    autoCamera=false;controls.enableDamping=false;
    controls.target.set(0,waterLevel+.58,0);
    camera.position.set((params.get('view')==='user-side'?-1:1)*.8800857997461463,waterLevel+.025,1.0141713411223252);
    camera.fov=60;camera.updateProjectionMatrix();controls.update();
    controls.enableDamping=true;
  }
  // Initial review pose recorded from the user's branch-detail view.
  if(params.get('view')==='twig-side'){
    autoCamera=false; controls.enableDamping=false;
    controls.target.set(0,waterLevel+.58,0);
    camera.position.set(1.181793467379653,waterLevel+.0963704599858998,.1480738134851335);
    camera.fov=60; camera.updateProjectionMatrix(); controls.update();
    controls.enableDamping=true;
  }
  if(params.get('view')==='sparse-side'){
    autoCamera=false; controls.enableDamping=false;
    controls.target.set(0,waterLevel+.58,0);
    camera.position.set(1.7187335090354203,1.1718640433970904,.4520276920379737);
    camera.fov=60; camera.updateProjectionMatrix(); controls.update();
    controls.enableDamping=true;
  }
  if(params.get('view')==='branch-side'){
    autoCamera=false; controls.enableDamping=false;
    controls.target.set(0,waterLevel+.58,0);
    camera.position.set(-1.0587697345993954,.8973533444423221,1.35363388189533);
    camera.fov=60; camera.updateProjectionMatrix(); controls.update();
    controls.enableDamping=true;
  }
  // The user's observed contact view, retained for a matched waterline review.
  if(params.get('view')==='water-contact'){
    autoCamera=false; controls.enableDamping=false;
    controls.target.set(0,waterLevel+.58,0);
    camera.position.set(1.4014069317850162,1.3424959673511325,.7577028826837677);
    camera.fov=78; camera.updateProjectionMatrix(); controls.update();
    controls.enableDamping=true;
  }
  // Recorded low side view where the user found the trunk defect.
  if(params.get('view')==='trunk-defect'){
    autoCamera=false; controls.enableDamping=false;
    controls.target.set(0,1.1197133937500414,0);
    camera.position.set(.7911530276987043,.6447133937500413,1.004752050595593);
    camera.fov=55; camera.updateProjectionMatrix(); controls.update();
    controls.enableDamping=true;
  }
  // The user's reverse-side view of the overextended silver bough.
  if(params.get('view')==='crown-tip'){
    autoCamera=false; controls.enableDamping=false;
    controls.target.set(0,1.1997133937500415,0);
    camera.position.set(-2.0774998841036445,1.2905880631393327,-.706660891470359);
    camera.fov=60; camera.updateProjectionMatrix(); controls.update();
    controls.enableDamping=true;
  }
  // Review hook: ?cam=px,py,pz,tx,ty,tz[,fov] pins a free camera.
  if(params.has('cam')){
    const v=params.get('cam').split(',').map(Number);
    if(v.length>=6&&v.every(Number.isFinite)){
      autoCamera=false;controls.enableDamping=false;
      controls.target.set(v[3],v[4],v[5]);camera.position.set(v[0],v[1],v[2]);
      camera.fov=v[6]||55;camera.updateProjectionMatrix();controls.update();controls.enableDamping=true;
    }
  }
  if(/debug/.test(location.search))globalThis.__fireTreeCamera=()=>[...camera.position.toArray(),...controls.target.toArray(),camera.fov].map(v=>+v.toFixed(3));
  function syncUI(){
    const shot=sampleCamera(time,{waterLevel,aspect:camera.aspect});
    const index=SHOTS.findIndex(s=>s.id===shot.shot);
    $('play').textContent=paused?'播放':'暂停';$('play').setAttribute('aria-pressed',String(!paused));
    $('progress').value=String(time/DURATION);$('time-label').textContent=`${time.toFixed(1).padStart(4,'0')} / ${DURATION.toFixed(1)}${time>=DURATION?' · 续':''}`;
    const chapter=SHOTS[Math.max(0,index)];
    $('chapter-index').textContent=`${String(Math.max(0,index)+1).padStart(2,'0')} · ${chapter.label}`;
    $('status').textContent=time<8.93?sampleOpening(time).label.replace('水心','光点'):choreographyStage(time);
    $('tour').textContent=autoCamera?'自动运镜':'自由观察';$('tour').setAttribute('aria-pressed',String(autoCamera));
    document.querySelectorAll('button[data-shot]').forEach(b=>b.setAttribute('aria-pressed',String(autoCamera&&b.dataset.shot===shot.shot)));
  }
  function clearOrbit(){controls.enableDamping=false;controls.update();controls.enableDamping=true;}
  function resetStory(){tree.resetLiving();}
  function seek(t){time=THREE.MathUtils.clamp(t,reduced.matches?GROWTH_END:0,DURATION);liveTime=time;paused=true;autoCamera=true;resumeBlend=null;clearOrbit();resetStory();applyCamera();score.sync();syncUI();}
  function replay(){seek(0);if(reduced.matches)return;paused=false;last=performance.now();score.sync();syncUI();}
  $('play').addEventListener('click',()=>{if(reduced.matches){paused=true;syncUI();return;}paused=!paused;last=performance.now();score.sync();syncUI();});
  $('replay').addEventListener('click',replay);
  $('progress').addEventListener('input',e=>seek(Number(e.target.value)*DURATION));
  document.querySelectorAll('button[data-shot]').forEach(b=>b.addEventListener('click',()=>seek(shotTime(b.dataset.shot))));
  $('tour').addEventListener('click',()=>{
    if(reduced.matches){autoCamera=true;paused=true;resumeBlend=null;applyCamera();syncUI();return;}
    autoCamera=!autoCamera;
    if(autoCamera){
      const position=camera.position.clone(),target=controls.target.clone();
      clearOrbit();camera.position.copy(position);controls.target.copy(target);
      controls.enableDamping=false;controls.update();controls.enableDamping=true;
      resumeBlend={elapsed:0,orbit:new THREE.Spherical().setFromVector3(camera.position.clone().sub(controls.target)),target:controls.target.clone(),fov:camera.fov};
      if(time>=DURATION){time=GROWTH_END;liveTime=time;tree.resetLiving();}
      paused=false;last=performance.now();
    }else resumeBlend=null;
    score.sync();syncUI();
  });
  $('clean').addEventListener('click',()=>document.body.classList.toggle('clean'));
  let down=null;
  const takeCamera=()=>{autoCamera=false;resumeBlend=null;syncUI();};
  canvas.addEventListener('pointerdown',e=>{if(e.button===0)down={x:e.clientX,y:e.clientY,id:e.pointerId,moved:false};});
  canvas.addEventListener('pointermove',e=>{
    if(down?.id===e.pointerId&&Math.hypot(e.clientX-down.x,e.clientY-down.y)>6){down.moved=true;takeCamera();}
  });
  canvas.addEventListener('wheel',takeCamera,{passive:true});
  canvas.addEventListener('pointerup',()=>down=null);
  canvas.addEventListener('pointercancel',()=>down=null);
  addEventListener('keydown',e=>{
    if(e.defaultPrevented||e.repeat||e.ctrlKey||e.metaKey||e.altKey||
      e.target.closest('input, textarea, select, button, a, [contenteditable="true"], [role="button"]'))return;
    if(e.code==='Space'){e.preventDefault();$('play').click();}
    if(e.key.toLowerCase()==='h')$('clean').click();if(e.key.toLowerCase()==='r')replay();
  });
  function resize(){
    ratio=dpr();camera.aspect=innerWidth/innerHeight;camera.updateProjectionMatrix();
    renderer.setPixelRatio(ratio);renderer.setSize(innerWidth,innerHeight,false);
    composer.setPixelRatio(ratio);composer.setSize(innerWidth,innerHeight);
    tree.resize({pixelRatio:ratio,screenHeight:innerHeight});if(autoCamera)applyCamera();
  }
  addEventListener('resize',resize);resize();
  reduced.addEventListener('change',()=>{if(reduced.matches)seek(GROWTH_END);});
  document.addEventListener('visibilitychange',()=>{last=performance.now();down=null;score.sync();});
  $('load').hidden=true;last=performance.now();syncUI();
  function frame(now){
    requestAnimationFrame(frame);const dt=document.hidden?0:Math.max(0,Math.min((now-last)/1000,.05));last=now;
    if(document.hidden)return;
    if(!paused){
      // When the selected track is playing, use its audio clock so a slow
      // frame cannot make the visuals lag behind and repeatedly restart it.
      const audioTime=score.getPlaybackTime();
      const previousTime=time;
      // v3h: the audio clock advances in coarse steps; following it directly
      // made fast particle motion judder. Advance by the frame interval and
      // slew gently towards the audio position (snap only on a real jump).
      if(audioTime===null)time=Math.min(DURATION,time+dt);
      else{
        const predicted=time+dt,error=audioTime-predicted;
        time=Math.abs(error)>.25?audioTime:predicted+error*Math.min(1,dt*3);
        time=Math.min(DURATION,Math.max(previousTime,time));
      }
      liveTime+=previousTime>=DURATION?dt:Math.max(0,time-previousTime);
    }
    score.tick();
    if(autoCamera)applyCamera(dt);
    else controls.update();
    const opening=sampleOpening(time);
    const reveal=THREE.MathUtils.smoothstep(time,.6,7.2);
    scene.background.copy(settledSky);
    const ignitionState=ignition.update({time,reduced:reduced.matches,pixelRatio:ratio});
    const seedState=seedLight.update({time,reduced:reduced.matches});
    atmosphere.update({time,liveTime,motion:!reduced.matches,pixelRatio:ratio});
    const treeState=tree.update({time:opening.particleTime,storyTime:time,liveTime,motion:!reduced.matches,camera});
    const shake=sampleBurstShake(time,{motion:!reduced.matches});
    const shaken=shake.roll!==0;
    // A small roll around the camera's own viewing axis. Restore orientation
    // immediately after drawing so orbit controls never inherit the tremor.
    if(shaken){
      unshakenQuaternion.copy(camera.quaternion);
      camera.rotateZ(shake.roll);camera.updateMatrixWorld(true);
    }
    {const f=THREE.MathUtils.clamp((time-END_FADE[0])/(END_FADE[1]-END_FADE[0]),0,1);endFade.uniforms.uFade.value=1-f*f*(3-2*f);}
    composer.render();
    if(shaken){camera.quaternion.copy(unshakenQuaternion);camera.updateMatrixWorld(true);}
    syncUI();
    canvas.dataset.cameraShake=JSON.stringify(shake);
    const shot=sampleCamera(time,{waterLevel,aspect:camera.aspect});
    Object.assign(canvas.dataset,{ready:'true',background:'#000000',choreography:choreographyStage(time),time:time.toFixed(3),liveTime:liveTime.toFixed(3),ironPhase:treeState.iron.phase,ironSparks:String(treeState.iron.activeSparks),ironSprouts:String(treeState.iron.activeSprouts),fallPhase:treeState.falling.phase,fallGrains:String(treeState.falling.activeGrains),silverGrains:String(treeState.falling.silverGrains),emberGrains:String(treeState.falling.emberGrains),particleTime:opening.particleTime.toFixed(3),openingPhase:opening.stage,ignitionAlive:String(ignitionState.aliveCount),seedLight:seedState.level.toFixed(3),ironPetals:String(treeState.iron.activePetals||0),playing:String(!paused),autoCamera:String(autoCamera),cameraShot:shot.shot,cameraPosition:JSON.stringify(camera.position.toArray()),cameraTarget:JSON.stringify(controls.target.toArray()),cameraFov:String(camera.fov),reducedMotion:String(reduced.matches)});
  }
  requestAnimationFrame(frame);
}
start().catch(error=>{console.error(error);$('load').hidden=false;$('load').textContent='场景未能载入，请刷新重试。';$('scene').dataset.error=String(error);});
