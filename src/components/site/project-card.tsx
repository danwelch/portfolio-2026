import type { ComponentType, CSSProperties, SVGProps } from "react";
import { ExternalLink } from "@/components/ui/external-link";
import type { ProjectLink } from "@/lib/content";

function initials(title: string) {
  return title
    .split(/\s+/)
    .map((word) => word[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

export function ProjectCard({
  project,
  logo: Logo,
}: {
  project: ProjectLink;
  logo?: ComponentType<SVGProps<SVGSVGElement>>;
}) {
  return (
    <ExternalLink
      href={project.url}
      style={
        {
          "--card-accent": project.color ?? "var(--color-dark)",
        } as CSSProperties
      }
      className="group @container grid h-full grid-rows-[1fr_auto] items-center justify-center gap-4 p-6 text-center transition-colors hover:bg-(--card-accent)"
    >
      {Logo ? (
        <Logo
          aria-hidden="true"
          className="shrink-0 text-foreground transition-colors group-hover:text-white max-w-full max-h-full w-full h-full"
        />
      ) : (
        <span
          aria-hidden="true"
          className="flex items-center justify-center text-2xl font-semibold text-muted-foreground transition-colors group-hover:text-white"
        >
          {initials(project.title)}
        </span>
      )}

      <p className="text-xs text-muted-foreground transition-colors group-hover:text-white/80">
        {project.year}
      </p>
    </ExternalLink>
  );
}
