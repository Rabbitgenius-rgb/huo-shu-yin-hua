// A single detached daughter spray is brought back toward its existing bough.
// Its real floret grains move together; the main canopy and root stay fixed.
const WIDTHS={positions:3,colors:3,seeds:3,energies:1,normals:3,florets:2,crownWeights:1,buds:4,growth:3,branchOutline:3,crownTone:1,branchDensity:1,twigPresence:1};
// Bud centre of the detached spray: the fan-1 copy of the crown spray at source
// (2.321, 0.595). Its depth follows that spray, so it must be re-measured whenever
// the crown depth changes (the v2t limb-only change leaves it as it was).
const SOURCE=[2.9930201434,1.1530373730,1.3711931258];
const SHIFT=[-.12,-.23,-.14], COUNT=120;
const hash=n=>{const x=Math.sin(n*12.9898+78.233)*43758.5453;return x-Math.floor(x);};

export function refineParticleLayers(cloud){
 if(cloud.particleLayerVersion)return cloud;
 const target=SOURCE.map((x,i)=>x+SHIFT[i]),moved=[];
 let nearest=Infinity,from=-1;
 for(let i=0;i<cloud.count;i++){
  const j=i*3,b=i*4;
  if(cloud.growth[j+1]<.5){
   const d=SOURCE.reduce((sum,x,a)=>sum+(cloud.positions[j+a]+cloud.buds[b+a]-x)**2,0);
   if(d<.025**2&&cloud.buds[b+3]>.6)moved.push(i);
  }else if(cloud.positions[j+1]>.15&&cloud.growth[j+2]<9&&cloud.energies[i]>.25&&cloud.branchDensity[i]>.35){
   const d=target.reduce((sum,x,a)=>sum+(cloud.positions[j+a]-x)**2,0);
   if(d<nearest){nearest=d;from=i;}
  }
 }
 if(!moved.length||from<0)throw Error('Expected detached spray and supporting bough.');
 const out={...cloud,count:cloud.count+COUNT};
 for(const [name,width]of Object.entries(WIDTHS)){
  out[name]=new Float32Array(out.count*width);out[name].set(cloud[name]);
 }
 for(const i of moved)for(let a=0;a<3;a++)out.positions[i*3+a]+=SHIFT[a];
 const anchor=Array.from(cloud.positions.subarray(from*3,from*3+3));
 for(let n=0;n<COUNT;n++){
  const i=cloud.count+n,j=i*3,b=i*4,t=(n+.5)/COUNT;
  for(const [name,width]of Object.entries(WIDTHS))out[name].set(cloud[name].subarray(from*width,(from+1)*width),i*width);
  const angle=n*2.399963,r=.012*(1-.65*t)*Math.sqrt(hash(n+991));
  out.positions[j]=anchor[0]+(target[0]-anchor[0])*t+Math.cos(angle)*r;
  out.positions[j+1]=anchor[1]+(target[1]-anchor[1])*t-.045*Math.sin(Math.PI*t)+Math.sin(angle)*r;
  out.positions[j+2]=anchor[2]+(target[2]-anchor[2])*t+Math.sin(angle*.73)*r;
  out.buds.set([0,0,0,0],b);
  // The short connector lands after its bough and before this spray opens.
  out.growth[j]=Math.min(.90,cloud.growth[from*3]+.045*t);
  out.growth[j+1]=1;out.growth[j+2]=0;
  for(let a=0;a<3;a++)out.seeds[j+a]=hash(n*7+a+1193);
  out.energies[i]*=.8;out.branchDensity[i]=.64;out.twigPresence[i]=.45;
  out.branchOutline.set([0,0,0],j);
 }
 return {...out,particleLayerVersion:'local-spray-attachment-v1',reconnectedSprayParticles:moved.length,
  sprayConnectorParticles:COUNT,sprayConnectorLength:Math.sqrt(nearest)};
}
