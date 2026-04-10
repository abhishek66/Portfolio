import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | Abhishek Manikandan",
  description: "Get in touch with Abhishek Manikandan, Product Manager.",
};

const contactLinks = [
  {
    label: "LinkedIn",
    handle: "linkedin.com/in/abhishekmanikandan",
    href: "https://www.linkedin.com/in/abhishekmanikandan",
    description: "Connect with me professionally",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="currentColor"
        className="h-6 w-6"
        aria-hidden="true"
      >
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
    accent: "indigo",
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
    accent: "violet",
  },
];

const accentMap: Record<
  string,
  { icon: string; border: string; label: string }
> = {
  indigo: {
    icon: "text-indigo-400 bg-indigo-500/10",
    border: "border-indigo-500/20 hover:border-indigo-500/50",
    label: "text-indigo-400",
  },
  violet: {
    icon: "text-violet-400 bg-violet-500/10",
    border: "border-violet-500/20 hover:border-violet-500/50",
    label: "text-violet-400",
  },
};

export default function Contact() {
  return (
    <div className="mx-auto max-w-6xl px-6 lg:px-8 py-20">
      <div className="mb-16">
        <p className="mb-3 text-xs font-semibold tracking-widest text-indigo-400 uppercase">
          Get in Touch
        </p>
        <h1 className="text-4xl font-bold text-zinc-50 sm:text-5xl">
          Let&apos;s Connect
        </h1>
        <p className="mt-4 max-w-lg text-zinc-400 leading-relaxed">
          Whether you have a product challenge to discuss, a role to share, or
          just want to say hi, I&apos;d love to hear from you. I typically
          respond within 24 hours.
        </p>
      </div>

      {/* Contact cards */}
      <div className="mb-20 grid gap-5 sm:grid-cols-2 lg:max-w-2xl">
        {contactLinks.map((link) => {
          const accent = accentMap[link.accent];
          return (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`group flex flex-col gap-4 rounded-2xl border bg-zinc-900 p-7 transition-all ${accent.border}`}
            >
              <div
                className={`flex h-12 w-12 items-center justify-center rounded-xl ${accent.icon}`}
              >
                {link.icon}
              </div>
              <div>
                <p className={`text-sm font-semibold ${accent.label}`}>
                  {link.label}
                </p>
                <p className="mt-1 text-base font-medium text-zinc-50 group-hover:text-white transition-colors">
                  {link.handle}
                </p>
                <p className="mt-1.5 text-sm text-zinc-500">
                  {link.description}
                </p>
              </div>
              <div className="mt-auto flex items-center gap-1.5 text-xs text-zinc-500 group-hover:text-zinc-400 transition-colors">
                <span>Open link</span>
                <svg
                  className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5"
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
          );
        })}
      </div>

      {/* Availability note */}
      <div className="max-w-lg rounded-xl border border-zinc-800 bg-zinc-900 p-6">
        <div className="flex items-start gap-4">
          <div className="mt-0.5 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-green-500/10">
            <span className="h-2.5 w-2.5 rounded-full bg-green-400" />
          </div>
          <div>
            <p className="text-sm font-semibold text-zinc-50">
              Open to opportunities
            </p>
            <p className="mt-1 text-sm text-zinc-400 leading-relaxed">
              I&apos;m currently exploring full-time PM roles and select
              advisory engagements. If you&apos;re building something
              interesting, reach out. I&apos;d love to learn more.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
