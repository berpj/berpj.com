import {makeImpactNoise,playCrashImpact,playWarningHorn,duckForWarning} from '../src/sound-effects.js';

export function installFeedbackControls({approach,audio,crashFeedback}){
 const panel=document.createElement('aside');panel.style.cssText='position:fixed;left:8px;bottom:8px;z-index:20;max-width:370px;background:#07111eec;color:white;padding:8px;font:12px system-ui;border:1px solid #fff5';
 const status=document.createElement('output');status.style.cssText='display:block;max-height:180px;overflow:auto;white-space:pre-wrap';
 let firstHorn=null;
 function report(message){status.textContent+=message+'\n';}
 function begin(kind,boost=false){firstHorn=null;approach(kind,boost);}
 function button(name,fn){const b=document.createElement('button');b.textContent=name;b.style.cssText='padding:5px;background:#24384a;color:white;border:1px solid #fff4;margin:3px';b.onclick=fn;panel.append(b);}
 for(const kind of ['ferry','cruise','longtail'])button(`Approach ${kind}`,()=>{status.textContent='Approaching '+kind+'\n';begin(kind);});
 button('Boost toward ferry',()=>{status.textContent='Boosting toward ferry\n';begin('ferry',true);});
 button('Audio checks',async()=>{status.textContent='';try{report(await checkAudio());}catch(e){report('FAIL '+e.message);throw e;}});
 button('Warning mix check',async()=>{status.textContent='';try{report(await checkMix());}catch(e){report('FAIL '+e.message);throw e;}});
 button('Audio lifecycle',async()=>{
  const music=audio.musicEnabled;audio.musicEnabled=false;audio.muted=true;
  try{
   await audio.start();audio.warningHorn('ferry',{});audio.impact();
   if(audio.effects.size)throw Error('muted effects were created');report('PASS mute suppresses warning and impact voices');
   audio.muted=false;audio.sync();audio.warningHorn('ferry',{});audio.impact();audio.pause(1.2);await Promise.resolve();
   if(audio.warningEffects.size||audio.effects.size!==1)throw Error('crash tail or horn cancellation incorrect');report('PASS crash keeps impact tail and stops horns');
   await audio.start();if(audio.effects.size||audio.ambience.gain.value!==1)throw Error('retry retained impact voices or ducking');report('PASS retry clears the crash tail and restores ambience');
   audio.warningHorn('tug',{});audio.pause();await Promise.resolve();if(audio.effects.size||audio.warningEffects.size||audio.ambience.gain.value!==1)throw Error('pause retained warning voices or ducking');report('PASS pause cleans up all voices and ducking');
  }catch(e){report('FAIL '+e.message);throw e;}finally{audio.pause();audio.musicEnabled=music;audio.muted=false;}
 });
 button('Capture impact',()=>{panel.hidden=true;begin('cruise');});
 button('Capture warning',()=>{panel.querySelectorAll('button').forEach(b=>b.hidden=true);status.textContent='Full-boost warning test\n';begin('ferry',true);});
 button('Reset feedback',()=>crashFeedback.reset());
 panel.append(status);document.body.append(panel);
 const horn=audio.warningHorn.bind(audio);audio.warningHorn=(kind,warning)=>{firstHorn??=performance.now();report(`Warning: ${kind}, ${(warning.time??0).toFixed(2)} s before predicted contact, pan ${(warning.pan??0).toFixed(2)}`);horn(kind,warning);};
 const impact=audio.impact.bind(audio);audio.impact=fatal=>{report(`Impact: ${fatal===false?'bank':'fatal'}${firstHorn===null?'':`, ${((performance.now()-firstHorn)/1000).toFixed(2)} s after first horn`}`);firstHorn=null;impact(fatal);};
 new MutationObserver(()=>{if(document.querySelector('#results').hidden===false)report('Results: '+document.querySelector('#result-title').textContent);}).observe(document.querySelector('#results'),{attributes:true,attributeFilter:['hidden']});
 report('Ready. Approaches run real traffic, physics, warning audio and end-of-run UI.');
}

async function checkAudio(){
 const rows=[];
 for(const kind of ['cruise','tug','ferry','electric','longtail','fishing','crash','cancelled']){
  const ctx=new OfflineAudioContext(2,48000*2,48000),master=ctx.createGain();master.gain.value=.5;master.connect(ctx.destination);
  const voice=kind==='crash'?playCrashImpact(ctx,master,makeImpactNoise(ctx)):playWarningHorn(ctx,master,kind==='cancelled'?'ferry':kind,{pan:.7,distance:300});
  if(kind==='cancelled')voice.stop();
  const buffer=await ctx.startRendering(),channels=[buffer.getChannelData(0),buffer.getChannelData(1)],energy=[0,0];let peak=0,tail=0;
  for(let c=0;c<2;c++)for(let i=0;i<channels[c].length;i++){
   const sample=channels[c][i];if(!Number.isFinite(sample))throw Error(kind+' nonfinite audio');
   peak=Math.max(peak,Math.abs(sample));energy[c]+=sample*sample;if(i>48000*1.4)tail=Math.max(tail,Math.abs(sample));
  }
  if(peak>=.95||tail>1e-6)throw Error(kind+' clips or does not end');
  if(kind==='cancelled'){if(peak!==0)throw Error('cancelled warning remains audible');}
  else{if(peak<.1)throw Error(kind+' too quiet at warning range');if(kind!=='crash'&&energy[1]<energy[0]*2)throw Error(kind+' stereo direction wrong');}
  rows.push(`PASS ${kind}: peak ${peak.toFixed(3)}, tail ${tail.toFixed(3)}`);
 }
 return rows.join('\n');
}

async function checkMix(){
 const sampleRate=48000,decode=new OfflineAudioContext(2,sampleRate,sampleRate),music=await decode.decodeAudioData(await (await fetch(`${import.meta.env.BASE_URL}audio/exit-the-premises.mp3`)).arrayBuffer());
 async function render({horn=false,bed=false,duck=false}={}){
  const c=new OfflineAudioContext(2,sampleRate*3,sampleRate),master=c.createGain(),ambience=c.createGain();master.gain.value=.5;ambience.connect(master).connect(c.destination);
  if(bed){
   const source=c.createBufferSource(),gain=c.createGain();source.buffer=music;gain.gain.value=.64;source.connect(gain).connect(ambience);source.start(0,35);source.stop(3);
   const filter=c.createBiquadFilter();filter.type='lowpass';filter.frequency.value=1000;filter.connect(ambience);
   for(const [i,level]of [.12,.045,.025].entries()){const o=c.createOscillator(),g=c.createGain();o.type=i===0?'sawtooth':'triangle';o.frequency.value=186*(i+1);g.gain.value=level*.95;o.connect(g).connect(filter);o.start();o.stop(3);}
  }
  if(duck)duckForWarning(c,ambience);
  if(horn)playWarningHorn(c,master,'tug',{pan:0,distance:300});
  return (await c.startRendering()).getChannelData(0);
 }
 const normal=await render({bed:true}),ducked=await render({bed:true,duck:true}),horn=await render({horn:true}),mix=await render({bed:true,duck:true,horn:true});
 const rms=(data,from,to)=>{let total=0;for(let i=sampleRate*from;i<sampleRate*to;i++)total+=data[i]*data[i];return Math.sqrt(total/(sampleRate*(to-from)));};
 const reduction=20*Math.log10(rms(ducked,.15,.7)/rms(normal,.15,.7)),prominence=20*Math.log10(rms(horn,.15,.7)/rms(ducked,.15,.7)),restored=rms(ducked,2.4,2.8)/rms(normal,2.4,2.8);
 let peak=0;for(const sample of mix){if(!Number.isFinite(sample))throw Error('nonfinite mixed audio');peak=Math.max(peak,Math.abs(sample));}
 if(reduction> -12||prominence<3||restored<.99||peak>.95)throw Error(`mix: duck ${reduction}, prominence ${prominence}, restore ${restored}, peak ${peak}`);
 return `PASS real soundtrack + boost engine mix\nBackground ${reduction.toFixed(1)} dB during warning\n300 m tug horn ${prominence.toFixed(1)} dB over background\nFull ambience restored: ${(restored*100).toFixed(1)}%\nMixed peak ${peak.toFixed(3)}, no clipping`;
}
