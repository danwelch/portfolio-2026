import type { Metadata } from "next";
import { Noto_Sans, Bitter } from "next/font/google";
import "./globals.css";
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Analytics } from "@vercel/analytics/next"


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
    "Design systems architect and front-end engineer specializing in component libraries, design tokens, and the tooling that bridges design and engineering at scale.",
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
      "Design systems architect and front-end engineer specializing in component libraries, design tokens, and the tooling that bridges design and engineering at scale.",
    siteName: "Dan Welch",
    images: [{ url: "/opengraph-image.png", width: 1200, height: 630, alt: "Dan Welch — Design Systems Architect" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dan Welch — Design Systems Architect",
    description:
      "Design systems architect and front-end engineer specializing in component libraries, design tokens, and the tooling that bridges design and engineering at scale.",
    images: ["/opengraph-image.png"],
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
      <Analytics/>
    </html>
  );
}
