import { Section, SectionHeading } from "@/components/site/section";
import { bio } from "@/lib/content";

export function About() {
  return (
    <Section id="about" className="pt-0">
      <SectionHeading index="01" eyebrow="About" title="A bit about me" />
      <div className="mt-8 space-y-5 text-base leading-relaxed text-foreground/90">
        {bio.map((paragraph, i) => (
          <p key={i} className="text-pretty">
            {paragraph}
          </p>
        ))}
      </div>
    </Section>
  );
}
