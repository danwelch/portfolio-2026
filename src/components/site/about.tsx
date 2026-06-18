import { Section, SectionHeading } from "@/components/site/section";
import { bio } from "@/lib/content";

export function About() {
  return (
    <Section id="about" className="border-t border-border/60">
      <div className="grid gap-12 md:grid-cols-[1fr_1.4fr] md:gap-16">
        <SectionHeading index="01" eyebrow="About" title="A bit about me" />
        <div className="space-y-5 text-lg leading-relaxed text-foreground/90">
          {bio.map((paragraph, i) => (
            <p key={i} className="text-pretty">
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </Section>
  );
}
