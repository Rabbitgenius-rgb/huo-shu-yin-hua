import { Vector3, CatmullRomCurve3, DataTexture, RGBAFormat, FloatType, NearestFilter } from 'three';
import { VOLUME_PATHS } from '../tree-src/fire-tree-volume.js';
import { PARENTS } from '../tree-src/fire-image-depth.js';
import { branchLayoutPoint } from './crown-volume-fill.js';
import { branchFiberCurve, sampleBranchBundleAxis } from './branch-structure.js';

const WPP=12.2/1456, WIDTH=192, clamp=x=>Math.max(0,Math.min(1,x));
const local=p=>new Vector3((p[0]-728)*WPP,(408-p[1])*WPP,p[2]);
const root=local(VOLUME_PATHS[0][0]);
// The emission mouth sits 2 mm under the host water after scale/anchoring.
root.y-=.018;
const cubic=(c,t)=>{const a=1-t,bow=Math.sin(Math.PI*t)**2*(.71+.29*Math.sin(t*Math.PI*1.8+(c[5]?.[0]||0)));
 return new Vector3(...[0,1,2].map(k=>a**3*c[0][k]+3*a*a*t*c[1][k]+3*a*t*t*c[2][k]+t**3*c[3][k]+(c[4]?.[k]||0)*bow));};
function nearestOnPolyline(points,p){
 let best=Infinity,index=0,t=0;
 for(let i=1;i<points.length;i++){
  const a=points[i-1],b=points[i],dx=b.x-a.x,dy=b.y-a.y,dz=b.z-a.z;
  const f=clamp(((p.x-a.x)*dx+(p.y-a.y)*dy+(p.z-a.z)*dz)/Math.max(1e-12,dx*dx+dy*dy+dz*dz));
  const d=(p.x-a.x-dx*f)**2+(p.y-a.y-dy*f)**2+(p.z-a.z-dz*f)**2;
  if(d<best){best=d;index=i-1;t=f;}
 }
 return {index,t,point:points[index].clone().lerp(points[index+1],t)};
}
function connected(parent,own){
 if(!parent){own[0].copy(root);return own;}
 const hit=nearestOnPolyline(parent,own[0]);
 const delta=hit.point.clone().sub(own[0]);
 // Tiny existing guide differences at collars are joined with a C1 easing.
 for(let i=0;i<Math.min(8,own.length);i++){const t=i/7,w=1-t*t*(3-2*t);own[i].addScaledVector(delta,w);}
 return [...parent.slice(0,hit.index+1),...own];
}
function resample(points){
 const distances=[0];for(let i=1;i<points.length;i++)distances.push(distances[i-1]+points[i].distanceTo(points[i-1]));
 const length=distances.at(-1),out=[];let j=1;
 for(let i=0;i<WIDTH;i++){const d=length*i/(WIDTH-1);while(j<points.length-1&&distances[j]<d)j++;
  out.push(points[j-1].clone().lerp(points[j],(d-distances[j-1])/Math.max(1e-9,distances[j]-distances[j-1])));}
 return {points:out,length};
}
function kdBuild(nodes,depth=0){if(!nodes.length)return null;const axis=depth%3;nodes.sort((a,b)=>a.p[axis]-b.p[axis]);const m=nodes.length>>1;return {node:nodes[m],axis,left:kdBuild(nodes.slice(0,m),depth+1),right:kdBuild(nodes.slice(m+1),depth+1)};}
function kdNearest(tree,p){let best=null,distance=Infinity;
 const visit=t=>{if(!t)return;const q=t.node.p,d=(p[0]-q[0])**2+(p[1]-q[1])**2+(p[2]-q[2])**2;if(d<distance){distance=d;best=t.node;}
  const delta=p[t.axis]-q[t.axis];visit(delta<0?t.left:t.right);if(delta*delta<distance)visit(delta<0?t.right:t.left);};
 visit(tree);return best;
}
/** Root-connected guide lookup. Destination arrays remain untouched. */
export function createRootGrowthRoutes(cloud){
 const curves=VOLUME_PATHS.map((path,id)=>branchFiberCurve(id)||new CatmullRomCurve3(path.map(local),false,'centripetal'));
 const paths=[],families=[];
 for(let family=0;family<3;family++){
  const source=[],supports=[];
  for(let id=0;id<curves.length;id++){
   const own=Array.from({length:49},(_,i)=>{
    if([0,1,5].includes(id))return sampleBranchBundleAxis(id,family,i/48);
    return new Vector3(...branchLayoutPoint(curves[id].getPoint(i/48).toArray(),family));});
   const connectedPath=connected(PARENTS[id]<0?null:source[PARENTS[id]],own);
   source.push(connectedPath);paths.push(resample(connectedPath));
  }
  for(const support of cloud.supportPaths||[]){
   const own=Array.from({length:33},(_,i)=>new Vector3(...branchLayoutPoint(cubic(support.control,i/32).toArray(),family)));
   const parent=support.parentKind==='support'?supports[support.parent]:source[support.parent];
   const connectedPath=connected(parent||source[0],own);supports.push(connectedPath);paths.push(resample(connectedPath));
  }
  families.push({source,supports});
 }
 // v2l: the new root strands grow out of the junction along their own curves.
 for(const strand of cloud.rootStrandPaths||[])paths.push(resample([root.clone(),...strand.map(q=>new Vector3(...q))]));
 const height=paths.length,data=new Float32Array(WIDTH*height*4),nodes=[];
 paths.forEach((path,row)=>path.points.forEach((p,i)=>{const at=(row*WIDTH+i)*4;data[at]=p.x;data[at+1]=p.y;data[at+2]=p.z;data[at+3]=1;
  // Sparse nearest lookup is refined against its two actual segments below.
  if(i%3===0||i===WIDTH-1)nodes.push({p:p.toArray(),row,i});}));
 const kd=kdBuild(nodes),routes=new Float32Array(cloud.count*4),q=new Vector3();
 let maxConnector=0;
 for(let i=0;i<cloud.count;i++){
  const j=i*3,k=i*4,isBranch=cloud.growth[j+1]>.5;
  const budFactor=isBranch?0:clamp(cloud.buds[k+3]);
  q.set(cloud.positions[j]+cloud.buds[k]*budFactor,cloud.positions[j+1]+cloud.buds[k+1]*budFactor,cloud.positions[j+2]+cloud.buds[k+2]*budFactor);
  // Keep the mother-route binding of reshaped partial buds. The final target
  // and bud offset still come from the completed geometry in the shader.
  const parentQuery=cloud.crownParentQueries?.get(i);
  if(parentQuery)q.fromArray(parentQuery);
  const nearest=kdNearest(kd,q.toArray()),path=paths[nearest.row];let best=Infinity,u=0;
  for(let s=Math.max(1,nearest.i-3);s<=Math.min(WIDTH-1,nearest.i+3);s++){
   const a=path.points[s-1],b=path.points[s],dx=b.x-a.x,dy=b.y-a.y,dz=b.z-a.z;
   const t=clamp(((q.x-a.x)*dx+(q.y-a.y)*dy+(q.z-a.z)*dz)/Math.max(1e-12,dx*dx+dy*dy+dz*dz));
   const d=(q.x-a.x-dx*t)**2+(q.y-a.y-dy*t)**2+(q.z-a.z-dz*t)**2;
   if(d<best){best=d;u=(s-1+t)/(WIDTH-1);}
  }
  routes[k]=nearest.row;routes[k+1]=u;routes[k+2]=path.length*u;routes[k+3]=Math.sqrt(best);maxConnector=Math.max(maxConnector,routes[k+3]);
 }
 const texture=new DataTexture(data,WIDTH,height,RGBAFormat,FloatType);texture.minFilter=texture.magFilter=NearestFilter;texture.needsUpdate=true;
 return {attributes:routes,texture,width:WIDTH,height,paths,root:root.clone(),maxConnector,version:'root-connected-growth-v1'};
}
