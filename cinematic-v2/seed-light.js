import * as THREE from 'three';

// cinematic-v2 opening: "一粟生光". A single seed of light sits at the root
// from the very first frame, flares when the score enters (~0.3 s), beats once
// more on the first measured low onset (1.76 s) and hands over to the growing
// trunk. Two additive camera-facing sprites (core + halo); fully seekable.
const clamp = x => Math.max(0, Math.min(1, x));
const smooth = (a, b, x) => { const t = clamp((x - a) / (b - a)); return t * t * (3 - 2 * t); };

function glowTexture(stops) {
  const size = 128, canvas = document.createElement('canvas');
  canvas.width = canvas.height = size;
  const ctx = canvas.getContext('2d');
  const gradient = ctx.createRadialGradient(size / 2, size / 2, 0, size / 2, size / 2, size / 2);
  for (const [offset, color] of stops) gradient.addColorStop(offset, color);
  ctx.fillStyle = gradient; ctx.fillRect(0, 0, size, size);
  const texture = new THREE.CanvasTexture(canvas);
  texture.colorSpace = THREE.SRGBColorSpace;
  return texture;
}

export function sampleSeedLight(time) {
  const t = Math.max(0, Number(time) || 0);
  const appear = smooth(0, .14, t);
  const handover = 1 - smooth(2.1, 3.6, t);
  const entry = Math.exp(-(((t - .32) / .11) ** 2));
  const heartbeat = Math.exp(-(((t - 1.78) / .13) ** 2));
  const breath = .78 + .22 * Math.sin(t * 5.6);
  const level = appear * handover * (.62 * breath + 1.15 * entry + .85 * heartbeat);
  return {level, entry, heartbeat};
}

export function createSeedLight({scene, root}) {
  const core = new THREE.Sprite(new THREE.SpriteMaterial({
    map: glowTexture([[0, 'rgba(255,250,236,1)'], [.22, 'rgba(255,214,150,.9)'], [.55, 'rgba(255,140,60,.22)'], [1, 'rgba(255,90,20,0)']]),
    blending: THREE.AdditiveBlending, transparent: true, depthWrite: false, depthTest: true,
  }));
  const halo = new THREE.Sprite(new THREE.SpriteMaterial({
    // Gaussian-like falloff: no visible disc edge.
    map: glowTexture(Array.from({length: 11}, (_, k) => {
      const r = k / 10, a = .52 * Math.exp(-r * r * 9);
      const g = Math.round(186 - 70 * r), b = Math.round(108 - 70 * r);
      return [r, `rgba(255,${g},${b},${(k === 10 ? 0 : a).toFixed(4)})`];
    })),
    blending: THREE.AdditiveBlending, transparent: true, depthWrite: false, depthTest: true,
  }));
  const group = new THREE.Group();
  group.name = 'opening-seed-light';
  group.position.copy(root).add(new THREE.Vector3(0, .004, 0));
  group.add(halo, core);
  group.traverse(object => { object.renderOrder = 7; object.frustumCulled = false; });
  scene.add(group);
  function update({time = 0, reduced = false} = {}) {
    const {level, entry, heartbeat} = sampleSeedLight(time);
    const visible = !reduced && level > .002;
    group.visible = visible;
    if (!visible) return {level: 0};
    const coreSize = .013 + .010 * entry + .006 * heartbeat;
    const haloSize = .050 * (1 + .75 * entry + .45 * heartbeat);
    core.scale.setScalar(coreSize); halo.scale.setScalar(haloSize);
    core.material.opacity = Math.min(1, level);
    halo.material.opacity = Math.min(1, .75 * level);
    return {level};
  }
  update({time: 0, reduced: true});
  return {group, update, dispose() {
    scene.remove(group);
    for (const sprite of [core, halo]) { sprite.material.map.dispose(); sprite.material.dispose(); }
  }};
}
