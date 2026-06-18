import { ArrowRight } from "lucide-react";
import { Section, SectionHeading } from "@/components/site/section";

const caseStudies = [
  {
    name: "The Ledger",
    blurb:
      "Architecting Bankrate's React/Next.js design system — 65+ components, token-based white-label theming, and the release tooling behind it.",
  },
  {
    name: "The Treasury",
    blurb:
      "Bankrate's first formal design system — adopted across a dozen-plus projects with zero production incidents, replacing a legacy CSS framework.",
  },
];

export function Work() {
  return (
    <Section id="work" className="border-t border-border/60">
      <SectionHeading
        index="04"
        eyebrow="Case Studies"
        title="Selected work"
        description="Detailed write-ups of my recent design-systems work at Bankrate."
      />

      <p className="mt-6 flex items-center gap-2.5 text-sm text-muted-foreground">
        <span className="relative flex size-2 shrink-0">
          <span className="absolute inline-flex size-full animate-ping rounded-full bg-brand opacity-75" />
          <span className="relative inline-flex size-2 rounded-full bg-brand" />
        </span>
        This site is a work in progress — updates coming soon.
      </p>

      <div className="mt-8 grid gap-4">
        {caseStudies.map((item) => (
          <article
            key={item.name}
            className="group relative overflow-hidden rounded-2xl border border-border bg-surface p-6"
          >
            <h3 className="font-heading text-2xl font-medium tracking-tight">
              {item.name}
            </h3>
            <p className="mt-3 text-pretty text-sm leading-relaxed text-muted-foreground">
              {item.blurb}
            </p>

            <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-brand">
              Learn more
              <ArrowRight className="size-3.5" />
            </span>

            <div className="absolute inset-0 flex items-center justify-center bg-dark/45 opacity-0 backdrop-blur-sm transition-opacity duration-300 group-hover:opacity-100">
              <span className="text-sm font-semibold uppercase tracking-[0.18em] text-white">
                Coming soon
              </span>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}
