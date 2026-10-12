// Original synthesised effects. Buses are short-lived and fully disconnected
// on pause/retry so a warning from the previous run cannot bleed into the next.
function voiceGroup(context,destination,pan=0){
 const output=context.createGain(),panner=context.createStereoPanner();panner.pan.value=Math.max(-1,Math.min(1,pan));
 output.connect(panner).connect(destination);
 const sources=[],nodes=[output,panner];let finish;
 const done=new Promise(resolve=>{finish=resolve;});let pending=0,finished=false;
 function cleanup(){if(finished)return;finished=true;nodes.forEach(n=>n.disconnect());finish();}
 return {output,nodes,sources,done,add(source){sources.push(source);pending++;source.onended=()=>{source.disconnect();if(--pending===0)cleanup();};},stop(){for(const s of sources){try{s.stop();}catch{}}cleanup();}};
}
function envelope(context,time,duration,volume,attack=.025){
 const gain=context.createGain();gain.gain.setValueAtTime(0,time);gain.gain.linearRampToValueAtTime(volume,time+attack);
 gain.gain.setTargetAtTime(.0001,time+attack,(duration-attack)/5);gain.gain.setValueAtTime(0,time+duration);return gain;
}

export function playWarningHorn(context,destination,kind,{pan=0,distance=40}={}){
 const profiles={cruise:[104,.82],tug:[92,.88],barge:[92,.88],ferry:[174,.62],electric:[208,.55],longtail:[318,.4],fishing:[380,.32]};
 const [frequency,duration]=profiles[kind]||profiles.ferry,voice=voiceGroup(context,destination,pan),t=context.currentTime;
 voice.output.gain.value=.66/(1+Math.max(0,distance-20)/210);
 const filter=context.createBiquadFilter();filter.type='lowpass';filter.frequency.value=1500;filter.Q.value=.5;filter.connect(voice.output);voice.nodes.push(filter);
 // Two reeds and a breathy upper partial give large vessels a foghorn and
 // smaller boats a sharper double toot. Keep peaks below the master headroom.
 const pulses=kind==='longtail'||kind==='fishing'||kind==='electric'?[0,.23]:[0];
 for(const delay of pulses)for(const [ratio,level,type]of [[1,.34,'sawtooth'],[1.255,.2,'triangle'],[2,.07,'sine']]){
  const o=context.createOscillator(),g=envelope(context,t+delay,duration,level,.04);
  o.type=type;o.frequency.setValueAtTime(frequency*ratio*.94,t+delay);o.frequency.exponentialRampToValueAtTime(frequency*ratio,t+delay+.07);
  o.connect(g).connect(filter);voice.nodes.push(g);voice.add(o);o.start(t+delay);o.stop(t+delay+duration+.02);
 }
 return voice;
}

export function makeImpactNoise(context){
 const buffer=context.createBuffer(1,Math.ceil(context.sampleRate*1.3),context.sampleRate),data=buffer.getChannelData(0);
 for(let i=0;i<data.length;i++)data[i]=Math.random()*2-1;
 return buffer;
}

export function playCrashImpact(context,destination,buffer,{fatal=true}={}){
 const voice=voiceGroup(context,destination),t=context.currentTime;voice.output.gain.value=fatal?.9:.55;
 // Wooden crack, heavy hull thud, then water washing over the bow.
 for(const [delay,duration,frequency,volume,type]of [[0,.2,1050,.55,'bandpass'],[.025,.48,200,.8,'lowpass'],[.07,1.05,1600,.35,'lowpass']]){
  const source=context.createBufferSource(),filter=context.createBiquadFilter(),g=envelope(context,t+delay,duration,volume,.007);
  source.buffer=buffer;filter.type=type;filter.frequency.setValueAtTime(frequency,t+delay);filter.frequency.exponentialRampToValueAtTime(Math.max(80,frequency*.23),t+delay+duration);filter.Q.value=.7;
  source.connect(filter).connect(g).connect(voice.output);voice.nodes.push(filter,g);voice.add(source);source.start(t+delay);source.stop(t+delay+duration+.02);
 }
 const o=context.createOscillator(),g=envelope(context,t,.55,.55,.008);o.type='sine';o.frequency.setValueAtTime(112,t);o.frequency.exponentialRampToValueAtTime(34,t+.5);o.connect(g).connect(voice.output);voice.nodes.push(g);voice.add(o);o.start(t);o.stop(t+.58);
 return voice;
}
