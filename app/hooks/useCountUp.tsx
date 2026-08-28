import { useState, useEffect } from "react";

export function useCountUp(to: number, active: boolean) {
  const [v, setV] = useState(0);

  useEffect(() => {
    if (!active) return;
    const start = performance.now();
    const dur = 1400;
    let raf = 0;

    const tick = (t: number) => {
      const p = Math.min(1, (t - start) / dur);
      setV(Math.floor(p * to));
      if (p < 1) raf = requestAnimationFrame(tick);
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [active, to]);

  return v;
}