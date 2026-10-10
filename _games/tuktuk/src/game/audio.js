import {ThaiRadio} from './radio.js';
import {assetUrl} from './assetUrl.js';

export class GameAudio {
  constructor(){this.muted=false;this.music=true;this.context=null;this.radio=null;this.hornBuffer=null;this.hornVoice=null;this.nextHonk=0;}
  async start(){
    if(this.context){this.context.resume().catch(()=>{});this.radio.setPlaying(this.music,true);return;}
    const C=window.AudioContext||window.webkitAudioContext; if(!C)return;this.context=new C();const c=this.context;
    this.master=c.createGain();this.master.gain.value=this.muted?0:.28;this.master.connect(c.destination);
    this.engine=c.createOscillator();this.engine.type='sawtooth';this.filter=c.createBiquadFilter();this.filter.type='lowpass';this.filter.frequency.value=220;this.engineGain=c.createGain();this.engineGain.gain.value=.04;this.engine.connect(this.filter).connect(this.engineGain).connect(this.master);this.engine.start();
    const tireNoise=c.createBuffer(1,c.sampleRate*.5,c.sampleRate),samples=tireNoise.getChannelData(0);
    for(let i=0;i<samples.length;i++)samples[i]=Math.random()*2-1;
    this.tireSource=c.createBufferSource();this.tireSource.buffer=tireNoise;this.tireSource.loop=true;
    this.tireFilter=c.createBiquadFilter();this.tireFilter.type='bandpass';this.tireFilter.frequency.value=1500;this.tireFilter.Q.value=1.8;
    this.tireGain=c.createGain();this.tireGain.gain.value=0;
    this.tireSource.connect(this.tireFilter).connect(this.tireGain).connect(this.master);this.tireSource.start();
    this.radio=new ThaiRadio(c,this.master);
    // Small mono PCM sample decodes during the countdown, without blocking play.
    this.hornReady=fetch(assetUrl('audio/tuktuk-honk.wav'))
      .then(response=>{if(!response.ok)throw new Error('Horn unavailable');return response.arrayBuffer();})
      .then(bytes=>c.decodeAudioData(bytes))
      .then(buffer=>{this.hornBuffer=buffer;})
      .catch(()=>{});
    c.resume().catch(()=>{});
    this.radio.setPlaying(this.music,true);
  }
  setMuted(v){this.muted=v;if(v)this.stopHorn();if(this.master)this.master.gain.setTargetAtTime(v?0:.28,this.context.currentTime,.03);}
  tone(freq,duration=.12,type='sine',volume=.22,when=0){const c=this.context;if(!c)return;const o=c.createOscillator(),g=c.createGain();o.type=type;o.frequency.value=freq;const t=when||c.currentTime;g.gain.setValueAtTime(0,t);g.gain.linearRampToValueAtTime(volume,t+.008);g.gain.exponentialRampToValueAtTime(.001,t+duration);o.connect(g).connect(this.master);o.start(t);o.stop(t+duration+.03);}
  cue(type){const c=this.context;if(!c)return;if(type==='fare'){[523,659,784,1046].forEach((f,i)=>this.tone(f,.2,'triangle',.28,c.currentTime+i*.075));}else if(type==='dash'){this.tone(180,.23,'sawtooth',.15);this.tone(360,.15,'triangle',.15,c.currentTime+.05);}else if(type==='tip'){this.tone(880,.1,'triangle');this.tone(1175,.1,'triangle',.15,c.currentTime+.07);}else if(type==='crash')this.tone(60,.18,'sawtooth',.35);else if(type==='horn')this.honk();else if(type==='fail')this.tone(130,.4,'triangle',.22);}
  honk(){
    const c=this.context;if(!c||this.muted||c.currentTime<this.nextHonk)return;
    if(c.state==='suspended')c.resume().catch(()=>{});
    const t=c.currentTime;
    this.nextHonk=t+.1;
    if(!this.hornBuffer){this.fallbackHonk();this.nextHonk=t+.35;return;}
    this.stopHorn();
    const source=c.createBufferSource(),gain=c.createGain();
    source.buffer=this.hornBuffer;
    gain.gain.value=.85;
    source.connect(gain).connect(this.master);
    const voice={source,gain};this.hornVoice=voice;
    source.onended=()=>{source.disconnect();gain.disconnect();if(this.hornVoice===voice)this.hornVoice=null;};
    source.start(t);
    this.radio.duck(this.hornBuffer.duration);
  }
  stopHorn(){
    if(!this.hornVoice)return;
    const old=this.hornVoice,t=this.context.currentTime;
    this.hornVoice=null;
    old.gain.gain.cancelScheduledValues(t);
    old.gain.gain.setTargetAtTime(0,t,.003);
    old.source.stop(t+.015);
  }
  fallbackHonk(){
    const c=this.context;
    const t=c.currentTime,filter=c.createBiquadFilter(),gain=c.createGain();
    filter.type='lowpass';filter.frequency.value=1800;filter.Q.value=.5;
    // Keep H responsive if the recording cannot load; no queued late honks.
    gain.gain.setValueAtTime(0,t);
    gain.gain.linearRampToValueAtTime(.22,t+.012);
    gain.gain.setValueAtTime(.22,t+.27);
    gain.gain.linearRampToValueAtTime(0,t+.34);
    filter.connect(gain).connect(this.master);
    let remaining=2;
    for(const frequency of [392,493]){
      const oscillator=c.createOscillator();oscillator.type='square';
      oscillator.frequency.setValueAtTime(frequency*.97,t);
      oscillator.frequency.exponentialRampToValueAtTime(frequency,t+.025);
      oscillator.connect(filter);oscillator.start(t);oscillator.stop(t+.35);
      oscillator.onended=()=>{oscillator.disconnect();if(--remaining===0){filter.disconnect();gain.disconnect();}};
    }
  }
  impact(hit){
    const c=this.context;if(!c)return;
    const strength=Math.max(.05,hit.strength),duration=.09+strength*.22;
    const buffer=c.createBuffer(1,Math.ceil(c.sampleRate*duration),c.sampleRate),data=buffer.getChannelData(0);
    for(let i=0;i<data.length;i++)data[i]=(Math.random()*2-1)*Math.exp(-i/data.length*5);
    const source=c.createBufferSource(),filter=c.createBiquadFilter(),gain=c.createGain();
    source.buffer=buffer;filter.type='lowpass';filter.frequency.value=hit.type==='motorcycle'?3800:hit.type==='bus'?750:hit.type==='wall'?1200:2200;
    gain.gain.value=.18+strength*.5;source.connect(filter).connect(gain).connect(this.master);source.start();
    source.onended=()=>{source.disconnect();filter.disconnect();gain.disconnect();};
    this.tone(hit.profile.pitch,duration,'triangle',(.12+strength*.32)*hit.profile.resonance);
    if(hit.type==='car'||hit.type==='taxi')this.tone(530,.08,'square',.018*strength,c.currentTime+.025);
  }
  update(speed,throttle,active,drift=0){const c=this.context;if(!c)return;this.engine.frequency.setTargetAtTime(38+Math.abs(speed)*2.8+throttle*12,c.currentTime,.12);this.filter.frequency.setTargetAtTime(180+Math.abs(speed)*15,c.currentTime,.15);this.engineGain.gain.setTargetAtTime(active?.045:.007,c.currentTime,.1);
    this.tireGain.gain.setTargetAtTime(active?Math.min(1,drift)*.28:0,c.currentTime,.06);
    this.tireFilter.frequency.setTargetAtTime(1300+Math.abs(speed)*22,c.currentTime,.08);
    if(!active)this.stopHorn();
    this.radio.setPlaying(this.music&&active);
  }
}
