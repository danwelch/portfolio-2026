import { Section, SectionHeading } from "@/components/site/section";

const caseStudies = [
  {
    name: "The Ledger",
    blurb:
      "Architecting Bankrate's React/Next.js design system: 65+ components, token-based white-label theming, and the release tooling behind it.",
  },
  {
    name: "The Treasury",
    blurb:
      "Bankrate's first formal design system, adopted across a dozen-plus projects with zero production incidents, replacing a legacy CSS framework.",
  },
];

export function Work() {
  return (
    <Section id="work" className="border-t border-border/60">
      <SectionHeading
        index="03"
        eyebrow="Work"
        title="Selected work"
        description="Deep dives into the systems, decisions, and tradeoffs behind the work."
      />

      <div className="mt-8 grid gap-4">
        {caseStudies.map((item) => (
          <article
            key={item.name}
            className="rounded-xl border border-border bg-surface p-6"
          >
            <div className="flex flex-wrap items-center justify-between gap-3">
              <h3 className="font-heading text-2xl font-medium tracking-tight">
                {item.name}
              </h3>
              <span className="rounded-full border border-border px-2.5 py-1 text-xs font-medium uppercase tracking-wide text-muted-foreground">
                Case study coming soon
              </span>
            </div>
            <p className="mt-3 text-pretty text-sm leading-relaxed text-muted-foreground">
              {item.blurb}
            </p>
          </article>
        ))}
      </div>
    </Section>
  );
}
