import {assetUrl} from './assetUrl.js';

// Stream the real performance instead of decoding 24 minutes into mobile memory.
export class ThaiRadio {
  constructor(context,output){
    this.media=new Audio(assetUrl('audio/thai-piphat-radio.mp3'));
    this.media.id='thai-radio';
    this.media.preload='none';
    this.media.loop=true;
    this.media.hidden=true;
    this.media.title='Piphat in Wat Khung Taphao · Tevaprapas · CC BY-SA 3.0';
    document.body.append(this.media);
    this.context=context;
    this.gain=context.createGain();
    this.gain.gain.value=0;
    this.source=context.createMediaElementSource(this.media);
    this.source.connect(this.gain).connect(output);
    this.active=false;
    this.attempt=0;
  }

  duck(duration){
    if(!this.active||this.media.paused)return;
    const t=this.context.currentTime,param=this.gain.gain;
    param.cancelScheduledValues(t);
    param.setTargetAtTime(.1,t,.025);
    param.setTargetAtTime(.38,t+duration+.04,.18);
  }

  setPlaying(active,retry=false){
    if(active===this.active&&!retry)return;
    this.active=active;
    const attempt=++this.attempt,t=this.context.currentTime;
    this.gain.gain.cancelScheduledValues(t);
    if(!active){
      this.gain.gain.setValueAtTime(0,t);
      this.media.pause();
      return;
    }
    this.gain.gain.setTargetAtTime(.38,t,.12);
    // Called during Start/Resume gestures too, for mobile autoplay policies.
    // Keep currentTime: pauses and new shifts must not replay the same intro.
    Promise.resolve(this.media.play()).catch(()=>{
      if(attempt!==this.attempt)return;
      this.gain.gain.setValueAtTime(0,this.context.currentTime);
      // A blocked/failed track leaves driving sounds working. Retry only on
      // the next user gesture or state change, never every physics frame.
    });
  }
}
