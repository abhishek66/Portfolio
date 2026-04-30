import type { Metadata } from "next";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Divider } from "@/components/ui/Divider";
import { ScrollReveal } from "@/components/ScrollReveal";
import { CareerLadder } from "@/components/CareerLadder";


export const metadata: Metadata = {
  title: "Experience | Abhishek Manikandan",
  description:
    "Product management and business analysis experience across Prodsmiths, AppsForBharat, and Kapture CX.",
};

export default function Experience() {
  return (
    <div>
      {/* Page header */}
      <div className="mx-auto max-w-6xl px-6 lg:px-8 pt-16 pb-10">
        <ScrollReveal>
          <SectionLabel className="mb-4">Career</SectionLabel>
          <h1 className="font-display font-normal text-5xl text-[var(--text-primary)] sm:text-6xl leading-tight">
            Work Experience
          </h1>
          <p className="mt-4 max-w-xl font-ui font-light text-base text-[var(--text-secondary)] leading-relaxed">
            Eight years of career progression — scroll to explore each role.
          </p>
        </ScrollReveal>
      </div>

      {/* Career ladder — full bleed sticky scroll */}
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <CareerLadder />
      </div>

      {/* Bottom divider */}
      <div className="mx-auto max-w-6xl px-6 lg:px-8 mt-10">
        <Divider />
      </div>
    </div>
  );
}
