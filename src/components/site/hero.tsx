import { ArrowDown, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/site/section";
import { GitHubIcon, LinkedInIcon } from "@/components/icons";
import { site } from "@/lib/content";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      {/* faint grid + glow backdrop */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.4] [background-image:linear-gradient(to_right,var(--border)_1px,transparent_1px),linear-gradient(to_bottom,var(--border)_1px,transparent_1px)] [background-size:64px_64px] [mask-image:radial-gradient(ellipse_at_top,black,transparent_70%)]"
      />

      <Container className="flex min-h-[calc(100svh-4rem)] flex-col justify-center py-20">
        <span className="inline-flex w-fit items-center gap-2 rounded-full border border-border bg-card/60 px-3.5 py-1.5 font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground">
          <span className="relative flex size-2">
            <span className="absolute inline-flex size-full animate-ping rounded-full bg-brand opacity-75" />
            <span className="relative inline-flex size-2 rounded-full bg-brand" />
          </span>
          New portfolio — under construction
        </span>

        <h1 className="mt-8 text-balance font-heading text-5xl font-medium leading-[0.95] tracking-tight sm:text-7xl lg:text-8xl">
          Dan Welch
        </h1>

        <p className="mt-6 max-w-2xl text-balance text-xl leading-snug text-foreground/90 sm:text-2xl">
          Senior Software Engineer building{" "}
          <span className="font-heading italic text-brand">design systems</span>{" "}
          and the front-end architecture teams rely on.
        </p>

        <p className="mt-5 max-w-xl text-pretty leading-relaxed text-muted-foreground">
          17+ years shipping scalable platforms in React, Next.js, and
          TypeScript. The full portfolio — with case studies and project
          deep-dives — is on its way. In the meantime, here&apos;s the short
          version.
        </p>

        <div className="mt-9 flex flex-wrap items-center gap-3">
          <Button asChild size="lg">
            <a href="#work">
              View work
              <ArrowDown className="size-4" />
            </a>
          </Button>
          <Button asChild size="lg" variant="ghost">
            <a href="#contact">Get in touch</a>
          </Button>

          <div className="mx-1 hidden h-6 w-px bg-border sm:block" />

          <div className="flex items-center gap-1">
            <Button asChild size="icon" variant="ghost" aria-label="GitHub">
              <a href={site.socials.github} target="_blank" rel="noopener noreferrer">
                <GitHubIcon className="size-5" />
              </a>
            </Button>
            <Button asChild size="icon" variant="ghost" aria-label="LinkedIn">
              <a href={site.socials.linkedin} target="_blank" rel="noopener noreferrer">
                <LinkedInIcon className="size-5" />
              </a>
            </Button>
          </div>
        </div>

        <div className="mt-12 flex items-center gap-2 font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground">
          <MapPin className="size-3.5" />
          {site.location}
        </div>
      </Container>
    </section>
  );
}
