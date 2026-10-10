export class Controls{
 constructor({pause,horn,recover}){
  this.keys=new Set();this.touch={steer:0,gas:false,brake:false,boost:false,drift:false};this.enabled=false;this.previousPad={};
  window.addEventListener('keydown',e=>{if(['INPUT','SELECT','BUTTON'].includes(e.target.tagName)&&e.code==='Space')return;if(['ArrowUp','ArrowDown','ArrowLeft','ArrowRight','Space'].includes(e.code))e.preventDefault();this.keys.add(e.code);if(!e.repeat){if(e.code==='Escape')pause();if(e.code==='KeyH'&&this.enabled)horn();if(e.code==='KeyR'&&this.enabled)recover();}});
  window.addEventListener('keyup',e=>this.keys.delete(e.code));window.addEventListener('blur',()=>{this.clear();pause(true);});document.addEventListener('visibilitychange',()=>{if(document.hidden){this.clear();pause(true);}});
  this.pause=pause;this.horn=horn;this.recover=recover;
 }
 clear(){this.keys.clear();this.touch={steer:0,gas:false,brake:false,boost:false,drift:false};document.querySelectorAll('.pressed').forEach(b=>b.classList.remove('pressed'));document.querySelector('#steer-pad')?.style.setProperty('--thumb','0px');}
 bind(){for(const b of document.querySelectorAll('[data-control]')){const action=b.dataset.control;b.addEventListener('pointerdown',e=>{e.preventDefault();b.setPointerCapture(e.pointerId);this.touch[action]=true;b.classList.add('pressed');});const up=()=>{this.touch[action]=false;b.classList.remove('pressed');};b.addEventListener('pointerup',up);b.addEventListener('pointercancel',up);b.addEventListener('lostpointercapture',up);}
  const pad=document.querySelector('#steer-pad');let id=null;const move=e=>{const b=pad.getBoundingClientRect();this.touch.steer=Math.max(-1,Math.min(1,(e.clientX-b.left-b.width/2)/(b.width*.36)));pad.style.setProperty('--thumb',`${this.touch.steer*30}px`);};pad.addEventListener('pointerdown',e=>{id=e.pointerId;pad.setPointerCapture(id);move(e);});pad.addEventListener('pointermove',e=>{if(id===e.pointerId)move(e);});const release=()=>{id=null;this.touch.steer=0;pad.style.setProperty('--thumb','0px');};pad.addEventListener('pointerup',release);pad.addEventListener('pointercancel',release);pad.addEventListener('lostpointercapture',release);
 }
 read(){const k=this.keys,t=this.touch,p=navigator.getGamepads?.()?.find(p=>p?.connected);let steer=(k.has('KeyD')||k.has('ArrowRight')?1:0)-(k.has('KeyA')||k.has('ArrowLeft')?1:0);if(t.steer)steer=t.steer;
 let gas=k.has('KeyW')||k.has('ArrowUp')||t.gas||t.boost||t.drift,brake=k.has('KeyS')||k.has('ArrowDown')||t.brake,boost=k.has('ShiftLeft')||k.has('ShiftRight')||t.boost,drift=k.has('Space')||t.drift;
 if(p){if(Math.abs(p.axes[0])>.12)steer=p.axes[0];gas=gas||p.buttons[7]?.value>.1;brake=brake||p.buttons[6]?.value>.1;boost=boost||p.buttons[0]?.pressed;drift=drift||p.buttons[1]?.pressed;for(const [i,fn]of [[9,this.pause],[3,this.horn],[2,this.recover]])if(p.buttons[i]?.pressed&&!this.previousPad[i])fn();this.previousPad=Object.fromEntries(p.buttons.map((b,i)=>[i,b.pressed]));}
 return this.enabled?{steer,gas,brake,boost,drift}:{};
 }
}
