import type { Metadata } from "next";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Divider } from "@/components/ui/Divider";
import { ScrollReveal } from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "Experience | Abhishek Manikandan",
  description:
    "Product management and business analysis experience across Prodsmiths, AppsForBharat, and Kapture CX.",
};

type ImpactStat  = { metric: string; label: string };
type ModuleBlock = { title: string; items: string[] };

type WorkEntry = {
  type: "work";
  company: string;
  role: string;
  period: string;
  location: string;
  promoted?: boolean;
  headline?: string;
  impact?: ImpactStat[];
  contributions?: string[];
  moduleBlocks?: ModuleBlock[];
  moduleBlocksLabel?: string;
  description?: string;
  highlights?: string[];
  skills: string[];
  accent: string;
};

type EducationEntry = {
  institution: string;
  location: string;
  degree: string;
  grade?: string;
  period: string;
  accent: string;
};

const workExperiences: WorkEntry[] = [
  {
    type: "work",
    company: "Prodsmiths",
    role: "Associate Product Manager · Business Analyst",
    period: "October 2023 – January 2025",
    location: "India · Remote",
    headline:
      "Built India's first fully digital ARC platform for ARCIL, an end-to-end collections and acquisition system serving multiple institutional lenders.",
    impact: [
      { metric: "14d → 48hr", label: "Portfolio onboarding time reduced" },
      { metric: "94%",        label: "On-time sprint delivery across 6 sprints" },
      { metric: "10+",        label: "Institutional lenders served" },
      { metric: "2008 → 2024", label: "Excel reporting replaced with real-time SQL forecasting" },
    ],
    contributions: [
      "Owned the full product lifecycle end-to-end: scoping, wireframing in Figma, user story authoring, UAT, and production deployment across 6 sprints",
      "Designed core data architecture: built SQL-based ER models enabling real-time recovery forecasting, replacing manual Excel reporting in use since 2008",
      "Cut portfolio onboarding from 14 days to 48 hours by digitising legal, financial, and valuation due diligence workflows",
      "Managed client relationships: weekly stakeholder updates with C-level sponsors, RCA for production issues, and change request prioritisation under regulatory scope changes",
      "Maintained 94% on-time delivery across all sprints despite mid-cycle regulatory changes",
    ],
    moduleBlocks: [
      {
        title: "Acquisition Suite",
        items: ["Acquisition Module", "Acquisition Proposal", "Bid Details", "Acquisition Activities"],
      },
      {
        title: "Due Diligence Suite",
        items: ["Legal Due Diligence", "Financial Due Diligence", "Valuation Due Diligence"],
      },
      {
        title: "Operations",
        items: ["UAT Environment", "Production Deployment", "Change Request Management"],
      },
    ],
    skills: [
      "Product Management", "SQL", "Figma", "Data Architecture", "UAT",
      "Stakeholder Management", "Agile", "RCA", "ER Modelling", "Wireframing",
    ],
    accent: "gold",
  },
  {
    type: "work",
    company: "AppsForBharat",
    role: "Product Analyst → Product Manager",
    period: "December 2022 – November 2023",
    promoted: true,
    location: "Bangalore, India",
    headline:
      "Consumer devotional-tech platform with 10M+ users. Owned monetisation and retention products across Sri Mandir.",
    impact: [
      { metric: "+23%",    label: "Average order value on puja products" },
      { metric: "+58%",    label: "Share-to-install ratio via referral redesign" },
      { metric: "-8% Churn", label: "Q2 2023, driven by CRM automation" },
      { metric: "120 hrs/wk", label: "Manual effort saved through automated journeys" },
    ],
    contributions: [
      "Built a cross-sell engine with A/B tested pricing bundles for puja products on web (Sri Mandir), deployed full funnel in 3 weeks, driving +23% average order value",
      "Redesigned referral sharing flow end-to-end: optimised WhatsApp copy, incentive timing, and placement strategy, lifting share-to-install ratio by 58%",
      "Architected 15+ automated CRM journeys across IVR, bots, push notifications, and in-app banners, reducing Q2 2023 churn by 8% and saving 120 manual hours per week",
      "Scoped and shipped background audio feature for Sri Mandir, improving session length by 19% through UX redesign and close technical collaboration with engineering",
      "Improved Seva section visibility to increase feature discoverability and drive monetisation lift across the app",
      "Built leadership dashboards in Mixpanel and Metabase tracking retention cohorts, LTV curves, and funnel drop-offs across 5M+ monthly events",
    ],
    moduleBlocks: [
      {
        title: "Monetisation",
        items: ["Cross-sell Engine (Puja Web)", "Seva Section Redesign", "Pricing Bundle A/B Tests"],
      },
      {
        title: "Growth & Retention",
        items: ["Referral Sharing Redesign", "Background Audio", "15+ Automated CRM Journeys"],
      },
      {
        title: "Analytics & CRM",
        items: ["Mixpanel Dashboards", "Metabase Funnels", "IVR & Bot Flows", "NPS Tracking", "Push & In-App Campaigns"],
      },
    ],
    moduleBlocksLabel: "Features Shipped",
    skills: [
      "Product Analytics", "CRM Automation", "A/B Testing", "Mixpanel", "Metabase",
      "Retention Strategy", "Monetisation", "User Journey Design", "Figma", "Growth",
    ],
    accent: "teal",
  },
  {
    type: "work",
    company: "AppsForBharat",
    role: "Product Intern",
    period: "July 2022 – November 2022",
    location: "Bangalore, India",
    headline:
      "Foundation role in data and CRM, building the analytical infrastructure that informed product decisions across the platform.",
    impact: [
      { metric: "12%",   label: "Retention improvement in CRM pilot cohort" },
      { metric: "5M+",   label: "Monthly events tracked across dashboards" },
    ],
    contributions: [
      "Performed quantitative user segmentation analysis on large datasets to uncover behavioural patterns and surface actionable insights",
      "Built and maintained interactive dashboards in Mixpanel and Metabase for real-time tracking of key retention and engagement metrics",
      "Designed and executed CRM campaign strategies with personalised engagement flows that improved retention metrics by 12% in the pilot cohort",
      "Delivered data visualisations and reports that directly informed strategic planning and leadership decision-making",
    ],
    skills: [
      "Data Analysis", "Mixpanel", "Metabase", "CRM Strategy",
      "Dashboard Design", "User Segmentation", "Campaign Analytics",
    ],
    accent: "teal",
  },
  {
    type: "work",
    company: "Kapture CX",
    role: "CRM Specialist",
    period: "July 2019 – June 2022",
    location: "Bangalore, India",
    headline:
      "Enterprise CRM implementation and optimisation for BFSI and telecom clients, driving adoption, efficiency, and measurable service improvements.",
    impact: [
      { metric: "3",       label: "Enterprise accounts led end-to-end" },
      { metric: "+40%",    label: "Client adoption rate improvement post-training" },
      { metric: "-15%",    label: "Average handle time reduction" },
      { metric: "10,000+", label: "Customer interactions analysed" },
    ],
    contributions: [
      "Led end-to-end deployment and optimisation of CRM solutions across 3 enterprise accounts in BFSI and telecom sectors",
      "Designed and conducted structured training programs for client teams, improving platform adoption rates by 40%",
      "Analysed 10,000+ customer interactions to identify service gaps and operational inefficiencies",
      "Recommended and implemented workflow changes that reduced average handle time by 15% across client operations",
      "Delivered CRM campaign insights that improved retention metrics by 12% in pilot cohort",
    ],
    skills: [
      "CRM Implementation", "Enterprise Client Management", "Training & Adoption",
      "Workflow Optimisation", "Data Analysis", "BFSI", "Telecom", "Stakeholder Management",
    ],
    accent: "gold-muted",
  },
];

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

/* ─── Accent colour map ──────────────────────────────────────────────── */
const accentMap: Record<string, {
  badge:            string;
  dot:              string;
  metric:           string;
  moduleBlock:      string;
  moduleBlockTitle: string;
  lineColor:        string;
}> = {
  gold: {
    badge:            "border-[var(--border-strong)] bg-[rgba(201,168,76,0.08)] text-gold",
    dot:              "bg-gold",
    metric:           "text-gold",
    moduleBlock:      "border-[var(--border-subtle)] bg-[rgba(201,168,76,0.04)]",
    moduleBlockTitle: "text-gold-lt",
    lineColor:        "var(--accent-gold)",
  },
  teal: {
    badge:            "border-[rgba(14,138,122,0.35)] bg-[rgba(14,138,122,0.08)] text-teal-accent",
    dot:              "bg-teal-accent",
    metric:           "text-teal-accent",
    moduleBlock:      "border-[rgba(14,138,122,0.2)] bg-[rgba(14,138,122,0.04)]",
    moduleBlockTitle: "text-[#3cb8ac]",
    lineColor:        "var(--accent-teal)",
  },
  "gold-muted": {
    badge:            "border-[var(--border-subtle)] bg-[rgba(201,168,76,0.05)] text-[rgba(201,168,76,0.7)]",
    dot:              "bg-[rgba(201,168,76,0.55)]",
    metric:           "text-[rgba(201,168,76,0.75)]",
    moduleBlock:      "border-[var(--border-subtle)] bg-[rgba(201,168,76,0.03)]",
    moduleBlockTitle: "text-gold",
    lineColor:        "rgba(201,168,76,0.45)",
  },
};

export default function Experience() {
  return (
    <div className="mx-auto max-w-6xl px-6 lg:px-8 py-20">

      {/* Page header */}
      <ScrollReveal className="mb-20">
        <SectionLabel className="mb-4">Career</SectionLabel>
        <h1 className="font-display font-light text-5xl text-[var(--text-primary)] sm:text-6xl leading-tight">
          Work Experience
        </h1>
        <p className="mt-4 max-w-xl font-ui font-light text-base text-[var(--text-secondary)] leading-relaxed">
          Product management and business analysis experience across fintech,
          consumer apps, and enterprise SaaS.
        </p>
      </ScrollReveal>

      {/* Timeline */}
      <div className="relative">
        {/* Vertical spine */}
        <div
          className="absolute left-4 top-0 h-full w-px sm:left-5"
          style={{ background: "var(--border-subtle)" }}
        />

        <div className="space-y-20">
          {workExperiences.map((exp, i) => {
            const accent     = accentMap[exp.accent];
            const isEnhanced = !!exp.headline;

            return (
              <ScrollReveal key={i} delay={i * 60}>
                <div className="timeline-entry relative flex gap-8 sm:gap-12">

                  {/* Timeline dot */}
                  <div className="flex-shrink-0 pt-1">
                    <div
                      className={`timeline-dot h-3 w-3 rounded-full ${accent.dot}`}
                      style={{ boxShadow: `0 0 0 4px var(--bg-base)` }}
                    />
                  </div>

                  {/* Card */}
                  <div
                    className="flex-1 rounded-[var(--radius-md)] border border-[var(--border-subtle)] bg-[var(--bg-surface)] p-7 transition-all duration-300 hover:border-[var(--border-strong)] hover:bg-[var(--bg-elevated)]"
                    style={{
                      boxShadow: "var(--shadow-card)",
                      borderTopWidth: "2px",
                      borderTopColor: accent.lineColor,
                    }}
                  >
                    {/* Header */}
                    <div className="mb-5 flex flex-wrap items-start justify-between gap-3">
                      <div>
                        <h2 className="font-display font-normal text-2xl text-[var(--text-primary)]">
                          {exp.company}
                        </h2>
                        <p className="mt-0.5 flex flex-wrap items-center gap-2 font-ui font-medium text-sm text-[var(--text-secondary)]">
                          {exp.role}
                          {exp.promoted && (
                            <span className="inline-flex items-center rounded-full border border-[rgba(14,138,122,0.35)] bg-[rgba(14,138,122,0.08)] px-2 py-0.5 font-data text-xs text-teal-accent">
                              Promoted ↑
                            </span>
                          )}
                        </p>
                      </div>
                      <div className="flex flex-col items-end gap-1 text-right">
                        <span className="font-data text-xs text-[var(--text-muted)]">
                          {exp.period}
                        </span>
                        <span className="font-data text-xs text-[var(--text-muted)] opacity-60">
                          {exp.location}
                        </span>
                      </div>
                    </div>

                    {/* Enhanced layout (headline present) */}
                    {isEnhanced ? (
                      <div className="space-y-8">
                        {/* Headline */}
                        <p className="font-ui font-light text-base text-[var(--text-primary)] leading-relaxed border-l-2 border-l-[var(--border-strong)] pl-4">
                          {exp.headline}
                        </p>

                        {/* Impact grid */}
                        {exp.impact && (
                          <div>
                            <p className="mb-3 font-data text-xs uppercase tracking-widest text-[var(--text-muted)]">
                              Impact
                            </p>
                            <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
                              {exp.impact.map((stat, j) => (
                                <div
                                  key={j}
                                  className="rounded-[var(--radius-sm)] border border-[var(--border-subtle)] bg-[var(--bg-base)] p-4"
                                >
                                  <p className={`font-display font-normal text-xl leading-tight ${accent.metric}`}>
                                    {stat.metric}
                                  </p>
                                  <p className="mt-1 font-data text-xs leading-snug text-[var(--text-muted)]">
                                    {stat.label}
                                  </p>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}

                        {/* Contributions */}
                        {exp.contributions && (
                          <div>
                            <p className="mb-3 font-data text-xs uppercase tracking-widest text-[var(--text-muted)]">
                              My Contributions
                            </p>
                            <ul className="space-y-2.5">
                              {exp.contributions.map((c, j) => (
                                <li key={j} className="flex gap-3 font-ui font-light text-sm text-[var(--text-secondary)]">
                                  <span
                                    className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full"
                                    style={{ background: accent.lineColor }}
                                  />
                                  {c}
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}

                        {/* Module blocks */}
                        {exp.moduleBlocks && (
                          <div>
                            <p className="mb-3 font-data text-xs uppercase tracking-widest text-[var(--text-muted)]">
                              {exp.moduleBlocksLabel ?? "Platform Modules"}
                            </p>
                            <div className="grid gap-3 sm:grid-cols-3">
                              {exp.moduleBlocks.map((block, j) => (
                                <div
                                  key={j}
                                  className={`rounded-[var(--radius-sm)] border p-4 ${accent.moduleBlock}`}
                                >
                                  <p className={`mb-2.5 font-data text-xs font-normal uppercase tracking-widest ${accent.moduleBlockTitle}`}>
                                    {block.title}
                                  </p>
                                  <ul className="space-y-1.5">
                                    {block.items.map((item) => (
                                      <li
                                        key={item}
                                        className="font-data text-xs text-[var(--text-secondary)]"
                                      >
                                        {item}
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    ) : (
                      /* Standard layout */
                      <>
                        {exp.description && (
                          <p className="mb-5 font-ui font-light text-sm text-[var(--text-secondary)] leading-relaxed">
                            {exp.description}
                          </p>
                        )}
                        {exp.highlights && (
                          <ul className="mb-6 space-y-2.5">
                            {exp.highlights.map((h, j) => (
                              <li key={j} className="flex gap-3 font-ui font-light text-sm text-[var(--text-secondary)]">
                                <span
                                  className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full"
                                  style={{ background: accent.lineColor }}
                                />
                                {h}
                              </li>
                            ))}
                          </ul>
                        )}
                      </>
                    )}

                    {/* Skills — always shown */}
                    <div className={isEnhanced ? "mt-8" : ""}>
                      <p className="mb-3 font-data text-xs uppercase tracking-widest text-[var(--text-muted)]">
                        Skills
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {exp.skills.map((skill) => (
                          <span
                            key={skill}
                            className={`inline-flex items-center rounded-full border px-3 py-1 font-data text-xs ${accent.badge}`}
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>

      {/* Education */}
      <div className="mt-28">
        <ScrollReveal className="mb-12">
          <SectionLabel className="mb-4">Education</SectionLabel>
          <h2 className="font-display font-light text-4xl text-[var(--text-primary)] sm:text-5xl leading-tight">
            Academic Background
          </h2>
        </ScrollReveal>

        <div className="space-y-5">
          {educationEntries.map((edu, i) => {
            const accent = accentMap[edu.accent];
            return (
              <ScrollReveal key={i} delay={i * 80}>
                <div
                  className="rounded-[var(--radius-md)] border border-[var(--border-subtle)] bg-[var(--bg-surface)] p-7 transition-all duration-300 hover:border-[var(--border-strong)] hover:bg-[var(--bg-elevated)]"
                  style={{
                    boxShadow: "var(--shadow-card)",
                    borderTopWidth: "2px",
                    borderTopColor: accent.lineColor,
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
            );
          })}
        </div>
      </div>

      {/* Bottom divider */}
      <div className="mt-28">
        <Divider />
      </div>
    </div>
  );
}
