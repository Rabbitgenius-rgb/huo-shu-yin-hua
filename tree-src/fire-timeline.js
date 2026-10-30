// One shared clock for particles, flight trails and branch light fibers.
// 汇光 (gathering) → 生枝 (branches grow from the trunk base to their tips)
// → 银花 (each silver spray gathers into a bud and opens like a firework shell).
export const TIMELINE = Object.freeze({
  duration: 12.4,
  growStart: 2.75,   // first trunk-base particles land
  growSpan: 3.85,    // growth front reaches the farthest branch tips
  bloomStart: 6.35,  // first spray bursts (nearest the trunk)
  bloomSpan: 3.75,   // last spray bursts (outer right crown)
  burstLength: 1.45, // shell expansion with drag, fast pop then slow settle
  budScale: .92,     // a gathered bud is 8% of its spray's final size: a spark, not a ball
});

// After this time no particle is flying or bursting (latest burst + slowest
// spark, plus margin); trails can be skipped and points take a settled path.
export const MOTION_END = TIMELINE.bloomStart + TIMELINE.bloomSpan + .05 + TIMELINE.burstLength * 1.22 + .06;

const f = value => value.toFixed(4);
export const timelineGLSL = /* glsl */`
const float GROW_START=${f(TIMELINE.growStart)};
const float GROW_SPAN=${f(TIMELINE.growSpan)};
const float BLOOM_START=${f(TIMELINE.bloomStart)};
const float BLOOM_SPAN=${f(TIMELINE.bloomSpan)};
const float BURST_LEN=${f(TIMELINE.burstLength)};
const float BUD_SCALE=${f(TIMELINE.budScale)};
`;

export const STAGES = Object.freeze([
  [2.8, '四方汇光'],
  [6.6, '朱金生枝'],
  [TIMELINE.duration, '银花绽放'],
]);
