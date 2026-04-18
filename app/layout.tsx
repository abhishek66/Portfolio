import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Sans, DM_Mono } from "next/font/google";
import Nav from "@/components/Nav";
import "./globals.css";

/* ─── Display font — headings & hero name ───────── */
const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "600"],
  display: "swap",
});

/* ─── UI font — body, nav, buttons ─────────────── */
const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  display: "swap",
});

/* ─── Mono font — labels, tags, dates, metrics ─── */
const dmMono = DM_Mono({
  variable: "--font-dm-mono",
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Abhishek Manikandan | Product Manager",
  description:
    "Product Manager with experience in SaaS, B2C apps, and enterprise platforms. Specialising in 0-to-1 builds, data-driven growth, and user-centred design.",
};

/* ─── Anti-flash script ─────────────────────────
   Runs synchronously before first paint.
   Reads the persisted theme from localStorage and applies data-theme
   to <html> so CSS tokens resolve correctly before React hydrates.
   This prevents any flash of wrong theme on page load or refresh.
─────────────────────────────────────────────── */
const themeInitScript = `(function(){try{var t=localStorage.getItem('portfolio-theme')||'dark';document.documentElement.setAttribute('data-theme',t);}catch(e){document.documentElement.setAttribute('data-theme','dark');}})();`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      // suppressHydrationWarning because the anti-flash script sets
      // data-theme before React hydration, causing an intentional
      // attribute mismatch between server HTML and client DOM.
      suppressHydrationWarning
      className={`${cormorant.variable} ${dmSans.variable} ${dmMono.variable} h-full antialiased`}
    >
      <head>
        {/* Must be the very first script — runs before any CSS paint */}
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body className="min-h-full flex flex-col">
        <Nav />
        <div
          className="flex-1 w-full mx-auto max-w-[1280px]"
          style={{ boxShadow: "1px 0 0 0 var(--border-subtle), -1px 0 0 0 var(--border-subtle)" }}
        >
          <main>{children}</main>
        </div>
      </body>
    </html>
  );
}
