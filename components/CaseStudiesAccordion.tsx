"use client";

import { useState } from "react";
import { Tag } from "@/components/ui/Tag";
import { caseStudies } from "@/lib/caseStudies";

/* ─── Chevron Icon ───────────────────────────────────────────────────── */
function ChevronIcon({ open }: { open: boolean }) {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      style={{
        transition: "transform 300ms ease",
        transform: open ? "rotate(180deg)" : "rotate(0deg)",
        flexShrink: 0,
        color: "var(--text-muted)",
      }}
    >
      <path d="M19 9l-7 7-7-7" />
    </svg>
  );
}

/* ─── Component ──────────────────────────────────────────────────────── */
export function CaseStudiesAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (i: number) => {
    setOpenIndex((prev) => (prev === i ? null : i));
  };

  return (
    <div className="space-y-5">
      {caseStudies.map((cs, i) => {
        const isOpen = openIndex === i;

        return (
          <div
            key={i}
            className="rounded-[var(--radius-md)] border border-[var(--border-subtle)] bg-[var(--bg-surface)] overflow-hidden"
            style={{
              boxShadow: "var(--shadow-card)",
              borderTopWidth: "2px",
              borderTopColor: "var(--accent-gold)",
            }}
          >
            {/* Header — always visible, clickable */}
            <button
              type="button"
              onClick={() => toggle(i)}
              className="w-full text-left p-7 transition-colors duration-200"
              style={{
                background: isOpen ? "var(--bg-elevated)" : "transparent",
              }}
              aria-expanded={isOpen}
            >
              <div className="flex flex-wrap items-start justify-between gap-3">
                <div className="flex-1 min-w-0 space-y-1">
                  {cs.client && (
                    <p className="font-display text-xl text-gold leading-tight">
                      {cs.client}
                    </p>
                  )}
                  {!cs.client && (
                    <p className="font-display text-xl text-[var(--text-primary)] leading-tight">
                      {cs.university}
                    </p>
                  )}
                  <h2 className="font-display text-xl text-[var(--text-primary)] leading-snug">
                    {cs.title}
                  </h2>
                  <p className="font-data text-xs text-[var(--text-muted)]">
                    {cs.programme}
                  </p>
                  <p className="font-ui text-sm text-[var(--text-secondary)]">
                    {cs.subtitle}
                  </p>
                </div>
                <ChevronIcon open={isOpen} />
              </div>
            </button>

            {/* Expandable content */}
            <div style={{ overflow: "hidden", maxHeight: isOpen ? "3000px" : "0px", opacity: isOpen ? 1 : 0, transition: "max-height 500ms ease, opacity 300ms ease" }}>
              <div className="px-7 pb-7 space-y-6">

                {/* Four structured blocks */}
                <div className="grid gap-6 sm:grid-cols-2">
                  {/* THE PROBLEM */}
                  <div className="rounded-[var(--radius-sm)] border border-[var(--border-subtle)] bg-[var(--bg-base)] p-5">
                    <p className="mb-2 font-data text-[10px] uppercase tracking-widest text-gold">The Problem</p>
                    <p className="font-ui font-light text-sm text-[var(--text-secondary)] leading-relaxed">{cs.problem}</p>
                  </div>

                  {/* THE SOLUTION */}
                  <div className="rounded-[var(--radius-sm)] border border-[var(--border-subtle)] bg-[var(--bg-base)] p-5">
                    <p className="mb-2 font-data text-[10px] uppercase tracking-widest text-gold">The Solution</p>
                    <p className="font-ui font-light text-sm text-[var(--text-secondary)] leading-relaxed">{cs.solution}</p>
                  </div>
                </div>

                {/* THE OUTCOME — metrics grid */}
                <div>
                  <p className="mb-3 font-data text-[10px] uppercase tracking-widest text-gold">The Outcome</p>
                  <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
                    {cs.results.map((r, j) => (
                      <div key={j} className="rounded-[var(--radius-sm)] border border-[var(--border-subtle)] bg-[var(--bg-base)] p-4">
                        <p className="font-display font-normal text-2xl text-gold leading-none">{r.metric}</p>
                        <p className="mt-1.5 font-data text-xs leading-snug text-[var(--text-muted)]">{r.label}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* TOOLS & METHODS */}
                <div>
                  <p className="mb-3 font-data text-[10px] uppercase tracking-widest text-gold">Tools &amp; Methods</p>
                  <div className="flex flex-wrap gap-2">
                    {cs.skills.map((skill) => (
                      <Tag key={skill}>{skill}</Tag>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
