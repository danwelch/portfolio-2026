import { Quote } from "lucide-react";
import { Section, SectionHeading } from "@/components/site/section";

export function Testimonials() {
  return (
    <Section id="testimonials" className="border-t border-border/60">
      <SectionHeading
        index="05"
        eyebrow="Testimonials"
        title="Kind words, on the way"
        description="I'm gathering a few notes from engineers, designers, and product partners I've worked with. They'll land here shortly."
      />

      <div className="mt-14 grid gap-5 sm:grid-cols-2">
        {[0, 1].map((i) => (
          <figure
            key={i}
            className="relative flex flex-col rounded-xl border border-dashed border-border bg-card/30 p-7"
          >
            <Quote className="size-7 text-brand/30" aria-hidden="true" />
            <blockquote className="mt-4 space-y-2" aria-hidden="true">
              <span className="block h-3 w-full rounded bg-muted" />
              <span className="block h-3 w-11/12 rounded bg-muted" />
              <span className="block h-3 w-3/4 rounded bg-muted" />
            </blockquote>
            <figcaption className="mt-6 flex items-center gap-3">
              <span className="size-9 rounded-full bg-muted" aria-hidden="true" />
              <span className="flex flex-col gap-1.5">
                <span className="block h-2.5 w-24 rounded bg-muted" aria-hidden="true" />
                <span className="block h-2.5 w-32 rounded bg-muted/70" aria-hidden="true" />
              </span>
            </figcaption>
            <span className="sr-only">Testimonial coming soon</span>
          </figure>
        ))}
      </div>
    </Section>
  );
}
