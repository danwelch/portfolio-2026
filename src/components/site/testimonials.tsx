"use client";

import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { ArrowLeft, ArrowRight, X } from "lucide-react";
import { Section, SectionHeading } from "@/components/site/section";
import { Identity } from "@/components/ui/avatar";
import { IconButton } from "@/components/ui/icon-button";
import { testimonials } from "@/lib/content";

function ReferenceModal({
  t,
  onClose,
}: {
  t: (typeof testimonials)[0];
  onClose: () => void;
}) {
  const dialogRef = useRef<HTMLDivElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const previouslyFocused = document.activeElement as HTMLElement | null;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
        return;
      }
      if (e.key !== "Tab" || !dialogRef.current) return;
      const focusables = dialogRef.current.querySelectorAll<HTMLElement>(
        'button, a[href], [tabindex]:not([tabindex="-1"])'
      );
      if (focusables.length === 0) return;
      const first = focusables[0];
      const last = focusables[focusables.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
      previouslyFocused?.focus();
    };
  }, [onClose]);

  return createPortal(
    <div
      ref={dialogRef}
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
          <Identity
            name={t.name}
            title={t.title}
            avatar={t.avatar}
            initials={t.initials}
          />
          <button
            ref={closeRef}
            type="button"
            onClick={onClose}
            aria-label="Close"
            className="cursor-pointer p-2 -m-2 -mt-1.5 text-muted-foreground hover:text-foreground transition-colors"
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
  const [active, setActive] = useState(0);
  const [expandedSet, setExpandedSet] = useState<Set<number>>(new Set());
  const [modalIdx, setModalIdx] = useState<number | null>(null);

  const go = (dir: number) => setActive((prev) => (prev + dir + count) % count);

  return (
    <Section id="testimonials" className="border-t border-border/60">
      <SectionHeading
        index="04"
        eyebrow="Testimonials"
        description="From the talented engineers, designers, and managers I've had the pleasure of working alongside."
      >
        Kind words from people I&apos;ve worked with
      </SectionHeading>

      <figure className="@container/card mt-12 rounded-xl border border-border bg-surface">
        {/* Grid stacks all slides in the same cell; height = tallest slide */}
        <div className="grid gap-6">
          {testimonials.map((t, i) => {
            const isActive = i === active;
            const expanded = expandedSet.has(i);
            const shortQuote = t.full ? t.quote.replace(/\s*\.?\s*$/, "") + "…" : t.quote;
            const displayedQuote = expanded && t.full ? t.full : shortQuote;

            return (
              <div
                key={i}
                style={{ gridArea: "1 / 1" }}
                className={`flex flex-col ${isActive ? "visible" : "invisible"}`}
                aria-hidden={!isActive}
              >
                <div className="flex flex-col flex-1 p-5 @lg/card:p-7">
                  <Identity
                    as="figcaption"
                    className="mb-4"
                    name={t.name}
                    title={t.title}
                    titleClassName="text-balance"
                    avatar={t.avatar}
                    initials={t.initials}
                  />

                  <blockquote className="flex-1 justify-start font-body font-normal text-foreground text-pretty leading-relaxed italic text-sm @lg/card:text-base">
                    &ldquo;{displayedQuote}&rdquo;
                  </blockquote>

                  <div className="mt-6 pt-4 border-t border-border/60 flex items-center justify-between">
                    <div className="min-w-0">
                      {(t.fullHtml || (t.full && !expanded)) ? (
                        <button
                          type="button"
                          onClick={
                            t.fullHtml
                              ? () => setModalIdx(i)
                              : () => setExpandedSet((prev) => new Set(prev).add(i))
                          }
                          className="cursor-pointer whitespace-nowrap py-2 -my-2 font-medium text-xs font-body text-muted-foreground uppercase tracking-wide underline-offset-4 hover:underline focus-visible:underline focus-visible:outline-none"
                        >
                          Read More
                        </button>
                      ) : <span />}
                    </div>

                    <div className="flex items-center gap-2">
                      <IconButton
                        onClick={() => go(-1)}
                        aria-label="Previous testimonial"
                      >
                        <ArrowLeft className="size-4" />
                      </IconButton>
                      <span className="text-xs font-medium uppercase tracking-widest tabular-nums text-muted-foreground">
                        {String(i + 1).padStart(2, "0")} /{" "}
                        {String(count).padStart(2, "0")}
                      </span>
                      <IconButton
                        onClick={() => go(1)}
                        aria-label="Next testimonial"
                      >
                        <ArrowRight className="size-4" />
                      </IconButton>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </figure>

      {modalIdx !== null && testimonials[modalIdx]?.fullHtml && (
        <ReferenceModal t={testimonials[modalIdx]} onClose={() => setModalIdx(null)} />
      )}
    </Section>
  );
}
