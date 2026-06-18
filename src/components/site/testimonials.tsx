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
        <div className="mt-12 grid gap-6">
          {testimonials.map((t) => (
            <figure
              key={t.name}
              className="relative flex flex-col overflow-hidden rounded-xl border border-border bg-surface px-7 pb-7 pt-10 shadow-[0_1px_2px_rgba(0,0,0,0.04),0_10px_30px_-20px_rgba(0,0,0,0.25)]"
            >
              <span
                aria-hidden="true"
                className="absolute left-0 top-0 flex size-10 items-center justify-center rounded-br-lg bg-gray-100 text-dark"
              >
                <Quote className="size-4 fill-current" />
              </span>

              <blockquote className="flex-1 text-pretty leading-relaxed text-foreground/90">
                &ldquo;{t.full ? t.quote.replace(/\s*\.?\s*$/, "") + "…" : t.quote}
                &rdquo;
                {t.full ? (
                  <Tooltip>
                    <TooltipTrigger className="ml-1.5 cursor-help whitespace-nowrap font-medium text-brand underline-offset-4 hover:underline focus-visible:underline focus-visible:outline-none">
                      read more
                    </TooltipTrigger>
                    <TooltipContent
                      side="top"
                      className="max-w-sm items-start whitespace-normal p-4 text-left text-sm leading-relaxed"
                    >
                      {t.full}
                    </TooltipContent>
                  </Tooltip>
                ) : null}
              </blockquote>

              <figcaption className="mt-7 flex items-center gap-3.5">
                <span
                  aria-hidden="true"
                  className="flex size-11 shrink-0 items-center justify-center rounded-full bg-secondary text-sm font-semibold text-foreground ring-1 ring-border"
                >
                  {t.initials}
                </span>
                <span className="flex flex-col">
                  <span className="font-medium text-foreground">{t.name}</span>
                  <span className="text-sm text-muted-foreground">
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
