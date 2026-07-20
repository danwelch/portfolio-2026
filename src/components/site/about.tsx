"use client";

import { useState } from "react";
import { ArrowLeftRight } from "lucide-react";
import { Section, SectionHeading } from "@/components/site/section";
import { bio, personalBio } from "@/lib/content";

export function About() {
  const [mode, setMode] = useState<"professionally" | "personally">("professionally");
  const isProfessional = mode === "professionally";
  const paragraphs = isProfessional ? bio : personalBio;

  return (
    <Section id="about" className="pt-0 sm:pt-0">
      <SectionHeading index="01" eyebrow="About">
        A bit about me{" "}
        <button
          type="button"
          onClick={() => setMode(isProfessional ? "personally" : "professionally")}
          aria-pressed={!isProfessional}
          aria-label={`${mode}, switch between professional and personal bio`}
          className="inline-flex items-baseline gap-2 italic text-foreground hover:text-brand focus-visible:text-brand transition-colors cursor-pointer"
        >
          {mode}
          <ArrowLeftRight aria-hidden="true" className="size-4 self-center text-brand" />
        </button>
      </SectionHeading>
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
