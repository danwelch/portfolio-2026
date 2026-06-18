import { Section, SectionHeading } from "@/components/site/section";
import { Badge } from "@/components/ui/badge";
import { skills } from "@/lib/content";

export function Skills() {
  return (
    <Section id="skills" className="border-t border-border/60">
      <SectionHeading
        index="03"
        eyebrow="Skills"
        title="The toolkit"
        description="The languages, frameworks, and practices I reach for — with a bias toward design systems, accessibility, and developer experience."
      />

      <dl className="mt-14 grid gap-x-10 gap-y-10 sm:grid-cols-2">
        {skills.map((group) => (
          <div
            key={group.label}
            className="grid gap-3 border-t border-border/60 pt-5"
          >
            <dt className="font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground">
              {group.label}
            </dt>
            <dd className="flex flex-wrap gap-2">
              {group.items.map((item) => (
                <Badge
                  key={item}
                  variant="secondary"
                  className="rounded-full px-3 py-1 text-sm font-normal"
                >
                  {item}
                </Badge>
              ))}
            </dd>
          </div>
        ))}
      </dl>
    </Section>
  );
}
