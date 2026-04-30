"use client";

import { useRef, useEffect, useState } from "react";

function CountUp({
  to, suffix = "", active, delay = 0,
}: {
  to: number; suffix?: string; active: boolean; delay?: number;
}) {
  const [val, setVal] = useState(0);
  useEffect(() => {
    if (!active) return;
    let raf: number;
    const timer = setTimeout(() => {
      const t0 = performance.now();
      const tick = (now: number) => {
        const p = Math.min((now - t0) / 1000, 1);
        setVal(Math.round((1 - Math.pow(1 - p, 3)) * to));
        if (p < 1) raf = requestAnimationFrame(tick);
      };
      raf = requestAnimationFrame(tick);
    }, delay);
    return () => { clearTimeout(timer); cancelAnimationFrame(raf); };
  }, [active, to, delay]);
  return <>{val}{suffix}</>;
}

const STATS = [
  { label: "Years of Experience",     to: 4,  suffix: "+" },
  { label: "Consulting Case Studies", to: 6,  suffix: ""  },
  { label: "Users Impacted",          to: 10, suffix: "M+" },
  { label: "Industry Clients",        to: 4,  suffix: ""  },
];

export function AnimatedStatGrid() {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVisible(true); },
      { threshold: 0.3 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div ref={ref} className="grid grid-cols-2 gap-4">
      {STATS.map((stat, i) => (
        <div
          key={stat.label}
          className="rounded-[var(--radius-md)] border border-[var(--border-subtle)] bg-[var(--bg-surface)] p-6 transition-colors duration-300 hover:border-[var(--border-strong)] hover:bg-[var(--bg-elevated)] hover:-translate-y-1"
          style={{
            boxShadow: "var(--shadow-card)",
            opacity: visible ? 1 : 0,
            transform: visible ? "none" : "translateY(14px)",
            transition: `opacity 420ms ease ${i * 80}ms, transform 420ms ease ${i * 80}ms, border-color 300ms, background-color 300ms, translate 300ms`,
          }}
        >
          <p className="font-display font-light text-4xl text-gold leading-none">
            <CountUp to={stat.to} suffix={stat.suffix} active={visible} delay={i * 80 + 200} />
          </p>
          <p className="mt-2 font-data text-xs uppercase tracking-widest text-[var(--text-muted)]">
            {stat.label}
          </p>
        </div>
      ))}
    </div>
  );
}
