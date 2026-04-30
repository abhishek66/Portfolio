"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect, useLayoutEffect, useRef } from "react";

const shimmerStyle = `
@keyframes bubble-shimmer {
  0%   { transform: translateX(-120%) skewX(-12deg); opacity: 0; }
  15%  { opacity: 1; }
  85%  { opacity: 1; }
  100% { transform: translateX(220%)  skewX(-12deg); opacity: 0; }
}
.nav-bubble-shimmer {
  animation: bubble-shimmer 2.4s ease-in-out infinite;
}
`;

const links = [
  { href: "/",             label: "Home"         },
  { href: "/about",        label: "About"        },
  { href: "/experience",   label: "Experience"   },
  { href: "/case-studies", label: "Case Studies" },
  { href: "/education",    label: "Education"    },
  { href: "/contact",      label: "Contact"      },
];

const downloadIcon = (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
    <polyline points="7 10 12 15 17 10" />
    <line x1="12" y1="15" x2="12" y2="3" />
  </svg>
);

export default function Nav() {
  const pathname = usePathname();
  const [open, setOpen]           = useState(false);
  const [visible, setVisible]     = useState(true);
  const [dlHover, setDlHover]     = useState(false);
  const lastY = useRef(0);
  const linksRef  = useRef<HTMLDivElement>(null);
  const bubbleRef = useRef<HTMLSpanElement>(null);

  const measureBubble = () => {
    const container = linksRef.current;
    const el        = bubbleRef.current;
    if (!container || !el) return;
    const active = container.querySelector<HTMLAnchorElement>("[data-active='true']");
    if (!active) return;
    const cr = container.getBoundingClientRect();
    const ar = active.getBoundingClientRect();
    el.style.left    = `${ar.left - cr.left}px`;
    el.style.width   = `${ar.width}px`;
    el.style.opacity = "1";
  };

  useLayoutEffect(() => {
    measureBubble();
  }, [pathname]);

  useEffect(() => {
    const container = linksRef.current;
    if (!container) return;
    const ro = new ResizeObserver(measureBubble);
    ro.observe(container);
    return () => ro.disconnect();
  }, []);

  useEffect(() => {
    const handler = () => {
      const y = window.scrollY;
      if (y < 60) {
        setVisible(true);
      } else {
        setVisible(y < lastY.current);
      }
      lastY.current = y;
    };
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <>
    <style>{shimmerStyle}</style>
    <div
      className="sticky top-0 z-50 w-full flex flex-col items-center pt-4 pointer-events-none"
      style={{
        transform: visible ? "translateY(0)" : "translateY(-110%)",
        transition: "transform 350ms cubic-bezier(0.4,0,0.2,1)",
      }}
    >
      {/* ── Bar constrained to content width ── */}
      <div
        className="pointer-events-auto w-full max-w-6xl flex items-center justify-between h-16 px-6 lg:px-8 rounded-full"
        style={{
          background: "rgba(26,22,37,0.88)",
          backdropFilter: "blur(24px) saturate(160%)",
          WebkitBackdropFilter: "blur(24px) saturate(160%)",
          boxShadow: "0 0 0 1px rgba(255,255,255,0.10), 0 8px 32px rgba(0,0,0,0.40), 0 0 18px rgba(245,197,24,0.20)",
        }}
      >
        {/* Logo */}
        <Link
          href="/"
          className="flex-shrink-0 flex h-9 w-9 items-center justify-center rounded-lg font-display font-semibold text-sm tracking-tight transition-all duration-200"
          style={{ background: "rgba(245,197,24,0.15)", color: "#F5C518", boxShadow: "0 0 0 1px rgba(245,197,24,0.35)" }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLElement).style.background = "rgba(245,197,24,0.25)";
            (e.currentTarget as HTMLElement).style.boxShadow  = "0 0 0 1px rgba(245,197,24,0.55), 0 0 10px rgba(245,197,24,0.30)";
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLElement).style.background = "rgba(245,197,24,0.15)";
            (e.currentTarget as HTMLElement).style.boxShadow  = "0 0 0 1px rgba(245,197,24,0.35)";
          }}
        >
          AM
        </Link>

        {/* Center links — desktop, equally spaced */}
        <div ref={linksRef} className="hidden sm:flex relative flex-1 items-center justify-evenly px-8">
          {/* Sliding bubble indicator */}
          <span
            ref={bubbleRef}
            aria-hidden="true"
            style={{
              position: "absolute",
              top: "50%",
              transform: "translateY(-50%)",
              left: 0,
              width: 0,
              opacity: 0,
              height: "32px",
              borderRadius: "9999px",
              background: "rgba(245,197,24,0.12)",
              boxShadow: "0 0 0 1px rgba(245,197,24,0.55), 0 0 10px rgba(245,197,24,0.20)",
              transition: "left 180ms cubic-bezier(0.25,0.1,0.25,1), width 180ms cubic-bezier(0.25,0.1,0.25,1)",
              overflow: "hidden",
              pointerEvents: "none",
            }}
          >
            <span
              className="nav-bubble-shimmer"
              style={{
                position: "absolute",
                inset: 0,
                background: "linear-gradient(105deg, transparent 20%, rgba(245,197,24,0.18) 40%, rgba(245,197,24,0.32) 50%, rgba(245,197,24,0.18) 60%, transparent 80%)",
              }}
            />
          </span>
          {links.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                data-active={isActive ? "true" : undefined}
                className="font-ui text-[15px] font-normal tracking-wide outline-none focus:outline-none rounded-full px-3 py-1 relative z-10"
                style={{
                  color:     isActive ? "#F5C518" : "rgba(245,197,24,0.55)",
                  transition: "color 200ms ease, transform 200ms cubic-bezier(0.34,1.56,0.64,1)",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.transform = "scale(1.12)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.transform = "scale(1)";
                }}
              >
                {link.label}
              </Link>
            );
          })}
        </div>

        {/* Download icon — desktop, expands on hover */}
        <a
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Download Resume"
          className="hidden sm:inline-flex flex-shrink-0 items-center justify-center rounded-full overflow-hidden"
          style={{
            background: "linear-gradient(135deg, #F5C518 0%, #D4A800 100%)",
            color: "#1a1625",
            boxShadow: dlHover ? "0 0 14px rgba(245,197,24,0.55), 0 0 0 1px rgba(245,197,24,0.60)" : "0 0 0 1px rgba(245,197,24,0.40)",
            transform: dlHover ? "translateY(-1px)" : "translateY(0)",
            padding: dlHover ? "8px 12px" : "8px",
            gap: dlHover ? "6px" : "0px",
            transition: "box-shadow 200ms ease, transform 200ms ease, padding 200ms ease, gap 200ms ease",
          }}
          onMouseEnter={() => setDlHover(true)}
          onMouseLeave={() => setDlHover(false)}
        >
          {downloadIcon}
          <span
            className="font-ui text-xs font-medium whitespace-nowrap"
            style={{
              maxWidth: dlHover ? "110px" : "0px",
              opacity: dlHover ? 1 : 0,
              transition: "max-width 200ms ease, opacity 150ms ease",
              overflow: "hidden",
            }}
          >
            Download Resume
          </span>
        </a>

        {/* Hamburger — mobile */}
        <button
          className="sm:hidden flex flex-col justify-center gap-[5px] p-1 transition-colors duration-200"
          style={{ color: open ? "#F5C518" : "rgba(255,255,255,0.65)" }}
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          <span className={`block h-px w-5 bg-current transition-transform duration-200 origin-center ${open ? "translate-y-[6px] rotate-45" : ""}`} />
          <span className={`block h-px w-5 bg-current transition-opacity duration-200 ${open ? "opacity-0" : ""}`} />
          <span className={`block h-px w-5 bg-current transition-transform duration-200 origin-center ${open ? "-translate-y-[6px] -rotate-45" : ""}`} />
        </button>
      </div>

      {/* Mobile drawer */}
      {open && (
        <div
          className="pointer-events-auto sm:hidden w-full px-8 pt-4 pb-6 flex flex-col gap-5"
          style={{
            background: "rgba(26,22,37,0.97)",
            backdropFilter: "blur(24px)",
            WebkitBackdropFilter: "blur(24px)",
            boxShadow: "0 8px 32px rgba(0,0,0,0.45)",
          }}
        >
          {links.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="font-ui text-base font-normal transition-colors duration-200"
                style={{ color: isActive ? "#F5C518" : "rgba(245,197,24,0.55)" }}
              >
                {link.label}
              </Link>
            );
          })}
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setOpen(false)}
            aria-label="Download CV"
            className="mt-1 self-start inline-flex items-center justify-center rounded-full p-2"
            style={{ background: "linear-gradient(135deg, #F5C518 0%, #D4A800 100%)", color: "#1a1625" }}
          >
            {downloadIcon}
          </a>
        </div>
      )}
    </div>
    </>
  );
}
