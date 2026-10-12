import * as THREE from 'three';
import {createNightSky,createNightWater} from './night.js';
import {VisibleLights,collectLightFixture,transformLightFixtures,bridgeLightFixtures} from './visible-lights.js';
import {createRiverfront} from './riverfront.js';
import {createFountains} from './fountains.js';
import {mergeGeometries} from 'three/addons/utils/BufferGeometryUtils.js';
import {buildLandmark} from './landmarks.js';
import {project,clamp,pierCollider} from './river.mjs';

const rnd=seed=>()=>{seed=(Math.imul(seed,1664525)+1013904223)>>>0;return seed/4294967296;};
const random=rnd(81623);
const M=(color,emissive=0,intensity=0)=>new THREE.MeshStandardMaterial({color,emissive,emissiveIntensity:intensity,roughness:.72});
class Batch{
 constructor(lightTarget){this.parts=new Map();this.transform=new THREE.Object3D();this.lightTarget=lightTarget;this.lightFixtures=[];}
 add(geometry,material,x,y,z,sx=1,sy=1,sz=1,ry=0){const o=this.transform;o.position.set(x,y,z);o.rotation.set(0,ry,0);o.scale.set(sx,sy,sz);o.updateMatrix();if(this.lightTarget&&collectLightFixture(this.lightFixtures,geometry,material,o.matrix))return;const g=geometry.clone().applyMatrix4(o.matrix);if(!this.parts.has(material))this.parts.set(material,[]);this.parts.get(material).push(g);}
 box(m,x,y,z,w,h,d,ry=0){this.add(unitBox,m,x,y,z,w,h,d,ry);}
 finish(parent){for(const[m,parts]of this.parts){const g=mergeGeometries(parts);parts.forEach(p=>p.dispose());if(g){const mesh=new THREE.Mesh(g,m);parent.add(mesh);}}this.parts.clear();if(this.lightTarget){parent.updateWorldMatrix(true,false);this.lightTarget.push(...transformLightFixtures(this.lightFixtures,parent.matrixWorld));this.lightFixtures=[];}}
}
const unitBox=new THREE.BoxGeometry(1,1,1);
export function sign(text,w=20,h=4,bg='#13283c',fg='#ffde9b'){
 const canvas=document.createElement('canvas');canvas.width=1024;canvas.height=256;const c=canvas.getContext('2d');c.fillStyle=bg;c.fillRect(0,0,1024,256);c.fillStyle=fg;c.font='bold 110px Arial';c.textAlign='center';c.textBaseline='middle';c.fillText(text,512,128,970);const texture=new THREE.CanvasTexture(canvas);texture.colorSpace=THREE.SRGBColorSpace;
 return new THREE.Mesh(new THREE.PlaneGeometry(w,h),new THREE.MeshBasicMaterial({map:texture,side:THREE.DoubleSide,toneMapped:false}));
}
function cityMaterial(index, floors=12){
 const canvas=document.createElement('canvas'),emission=document.createElement('canvas');canvas.width=emission.width=384;canvas.height=emission.height=768;
 const c=canvas.getContext('2d'),e=emission.getContext('2d');c.fillStyle=['#32353a','#3b3832','#333c3e','#2a3138','#52463a'][index%5];c.fillRect(0,0,384,768);e.fillStyle='#000';e.fillRect(0,0,384,768);
 const rows=floors,cols=index%2?8:6,cw=384/cols,rh=768/rows;
 for(let row=0;row<rows;row++)for(let col=0;col<cols;col++){
  const x=col*cw+6,y=row*rh+5,lit=random()>.64,w=cw-12,h=rh*.68;
  c.fillStyle='#0b151b';c.fillRect(x,y,w,h);
  if(lit){const color=['#d7a764','#e1be89','#a2b7b4','#d6cbaf'][Math.floor(random()*4)];e.fillStyle=color;e.globalAlpha=.25+random()*.65;e.fillRect(x,y,w,h);e.globalAlpha=1;
   e.fillStyle='#050708';e.fillRect(x+w*(.25+random()*.4),y,w*.17,h);e.fillRect(x,y+h*.82,w,h*.18);
   if(random()>.55){e.fillStyle='#17150e';e.fillRect(x+4,y+h*.55,w*.35,h*.35);}
  }
  c.fillStyle='#52524e';c.fillRect(x-1,y+h,w+3,2);e.fillStyle='#000';e.fillRect(x+w*.5,y,2,h);
  c.fillStyle='#202927';c.fillRect(col*cw,row*rh,384,2);
 }
 const map=new THREE.CanvasTexture(canvas),light=new THREE.CanvasTexture(emission);map.colorSpace=light.colorSpace=THREE.SRGBColorSpace;map.anisotropy=light.anisotropy=4;
 return new THREE.MeshStandardMaterial({map,emissiveMap:light,emissive:0xfff3dc,emissiveIntensity:1.9,roughness:.64,color:0x87969d});
}
export const LANDMARKS=[
 ['wat-arun','Wat Arun',100.488905,13.7436982,1],
 ['wat-pho','Wat Pho',100.4916918,13.7465039,-1],
 ['wat-kalayanamit','Wat Kalayanamit',100.4912748,13.740062,1],
 ['santa-cruz','Santa Cruz',100.4937728,13.7389447,1],
 ['holy-rosary','Holy Rosary',100.5134793,13.7312611,-1],
 ['river-city','River City',100.5132623,13.7303492,-1],
 ['icon-siam','ICONSIAM',100.5103251,13.7268256,1],
 ['mandarin-oriental','Mandarin Oriental',100.5143499,13.7239264,-1],
 ['the-river','The River',100.5105286,13.7213726,1],
 ['state-tower','State Tower',100.516897,13.7215374,-1],
];
export function createWorld(scene,river,piers,mobile){
 const lightFixtures=[];
 const warm=M(0xd3b88b,0xffb34e,.3),stone=M(0x515558),rail=M(0x23323b),glow=new THREE.MeshBasicMaterial({color:new THREE.Color(0xffcb83).multiplyScalar(2.5)});
 const buildings=new THREE.Group();scene.add(buildings);
 const points=[];for(let d=0;d<river.length;d+=20)points.push(river.sample(d));points.push(river.sample(river.length));
 const banks=side=>points.map(p=>new THREE.Vector2(p.x+p.nx*side*p.width/2,-(p.z+p.nz*side*p.width/2)));
 const west=banks(1),east=banks(-1),holePoints=[...west,...east.reverse()];
 // Extend the river off the authored ends, avoiding visible rectangular water caps.
 for(const list of [west,east]){const first=list===west?0:list.length-1,last=list===west?list.length-1:0;const a=river.sample(0),b=river.sample(river.length);list[first].x+=Math.sin(a.heading)*1600;list[first].y-=Math.cos(a.heading)*1600;list[last].x-=Math.sin(b.heading)*1600;list[last].y+=Math.cos(b.heading)*1600;}
 const land=new THREE.Shape([new THREE.Vector2(-5500,-5500),new THREE.Vector2(5500,-5500),new THREE.Vector2(5500,5500),new THREE.Vector2(-5500,5500)]);land.holes.push(new THREE.Path(holePoints));
 const geo=new THREE.ExtrudeGeometry(land,{depth:4,bevelEnabled:false,steps:1});geo.rotateX(-Math.PI/2);const landMesh=new THREE.Mesh(geo,M(0x252e2e));landMesh.position.y=-1;scene.add(landMesh);
 const nightWater=createNightWater(scene,mobile),water=nightWater.water;
 const landmarks=[];
 for(const [kind,name,lon,lat,side]of LANDMARKS){
  const p=project(lon,lat),n=river.nearest(p.x,p.z);
  const model=buildLandmark(kind),localBounds=new THREE.Box3().setFromObject(model);let offset=Math.max(n.offset*side,n.width/2+localBounds.max.z+12);let safe=river.sample(n.distance,side*offset);model.rotation.y=Math.atan2(-n.nx*side,-n.nz*side);
  for(let attempt=0;attempt<12;attempt++){model.position.set(safe.x,3,safe.z);model.updateMatrixWorld();let overlaps=false;for(const x of[localBounds.min.x,localBounds.max.x])for(const z of[localBounds.min.z,localBounds.max.z]){const corner=model.localToWorld(new THREE.Vector3(x,0,z)),bank=river.nearest(corner.x,corner.z);if(Math.abs(bank.offset)<bank.width/2+4)overlaps=true;}if(!overlaps)break;offset+=15;safe=river.sample(n.distance,side*offset);}buildings.add(model);
  if(kind==='wat-arun'||kind==='wat-kalayanamit'){const light=new THREE.SpotLight(0xffd9a0,kind==='wat-arun'?5500:3500,210,.78,.75,2);light.position.set(safe.x-n.nx*side*75,7,safe.z-n.nz*side*75);light.target.position.set(safe.x,28,safe.z);scene.add(light,light.target);}
  const bounds=new THREE.Box3().setFromObject(model);landmarks.push({kind,name,x:safe.x,z:safe.z,distance:n.distance,bounds,side,reserveLength:(localBounds.max.x-localBounds.min.x)/2+22,inland:offset-localBounds.min.z+20});
 }
 // Dense, varied riverside fabric; reserved landmark footprints are kept clear.
 const mats=Array.from({length:5},(_,i)=>[cityMaterial(i,4),cityMaterial(i,10),cityMaterial(i,22)]);const photo=new THREE.TextureLoader().load(`${import.meta.env.BASE_URL}textures/riverside-shophouses.png`);photo.colorSpace=THREE.SRGBColorSpace;photo.anisotropy=4;const shophouse=new THREE.MeshStandardMaterial({map:photo,color:0xa6a8a2,emissiveMap:photo,emissive:0xffd9a0,emissiveIntensity:.035,roughness:.95});const batch=new Batch(lightFixtures),roof=M(0x283239),market=M(0x7b4435),leaf=M(0x233f30),trunk=M(0x44352c);
 for(let d=20;d<river.length;d+=35){for(const side of [-1,1]){const riverPoint=river.sample(d);for(let row=0;row<3;row++){
  const width=18+random()*24,depth=20+random()*23,offset=side*(riverPoint.width/2+depth/2+12+row*110),p=river.sample(d+(random()-.5)*14,offset);let height=11+random()*25;
  if(row>0)height+=random()*45;if(d>river.length*.62&&random()>.72)height+=random()*90;const oldTown=d<river.length*.48;if(oldTown)height=6+random()*13+row*4;if(row===0&&oldTown)height=9+random()*4;
  if(landmarks.some(l=>l.side===side&&Math.abs(d-l.distance)<l.reserveLength&&Math.abs(offset)<l.inland))continue;
  if(landmarks.some(l=>p.x>l.bounds.min.x-25&&p.x<l.bounds.max.x+25&&p.z>l.bounds.min.z-25&&p.z<l.bounds.max.z+25))continue;
  const fm=row===0&&height<22&&Math.floor(d/35)%5!==0?shophouse:mats[Math.floor(random()*5)][height<22?0:height<65?1:2];batch.box(fm,p.x,3+height/2,p.z,width,height,depth,p.heading);
  batch.box(roof,p.x,height+3.5,p.z,width+1,1,depth+1,p.heading);
  if(row>0){batch.box(roof,p.x,height+5.5,p.z,width*.3,4,depth*.4,p.heading);if(height>65)batch.box(glow,p.x,height+8,p.z,.35,.45,.35);}
  if(row===0){const facing=river.sample(d,side*(riverPoint.width/2+depth+17));for(let ac=0;ac<2;ac++)batch.box(stone,facing.x+ac*3,7+ac*3,facing.z,1.5,1.1,.8,p.heading);}
  if(row===0){const f=river.sample(d,side*(riverPoint.width/2+5));batch.box(market,f.x,6.7,f.z,width,.3,4,p.heading);if(Math.floor(d)%3===0)batch.box(glow,f.x,6.9,f.z,width*.3,.08,.24,p.heading);}
 }}
 for(const side of[-1,1]){const p=river.sample(d,side*(river.sample(d).width/2+4));batch.box(stone,p.x,1.5,p.z,2,3.5,36,p.heading);if(Math.floor(d/35)%2===0){batch.box(rail,p.x,6,p.z,.35,7,.35);batch.box(glow,p.x,9.7,p.z,1.9,.35,1.9);}
 if(Math.floor(d/35)%3===0){batch.box(trunk,p.x+p.nx*side*8,7,p.z+p.nz*side*8,.8,9,.8);const pos={x:p.x+p.nx*side*8,z:p.z+p.nz*side*8};for(let a=0;a<5;a++)batch.add(new THREE.SphereGeometry(1,7,5),leaf,pos.x+Math.sin(a*1.25)*2.3,11.5,pos.z+Math.cos(a*1.25)*2.3,4.1,1.8,2.2,a*1.25);}}
 }
 batch.finish(buildings);buildings.traverse(o=>{o.updateMatrix();o.matrixAutoUpdate=false;});
 // Recognisable steel Memorial Bridge, neighbouring Sky Park and concrete Taksin.
 const bridgeColliders=[];const bridgeGroups=[];
 function bridge(lat,lon,name,type){
  const p=project(lon,lat),n=river.nearest(p.x,p.z),g=new THREE.Group();g.position.set(n.x,0,n.z);g.rotation.y=Math.atan2(-n.nz,n.nx);scene.add(g);const b=new Batch(lightFixtures),span=n.width+200,h=type==='steel'?16:19,steel=M(type==='steel'?0x487962:0x646f7b);b.lightFixtures.push(...bridgeLightFixtures(span,h,type));
  b.box(steel,0,h,0,span,2.5,type==='steel'?17:29);for(const side of[-1,1]){const z=side*(type==='steel'?9:14.75);if(type==='steel'){
   b.box(steel,0,h+13,z,span,1.1,1.1);for(let x=-span/2;x<span/2;x+=30){b.box(steel,x,h+7,z,.7,12,.7);const beam=new THREE.BoxGeometry(1,1,1);const o=new THREE.Object3D();o.position.set(x+15,h+7,z);o.rotation.z=Math.atan2(30,12);o.scale.set(.65,Math.hypot(30,12),.65);o.updateMatrix();b.parts.set(steel,[...(b.parts.get(steel)||[]),beam.applyMatrix4(o.matrix)]);}}
  }
  for(const x of[-n.width*.27,n.width*.27]){b.box(steel,x,h/2,0,8,h,13);const v=new THREE.Vector3(x,0,0).applyMatrix4(g.matrixWorld);g.updateMatrixWorld();g.localToWorld(v.set(x,0,0));bridgeColliders.push({x:v.x,z:v.z,width:9,length:16,heading:g.rotation.y,mass:10000,vx:0,vz:0});}
  if(type==='concrete')b.box(steel,0,h+4,0,span,2,6);b.finish(g);
  const label=sign(name,54,4.8);label.position.set(0,h+3.8,type==='steel'?9:15);g.add(label);bridgeGroups.push({group:g,span,height:h});
 }
 bridge(13.7393,100.4976,'MEMORIAL BRIDGE','steel');bridge(13.73898,100.49851,'CHAO PHRAYA SKY PARK','concrete');bridge(13.7193,100.5121,'TAKSIN BRIDGE','concrete');
 const movingCars=new THREE.Group();scene.add(movingCars);const carBody=M(0x303842),carHead=new THREE.MeshBasicMaterial({color:new THREE.Color(0xffe2b5).multiplyScalar(2.2)}),carTail=new THREE.MeshBasicMaterial({color:new THREE.Color(0xff2712).multiplyScalar(1.9)});
 const carCount=bridgeGroups.length*10,carMeshes=[new THREE.InstancedMesh(unitBox,carBody,carCount),new THREE.InstancedMesh(unitBox,carHead,carCount*2),new THREE.InstancedMesh(unitBox,carTail,carCount*2)];carMeshes.forEach(m=>{m.instanceMatrix.setUsage(THREE.DynamicDrawUsage);m.frustumCulled=false;movingCars.add(m);});const carTransform=new THREE.Object3D();
 let lastCarUpdate=-1;
 function updateBridgeTraffic(time){if(time-lastCarUpdate<1/30)return;lastCarUpdate=time;for(let i=0;i<carCount;i++){const {group,span,height}=bridgeGroups[Math.floor(i/10)],dir=i%2?1:-1,x=(((i%10)*53+time*(7+i%4)*dir)%(span+60)+span+60)%(span+60)-(span+60)/2,lane=dir*5;
  const set=(mesh,index,px,py,pz,sx,sy,sz)=>{carTransform.position.set(px,py,pz);carTransform.rotation.set(0,0,0);carTransform.scale.set(sx,sy,sz);carTransform.updateMatrix();carTransform.matrix.premultiply(group.matrixWorld);mesh.setMatrixAt(index,carTransform.matrix);};
  group.updateMatrixWorld();set(carMeshes[0],i,x,height+2.3,lane,4,1.25,1.65);for(let side=0;side<2;side++){set(carMeshes[1],i*2+side,x+dir*2.04,height+2.25,lane+(side-.5)*1.2,.07,.22,.28);set(carMeshes[2],i*2+side,x-dir*2.04,height+2.25,lane+(side-.5)*1.2,.07,.2,.3);}
 }carMeshes.forEach(m=>m.instanceMatrix.needsUpdate=true);}
 const limits=new Batch(lightFixtures),buoy=M(0xb62e28,0xff572d,.35);for(const distance of[2,river.length-2]){const p=river.sample(distance);for(let offset=-p.width*.43;offset<=p.width*.43;offset+=p.width/7){const q=river.sample(distance,offset);limits.add(new THREE.SphereGeometry(1.05,8,6),buoy,q.x,.55,q.z,1,.9,1);limits.box(glow,q.x,1.7,q.z,.25,.6,.25);}const marker=sign('RIVER LIMIT · TURN BACK',27,3,'#18313b','#ffd290');marker.position.set(p.x,6,p.z);marker.rotation.y=p.heading;scene.add(marker);}limits.finish(scene);
 const pierVisuals=[];
 for(const p of piers){const dock=pierCollider(p),g=new THREE.Group();g.position.set(dock.x,0,dock.z);const b=new Batch(lightFixtures),heading=dock.heading+Math.PI/2;g.rotation.y=heading;
  b.box(stone,0,1.2,0,17,1.3,9);b.box(warm,0,1.8,15,4,.5,31);b.box(rail,0,5.9,0,18,.35,9.6);
  for(const x of[-7.3,7.3])for(const z of[-3.7,3.7]){b.box(warm,x,3.8,z,.32,4.5,.32);b.box(rail,x,-.2,z,.65,3,.65);}
  b.box(glow,0,5.7,-4.8,17,.2,.22);
  // Small groups waiting under the pier canopy.
  const skin=M(0xb58869),shirt=M([0x8bbfc1,0xd8ae68,0xa5604d][p.index%3]),pants=M(0x283644);for(let i=0;i<3;i++){const x=(i-1)*2.8,z=-.7+(i%2)*1.4;b.box(shirt,x,3.1,z,.57,.85,.34);b.add(new THREE.SphereGeometry(.22,7,6),skin,x,3.73,z,1,1.18,.96);for(const s of[-1,1]){b.box(pants,x+s*.15,2.35,z,.19,.75,.22);b.box(shirt,x+s*.38,3.05,z,.15,.65,.19);}}b.finish(g);const label=sign(p.name.toUpperCase(),15,2);label.position.set(0,5,-4.9);label.rotation.y=Math.PI;g.add(label);
  // The water-side pickup is offset from the solid pontoon, leaving a clear berth.
  scene.add(g);bridgeColliders.push(dock);
  const ring=new THREE.Mesh(new THREE.RingGeometry(17.5,18.3,64),new THREE.MeshBasicMaterial({color:0xffbd66,transparent:true,opacity:.8,side:THREE.DoubleSide,depthWrite:false,toneMapped:false}));ring.rotation.x=-Math.PI/2;ring.position.set(p.x,.18,p.z);scene.add(ring);
  const beacon=sign('PICK UP',13,2.8,'#163237','#ffd995');beacon.position.set(p.x,9,p.z);scene.add(beacon);pierVisuals.push({pier:p,ring,beacon});
 }
 const nightSky=createNightSky(scene),sky=nightSky.sky;
 const riverfront=createRiverfront(scene,river,landmarks,mobile),fountains=createFountains(scene,river,landmarks,mobile);
 lightFixtures.push(...riverfront.fixtures);const visibleLights=new VisibleLights(scene,lightFixtures);
 const localLights=Array.from({length:mobile?2:3},()=>{const l=new THREE.PointLight(0xffc17c,0,46,2);scene.add(l);return l;});
 return {water,landmarks,pierVisuals,bridgeColliders,sky,visibleLights,update(time,camera,shift,boatLights=[]){nightSky.update(time);updateBridgeTraffic(time);riverfront.update(time,camera);fountains.update(time,camera);const lightSources=[...riverfront.lights,...fountains.lights,...boatLights];nightWater.update(time,camera,lightSources);
 const nearby=lightSources.map(s=>({s,d:(s.x-camera.position.x)**2+(s.z-camera.position.z)**2})).sort((a,b)=>a.d-b.d);
 for(let i=0;i<localLights.length;i++){const s=nearby[i]?.s,l=localLights[i];l.intensity=s?Math.min(100,s.power*(s.boat?.48:1.9)):0;if(s){l.position.set(s.x,s.y,s.z);l.color.set(s.color);l.distance=s.distance||46;}}
for(const v of pierVisuals){const active=shift.fare?shift.fare.to.id===v.pier.id:!shift.finished&&(shift.cooldowns.get(v.pier.id)||0)<=shift.clock;v.ring.visible=v.beacon.visible=active;if(active){v.ring.material.color.set(shift.fare?0x89f2cf:0xffbd66);v.ring.material.opacity=.55+Math.sin(time*3)*.15;v.beacon.quaternion.copy(camera.quaternion);v.beacon.visible=camera.position.distanceTo(v.beacon.position)<550;v.beacon.position.y=9+Math.sin(time*2)*.6;}}}};
}
