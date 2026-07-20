import { Section, SectionHeading } from "@/components/site/section";
import { cn } from "@/lib/utils";
import { experience, type TimelineEntry } from "@/lib/content";

const dateCol = "@xl:col-start-1";
const railCol = "@xl:col-start-2";
const contentCol = "@xl:col-start-3";

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
    <li className="relative border-l border-border pb-12 pl-6 last:pb-0 @xl:grid @xl:gap-x-6 @xl:border-l-0 @xl:pl-0 @xl:grid-cols-[6.5rem_1.25rem_1fr]">
      <div
        className={cn(
          "relative hidden items-center justify-center @xl:flex @xl:self-center",
          railCol,
          "@xl:row-start-1",
        )}
      >
        <TimelineMarker />
      </div>

      <div className="absolute top-2.25 -left-1.25 @xl:hidden">
        <TimelineMarker />
      </div>

      <div className="flex flex-col gap-0.5 @xl:contents">
        <div
          className={cn(
            "shrink-0 text-sm tabular-nums text-muted-foreground @xl:mb-0 @xl:flex @xl:items-center @xl:justify-end @xl:self-center @xl:text-right",
            dateCol,
            "@xl:row-start-1",
          )}
        >
          {job.period}
        </div>

        <h3
          className={cn(
            "min-w-0 text-lg font-semibold leading-7 tracking-tight @xl:col-start-3 @xl:row-start-1 @xl:self-center",
            contentCol,
          )}
        >
          {job.role}
        </h3>
      </div>

      <div
        className={cn(
          "mt-1 min-w-0 @xl:col-start-3 @xl:row-start-2 @xl:mt-0",
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

      <ol className="relative mt-14 @container">
        {/* left-34.5 = date col (6.5rem) + gap (1.5rem) + half rail col (0.625rem); top-3.5 = half the title row's 1.75rem line-height */}
        <div
          aria-hidden="true"
          className="absolute top-3.5 bottom-0 left-34.5 hidden w-px -translate-x-1/2 bg-border @xl:block"
        />
        {experience.map((job) => (
          <TimelineRow key={`${job.company}-${job.period}`} job={job} />
        ))}
      </ol>
    </Section>
  );
}
