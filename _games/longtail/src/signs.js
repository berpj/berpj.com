import * as THREE from 'three';

export const bridgeNames=Object.freeze({
 memorial:{thai:'สะพานพระพุทธยอดฟ้า',english:'MEMORIAL BRIDGE'},
 pokklao:{thai:'สะพานพระปกเกล้า',english:'PHRA POK KLAO BRIDGE'},
 taksin:{thai:'สะพานสมเด็จพระเจ้าตากสินมหาราช',english:'KING TAKSIN BRIDGE'},
 skypark:{thai:'สวนลอยฟ้าเจ้าพระยา',english:'CHAO PHRAYA SKY PARK'},
});

// Thai-first enamel plates. Physical framing, restrained emission and a smaller
// English line keep these part of the architecture instead of floating HUD labels.
export function placeNameSign(thai,english,width=30,height=3.4,{pier=false}={}){
 const canvas=document.createElement('canvas');canvas.width=1536;canvas.height=Math.round(1536*height/width);
 const ctx=canvas.getContext('2d'),w=canvas.width,h=canvas.height;
 ctx.fillStyle=pier?'#174f58':'#193d59';ctx.fillRect(0,0,w,h);
 ctx.strokeStyle='#e6e0c9';ctx.lineWidth=2;ctx.strokeRect(9,9,w-18,h-18);
 ctx.fillStyle='#f2eddb';ctx.textAlign='center';ctx.textBaseline='middle';
 let fontSize=h*.46;ctx.font=`600 ${fontSize}px "Noto Sans Thai",sans-serif`;
 while(ctx.measureText(thai).width>w-80&&fontSize>h*.24){fontSize-=1;ctx.font=`600 ${fontSize}px "Noto Sans Thai",sans-serif`;}
 ctx.fillText(thai,w/2,h*.39);
 ctx.font=`500 ${h*.20}px Barlow,Arial,sans-serif`;ctx.fillStyle='#c5cfd0';ctx.fillText(english,w/2,h*.79,w-80);
 const map=new THREE.CanvasTexture(canvas);map.colorSpace=THREE.SRGBColorSpace;map.anisotropy=8;
 const group=new THREE.Group();group.name=`sign:${thai}`;
 const plate=new THREE.Mesh(new THREE.BoxGeometry(width+.24,height+.2,.2),new THREE.MeshStandardMaterial({color:0x536268,roughness:.7}));group.add(plate);
 const face=new THREE.Mesh(new THREE.PlaneGeometry(width,height),new THREE.MeshStandardMaterial({map,emissiveMap:map,emissive:0xdde7ed,emissiveIntensity:.55,roughness:.78}));face.position.z=.115;group.add(face);
 return group;
}
