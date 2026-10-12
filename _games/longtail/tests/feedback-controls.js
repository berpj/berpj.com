import {makeImpactNoise,playCrashImpact,playWarningHorn} from '../src/sound-effects.js';

export function installFeedbackControls({approach,audio,crashFeedback}){
 const panel=document.createElement('aside');panel.style.cssText='position:fixed;left:8px;bottom:8px;z-index:20;max-width:370px;background:#07111eec;color:white;padding:8px;font:12px system-ui;border:1px solid #fff5';
 const status=document.createElement('output');status.style.cssText='display:block;max-height:180px;overflow:auto;white-space:pre-wrap';
 function report(message){status.textContent+=message+'\n';}
 function button(name,fn){const b=document.createElement('button');b.textContent=name;b.style.cssText='padding:5px;background:#24384a;color:white;border:1px solid #fff4;margin:3px';b.onclick=fn;panel.append(b);}
 for(const kind of ['ferry','cruise','longtail'])button(`Approach ${kind}`,()=>{status.textContent='Approaching '+kind+'\n';approach(kind);});
 button('Audio checks',async()=>{status.textContent='';try{report(await checkAudio());}catch(e){report('FAIL '+e.message);throw e;}});
 button('Audio lifecycle',async()=>{
  const music=audio.musicEnabled;audio.musicEnabled=false;audio.muted=true;
  try{
   await audio.start();audio.warningHorn('ferry',{});audio.impact();
   if(audio.effects.size)throw Error('muted effects were created');report('PASS mute suppresses warning and impact voices');
   audio.muted=false;audio.sync();audio.warningHorn('ferry',{});audio.impact();audio.pause(1.2);await Promise.resolve();
   if(audio.warningEffects.size||audio.effects.size!==1)throw Error('crash tail or horn cancellation incorrect');report('PASS crash keeps impact tail and stops horns');
   await audio.start();if(audio.effects.size)throw Error('retry retained impact voices');report('PASS retry clears the crash tail');
   audio.warningHorn('tug',{});audio.pause();await Promise.resolve();if(audio.effects.size||audio.warningEffects.size)throw Error('pause retained warning voices');report('PASS pause cleans up all voices');
  }catch(e){report('FAIL '+e.message);throw e;}finally{audio.pause();audio.musicEnabled=music;audio.muted=false;}
 });
 button('Capture impact',()=>{panel.hidden=true;approach('cruise');});
 button('Reset feedback',()=>crashFeedback.reset());
 panel.append(status);document.body.append(panel);
 const horn=audio.warningHorn.bind(audio);audio.warningHorn=(kind,warning)=>{report(`Warning: ${kind}, ${(warning.time??0).toFixed(2)} s, pan ${(warning.pan??0).toFixed(2)}`);horn(kind,warning);};
 const impact=audio.impact.bind(audio);audio.impact=fatal=>{report(`Impact: ${fatal===false?'bank':'fatal'}`);impact(fatal);};
 new MutationObserver(()=>{if(document.querySelector('#results').hidden===false)report('Results: '+document.querySelector('#result-title').textContent);}).observe(document.querySelector('#results'),{attributes:true,attributeFilter:['hidden']});
 report('Ready. Approaches run real traffic, physics, warning audio and end-of-run UI.');
}

async function checkAudio(){
 const rows=[];
 for(const kind of ['cruise','tug','ferry','electric','longtail','fishing','crash','cancelled']){
  const ctx=new OfflineAudioContext(2,48000*2,48000),master=ctx.createGain();master.gain.value=.5;master.connect(ctx.destination);
  const voice=kind==='crash'?playCrashImpact(ctx,master,makeImpactNoise(ctx)):playWarningHorn(ctx,master,kind==='cancelled'?'ferry':kind,{pan:.7,distance:90});
  if(kind==='cancelled')voice.stop();
  const buffer=await ctx.startRendering(),channels=[buffer.getChannelData(0),buffer.getChannelData(1)],energy=[0,0];let peak=0,tail=0;
  for(let c=0;c<2;c++)for(let i=0;i<channels[c].length;i++){
   const sample=channels[c][i];if(!Number.isFinite(sample))throw Error(kind+' nonfinite audio');
   peak=Math.max(peak,Math.abs(sample));energy[c]+=sample*sample;if(i>48000*1.4)tail=Math.max(tail,Math.abs(sample));
  }
  if(peak>=.95||tail>1e-6)throw Error(kind+' clips or does not end');
  if(kind==='cancelled'){if(peak!==0)throw Error('cancelled warning remains audible');}
  else{if(peak<.02)throw Error(kind+' silent');if(kind!=='crash'&&energy[1]<energy[0]*2)throw Error(kind+' stereo direction wrong');}
  rows.push(`PASS ${kind}: peak ${peak.toFixed(3)}, tail ${tail.toFixed(3)}`);
 }
 return rows.join('\n');
}
