// Depth only: the caller retains every source-image x/y and its original color.
// The hidden geometry is inferred from overlapping flower crowns and curved
// branch centerlines. This module never makes a replacement branch or new point.
const PIXEL_WORLD=12.2/1456;
const clamp=(v,a,b)=>Math.min(b,Math.max(a,v));

// x, y, projected radii in source pixels, depth center/radius in world units.
const CROWNS=[
  [250,214,77,69,-.65,1.15],[333,247,109,85,-.45,1.35],
  [438,208,111,91,-1.15,1.60],[474,145,74,69,-1.45,1.35],
  [568,219,101,94,.85,1.60],[628,109,62,72,-.60,1.45],
  [674,190,105,85,.10,1.70],[749,222,96,96,-1.00,1.60],
  [815,174,76,74,-1.35,1.35],[849,263,106,75,-.25,1.60],
  [943,273,77,57,.75,1.25],[1009,347,104,72,-.95,1.50],
  [1112,375,117,81,.50,1.65],[1203,433,85,72,.85,1.35],
  [1280,463,52,55,.90,1.00],[426,290,111,91,.60,1.65],
  [516,334,92,97,1.20,1.70],[610,365,85,85,.70,1.40],
  [674,397,61,76,-.15,1.15],[308,392,96,42,1.00,1.05],
  [1109,466,100,53,-.75,1.10],
];

// x/y/radius in reference pixels, z in world units. These are depth guides;
// only source-image pixels are rendered, including the source's fine branches.
const SOURCE_PATHS=[
  [[767,711,0,22],[750,686,-.02,22],[738,653,-.04,20],[729,624,.02,21],[716,598,.08,21],[704,570,.03,17],[710,543,-.02,12],[701,520,-.10,8],[718,506,-.20,5],[749,505,-.28,.8]],
  [[721,606,.08,16],[688,610,.16,17],[653,595,.22,14],[618,578,.25,11],[585,569,.29,9],[585,536,.26,8],[578,510,.23,6],[552,478,.20,5],[531,450,.18,3.8],[515,420,.12,2.5],[491,387,.10,.4]],
  [[631,584,.24,8],[611,555,.10,6],[596,528,-.05,4.3],[568,498,-.12,2.6],[538,480,-.10,.45]],
  [[543,464,.20,4.7],[513,436,.20,4],[475,413,.22,3.3],[439,397,.20,2.8],[398,374,.30,2.2],[371,343,.45,1.5],[346,312,.45,.35]],
  [[584,546,.28,5.5],[552,527,.30,4.4],[526,523,.35,3.2],[503,502,.35,2.2],[483,478,.20,1.4],[450,465,.22,.3]],
  [[723,583,.08,12],[764,565,-.03,10],[804,548,-.15,7.8],[847,532,-.25,6.1],[880,511,-.30,4.8],[913,484,-.28,3.5],[948,479,-.12,2.6],[988,477,.10,2],[1024,469,.15,1.3],[1055,446,.25,.3]],
  [[738,574,.03,7],[754,545,-.15,5.8],[775,522,-.30,4.7],[814,503,-.40,3.6],[854,490,-.40,2.4],[881,465,-.30,1.5],[893,440,-.30,1]],
  [[898,496,-.28,3.3],[929,499,-.05,2.9],[970,509,.15,2.1],[1005,527,.20,1.2],[1020,544,.20,.4]],
  [[914,484,-.28,3.4],[900,460,-.25,2.9],[880,436,-.30,2.3],[847,409,-.40,1.6],[818,383,-.35,1],[805,351,-.20,.4]],
  [[995,476,.12,1.9],[1055,479,.20,1.6],[1120,474,.30,1.2],[1191,484,.20,.75],[1231,507,.10,.4]],
  [[716,551,-.04,5],[690,528,.12,3.8],[660,497,.25,2.7],[625,476,.35,1.5],[602,449,.45,.4]],
  [[530,447,.17,3.1],[548,422,.08,2.6],[576,403,-.10,1.9],[596,375,-.25,1.1],[609,341,-.35,.4]],
  [[492,423,.21,2.5],[468,393,.35,2],[456,358,.40,1.3],[427,335,.35,.7],[411,312,.30,.4]],
  [[438,398,.20,2.4],[400,399,.13,1.9],[362,406,.05,1.1],[323,408,-.10,.5],[288,420,-.15,.4]],
  [[513,420,.12,2.1],[510,384,.08,1.5],[483,355,-.12,1],[480,321,-.23,.6],[491,289,-.25,.4]],
  [[770,526,-.30,3],[755,493,-.42,2.2],[731,460,-.50,1.5],[725,424,-.60,.8],[708,401,-.65,.4]],
  [[805,551,-.15,4.7],[827,522,-.05,3.2],[843,501,.12,2],[839,477,.25,.9],[858,452,.35,.4]],
  [[948,479,-.12,2],[973,452,-.20,1.4],[995,431,-.30,.75],[1004,406,-.35,.4]],
  [[1055,479,.20,1.4],[1073,455,.25,.9],[1101,442,.35,.5],[1120,419,.40,.4]],
  [[766,709,0,10],[788,724,.12,8],[816,730,.16,4.5],[849,722,.10,2],[877,730,.02,.4]],
  [[767,711,0,12],[740,725,.18,9],[714,743,.25,5.5],[695,765,.18,2.5],[666,785,.08,.4]],
  [[767,704,-.02,8],[798,687,-.15,5.2],[832,685,-.28,2.8],[853,664,-.35,1.2],[876,654,-.40,.4]],
  [[747,691,-.02,6],[722,699,-.20,4.5],[699,718,-.35,2.8],[683,742,-.42,.9],[657,752,-.40,.4]],
];

// The 2D centerlines remain the source image's branches. Their depth paths now
// bend into distinct front/middle/back crown groups. This is inferred hidden
// structure, never an added mesh or a replacement projected silhouette.
// v2t: the old depths put every left limb in front and every right limb behind
// (corr(x, z) -0.67), a slab angled across the top view. These are the old
// depths with that left/right trend sheared out (z' = 1.6 (z + 0.6 x), x in
// world units from the trunk), then capped by hand where a limb would have turned
// into a long straight spike (2, 5, 7, 9, 11, 14, 15, 16, 18). Each child starts
// at its parent's depth.
const DEPTH_PATHS=[
  [0,-.08,-.12,.05,.3,.34,.08,-.26,-.5,-.72], // v2v: trunk top meets the bright limb (6) it runs into
  [.22,.64,1,1.28,1.17,1.33,1.11,.58,.26,-.03,-.39],
  [1.18,1,.6,.2,-.2],
  [.43,-.21,-.92,-1.28,-1.53,-1.83,-2.35],
  [1.28,1.3,1.34,1.31,.99,.4],
  [.31,-.03,-.51,-.8,-.94,-.75,-.07,.47,1,1.5],
  [.18,-.2,-.5,-.85,-1.1,-1.25,-.75], // v2v: in the source the bright right limb leaves the trunk top along 6 and
  // carries on along 5; a fast dive split that one visible limb in depth and
  // left a dim stretch in the middle. 6 now follows 5's depth until they part.
  [-.84,-1.1,-1.2,-1.2,-1.1],
  [-.73,-1.1,-1.42,-1.76,-1.76,-1.54],
  [.57,.9,1.2,1.3,1.2],
  [.14,.33,.65,.77,.99],
  [.23,.13,-.4,-.9,-1.3],
  [-.6,-.57,-.51,-.9,-1.35],
  [-1.28,-1.36,-1.42,-1.66,-1.78],
  [-.04,-.16,-.8,-1.4,-1.8],
  [-.6,-.95,-1.4,-1.8,-1.9], // v2v: 15 (the trunk's upward continuation) leaves the lump gently
  [-.51,-.2,.1,.4,.6],
  [-.07,-.11,-.17,-.18],
  [.9,1.05,1.15,1.1],
  // Roots (19-22), v2s. The four roots used to head out at about +58, -34, +138
  // and -140 degrees from the front: one root pointed straight at the side-tour
  // camera (it read as a leg) and another dived 0.8 below the foot. They now fan
  // out at about +69, -76, +138 and -127 degrees, irregularly spaced and of
  // different lengths, with the tips tipping slightly down like real roots.
  // v2 renders with groundToWater:false, so these depths are used as written.
  [0,.20,.38,.30,.35],
  [0,.08,.16,.20,.20],
  [-.04,-.40,-.75,-1,-1.15],
  [-.08,-.30,-.50,-.65,-.70],
];
export const PARENTS=[-1,0,1,1,1,0,5,5,5,5,0,1,3,3,1,6,5,5,9,0,0,0,0];

function nearestOnPath(path,x,y) {
  let best=Infinity,z=path[0][2];
  for(let i=1;i<path.length;i++) {
    const a=path[i-1],b=path[i],dx=b[0]-a[0],dy=b[1]-a[1];
    const t=clamp(((x-a[0])*dx+(y-a[1])*dy)/(dx*dx+dy*dy),0,1);
    const d2=(x-a[0]-dx*t)**2+(y-a[1]-dy*t)**2;
    if(d2<best) {best=d2;z=a[2]+(b[2]-a[2])*t;}
  }
  return z;
}

// Public source-pixel guides for fine light threads: [x, y, worldZ, radiusPx].
// Explicit parent matching prevents detached depth jumps at branching joins.
export const BRANCH_PATHS=[];
for(let i=0;i<SOURCE_PATHS.length;i++) {
  const path=SOURCE_PATHS[i].map((p,j)=>[p[0],p[1],DEPTH_PATHS[i][j],p[3]]);
  if(PARENTS[i]>=0) {
    const join=nearestOnPath(BRANCH_PATHS[PARENTS[i]],path[0][0],path[0][1]);
    const correction=join-path[0][2];
    path[0][2]=join;
    path[1][2]+=correction*.42;
  }
  BRANCH_PATHS.push(path);
}

// Growth distance from the trunk base, in source pixels along the branch graph.
// Timing data only (生枝): it never moves a point or changes the inferred depth.
function growthOnPath(cumulative,path,x,y) {
  let best=Infinity,g=cumulative[0];
  for(let i=1;i<path.length;i++) {
    const a=path[i-1],b=path[i],dx=b[0]-a[0],dy=b[1]-a[1];
    const t=clamp(((x-a[0])*dx+(y-a[1])*dy)/(dx*dx+dy*dy),0,1);
    const d2=(x-a[0]-dx*t)**2+(y-a[1]-dy*t)**2;
    if(d2<best) {best=d2;g=cumulative[i-1]+(cumulative[i]-cumulative[i-1])*t;}
  }
  return g;
}
const RAW_GROWTH=[];
for(let i=0;i<BRANCH_PATHS.length;i++) {
  const path=BRANCH_PATHS[i];
  let g=PARENTS[i]>=0 ? growthOnPath(RAW_GROWTH[PARENTS[i]],BRANCH_PATHS[PARENTS[i]],path[0][0],path[0][1]) : 0;
  const cumulative=[g];
  for(let j=1;j<path.length;j++) {
    g+=Math.hypot(path[j][0]-path[j-1][0],path[j][1]-path[j-1][1]);
    cumulative.push(g);
  }
  RAW_GROWTH.push(cumulative);
}
const GROWTH_MAX=Math.max(...RAW_GROWTH.flat());
/** Per path, per vertex: normalized [0, 1] growth distance from the trunk base. */
export const BRANCH_GROWTH=RAW_GROWTH.map(path=>path.map(g=>g/GROWTH_MAX));

const SEGMENTS=BRANCH_PATHS.flatMap((path,p)=>path.slice(1).map((b,i)=>{
  const a=path[i],dx=b[0]-a[0],dy=b[1]-a[1],length2=dx*dx+dy*dy;
  return {a,b,dx,dy,length2,length:Math.sqrt(length2),g0:BRANCH_GROWTH[p][i],g1:BRANCH_GROWTH[p][i+1],path:p,index:i};
}));

function normalize(x,y,z) {
  const length=Math.hypot(x,y,z);
  return length>1e-9&&Number.isFinite(length) ? [x/length,y/length,z/length] : [0,0,1];
}

function closestBranch(x,y) {
  let nearest=null,best=Infinity;
  for(const s of SEGMENTS) {
    const t=clamp(((x-s.a[0])*s.dx+(y-s.a[1])*s.dy)/s.length2,0,1);
    const dx=x-s.a[0]-s.dx*t,dy=y-s.a[1]-s.dy*t,d2=dx*dx+dy*dy;
    if(d2<best) {
      best=d2;
      nearest={distance:Math.sqrt(d2),z:s.a[2]+(s.b[2]-s.a[2])*t,
        radius:s.a[3]+(s.b[3]-s.a[3])*t,growth:s.g0+(s.g1-s.g0)*t,path:s.path,index:s.index,t,
        across:(dx*-s.dy+dy*s.dx)/s.length,
        perpendicular:[-s.dy/s.length,-s.dx/s.length],
        tangent:normalize(s.dx*PIXEL_WORLD,-s.dy*PIXEL_WORLD,s.b[2]-s.a[2])};
    }
  }
  return nearest;
}

function branchVolume(branch,rnd) {
  // A filled depth chord follows a continuous, curved branch tube. The wider
  // z radius gives visible particulate thickness without making a solid core.
  const radius=Math.max(branch.radius,Math.abs(branch.across)*1.08+.55);
  const across=branch.across/radius;
  const radiusZ=clamp(radius*PIXEL_WORLD*2.45,.035,.58);
  const extent=Math.sqrt(Math.max(.015,1-across*across))*radiusZ;
  const side=rnd()<.5 ? -1 : 1;
  const offset=side*extent*(rnd()<.20 ? .76+rnd()*.24 : rnd()*.80);
  const gradientAcross=across/Math.max(.008,radius*PIXEL_WORLD);
  let nx=branch.perpendicular[0]*gradientAcross;
  let ny=branch.perpendicular[1]*gradientAcross;
  let nz=offset/(radiusZ*radiusZ);
  const [tx,ty,tz]=branch.tangent,axial=nx*tx+ny*ty+nz*tz;
  nx-=tx*axial;ny-=ty*axial;nz-=tz*axial;
  return {z:branch.z+offset,normal:normalize(nx,ny,nz)};
}

function crownVolume(crown,x,y,rnd,outside=false) {
  const dx=(x-crown[0])/crown[2],dy=(y-crown[1])/crown[3];
  const q=dx*dx+dy*dy;
  // Overlapping, filled lobes place most light points within their volume.
  // The small surface fraction keeps the silhouette airy, with no bubble rim.
  const qSurface=outside ? 1-1/(1+q*4) : q;
  const micro=Math.sin(x*.11+Math.cos(y*.07))*Math.sin(y*.13+x*.025);
  const extent=Math.sqrt(Math.max(.003,1-qSurface))*crown[5]*(1+micro*.045);
  const side=rnd()<.5 ? -1 : 1;
  const offset=side*extent*(rnd()<.12 ? .84+rnd()*.16 : rnd()*.88);
  return {z:crown[4]+offset,normal:normalize(
    dx/(crown[2]*PIXEL_WORLD),-dy/(crown[3]*PIXEL_WORLD),offset/(crown[5]*crown[5]))};
}

function result(volume,material,growth=-1,branch=null) {
  return {z:clamp(volume.z,-3.05,3.05),material,normal:volume.normal,growth,branch};
}

/** Nearest branch-graph point for a source pixel: normalized growth + pixel distance. */
export function branchGrowthAt(x,y) {
  const branch=closestBranch(x,y);
  return {growth:branch.growth,distance:branch.distance};
}

/** Source coordinates: 1456 × 816; r/g/b may be normalized or byte values.
 * random is a [0,1) generator. Prefer an independent depth RNG in the caller
 * to leave its existing image sampling / x/y jitter sequence unchanged.
 * Returned normal is the local inferred tube/lobe volume normal, not noise.
 */
export function imageDepth(x,y,r,g,b,random=Math.random) {
  if(![x,y,r,g,b].every(Number.isFinite)) return {z:0,material:0,normal:[0,0,1]};
  const divisor=Math.max(r,g,b)>1 ? 255 : 1;
  r/=divisor;g/=divisor;b/=divisor;
  const warm=r-b,red=r-g;
  const clearlyWarm=warm>.055&&red>.018;
  let branch=null;
  if(clearlyWarm||y>425) branch=closestBranch(x,y);
  const onBranch=branch && branch.distance<Math.max(12,branch.radius*1.45+5);
  if(branch && ((clearlyWarm&&branch.distance<branch.radius+49)||
    (onBranch&&y>430&&warm>-.018))) {
    return result(branchVolume(branch,random),1,branch.growth,branch);
  }

  let sum=0,nearest=null,minQ=Infinity;
  const matches=[];
  for(const crown of CROWNS) {
    const q=((x-crown[0])/crown[2])**2+((y-crown[1])/crown[3])**2;
    if(q<minQ) {minQ=q;nearest=crown;}
    if(q<=1.08) {
      sum+=.045+Math.max(0,1-q)**.8;
      matches.push([crown,sum]);
    }
  }
  if(matches.length) {
    const choose=random()*sum;
    let crown=matches[matches.length-1][0];
    for(const match of matches) if(choose<=match[1]) {crown=match[0];break;}
    return result(crownVolume(crown,x,y,random),0);
  }

  // Every remaining sampled spark stays attached to its nearest structure;
  // no image point is deleted and no common flat z plane is introduced.
  branch??=closestBranch(x,y);
  const crownDistance=Math.max(0,Math.sqrt(minQ)-1)*Math.min(nearest[2],nearest[3]);
  if(branch.distance-branch.radius<crownDistance) {
    return result(branchVolume(branch,random),clearlyWarm?1:0,branch.growth,branch);
  }
  return result(crownVolume(nearest,x,y,random,true),0);
}
