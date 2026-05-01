"use client";

import React, { useRef, useEffect, useState } from "react";

const STAGES = [
  {
    label: "Plan",
    description: "Define the problem, set objectives, and align stakeholders on scope and success criteria.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.90)" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="8" />
        <circle cx="12" cy="12" r="3" />
        <line x1="12" y1="2" x2="12" y2="5" />
        <line x1="12" y1="19" x2="12" y2="22" />
        <line x1="2"  y1="12" x2="5"  y2="12" />
        <line x1="19" y1="12" x2="22" y2="12" />
      </svg>
    ),
  },
  {
    label: "Gather",
    description: "Collect requirements through interviews, workshops, and data review.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.90)" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <rect x="8" y="2" width="8" height="4" rx="1" />
        <rect x="5" y="4" width="14" height="17" rx="2" />
        <line x1="9" y1="11" x2="15" y2="11" />
        <line x1="9" y1="14" x2="13" y2="14" />
      </svg>
    ),
  },
  {
    label: "Analyze",
    description: "Identify root causes, map processes, and surface gaps and opportunities.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.90)" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3"  y="14" width="3" height="7" rx="0.5" fill="rgba(255,255,255,0.80)" stroke="none" />
        <rect x="8"  y="10" width="3" height="11" rx="0.5" fill="rgba(255,255,255,0.80)" stroke="none" />
        <rect x="13" y="6"  width="3" height="15" rx="0.5" fill="rgba(255,255,255,0.80)" stroke="none" />
        <circle cx="19.5" cy="5.5" r="3" />
        <line x1="21.7" y1="7.7" x2="23.5" y2="9.5" />
      </svg>
    ),
  },
  {
    label: "Design",
    description: "Shape solutions through wireframes, user stories, and data models.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.90)" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z" />
      </svg>
    ),
  },
  {
    label: "Evaluate",
    description: "Validate through UAT, stakeholder review, and measurable outcome checks.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.90)" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="9 11 12 14 22 4" />
        <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
      </svg>
    ),
  },
  {
    label: "Improve",
    description: "Close the loop with retrospectives, metrics review, and iterative refinement.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.90)" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="23 4 23 10 17 10" />
        <polyline points="1 20 1 14 7 14" />
        <path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15" />
      </svg>
    ),
  },
];

/* Connector between two stages */
function Connector({ visible, delay }: { visible: boolean; delay: number }) {
  return (
    <div
      style={{
        flexShrink: 0,
        width: 36,
        paddingTop: 96, // align with circle centre: label(48) + gap(8) + half-circle(44) - half-dot(2) ≈ 98
        alignSelf: "flex-start",
        display: "flex",
        alignItems: "center",
      }}
    >
      {/* Left dot */}
      <div style={{
        width: 5, height: 5, borderRadius: "50%",
        background: "rgba(16,185,129,0.60)",
        flexShrink: 0,
        opacity: visible ? 1 : 0,
        transition: `opacity 200ms ease ${delay}ms`,
      }} />
      {/* Dashed line */}
      <div style={{
        flex: 1,
        height: 1.5,
        background: "repeating-linear-gradient(90deg, rgba(16,185,129,0.45) 0, rgba(16,185,129,0.45) 4px, transparent 4px, transparent 9px)",
        transformOrigin: "left",
        transform: visible ? "scaleX(1)" : "scaleX(0)",
        transition: `transform 350ms ease ${delay + 60}ms`,
      }} />
      {/* Arrowhead */}
      <svg width="7" height="10" viewBox="0 0 7 10" style={{ flexShrink: 0 }}>
        <path
          d="M 0 0 L 7 5 L 0 10 Z"
          fill="rgba(16,185,129,0.65)"
          opacity={visible ? 1 : 0}
          style={{ transition: `opacity 150ms ease ${delay + 380}ms` }}
        />
      </svg>
    </div>
  );
}

export function ProcessFlow() {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVisible(true); },
      { threshold: 0.1 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div ref={ref}>
      <style>{`
        @media (max-width: 640px) {
          .pf-row { overflow-x: auto; padding-bottom: 1rem; }
          .pf-stage { min-width: 110px; }
        }
      `}</style>

      <div className="pf-row" style={{ display: "flex", alignItems: "flex-start" }}>
        {STAGES.map((stage, i) => (
          <React.Fragment key={stage.label}>

            {/* ── Stage column ── */}
            <div
              className="pf-stage"
              style={{
                flex: 1,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                textAlign: "center",
                opacity: visible ? 1 : 0,
                transform: visible ? "none" : "translateY(14px)",
                transition: `opacity 440ms ease ${i * 110}ms, transform 440ms ease ${i * 110}ms`,
              }}
            >
              {/* Label — fixed-height area so circles stay aligned */}
              <p
                className="font-ui font-semibold text-sm text-[var(--text-primary)]"
                style={{ height: 48, display: "flex", alignItems: "flex-end", paddingBottom: 8 }}
              >
                {stage.label}
              </p>

              {/* Circle */}
              <div style={{ position: "relative", width: 88, height: 88 }}>
                {/* Outer dashed ring */}
                <div style={{
                  position: "absolute", inset: 0,
                  borderRadius: "50%",
                  border: "1.5px dashed rgba(16,185,129,0.35)",
                }} />
                {/* Inner solid circle */}
                <div style={{
                  position: "absolute", inset: 9,
                  borderRadius: "50%",
                  background: "#142820",
                  border: "1.5px solid #10B981",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  boxShadow: visible ? "0 0 22px rgba(16,185,129,0.22)" : "none",
                  transition: `box-shadow 600ms ease ${i * 110 + 200}ms`,
                }}>
                  {stage.icon}
                </div>
              </div>

              {/* Description */}
              <p
                className="font-ui font-light text-xs text-[var(--text-secondary)] leading-relaxed"
                style={{ marginTop: 14, padding: "0 4px", maxWidth: 120 }}
              >
                {stage.description}
              </p>
            </div>

            {/* ── Connector ── */}
            {i < STAGES.length - 1 && (
              <Connector visible={visible} delay={i * 110 + 300} />
            )}

          </React.Fragment>
        ))}
      </div>
    </div>
  );
}
