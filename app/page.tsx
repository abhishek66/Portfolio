import Link from "next/link";
import Image from "next/image";

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
      {/* Hero */}
      <section className="relative flex min-h-[92vh] items-center overflow-hidden">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -top-40 -right-40 h-[600px] w-[600px] rounded-full bg-indigo-900/20 blur-3xl" />
          <div className="absolute -bottom-40 -left-40 h-[400px] w-[400px] rounded-full bg-violet-900/10 blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-6xl px-6 lg:px-8 py-24 w-full">
          <div className="flex flex-col-reverse items-center gap-12 lg:flex-row lg:items-center lg:justify-between">
            {/* Text */}
            <div className="flex-1">
              <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-indigo-500/30 bg-indigo-500/10 px-4 py-1.5 text-xs font-medium tracking-widest text-indigo-400 uppercase">
                <span className="h-1.5 w-1.5 rounded-full bg-indigo-400 animate-pulse" />
                Business Analyst &amp; Consultant
              </p>

              <h1 className="mb-6 text-5xl font-bold leading-tight tracking-tight text-zinc-50 sm:text-6xl lg:text-7xl">
                Abhishek
                <br />
                <span className="text-zinc-400">Manikandan</span>
              </h1>

              <p className="mb-4 max-w-xl text-lg leading-relaxed text-zinc-400">
                Turning complex business problems into clear strategy, measurable
                outcomes, and products that scale.
              </p>

              <p className="mb-10 max-w-xl text-sm leading-relaxed text-zinc-500">
                MSc Business Analysis &amp; Consulting · University of Strathclyde
                <br />
                4 years across consulting, product management, and enterprise analytics.
              </p>

              {/* Social links */}
              <div className="mb-8 flex flex-wrap items-center gap-5">
                <a
                  href="https://github.com/abhishek66"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-2 text-sm text-zinc-500 transition-colors hover:text-amber-400"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4 flex-shrink-0" aria-hidden="true">
                    <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
                  </svg>
                  <span>abhishek66</span>
                </a>
              </div>

              <div className="flex flex-wrap gap-4">
                <Link
                  href="/experience"
                  className="rounded-lg bg-indigo-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-indigo-900/30 transition-all hover:bg-indigo-500 hover:shadow-indigo-800/40"
                >
                  View My Work
                </Link>
                <Link
                  href="/contact"
                  className="rounded-lg border border-zinc-700 px-6 py-3 text-sm font-semibold text-zinc-300 transition-all hover:border-zinc-500 hover:text-zinc-50"
                >
                  Get in Touch
                </Link>
              </div>
            </div>

            {/* Headshot */}
            <div className="flex-shrink-0">
              <Image
                src="/images/headshot.png"
                alt="Abhishek Manikandan"
                width={300}
                height={358}
                priority
                className="w-[200px] rounded-2xl border border-amber-500/30 object-cover shadow-xl lg:w-[300px]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="border-t border-zinc-800 py-24">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="mb-3 text-xs font-semibold tracking-widest text-indigo-400 uppercase">
                About Me
              </p>
              <h2 className="mb-6 text-3xl font-bold text-zinc-50 sm:text-4xl">
                Where analysis meets{" "}
                <span className="text-zinc-400">execution</span>
              </h2>
              <div className="space-y-4 text-zinc-400 leading-relaxed">
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
                  className="text-sm font-medium text-indigo-400 hover:text-indigo-300 transition-colors"
                >
                  View my experience →
                </Link>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {[
                { label: "Years of Experience", value: "4+" },
                { label: "Consulting Case Studies", value: "6" },
                { label: "Users Impacted", value: "10M+" },
                { label: "Industry Clients", value: "4" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-xl border border-zinc-800 bg-zinc-900 p-6"
                >
                  <p className="text-3xl font-bold text-zinc-50">
                    {stat.value}
                  </p>
                  <p className="mt-1 text-sm text-zinc-500">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="border-t border-zinc-800 py-24">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <p className="mb-3 text-xs font-semibold tracking-widest text-indigo-400 uppercase">
            Skills &amp; Tools
          </p>
          <h2 className="mb-12 text-3xl font-bold text-zinc-50 sm:text-4xl">
            What I bring to the table
          </h2>

          <div className="grid gap-5 sm:grid-cols-2">
            {skillGroups.map((group) => (
              <div
                key={group.category}
                className="rounded-xl border border-zinc-800 bg-zinc-900 p-6 border-l-2 border-l-amber-500/60"
              >
                <h3 className="mb-4 text-sm font-bold text-zinc-100 tracking-tight">
                  {group.category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full border border-zinc-700 bg-zinc-800 px-3 py-1 text-xs font-medium text-zinc-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-zinc-800 py-24">
        <div className="mx-auto max-w-6xl px-6 lg:px-8 text-center">
          <h2 className="mb-4 text-3xl font-bold text-zinc-50 sm:text-4xl">
            Let&apos;s solve something together
          </h2>
          <p className="mb-8 text-zinc-400 max-w-md mx-auto">
            Open to business analysis, consulting, and product roles where
            rigorous thinking and execution both matter.
          </p>
          <Link
            href="/contact"
            className="inline-flex rounded-lg bg-indigo-600 px-8 py-3.5 text-sm font-semibold text-white transition-all hover:bg-indigo-500"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </>
  );
}
