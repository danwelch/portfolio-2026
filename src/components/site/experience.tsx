import { Section, SectionHeading } from "@/components/site/section";
import { cn } from "@/lib/utils";
import { experience, type TimelineEntry } from "@/lib/content";

const dateCol = "sm:col-start-1";
const railCol = "sm:col-start-2";
const contentCol = "sm:col-start-3";

export function TimelineMarker() {
  return (
    <span
      aria-hidden="true"
      className="relative z-10 block size-2.5 shrink-0 rounded-full border-2 border-border bg-background"
    />
  );
}

export function TimelineRow({ job }: { job: TimelineEntry }) {
  return (
    <li className="relative border-l border-border pb-12 pl-6 last:pb-0 sm:grid sm:gap-x-6 sm:border-l-0 sm:pl-0 sm:grid-cols-[6.5rem_1.25rem_1fr]">
      <div
        className={cn(
          "relative hidden items-center justify-center sm:flex sm:self-center",
          railCol,
          "sm:row-start-1",
        )}
      >
        <TimelineMarker />
      </div>

      <div className="absolute top-2.25 -left-1.25 sm:hidden">
        <TimelineMarker />
      </div>

      <div className="flex flex-col gap-0.5 sm:contents">
        <div
          className={cn(
            "shrink-0 text-sm tabular-nums text-muted-foreground sm:mb-0 sm:flex sm:items-center sm:justify-end sm:self-center sm:text-right",
            dateCol,
            "sm:row-start-1",
          )}
        >
          {job.period}
        </div>

        <h3
          className={cn(
            "min-w-0 text-lg font-semibold leading-7 tracking-tight sm:col-start-3 sm:row-start-1 sm:self-center",
            contentCol,
          )}
        >
          {job.role}
        </h3>
      </div>

      <div
        className={cn(
          "mt-1 min-w-0 sm:col-start-3 sm:row-start-2 sm:mt-0",
          contentCol,
        )}
      >
        <p className="font-body text-sm font-semibold uppercase tracking-wide text-brand">
          {job.company}
          {job.companyNote ? ` | ${job.companyNote}` : ""}
        </p>
        <p className="mt-2 text-pretty text-sm leading-relaxed text-muted-foreground">
          {job.description}
        </p>
      </div>
    </li>
  );
}

export function Experience() {
  return (
    <Section id="experience" className="border-t border-border/60">
      <SectionHeading
        index="02"
        eyebrow="Experience"
        description="From hand-coding university landing pages to architecting the design systems that ship across dozens of products. The throughline is always the same: make the next thing easier to build right."
      >
        From sites to systems
      </SectionHeading>

      <ol className="relative mt-14">
        {/* left-34.5 = date col (6.5rem) + gap (1.5rem) + half rail col (0.625rem); top-3.5 = half the title row's 1.75rem line-height */}
        <div
          aria-hidden="true"
          className="absolute top-3.5 bottom-0 left-34.5 hidden w-px -translate-x-1/2 bg-border sm:block"
        />
        {experience.map((job) => (
          <TimelineRow key={`${job.company}-${job.period}`} job={job} />
        ))}
      </ol>
    </Section>
  );
}
