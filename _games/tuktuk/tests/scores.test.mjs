import test from 'node:test';
import assert from 'node:assert/strict';
import {normalizeScorebook,getBoard,bestScore,recordShift,scoreTarget} from '../src/game/scores.mjs';
import {Session} from '../src/game/rules.mjs';

const run=(score,id=String(score),mode='arcade',assisted=false)=>({id,mode,assisted,score,deliveries:2,combo:4,at:1791630000000});

test('legacy personal bests survive without fictional dates or deliveries',()=>{
  const legacy={'best:arcade:manual':540,'best:arcade:assisted':875,'best:180:manual':420};
  const book=normalizeScorebook({},legacy);
  assert.equal(bestScore(book,'arcade',false),540);
  assert.equal(bestScore(book,'arcade',true),875);
  assert.equal(bestScore(book,'180',false),420);
  const row=getBoard(book,'arcade',false).top[0];
  assert.equal(row.at,null);assert.equal(row.deliveries,null);assert.equal(row.combo,null);
  assert.deepEqual(normalizeScorebook(book,legacy),book,'migration is idempotent');
});

test('the five highest completed scores survive a browser-storage round trip, including ties',()=>{
  let book=normalizeScorebook();
  for(const [index,score]of [140,680,250,915,480,70,680].entries())book=recordShift(book,run(score,`run-${index}`)).book;
  book=normalizeScorebook(JSON.parse(JSON.stringify(book)));
  const board=getBoard(book,'arcade',false);
  assert.deepEqual(board.top.map(r=>r.score),[915,680,680,480,250]);
  assert.equal(board.top[1].id,'run-1','equal scores retain the older rank');
  assert.equal(board.last.id,'run-6');
  assert.equal(board.last.score,680);
});

test('timed modes and assisted/manual controls keep separate comparable records',()=>{
  let book=normalizeScorebook();
  for(const [mode,assisted,score]of [['arcade',false,100],['arcade',true,800],['180',false,300],['300',false,500],['600',false,900]]){
    book=recordShift(book,run(score,`${mode}-${assisted}`,mode,assisted)).book;
  }
  assert.equal(bestScore(book,'arcade',false),100);assert.equal(bestScore(book,'arcade',true),800);
  assert.equal(bestScore(book,'180',false),300);assert.equal(bestScore(book,'300',false),500);
  assert.equal(bestScore(book,'600',false),900);assert.equal(bestScore(book,'180',true),0);
  assert.equal(recordShift(book,run(99999,'free','free')).book,book,'unlimited free rides never outrank timed shifts');
});

test('results compare against the previous best and cannot insert the same shift twice',()=>{
  const book=normalizeScorebook({}, {'best:arcade:manual':500});
  const result=recordShift(book,run(750));
  assert.equal(result.previousBest,500);assert.equal(result.best,750);assert.equal(result.rank,1);assert.equal(result.isNewBest,true);
  assert.equal(bestScore(book,'arcade',false),500,'the old book is not mutated');
  const again=recordShift(result.book,run(750));
  assert.equal(again.recorded,false);assert.equal(again.book,result.book);
  const equal=recordShift(result.book,run(750,'tie'));
  assert.equal(equal.isNewBest,false);assert.equal(equal.rank,2);
  const lower=recordShift(equal.book,run(120,'lower'));
  assert.equal(lower.previousBest,750);assert.equal(lower.best,750);assert.equal(lower.rank,4);
});

test('zero-score shifts update the last result without creating fake leaderboard entries',()=>{
  const result=recordShift(normalizeScorebook(),run(0));
  assert.equal(result.recorded,true);assert.equal(result.isNewBest,false);assert.equal(result.rank,null);
  assert.equal(getBoard(result.book,'arcade',false).last.score,0);
  assert.deepEqual(getBoard(result.book,'arcade',false).top,[]);
});

test('corrupt stored records are discarded while valid old bests remain recoverable',()=>{
  for(const raw of [null,[],{version:2,boards:null},{version:2,boards:{'arcade:manual':{top:[{},null,{...run(-5),score:Infinity}],last:{score:NaN}}}}]){
    const book=normalizeScorebook(raw,{'best:arcade:manual':310,'best:300:manual':'9999'});
    assert.equal(bestScore(book,'arcade',false),310);assert.equal(bestScore(book,'300',false),0);
  }
  const book=normalizeScorebook();
  for(const score of [NaN,Infinity,-1,1.5,'900'])assert.equal(recordShift(book,run(score)).recorded,false);
  assert.equal(recordShift(book,run(200,'unknown','bogus')).recorded,false);
});

test('score-to-beat uses banked earnings and requires strictly exceeding the previous best',()=>{
  assert.deepEqual(scoreTarget(300,500),{remaining:201,beaten:false,progress:.6});
  assert.deepEqual(scoreTarget(500,500),{remaining:1,beaten:false,progress:1});
  assert.deepEqual(scoreTarget(650,500),{remaining:0,beaten:true,progress:1});
  assert.deepEqual(scoreTarget(0,0),{remaining:0,beaten:false,progress:0});
  const session=new Session();session.reset('180');session.accept({x:0,z:0},{x:100,z:0},500);session.step(.7);session.tip('drift','first',8);
  assert.equal(scoreTarget(session.earnings,100).beaten,false,'unbanked fare tips do not beat the record');
  session.deliver();session.step(181);assert.equal(session.phase,'ended');
  const result=recordShift(normalizeScorebook(),run(session.earnings,'completed','180'));
  assert.equal(result.best,session.earnings);assert.equal(result.isNewBest,true);
});
