"use client";

import { useRef, useEffect, useState } from "react";

/* ─── Geometry ─── */
const CX = 240;
const CY = 240;
const R  = 130;
const R_LABEL = 188;
const CIRCUMFERENCE = 2 * Math.PI * R; // ≈ 816.8

function toRad(deg: number) { return (deg * Math.PI) / 180; }

/* Stages clockwise from top */
const STAGES = [
  { label: "Plan",     angle: -90 },
  { label: "Gather",   angle: -30 },
  { label: "Analyze",  angle:  30 },
  { label: "Design",   angle:  90 },
  { label: "Evaluate", angle: 150 },
  { label: "Improve",  angle: 210 },
];

/* Arrowhead midpoints between each adjacent pair */
const ARROW_MIDS = [-60, 0, 60, 120, 180, 240];

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
    <div ref={ref} className="flex justify-center">
      <svg
        viewBox="0 0 480 480"
        style={{ width: "min(100%, 460px)" }}
        aria-label="Process cycle: Plan, Gather, Analyze, Design, Evaluate, Improve"
      >
        {/* Dim background ring */}
        <circle
          cx={CX} cy={CY} r={R}
          fill="none"
          stroke="rgba(16,185,129,0.12)"
          strokeWidth={2}
        />

        {/* Animated ring — rotate -90° so it starts at Plan (top) and draws clockwise */}
        <circle
          cx={CX} cy={CY} r={R}
          fill="none"
          stroke="rgba(16,185,129,0.50)"
          strokeWidth={2}
          strokeLinecap="round"
          strokeDasharray={CIRCUMFERENCE}
          strokeDashoffset={visible ? 0 : CIRCUMFERENCE}
          transform={`rotate(-90 ${CX} ${CY})`}
          style={{
            transition: "stroke-dashoffset 1200ms cubic-bezier(0.16,1,0.3,1) 300ms",
          }}
        />

        {/* Clockwise arrowheads at arc midpoints */}
        {ARROW_MIDS.map((deg, i) => {
          const rad = toRad(deg);
          const x = CX + R * Math.cos(rad);
          const y = CY + R * Math.sin(rad);
          return (
            <path
              key={i}
              d="M 0 -5 L 4.5 4 L -4.5 4 Z"
              fill="#10B981"
              transform={`translate(${x} ${y}) rotate(${deg + 180})`}
              opacity={visible ? 0.70 : 0}
              style={{ transition: `opacity 180ms ease ${1380 + i * 20}ms` }}
            />
          );
        })}

        {/* Stage nodes + labels */}
        {STAGES.map((stage, i) => {
          const rad = toRad(stage.angle);
          const nx  = CX + R * Math.cos(rad);
          const ny  = CY + R * Math.sin(rad);
          const lx  = CX + R_LABEL * Math.cos(rad);
          const ly  = CY + R_LABEL * Math.sin(rad);

          /* Text alignment by horizontal position */
          const anchor =
            nx > CX + 15 ? "start" :
            nx < CX - 15 ? "end"   : "middle";

          /* Node appears as the ring arc reaches it */
          const nodeDelay = 300 + i * 200;

          return (
            <g key={stage.label}>
              {/* Glow halo */}
              <circle
                cx={nx} cy={ny} r={26}
                fill="rgba(16,185,129,0.07)"
                opacity={visible ? 1 : 0}
                style={{ transition: `opacity 300ms ease ${nodeDelay}ms` }}
              />
              {/* Node circle */}
              <circle
                cx={nx} cy={ny} r={20}
                fill="#1C2922"
                stroke="#10B981"
                strokeWidth={1.5}
                opacity={visible ? 1 : 0}
                style={{ transition: `opacity 300ms ease ${nodeDelay}ms` }}
              />
              {/* Step number */}
              <text
                x={nx} y={ny}
                textAnchor="middle"
                dominantBaseline="central"
                fontSize={10}
                fontFamily="monospace"
                letterSpacing="0.08em"
                fill="#10B981"
                opacity={visible ? 0.85 : 0}
                style={{ transition: `opacity 250ms ease ${nodeDelay + 80}ms` }}
              >
                {`0${i + 1}`}
              </text>
              {/* Stage label */}
              <text
                x={lx} y={ly}
                textAnchor={anchor}
                dominantBaseline="central"
                fontSize={15}
                fontFamily="'Cormorant Garamond', Georgia, serif"
                fontWeight={500}
                fill="rgba(255,255,255,0.90)"
                opacity={visible ? 1 : 0}
                style={{ transition: `opacity 350ms ease ${nodeDelay + 150}ms` }}
              >
                {stage.label}
              </text>
            </g>
          );
        })}

        {/* Subtle center label */}
        <text
          x={CX} y={CY - 9}
          textAnchor="middle"
          dominantBaseline="central"
          fontSize={10}
          fontFamily="monospace"
          letterSpacing="0.14em"
          fill="rgba(16,185,129,0.30)"
          opacity={visible ? 1 : 0}
          style={{ transition: "opacity 500ms ease 1600ms" }}
        >
          HOW I
        </text>
        <text
          x={CX} y={CY + 9}
          textAnchor="middle"
          dominantBaseline="central"
          fontSize={10}
          fontFamily="monospace"
          letterSpacing="0.14em"
          fill="rgba(16,185,129,0.30)"
          opacity={visible ? 1 : 0}
          style={{ transition: "opacity 500ms ease 1700ms" }}
        >
          WORK
        </text>
      </svg>
    </div>
  );
}
