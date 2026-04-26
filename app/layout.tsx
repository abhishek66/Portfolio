import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Sans, DM_Mono } from "next/font/google";
import Nav from "@/components/Nav";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "600"],
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  display: "swap",
});

const dmMono = DM_Mono({
  variable: "--font-dm-mono",
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Abhishek Manikandan | Business Analyst & Consultant",
  description:
    "Business Analyst & Consultant with experience in regulated financial services, SaaS, and enterprise platforms. Specialising in requirements analysis, data-driven delivery, and stakeholder management.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      data-theme="light"
      className={`${cormorant.variable} ${dmSans.variable} ${dmMono.variable} h-full antialiased`}
    >
      <head></head>
      <body className="min-h-full flex flex-col">
        <Nav />
        <div
          className="flex-1 w-full mx-auto max-w-[1280px]"
        >
          <main>{children}</main>
        </div>
      </body>
    </html>
  );
}
