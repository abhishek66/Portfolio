import type { Metadata } from "next";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Divider } from "@/components/ui/Divider";
import { ScrollReveal } from "@/components/ScrollReveal";
import { ExperienceTimeline } from "@/components/ExperienceTimeline";

export const metadata: Metadata = {
  title: "Experience | Abhishek Manikandan",
  description:
    "Product management and business analysis experience across Prodsmiths, AppsForBharat, and Kapture CX.",
};

type EducationEntry = {
  institution: string;
  location: string;
  degree: string;
  grade?: string;
  period: string;
  accent: string;
};

const educationEntries: EducationEntry[] = [
  {
    institution: "University of Strathclyde",
    location: "Glasgow, UK",
    degree: "MSc Business Analysis and Consulting",
    period: "2025 – 2026",
    accent: "gold",
  },
  {
    institution: "Akshaya College of Engineering and Technology",
    location: "Coimbatore, India",
    degree: "BEng Electronics and Communication",
    grade: "First Class — 7.7/10",
    period: "2013 – 2017",
    accent: "gold-muted",
  },
];

const accentLineColor: Record<string, string> = {
  gold:       "var(--accent-gold)",
  "gold-muted": "rgba(201,168,76,0.45)",
};

export default function Experience() {
  return (
    <div className="mx-auto max-w-6xl px-6 lg:px-8 py-20">

      {/* Page header */}
      <ScrollReveal className="mb-20">
        <SectionLabel className="mb-4">Career</SectionLabel>
        <h1 className="font-display font-normal text-5xl text-[var(--text-primary)] sm:text-6xl leading-tight">
          Work Experience
        </h1>
        <p className="mt-4 max-w-xl font-ui font-light text-base text-[var(--text-secondary)] leading-relaxed">
          Product management and business analysis experience across fintech,
          consumer apps, and enterprise SaaS.
        </p>
      </ScrollReveal>

      {/* Timeline — client component with accordion */}
      <ExperienceTimeline />

      {/* Education */}
      <div className="mt-28">
        <ScrollReveal className="mb-12">
          <SectionLabel className="mb-4">Education</SectionLabel>
          <h2 className="font-display font-normal text-4xl text-[var(--text-primary)] sm:text-5xl leading-tight">
            Academic Background
          </h2>
        </ScrollReveal>

        <div className="space-y-5">
          {educationEntries.map((edu, i) => (
            <ScrollReveal key={i} delay={i * 80}>
              <div
                className="rounded-[var(--radius-md)] border border-[var(--border-subtle)] bg-[var(--bg-surface)] p-7 transition-all duration-300 hover:border-[var(--border-strong)] hover:bg-[var(--bg-elevated)]"
                style={{
                  boxShadow: "var(--shadow-card)",
                  borderTopWidth: "2px",
                  borderTopColor: accentLineColor[edu.accent] ?? "var(--accent-gold)",
                }}
              >
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div>
                    <h3 className="font-display font-normal text-2xl text-[var(--text-primary)]">
                      {edu.institution}
                    </h3>
                    <p className="mt-0.5 font-ui font-medium text-sm text-[var(--text-secondary)]">
                      {edu.degree}
                    </p>
                    {edu.grade && (
                      <p className="mt-1 font-data text-xs text-[var(--text-muted)]">
                        {edu.grade}
                      </p>
                    )}
                  </div>
                  <div className="flex flex-col items-end gap-1 text-right">
                    <span className="font-data text-xs text-[var(--text-muted)]">
                      {edu.period}
                    </span>
                    <span className="font-data text-xs text-[var(--text-muted)] opacity-60">
                      {edu.location}
                    </span>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>

      {/* Bottom divider */}
      <div className="mt-28">
        <Divider />
      </div>
    </div>
  );
}
