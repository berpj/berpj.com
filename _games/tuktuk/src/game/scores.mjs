export const SCOREBOOK_KEY='bangkok-tuk-tuk:scores:v2';
export const LEGACY_RECORD_KEY='bangkok-tuk-tuk:records:v1';
/** @type {Record<string,string>} */
export const MODES={arcade:'Arcade','180':'3-minute shift','300':'5-minute shift','600':'10-minute shift',free:'Free ride'};
const rankedModes=['arcade','180','300','600'];
const validNumber=n=>Number.isSafeInteger(n)&&n>=0;
const emptyBoard=()=>({top:[],last:null});
export const boardKey=(mode,assisted)=>`${mode}:${assisted?'assisted':'manual'}`;
export const isRanked=mode=>rankedModes.includes(mode);

function validRun(run){
  return run&&typeof run.id==='string'&&run.id.length>0&&run.id.length<100&&validNumber(run.score)
    &&(run.at===null||validNumber(run.at))&&(run.deliveries===null||validNumber(run.deliveries))
    &&(run.combo===null||validNumber(run.combo));
}
function cleanRun(run){return {id:run.id,score:run.score,at:run.at,deliveries:run.deliveries,combo:run.combo};}
function rankRuns(runs){
  const seen=new Set();
  return runs.filter(run=>validRun(run)&&run.score>0&&!seen.has(run.id)&&seen.add(run.id))
    .sort((a,b)=>b.score-a.score).slice(0,5).map(cleanRun);
}
export function normalizeScorebook(stored={},legacy={}){
  const book={version:2,boards:{}};
  for(const mode of rankedModes)for(const assisted of [false,true]){
    const key=boardKey(mode,assisted),raw=stored?.version===2?stored.boards?.[key]:null;
    let top=rankRuns(Array.isArray(raw?.top)?raw.top.slice(0,100):[]);
    const previous=legacy?.[`best:${key}`];
    // Old versions stored only one number. Keep it without inventing a date or fare count.
    if(validNumber(previous)&&previous>(top[0]?.score||0))top=rankRuns([...top,{id:`legacy:${key}`,score:previous,at:null,deliveries:null,combo:null}]);
    book.boards[key]={top,last:validRun(raw?.last)?cleanRun(raw.last):null};
  }
  return book;
}
export function getBoard(book,mode,assisted){return book.boards[boardKey(mode,assisted)]||emptyBoard();}
export function bestScore(book,mode,assisted){return getBoard(book,mode,assisted).top[0]?.score||0;}

// Call only for a completed timed shift. Returns a new book; quitting/restarting never saves a run.
export function recordShift(book,{mode,assisted,...run}){
  const before=getBoard(book,mode,assisted),previousBest=before.top[0]?.score||0;
  if(!isRanked(mode)||!validRun(run)||before.last?.id===run.id||before.top.some(item=>item.id===run.id)){
    return {book,previousBest,best:previousBest,isNewBest:false,rank:null,recorded:false};
  }
  const top=rankRuns([...before.top,run]),board={top,last:cleanRun(run)},key=boardKey(mode,assisted);
  return {book:{version:2,boards:{...book.boards,[key]:board}},previousBest,best:top[0]?.score||0,
    isNewBest:run.score>previousBest,rank:top.findIndex(item=>item.id===run.id)+1||null,recorded:true};
}

export function scoreTarget(score,best){
  return {remaining:best>0?Math.max(0,best-score+1):0,beaten:score>best&&score>0,
    progress:best>0?Math.min(1,score/best):0};
}
