import Link from "next/link";

const skills = [
  { name: "SQL", category: "Data & Analytics" },
  { name: "Figma", category: "Design" },
  { name: "Jira", category: "Project Management" },
  { name: "A/B Testing", category: "Experimentation" },
  { name: "Agile", category: "Methodology" },
  { name: "Product Discovery", category: "Strategy" },
  { name: "User Research", category: "Research" },
  { name: "PRD Writing", category: "Documentation" },
  { name: "Roadmapping", category: "Strategy" },
  { name: "Data Analysis", category: "Analytics" },
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
          <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-indigo-500/30 bg-indigo-500/10 px-4 py-1.5 text-xs font-medium tracking-widest text-indigo-400 uppercase">
            <span className="h-1.5 w-1.5 rounded-full bg-indigo-400 animate-pulse" />
            Product Manager
          </p>

          <h1 className="mb-6 text-5xl font-bold leading-tight tracking-tight text-zinc-50 sm:text-6xl lg:text-7xl">
            Abhishek
            <br />
            <span className="text-zinc-400">Manikandan</span>
          </h1>

          <p className="mb-10 max-w-xl text-lg leading-relaxed text-zinc-400">
            Building products that users love — from 0 to 1 and beyond.
            Focused on data-informed decisions, user empathy, and scalable
            growth.
          </p>

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
                Product thinking meets{" "}
                <span className="text-zinc-400">execution</span>
              </h2>
              <div className="space-y-4 text-zinc-400 leading-relaxed">
                <p>
                  I&apos;m a Product Manager who thrives at the intersection of
                  user needs, business goals, and technical feasibility. I
                  enjoy working closely with design, engineering, and business
                  teams to ship meaningful products.
                </p>
                <p>
                  My experience spans B2C consumer apps, enterprise CRM
                  platforms, and early-stage startups — giving me a broad
                  perspective on how to build for very different users and
                  constraints.
                </p>
                <p>
                  I believe the best products come from deep curiosity about
                  users, a healthy obsession with data, and a team that trusts
                  each other to move fast.
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
                { label: "Years in PM", value: "3+" },
                { label: "Products Shipped", value: "10+" },
                { label: "Users Impacted", value: "5M+" },
                { label: "Cross-functional Teams", value: "8+" },
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
            Skills & Tools
          </p>
          <h2 className="mb-12 text-3xl font-bold text-zinc-50 sm:text-4xl">
            What I bring to the table
          </h2>

          <div className="flex flex-wrap gap-3">
            {skills.map((skill) => (
              <div
                key={skill.name}
                className="group rounded-lg border border-zinc-800 bg-zinc-900 px-5 py-3 transition-all hover:border-indigo-500/50 hover:bg-zinc-800"
              >
                <p className="text-sm font-semibold text-zinc-200 group-hover:text-zinc-50 transition-colors">
                  {skill.name}
                </p>
                <p className="mt-0.5 text-xs text-zinc-500">
                  {skill.category}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-zinc-800 py-24">
        <div className="mx-auto max-w-6xl px-6 lg:px-8 text-center">
          <h2 className="mb-4 text-3xl font-bold text-zinc-50 sm:text-4xl">
            Let&apos;s build something great
          </h2>
          <p className="mb-8 text-zinc-400 max-w-md mx-auto">
            I&apos;m always open to interesting product challenges and
            collaborative teams.
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
