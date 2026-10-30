// A local response at the emitter, in the bowl's own water shader. It neither
// raises the mirror strength nor adds an independently floating glow plane.
export function attachRootWaterContact(surface) {
  const material = surface.mesh.material;
  material.uniforms.uRootGrowthTime = {value: 0};
  material.fragmentShader = material.fragmentShader
    .replace('uniform sampler2D tDiffuse;', 'uniform sampler2D tDiffuse;\n      uniform float uRootGrowthTime;')
    .replace('gl_FragColor=vec4(water,1.);', `
      float birth=smoothstep(.10,.70,uRootGrowthTime);
      float rootDistance=length(p);
      float contactRadius=mix(.024,.037,smoothstep(2.8,3.8,uRootGrowthTime));
      float contactLight=exp(-pow(rootDistance/contactRadius,2.));
      float breathing=.72*exp(-pow((uRootGrowthTime-.75)/.35,2.))+1.25*exp(-pow((uRootGrowthTime-1.55)/.42,2.));
      float rootWave=0.;
      for(int j=0;j<2;j++){
        float age=uRootGrowthTime-(.48+float(j)*1.15);
        if(age>0.&&age<3.8){
          float crest=exp(-pow((rootDistance-age*.085)/.0045,2.));
          rootWave+=crest*exp(-age*1.0)*smoothstep(0.,.25,age);
        }
      }
      water+=vec3(.095,.046,.022)*contactLight*birth*(.22+.78*breathing);
      water+=vec3(.015,.021,.021)*rootWave*birth*uMotion*(1.+.35*(1.-smoothstep(2.0,5.0,uRootGrowthTime)));
      // A quiet surface crest makes a click readable even over dark water;
      // it does not lift the reflected tree or the surrounding water.
      float touchCrest=0.;
      for(int j=0;j<6;j++){
        float age=uInteractionTime-uTouches[j].z;
        if(age>0.&&age<5.){
          float distanceToTouch=length(p-uTouches[j].xy);
          touchCrest+=exp(-pow((distanceToTouch-age*.32)/.008,2.))
            *exp(-age*.85)*uTouches[j].w*smoothstep(0.,.12,age);
        }
      }
      water+=vec3(.024,.036,.035)*min(touchCrest,.8)*uMotion;
      gl_FragColor=vec4(water,1.);`);
  material.needsUpdate = true;
  return time => {material.uniforms.uRootGrowthTime.value = time;};
}
