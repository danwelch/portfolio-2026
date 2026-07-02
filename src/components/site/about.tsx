"use client";

import { useState } from "react";
import { ArrowLeftRight } from "lucide-react";
import { Section } from "@/components/site/section";
import { bio, personalBio } from "@/lib/content";

export function About() {
  const [mode, setMode] = useState<"professionally" | "personally">("professionally");
  const isProfessional = mode === "professionally";
  const paragraphs = isProfessional ? bio : personalBio;

  return (
    <Section id="about" className="pt-0 sm:pt-0">
      <div className="max-w-2xl">
        <div className="flex items-center gap-2.5 text-xs font-medium uppercase tracking-[0.18em] text-brand">
          <span className="tabular-nums">01</span>
          <span className="h-1 w-1 rounded-full bg-brand/50" />
          <span className="text-muted-foreground">About</span>
        </div>
        <h2 className="mt-4 text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
          A bit about me{" "}
          <button
            type="button"
            onClick={() => setMode(isProfessional ? "personally" : "professionally")}
            aria-pressed={!isProfessional}
            aria-label="Switch between professional and personal bio"
            className="inline-flex items-baseline gap-2 italic text-foreground hover:text-brand focus-visible:text-brand transition-colors focus-visible:outline-none cursor-pointer"
          >
            {mode}
            <ArrowLeftRight aria-hidden="true" className="size-4 self-center text-brand" />
          </button>
        </h2>
      </div>
      <div className="mt-8 space-y-5 text-base leading-relaxed text-muted-foreground">
        {paragraphs.map((paragraph, i) => (
          <p key={i} className="text-pretty">
            {paragraph}
          </p>
        ))}
      </div>
    </Section>
  );
}
