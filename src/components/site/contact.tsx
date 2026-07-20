import { ArrowRight } from "lucide-react";
import { Section, SectionHeading } from "@/components/site/section";
import { Button } from "@/components/ui/button";
import { site } from "@/lib/content";

export function Contact() {
  return (
    <Section id="contact" className="border-t border-border/60">
      <SectionHeading
        index="05"
        eyebrow="Contact"
        description="I'm currently exploring full-time design systems architect and senior front-end roles, remote preferred but open to relocation for the right opportunity. Also available for freelance and contract work."
      >
        Let&apos;s build something
      </SectionHeading>

      <Button
        asChild
        className="mt-8 bg-dark text-white hover:bg-brand uppercase tracking-wide text-sm px-5 py-3 h-auto @xl:text-base"
      >
        <a href={`mailto:${site.email}`}>
          Let&apos;s Connect
          <ArrowRight />
        </a>
      </Button>
    </Section>
  );
}
