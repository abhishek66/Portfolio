import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Nav from "@/components/Nav";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Abhishek Manikandan — Product Manager",
  description:
    "Product Manager with experience in SaaS, B2C apps, and enterprise platforms. Specialising in 0-to-1 builds, data-driven growth, and user-centred design.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-zinc-950 text-zinc-50">
        <Nav />
        <main className="flex-1">{children}</main>
        <footer className="border-t border-zinc-800 py-8">
          <div className="mx-auto max-w-6xl px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-zinc-500">
            <span>© 2026 Abhishek Manikandan</span>
            <span>Built with Next.js & Tailwind CSS</span>
          </div>
        </footer>
      </body>
    </html>
  );
}
