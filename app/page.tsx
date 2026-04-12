import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Divider } from "@/components/ui/Divider";
import { Tag } from "@/components/ui/Tag";
import { ScrollReveal } from "@/components/ScrollReveal";

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
      "Prioritisation", "Go-to-Market",
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
      "Deployment Management", "RCA",
    ],
  },
];

export default function Home() {
  return (
    <>
      {/* ─── Hero ─────────────────────────────────────────── */}
      <section className="relative flex min-h-[100svh] items-center overflow-hidden">
        <div className="relative mx-auto max-w-6xl px-6 lg:px-8 py-24 w-full">
          <div className="flex flex-col-reverse items-center gap-14 lg:flex-row lg:items-center lg:justify-between">

            {/* Text column */}
            <div className="flex-1">

              {/* Eyebrow label — DM Mono with pulsing gold dot */}
              <div className="mb-6 inline-flex items-center gap-2.5 rounded-full border border-[var(--border-subtle)] bg-[rgba(201,168,76,0.06)] px-4 py-2">
                <span
                  className="h-2 w-2 rounded-full bg-gold flex-shrink-0"
                  style={{ animation: "gold-pulse 2s ease-in-out infinite" }}
                />
                <span className="font-data text-xs tracking-widest uppercase text-[var(--text-muted)]">
                  Business Analyst &amp; Consultant
                </span>
              </div>

              {/* Name — Cormorant Garamond 300 */}
              <h1
                className="mb-6 font-display font-light leading-[1.05] tracking-tight text-[var(--text-primary)]"
                style={{ fontSize: "clamp(52px, 8vw, 96px)" }}
              >
                Abhishek
                <br />
                <span className="text-[var(--text-secondary)]">Manikandan</span>
              </h1>

              {/* Subtitle — DM Sans 300 */}
              <p className="mb-4 max-w-xl font-ui font-light text-lg leading-relaxed text-[var(--text-secondary)]">
                Turning complex business problems into clear strategy, measurable
                outcomes, and products that scale.
              </p>

              {/* Meta chips — DM Mono */}
              <div className="mb-6 flex flex-wrap gap-2">
                {["MSc Business Analysis", "University of Strathclyde", "4 yrs Experience"].map((chip) => (
                  <span
                    key={chip}
                    className="inline-flex items-center rounded-full border border-[var(--border-subtle)] bg-[var(--bg-surface)] px-3 py-1 font-data text-xs text-[var(--text-muted)]"
                  >
                    {chip}
                  </span>
                ))}
              </div>

              {/* Social */}
              <div className="mb-10 flex flex-wrap items-center gap-5">
                <a
                  href="https://github.com/abhishek66"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-2 font-data text-sm text-[var(--text-muted)] transition-colors duration-200 hover:text-gold"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4 flex-shrink-0" aria-hidden="true">
                    <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
                  </svg>
                  <span>abhishek66</span>
                </a>
              </div>

              {/* CTA buttons */}
              <div className="flex flex-wrap gap-4">
                <Button href="/experience" variant="primary">View My Work</Button>
                <Button href="/contact" variant="ghost">Get in Touch</Button>
              </div>
            </div>

            {/* Headshot */}
            <div className="flex-shrink-0">
              <div
                className="relative rounded-[var(--radius-lg)] overflow-hidden"
                style={{
                  boxShadow: "0 0 0 1px var(--border-subtle), var(--shadow-glow)",
                }}
              >
                <Image
                  src="/images/headshot.png"
                  alt="Abhishek Manikandan"
                  width={300}
                  height={358}
                  priority
                  className="w-[200px] object-cover lg:w-[280px] block"
                />
                {/* gold overlay rim */}
                <div
                  className="absolute inset-0 rounded-[var(--radius-lg)] pointer-events-none"
                  style={{
                    background: "linear-gradient(160deg, rgba(201,168,76,0.08) 0%, transparent 60%)",
                  }}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1"
          style={{ animation: "chevron-bounce 2s ease-in-out infinite" }}
          aria-hidden="true"
        >
          <svg
            className="h-5 w-5 text-[var(--text-muted)]"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </section>

      {/* ─── Divider ─────────────────────────────────────── */}
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <Divider />
      </div>

      {/* ─── About ───────────────────────────────────────── */}
      <section id="about" className="py-28">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
            <ScrollReveal>
              <SectionLabel className="mb-4">About Me</SectionLabel>
              <h2 className="mb-6 font-display font-normal text-4xl leading-tight text-[var(--text-primary)] sm:text-5xl">
                Where analysis meets{" "}
                <span className="text-[var(--text-secondary)]">execution</span>
              </h2>
              <div className="space-y-4 font-ui font-light text-base leading-relaxed text-[var(--text-secondary)]">
                <p>
                  I&apos;m a Business Analyst and Product Manager with four years
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
              <div className="mt-8">
                <Link
                  href="/experience"
                  className="font-ui font-medium text-sm text-gold transition-colors duration-200 hover:text-gold-lt"
                >
                  View my experience &rarr;
                </Link>
              </div>
            </ScrollReveal>

            {/* Stats grid */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: "Years of Experience",    value: "4+" },
                { label: "Consulting Case Studies", value: "6"  },
                { label: "Users Impacted",          value: "10M+" },
                { label: "Industry Clients",        value: "4"  },
              ].map((stat, i) => (
                <ScrollReveal key={stat.label} delay={i * 80}>
                  <div
                    className="rounded-[var(--radius-md)] border border-[var(--border-subtle)] bg-[var(--bg-surface)] p-6 transition-all duration-300 hover:border-[var(--border-strong)] hover:bg-[var(--bg-elevated)] hover:-translate-y-1"
                    style={{ boxShadow: "var(--shadow-card)" }}
                  >
                    <p className="font-display font-light text-4xl text-gold leading-none">
                      {stat.value}
                    </p>
                    <p className="mt-2 font-data text-xs uppercase tracking-widest text-[var(--text-muted)]">
                      {stat.label}
                    </p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── Divider ─────────────────────────────────────── */}
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <Divider />
      </div>

      {/* ─── Skills ──────────────────────────────────────── */}
      <section id="skills" className="py-28">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <ScrollReveal>
            <SectionLabel className="mb-4">Skills &amp; Tools</SectionLabel>
            <h2 className="mb-14 font-display font-normal text-4xl leading-tight text-[var(--text-primary)] sm:text-5xl">
              What I bring to the table
            </h2>
          </ScrollReveal>

          <div className="grid gap-5 sm:grid-cols-2">
            {skillGroups.map((group, i) => (
              <ScrollReveal key={group.category} delay={i * 80}>
                <div
                  className="rounded-[var(--radius-md)] border border-[var(--border-subtle)] bg-[var(--bg-surface)] p-6 border-l-2 border-l-gold transition-all duration-300 hover:bg-[var(--bg-elevated)] hover:border-[var(--border-strong)] hover:-translate-y-1"
                  style={{ boxShadow: "var(--shadow-card)" }}
                >
                  <h3 className="mb-4 font-ui font-medium text-sm uppercase tracking-widest text-[var(--text-muted)] border-l-0">
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
        </div>
      </section>

      {/* ─── Divider ─────────────────────────────────────── */}
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <Divider />
      </div>

      {/* ─── CTA ─────────────────────────────────────────── */}
      <section className="py-28">
        <div className="mx-auto max-w-6xl px-6 lg:px-8 text-center">
          <ScrollReveal>
            <h2 className="mb-4 font-display font-normal text-4xl text-[var(--text-primary)] sm:text-5xl">
              Let&apos;s solve something together
            </h2>
            <p className="mb-10 font-ui font-light text-base text-[var(--text-secondary)] max-w-md mx-auto leading-relaxed">
              Open to business analysis, consulting, and product roles where
              rigorous thinking and execution both matter.
            </p>
            <Button href="/contact" variant="primary">Get in Touch</Button>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
