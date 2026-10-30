import * as THREE from 'three';

const COUNT = 240, HOT_SEEDS = 7, CLEAR_AT = 3.8;
const clamp = value => Math.max(0, Math.min(1, value));
const smooth = value => { const t = clamp(value); return t * t * (3 - 2 * t); };
function random(grain, channel) {
  let n = Math.imul(grain + 1741, 0x9e3779b1) ^ Math.imul(channel + 719, 0x85ebca6b);
  n = Math.imul(n ^ n >>> 16, 0x7feb352d);
  n = Math.imul(n ^ n >>> 15, 0x846ca68b);
  return ((n ^ n >>> 16) >>> 0) / 4294967296;
}

/** A small, seekable root ember bed; all coordinates are real world metres. */
export function createRootIgnition({scene, waterLevel, pixelRatio = 1}) {
  if (!scene?.add || !Number.isFinite(waterLevel)) throw new TypeError('A scene and finite waterLevel are required.');
  const positions = new Float32Array(COUNT * 3), colors = new Float32Array(COUNT * 3);
  const alphas = new Float32Array(COUNT), sizes = new Float32Array(COUNT);
  const births = new Float32Array(COUNT), lives = new Float32Array(COUNT);
  for (let i = 0; i < COUNT; i++) {
    births[i] = -.12 + random(i, 0) * 2.65;
    lives[i] = .55 + random(i, 1) * .60;
    sizes[i] = .85 + random(i, 2) * .60;
    if (i < HOT_SEEDS) {
      births[i] = .012 + i * .027;
      lives[i] = 2.45 + random(i, 1) * .30;
      sizes[i] = 1.85 + random(i, 2) * .20;
    }
  }
  const geometry = new THREE.BufferGeometry();
  geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3).setUsage(THREE.DynamicDrawUsage));
  geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3).setUsage(THREE.DynamicDrawUsage));
  geometry.setAttribute('aAlpha', new THREE.BufferAttribute(alphas, 1).setUsage(THREE.DynamicDrawUsage));
  geometry.setAttribute('aSize', new THREE.BufferAttribute(sizes, 1));
  const ratio = {value: Math.max(.1, Number(pixelRatio) || 1)};
  const material = new THREE.ShaderMaterial({
    uniforms: {uPixelRatio: ratio}, transparent: true, depthTest: true, depthWrite: false,
    blending: THREE.AdditiveBlending,
    vertexShader: /* glsl */`
      attribute vec3 color;
      attribute float aAlpha;
      attribute float aSize;
      uniform float uPixelRatio;
      varying vec3 vColor;
      varying float vAlpha;
      void main(){
        vec4 mv=modelViewMatrix*vec4(position,1.);
        gl_Position=projectionMatrix*mv;
        float minimum=mix(.60,1.50,step(1.8,aSize));
        gl_PointSize=clamp(aSize*uPixelRatio*1.05/max(.75,-mv.z),minimum*uPixelRatio,2.20*uPixelRatio);
        vColor=color;vAlpha=aAlpha;
        if(aAlpha<.0015){gl_Position=vec4(2.,2.,2.,1.);gl_PointSize=0.;}
      }
    `,
    fragmentShader: /* glsl */`
      varying vec3 vColor;
      varying float vAlpha;
      void main(){
        float r=length(gl_PointCoord-.5)*2.;
        if(r>=1.)discard;
        float core=exp(-3.6*r*r)*(1.-smoothstep(.60,1.,r));
        gl_FragColor=vec4(vColor,vAlpha*core);
      }
    `,
  });
  const points = new THREE.Points(geometry, material);
  points.name = 'root-opening-ignition'; points.layers.set(0);
  points.frustumCulled = false; points.renderOrder = 6;
  const userData = points.userData;
  Object.assign(userData, {version: 'root-ignition-v2', particleCount: COUNT, hotSeedCount: HOT_SEEDS,
    directEnergyGain: 2.10, layer: 0,
    root: [0, waterLevel, 0], clearAt: CLEAR_AT, time: 0,
    aliveCount: 0, aboveWaterCount: 0, alphaSum: 0, reduced: true, disposed: false});
  scene.add(points);
  let disposed = false;

  function update({time = 0, reduced = false, pixelRatio: nextRatio} = {}) {
    if (disposed) return userData;
    const t = Math.max(0, Number(time) || 0);
    if (Number.isFinite(nextRatio)) ratio.value = Math.max(.1, nextRatio);
    const off = reduced || t >= CLEAR_AT;
    const start = smooth(t / .18), end = 1 - smooth((t - 2.75) / .95);
    const swell = .78 + .32 * Math.exp(-(((t - 1.75) / .40) ** 2));
    let aliveCount = 0, aboveWaterCount = 0, activeHotSeedCount = 0, alphaSum = 0;
    for (let i = 0; i < COUNT; i++) {
      const k = i * 3, phase = (t - births[i]) / lives[i];
      positions[k] = 0; positions[k + 1] = waterLevel - .001; positions[k + 2] = 0;
      colors[k] = colors[k + 1] = colors[k + 2] = 0;
      alphas[i] = 0;
      if (off || phase <= 0 || phase >= 1) continue;
      const rise = Math.pow(phase, .88), envelope = Math.sin(Math.PI * phase);
      const angle = random(i, 3) * Math.PI * 2;
      const spread = (.0025 + .005 * envelope) * Math.sqrt(random(i, 4));
      // Follow the accepted first trunk segment, with millimetre-scale drift.
      // Sparks originate at the water centre and disappear into its lower stem.
      positions[k] = -.028 * rise + Math.cos(angle) * spread
        + Math.sin(phase * 7 + random(i, 5) * 9) * .0012 * envelope;
      positions[k + 1] = waterLevel - .001 + .044 * rise;
      positions[k + 2] = -.014 * rise + Math.sin(angle) * spread
        + Math.cos(phase * 6 + random(i, 6) * 8) * .0010 * envelope;
      const rootSeed = i < HOT_SEEDS;
      if (rootSeed) {
        const seedRise = Math.pow(phase, .72);
        const seedAngle = i * 2.3999632297;
        const seedSpread = (.0035 + .0025 * envelope) * Math.sqrt((i + .5) / HOT_SEEDS);
        positions[k] = -.009 * seedRise + Math.cos(seedAngle) * seedSpread;
        positions[k + 1] = waterLevel - .001 + .019 * seedRise;
        positions[k + 2] = -.0045 * seedRise + Math.sin(seedAngle) * seedSpread;
      }
      const hot = random(i, 7) > .90 ? 1 : 0;
      const twinkle = .5 + .5 * Math.sin(t * (5 + random(i, 8) * 5) + random(i, 9) * 31);
      const lifeFade = smooth(phase / .08) * (1 - smooth((phase - .55) / .45));
      let alpha = 2.10 * (.18 + .16 * hot + .09 * random(i, 10)) * lifeFade
        * (.68 + .32 * twinkle * twinkle) * start * end * swell;
      colors[k] = .97 + .65 * hot + .16 * rise;
      colors[k + 1] = .20 + .38 * hot + .10 * envelope;
      colors[k + 2] = .035 + .085 * hot;
      if (rootSeed) {
        const seedFade = smooth(phase / .06) * (1 - smooth((phase - .78) / .22));
        alpha = (.62 + .12 * random(i, 10)) * seedFade
          * (.88 + .12 * Math.sin(t * 3.2 + i * .8)) * start * end * swell;
        colors[k] = 1.85 + .22 * random(i, 11);
        colors[k + 1] = .70 + .24 * random(i, 12);
        colors[k + 2] = .10 + .08 * random(i, 13);
      }
      alpha = Math.min(.86, alpha);
      alphas[i] = alpha; alphaSum += alpha;
      if (alpha >= .0015) {
        aliveCount++;
        if (rootSeed) activeHotSeedCount++;
        if (positions[k + 1] >= waterLevel) aboveWaterCount++;
      }
    }
    points.visible = aliveCount > 0;
    geometry.getAttribute('position').needsUpdate = true;
    geometry.getAttribute('color').needsUpdate = true;
    geometry.getAttribute('aAlpha').needsUpdate = true;
    Object.assign(userData, {time: t, reduced: !!reduced, aliveCount, aboveWaterCount, activeHotSeedCount,
      alphaSum, visible: points.visible, pixelRatio: ratio.value});
    return userData;
  }
  function dispose() {
    if (disposed) return;
    disposed = true; points.visible = false; scene.remove(points);
    geometry.dispose(); material.dispose();
    Object.assign(userData, {disposed: true, aliveCount: 0, aboveWaterCount: 0, activeHotSeedCount: 0, alphaSum: 0, visible: false});
  }
  // No flash before the host applies its first time/reduced-motion state.
  update({time: 0, reduced: true});
  return {update, dispose, userData};
}
