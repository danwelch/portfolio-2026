"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { ArrowLeft, ArrowRight, Mail, X } from "lucide-react";
import { Section, SectionHeading } from "@/components/site/section";
import { testimonials } from "@/lib/content";

function ReferenceModal({
  t,
  onClose,
}: {
  t: (typeof testimonials)[0];
  onClose: () => void;
}) {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [onClose]);

  return createPortal(
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8"
      aria-modal="true"
      role="dialog"
      aria-label={`Reference letter from ${t.name}`}
    >
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />
      <div className="relative z-10 flex flex-col w-full max-w-2xl max-h-[85vh] rounded-xl border border-border bg-background shadow-2xl">
        <div className="flex items-start justify-between gap-4 px-7 pt-7 pb-5 border-b border-border/60">
          <div className="flex items-center gap-3.5">
            {t.avatar ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={t.avatar}
                alt={t.name}
                className="size-10 shrink-0 rounded-full object-cover ring-1 ring-border"
              />
            ) : (
              <span
                aria-hidden="true"
                className="flex size-10 shrink-0 items-center justify-center rounded-full bg-secondary text-sm font-semibold text-foreground ring-1 ring-border"
              >
                {t.initials}
              </span>
            )}
            <span className="flex flex-col">
              <span className="font-display font-medium text-foreground">{t.name}</span>
              <span className="text-sm text-muted-foreground">{t.title}</span>
            </span>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close"
            className="cursor-pointer text-muted-foreground hover:text-foreground transition-colors mt-0.5"
          >
            <X className="size-5" />
          </button>
        </div>
        <div
          className="overflow-y-auto px-7 py-6 text-sm leading-relaxed text-foreground font-body space-y-4 [&_p]:text-pretty [&_.disclaimer]:text-xs [&_.disclaimer]:italic [&_.disclaimer]:text-muted-foreground [&_.disclaimer]:border-b [&_.disclaimer]:border-border/60 [&_.disclaimer]:pb-4"
          dangerouslySetInnerHTML={{ __html: t.fullHtml! }}
        />
      </div>
    </div>,
    document.body
  );
}

export function Testimonials() {
  const count = testimonials.length;
  const [rendered, setRendered] = useState(0);
  const [expandedSet, setExpandedSet] = useState<Set<number>>(new Set());
  const [modalOpen, setModalOpen] = useState(false);

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

  const displayedQuote = expanded && t.full ? t.full : shortQuote;
  const quoteSize = "text-sm @[30rem]/card:text-base";

  return (
    <Section id="testimonials" className="border-t border-border/60">
      <SectionHeading
        index="05"
        eyebrow="Testimonials"
        title="Kind words from people I've worked with"
        description="From the talented engineers, designers, and managers I've had the pleasure of working alongside."
      />

      <figure className="@container/card relative mt-12 rounded-xl border border-border bg-surface">
        <div className="p-5 @[30rem]/card:p-7">
          <figcaption className="flex items-center gap-3.5 mb-4">
            {t.avatar ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={t.avatar}
                alt={t.name}
                className="size-10 shrink-0 rounded-full object-cover ring-1 ring-border"
              />
            ) : (
              <span
                aria-hidden="true"
                className="flex size-10 shrink-0 items-center justify-center rounded-full bg-secondary text-sm font-semibold text-foreground ring-1 ring-border"
              >
                {t.initials}
              </span>
            )}
            <span className="flex flex-col">
              <span className="font-display font-medium text-foreground">{t.name}</span>
              <span className="text-sm text-muted-foreground text-balance">{t.title}</span>
            </span>
          </figcaption>

          <blockquote className={`justify-start font-body font-normal text-foreground text-pretty leading-relaxed italic ${quoteSize}`}>
            &ldquo;{displayedQuote}&rdquo;
          </blockquote>

          <div className="mt-6 pt-4 border-t border-border/60 flex items-center justify-between">
            {/* Read More — left side */}
            <div className="min-w-0">
              {(t.fullHtml || (t.full && !expanded)) ? (
                <button
                  type="button"
                  onClick={t.fullHtml ? () => setModalOpen(true) : expandQuote}
                  className="cursor-pointer whitespace-nowrap font-medium text-xs font-body text-muted-foreground uppercase tracking-wide underline-offset-4 hover:underline focus-visible:underline focus-visible:outline-none"
                >
                  Read More
                </button>
              ) : <span />}
            </div>

            {/* Counter wrapped around arrows — right side */}
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => go(-1)}
                aria-label="Previous testimonial"
                className="flex size-9 items-center justify-center rounded-md border border-border bg-surface text-muted-foreground transition-colors hover:border-foreground/40 hover:text-foreground"
              >
                <ArrowLeft className="size-4" />
              </button>
              <span className="text-xs font-medium uppercase tracking-[0.16em] tabular-nums text-muted-foreground">
                {String(rendered + 1).padStart(2, "0")} /{" "}
                {String(count).padStart(2, "0")}
              </span>
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
        </div>
      </figure>

      {modalOpen && t.fullHtml && (
        <ReferenceModal t={t} onClose={() => setModalOpen(false)} />
      )}
    </Section>
  );
}
