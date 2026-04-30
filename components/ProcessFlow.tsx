"use client";

import { useRef, useEffect, useState } from "react";
import { Tag } from "@/components/ui/Tag";
import { SectionLabel } from "@/components/ui/SectionLabel";

const STAGES = [
  {
    step: "01",
    label: "Discover",
    subtitle: "Understand the problem",
    tools: ["CATWOE", "Gap Analysis", "Workshop Facilitation"],
  },
  {
    step: "02",
    label: "Analyse",
    subtitle: "Structure the complexity",
    tools: ["Root Cause Analysis", "MCDA", "SQL"],
  },
  {
    step: "03",
    label: "Design",
    subtitle: "Shape the solution",
    tools: ["Figma", "User Stories", "ER Modelling"],
  },
  {
    step: "04",
    label: "Deliver",
    subtitle: "Execute with rigour",
    tools: ["UAT", "Agile / Scrum", "Stakeholder Reporting"],
  },
  {
    step: "05",
    label: "Measure",
    subtitle: "Close the loop",
    tools: ["Mixpanel", "A/B Testing", "Retention Analytics"],
  },
];

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
          .pf-grid { grid-template-columns: 1fr !important; gap: 2.5rem !important; }
          .pf-rail  { display: none !important; }
          .pf-node  { flex-direction: row !important; align-items: flex-start !important; text-align: left !important; gap: 1rem; }
          .pf-node-body { align-items: flex-start !important; }
          .pf-tags  { justify-content: flex-start !important; }
        }
      `}</style>

      <SectionLabel className="mb-4">Process</SectionLabel>
      <h2 className="mb-2 font-display font-semibold text-4xl leading-tight text-[var(--text-primary)] sm:text-5xl">
        How I work
      </h2>
      <p className="mb-14 font-ui font-light text-base text-[var(--text-secondary)]">
        A repeatable process from brief to outcome.
      </p>

      {/* Flow diagram */}
      <div
        className="pf-grid"
        style={{
          position: "relative",
          display: "grid",
          gridTemplateColumns: "repeat(5, 1fr)",
          gap: "0.5rem",
        }}
      >
        {/* Connecting rail — scaleX animates left → right */}
        <div
          className="pf-rail"
          style={{
            position: "absolute",
            top: 32,
            left: "10%",
            right: "10%",
            height: 1,
            background: "linear-gradient(90deg, rgba(16,185,129,0.15), rgba(16,185,129,0.40), rgba(16,185,129,0.15))",
            transformOrigin: "left",
            transform: visible ? "scaleX(1)" : "scaleX(0)",
            transition: "transform 1000ms cubic-bezier(0.16,1,0.3,1) 350ms",
            zIndex: 0,
          }}
        />

        {/* Nodes */}
        {STAGES.map((stage, i) => (
          <div
            key={stage.label}
            className="pf-node"
            style={{
              position: "relative",
              zIndex: 1,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              opacity: visible ? 1 : 0,
              transform: visible ? "none" : "translateY(22px)",
              transition: `opacity 500ms ease ${300 + i * 130}ms, transform 500ms ease ${300 + i * 130}ms`,
            }}
          >
            {/* Circle */}
            <div
              style={{
                width: 64,
                height: 64,
                borderRadius: "50%",
                border: "1.5px solid #10B981",
                background: "var(--bg-elevated)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0,
                boxShadow: visible
                  ? "0 0 0 6px rgba(16,185,129,0.07), 0 0 24px rgba(16,185,129,0.18)"
                  : "none",
                transition: `box-shadow 600ms ease ${450 + i * 130}ms`,
              }}
            >
              <span
                className="font-data"
                style={{ fontSize: 13, color: "#10B981", letterSpacing: "0.08em" }}
              >
                {stage.step}
              </span>
            </div>

            {/* Text + tags */}
            <div
              className="pf-node-body"
              style={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center" }}
            >
              <p
                className="font-display font-normal text-[var(--text-primary)]"
                style={{ marginTop: "1rem", fontSize: "clamp(0.95rem, 1.4vw, 1.1rem)" }}
              >
                {stage.label}
              </p>
              <p
                className="font-data uppercase tracking-widest text-[var(--text-muted)]"
                style={{ fontSize: 10, marginTop: "0.3rem", lineHeight: 1.5 }}
              >
                {stage.subtitle}
              </p>
              <div
                className="pf-tags"
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  justifyContent: "center",
                  gap: "0.3rem",
                  marginTop: "0.75rem",
                  opacity: visible ? 1 : 0,
                  transition: `opacity 400ms ease ${700 + i * 130}ms`,
                }}
              >
                {stage.tools.map((t) => (
                  <Tag key={t}>{t}</Tag>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
