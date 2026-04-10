import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Experience | Abhishek Manikandan",
  description:
    "Product management experience across Prodsmiths, AppsForBharat, and Kapture CX, plus featured case studies.",
};

type WorkEntry = {
  type: "work";
  company: string;
  role: string;
  period: string;
  location: string;
  description: string;
  highlights: string[];
  skills: string[];
  accent: string;
};

type ProjectEntry = {
  type: "project";
  company: string;
  title: string;
  subtitle: string;
  description: string;
  highlights: string[];
  results: { metric: string; label: string }[];
  skills: string[];
  accent: string;
};

type Entry = WorkEntry | ProjectEntry;

const workExperiences: WorkEntry[] = [
  {
    type: "work",
    company: "Prodsmiths",
    role: "Associate Product Manager",
    period: "2024 - Present",
    location: "Remote",
    description:
      "Working on 0-to-1 product development for early-stage startups and products within the Prodsmiths ecosystem. Drive the end-to-end product lifecycle from discovery through launch.",
    highlights: [
      "Conduct in-depth user research and discovery sessions to uncover pain points and opportunities",
      "Author detailed PRDs, user stories, and acceptance criteria for engineering and design teams",
      "Define and track KPIs across activation, engagement, and retention funnels",
      "Collaborate with founders and stakeholders to align product roadmaps with business goals",
      "Run structured A/B tests to validate hypotheses before committing to full builds",
    ],
    skills: ["Product Discovery", "PRD Writing", "User Research", "Agile", "Roadmapping"],
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

const projects: ProjectEntry[] = [
  {
    type: "project",
    company: "AppsForBharat",
    title: "Building the ARC Platform",
    subtitle: "Astrology, Religion & Content vertical, from concept to launch",
    description:
      "AppsForBharat had a strong core in devotional content, but lacked a structured offering around astrology and personalised religious content, two high-intent, high-engagement categories growing rapidly in India's digital market.",
    highlights: [
      "Ran 30+ user interviews across target demographics to validate demand and understand content consumption habits",
      "Mapped the competitive landscape across 10 apps to identify white-space opportunities",
      "Defined the MVP scope around three pillars: daily horoscopes, live puja booking, and personalised content feeds",
      "Partnered with content, design, and engineering to ship MVP in 8 weeks",
      "Set up instrumentation with Amplitude to track content engagement, funnel completion, and D1/D7 retention",
    ],
    results: [
      { metric: "40%", label: "increase in session duration post-launch" },
      { metric: "2.3×", label: "higher D7 retention vs. app average" },
      { metric: "8 weeks", label: "MVP to launch timeline" },
      { metric: "15%", label: "of MAU adopted the feature within 30 days" },
    ],
    skills: ["Product Discovery", "User Research", "Figma", "SQL", "Amplitude", "A/B Testing"],
    accent: "indigo",
  },
  {
    type: "project",
    company: "AppsForBharat",
    title: "Subscription & In-App Monetisation Strategy",
    subtitle: "Growing revenue 40% through a tiered subscription model",
    description:
      "The app had strong engagement but was heavily reliant on ad revenue, creating a poor user experience and fragile business model. The goal was to introduce sustainable, user-centric monetisation without hurting retention.",
    highlights: [
      "Audited existing user journeys to identify high-value moments where users were willing to pay",
      "Benchmarked subscription models across comparable devotional and content apps",
      "Designed a three-tier subscription model (Free, Bhakt+, Bhakt Pro) with distinct value propositions per tier",
      "A/B tested pricing, paywall placement, and offer copy across cohorts of 50,000+ users",
      "Coordinated with engineering on payment gateway integration (Razorpay) and receipt validation",
    ],
    results: [
      { metric: "40%", label: "revenue growth within two quarters" },
      { metric: "12%", label: "free-to-paid conversion rate" },
      { metric: "3.2%", label: "subscription churn (below 5% target)" },
      { metric: "4.1×", label: "LTV improvement over ad-only users" },
    ],
    skills: ["Monetisation", "A/B Testing", "SQL", "Pricing Strategy", "Razorpay"],
    accent: "violet",
  },
  {
    type: "project",
    company: "Kapture CX",
    title: "Customer Support Automation for Enterprise CRM",
    subtitle: "Reducing resolution time by 30% through intelligent workflow design",
    description:
      "Enterprise clients on the Kapture CX platform were experiencing high ticket resolution times due to manual routing, inconsistent SLA tracking, and a lack of first-response automation, leading to customer churn risk.",
    highlights: [
      "Conducted deep-dive sessions with 8 enterprise clients to map existing support workflows and identify friction points",
      "Designed a standardised automation framework covering auto-routing, SLA escalation rules, and first-response templates",
      "Worked with the product team to configure platform capabilities for each client's unique workflow",
      "Built a monitoring dashboard (Metabase) to track ticket volumes, resolution times, and SLA adherence in real-time",
      "Ran training sessions for client support leads on the new automation stack",
    ],
    results: [
      { metric: "30%", label: "reduction in average ticket resolution time" },
      { metric: "15+", label: "enterprise clients successfully onboarded" },
      { metric: "95%", label: "SLA adherence rate (up from 72%)" },
      { metric: "4.6/5", label: "average client satisfaction score post-implementation" },
    ],
    skills: ["CRM", "Workflow Design", "Data Analysis", "Jira", "Metabase"],
    accent: "teal",
  },
];

const accentMap: Record<string, { badge: string; dot: string; projectBorder: string; metric: string; skill: string }> = {
  amber: {
    badge: "border-amber-500/30 bg-amber-500/10 text-amber-400",
    dot: "bg-amber-500 ring-amber-500/30",
    projectBorder: "border-amber-500/20 hover:border-amber-500/40",
    metric: "text-amber-400",
    skill: "border-amber-800 bg-amber-950/50 text-amber-300",
  },
  indigo: {
    badge: "border-indigo-500/30 bg-indigo-500/10 text-indigo-400",
    dot: "bg-indigo-500 ring-indigo-500/30",
    projectBorder: "border-indigo-500/20 hover:border-indigo-500/40",
    metric: "text-indigo-400",
    skill: "border-indigo-800 bg-indigo-950/50 text-indigo-300",
  },
  violet: {
    badge: "border-violet-500/30 bg-violet-500/10 text-violet-400",
    dot: "bg-violet-500 ring-violet-500/30",
    projectBorder: "border-violet-500/20 hover:border-violet-500/40",
    metric: "text-violet-400",
    skill: "border-violet-800 bg-violet-950/50 text-violet-300",
  },
  teal: {
    badge: "border-teal-500/30 bg-teal-500/10 text-teal-400",
    dot: "bg-teal-500 ring-teal-500/30",
    projectBorder: "border-teal-500/20 hover:border-teal-500/40",
    metric: "text-teal-400",
    skill: "border-teal-800 bg-teal-950/50 text-teal-300",
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
          Three years of product experience across consumer apps, B2B SaaS,
          and early-stage startups, building things that actually ship.
        </p>
      </div>

      {/* Work Timeline */}
      <div className="relative mb-24">
        <div className="absolute left-4 top-0 h-full w-px bg-zinc-800 sm:left-6" />

        <div className="space-y-16">
          {workExperiences.map((exp, i) => {
            const accent = accentMap[exp.accent];
            return (
              <div key={i} className="relative flex gap-8 sm:gap-12">
                <div className="relative flex-shrink-0">
                  <div
                    className={`mt-1.5 h-3 w-3 rounded-full ring-4 ring-zinc-950 ${accent.dot}`}
                  />
                </div>

                <div className="flex-1 pb-2">
                  <div className="mb-4 flex flex-wrap items-start justify-between gap-3">
                    <div>
                      <h2 className="text-xl font-bold text-zinc-50">
                        {exp.company}
                      </h2>
                      <p className="mt-0.5 text-base font-medium text-zinc-300">
                        {exp.role}
                      </p>
                    </div>
                    <div className="flex flex-col items-end gap-1 text-right">
                      <span className="text-sm text-zinc-400">{exp.period}</span>
                      <span className="text-xs text-zinc-600">{exp.location}</span>
                    </div>
                  </div>

                  <p className="mb-5 text-zinc-400 leading-relaxed">
                    {exp.description}
                  </p>

                  <ul className="mb-6 space-y-2.5">
                    {exp.highlights.map((h, j) => (
                      <li key={j} className="flex gap-3 text-sm text-zinc-400">
                        <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-zinc-600" />
                        {h}
                      </li>
                    ))}
                  </ul>

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
            );
          })}
        </div>
      </div>

      {/* Projects section divider */}
      <div id="projects" className="mb-12 flex items-center gap-4">
        <div className="h-px flex-1 bg-zinc-800" />
        <p className="text-xs font-semibold tracking-widest text-zinc-500 uppercase">
          Featured Projects
        </p>
        <div className="h-px flex-1 bg-zinc-800" />
      </div>

      {/* Project cards */}
      <div className="space-y-8">
        {projects.map((cs, i) => {
          const accent = accentMap[cs.accent];
          return (
            <article
              key={i}
              className={`rounded-2xl border bg-zinc-900 p-8 transition-colors ${accent.projectBorder} lg:p-10`}
            >
              {/* Header */}
              <div className="mb-6">
                <div className="mb-3 flex flex-wrap items-center gap-3">
                  <span className="rounded-full border border-zinc-600 bg-zinc-800 px-3 py-1 text-xs font-semibold text-zinc-300">
                    Academic Project
                  </span>
                  <span className="text-xs text-zinc-500">{cs.company}</span>
                </div>
                <h2 className="text-2xl font-bold text-zinc-50 sm:text-3xl">
                  {cs.title}
                </h2>
                <p className="mt-2 text-zinc-400">{cs.subtitle}</p>
              </div>

              <div className="grid gap-10 lg:grid-cols-2">
                {/* Left: Problem + Approach */}
                <div className="space-y-8">
                  <div>
                    <h3 className="mb-3 text-xs font-semibold tracking-widest text-zinc-500 uppercase">
                      The Problem
                    </h3>
                    <p className="text-sm text-zinc-400 leading-relaxed">
                      {cs.description}
                    </p>
                  </div>

                  <div>
                    <h3 className="mb-3 text-xs font-semibold tracking-widest text-zinc-500 uppercase">
                      My Approach
                    </h3>
                    <ul className="space-y-3">
                      {cs.highlights.map((step, j) => (
                        <li key={j} className="flex gap-3 text-sm text-zinc-400">
                          <span className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-zinc-800 text-[10px] font-bold text-zinc-500">
                            {j + 1}
                          </span>
                          {step}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Right: Results + Skills */}
                <div className="space-y-8">
                  <div>
                    <h3 className="mb-4 text-xs font-semibold tracking-widest text-zinc-500 uppercase">
                      Results
                    </h3>
                    <div className="grid grid-cols-2 gap-3">
                      {cs.results.map((r, j) => (
                        <div
                          key={j}
                          className="rounded-xl border border-zinc-800 bg-zinc-950 p-4"
                        >
                          <p className={`text-2xl font-bold ${accent.metric}`}>
                            {r.metric}
                          </p>
                          <p className="mt-1 text-xs leading-snug text-zinc-500">
                            {r.label}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="mb-3 text-xs font-semibold tracking-widest text-zinc-500 uppercase">
                      Skills & Tools
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {cs.skills.map((skill) => (
                        <span
                          key={skill}
                          className={`rounded-full border px-3 py-1 text-xs font-medium ${accent.skill}`}
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </div>
  );
}
