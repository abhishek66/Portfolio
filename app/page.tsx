import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Divider } from "@/components/ui/Divider";
import { ScrollReveal } from "@/components/ScrollReveal";
import { HeroRoleLabel } from "@/components/HeroRoleLabel";
import { CaseStudiesCarousel } from "@/components/CaseStudiesCarousel";

export default function Home() {
  return (
    <>
      {/* ─── Hero ─────────────────────────────────────────── */}
      <section className="relative overflow-hidden">
        {/* Two-column layout: text + headshot */}
        <div className="relative mx-auto max-w-6xl px-6 lg:px-8 pt-14 pb-8 w-full">
          <div className="flex flex-col-reverse items-center gap-14 lg:flex-row lg:items-center lg:justify-between">

            {/* Text column */}
            <div className="flex-1">

              {/* Eyebrow label — cycling roles */}
              <HeroRoleLabel />

              {/* Name — Cormorant Garamond 400 */}
              <h1
                className="mb-6 font-display font-normal leading-[1.05] tracking-tight text-[var(--text-primary)]"
                style={{ fontSize: "clamp(52px, 8vw, 96px)" }}
              >
                Abhishek
                <br />
                Manikandan
              </h1>

              {/* Subtitle — DM Sans 300 */}
              <p className="mb-4 max-w-xl font-ui font-light text-lg leading-relaxed text-white">
                Business Analyst turning complex problems into delivered solutions across regulated financial services.
              </p>

              {/* Meta chips — DM Mono */}
              <div className="flex flex-wrap gap-2">
                {["MSc Business Analysis", "University of Strathclyde", "4+ Years Experience"].map((chip) => (
                  <span
                    key={chip}
                    className="skill-tag inline-flex items-center rounded-full border border-[rgba(16,185,129,0.40)] bg-[rgba(16,185,129,0.12)] px-3 py-1 font-data text-xs"
                  >
                    {chip}
                  </span>
                ))}
              </div>

            </div>

            {/* Headshot */}
            <div className="flex-shrink-0 -mt-4 lg:-mt-8">
              <div
                className="relative rounded-[var(--radius-lg)] overflow-hidden"
                style={{
                  boxShadow: "0 0 0 1px rgba(16,185,129,0.20), var(--shadow-glow)",
                }}
              >
                <Image
                  src="/images/headshot.png"
                  alt="Abhishek Manikandan"
                  width={300}
                  height={358}
                  priority
                  className="w-[200px] object-cover lg:w-[280px] block"
                />
                <div
                  className="absolute inset-0 rounded-[var(--radius-lg)] pointer-events-none"
                  style={{
                    background: "linear-gradient(160deg, rgba(16,185,129,0.10) 0%, transparent 60%)",
                  }}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Consulting Work — seamlessly below, full-bleed marquee */}
        <div className="pb-10 overflow-hidden">
          <div className="mx-auto max-w-6xl px-6 lg:px-8 mb-4">
            <SectionLabel>Consulting Work</SectionLabel>
          </div>
          <CaseStudiesCarousel />
        </div>
      </section>

      {/* ─── CTA ─────────────────────────────────────────── */}
      <section className="py-16">
        <div className="mx-auto max-w-6xl px-6 lg:px-8 text-center">
          <ScrollReveal>
            <h2 className="mb-4 font-display font-semibold text-4xl text-[var(--text-primary)] sm:text-5xl">
              Let&apos;s solve something together
            </h2>
            <p className="mb-10 font-ui font-light text-base text-[var(--text-secondary)] max-w-md mx-auto leading-relaxed">
              Open to business analysis, consulting, and product roles where
              rigorous thinking and execution both matter.
            </p>
            <Button href="/contact" variant="primary">Get in Touch</Button>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
