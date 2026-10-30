// One construction-time finish for the complete crown, including the volume
// copies and the small daughter sprays. The field belongs to each flower;
// it is not a screen-space mask and needs no per-frame particle traversal.
const VERSION = 'whole-bud-crown-layers-v1';
const clamp = (x, lo = 0, hi = 1) => Math.max(lo, Math.min(hi, x));
const smooth = (a, b, x) => { const t = clamp((x - a) / (b - a)); return t * t * (3 - 2 * t); };
const cellKey = (x, y, z) => `${x},${y},${z}`;

function collectFlowers(cloud) {
  const groups = [], cells = new Map(), cellSize = .025;
  for (let i = 0; i < cloud.count; i++) {
    const p = i * 3, b = i * 4;
    if (cloud.growth[p + 1] > .5 || cloud.growth[p + 2] >= 9 || cloud.buds[b + 3] <= .05) continue;
    const center = [0, 1, 2].map(a => cloud.positions[p + a] + cloud.buds[b + a]);
    const cell = center.map(v => Math.floor(v / cellSize));
    let group, nearest = .012 ** 2;
    // Existing source transforms leave sub-millimetre cancellation noise at
    // the same bud. A neighbouring-cell lookup keeps that bud a single unit.
    for (let x = -1; x <= 1; x++) for (let y = -1; y <= 1; y++) for (let z = -1; z <= 1; z++) {
      const bucket = cells.get(cellKey(cell[0] + x, cell[1] + y, cell[2] + z));
      for (const candidate of bucket || []) {
        const d = center.reduce((sum, v, a) => sum + (v - candidate.center[a]) ** 2, 0);
        if (d < nearest) { nearest = d; group = candidate; }
      }
    }
    if (!group) {
      group = {center, first: i, indices: [], mean: [0, 0, 0], radius: [0, 0, 0]};
      groups.push(group);
      const key = cellKey(...cell), bucket = cells.get(key) || [];
      bucket.push(group); cells.set(key, bucket);
    }
    group.indices.push(i);
    for (let a = 0; a < 3; a++) group.mean[a] += cloud.positions[p + a];
  }
  for (const g of groups) {
    const count = g.indices.length;
    for (let a = 0; a < 3; a++) g.mean[a] /= count;
    for (const i of g.indices) for (let a = 0; a < 3; a++) {
      g.radius[a] += (cloud.positions[i * 3 + a] - g.mean[a]) ** 2;
    }
    // RMS radii ignore a handful of remote fringe grains. Their loose bounds
    // must not make two otherwise separate flowers count as one dense mass.
    for (let a = 0; a < 3; a++) g.radius[a] = Math.max(.065, Math.sqrt(g.radius[a] / count) * 2.25);
  }
  return groups;
}

function findNeighbours(groups) {
  for (const g of groups) {
    let pressure = 0, strongest = 0;
    const leading = [0, 0, 0];
    g.direction = [1, 0];
    for (const other of groups) {
      if (g === other || other.indices.length < 80) continue;
      const dx = other.mean[0] - g.mean[0], dy = other.mean[1] - g.mean[1];
      const rx = g.radius[0] + other.radius[0], ry = g.radius[1] + other.radius[1];
      const d2 = (dx / rx) ** 2 + (dy / ry) ** 2;
      if (d2 > 2.6) continue;
      const dz = other.mean[2] - g.mean[2];
      // Positive z is the accepted frontal side. Rear partners contribute
      // less competition; large, complete flowers take priority over fills.
      // Shader view attenuation later releases this ordering at side views.
      const depthOrder = .10 + .90 * smooth(-.12, .72, dz);
      const importance = clamp(.5 + .24 * Math.log(other.indices.length / g.indices.length), .16, .95);
      const mass = Math.min(1, Math.sqrt(other.indices.length / 2200));
      const influence = Math.exp(-2.05 * d2) * depthOrder * importance * mass;
      pressure += influence;
      if (influence > leading[0]) { leading[2] = leading[1]; leading[1] = leading[0]; leading[0] = influence; }
      else if (influence > leading[1]) { leading[2] = leading[1]; leading[1] = influence; }
      else if (influence > leading[2]) leading[2] = influence;
      const planarDistance = Math.hypot(dx, dy);
      if (influence > strongest && planarDistance > .04) {
        strongest = influence; g.direction = [dx / planarDistance, dy / planarDistance];
      }
    }
    // A crowded tree can have dozens of faint distant neighbours. Let the
    // three actual competitors dominate instead of flattening every group
    // to the same maximum attenuation simply because the canopy is full.
    const localPressure = leading[0] + .50 * leading[1] + .25 * leading[2]
      + .08 * Math.max(0, pressure - leading[0] - leading[1] - leading[2]);
    g.overlap = Math.min(.82, 1 - Math.exp(-1.3 * localPressure));
  }
}

/** Preserve every flower centre, source index, parent endpoint and burst ID. */
export function finalizeCrownLayers(cloud) {
  if (cloud.crownLayerVersion === VERSION) return cloud;
  const groups = collectFlowers(cloud);
  findNeighbours(groups);
  const positions = cloud.positions.slice(), normals = cloud.normals.slice(), buds = cloud.buds.slice();
  const crownOverlap = new Float32Array(cloud.count);
  const parentQueries = new Map();
  let movedParticles = 0, movedClusters = 0, maxDisplacement = 0, maxCenterError = 0;
  const adjusted = [];
  for (const g of groups) {
    const [cx, cy, cz] = g.center;
    // Keep original source flowers, large flower volumes and the silhouette.
    // Only already-added small fills in the crowded interior are tightened.
    const internalFill = g.first >= (cloud.baseCount ?? Infinity) && g.indices.length < 3000
      && Math.abs(cx) < 1.65 && cy > -.25 && cy < 1.65 && Math.abs(cz) < 3.2;
    const relief = internalFill ? smooth(.18, .52, g.overlap) : 0;
    const alongScale = 1 - .16 * relief, acrossScale = 1 - .035 * relief, depthScale = 1 - .055 * relief;
    const [ux, uy] = g.direction;
    if (relief > .001) {
      movedClusters++;
      adjusted.push({center: g.center.slice(), count: g.indices.length, alongScale, acrossScale, depthScale});
    }
    for (const i of g.indices) {
      const p = i * 3, b = i * 4;
      // Keep the fine floret field, including gaps and coherent short ridges,
      // intact. This is a whole-flower depth/priority value, not new noise.
      crownOverlap[i] = g.overlap;
      if (relief <= .001) continue;
      const center = [0, 1, 2].map(a => cloud.positions[p + a] + cloud.buds[b + a]);
      const dx = -cloud.buds[b], dy = -cloud.buds[b + 1], dz = -cloud.buds[b + 2];
      const along = (dx * ux + dy * uy) * alongScale;
      const across = (-dx * uy + dy * ux) * acrossScale;
      positions[p] = center[0] + along * ux - across * uy;
      positions[p + 1] = center[1] + along * uy + across * ux;
      positions[p + 2] = center[2] + dz * depthScale;
      let distance = 0;
      for (let a = 0; a < 3; a++) {
        buds[b + a] = center[a] - positions[p + a];
        distance += (positions[p + a] - cloud.positions[p + a]) ** 2;
        maxCenterError = Math.max(maxCenterError, Math.abs(positions[p + a] + buds[b + a] - center[a]));
      }
      // Non-uniform shaping requires the inverse transpose, not the position
      // transform. Local bright arcs therefore stay on the same grain face.
      const na = (normals[p] * ux + normals[p + 1] * uy) / alongScale;
      const nb = (-normals[p] * uy + normals[p + 1] * ux) / acrossScale;
      const nx = na * ux - nb * uy, ny = na * uy + nb * ux, nz = normals[p + 2] / depthScale;
      const length = Math.hypot(nx, ny, nz);
      if (length > 1e-9) { normals[p] = nx / length; normals[p + 1] = ny / length; normals[p + 2] = nz / length; }
      // For partial bud weights, p + bud*w is not exactly the flower centre.
      // Preserve that original nearest-route query as CPU-only metadata so
      // the integration can keep the existing mother branch selection.
      const factor = clamp(cloud.buds[b + 3]);
      parentQueries.set(i, [0, 1, 2].map(a => cloud.positions[p + a] + cloud.buds[b + a] * factor));
      maxDisplacement = Math.max(maxDisplacement, Math.sqrt(distance));
      movedParticles++;
    }
  }
  return {...cloud, positions, normals, buds, crownOverlap,
    crownParentQueries: parentQueries, crownLayerVersion: VERSION,
    crownLayerStats: {clusters: groups.length, adjustedClusters: movedClusters,
      adjustedParticles: movedParticles, maxDisplacement, maxCenterError, adjusted}};
}
