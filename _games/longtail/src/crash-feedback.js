export const CRASH_HOLD_MS=850;
export const BOAT_NAMES={patrol:'river patrol',cruise:'dinner cruise',ferry:'express ferry',electric:'electric ferry',longtail:'long-tail boat',fishing:'fishing boat',tug:'tugboat',barge:'cargo barge'};

export class CrashFeedback{
 constructor(root){
  this.root=root;this.timer=null;
  this.overlay=document.createElement('div');this.overlay.className='damage-overlay';this.overlay.hidden=true;this.overlay.setAttribute('aria-hidden','true');
  this.caption=document.createElement('div');this.caption.className='crash-caption';this.caption.hidden=true;this.caption.setAttribute('role','alert');
  const title=document.createElement('strong');title.textContent='CRASHED';this.detail=document.createElement('span');this.caption.append(title,this.detail);
  root.append(this.overlay,this.caption);
 }
 reset(){clearTimeout(this.timer);this.timer=null;this.overlay.hidden=true;this.caption.hidden=true;this.root.classList.remove('crashed');}
 impact({fatal=false,kind,intensity=1,onComplete}={}){
  this.reset();this.overlay.hidden=false;this.overlay.style.setProperty('--impact-opacity',String(Math.min(1,Math.max(.1,intensity))));
  this.overlay.className=`damage-overlay ${fatal?'fatal':'minor'}`;
  // Restart a second impact's CSS animation without introducing a render pass.
  this.overlay.getAnimations().forEach(animation=>{animation.cancel();animation.play();});
  if(fatal){
   this.root.classList.add('crashed');this.detail.textContent=`Collision: ${BOAT_NAMES[kind]||'boat'}`;this.caption.hidden=false;
   this.timer=setTimeout(()=>{this.caption.hidden=true;this.timer=null;onComplete?.();},CRASH_HOLD_MS);
  }else this.timer=setTimeout(()=>{this.overlay.hidden=true;this.timer=null;},900);
 }
}
