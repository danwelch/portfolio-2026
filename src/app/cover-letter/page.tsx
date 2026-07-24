import type { Metadata } from "next";
import localFont from "next/font/local";
import { notFound } from "next/navigation";
import { CoverLetterApp } from "./cover-letter-app";

export const metadata: Metadata = {
  title: "Cover Letter",
  robots: { index: false },
};

// Shares the resume's static per-weight Inter files (see CLAUDE.md: Resume
// PDF) rather than next/font/google's variable Inter, which corrupts glyph
// runs in Chromium's print-to-PDF path.
const letterFont = localFont({
  src: [
    { path: "../resume/fonts/Inter-Regular.woff2", weight: "400", style: "normal" },
    { path: "../resume/fonts/Inter-Italic.woff2", weight: "400", style: "italic" },
    { path: "../resume/fonts/Inter-SemiBold.woff2", weight: "600", style: "normal" },
    { path: "../resume/fonts/Inter-Bold.woff2", weight: "700", style: "normal" },
  ],
});

export default function CoverLetterPage() {
  // Local-only tool: Vercel sets VERCEL=1 at build time, so this route
  // prerenders to a 404 on any Vercel deploy. Unaffected: local next dev /
  // next start.
  if (process.env.VERCEL) notFound();

  return <CoverLetterApp fontClassName={letterFont.className} />;
}
