"use client";

import { useState } from "react";
import { Tag } from "@/components/ui/Tag";

/* ─── Types ──────────────────────────────────────────────────────────── */
type CaseStudy = {
  label: string;
  tag: string;
  client?: string;
  logo?: string;
  university: string;
  programme: string;
  title: string;
  subtitle: string;
  problem: string;
  solution: string;
  highlights: string[];
  results: { metric: string; label: string }[];
  skills: string[];
};

/* ─── Data ───────────────────────────────────────────────────────────── */
const caseStudies: CaseStudy[] = [
  // 1. Police Force
  {
    label: "Academic Project",
    tag: "Business Analysis & Consulting",
    client: "Deloitte",
    logo: "https://logo.clearbit.com/deloitte.com",
    university: "University of Strathclyde",
    programme: "MSc Business Analysis and Consulting · 2025",
    title: "Improving Workforce Strategy for a Modern Police Force",
    subtitle: "Root cause analysis and strategic recommendations for a Regional Police Force",
    problem: "A Regional Police Force faced critical staffing shortages across Eastern, Western, and Northern divisions — Sergeants, P1 officers, and digital specialists — with no root cause analysis to explain the pattern or guide intervention.",
    solution: "Applied SWOT, 5 Why's, Fishbone Diagram, McKinsey 7S, and RACI Matrix frameworks to diagnose structural failures. Recommended four targeted solutions: admin automation (20–30% workload reduction), accelerated leadership pathways, modernised recruitment, and digital upskilling. Identified Western Force's flexible working model as replicable best practice.",
    highlights: [
      "Conducted quantitative staffing gap analysis across three regional forces identifying critical shortages in Sergeants, P1 officers, and digital specialists",
      "Applied SWOT, 5 Why's, Fishbone Diagram, and McKinsey 7S frameworks to identify root causes",
      "Discovered over-hiring of P2 junior investigators was worsening supervisory overload rather than solving shortages",
      "Mapped responsibilities across all workforce initiatives using a RACI Matrix for implementation governance",
      "Recommended 4 key solutions: admin automation (20-30% workload reduction), leadership pathways, modernised recruitment, and digital upskilling",
      "Identified Western Force's flexible working model as best practice replicable across all divisions",
    ],
    results: [
      { metric: "20-30%", label: "Projected admin workload reduction via automation" },
      { metric: "3 Forces", label: "Eastern, Western & Northern analysed" },
      { metric: "7", label: "Strategic recommendations delivered" },
      { metric: "5", label: "Frameworks applied (SWOT, 5 Why's, Fishbone, McKinsey 7S, RACI)" },
    ],
    skills: [
      "SWOT Analysis", "5 Why's", "Fishbone Diagram", "McKinsey 7S",
      "RACI Matrix", "Workforce Analytics", "Root Cause Analysis", "MS Excel",
    ],
  },
  // 2. NHS A&E
  {
    label: "Academic Project",
    tag: "Business Analysis & Consulting",
    client: "NHS England",
    logo: "https://logo.clearbit.com/england.nhs.uk",
    university: "University of Strathclyde",
    programme: "MSc Business Analysis and Consulting · 2026",
    title: "NHS England A&E Crisis: Machine Learning Analytics Report",
    subtitle: "Predictive modelling and strategic intervention analysis for NHS emergency care demand",
    problem: "NHS England missed its 5% A&E breach target every single month across 49 months of Type 1 data, with demand surging +21.8%, no predictive forecasting in place, and stark regional performance inequality across 96 Trusts.",
    solution: "Built a Random Forest forecasting model (96.33% accuracy, MAPE 3.67%) using 17 engineered features across 5 categories. Developed a season-adjusted Composite Pressure Index and ran MCDA across 4 weighted criteria to rank 6 interventions — recommending Seasonal Resourcing (score 21.31) deployed ahead of the predictable Oct–Feb crisis window.",
    highlights: [
      "Identified 5 critical bottlenecks: demand surge (+21.8%), performance crisis (46.16% breach), wait time escalation, regional inequality, and predictable seasonal pressure",
      "Decoupled wait times into two non-overlapping root causes: manageable 4-12hr A&E friction (peak 300,047 patients) vs critical 12hr+ hospital bed failure (peak 36,653 patients)",
      "Built and validated a Random Forest model with 96.33% accuracy (MAPE 3.67%) across 37 months, using 17 engineered features across 5 categories",
      "Developed a season-adjusted Composite Pressure Index to enable fair cross-month operational ranking",
      "Ran MCDA across 4 weighted categories (Clinical Impact 35%, Operational Feasibility 25%, Strategic Alignment 25%, Economic Efficiency 15%) to rank 6 interventions",
      "Recommended Seasonal Resourcing (top-ranked, score 21.31) deployed in September ahead of the predictable Oct-Feb crisis window",
    ],
    results: [
      { metric: "96.33%", label: "Random Forest forecast accuracy" },
      { metric: "46.16%", label: "Peak 4-hour breach rate (9x above NHS target)" },
      { metric: "0/49", label: "Months the NHS 5% target was met" },
      { metric: "36,653", label: "Peak patients waiting 12+ hours (Jan 2026)" },
    ],
    skills: [
      "Random Forest", "Machine Learning", "MCDA", "Time Series Analysis",
      "Feature Engineering", "Bottleneck Analysis", "NHS Data Analytics", "Python", "Excel",
    ],
  },
  // 3. WB Alloys
  {
    label: "Academic Project",
    tag: "Business Analysis & Consulting",
    client: "WB Alloys Group",
    university: "University of Strathclyde",
    programme: "MSc Business Analysis and Consulting · 2026",
    title: "WB Alloys Group: Enterprise Risk Management Framework",
    subtitle: "ISO 31000:2018-aligned ERM framework and digital dashboard for a £25M multi-site SME",
    problem: "WB Alloys Group, a £25M multi-site SME, managed risk in branch-level silos with no enterprise-wide visibility — threatening ISO 9001, ISO 14001, ISO 45001 accreditations and NCA 3800 nuclear supply chain certification.",
    solution: "Audited 21 existing branch risk documents, consolidated 134 risks into a unified 5×5 Likelihood × Impact register, and designed a 6-tier escalation protocol. Built a 12-tab digital ERM dashboard with real-time KRI monitoring and defined a 4-level Risk Appetite Framework with 12 automated Key Risk Indicators.",
    highlights: [
      "Forensic audit of 21 existing branch risk documents to extract, normalise, and consolidate 134 risks into a unified 5x5 Likelihood x Impact register, enabling enterprise comparison for the first time",
      "Designed a 6-tier escalation protocol with automated IF/Then triggers and a 3-tier governance structure (Board, Executive Team, Branch Managers)",
      "Built a 12-tab digital ERM dashboard prototype using Claude, with real-time KRI monitoring, ISO mapping, branch scorecards, and a board report module",
      "Defined a 4-level Risk Appetite Framework with zero tolerance for all H&S (ISO 45001) and NCA 3800 nuclear compliance violations",
      "Established 12 Key Risk Indicators with automated threshold alerts mapped to ISO 9001, 14001, 45001 and NCA 3800",
      "Designed an AI Risk Agent with 5 modes (Review Due, Score Risk, Analyse, Gaps, Chat) integrated directly into the risk register",
    ],
    results: [
      { metric: "134", label: "Total risks identified & scored across 4 branches" },
      { metric: "6 Tiers", label: "Escalation protocol from Monitor to Immediate" },
      { metric: "12 KRIs", label: "Key Risk Indicators with automated thresholds" },
      { metric: "£25M", label: "Client revenue protected by the framework" },
    ],
    skills: [
      "ISO 31000:2018", "Enterprise Risk Management", "Risk Register Design",
      "KRI Monitoring", "Three Lines Model", "PDCA", "ISO 45001",
      "NCA 3800", "Dashboard Prototyping", "AI Agent Design",
    ],
  },
  // 4. StormID
  {
    label: "Academic Project",
    tag: "Business Analysis & Consulting",
    client: "StormID",
    university: "University of Strathclyde",
    programme: "MSc Business Analysis and Consulting · 2025",
    title: "StormID – AI Workflow Optimisation for a Scottish Local Authority",
    subtitle: "Evaluating how AI can improve service delivery across 10 council workflows",
    problem: "A Scottish Local Authority needed to identify which of its 10 operational workflows would deliver the highest ROI from AI integration, but had no scoring methodology or prioritisation framework to guide the decision.",
    solution: "Developed a custom AI Scoring Framework across 6 weighted criteria, ranked all 10 workflows, and mapped AI components (Convert, Classify, Generate, Validate, Summarise) to the two highest-priority targets. Designed a phased 9-month implementation roadmap with PoC on Workflow 8 followed by parallel Workflow 7 rollout.",
    highlights: [
      "Developed a custom AI Scoring Framework across 6 weighted criteria applied to all 10 workflows",
      "Identified Workflow 7 (Freedom of Information Requests) as top priority, weighted score 40/50",
      "Identified Workflow 8 (Financial Assistance Applications) as second priority, score 33.5/50",
      "Mapped AI components (Convert, Classify, Generate, Validate, Summarise) to each step of both workflows",
      "Designed a 2-phase 9-month implementation roadmap: PoC on Workflow 8, then parallel rollout of Workflow 7",
      "Assessed risks across legal/GDPR compliance, ethics, financial sustainability, and operational governance",
    ],
    results: [
      { metric: "68%", label: "Staff time reduction expected (Workflow 8)" },
      { metric: "57%", label: "Staff time reduction expected (Workflow 7)" },
      { metric: "16,680", label: "Annual applications processed (Workflow 8)" },
      { metric: "460 hrs", label: "Monthly staff hours saved (Workflow 7)" },
    ],
    skills: [
      "Lean Six Sigma", "Business Process Analysis", "AI Scoring Framework",
      "Workflow Modelling", "ROI Analysis", "Stakeholder Mapping", "Process Flowcharting",
    ],
  },
  // 5. LCA
  {
    label: "Academic Project",
    tag: "Business Analysis & Consulting",
    university: "University of Strathclyde",
    programme: "MSc Business Analysis and Consulting · 2026",
    title: "Cradle-to-Gate Life Cycle Assessment of a Residential Building",
    subtitle: "Embodied carbon analysis and low-carbon procurement strategy for a residential build",
    problem: "A residential building project lacked a carbon baseline or low-carbon procurement strategy, with no data identifying which materials drove the highest embodied carbon emissions across the construction supply chain.",
    solution: "Conducted a cradle-to-gate (A1–A3) Life Cycle Assessment using ICE Database V4.1, calculated embodied carbon for concrete (17,374 kgCO₂e), steel (2,353 kgCO₂e), and brick (7,239 kgCO₂e). Applied MCDA across 6 material alternatives and designed a 4-phase, 9-month intervention roadmap aligned with UK Net Zero 2050 targets.",
    highlights: [
      "Calculated embodied carbon emissions for three key materials (concrete: 17,374 kgCO₂e, red bricks: 7,239 kgCO₂e, rebar steel: 2,353 kgCO₂e) using ICE Database V4.1",
      "Identified concrete as the primary emission hotspot despite its lower per-kg intensity, due to its dominant volume (168,684 kg)",
      "Applied MCDA across 6 material options scored on GHG, cost, and feasibility, recommending recycled steel (10/10) and low-carbon concrete (8/10)",
      "Designed a 4-phase, 9-month intervention roadmap from carbon baseline establishment to standardised low-carbon procurement",
      "Demonstrated projected CO₂ savings of 29.8% and a 26.9% reduction in global warming potential via low-carbon material switching",
      "Aligned recommendations with the UK Net Zero 2050 target and the Paris Agreement",
    ],
    results: [
      { metric: "29.8%", label: "Projected CO₂ savings from low-carbon materials" },
      { metric: "17,374 kg", label: "Concrete's total embodied carbon (primary hotspot)" },
      { metric: "3", label: "Materials assessed cradle-to-gate (concrete, steel, brick)" },
      { metric: "9 Months", label: "Phased intervention roadmap duration" },
    ],
    skills: [
      "Life Cycle Assessment (LCA)", "MCDA", "ICE Database",
      "Embodied Carbon Analysis", "Sustainability Strategy",
      "Carbon Hotspot Mapping", "Scenario Analysis",
    ],
  },
  // 6. STAHL
  {
    label: "Academic Project",
    tag: "Business Analysis & Consulting",
    client: "STAHL",
    university: "University of Strathclyde",
    programme: "MSc Business Analysis and Consulting · 2025",
    title: "STAHL – IIoT Rental Model Feasibility Study",
    subtitle: "10-year financial and strategic feasibility study for an IIoT-enabled rental transition",
    problem: "STAHL, a heavy equipment manufacturer, needed to evaluate whether transitioning from traditional product sales to an IIoT-enabled rental model was financially and strategically viable over a 10-year horizon.",
    solution: "Built a DCF financial model across small, medium, and large fleet scenarios, applied CATWOE to map stakeholders and transformation boundaries, and delivered a 5-phase transformation roadmap with phased CapEx deployment (40/30/20/10% across 5 years). Modelled IIoT-driven predictive maintenance reducing downtime by up to 15%.",
    highlights: [
      "Built a DCF financial model across small, medium, and large fleet scenarios",
      "Applied CATWOE framework to map stakeholders and transformation boundaries",
      "Identified that positive cash flow is achievable by Year 6–7 (base case, 65% utilisation)",
      "Recommended phased CapEx deployment: 40/30/20/10% across 5 years",
      "Projected EBITDA improvement from –12% to 37% by 2030; IRR of 9.8%",
      "Modelled IIoT-driven predictive maintenance reducing downtime by up to 15%",
    ],
    results: [
      { metric: "9.8%", label: "Projected IRR" },
      { metric: "37%", label: "EBITDA at maturity (2030)" },
      { metric: "~7 yrs", label: "Payback period" },
      { metric: "$23M+", label: "Projected revenue by 2030" },
    ],
    skills: [
      "DCF Analysis", "CATWOE", "Scenario Analysis",
      "Financial Modelling", "IIoT Strategy", "Stakeholder Mapping", "Excel",
    ],
  },
];

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
