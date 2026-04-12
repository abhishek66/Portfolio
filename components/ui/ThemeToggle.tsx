"use client";

import { useTheme } from "@/hooks/useTheme";

/* ─── Inline SVG icons — no external dependency ─────────────────────────── */

function SunIcon() {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="4" />
      <line x1="12" y1="2"    x2="12" y2="6"    />
      <line x1="12" y1="18"   x2="12" y2="22"   />
      <line x1="4.93"  y1="4.93"  x2="7.76"  y2="7.76"  />
      <line x1="16.24" y1="16.24" x2="19.07" y2="19.07" />
      <line x1="2"  y1="12"   x2="6"  y2="12"   />
      <line x1="18" y1="12"   x2="22" y2="12"   />
      <line x1="4.93"  y1="19.07" x2="7.76"  y2="16.24" />
      <line x1="16.24" y1="7.76"  x2="19.07" y2="4.93"  />
    </svg>
  );
}

function MoonIcon() {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
    </svg>
  );
}

/* ─── Component ─────────────────────────────────────────────────────────── */

/**
 * Pill-shaped theme toggle.
 * - 52 × 28 px track
 * - 22 × 22 px thumb with spring translation
 * - Dark mode:  gold thumb (right), sun icon — click to go light
 * - Light mode: navy thumb (left),  moon icon — click to go dark
 */
export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <button
      role="switch"
      aria-checked={!isDark}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      onClick={toggleTheme}
      // suppressHydrationWarning because the server always renders dark state
      // while the client may immediately correct to light after reading localStorage.
      suppressHydrationWarning
      className="relative flex-shrink-0 rounded-full transition-transform duration-200 hover:scale-105 hover:shadow-[0_0_12px_rgba(201,168,76,0.4)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-gold)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--bg-base)]"
      style={{ width: 52, height: 28 }}
    >
      {/* Track */}
      <span
        className="absolute inset-0 rounded-full border"
        aria-hidden="true"
        style={{
          background: isDark
            ? "linear-gradient(135deg, #1a2540, #0D1421)"
            : "linear-gradient(135deg, #E8E0D0, #F8F5EF)",
          borderColor: "var(--border-strong)",
          boxShadow: "inset 0 1px 3px rgba(0,0,0,0.2)",
          transition: "background 300ms ease, border-color 300ms ease",
        }}
      />

      {/* Thumb */}
      <span
        className="absolute top-[3px] left-[3px] flex items-center justify-center rounded-full"
        aria-hidden="true"
        style={{
          width: 22,
          height: 22,
          background: isDark ? "var(--accent-gold)" : "#0D1421",
          color:      isDark ? "#080C14"             : "#F0EDE6",
          transform:  isDark ? "translateX(24px)"    : "translateX(0)",
          boxShadow:  isDark
            ? "0 0 8px rgba(201,168,76,0.5)"
            : "0 1px 4px rgba(0,0,0,0.35)",
          transition:
            "transform 250ms var(--ease-spring), background 300ms ease, color 300ms ease",
        }}
      >
        {isDark ? <SunIcon /> : <MoonIcon />}
      </span>
    </button>
  );
}
