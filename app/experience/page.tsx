import type { Metadata } from "next";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Divider } from "@/components/ui/Divider";
import { ScrollReveal } from "@/components/ScrollReveal";
import { ExperienceTimeline } from "@/components/ExperienceTimeline";

export const metadata: Metadata = {
  title: "Experience | Abhishek Manikandan",
  description:
    "Product management and business analysis experience across Prodsmiths, AppsForBharat, and Kapture CX.",
};

export default function Experience() {
  return (
    <div className="mx-auto max-w-6xl px-6 lg:px-8 py-20">

      {/* Page header */}
      <ScrollReveal className="mb-20">
        <SectionLabel className="mb-4">Career</SectionLabel>
        <h1 className="font-display font-normal text-5xl text-[var(--text-primary)] sm:text-6xl leading-tight">
          Work Experience
        </h1>
        <p className="mt-4 max-w-xl font-ui font-light text-base text-[var(--text-secondary)] leading-relaxed">
          Product management and business analysis experience across fintech,
          consumer apps, and enterprise SaaS.
        </p>
      </ScrollReveal>

      {/* Timeline */}
      <ExperienceTimeline />

      {/* Bottom divider */}
      <div className="mt-28">
        <Divider />
      </div>
    </div>
  );
}
