import * as THREE from 'three';

// Procedural exhaust jets: no texture downloads and four small flame meshes.
export class BurstFX {
  constructor(model) {
    this.time=0;this.strength=0;this.model=model;
    this.group=new THREE.Group();this.group.name='Turbo exhaust flames';model.add(this.group);
    const geometry=new THREE.CylinderGeometry(.012,.12,1,12,10,true);
    geometry.rotateX(Math.PI/2);geometry.translate(0,0,.5);
    const material=new THREE.ShaderMaterial({
      uniforms:{time:{value:0},power:{value:0}},transparent:true,depthWrite:false,
      blending:THREE.AdditiveBlending,side:THREE.DoubleSide,
      vertexShader:`varying vec2 vUv;uniform float time;void main(){vUv=uv;vec3 p=position;
        float end=clamp(p.z,0.,1.);p.x+=sin(end*19.-time*37.+p.y*8.)*.022*end;
        p.y+=sin(end*13.-time*29.)*.028*end;gl_Position=projectionMatrix*modelViewMatrix*vec4(p,1.);}`,
      fragmentShader:`varying vec2 vUv;uniform float time;uniform float power;void main(){
        float t=vUv.y;float pulse=.83+.17*sin(t*24.-time*47.);
        vec3 blue=vec3(.08,.36,1.);vec3 core=vec3(1.,.93,.52);vec3 orange=vec3(1.,.19,.015);
        vec3 color=mix(blue,core,smoothstep(0.,.24,t));color=mix(color,orange,smoothstep(.3,1.,t));
        float alpha=power*pulse*(1.-smoothstep(.64,1.,t))*.75;
        gl_FragColor=vec4(color*1.65,alpha);}`
    });
    this.material=material;this.jets=[];
    const metal=new THREE.MeshStandardMaterial({color:'#959d9e',metalness:.85,roughness:.27});
    const inside=new THREE.MeshStandardMaterial({color:'#151d24',roughness:.9});
    for(const x of [-.4,.4]) {
      const tip=new THREE.Mesh(new THREE.CylinderGeometry(.093,.083,.32,12,true),metal);
      tip.rotation.x=Math.PI/2;tip.position.set(x,.38,1.31);this.group.add(tip);
      const dark=new THREE.Mesh(new THREE.CircleGeometry(.08,12),inside);dark.position.set(x,.38,1.475);this.group.add(dark);
      const jet=new THREE.Mesh(geometry,material);jet.position.set(x,.38,1.48);jet.renderOrder=3;this.group.add(jet);this.jets.push(jet);
      const core=new THREE.Mesh(geometry,material);core.position.copy(jet.position);core.scale.set(.45,.45,.64);core.renderOrder=4;this.group.add(core);this.jets.push(core);
    }
    this.glow=new THREE.PointLight('#ff742d',0,3,2);this.glow.position.set(0,.65,1.8);this.group.add(this.glow);
    this.update(0,{burstTime:0,speed:0});
  }
  update(dt,vehicle) {
    this.time+=dt;
    const on=vehicle.burstTime>0&&vehicle.speed>0;
    this.strength+=(Number(on)-this.strength)*(1-Math.exp(-dt*(on?38:22)));
    this.material.uniforms.time.value=this.time;this.material.uniforms.power.value=this.strength;
    this.glow.intensity=this.strength*3.5;
    for(let i=0;i<this.jets.length;i++){
      const jet=this.jets[i],core=i%2===1;jet.visible=this.strength>.015;
      // The fast plume trails along the road instead of clipping into it as the nose rises.
      jet.rotation.x=-this.model.rotation.x-.08;
      const length=(1.3+.18*Math.sin(this.time*57+i*2)+.12*Math.sin(this.time*31+i))*this.strength;
      jet.scale.set(core?.46:1,core?.46:1,length*(core?.65:1));
    }
  }
  reset(){this.strength=0;this.update(0,{burstTime:0,speed:0});}
}
