"use client";

import { Quote } from "lucide-react";
import { Section, SectionHeading } from "@/components/site/section";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { testimonials } from "@/lib/content";

export function Testimonials() {
  return (
    <Section id="testimonials" className="border-t border-border/60">
      <SectionHeading
        index="05"
        eyebrow="Testimonials"
        title="Kind words from people I've worked with"
        description="A few notes from engineers, designers, and product partners. More on the way."
      />

      <TooltipProvider delayDuration={150}>
        <div className="mt-14 grid gap-5 sm:grid-cols-2">
          {testimonials.map((t) => (
            <figure
              key={t.name}
              className="flex flex-col rounded-2xl border border-border bg-surface p-7 shadow-[0_8px_30px_-18px_rgba(13,27,46,0.18)]"
            >
              <Quote className="size-7 text-brand/40" aria-hidden="true" />
              <blockquote className="mt-4 flex-1 text-pretty leading-relaxed text-foreground/90">
                {t.quote}
              </blockquote>

              {t.full ? (
                <Tooltip>
                  <TooltipTrigger className="mt-4 w-fit cursor-help text-xs font-semibold uppercase tracking-[0.14em] text-brand underline-offset-4 hover:underline focus-visible:underline focus-visible:outline-none">
                    Full testimonial
                  </TooltipTrigger>
                  <TooltipContent
                    side="top"
                    className="max-w-sm items-start whitespace-normal p-4 text-left text-sm leading-relaxed"
                  >
                    {t.full}
                  </TooltipContent>
                </Tooltip>
              ) : null}

              <figcaption className="mt-6 flex items-center gap-3 border-t border-border/60 pt-5">
                <span
                  aria-hidden="true"
                  className="flex size-10 items-center justify-center rounded-full bg-brand/10 font-medium text-brand"
                >
                  {t.initials}
                </span>
                <span className="flex flex-col">
                  <span className="text-sm font-medium">{t.name}</span>
                  <span className="text-xs text-muted-foreground">
                    {t.title}
                  </span>
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </TooltipProvider>
    </Section>
  );
}
