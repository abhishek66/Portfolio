import type { Metadata } from "next";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Tag } from "@/components/ui/Tag";
import { Divider } from "@/components/ui/Divider";
import { ScrollReveal } from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "Education | Abhishek Manikandan",
  description:
    "Academic background including MSc Business Analysis and Consulting at the University of Strathclyde and BEng Electronics and Communication Engineering.",
};

const modules = [
  "Business Analysis",
  "Financial Modelling",
  "Risk Management",
  "AI & Machine Learning",
  "Sustainability",
  "Consulting Practice",
  "Strategic Management",
  "Data Analytics",
];

export default function Education() {
  return (
    <div className="mx-auto max-w-6xl px-6 lg:px-8 py-20">

      {/* Page header */}
      <ScrollReveal className="mb-20">
        <SectionLabel className="mb-4">Education</SectionLabel>
        <h1 className="font-display font-light text-5xl text-[var(--text-primary)] sm:text-6xl leading-tight">
          Academic Background
        </h1>
        <p className="mt-4 max-w-xl font-ui font-light text-base text-[var(--text-secondary)] leading-relaxed">
          Formal academic training spanning business analysis, consulting, and engineering.
        </p>
      </ScrollReveal>

      <div className="space-y-8">

        {/* ── Strathclyde — featured card ── */}
        <ScrollReveal>
          <div
            className="rounded-[var(--radius-md)] border border-[var(--border-subtle)] bg-[var(--bg-surface)]"
            style={{
              boxShadow: "var(--shadow-card)",
              borderTopWidth: "2px",
              borderTopColor: "var(--accent-gold)",
            }}
          >
            {/* Header */}
            <div className="p-8 border-b border-[var(--border-subtle)]">
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div>
                  <p className="font-data text-xs uppercase tracking-widest mb-2" style={{ color: "rgba(16,185,129,0.65)" }}>
                    Featured · Current
                  </p>
                  <h2 className="font-display font-normal text-4xl text-[var(--text-primary)] leading-tight">
                    University of Strathclyde
                  </h2>
                  <p className="mt-1.5 font-ui font-medium text-base" style={{ color: "#10B981" }}>
                    MSc Business Analysis and Consulting
                  </p>
                </div>
                <div className="flex flex-col items-end gap-1 text-right flex-shrink-0">
                  <span className="font-data text-sm text-[var(--text-secondary)]">2025 – 2026</span>
                  <span className="font-data text-xs text-[var(--text-muted)]">Glasgow, UK</span>
                </div>
              </div>

              {/* Summary */}
              <p className="mt-5 font-ui font-light text-sm leading-relaxed text-[var(--text-secondary)] max-w-2xl">
                A practitioner-focused MSc combining rigorous analytical frameworks with live consulting
                engagements. Applied tools including ISO 31000, MCDA, Lean Six Sigma, DCF modelling, and
                machine learning across real client briefs from Deloitte, NHS England, StormID, and WB Alloys Group.
              </p>
            </div>

            {/* Modules */}
            <div className="p-8">
              <p className="font-data text-xs uppercase tracking-widest mb-4 text-[var(--text-muted)]">
                Core Modules
              </p>
              <div className="flex flex-wrap gap-2">
                {modules.map((mod) => (
                  <Tag key={mod}>{mod}</Tag>
                ))}
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* ── Akshaya College — standard card ── */}
        <ScrollReveal delay={80}>
          <div
            className="rounded-[var(--radius-md)] border border-[var(--border-subtle)] bg-[var(--bg-surface)] p-7"
            style={{
              boxShadow: "var(--shadow-card)",
              borderTopWidth: "2px",
              borderTopColor: "var(--accent-gold)",
            }}
          >
            <div className="flex flex-wrap items-start justify-between gap-3">
              <div>
                <h2 className="font-display text-2xl text-[var(--text-primary)]">
                  Akshaya College of Engineering and Technology
                </h2>
                <p className="mt-0.5 font-ui font-medium text-sm text-[var(--text-secondary)]">
                  BEng Electronics and Communication Engineering
                </p>
                <p className="mt-1 font-data text-xs text-[var(--text-muted)]">
                  First Class — 7.1 / 10 CGPA
                </p>
              </div>
              <div className="flex flex-col items-end gap-1 text-right">
                <span className="font-data text-xs text-[var(--text-muted)]">2013 – 2017</span>
                <span className="font-data text-xs text-[var(--text-muted)] opacity-60">Coimbatore, India</span>
              </div>
            </div>
          </div>
        </ScrollReveal>

      </div>

      {/* Bottom divider */}
      <div className="mt-20">
        <Divider />
      </div>
    </div>
  );
}
