import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import {createHash} from 'node:crypto';
import {GameAudio} from '../src/game/audio.js';

function setup(t){
  const media=[],contexts=[],attached=[];
  const param=()=>({value:0,events:[],setTargetAtTime(v,t){this.value=v;this.events.push({value:v,time:t});},setValueAtTime(v){this.value=v;},linearRampToValueAtTime(){},exponentialRampToValueAtTime(){},cancelScheduledValues(){this.events=[];}});
  const node=()=>({gain:param(),frequency:param(),Q:param(),connect(next){return next;},starts:[],stops:[],disconnected:false,start(t){this.starts.push(t);},stop(t){this.stops.push(t);},disconnect(){this.disconnected=true;}});
  class Context {
    constructor(){contexts.push(this);this.currentTime=0;this.sampleRate=100;this.destination={};this.oscillators=0;this.sources=0;this.bufferSources=[];this.resumeCalls=0;}
    createGain(){return node();}
    createOscillator(){this.oscillators++;return node();}
    createBiquadFilter(){return node();}
    createBuffer(channels,length){return {getChannelData:()=>new Float32Array(length)};}
    createBufferSource(){const source=node();this.bufferSources.push(source);return source;}
    decodeAudioData(){return Promise.resolve({duration:.62});}
    createMediaElementSource(){this.sources++;return node();}
    resume(){this.resumeCalls++;return Promise.resolve();}
  }
  class Media {
    constructor(src){this.src=src;this.currentTime=0;this.paused=true;this.playCalls=0;this.pauseCalls=0;media.push(this);}
    play(){this.playCalls++;this.paused=false;return this.result||Promise.resolve();}
    pause(){this.pauseCalls++;this.paused=true;}
  }
  for(const [name,value]of Object.entries({window:{AudioContext:Context},Audio:Media,fetch:async()=>({ok:true,arrayBuffer:async()=>new ArrayBuffer(8)}),document:{body:{append:m=>attached.push(m)}}})){
    const descriptor=Object.getOwnPropertyDescriptor(globalThis,name);
    Object.defineProperty(globalThis,name,{value,configurable:true,writable:true});
    t.after(()=>descriptor?Object.defineProperty(globalThis,name,descriptor):delete globalThis[name]);
  }
  return {audio:new GameAudio(),media,contexts,attached};
}

test('radio is lazy, starts on the start gesture and never creates a short synth music loop',async t=>{
  const {audio,media,contexts,attached}=setup(t);
  assert.equal(media.length,0);
  await audio.start();
  assert.equal(media.length,1);
  assert.equal(attached[0],media[0]);
  assert.equal(media[0].loop,true);
  assert.equal(media[0].preload,'none');
  assert.match(media[0].src,/audio\/thai-piphat-radio\.mp3$/);
  assert.equal(media[0].playCalls,1);
  for(let i=0;i<600;i++){contexts[0].currentTime=i/60;audio.update(25,1,true,.5);}
  assert.equal(media[0].playCalls,1,'physics frames must not repeatedly call play');
  assert.equal(contexts[0].oscillators,1,'only the engine oscillator, no synthesized music');
  await audio.hornReady;audio.cue('horn');
  assert.equal(contexts[0].oscillators,1,'the horn plays the recording, not oscillators');
  assert.equal(audio.hornVoice.source.buffer,audio.hornBuffer);
});

test('pauses preserve progress and starting another shift never layers a second player',async t=>{
  const {audio,media,contexts}=setup(t);
  await audio.start();media[0].currentTime=73.5;
  for(let i=0;i<60;i++)audio.update(0,0,false);
  assert.equal(media[0].paused,true);
  assert.equal(media[0].pauseCalls,1);
  await audio.start();
  assert.equal(media[0].paused,false);
  assert.equal(media[0].currentTime,73.5);
  assert.equal(media.length,1);
  assert.equal(contexts[0].sources,1);
});

test('saved music-off and mute-before-start are honored; toggling radio preserves effects',async t=>{
  const {audio,media,contexts}=setup(t);
  audio.music=false;audio.setMuted(true);
  await audio.start();audio.update(5,1,true);
  assert.equal(media[0].playCalls,0);
  assert.equal(audio.master.gain.value,0);
  audio.music=true;audio.update(5,1,true);
  assert.equal(media[0].playCalls,1);
  audio.setMuted(false);
  assert.equal(audio.master.gain.value,.28);
  audio.music=false;audio.update(5,1,true);
  assert.equal(media[0].paused,true);
  assert.equal(audio.engineGain.gain.value,.045);
  await audio.hornReady;audio.cue('horn');assert.equal(contexts[0].oscillators,1);
  assert.ok(audio.hornVoice);
});

test('rejected playback does not retry every frame and can retry on a new user gesture',async t=>{
  const {audio,media}=setup(t);await audio.start();
  audio.update(0,0,false);
  media[0].result=Promise.reject(new Error('Autoplay blocked'));
  await audio.start();await Promise.resolve();
  const attempts=media[0].playCalls;
  assert.equal(audio.radio.gain.gain.value,0);
  for(let i=0;i<60;i++)audio.update(5,1,true);
  assert.equal(media[0].playCalls,attempts);
  media[0].result=Promise.resolve();await audio.start();
  assert.equal(media[0].playCalls,attempts+1);
  assert.equal(audio.radio.gain.gain.value,.38);
});

test('an old aborted playback request cannot silence a newer resume',async t=>{
  const {audio,media}=setup(t);await audio.start();
  let reject;
  media[0].result=new Promise((resolve,no)=>{reject=no;});
  await audio.start();
  audio.update(0,0,false);
  media[0].result=Promise.resolve();await audio.start();
  reject(new Error('Previous play interrupted by pause'));
  await Promise.resolve();
  assert.equal(audio.radio.gain.gain.value,.38);
  assert.equal(media[0].paused,false);
});


test('recorded horn retriggers promptly without stacking voices or changing the master mute',async t=>{
  const {audio,contexts}=setup(t);await audio.start();await audio.hornReady;
  const c=contexts[0];c.state='suspended';const resumes=c.resumeCalls;
  audio.cue('horn');const first=audio.hornVoice;
  assert.equal(c.resumeCalls,resumes+1);
  assert.deepEqual(first.source.starts,[0]);
  assert.equal(first.source.buffer,audio.hornBuffer);
  audio.cue('horn');assert.equal(audio.hornVoice,first,'duplicate inputs in one frame are ignored');
  c.currentTime=.15;audio.cue('horn');const second=audio.hornVoice;
  assert.notEqual(second,first);
  assert.ok(first.source.stops[0]<=.17,'old voice ends within 20 ms of a new press');
  first.source.onended();assert.equal(audio.hornVoice,second,'old cleanup cannot clear a new voice');
  assert.equal(first.source.disconnected,true);assert.equal(first.gain.disconnected,true);
  second.source.onended();assert.equal(audio.hornVoice,null);
  audio.setMuted(true);c.currentTime=.5;audio.cue('horn');
  assert.equal(audio.hornVoice,null);assert.equal(audio.master.gain.value,0);
});

test('honking dips the radio without restarting it and pausing cancels the scheduled volume recovery',async t=>{
  const {audio,media,contexts}=setup(t);await audio.start();await audio.hornReady;
  media[0].currentTime=87;audio.cue('horn');
  const events=audio.radio.gain.gain.events;
  assert.ok(events.some(e=>e.value<.2&&e.time===0));
  assert.ok(events.some(e=>e.value===.38&&e.time>audio.hornBuffer.duration));
  for(let i=0;i<60;i++)audio.update(20,1,true);
  assert.equal(audio.radio.gain.gain.events,events);
  assert.equal(media[0].playCalls,1);assert.equal(media[0].currentTime,87);
  audio.update(0,0,false);
  assert.equal(media[0].paused,true);assert.equal(audio.radio.gain.gain.value,0);
  assert.deepEqual(audio.radio.gain.gain.events,[],'no future recovery after a pause');
});

test('a missing sample leaves the horn responsive without queuing a later unexpected blast',async t=>{
  const {audio,contexts}=setup(t);
  globalThis.fetch=async()=>({ok:false});
  await audio.start();await audio.hornReady;
  assert.equal(audio.hornBuffer,null);
  audio.cue('horn');assert.equal(contexts[0].oscillators,3);
  audio.cue('horn');assert.equal(contexts[0].oscillators,3,'fallback blasts cannot stack');
  contexts[0].currentTime=.5;audio.cue('horn');assert.equal(contexts[0].oscillators,5);
});

test('bundled honk is a short, immediately audible PCM recording with headroom and intact attribution',()=>{
  const base=new URL('../public/audio/',import.meta.url);
  const provenance=JSON.parse(fs.readFileSync(new URL('horn-provenance.json',base)));
  const wav=fs.readFileSync(new URL(provenance.file,base));
  assert.equal(createHash('sha256').update(wav).digest('hex'),provenance.sha256);
  assert.equal(provenance.license,'CC-BY-4.0');assert.match(provenance.recordist,/Troha/);
  assert.equal(wav.toString('ascii',0,4),'RIFF');assert.equal(wav.toString('ascii',8,12),'WAVE');
  assert.equal(wav.readUInt16LE(20),1,'PCM');assert.equal(wav.readUInt16LE(22),1,'mono');
  const rate=wav.readUInt32LE(24);assert.equal(rate,32000);assert.equal(wav.readUInt16LE(34),16);
  const samples=[];for(let i=44;i<wav.length;i+=2)samples.push(wav.readInt16LE(i)/32768);
  assert.ok(samples.length/rate>.4&&samples.length/rate<.8);
  const peak=Math.max(...samples.map(Math.abs));assert.ok(peak>.7&&peak<.9,'normalized without clipping');
  const rms=part=>Math.sqrt(part.reduce((sum,v)=>sum+v*v,0)/part.length);
  assert.ok(rms(samples.slice(0,rate*.05))>.01,'no silent lead-in delaying H');
  assert.ok(rms(samples)>.08,'sample is audible');
  assert.ok(rms(samples.slice(-160))<.01,'soft clean tail');
});

test('pausing or muting cuts a playing recorded horn without leaving a scheduled voice',async t=>{
  const {audio,contexts}=setup(t);await audio.start();await audio.hornReady;
  audio.cue('horn');const first=audio.hornVoice;
  audio.update(0,0,false);
  assert.equal(audio.hornVoice,null);assert.equal(first.source.stops.length,1);
  contexts[0].currentTime=1;audio.cue('horn');const second=audio.hornVoice;
  audio.setMuted(true);
  assert.equal(audio.hornVoice,null);assert.equal(second.source.stops.length,1);
});
