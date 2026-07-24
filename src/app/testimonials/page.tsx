import type { Metadata } from "next";
import localFont from "next/font/local";
import { Mail, Link } from "lucide-react";
import { site, resumeMeta, testimonials, type Testimonial } from "@/lib/content";
import { ResumePrintButton } from "@/components/site/resume-print-button";
import { Avatar } from "@/components/ui/avatar";

export const metadata: Metadata = {
  title: "Testimonials",
  robots: { index: false },
};

// Shares the resume's static per-weight Inter files rather than
// next/font/google's variable Inter, which corrupts glyph runs in
// Chromium's print-to-PDF path (see CLAUDE.md: Resume PDF).
const docFont = localFont({
  src: [
    { path: "../resume/fonts/Inter-Regular.woff2", weight: "400", style: "normal" },
    { path: "../resume/fonts/Inter-Italic.woff2", weight: "400", style: "italic" },
    { path: "../resume/fonts/Inter-SemiBold.woff2", weight: "600", style: "normal" },
    { path: "../resume/fonts/Inter-Bold.woff2", weight: "700", style: "normal" },
  ],
});

const CONTACT_ITEMS = [
  { icon: <Link className="size-2.5" />, text: "danwelch.net", link: site.currentSite },
  { icon: <Mail className="size-2.5" />, text: site.email, link: `mailto:${site.email}` },
];

export default function TestimonialsPage() {
  return (
    <div className={`${docFont.className} min-h-screen bg-slate-100 print:bg-white`}>
      <div className="resume-screen-only flex justify-center gap-4 py-6 print:hidden">
        <ResumePrintButton />
      </div>

      <div className="mx-auto bg-white text-muted-foreground print-page relative" style={{ height: "auto" }}>
        <header className="bg-dark text-white font-normal" style={{ padding: "0.25in 0.375in" }}>
          {/* globals.css forces h1/h2/h3 to font-heading (Bitter); override
              back to this doc's static Inter, matching the resume's h1. */}
          <h1 className={`${docFont.className} font-bold text-white leading-none`} style={{ fontSize: "24pt" }}>
            {site.name}
          </h1>
          <p className="text-brand-on-dark font-semibold" style={{ fontSize: "10.5pt" }}>
            {resumeMeta.title}
          </p>

          <div className="flex flex-wrap items-center gap-4 mt-4 tabular-nums" style={{ fontSize: "9pt" }}>
            {CONTACT_ITEMS.map((item, i) => (
              <a
                key={i}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2 text-slate-300 hover:text-white transition-colors"
              >
                <span className="flex items-center justify-center shrink-0 size-4 bg-slate-400 text-dark rounded-xs transition-colors group-hover:bg-white">
                  {item.icon}
                </span>
                {item.text}
              </a>
            ))}
          </div>
        </header>

        <div style={{ margin: "0.3in 0.375in 0.25in" }}>
          <div
            className="font-semibold text-muted-foreground border-b border-border uppercase pb-1 mb-4"
            style={{ fontSize: "10pt" }}
          >
            Testimonials &amp; Recommendations
          </div>

          {/* Plain block stacking, not flex: Chrome's print engine doesn't
              reliably honor break-before/break-inside on flex children, which
              is why the forced page break before Justin wasn't holding. */}
          <div>
            {testimonials.map((testimonial) => (
              <TestimonialEntry key={testimonial.name} testimonial={testimonial} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function TestimonialEntry({ testimonial }: { testimonial: Testimonial }) {
  // Justin's entry is where content naturally overflows onto page 2; force
  // the break there deliberately (rather than wherever it lands). Padding,
  // not margin: a margin-top here collapses with the previous entry's
  // mb-6 and then gets truncated by the forced break (browsers drop a
  // block's leading margin at the top of a new page), so it never actually
  // showed up. Padding isn't subject to either, so it reliably renders.
  const pageBreakBefore = testimonial.name === "Justin Cook";

  return (
    <div
      className="break-inside-avoid mb-6"
      style={pageBreakBefore ? { breakBefore: "page", paddingTop: "0.4in" } : undefined}
    >
      <div className="flex items-center gap-3 mb-2">
        <Avatar
          src={testimonial.avatar}
          alt={testimonial.name}
          initials={testimonial.initials}
          className="size-9"
        />
        <div>
          <div className="text-foreground font-semibold" style={{ fontSize: "10pt" }}>
            {testimonial.name}
          </div>
          <div className="text-muted-foreground" style={{ fontSize: "9pt" }}>
            {testimonial.title}
          </div>
        </div>
      </div>

      {testimonial.fullHtml ? (
        <div
          className="text-foreground [&_p]:mb-2 [&_p:last-child]:mb-0 [&_.disclaimer]:italic [&_.disclaimer]:text-muted-foreground"
          style={{ fontSize: "9.5pt", lineHeight: 1.5 }}
          dangerouslySetInnerHTML={{ __html: testimonial.fullHtml }}
        />
      ) : (
        <p className="text-foreground" style={{ fontSize: "9.5pt", lineHeight: 1.5 }}>
          {testimonial.full ?? testimonial.quote}
        </p>
      )}
    </div>
  );
}
