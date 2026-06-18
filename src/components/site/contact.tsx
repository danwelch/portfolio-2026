import { ArrowRight } from "lucide-react";
import { Section, SectionHeading } from "@/components/site/section";
import { Button } from "@/components/ui/button";
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

      <Button
        variant="ghost"
        asChild
        className="mt-8 h-auto -translate-x-5 px-5 py-3 uppercase tracking-wide text-sm transition-transform hover:bg-brand/15 hover:text-brand sm:text-base"
      >
        <a href={`mailto:${site.email}`}>
          Let's Connect
          <ArrowRight />
        </a>
      </Button>
    </Section>
  );
}
