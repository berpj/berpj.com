import * as THREE from 'three';
import {mergeGeometries} from 'three/addons/utils/BufferGeometryUtils.js';

const box=new THREE.BoxGeometry(1,1,1),sphere=new THREE.SphereGeometry(1,8,6);
const material=(color,emissive=0,power=0)=>new THREE.MeshStandardMaterial({color,emissive,emissiveIntensity:power,roughness:.82});
const lamps=[0xffb768,0xffcf8f,0xe8ae67,0x8acecd];
function seedRandom(seed){return()=>{seed=(Math.imul(seed,1664525)+1013904223)>>>0;return seed/4294967296;};}

class ShoreBatch{
 constructor(){this.parts=new Map();this.matrix=new THREE.Matrix4();this.q=new THREE.Quaternion();this.v=new THREE.Vector3();this.s=new THREE.Vector3();}
 add(g,m,x,y,z,sx=1,sy=1,sz=1,ry=0){this.q.setFromAxisAngle(new THREE.Vector3(0,1,0),ry);this.matrix.compose(this.v.set(x,y,z),this.q,this.s.set(sx,sy,sz));let copy=g.clone().applyMatrix4(this.matrix);if(copy.index){const old=copy;copy=old.toNonIndexed();old.dispose();}if(!this.parts.has(m))this.parts.set(m,[]);this.parts.get(m).push(copy);}
 box(m,x,y,z,w,h,d,ry=0){this.add(box,m,x,y,z,w,h,d,ry);}
 line(m,a,b,r=.05){const va=new THREE.Vector3(...a),vb=new THREE.Vector3(...b),delta=vb.clone().sub(va),g=new THREE.CylinderGeometry(r,r,delta.length(),5);g.applyQuaternion(new THREE.Quaternion().setFromUnitVectors(new THREE.Vector3(0,1,0),delta.normalize()));const mid=va.add(vb).multiplyScalar(.5);this.add(g,m,mid.x,mid.y,mid.z);g.dispose();}
 finish(parent){for(const[m,parts]of this.parts){const geometry=mergeGeometries(parts);parts.forEach(p=>p.dispose());const mesh=new THREE.Mesh(geometry,m);parent.add(mesh);}this.parts.clear();}
}

const venueMaterials=new Map(),venueGeometry=new THREE.PlaneGeometry(9,2.25);
function venueSign(text,index){
 const key=`${text}:${index%3}`;if(venueMaterials.has(key))return new THREE.Mesh(venueGeometry,venueMaterials.get(key));
 const c=document.createElement('canvas');c.width=512;c.height=128;const ctx=c.getContext('2d');
 ctx.fillStyle='#090e13';ctx.fillRect(0,0,512,128);ctx.strokeStyle=['#dea353','#6ecfc1','#dd7160'][index%3];ctx.lineWidth=3;ctx.strokeRect(8,8,496,112);
 ctx.font='600 54px Arial';ctx.textAlign='center';ctx.textBaseline='middle';ctx.shadowColor=ctx.strokeStyle;ctx.shadowBlur=8;ctx.fillStyle=ctx.strokeStyle;ctx.fillText(text,256,66,466);
 const texture=new THREE.CanvasTexture(c);texture.colorSpace=THREE.SRGBColorSpace;
 const m=new THREE.MeshStandardMaterial({map:texture,emissiveMap:texture,emissive:0xffffff,emissiveIntensity:2.1,roughness:.85});venueMaterials.set(key,m);return new THREE.Mesh(venueGeometry,m);
}

export function createRiverfront(scene,river,landmarks,mobile){
 const random=seedRandom(73027),staticGroup=new THREE.Group();staticGroup.name='riverside-evening-life';scene.add(staticGroup);
 const batch=new ShoreBatch(),wood=material(0x594030),metal=material(0x1f2a2a),stone=material(0x494c47),cloths=[material(0x78342a),material(0x455548),material(0x9b845e)],pot=material(0x6a4731),leaf=material(0x172b20),fender=material(0x111719);
 const lights=[],glows=lamps.map(c=>material(0xc3a582,c,3.5)),warm=glows[0];
 const fronts=[];
 for(let distance=50;distance<river.length-60;distance+=82){for(const side of[-1,1]){
  const sample=river.sample(distance),offset=side*(sample.width/2+7),p=river.sample(distance,offset),heading=Math.atan2(-sample.nx*side,-sample.nz*side);
  const tangent={x:Math.cos(heading),z:-Math.sin(heading)},inland={x:sample.nx*side,z:sample.nz*side};
  const point=(x,y,z)=>[p.x+tangent.x*x+inland.x*z,y,p.z+tangent.z*x+inland.z*z];
  // Keep the landmark's own plaza visible all the way to the water.
  const reserved=landmarks.some(l=>l.side===side&&Math.abs(distance-l.distance)<l.reserveLength+8);
  const k=Math.floor(distance/82),venue=!reserved&&k%4!==0;
  const tint=glows[k%glows.length];
  if(venue){
   fronts.push({distance,side});
   const center=point(0,3.25,4);batch.box(wood,...center,23,.35,10,heading);
   for(const x of[-10,-5,0,5,10]){batch.box(wood,...point(x,1,0),.4,4,.4);batch.box(metal,...point(x,4.1,-1.1),.12,1.9,.12);}
   batch.box(metal,...point(0,5,-1.1),23,.1,.1,heading);
   for(const x of[-8,-4,0,4,8]){batch.add(new THREE.TorusGeometry(.42,.12,6,10),fender,...point(x,1.1,-1.7),1,1,1,heading);}
   // Open awnings, warm restaurant interiors and occupied river-facing tables.
   batch.box(cloths[k%3],...point(0,7.2,6),22,.18,7.5,heading);
   for(const x of[-10,10])batch.box(metal,...point(x,5.2,2.5),.15,4,.15);
   for(let table=-8;table<=8;table+=4){
    batch.add(new THREE.CylinderGeometry(1.05,1.05,.12,10),wood,...point(table,4.12,2.2));batch.box(metal,...point(table,3.67,2.2),.12,.9,.12);
    batch.add(sphere,warm,...point(table,4.35,2.2),.10,.16,.10);
    for(const s of[-1,1]){batch.box(wood,...point(table+s*1.3,3.75,2.2),.55,.12,.6,heading);batch.box(wood,...point(table+s*1.45,4.07,2.2),.12,.65,.6,heading);}
   }
   const banner=venueSign(['ริมน้ำ','SEAFOOD','ก๋วยเตี๋ยว','RIVER BAR','อาหารไทย','ท่าเรือ'][k%6],k);batch.add(banner.geometry,banner.material,...point(0,7.1,2.15),1,1,1,heading);
   const a=point(-11,7.4,.6),b=point(11,7.4,.6);for(let i=0;i<12;i++){const f=i/11,g=(i+1)/11,pa=[a[0]+(b[0]-a[0])*f,7.4-Math.sin(f*Math.PI)*.75,a[2]+(b[2]-a[2])*f],pb=[a[0]+(b[0]-a[0])*g,7.4-Math.sin(g*Math.PI)*.75,a[2]+(b[2]-a[2])*g];if(i<11)batch.line(metal,pa,pb,.023);batch.add(sphere,tint,pa[0],pa[1]-.14,pa[2],.11,.16,.11);}
   const lamp=point(0,6,1);lights.push({x:lamp[0],y:lamp[1],z:lamp[2],color:lamps[k%4],power:35});
  }else{
   // Small pools of promenade light between darker stretches of bank.
   const post=point(0,6.1,0);batch.box(metal,...post,.14,6.3,.14);batch.box(tint,...point(0,9.3,0),.65,.20,.65);
   const lamp=point(0,9.15,0);lights.push({x:lamp[0],y:lamp[1],z:lamp[2],color:0xffc58b,power:29});
  }
  if(!reserved){
   for(const x of[-14,14]){batch.add(new THREE.CylinderGeometry(.7,.5,1.05,8),pot,...point(x,3.6,4));batch.add(sphere,leaf,...point(x,5.15,4),1.25,1.4,1.05);}
   if(k%3===0){for(let n=0;n<3;n++)batch.box(wood,...point(16+n*.9,3.6+n*.2,5),.85,.8,.85,heading);}
  }
 }}
 batch.finish(staticGroup);staticGroup.traverse(o=>{o.updateMatrix();o.matrixAutoUpdate=false;});

 // Animated pedestrians and seated diners are instanced, not separate draw calls.
 const crowdCount=mobile?64:132,people=[],personParts=[];
 const skin=material(0xae8769),shirts=material(0xaaa8a0),trousers=material(0x192426),hair=material(0x111410);
 const addPart=(g,m,kind)=>{const mesh=new THREE.InstancedMesh(g,m,crowdCount);mesh.instanceMatrix.setUsage(THREE.DynamicDrawUsage);mesh.frustumCulled=false;mesh.layers.set(1);scene.add(mesh);personParts.push({mesh,kind});};
 addPart(new THREE.CapsuleGeometry(.22,.49,3,7),shirts,'body');addPart(new THREE.SphereGeometry(.17,8,7),skin,'head');addPart(new THREE.SphereGeometry(.174,8,6),hair,'hair');
 for(const side of[-1,1]){addPart(new THREE.CapsuleGeometry(.075,.58,2,5),trousers,side<0?'left-leg':'right-leg');addPart(new THREE.CapsuleGeometry(.062,.46,2,5),shirts,side<0?'left-arm':'right-arm');}
 const colors=[0xe6c090,0x729a99,0xc17660,0xc0bcaa,0x535770,0xa89475];
 for(let i=0;i<crowdCount;i++){
  const f=fronts[i%fronts.length];people.push({distance:f.distance+(random()-.5)*19,side:f.side,phase:random()*6.283,walk:i%3===0,height:.9+random()*.16});
  for(const part of personParts)if(part.kind==='body'||part.kind.includes('arm'))part.mesh.setColorAt(i,new THREE.Color(colors[i%colors.length]));
 }
 const dummy=new THREE.Object3D();
 const updatePeople=time=>{for(let i=0;i<people.length;i++){
  const person=people[i],travel=person.walk?Math.sin(time*.055+person.phase)*8:0,p=river.sample(person.distance+travel,person.side*(river.sample(person.distance).width/2+(person.walk?7:10))),h=person.height;
  const heading=person.walk?p.heading+(Math.cos(time*.055+person.phase)>0?0:Math.PI):Math.atan2(-p.nx*person.side,-p.nz*person.side);
  const swing=person.walk?Math.sin(time*3+person.phase)*.35:0;
  for(const part of personParts){let x=0,y=0,z=0,angle=0;
   if(part.kind==='body')y=1.19;
   if(part.kind==='head')y=1.76;
   if(part.kind==='hair')y=1.82;
   if(part.kind.includes('leg')){const side=part.kind.startsWith('left')?-1:1;x=side*.13;y=.46;angle=side*swing;}
   if(part.kind.includes('arm')){const side=part.kind.startsWith('left')?-1:1;x=side*.31;y=1.14;angle=-side*swing*.65;}
   dummy.position.set(p.x+Math.cos(heading)*x,3.48+y*h,p.z-Math.sin(heading)*x);dummy.rotation.set(angle,heading,0);dummy.scale.set(h,h,part.kind==='hair'?h*.9:h);dummy.updateMatrix();part.mesh.setMatrixAt(i,dummy.matrix);
  }
 }for(const part of personParts)part.mesh.instanceMatrix.needsUpdate=true;};
 updatePeople(0);
 let lastPeopleUpdate=-1;
 return {lights,update(time){if(time-lastPeopleUpdate<1/24)return;lastPeopleUpdate=time;updatePeople(time);}};
}
