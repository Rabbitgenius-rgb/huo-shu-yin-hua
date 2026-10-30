// Branches finish first; iron and silver then open on the same shared beat.
export const TIMELINE=Object.freeze({duration:17,growStart:.45,growSpan:5.70,bloomStart:8.93,bloomSpan:.03,burstLength:2.8,budScale:.92});
// All buds ignite together at 9 + at most .03 seconds; include seed jitter
// and longest local unfolding before bypassing the shader timing branch.
export const MOTION_END=TIMELINE.bloomStart+TIMELINE.bloomSpan+.05+TIMELINE.burstLength*1.22+.06;
// Fast opening, gentle landing: already ~76% open in the first half-second
// even for the slowest flower, without changing the final crown geometry.
export const bloomOpenProgress=u=>1-Math.pow(1-Math.max(0,Math.min(1,u)),9);
export const bloomOpenGLSL=`float bloomOpenProgress(float u){float rest=1.-clamp(u,0.,1.);float r2=rest*rest;float r4=r2*r2;return 1.-r4*r4*rest;}`;
const f=v=>v.toFixed(4);
export const timelineGLSL=`
const float GROW_START=${f(TIMELINE.growStart)};
const float GROW_SPAN=${f(TIMELINE.growSpan)};
const float BLOOM_START=${f(TIMELINE.bloomStart)};
const float BLOOM_SPAN=${f(TIMELINE.bloomSpan)};
const float BURST_LEN=${f(TIMELINE.burstLength)};
const float BUD_SCALE=${f(TIMELINE.budScale)};
`;
