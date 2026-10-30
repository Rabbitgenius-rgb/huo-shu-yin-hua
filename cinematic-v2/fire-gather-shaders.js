// Every luminous point grows from a shared water-root through connected branches.
// Trail vertices sample that same flight at earlier times; no tiles or image planes.
//
// silver-bloom edition: the destinations are unchanged. What changed is the
// approach (root-fed branches, each silver
// spray gathering into a bud and opening like a firework shell) and the
// settled shading (dithered spray membership, a brightness hierarchy with
// sparse crisp sparkles, front/back depth tone, a slow light sweep).
import { choreographyGLSL } from './particle-choreography.js';
import { timelineGLSL, bloomOpenGLSL } from './fire-timeline.js';
import { ironBudPhaseGLSL } from './iron-flower.js';
import { treeSwayGLSL } from './tree-sway.js';
import { letterGLSL, letterMoveGLSL, letterLookGLSL } from './lettering-gather.js';

const trajectory = /* glsl */`
uniform float uTime;
uniform float uLiveTime;
uniform float uStoryTime;
uniform float uFlare;
uniform float uMotion;
uniform vec3 uPointer;
uniform float uPointerPower;
uniform float uAlignmentDistance;
uniform vec2 uAlignmentOffset;
uniform float uSettled;
uniform float uWaterY;
uniform float uWorldScale;
uniform sampler2D uRootRoutes;
uniform vec2 uRootRouteSize;
const float PI=3.14159265359;
${timelineGLSL}
${bloomOpenGLSL}
${choreographyGLSL}
${ironBudPhaseGLSL}
${treeSwayGLSL}
float hash(float x){return fract(sin(x)*43758.5453123);}
// Before the first strong low-frequency onset at 8.93 s, a slow light moves
// through the established branches. This is an authored visual breath, not a
// claim that individual soundtrack beats were detected in the quiet opening.
float openingCue(float time,float delay){
 float phase=time*.72-delay*8.;
 float rise=smoothstep(1.5,3.,time)*(1.-smoothstep(8.2,8.93,time));
 return pow(.5+.5*sin(phase),3.)*.5*rise;
}
float warmBranch(vec3 sourceColor){
 float peak=max(max(sourceColor.r,sourceColor.g),max(sourceColor.b,.001));
 return smoothstep(.05,.48,(sourceColor.r-sourceColor.b)/peak);
}
// Move each sampled pixel along its original front-view ray, not sideways.
// Its depth is real; the projected silhouette stays registered to the image.
vec3 registered(vec3 p){
 p.xy=(p.xy+uAlignmentOffset)*(1.-p.z/uAlignmentDistance)-uAlignmentOffset;
 return swayTree(p,uLiveTime,uMotion);
}
// Sparks differ: each has its own burst speed and how far it was drawn into
// the bud, so a shell opens in layers instead of as a scaled copy of its cell.
float burstLen(vec3 seed){return BURST_LEN*(.78+.44*hash(seed.y*57.3+seed.z*11.1));}
float budReach(vec3 seed){return BUD_SCALE*(.80+.20*hash(seed.z*31.7+seed.x*5.3));}
// x: flight start, y: arrival, z: burst start (<0 = none), w: fully settled.
// growth.x is the normalized growth distance (branches) or spray bloom order
// (crown); growth.y is 1 for branch particles. Per-particle jitter keeps the
// growth front soft: a travelling glow, never a hard-edged batch.
vec4 timing(vec3 seed,vec2 growth,float budWeight,vec4 route,vec3 center){
 if(growth.y>.5){
  // Short daughter supports may follow a late parent beyond the original
  // branch interval; the flower timing below retains its original range.
  float arrive=GROW_START+clamp(growth.x,0.,1.15)*GROW_SPAN+(seed.x-.5)*.44;
  // Emission is staggered as well as arrival: no shared instant of launch.
  float start=max(.015,min(arrive-.12,.04+seed.y*.65+growth.x*1.10));
  return vec4(start,arrive,-1.,arrive);
 }
 // The same physical bud schedules its iron blast and its later silver flower.
 float burst=silverBloomTime(center)+(seed.x-.5)*.10;
 return vec4(burst-.12,burst-.02,burst,burst+burstLen(seed));
}
vec3 routePoint(vec4 route,float progress){
 float index=clamp(progress,0.,1.)*(uRootRouteSize.x-1.);
 float cell=floor(index),y=(route.x+.5)/uRootRouteSize.y;
 vec3 a=texture2D(uRootRoutes,vec2((cell+.5)/uRootRouteSize.x,y)).xyz;
 vec3 b=texture2D(uRootRoutes,vec2((min(cell+1.,uRootRouteSize.x-1.)+.5)/uRootRouteSize.x,y)).xyz;
 return mix(a,b,index-cell);
}
// The particle-only scene has no hidden water plane or underwater clipping.
float aboveWater(vec3 p){
 return 1.;
}
// Shell expansion with drag: a fast pop that settles exactly on the target.
float burstOpen(float time,float burst,vec3 seed){
 if(burst<0.)return 1.;
 float u=clamp((time-burst)/burstLen(seed),0.,1.);
 return bloomOpenProgress(u);
}
// cinematic-v2d: the silver shell overshoots outward on the shared beat and
// settles back into its cloud, so it bursts like the iron flowers.
float burstPop(float time,float burst,vec3 seed){
 if(burst<0.)return 0.;
 float u=(time-burst)/burstLen(seed);
 return step(0.,u)*.34*exp(-pow((u-.10)/.075,2.))*(1.-step(1.,u));
}
vec3 flight(vec3 home,vec3 seed,vec4 bud,vec2 growth,vec4 route,vec4 tm,float time){
 if(time>=tm.w)return registered(home);
 float open=burstOpen(time,tm.z,seed);
 vec3 target=home+bud.xyz*(budReach(seed)*bud.w*(1.-open-burstPop(time,tm.z,seed)));
 // Silver grows at the lit branch tip, never launches again from the root.
 if(growth.y<.5)return registered(target);
 float phase=clamp((time-tm.x)/max(.001,tm.y-tm.x),0.,1.);
 if(phase>=1.)return registered(target);
 // Every route begins at the same water-root and includes its trunk/parent
 // boughs. No particle starts in an external sphere or vortex.
 float travel=phase*phase*(3.-2.*phase);
 vec3 endpoint=routePoint(route,route.y);
 vec3 p=routePoint(route,route.y*travel);
 // Only exceptionally distant old fringe grains postpone their terminal
 // drift; ordinary branch/flower routes keep their soft existing connection.
 float reachStart=mix(.57,.86,smoothstep(.45,1.2,route.w));
 float reach=smoothstep(reachStart,1.,phase);
 p+=(target-endpoint)*reach;
 // Microscopic, independent meanders reveal beads in a stem, not one wire.
 // The envelope vanishes at emission and landing; the destination stays exact.
 float envelope=sin(phase*PI);
 float spread=(.018+.032*seed.y)*envelope*envelope;
 p+=vec3(sin(phase*15.+seed.x*31.),cos(phase*11.+seed.y*23.)*.35,sin(phase*13.+seed.z*29.))*spread*uMotion;
 return registered(p);
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
attribute vec4 aParticleDetail;
#define aCrownTone aParticleDetail.x
#define aCrownOverlap aParticleDetail.y
#define aBranchDensity aParticleDetail.z
#define aTwigPresence aParticleDetail.w
attribute vec3 aBranchOutline;
attribute vec4 aBud;
attribute vec3 aGrowth;
attribute vec4 aRootRoute;
uniform float uSize;
uniform float uCrownGain;
uniform float uMist;
uniform float uMistFloor;
uniform float uDirectView;
uniform float uViewObliqueness;
uniform vec3 uCrownViewCenter;
uniform float uPixelRatio;
uniform float uDensityScale;
uniform float uCamMotion;
uniform vec4 uEncores[10];
uniform float uEncoreCount;
${letterGLSL}
varying vec3 vColor;
varying float vAlpha;
varying float vSharpness;
varying float vStar;
void main(){
 // The trunk is frozen at ignition while silver grains finish opening.
 // Keep its original timing record even when the crown becomes settled:
 // replacing that record would change branch light after it was frozen.
 float particleTime=aGrowth.y>.5?min(uTime,BLOOM_START):uTime;
 vec4 tm=uSettled>.5&&aGrowth.y<.5?vec4(-3.,-2.,-1.,-1.):timing(aSeed,aGrowth.xy,aBud.w,aRootRoute,position+aBud.xyz);
 vec3 p=flight(position,aSeed,aBud,aGrowth.xy,aRootRoute,tm,particleTime);
 // The point and its fine trace use one analytic, seekable trajectory.
 vec4 flow=choreograph(p,aSeed,registered(position+aBud.xyz),position+aBud.xyz,aGrowth.y,uLiveTime);
 float scatter=flow.w*uMotion;
 p=mix(p,flow.xyz,uMotion);
${letterMoveGLSL}
 vec4 mv=modelViewMatrix*vec4(p,1.);
 gl_Position=projectionMatrix*mv;

 float phase=clamp((particleTime-tm.x)/max(.001,tm.y-tm.x),0.,1.);
 float arrived=smoothstep(.78,.995,phase);
 float hasBurst=step(0.,tm.z)*aBud.w;
 float open=burstOpen(particleTime,tm.z,aSeed);
 float sinceBurst=particleTime-tm.z;
 float budded=arrived*hasBurst*(1.-open);              // compact glowing bud
 float landed=arrived*mix(1.,smoothstep(.40,.97,open),hasBurst);
 // After the bloom, settled particles should read as a stable luminous
 // material. Preserve the opening accents, then ease into a calmer finish.
 float settledCalm=smoothstep(13.2,16.5,uLiveTime)*landed*uDirectView;
 float gathered=max(landed,arrived*hasBurst);          // bud or settled
 float onWater=step(9.,aGrowth.z);
 float budGain=aGrowth.z-10.*onWater;
 float flash=.55*hasBurst*step(0.,sinceBurst)*exp(-max(0.,sinceBurst)*5.5)*mix(1.,budGain,.7);
 float sinceArrive=particleTime-tm.y;
 float ignite=aGrowth.y*step(0.,sinceArrive)*exp(-max(0.,sinceArrive)*2.4);

 float silver=1.-warmBranch(color);
 float warm=1.-silver;
 // Strict material scope: gold branches and their old reveal/light response
 // remain untouched even where an original branch grain is almost white.
 float crownMaterial=(1.-step(.5,aGrowth.y))*silver*uDirectView;
 // Preserve the old occupancy treatment outside the direct silver crown.
 // Bud centres keep its spatial mask coherent within each spray.
 vec3 sprayCenter=position+aBud.xyz;
 float crownBand=smoothstep(-1.2,.55,sprayCenter.x)
   *(1.-smoothstep(1.65,2.45,sprayCenter.y))*smoothstep(-.8,-.15,sprayCenter.y);
 float localMistFloor=mix(uMistFloor,.22,uDirectView*crownBand);
 float legacyCw=mix(aCrownWeight,max(aCrownWeight,localMistFloor),uMist*silver*(1.-aGrowth.y));
 // Use the original occupancy field. A fog floor must never relight its gaps.
 float cw=mix(legacyCw,clamp(aCrownWeight,0.,1.),crownMaterial);
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
 float flightSize=(.67+aSeed.x*.30+brightTraveler*.33)*sqrt(perspective);
 float size=mix(flightSize,settledSize,gathered)*mix(1.,.8,budded);
 // v2c: the closer framing would enlarge every grain; keep them fine.
 size*=mix(.72,1.,smoothstep(4.5,9.,localViewDistance));
 // The larger tree needs finer settled grains, not enlarged glowing discs.
 // Flight and mirror grains retain their existing scale.
 float detailSize=mix(1.,.90,uDirectView*gathered);
 detailSize*=1.-.03*crownMaterial*landed;
 gl_PointSize=clamp(uSize*uPixelRatio*size*detailSize,.7,mix(3.1,9.,star*landed)*uPixelRatio);
 // Sub-pixel point sprites can jump between raster samples on a slow orbit.
 // Give only those tiny settled grains a wider sampling footprint, with
 // area compensation below so they do not become larger/brighter glows.
 float requestedPointSize=gl_PointSize;
 float stableFootprint=mix(.7,max(1.75,1.15*uPixelRatio),settledCalm);
 gl_PointSize=max(gl_PointSize,stableFootprint);
 float pointCoverage=pow(requestedPointSize/gl_PointSize,2.);

 float twinkle=.5+.5*sin(uLiveTime*(.9+aSeed.y*2.1)+aSeed.z*41.);
 twinkle=mix(1.,.30+.95*twinkle*twinkle,uMotion);
 twinkle=mix(twinkle,.66+(twinkle-.66)*.22,settledCalm*uMotion);
 // A slow band of light passes over the finished crown, like a glint
 // travelling across silver foil. Only shading moves, never the points.
 float along=dot(position.xy,vec2(.86,.5))+position.z*.15;
 float sweepAt=mod(uLiveTime*.8+4.,14.)-6.;
 // cinematic-v2: the foil glint starts once the gold rain has cleared.
 float sweep=exp(-pow((along-sweepAt)*1.1,2.))*smoothstep(12.6,13.8,particleTime)*uMotion;

 vec3 tint=color/max(max(color.r,color.g),max(color.b,.01));
 // 红金: vermilion fine twigs, hotter gold where the source trunk is brightest.
 // cinematic-v2: the hot end stays gold instead of bleaching toward white.
 vec3 emberTone=mix(vec3(1.30,.74,.56),vec3(1.42,1.08,.78),smoothstep(.42,.92,aEnergy));
 // In the direct view keep the branch's warmer gold distinct from the silver.
 // The reflection is deliberately left on the original colour budget.
 emberTone=mix(emberTone,emberTone*vec3(1.02,1.03,.94),uDirectView);
 // Front sprays read brighter and whiter; deeper sprays cooler and dimmer.
 // Front/back tone is relative to the front camera, so it fades out when the
 // tree is seen from an angle (the volume shading below takes over there).
 float front=mix(smoothstep(-2.5,2.3,position.z),.6,uViewObliqueness);
 vec3 silverTone=mix(vec3(.88,.93,1.08),vec3(1.10,1.09,1.10),front);
 vec3 settledColor=color*mix(silverTone*1.06,emberTone,warm);
 vec3 flightColor=mix(vec3(1.06,.53,.25),vec3(1.20,.79,.48),smoothstep(.72,.98,aSeed.z))*(.76+aEnergy*.40);
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

 // Transient opening accents live on individual beads, never the whole cloud.
 float openingOnly=(1.-smoothstep(15.8,17.,particleTime))*uDirectView;
 float sapHead=exp(-pow((sinceArrive-.12)*3.0,2.))*aGrowth.y*step(0.,sinceArrive);
 vColor*=1.+openingOnly*sapHead*step(.86,aSeed.z)*.48;
 // A continuous opening breath travels through the already-revealed branches.
 // Only already revealed branch beads respond; no light appears ahead of the
 // growth front and the root/crown geometry remains unchanged.
 float sapBeat=openingCue(uLiveTime,clamp(aGrowth.x,0.,1.)*.20)*aGrowth.y*arrived*uMotion*uDirectView;
 vColor*=1.+sapBeat*step(.72,aSeed.z)*.85;
 float firstFlowers=(1.-smoothstep(.13,.32,aGrowth.x))*(1.-aGrowth.y);
 vColor*=1.+openingOnly*firstFlowers*flash*sparkle*.55;

 // The same physical bud keeps a short gold-white core as its silver grains
 // spread out. This tint ends locally before the accepted mature shading.
 float warmHandoff=(1.-aGrowth.y)*step(0.,sinceBurst)
   *(1.-smoothstep(.035,.22,sinceBurst))*(1.-uSettled)*uDirectView;
 vColor=mix(vColor,vColor*vec3(1.13,.83,.47),warmHandoff*.22);

 // Reduce the accumulated silver body light while keeping its fine glints.
 // Only opened, directly viewed crown grains change; the mirror keeps its tone.
 float crownDetail=max(sparkle,star);
 float silverBody=uDirectView*landed*silver*(1.-aGrowth.y);
 // Pull back the many ordinary grains slightly while retaining a few crisp
 // cool glints. This creates highlight hierarchy without filling the gaps
 // with a screen-wide haze; the original mirror is unaffected.
 vColor*=mix(1.,mix(.80,.98,crownDetail),silverBody);
 vColor*=mix(vec3(1.),vec3(.97,1.00,1.055),silverBody);
 // Strong measured low-frequency onsets briefly lift the crown; the weaker
 // 100 BPM subdivisions pick out alternating local florets in between.
 // Each response attacks quickly and decays, so dark gaps remain readable.
 vec3 rhythmPosition=position+aBud.xyz;
 float impact=rhythmImpact(uLiveTime,.025+.075*clamp((rhythmPosition.z+2.)/4.,0.,1.));
 float detail=rhythmDetail(uLiveTime,rhythmPosition);
 // cinematic-v2: the 2.4 s measured impacts lead; the faster subdivisions
 // only whisper, so the crown breathes instead of flickering.
 float noteLight=(impact*.62+detail*.28)*silverBody*uMotion;
 vColor*=1.+noteLight*mix(.70,1.8,max(sparkle,star));
 // Physical flower depth priorities release smoothly when leaving the front.
 float overlapView=1.-smoothstep(.40,.85,uViewObliqueness);

 // Let the original large limbs read through the surrounding loose grains.
 // Their inner volume gains a little light while the broad dusty edge
 // recedes. Grain size, alpha texture and every fine supporting twig stay
 // intact; this direct-view mask is zero for the accepted weak reflection.
 float mainLimb=uDirectView*landed*aBranchOutline.x;
 // The completed shaft supplies coherent cross-section normals. One fixed
 // light describes a continuous bright side and an opposite dark side;
 // joint density has already been normalised once on the CPU.
 float stemLight=smoothstep(-.12,.88,dot(normalize(aVolumeNormal),normalize(vec3(-.45,.75,.60))));
 // v2r: the shaded side of trunk and limbs no longer sinks below the twigs.
 float stemTone=mix(.74,2.35,stemLight)*mix(.85,1.,aBranchOutline.y);
 vec3 stemColor=mix(vColor,vec3(1.26,.62,.28)*(.42+.62*aEnergy),.32)*stemTone;
 float stemRidge=smoothstep(.28,.82,aBranchOutline.y)*smoothstep(.35,.88,stemLight);
 stemColor+=vec3(1.45,.88,.42)*stemRidge*1.15;
 vColor=mix(vColor,stemColor,mainLimb);
 // v2e bark: uneven light along the limbs — elongated patches and knots —
 // so a clean trunk still reads as a material, not a lit tube.
 vec3 bp=position*vec3(2.3,6.5,2.3);
 float bark=.5+.5*sin(bp.y+sin(bp.x*1.7+bp.z*1.3)*2.1)*sin(bp.y*.37+bp.x*2.9+1.3);
 float knot=smoothstep(.55,.95,.5+.5*sin(position.y*3.1+position.x*4.7)*sin(position.z*3.7+position.y*1.9));
 vColor*=mix(1.,mix(.62,1.22,bark)*(1.+.25*knot),aGrowth.y*landed*uDirectView);
 // v2r view sheen: a broad molten-gold highlight (half vector of a fixed key
 // light and the eye) that slides over trunk and boughs as the viewpoint
 // changes. Faint at rest; it swells while the camera travels (uCamMotion,
 // eased on the CPU) and settles back when the camera stops. Thick limbs
 // carry it, fine twigs only a little.
 float sheenLen=length(aVolumeNormal);
 if(sheenLen>1e-4){
  vec3 sheenN=normalize(mat3(modelMatrix)*aVolumeNormal);
  vec3 sheenV=normalize(cameraPosition-(modelMatrix*vec4(p,1.)).xyz);
  vec3 sheenH=normalize(normalize(vec3(-.45,.75,.60))+sheenV);
  float sheen=pow(max(0.,dot(sheenN,sheenH)),2.2);
  float sheenAmount=(.18+.82*uCamMotion)*aGrowth.y*landed*uDirectView*smoothstep(5.,8.,uTime)
   *mix(.30,1.,clamp(aBranchOutline.x,0.,1.));
  // The bark is already near saturation, so the band is drawn as contrast:
  // the facing side lifts toward pale gold, the turned-away side dims a little.
  vColor=mix(vColor,vColor*(.60+2.9*sheen)+vec3(1.10,.72,.34)*sheen*sheen*1.6,sheenAmount);
 }
 // Added branch grains retain their small sprites. Uneven bead light makes
 // the particle bundle readable between flowers without a luminous tube.
 float originalTwig=uDirectView*landed*(1.-step(-.5,aTwigPresence));
 vColor=mix(vColor,max(vColor*1.30,vec3(.30,.18,.105)),originalTwig);
 float twigDetail=uDirectView*landed*max(0.,aTwigPresence);
 float twigBead=step(.85,aSeed.z);
 vColor*=1.+twigDetail*(.12+.32*twigBead);

 // Most grains carry low light in transit; a sparse bead subset makes the
 // upward flow readable without piling half a million points into a root flare.
 float travelingBead=step(.962,aSeed.z);
 float flyingAlpha=mix(.0018,.095*(.60+.40*twinkle),travelingBead)*(.46+aEnergy*.54);
 flyingAlpha*=mix(.48,1.,aGrowth.y);
 float finalAlpha=(.18+aEnergy*.38)*(.78+aEnergy*.36);
 float glint=sin(uLiveTime*(1.3+aSeed.y*1.7)+aSeed.x*31.);
 float breathing=1.+(pow(max(0.,glint),8.)*mix(.65,.12,settledCalm)-.025)*step(.94,aSeed.y)*uMotion*landed;
 breathing*=1.+noteLight*step(.64,aSeed.z)*.28;
 vAlpha=mix(flyingAlpha,finalAlpha,gathered)*uDensityScale*breathing;
 // Separate drifting light from the retained crown without turning the
 // moving layer into a solid veil.
 vAlpha*=mix(1.,mix(.20,.60,max(sparkle,star)),scatter);
 // Golden limbs keep their settled brightness throughout the mature view.
 vColor=mix(vColor,vColor*vec3(1.16,.88,.55),scatter*step(.965,aSeed.z));
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
 vAlpha*=mix(1.,min(1.,max(shell*1.15,.035*budGain)),hasBurst*arrived);
 vSharpness=max(spray,2.*mainLimb);
 vStar=star*landed*(1.-.82*mainLimb);
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
 // The tour exposes the crown's rear and upper layers. Keep those fine grains
 // readable without lifting the front highlights or the accepted water mirror.
 float angleTone=depthTone*distanceFade;
 angleTone=mix(angleTone,max(angleTone,.65),inSpray*uDirectView);
 vAlpha*=mix(1.,angleTone,landed*uViewObliqueness);

 // Silver finish: one light budget for a transparent body, structural cores,
 // short inner veins and a directionally selected open rim. Existing scalar
 // attributes supply the entire field: no resampling, extra vertices or shell.
 float finish=crownMaterial*landed;
 float occupancy=smoothstep(.20,.72,cw);
 float density=clamp(aFloret.x,0.,1.);
 float core=smoothstep(.42,.85,density)*smoothstep(.25,.80,aEnergy)*occupancy;
 float vein=smoothstep(.018,.24,aFloret.y)*occupancy;
 // Only the lit side gets a rim. Scattering moves positions without normals,
 // so this view-dependent term fades continuously out of the detached layer.
 float formed=1.-smoothstep(.08,.80,scatter);
 vec3 budNormal=normalize(-aBud.xyz*vec3(1.,1.1,.45)+vec3(.00001));
 vec3 contourNormal=normalize(mix(normalize(aVolumeNormal),budNormal,.65));
 float rimFacing=dot(normalize(normalMatrix*contourNormal),normalize(-mv.xyz));
 float rimLight=smoothstep(-.12,.65,dot(contourNormal,normalize(vec3(-.45,.75,.60))));
 float contourBand=smoothstep(.27,.39,cw)*(1.-smoothstep(.49,.66,cw));
 float rim=max(pow(1.-abs(rimFacing),5.)*.95,contourBand*.50)
   *rimLight*occupancy*formed;
 float pad=mix(.85,2.1,smoothstep(.65,2.5,aCrownTone));
 float accents=(impact*.65+detail*.18)*uMotion*mix(1.,.45,settledCalm);
 float structureLight=(core*2.6+vein*4.8+rim*11.)*pad
   *(1.+accents*.80+sweep*.35);
 float bodyLight=(.78+.18*density)*pad;
 vec3 bodyTone=mix(vec3(.79,.86,1.0),vec3(1.,1.015,1.04),front);
 vec3 silverColor=color*bodyTone*bodyLight
   +vec3(.97,1.015,1.11)*structureLight*(.40+.60*aEnergy);
 // Rare sparkles punctuate the structural light, rather than replacing it.
 silverColor+=vec3(.80,.88,1.05)*(sparkle*.22+star*.60)*twinkle;
 silverColor*=1.+flash*1.6;
 // cinematic-v2: flowers near a later local iron flower flare with it.
 float encoreFlash=0.;
 for(int k=0;k<10;k++){
  if(float(k)>=uEncoreCount)break;
  vec4 e=uEncores[k];
  vec3 d=(position+aBud.xyz)-e.xyz;
  float age=uLiveTime-e.w;
  encoreFlash+=exp(-dot(d,d)*5.2)*smoothstep(-.01,.05,age)*exp(-max(0.,age)/.6);
 }
 encoreFlash=min(encoreFlash,1.2)*uMotion;
 silverColor*=1.+1.5*encoreFlash;
 silverColor=mix(silverColor,silverColor*vec3(1.12,.92,.70),.30*encoreFlash);
 silverColor=mix(silverColor,silverColor*vec3(1.13,.83,.47),warmHandoff*.22);
 silverColor=mix(silverColor,silverColor*vec3(1.16,.88,.55),scatter*step(.965,aSeed.z));
 float silverKeep=smoothstep(rnd-.065,rnd+.065,cw*1.30-.11);
 float fringe=step(.992,aSeed.z)*smoothstep(.025,.15,cw)
   *(1.-smoothstep(.15,.42,cw))*.065;
 float occupancyAlpha=max(max(silverKeep*mix(.36,1.,cw),fringe),rim*.75);
 float silverAlpha=finalAlpha*uDensityScale*(.35+1.35*density+.18*vein)
   *occupancyAlpha*(1.+.50*core+.78*vein+2.2*rim);
 silverAlpha*=mix(.78,1.06,front);
 // The drawn strands retain their actual bright veins and cores. The old
 // broad-sheet fade protected only random sparkles and erased these ridges.
 float flowLight=max(max(sparkle,star),max(core,vein));
 silverAlpha*=mix(1.,mix(.30,.78,flowLight),scatter);
 // Rear layers may recede; their former uniform .65 floor filled the crown.
 float silverDepth=(.34+.66*smoothstep(-.5,.85,facing))*distanceFade;
 silverAlpha*=mix(1.,silverDepth,uViewObliqueness*formed);
 // Attenuate the complete flower, including its independently computed
 // bright cores and arcs. Rear highlights must not shine through at full
 // strength after only their base colour has been dimmed.
 float layerDepth=aCrownOverlap*overlapView*formed;
 silverColor*=1.-.46*layerDepth;
 silverAlpha*=1.-.14*layerDepth;
 // The mature tour reads whole flowers in the current camera's depth order.
 // Use registered bud centres, not individual grains or fixed screen regions:
 // one lobe stays coherent while its neighbours pass in front of or behind it.
 // The main bloom is unchanged; the treatment leaves with the disassembling
 // tree, before the brush writing and the held closing composition.
 float tourDepth=smoothstep(10.2,12.6,uStoryTime)
   *(1.-smoothstep(18.55,19.25,uStoryTime))*formed*uDirectView;
 vec3 budFromCenter=registered(sprayCenter)-uCrownViewCenter;
 float viewDepth=(modelViewMatrix*vec4(budFromCenter,0.)).z/max(.0001,uWorldScale);
 float nearFlower=smoothstep(-2.2,2.2,viewDepth);
 // Broad curved light on each existing flower, retaining its fine ridges.
 float lobeLight=smoothstep(-.45,.8,dot(contourNormal,normalize(vec3(-.45,.75,.60))));
 float flowerTone=mix(.72,1.10,nearFlower)*mix(.85,1.03,lobeLight);
 vec3 depthTint=mix(vec3(.94,.975,1.035),vec3(1.015,1.01,1.),nearFlower);
 silverColor*=mix(vec3(1.),depthTint*flowerTone,tourDepth);
 silverAlpha*=mix(1.,mix(.94,1.0,nearFlower),tourDepth);
 silverAlpha*=mix(1.,min(1.,max(shell*1.15,.035*budGain)),hasBurst*arrived);
 vColor=mix(vColor,silverColor,finish);
 // v3h: after the bloom settles, ~7 % of the crown grains keep a warm gold
 // glint so the held crown still reads as 火树银花, not grey cloud.
 float emberHeart=uDirectView*landed*silver*(1.-aGrowth.y)*step(.93,fract(aSeed.z*31.7))
   *smoothstep(12.4,14.,uStoryTime);
 vColor=mix(vColor,vColor*vec3(1.85,1.05,.36),emberHeart);
 vAlpha=mix(vAlpha,silverAlpha,finish);
 // cinematic-v2 finale: the whole settled tree lifts on the last measured beat.
 vColor*=1.+uFlare*mix(.80,1.25,silver)*landed*uDirectView;
 // The held breath before the shared beat: the branches dim a little so the
 // gathering gold buds read brighter, then everything releases on the hit.
 float inhale=smoothstep(8.05,8.86,uStoryTime)*(1.-step(8.93,uStoryTime))*uMotion;
 vColor*=1.-.32*inhale*aGrowth.y;
 // v3h: a second, shorter held breath before the tree bursts into the
 // lettering on 18.55 s, so the second hit has a run-up like the first.
 float inhale2=smoothstep(17.85,18.48,uStoryTime)*(1.-step(18.55,uStoryTime))*uMotion;
 vColor*=1.-.22*inhale2;
 // The finished large limbs and silver both use the compact fine-grain edge.
 vSharpness=mix(vSharpness,2.,finish);
 // No water-specific suppression: the detached root and glow remain visible.
 vAlpha*=smoothstep(0.,.5,particleTime)*aboveWater(p);
 // Future batches stay at the root with zero alpha until actually released.
 vAlpha*=smoothstep(0.,.075,phase)*step(tm.x,particleTime);
 // Hidden silver waits until its own local iron burst is over.
 if(aGrowth.y<.5&&uSettled<.5)vAlpha*=smoothstep(tm.z,tm.z+.075,particleTime);
 // The same physical stem/collar density belongs to the direct and mirror
 // clouds. Gathering retains its response; the water's mirror gain is unchanged.
 vAlpha*=mix(1.,aBranchDensity,landed);
 // Retire the loose, low source-image ember fan around the root. The short
 // contact stem and main-trunk core are inside this mask's untouched centre;
 // the mirror keeps its accepted light budget and the root anchor never moves.
 float rootRadius=length((position.xz-vec2(.3267857143,0.))*vec2(1.,.9));
 // v2q: grains inside a root's own tube (outline z = 2) are not part of the fan.
 float rootKeep=step(1.5,aBranchOutline.z);
 float rootFringe=(1.-smoothstep(-2.25,-1.8,position.y))*smoothstep(.36,1.05,rootRadius)
   *(1.-clamp(aBranchOutline.x,0.,1.))*(1.-rootKeep)*warm;
 vAlpha*=1.-.9*rootFringe*landed*uDirectView;
 // cinematic-v2: nothing grows below the root junction any more (the wisps the
 // old water used to hide), and the loose outer dust of the large limbs steps
 // back so each limb reads as one luminous body instead of a fuzzy smear.
 // v2g: no flat cut at the root junction. Below it, grains dissolve over
 // ~0.5 units with an uneven, per-grain edge, as if sinking into dark mist.
 // v2k: the root base is now a shallow cone skirt (cinematic-finish), so
 // this is only a safety net far below it, not a visible cut.
 float belowRoot=1.-smoothstep(-4.70+.15*rnd,-4.40,position.y);
 // v2o: v1 roots — no below-root fade.
 float limbDust=clamp(aBranchOutline.x,0.,1.)*(1.-smoothstep(.04,.34,aBranchOutline.y));
 vAlpha*=1.-.62*limbDust*landed*uDirectView;
 // Keep the original mirror budget; only faint new twig grains enter it.
 vAlpha*=1.-.78*max(0.,aTwigPresence)*(1.-uDirectView)*landed;
 // v3h: the added upper twig grains cross into a closed loop in the bare
 // tree before the crown opens (seen ~5.5–9 s). Above ~45 % of the tree's
 // height they now arrive with the bloom, when the silver covers them.
 float twigHeight=p.y-(uLetterCenter.y-3.3);
 float upperTwig=step(.001,aTwigPresence)*smoothstep(2.4,3.0,twigHeight);
 vAlpha*=1.-upperTwig*(1.-smoothstep(8.93,9.6,uStoryTime));
#ifdef REFLECTION_PASS
 // Index subset (see particle-tree.js) drawn into the mirror target only.
 // Fewer points carry proportionally more light so mean reflected energy holds.
 vAlpha*=REFLECTION_ALPHA;
 gl_PointSize=max(.7,gl_PointSize*REFLECTION_SIZE);
#endif
 // Fully gated points are not rasterized at all.
 vAlpha*=pointCoverage;
${letterLookGLSL}
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
 float compact=clamp(vSharpness-1.,0.,1.);
 float falloff=mix(mix(3.2,4.8,min(1.,vSharpness)),5.6,compact);
 float shape=exp(-falloff*radius*radius)*(1.-smoothstep(mix(.62,.48,compact),mix(1.,.90,compact),radius));
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
attribute vec4 aRootRoute;
uniform vec2 uResolution;
uniform float uDensityScale;
varying vec3 vColor;
varying float vAlpha;
varying float vAcross;
void main(){
 float along=position.x;
 vec4 tm=timing(aSeed,aGrowth.xy,aBud.w,aRootRoute,aHome+aBud.xyz);
#ifdef BURST_ONLY
 float duration=.20+aSeed.z*.16;
#else
 float duration=.11+aSeed.z*.17;
#endif
#ifdef FLOW_ONLY
 duration=.38+aSeed.z*.52;
#endif
 float sampleTime=max(0.,uTime-along*duration);
 vec3 p=flight(aHome,aSeed,aBud,aGrowth.xy,aRootRoute,tm,sampleTime);
 vec3 next=flight(aHome,aSeed,aBud,aGrowth.xy,aRootRoute,tm,sampleTime+.012);
 vec3 previous=flight(aHome,aSeed,aBud,aGrowth.xy,aRootRoute,tm,max(0.,sampleTime-.012));
#ifdef FLOW_ONLY
 float ft=uLiveTime-along*duration;
 vec3 home=registered(aHome),center=registered(aHome+aBud.xyz);
 p=choreograph(home,aSeed,center,aHome+aBud.xyz,aGrowth.y,ft).xyz;
 next=choreograph(home,aSeed,center,aHome+aBud.xyz,aGrowth.y,ft+.015).xyz;
 previous=choreograph(home,aSeed,center,aHome+aBud.xyz,aGrowth.y,ft-.015).xyz;
#endif
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
 float inflight=smoothstep(.08,.20,phase)*(1.-smoothstep(.71,.97,phase))*step(tm.x,uTime);
 // Burst rays: the same trail samples the shell expansion out of the bud.
 float open=burstOpen(uTime,tm.z,aSeed);
 float bursting=step(0.,tm.z)*aBud.w*step(tm.z,uTime)*(1.-smoothstep(.30,.82,open));
#ifdef BURST_ONLY
 float moving=bursting;
#else
 float moving=max(inflight*.28,bursting);
#endif
 float speedFade=smoothstep(.06,1.2,length(tangent));
 float silver=1.-warmBranch(aColor);
 vec3 tint=aColor/max(max(aColor.r,aColor.g),max(aColor.b,.01));
 vColor=mix(tint*vec3(1.12,.86,.6),tint*vec3(.95,1.,1.1),silver)*(.87+aEnergy*.18)*(1.+bursting*.7);
 vAlpha=moving*speedFade*step(tm.x,sampleTime)*(.10+aEnergy*.22)*(1.+bursting*1.1)*pow(1.-along,1.65)*sqrt(uDensityScale)*aboveWater(p);
#ifdef FLOW_ONLY
 moving=choreograph(home,aSeed,center,aHome+aBud.xyz,aGrowth.y,uLiveTime).w*uMotion;
 vColor=mix(vec3(1.10,1.20,1.38),vec3(1.4,.86,.40),step(.86,aSeed.z));
 vAlpha=moving*speedFade*(.065+aEnergy*.13)*pow(1.-along,1.8)*sqrt(uDensityScale);
#endif
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
