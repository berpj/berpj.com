import * as THREE from 'three';

// ICONSIAM's river plaza has moving water, not a static luminous wall.
// Each droplet follows a ballistic arc; the same points appear in reflections.
export function createFountains(scene,river,landmarks,mobile){
 const landmark=landmarks.find(l=>l.kind==='icon-siam');
 const jets=35,perJet=mobile?32:64,count=jets*perJet;
 const positions=new Float32Array(count*3),colors=new Float32Array(count*3),opacity=new Float32Array(count);
 const geometry=new THREE.BufferGeometry();geometry.setAttribute('position',new THREE.BufferAttribute(positions,3));geometry.setAttribute('color',new THREE.BufferAttribute(colors,3));geometry.setAttribute('alpha',new THREE.BufferAttribute(opacity,1));
 const material=new THREE.ShaderMaterial({transparent:true,depthWrite:false,blending:THREE.AdditiveBlending,
  vertexShader:'attribute vec3 color;attribute float alpha;varying vec3 tint;varying float fade;void main(){tint=color;fade=alpha;vec4 p=modelViewMatrix*vec4(position,1.);gl_PointSize=clamp(180./max(1.,-p.z),1.,7.);gl_Position=projectionMatrix*p;}',
  fragmentShader:`varying vec3 tint;varying float fade;void main(){float r=length(gl_PointCoord-.5)*2.;if(r>1.)discard;gl_FragColor=vec4(tint,fade*(1.-r*r));
  #include <tonemapping_fragment>
  #include <colorspace_fragment>
  }`
 });
 const points=new THREE.Points(geometry,material);points.frustumCulled=false;scene.add(points);
 const streams=new THREE.InstancedMesh(new THREE.CylinderGeometry(.055,.13,1,6),new THREE.MeshBasicMaterial({color:0x7bbad1,transparent:true,opacity:.25,depthWrite:false,blending:THREE.AdditiveBlending}),jets);
 streams.instanceMatrix.setUsage(THREE.DynamicDrawUsage);streams.frustumCulled=false;scene.add(streams);const transform=new THREE.Object3D();
 const sources=[],centers=Array.from({length:jets},(_,j)=>{const d=landmark.distance+(j-(jets-1)/2)*3.8,p=river.sample(d),q=river.sample(d,landmark.side*(p.width/2+9));return{x:q.x,z:q.z,nx:q.nx,nz:q.nz};});
 for(let i=0;i<5;i++){const p=centers[i*7];sources.push({x:p.x,y:5,z:p.z,color:0x75c5df,power:16});}
 const tint=new THREE.Color();
 return{lights:sources,update(time){for(let j=0;j<jets;j++){
  const p=centers[j],wave=.5+.5*Math.sin(time*.67+j*.28),height=3.5+wave*7.5;
  transform.position.set(p.x,3.25+height/2,p.z);transform.scale.set(1,height,1);transform.updateMatrix();streams.setMatrixAt(j,transform.matrix);
  tint.setHSL(.53+.055*Math.sin(time*.055+j*.032),.38,.59);
  for(let k=0;k<perJet;k++){const i=j*perJet+k,age=(k/perJet+time*.28)%1,y=4*height*age*(1-age),spray=(.08+age*.25)*Math.sin(i*17.21+time*1.7);
   positions[i*3]=p.x+Math.cos(j)*spray+p.nx*Math.sin(j*.7)*age*1.8;positions[i*3+1]=3.25+y;positions[i*3+2]=p.z+Math.sin(j)*spray+p.nz*Math.sin(j*.7)*age*1.8;
   colors[i*3]=tint.r*1.8;colors[i*3+1]=tint.g*1.8;colors[i*3+2]=tint.b*1.8;opacity[i]=.45*(1-age*.4);
  }
 }streams.instanceMatrix.needsUpdate=true;for(const attr of Object.values(geometry.attributes))attr.needsUpdate=true;}};
}
