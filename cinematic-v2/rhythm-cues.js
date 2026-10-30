// Timing landmarks measured on the selected music excerpt (starting at
// source 29.5s). They are approximate low-frequency onsets, not a claim that
// every element of the music follows a fixed beat grid.
// After the 28.00 s splice the score's own 35.33 / 37.77 s hits
// land at 28.13 / 30.57 s; the lettering beats are the measured
// onsets that start each character.
export const IMPACTS = Object.freeze([8.93, 11.33, 13.74, 16.13, 18.55, 19.75, 21.85, 23.05, 24.53, 25.73, 28.13, 30.57]);
const END = 32.2;
const clamp = value => Math.max(0, Math.min(1, value));
const smooth = value => { const t = clamp(value); return t * t * (3 - 2 * t); };
export function rhythmImpact(time, delay = 0) {
  const t = time - delay;
  if (t < IMPACTS[0] || time >= END) return 0;
  let cue = IMPACTS[0];
  for (const value of IMPACTS) { if (t < value) break; cue = value; }
  const age = t - cue;
  return smooth(age / .035) * Math.exp(-age / .34);
}
const f = v => v.toFixed(2);
export const rhythmGLSL = /* glsl */`
float rhythmCueTime(float t){
 if(t<${f(IMPACTS[0])})return -100.;
${IMPACTS.slice(1).map((v, i) => ` if(t<${f(v)})return ${f(IMPACTS[i])};`).join('\n')}
 return ${f(IMPACTS[IMPACTS.length - 1])};
}
float rhythmImpact(float time,float delay){
 float t=time-delay;
 float cue=rhythmCueTime(t), age=t-cue;
 return step(${f(IMPACTS[0])},t)*(1.-step(${f(END)},time))*smoothstep(0.,.035,age)*exp(-max(0.,age)/.34);
}
float rhythmDetail(float time,vec3 p){
 float t=time-.06-.12*clamp((p.z+2.)/4.,0.,1.);
 float start=rhythmCueTime(t);
 float beat=floor(max(0.,t-start)/.6);
 float age=t-start-beat*.6;
 // The lighter beats alternate local groups; they do not raise the whole tree.
 float group=exp(-pow((p.x-sin((start+beat)*1.1)*3.8)*.58,2.));
 float accent=mix(.30,.65,mod(beat,2.));
 return step(${f(IMPACTS[0])},t)*(1.-step(${f(END)},time))*smoothstep(0.,.045,age)*exp(-max(0.,age)/.22)*group*accent;
}
`;
