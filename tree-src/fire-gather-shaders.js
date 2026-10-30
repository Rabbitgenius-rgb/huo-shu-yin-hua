// Every luminous point owns a continuous flight into its own sampled destination.
// Trail vertices sample that same flight at earlier times; no tiles or image planes.
//
// silver-bloom edition: the destinations are unchanged. What changed is the
// approach (a vortex inflow, branches growing from the trunk base, each silver
// spray gathering into a bud and opening like a firework shell) and the
// settled shading (dithered spray membership, a brightness hierarchy with
// sparse crisp sparkles, front/back depth tone, a slow light sweep).
import { timelineGLSL } from './fire-timeline.js';

const trajectory = /* glsl */`
uniform float uTime;
uniform float uLiveTime;
uniform float uMotion;
uniform vec3 uPointer;
uniform float uPointerPower;
uniform float uAlignmentDistance;
uniform vec2 uAlignmentOffset;
uniform float uSettled;
uniform float uWaterY;
uniform float uWorldScale;
const float PI=3.14159265359;
${timelineGLSL}
float hash(float x){return fract(sin(x)*43758.5453123);}
float warmBranch(vec3 sourceColor){
 float peak=max(max(sourceColor.r,sourceColor.g),max(sourceColor.b,.001));
 return smoothstep(.05,.48,(sourceColor.r-sourceColor.b)/peak);
}
// Move each sampled pixel along its original front-view ray, not sideways.
// Its depth is real; the projected silhouette stays registered to the image.
vec3 registered(vec3 p){
 p.xy=(p.xy+uAlignmentOffset)*(1.-p.z/uAlignmentDistance)-uAlignmentOffset;
 return p;
}
// Sparks differ: each has its own burst speed and how far it was drawn into
// the bud, so a shell opens in layers instead of as a scaled copy of its cell.
float burstLen(vec3 seed){return BURST_LEN*(.78+.44*hash(seed.y*57.3+seed.z*11.1));}
float budReach(vec3 seed){return BUD_SCALE*(.80+.20*hash(seed.z*31.7+seed.x*5.3));}
// x: flight start, y: arrival, z: burst start (<0 = none), w: fully settled.
// growth.x is the normalized growth distance (branches) or spray bloom order
// (crown); growth.y is 1 for branch particles. Per-particle jitter keeps the
// growth front soft: a travelling glow, never a hard-edged batch.
vec4 timing(vec3 seed,vec2 growth,float budWeight){
 if(growth.y>.5){
  float arrive=GROW_START+growth.x*GROW_SPAN+(seed.x-.5)*.95;
  float start=max(-.7,arrive-(3.+seed.z*1.7));
  return vec4(start,arrive,-1.,arrive);
 }
 float burst=BLOOM_START+growth.x*BLOOM_SPAN+(seed.x-.5)*.10;
 float gathered=smoothstep(.12,.55,budWeight);
 // Core particles reach the bud just before it opens; loose fringe dust drifts
 // in during and after the burst and fills the ragged edges.
 float arrive=mix(burst+.12+seed.y*1.05,burst-.17-seed.z*.24,gathered);
 float start=max(-.7,arrive-(3.3+seed.z*1.5));
 return vec4(start,arrive,burst,max(arrive,burst+burstLen(seed)));
}
// Points beneath the dark water (embers rising out of it) are only faintly
// seen through the surface. Takes a model-space position.
float aboveWater(vec3 p){
 float y=(modelMatrix*vec4(p,1.)).y;
 return mix(.14,1.,smoothstep(uWaterY-.9*uWorldScale,uWaterY+.03*uWorldScale,y));
}
// Shell expansion with drag: a fast pop that settles exactly on the target.
float burstOpen(float time,float burst,vec3 seed){
 if(burst<0.)return 1.;
 float u=clamp((time-burst)/burstLen(seed),0.,1.);
 return (1.-exp(-5.2*u))/(1.-exp(-5.2));
}
vec3 flight(vec3 home,vec3 seed,vec4 bud,vec2 growth,vec4 tm,float time){
 // Settled points skip all flight math (most of the hold and the whole idle).
 if(time>=tm.w)return registered(home);
 float open=burstOpen(time,tm.z,seed);
 vec3 target=registered(home+bud.xyz*(budReach(seed)*bud.w*(1.-open)));
 float phase=clamp((time-tm.x)/max(.001,tm.y-tm.x),0.,1.);
 if(phase>=1.)return target;
 float t=phase*phase*phase*(phase*(phase*6.-15.)+10.);
 float az=seed.y*2.*PI;
 float h1=hash(seed.z*71.7+seed.y*21.9);
 float h2=hash(seed.x*93.7+seed.z*17.3);
 float h3=hash(seed.x*121.3+seed.y*7.1);
 // A wide ring around the trunk axis fills the whole frame (no empty centre):
 // silver motes drift in from above, embers rise from below.
 float ring=5.2+h1*8.;
 float elevation=mix(1.-2.*pow(h2,1.7),-1.+2.*pow(h2,2.1),growth.y);
 vec3 start=vec3(cos(az)*ring,elevation*5.6+.3,sin(az)*ring*.85);
 vec3 p=mix(start,target,t);
 // One coherent vortex around the trunk; the swirl unwinds to zero on arrival.
 float inv=1.-t;
 float swirl=(1.2+h3*1.3+.05*time)*inv*inv;
 float c=cos(swirl),s=sin(swirl);
 p.xz=vec2(c*p.x-s*p.z,s*p.x+c*p.z);
 if(p.z>0.)p.z*=mix(.46,1.,t); // keep the near side of the vortex off the lens
 p.y+=sin(t*PI)*(h2-.5)*1.3;
 float envelope=sin(phase*PI);
 vec3 eddy=vec3(sin(phase*10.+seed.x*27.),cos(phase*8.+seed.y*19.),sin(phase*7.+seed.z*23.));
 p+=eddy*envelope*envelope*.13*uMotion;
 // Interaction fades before landing, so the reference silhouette stays exact.
 vec3 delta=p-uPointer;
 p+=normalize(delta+vec3(.01,.01,.2))*exp(-dot(delta.xy,delta.xy)*1.5)
   *uPointerPower*.10*(1.-smoothstep(.65,.97,phase))*uMotion;
 return p;
}
`;

export const pointVertex=/* glsl */`
${trajectory}
attribute vec3 color;
attribute vec3 aSeed;
attribute float aEnergy;
attribute vec3 aVolumeNormal;
attribute vec2 aFloret;
attribute float aCrownWeight;
attribute float aCrownTone;
attribute vec4 aBud;
attribute vec3 aGrowth;
uniform float uSize;
uniform float uCrownGain;
uniform float uMist;
uniform float uMistFloor;
uniform float uDirectView;
uniform float uViewObliqueness;
uniform float uPixelRatio;
uniform float uDensityScale;
varying vec3 vColor;
varying float vAlpha;
varying float vSharpness;
varying float vStar;
void main(){
 // Once everything has landed, a uniform branch skips all timing math.
 vec4 tm=uSettled>.5?vec4(-3.,-2.,-1.,-1.):timing(aSeed,aGrowth.xy,aBud.w);
 vec3 p=flight(position,aSeed,aBud,aGrowth.xy,tm,uTime);
 vec4 mv=modelViewMatrix*vec4(p,1.);
 gl_Position=projectionMatrix*mv;

 float phase=clamp((uTime-tm.x)/max(.001,tm.y-tm.x),0.,1.);
 float arrived=smoothstep(.78,.995,phase);
 float hasBurst=step(0.,tm.z)*aBud.w;
 float open=burstOpen(uTime,tm.z,aSeed);
 float sinceBurst=uTime-tm.z;
 float budded=arrived*hasBurst*(1.-open);              // compact glowing bud
 float landed=arrived*mix(1.,smoothstep(.40,.97,open),hasBurst);
 float gathered=max(landed,arrived*hasBurst);          // bud or settled
 float onWater=step(9.,aGrowth.z);
 float budGain=aGrowth.z-10.*onWater;
 float flash=hasBurst*step(0.,sinceBurst)*exp(-max(0.,sinceBurst)*4.5)*mix(1.,budGain,.7);
 float sinceArrive=uTime-tm.y;
 float ignite=aGrowth.y*step(0.,sinceArrive)*exp(-max(0.,sinceArrive)*2.4);

 float silver=1.-warmBranch(color);
 float warm=1.-silver;
 // Silver mist: the dither below used to carve near-black channels between
 // the sprays. Lift the weight floor of silver grains only, so sprays merge
 // into one soft cloud and the channels stay as thin, speckled shadows.
 float cw=mix(aCrownWeight,max(aCrownWeight,uMistFloor),uMist*silver*(1.-aGrowth.y));
 float spray=landed*silver;
 // Spray membership (gaps, fringes) applies from the moment a point is gathered
 // into its bud, so gap particles never light up a compressed shell.
 float member=gathered*silver;
 float rnd=fract(aSeed.z*7.31+aSeed.y*3.17+aSeed.x*1.93);
 float grain=pow(smoothstep(.64,.98,aSeed.y),2.);
 float inSpray=smoothstep(.30,.75,cw)*silver*(1.-aGrowth.y);
 // Brightness hierarchy: fine dust, the spray body, crisp sparkles and a few
 // hundred diffraction glints, instead of one uniform grey grain. Sparkles
 // gather in the dense florets (~6%) and thin out at fringes (~1.5%).
 float sparkle=step(mix(.984,.938,smoothstep(.2,.8,aFloret.x)),aSeed.x)*inSpray;
 float star=step(.9962,aSeed.x)*step(.45,aSeed.y)*inSpray;
 float brightTraveler=step(.91,aSeed.z);
 float rareSpark=step(.985,aSeed.x)*smoothstep(.55,.95,aEnergy);
 // The bowl host scales the source tree down to world-space metres.
 // Keep grain widths in source scale instead of inflating point sprites.
 float localViewDistance=-mv.z/max(.0001,uWorldScale);
 float perspective=10.2/max(.5,localViewDistance);
 // Deeper points retain the reference's front-view grain size. At an angle
 // they return gradually to perspective size for near/far depth cues.
 float imageScale=mix(1.-position.z/uAlignmentDistance,1.,uViewObliqueness);
 float settledSize=(.94+aSeed.x*.62+rareSpark*.38+sparkle*.95+star*4.2)*perspective*imageScale;
 float flightSize=(.84+aSeed.x*.37+brightTraveler*.72)*sqrt(perspective);
 float size=mix(flightSize,settledSize,gathered)*mix(1.,.8,budded);
 gl_PointSize=clamp(uSize*uPixelRatio*size,.7,mix(3.1,9.,star*landed)*uPixelRatio);

 float twinkle=.5+.5*sin(uLiveTime*(.9+aSeed.y*2.1)+aSeed.z*41.);
 twinkle=mix(1.,.30+.95*twinkle*twinkle,uMotion);
 // A slow band of light passes over the finished crown, like a glint
 // travelling across silver foil. Only shading moves, never the points.
 float along=dot(position.xy,vec2(.86,.5))+position.z*.15;
 float sweepAt=mod(uLiveTime*.8+4.,14.)-6.;
 float sweep=exp(-pow((along-sweepAt)*1.1,2.))*smoothstep(11.2,12.4,uTime)*uMotion;

 vec3 tint=color/max(max(color.r,color.g),max(color.b,.01));
 // 红金: vermilion fine twigs, hotter gold where the source trunk is brightest.
 vec3 emberTone=mix(vec3(1.74,.80,.50),vec3(1.58,1.22,.82),smoothstep(.42,.92,aEnergy));
 // Front sprays read brighter and whiter; deeper sprays cooler and dimmer.
 // Front/back tone is relative to the front camera, so it fades out when the
 // tree is seen from an angle (the volume shading below takes over there).
 float front=mix(smoothstep(-2.5,2.3,position.z),.6,uViewObliqueness);
 vec3 silverTone=mix(vec3(.88,.93,1.08),vec3(1.10,1.09,1.10),front);
 vec3 settledColor=color*mix(silverTone*1.06,emberTone,warm);
 vec3 flightColor=mix(tint*vec3(1.1,.84,.6),tint*vec3(.92,.97,1.08),silver)*(.76+aEnergy*.40);
 vColor=mix(flightColor,settledColor,gathered);
 // The lower-left source pad is already very bright. Lift the upper pads
 // selectively so the crown reads as layers, retaining all grain/gap masks.
 float upperPad=smoothstep(.5,1.8,(position+aBud.xyz).y);
 float crownGain=uCrownGain+uDirectView*mix(-.08,.18,upperPad);
 vColor*=1.+crownGain*landed*inSpray;
 // A few pads lead, others recede. Rebalance the already visible grains,
 // without lighting the dark channels or adding a translucent haze.
 vColor*=mix(1.,aCrownTone,landed*inSpray*uDirectView);
 vColor*=1.+spray*(grain*.75+aFloret.y*.75);
 vColor*=mix(1.,mix(.62,1.24,cw),spray);   // spray cores brighter than fringes
 vColor+=landed*sparkle*vec3(.95,1.,1.16)*(1.05+1.7*sweep)*twinkle;
 vColor*=1.+spray*sweep*.22;
 // The burst glitters: its sparkle subset flares, the body only warms up.
 vColor*=1.+flash*mix(.35,2.6,step(.86,aSeed.x))+ignite*1.0+budded*.12;
 vColor=mix(vColor,vec3(2.3,2.45,2.8)*(.55+.45*twinkle)*(1.+.8*sweep),star*landed);

 // Reduce the accumulated silver body light while keeping its fine glints.
 // Only opened, directly viewed crown grains change; the mirror keeps its tone.
 float crownDetail=max(sparkle,star);
 float silverBody=uDirectView*landed*silver*(1.-aGrowth.y);
 vColor*=mix(1.,mix(.84,.94,crownDetail),silverBody);

 float flyingAlpha=mix(.040,.60*(.55+.45*twinkle),brightTraveler)*(.46+aEnergy*.54);
 float finalAlpha=(.18+aEnergy*.38)*(.78+aEnergy*.36);
 float glint=sin(uLiveTime*(1.3+aSeed.y*1.7)+aSeed.x*31.);
 float breathing=1.+(pow(max(0.,glint),8.)*.65-.025)*step(.94,aSeed.y)*uMotion*landed;
 vAlpha=mix(flyingAlpha,finalAlpha,gathered)*uDensityScale*breathing;
 // Preserve every target while separating silver microclusters optically.
 float clustered=(.30+1.35*aFloret.x)*(.75+grain*.70)+aFloret.y*.22;
 vAlpha*=mix(1.,clustered,member);
 // Dithered spray membership: in the gaps points go dark one by one, so the
 // channels are true voids with a few stray grains, and spray edges break into
 // individual particles instead of fading through soft grey shadow.
 float keep=smoothstep(rnd-.10,rnd+.10,cw*1.55-.07);
 vAlpha*=mix(1.,keep*mix(.74,1.10,cw),member);
 vAlpha*=mix(1.,mix(.82,1.12,front),member);
 vAlpha*=1.+landed*(sparkle*.7+star*1.4);
 // While the shell is compressed its light is spread over fewer pixels: scale
 // alpha with the shell's current area so a bud is a spark and an opening shell
 // stays a shower of grains instead of a blown-out puff.
 float shell=1.-budReach(aSeed)*aBud.w*(1.-open);
 vAlpha*=mix(1.,min(1.,max(shell*shell*1.25,.035*budGain)),hasBurst*arrived);
 vSharpness=spray;
 vStar=star*landed;
 // A translucent particle cloud still needs tonal separation between lobes.
 // In front view preserve source brightness; on orbit reveal spatial shading.
 vec3 volumeNormal=normalize(normalMatrix*aVolumeNormal);
 float facing=dot(volumeNormal,normalize(-mv.xyz));
 float light=dot(normalize(aVolumeNormal),normalize(vec3(-.45,.75,.60)));
 float depthTone=(.47+.42*smoothstep(-.55,.9,facing))*(.77+.25*smoothstep(-.6,1.,light));
 // Fine branches emit light on both sides: surface-style backface shading
 // was hiding their attachments on orbit. Keep the distant crown subdued,
 // but let nearby silver cores and the supporting twigs remain legible.
 float branchRelief=.62*aGrowth.y;
 float coreRelief=.30*inSpray*smoothstep(-.25,.75,facing);
 depthTone=mix(depthTone,1.,max(branchRelief,coreRelief)*uDirectView);
 float distanceFade=exp(-.10*max(0.,localViewDistance-uAlignmentDistance));
 vAlpha*=mix(1.,depthTone*distanceFade,landed*uViewObliqueness);
 // Root mist on the water: at grazing angles a flat sheet piles up on screen,
 // so thin it out there; a slow shimmer moves across it.
 vAlpha*=mix(1.,.5,onWater*uViewObliqueness);
 vColor*=1.+onWater*landed*.22*sin(uLiveTime*1.2+position.x*6.+position.z*4.)*uMotion;
 vAlpha*=smoothstep(0.,.5,uTime)*aboveWater(p);
#ifdef REFLECTION_PASS
 // Index subset (see particle-tree.js) drawn into the mirror target only.
 // Fewer points carry proportionally more light so mean reflected energy holds.
 vAlpha*=REFLECTION_ALPHA;
 gl_PointSize=max(.7,gl_PointSize*REFLECTION_SIZE);
#endif
 // Fully gated points are not rasterized at all.
 if(vAlpha<.0015){gl_Position=vec4(2.,2.,2.,1.);gl_PointSize=0.;}
}
`;

export const pointFragment=/* glsl */`
varying vec3 vColor;
varying float vAlpha;
varying float vSharpness;
varying float vStar;
void main(){
 vec2 uv=gl_PointCoord-.5;
 float radius=length(uv)*2.;
 if(radius>=1.)discard;
 // A soft circular core and an edge that reaches zero: never square sprites.
 float shape=exp(-mix(3.2,4.8,vSharpness)*radius*radius)*(1.-smoothstep(.62,1.,radius));
 if(vStar>.01){
  // Rare four-point glints: a pin-sharp core with two hairline rays.
  vec2 a=abs(uv)*2.;
  float rays=max(exp(-a.x*15.)*exp(-a.y*3.4),exp(-a.y*15.)*exp(-a.x*3.4))*(1.-radius);
  shape=mix(shape,exp(-24.*radius*radius)+rays*.8,vStar);
 }
 gl_FragColor=vec4(vColor,shape*vAlpha);
}
`;

export const trailVertex=/* glsl */`
${trajectory}
attribute vec3 aHome;
attribute vec3 aSeed;
attribute vec3 aColor;
attribute float aEnergy;
attribute vec4 aBud;
attribute vec3 aGrowth;
uniform vec2 uResolution;
uniform float uDensityScale;
varying vec3 vColor;
varying float vAlpha;
varying float vAcross;
void main(){
 float along=position.x;
 vec4 tm=timing(aSeed,aGrowth.xy,aBud.w);
#ifdef BURST_ONLY
 float duration=.20+aSeed.z*.16;
#else
 float duration=.11+aSeed.z*.17;
#endif
 float sampleTime=max(0.,uTime-along*duration);
 vec3 p=flight(aHome,aSeed,aBud,aGrowth.xy,tm,sampleTime);
 vec3 next=flight(aHome,aSeed,aBud,aGrowth.xy,tm,sampleTime+.012);
 vec3 previous=flight(aHome,aSeed,aBud,aGrowth.xy,tm,max(0.,sampleTime-.012));
 vec4 clip=projectionMatrix*modelViewMatrix*vec4(p,1.);
 vec4 nc=projectionMatrix*modelViewMatrix*vec4(next,1.);
 vec4 pc=projectionMatrix*modelViewMatrix*vec4(previous,1.);
 vec2 tangent=(nc.xy/max(nc.w,.001)-pc.xy/max(pc.w,.001))*uResolution;
 vec2 normal=normalize(vec2(-tangent.y,tangent.x)+vec2(.00001));
 // Half-width in CSS pixels; the bright core is narrower than the strip.
 float width=(.29+aSeed.y*.26)*(1.-along*.90);
 clip.xy+=normal*position.y*width*2./uResolution*clip.w;
 gl_Position=clip;
 float phase=clamp((uTime-tm.x)/max(.001,tm.y-tm.x),0.,1.);
 float inflight=smoothstep(.035,.18,phase)*(1.-smoothstep(.71,.97,phase));
 // Burst rays: the same trail samples the shell expansion out of the bud.
 float open=burstOpen(uTime,tm.z,aSeed);
 float bursting=step(0.,tm.z)*aBud.w*step(tm.z,uTime)*(1.-smoothstep(.30,.82,open));
#ifdef BURST_ONLY
 float moving=bursting;
#else
 float moving=max(inflight,bursting);
#endif
 float speedFade=smoothstep(.06,1.2,length(tangent));
 float silver=1.-warmBranch(aColor);
 vec3 tint=aColor/max(max(aColor.r,aColor.g),max(aColor.b,.01));
 vColor=mix(tint*vec3(1.12,.86,.6),tint*vec3(.95,1.,1.1),silver)*(.87+aEnergy*.18)*(1.+bursting*.7);
 vAlpha=moving*speedFade*(.10+aEnergy*.22)*(1.+bursting*1.1)*pow(1.-along,1.65)*sqrt(uDensityScale)*aboveWater(p);
 vAcross=position.y;
 // Cull whole idle strips (per instance, so no vertex is pulled off alone).
 if(moving<.001)gl_Position=vec4(2.,2.,2.,1.);
}
`;

export const trailFragment=/* glsl */`
varying vec3 vColor;
varying float vAlpha;
varying float vAcross;
void main(){
 float edge=1.-smoothstep(.65,1.,abs(vAcross));
 gl_FragColor=vec4(vColor,vAlpha*exp(-vAcross*vAcross*4.5)*edge);
}
`;
