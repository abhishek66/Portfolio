import type { Metadata } from "next";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Divider } from "@/components/ui/Divider";
import { ScrollReveal } from "@/components/ScrollReveal";
import { CaseStudiesAccordion } from "@/components/CaseStudiesAccordion";

export const metadata: Metadata = {
  title: "Case Studies | Abhishek Manikandan",
  description:
    "Academic and consulting case studies including AI workflow optimisation for a Scottish Local Authority and the STAHL IIoT rental model feasibility study.",
};

export default function CaseStudies() {
  return (
    <div className="mx-auto max-w-6xl px-6 lg:px-8 py-20">

      {/* Page header */}
      <ScrollReveal className="mb-20">
        <SectionLabel className="mb-4">Portfolio</SectionLabel>
        <h1 className="font-display font-normal text-5xl text-[var(--text-primary)] sm:text-6xl leading-tight">
          Academic Case Studies and Projects
        </h1>
        <p className="mt-4 max-w-xl font-ui font-light text-base text-[var(--text-secondary)] leading-relaxed">
          In-depth consulting and analytical projects, covering the problem,
          methodology, and outcomes.
        </p>
      </ScrollReveal>

      <CaseStudiesAccordion />

      {/* Bottom divider */}
      <div className="mt-20">
        <Divider />
      </div>
    </div>
  );
}
