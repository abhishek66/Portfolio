import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Case Studies | Abhishek Manikandan",
  description:
    "Academic and consulting case studies including AI workflow optimisation for a Scottish Local Authority and the STAHL IIoT rental model feasibility study.",
};

const caseStudies = [
  {
    label: "Academic Project",
    tag: "Business Analysis & Consulting",
    university: "University of Strathclyde",
    programme: "MSc Business Analysis and Consulting · 2025",
    title: "StormID – AI Workflow Optimisation for a Scottish Local Authority",
    subtitle: "Evaluating how AI can improve service delivery across 10 council workflows",
    description:
      "Assessed 10 operational workflows for a Scottish Local Authority to identify where AI integration would deliver the highest ROI and efficiency gains. Using Lean Six Sigma and Business Process Analysis, the team ranked all workflows via a weighted AI Scoring Framework (scored across 6 criteria, out of 50), and recommended a phased 9-month implementation plan focused on the two highest-value targets.",
    highlights: [
      "Developed a custom AI Scoring Framework across 6 weighted criteria applied to all 10 workflows",
      "Identified Workflow 7 (Freedom of Information Requests) as top priority, weighted score 40/50",
      "Identified Workflow 8 (Financial Assistance Applications) as second priority, score 33.5/50",
      "Mapped AI components (Convert, Classify, Generate, Validate, Summarise) to each step of both workflows",
      "Designed a 2-phase 9-month implementation roadmap: PoC on Workflow 8, then parallel rollout of Workflow 7",
      "Assessed risks across legal/GDPR compliance, ethics, financial sustainability, and operational governance",
    ],
    results: [
      { metric: "68%", label: "Staff time reduction expected (Workflow 8)" },
      { metric: "57%", label: "Staff time reduction expected (Workflow 7)" },
      { metric: "16,680", label: "Annual applications processed (Workflow 8)" },
      { metric: "460 hrs", label: "Monthly staff hours saved (Workflow 7)" },
    ],
    skills: [
      "Lean Six Sigma",
      "Business Process Analysis",
      "AI Scoring Framework",
      "Workflow Modelling",
      "ROI Analysis",
      "Stakeholder Mapping",
      "Process Flowcharting",
    ],
  },
  {
    label: "Academic Project",
    tag: "Business Analysis & Consulting",
    university: "University of Strathclyde",
    programme: "MSc Business Analysis and Consulting · 2025",
    title: "Improving Workforce Strategy for a Modern Police Force",
    subtitle: "Root cause analysis and strategic recommendations for a Regional Police Force",
    description:
      "Analysed staffing data and qualitative insights from exit trends and recruitment feedback to diagnose critical workforce shortages across Eastern, Western, and Northern divisions of a Regional Police Force. Applied multiple root cause frameworks to identify systemic structural failures and delivered seven actionable strategic recommendations to build a future-ready digital police workforce.",
    highlights: [
      "Conducted quantitative staffing gap analysis across three regional forces identifying critical shortages in Sergeants, P1 officers, and digital specialists",
      "Applied SWOT, 5 Why's, Fishbone Diagram, and McKinsey 7S frameworks to identify root causes",
      "Discovered over-hiring of P2 junior investigators was worsening supervisory overload rather than solving shortages",
      "Mapped responsibilities across all workforce initiatives using a RACI Matrix for implementation governance",
      "Recommended 4 key solutions: admin automation (20-30% workload reduction), leadership pathways, modernised recruitment, and digital upskilling",
      "Identified Western Force's flexible working model as best practice replicable across all divisions",
    ],
    results: [
      { metric: "20-30%", label: "Projected admin workload reduction via automation" },
      { metric: "3 Forces", label: "Eastern, Western & Northern analysed" },
      { metric: "7", label: "Strategic recommendations delivered" },
      { metric: "5", label: "Frameworks applied (SWOT, 5 Why's, Fishbone, McKinsey 7S, RACI)" },
    ],
    skills: [
      "SWOT Analysis",
      "5 Why's",
      "Fishbone Diagram",
      "McKinsey 7S",
      "RACI Matrix",
      "Workforce Analytics",
      "Root Cause Analysis",
      "MS Excel",
    ],
  },
  {
    label: "Academic Project",
    tag: "Business Analysis & Consulting",
    university: "University of Strathclyde",
    programme: "MSc Business Analysis and Consulting · 2026",
    title: "Cradle-to-Gate Life Cycle Assessment of a Residential Building",
    subtitle: "Embodied carbon analysis and low-carbon procurement strategy for a residential build",
    description:
      "Conducted a cradle-to-gate (A1–A3) Life Cycle Assessment of a residential building using material quantities from an Egyptian design as a real-world reference, analysed under UK construction assumptions and ICE Database emission factors. Identified concrete as the primary carbon hotspot and used Multi-Criteria Decision Analysis (MCDA) to recommend a phased low-carbon procurement strategy aligned with UK Net Zero 2050 targets.",
    highlights: [
      "Calculated embodied carbon emissions for three key materials — concrete (17,374 kgCO₂e), red bricks (7,239 kgCO₂e), and rebar steel (2,353 kgCO₂e) — using ICE Database V4.1",
      "Identified concrete as the primary emission hotspot despite its lower per-kg intensity, due to its dominant volume (168,684 kg)",
      "Applied MCDA across 6 material options scored on GHG, cost, and feasibility, recommending recycled steel (10/10) and low-carbon concrete (8/10)",
      "Designed a 4-phase, 9-month intervention roadmap from carbon baseline establishment to standardised low-carbon procurement",
      "Demonstrated projected CO₂ savings of 29.8% and a 26.9% reduction in global warming potential via low-carbon material switching",
      "Aligned recommendations with the UK Net Zero 2050 target and the Paris Agreement",
    ],
    results: [
      { metric: "29.8%", label: "Projected CO₂ savings from low-carbon materials" },
      { metric: "17,374 kg", label: "Concrete's total embodied carbon (primary hotspot)" },
      { metric: "3", label: "Materials assessed cradle-to-gate (concrete, steel, brick)" },
      { metric: "9 Months", label: "Phased intervention roadmap duration" },
    ],
    skills: [
      "Life Cycle Assessment (LCA)",
      "MCDA",
      "ICE Database",
      "Embodied Carbon Analysis",
      "Sustainability Strategy",
      "Carbon Hotspot Mapping",
      "Scenario Analysis",
    ],
  },
  {
    label: "Academic Project",
    tag: "Business Analysis & Consulting",
    university: "University of Strathclyde",
    programme: "MSc Business Analysis and Consulting · 2026",
    title: "NHS England A&E Crisis — Machine Learning Analytics Report",
    subtitle: "Predictive modelling and strategic intervention analysis for NHS emergency care demand",
    description:
      "Analysed 49 months of Type 1 A&E attendance data across 96 NHS Trusts in the Midlands, London, and North East & Yorkshire to diagnose systemic operational failure. Built a Random Forest forecasting model achieving 96.33% accuracy to project 12-month forward demand, and applied MCDA to prioritise six interventions addressing a crisis where the NHS 5% breach target was missed in every single month analysed.",
    highlights: [
      "Identified 5 critical bottlenecks: demand surge (+21.8%), performance crisis (46.16% breach), wait time escalation, regional inequality, and predictable seasonal pressure",
      "Decoupled wait times into two non-overlapping root causes: manageable 4-12hr A&E friction (peak 300,047 patients) vs critical 12hr+ hospital bed failure (peak 36,653 patients)",
      "Built and validated a Random Forest model with 96.33% accuracy (MAPE 3.67%) across 37 months, using 17 engineered features across 5 categories",
      "Developed a season-adjusted Composite Pressure Index to enable fair cross-month operational ranking",
      "Ran MCDA across 4 weighted categories (Clinical Impact 35%, Operational Feasibility 25%, Strategic Alignment 25%, Economic Efficiency 15%) to rank 6 interventions",
      "Recommended Seasonal Resourcing (top-ranked, score 21.31) deployed in September ahead of the predictable Oct-Feb crisis window",
    ],
    results: [
      { metric: "96.33%", label: "Random Forest forecast accuracy" },
      { metric: "46.16%", label: "Peak 4-hour breach rate (9x above NHS target)" },
      { metric: "0/49", label: "Months the NHS 5% target was met" },
      { metric: "36,653", label: "Peak patients waiting 12+ hours (Jan 2026)" },
    ],
    skills: [
      "Random Forest",
      "Machine Learning",
      "MCDA",
      "Time Series Analysis",
      "Feature Engineering",
      "Bottleneck Analysis",
      "NHS Data Analytics",
      "Python",
      "Excel",
    ],
  },
  {
    label: "Academic Project",
    tag: "Business Analysis & Consulting",
    university: "University of Strathclyde",
    programme: "MSc Business Analysis and Consulting · 2026",
    title: "WB Alloys Group — Enterprise Risk Management Framework",
    subtitle: "ISO 31000:2018-aligned ERM framework and digital dashboard for a £25M multi-site SME",
    description:
      "Designed and delivered a consolidated Enterprise Risk Management framework for WB Alloys Group, a £25M welding products manufacturer operating across four UK branches (Glasgow, Aberdeen, Stockton, Tavistock) with international presence in the USA and UAE. The framework addressed a critical blind spot: risk being assessed in silos at branch level with no enterprise-wide visibility, threatening ISO accreditations and NCA 3800 nuclear supply chain certification.",
    highlights: [
      "Forensic audit of 21 existing branch risk documents to extract, normalise, and consolidate 134 risks into a unified 5x5 Likelihood x Impact register, enabling enterprise comparison for the first time",
      "Designed a 6-tier escalation protocol with automated IF/Then triggers and a 3-tier governance structure (Board, Executive Team, Branch Managers)",
      "Built a 12-tab digital ERM dashboard prototype using Claude, with real-time KRI monitoring, ISO mapping, branch scorecards, and a board report module",
      "Defined a 4-level Risk Appetite Framework with zero tolerance for all H&S (ISO 45001) and NCA 3800 nuclear compliance violations",
      "Established 12 Key Risk Indicators with automated threshold alerts mapped to ISO 9001, 14001, 45001 and NCA 3800",
      "Designed an AI Risk Agent with 5 modes (Review Due, Score Risk, Analyse, Gaps, Chat) integrated directly into the risk register",
    ],
    results: [
      { metric: "134", label: "Total risks identified & scored across 4 branches" },
      { metric: "6 Tiers", label: "Escalation protocol from Monitor to Immediate" },
      { metric: "12 KRIs", label: "Key Risk Indicators with automated thresholds" },
      { metric: "£25M", label: "Client revenue protected by the framework" },
    ],
    skills: [
      "ISO 31000:2018",
      "Enterprise Risk Management",
      "Risk Register Design",
      "KRI Monitoring",
      "Three Lines Model",
      "PDCA",
      "ISO 45001",
      "NCA 3800",
      "Dashboard Prototyping",
      "AI Agent Design",
    ],
  },
  {
    label: "Academic Project",
    tag: "Business Analysis & Consulting",
    university: "University of Strathclyde",
    programme: "MSc Business Analysis and Consulting · 2025",
    title: "STAHL – IIoT Rental Model Feasibility Study",
    subtitle: "10-year financial and strategic feasibility study for an IIoT-enabled rental transition",
    description:
      "Led a 10-year financial and strategic feasibility study for STAHL, a heavy equipment manufacturer evaluating a transition from traditional sales to an IIoT-enabled rental model. Delivered a full consulting report and executive presentation covering financial modelling, stakeholder analysis, and a 5-phase transformation roadmap.",
    highlights: [
      "Built a DCF financial model across small, medium, and large fleet scenarios",
      "Applied CATWOE framework to map stakeholders and transformation boundaries",
      "Identified that positive cash flow is achievable by Year 6–7 (base case, 65% utilisation)",
      "Recommended phased CapEx deployment: 40/30/20/10% across 5 years",
      "Projected EBITDA improvement from –12% to 37% by 2030; IRR of 9.8%",
      "Modelled IIoT-driven predictive maintenance reducing downtime by up to 15%",
    ],
    results: [
      { metric: "9.8%", label: "Projected IRR" },
      { metric: "37%", label: "EBITDA at maturity (2030)" },
      { metric: "~7 yrs", label: "Payback period" },
      { metric: "$23M+", label: "Projected revenue by 2030" },
    ],
    skills: [
      "DCF Analysis",
      "CATWOE",
      "Scenario Analysis",
      "Financial Modelling",
      "IIoT Strategy",
      "Stakeholder Mapping",
      "Excel",
    ],
  },
];

export default function CaseStudies() {
  return (
    <div className="mx-auto max-w-6xl px-6 lg:px-8 py-20">
      <div className="mb-16">
        <p className="mb-3 text-xs font-semibold tracking-widest text-amber-400 uppercase">
          Portfolio
        </p>
        <h1 className="text-4xl font-bold text-zinc-50 sm:text-5xl">
          Case Studies
        </h1>
        <p className="mt-4 max-w-xl text-zinc-400 leading-relaxed">
          In-depth consulting and analytical projects, covering the problem,
          methodology, and outcomes.
        </p>
      </div>

      <div className="space-y-10">
        {caseStudies.map((cs, i) => (
          <article
            key={i}
            className="rounded-2xl border border-amber-500/20 bg-zinc-900 p-8 transition-colors hover:border-amber-500/40 lg:p-10"
          >
            {/* Header */}
            <div className="mb-8">
              <div className="mb-4 flex flex-wrap items-center gap-3">
                <span className="rounded-full border border-zinc-600 bg-zinc-800 px-3 py-1 text-xs font-semibold text-zinc-300">
                  {cs.label}
                </span>
                <span className="rounded-full border border-amber-500/30 bg-amber-500/10 px-3 py-1 text-xs font-semibold text-amber-400">
                  {cs.tag}
                </span>
              </div>

              <h2 className="text-2xl font-bold text-zinc-50 sm:text-3xl">
                {cs.title}
              </h2>
              <p className="mt-2 text-zinc-400">{cs.subtitle}</p>

              <div className="mt-4 flex flex-col gap-1">
                <p className="text-sm font-semibold text-zinc-200">
                  {cs.university}
                </p>
                <p className="text-xs text-zinc-500">{cs.programme}</p>
              </div>
            </div>

            <div className="grid gap-10 lg:grid-cols-2">
              {/* Left: Overview + Approach */}
              <div className="space-y-8">
                <div>
                  <h3 className="mb-3 text-xs font-semibold tracking-widest text-zinc-500 uppercase">
                    Overview
                  </h3>
                  <p className="text-sm text-zinc-400 leading-relaxed">
                    {cs.description}
                  </p>
                </div>

                <div>
                  <h3 className="mb-3 text-xs font-semibold tracking-widest text-zinc-500 uppercase">
                    Key Contributions
                  </h3>
                  <ul className="space-y-3">
                    {cs.highlights.map((h, j) => (
                      <li key={j} className="flex gap-3 text-sm text-zinc-400">
                        <span className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-zinc-800 text-[10px] font-bold text-zinc-500">
                          {j + 1}
                        </span>
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Right: Metrics + Skills */}
              <div className="space-y-8">
                <div>
                  <h3 className="mb-4 text-xs font-semibold tracking-widest text-zinc-500 uppercase">
                    Key Metrics
                  </h3>
                  <div className="grid grid-cols-2 gap-3">
                    {cs.results.map((r, j) => (
                      <div
                        key={j}
                        className="rounded-xl border border-zinc-800 bg-zinc-950 p-4"
                      >
                        <p className="text-2xl font-bold text-amber-400">
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
                    Tools & Methods
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {cs.skills.map((skill) => (
                      <span
                        key={skill}
                        className="rounded-full border border-amber-800 bg-amber-950/50 px-3 py-1 text-xs font-medium text-amber-300"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
