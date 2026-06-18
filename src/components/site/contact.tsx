import { ArrowUpRight, Mail } from "lucide-react";
import { Section, SectionHeading } from "@/components/site/section";
import { site } from "@/lib/content";

export function Contact() {
  return (
    <Section id="contact" className="border-t border-border/60">
      <SectionHeading
        index="06"
        eyebrow="Contact"
        title="Let's build something"
        description="I'm currently exploring new Design Systems Architect and senior front-end roles. The fastest way to reach me is email — I read everything."
      />

      <a
        href={`mailto:${site.email}`}
        className="group mt-8 inline-flex items-center gap-3 text-xl font-medium tracking-tight underline-offset-8 hover:underline sm:text-2xl"
      >
        <Mail className="size-5 text-brand" />
        {site.email}
        <ArrowUpRight className="size-5 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-brand" />
      </a>
    </Section>
  );
}
