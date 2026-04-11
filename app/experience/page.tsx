import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Experience | Abhishek Manikandan",
  description:
    "Product management and business analysis experience across Prodsmiths, AppsForBharat, and Kapture CX.",
};

type WorkEntry = {
  type: "work";
  company: string;
  role: string;
  period: string;
  location: string;
  description: string;
  highlights: string[];
  modules?: string[];
  skills: string[];
  accent: string;
};

const workExperiences: WorkEntry[] = [
  {
    type: "work",
    company: "Prodsmiths",
    role: "Product Manager / Business Analyst",
    period: "October 2023 - January 2025",
    location: "Remote",
    description:
      "Spearheaded India's first digital transformation of the Acquisition Module for ARCIL (Asset Reconstruction Company), revolutionising the industry's traditional processes.",
    highlights: [
      "Identified and clarified product objectives and scope across the portfolio",
      "Executed product and project management across all phases: Initiation, Planning, Design, Execution, Closure and Monitoring",
      "Architected comprehensive data models and implemented advanced data instrumentation strategies",
      "Designed and documented complex system features through detailed flow diagrams, wireframing and user stories, enabling seamless collaboration across cross-functional teams",
      "End-to-end testing of each feature in UAT and Production environments",
      "Took ownership of the full deployment process across four drops",
      "Prepared project plans and schedules; tracked capacity utilisation and resource management",
      "Updated project status for stakeholders; handled project and client meetings",
      "Preliminary root cause analysis of bugs using front-end and back-end logs",
      "Monitored change requests and ensured timely delivery",
    ],
    modules: [
      "Acquisition",
      "Legal Due Diligence",
      "Valuation Due Diligence",
      "Financial Due Diligence",
      "Acquisition Proposal",
      "Bid Details",
      "Acquisition Activities",
    ],
    skills: [
      "Product Management",
      "Business Analysis",
      "UAT",
      "Data Modelling",
      "Wireframing",
      "User Stories",
      "Stakeholder Management",
      "Agile",
      "RCA",
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

const accentMap: Record<string, { badge: string; dot: string; moduleTag: string }> = {
  indigo: {
    badge: "border-indigo-500/30 bg-indigo-500/10 text-indigo-400",
    dot: "bg-indigo-500 ring-indigo-500/30",
    moduleTag: "border-indigo-700 bg-indigo-950/60 text-indigo-300",
  },
  violet: {
    badge: "border-violet-500/30 bg-violet-500/10 text-violet-400",
    dot: "bg-violet-500 ring-violet-500/30",
    moduleTag: "border-violet-700 bg-violet-950/60 text-violet-300",
  },
  teal: {
    badge: "border-teal-500/30 bg-teal-500/10 text-teal-400",
    dot: "bg-teal-500 ring-teal-500/30",
    moduleTag: "border-teal-700 bg-teal-950/60 text-teal-300",
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

      {/* Work Timeline */}
      <div className="relative">
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

                  {exp.modules && exp.modules.length > 0 && (
                    <div className="mb-5">
                      <p className="mb-2 text-xs font-semibold tracking-widest text-zinc-500 uppercase">
                        Modules Delivered
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {exp.modules.map((mod) => (
                          <span
                            key={mod}
                            className={`rounded-full border px-3 py-1 text-xs font-medium ${accent.moduleTag}`}
                          >
                            {mod}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  <div>
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
