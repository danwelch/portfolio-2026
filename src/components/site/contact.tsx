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
        description="I'm currently exploring full-time design systems architect and senior front-end roles, remote preferred but open to relocation for the right opportunity. Also available for freelance and contract work."
      />

      <Button
        asChild
        className="mt-8 bg-dark text-white hover:bg-dark/90 uppercase tracking-wide text-sm px-5 py-3 h-auto sm:text-base"
      >
        <a href={`mailto:${site.email}`}>
          Let's Connect
          <ArrowRight />
        </a>
      </Button>
    </Section>
  );
}
