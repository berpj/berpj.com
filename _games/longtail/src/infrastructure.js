import * as THREE from 'three';
import {Building} from './architecture-mesh.js';

const mat=(color,extra={})=>new THREE.MeshStandardMaterial({color,roughness:.84,...extra});
const M={concrete:mat('#92968e'),edge:mat('#bac1b7'),steel:mat('#507d61',{emissive:'#274836',emissiveIntensity:.25}),darkSteel:mat('#25483f'),road:mat('#242c31'),rail:mat('#697b7a',{metalness:.5,roughness:.42}),rubber:mat('#101819'),wood:mat('#63503b'),roof:mat('#477876'),tile:mat('#813c30'),gold:mat('#ab8244',{metalness:.45}),leaf:mat('#234635'),soil:mat('#363f30'),white:mat('#ddd4b8'),red:mat('#90433e')};
// Shared low-contrast concrete grain and runoff streaks, mipmapped for distance.
if(typeof document!=='undefined'){
 const canvas=document.createElement('canvas');canvas.width=canvas.height=256;const ctx=canvas.getContext('2d');
 ctx.fillStyle='#b5b5aa';ctx.fillRect(0,0,256,256);let seed=429;
 const random=()=>{seed=(Math.imul(seed,1664525)+1013904223)>>>0;return seed/4294967296;};
 for(let i=0;i<1900;i++){const g=Math.floor(117+random()*72);ctx.fillStyle=`rgba(${g},${g},${g-6},.13)`;ctx.fillRect(random()*256,random()*256,1+random()*4,1+random()*3);}
 for(let i=0;i<35;i++){const y=random()*50,gradient=ctx.createLinearGradient(0,y,0,230);gradient.addColorStop(0,'rgba(30,43,39,.15)');gradient.addColorStop(1,'rgba(30,43,39,0)');ctx.fillStyle=gradient;ctx.fillRect(random()*256,y,1+random()*6,220);}
 const texture=new THREE.CanvasTexture(canvas);texture.colorSpace=THREE.SRGBColorSpace;texture.wrapS=texture.wrapT=THREE.RepeatWrapping;texture.anisotropy=4;
 M.concrete.map=texture;M.concrete.bumpMap=texture;M.concrete.bumpScale=.035;
}
const warm=new THREE.Color('#ffce8b').multiplyScalar(1.9).toArray();
const cool=new THREE.Color('#95b6bc').multiplyScalar(1.4).toArray();
function fixture(fixtures,a,b=a,width=.16,color=warm){fixtures.push({a,b,width,color});}
function rail(b,a,c,height=1.2,spacing=3,material=M.rail){
 const length=Math.hypot(c[0]-a[0],c[2]-a[2]),count=Math.max(1,Math.ceil(length/spacing));
 for(const y of[.45,height])b.line([a[0],a[1]+y,a[2]],[c[0],c[1]+y,c[2]],.055,material);
 for(let i=0;i<=count;i++){const t=i/count,x=THREE.MathUtils.lerp(a[0],c[0],t),y=THREE.MathUtils.lerp(a[1],c[1],t),z=THREE.MathUtils.lerp(a[2],c[2],t);b.line([x,y,z],[x,y+height,z],.065,material);}
}
function beam(b,a,c,width,depth,material){
 const direction=new THREE.Vector3(...c).sub(new THREE.Vector3(...a)),g=new THREE.BoxGeometry(width,direction.length(),depth);
 g.applyQuaternion(new THREE.Quaternion().setFromUnitVectors(new THREE.Vector3(0,1,0),direction.normalize()));
 b.add(g,material,(a[0]+c[0])/2,(a[1]+c[1])/2,(a[2]+c[2])/2);
}
// A tapered, closed concrete box girder. Its underside rises between supports.
function girder(b,x0,x1,z,width,top,supports){
 const count=Math.ceil((x1-x0)/12),shape=new THREE.Shape();shape.moveTo(x0,top);shape.lineTo(x1,top);
 for(let i=count;i>=0;i--){const x=THREE.MathUtils.lerp(x0,x1,i/count),distance=Math.min(...supports.map(p=>Math.abs(x-p))),depth=2.1+2.5*Math.exp(-distance/23);shape.lineTo(x,top-depth);}
 shape.closePath();const g=new THREE.ExtrudeGeometry(shape,{depth:width,bevelEnabled:false});b.add(g,M.concrete,0,0,z-width/2);
}
function support(b,colliders,x,z,width,length,top){
 // Rounded cutwaters, battered footings, and bearings, not thin floating sticks.
 b.cylinder(1,1,3.2,x,.2,z,M.darkSteel,8,[width*.62,1,length*.58]);
 b.box(width,top-2,length,x,(top-2)/2+1,z,M.concrete);
 b.box(width+1.6,1.2,length+1.3,x,top-1,z,M.edge);
 for(const side of[-1,1])b.box(width*.55,.45,1.4,x,top-.18,z+side*(length/2-.8),M.rubber);
 colliders.push({x,z,width:width*1.24,length:length*1.16,heading:0,mass:10000,vx:0,vz:0});
}
function roadDeck(b,span,z,width,y){
 b.box(span,1.0,width,0,y-.5,z,M.edge);b.box(span,.12,width-1.3,0,y+.07,z,M.road);
 for(const side of[-1,1]){
  b.box(span,.75,.65,0,y+.38,z+side*(width/2-.3),M.concrete);
  rail(b,[-span/2,y+.75,z+side*(width/2-.3)],[span/2,y+.75,z+side*(width/2-.3)],.55,5);
 }
 for(let x=-span/2+4;x<span/2-3;x+=14)b.box(6,.025,.16,x,y+.145,z,M.white);
}
export function buildBridge(id,{span,riverWidth}){
 const b=new Building('bridge:'+id),fixtures=[],colliders=[],supports=[-riverWidth*.27,riverWidth*.27];
 let roadY,lanes,signY,signZ;
 if(id==='memorial'){
  roadY=17.3;lanes=[-4.3,4.3];signY=20;signZ=10.05;
  roadDeck(b,span,0,19,roadY);
  b.box(span,1.5,16,0,roadY-1.6,0,M.darkSteel);
  for(const x of supports){support(b,colliders,x,0,9.5,16,roadY-2.3);for(const z of[-8.05,8.05])for(let row=0;row<2;row++)for(let cell=0;cell<4;cell++)b.box(2.38,.65,.08,x-3.57+cell*2.38,2+row*.65,z,(row+cell)%2?M.red:M.white);}
  // Three independent trusses with pitched upper chords, the central bascule seam,
  // and overhead portals. The approaches do not grow into one giant green wall.
  const breaks=[-span/2,...supports,span/2];
  for(let s=0;s<3;s++){
   const start=breaks[s]+.3,end=breaks[s+1]-.3,count=Math.max(4,Math.round((end-start)/19));
   const node=i=>{const t=i/count;return [THREE.MathUtils.lerp(start,end,t),roadY+4+9*Math.min(1,t*4,(1-t)*4)];};
   for(let i=0;i<count;i++){
    const a=node(i),c=node(i+1);
    for(const side of[-1,1]){
     const z=side*8.1;
     beam(b,[a[0],a[1],z],[c[0],c[1],z],.68,.74,M.steel);
     beam(b,[a[0],roadY,z],[a[0],a[1],z],.58,.62,M.steel);
     beam(b,[a[0],i%2?roadY:a[1],z],[c[0],i%2?c[1]:roadY,z],.44,.5,M.steel);
     b.box(1.05,1.1,.14,a[0],a[1]-.15,z+side*.42,M.darkSteel);
    }
    if(i>0&&i<count-1){beam(b,[a[0],a[1],-8.1],[a[0],a[1],8.1],.46,.5,M.steel);beam(b,[a[0],a[1],-8.1],[c[0],c[1],8.1],.23,.24,M.darkSteel);}
   }
   const last=node(count);for(const side of[-1,1])beam(b,[last[0],roadY,side*8.1],[last[0],last[1],side*8.1],.58,.62,M.steel);
  }
  b.box(.32,.09,16,0,roadY+.16,0,M.rubber);
  for(const side of[-1,1])fixture(fixtures,[-span/2,roadY-.65,side*9.6],[span/2,roadY-.65,side*9.6],.14,warm);
 }else{
  const park=id==='pokklao';roadY=20.25;lanes=park?[-16.7,16.7]:[-10.1,10.1];signY=19.2;signZ=park?25.1:17.7;
  const roadCenters=park?[-16.7,16.7]:[-10.1,10.1],roadWidth=park?15.5:13.8;
  for(const z of roadCenters){
   girder(b,-span/2,span/2,z,roadWidth-1.1,roadY-1,supports);roadDeck(b,span,z,roadWidth,roadY);
   for(const x of supports)support(b,colliders,x,z,9,10.8,roadY-4.6);
   const edge=z+Math.sign(z)*(roadWidth/2+.12);fixture(fixtures,[-span/2,roadY-.35,edge],[span/2,roadY-.35,edge],.14,cool);
  }
  if(park){
   // Chao Phraya Sky Park occupies the old central rail viaduct between roads.
   girder(b,-span/2,span/2,0,7.5,roadY-1.15,supports);
   b.box(span,.48,8.5,0,roadY-.85,0,M.edge);b.box(span,.09,3.8,0,roadY-.55,0,M.wood);
   for(const x of supports)support(b,colliders,x,0,8.5,7.5,roadY-4.7);
   for(const side of[-1,1]){
    rail(b,[-span/2,roadY-.6,side*4.05],[span/2,roadY-.6,side*4.05],1.25,3);
    for(let x=-span/2+8;x<span/2-6;x+=12){b.box(8.4,.9,1.35,x,roadY-.12,side*3,M.concrete);b.box(8.0,1.0,1.2,x,roadY+.62,side*3,M.leaf);}
   }
   for(let x=-span/2+18;x<span/2-16;x+=26){b.cylinder(.13,.17,3.9,x,roadY+1.35,3.5,M.rail,6);fixture(fixtures,[x,roadY+3.35,3.5],undefined,.3);}
  }else{
   // Taksin's BTS runs at road level in a separate central guideway.
   b.box(span,2.1,5.4,0,roadY-1.25,0,M.concrete);
   for(const x of supports){b.box(12,1.6,32,x,roadY-3.8,0,M.concrete);support(b,colliders,x,0,8,6,roadY-4.6);}
   b.box(span,.35,5.6,0,roadY+.07,0,M.darkSteel);
   for(const z of[-1.05,1.05])b.box(span,.16,.14,0,roadY+.34,z,M.rail);
   for(const side of[-1,1])b.box(span,1.4,.45,0,roadY+.65,side*2.85,M.edge);
  }
 }
 for(const x of[-1,1].map(side=>side*(riverWidth/2+56))){b.box(5.5,roadY-2.2,id==='pokklao'?43:15,x,(roadY-2.2)/2,0,M.concrete);b.box(8,1.5,id==='pokklao'?48:18,x,roadY-1.65,0,M.edge);}
 // Repeated lamps add scale; only their analytic emitter participates in bloom.
 for(const side of[-1,1])for(let x=-span/2+12;x<span/2-10;x+=36){
  const z=side*(id==='memorial'?9.2:id==='pokklao'?24.1:16.6);
  b.cylinder(.10,.17,5.8,x,roadY+2.9,z,M.rail,6);b.line([x,roadY+5.7,z],[x,roadY+5.7,z-side*1.8],.09,M.rail);fixture(fixtures,[x,roadY+5.65,z-side*1.9],undefined,.34);
 }
 const group=b.finish();group.name='bridge:'+id;group.userData.structure={id,roadY,lanes,colliders,signY,signZ};
 return {group,fixtures,colliders,roadY,lanes,signY,signZ};
}

export function buildPier(id,{shoreDistance=13}={}){
 const b=new Building('pier:'+id),fixtures=[],temple=['arun','kalaya','tien'].includes(id),modern=['icon','river','rivercity'].includes(id);
 const deck=1.85,start=3.9,end=Math.max(8,shoreDistance+1),landY=3.15;
 b.box(17,1.3,9,0,1.2,0,M.darkSteel);b.box(16.9,.18,8.9,0,deck-.09,0,M.concrete);
 b.box(16.9,.15,.28,0,deck+.02,-4.4,M.white);
 // Rubber tyres and bollards stay outside the passenger walkway.
 for(const x of[-6.7,-3.3,3.3,6.7]){b.add(new THREE.TorusGeometry(.57,.18,6,12),M.rubber,x,.86,-4.61);b.cylinder(.16,.19,.5,x,deck+.24,-3.95,M.rail,8);b.box(.66,.14,.24,x,deck+.5,-3.95,M.rail);}
 for(const x of[-7.45,7.45])for(const z of[-3.5,3.5]){
  b.cylinder(.28,.35,6.4,x,1.2,z,M.darkSteel,8);b.cylinder(.45,.45,.65,x,deck+.25,z,M.rubber,10);
  b.cylinder(.10,.15,3.65,x,deck+1.825,z,M.rail,8);
 }
 // Leave the boat-facing edge open; rear rails stop at the connected ramp.
 for(const x of[-8.15,8.15])rail(b,[x,deck,-4],[x,deck,4],1.12,2.7);
 for(const side of[-1,1])rail(b,[side*2,deck,4],[side*8.15,deck,4],1.12,3);
 const slope=Math.atan2(landY-deck,end-start),length=Math.hypot(end-start,landY-deck);
 b.box(3.8,.24,length,0,(deck+landY)/2-.12,(start+end)/2,M.rail,[-slope,0,0]);
 for(const side of[-1,1]){rail(b,[side*1.8,deck,start],[side*1.8,landY,end],1.15,2.5);beam(b,[side*1.72,deck-.35,start],[side*1.72,landY-.35,end],.23,.23,M.darkSteel);}
 b.box(7,.45,5,0,landY-.225,end+2.3,M.concrete);
 for(let z=start+.3;z<end;z+=.85)b.box(3.4,.035,.11,0,deck+(z-start)/(end-start)*(landY-deck)+.03,z,M.white,[-slope,0,0]);
 const roofY=5.65;
 if(temple){
  const pitch=.3,sloped=Math.hypot(9.5,2.85);
  for(const side of[-1,1]){b.box(sloped,.28,10.2,side*4.75,roofY+1.42,0,M.tile,[0,0,-side*pitch]);b.line([side*9.5,roofY,-5.1],[side*9.5,roofY,5.1],.1,M.gold);for(const z of[-5.1,5.1])b.line([0,roofY+2.85,z],[side*9.5,roofY,z],.14,M.gold);}
  for(const side of[-1,1]){b.line([0,roofY+2.8,side*5],[0,roofY+4,side*5.5],.12,M.gold);b.line([0,roofY+4,side*5.5],[0,roofY+4.4,side*6],.06,M.gold);}
 }else if(modern){
  // A wide folded butterfly canopy with a central valley.
  for(const side of[-1,1]){b.box(9.8,.25,10.4,side*4.8,roofY+.7,0,M.edge,[0,0,side*.14]);b.line([side*9.7,roofY+1.4,-5.2],[side*9.7,roofY+1.4,5.2],.16,M.rail);}
 }else{
  for(const side of[-1,1])b.box(9.5,.23,10,side*4.65,roofY+.55,0,M.roof,[0,0,-side*.12]);
 }
 for(const z of[-3.5,3.5]){b.line([-7.45,roofY,z],[7.45,roofY,z],.1,M.rail);for(const side of[-1,1])b.line([side*7.45,4.3,z],[side*5.2,roofY,z],.075,M.rail);}
 for(const x of[-5,5])fixture(fixtures,[x-1.4,5.4,0],[x+1.4,5.4,0],.1);
 for(const x of[-5.4,5.4]){b.box(3.5,.18,.8,x,deck+.6,2.1,M.wood);b.box(3.5,.55,.12,x,deck+1,2.52,M.wood);for(const dx of[-1.3,1.3])b.box(.16,.58,.7,x+dx,deck+.29,2.1,M.rail);}
 b.add(new THREE.TorusGeometry(.48,.11,6,16),M.red,7.1,3.2,-3.58);
 b.box(1.3,1.9,.18,-7,3.2,3.4,M.edge);b.box(.95,1.4,.04,-7,3.3,3.29,M.roof);
 const group=b.finish();group.name='pier:'+id;group.userData.gangway={start:[0,deck,start],end:[0,landY,end],shoreDistance};
 return {group,fixtures,signY:temple?5.5:5.3,signZ:-5.26};
}
