// cinematic-v2: the mature tree keeps its exact accepted shape. The former
// registered-space sway is retired; every post-bloom response is light only
// (twinkle, silver sweep, measured beat lifts), so nothing below can move a
// particle. The rhythm GLSL stays bundled here because shaders include it
// through this module.
import { rhythmGLSL } from './rhythm-cues.js';
export const SWAY_ROOT = Object.freeze([39 * 12.2 / 1456, -303 * 12.2 / 1456, 0]);
export const SWAY_START = Infinity;

export const treeSwayGLSL = /* glsl */`
${rhythmGLSL}
vec3 swayTree(vec3 p,float liveTime,float motion){
 return p;
}
`;

/** Shape-preserving identity. Accepts a Vector3 or [x,y,z]; writes into out. */
export function swayTreePoint(point, time, motion = 1, out = point) {
  const x = point.x ?? point[0], y = point.y ?? point[1], z = point.z ?? point[2];
  if (typeof out.set === 'function' && !ArrayBuffer.isView(out)) return out.set(x, y, z);
  out[0] = x; out[1] = y; out[2] = z; return out;
}
