import { Section, SectionHeading } from "@/components/site/section";
import { cn } from "@/lib/utils";
import { experience } from "@/lib/content";

export function Experience() {
  return (
    <Section id="experience" className="border-t border-border/60">
      <SectionHeading
        index="02"
        eyebrow="Experience"
        title="Seventeen years, one through-line"
        description="From university marketing sites to enterprise design systems — a steady move toward the architecture that makes teams faster."
      />

      <ol className="mt-14 space-y-0">
        {experience.map((job, i) => (
          <li
            key={`${job.company}-${i}`}
            className="group relative grid gap-x-8 gap-y-3 border-t border-border/60 py-8 sm:grid-cols-[8.5rem_1fr]"
          >
            {/* timeline rail dot */}
            <span
              aria-hidden="true"
              className={cn(
                "absolute -top-px left-0 size-2 -translate-x-1/2 rounded-full ring-4 ring-background sm:left-[8.5rem]",
                job.current ? "bg-brand" : "bg-border",
              )}
            />

            <div className="sm:pr-8 sm:text-right">
              <div className="text-sm font-medium tabular-nums text-muted-foreground">
                {job.period}
              </div>
              {job.current ? (
                <div className="mt-1 inline-flex items-center gap-1.5 text-[0.7rem] font-semibold uppercase tracking-[0.14em] text-brand">
                  Most recent
                </div>
              ) : null}
            </div>

            <div className="sm:border-l sm:border-border/60 sm:pl-8">
              <h3 className="text-lg font-semibold tracking-tight">{job.role}</h3>
              <div className="mt-1 text-sm text-muted-foreground">
                {job.company} · {job.location}
              </div>
            </div>
          </li>
        ))}
      </ol>
    </Section>
  );
}
