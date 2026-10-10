export class Controls {
  constructor(onPause,onHorn,onRecover) {
    this.keys=new Set();this.edges=new Set();this.touch={steer:0,gas:false,brake:false,drift:false,dash:false};this.gear=1;this.enabled=false;this.onPause=onPause;this.onHorn=onHorn;this.onRecover=onRecover;this.steering=0;this.gamepadPrevious={};this.pausePressed=false;this.autoThrottle=matchMedia('(pointer: coarse)').matches;
    window.addEventListener('keydown',e=>{
      if(e.target instanceof HTMLInputElement||e.target instanceof HTMLSelectElement)return;
      if(['ArrowUp','ArrowDown','ArrowLeft','ArrowRight','Space','Tab'].includes(e.code)&&this.enabled)e.preventDefault();
      if(!this.keys.has(e.code))this.edges.add(e.code);this.keys.add(e.code);
      if(!e.repeat){if(e.code==='Escape')onPause();if(e.code==='KeyH')onHorn();if(e.code==='KeyR')onRecover();if(e.code==='KeyQ')this.gear=-1;if(e.code==='KeyE')this.gear=1;}
    });
    window.addEventListener('keyup',e=>this.keys.delete(e.code));
    window.addEventListener('blur',()=>this.clear());window.addEventListener('gamepaddisconnected',()=>onPause(true));
  }
  clear(){this.keys.clear();this.edges.clear();this.touch={steer:0,gas:false,brake:false,drift:false,dash:false};this.steering=0;this.root?.querySelectorAll('.held').forEach(b=>b.classList.remove('held'));this.root?.querySelector('#steering-pad')?.style.setProperty('--steer','0px');}
  pollPause(){const p=navigator.getGamepads?.()?.find(p=>p?.connected);const down=!!p?.buttons[9]?.pressed;if(down&&!this.pausePressed)this.onPause();this.pausePressed=down;}
  bindTouch(root){
    this.root=root;
    const pad=root.querySelector('#steering-pad');let pointer=null;
    const move=e=>{const r=pad.getBoundingClientRect();this.touch.steer=Math.max(-1,Math.min(1,((e.clientX-r.left)/r.width-.5)*2.4));pad.style.setProperty('--steer',`${this.touch.steer*40}px`);};
    pad.addEventListener('pointerdown',e=>{pointer=e.pointerId;pad.setPointerCapture(pointer);move(e);});
    pad.addEventListener('pointermove',e=>{if(e.pointerId===pointer)move(e);});
    const release=()=>{pointer=null;this.touch.steer=0;pad.style.setProperty('--steer','0px');};pad.addEventListener('pointerup',release);pad.addEventListener('pointercancel',release);
    for(const button of root.querySelectorAll('[data-touch]')){
      const action=button.dataset.touch;button.addEventListener('pointerdown',e=>{e.preventDefault();button.setPointerCapture(e.pointerId);button.classList.add('held');this.touch[action]=true;});
      const end=()=>{button.classList.remove('held');this.touch[action]=false;};button.addEventListener('pointerup',end);button.addEventListener('pointercancel',end);button.addEventListener('lostpointercapture',end);
    }
  }
  poll(dt){
    const k=this.keys;let steer=(k.has('KeyD')||k.has('ArrowRight')?1:0)-(k.has('KeyA')||k.has('ArrowLeft')?1:0);if(this.touch.steer)steer=this.touch.steer;
    let gas=k.has('KeyW')||k.has('ArrowUp')||this.touch.gas;let brake=k.has('KeyS')||k.has('ArrowDown')||this.touch.brake;let drift=k.has('Space')||this.touch.drift;
    let dash=k.has('ShiftLeft')||k.has('ShiftRight')||this.touch.dash;let driveEdge=this.edges.has('KeyE'),reverseEdge=this.edges.has('KeyQ');
    const p=navigator.getGamepads?.()?.find(p=>p?.connected);
    if(p){steer=Math.abs(p.axes[0])>.12?p.axes[0]:steer;gas=gas||p.buttons[7]?.value>.12;brake=brake||p.buttons[6]?.value>.12;drift=drift||p.buttons[5]?.pressed;
      const pressed=i=>p.buttons[i]?.pressed&&!this.gamepadPrevious[i];dash=dash||!!p.buttons[2]?.pressed;if(pressed(0)){this.gear=-1;reverseEdge=true;}if(pressed(1)){this.gear=1;driveEdge=true;}if(pressed(3))this.onHorn();this.gamepadPrevious=Object.fromEntries(p.buttons.map((b,i)=>[i,b.pressed]));}
    this.steering+=(steer-this.steering)*Math.min(1,dt*12);const throttle=gas||this.autoThrottle&&!brake;this.edges.clear();
    return {steer:this.steering,throttle:throttle?1:0,brake:brake?1:0,drift,dash,gear:this.gear,driveEdge,reverseEdge,lookBack:k.has('KeyC'),auto:this.autoThrottle};
  }
}
