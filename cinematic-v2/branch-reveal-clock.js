import {TIMELINE} from './fire-timeline.js';
const clamp=x=>Math.max(0,Math.min(1,x));
const build=(nodes,depth=0)=>{if(!nodes.length)return null;const axis=depth%3;nodes.sort((a,b)=>a.p[axis]-b.p[axis]);const m=nodes.length>>1;return {node:nodes[m],axis,left:build(nodes.slice(0,m),depth+1),right:build(nodes.slice(m+1),depth+1)};};
function neighbours(tree,p,count=8){const found=[];
 const visit=t=>{if(!t)return;const q=t.node.p,d=(p[0]-q[0])**2+(p[1]-q[1])**2+(p[2]-q[2])**2;
  if(found.length<count||d<found.at(-1).distance){let i=found.findIndex(v=>d<v.distance);if(i<0)i=found.length;found.splice(i,0,{node:t.node,distance:d});if(found.length>count)found.pop();}
  const delta=p[t.axis]-q[t.axis];visit(delta<0?t.left:t.right);if(found.length<count||delta*delta<found.at(-1).distance)visit(delta<0?t.right:t.left);
 };visit(tree);return found;
}
/** Causal light-fiber clock from the actual revised branch-grain cloud. */
export function createBranchRevealClock(cloud){
 const nodes=[];
 for(let i=0;i<cloud.count;i++){
  const j=i*3;
  if(cloud.growth[j+1]<.5||cloud.branchDensity[i]<.18||cloud.energies[i]<.35)continue;
  nodes.push({p:[cloud.positions[j],cloud.positions[j+1],cloud.positions[j+2]],
   time:TIMELINE.growStart+Math.max(0,Math.min(1.15,cloud.growth[j]))*TIMELINE.growSpan+(cloud.seeds[j]-.5)*.44});
 }
 const tree=build(nodes),stats={samples:0,lateUnsupported:0,min:Infinity,max:0};
 function at(point){
  const nearest=neighbours(tree,point.toArray());
  const local=nearest.filter(v=>v.distance<.25*.25);
  // A geometric guide in a dark gap is not a visible early branch. It gets
  // its usual delicate highlight only once the neighbouring crown opens.
  let reveal;
  if(local.length<3){reveal=10.8;stats.lateUnsupported++;}
  else{const times=local.map(v=>v.node.time).sort((a,b)=>a-b);reveal=times[Math.floor((times.length-1)*.75)]+.10;}
  stats.samples++;stats.min=Math.min(stats.min,reveal);stats.max=Math.max(stats.max,reveal);
  return reveal;
 }
 return {at,stats};
}

/** Couple each child front to the actual attachment on its parent guide.
 * Nearby grains can belong to a crossing bough, so their arrival alone is
 * insufficient to establish a connected branch. Profiles are in tree order.
 */
export function connectBranchRevealProfiles(profiles,parents,settle=.24){
 const connected=[];
 for(let id=0;id<profiles.length;id++){
  const source=profiles[id],times=source.times.slice(),parent=parents[id];
  let gate=0,attachment=-1;
  if(parent>=0){
   const support=connected[parent],p=source.points[0];let best=Infinity;
   for(let step=1;step<support.points.length;step++){
    const a=support.points[step-1],b=support.points[step];
    const dx=b.x-a.x,dy=b.y-a.y,dz=b.z-a.z;
    const u=clamp(((p.x-a.x)*dx+(p.y-a.y)*dy+(p.z-a.z)*dz)/Math.max(1e-12,dx*dx+dy*dy+dz*dz));
    const distance=(p.x-a.x-u*dx)**2+(p.y-a.y-u*dy)**2+(p.z-a.z-u*dz)**2;
    if(distance<best){
     best=distance;attachment=(step-1+u)/(support.points.length-1);
     // Both vertices of the parent span must have emerged before its child.
     gate=Math.max(support.times[step-1],support.times[step])+settle;
    }
   }
  }
  for(let step=0;step<times.length;step++)times[step]=Math.max(times[step],step?times[step-1]:gate);
  connected.push({...source,times,parent,gate,attachment});
 }
 return connected;
}
