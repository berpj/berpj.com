// Development-only, opt-in readout. Measures actual rendered frames, including
// the reflection and postprocessing passes, without exposing game internals.
export function createFrameMeter(renderer) {
  if (!import.meta.env.DEV || !new URLSearchParams(location.search).has('stats')) return null;
  const output = document.createElement('output');
  output.id = 'frame-meter';
  output.style.cssText = 'position:fixed;bottom:36px;left:50%;transform:translateX(-50%);z-index:20;background:#07131ee6;color:#d3eadf;padding:6px 10px;font:11px monospace;pointer-events:none';
  output.textContent = 'Measuring rendering…';
  document.body.append(output);
  renderer.info.autoReset = false;
  let frames = 0, elapsed = 0, calls = 0, triangles = 0, renderTime = 0, start = 0;
  return {
    begin() { renderer.info.reset(); start = performance.now(); },
    end(dt) {
      if (dt > .1 || dt <= 0) return;
      frames++; elapsed += dt; calls += renderer.info.render.calls;
      triangles += renderer.info.render.triangles; renderTime += performance.now() - start;
      if (elapsed < 2) return;
      output.textContent = `${Math.round(frames / elapsed)} FPS · ${Math.round(calls / frames)} draws · ${Math.round(triangles / frames / 1000)}k triangles · ${(renderTime / frames).toFixed(1)} ms submit · ${renderer.getPixelRatio().toFixed(2)}×`;
      frames = elapsed = calls = triangles = renderTime = 0;
    }
  };
}
