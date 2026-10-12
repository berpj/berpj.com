import * as THREE from 'three';

export const DRONE_HOLD=11,DRONE_TRANSITION=12,DRONE_CUE=DRONE_HOLD+DRONE_TRANSITION;
const GOLD=0xffca68,WHITE=0xffedc9,PINK=0xff729d,TEAL=0x66dfd0;

function stroke(points,color=GOLD,smooth=false){
 const path=points.map(([x,y])=>new THREE.Vector3(x,y,0));
 const curve=smooth?new THREE.CatmullRomCurve3(path,false,'centripetal'):new THREE.CurvePath();
 if(!smooth)for(let i=1;i<path.length;i++)curve.add(new THREE.LineCurve3(path[i-1],path[i]));
 return {curve,color,length:curve.getLength()};
}
function ellipse(x,y,rx,ry,color){return stroke(Array.from({length:33},(_,i)=>[x+Math.cos(i/32*Math.PI*2)*rx,y+Math.sin(i/32*Math.PI*2)*ry]),color);}
function outline(name,strokes,count){
 const total=strokes.reduce((sum,s)=>sum+s.length,0),positions=new Float32Array(count*3),colors=new Float32Array(count*3);
 let index=0,remaining=count;
 strokes.forEach((s,j)=>{
  const n=j===strokes.length-1?remaining:Math.min(remaining-(strokes.length-j-1)*3,Math.max(3,Math.round(count*s.length/total)));
  const tint=new THREE.Color(s.color);
  for(let k=0;k<n;k++){
   const p=s.curve.getPointAt((k+.5)/n),i=index++;
   positions.set([p.x*130,p.y*130,0],i*3);colors.set(tint.toArray(),i*3);
  }
  remaining-=n;
 });
 return {name,positions,colors};
}

export function createDroneFormations(count=480){
 const columns=count===300?25:30,rows=Math.ceil(count/columns),positions=new Float32Array(count*3),colors=new Float32Array(count*3);
 for(let i=0;i<count;i++){
  const x=i%columns,y=Math.floor(i/columns),v=(y+.5)/rows;
  positions.set([(x/(columns-1)*2-1)*130,(.5-y/(rows-1))*173,Math.sin(x*.28)*3],i*3);
  const color=v<1/6||v>5/6?0xff364e:v<2/6||v>4/6?0xfff4e7:0x4877ff;
  colors.set(new THREE.Color(color).toArray(),i*3);
 }
 const flag={name:'Thai flag',positions,colors};
 const lotus=outline('Lotus',[
  stroke([[0,-.43],[-.24,-.1],[-.24,.27],[0,.75],[.24,.27],[.24,-.1],[0,-.43]],PINK,true),
  ...[-1,1].flatMap(s=>[
   stroke([[0,-.43],[s*.48,-.19],[s*.61,.43],[s*.22,.22],[0,-.43]],0xffb4cf,true),
   stroke([[0,-.43],[s*.64,-.30],[s*1.0,.20],[s*.57,.11],[s*.28,-.10]],PINK,true),
   stroke([[0,-.48],[s*.5,-.58],[s*.95,-.43],[s*.47,-.43],[0,-.48]],TEAL,true)
  ])
 ],count);
 const elephant=outline('Elephant',[
  stroke([[-.80,.1],[-.65,.4],[-.34,.51],[.05,.51],[.24,.46],[.41,.59],[.62,.52],[.73,.31],[.77,.08],[.77,-.20],[.88,-.28],[.97,-.20],[.96,-.08],[1.05,-.08],[1.06,-.27],[.92,-.40],[.70,-.35],[.64,-.18],[.60,.04],[.49,-.02],[.45,-.49],[.25,-.49],[.20,-.18],[-.1,-.21],[-.37,-.17],[-.41,-.49],[-.62,-.49],[-.69,-.18],[-.80,.1]],WHITE,true),
  ellipse(.37,.21,.16,.23,GOLD),ellipse(.59,.30,.026,.026,0xb7e8ff),
  stroke([[.56,.02],[.78,-.06],[.63,-.09]],WHITE,true),
  stroke([[-.72,.24],[-.93,.07],[-1,-.13]],GOLD,true),
  stroke([[-.32,.51],[-.32,.18],[-.13,.09],[.05,.18],[.05,.51]],GOLD),
 ],count);
 const temple=[stroke([[-.39,-.45],[-.39,-.32],[-.30,-.32],[-.30,-.17],[-.23,-.17],[-.23,.02],[-.16,.19],[-.13,.44],[-.08,.57],[-.05,.68],[0,.88],[.05,.68],[.08,.57],[.13,.44],[.16,.19],[.23,.02],[.23,-.17],[.30,-.17],[.30,-.32],[.39,-.32],[.39,-.45],[-.39,-.45]])];
 for(const [y,w]of[[-.32,.30],[-.17,.23],[.02,.23],[.19,.16],[.44,.13],[.57,.08]])temple.push(stroke([[-w,y],[w,y]],WHITE));
 for(const s of[-1,1])temple.push(stroke([[s*.48,-.45],[s*.48,-.23],[s*.55,-.23],[s*.57,-.04],[s*.65,.23],[s*.73,-.04],[s*.75,-.23],[s*.82,-.23],[s*.82,-.45],[s*.48,-.45]]));
 temple.push(stroke(Array.from({length:41},(_,i)=>{const x=i/20-1;return[x,-.60+Math.sin(x*10)*.035];}),TEAL));
 const watArun=outline('Wat Arun',temple,count);
 const longtail=outline('Long-tail boat',[
  stroke([[-1,-.08],[-.79,-.37],[.53,-.37],[.86,-.14],[1.0,.25],[1.03,.54],[.94,.48],[.80,-.04],[-1,-.08]],GOLD),
  stroke([[-.67,.01],[-.62,.34],[-.48,.40],[.35,.40],[.44,.31],[.48,.02]],0x69d9ff),
  ...[-.54,-.15,.32].map(x=>stroke([[x,.36],[x,-.05]],WHITE)),
  stroke([[-.86,.02],[-.84,.17],[-.67,.15],[-.65,.02]],PINK),
  stroke([[-.87,.07],[-1.14,-.30],[-1.19,-.30]],WHITE),
  ...[-.51,-.65].map(y=>stroke(Array.from({length:31},(_,i)=>{const x=i/15-1;return[x,y+Math.sin(x*9)*.035];}),TEAL))
 ],count);
 const formations=[flag,lotus,elephant,watArun,longtail];
 // Keep each drone near its previous position instead of randomly crisscrossing
 // the whole display. The last cue returns to the original indexed flag.
 for(let f=1;f<formations.length;f++){
  const previous=formations[f-1].positions,next=formations[f],used=new Uint8Array(count),p=new Float32Array(count*3),c=new Float32Array(count*3);
  for(let i=0;i<count;i++){
   let best=-1,distance=Infinity;
   for(let j=0;j<count;j++)if(!used[j]){const d=(previous[i*3]-next.positions[j*3])**2+(previous[i*3+1]-next.positions[j*3+1])**2;if(d<distance){distance=d;best=j;}}
   used[best]=1;p.set(next.positions.subarray(best*3,best*3+3),i*3);c.set(next.colors.subarray(best*3,best*3+3),i*3);
  }
  next.positions=p;next.colors=c;
 }
 return formations;
}

export function droneCue(time,total=5){
 const clock=Math.max(0,time),cue=Math.floor(clock/DRONE_CUE)%total,phase=clock%DRONE_CUE;
 return {cue,next:(cue+1)%total,blend:Math.max(0,(phase-DRONE_HOLD)/DRONE_TRANSITION)};
}

export function createDroneShow(scene,river,landmarks,mobile=false){
 const icon=landmarks.find(l=>l.kind==='icon-siam'),bank=river.sample(icon.distance),anchor=river.sample(icon.distance,icon.side*(bank.width/2+24));
 const formations=createDroneFormations(mobile?300:480),count=formations[0].positions.length/3;
 const geometry=new THREE.BufferGeometry();
 for(const [name,data]of[['position',formations[0].positions],['destination',formations[1].positions],['color',formations[0].colors],['destinationColor',formations[1].colors]])geometry.setAttribute(name,new THREE.BufferAttribute(new Float32Array(data),3).setUsage(THREE.DynamicDrawUsage));
 geometry.setAttribute('droneId',new THREE.Float32BufferAttribute(Array.from({length:count},(_,i)=>i),1));
 const material=new THREE.ShaderMaterial({transparent:true,depthWrite:false,depthTest:true,blending:THREE.AdditiveBlending,
  uniforms:{time:{value:0},blend:{value:0},viewportHeight:{value:720},pixelRatio:{value:1},fogDensity:{value:scene.fog?.density||0}},
  vertexShader:`attribute vec3 destination;attribute vec3 color;attribute vec3 destinationColor;attribute float droneId;
   uniform float time;uniform float blend;uniform float viewportHeight;uniform float pixelRatio;
   varying vec3 tint;varying float distanceToEye;
   void main(){
    float t=blend*blend*(3.-2.*blend),arc=sin(t*3.14159265);
    vec3 p=mix(position,destination,t);
    p.z+=arc*(mod(droneId,9.)-4.)*2.;p.y+=arc*(8.+mod(droneId,11.));
    p+=vec3(sin(time*.75+droneId),cos(time*.63+droneId*.73),sin(time*.51+droneId*.41))*.18;
    tint=mix(color,destinationColor,t)*(1.85-.35*arc);
    vec4 view=modelViewMatrix*vec4(p,1.);distanceToEye=length(view.xyz);
    gl_PointSize=clamp(viewportHeight*projectionMatrix[1][1]*1.3/max(1.,-view.z),2.6*pixelRatio,7.*pixelRatio);
    gl_Position=projectionMatrix*view;
   }`,
  fragmentShader:`uniform float fogDensity;varying vec3 tint;varying float distanceToEye;
   void main(){
    float r=length(gl_PointCoord-.5)*2.,aa=max(fwidth(r),.05);
    float core=1.-smoothstep(.30-aa,.62+aa,r),halo=pow(max(0.,1.-r),2.)*.20;
    float haze=exp(-fogDensity*fogDensity*distanceToEye*distanceToEye);
    gl_FragColor=vec4(tint,(core+halo)*haze);
    #include <tonemapping_fragment>
    #include <colorspace_fragment>
   }`
 });
 const points=new THREE.Points(geometry,material);points.name='iconsiam-drone-show';points.frustumCulled=false;
 points.position.set(anchor.x,205,anchor.z);points.rotation.y=Math.atan2(-bank.nx*icon.side,-bank.nz*icon.side);scene.add(points);
 const viewport=new THREE.Vector4();
 points.onBeforeRender=renderer=>{renderer.getCurrentViewport(viewport);material.uniforms.viewportHeight.value=viewport.w;material.uniforms.pixelRatio.value=Math.min(2,renderer.getPixelRatio());material.uniformsNeedUpdate=true;};
 let lastCue=0;
 return {points,formations,get currentName(){return formations[lastCue].name;},update(time){
  const {cue,next,blend}=droneCue(time,formations.length);
  if(cue!==lastCue){
   for(const [name,data]of[['position',formations[cue].positions],['destination',formations[next].positions],['color',formations[cue].colors],['destinationColor',formations[next].colors]]){geometry.attributes[name].array.set(data);geometry.attributes[name].needsUpdate=true;}
   lastCue=cue;
  }
  material.uniforms.time.value=time;material.uniforms.blend.value=blend;
 }};
}
