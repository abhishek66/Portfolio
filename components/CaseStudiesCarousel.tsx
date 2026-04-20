"use client";

import { useState } from "react";
import { Tag } from "@/components/ui/Tag";

const items = [
  { client: "Deloitte",                    title: "Improving Workforce Strategy for a Modern Police Force",            year: "2025", skill: "Root Cause Analysis" },
  { client: "NHS England",                 title: "A&E Crisis: Machine Learning Analytics Report",                    year: "2026", skill: "Random Forest" },
  { client: "WB Alloys Group",             title: "Enterprise Risk Management Framework",                             year: "2026", skill: "ISO 31000" },
  { client: "StormID",                     title: "AI Workflow Optimisation for a Scottish Local Authority",          year: "2025", skill: "Lean Six Sigma" },
  { client: "University of Strathclyde",   title: "Life Cycle Assessment of a Residential Building",                 year: "2026", skill: "MCDA" },
  { client: "STAHL",                       title: "IIoT Rental Model Feasibility Study",                              year: "2025", skill: "DCF Analysis" },
];

const track = [...items, ...items];

export function CaseStudiesCarousel() {
  const [paused, setPaused] = useState(false);

  return (
    <div
      className="overflow-hidden w-full"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div
        className="flex gap-5"
        style={{
          width: "max-content",
          animation: "marquee 35s linear infinite",
          animationPlayState: paused ? "paused" : "running",
        }}
      >
        {track.map((item, i) => (
          <div
            key={i}
            className="w-[280px] flex-shrink-0 rounded-[var(--radius-md)] border border-[var(--border-subtle)] bg-[var(--bg-surface)] p-5 flex flex-col gap-3"
            style={{ boxShadow: "var(--shadow-card)" }}
          >
            <div className="flex items-start justify-between gap-2">
              <span className="font-display text-lg text-gold leading-tight">{item.client}</span>
              <span className="font-data text-xs text-[var(--text-muted)] flex-shrink-0">{item.year}</span>
            </div>
            <p className="font-ui font-light text-sm text-[var(--text-secondary)] leading-snug line-clamp-2">
              {item.title}
            </p>
            <div className="mt-auto">
              <Tag>{item.skill}</Tag>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
