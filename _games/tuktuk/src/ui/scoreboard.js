import {getBoard,bestScore,isRanked,MODES,scoreTarget} from '../game/scores.mjs';
import {money} from '../game/rules.mjs';

const dateLabel=at=>at===null?'Earlier best':new Date(at).toLocaleDateString('en-GB',{day:'numeric',month:'short'});
export function renderScoreboard(root,book,mode,assisted,persistent=true){
  const find=id=>root.querySelector(`#${id}`),ranked=isRanked(mode),board=getBoard(book,mode,assisted);
  const best=bestScore(book,mode,assisted);
  find('score-mode').textContent=`${MODES[mode]} · ${assisted?'Auto throttle':'Manual throttle'}`;
  find('best-label').textContent=ranked?'YOUR PERSONAL BEST':'JUST DRIVE';
  find('best-score').textContent=ranked?money(best):'NO CLOCK.';
  find('last-score').textContent=!ranked?'Explore Bangkok at your own pace.':board.last?`Last shift ${money(board.last.score)}`:best?'Your record is waiting to be beaten.':'How much can you earn in one shift?';
  find('score-history').classList.toggle('hidden',!ranked);
  find('score-empty').classList.toggle('hidden',!ranked||board.top.length>0);
  find('score-empty').textContent='Finish a shift to set your first record.';
  find('score-storage').textContent=!ranked?'Free ride is unranked.':persistent?'Your best shifts, saved in this browser.':'Scores kept for this visit only.';
  const list=find('score-list');list.replaceChildren();
  for(const [index,run]of board.top.entries()){
    const row=document.createElement('li');
    if(board.last?.id===run.id)row.classList.add('latest');
    const rank=document.createElement('span');rank.className='score-rank';rank.textContent=String(index+1).padStart(2,'0');
    const value=document.createElement('strong');value.textContent=money(run.score);
    const detail=document.createElement('small');detail.textContent=`${run.deliveries===null?'':`${run.deliveries} ${run.deliveries===1?'fare':'fares'} · `}${dateLabel(run.at)}`;
    if(board.last?.id===run.id)detail.textContent=`Latest · ${detail.textContent}`;
    row.append(rank,value,detail);list.append(row);
  }
}

export function renderScoreTarget(root,score,best,mode){
  const find=id=>root.querySelector(`#${id}`),ranked=isRanked(mode),target=scoreTarget(score,best);
  find('hud-best').textContent=ranked?`BEST ${money(best)}`:'FREE RIDE';
  find('hud-score-status').textContent=!ranked?'No leaderboard in free ride':target.beaten?(best?'NEW PERSONAL BEST!':'FIRST SCORE BANKED!'):best?`${money(target.remaining)} TO BEAT YOUR BEST`:'SET YOUR FIRST BEST';
  find('score-progress').classList.toggle('hidden',!ranked||!best);
  find('score-progress-fill').style.width=`${target.progress*100}%`;
  find('earnings-panel').classList.toggle('record-beaten',ranked&&target.beaten);
}
