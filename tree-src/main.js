import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { EffectComposer } from 'three/addons/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/addons/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/addons/postprocessing/UnrealBloomPass.js';
import { OutputPass } from 'three/addons/postprocessing/OutputPass.js';
import { pointVertex, pointFragment, trailVertex, trailFragment } from './fire-gather-shaders.js';
import { sampleFireTreeInWorker } from './fire-tree-cloud.js';
import { createLightThreads } from './fire-light-threads.js';
import { CROWN_CLUSTER_COUNT } from './fire-crown-clusters.js';
import { TIMELINE, STAGES, MOTION_END } from './fire-timeline.js';
const DURATION=TIMELINE.duration;
const VERSION='fire-tree-silver-bloom';
const BLOOM_DEFAULT=.30;

const $ = id => document.getElementById(id);
const params=new URLSearchParams(location.search);
const reducedMotion = matchMedia('(prefers-reduced-motion: reduce)');
let renderer, composer, bloom, controls, camera, scene, group;
let trailMesh=null,burstMesh=null,threadGroup=null;
let playing = !reducedMotion.matches;
let time=reducedMotion.matches?DURATION:0,lastTime=0,liveTime=0;
let dragging=false,exportPending=false,loaded=false,manualFrames=false;
let frameCount=0,frameStart=0;
const inspectTime=params.get('t');
const inspectAngle=params.get('view');

// Cinematic camera: a slow push-in and swing that reveals the point cloud's
// depth while it gathers, landing exactly on the image-registered front view.
// Any drag, zoom or view button hands control back to the viewer.
let cinemaPreference=params.get('cinema')!=='0' && !reducedMotion.matches;
let cinematic=cinemaPreference && inspectAngle===null;
let cameraSnap=true;
const CINE=Object.freeze({azimuth:-.30,lift:-.10,push:.20,settle:11.6,idle:.05});

// Adaptive resolution: only ever steps down, and only when frames are slow.
const maxDpr=Math.min(devicePixelRatio,1.65);
const minDpr=Math.max(.75,maxDpr*.6);
let dpr=maxDpr,slowWindows=0;
const adaptive=inspectTime===null && params.get('quality')!=='fixed';

if(params.has('clean'))document.body.classList.add('clean');

let lastExportUrl=null;
let width = innerWidth, height = innerHeight, viewFit=1;
const pointer = new THREE.Vector3(100,100,0);
const raycaster=new THREE.Raycaster();
const pointerNdc=new THREE.Vector2();
const interactionPlane=new THREE.Plane(new THREE.Vector3(0,0,1),0);
const pointerHit=new THREE.Vector3();
const cinePosition=new THREE.Vector3();
const uniforms = {
  uTime:{value:0},uLiveTime:{value:0},uResolution:{value:new THREE.Vector2(innerWidth,innerHeight)},
  uDensityScale:{value:Math.min(1,(innerHeight/720)**2)},uMotion:{value:reducedMotion.matches?0:1},
  uPointer:{value:pointer},uPointerPower:{value:0},uSize:{value:1},
  uAlignmentDistance:{value:10.5},uAlignmentOffset:{value:new THREE.Vector2(-.42,.06)},
  uViewObliqueness:{value:0},uSettled:{value:0},
  uPixelRatio:{value:dpr}
};

async function makePointCloud() {
  const started=performance.now();
  const cloud=await sampleFireTreeInWorker();
  const {count,positions,colors,seeds,energies,normals,florets,crownWeights,buds,growth,sourceWidth,sourceHeight}=cloud;
  $('scene').dataset.loadMs=(performance.now()-started).toFixed(0);
  if(cloud.sampleMs!==undefined)$('scene').dataset.sampleMs=cloud.sampleMs.toFixed(0);
  $('scene').dataset.sampler=cloud.sampleMs!==undefined?'worker':'main-thread';
  $('scene').dataset.source=`midjourney-cff5ce27-index3-${sourceWidth}x${sourceHeight}`;
  let minZ=Infinity,maxZ=-Infinity;
  for(let i=2;i<positions.length;i+=3){minZ=Math.min(minZ,positions[i]);maxZ=Math.max(maxZ,positions[i]);}
  $('scene').dataset.depthRange=JSON.stringify([minZ,maxZ]);
  $('scene').dataset.alignment='source-pixel-ray-projection';
  const geo=new THREE.BufferGeometry();
  geo.setAttribute('position',new THREE.BufferAttribute(positions,3));
  geo.setAttribute('color',new THREE.BufferAttribute(colors,3));
  geo.setAttribute('aSeed',new THREE.BufferAttribute(seeds,3));
  geo.setAttribute('aEnergy',new THREE.BufferAttribute(energies,1));
  geo.setAttribute('aVolumeNormal',new THREE.BufferAttribute(normals,3));
  geo.setAttribute('aFloret',new THREE.BufferAttribute(florets,2));
  geo.setAttribute('aCrownWeight',new THREE.BufferAttribute(crownWeights,1));
  geo.setAttribute('aBud',new THREE.BufferAttribute(buds,4));
  geo.setAttribute('aGrowth',new THREE.BufferAttribute(growth,3));
  $('scene').dataset.crownClusters=String(CROWN_CLUSTER_COUNT);
  const material=new THREE.ShaderMaterial({uniforms,vertexShader:pointVertex,fragmentShader:pointFragment,transparent:true,depthWrite:false,depthTest:false,blending:THREE.AdditiveBlending});
  const points=new THREE.Points(geo,material);points.frustumCulled=false;group.add(points);
  // A sparse subset of the actual particles gets a visible history trail.
  // Copy the same seed and destination, never a grid cell or shared block.
  const picked=[];
  for(let i=0;i<count;i+=136)if(energies[i]>=.35)picked.push(i);
  trailMesh=makeTrails(cloud,picked,{});
  // Burst rays: a denser subset of spray particles shows its streak only while
  // its shell opens, so each burst reads as sparks rather than a swelling puff.
  const rays=[];
  for(let i=17;i<count;i+=41)if(growth[i*3+1]<.5 && buds[i*4+3]>.6 && energies[i]>=.3)rays.push(i);
  burstMesh=makeTrails(cloud,rays,{BURST_ONLY:''});
  threadGroup=createLightThreads(uniforms);group.add(threadGroup);
  Object.assign($('scene').dataset,{
    lightThreads:String(threadGroup.userData.count),trails:String(picked.length),burstRays:String(rays.length),
    method:'growth-front-branches-and-silver-spray-bursts',particles:String(count),
  });
  $('particle-count').textContent=`${(count/1000).toFixed(0)}K PARTICLES`;
}

function makeTrails({positions,colors,seeds,energies,buds,growth},picked,defines){
  const n=picked.length;
  const homes=new Float32Array(n*3),trailColors=new Float32Array(n*3),trailSeeds=new Float32Array(n*3);
  const trailEnergies=new Float32Array(n),trailBuds=new Float32Array(n*4),trailGrowth=new Float32Array(n*3);
  picked.forEach((i,k)=>{
    homes.set(positions.subarray(i*3,i*3+3),k*3);
    trailColors.set(colors.subarray(i*3,i*3+3),k*3);
    trailSeeds.set(seeds.subarray(i*3,i*3+3),k*3);
    trailBuds.set(buds.subarray(i*4,i*4+4),k*4);
    trailGrowth.set(growth.subarray(i*3,i*3+3),k*3);
    trailEnergies[k]=energies[i];
  });
  const trailGeometry=new THREE.InstancedBufferGeometry();
  const strip=[],indices=[],segments=12;
  for(let i=0;i<=segments;i++)strip.push(i/segments,-1,0,i/segments,1,0);
  for(let i=0;i<segments;i++){const v=i*2;indices.push(v,v+1,v+2,v+1,v+3,v+2);}
  trailGeometry.setAttribute('position',new THREE.Float32BufferAttribute(strip,3));
  trailGeometry.setIndex(indices);
  trailGeometry.setAttribute('aHome',new THREE.InstancedBufferAttribute(homes,3));
  trailGeometry.setAttribute('aColor',new THREE.InstancedBufferAttribute(trailColors,3));
  trailGeometry.setAttribute('aSeed',new THREE.InstancedBufferAttribute(trailSeeds,3));
  trailGeometry.setAttribute('aEnergy',new THREE.InstancedBufferAttribute(trailEnergies,1));
  trailGeometry.setAttribute('aBud',new THREE.InstancedBufferAttribute(trailBuds,4));
  trailGeometry.setAttribute('aGrowth',new THREE.InstancedBufferAttribute(trailGrowth,3));
  trailGeometry.instanceCount=n;
  const trails=new THREE.Mesh(trailGeometry,new THREE.ShaderMaterial({uniforms,defines,vertexShader:trailVertex,fragmentShader:trailFragment,transparent:true,depthWrite:false,depthTest:false,side:THREE.DoubleSide,blending:THREE.AdditiveBlending}));
  trails.frustumCulled=false;group.add(trails);
  return trails;
}

function stage(){
  if(time>=DURATION)return '火树银花';
  for(const [end,label] of STAGES)if(time<end)return label;
  return STAGES[STAGES.length-1][1];
}
let lastStatus='';
function updateUI(){
  const status=`${stage()} · ${time.toFixed(1)}s`;
  if(status===lastStatus)return;
  lastStatus=status;
  $('play').textContent=playing?'暂停':'继续播放';
  $('play').setAttribute('aria-pressed',String(playing));
  $('status').textContent=status;
  $('dissolve').value=String(time/DURATION);
  $('dissolve-value').textContent=`${Math.round(time/DURATION*100)}%`;
  $('timeline').value=String(time);$('timeline-value').textContent=`${time.toFixed(2)} s`;
}
function refreshUI(){lastStatus='';updateUI();}
function seek(value){
  time=THREE.MathUtils.clamp(Number(value)||0,0,DURATION);liveTime=time;playing=false;
  stopOrbit();cameraSnap=true;
  uniforms.uPointerPower.value=0;refreshUI();
}
function resize() {
  width=innerWidth;height=innerHeight;
  renderer.setPixelRatio(dpr);renderer.setSize(width,height);
  composer.setPixelRatio(dpr);composer.setSize(width,height);
  const nextFit=Math.max(1,1.55/(width/height));
  camera.position.multiplyScalar(nextFit/viewFit);viewFit=nextFit;
  uniforms.uAlignmentDistance.value=10.5*viewFit;
  controls.minDistance=4*viewFit;controls.maxDistance=20*viewFit;
  camera.aspect=width/height;camera.updateProjectionMatrix();
  // On narrow screens the camera pulls back (viewFit), packing the same points
  // into fewer pixels; compensate so the tree does not blow out to white.
  uniforms.uPixelRatio.value=dpr;uniforms.uResolution.value.set(width,height);uniforms.uDensityScale.value=Math.min(1,(height/720)**2)/viewFit;
  $('scene').dataset.dpr=dpr.toFixed(2);
}
function setCinematic(on,snap=true){
  cinematic=on;cameraSnap=snap;
  $('cinema').checked=cinemaPreference;
  $('scene').dataset.cinematic=String(cinematic);
}
function reset(){
  time=0;liveTime=0;playing=true;
  if(cinemaPreference){stopOrbit();setCinematic(true);}else setView(0);
  uniforms.uPointerPower.value=0;lastTime=performance.now();refreshUI();
}
function cinematicPose(target){
  const k=THREE.MathUtils.smootherstep(time,0,CINE.settle),inv=1-k;
  // After assembly a slow few-degree drift keeps the parallax alive while the
  // composition stays within the image-registered front view.
  const held=Math.max(0,liveTime-DURATION);
  const idle=uniforms.uMotion.value*Math.sin(held*.16)*CINE.idle*Math.min(1,held/3);
  const azimuth=CINE.azimuth*inv+idle;
  const polar=Math.PI/2-CINE.lift*inv;
  const distance=10.5*viewFit*(1+CINE.push*inv);
  return target.set(Math.sin(polar)*Math.sin(azimuth),Math.cos(polar),Math.sin(polar)*Math.cos(azimuth))
    .multiplyScalar(distance).add(controls.target);
}
function render(dt){
  uniforms.uTime.value=time;uniforms.uLiveTime.value=liveTime;
  // Skip draw calls that cannot contribute: trails once nothing moves, burst
  // rays outside the bloom, branch fibers before the growth front starts.
  uniforms.uSettled.value=time>=MOTION_END?1:0;
  if(trailMesh)trailMesh.visible=time<MOTION_END;
  if(burstMesh)burstMesh.visible=time>=TIMELINE.bloomStart-.08 && time<MOTION_END;
  if(threadGroup)threadGroup.visible=time>=TIMELINE.growStart;
  if(playing && !dragging)uniforms.uPointerPower.value*=Math.exp(-dt*3);
  if(cinematic){
    cinematicPose(cinePosition);
    camera.position.lerp(cinePosition,cameraSnap?1:1-Math.exp(-dt*3.5));
    camera.lookAt(controls.target);cameraSnap=false;
  } else controls.update(dt);
  updateUI();
  const frontFacing=Math.max(0,camera.position.z/camera.position.length());
  uniforms.uViewObliqueness.value=Math.sqrt(Math.max(0,1-frontFacing*frontFacing));
  const data=$('scene').dataset;
  data.viewAngle=THREE.MathUtils.radToDeg(Math.atan2(camera.position.x,camera.position.z)).toFixed(1);
  data.time=time.toFixed(3);data.progress=(time/DURATION).toFixed(4);data.playing=String(playing);
  composer.render();
  if(exportPending){
    exportPending=false;
    renderer.domElement.toBlob(blob=>{
      if(!blob)return;
      if(lastExportUrl)URL.revokeObjectURL(lastExportUrl);
      lastExportUrl=URL.createObjectURL(blob);
      let link=$('download-frame');
      if(!link){link=document.createElement('a');link.id='download-frame';link.className='download-frame';$('export').after(link);}
      link.download='fire-tree-silver-bloom.png';link.href=lastExportUrl;link.textContent='下载 PNG ↗';
    },'image/png');
  }
}
function frame(now){
  requestAnimationFrame(frame);
  if(!loaded||document.hidden||manualFrames){lastTime=now;frameStart=now;frameCount=0;return;}
  const dt=Math.max(0,Math.min((now-lastTime)/1000,.05));lastTime=now;
  frameCount++;
  if(now-frameStart>1200){
    const fps=frameCount*1000/(now-frameStart);
    $('scene').dataset.fps=fps.toFixed(1);
    frameCount=0;frameStart=now;
    if(adaptive && fps<44 && dpr>minDpr+.01){
      if(++slowWindows>=2){dpr=Math.max(minDpr,dpr-.2);slowWindows=0;resize();}
    } else slowWindows=0;
  }
  if(playing){time=Math.min(DURATION,time+dt);liveTime+=dt;}
  render(dt);
}

async function init() {
  renderer=new THREE.WebGLRenderer({canvas:$('scene'),antialias:false,alpha:false,powerPreference:'high-performance',preserveDrawingBuffer:false});
  renderer.setClearColor(new THREE.Color(.0001,.0003,.0007));renderer.toneMapping=THREE.ACESFilmicToneMapping;renderer.toneMappingExposure=1.05;
  scene=new THREE.Scene();group=new THREE.Group();scene.add(group);group.position.set(-.42,.06,0);
  camera=new THREE.PerspectiveCamera(48,width/height,.1,100);camera.position.set(0,0,10.5);
  controls=new OrbitControls(camera,renderer.domElement);controls.enableDamping=true;controls.dampingFactor=.08;controls.enablePan=false;
  controls.minDistance=4;controls.maxDistance=20;controls.minAzimuthAngle=-Infinity;controls.maxAzimuthAngle=Infinity;controls.minPolarAngle=Math.PI*.28;controls.maxPolarAngle=Math.PI*.72;
  controls.autoRotateSpeed=.8;
  controls.saveState();
  controls.addEventListener('start',()=>{if(cinematic)setCinematic(false);});
  composer=new EffectComposer(renderer);composer.addPass(new RenderPass(scene,camera));
  bloom=new UnrealBloomPass(new THREE.Vector2(width,height),BLOOM_DEFAULT,.16,.80);composer.addPass(bloom);composer.addPass(new OutputPass());
  $('bloom').value=String(BLOOM_DEFAULT);
  resize();
  await makePointCloud();loaded=true;lastTime=performance.now();frameStart=lastTime;
  if(inspectTime!==null)seek(inspectTime);
  if(inspectAngle!==null && Number.isFinite(Number(inspectAngle)))setView(THREE.MathUtils.degToRad(Number(inspectAngle)));
  setCinematic(cinematic);
  $('scene').dataset.ready='true';$('scene').dataset.version=VERSION;refreshUI();requestAnimationFrame(frame);
}

$('dissolve').addEventListener('input',e=>seek(Number(e.target.value)*DURATION));
$('play').addEventListener('click',()=>{
  playing=!playing;if(!playing)stopOrbit();lastTime=performance.now();refreshUI();
});
$('timeline').addEventListener('input',e=>seek(e.target.value));
$('reset').addEventListener('click',()=>{if(loaded)reset();});
function stopOrbit(){
  if(controls)controls.autoRotate=false;
  $('orbit').setAttribute('aria-pressed','false');
}
function setView(angle){
  stopOrbit();
  if(cinematic)setCinematic(false);
  const damping=controls.enableDamping;controls.enableDamping=false;controls.update();
  controls.reset();camera.position.set(Math.sin(angle)*10.5*viewFit,0,Math.cos(angle)*10.5*viewFit);controls.update();
  controls.enableDamping=damping;
}
$('front').addEventListener('click',()=>{if(loaded)setView(0);});
$('oblique').addEventListener('click',()=>{if(loaded)setView(Math.PI/4);});
$('side').addEventListener('click',()=>{if(loaded)setView(Math.PI/2);});
$('orbit').addEventListener('click',()=>{if(loaded){if(cinematic)setCinematic(false);controls.autoRotate=!controls.autoRotate;$('orbit').setAttribute('aria-pressed',String(controls.autoRotate));}});
$('cinema').addEventListener('change',e=>{
  cinemaPreference=e.target.checked;
  if(!loaded)return;
  if(cinemaPreference){stopOrbit();setCinematic(true,false);}else setCinematic(false);
});
$('bloom').addEventListener('input',e=>{if(bloom)bloom.strength=Number(e.target.value);});
$('size').addEventListener('input',e=>{uniforms.uSize.value=Number(e.target.value);});
$('export').addEventListener('click',()=>{exportPending=true;});
$('clean').addEventListener('click',()=>document.body.classList.toggle('clean'));
$('fullscreen').addEventListener('click',async()=>{
  try {if(document.fullscreenElement)await document.exitFullscreen();else await document.documentElement.requestFullscreen();}
  catch {$('status').textContent='此窗口不支持全屏，可隐藏界面观看';}
});
document.addEventListener('fullscreenchange',()=>{$('fullscreen').setAttribute('aria-label',document.fullscreenElement?'退出全屏':'全屏');});
addEventListener('keydown',e=>{
  if(/INPUT|TEXTAREA|SELECT/.test(e.target.tagName) || e.target.isContentEditable)return;
  if(e.code==='Space' && !/BUTTON|SUMMARY/.test(e.target.tagName)){e.preventDefault();$('play').click();}
  if(e.key.toLowerCase()==='h')document.body.classList.toggle('clean');
  if(e.key.toLowerCase()==='r' && loaded)reset();
});
$('scene').addEventListener('pointerdown',()=>dragging=true);
addEventListener('pointerup',()=>dragging=false);
$('scene').addEventListener('pointermove',e=>{
  if(!loaded || !playing || reducedMotion.matches)return;
  pointerNdc.set(e.clientX/width*2-1,-e.clientY/height*2+1);
  raycaster.setFromCamera(pointerNdc,camera);
  if(raycaster.ray.intersectPlane(interactionPlane,pointerHit))pointer.copy(group.worldToLocal(pointerHit));
  uniforms.uPointerPower.value=.7;
});
$('scene').addEventListener('webglcontextlost',e=>{e.preventDefault();loaded=false;$('error').hidden=false;$('error').textContent='图形上下文已中断，请刷新页面重新加载。';});
addEventListener('resize',()=>{if(renderer)resize();});
reducedMotion.addEventListener('change',()=>{uniforms.uMotion.value=reducedMotion.matches?0:1;if(reducedMotion.matches){playing=false;time=DURATION;stopOrbit();setCinematic(false);refreshUI();}});

// Deterministic frame rendering for offline recording / QA. Does nothing
// unless called; renders one frame at an explicit timeline and live time.
window.__fireTree={
  version:VERSION,
  // Rendering here switches the page to manual frames (the live loop pauses)
  // until resume() is called, so offline captures cost one render per frame.
  renderAt(t,live=t){
    if(!loaded)return false;
    manualFrames=true;
    time=THREE.MathUtils.clamp(t,0,DURATION);liveTime=live;playing=false;cameraSnap=true;
    render(0);return true;
  },
  resume(){manualFrames=false;lastTime=performance.now();},
  setView(deg){if(loaded)setView(THREE.MathUtils.degToRad(deg));},
  setCinematic(on){if(loaded)setCinematic(Boolean(on));},
};

init().catch(error=>{console.error(error);$('error').hidden=false;$('error').textContent='粒子场未能加载，请确认浏览器支持 WebGL 2 后刷新。';$('status').textContent='加载失败';});
