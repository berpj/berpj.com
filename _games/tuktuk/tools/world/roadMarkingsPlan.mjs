import ClipperLib from 'clipper-lib';

// Integer millimetres prevent the floating-point sweep ambiguities that occur
// when thousands of almost-coincident OSM junction edges are unioned at once.
function clip(operation,geometries){
  const normalize=g=>!g.length?[]:typeof g[0][0][0]==='number'?[g]:g;
  const paths=g=>normalize(g).flatMap(polygon=>polygon.map((ring,index)=>{
    const p=ring.slice(0,-1).map(([x,z])=>({X:Math.round(x*1000),Y:Math.round(z*1000)}));
    if(ClipperLib.Clipper.Orientation(p)!==(index===0))p.reverse();return p;
  })).filter(p=>p.length>=3);
  const engine=new ClipperLib.Clipper();
  const subject=operation==='union'?geometries.flatMap(paths):paths(geometries[0]);
  if(!subject.length)return [];
  engine.AddPaths(subject,ClipperLib.PolyType.ptSubject,true);
  if(operation!=='union')engine.AddPaths(geometries.slice(1).flatMap(paths),ClipperLib.PolyType.ptClip,true);
  const tree=new ClipperLib.PolyTree();
  engine.Execute({union:ClipperLib.ClipType.ctUnion,difference:ClipperLib.ClipType.ctDifference,intersection:ClipperLib.ClipType.ctIntersection}[operation],tree,ClipperLib.PolyFillType.pftNonZero,ClipperLib.PolyFillType.pftNonZero);
  const result=[],ring=node=>{const p=node.Contour().map(p=>[p.X/1000,p.Y/1000]);return p.length?[...p,p[0]]:[];};
  const walk=node=>{for(const child of node.Childs()){if(!child.IsHole()&&child.Contour().length>=3)result.push([ring(child),...child.Childs().filter(n=>n.IsHole()).map(ring)]);walk(child);}};
  walk(tree);return result;
}
export const roadPolygonOperations={union:(...g)=>clip('union',g),difference:(...g)=>clip('difference',g),intersection:(...g)=>clip('intersection',g)};
const polygonClipping=roadPolygonOperations;

const PERIOD=2.8, round=n=>Math.round(n*1000)/1000;
const distance=(a,b)=>Math.hypot(a.x-b.x,a.z-b.z);
const point=p=>[round(p.x),round(p.z)];
const closed=p=>[...p,p[0]];
const bounds=geometry=>{const p=[],collect=g=>{if(typeof g[0]==='number')p.push(g);else for(const child of g)collect(child);};collect(geometry);return {minX:Math.min(...p.map(p=>p[0])),maxX:Math.max(...p.map(p=>p[0])),minZ:Math.min(...p.map(p=>p[1])),maxZ:Math.max(...p.map(p=>p[1]))};};
const overlap=(a,b)=>a.minX<=b.maxX&&a.maxX>=b.minX&&a.minZ<=b.maxZ&&a.maxZ>=b.minZ;
const ringArea=ring=>Math.abs(ring.slice(1).reduce((sum,p,i)=>sum+ring[i][0]*p[1]-p[0]*ring[i][1],0))/2;
export const roadGeometryArea=geometry=>geometry.reduce((sum,p)=>sum+ringArea(p[0])-p.slice(1).reduce((n,h)=>n+ringArea(h),0),0);
class Grid{
  constructor(){this.cells=new Map();}
  keys(b){const k=[];for(let x=Math.floor(b.minX/48);x<=Math.floor(b.maxX/48);x++)for(let z=Math.floor(b.minZ/48);z<=Math.floor(b.maxZ/48);z++)k.push(`${x},${z}`);return k;}
  add(item){item.bounds=bounds(item.geometry);for(const key of this.keys(item.bounds)){if(!this.cells.has(key))this.cells.set(key,[]);this.cells.get(key).push(item);}}
  query(b){const result=new Set();for(const key of this.keys(b))for(const item of this.cells.get(key)||[])if(overlap(item.bounds,b))result.add(item);return [...result];}
}
function ribbon(s,width,cap=0){const nx=s.dir.z*width/2,nz=-s.dir.x*width/2,a={x:s.a.x-s.dir.x*cap,z:s.a.z-s.dir.z*cap},b={x:s.b.x+s.dir.x*cap,z:s.b.z+s.dir.z*cap};return [closed([point({x:a.x-nx,z:a.z-nz}),point({x:b.x-nx,z:b.z-nz}),point({x:b.x+nx,z:b.z+nz}),point({x:a.x+nx,z:a.z+nz})])];}
const family=s=>`${s.road.tags['name:en']||s.road.tags.name||s.road.id}/${s.road.tags.oneway==='yes'?'oneway':'two-way'}`;

/** Join adjacent source segments and split only at a true branch/reversal. */
export function joinedRoadPaths(map){
  const groups=new Map();for(const s of map.segments){const key=family(s);if(!groups.has(key))groups.set(key,[]);groups.get(key).push(s);}
  const paths=[];
  for(const [key,segments]of groups){
    const nodes=new Map();for(const s of segments)for(const id of [s.ia,s.ib]){if(!nodes.has(id))nodes.set(id,[]);nodes.get(id).push(s);}
    const visited=new Set();
    const ordered=[...segments].sort((a,b)=>{const da=Math.min(nodes.get(a.ia).length,nodes.get(a.ib).length),db=Math.min(nodes.get(b.ia).length,nodes.get(b.ib).length);return da-db||a.id.localeCompare(b.id);});
    for(const seed of ordered){
      if(visited.has(seed))continue;
      let node=nodes.get(seed.ia).length===1?seed.ia:nodes.get(seed.ib).length===1?seed.ib:seed.ia;
      const points=[],parts=[];let current=seed,previousDirection=null;
      while(current&&!visited.has(current)){
        visited.add(current);parts.push(current);const forward=current.ia===node,a=forward?current.a:current.b,b=forward?current.b:current.a,nextNode=forward?current.ib:current.ia;
        if(!points.length)points.push({...a,width:current.road.width,node});
        points.push({...b,width:current.road.width,node:nextNode});
        previousDirection={x:(b.x-a.x)/current.len,z:(b.z-a.z)/current.len};node=nextNode;
        const candidates=(nodes.get(node)||[]).filter(s=>!visited.has(s)).map(s=>{const target=s.ia===node?s.b:s.a;return {s,dot:((target.x-b.x)*previousDirection.x+(target.z-b.z)*previousDirection.z)/s.len};}).filter(e=>e.dot>.15).sort((a,b)=>b.dot-a.dot||a.s.id.localeCompare(b.s.id));
        current=candidates[0]?.s;
      }
      if(points.length>=2)paths.push({family:key,points,segments:parts});
    }
  }
  return paths;
}
function offsetSections(path,offset,halfWidth){
  return path.points.map((p,i)=>{
    const prior=path.points[Math.max(0,i-1)],next=path.points[Math.min(path.points.length-1,i+1)];
    const incoming=i?{x:(p.x-prior.x)/distance(p,prior),z:(p.z-prior.z)/distance(p,prior)}:{x:(next.x-p.x)/distance(next,p),z:(next.z-p.z)/distance(next,p)};
    const outgoing=i<path.points.length-1?{x:(next.x-p.x)/distance(next,p),z:(next.z-p.z)/distance(next,p)}:incoming;
    let nx=incoming.z+outgoing.z,nz=-incoming.x-outgoing.x,length=Math.hypot(nx,nz);if(length<.01){nx=outgoing.z;nz=-outgoing.x;length=1;}nx/=length;nz/=length;
    const factor=Math.min(1.8,1/Math.max(.1,nx*outgoing.z-nz*outgoing.x));
    const value=typeof offset==='function'?offset(p):offset,at=d=>({x:p.x+nx*d*factor,z:p.z+nz*d*factor});
    return {center:at(value),low:at(value-halfWidth),high:at(value+halfWidth)};
  });
}
function bands(sections,{period=PERIOD,dashLength=null}={}){
  const result=[];let travel=0;
  for(let i=1;i<sections.length;i++){
    const a=sections[i-1],b=sections[i],length=distance(a.center,b.center);if(length<.001)continue;
    const mix=(p,q,t)=>({x:p.x+(q.x-p.x)*t,z:p.z+(q.z-p.z)*t});let at=0;
    while(at<length-.00001){
      const total=travel+at,index=Math.floor((total+.000001)/period),within=total-index*period;
      const boundary=dashLength!=null&&within<dashLength-.000001?dashLength:period;
      const end=Math.min(length,at+Math.max(.000001,boundary-within));
      if(dashLength==null||within<dashLength-.000001){
        const ring=closed([point(mix(a.low,b.low,at/length)),point(mix(a.low,b.low,end/length)),point(mix(a.high,b.high,end/length)),point(mix(a.high,b.high,at/length))]);
        result.push({geometry:[ring],index,start:total,end:travel+end});
      }
      at=end;
    }
    travel+=length;
  }
  return result;
}
const clean=geometry=>geometry.filter(p=>roadGeometryArea([p])>.015);

/** Pure surface plan. Asphalt is a union, so no coplanar junction polygons remain. */
export function planRoadMarkings(map,{mobile=false,onStage=null}={}){
  const roadIndex=new Grid(),acceptedCurbs=new Grid(),asphaltPieces=[],sidewalkPieces=[];
  for(const s of map.segments){const geometry=ribbon(s,s.road.width);asphaltPieces.push(geometry);sidewalkPieces.push(ribbon(s,s.road.width+4.2));roadIndex.add({geometry:ribbon(s,s.road.width+.16,.08),asphaltGeometry:geometry,family:family(s),segment:s});}
  onStage?.('road surface union');
  const asphalt=polygonClipping.union(asphaltPieces),sidewalk=polygonClipping.difference(polygonClipping.union(sidewalkPieces),asphalt);
  onStage?.('joined curbs and paint');
  const paths=joinedRoadPaths(map),curbs=[],whitePieces=[],yellowPieces=[];
  const stats={paths:paths.length,curbPieces:0,curbFragments:0,clipFailures:0};
  for(const path of paths){
    const tags=path.segments[0].road.tags,isMain=tags.highway==='primary'||tags.highway==='secondary';
    if(isMain&&path.points.some(p=>p.width>=8)&&path.points.some(p=>distance(p,map.spawn)<1100))for(const side of [-1,1]){
      const sections=offsetSections(path,p=>side*(p.width/2+.23),.115);
      for(const band of bands(sections)){
        if(distance(sections[0].center,map.spawn)>1500&&distance(sections.at(-1).center,map.spawn)>1500)continue;
        try{
          const nearby=roadIndex.query(bounds([band.geometry]));let geometry=polygonClipping.difference(band.geometry,...nearby.map(e=>e.geometry));
          if(!geometry.length)continue;
          const duplicates=acceptedCurbs.query(bounds(geometry));if(duplicates.length)geometry=polygonClipping.difference(geometry,...duplicates.map(e=>e.geometry));
          geometry=clean(geometry);if(!geometry.length)continue;
          const item={geometry,color:band.index%2?'red':'white',family:path.family,start:band.start,end:band.end};curbs.push(item);acceptedCurbs.add(item);stats.curbFragments+=geometry.length;
        }catch{stats.clipFailures++;}
      }
    }
    const laneCount=parseInt(tags.lanes)|| (isMain?tags.oneway==='yes'?3:4:1);
    if(laneCount<2)continue;
    const oneWay=['yes','1','true','-1'].includes(tags.oneway),offsets=oneWay?Array.from({length:laneCount-1},(_,i)=>p=>(.5-(i+1)/laneCount)*p.width):[()=>0];
    for(const offset of offsets)for(const dash of bands(offsetSections(path,offset,.065),{period:9,dashLength:3.5})){
      try{const crossing=roadIndex.query(bounds([dash.geometry])).filter(e=>e.family!==path.family);const geometry=clean(crossing.length?polygonClipping.difference(dash.geometry,...crossing.map(e=>e.geometry)):polygonClipping.union(dash.geometry));(oneWay?whitePieces:yellowPieces).push(...geometry);}catch{stats.clipFailures++;}
    }
  }
  onStage?.('crossings');
  const crossingNodes=new Set(),mainSet=new Set(map.main);
  for(const s of map.main)for(const id of [s.ia,s.ib]){
    if(crossingNodes.has(id))continue;
    const side=(map.graph.get(id)||[]).find(e=>!mainSet.has(e.segment)&&e.segment.road.width>=6);if(!side)continue;
    crossingNodes.add(id);const road=side.segment,sign=road.ia===id?1:-1,node=map.nodes.get(id);
    for(let t=8;t<13;t+=1){const center={x:node.x+road.dir.x*sign*t,z:node.z+road.dir.z*sign*t},half=road.road.width*.42;
      const a={x:center.x+road.dir.z*half,z:center.z-road.dir.x*half},b={x:center.x-road.dir.z*half,z:center.z+road.dir.x*half},len=distance(a,b);
      const geometry=ribbon({a,b,len,dir:{x:(b.x-a.x)/len,z:(b.z-a.z)/len}},.50);
      const nearby=roadIndex.query(bounds(geometry)).map(p=>p.asphaltGeometry);if(nearby.length)whitePieces.push(...polygonClipping.intersection(geometry,polygonClipping.union(nearby)));
    }
  }
  onStage?.('paint union');
  const white=whitePieces.length?polygonClipping.intersection(polygonClipping.union(whitePieces),asphalt):[],yellow=yellowPieces.length?polygonClipping.intersection(polygonClipping.difference(polygonClipping.union(yellowPieces),white),asphalt):[];
  stats.curbPieces=curbs.length;stats.asphaltPolygons=asphalt.length;stats.paintPolygons=white.length+yellow.length;stats.curbArea=curbs.reduce((sum,c)=>sum+roadGeometryArea(c.geometry),0);
  return {asphalt,sidewalk,curbs,white,yellow,paths,stats};
}
