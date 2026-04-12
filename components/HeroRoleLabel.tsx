"use client";

import { useState, useEffect } from "react";

const roles = [
  "BUSINESS ANALYST & CONSULTANT",
  "PRODUCT MANAGER",
  "DATA ANALYST",
];

type Phase = "idle" | "exit" | "enter";

export function HeroRoleLabel() {
  const [index, setIndex] = useState(0);
  const [phase, setPhase] = useState<Phase>("idle");

  useEffect(() => {
    const id = setInterval(() => {
      setPhase("exit");
      const t1 = setTimeout(() => {
        setIndex((i) => (i + 1) % roles.length);
        setPhase("enter");
        const t2 = setTimeout(() => setPhase("idle"), 320);
        return () => clearTimeout(t2);
      }, 320);
      return () => clearTimeout(t1);
    }, 2500);
    return () => clearInterval(id);
  }, []);

  const textAnimation =
    phase === "exit"
      ? "role-exit 300ms ease forwards"
      : phase === "enter"
      ? "role-enter 300ms ease forwards"
      : "none";

  return (
    <div className="hero-label mb-6 inline-flex items-center gap-2.5 rounded-full border border-[var(--border-subtle)] bg-[rgba(201,168,76,0.06)] px-4 py-2">
      <span
        className="h-2 w-2 rounded-full bg-gold flex-shrink-0"
        style={{ animation: "gold-pulse 2s ease-in-out infinite" }}
      />
      <span
        className="font-data text-xs tracking-widest uppercase text-[var(--text-muted)]"
        style={{
          display: "inline-block",
          minWidth: "18rem",
          whiteSpace: "nowrap",
          animation: textAnimation,
        }}
      >
        {roles[index]}
      </span>
    </div>
  );
}
