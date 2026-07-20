import type { ComponentType, CSSProperties, SVGProps } from "react";
import { ExternalLink } from "@/components/ui/external-link";
import { cn } from "@/lib/utils";
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
  const darkOnAccent = project.onAccent === "dark";

  return (
    <ExternalLink
      href={project.url}
      aria-label={`${project.title}, ${project.year}`}
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
          className={cn(
            "shrink-0 text-foreground transition-colors max-w-full max-h-full w-full h-full",
            darkOnAccent ? "group-hover:text-dark" : "group-hover:text-white",
          )}
        />
      ) : (
        <span
          aria-hidden="true"
          className={cn(
            "flex items-center justify-center text-2xl font-semibold text-muted-foreground transition-colors",
            darkOnAccent ? "group-hover:text-dark" : "group-hover:text-white",
          )}
        >
          {initials(project.title)}
        </span>
      )}

      <p
        className={cn(
          "text-xs text-muted-foreground transition-colors",
          darkOnAccent ? "group-hover:text-dark/80" : "group-hover:text-white/80",
        )}
      >
        {project.year}
      </p>
    </ExternalLink>
  );
}
