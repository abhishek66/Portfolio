import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Experience — Abhishek Manikandan",
  description:
    "Product management experience across Prodsmiths, AppsForBharat, and Kapture CX.",
};

const experiences = [
  {
    company: "Prodsmiths",
    role: "Associate Product Manager",
    period: "2024 — Present",
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
    company: "AppsForBharat",
    role: "Product Manager",
    period: "2023 — 2024",
    location: "Bangalore, India",
    description:
      "Led product initiatives for a devotional super-app serving millions of users across India. Owned key surfaces including content discovery, monetisation, and personalisation.",
    highlights: [
      "Owned the monetisation roadmap, introducing subscription tiers and in-app purchases that grew revenue by 40%",
      "Redesigned the content discovery experience, improving D7 retention by 18% through personalised recommendations",
      "Led the 0-to-1 build of the ARC (Astrology, Religion & Content) platform — a new vertical within the app",
      "Managed a cross-functional team of 12 across engineering, design, content, and data",
      "Defined and maintained the product roadmap across two quarterly planning cycles",
    ],
    skills: ["SQL", "Figma", "A/B Testing", "Monetisation", "Retention"],
    accent: "violet",
  },
  {
    company: "Kapture CX",
    role: "CRM Specialist",
    period: "2022 — 2023",
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

const accentMap: Record<string, { badge: string; dot: string; line: string }> = {
  indigo: {
    badge: "border-indigo-500/30 bg-indigo-500/10 text-indigo-400",
    dot: "bg-indigo-500 ring-indigo-500/30",
    line: "from-indigo-500/30",
  },
  violet: {
    badge: "border-violet-500/30 bg-violet-500/10 text-violet-400",
    dot: "bg-violet-500 ring-violet-500/30",
    line: "from-violet-500/30",
  },
  teal: {
    badge: "border-teal-500/30 bg-teal-500/10 text-teal-400",
    dot: "bg-teal-500 ring-teal-500/30",
    line: "from-teal-500/30",
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
          and early-stage startups — building things that actually ship.
        </p>
      </div>

      {/* Timeline */}
      <div className="relative">
        {/* Vertical line */}
        <div className="absolute left-4 top-0 h-full w-px bg-zinc-800 sm:left-6" />

        <div className="space-y-16">
          {experiences.map((exp, i) => {
            const accent = accentMap[exp.accent];
            return (
              <div key={i} className="relative flex gap-8 sm:gap-12">
                {/* Timeline dot */}
                <div className="relative flex-shrink-0">
                  <div
                    className={`mt-1.5 h-3 w-3 rounded-full ring-4 ring-zinc-950 ${accent.dot}`}
                  />
                </div>

                {/* Content */}
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
    </div>
  );
}
