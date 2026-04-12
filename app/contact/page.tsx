import type { Metadata } from "next";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Divider } from "@/components/ui/Divider";
import { ScrollReveal } from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "Contact | Abhishek Manikandan",
  description: "Get in touch with Abhishek Manikandan, Product Manager.",
};

const contactLinks = [
  {
    label: "LinkedIn",
    handle: "linkedin.com/in/abhishek-manikandan-470534125",
    href: "https://www.linkedin.com/in/abhishek-manikandan-470534125/",
    description: "Connect with me professionally",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6" aria-hidden="true">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
    accent: "gold",
  },
  {
    label: "Email",
    handle: "abhimaniknair@gmail.com",
    href: "mailto:abhimaniknair@gmail.com",
    description: "Send me an email directly",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-6 w-6"
        aria-hidden="true"
      >
        <rect width="20" height="16" x="2" y="4" rx="2" />
        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
      </svg>
    ),
    accent: "teal",
  },
  {
    label: "GitHub",
    handle: "github.com/abhishek66",
    href: "https://github.com/abhishek66",
    description: "View my code and projects",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6" aria-hidden="true">
        <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
      </svg>
    ),
    accent: "gold-lt",
  },
];

const accentMap: Record<string, {
  icon:   string;
  border: string;
  label:  string;
  glow:   string;
}> = {
  gold: {
    icon:   "text-gold   bg-[rgba(201,168,76,0.10)]",
    border: "border-[var(--border-subtle)] hover:border-[var(--border-strong)]",
    label:  "text-gold",
    glow:   "hover:shadow-[var(--shadow-card),var(--shadow-glow)]",
  },
  teal: {
    icon:   "text-teal-accent bg-[rgba(14,138,122,0.10)]",
    border: "border-[rgba(14,138,122,0.15)] hover:border-[rgba(14,138,122,0.45)]",
    label:  "text-teal-accent",
    glow:   "hover:shadow-[var(--shadow-card),0_0_40px_rgba(14,138,122,0.12)]",
  },
  "gold-lt": {
    icon:   "text-gold-lt bg-[rgba(226,194,122,0.10)]",
    border: "border-[var(--border-subtle)] hover:border-[var(--border-strong)]",
    label:  "text-gold-lt",
    glow:   "hover:shadow-[var(--shadow-card),var(--shadow-glow)]",
  },
};

export default function Contact() {
  return (
    <div className="mx-auto max-w-6xl px-6 lg:px-8 py-20">

      {/* Page header */}
      <ScrollReveal className="mb-16">
        <SectionLabel className="mb-4">Get in Touch</SectionLabel>
        <h1 className="font-display font-light text-5xl text-[var(--text-primary)] sm:text-6xl leading-tight">
          Let&apos;s Connect
        </h1>
        <p className="mt-4 max-w-lg font-ui font-light text-base text-[var(--text-secondary)] leading-relaxed">
          Whether you have a product challenge to discuss, a role to share, or
          just want to say hi, I&apos;d love to hear from you. I typically
          respond within 24 hours.
        </p>
      </ScrollReveal>

      {/* Contact cards */}
      <div className="mb-20 grid gap-5 sm:grid-cols-2 lg:max-w-2xl">
        {contactLinks.map((link, i) => {
          const ac = accentMap[link.accent];
          return (
            <ScrollReveal key={link.label} delay={i * 80}>
              <a
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className={[
                  "group flex flex-col gap-5",
                  "rounded-[var(--radius-md)] border bg-[var(--bg-surface)] p-7",
                  "transition-all duration-300",
                  "hover:bg-[var(--bg-elevated)] hover:-translate-y-1",
                  ac.border,
                  ac.glow,
                ].join(" ")}
                style={{
                  boxShadow: "var(--shadow-card)",
                  borderTopWidth: "2px",
                  borderTopColor:
                    link.accent === "teal"
                      ? "var(--accent-teal)"
                      : "var(--accent-gold)",
                }}
              >
                {/* Icon */}
                <div
                  className={`flex h-12 w-12 items-center justify-center rounded-[var(--radius-sm)] ${ac.icon}`}
                >
                  {link.icon}
                </div>

                {/* Content */}
                <div>
                  <p className={`font-data text-xs uppercase tracking-widest ${ac.label}`}>
                    {link.label}
                  </p>
                  <p className="mt-1.5 font-ui font-medium text-base text-[var(--text-primary)] transition-colors duration-200 group-hover:text-[var(--text-primary)]">
                    {link.handle}
                  </p>
                  <p className="mt-1 font-ui font-light text-sm text-[var(--text-muted)]">
                    {link.description}
                  </p>
                </div>

                {/* CTA row */}
                <div className="mt-auto flex items-center gap-1.5 font-data text-xs text-[var(--text-muted)] transition-colors duration-200 group-hover:text-[var(--text-secondary)]">
                  <span>Open link</span>
                  <svg
                    className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                    />
                  </svg>
                </div>
              </a>
            </ScrollReveal>
          );
        })}
      </div>

      {/* Bottom divider */}
      <Divider />
    </div>
  );
}
