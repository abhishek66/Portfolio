import type { Metadata } from "next";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Divider } from "@/components/ui/Divider";
import { Tag } from "@/components/ui/Tag";
import { ScrollReveal } from "@/components/ScrollReveal";
import { AnimatedStatGrid } from "@/components/AnimatedStatGrid";
import { ProcessFlow } from "@/components/ProcessFlow";

export const metadata: Metadata = {
  title: "About | Abhishek Manikandan",
  description: "Business Analyst and Consultant with four years of experience across consulting, consumer tech, and enterprise CRM.",
};

const skillGroups = [
  {
    category: "Business Analysis & Consulting",
    skills: [
      "Business Analysis", "Requirements Gathering", "Process Mapping",
      "Stakeholder Management", "Solutioning", "Root Cause Analysis",
      "Workshop Facilitation", "Gap Analysis",
    ],
  },
  {
    category: "Product Management",
    skills: [
      "Product Discovery", "Roadmapping", "User Research", "PRD Writing",
      "User Stories", "Wireframing", "UAT", "Sprint Planning",
      "Prioritisation", "Go-to-Market", "Product Lifecycle", "Deployment",
    ],
  },
  {
    category: "Data & Analytics",
    skills: [
      "SQL", "Data Architecture", "ER Modelling", "Mixpanel", "Metabase",
      "A/B Testing", "Funnel Analysis", "Cohort Analysis",
      "Retention Analytics", "Dashboard Design",
    ],
  },
  {
    category: "Strategy & Frameworks",
    skills: [
      "CATWOE", "Lean Six Sigma", "ISO 31000", "MCDA", "DCF Modelling",
      "Financial Modelling", "Risk Management", "SWOT",
      "Fishbone Diagram", "McKinsey 7S",
    ],
  },
  {
    category: "Delivery & Tools",
    skills: [
      "Figma", "Jira", "Agile / Scrum", "Excel", "PowerPoint",
      "Stakeholder Reporting", "Change Management",
      "Deployment Management", "RCA", "MS Office", "G-Suite",
    ],
  },
];

export default function About() {
  return (
    <div className="mx-auto max-w-6xl px-6 lg:px-8 py-8">

      {/* ─── About + Process Cycle ─────────────────────── */}
      <section id="about" className="mb-20">

        {/* Header */}
        <ScrollReveal className="mb-10">
          <SectionLabel className="mb-4">About Me</SectionLabel>
          <h1 className="font-display font-semibold text-5xl leading-tight text-[var(--text-primary)] sm:text-6xl">
            Where analysis meets execution
          </h1>
          <p className="mt-3 font-ui font-light text-base text-[var(--text-secondary)]">
            A structured process from brief to outcome.
          </p>
        </ScrollReveal>

        {/* Process cycle — top of the section */}
        <ScrollReveal className="mb-14">
          <ProcessFlow />
        </ScrollReveal>

        <div className="mb-14">
          <Divider />
        </div>

        {/* Bio + stats */}
        <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
          <ScrollReveal>
            <div className="space-y-4 font-ui font-light text-base leading-relaxed text-[var(--text-secondary)]">
              <p>
                I&apos;m a Business Analyst and Consultant with four years
                of experience across consulting, consumer tech, and enterprise
                CRM, working at the intersection of strategy, data, and
                delivery.
              </p>
              <p>
                My consulting work spans financial modelling, AI workflow
                optimisation, risk management frameworks, life cycle
                assessment, and machine learning analytics, delivered for
                clients including Deloitte, NHS England, StormID, and WB
                Alloys Group as part of my MSc at the University of
                Strathclyde.
              </p>
              <p>
                On the product side, I&apos;ve built and shipped platforms for
                10M+ users, owning everything from data architecture and user
                research to UAT and stakeholder management across B2C apps,
                enterprise SaaS, and early-stage startups.
              </p>
              <p>
                I believe the best outcomes come from asking the right
                questions, letting data lead the way, and building with the
                people closest to the problem.
              </p>
            </div>
          </ScrollReveal>

          <AnimatedStatGrid />
        </div>

        {/* Chevron → Skills */}
        <div className="mt-14 flex flex-col items-center gap-2">
          <span className="font-data text-[10px] uppercase tracking-widest text-[var(--text-muted)]">Skills &amp; Tools</span>
          <a
            href="#skills"
            aria-label="Scroll to Skills & Tools"
            className="flex h-10 w-10 items-center justify-center rounded-full transition-all duration-200"
            style={{
              background: "rgba(16,185,129,0.10)",
              border: "1px solid rgba(16,185,129,0.35)",
              color: "#10B981",
              animation: "chevron-bounce 1.8s ease-in-out infinite",
            }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <polyline points="6 9 12 15 18 9" />
            </svg>
          </a>
        </div>
      </section>

      <div className="mb-20">
        <Divider />
      </div>

      {/* ─── Skills ────────────────────────────────────── */}
      <section id="skills">
        <ScrollReveal>
          <SectionLabel className="mb-4">Skills &amp; Tools</SectionLabel>
          <h2 className="mb-14 font-display font-semibold text-4xl leading-tight text-[var(--text-primary)] sm:text-5xl">
            What I bring to the table
          </h2>
        </ScrollReveal>

        <div className="grid gap-5 sm:grid-cols-2 items-stretch">
          {skillGroups.map((group, i) => (
            <ScrollReveal key={group.category} delay={i * 80} className="h-full">
              <div
                className="h-full flex flex-col rounded-[var(--radius-md)] border border-[var(--border-subtle)] bg-[var(--bg-surface)] p-6 border-l-2 border-l-gold transition-all duration-300 hover:bg-[var(--bg-elevated)] hover:border-[var(--border-strong)] hover:-translate-y-1"
                style={{ boxShadow: "var(--shadow-card)" }}
              >
                <h3 className="mb-4 font-ui font-medium text-sm uppercase tracking-widest text-[var(--text-muted)]">
                  {group.category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <Tag key={skill}>{skill}</Tag>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      <div className="mt-20">
        <Divider />
      </div>
    </div>
  );
}
