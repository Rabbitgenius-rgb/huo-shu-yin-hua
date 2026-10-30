import * as THREE from 'three';
import { createIronFlower } from './iron-flower.js';
import { createRootDrift } from './root-drift.js';
import { sampleFireTree } from '../tree-src/fire-tree-cloud.js';
import { pointVertex, pointFragment, trailVertex, trailFragment } from './fire-gather-shaders.js';
import { createLightThreads } from './fire-light-threads.js';
import { TIMELINE, MOTION_END } from './fire-timeline.js';
import { CROWN_CLUSTER_COUNT, createCrownRadiance } from '../tree-src/fire-crown-clusters.js';
import { VOLUME_PATHS } from '../tree-src/fire-tree-volume.js';
import { addCrownDepthFill } from '../tree-src/fire-crown-fill.js';
import { addCrownSupport } from '../tree-src/fire-crown-support.js';
import { addCrownVolume } from './crown-volume-fill.js';
import { addBranchOutlineProfile } from './branch-outline-profile.js';
import { refineBranchStructure, finalizeBranchStructure } from './branch-structure.js';
import { addTwigParticles } from './twig-particles.js';
import { addLimbGapFill } from './limb-gap-fill.js';
import { addBranchBundleParticles } from './branch-bundle-particles.js';
import { createRootGrowthRoutes } from './root-growth-routes.js';
import { addRootContactParticles } from './root-contact-particles.js';
import { addBalancedSprays } from './balanced-sprays.js';
import { refineParticleLayers } from './particle-layer-refinement.js';
import { finalizeCrownLayers } from './crown-layer-finish.js';
import { finishCinematicCloud } from './cinematic-finish.js';
import { createLetterAttribute, createStrokeTexture, LETTER } from './lettering-gather.js';

export const TREE_REFLECTION_LAYER = 3;
// Last measured low onset of the score (rhythm-cues IMPACTS). A quick lift of
// the whole tree that settles into a slightly brighter closing glow.
export const FINALE_AT = 30.57; // The lettering's closing flash on the shortened score's last hit.
export function finaleFlare(time) {
  const attack = Math.min(1, Math.max(0, (time - (FINALE_AT - .06)) / .10));
  if (attack <= 0) return 0;
  const age = Math.max(0, time - FINALE_AT);
  return attack * (.12 + .88 * Math.exp(-age / .55));
}
// Mirror subset: every 4th particle, with alpha/size compensation.
const REFLECTION_STRIDE = 4, REFLECTION_ALPHA = 4, REFLECTION_SIZE = 1;

/** Claude's real particle tree, with a lake-world root anchor and no own RAF/UI. */
export async function createFireTree({
  scene, scale = .085, position = new THREE.Vector3(-.75, .008, .38),
  pixelRatio = 1, screenHeight = 720, grainSize = 1, waterLevel = position.y - .002,
}) {
  // The bowl owns the water plane; never ground into the standalone page's
  // baked WATER_Y or move the semantic root away from the top bowl water.
  const assembledCloud = refineParticleLayers(addBalancedSprays(addRootContactParticles(addBranchBundleParticles(addLimbGapFill(addTwigParticles(refineBranchStructure(addCrownVolume(addBranchOutlineProfile(addCrownSupport(addCrownDepthFill(await sampleFireTree(undefined, {groundToWater: false}))))))))))));
  // cinematic-v2: materials + radial flowers (?flowers=legacy keeps the old cloud flowers).
  // v2b: the cloud crown is the default again; ?flowers=radial shows the firework flowers.
  const legacyFlowers = !/[?&]flowers=radial\b/.test(globalThis.location?.search || '');
  const cloud = finishCinematicCloud(finalizeBranchStructure(finalizeCrownLayers(assembledCloud)), {radialFlowers: !legacyFlowers});
  const retainedCount = cloud.twigBaseCount ?? cloud.count;
  const rootRoutes = createRootGrowthRoutes(cloud);
  // Review hook only (?debug=1): exposes the assembled arrays for inspection.
  if (/[?&]debug=1\b/.test(globalThis.location?.search || '')) globalThis.__fireTreeCloud = cloud;
  // Review hook only (?debug=layers): tint branch grains by the layer that added them.
  if (/[?&]debug=layers\b/.test(globalThis.location?.search || '')) {
    const ranges = [[0, cloud.baseCount, [1, .55, .2]], [cloud.baseCount + 10000, cloud.baseCount + 10000 + (cloud.supportParticles || 0), [1, 1, 0]],
      [cloud.baseCount + 10000 + (cloud.supportParticles || 0), cloud.twigBaseCount, [1, 0, 0]],
      [cloud.twigBaseCount, cloud.bundleBaseCount, [0, 1, 0]], [cloud.bundleBaseCount, cloud.rootContactBaseCount, [0, .3, 1]],
      [cloud.rootContactBaseCount, cloud.rootContactBaseCount + 800, [1, 0, 1]], [cloud.rootContactBaseCount + 800, cloud.count, [0, 1, 1]]];
    for (const [a, b, c] of ranges) for (let i = a; i < b; i++) if (cloud.growth[i * 3 + 1] > .5) cloud.colors.set(c, i * 3);
  }
  const {count, positions, colors, seeds, energies, normals, florets, crownWeights, buds, growth} = cloud;
  // Buds have moved for this crown layout; keep their source exposure instead
  // of assigning a different pad's brightness from the new XY coordinates.
  const crownRadiance = cloud.crownTone
    ? {values: cloud.crownTone, unmatched: cloud.crownToneUnmatched}
    : createCrownRadiance(cloud);
  // Whole-flower layering includes every source and supplemental cluster.
  const crownOverlap = cloud.crownOverlap;
  // Pack scalar shade controls into one slot; the host GPU also reserves
  // Three.js built-in attributes, so independent scalars exceed its limit.
  const particleDetail = new Float32Array(count * 4);
  for(let i=0;i<count;i++){
    particleDetail[i*4]=crownRadiance.values[i];
    particleDetail[i*4+1]=crownOverlap[i];
    particleDetail[i*4+2]=cloud.branchDensity[i];
    particleDetail[i*4+3]=cloud.twigPresence[i];
  }
  // Anchor the trunk/root junction, not the lowest stray point or image origin.
  const rootGuide = VOLUME_PATHS[0][0], pixelWorld = 12.2 / cloud.sourceWidth;
  const sourceRoot = new THREE.Vector3(
    (rootGuide[0] - cloud.sourceWidth * .5) * pixelWorld,
    (cloud.sourceHeight * .5 - rootGuide[1]) * pixelWorld,
    rootGuide[2],
  );
  const alignmentDistance = 10.5, alignmentOffset = new THREE.Vector2(-.42, .06);
  const localBounds = new THREE.Box3();
  const registered = new THREE.Vector3();
  for (let i = 0; i < retainedCount; i++) {
    const j = i * 3, z = positions[j + 2], rayScale = 1 - z / alignmentDistance;
    registered.set((positions[j] + alignmentOffset.x) * rayScale - alignmentOffset.x,
      (positions[j + 1] + alignmentOffset.y) * rayScale - alignmentOffset.y, z);
    localBounds.expandByPoint(registered);
  }
  const localCenter = localBounds.getCenter(new THREE.Vector3());
  const group = new THREE.Group();
  group.name = 'fire-tree-lake-root'; group.position.copy(position); group.scale.setScalar(scale);
  const content = new THREE.Group();
  content.name = 'fire-tree-source-registered';
  content.position.copy(sourceRoot).negate();
  group.add(content);
  // v3a: targets in the brush lettering for the gather after the tour.
  const letterAttribute = await createLetterAttribute(cloud, retainedCount, (P, i, out) => {
    const z = P[i * 3 + 2], k = 1 - z / alignmentDistance;
    out[0] = (P[i * 3] + alignmentOffset.x) * k - alignmentOffset.x; out[1] = (P[i * 3 + 1] + alignmentOffset.y) * k - alignmentOffset.y; out[2] = z;
  });
  const uniforms = {
    uLetterCenter: {value: new THREE.Vector3(sourceRoot.x, sourceRoot.y + LETTER.lift, 0)},
    uStrokes: {value: createStrokeTexture()},
    uBurstCenter: {value: new THREE.Vector3(sourceRoot.x - .3, sourceRoot.y + 2.4, 0)},
    uRootRoutes: {value: rootRoutes.texture}, uRootRouteSize: {value: new THREE.Vector2(rootRoutes.width,rootRoutes.height)},
    uTime: {value: 0}, uLiveTime: {value: 0}, uMotion: {value: 1},
    // cinematic-v2: full story seconds (0–38.6) for the mature act, and the
    // final beat's whole-tree flare envelope.
    uStoryTime: {value: 0}, uFlare: {value: 0}, uGhost: {value: 0},
    // Silver flowers answering the later local iron flowers (active slots only).
    uEncores: {value: Array.from({length: 10}, () => new THREE.Vector4(0, -99, 0, -99))}, uEncoreCount: {value: 0},
    uResolution: {value: new THREE.Vector2(1280, screenHeight)},
    uDensityScale: {value: Math.min(1, (screenHeight / 720) ** 2)},
    uPointer: {value: new THREE.Vector3(100, 100, 0)}, uPointerPower: {value: 0},
    uSize: {value: grainSize}, uPixelRatio: {value: pixelRatio}, uWorldScale: {value: scale},
    uCrownGain: {value: .42},
    // The shader preserves this baseline outside the local crown-edge mask.
    uMist: {value: 1}, uMistFloor: {value: .5},
    uDirectView: {value: 1},
    // Registered content-space centre; registerToCamera updates this same vector.
    uCrownViewCenter: {value: localCenter},
    uWaterY: {value: waterLevel},
    uAlignmentDistance: {value: alignmentDistance}, uAlignmentOffset: {value: alignmentOffset},
    uViewObliqueness: {value: 0}, uSettled: {value: 0},
    // v2r: eased camera travel (0 at rest, 1 while the tour moves briskly).
    uCamMotion: {value: 0},
  };
  const geometry = new THREE.BufferGeometry();
  for (const [name, data, size] of [
    ['position', positions, 3], ['color', colors, 3], ['aSeed', seeds, 3],
    ['aEnergy', energies, 1], ['aVolumeNormal', normals, 3], ['aFloret', florets, 2],
    ['aCrownWeight', crownWeights, 1], ['aBud', buds, 4], ['aGrowth', growth, 3],
    ['aParticleDetail', particleDetail, 4],
    ['aBranchOutline', cloud.branchOutline, 3],
    ['aRootRoute', rootRoutes.attributes, 4],
    ['aLetter', letterAttribute, 4],
  ]) geometry.setAttribute(name, new THREE.BufferAttribute(data, size));
  const material = new THREE.ShaderMaterial({
    uniforms, vertexShader: pointVertex, fragmentShader: pointFragment,
    transparent: true, depthWrite: false, depthTest: true, blending: THREE.AdditiveBlending,
  });
  const points = new THREE.Points(geometry, material);
  points.name = 'fire-tree-particles'; points.frustumCulled = false; content.add(points);

  // The bowl mirror draws a stride subset of the same attribute buffers (an
  // index only, no copy) instead of the whole cloud. It lives on the reflection
  // layer alone, so the direct view never sees it and keeps every particle.
  const reflectionCount = Math.ceil(count / REFLECTION_STRIDE);
  const reflectionIndex = new Uint32Array(reflectionCount);
  for (let i = 0; i < reflectionCount; i++) reflectionIndex[i] = i * REFLECTION_STRIDE;
  const reflectionGeometry = new THREE.BufferGeometry();
  for (const [name, attribute] of Object.entries(geometry.attributes)) reflectionGeometry.setAttribute(name, attribute);
  reflectionGeometry.setIndex(new THREE.BufferAttribute(reflectionIndex, 1));
  const reflectionMaterial = new THREE.ShaderMaterial({
    uniforms, vertexShader: pointVertex, fragmentShader: pointFragment,
    // Additional depth fans must not raise the mirror's total light budget.
    defines: {REFLECTION_PASS: '', REFLECTION_ALPHA: (REFLECTION_ALPHA * Math.min(1,328909/retainedCount)).toFixed(3), REFLECTION_SIZE: REFLECTION_SIZE.toFixed(3)},
    transparent: true, depthWrite: false, depthTest: true, blending: THREE.AdditiveBlending,
  });
  const reflectionPoints = new THREE.Points(reflectionGeometry, reflectionMaterial);
  reflectionPoints.name = 'fire-tree-particles-reflection'; reflectionPoints.frustumCulled = false;
  content.add(reflectionPoints);

  function makeTrails(picked, defines, name) {
    const n = picked.length;
    const homes = new Float32Array(n * 3), trailColors = new Float32Array(n * 3), trailSeeds = new Float32Array(n * 3);
    const trailRoutes = new Float32Array(n * 4);
    const trailEnergies = new Float32Array(n), trailBuds = new Float32Array(n * 4), trailGrowth = new Float32Array(n * 3);
    picked.forEach((i, k) => {
      trailRoutes.set(rootRoutes.attributes.subarray(i*4,i*4+4),k*4);
      homes.set(positions.subarray(i * 3, i * 3 + 3), k * 3);
      trailColors.set(colors.subarray(i * 3, i * 3 + 3), k * 3);
      trailSeeds.set(seeds.subarray(i * 3, i * 3 + 3), k * 3);
      trailBuds.set(buds.subarray(i * 4, i * 4 + 4), k * 4);
      trailGrowth.set(growth.subarray(i * 3, i * 3 + 3), k * 3);
      trailEnergies[k] = energies[i];
    });
    const geo = new THREE.InstancedBufferGeometry(), strip = [], indices = [], segments = 12;
    for (let i = 0; i <= segments; i++) strip.push(i / segments, -1, 0, i / segments, 1, 0);
    for (let i = 0; i < segments; i++) {const v = i * 2; indices.push(v, v + 1, v + 2, v + 1, v + 3, v + 2);}
    geo.setAttribute('position', new THREE.Float32BufferAttribute(strip, 3)); geo.setIndex(indices);
    for (const [name, data, size] of [
      ['aHome', homes, 3], ['aColor', trailColors, 3], ['aSeed', trailSeeds, 3],
      ['aRootRoute', trailRoutes, 4],
      ['aEnergy', trailEnergies, 1], ['aBud', trailBuds, 4], ['aGrowth', trailGrowth, 3],
    ]) geo.setAttribute(name, new THREE.InstancedBufferAttribute(data, size));
    geo.instanceCount = n;
    const mesh = new THREE.Mesh(geo, new THREE.ShaderMaterial({
      uniforms, defines, vertexShader: trailVertex, fragmentShader: trailFragment,
      transparent: true, depthWrite: false, depthTest: true, side: THREE.DoubleSide, blending: THREE.AdditiveBlending,
    }));
    mesh.name = name; mesh.frustumCulled = false; content.add(mesh); return mesh;
  }
  const picked = [], rays = [];
  for (let i = 0; i < retainedCount; i += 136) if (energies[i] >= .35 && growth[i * 3 + 1] > .5) picked.push(i);
  for (let i = 17; i < retainedCount; i += 41)
    if (growth[i * 3 + 1] < .5 && buds[i * 4 + 3] > .6 && energies[i] >= .3) rays.push(i);
  const trailMesh = makeTrails(picked, {}, 'fire-tree-flight-trails');
  const burstMesh = makeTrails(rays, {BURST_ONLY: ''}, 'fire-tree-bloom-rays');
  const flowMesh = makeTrails(rays, {FLOW_ONLY: ''}, 'silver-flow-traces');
  // Branch fibres stop with the trunk at ignition; silver unfolding keeps
  // its own timeline, and iron sparks retain their independent flight clock.
  const branchTime = {value: 0};
  const threadGroup = createLightThreads({...uniforms, uTime: branchTime}, {groundToWater: false, cloud}); content.add(threadGroup);
  let activeCamera = null, disposed = false, registrationFrozen = false;
  const cameraLocal = new THREE.Vector3(), worldScale = new THREE.Vector3();
  let currentPixelRatio = pixelRatio, currentScreenHeight = screenHeight;

  // Reflector has its own camera and fixed-size render target. Resolve view
  // shading and pixel widths at draw time for both cameras, not just the main.
  function beforeDraw(renderer, _scene, renderCamera, _geometry, drawMaterial) {
    const reflection = activeCamera && renderCamera !== activeCamera;
    const target = renderer.getRenderTarget();
    const ratio = reflection ? 1 : currentPixelRatio;
    const physicalWidth = target?.width ?? renderer.domElement.width;
    const physicalHeight = target?.height ?? renderer.domElement.height;
    uniforms.uResolution.value.set(physicalWidth / ratio, physicalHeight / ratio);
    uniforms.uPixelRatio.value = ratio;
    uniforms.uDensityScale.value = Math.min(1, ((reflection ? physicalHeight : currentScreenHeight) / 720) ** 2);
    renderCamera.getWorldPosition(cameraLocal); content.worldToLocal(cameraLocal); cameraLocal.sub(localCenter);
    const front = Math.max(0, cameraLocal.z / Math.max(.0001, cameraLocal.length()));
    uniforms.uViewObliqueness.value = Math.sqrt(Math.max(0, 1 - front * front));
    // Keep the accepted mirror lighting while lifting only the directly seen silver cores.
    uniforms.uCrownGain.value = reflection ? .16 : .42;
    uniforms.uDirectView.value = reflection ? 0 : 1;
    content.getWorldScale(worldScale); uniforms.uWorldScale.value = Math.abs(worldScale.x);
    drawMaterial.uniformsNeedUpdate = true;
  }
  group.traverse(object => {
    // Layer 3 is the tree-only reflection layer: the bowl water mirrors it, the
    // outer lake (layer 2 only) does not, so the cloud is not drawn a third time.
    object.layers.enable(TREE_REFLECTION_LAYER);
    if (!object.material) return;
    object.material.depthTest = true;
    // The porcelain ornament is a transparent pass at order 3. Draw the
    // foreground tree after it; opaque bowl and water depth still occlude it.
    object.renderOrder = 5;
    object.onBeforeRender = beforeDraw;
  });
  points.layers.disable(TREE_REFLECTION_LAYER);   // full cloud: direct view only
  reflectionPoints.layers.set(TREE_REFLECTION_LAYER); // subset: mirror only
  Object.assign(group.userData, {
    version: 'fire-tree-volume-water-bowl', count,
    sourceWidth: cloud.sourceWidth, sourceHeight: cloud.sourceHeight,
    registeredMinY: localBounds.min.y, registeredMaxY: localBounds.max.y,
    registeredBounds: {min: localBounds.min.toArray(), max: localBounds.max.toArray()},
    trails: picked.length, burstRays: rays.length, lightThreads: threadGroup.userData.count,
    crownClusters: CROWN_CLUSTER_COUNT + cloud.addedCrownClusters,
    addedCrownClusters: cloud.addedCrownClusters, addedParticles: cloud.addedParticles,
    supportBranches: cloud.supportBranches, supportParticles: cloud.supportParticles,
    addedVolumeParticles: cloud.addedVolumeParticles, crownVolumeClusters: cloud.crownVolumeClusters,
    crownRadianceUnmatched: crownRadiance.unmatched,
    branchOutlineVersion: cloud.branchOutlineVersion,
    branchStructureVersion: cloud.branchStructureVersion,
    branchFinalizationVersion: cloud.branchFinalizationVersion,
    crownLayerVersion: cloud.crownLayerVersion,
    branchRebuiltParticles: cloud.branchRebuiltParticles, branchHazeParticles: cloud.branchHazeParticles,
    branchJunctionParticles: cloud.branchJunctionParticles,
    twigAddedParticles: cloud.twigAddedParticles, twigVersion: cloud.twigParticleVersion,
    bundleAddedParticles: cloud.bundleAddedParticles, bundleParticleVersion: cloud.bundleParticleVersion,
    particleLayerVersion: cloud.particleLayerVersion, reconnectedSprayParticles: cloud.reconnectedSprayParticles,
    sprayConnectorParticles: cloud.sprayConnectorParticles,
    baseCount: cloud.baseCount, duration: TIMELINE.duration,
    rootGrowthVersion: rootRoutes.version, growthRoutes: rootRoutes.height,
    rootContactParticles: cloud.rootContactAddedParticles, rootContactVersion: cloud.rootContactVersion,
    cinematicFinish: cloud.cinematicFinishStats,
  });
  scene.add(group); group.updateMatrixWorld(true);
  // Transient sparks are direct-only; the accepted mirror keeps its light budget.
  const ironFlower=createIronFlower({content,cloud,uniforms,waterLevel});
  // cinematic-v2n: dust blown off the roots.
  const rootDrift=createRootDrift({content,strands:cloud.rootStrandInfo,uniforms});
  // No fall-to-water subsystem in the free-space particle scene.
  const falling = Object.freeze({phase:'off',activeGrains:0,silverGrains:0,emberGrains:0});
  function registerToCamera(camera) {
    if (disposed) return null;
    if (registrationFrozen) return group.userData.registration;
    camera.updateMatrixWorld(true); group.updateWorldMatrix(true, true);
    const referenceCamera = camera.getWorldPosition(new THREE.Vector3());
    group.worldToLocal(referenceCamera);
    const distance = referenceCamera.z - content.position.z;
    if (distance <= localBounds.max.z + .01)
      throw new Error('Register the particle tree from a front camera outside its depth bounds.');

    // Register around the actual trunk junction. Downward root wisps may enter
    // the water; using their minimum Y here would float the main trunk above it.
    // The current source junction is on z=0. This also handles a nonzero guide
    // depth by solving its ray shift before freezing the reference camera.
    const rootPerspective = sourceRoot.z / referenceCamera.z;
    content.position.set(
      -sourceRoot.x - referenceCamera.x * rootPerspective,
      -sourceRoot.y - referenceCamera.y * rootPerspective,
      -sourceRoot.z,
    );
    const localReference = referenceCamera.clone().sub(content.position);
    uniforms.uAlignmentDistance.value = distance;
    alignmentOffset.set(-localReference.x, -localReference.y);

    localBounds.makeEmpty();
    for (let i = 0; i < retainedCount; i++) {
      const j = i * 3, z = positions[j + 2], rayScale = 1 - z / distance;
      registered.set((positions[j] + alignmentOffset.x) * rayScale - alignmentOffset.x,
        (positions[j + 1] + alignmentOffset.y) * rayScale - alignmentOffset.y, z);
      localBounds.expandByPoint(registered);
    }
    localBounds.getCenter(localCenter); group.updateMatrixWorld(true);
    const rootRayScale = 1 - sourceRoot.z / distance;
    const rootInContent = new THREE.Vector3(
      (sourceRoot.x + alignmentOffset.x) * rootRayScale - alignmentOffset.x,
      (sourceRoot.y + alignmentOffset.y) * rootRayScale - alignmentOffset.y,
      sourceRoot.z,
    );
    const rootWorld = content.localToWorld(rootInContent.clone());
    const anchorWorld = group.getWorldPosition(new THREE.Vector3());
    registrationFrozen = true;
    Object.assign(group.userData, {
      registeredMinY: localBounds.min.y, registeredMaxY: localBounds.max.y,
      registeredBounds: {min: localBounds.min.toArray(), max: localBounds.max.toArray()},
      registration: {
        frozen: true, distance, offset: alignmentOffset.toArray(),
        cameraLocal: localReference.toArray(), planeZ: 0,
        sourceRoot: sourceRoot.toArray(), rootWorld: rootWorld.toArray(),
        rootAnchorResidual: rootWorld.clone().sub(anchorWorld).toArray(),
        lowestPointRelativeToRoot: localBounds.min.y + content.position.y,
      },
    });
    return group.userData.registration;
  }
  // v2r view sheen: how fast the viewpoint is travelling, eased so the sheen
  // swells quickly when the camera moves and settles back over ~1.5 s when it
  // stops. Jumps (seek, shot buttons) count as cuts, not motion.
  const sheenOverride = (() => { const v = /[?&]sheen=([\d.]+)/.exec(globalThis.location?.search || ''); return v ? Number(v[1]) : null; })();
  const camPosition = new THREE.Vector3(), camLast = new THREE.Vector3(), camDirection = new THREE.Vector3(), camDirectionLast = new THREE.Vector3(), treeCentre = new THREE.Vector3();
  let camClock = 0, camHave = false, camMotion = 0;
  const debugMotion = /[?&]debug=1\b/.test(globalThis.location?.search || '');
  function trackCamera(camera, motion) {
    if (sheenOverride !== null) { uniforms.uCamMotion.value = sheenOverride; return; }
    // Same cap as the story clock (main.js), so slow frames measure story-rate motion.
    const now = performance.now() / 1000, dt = Math.min(now - camClock, .05); camClock = now;
    if (!camera || !motion) { camMotion = 0; uniforms.uCamMotion.value = 0; camHave = false; return; }
    camera.getWorldPosition(camPosition); camera.getWorldDirection(camDirection);
    let target = 0;
    if (camHave && dt > 0 && dt < 2) {
      const move = camPosition.distanceTo(camLast);
      if (move < .5) {
        content.getWorldPosition(treeCentre);
        const rate = move / dt / Math.max(.3, camPosition.distanceTo(treeCentre)) + camDirection.angleTo(camDirectionLast) / dt;
        target = Math.min(1, Math.max(0, (rate - .015) / .145));
        target = target * target * (3 - 2 * target);
      }
    }
    const step = Math.max(dt, 0);
    camMotion += (target - camMotion) * (1 - Math.exp(-step / (target > camMotion ? .35 : 1.5)));
    camLast.copy(camPosition); camDirectionLast.copy(camDirection); camHave = true;
    uniforms.uCamMotion.value = camMotion;
    if (debugMotion) globalThis.__camMotion = camMotion;
  }
  const letterHidden = new Set();
  function update({time, storyTime = time, liveTime = time, motion = true, camera}) {
    if (disposed) return;
    trackCamera(camera, motion);
    const t = THREE.MathUtils.clamp(Number(time) || 0, 0, TIMELINE.duration);
    const story = Math.max(0, Number(storyTime) || 0);
    activeCamera = camera || activeCamera;
    // cinematic-v2: the geometry still settles exactly once (uSettled), but the
    // light clocks keep running so the finished tree can breathe with the score.
    // Shape is protected separately: swayTree() is an identity in this version.
    uniforms.uTime.value = t;
    uniforms.uLiveTime.value = Math.max(0, Number(liveTime) || 0);
    uniforms.uStoryTime.value = story;
    // Live seconds keep running after the story ends, so late sparks, petals
    // and the final glow finish naturally instead of freezing mid-air.
    const live = Math.max(story, uniforms.uLiveTime.value);
    uniforms.uFlare.value = motion ? finaleFlare(live) : 0;
    let encoreSlots = 0;
    if (motion) for (const burst of ironFlower.encoreBursts) {
      const age = live - burst.birth;
      if (age < -.05 || age > 2.4 || encoreSlots >= 10) continue;
      uniforms.uEncores.value[encoreSlots++].set(burst.center[0], burst.center[1], burst.center[2], burst.birth);
    }
    uniforms.uEncoreCount.value = encoreSlots;
    branchTime.value = t;
    uniforms.uMotion.value = motion ? 1 : 0; uniforms.uSettled.value = t >= MOTION_END ? 1 : 0;
    trailMesh.visible = t < 7.2;
    burstMesh.visible = false;
    flowMesh.visible = false; // Post-bloom drawing/folding/return are disabled.
    const lettering = story > LETTER.start + .35;
    // Source-tree fibres retire with its particles; no tree returns behind the title.
    uniforms.uGhost.value = 0;
    threadGroup.visible = t >= TIMELINE.growStart && !lettering;
    threadGroup.children.forEach((child, k) => { if (k > 0) child.visible = !lettering; });
    group.userData.time = t; group.userData.liveTime = uniforms.uLiveTime.value;
    const iron=ironFlower.update({time:live,motion,pixelRatio:currentPixelRatio});
    rootDrift.update({story,live,motion,pixelRatio:currentPixelRatio});
    // v3a: sparks, root mist and fibres leave with the tree once it gathers.
    for (const object of content.children) {
      if (object === points || object === reflectionPoints || object === trailMesh || object === burstMesh || object === flowMesh || object === threadGroup) continue;
      if (lettering && object.visible) { object.visible = false; letterHidden.add(object); }
      else if (!lettering && letterHidden.has(object)) { object.visible = true; letterHidden.delete(object); }
    }

    group.userData.iron=iron;group.userData.falling=falling;
    return {iron,falling};
  }
  update({time: 0});
  return {
    group, count, update, registerToCamera,
    resetLiving(){},
    // The subset is mirror-only, so it toggles by visibility; the rest by layer.
    setReflection(on) {
      group.traverse(object => {
        if (object === points || object.userData.directOnly) return;
        if (object === reflectionPoints) object.visible = !!on;
        else if (on) object.layers.enable(TREE_REFLECTION_LAYER);
        else object.layers.disable(TREE_REFLECTION_LAYER);
      });
    },
    resize({pixelRatio: ratio = currentPixelRatio, screenHeight: height = currentScreenHeight}) {
      currentPixelRatio = Math.max(.1, ratio); currentScreenHeight = Math.max(1, height);
    },
    dispose() {
      if (disposed) return; disposed = true;
      ironFlower.dispose(); rootDrift.dispose();
      scene.remove(group); rootRoutes.texture.dispose();
      group.traverse(object => {
        object.geometry?.dispose();
        if (Array.isArray(object.material)) object.material.forEach(item => item.dispose());
        else object.material?.dispose();
      });
    },
  };
}
