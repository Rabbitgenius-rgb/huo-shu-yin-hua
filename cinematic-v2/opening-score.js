// All opening systems share story seconds: branch growth, iron sparks and
// silver unfolding must not drift onto independent remapped clocks.
export const OPENING_END=17;
const clamp=(x,a,b)=>Math.min(b,Math.max(a,x));
export function sampleOpening(storyTime){
 const t=clamp(Number.isFinite(Number(storyTime))?Number(storyTime):0,0,OPENING_END);
 const [stage,label]=t<1.5?['seed','水心蓄光']
  :t<3.3?['rise','金脉上生']
  :t<7.2?['branch','枝脉舒展']
  :t<9?['iron','枝端凝金']
  :t<10.2?['burst','铁花银花同绽']
  :t<11.4?['curtain','满庭金雨']
  :t<12.6?['bloom','银花绽放']
  :t<OPENING_END?['settle','余辉入枝']
  :['hold','火树银花'];
 return {particleTime:t,stage,label};
}
