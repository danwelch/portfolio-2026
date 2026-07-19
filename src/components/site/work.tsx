import { cn } from "@/lib/utils";
import { Section, SectionHeading } from "@/components/site/section";
import { ProjectCard } from "@/components/site/project-card";
import { projects } from "@/lib/content";
import { projectLogos } from "@/components/site/work-logos";

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
      ? "border-r-0 @2xl:border-r"
      : wide.hideRight
        ? "border-r @2xl:border-r-0"
        : "border-r";

  const bottom = narrow.hideBottom && wide.hideBottom
    ? ""
    : narrow.hideBottom
      ? "border-b-0 @2xl:border-b"
      : wide.hideBottom
        ? "border-b @2xl:border-b-0"
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
        description="A cross-section of sites I've built, either solo or as part of larger team, from freelance work to enterprise platforms. Click through, they still work."
      >
        Selected work
      </SectionHeading>

      <ul className="mt-8 grid grid-cols-2 auto-rows-[calc(100cqw/2)] @2xl:grid-cols-3 @2xl:auto-rows-[calc(100cqw/3)]">
        {projects.map((project, index) => (
          <li key={project.title} className={edgeBorderClasses(index, narrowTotal, wideTotal)}>
            <ProjectCard project={project} logo={projectLogos[logoKey(project.logo) ?? ""]} />
          </li>
        ))}
        {Array.from({ length: placeholderCount }, (_, p) => (
          <li
            key={`placeholder-${p}`}
            aria-hidden="true"
            className={cn(
              p < narrowPlaceholders ? "block" : "hidden",
              p < widePlaceholders ? "@2xl:block" : "@2xl:hidden",
              edgeBorderClasses(projects.length + p, narrowTotal, wideTotal),
            )}
          />
        ))}
      </ul>
    </Section>
  );
}
