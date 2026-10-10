import * as THREE from 'three';

// Two bounded draw calls: paired tire ribbons and pooled billboard smoke.
export class DriftFX {
  constructor(scene,{mobile=false}={}) {
    this.time=0;this.nextMark=0;this.markCount=0;this.nextSmoke=0;this.smokeCount=0;this.emission=0;
    this.previous=[null,null];this.smokeRate=mobile?22:35;
    this.markCapacity=mobile?512:1024;
    this.markPositions=new Float32Array(this.markCapacity*18);
    this.markBirths=new Float32Array(this.markCapacity*6);
    this.markStrengths=new Float32Array(this.markCapacity*6);
    const uv=new Float32Array(this.markCapacity*12);
    for(let i=0;i<this.markCapacity;i++)uv.set([0,0,1,0,0,1,0,1,1,0,1,1],i*12);
    const geometry=new THREE.BufferGeometry();
    geometry.setAttribute('position',new THREE.BufferAttribute(this.markPositions,3).setUsage(THREE.DynamicDrawUsage));
    geometry.setAttribute('born',new THREE.BufferAttribute(this.markBirths,1).setUsage(THREE.DynamicDrawUsage));
    geometry.setAttribute('strength',new THREE.BufferAttribute(this.markStrengths,1).setUsage(THREE.DynamicDrawUsage));
    geometry.setAttribute('uv',new THREE.BufferAttribute(uv,2));
    const material=new THREE.ShaderMaterial({
      uniforms:{time:{value:0}},transparent:true,depthWrite:false,side:THREE.DoubleSide,
      polygonOffset:true,polygonOffsetFactor:-2,polygonOffsetUnits:-1,
      vertexShader:`attribute float born;attribute float strength;varying float vBorn;varying float vStrength;varying vec2 vUv;
        void main(){vBorn=born;vStrength=strength;vUv=uv;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}`,
      fragmentShader:`uniform float time;varying float vBorn;varying float vStrength;varying vec2 vUv;
        void main(){float edge=smoothstep(0.,.14,vUv.x)*(1.-smoothstep(.86,1.,vUv.x));
        float tread=.88+.12*sin(vUv.x*48.);float fade=1.-smoothstep(10.,16.,time-vBorn);
        gl_FragColor=vec4(.055,.048,.04,edge*tread*fade*vStrength*.64);}`
    });
    this.marks=new THREE.Mesh(geometry,material);this.marks.name='Drift tire marks';this.marks.frustumCulled=false;scene.add(this.marks);

    const count=mobile?60:96;
    this.particles=Array.from({length:count},()=>({age:1,life:0,x:0,y:0,z:0,vx:0,vz:0,power:0}));
    this.smokePositions=new Float32Array(count*3);this.smokeSizes=new Float32Array(count);this.smokeAlphas=new Float32Array(count);
    const smokeGeometry=new THREE.InstancedBufferGeometry().copy(new THREE.PlaneGeometry(1,1));
    smokeGeometry.instanceCount=count;
    smokeGeometry.setAttribute('offset',new THREE.InstancedBufferAttribute(this.smokePositions,3).setUsage(THREE.DynamicDrawUsage));
    smokeGeometry.setAttribute('size',new THREE.InstancedBufferAttribute(this.smokeSizes,1).setUsage(THREE.DynamicDrawUsage));
    smokeGeometry.setAttribute('alpha',new THREE.InstancedBufferAttribute(this.smokeAlphas,1).setUsage(THREE.DynamicDrawUsage));
    const pixels=new Uint8Array(64*64*4);
    for(let y=0;y<64;y++)for(let x=0;x<64;x++){
      const dx=(x-31.5)/31.5,dy=(y-31.5)/31.5,r=Math.hypot(dx,dy);
      const cloud=.84+.08*Math.sin(dx*19+dy*11)+.08*Math.cos(dy*25-dx*8);
      const i=(y*64+x)*4;pixels.set([255,255,255,Math.round(Math.max(0,1-r*r)**2*cloud*255)],i);
    }
    const texture=new THREE.DataTexture(pixels,64,64);texture.needsUpdate=true;
    const smokeMaterial=new THREE.ShaderMaterial({
      uniforms:{puff:{value:texture}},transparent:true,depthWrite:false,
      vertexShader:`attribute vec3 offset;attribute float size;attribute float alpha;varying vec2 vUv;varying float vAlpha;
        void main(){vUv=uv;vAlpha=alpha;vec4 center=modelViewMatrix*vec4(offset,1.);center.xy+=position.xy*size;gl_Position=projectionMatrix*center;}`,
      fragmentShader:`uniform sampler2D puff;varying vec2 vUv;varying float vAlpha;
        void main(){gl_FragColor=vec4(.76,.75,.71,texture2D(puff,vUv).a*vAlpha);}`
    });
    this.smoke=new THREE.Mesh(smokeGeometry,smokeMaterial);this.smoke.name='Rear tire smoke';this.smoke.frustumCulled=false;scene.add(this.smoke);
  }

  addMark(from,to,power) {
    const dx=to.x-from.x,dz=to.z-from.z,length=Math.hypot(dx,dz);
    if(length<.18)return false;
    if(length>4)return true; // Recovery or a discontinuity must never draw across the map.
    const x=-dz/length*.09,z=dx/length*.09,i=this.nextMark++%this.markCapacity,y=.065;
    this.markPositions.set([
      from.x-x,y,from.z-z,from.x+x,y,from.z+z,to.x-x,y,to.z-z,
      to.x-x,y,to.z-z,from.x+x,y,from.z+z,to.x+x,y,to.z+z
    ],i*18);
    this.markBirths.fill(this.time,i*6,i*6+6);this.markStrengths.fill(power,i*6,i*6+6);
    this.markCount=Math.min(this.markCapacity,this.markCount+1);
    for(const key of ['position','born','strength'])this.marks.geometry.attributes[key].needsUpdate=true;
    return true;
  }

  update(dt,vehicle,active=true) {
    if(dt<=0)return;
    this.time+=dt;this.marks.material.uniforms.time.value=this.time;
    const power=active?vehicle.driftIntensity:0;
    if(power>.06&&vehicle.actualSpeed>4.5){
      const p=vehicle.renderPosition||vehicle.position,h=vehicle.renderHeading??vehicle.heading,c=Math.cos(h),s=Math.sin(h);
      const contacts=[-.595,.595].map(x=>({x:p.x+x*c+.79*s,z:p.z-x*s+.79*c}));
      for(let side=0;side<2;side++){
        if(!this.previous[side]||this.addMark(this.previous[side],contacts[side],power))this.previous[side]=contacts[side];
      }
      this.emission+=dt*this.smokeRate;
      while(this.emission>=1){
        this.emission--;
        const velocity=vehicle.body.linvel();
        for(const contact of contacts){
          const particle=this.particles[this.nextSmoke++%this.particles.length];
          Object.assign(particle,{age:0,life:.8+Math.random()*.35,x:contact.x,y:.17,z:contact.z,
            vx:velocity.x*.04+(Math.random()-.5)*.6,vz:velocity.z*.04+(Math.random()-.5)*.6,power});
        }
      }
    }else{this.previous=[null,null];this.emission=0;}
    this.smokeCount=0;
    for(let i=0;i<this.particles.length;i++){
      const p=this.particles[i];p.age+=dt;
      if(p.age>=p.life){this.smokeAlphas[i]=this.smokeSizes[i]=0;continue;}
      this.smokeCount++;p.x+=p.vx*dt;p.z+=p.vz*dt;p.y+=dt*.48;
      this.smokePositions.set([p.x,p.y,p.z],i*3);
      this.smokeSizes[i]=.28+p.age*1.6;
      this.smokeAlphas[i]=Math.min(1,p.age/.07)*(1-p.age/p.life)*p.power*.55;
    }
    for(const key of ['offset','size','alpha'])this.smoke.geometry.attributes[key].needsUpdate=true;
  }

  breakTrail(){this.previous=[null,null];this.emission=0;}
  reset(){
    this.breakTrail();this.nextMark=this.markCount=this.nextSmoke=this.smokeCount=0;
    this.markStrengths.fill(0);this.marks.geometry.attributes.strength.needsUpdate=true;
    for(const p of this.particles)p.life=0;
    this.smokeAlphas.fill(0);this.smokeSizes.fill(0);
    this.smoke.geometry.attributes.alpha.needsUpdate=true;this.smoke.geometry.attributes.size.needsUpdate=true;
  }
}
