import * as THREE from 'three';
import {Water} from 'three/addons/objects/Water.js';
import {mergeGeometries} from 'three/addons/utils/BufferGeometryUtils.js';
import {buildLandmark} from './landmarks.js';
import {project,clamp} from './river.mjs';

const rnd=seed=>()=>{seed=(Math.imul(seed,1664525)+1013904223)>>>0;return seed/4294967296;};
const random=rnd(81623);
const M=(color,emissive=0,intensity=0)=>new THREE.MeshStandardMaterial({color,emissive,emissiveIntensity:intensity,roughness:.72});
class Batch{
 constructor(){this.parts=new Map();this.transform=new THREE.Object3D();}
 add(geometry,material,x,y,z,sx=1,sy=1,sz=1,ry=0){const o=this.transform;o.position.set(x,y,z);o.rotation.set(0,ry,0);o.scale.set(sx,sy,sz);o.updateMatrix();const g=geometry.clone().applyMatrix4(o.matrix);if(!this.parts.has(material))this.parts.set(material,[]);this.parts.get(material).push(g);}
 box(m,x,y,z,w,h,d,ry=0){this.add(unitBox,m,x,y,z,w,h,d,ry);}
 finish(parent){for(const[m,parts]of this.parts){const g=mergeGeometries(parts);parts.forEach(p=>p.dispose());if(g){const mesh=new THREE.Mesh(g,m);parent.add(mesh);}}this.parts.clear();}
}
const unitBox=new THREE.BoxGeometry(1,1,1);
export function sign(text,w=20,h=4,bg='#13283c',fg='#ffde9b'){
 const canvas=document.createElement('canvas');canvas.width=1024;canvas.height=256;const c=canvas.getContext('2d');c.fillStyle=bg;c.fillRect(0,0,1024,256);c.fillStyle=fg;c.font='bold 110px Arial';c.textAlign='center';c.textBaseline='middle';c.fillText(text,512,128,970);const texture=new THREE.CanvasTexture(canvas);texture.colorSpace=THREE.SRGBColorSpace;
 return new THREE.Mesh(new THREE.PlaneGeometry(w,h),new THREE.MeshBasicMaterial({map:texture,side:THREE.DoubleSide,toneMapped:false}));
}
function cityMaterial(index, floors=12){
 const c=document.createElement('canvas');c.width=256;c.height=512;const ctx=c.getContext('2d');ctx.fillStyle=['#38404b','#4a4746','#444951','#424c51','#605750'][index%5];ctx.fillRect(0,0,256,512);
 const cellY=512/floors,cellX=256/(index%2?8:6);for(let y=4;y<512;y+=cellY)for(let x=4;x<256;x+=cellX){const lit=random()>.63;ctx.fillStyle=lit?['#d9aa63','#9ab0b9','#bd8d52','#e6c99c'][Math.floor(random()*4)]:'#1b2c3e';ctx.globalAlpha=lit?.35+random()*.65:.8;ctx.fillRect(x,y,cellX*.6,cellY*.58);ctx.globalAlpha=1;ctx.fillStyle='#243542';ctx.fillRect(x+cellX*.3,y,1,cellY*.58);}
 const tex=new THREE.CanvasTexture(c);tex.colorSpace=THREE.SRGBColorSpace;tex.anisotropy=4;
 return new THREE.MeshStandardMaterial({map:tex,emissiveMap:tex,emissive:0xffffff,emissiveIntensity:.7,roughness:.7,color:0x86949c});
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
 const warm=M(0xd3b88b,0xffb34e,.3),stone=M(0x515558),rail=M(0x23323b),glow=new THREE.MeshBasicMaterial({color:0xffcb83,toneMapped:false}),cyan=new THREE.MeshBasicMaterial({color:0x64c6be,toneMapped:false});
 const buildings=new THREE.Group();scene.add(buildings);
 const points=[];for(let d=0;d<river.length;d+=20)points.push(river.sample(d));points.push(river.sample(river.length));
 const banks=side=>points.map(p=>new THREE.Vector2(p.x+p.nx*side*p.width/2,-(p.z+p.nz*side*p.width/2)));
 const west=banks(1),east=banks(-1),holePoints=[...west,...east.reverse()];
 // Extend the river off the authored ends, avoiding visible rectangular water caps.
 for(const list of [west,east]){const first=list===west?0:list.length-1,last=list===west?list.length-1:0;const a=river.sample(0),b=river.sample(river.length);list[first].x+=Math.sin(a.heading)*1600;list[first].y-=Math.cos(a.heading)*1600;list[last].x-=Math.sin(b.heading)*1600;list[last].y+=Math.cos(b.heading)*1600;}
 const land=new THREE.Shape([new THREE.Vector2(-5500,-5500),new THREE.Vector2(5500,-5500),new THREE.Vector2(5500,5500),new THREE.Vector2(-5500,5500)]);land.holes.push(new THREE.Path(holePoints));
 const geo=new THREE.ExtrudeGeometry(land,{depth:4,bevelEnabled:false,steps:1});geo.rotateX(-Math.PI/2);const landMesh=new THREE.Mesh(geo,M(0x252e2e));landMesh.position.y=-1;scene.add(landMesh);
 const waters=new Uint8Array(128*128*4);const waves=Array.from({length:18},(_,i)=>({x:Math.round(random()*14-7)||1,y:Math.round(random()*14-7)||1,phase:random()*6.283,amp:.6/(1+i*.28)}));for(let y=0;y<128;y++)for(let x=0;x<128;x++){const i=(y*128+x)*4;let a=0,b=0;for(const w of waves){const v=Math.cos((x*w.x+y*w.y)/128*Math.PI*2+w.phase)*w.amp;a+=v*w.x*.1;b+=v*w.y*.1;}waters[i]=clamp(128+a*32,0,255);waters[i+1]=clamp(128+b*32,0,255);waters[i+2]=248;waters[i+3]=255;}
 const normal=new THREE.DataTexture(waters,128,128);normal.wrapS=normal.wrapT=THREE.RepeatWrapping;normal.needsUpdate=true;
 const water=new Water(new THREE.PlaneGeometry(14000,14000),{textureWidth:mobile?256:512,textureHeight:mobile?256:512,waterNormals:normal,sunDirection:new THREE.Vector3(-.5,.8,-.2),sunColor:0x53617d,waterColor:0x061a20,distortionScale:2.1,fog:true});water.rotation.x=-Math.PI/2;water.position.y=.04;water.material.uniforms.size.value=1.2;scene.add(water);
 const landmarks=[];
 for(const [kind,name,lon,lat,side]of LANDMARKS){
  const p=project(lon,lat),n=river.nearest(p.x,p.z);
  const model=buildLandmark(kind),localBounds=new THREE.Box3().setFromObject(model);let offset=Math.max(n.offset*side,n.width/2+localBounds.max.z+12);let safe=river.sample(n.distance,side*offset);model.rotation.y=Math.atan2(-n.nx*side,-n.nz*side);
  for(let attempt=0;attempt<12;attempt++){model.position.set(safe.x,3,safe.z);model.updateMatrixWorld();let overlaps=false;for(const x of[localBounds.min.x,localBounds.max.x])for(const z of[localBounds.min.z,localBounds.max.z]){const corner=model.localToWorld(new THREE.Vector3(x,0,z)),bank=river.nearest(corner.x,corner.z);if(Math.abs(bank.offset)<bank.width/2+4)overlaps=true;}if(!overlaps)break;offset+=15;safe=river.sample(n.distance,side*offset);}buildings.add(model);
  if(kind==='wat-arun'||kind==='wat-kalayanamit'){const light=new THREE.SpotLight(0xffd9a0,kind==='wat-arun'?5500:3500,210,.78,.75,2);light.position.set(safe.x-n.nx*side*75,7,safe.z-n.nz*side*75);light.target.position.set(safe.x,28,safe.z);scene.add(light,light.target);}
  const bounds=new THREE.Box3().setFromObject(model);landmarks.push({kind,name,x:safe.x,z:safe.z,distance:n.distance,bounds,side,reserveLength:(localBounds.max.x-localBounds.min.x)/2+22,inland:offset-localBounds.min.z+20});
 }
 // Dense, varied riverside fabric; reserved landmark footprints are kept clear.
 const mats=Array.from({length:5},(_,i)=>[cityMaterial(i,4),cityMaterial(i,10),cityMaterial(i,22)]);const photo=new THREE.TextureLoader().load(`${import.meta.env.BASE_URL}textures/riverside-shophouses.png`);photo.colorSpace=THREE.SRGBColorSpace;photo.anisotropy=4;const shophouse=new THREE.MeshStandardMaterial({map:photo,color:0xa6a8a2,emissiveMap:photo,emissive:0xffd9a0,emissiveIntensity:.12,roughness:.95});const batch=new Batch(),roof=M(0x283239),market=M(0x7b4435),leaf=M(0x233f30),trunk=M(0x44352c);
 for(let d=20;d<river.length;d+=35){for(const side of [-1,1]){const riverPoint=river.sample(d);for(let row=0;row<3;row++){
  const width=18+random()*24,depth=20+random()*23,offset=side*(riverPoint.width/2+depth/2+12+row*110),p=river.sample(d+(random()-.5)*14,offset);let height=11+random()*25;
  if(row>0)height+=random()*45;if(d>river.length*.62&&random()>.72)height+=random()*90;const oldTown=d<river.length*.48;if(oldTown)height=6+random()*13+row*4;if(row===0&&oldTown)height=9+random()*4;
  if(landmarks.some(l=>l.side===side&&Math.abs(d-l.distance)<l.reserveLength&&Math.abs(offset)<l.inland))continue;
  if(landmarks.some(l=>p.x>l.bounds.min.x-25&&p.x<l.bounds.max.x+25&&p.z>l.bounds.min.z-25&&p.z<l.bounds.max.z+25))continue;
  const fm=row===0&&height<22?shophouse:mats[Math.floor(random()*5)][height<22?0:height<65?1:2];batch.box(fm,p.x,3+height/2,p.z,width,height,depth,p.heading);
  batch.box(roof,p.x,height+3.5,p.z,width+1,1,depth+1,p.heading);
  if(row===0){const f=river.sample(d,side*(riverPoint.width/2+5));batch.box(market,f.x,6.7,f.z,width,.3,4,p.heading);if(Math.floor(d)%3===0)batch.box(glow,f.x,6.9,f.z,width*.3,.08,.24,p.heading);}
 }}
 for(const side of[-1,1]){const p=river.sample(d,side*(river.sample(d).width/2+4));batch.box(stone,p.x,1.5,p.z,2,3.5,36,p.heading);if(Math.floor(d/35)%2===0){batch.box(rail,p.x,6,p.z,.35,7,.35);batch.box(glow,p.x,9.7,p.z,1.9,.35,1.9);}
 if(Math.floor(d/35)%3===0){batch.box(trunk,p.x+p.nx*side*8,7,p.z+p.nz*side*8,.8,9,.8);const pos={x:p.x+p.nx*side*8,z:p.z+p.nz*side*8};for(let a=0;a<5;a++)batch.add(new THREE.SphereGeometry(1,7,5),leaf,pos.x+Math.sin(a*1.25)*2.3,11.5,pos.z+Math.cos(a*1.25)*2.3,4.1,1.8,2.2,a*1.25);}}
 }
 batch.finish(buildings);
 // Recognisable steel Memorial Bridge, neighbouring Sky Park and concrete Taksin.
 const bridgeColliders=[];const bridgeGroups=[];
 function bridge(lat,lon,name,type){
  const p=project(lon,lat),n=river.nearest(p.x,p.z),g=new THREE.Group();g.position.set(n.x,0,n.z);g.rotation.y=Math.atan2(-n.nz,n.nx);scene.add(g);const b=new Batch(),span=n.width+200,h=type==='steel'?16:19,steel=M(type==='steel'?0x487962:0x646f7b),accent=type==='steel'?glow:cyan;
  b.box(steel,0,h,0,span,2.5,type==='steel'?17:29);for(const z of[-9,9]){b.box(accent,0,h+1.4,z,span,.22,.22);if(type==='steel'){
   b.box(steel,0,h+13,z,span,1.1,1.1);for(let x=-span/2;x<span/2;x+=30){b.box(steel,x,h+7,z,.7,12,.7);const beam=new THREE.BoxGeometry(1,1,1);const o=new THREE.Object3D();o.position.set(x+15,h+7,z);o.rotation.z=Math.atan2(30,12);o.scale.set(.65,Math.hypot(30,12),.65);o.updateMatrix();b.parts.set(steel,[...(b.parts.get(steel)||[]),beam.applyMatrix4(o.matrix)]);}}
  }
  for(const x of[-n.width*.27,n.width*.27]){b.box(steel,x,h/2,0,8,h,13);const v=new THREE.Vector3(x,0,0).applyMatrix4(g.matrixWorld);g.updateMatrixWorld();g.localToWorld(v.set(x,0,0));bridgeColliders.push({x:v.x,z:v.z,width:9,length:16,heading:g.rotation.y,mass:10000,vx:0,vz:0});}
  if(type==='concrete'){b.box(steel,0,h+4,0,span,2,6);b.box(glow,0,h+5.1,0,span,.1,5.4);}b.finish(g);
  const label=sign(name,54,4.8);label.position.set(0,h+3.8,type==='steel'?9:15);g.add(label);bridgeGroups.push(g);
 }
 bridge(13.7393,100.4976,'MEMORIAL BRIDGE','steel');bridge(13.73898,100.49851,'CHAO PHRAYA SKY PARK','concrete');bridge(13.7193,100.5121,'TAKSIN BRIDGE','concrete');
 const limits=new Batch(),buoy=M(0xb62e28,0xff572d,.35);for(const distance of[2,river.length-2]){const p=river.sample(distance);for(let offset=-p.width*.43;offset<=p.width*.43;offset+=p.width/7){const q=river.sample(distance,offset);limits.add(new THREE.SphereGeometry(1.05,8,6),buoy,q.x,.55,q.z,1,.9,1);limits.box(glow,q.x,1.7,q.z,.25,.6,.25);}const marker=sign('RIVER LIMIT · TURN BACK',27,3,'#18313b','#ffd290');marker.position.set(p.x,6,p.z);marker.rotation.y=p.heading;scene.add(marker);}limits.finish(scene);
 const pierVisuals=[];
 for(const p of piers){const g=new THREE.Group();g.position.set(p.x,0,p.z);const b=new Batch(),heading=Math.atan2(p.nx,p.nz);g.rotation.y=heading;
  b.box(stone,0,1.2,0,17,1.3,9);b.box(warm,0,1.8,15,4,.5,31);b.box(rail,0,5.9,0,18,.35,9.6);
  for(const x of[-7.3,7.3])for(const z of[-3.7,3.7]){b.box(warm,x,3.8,z,.32,4.5,.32);b.box(rail,x,-.2,z,.65,3,.65);}
  b.box(glow,0,5.7,-4.8,17,.2,.22);
  // Small groups waiting under the pier canopy.
  const skin=M(0xb58869),shirt=M([0x8bbfc1,0xd8ae68,0xa5604d][p.index%3]),pants=M(0x283644);for(let i=0;i<3;i++){const x=(i-1)*2.8,z=-.7+(i%2)*1.4;b.box(shirt,x,3.1,z,.57,.85,.34);b.add(new THREE.SphereGeometry(.22,7,6),skin,x,3.73,z,1,1.18,.96);for(const s of[-1,1]){b.box(pants,x+s*.15,2.35,z,.19,.75,.22);b.box(shirt,x+s*.38,3.05,z,.15,.65,.19);}}b.finish(g);const label=sign(p.name.toUpperCase(),15,2);label.position.set(0,5,-4.9);label.rotation.y=Math.PI;g.add(label);
  // The water-side pickup is offset from the solid pontoon, leaving a clear berth.
  g.position.x+=p.nx*15;g.position.z+=p.nz*15;scene.add(g);bridgeColliders.push({x:g.position.x,z:g.position.z,width:9,length:17,heading:heading-Math.PI/2,mass:10000,vx:0,vz:0});
  const ring=new THREE.Mesh(new THREE.RingGeometry(17.5,18.3,64),new THREE.MeshBasicMaterial({color:0xffbd66,transparent:true,opacity:.8,side:THREE.DoubleSide,depthWrite:false,toneMapped:false}));ring.rotation.x=-Math.PI/2;ring.position.set(p.x,.18,p.z);scene.add(ring);
  const beacon=sign('PICK UP',13,2.8,'#163237','#ffd995');beacon.position.set(p.x,9,p.z);scene.add(beacon);pierVisuals.push({pier:p,ring,beacon});
 }
 // A warm, atmospheric night sky. Few stars remain visible above urban haze.
 const skyMat=new THREE.ShaderMaterial({side:THREE.BackSide,depthWrite:false,uniforms:{time:{value:0}},vertexShader:'varying vec3 v;void main(){v=position;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0);}',fragmentShader:`varying vec3 v;uniform float time;void main(){vec3 d=normalize(v);float h=max(d.y,0.);vec3 c=mix(vec3(.041,.062,.096),vec3(.006,.016,.038),pow(h,.36));float haze=pow(1.-h,9.);c+=vec3(.023,.012,.008)*haze;float veil=sin(d.x*8.+d.z*3.)*.5+.5;c+=vec3(.004,.005,.007)*veil*smoothstep(.01,.12,d.y)*(1.-smoothstep(.14,.4,d.y));gl_FragColor=vec4(c,1.);}`});
 const sky=new THREE.Mesh(new THREE.SphereGeometry(6500,32,16),skyMat);scene.add(sky);const moon=new THREE.Mesh(new THREE.SphereGeometry(28,24,16),new THREE.MeshBasicMaterial({color:0xdce5ed,fog:false}));moon.position.set(-2100,2700,-3700);scene.add(moon);
 return {water,landmarks,pierVisuals,bridgeColliders,sky,update(time,camera,shift){water.material.uniforms.time.value=time*.48;skyMat.uniforms.time.value=time;for(const v of pierVisuals){const active=shift.fare?shift.fare.to.id===v.pier.id:!shift.finished&&(shift.cooldowns.get(v.pier.id)||0)<=shift.clock;v.ring.visible=v.beacon.visible=active;if(active){v.ring.material.color.set(shift.fare?0x89f2cf:0xffbd66);v.ring.material.opacity=.55+Math.sin(time*3)*.15;v.beacon.quaternion.copy(camera.quaternion);v.beacon.visible=camera.position.distanceTo(v.beacon.position)<550;v.beacon.position.y=9+Math.sin(time*2)*.6;}}}};
}
