import * as THREE from 'three';

export const FACADE_PROFILES=Object.freeze({
 condo:{occupied:.16,bayWidth:5.4,floorHeight:3.45,windowWidth:.88,windowHeight:.81,glow:.72},
 hotel:{occupied:.31,bayWidth:4.25,floorHeight:3.55,windowWidth:.82,windowHeight:.78,glow:.82},
 city:{occupied:.22,bayWidth:4.7,floorHeight:3.6,windowWidth:.82,windowHeight:.76,glow:.68},
 commercial:{occupied:.44,bayWidth:5.5,floorHeight:4.0,windowWidth:.90,windowHeight:.84,glow:.82},
});
export const facadeHash=n=>{const v=Math.sin(n*127.1+311.7)*43758.5453;return v-Math.floor(v);};
const seedOf=key=>[...key].reduce((n,c)=>((n*31+c.charCodeAt(0))>>>0),17)%100003;
const cache=new Map();

// One cell is an apartment/room with broad glazing, not a luminous pixel.
// Empty floors and partly drawn curtains break up the repeated grid.
export function facadeLayout({columns=12,rows=24,style='condo',seed=1}={}){
 const profile=FACADE_PROFILES[style],rooms=[];
 for(let row=0;row<rows;row++)for(let col=0;col<columns;col++){
  const id=seed+row*137+col*61,quietFloor=style==='condo'&&facadeHash(seed+row*41+3001)<.12;
  const lit=!quietFloor&&facadeHash(id)<profile.occupied;
  rooms.push({row,col,lit,level:lit?.35+facadeHash(id+89)*.42:0,curtain:facadeHash(id+37),tone:Math.floor(facadeHash(id+73)*4),
   x:(col+(1-profile.windowWidth)/2)/columns,y:(row+.07)/rows,w:profile.windowWidth/columns,h:profile.windowHeight/rows});
 }
 return rooms;
}

export function facadeMaterial(key,{columns=12,rows=24,style='condo',stone='#7d898d',glass='#182b35',width=512,height=1024}={}){
 if(cache.has(key))return cache.get(key);
 const profile=FACADE_PROFILES[style],rooms=facadeLayout({columns,rows,style,seed:seedOf(key)});
 let map=null,emissiveMap=null;
 if(typeof document!=='undefined'){
  const diffuse=document.createElement('canvas'),emission=document.createElement('canvas');
  diffuse.width=emission.width=width;diffuse.height=emission.height=height;
  const c=diffuse.getContext('2d'),e=emission.getContext('2d');
  c.fillStyle=stone;c.fillRect(0,0,width,height);e.fillStyle='#000';e.fillRect(0,0,width,height);
  const cw=width/columns,rh=height/rows;
  for(const room of rooms){
   const x=room.x*width,y=room.y*height,w=room.w*width,h=room.h*height;
   // Deep reveals, subtly reflective unlit panes and a concrete sill.
   c.fillStyle='#0b141b';c.fillRect(x-1,y-1,w+2,h+2);
   const reflection=c.createLinearGradient(x,y,x+w*.7,y+h);reflection.addColorStop(0,glass);reflection.addColorStop(.55,'#24363e');reflection.addColorStop(1,'#101c25');
   c.fillStyle=reflection;c.fillRect(x,y,w,h);
   c.fillStyle='rgba(7,14,20,.38)';c.fillRect(x,y,w,h*.11);c.fillRect(x,y,Math.max(1,w*.05),h);
   const curtainWidth=w*(.09+room.curtain*.34),curtainOnLeft=room.curtain>.5;
   c.fillStyle=room.curtain>.76?'#46504e':'#2d383b';c.fillRect(curtainOnLeft?x:x+w-curtainWidth,y+1,curtainWidth,h-2);
   if(room.lit){
    const light=e.createLinearGradient(x,y,x,y+h);light.addColorStop(0,['#c2a47a','#d4b88c','#a9b7b3','#b99069'][room.tone]);light.addColorStop(1,'#574936');
    e.globalAlpha=room.level;e.fillStyle=light;e.fillRect(x,y,w,h);e.globalAlpha=1;
    e.fillStyle='#191b18';e.fillRect(curtainOnLeft?x:x+w-curtainWidth,y,curtainWidth,h);
    // An interior ceiling and a low furniture silhouette stay behind the glass.
    e.fillStyle='#090c0e';e.fillRect(x,y,w,h*.08);e.fillRect(x+w*.12,y+h*.78,w*.38,h*.22);
   }
   for(const ctx of[c,e]){ctx.fillStyle=ctx===c?'#697577':'#000';ctx.fillRect(x+w*.5,y,Math.max(1,cw*.022),h);ctx.fillRect(x,y+h*.98,w,Math.max(1,rh*.025));}
   c.fillStyle='rgba(215,217,201,.18)';c.fillRect(room.col*cw,(room.row+.94)*rh,cw,Math.max(1,rh*.035));
   c.fillStyle='rgba(6,13,19,.32)';c.fillRect(room.col*cw,(room.row+.98)*rh,cw,Math.max(1,rh*.025));
   if(style==='city'){
    c.fillStyle='rgba(9,17,19,.14)';c.fillRect(x+w*.83,y+h+2,w*.11,rh*.11);
    if(room.curtain>.64){c.fillStyle='#667171';c.fillRect(x+w*.62,y+h*.87,w*.27,h*.18);c.fillStyle='#28363a';c.fillRect(x+w*.67,y+h*.90,w*.18,h*.09);}
   }
  }
  map=new THREE.CanvasTexture(diffuse);emissiveMap=new THREE.CanvasTexture(emission);
  for(const t of[map,emissiveMap]){t.colorSpace=THREE.SRGBColorSpace;t.wrapS=t.wrapT=THREE.RepeatWrapping;t.anisotropy=4;}
 }
 const m=new THREE.MeshStandardMaterial({color:0xd3d9d9,map,emissiveMap,emissive:emissiveMap?0xfff3dd:0,emissiveIntensity:profile.glow,roughness:style==='city'?.77:.48,metalness:style==='city'?.08:.22});
 m.name='facade:'+key;m.userData.facade={style,columns,rows,lit:rooms.filter(r=>r.lit).length,total:rooms.length,...profile};cache.set(key,m);return m;
}
