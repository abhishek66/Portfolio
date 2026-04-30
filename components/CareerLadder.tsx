"use client";

import { useRef, useEffect, useState } from "react";
import { Tag } from "@/components/ui/Tag";

/* ─── Timeline bounds ─── */
const TSTART = 2017 + 5 / 12; // Jun 2017
const TEND   = 2025 + 1 / 12; // a hair past Jan 2025 so the last bar has breathing room
const TSPAN  = TEND - TSTART;
const YEAR_TICKS = [2018, 2019, 2020, 2021, 2022, 2023, 2024, 2025];

function pct(year: number) {
  return ((year - TSTART) / TSPAN) * 100;
}

/* ─── Data ─── */
type Metric = { value: number; prefix?: string; suffix?: string; label: string };

const ENTRIES: {
  company: string;
  role: string;
  period: string;
  start: number;
  end: number;
  skills: string[];
  metrics: Metric[] | null;
  tagline: string;
}[] = [
  {
    company: "Prodsmiths",
    role: "Associate PM · Business Analyst",
    period: "Oct 2023 – Jan 2025",
    start: 2023 + 9 / 12,
    end: 2025,
    skills: ["Product Management", "SQL", "Figma", "Data Architecture", "ER Modelling", "UAT", "Agile", "RCA"],
    metrics: [
      { value: 94, suffix: "%",       label: "on-time delivery"    },
      { value: 48, suffix: "h",       label: "onboarding (was 14d)" },
      { value: 6,  suffix: " sprints", label: "delivered"           },
    ],
    tagline: "",
  },
  {
    company: "AppsForBharat",
    role: "Product Intern → Product Analyst",
    period: "Jul 2022 – Nov 2023",
    start: 2022 + 6 / 12,
    end: 2023 + 10 / 12,
    skills: ["Product Analytics", "A/B Testing", "CRM Automation", "Mixpanel", "Metabase", "Growth", "Figma"],
    metrics: [
      { value: 23, prefix: "+", suffix: "%", label: "avg order value"   },
      { value: 58,              suffix: "%", label: "share-to-install"  },
      { value: 8,               suffix: "%", label: "churn reduction"   },
    ],
    tagline: "",
  },
  {
    company: "Kapture CX",
    role: "CRM Specialist",
    period: "Jan 2022 – Jul 2022",
    start: 2022,
    end: 2022 + 6 / 12,
    skills: ["CRM Implementation", "Enterprise Client Management", "Training & Adoption", "BFSI", "Telecom"],
    metrics: [
      { value: 40, suffix: "%", label: "adoption increase" },
      { value: 15, suffix: "%", label: "handle time cut"   },
      { value: 12, suffix: "%", label: "retention lift"    },
    ],
    tagline: "",
  },
  {
    company: "NoBroker",
    role: "CRM Specialist",
    period: "Feb 2020 – Jan 2022",
    start: 2020 + 1 / 12,
    end: 2022,
    skills: ["CRM", "Customer Engagement", "Proptech", "Campaign Management", "Data Analysis"],
    metrics: null,
    tagline: "CRM ops and engagement campaigns for India's largest proptech platform",
  },
  {
    company: "Sky UK · First Source",
    role: "Technical Analyst",
    period: "Feb 2018 – Jan 2020",
    start: 2018 + 1 / 12,
    end: 2020,
    skills: ["Technical Support", "Data Reporting", "Telecoms", "CRM"],
    metrics: null,
    tagline: "Technical support and performance reporting for Sky UK BPO operations",
  },
  {
    company: "Amazon",
    role: "Quality Analyst",
    period: "Jun 2017 – Feb 2018",
    start: 2017 + 5 / 12,
    end: 2018 + 1 / 12,
    skills: ["Quality Assurance", "Process Auditing", "Operations"],
    metrics: null,
    tagline: "Quality audits and process evaluations across operational workflows",
  },
];

/* ─── Count-up hook ─── */
function CountUp({
  to, prefix = "", suffix = "", active, delay = 0,
}: {
  to: number; prefix?: string; suffix?: string; active: boolean; delay?: number;
}) {
  const [val, setVal] = useState(0);
  useEffect(() => {
    if (!active) return;
    let raf: number;
    const timer = setTimeout(() => {
      const duration = 1200;
      const t0 = performance.now();
      const tick = (now: number) => {
        const p = Math.min((now - t0) / duration, 1);
        const eased = 1 - Math.pow(1 - p, 3);
        setVal(Math.round(eased * to));
        if (p < 1) raf = requestAnimationFrame(tick);
      };
      raf = requestAnimationFrame(tick);
    }, delay);
    return () => { clearTimeout(timer); cancelAnimationFrame(raf); };
  }, [active, to, delay]);
  return <>{prefix}{val}{suffix}</>;
}

/* ─── Single Gantt row ─── */
function GanttRow({ entry }: { entry: typeof ENTRIES[0] }) {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVisible(true); },
      { threshold: 0.15 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const leftPct  = pct(entry.start);
  const widthPct = pct(entry.end) - leftPct;

  return (
    <div
      ref={ref}
      className="gantt-row border-b border-[var(--border-subtle)] py-6"
      style={{
        display: "grid",
        gridTemplateColumns: "var(--gantt-label-w, 220px) 1fr",
        gap: "0 1.5rem",
        alignItems: "start",
        opacity: visible ? 1 : 0,
        transform: visible ? "none" : "translateY(16px)",
        transition: "opacity 480ms ease, transform 480ms ease",
      }}
    >
      {/* Left: label */}
      <div className="pt-0.5">
        <p className="font-display text-xl leading-tight text-[var(--text-primary)]">
          {entry.company}
        </p>
        <p className="mt-1 font-ui font-medium text-xs" style={{ color: "#10B981" }}>
          {entry.role}
        </p>
        <p className="mt-1 font-data text-[10px] uppercase tracking-widest text-[var(--text-muted)]">
          {entry.period}
        </p>
      </div>

      {/* Right: bar + metrics + skills */}
      <div>
        {/* Bar track */}
        <div
          className="relative rounded-full overflow-hidden"
          style={{ height: 14, background: "rgba(16,185,129,0.09)" }}
        >
          {/* Year grid lines inside track */}
          {YEAR_TICKS.map((y) => (
            <div
              key={y}
              style={{
                position: "absolute",
                left: `${pct(y)}%`,
                top: 0,
                bottom: 0,
                width: 1,
                background: "rgba(16,185,129,0.18)",
              }}
            />
          ))}

          {/* Filled bar */}
          <div
            style={{
              position: "absolute",
              left: `${leftPct}%`,
              width: visible ? `${widthPct}%` : "0%",
              height: "100%",
              borderRadius: 9999,
              background: "linear-gradient(90deg, rgba(16,185,129,0.55) 0%, #10B981 100%)",
              boxShadow: visible ? "0 0 12px rgba(16,185,129,0.35)" : "none",
              transition: "width 900ms cubic-bezier(0.16,1,0.3,1)",
            }}
          />
        </div>

        {/* Metrics — count-up numbers */}
        {entry.metrics && (
          <div className="flex flex-wrap gap-6 mt-4">
            {entry.metrics.map((m, i) => (
              <div
                key={i}
                style={{
                  opacity: visible ? 1 : 0,
                  transition: `opacity 350ms ease ${700 + i * 120}ms`,
                }}
              >
                <p
                  className="font-display leading-none"
                  style={{ fontSize: "clamp(1.4rem, 2.8vw, 2rem)", color: "#10B981" }}
                >
                  <CountUp
                    to={m.value}
                    prefix={m.prefix}
                    suffix={m.suffix}
                    active={visible}
                    delay={700 + i * 150}
                  />
                </p>
                <p className="mt-1 font-data text-[10px] uppercase tracking-widest text-[var(--text-muted)]">
                  {m.label}
                </p>
              </div>
            ))}
          </div>
        )}

        {/* Tagline for roles without hard metrics */}
        {!entry.metrics && (
          <p
            className="mt-3 font-ui font-light text-sm text-[var(--text-secondary)] leading-relaxed"
            style={{
              opacity: visible ? 1 : 0,
              transition: "opacity 400ms ease 600ms",
            }}
          >
            {entry.tagline}
          </p>
        )}

        {/* Skill tags */}
        <div
          className="flex flex-wrap gap-1.5 mt-4"
          style={{
            opacity: visible ? 1 : 0,
            transition: `opacity 400ms ease ${entry.metrics ? 1000 : 700}ms`,
          }}
        >
          {entry.skills.map((s) => (
            <Tag key={s}>{s}</Tag>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ─── Main export ─── */
export function CareerLadder() {
  return (
    <>
      <style>{`
        @media (max-width: 640px) {
          .gantt-row      { grid-template-columns: 1fr !important; }
          .gantt-axis     { display: none !important; }
          .gantt-divider  { display: none !important; }
        }
      `}</style>

      {/* Year axis */}
      <div
        className="gantt-axis"
        style={{
          display: "grid",
          gridTemplateColumns: "var(--gantt-label-w, 220px) 1fr",
          gap: "0 1.5rem",
          marginBottom: "0.375rem",
        }}
      >
        <div /> {/* spacer for label column */}
        <div className="relative" style={{ height: 24 }}>
          {YEAR_TICKS.map((y) => (
            <div
              key={y}
              style={{
                position: "absolute",
                left: `${pct(y)}%`,
                transform: "translateX(-50%)",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: 3,
              }}
            >
              <span className="font-data text-[10px]" style={{ color: "rgba(16,185,129,0.50)" }}>
                {y}
              </span>
              <div style={{ width: 1, height: 5, background: "rgba(16,185,129,0.25)" }} />
            </div>
          ))}
        </div>
      </div>

      {/* Axis baseline */}
      <div
        className="gantt-divider"
        style={{
          display: "grid",
          gridTemplateColumns: "var(--gantt-label-w, 220px) 1fr",
          gap: "0 1.5rem",
          marginBottom: "0.25rem",
        }}
      >
        <div />
        <div style={{ height: 1, background: "rgba(16,185,129,0.15)" }} />
      </div>

      {/* Rows */}
      {ENTRIES.map((entry) => (
        <GanttRow key={entry.company} entry={entry} />
      ))}
    </>
  );
}
