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
  moduleBlocksLabel?: string;
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
    role: "Associate Product Manager · Business Analyst",
    period: "October 2023 – January 2025",
    location: "India · Remote",
    headline:
      "Built India's first fully digital ARC platform for ARCIL, an end-to-end collections and acquisition system serving multiple institutional lenders.",
    impact: [
      { metric: "14d → 48hr", label: "Portfolio onboarding time reduced" },
      { metric: "94%", label: "On-time sprint delivery across 6 sprints" },
      { metric: "50+", label: "Institutional lenders served" },
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
    role: "Product Analyst",
    period: "December 2022 – November 2023",
    location: "Bangalore, India",
    headline:
      "Consumer devotional-tech platform with 10M+ users. Owned monetisation and retention products across Sri Mandir.",
    impact: [
      { metric: "+23%", label: "Average order value on puja products" },
      { metric: "+58%", label: "Share-to-install ratio via referral redesign" },
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
      "Product Analytics",
      "CRM Automation",
      "A/B Testing",
      "Mixpanel",
      "Metabase",
      "Retention Strategy",
      "Monetisation",
      "User Journey Design",
      "Figma",
      "Growth",
    ],
    accent: "violet",
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
      { metric: "12%", label: "Retention improvement in CRM pilot cohort" },
      { metric: "5M+", label: "Monthly events tracked across dashboards" },
    ],
    contributions: [
      "Performed quantitative user segmentation analysis on large datasets to uncover behavioural patterns and surface actionable insights",
      "Built and maintained interactive dashboards in Mixpanel and Metabase for real-time tracking of key retention and engagement metrics",
      "Designed and executed CRM campaign strategies with personalised engagement flows that improved retention metrics by 12% in the pilot cohort",
      "Delivered data visualisations and reports that directly informed strategic planning and leadership decision-making",
    ],
    skills: [
      "Data Analysis",
      "Mixpanel",
      "Metabase",
      "CRM Strategy",
      "Dashboard Design",
      "User Segmentation",
      "Campaign Analytics",
    ],
    accent: "violet",
  },
  {
    type: "work",
    company: "Kapture CX",
    role: "CRM Specialist",
    period: "July 2020 – June 2022",
    location: "Bangalore, India",
    headline:
      "Enterprise CRM implementation and optimisation for BFSI and telecom clients, driving adoption, efficiency, and measurable service improvements.",
    impact: [
      { metric: "3", label: "Enterprise accounts led end-to-end" },
      { metric: "+40%", label: "Client adoption rate improvement post-training" },
      { metric: "-15%", label: "Average handle time reduction" },
      { metric: "10,000+", label: "Customer interactions analysed" },
    ],
    contributions: [
      "Led end-to-end deployment and optimisation of CRM solutions across 3 enterprise accounts in BFSI and telecom sectors",
      "Designed and conducted structured training programs for client teams, improving platform adoption rates by 40%",
      "Analysed 10,000+ customer interactions to identify service gaps and operational inefficiencies",
      "Recommended and implemented workflow changes that reduced average handle time by 15% across client operations",
    ],
    skills: [
      "CRM Implementation",
      "Enterprise Client Management",
      "Training & Adoption",
      "Workflow Optimisation",
      "Data Analysis",
      "BFSI",
      "Telecom",
      "Stakeholder Management",
    ],
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
                            {exp.moduleBlocksLabel ?? "Platform Modules"}
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

                  {/* Skills - always shown */}
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
