// The selected licensed score is a pre-cut excerpt. Its time zero is visual
// time zero; no network audio services or runtime BPM guessing.
// tools/splice-score.py joins 28.00 s to the source's 35.20 s (three
// phrase beats later) so the score reaches its own ending; 32.2 s with tail.
const LENGTH = 32.2;
const TRACK_URL = new URL('cinematic-v2/audio/imperial-china-final-cut.wav?v=20261030-v3h21', document.baseURI);
const clamp = (x, a, b) => Math.min(b, Math.max(a, x));

export function createScore({getTime, isPlaying, duration = LENGTH, fade = null, onState = () => {}}) {
  let ctx, buffer, pending, source, sourceGain, startAt = 0, startOffset = 0;
  let enabled = false, disposed = false, generation = 0, lastCorrection = 0;
  const update = status => onState({enabled, status});
  const canvas = document.getElementById('scene');
  function diagnostics() {
    if (!canvas) return;
    const playing = !!source && !!ctx && ctx.state === 'running';
    const position = playing ? Math.min(duration, startOffset + ctx.currentTime - startAt) : null;
    const visual = Number(getTime()) || 0;
    canvas.dataset.audioPlaying = String(playing);
    canvas.dataset.audioContext = ctx?.state || 'uninitialized';
    canvas.dataset.audioTime = position === null ? '' : position.toFixed(3);
    canvas.dataset.audioDrift = position === null ? '' : (position - visual).toFixed(3);
    canvas.dataset.audioLoaded = String(!!buffer);
  }

  function stop() {
    if (!source || !ctx) return;
    const oldSource = source, oldGain = sourceGain;
    source = sourceGain = null;
    diagnostics();
    try {
      oldGain.gain.cancelScheduledValues(ctx.currentTime);
      oldGain.gain.setValueAtTime(oldGain.gain.value, ctx.currentTime);
      oldGain.gain.linearRampToValueAtTime(0, ctx.currentTime + .025);
      oldSource.stop(ctx.currentTime + .03);
    } catch (_) { /* Source may already have finished. */ }
  }

  function sync() {
    stop();
    if (!enabled || !buffer || !ctx || disposed || !isPlaying() || document.hidden || ctx.state !== 'running') return;
    const offset = clamp(Number(getTime()) || 0, 0, Math.min(duration, buffer.duration));
    if (offset >= Math.min(duration, buffer.duration) - .02) return;
    const nextSource = ctx.createBufferSource(), nextGain = ctx.createGain();
    nextSource.buffer = buffer;
    // v3c: fade out with the picture over [fade[0], fade[1]] story seconds.
    const level = fade ? 1 - clamp((offset - fade[0]) / (fade[1] - fade[0]), 0, 1) : 1;
    nextGain.gain.setValueAtTime(.0001, ctx.currentTime);
    nextGain.gain.linearRampToValueAtTime(Math.max(.0001, level), ctx.currentTime + .03);
    if (fade) {
      const t0 = ctx.currentTime + Math.max(.03, fade[0] - offset), t1 = ctx.currentTime + Math.max(.04, fade[1] - offset);
      nextGain.gain.setValueAtTime(Math.max(.0001, level), t0);
      nextGain.gain.linearRampToValueAtTime(.0001, t1);
    }
    nextSource.connect(nextGain); nextGain.connect(ctx.destination);
    source = nextSource; sourceGain = nextGain;
    nextSource.onended = () => { if (source === nextSource) { source = sourceGain = null; diagnostics(); } };
    startAt = ctx.currentTime; startOffset = offset; lastCorrection = ctx.currentTime;
    nextSource.start(0, offset);
    diagnostics();
  }

  function loadBuffer() {
    if (buffer) return Promise.resolve(buffer);
    if (!pending) {
      pending = fetch(TRACK_URL).then(response => {
        if (!response.ok) throw new Error(`配乐加载失败（HTTP ${response.status}）`);
        return response.arrayBuffer();
      }).then(bytes => ctx.decodeAudioData(bytes)).then(decoded => {
        if (decoded.duration < duration - .05) throw new Error('配乐时长不足');
        buffer = decoded;
      diagnostics();
        return decoded;
      }).catch(error => { pending = null; throw error; });
    }
    return pending;
  }

  async function toggle() {
    if (disposed) return;
    const request = ++generation;
    if (enabled) { enabled = false; stop(); update('off'); return; }
    const AudioContextClass = window.AudioContext || window.webkitAudioContext;
    if (!AudioContextClass) { update('unsupported'); return; }
    try {
      ctx ||= new AudioContextClass(); diagnostics();
      // Call resume in the trusted click handler, before any asynchronous work.
      const resumed = ctx.resume();
      enabled = true; update(buffer ? 'on' : 'loading');
      await Promise.all([loadBuffer(), resumed]);
      if (request !== generation || !enabled || disposed) return;
      if (ctx.state !== 'running') throw new Error('浏览器尚未允许播放声音');
      sync(); update('on');
    } catch (error) {
      // A superseded enable request must not disable a later one.
      if (request !== generation || disposed) return;
      enabled = false; stop(); update('error'); console.error('音频初始化失败', error);
    }
  }

  function tick() {
    diagnostics();
    if (!enabled || !source || !ctx || !isPlaying() || document.hidden) return;
    const predicted = startOffset + ctx.currentTime - startAt;
    if (ctx.currentTime - lastCorrection > .8 && Math.abs(predicted - getTime()) > .28) sync();
  }
  function getPlaybackTime() {
    if (!enabled || !source || !ctx || ctx.state !== 'running' || !isPlaying() || document.hidden) return null;
    return clamp(startOffset + ctx.currentTime - startAt, 0, duration);
  }
  function dispose() { disposed = true; enabled = false; generation++; stop(); if (ctx) ctx.close().catch(() => {}); }
  diagnostics(); update('off');
  return {toggle, sync, tick, getPlaybackTime, dispose};
}
