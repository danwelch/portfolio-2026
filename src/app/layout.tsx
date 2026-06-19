import type { Metadata } from "next";
import { Noto_Sans, Bitter } from "next/font/google";
import "./globals.css";
import { SpeedInsights } from "@vercel/speed-insights/next"

const outfit = Noto_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
});

const bitter = Bitter({
  variable: "--font-display",
  subsets: ["latin"],
  display: "swap",
});

const siteUrl = "https://danwelch.net";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Dan Welch — Design Systems Architect",
    template: "%s — Dan Welch",
  },
  description:
    "Design Systems Architect and front-of-the-front-end engineer with 17+ years building component platforms, design tokens, and the tooling product teams rely on. New portfolio coming soon.",
  keywords: [
    "Dan Welch",
    "Design Systems Architect",
    "Design Systems",
    "Front-End Architecture",
    "Accessibility",
    "Core Web Vitals",
    "React",
    "Next.js",
    "Astro",
    "TypeScript",
  ],
  authors: [{ name: "Dan Welch", url: siteUrl }],
  creator: "Dan Welch",
  openGraph: {
    type: "website",
    url: siteUrl,
    title: "Dan Welch — Design Systems Architect",
    description:
      "Design Systems Architect building component platforms, design tokens, and the tooling product teams rely on. New portfolio coming soon.",
    siteName: "Dan Welch",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dan Welch — Design Systems Architect",
    description:
      "Design Systems Architect building component platforms, design tokens, and the tooling product teams rely on.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${outfit.variable} ${bitter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
      <SpeedInsights/>
    </html>
  );
}
