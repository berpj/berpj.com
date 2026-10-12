import {clamp} from './river.mjs';

// Adjust pixel density, not the simulation or fleet, when a GPU cannot sustain
// smooth motion. Several seconds of evidence and a slow recovery avoid pumping.
export class RenderBudget {
  constructor(deviceRatio=1,mobile=false){
    this.maximum=Math.min(deviceRatio,mobile?1.75:1.5);
    // Keep the foreground above CSS resolution on high-density phones. The
    // previous .8x floor blurred the whole river, even the player's own boat.
    this.minimum=Math.min(this.maximum,mobile?1.25:1);
    this.ratio=this.maximum;this.warmup=4;this.elapsed=0;this.frames=0;this.fastTime=0;
  }
  update(dt){
    if(!Number.isFinite(dt)||dt<=0||dt>.12){this.elapsed=0;this.frames=0;return null;}
    if(this.warmup>0){this.warmup-=dt;return null;}
    this.elapsed+=dt;this.frames++;
    if(this.elapsed<3)return null;
    const fps=this.frames/this.elapsed,old=this.ratio;
    if(fps<50){this.ratio=clamp(this.ratio-.15,this.minimum,this.maximum);this.fastTime=0;}
    else if(fps>58){this.fastTime+=this.elapsed;if(this.fastTime>15){this.ratio=Math.min(this.maximum,this.ratio+.05);this.fastTime=0;}}
    else this.fastTime=0;
    this.elapsed=0;this.frames=0;
    return Math.abs(this.ratio-old)>.001?this.ratio:null;
  }
}
