let audioCtx = null;
let unlockPromise = null;

export function getAudioContext() {
  return audioCtx;
}

export async function unlockAudio() {
  if (audioCtx?.state === 'running') return audioCtx;
  if (unlockPromise) return unlockPromise;

  unlockPromise = (async () => {
    try {
      const ctx = new (window.AudioContext || window.webkitAudioContext)();
      await ctx.resume();
      audioCtx = ctx;
      return ctx;
    } catch (e) {
      return null;
    } finally {
      unlockPromise = null;
    }
  })();

  return unlockPromise;
}
