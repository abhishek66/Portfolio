"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { ThemeToggle } from "@/components/ui/ThemeToggle";

const links = [
  { href: "/",             label: "Home"         },
  { href: "/experience",   label: "Experience"   },
  { href: "/education",    label: "Education"    },
  { href: "/case-studies", label: "Case Studies" },
  { href: "/contact",      label: "Contact"      },
];

export default function Nav() {
  const pathname = usePathname();
  const [open, setOpen]         = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <nav
      className="sticky top-0 z-50"
      style={{
        background: "var(--nav-bg)",
        backdropFilter: "blur(20px) saturate(180%)",
        WebkitBackdropFilter: "blur(20px) saturate(180%)",
        borderBottom: scrolled
          ? "1px solid var(--border-strong)"
          : "1px solid var(--border-subtle)",
        boxShadow: scrolled
          ? "0 1px 24px rgba(201,168,76,0.08)"
          : "none",
        transition:
          "border-color var(--duration-normal) var(--ease-smooth), box-shadow var(--duration-normal) var(--ease-smooth), background var(--duration-normal) ease",
        animation: "nav-slide-down 0.45s var(--ease-smooth) both",
      }}
    >
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">

          {/* Logo badge */}
          <Link
            href="/"
            className="flex h-9 w-9 items-center justify-center rounded-lg font-display font-semibold text-sm tracking-tight transition-all duration-200"
            style={{
              background: "rgba(201,168,76,0.10)",
              color: "var(--accent-gold)",
              boxShadow: "0 0 0 1px var(--border-strong)",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.background = "rgba(201,168,76,0.18)";
              (e.currentTarget as HTMLElement).style.boxShadow  = "0 0 0 1px var(--border-strong), 0 0 12px rgba(201,168,76,0.2)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.background = "rgba(201,168,76,0.10)";
              (e.currentTarget as HTMLElement).style.boxShadow  = "0 0 0 1px var(--border-strong)";
            }}
          >
            AM
          </Link>

          {/* Desktop: links + divider + toggle */}
          <div className="hidden sm:flex items-center gap-10">
            {links.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`nav-link font-ui font-medium text-sm transition-colors duration-200 ${
                    isActive
                      ? "active text-gold"
                      : "text-[var(--text-muted)] hover:text-[var(--text-primary)]"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}

            {/* Vertical divider */}
            <div
              className="h-4 w-px flex-shrink-0"
              style={{ background: "var(--border-subtle)" }}
              aria-hidden="true"
            />

            <ThemeToggle />
          </div>

          {/* Mobile: hamburger only (toggle lives in drawer) */}
          <button
            className="sm:hidden flex flex-col gap-1.5 p-1 transition-colors duration-200"
            style={{ color: open ? "var(--accent-gold)" : "var(--text-muted)" }}
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            <span
              className={`block h-0.5 w-5 bg-current transition-transform duration-200 ${
                open ? "translate-y-2 rotate-45" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-5 bg-current transition-opacity duration-200 ${
                open ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-5 bg-current transition-transform duration-200 ${
                open ? "-translate-y-2 -rotate-45" : ""
              }`}
            />
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      {open && (
        <div
          className="sm:hidden px-6 py-6 flex flex-col gap-6"
          style={{
            background: "var(--nav-drawer-bg)",
            borderTop: "1px solid var(--border-subtle)",
          }}
        >
          {links.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className={`font-ui font-medium text-sm transition-colors duration-200 ${
                  isActive
                    ? "text-gold"
                    : "text-[var(--text-muted)] hover:text-[var(--text-primary)]"
                }`}
              >
                {link.label}
              </Link>
            );
          })}

          {/* Theme toggle — centred at bottom of drawer */}
          <div
            className="flex flex-col items-center gap-2 pt-4"
            style={{ borderTop: "1px solid var(--border-subtle)" }}
          >
            <p className="font-data text-xs uppercase tracking-widest text-[var(--text-muted)]">
              Theme
            </p>
            <ThemeToggle />
          </div>
        </div>
      )}
    </nav>
  );
}
