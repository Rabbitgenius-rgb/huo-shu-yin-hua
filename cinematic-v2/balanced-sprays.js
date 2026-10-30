// Small, unequal daughter sprays occupy only the large crown hollows. Each
// carries a sampled floret volume, a short supporting twig and the old light.
import {TIMELINE} from './fire-timeline.js';
const WIDTHS={positions:3,colors:3,seeds:3,energies:1,normals:3,florets:2,crownWeights:1,buds:4,growth:3,branchOutline:3,crownTone:1,branchDensity:1,twigPresence:1};
const PATCHES=[
 {at:[-1.38,.90,1.64],donor:98362,scale:.58,count:920},
 {at:[-.62,.83,1.92],donor:86361,scale:.48,count:1050},
 {at:[.12,1.29,1.38],donor:55591,scale:.53,count:980},
 {at:[.12,.75,.72],donor:23752,scale:.52,count:880},
 {at:[-.45,1.25,-.57],donor:24132,scale:.64,count:790},
 {at:[-1.42,.78,-.83],donor:99203,scale:.55,count:860},
 {at:[-.28,1.06,2.68],donor:39790,scale:.47,count:1050},
 {at:[-.76,.64,3.11],donor:98362,scale:.60,count:950},
 {at:[.44,1.28,2.71],donor:55591,scale:.52,count:900},
 {at:[.54,.44,3.26],donor:86361,scale:.40,count:700},
 {at:[1.58,.60,.14],donor:99203,scale:.51,count:850},
 {at:[2.48,.67,-.46],donor:23752,scale:.42,count:620},
 {at:[.75,.21,-2.26],donor:24132,scale:.53,count:630},
];
const hash=n=>{const x=Math.sin(n*12.9898+78.233)*43758.5453;return x-Math.floor(x);};
const centre=(cloud,i)=>[0,1,2].map(a=>cloud.positions[i*3+a]+cloud.buds[i*4+a]);
export function addBalancedSprays(cloud){
 if(cloud.balancedSpraysVersion)return cloud;
 const donors=PATCHES.map(p=>({p,c:centre(cloud,p.donor),indices:[]}));
 const warm=[];
 for(let i=0;i<cloud.count;i++){
  const j=i*3,b=i*4;
  if(cloud.growth[j+1]>.5){if(cloud.growth[j+2]<9&&cloud.energies[i]>.25&&i%3===0)warm.push(i);continue;}
  if(cloud.buds[b+3]<.65)continue;
  for(const donor of donors){
   if(Math.abs(cloud.positions[j]+cloud.buds[b]-donor.c[0])<.015&&Math.abs(cloud.positions[j+1]+cloud.buds[b+1]-donor.c[1])<.015&&Math.abs(cloud.positions[j+2]+cloud.buds[b+2]-donor.c[2])<.015)donor.indices.push(i);
  }
 }
 const twigCount=80,added=PATCHES.reduce((n,p)=>n+p.count+twigCount,0),out={count:cloud.count+added};
 for(const [name,width]of Object.entries(WIDTHS)){if(!cloud[name])continue;out[name]=new Float32Array(out.count*width);out[name].set(cloud[name]);}
 const copy=(from,to)=>{for(const [name,width]of Object.entries(WIDTHS))if(out[name])out[name].set(cloud[name].subarray(from*width,(from+1)*width),to*width);};
 let cursor=cloud.count;
 const records=[];
 donors.forEach(({p,c,indices},id)=>{
  if(indices.length<p.count)throw Error('Insufficient real spray grains for '+id);
  const selected=indices.map(i=>({i,r:hash(i+id*8191)})).sort((a,b)=>a.r-b.r).slice(0,p.count);
  const mass=[0,0,0];for(const {i}of selected)for(let a=0;a<3;a++)mass[a]+=cloud.positions[i*3+a]/selected.length;
  const angle=(id%2?1:-1)*(.17+.13*hash(id+8)),cos=Math.cos(angle),sin=Math.sin(angle);
  const seedOffset=.137*(id+1);
  for(const {i}of selected){
   const j=i*3,k=cursor*3,b=cursor*4;copy(i,cursor);
   const dx=(cloud.positions[j]-mass[0])*p.scale,dy=(cloud.positions[j+1]-mass[1])*p.scale*(.91+.16*hash(id+9)),dz=(cloud.positions[j+2]-mass[2])*p.scale;
   const v=[dx*cos+dz*sin,dy,-dx*sin+dz*cos];
   for(let a=0;a<3;a++){out.positions[k+a]=p.at[a]+v[a];out.buds[b+a]=-v[a];out.seeds[k+a]=(cloud.seeds[j+a]+seedOffset*(a+1))%1;}
   const nx=cloud.normals[j],nz=cloud.normals[j+2];out.normals[k]=nx*cos+nz*sin;out.normals[k+2]=-nx*sin+nz*cos;
   if(out.twigPresence)out.twigPresence[cursor]=0;
   // Daughter sprays carry their donor's exposure and grain sizes; no bloom.
   cursor++;
  }
  let from=warm[0],nearest=Infinity;
  for(const i of warm){const j=i*3,d=(cloud.positions[j]-p.at[0])**2+(cloud.positions[j+1]-p.at[1])**2+(cloud.positions[j+2]-p.at[2])**2;if(d<nearest){nearest=d;from=i;}}
  const anchor=Array.from(cloud.positions.subarray(from*3,from*3+3));
  // These are branches, so inherit the real supporting branch's arrival,
  // not the donor flower's unrelated bloom-order value. A short local front
  // then travels from the collar to the daughter spray; the final grain
  // positions, colors and seeds remain unchanged.
  const parentArrival=TIMELINE.growStart+cloud.growth[from*3]*TIMELINE.growSpan+(cloud.seeds[from*3]-.5)*.44;
  const branchStart=parentArrival+.18,branchSpan=Math.max(.10,Math.sqrt(nearest)/1.7);
  for(let n=0;n<twigCount;n++){
   copy(from,cursor);const t=(n+.5)/twigCount,k=cursor*3,b=cursor*4,r=.012*(1-.65*t),a=n*2.399963;
   out.positions[k]=anchor[0]+(p.at[0]-anchor[0])*t+Math.cos(a)*r;
   out.positions[k+1]=anchor[1]+(p.at[1]-anchor[1])*t-.045*Math.sin(Math.PI*t)+Math.sin(a)*r;
   out.positions[k+2]=anchor[2]+(p.at[2]-anchor[2])*t+Math.sin(a*.77)*r;
   out.buds.set([0,0,0,0],b);
   for(let axis=0;axis<3;axis++)out.seeds[k+axis]=hash(n*7+axis+id*717);
   const arrival=branchStart+branchSpan*t;
   const branchGrowth=(arrival-TIMELINE.growStart-(out.seeds[k]-.5)*.44)/TIMELINE.growSpan;
   out.growth.set([branchGrowth,1,0],k);
   out.energies[cursor]*=.74;if(out.branchDensity)out.branchDensity[cursor]=.58;
   if(out.twigPresence)out.twigPresence[cursor]=.35;
   cursor++;
  }
  records.push({center:p.at,count:p.count,scale:p.scale,anchor,connection:Math.sqrt(nearest),parentArrival,branchStart,branchEnd:branchStart+branchSpan});
 });
 return {...cloud,...out,balancedSpraysVersion:'parent-fed-crown-links-v2',balancedSprayParticles:added,balancedSprays:records};
}
