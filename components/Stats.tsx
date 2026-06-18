"use client";

import { useEffect, useRef, useState } from "react";
import { stats } from "@/lib/site";

function useInView<T extends HTMLElement>() {
  const ref = useRef<T>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setInView(true);
          io.disconnect();
        }
      },
      { threshold: 0.4 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return { ref, inView };
}

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const { ref, inView } = useInView<HTMLSpanElement>();
  const [n, setN] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const duration = 1300;
    const start = performance.now();
    let raf = 0;
    const tick = (t: number) => {
      const p = Math.min((t - start) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setN(Math.round(eased * value));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, value]);

  return (
    <span ref={ref} className="tabular">
      {n}
      {suffix}
    </span>
  );
}

export default function Stats({ onDark = false }: { onDark?: boolean }) {
  return (
    <div className="grid grid-cols-2 gap-x-8 gap-y-10 lg:grid-cols-4">
      {stats.map((s) => (
        <div key={s.label}>
          <div
            className="font-display font-bold leading-none tracking-tight"
            style={{ fontSize: "clamp(2.4rem, 4.5vw, 3.6rem)", color: onDark ? "#fff" : "var(--color-brand-700)" }}
          >
            {"custom" in s && s.custom ? s.custom : <Counter value={s.value} suffix={s.suffix} />}
          </div>
          <div className={`mt-3 font-semibold ${onDark ? "text-white" : "text-[var(--color-ink)]"}`}>{s.label}</div>
          <div className={`text-sm ${onDark ? "text-white/55" : "text-[var(--color-steel)]"}`}>{s.sub}</div>
        </div>
      ))}
    </div>
  );
}
