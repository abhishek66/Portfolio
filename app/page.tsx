import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Divider } from "@/components/ui/Divider";
import { Tag } from "@/components/ui/Tag";
import { ScrollReveal } from "@/components/ScrollReveal";
import { HeroRoleLabel } from "@/components/HeroRoleLabel";
import { CaseStudiesCarousel } from "@/components/CaseStudiesCarousel";

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

export default function Home() {
  return (
    <>
      {/* ─── Hero ─────────────────────────────────────────── */}
      <section className="relative flex min-h-[100svh] items-center overflow-hidden">
        <div className="relative mx-auto max-w-6xl px-6 lg:px-8 py-24 w-full">
          <div className="flex flex-col-reverse items-center gap-14 lg:flex-row lg:items-center lg:justify-between">

            {/* Text column */}
            <div className="flex-1">

              {/* Eyebrow label — cycling roles */}
              <HeroRoleLabel />

              {/* Name — Cormorant Garamond 400 */}
              <h1
                className="mb-6 font-display font-normal leading-[1.05] tracking-tight text-[var(--text-primary)]"
                style={{ fontSize: "clamp(52px, 8vw, 96px)" }}
              >
                Abhishek
                <br />
                Manikandan
              </h1>

              {/* Subtitle — DM Sans 300 */}
              <p className="mb-4 max-w-xl font-ui font-light text-lg leading-relaxed text-[var(--text-secondary)]">
                Product Manager who builds systems that move money.
              </p>

              {/* Meta chips — DM Mono */}
              <div className="mb-6 flex flex-wrap gap-2">
                {["MSc Business Analysis", "University of Strathclyde", "4+ Years Experience"].map((chip) => (
                  <span
                    key={chip}
                    className="stat-chip inline-flex items-center rounded-full border border-[var(--border-subtle)] bg-[var(--bg-surface)] px-3 py-1 font-data text-xs text-[var(--text-muted)]"
                  >
                    {chip}
                  </span>
                ))}
              </div>

              {/* CTA buttons */}
              <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <Button href="/experience" variant="primary">View My Work</Button>
                <Button href="/contact" variant="ghost">Get in Touch</Button>
                {/* Replace /resume.pdf with actual CV file */}
                <a
                  href="/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-ghost inline-flex items-center gap-2"
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                    <polyline points="7 10 12 15 17 10" />
                    <line x1="12" y1="15" x2="12" y2="3" />
                  </svg>
                  Download CV
                </a>
              </div>

              {/* Anchor nav */}
              <div className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-2">
                {[
                  { label: "About",        href: "#about" },
                  { label: "Skills",       href: "#skills" },
                  { label: "Experience",   href: "/experience" },
                  { label: "Case Studies", href: "/case-studies" },
                ].map((item, i, arr) => (
                  <span key={item.href} className="flex items-center gap-5">
                    <a
                      href={item.href}
                      className="font-data text-xs uppercase tracking-widest text-[var(--text-muted)] transition-colors duration-200 hover:text-gold"
                    >
                      {item.label}
                    </a>
                    {i < arr.length - 1 && (
                      <span className="text-[var(--border-strong)] select-none">·</span>
                    )}
                  </span>
                ))}
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
      <section id="about" className="py-16" style={{ background: "var(--bg-surface)" }}>
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
            <ScrollReveal>
              <SectionLabel className="mb-4">About Me</SectionLabel>
              <h2 className="mb-6 font-display font-semibold text-4xl leading-tight text-[var(--text-primary)] sm:text-5xl">
                Where analysis meets execution
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
      <section id="skills" className="py-16">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
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

      {/* ─── Case Studies Carousel ───────────────────────── */}
      <section className="py-12 overflow-hidden" style={{ background: "var(--bg-surface)" }}>
        <div className="mx-auto max-w-6xl px-6 lg:px-8 mb-8">
          <ScrollReveal>
            <SectionLabel>Consulting Work</SectionLabel>
          </ScrollReveal>
        </div>
        <CaseStudiesCarousel />
      </section>

      {/* ─── Divider ─────────────────────────────────────── */}
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <Divider />
      </div>

      {/* ─── CTA ─────────────────────────────────────────── */}
      <section className="py-16">
        <div className="mx-auto max-w-6xl px-6 lg:px-8 text-center">
          <ScrollReveal>
            <h2 className="mb-4 font-display font-semibold text-4xl text-[var(--text-primary)] sm:text-5xl">
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
