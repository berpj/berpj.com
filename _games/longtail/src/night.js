import * as THREE from 'three';
import { Water } from 'three/addons/objects/Water.js';

// Low in the southern sky, visible along the main downstream approach.
// Share the direction with hull lighting and the moonlit water highlights.
export const MOON_DIRECTION = new THREE.Vector3(.30,.26,.918).normalize();

// The sky is drawn at far depth using only camera rotation. A world-centred
// sphere used to cross the far plane from the northern end of the river.
export function createNightSky(scene) {
  const material = new THREE.ShaderMaterial({
    side: THREE.BackSide, depthWrite: false, depthTest: false,
    uniforms: { time: { value: 0 }, moonDirection: { value: MOON_DIRECTION.clone() } },
    vertexShader: `varying vec3 direction;
      void main(){direction=position;vec4 p=projectionMatrix*mat4(mat3(viewMatrix))*vec4(position,1.);gl_Position=p.xyww;}`,
    fragmentShader: `varying vec3 direction;uniform float time;uniform vec3 moonDirection;
      float hash(vec2 p){return fract(sin(dot(p,vec2(127.1,311.7)))*43758.5453);}
      float noise(vec2 p){vec2 i=floor(p),f=fract(p);f=f*f*(3.-2.*f);
        return mix(mix(hash(i),hash(i+vec2(1,0)),f.x),mix(hash(i+vec2(0,1)),hash(i+vec2(1,1)),f.x),f.y);}
      float fbm(vec2 p){float n=0.,a=.53;for(int i=0;i<4;i++){n+=noise(p)*a;p=mat2(1.6,1.2,-1.2,1.6)*p+17.7;a*=.5;}return n;}
      void main(){
        vec3 d=normalize(direction);float h=max(d.y,0.);
        float moonDot=max(0.,dot(d,moonDirection));
        float horizon=exp(-h*8.);
        vec3 color=mix(vec3(.012,.022,.039),vec3(.048,.042,.046),horizon);
        color+=vec3(.012,.006,.002)*pow(horizon,3.);
        vec2 p=d.xz/(max(.10,d.y)+.20)*1.5+vec2(time*.0018,0.);
        float cloud=fbm(p+fbm(p*.57)*1.7);
        float veil=smoothstep(.40,.75,cloud)*smoothstep(-.04,.18,d.y);
        vec3 cloudColor=mix(vec3(.028,.038,.052),vec3(.055,.048,.045),horizon);
        cloudColor+=vec3(.013,.018,.027)*pow(moonDot,24.);
        color=mix(color,cloudColor,veil*.76);
        float halo=pow(moonDot,180.);
        color+=vec3(.045,.057,.078)*halo*(1.-veil*.68);
        vec3 moonRight=normalize(cross(vec3(0.,1.,0.),moonDirection));
        vec3 moonUp=cross(moonDirection,moonRight);
        vec2 lunarUV=vec2(dot(d,moonRight),dot(d,moonUp))/.022;
        float radial=length(lunarUV),edge=max(fwidth(radial),.002);
        if(moonDot>.998&&radial<1.+edge){
          // Broad lunar maria and fine craters, shaded softly toward the limb.
          float maria=smoothstep(.28,.72,fbm(lunarUV*3.8+vec2(12.3,5.7)));
          float craters=fbm(lunarUV*19.+vec2(31.7,8.2));
          float limb=sqrt(max(0.,1.-dot(lunarUV,lunarUV)));
          vec3 moonColor=vec3(1.18,1.13,1.02)*(.52+.31*maria+.13*craters)*(.73+.27*limb);
          float disk=1.-smoothstep(1.-edge,1.+edge,radial);
          color=mix(color,moonColor,disk*(1.-veil*.58));
        }
        gl_FragColor=vec4(color,1.);
        #include <tonemapping_fragment>
        #include <colorspace_fragment>
      }`
  });
  const sky=new THREE.Mesh(new THREE.SphereGeometry(100,48,24),material);
  sky.name='infinite-night-sky';sky.renderOrder=-1000;sky.frustumCulled=false;scene.add(sky);
  return {sky,update(time){material.uniforms.time.value=time;}};
}

function riverNormals(){
  const size=256,data=new Uint8Array(size*size*4);
  for(let y=0;y<size;y++)for(let x=0;x<size;x++){
    const u=x/size*Math.PI*2,v=y/size*Math.PI*2;
    let dx=0,dz=0;
    for(let i=1;i<=10;i++){
      const a=(i%3+1),b=(i*7%11-5),phase=u*a+v*b+i*1.91;
      dx+=Math.cos(phase)*a/(i+3);dz+=Math.cos(phase)*b/(i+3);
    }
    const n=new THREE.Vector3(-dx*.22,-dz*.22,1).normalize(),at=(y*size+x)*4;
    data[at]=(n.x*.5+.5)*255;data[at+1]=(n.y*.5+.5)*255;data[at+2]=(n.z*.5+.5)*255;data[at+3]=255;
  }
  const texture=new THREE.DataTexture(data,size,size);texture.wrapS=texture.wrapT=THREE.RepeatWrapping;
  texture.generateMipmaps=true;texture.minFilter=THREE.LinearMipmapLinearFilter;texture.magFilter=THREE.LinearFilter;texture.anisotropy=4;texture.needsUpdate=true;return texture;
}

export function createNightWater(scene,mobile){
  const count=mobile?6:12;
  // Concentrate vertices around the camera for visible low swells. The outer
  // rings stretch to the horizon, so there is no second overlapping water sheet.
  const geometry=new THREE.PlaneGeometry(2,2,mobile?64:112,mobile?64:112);
  const positions=geometry.attributes.position;
  const stretch=n=>Math.sign(n)*(Math.abs(n)<=.85?Math.abs(n)*320:272+Math.pow((Math.abs(n)-.85)/.15,3)*8728);
  for(let i=0;i<positions.count;i++){positions.setXY(i,stretch(positions.getX(i)),stretch(positions.getY(i)));}
  geometry.computeBoundingSphere();
  const water=new Water(geometry,{
    textureWidth:mobile?256:512,textureHeight:mobile?256:512,
    waterNormals:riverNormals(),sunDirection:MOON_DIRECTION.clone(),
    sunColor:0x879bb0,waterColor:0x102928,distortionScale:1.8,fog:true,clipBias:.002
  });
  water.rotation.x=-Math.PI/2;water.position.y=.04;water.name='chao-phraya-water';
  const material=water.material;
  // Filter warped reflection samples across mip levels instead of shimmering
  // between single reflection texels as thin bridge lights move over ripples.
  const reflection=material.uniforms.mirrorSampler.value;
  reflection.generateMipmaps=true;reflection.minFilter=THREE.LinearMipmapLinearFilter;
  material.vertexShader=material.vertexShader.replace('uniform float time;','uniform float time;uniform vec3 eye;')
    .replace('worldPosition = mirrorCoord.xyzw;',`float distanceToBoat=length(mirrorCoord.xz-eye.xz);
      float swell=(sin(mirrorCoord.x*.47+mirrorCoord.z*.28+time*1.1)*.095+sin(mirrorCoord.z*.73-mirrorCoord.x*.22-time*1.42)*.038)*exp(-distanceToBoat*.004);
      mirrorCoord.y+=swell;worldPosition=mirrorCoord;`)
    .replace('modelViewMatrix * vec4( position, 1.0 )','viewMatrix * worldPosition');
  material.uniforms.riverLamps={value:Array.from({length:count},()=>new THREE.Vector4())};
  material.uniforms.riverColors={value:Array.from({length:count},()=>new THREE.Color(0))};
  material.fragmentShader=material.fragmentShader
    .replace('uniform sampler2D mirrorSampler;',`uniform sampler2D mirrorSampler;uniform vec4 riverLamps[${count}];uniform vec3 riverColors[${count}];`)
    .replace(/vec4 getNoise\( vec2 uv \) \{[\s\S]*?return noise \* 0\.5 - 1\.0;\s*\}/,`vec4 getNoise(vec2 uv){
      vec4 a=texture2D(normalSampler,uv/17.+vec2(time*.017,time*.008));
      vec4 b=texture2D(normalSampler,uv.yx/9.7+vec2(-time*.013,time*.010));
      vec4 c=texture2D(normalSampler,uv/3.1+vec2(time*.007,-time*.019));
      vec4 n=(a*.52+b*.32+c*.16)*2.-1.;
      n.xy+=vec2(cos(uv.x*.56+uv.y*.31+time*1.45),sin(uv.y*.8-uv.x*.24-time*1.7))*.07;
      return n;
    }`)
    .replace('noise.xzy * vec3( 1.5, 1.0, 1.5 )','noise.xzy * vec3( .58, 1.0, .58 )')
    .replace('100.0, 2.0, 0.5','160.0, 0.35, 0.08')
    .replace('float rf0 = 0.3;','float rf0 = 0.025;')
    .replace('max( dot( eyeDirection, surfaceNormal ), 0.0 )','clamp( dot( eyeDirection, surfaceNormal ), 0.0, 1.0 )')
    .replace('vec3( 0.1 ) + reflectionSample * 0.9 + reflectionSample * specularLight','reflectionSample * 0.82 + specularLight * .12')
    .replace('vec3 outgoingLight = albedo;',`vec3 outgoingLight=albedo;
      for(int i=0;i<${count};i++){
        vec3 delta=riverLamps[i].xyz-worldPosition.xyz;float range=length(delta);
        vec3 halfVector=normalize(delta/max(range,.1)+eyeDirection);
        float glitter=pow(max(dot(surfaceNormal,halfVector),0.),110.);
        float attenuation=riverLamps[i].w/(1.+range*range*.012);
        outgoingLight+=riverColors[i]*glitter*attenuation*.20;
      }
      float chop=pow(max(0.,noise.x*.5+noise.y*.5-.22),3.);
      outgoingLight+=vec3(.012,.021,.022)*chop;`);
  scene.add(water);
  return {water,update(time,camera,sources){
    material.uniforms.time.value=time;
    water.position.x=camera.position.x;water.position.z=camera.position.z;
    const nearest=sources.map(s=>({s,d:(s.x-camera.position.x)**2+(s.z-camera.position.z)**2})).sort((a,b)=>a.d-b.d).slice(0,count);
    for(let i=0;i<count;i++){const s=nearest[i]?.s;material.uniforms.riverLamps.value[i].set(s?.x||0,s?.y||0,s?.z||0,s?.power||0);material.uniforms.riverColors.value[i].set(s?.color||0);}
  }};
}
