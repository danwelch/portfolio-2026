import type { CSSProperties } from "react";
import { cn } from "@/lib/utils";
import { Section, SectionHeading } from "@/components/site/section";
import { projects } from "@/lib/content";
import { projectLogos } from "@/components/site/work-logos";

function initials(title: string) {
  return title
    .split(/\s+/)
    .map((word) => word[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

// project.logo is a path to the source SVG (e.g. "/logos/bankrate.svg"),
// kept as the identifier for which inline logo component to render.
function logoKey(path?: string) {
  return path?.replace(/^\/logos\//, "").replace(/\.svg$/, "");
}

// Determines which edge borders to drop per container width so the grid
// shows only dividers between cells, never an outer edge. Takes separate
// totals per width since placeholder cells pad the wide (3-col) row but
// may not be needed (and are hidden) at the narrow (2-col) width.
function edgeBorderClasses(index: number, narrowTotal: number, wideTotal: number) {
  const edges = (cols: number, total: number) => {
    const rowsTotal = Math.ceil(total / cols);
    const row = Math.floor(index / cols);
    const col = index % cols;
    const remainder = total % cols;
    const itemsInRow = row === rowsTotal - 1 && remainder !== 0 ? remainder : cols;
    return { hideRight: col === itemsInRow - 1, hideBottom: row === rowsTotal - 1 };
  };

  const narrow = edges(2, narrowTotal);
  const wide = edges(3, wideTotal);

  const right = narrow.hideRight && wide.hideRight
    ? ""
    : narrow.hideRight
      ? "border-r-0 @[40rem]:border-r"
      : wide.hideRight
        ? "border-r @[40rem]:border-r-0"
        : "border-r";

  const bottom = narrow.hideBottom && wide.hideBottom
    ? ""
    : narrow.hideBottom
      ? "border-b-0 @[40rem]:border-b"
      : wide.hideBottom
        ? "border-b @[40rem]:border-b-0"
        : "border-b";

  return cn(right, bottom, "border-border");
}

export function Work() {
  const narrowPlaceholders = (2 - (projects.length % 2)) % 2;
  const widePlaceholders = (3 - (projects.length % 3)) % 3;
  const placeholderCount = Math.max(narrowPlaceholders, widePlaceholders);
  const narrowTotal = projects.length + narrowPlaceholders;
  const wideTotal = projects.length + widePlaceholders;

  return (
    <Section id="work" className="border-t border-border/60 @container">
      <SectionHeading
        index="03"
        eyebrow="Work"
        title="Selected work"
        description="A cross-section of sites I've built, either solo or as part of larger team, from freelance work to enterprise platforms. Click through, they still work."
      />

      <ul className="mt-8 grid grid-cols-2 auto-rows-[calc(100cqw/2)] @[40rem]:grid-cols-3 @[40rem]:auto-rows-[calc(100cqw/3)]">
        {projects.map((project, index) => {
          const Logo = projectLogos[logoKey(project.logo) ?? ""];
          return (
            <li key={project.title} className={cn("", edgeBorderClasses(index, narrowTotal, wideTotal))}>
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                style={
                  {
                    "--card-accent": project.color ?? "var(--color-dark)",
                  } as CSSProperties
                }
                className="group grid h-full grid-rows-[1fr_auto] items-center justify-center gap-4 p-6 text-center transition-colors hover:bg-[var(--card-accent)]"
              >
                {Logo ? (
                  <Logo
                    aria-hidden="true"
                    style={project.logoScale ? { transform: `scale(${project.logoScale})` } : undefined}
                    className="size-32 shrink-0 text-foreground transition-colors group-hover:text-white"
                  />
                ) : (
                  <span
                    aria-hidden="true"
                    className="flex size-32 items-center justify-center text-2xl font-semibold text-muted-foreground transition-colors group-hover:text-white"
                  >
                    {initials(project.title)}
                  </span>
                )}

                <p className="text-xs text-muted-foreground transition-colors group-hover:text-white/80">
                  {project.year}
                </p>
              </a>
            </li>
          );
        })}
        {Array.from({ length: placeholderCount }, (_, p) => (
          <li
            key={`placeholder-${p}`}
            aria-hidden="true"
            className={cn(
              p < narrowPlaceholders ? "block" : "hidden",
              p < widePlaceholders ? "@[40rem]:block" : "@[40rem]:hidden",
              edgeBorderClasses(projects.length + p, narrowTotal, wideTotal),
            )}
          />
        ))}
      </ul>
    </Section>
  );
}
