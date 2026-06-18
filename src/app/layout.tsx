import type { Metadata } from "next";
import { Outfit, Bitter } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
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
    default: "Dan Welch — Design Systems & Front-End Architecture",
    template: "%s — Dan Welch",
  },
  description:
    "Senior Software Engineer with 17+ years building scalable front-end platforms and enterprise design systems in React, Next.js, and TypeScript. New portfolio coming soon.",
  keywords: [
    "Dan Welch",
    "Design Systems",
    "Front-End Architecture",
    "Senior Software Engineer",
    "React",
    "Next.js",
    "TypeScript",
    "Tailwind CSS",
  ],
  authors: [{ name: "Dan Welch", url: siteUrl }],
  creator: "Dan Welch",
  openGraph: {
    type: "website",
    url: siteUrl,
    title: "Dan Welch — Design Systems & Front-End Architecture",
    description:
      "Senior Software Engineer building scalable front-end platforms and enterprise design systems. New portfolio coming soon.",
    siteName: "Dan Welch",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dan Welch — Design Systems & Front-End Architecture",
    description:
      "Senior Software Engineer building scalable front-end platforms and enterprise design systems.",
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
    </html>
  );
}
