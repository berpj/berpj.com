import {DISTRICT_BBOX,SCENERY_MARGIN} from './district.mjs';
import {distance} from '../game/rules.mjs';
export function project(coordinate,origin){return {x:(coordinate[0]-origin[0])*111320*Math.cos(origin[1]*Math.PI/180),z:-(coordinate[1]-origin[1])*110574};}
export function widthFor(tags){const explicit=parseFloat(tags.width);if(explicit>2&&explicit<45)return explicit;const lanes=parseInt(tags.lanes)||({primary:tags.oneway==='yes'?3:6,secondary:3,tertiary:2,residential:2,service:1,living_street:1}[tags.highway]||2);return Math.max(5,Math.min(28,lanes*2.9+.4));}
export function prepareMap(data){
  const origin=data.origin;const bbox=DISTRICT_BBOX.map((v,i)=>i<2?Math.max(v,data.bbox[i]):Math.min(v,data.bbox[i]));const bounds={min:project([bbox[0],bbox[3]],origin),max:project([bbox[2],bbox[1]],origin)};
  const inside=p=>p.x>=bounds.min.x&&p.x<=bounds.max.x&&p.z>=bounds.min.z&&p.z<=bounds.max.z;
  const insideScenery=p=>p.x>=bounds.min.x-SCENERY_MARGIN&&p.x<=bounds.max.x+SCENERY_MARGIN&&p.z>=bounds.min.z-SCENERY_MARGIN&&p.z<=bounds.max.z+SCENERY_MARGIN;
  const roads=data.roads.filter(r=>r.drivable&&!['private','no'].includes(r.tags.access)&&!['parking_aisle','driveway'].includes(r.tags.service)&&!['motorway','motorway_link'].includes(r.tags.highway)&&r.tags.tunnel!=='yes').map(r=>({...r,points:r.coordinates.map(p=>project(p,origin)),width:widthFor(r.tags)}));
  const nodes=new Map();const segments=[];const graph=new Map(),legalGraph=new Map();
  const add=(id,p)=>{if(!nodes.has(id)){nodes.set(id,p);graph.set(id,[]);legalGraph.set(id,[]);}};
  for(const r of roads)for(let i=1;i<r.points.length;i++){const a=r.points[i-1],b=r.points[i];if(!inside(a)||!inside(b))continue;const len=distance(a,b);if(len<.5)continue;const ia=r.nodeIds[i-1],ib=r.nodeIds[i];add(ia,a);add(ib,b);const segment={a,b,len,ia,ib,road:r,id:`${r.id}:${i}`,dir:{x:(b.x-a.x)/len,z:(b.z-a.z)/len}};segments.push(segment);graph.get(ia).push({to:ib,len,segment});graph.get(ib).push({to:ia,len,segment});if(r.tags.oneway!=='-1')legalGraph.get(ia).push({to:ib,len,segment});if(!['yes','1','true'].includes(r.tags.oneway))legalGraph.get(ib).push({to:ia,len,segment});}
  // Keep mission anchors on the largest connected public-road component.
  let largest=new Set();const seen=new Set();for(const id of nodes.keys()){if(seen.has(id))continue;const component=new Set([id]),queue=[id];seen.add(id);for(let q=0;q<queue.length;q++)for(const e of graph.get(queue[q]))if(!seen.has(e.to)){seen.add(e.to);component.add(e.to);queue.push(e.to);}if(component.size>largest.size)largest=component;}
  const main=segments.filter(s=>s.road.tags['name:en']==='Sukhumvit Road'||s.road.tags.name==='ถนนสุขุมวิท');
  const nearest=(p,list=segments)=>{let best=null,bestDist=Infinity;for(const s of list){const t=Math.max(0,Math.min(1,((p.x-s.a.x)*s.dir.x+(p.z-s.a.z)*s.dir.z)/s.len));const point={x:s.a.x+s.dir.x*s.len*t,z:s.a.z+s.dir.z*s.len*t};const d=distance(p,point);if(d<bestDist){bestDist=d;best={...point,segment:s,t,distance:d};}}return best;};
  const spawnBase=nearest(project([100.5650,13.7348],origin),main);const dir=spawnBase.segment.dir;
  // Source ways already follow one-way direction. Offset into the left-side lane.
  const spawn={x:spawnBase.x+dir.z*2.2,z:spawnBase.z-dir.x*2.2,heading:Math.atan2(-dir.x,-dir.z)};
  const candidates=segments.filter(s=>largest.has(s.ia)&&s.len>20&&!s.road.tags.service&&['primary','secondary','tertiary','residential','living_street'].includes(s.road.tags.highway));
  const anchors=[];const ordered=[...candidates].sort((a,b)=>distance(a.a,spawn)-distance(b.a,spawn));
  for(const s of ordered){const p={x:(s.a.x+s.b.x)/2+s.dir.z*(s.road.width/2-1.2),z:(s.a.z+s.b.z)/2-s.dir.x*(s.road.width/2-1.2)};if(anchors.some(a=>distance(a,p)<70))continue;const roadName=s.road.tags['name:en']||s.road.tags.name||'Sukhumvit Soi';const name=roadName.replace('Soi Sukhumvit ','Soi ').replace('Sukhumvit Road','Sukhumvit');anchors.push({...p,node:s.ia,name,thai:s.road.tags['name:th']||s.road.tags.name||'สุขุมวิท',road:s.road,heading:Math.atan2(-s.dir.x,-s.dir.z),id:anchors.length,segment:s});if(anchors.length>=36)break;}
  const landmarkNames=['Phrom Phong BTS','Asok BTS','Benchasiri Park','Terminal 21','EmQuartier','Emporium','EmSphere','Soi 22','Soi 24','Soi 31','Soi 23','Soi 18','Soi 20','Soi 33','Soi 16'];
  const locations=[[100.56946,13.73051],[100.5604,13.7370],[100.5687,13.7290],[100.56015,13.7378],[100.5698,13.7322],[100.56936,13.7296],[100.56667,13.73168],[100.5662,13.7318],[100.5706,13.7301],[100.5674,13.7347],[100.5625,13.7373],[100.5628,13.7338],[100.5650,13.7328],[100.5702,13.7335],[100.5595,13.7334]];
  const destinations=locations.map((coord,i)=>{const n=nearest(project(coord,origin),candidates);const s=n.segment;return {x:n.x+s.dir.z*(s.road.width/2-1.5),z:n.z-s.dir.x*(s.road.width/2-1.5),name:landmarkNames[i],node:s.ia,segment:s,id:`destination-${i}`};});
  function route(from,to){
    const start=nearest(from),finish=nearest(to);if(!start||!finish)return null;
    const permitsForward=s=>s.road.tags.oneway!=='-1';
    const permitsReverse=s=>!['yes','1','true'].includes(s.road.tags.oneway);
    const first=start.segment,last=finish.segment;
    const seed=[];if(permitsForward(first))seed.push({id:first.ib,d:(1-start.t)*first.len});if(permitsReverse(first))seed.push({id:first.ia,d:start.t*first.len});
    const goals=[];if(permitsForward(last))goals.push({id:last.ia,d:finish.t*last.len});if(permitsReverse(last))goals.push({id:last.ib,d:(1-finish.t)*last.len});
    const dist=new Map(),previous=new Map(),open=[];
    for(const entry of seed){dist.set(entry.id,entry.d);open.push(entry);}
    let direct=Infinity;
    if(first===last){const delta=(finish.t-start.t)*first.len;if(delta>=0&&permitsForward(first)||delta<=0&&permitsReverse(first))direct=Math.abs(delta);}
    let best=direct,end=null;
    while(open.length){
      open.sort((a,b)=>b.d-a.d);const {id,d}=open.pop();if(d!==dist.get(id)||d>best)continue;
      for(const goal of goals)if(goal.id===id&&d+goal.d<best){best=d+goal.d;end=id;}
      for(const edge of legalGraph.get(id)||[]){const next=d+edge.len;if(next<best&&next<(dist.get(edge.to)??Infinity)){dist.set(edge.to,next);previous.set(edge.to,id);open.push({id:edge.to,d:next});}}
    }
    if(!Number.isFinite(best))return null;
    const ids=[];if(end!==null){ids.unshift(end);while(previous.has(ids[0]))ids.unshift(previous.get(ids[0]));}
    const points=[from,{x:start.x,z:start.z},...ids.map(id=>nodes.get(id)),{x:finish.x,z:finish.z},to];
    return {length:best+distance(from,start)+distance(to,finish),points:points.filter((p,i)=>!i||distance(p,points[i-1])>.05)};
  }
  return {data,origin,bounds,inside,insideScenery,district:{bbox,sceneryMargin:SCENERY_MARGIN},roads,segments,graph,legalGraph,nodes,main,nearest,spawn,anchors,destinations,route,project:p=>project(p,origin)};
}
