export class GameAudio {
  constructor(){this.muted=false;this.music=true;this.context=null;this.nextBeat=0;this.beat=0;}
  async start(){
    if(this.context){await this.context.resume();return;}
    const C=window.AudioContext||window.webkitAudioContext; if(!C)return;this.context=new C();const c=this.context;
    this.master=c.createGain();this.master.gain.value=.28;this.master.connect(c.destination);
    this.engine=c.createOscillator();this.engine.type='sawtooth';this.filter=c.createBiquadFilter();this.filter.type='lowpass';this.filter.frequency.value=220;this.engineGain=c.createGain();this.engineGain.gain.value=.04;this.engine.connect(this.filter).connect(this.engineGain).connect(this.master);this.engine.start();
    this.nextBeat=c.currentTime+.1;
  }
  setMuted(v){this.muted=v;if(this.master)this.master.gain.setTargetAtTime(v?0:.28,this.context.currentTime,.03);}
  tone(freq,duration=.12,type='sine',volume=.22,when=0){const c=this.context;if(!c)return;const o=c.createOscillator(),g=c.createGain();o.type=type;o.frequency.value=freq;const t=when||c.currentTime;g.gain.setValueAtTime(0,t);g.gain.linearRampToValueAtTime(volume,t+.008);g.gain.exponentialRampToValueAtTime(.001,t+duration);o.connect(g).connect(this.master);o.start(t);o.stop(t+duration+.03);}
  cue(type){const c=this.context;if(!c)return;if(type==='fare'){[523,659,784,1046].forEach((f,i)=>this.tone(f,.2,'triangle',.28,c.currentTime+i*.075));}else if(type==='dash'){this.tone(180,.23,'sawtooth',.15);this.tone(360,.15,'triangle',.15,c.currentTime+.05);}else if(type==='tip'){this.tone(880,.1,'triangle');this.tone(1175,.1,'triangle',.15,c.currentTime+.07);}else if(type==='crash')this.tone(60,.18,'sawtooth',.35);else if(type==='horn'){this.tone(392,.22,'square',.07);this.tone(493,.22,'square',.07);}else if(type==='fail')this.tone(130,.4,'triangle',.22);}
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
  update(speed,throttle,active){const c=this.context;if(!c)return;this.engine.frequency.setTargetAtTime(38+Math.abs(speed)*2.8+throttle*12,c.currentTime,.12);this.filter.frequency.setTargetAtTime(180+Math.abs(speed)*15,c.currentTime,.15);this.engineGain.gain.setTargetAtTime(active?.045:.007,c.currentTime,.1);
    if(!this.music||!active){this.nextBeat=c.currentTime+.1;return;}
    while(this.nextBeat<c.currentTime+.1){const beat=this.beat++,t=this.nextBeat;this.nextBeat+=60/164/2;
      if(beat%2===0)this.tone(beat%8===4?92:55,.1,'sine',.3,t);
      if(beat%4===2)this.tone(180,.055,'triangle',.1,t);
      const notes=[164.81,164.81,196,220,164.81,246.94,220,196,130.81,164.81,196,220,146.83,196,220,246.94];this.tone(notes[beat%16],.13,'triangle',.09,t);
      if(beat%2)this.tone(2100,.025,'square',.008,t);
    }
  }
}
