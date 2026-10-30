// Static shading data for the existing image-sampled silver particles.
// This field does not move, insert or delete particles, consume the image RNG,
// or build surfaces. Its filled irregular lobes break up uniform luminous fog.
const INV_CELL = 1 / .27;
const UINT_TO_UNIT = 1 / 4294967296;
const clamp01 = v => Math.min(1, Math.max(0, v));
const smooth = v => v * v * (3 - 2 * v);

function hash(x, y, z) {
  let h = Math.imul(x, 374761393) ^ Math.imul(y, 668265263) ^ Math.imul(z, 1442695041);
  h = Math.imul(h ^ h >>> 13, 1274126177);
  return (h ^ h >>> 16) >>> 0;
}

function mixBits(h) {
  h = Math.imul(h ^ h >>> 16, 2246822519);
  h = Math.imul(h ^ h >>> 13, 3266489917);
  return (h ^ h >>> 16) >>> 0;
}

// Eight-corner value noise supplies a softer .6–.9 world-unit envelope.
function envelope(x, y, z) {
  const ix = Math.floor(x), iy = Math.floor(y), iz = Math.floor(z);
  const fx = smooth(x - ix), fy = smooth(y - iy), fz = smooth(z - iz);
  let value = 0;
  for (let k = 0; k <= 1; k++) {
    for (let j = 0; j <= 1; j++) {
      for (let i = 0; i <= 1; i++) {
        value += hash(ix + i, iy + j, iz + k) * UINT_TO_UNIT *
          (i ? fx : 1 - fx) * (j ? fy : 1 - fy) * (k ? fz : 1 - fz);
      }
    }
  }
  return value;
}

/**
 * @param {number} x Existing target x, before frontal ray compensation.
 * @param {number} y Existing target y, before frontal ray compensation.
 * @param {number} z Existing inferred 3D target depth.
 * @returns {[number, number]} [density, ridge], both in [0, 1].
 * density: multi-scale filled microclump weight, suitable for silver opacity.
 * ridge: sparse curved inner-vein accent, suitable for modest point brightness.
 * A starting shader mapping is opacity *= .18 + 1.1 * density and
 * brightness *= 1.0 + .5 * ridge; blend this in only after particles gather.
 * Apply with a silver/chroma mask so the source's ember branches stay intact.
 */
export function sampleFloretDetail(x, y, z) {
  if (!Number.isFinite(x) || !Number.isFinite(y) || !Number.isFinite(z)) return [0, 0];

  // Rotate then smoothly warp the domain: cell axes never line up with the
  // reference image, and neighbouring florets do not repeat on a visible grid.
  const ax = .8 * x + .6 * z;
  const ay = -.36 * x + .8 * y + .48 * z;
  const az = -.48 * x - .6 * y + .64 * z;
  const u = (ax + .075 * Math.sin(ay * 2.3 + az * 1.7)) * INV_CELL;
  const v = (ay + .070 * Math.sin(az * 2.7 - ax * 1.3)) * INV_CELL;
  const w = (az + .065 * Math.sin(ax * 2.1 + ay * 1.9)) * INV_CELL;
  const ix = Math.floor(u), iy = Math.floor(v), iz = Math.floor(w);
  let bestQ = Infinity, lx = 0, ly = 0, lz = 0, bestHash = 0;

  // Jittered neighbouring centers with unequal radii create .18–.36 unit
  // florets. Searching all 27 neighbours avoids jumps at cell boundaries.
  for (let k = -1; k <= 1; k++) {
    for (let j = -1; j <= 1; j++) {
      for (let i = -1; i <= 1; i++) {
        const cx = ix + i, cy = iy + j, cz = iz + k;
        const h0 = hash(cx, cy, cz), h1 = mixBits(h0), h2 = mixBits(h1);
        const dx = u - cx - (.14 + .72 * (h0 & 1023) / 1023);
        const dy = v - cy - (.14 + .72 * (h1 & 1023) / 1023);
        const dz = w - cz - (.14 + .72 * (h2 & 1023) / 1023);
        const radius = .42 + .24 * ((h0 >>> 10) & 1023) / 1023;
        const sx = .79 + .38 * ((h1 >>> 10) & 1023) / 1023;
        const sz = .80 + .36 * ((h2 >>> 10) & 1023) / 1023;
        const q = (dx * dx / (sx * sx) + dy * dy + dz * dz / (sz * sz)) /
          (radius * radius);
        if (q < bestQ) {
          bestQ = q;
          lx = dx / radius; ly = dy / radius; lz = dz / radius;
          bestHash = h0;
        }
      }
    }
  }

  // Filled cores, never a distance-to-shell rim. A low-frequency envelope
  // creates groups and breathing gaps at a second scale across the canopy.
  const core = 1 - smooth(clamp01((bestQ - .12) / 1.13));
  const grouping = envelope(ax * 1.35 + 17.2, ay * 1.35 - 8.6, az * 1.35 + 4.1);
  const density = clamp01(core * (.40 + .60 * smooth(clamp01((grouping - .15) / .65))));

  // One bent, short inner vein through a floret, not its perimeter. The two
  // transverse distances keep this a fine line of points rather than a sheet.
  const phase = (bestHash >>> 20) / 4095 * Math.PI * 2;
  const rx = (lx - .16 * Math.sin(ly * 3.5 + phase)) / .19;
  const rz = (lz - .13 * Math.cos(ly * 4.1 + phase)) / .18;
  const ridgeCore = Math.max(0, 1 - rx * rx - rz * rz);
  const ridge = density * ridgeCore * ridgeCore;
  return [density, ridge];
}
