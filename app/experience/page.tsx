import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Experience | Abhishek Manikandan",
  description:
    "Product management and business analysis experience across Prodsmiths, AppsForBharat, and Kapture CX.",
};

type ImpactStat = { metric: string; label: string };
type ModuleBlock = { title: string; items: string[] };

type WorkEntry = {
  type: "work";
  company: string;
  role: string;
  period: string;
  location: string;
  // Optional enhanced layout fields
  headline?: string;
  impact?: ImpactStat[];
  contributions?: string[];
  moduleBlocks?: ModuleBlock[];
  // Standard fields
  description?: string;
  highlights?: string[];
  skills: string[];
  accent: string;
};

const workExperiences: WorkEntry[] = [
  {
    type: "work",
    company: "Prodsmiths",
    role: "Product Manager · Business Analyst",
    period: "October 2023 – January 2025",
    location: "India · Remote",
    headline:
      "Built India's first fully digital ARC platform for ARCIL — end-to-end collections and acquisition system serving 50+ institutional lenders.",
    impact: [
      { metric: "14d → 48hr", label: "Portfolio onboarding time reduced" },
      { metric: "94%", label: "On-time sprint delivery across 6 sprints" },
      { metric: "50+", label: "Institutional lenders served" },
      { metric: "2008 → 2024", label: "Excel reporting replaced with real-time SQL forecasting" },
    ],
    contributions: [
      "Owned the full product lifecycle end-to-end: scoping, wireframing in Figma, user story authoring, UAT, and production deployment across 6 sprints",
      "Designed core data architecture — built SQL-based ER models enabling real-time recovery forecasting, replacing manual Excel reporting in use since 2008",
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
      "Product Management",
      "SQL",
      "Figma",
      "Data Architecture",
      "UAT",
      "Stakeholder Management",
      "Agile",
      "RCA",
      "ER Modelling",
      "Wireframing",
    ],
    accent: "indigo",
  },
  {
    type: "work",
    company: "AppsForBharat",
    role: "Product Manager",
    period: "2023 - 2024",
    location: "Bangalore, India",
    description:
      "Led product initiatives for a devotional super-app serving millions of users across India. Owned key surfaces including content discovery, monetisation, and personalisation.",
    highlights: [
      "Owned the monetisation roadmap, introducing subscription tiers and in-app purchases that grew revenue by 40%",
      "Redesigned the content discovery experience, improving D7 retention by 18% through personalised recommendations",
      "Led the 0-to-1 build of the ARC (Astrology, Religion & Content) platform, a new vertical within the app",
      "Managed a cross-functional team of 12 across engineering, design, content, and data",
      "Defined and maintained the product roadmap across two quarterly planning cycles",
    ],
    skills: ["SQL", "Figma", "A/B Testing", "Monetisation", "Retention"],
    accent: "violet",
  },
  {
    type: "work",
    company: "Kapture CX",
    role: "CRM Specialist",
    period: "2022 - 2023",
    location: "Bangalore, India",
    description:
      "Managed enterprise CRM implementations and customer support automation workflows for key accounts. Acted as a bridge between customers and the product team to drive platform improvements.",
    highlights: [
      "Configured and deployed CRM workflows for 15+ enterprise clients in retail and BFSI verticals",
      "Reduced average ticket resolution time by 30% through automation rule optimisation",
      "Documented and escalated customer pain points into structured product feedback for the engineering team",
      "Trained client teams on CRM platform usage and best practices",
      "Collaborated with the product team to surface recurring customer requests into roadmap items",
    ],
    skills: ["CRM", "Workflow Automation", "Customer Success", "Jira", "Data Analysis"],
    accent: "teal",
  },
];

const accentMap: Record<string, {
  badge: string;
  dot: string;
  metric: string;
  moduleBlock: string;
  moduleBlockTitle: string;
  moduleTag: string;
}> = {
  indigo: {
    badge: "border-indigo-500/30 bg-indigo-500/10 text-indigo-400",
    dot: "bg-indigo-500 ring-indigo-500/30",
    metric: "text-indigo-400",
    moduleBlock: "border-indigo-500/20 bg-indigo-950/30",
    moduleBlockTitle: "text-indigo-300",
    moduleTag: "text-indigo-200",
  },
  violet: {
    badge: "border-violet-500/30 bg-violet-500/10 text-violet-400",
    dot: "bg-violet-500 ring-violet-500/30",
    metric: "text-violet-400",
    moduleBlock: "border-violet-500/20 bg-violet-950/30",
    moduleBlockTitle: "text-violet-300",
    moduleTag: "text-violet-200",
  },
  teal: {
    badge: "border-teal-500/30 bg-teal-500/10 text-teal-400",
    dot: "bg-teal-500 ring-teal-500/30",
    metric: "text-teal-400",
    moduleBlock: "border-teal-500/20 bg-teal-950/30",
    moduleBlockTitle: "text-teal-300",
    moduleTag: "text-teal-200",
  },
};

export default function Experience() {
  return (
    <div className="mx-auto max-w-6xl px-6 lg:px-8 py-20">
      <div className="mb-16">
        <p className="mb-3 text-xs font-semibold tracking-widest text-indigo-400 uppercase">
          Career
        </p>
        <h1 className="text-4xl font-bold text-zinc-50 sm:text-5xl">
          Work Experience
        </h1>
        <p className="mt-4 max-w-xl text-zinc-400 leading-relaxed">
          Product management and business analysis experience across fintech,
          consumer apps, and enterprise SaaS.
        </p>
      </div>

      <div className="relative">
        <div className="absolute left-4 top-0 h-full w-px bg-zinc-800 sm:left-6" />

        <div className="space-y-16">
          {workExperiences.map((exp, i) => {
            const accent = accentMap[exp.accent];
            const isEnhanced = !!exp.headline;

            return (
              <div key={i} className="relative flex gap-8 sm:gap-12">
                <div className="flex-shrink-0">
                  <div className={`mt-1.5 h-3 w-3 rounded-full ring-4 ring-zinc-950 ${accent.dot}`} />
                </div>

                <div className="flex-1 pb-2">
                  {/* Header row */}
                  <div className="mb-4 flex flex-wrap items-start justify-between gap-3">
                    <div>
                      <h2 className="text-xl font-bold text-zinc-50">{exp.company}</h2>
                      <p className="mt-0.5 text-base font-medium text-zinc-300">{exp.role}</p>
                    </div>
                    <div className="flex flex-col items-end gap-1 text-right">
                      <span className="text-sm text-zinc-400">{exp.period}</span>
                      <span className="text-xs text-zinc-600">{exp.location}</span>
                    </div>
                  </div>

                  {/* ENHANCED LAYOUT (Prodsmiths) */}
                  {isEnhanced ? (
                    <div className="space-y-8">
                      {/* Headline */}
                      <p className="text-base font-semibold text-zinc-200 leading-relaxed">
                        {exp.headline}
                      </p>

                      {/* Impact grid */}
                      {exp.impact && (
                        <div>
                          <p className="mb-3 text-xs font-semibold tracking-widest text-zinc-500 uppercase">
                            Impact
                          </p>
                          <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
                            {exp.impact.map((stat, j) => (
                              <div
                                key={j}
                                className="rounded-xl border border-zinc-800 bg-zinc-900 p-4"
                              >
                                <p className={`text-lg font-bold leading-tight ${accent.metric}`}>
                                  {stat.metric}
                                </p>
                                <p className="mt-1 text-xs leading-snug text-zinc-500">
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
                          <p className="mb-3 text-xs font-semibold tracking-widest text-zinc-500 uppercase">
                            My Contributions
                          </p>
                          <ul className="space-y-2.5">
                            {exp.contributions.map((c, j) => (
                              <li key={j} className="flex gap-3 text-sm text-zinc-400">
                                <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-zinc-600" />
                                {c}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {/* Module blocks */}
                      {exp.moduleBlocks && (
                        <div>
                          <p className="mb-3 text-xs font-semibold tracking-widest text-zinc-500 uppercase">
                            Platform Modules
                          </p>
                          <div className="grid gap-3 sm:grid-cols-3">
                            {exp.moduleBlocks.map((block, j) => (
                              <div
                                key={j}
                                className={`rounded-xl border p-4 ${accent.moduleBlock}`}
                              >
                                <p className={`mb-2.5 text-xs font-bold tracking-wide uppercase ${accent.moduleBlockTitle}`}>
                                  {block.title}
                                </p>
                                <ul className="space-y-1.5">
                                  {block.items.map((item) => (
                                    <li key={item} className={`text-xs ${accent.moduleTag}`}>
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
                    /* STANDARD LAYOUT (AppsForBharat, Kapture CX) */
                    <>
                      {exp.description && (
                        <p className="mb-5 text-zinc-400 leading-relaxed">{exp.description}</p>
                      )}
                      {exp.highlights && (
                        <ul className="mb-6 space-y-2.5">
                          {exp.highlights.map((h, j) => (
                            <li key={j} className="flex gap-3 text-sm text-zinc-400">
                              <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-zinc-600" />
                              {h}
                            </li>
                          ))}
                        </ul>
                      )}
                    </>
                  )}

                  {/* Skills — always shown */}
                  <div className={isEnhanced ? "mt-8" : ""}>
                    <p className="mb-2 text-xs font-semibold tracking-widest text-zinc-500 uppercase">
                      Skills
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {exp.skills.map((skill) => (
                        <span
                          key={skill}
                          className={`rounded-full border px-3 py-1 text-xs font-medium ${accent.badge}`}
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
