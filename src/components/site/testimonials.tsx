"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowLeft, ArrowRight, Quote } from "lucide-react";
import { Section, SectionHeading } from "@/components/site/section";
import { testimonials } from "@/lib/content";
import { cn } from "@/lib/utils";

export function Testimonials() {
  const count = testimonials.length;
  const [rendered, setRendered] = useState(0);
  const [visible, setVisible] = useState(true);
  const [expanded, setExpanded] = useState(false);
  const [height, setHeight] = useState<number>();
  const contentRef = useRef<HTMLDivElement>(null);
  const animating = useRef(false);
  const reduced = useRef(false);

  useEffect(() => {
    reduced.current = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
  }, []);

  // Keep the card sized to the active testimonial (and on resize/reflow).
  useEffect(() => {
    const measure = () => {
      const el = contentRef.current;
      if (!el) return;
      const fig = el.parentElement;
      const cs = fig ? getComputedStyle(fig) : null;
      const borders = cs
        ? parseFloat(cs.borderTopWidth) + parseFloat(cs.borderBottomWidth)
        : 0;
      setHeight(el.offsetHeight + borders);
    };
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, [rendered, expanded]);

  useEffect(() => {
    setExpanded(false);
  }, [rendered]);

  const transition = (update: () => void) => {
    if (animating.current) return;
    if (reduced.current) {
      update();
      return;
    }
    animating.current = true;
    setVisible(false); // 1. fade the quote out
    window.setTimeout(() => {
      update(); // 2. swap content + resize the card
      window.setTimeout(() => {
        setVisible(true); // 3. fade the new quote in
        window.setTimeout(() => {
          animating.current = false;
        }, 220);
      }, 340);
    }, 200);
  };

  const go = (dir: number) => {
    transition(() => {
      setExpanded(false);
      setRendered((rendered + dir + count) % count);
    });
  };

  const expandQuote = () => {
    transition(() => setExpanded(true));
  };

  const t = testimonials[rendered];
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

      <figure
        style={height ? { height: `${height}px` } : undefined}
        className="relative mt-12 overflow-hidden rounded-xl border border-border bg-surface transition-[height] duration-300 ease-out motion-reduce:transition-none"
      >

        <div
          ref={contentRef}
          className={cn(
            "px-7 pb-7 pt-10 transition-opacity duration-200 ease-out motion-reduce:transition-none",
            visible ? "opacity-100" : "opacity-0",
          )}
        >
          <blockquote
            className={cn(
              "justify-start font-display text-dark text-pretty leading-relaxed text-pretty italic font-medium",
              expanded ? "text-lg" : "text-xl",
            )}
          >
            &ldquo;{expanded && t.full ? t.full : shortQuote}&rdquo;
          </blockquote>

            <div className="flex gap-4 justify-between align-start mt-7 ">
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
              <div className="flex justify-end" >
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
