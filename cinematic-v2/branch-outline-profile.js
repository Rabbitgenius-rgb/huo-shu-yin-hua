import { VOLUME_PATHS } from '../tree-src/fire-tree-volume.js';

const clamp = value => Math.max(0, Math.min(1, value));
const smooth = value => { const t = clamp(value); return t * t * (3 - 2 * t); };
// The source graph identifies the trunk and its two large limbs. Only the
// broad beginnings of their secondary limbs receive a weaker continuation;
// the crown's supporting twigs and fine terminal sprays retain their light.
const ROLES = new Map([[0, 1], [1, .90], [5, .90],
  [2, .44], [3, .40], [6, .48], [10, .42]]);
const SEGMENTS = VOLUME_PATHS.flatMap((path, branch) => {
  let along = 0;
  return path.slice(1).map((b, index) => {
    const a = path[index], dx = b[0] - a[0], dy = b[1] - a[1];
    const length2 = dx * dx + dy * dy, length = Math.sqrt(length2);
    const segment = { a, b, branch, dx, dy, length2, length, along };
    along += length;
    return segment;
  });
});

/** Main-limb/core shading and one local trunk-concentration weight. */
export function addBranchOutlineProfile(cloud) {
  if (cloud?.branchOutlineVersion === 'branch-structure-tone-v1') return cloud;
  const branchOutline = new Float32Array(cloud.count * 3);
  const positions = cloud.positions;
  const pixelWorld = 12.2 / cloud.sourceWidth;
  // Added crown support is a separate, intentionally sparse twig graph. It
  // must not acquire the thicker original trunk's treatment at its joins.
  const sourceCount = cloud.baseCount ?? cloud.count;
  for (let i = 0; i < sourceCount; i++) {
    const k = i * 3;
    if (cloud.growth[k + 1] < .5 || cloud.growth[k + 2] >= 9) continue;
    const x = cloud.positions[k] / pixelWorld + cloud.sourceWidth * .5;
    const y = cloud.sourceHeight * .5 - cloud.positions[k + 1] / pixelWorld;
    let best = Infinity, otherBest = Infinity, nearest, progress = 0;
    // Match against the complete source graph first. A nearby fine twig
    // never gets reclassified as a main limb merely because it is warm.
    for (const segment of SEGMENTS) {
      const t = clamp(((x - segment.a[0]) * segment.dx + (y - segment.a[1]) * segment.dy) / segment.length2);
      const distance2 = (x - segment.a[0] - segment.dx * t) ** 2
        + (y - segment.a[1] - segment.dy * t) ** 2;
      if (segment.branch !== 0) otherBest = Math.min(otherBest, distance2);
      if (distance2 < best) { best = distance2; nearest = segment; progress = t; }
    }
    const role = ROLES.get(nearest.branch);
    if (!role) continue;
    const { a, b } = nearest;
    const radius = a[3] + (b[3] - a[3]) * progress;
    const taper = smooth((radius - 1.8) / (nearest.branch === 0 ? 4.2 : 5.2));
    if (!taper) continue;
    const z = a[2] + (b[2] - a[2]) * progress;
    const depthRadius = Math.max(.03, Math.min(.34, radius * pixelWorld * 1.1));
    const radial = Math.hypot(Math.sqrt(best) / radius, (cloud.positions[k + 2] - z) / depthRadius);
    // Soft outer support retains stray particles and real 3D thickness.
    // There is no hard clipping, new line, point deletion or sprite growth.
    const weight = role * taper * (1 - smooth((radial - 1.25) / 1.5));
    branchOutline[i * 3] = weight;
    branchOutline[i * 3 + 1] = 1 - smooth((radial - .24) / .90);

  }
  return { ...cloud, positions, branchOutline, branchOutlineVersion: 'branch-structure-tone-v1',
    branchOutlineSourcePositions: cloud.positions };
}
