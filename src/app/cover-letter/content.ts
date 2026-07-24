import { resumeMeta } from "@/lib/content";
import type { CoverLetterDraft } from "./drafts";

export function createDefaultDraft(id: string): CoverLetterDraft {
  const date = new Date().toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const body = [
    "I'm writing to apply for the [Role] position at [Company]. With 17+ years as a front-of-the-front-end engineer focused on design systems, I build the component libraries, design tokens, and tooling that help product teams ship interfaces that are consistent, fast, and accessible by default.",
    "At Bankrate, I architected and led The Treasury and its successor The Ledger, a React/Next.js design system, launching across a dozen-plus projects with zero production incidents. I'm drawn to [Company] because [something specific about the role or company].",
    "I'd welcome the chance to talk about how that experience could contribute to [Company]'s work. Thank you for your time and consideration.",
  ].join("\n\n");

  return {
    id,
    company: "",
    title: resumeMeta.title,
    date,
    recipient: "Hiring Team",
    reference: "",
    greeting: "Dear Hiring Team,",
    body,
    closing: "Sincerely,",
    updatedAt: Date.now(),
  };
}

export function pdfFileName(company: string): string {
  const cleaned = company.replace(/[^A-Za-z0-9]+/g, "") || "Company";
  return `Dan_Welch_Cover_Letter_${cleaned}`;
}
