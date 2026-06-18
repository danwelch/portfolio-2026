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
              <div className="font-mono text-sm text-muted-foreground">
                {job.period}
              </div>
              {job.current ? (
                <div className="mt-1 inline-flex items-center gap-1.5 font-mono text-[0.7rem] uppercase tracking-[0.15em] text-brand">
                  Most recent
                </div>
              ) : null}
            </div>

            <div className="sm:border-l sm:border-border/60 sm:pl-8">
              <h3 className="text-lg font-medium tracking-tight">{job.role}</h3>
              <div className="mt-0.5 text-sm text-muted-foreground">
                {job.company} · {job.location}
              </div>
              <p className="mt-3 text-pretty leading-relaxed text-foreground/85">
                {job.summary}
              </p>
              <ul className="mt-4 space-y-2">
                {job.highlights.map((point, j) => (
                  <li
                    key={j}
                    className="relative pl-5 text-sm leading-relaxed text-muted-foreground before:absolute before:left-0 before:top-2.5 before:size-1.5 before:-translate-y-1/2 before:rounded-full before:bg-brand/50"
                  >
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </li>
        ))}
      </ol>
    </Section>
  );
}
