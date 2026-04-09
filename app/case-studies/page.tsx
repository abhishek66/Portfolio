import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Case Studies — Abhishek Manikandan",
  description:
    "Product case studies including the ARC platform build and monetisation strategy at AppsForBharat.",
};

const caseStudies = [
  {
    tag: "0-to-1 Build",
    company: "AppsForBharat",
    title: "Building the ARC Platform",
    subtitle: "Astrology, Religion & Content vertical — from concept to launch",
    problem:
      "AppsForBharat had a strong core in devotional content, but lacked a structured offering around astrology and personalised religious content — two high-intent, high-engagement categories growing rapidly in India's digital market.",
    approach: [
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
    tag: "Monetisation",
    company: "AppsForBharat",
    title: "Subscription & In-App Monetisation Strategy",
    subtitle: "Growing revenue 40% through a tiered subscription model",
    problem:
      "The app had strong engagement but was heavily reliant on ad revenue, creating a poor user experience and fragile business model. The goal was to introduce sustainable, user-centric monetisation without hurting retention.",
    approach: [
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
    tag: "Automation & Efficiency",
    company: "Kapture CX",
    title: "Customer Support Automation for Enterprise CRM",
    subtitle: "Reducing resolution time by 30% through intelligent workflow design",
    problem:
      "Enterprise clients on the Kapture CX platform were experiencing high ticket resolution times due to manual routing, inconsistent SLA tracking, and a lack of first-response automation — leading to customer churn risk.",
    approach: [
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

const accentMap: Record<
  string,
  { tag: string; border: string; metric: string; skill: string }
> = {
  indigo: {
    tag: "border-indigo-500/30 bg-indigo-500/10 text-indigo-400",
    border: "border-indigo-500/20 hover:border-indigo-500/50",
    metric: "text-indigo-400",
    skill: "border-indigo-800 bg-indigo-950/50 text-indigo-300",
  },
  violet: {
    tag: "border-violet-500/30 bg-violet-500/10 text-violet-400",
    border: "border-violet-500/20 hover:border-violet-500/50",
    metric: "text-violet-400",
    skill: "border-violet-800 bg-violet-950/50 text-violet-300",
  },
  teal: {
    tag: "border-teal-500/30 bg-teal-500/10 text-teal-400",
    border: "border-teal-500/20 hover:border-teal-500/50",
    metric: "text-teal-400",
    skill: "border-teal-800 bg-teal-950/50 text-teal-300",
  },
};

export default function CaseStudies() {
  return (
    <div className="mx-auto max-w-6xl px-6 lg:px-8 py-20">
      <div className="mb-16">
        <p className="mb-3 text-xs font-semibold tracking-widest text-indigo-400 uppercase">
          Portfolio
        </p>
        <h1 className="text-4xl font-bold text-zinc-50 sm:text-5xl">
          Case Studies
        </h1>
        <p className="mt-4 max-w-xl text-zinc-400 leading-relaxed">
          A deep-dive into select product work — covering the problem, my
          approach, and the outcomes.
        </p>
      </div>

      <div className="space-y-12">
        {caseStudies.map((cs, i) => {
          const accent = accentMap[cs.accent];
          return (
            <article
              key={i}
              className={`rounded-2xl border bg-zinc-900 p-8 transition-all ${accent.border} lg:p-10`}
            >
              {/* Header */}
              <div className="mb-6 flex flex-wrap items-start justify-between gap-4">
                <div>
                  <div className="mb-3 flex flex-wrap items-center gap-3">
                    <span
                      className={`rounded-full border px-3 py-1 text-xs font-semibold ${accent.tag}`}
                    >
                      {cs.tag}
                    </span>
                    <span className="text-xs text-zinc-500">{cs.company}</span>
                  </div>
                  <h2 className="text-2xl font-bold text-zinc-50 sm:text-3xl">
                    {cs.title}
                  </h2>
                  <p className="mt-2 text-zinc-400">{cs.subtitle}</p>
                </div>
              </div>

              <div className="grid gap-10 lg:grid-cols-2">
                {/* Left: Problem + Approach */}
                <div className="space-y-8">
                  <div>
                    <h3 className="mb-3 text-xs font-semibold tracking-widest text-zinc-500 uppercase">
                      The Problem
                    </h3>
                    <p className="text-zinc-400 leading-relaxed text-sm">
                      {cs.problem}
                    </p>
                  </div>

                  <div>
                    <h3 className="mb-3 text-xs font-semibold tracking-widest text-zinc-500 uppercase">
                      My Approach
                    </h3>
                    <ul className="space-y-3">
                      {cs.approach.map((step, j) => (
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
                          <p
                            className={`text-2xl font-bold ${accent.metric}`}
                          >
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
