import * as THREE from 'three';
import {facadeMaterial,FACADE_PROFILES} from './facade-materials.js';
import data from '../public/data/riverside-buildings.json' with {type:'json'};

export const mappedBuildings=data.buildings;
export const mappedBuildingById=new Map(mappedBuildings.map(b=>[b.id,b]));
function facade(record){
 const colors={hilton:['#c3c7bf','#48616c'],sheraton:['#d0b293','#43515a'],peninsula:['#c5b7a0','#344a58'],shangri:['#baa68e','#344c59'],magnolias:['#a0b3ba','#344c60'],residences:['#bbb7a7','#344952']};
 const [stone,glass]=colors[record.style],style=['magnolias','residences'].includes(record.style)?'condo':'hotel';
 return facadeMaterial(record.id,{columns:12,rows:record.floors,style,stone,glass,height:2048});
}

// These outlines are the mapped buildings in geographic orientation, in metres.
// Full wall quads and a triangulated roof keep concave footprints watertight.
export function addMappedArchitecture(b,record,M){
 let points=record.footprint.slice(0,-1).map(p=>[...p]);
 const area=points.reduce((sum,p,i)=>{const q=points[(i+1)%points.length];return sum+p[0]*q[1]-q[0]*p[1];},0);
 if(area>0)points.reverse();
 const height=record.height-7,base=4.5,wall=facade(record),floorHeight=height/record.floors;
 const minX=Math.min(...points.map(p=>p[0])),maxX=Math.max(...points.map(p=>p[0])),minZ=Math.min(...points.map(p=>p[1])),maxZ=Math.max(...points.map(p=>p[1]));
 const shape=new THREE.Shape(points.map(([x,z])=>new THREE.Vector2(x,-z)));
 const roof=new THREE.ShapeGeometry(shape);roof.rotateX(-Math.PI/2);b.add(roof,M.concrete,0,base+height,0);
 const plinth=new THREE.ExtrudeGeometry(shape,{depth:base,bevelEnabled:false});plinth.rotateX(-Math.PI/2);b.add(plinth,M.oldStone);
 const edges=[];
 for(let i=0;i<points.length;i++){
  const a=points[i],z=points[(i+1)%points.length],dx=z[0]-a[0],dz=z[1]-a[1],length=Math.hypot(dx,dz);if(length<.1)continue;
  const x=(a[0]+z[0])/2,zz=(a[1]+z[1])/2,angle=Math.atan2(-dz,dx),nx=Math.sin(angle),nz=Math.cos(angle);
  const geo=new THREE.PlaneGeometry(length,height),uv=geo.attributes.uv;
  for(let j=0;j<uv.count;j++)uv.setX(j,uv.getX(j)*length/(12*FACADE_PROFILES[wall.userData.facade.style].bayWidth)+(i%4)/12);
  b.add(geo,wall,x,base+height/2,zz,[0,angle,0]);
  // Recessed glazing, exposed balcony edges and corner fins, all merged.
  for(let floor=0;floor<=record.floors;floor++){
   b.box(length+.18,.34,record.style==='peninsula'?1.05:.65,x+nx*.15,base+floor*floorHeight,zz+nz*.15,M.concrete,[0,angle,0]);
  }
  if(length>8){
   const bays=Math.round(length/(record.style==='hilton'?7:11));
   for(let j=0;j<=bays;j++){const t=j/bays;b.box(.38,height+.5,.38,a[0]+dx*t+nx*.2,base+height/2,a[1]+dz*t+nz*.2,M.plaster);}
  }
  if(nx*record.side>.45&&length>12)edges.push({x,zz,angle,nx,nz,length});
 }
 // Smaller rooftop equipment and recognisable crowns distinguish the skyline.
 const cx=(minX+maxX)/2,cz=(minZ+maxZ)/2;
 if(record.style==='hilton'){
  b.cylinder(14.5,16,4.5,cx,base+height+2.25,cz,M.glass,40,[1.1,1,.85]);
  b.cylinder(16.7,16.7,.7,cx,base+height+4.85,cz,M.white,40,[1.1,1,.85]);
  b.cylinder(16.2,16.2,.3,cx,base+height+.2,cz,M.softLight,40,[1.1,1,.85]);
 }else if(record.style==='peninsula'){
  b.box((maxX-minX)*.55,4,(maxZ-minZ)*.6,cx,base+height+2,cz,M.plaster);
  b.cylinder(12,12,.65,cx,base+height+4.6,cz,M.concrete,32);
 }else if(record.style==='magnolias'||record.style==='residences'){
  const r=record.style==='magnolias'?12:10;
  b.cylinder(r*.75,r,6,cx,base+height+3,cz,M.glass,8,[1.3,1,.8]);
  b.cylinder(r*.78,r*.78,.7,cx,base+height+6.3,cz,M.softLight,8,[1.3,1,.8]);
 }else{
  b.box((maxX-minX)*.55,4,(maxZ-minZ)*.45,cx,base+height+2,cz,M.roof);
  b.box((maxX-minX)*.55+1,.5,(maxZ-minZ)*.45+1,cx,base+height+4.1,cz,M.plaster);
 }
 edges.sort((a,z)=>z.length-a.length);const front=edges[0];
 if(wall.userData.facade.style==='condo')for(const edge of edges.slice(0,2)){
  const {x,zz,angle,nx,nz,length}=edge;
  for(let floor=1;floor<record.floors;floor++){
   const y=base+floor*floorHeight;
   b.box(length,.22,1.18,x+nx*.38,y,zz+nz*.38,M.concrete,[0,angle,0]);
   b.box(length-.25,.85,.10,x+nx*.92,y+.63,zz+nz*.92,M.glass,[0,angle,0]);
  }
  // Deep full-height privacy fins between pairs of large apartment bays.
  const bays=Math.max(1,Math.round(length/10.8));
  for(let j=1;j<bays;j++){const u=(j/bays-.5)*length;b.box(.20,height,1.18,x+Math.cos(angle)*u+nx*.42,base+height/2,zz-Math.sin(angle)*u+nz*.42,M.concrete,[0,angle,0]);}
 }

 if(front){
  const names={hilton:'Hilton',sheraton:'ROYAL ORCHID SHERATON',peninsula:'THE PENINSULA',shangri:'Shangri-La',magnolias:'MAGNOLIAS',residences:'MANDARIN ORIENTAL'};
  const width=Math.min(front.length*.8,record.style==='sheraton'?29:23),labelHeight=record.style==='hilton'?3.7:2.3;
  b.add(new THREE.PlaneGeometry(width,labelHeight),hotelNameMaterial(names[record.style]),front.x+front.nx*.8,base+height-3,front.zz+front.nz*.8,[0,front.angle,0]);
  // Entry canopy and a row of illuminated lobby bays, well within the footprint.
  b.box(Math.min(front.length,28),.7,4,front.x-front.nx*1.3,5.8,front.zz-front.nz*1.3,M.plaster,[0,front.angle,0]);
 }
 b.kind=record.id;
}
const hotelSigns=new Map();
function hotelNameMaterial(label){
 if(hotelSigns.has(label))return hotelSigns.get(label);
 let map=null;
 if(typeof document!=='undefined'){
  const canvas=document.createElement('canvas');canvas.width=1024;canvas.height=160;const c=canvas.getContext('2d');
  c.fillStyle='#161c21';c.fillRect(0,0,1024,160);c.fillStyle='#eee0bb';c.font='500 92px Georgia,serif';c.textAlign='center';c.textBaseline='middle';c.fillText(label,512,80,940);
  map=new THREE.CanvasTexture(canvas);map.colorSpace=THREE.SRGBColorSpace;map.anisotropy=4;
 }
 const m=new THREE.MeshStandardMaterial({map,emissiveMap:map,color:0xffffff,emissive:0xffe5af,emissiveIntensity:.9,roughness:.65});hotelSigns.set(label,m);return m;
}
