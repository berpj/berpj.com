import * as THREE from 'three';

// Preserve small physical emitters after they become smaller than a pixel.
// These two-triangle capsules share a draw call and still test against scene depth.
export function collectLightFixture(fixtures,geometry,material,matrix=new THREE.Matrix4()){
  let color;
  if(material.isMeshBasicMaterial&&!material.map&&Math.max(material.color.r,material.color.g,material.color.b)>1.05)color=material.color.clone();
  else if(material.emissiveIntensity>=2.5&&!material.emissiveMap)color=material.emissive.clone().multiplyScalar(material.emissiveIntensity);
  else return;
  geometry.computeBoundingBox();
  const bounds=geometry.boundingBox,center=bounds.getCenter(new THREE.Vector3()),size=bounds.getSize(new THREE.Vector3());
  const scale=new THREE.Vector3().setFromMatrixScale(matrix),dimensions=size.clone().multiply(scale).toArray();
  const axes=[0,1,2].sort((a,b)=>dimensions[b]-dimensions[a]),axis=axes[0];
  const line=dimensions[axis]>1&&dimensions[axis]>dimensions[axes[1]]*4;
  const width=line?Math.max(dimensions[axes[1]],dimensions[axes[2]]):dimensions[axis];
  if(width>2.5||width<=0)return;
  const a=center.clone(),b=center.clone();
  if(line){a.setComponent(axis,bounds.min.getComponent(axis));b.setComponent(axis,bounds.max.getComponent(axis));}
  fixtures.push({a:a.applyMatrix4(matrix).toArray(),b:b.applyMatrix4(matrix).toArray(),width,color:color.toArray()});
  return true;
}

export function transformLightFixtures(fixtures,matrix){
  const scale=new THREE.Vector3().setFromMatrixScale(matrix).x;
  return fixtures.map(f=>({...f,a:new THREE.Vector3(...f.a).applyMatrix4(matrix).toArray(),b:new THREE.Vector3(...f.b).applyMatrix4(matrix).toArray(),width:f.width*scale}));
}

// Bridge edge lights are separate strips, not a shallow emissive slab that
// vanishes at grazing angles. Keep them outside their supporting deck faces.
export function bridgeLightFixtures(span,height,type){
  const steel=type==='steel',fixtures=[];
  const line=(y,z,width,color)=>fixtures.push({a:[-span/2,y,z],b:[span/2,y,z],width,color});
  const warm=new THREE.Color(0xffcb83).multiplyScalar(2.5).toArray();
  const accent=steel?warm:new THREE.Color(0x64c6be).multiplyScalar(1.6).toArray();
  for(const side of[-1,1]){
    line(height+.55,side*(steel?9:14.75),.22,accent);
    if(!steel)line(height+4.75,side*3.25,.2,warm);
  }
  return fixtures;
}

export function boatLightFixtures(kind){
  const fixtures=[],warm=new THREE.Color(0xffcc88).multiplyScalar(3.2).toArray();
  const point=(p,color=warm,width=.2)=>fixtures.push({a:p,b:[...p],width,color});
  const line=(a,b,width=.10,color=warm)=>fixtures.push({a,b,width,color});
  const nav=(x,y,z,stern)=>{
    point([-x,y,z],new THREE.Color(0xff3019).multiplyScalar(3).toArray());
    point([x,y,z],new THREE.Color(0x25ec77).multiplyScalar(3).toArray());
    point(stern);
  };
  if(kind==='cruise'){
    for(const [y,w,l,z]of[[1.57,11.68,43.7,1],[4.17,11.58,42.7,1.4],[6.63,10.28,39.2,1.8]])for(const side of[-1,1])line([side*w/2,y,z-l/2],[side*w/2,y,z+l/2],.075);
    for(const x of[-4.25,4.25])for(let i=0;i<25;i++){const t=i/24;point([x,9.125-Math.sin(t*Math.PI)*.59,-16.1+t*36.4],warm,.134);}
    nav(5.28,6.25,-16.8,[0,8.19,21.6]);point([0,10.24,-15.9]);
  }else if(kind==='electric'){
    const cool=new THREE.Color(0x79c6df).multiplyScalar(2).toArray();
    for(const side of[-1,1])line([side*3.18,3.65,-9.25],[side*3.18,3.65,9.25],.09,cool);
    nav(3.04,3.6,-7.2,[0,3.8,9]);
  }else if(kind==='ferry'){
    for(const side of[-1,1])line([side*2.36,3.24,-9.3],[side*2.36,3.24,10.7],.08);
    nav(2.28,3.32,-9.1,[0,3.52,12.6]);
  }else if(kind==='longtail'){
    for(const z of[-2.74,2.91])line([-.83,1.99,z],[.83,1.99,z],.048);
    nav(1.08,2.06,-2.66,[0,2.26,4.7]);
  }else if(kind==='patrol'){
    nav(1.40,2.75,-1.15,[0,3.7,1.96]);
  }else if(kind==='tug'){
    nav(1.68,4.23,-3.49,[0,1.71,7.42]);
    for(const y of[5.67,6.65])point([0,y,-2.18]);point([0,2.79,.26]);
  }else if(kind==='barge'){
    nav(5.75,1.42,-20.9,[-4.66,3.14,21.7]);
  }else point([0,.95,2.55],warm,.148);
  return fixtures;
}

export class VisibleLights{
  constructor(scene,fixtures,{dynamic=false,replacePhysical=!dynamic}={}){
    this.fixtures=fixtures;this.dynamic=dynamic;
    const geometry=this.geometry=new THREE.InstancedBufferGeometry();
    geometry.setAttribute('position',new THREE.Float32BufferAttribute([0,-1,0,1,-1,0,0,1,0,1,1,0],3));
    geometry.setIndex([0,1,2,2,1,3]);geometry.instanceCount=fixtures.length;
    for(const [name,size]of[['lightStart',3],['lightEnd',3],['lightColor',3],['lightWidth',1]]){
      const attribute=new THREE.InstancedBufferAttribute(new Float32Array(fixtures.length*size),size);
      if(dynamic)attribute.setUsage(THREE.DynamicDrawUsage);geometry.setAttribute(name,attribute);
    }
    fixtures.forEach((f,i)=>geometry.attributes.lightColor.setXYZ(i,...f.color));
    this.material=new THREE.ShaderMaterial({transparent:true,depthWrite:false,depthTest:true,blending:THREE.AdditiveBlending,
      uniforms:{viewport:{value:new THREE.Vector2(1,1)},nearPlane:{value:.3},fogDensity:{value:scene.fog?.density||0},replacePhysical:{value:replacePhysical?1:0}},
      vertexShader:`attribute vec3 lightStart;attribute vec3 lightEnd;attribute vec3 lightColor;attribute float lightWidth;
        uniform vec2 viewport;uniform float nearPlane;uniform float replacePhysical;
        varying vec2 screenStart;varying vec2 screenEnd;varying vec3 tint;
        varying float radius;varying float nativePixels;varying float depth;
        void main(){
          vec4 a=modelViewMatrix*vec4(lightStart,1.);vec4 b=modelViewMatrix*vec4(lightEnd,1.);
          float nearZ=-nearPlane*1.01;
          if(a.z>nearZ&&b.z>nearZ){gl_Position=vec4(2.,2.,2.,1.);return;}
          if(a.z>nearZ)a=mix(a,b,(nearZ-a.z)/(b.z-a.z));
          if(b.z>nearZ)b=mix(b,a,(nearZ-b.z)/(a.z-b.z));
          depth=max(nearPlane,-(a.z+b.z)*.5);
          nativePixels=lightWidth*.5*projectionMatrix[1][1]*viewport.y*.5/depth;
          radius=max(1.15,mix(min(nativePixels,4.),nativePixels,replacePhysical));tint=lightColor;
          vec4 ca=projectionMatrix*a,cb=projectionMatrix*b;
          screenStart=(ca.xy/ca.w*.5+.5)*viewport;
          screenEnd=(cb.xy/cb.w*.5+.5)*viewport;
          vec2 delta=screenEnd-screenStart;
          vec2 tangent=length(delta)>.0001?normalize(delta):vec2(1.,0.);
          vec2 normal=vec2(-tangent.y,tangent.x);
          vec2 offset=(tangent*(position.x*2.-1.)+normal*position.y)*(radius+1.);
          vec4 clip=mix(ca,cb,position.x);
          clip.xy+=offset*2./viewport*clip.w;
          // The antialiased quad extends past both endpoints. Extrapolate its
          // depth over that extension too: compressing the original endpoint
          // depths into a wider quad cuts angled strips into their own deck.
          float along=position.x+dot(offset,delta)/max(dot(delta,delta),1.);
          a.z=min(-nearPlane*.5,a.z+lightWidth*.55+.025);
          b.z=min(-nearPlane*.5,b.z+lightWidth*.55+.025);
          vec4 surfaceA=projectionMatrix*a,surfaceB=projectionMatrix*b;
          clip.z=mix(surfaceA.z/surfaceA.w,surfaceB.z/surfaceB.w,along)*clip.w;
          gl_Position=clip;
        }`,
      fragmentShader:`uniform float fogDensity;uniform float replacePhysical;varying vec2 screenStart;varying vec2 screenEnd;varying vec3 tint;
        varying float radius;varying float nativePixels;varying float depth;
        void main(){
          vec2 delta=screenEnd-screenStart;
          float t=clamp(dot(gl_FragCoord.xy-screenStart,delta)/max(dot(delta,delta),.0001),0.,1.);
          float distanceToLight=length(gl_FragCoord.xy-mix(screenStart,screenEnd,t));
          float coverage=1.-smoothstep(radius-.8,radius+.8,distanceToLight);
          // Let the physical fixture take over continuously when it is resolved.
          float distant=mix(1.-smoothstep(.8,3.,nativePixels),1.,replacePhysical);
          float haze=exp(-fogDensity*fogDensity*depth*depth);
          gl_FragColor=vec4(tint,coverage*distant*haze*.72);
          #include <tonemapping_fragment>
          #include <colorspace_fragment>
        }`
    });
    this.mesh=new THREE.Mesh(geometry,this.material);this.mesh.name=dynamic?'fleet-visible-lights':'riverbank-visible-lights';this.mesh.frustumCulled=false;
    const viewport=new THREE.Vector4();
    this.mesh.onBeforeRender=(renderer,scene,camera)=>{renderer.getCurrentViewport(viewport);this.material.uniforms.viewport.value.set(viewport.z,viewport.w);this.material.uniforms.nearPlane.value=camera.near;this.material.uniformsNeedUpdate=true;};
    this.pointA=new THREE.Vector3();this.pointB=new THREE.Vector3();this.scale=new THREE.Vector3();this.update();scene.add(this.mesh);
  }
  update(){
    let previousParent=null,scale=1;
    for(const [i,f]of this.fixtures.entries()){
      const gain=f.parent?.visible===false?0:(f.intensity?.()??1);
      this.geometry.attributes.lightColor.setXYZ(i,f.color[0]*gain,f.color[1]*gain,f.color[2]*gain);
      this.pointA.fromArray(f.a);this.pointB.fromArray(f.b);
      if(f.parent){if(f.parent!==previousParent){f.parent.updateWorldMatrix(true,false);scale=this.scale.setFromMatrixScale(f.parent.matrixWorld).x;previousParent=f.parent;}this.pointA.applyMatrix4(f.parent.matrixWorld);this.pointB.applyMatrix4(f.parent.matrixWorld);}else{scale=1;previousParent=null;}
      this.geometry.attributes.lightStart.setXYZ(i,this.pointA.x,this.pointA.y,this.pointA.z);
      this.geometry.attributes.lightEnd.setXYZ(i,this.pointB.x,this.pointB.y,this.pointB.z);
      this.geometry.attributes.lightWidth.setX(i,f.width*scale);
    }
    for(const name of['lightStart','lightEnd','lightWidth','lightColor'])this.geometry.attributes[name].needsUpdate=true;
  }
}
