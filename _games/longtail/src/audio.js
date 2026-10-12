import {makeImpactNoise,playCrashImpact,playWarningHorn} from './sound-effects.js';
export class RiverAudio{
 constructor(){this.effects=new Set();this.warningEffects=new Set();this.generation=0;this.muted=false;this.musicEnabled=true;this.active=false;this.music=new Audio(`${import.meta.env.BASE_URL}audio/exit-the-premises.mp3`);this.music.loop=true;this.music.preload='none';this.music.volume=.32;this.lastHorn=-10;}
 async start(){
  this.stopEffects();this.active=true;const generation=++this.generation;
  try{if(!this.ctx){const C=window.AudioContext||window.webkitAudioContext;this.ctx=new C();const c=this.ctx;this.master=c.createGain();this.master.gain.value=.5;this.master.connect(c.destination);
   this.ambience=c.createGain();this.ambience.connect(this.master);
   this.musicSource=c.createMediaElementSource(this.music);this.musicGain=c.createGain();this.musicGain.gain.value=.64;this.music.volume=1;this.musicSource.connect(this.musicGain).connect(this.ambience);
   this.engine=c.createGain();this.engine.gain.value=0;const filter=c.createBiquadFilter();filter.type='lowpass';filter.frequency.value=1000;this.engine.connect(filter).connect(this.ambience);
   this.oscs=[1,2,3].map((n,i)=>{const o=c.createOscillator(),g=c.createGain();o.type=i===0?'sawtooth':'triangle';o.frequency.value=32*n;g.gain.value=[.12,.045,.025][i];o.connect(g).connect(this.engine);o.start();return o;});
   const buffer=c.createBuffer(1,c.sampleRate*2,c.sampleRate),data=buffer.getChannelData(0);let v=0;for(let i=0;i<data.length;i++){v=(v+Math.random()*.12-.06)*.97;data[i]=v;}this.noiseBuffer=buffer;this.impactBuffer=makeImpactNoise(c);
   const n=c.createBufferSource();n.buffer=buffer;n.loop=true;this.waterGain=c.createGain();this.waterGain.gain.value=0;const f=c.createBiquadFilter();f.type='highpass';f.frequency.value=280;n.connect(f).connect(this.waterGain).connect(this.ambience);n.start();
  }await this.ctx.resume();if(generation===this.generation&&this.active)this.sync();}catch{this.active=false;}
 }
 sync(){if(this.master){this.master.gain.cancelScheduledValues(this.ctx.currentTime);this.master.gain.setTargetAtTime(this.muted||!this.active?0:.5,this.ctx.currentTime,.06);}if(this.active&&!this.muted&&this.musicEnabled)this.music.play().catch(()=>{});else this.music.pause();}
 pause(tail=0){this.playerHornEffect?.stop();this.stopEffects(tail>0?this.warningEffects:this.effects);this.generation++;this.active=false;this.music.pause();if(this.ctx){const t=this.ctx.currentTime;this.engine.gain.setTargetAtTime(0,t,.02);this.waterGain.gain.setTargetAtTime(0,t,.02);this.master.gain.cancelScheduledValues(t);this.master.gain.setTargetAtTime(0,t+tail,.04);}}
 stopEffects(effects=this.effects){for(const effect of effects)effect.stop();effects.clear();}
 track(effect,warning=false){this.effects.add(effect);if(warning)this.warningEffects.add(effect);effect.done.then(()=>{this.effects.delete(effect);this.warningEffects.delete(effect);});}
 warningHorn(kind,options){if(!this.ctx||!this.active||this.muted)return;this.stopEffects(this.warningEffects);this.track(playWarningHorn(this.ctx,this.master,kind,options),true);}
 impact(fatal=true){if(!this.ctx||!this.active||this.muted)return;this.track(playCrashImpact(this.ctx,this.master,this.impactBuffer,{fatal}));}
 mute(){this.muted=!this.muted;this.sync();return this.muted;}
 musicToggle(){this.musicEnabled=!this.musicEnabled;this.sync();return this.musicEnabled;}
 update(speed,boost){if(!this.ctx||!this.active)return;const t=this.ctx.currentTime,rev=32+Math.abs(speed)*2.6+(boost?16:0);this.oscs.forEach((o,i)=>o.frequency.setTargetAtTime(rev*(i+1),t,.09));this.engine.gain.setTargetAtTime(.16+Math.min(Math.abs(speed)/45,1)*.27,t,.08);this.waterGain.gain.setTargetAtTime(.06+Math.min(Math.abs(speed),53)*.009,t,.1);}
 tone(freq,time=.15,volume=.14,type='sine',delay=0,end=freq){if(!this.ctx||this.muted||!this.active)return;const c=this.ctx,t=c.currentTime+delay,o=c.createOscillator(),g=c.createGain();o.type=type;o.frequency.setValueAtTime(freq,t);o.frequency.exponentialRampToValueAtTime(Math.max(20,end),t+time);g.gain.setValueAtTime(0,t);g.gain.linearRampToValueAtTime(volume,t+.014);g.gain.exponentialRampToValueAtTime(.0001,t+time);o.connect(g).connect(this.master);o.start(t);o.stop(t+time+.04);o.onended=()=>{o.disconnect();g.disconnect();};}
 horn(){if(!this.ctx||!this.active||this.muted||this.ctx.currentTime-this.lastHorn<.28)return;this.lastHorn=this.ctx.currentTime;this.playerHornEffect?.stop();const effect=playWarningHorn(this.ctx,this.master,'longtail',{distance:0});effect.output.gain.value*=.75;this.playerHornEffect=effect;this.track(effect);return effect;}
 event(kind){if(kind==='pickup'){this.tone(660,.12,.15);this.tone(880,.22,.15,'sine',.12);}else if(kind==='delivered'){[523,659,784,1046].forEach((f,i)=>this.tone(f,.3,.16,'triangle',i*.09));}else if(kind==='near'||kind==='slide'){this.tone(900,.14,.08,'triangle',0,1300);}else if(kind==='crash')this.impact();else this.tone(240,.35,.12,'triangle',0,140);}
}
