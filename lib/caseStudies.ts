export type CaseStudy = {
  client?: string;
  university: string;
  programme: string;
  title: string;
  subtitle: string;
  year: string;
  skill: string;
  problem: string;
  solution: string;
  highlights: string[];
  results: { metric: string; label: string }[];
  skills: string[];
};

export const caseStudies: CaseStudy[] = [
  {
    client: "Deloitte",
    university: "University of Strathclyde",
    programme: "MSc Business Analysis and Consulting · 2025",
    title: "Improving Workforce Strategy for a Modern Police Force",
    subtitle: "Root cause analysis and strategic recommendations for a Regional Police Force",
    year: "2025",
    skill: "Root Cause Analysis",
    problem: "A Regional Police Force faced critical staffing shortages across Eastern, Western, and Northern divisions — Sergeants, P1 officers, and digital specialists — with no root cause analysis to explain the pattern or guide intervention.",
    solution: "Applied SWOT, 5 Why's, Fishbone Diagram, McKinsey 7S, and RACI Matrix frameworks to diagnose structural failures. Recommended four targeted solutions: admin automation (20–30% workload reduction), accelerated leadership pathways, modernised recruitment, and digital upskilling. Identified Western Force's flexible working model as replicable best practice.",
    highlights: [
      "Conducted quantitative staffing gap analysis across three regional forces identifying critical shortages in Sergeants, P1 officers, and digital specialists",
      "Applied SWOT, 5 Why's, Fishbone Diagram, and McKinsey 7S frameworks to identify root causes",
      "Discovered over-hiring of P2 junior investigators was worsening supervisory overload rather than solving shortages",
      "Mapped responsibilities across all workforce initiatives using a RACI Matrix for implementation governance",
      "Recommended 4 key solutions: admin automation (20-30% workload reduction), leadership pathways, modernised recruitment, and digital upskilling",
      "Identified Western Force's flexible working model as best practice replicable across all divisions",
    ],
    results: [
      { metric: "20–30%", label: "Projected admin workload reduction via automation" },
      { metric: "3 Forces", label: "Eastern, Western & Northern analysed" },
      { metric: "7", label: "Strategic recommendations delivered" },
      { metric: "5", label: "Frameworks applied (SWOT, 5 Why's, Fishbone, McKinsey 7S, RACI)" },
    ],
    skills: ["SWOT Analysis", "5 Why's", "Fishbone Diagram", "McKinsey 7S", "RACI Matrix", "Workforce Analytics", "Root Cause Analysis", "MS Excel"],
  },
  {
    client: "NHS England",
    university: "University of Strathclyde",
    programme: "MSc Business Analysis and Consulting · 2026",
    title: "NHS England A&E Crisis: Machine Learning Analytics Report",
    subtitle: "Predictive modelling and strategic intervention analysis for NHS emergency care demand",
    year: "2026",
    skill: "Random Forest",
    problem: "NHS England missed its 5% A&E breach target every single month across 49 months of Type 1 data, with demand surging +21.8%, no predictive forecasting in place, and stark regional performance inequality across 96 Trusts.",
    solution: "Built a Random Forest forecasting model (96.33% accuracy, MAPE 3.67%) using 17 engineered features across 5 categories. Developed a season-adjusted Composite Pressure Index and ran MCDA across 4 weighted criteria to rank 6 interventions — recommending Seasonal Resourcing (score 21.31) deployed ahead of the predictable Oct–Feb crisis window.",
    highlights: [
      "Identified 5 critical bottlenecks: demand surge (+21.8%), performance crisis (46.16% breach), wait time escalation, regional inequality, and predictable seasonal pressure",
      "Decoupled wait times into two non-overlapping root causes: manageable 4-12hr A&E friction vs critical 12hr+ hospital bed failure",
      "Built and validated a Random Forest model with 96.33% accuracy (MAPE 3.67%) across 37 months, using 17 engineered features across 5 categories",
      "Developed a season-adjusted Composite Pressure Index to enable fair cross-month operational ranking",
      "Ran MCDA across 4 weighted categories to rank 6 interventions",
      "Recommended Seasonal Resourcing (top-ranked, score 21.31) deployed in September ahead of the predictable Oct-Feb crisis window",
    ],
    results: [
      { metric: "96.33%", label: "Random Forest forecast accuracy" },
      { metric: "46.16%", label: "Peak 4-hour breach rate (9x above NHS target)" },
      { metric: "0/49", label: "Months the NHS 5% target was met" },
      { metric: "36,653", label: "Peak patients waiting 12+ hours (Jan 2026)" },
    ],
    skills: ["Random Forest", "Machine Learning", "MCDA", "Time Series Analysis", "Feature Engineering", "Bottleneck Analysis", "NHS Data Analytics", "Python", "Excel"],
  },
  {
    client: "WB Alloys Group",
    university: "University of Strathclyde",
    programme: "MSc Business Analysis and Consulting · 2026",
    title: "WB Alloys Group: Enterprise Risk Management Framework",
    subtitle: "ISO 31000:2018-aligned ERM framework and digital dashboard for a £25M multi-site SME",
    year: "2026",
    skill: "ISO 31000",
    problem: "WB Alloys Group, a £25M multi-site SME, managed risk in branch-level silos with no enterprise-wide visibility — threatening ISO 9001, ISO 14001, ISO 45001 accreditations and NCA 3800 nuclear supply chain certification.",
    solution: "Audited 21 existing branch risk documents, consolidated 134 risks into a unified 5×5 Likelihood × Impact register, and designed a 6-tier escalation protocol. Built a 12-tab digital ERM dashboard with real-time KRI monitoring and defined a 4-level Risk Appetite Framework with 12 automated Key Risk Indicators.",
    highlights: [
      "Forensic audit of 21 existing branch risk documents to consolidate 134 risks into a unified 5×5 register",
      "Designed a 6-tier escalation protocol with automated triggers and a 3-tier governance structure",
      "Built a 12-tab digital ERM dashboard with real-time KRI monitoring, ISO mapping, branch scorecards, and a board report module",
      "Defined a 4-level Risk Appetite Framework with zero tolerance for H&S and NCA 3800 nuclear compliance violations",
      "Established 12 Key Risk Indicators with automated threshold alerts mapped to ISO 9001, 14001, 45001 and NCA 3800",
      "Designed an AI Risk Agent with 5 modes integrated directly into the risk register",
    ],
    results: [
      { metric: "134", label: "Total risks identified & scored across 4 branches" },
      { metric: "6 Tiers", label: "Escalation protocol from Monitor to Immediate" },
      { metric: "12 KRIs", label: "Key Risk Indicators with automated thresholds" },
      { metric: "£25M", label: "Client revenue protected by the framework" },
    ],
    skills: ["ISO 31000:2018", "Enterprise Risk Management", "Risk Register Design", "KRI Monitoring", "Three Lines Model", "PDCA", "ISO 45001", "NCA 3800", "Dashboard Prototyping", "AI Agent Design"],
  },
  {
    client: "StormID",
    university: "University of Strathclyde",
    programme: "MSc Business Analysis and Consulting · 2025",
    title: "StormID – AI Workflow Optimisation for a Scottish Local Authority",
    subtitle: "Evaluating how AI can improve service delivery across 10 council workflows",
    year: "2025",
    skill: "Lean Six Sigma",
    problem: "A Scottish Local Authority needed to identify which of its 10 operational workflows would deliver the highest ROI from AI integration, but had no scoring methodology or prioritisation framework to guide the decision.",
    solution: "Developed a custom AI Scoring Framework across 6 weighted criteria, ranked all 10 workflows, and mapped AI components (Convert, Classify, Generate, Validate, Summarise) to the two highest-priority targets. Designed a phased 9-month implementation roadmap with PoC on Workflow 8 followed by parallel Workflow 7 rollout.",
    highlights: [
      "Developed a custom AI Scoring Framework across 6 weighted criteria applied to all 10 workflows",
      "Identified Workflow 7 (Freedom of Information Requests) as top priority, weighted score 40/50",
      "Identified Workflow 8 (Financial Assistance Applications) as second priority, score 33.5/50",
      "Mapped AI components to each step of both high-priority workflows",
      "Designed a 2-phase 9-month implementation roadmap",
      "Assessed risks across legal/GDPR compliance, ethics, financial sustainability, and operational governance",
    ],
    results: [
      { metric: "68%", label: "Staff time reduction expected (Workflow 8)" },
      { metric: "57%", label: "Staff time reduction expected (Workflow 7)" },
      { metric: "16,680", label: "Annual applications processed (Workflow 8)" },
      { metric: "460 hrs", label: "Monthly staff hours saved (Workflow 7)" },
    ],
    skills: ["Lean Six Sigma", "Business Process Analysis", "AI Scoring Framework", "Workflow Modelling", "ROI Analysis", "Stakeholder Mapping", "Process Flowcharting"],
  },
  {
    university: "University of Strathclyde",
    programme: "MSc Business Analysis and Consulting · 2026",
    title: "Cradle-to-Gate Life Cycle Assessment of a Residential Building",
    subtitle: "Embodied carbon analysis and low-carbon procurement strategy for a residential build",
    year: "2026",
    skill: "MCDA",
    problem: "A residential building project lacked a carbon baseline or low-carbon procurement strategy, with no data identifying which materials drove the highest embodied carbon emissions across the construction supply chain.",
    solution: "Conducted a cradle-to-gate (A1–A3) Life Cycle Assessment using ICE Database V4.1, calculated embodied carbon for concrete (17,374 kgCO₂e), steel (2,353 kgCO₂e), and brick (7,239 kgCO₂e). Applied MCDA across 6 material alternatives and designed a 4-phase, 9-month intervention roadmap aligned with UK Net Zero 2050 targets.",
    highlights: [
      "Calculated embodied carbon for three key materials using ICE Database V4.1",
      "Identified concrete as the primary emission hotspot due to its dominant volume (168,684 kg)",
      "Applied MCDA across 6 material options recommending recycled steel (10/10) and low-carbon concrete (8/10)",
      "Designed a 4-phase, 9-month intervention roadmap from carbon baseline to standardised low-carbon procurement",
      "Demonstrated projected CO₂ savings of 29.8% and a 26.9% reduction in global warming potential",
      "Aligned recommendations with the UK Net Zero 2050 target and the Paris Agreement",
    ],
    results: [
      { metric: "29.8%", label: "Projected CO₂ savings from low-carbon materials" },
      { metric: "17,374 kg", label: "Concrete's total embodied carbon (primary hotspot)" },
      { metric: "3", label: "Materials assessed cradle-to-gate (concrete, steel, brick)" },
      { metric: "9 Months", label: "Phased intervention roadmap duration" },
    ],
    skills: ["Life Cycle Assessment (LCA)", "MCDA", "ICE Database", "Embodied Carbon Analysis", "Sustainability Strategy", "Carbon Hotspot Mapping", "Scenario Analysis"],
  },
  {
    client: "STAHL",
    university: "University of Strathclyde",
    programme: "MSc Business Analysis and Consulting · 2025",
    title: "STAHL – IIoT Rental Model Feasibility Study",
    subtitle: "10-year financial and strategic feasibility study for an IIoT-enabled rental transition",
    year: "2025",
    skill: "DCF Analysis",
    problem: "STAHL, a heavy equipment manufacturer, needed to evaluate whether transitioning from traditional product sales to an IIoT-enabled rental model was financially and strategically viable over a 10-year horizon.",
    solution: "Built a DCF financial model across small, medium, and large fleet scenarios, applied CATWOE to map stakeholders and transformation boundaries, and delivered a 5-phase transformation roadmap with phased CapEx deployment (40/30/20/10% across 5 years). Modelled IIoT-driven predictive maintenance reducing downtime by up to 15%.",
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
    skills: ["DCF Analysis", "CATWOE", "Scenario Analysis", "Financial Modelling", "IIoT Strategy", "Stakeholder Mapping", "Excel"],
  },
];
