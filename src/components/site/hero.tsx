import { ArrowDown, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/site/section";
import { GitHubIcon, LinkedInIcon } from "@/components/icons";
import { site } from "@/lib/content";

export function Hero() {
  return (
    <section id="top" className="relative">
      <Container className="flex min-h-[calc(100svh-4rem)] flex-col justify-center py-24">
        <span className="inline-flex w-fit items-center gap-2.5 rounded-full border border-border bg-surface px-3.5 py-1.5 text-xs font-medium uppercase tracking-[0.14em] text-muted-foreground shadow-sm">
          <span className="relative flex size-2">
            <span className="absolute inline-flex size-full animate-ping rounded-full bg-brand opacity-75" />
            <span className="relative inline-flex size-2 rounded-full bg-brand" />
          </span>
          New portfolio — under construction
        </span>

        <h1 className="mt-8 text-balance text-6xl font-semibold leading-[0.98] tracking-tight sm:text-7xl lg:text-8xl">
          Dan Welch
        </h1>

        <p className="mt-6 max-w-2xl text-balance text-2xl font-light leading-snug text-foreground sm:text-3xl">
          <span className="font-normal text-brand">Design Systems Architect</span>{" "}
          crafting the components, tokens, and tooling that product teams build
          on.
        </p>

        <p className="mt-6 max-w-xl text-pretty text-base leading-relaxed text-muted-foreground">
          17+ years architecting design systems and the front-end platforms
          teams build on. The full portfolio — with case studies and project
          deep-dives — is on its way. In the meantime, here&apos;s the short
          version.
        </p>

        <div className="mt-10 flex flex-wrap items-center gap-3">
          <Button asChild size="lg">
            <a href="#work">
              View work
              <ArrowDown className="size-4" />
            </a>
          </Button>
          <Button asChild size="lg" variant="outline">
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

        <div className="mt-14 flex items-center gap-2 text-xs font-medium uppercase tracking-[0.14em] text-subtle">
          <MapPin className="size-3.5" />
          {site.location}
        </div>
      </Container>
    </section>
  );
}
