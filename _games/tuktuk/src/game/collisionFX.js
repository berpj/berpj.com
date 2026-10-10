import * as THREE from 'three';

export class CollisionFX {
  constructor(scene){
    this.time=0;this.shake=0;this.next=0;
    this.particles=Array.from({length:96},()=>({life:0,v:new THREE.Vector3()}));
    this.positions=new Float32Array(96*3);this.positions.fill(-100);
    this.colors=new Float32Array(96*3);
    const geometry=new THREE.BufferGeometry();
    geometry.setAttribute('position',new THREE.BufferAttribute(this.positions,3).setUsage(THREE.DynamicDrawUsage));
    geometry.setAttribute('color',new THREE.BufferAttribute(this.colors,3).setUsage(THREE.DynamicDrawUsage));
    this.points=new THREE.Points(geometry,new THREE.PointsMaterial({size:.065,vertexColors:true,transparent:true,opacity:.8,depthWrite:false}));
    this.points.frustumCulled=false;scene.add(this.points);
  }
  hit(impact){
    this.shake=Math.min(.16,Math.max(this.shake,impact.strength*impact.profile.shake*.16));
    const count=Math.ceil(impact.profile.particles*impact.strength);
    for(let j=0;j<count;j++){
      const i=this.next++%this.particles.length,p=this.particles[i];
      p.life=.2+Math.random()*.4;
      p.v.set((Math.random()-.5)*5,1+Math.random()*3,(Math.random()-.5)*5);
      this.positions.set([impact.point.x,Math.max(.3,impact.point.y),impact.point.z],i*3);
      this.colors.set(impact.type==='wall'?[.63,.57,.43]:impact.type==='motorcycle'?[.67,.72,.74]:[1,.72,.24],i*3);
    }
    this.points.geometry.attributes.color.needsUpdate=true;
  }
  update(dt){
    this.time+=dt;this.shake*=Math.exp(-dt*8);
    for(let i=0;i<this.particles.length;i++){
      const p=this.particles[i];p.life-=dt;
      if(p.life<=0){this.positions[i*3+1]=-100;continue;}
      p.v.y-=9.81*dt;
      this.positions[i*3]+=p.v.x*dt;this.positions[i*3+1]+=p.v.y*dt;this.positions[i*3+2]+=p.v.z*dt;
    }
    this.points.geometry.attributes.position.needsUpdate=true;
  }
  reset(){this.shake=0;for(const p of this.particles)p.life=0;}
}
