"use client";

import { useRef, useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Section, SectionHeading } from "@/components/site/section";
import { testimonials } from "@/lib/content";

export function Testimonials() {
  const count = testimonials.length;
  const [rendered, setRendered] = useState(0);
  const [expandedSet, setExpandedSet] = useState<Set<number>>(new Set());

  const go = (dir: number) => {
    setRendered((prev) => (prev + dir + count) % count);
  };

  const expandQuote = () => {
    setExpandedSet((prev) => new Set(prev).add(rendered));
  };

  const t = testimonials[rendered];
  const expanded = expandedSet.has(rendered);
  const shortQuote = t.full
    ? t.quote.replace(/\s*\.?\s*$/, "") + "…"
    : t.quote;

  return (
    <Section id="testimonials" className="border-t border-border/60">
      <SectionHeading
        index="05"
        eyebrow="Testimonials"
        title="Kind words from people I've worked with"
        description="From the talented engineers, designers, and managers I've had the pleasure of working alongside."
      />

      <figure className="relative mt-12 rounded-xl border border-border bg-surface">
        <div className="px-7 pb-7 pt-10">
          <blockquote className="justify-start font-display text-dark text-pretty leading-relaxed italic font-medium">
            &ldquo;{expanded && t.full ? t.full : shortQuote}&rdquo;
          </blockquote>

          <div className="flex gap-4 justify-between align-start mt-7">
            <figcaption className="flex items-center gap-3.5">
              <span
                aria-hidden="true"
                className="flex size-11 shrink-0 items-center justify-center rounded-full bg-secondary text-sm font-semibold text-foreground ring-1 ring-border"
              >
                {t.initials}
              </span>
              <span className="flex flex-col">
                <span className="font-medium text-foreground">{t.name}</span>
                <span className="text-sm text-muted-foreground">{t.title}</span>
              </span>
            </figcaption>
            {t.full && !expanded ? (
              <div className="flex justify-end">
                <button
                  type="button"
                  onClick={expandQuote}
                  className="cursor-pointer whitespace-nowrap font-medium text-xs font-body text-brand uppercase tracking-wide underline-offset-4 hover:underline focus-visible:underline focus-visible:outline-none"
                >
                  Full Quote
                </button>
              </div>
            ) : null}
          </div>
        </div>
      </figure>

      <div className="mt-6 flex items-center justify-between">
        <span className="text-xs font-medium uppercase tracking-[0.16em] tabular-nums text-muted-foreground">
          {String(rendered + 1).padStart(2, "0")} /{" "}
          {String(count).padStart(2, "0")}
        </span>
        <div className="flex gap-2">
          <button
            type="button"
            onClick={() => go(-1)}
            aria-label="Previous testimonial"
            className="flex size-9 items-center justify-center rounded-md border border-border bg-surface text-muted-foreground transition-colors hover:border-foreground/40 hover:text-foreground"
          >
            <ArrowLeft className="size-4" />
          </button>
          <button
            type="button"
            onClick={() => go(1)}
            aria-label="Next testimonial"
            className="flex size-9 items-center justify-center rounded-md border border-border bg-surface text-muted-foreground transition-colors hover:border-foreground/40 hover:text-foreground"
          >
            <ArrowRight className="size-4" />
          </button>
        </div>
      </div>
    </Section>
  );
}
