import { ArrowUpRight } from "lucide-react";
import { Section, SectionHeading } from "@/components/site/section";
import { Badge } from "@/components/ui/badge";

const upcoming = [
  {
    name: "The Ledger",
    blurb:
      "Architecting Bankrate's React/Next.js design system — 65+ components, token-based white-label theming, and the release tooling behind it.",
    tags: ["Design System", "React", "Design Tokens"],
  },
  {
    name: "The Treasury",
    blurb:
      "Bankrate's first formal design system — adopted across a dozen-plus projects with zero production incidents, replacing a legacy CSS framework.",
    tags: ["Design System", "Adoption", "Migration"],
  },
  {
    name: "Storyblok Component Audit",
    blurb:
      "Eliminating ~30% of components (289) with a custom stakeholder dashboard — simplifying content workflows across product teams.",
    tags: ["Audit", "Tooling", "DX"],
  },
];

export function Work() {
  return (
    <Section id="work" className="border-t border-border/60">
      <SectionHeading
        index="04"
        eyebrow="Case Studies"
        title="Selected work, written up soon"
        description="I'm putting together detailed write-ups of my recent design-systems work at Bankrate. Here's what's coming."
      />

      <div className="mt-10 grid gap-4">
        {upcoming.map((item) => (
          <article
            key={item.name}
            className="group relative flex flex-col rounded-2xl border border-border bg-surface p-6 transition-all hover:-translate-y-0.5 hover:border-brand/40 hover:shadow-[0_8px_30px_-12px_rgba(13,27,46,0.15)]"
          >
            <div className="flex items-center justify-between">
              <Badge
                variant="outline"
                className="rounded-full border-accent-light bg-accent-subtle text-[0.65rem] font-semibold uppercase tracking-[0.12em] text-brand"
              >
                Coming soon
              </Badge>
              <ArrowUpRight className="size-4 text-muted-foreground/50 transition-colors group-hover:text-brand" />
            </div>

            <h3 className="mt-5 font-heading text-xl font-medium tracking-tight">
              {item.name}
            </h3>
            <p className="mt-3 flex-1 text-pretty text-sm leading-relaxed text-muted-foreground">
              {item.blurb}
            </p>

            <div className="mt-5 flex flex-wrap gap-1.5">
              {item.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-md bg-secondary px-2 py-0.5 text-xs text-secondary-foreground"
                >
                  {tag}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}
