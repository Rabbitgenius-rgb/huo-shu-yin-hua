// Retain the original tree/crown positions throughout the mature sequence.
// Opening growth and the simultaneous iron/silver bloom keep their own clock.
export const CHOREOGRAPHY=Object.freeze({release:13.74,orbit:18.73,return:25.73,settle:34.8});
// cinematic-v2 acts, aligned to the measured phrase downbeats of the score.
export function choreographyStage(t){
 return t<8.93?'凝枝':t<12.6?'金银同绽':t<18.55?'余辉入枝'
  :t<28.15?'炸树成字':'火树银花';
}
export const choreographyGLSL=/* glsl */`
float choreoEase(float a,float b,float t){float x=clamp((t-a)/(b-a),0.,1.);return x*x*x*(x*(x*6.-15.)+10.);}
vec4 choreograph(vec3 home,vec3 seed,vec3 center,vec3 sourceCenter,float branch,float t){
 return vec4(home,0.);
}
`;
