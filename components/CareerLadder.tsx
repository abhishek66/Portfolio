"use client";

import { useRef, useEffect, useState } from "react";
import { Tag } from "@/components/ui/Tag";

/* ─── Career data: oldest (bottom) → newest (top) ─── */
const RUNGS = [
  {
    label: "Amazon",
    company: "Amazon",
    role: "Quality Analyst",
    period: "Jun 2017 – Feb 2018",
    bullets: [
      "Conducted quality audits and process evaluations to ensure operational standards were consistently met",
      "Identified process gaps and flagged improvement opportunities across workflows",
      "Collaborated with operations teams to implement corrective actions and close gaps",
    ],
    skills: ["Quality Assurance", "Process Auditing", "Operations"],
  },
  {
    label: "Sky UK",
    company: "Sky UK · First Source Solutions",
    role: "Technical Analyst",
    period: "Feb 2018 – Jan 2020",
    bullets: [
      "Provided technical support and analysis for Sky UK customer operations, resolving complex queries efficiently",
      "Tracked and reported on technical performance metrics to support operational decision-making",
      "Worked within a large BPO environment serving a major UK telecommunications and media client",
    ],
    skills: ["Technical Support", "Data Reporting", "Telecoms", "CRM"],
  },
  {
    label: "NoBroker",
    company: "NoBroker",
    role: "CRM Specialist",
    period: "Feb 2020 – Jan 2022",
    bullets: [
      "Managed CRM operations and customer engagement workflows for India's largest proptech platform",
      "Designed and executed targeted communication campaigns to improve lead conversion and retention",
      "Analysed customer interaction data to optimise journey touchpoints and reduce drop-off",
    ],
    skills: ["CRM", "Customer Engagement", "Proptech", "Campaign Management", "Data Analysis"],
  },
  {
    label: "Kapture CX",
    company: "Kapture CX",
    role: "CRM Specialist",
    period: "Jan 2022 – Jul 2022",
    bullets: [
      "Led end-to-end deployment and optimisation of CRM solutions across 3 enterprise accounts in BFSI and telecom sectors",
      "Designed and conducted structured training programs improving platform adoption rates by 40%",
      "Analysed 10,000+ customer interactions to identify service gaps and operational inefficiencies",
      "Recommended and implemented workflow changes that reduced average handle time by 15%",
      "Delivered CRM campaign insights that improved retention metrics by 12% in pilot cohort",
    ],
    skills: ["CRM Implementation", "Enterprise Client Management", "Training & Adoption", "BFSI", "Telecom"],
  },
  {
    label: "AppsForBharat",
    company: "AppsForBharat",
    role: "Product Intern → Product Analyst",
    period: "Jul 2022 – Nov 2023",
    bullets: [
      "Built a cross-sell engine with A/B tested pricing bundles for puja products, deployed in 3 weeks, driving +23% average order value",
      "Redesigned referral sharing flow end-to-end — optimised WhatsApp copy, incentive timing, and placement, lifting share-to-install by 58%",
      "Architected 15+ automated CRM journeys across IVR, bots, push notifications, and in-app banners, reducing Q2 2023 churn by 8% and saving 120 manual hours/week",
      "Scoped and shipped background audio feature for Sri Mandir, improving session length by 19% through UX redesign",
      "Improved Seva section visibility to drive feature discoverability and monetisation lift across the app",
      "Built leadership dashboards in Mixpanel and Metabase tracking retention cohorts, LTV curves, and funnel drop-offs across 5M+ monthly events",
    ],
    skills: ["Product Analytics", "A/B Testing", "CRM Automation", "Mixpanel", "Metabase", "Growth", "Figma"],
  },
  {
    label: "Prodsmiths",
    company: "Prodsmiths",
    role: "Associate PM · Business Analyst",
    period: "Oct 2023 – Jan 2025",
    bullets: [
      "Owned the full product lifecycle end-to-end: scoping, wireframing in Figma, user story authoring, UAT, and production deployment across 6 sprints",
      "Designed core data architecture: built SQL-based ER models enabling real-time recovery forecasting, replacing manual Excel reporting in use since 2008",
      "Cut portfolio onboarding from 14 days to 48 hours by digitising legal, financial, and valuation due diligence workflows",
      "Managed client relationships: weekly stakeholder updates with C-level sponsors, RCA for production issues, and change request prioritisation under regulatory scope changes",
      "Maintained 94% on-time delivery across all sprints despite mid-cycle regulatory changes",
    ],
    skills: ["Product Management", "SQL", "Figma", "Data Architecture", "ER Modelling", "UAT", "Agile", "RCA"],
  },
];

const N = RUNGS.length;
const SCROLL_PER_STEP = 320; // px of extra scroll per career level

/* ─── SVG ladder geometry ─── */
const SVG_W = 140;
const SVG_H = 560;
const RAIL_L = 44;
const RAIL_R = 96;
const TOP_Y = 48;
const BOT_Y = SVG_H - 48;
const STEP_Y = (BOT_Y - TOP_Y) / (N - 1);

function rungY(i: number) {
  return BOT_Y - i * STEP_Y;
}

/* ─── Stick figure climber ─── */
function Climber({ svgY, animStep }: { svgY: number; animStep: number }) {
  const leftUp = animStep % 2 === 0;
  const c = "#10B981";
  return (
    <g style={{ transform: `translateY(${svgY}px)`, transition: "transform 350ms cubic-bezier(0.34,1.56,0.64,1)" }}>
      {/* Glow halo */}
      <circle r={16} fill={c} opacity={0.14} />
      {/* Head */}
      <circle cy={-19} r={8} fill={c} />
      {/* Body */}
      <line x1={0} y1={-11} x2={0} y2={5} stroke={c} strokeWidth={2.5} strokeLinecap="round" />
      {/* Arms — alternating for climbing feel */}
      <line x1={0} y1={-7} x2={leftUp ? -14 : -7} y2={leftUp ? -17 : -3} stroke={c} strokeWidth={2} strokeLinecap="round" />
      <line x1={0} y1={-7} x2={leftUp ? 7 : 14} y2={leftUp ? -3 : -17} stroke={c} strokeWidth={2} strokeLinecap="round" />
      {/* Legs */}
      <line x1={0} y1={5} x2={-7} y2={17} stroke={c} strokeWidth={2} strokeLinecap="round" />
      <line x1={0} y1={5} x2={7} y2={17} stroke={c} strokeWidth={2} strokeLinecap="round" />
    </g>
  );
}

/* ─── Main component ─── */
export function CareerLadder() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handler = () => {
      const el = sectionRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const scrollable = el.offsetHeight - window.innerHeight;
      const p = Math.max(0, Math.min(1, -rect.top / scrollable));
      setProgress(p);
    };
    window.addEventListener("scroll", handler, { passive: true });
    handler();
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const activeIndex = Math.min(N - 1, Math.round(progress * (N - 1)));
  const animStep = Math.floor(progress * (N - 1) * 5);
  const svgPersonY = BOT_Y - progress * (BOT_Y - TOP_Y);
  const active = RUNGS[activeIndex];

  return (
    <>
      <style>{`
        @keyframes card-enter {
          from { opacity: 0; transform: translateY(14px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .ladder-card-enter { animation: card-enter 320ms ease forwards; }
      `}</style>

      {/* Tall scroll area — gives the section its scroll budget */}
      <div
        ref={sectionRef}
        style={{ height: `calc(100vh + ${(N - 1) * SCROLL_PER_STEP}px)` }}
      >
        {/* Sticky viewport */}
        <div
          style={{
            position: "sticky",
            top: 0,
            height: "100vh",
            display: "flex",
            alignItems: "stretch",
            overflow: "hidden",
          }}
        >
          {/* ── Left: Ladder SVG ── */}
          <div
            style={{
              width: "clamp(120px, 18vw, 200px)",
              flexShrink: 0,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              padding: "2rem 0",
            }}
          >
            <svg
              viewBox={`0 0 ${SVG_W} ${SVG_H}`}
              style={{ height: "78vh", width: "auto", overflow: "visible" }}
              aria-hidden="true"
            >
              {/* Full rails (dim) */}
              <line x1={RAIL_L} y1={TOP_Y} x2={RAIL_L} y2={BOT_Y} stroke="rgba(16,185,129,0.18)" strokeWidth={3} strokeLinecap="round" />
              <line x1={RAIL_R} y1={TOP_Y} x2={RAIL_R} y2={BOT_Y} stroke="rgba(16,185,129,0.18)" strokeWidth={3} strokeLinecap="round" />

              {/* Climbed portion of rails (bright) */}
              <line x1={RAIL_L} y1={svgPersonY} x2={RAIL_L} y2={BOT_Y} stroke="rgba(16,185,129,0.65)" strokeWidth={3} strokeLinecap="round" />
              <line x1={RAIL_R} y1={svgPersonY} x2={RAIL_R} y2={BOT_Y} stroke="rgba(16,185,129,0.65)" strokeWidth={3} strokeLinecap="round" />

              {/* Rungs */}
              {RUNGS.map((rung, i) => {
                const y = rungY(i);
                const isPast    = i < activeIndex;
                const isCurrent = i === activeIndex;
                return (
                  <g key={i}>
                    <line
                      x1={RAIL_L}
                      y1={y}
                      x2={RAIL_R}
                      y2={y}
                      stroke={isCurrent ? "#10B981" : isPast ? "rgba(16,185,129,0.55)" : "rgba(16,185,129,0.18)"}
                      strokeWidth={isCurrent ? 3.5 : 2}
                      strokeLinecap="round"
                    />
                    {/* Dot on rail */}
                    <circle
                      cx={RAIL_L}
                      cy={y}
                      r={isCurrent ? 5 : 3}
                      fill={isCurrent ? "#10B981" : isPast ? "rgba(16,185,129,0.55)" : "rgba(16,185,129,0.20)"}
                    />
                    <circle
                      cx={RAIL_R}
                      cy={y}
                      r={isCurrent ? 5 : 3}
                      fill={isCurrent ? "#10B981" : isPast ? "rgba(16,185,129,0.55)" : "rgba(16,185,129,0.20)"}
                    />
                    {/* Label to the right */}
                    <text
                      x={RAIL_R + 10}
                      y={y + 4}
                      fontSize={9}
                      fill={isCurrent ? "#10B981" : isPast ? "rgba(16,185,129,0.50)" : "rgba(255,255,255,0.22)"}
                      fontFamily="monospace"
                      fontWeight={isCurrent ? "bold" : "normal"}
                    >
                      {rung.label}
                    </text>
                  </g>
                );
              })}

              {/* Climber */}
              <Climber svgY={svgPersonY} animStep={animStep} />
            </svg>
          </div>

          {/* ── Right: Career card ── */}
          <div
            style={{
              flex: 1,
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              padding: "2rem clamp(1.5rem, 5vw, 4rem)",
              overflow: "hidden",
            }}
          >
            {/* Step counter */}
            <p
              className="font-data text-[10px] uppercase tracking-widest mb-6"
              style={{ color: "rgba(16,185,129,0.60)" }}
            >
              {activeIndex + 1} / {N} &nbsp;·&nbsp; {active.period}
            </p>

            {/* Card — re-animates on index change */}
            <div
              key={activeIndex}
              className="ladder-card-enter"
            >
              {/* Company + role */}
              <h2
                className="font-display font-normal leading-tight mb-1"
                style={{
                  fontSize: "clamp(2rem, 5vw, 3.5rem)",
                  color: "var(--text-primary)",
                }}
              >
                {active.company}
              </h2>
              <p
                className="font-ui font-medium text-base mb-6"
                style={{ color: "#10B981" }}
              >
                {active.role}
              </p>

              {/* Bullets */}
              <ul className="space-y-3 mb-8">
                {active.bullets.map((b, i) => (
                  <li key={i} className="flex gap-3 font-ui font-light text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                    <span
                      className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full"
                      style={{ background: "#10B981" }}
                    />
                    {b}
                  </li>
                ))}
              </ul>

              {/* Skills */}
              <div className="flex flex-wrap gap-2">
                {active.skills.map((s) => (
                  <Tag key={s}>{s}</Tag>
                ))}
              </div>
            </div>

            {/* Progress dots */}
            <div className="flex gap-2 mt-10">
              {RUNGS.map((_, i) => (
                <div
                  key={i}
                  style={{
                    height: 6,
                    width: i === activeIndex ? 22 : 6,
                    borderRadius: 9999,
                    background: i === activeIndex ? "#10B981" : i < activeIndex ? "rgba(16,185,129,0.45)" : "rgba(16,185,129,0.18)",
                    transition: "width 250ms ease, background 250ms ease",
                  }}
                />
              ))}
            </div>

            {/* Scroll hint — fades out once you start scrolling */}
            {progress < 0.04 && (
              <p
                className="font-data text-[10px] uppercase tracking-widest mt-8"
                style={{ color: "rgba(16,185,129,0.45)", animation: "chevron-bounce 1.8s ease-in-out infinite" }}
              >
                Scroll to climb ↓
              </p>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
