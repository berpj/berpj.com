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
 const condo=['magnolias','residences'].includes(record.style),band=record.style==='sheraton'?M.stone:M.concrete;
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
   b.box(length+.18,condo?.22:.38,record.style==='peninsula'?1.05:.65,x+nx*.15,base+floor*floorHeight,zz+nz*.15,band,[0,angle,0]);
  }
  if(length>8){
   const bays=Math.round(length/(record.style==='hilton'?7:11));
   for(let j=0;j<=bays;j++){const t=j/bays;b.box(.38,height+.5,.38,a[0]+dx*t+nx*.2,base+height/2,a[1]+dz*t+nz*.2,M.plaster);}
  }
  if(nx*record.side>.45&&length>12){
   edges.push({x,zz,angle,nx,nz,length});
   if(!condo){
    // Deep room dividers and projecting balcony slabs catch oblique river light.
    const bays=Math.max(1,Math.round(length/(record.style==='peninsula'?5.6:7.4)));
    for(let j=0;j<=bays;j++){const u=(j/bays-.5)*length;b.box(.27,height,1.15,x+Math.cos(angle)*u+nx*.40,base+height/2,zz-Math.sin(angle)*u+nz*.40,M.plaster,[0,angle,0]);}
    if(record.style!=='hilton')for(let f=1;f<record.floors;f++){
     b.box(length,.2,1.15,x+nx*.45,base+f*floorHeight,zz+nz*.45,band,[0,angle,0]);
     b.box(length-.3,.68,.12,x+nx*.94,base+f*floorHeight+.49,zz+nz*.94,M.glass,[0,angle,0]);
    }
   }
  }
 }
 // Smaller rooftop equipment and recognisable crowns distinguish the skyline.
 const cx=(minX+maxX)/2,cz=(minZ+maxZ)/2;
 const top=base+height;
 if(record.style==='hilton'){
  // The circular ThreeSixty lounge is over the round river end, not the centre.
  const loungeX=maxX-16.9,loungeZ=-3;
  b.cylinder(12.9,13.8,3.8,loungeX,top+1.9,loungeZ,M.glass,32);
  b.cylinder(15.3,14.5,1.0,loungeX,top+4.25,loungeZ,M.white,32);
  b.cylinder(8.7,15.3,1.0,loungeX,top+5.25,loungeZ,M.concrete,32);
  for(let i=0;i<24;i++){const a=i*Math.PI/12;b.box(.15,3.8,.15,loungeX+Math.sin(a)*13.15,top+1.9,loungeZ+Math.cos(a)*13.15,M.bronze);}
  b.cylinder(13.9,13.9,.15,loungeX,top+.15,loungeZ,M.softLight,32);
  b.box(30,1.0,15,-14,top+.5,1,M.dark,[0,.17,0]);
  for(let x=-25;x<0;x+=4)b.box(.18,2.4,13,x,top+1.7,1,M.plaster,[0,.17,0]);
 }else if(record.style==='peninsula'){
  // A stepped service crown and usable rooftop helipad above the W-shaped plan.
  b.box(16,4,24,cx,top+2,cz-5,M.plaster);
  b.cylinder(10.4,10.4,.5,cx,top+4.5,cz-5,M.concrete,8);
  b.add(new THREE.RingGeometry(7.8,8.0,32),M.white,cx,top+4.77,cz-5,[-Math.PI/2,0,0]);
  for(const x of[-2,2])b.box(.45,.025,5,cx+x,top+4.79,cz-5,M.white);b.box(4,.025,.45,cx,top+4.79,cz-5,M.white);
 }else if(condo){
  // Tall faceted crowns follow the actual tower outline, not an octagonal cone.
  const scale=record.style==='magnolias'?.83:.76;
  const crown=new THREE.Shape(points.map(([x,z])=>new THREE.Vector2(cx+(x-cx)*scale,-(cz+(z-cz)*scale))));
  const cap=new THREE.ExtrudeGeometry(crown,{depth:5.8,bevelEnabled:false});cap.rotateX(-Math.PI/2);b.add(cap,M.glass,0,top,0);
  const rim=new THREE.ExtrudeGeometry(crown,{depth:.42,bevelEnabled:false});rim.rotateX(-Math.PI/2);b.add(rim,M.plaster,0,top+5.8,0);
  for(let i=0;i<points.length;i++){
   const a=points[i],c=points[(i+1)%points.length],len=Math.hypot(c[0]-a[0],c[1]-a[1]);
   const cells=Math.max(1,Math.ceil(len/5.5));for(let j=0;j<cells;j++){
    const t=j/cells,x=cx+((a[0]+(c[0]-a[0])*t)-cx)*scale,z=cz+((a[1]+(c[1]-a[1])*t)-cz)*scale;
    b.box(.24,6,.24,x,top+3,z,record.style==='magnolias'?M.plaster:M.bronze);
   }
  }
  // Broad frame piers group apartment bays and define the sides of each tower.
  for(const edge of edges){const {x,zz,angle,nx,nz,length}=edge;if(length<21)continue;
   for(const side of[-1,1]){const u=side*(length/2-.85);b.box(1.0,height+.7,1.5,x+Math.cos(angle)*u+nx*.4,base+height/2,zz-Math.sin(angle)*u+nz*.4,M.plaster,[0,angle,0]);}
  }
 }else if(record.style==='sheraton'){
  // Broad warm concrete wing with deep paired rooftop fascias.
  for(const dz of[-12,16]){b.box((maxX-minX)*.45,3.9,9,cx,top+1.95,cz+dz,M.stone);b.box((maxX-minX)*.48,.55,10,cx,top+4,cz+dz,M.plaster);}
 }else{
  b.box(30,3.2,18,cx,top+1.6,cz,M.plaster,[0,-.65,0]);
  for(const side of[-1,1])b.box(16,.65,20,cx+side*6.5,top+4,cz,M.roof,[0,-.65,-side*.18]);
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
