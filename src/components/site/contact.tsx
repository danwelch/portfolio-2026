import { ArrowUpRight, Download, Mail } from "lucide-react";
import { Section } from "@/components/site/section";
import { Button } from "@/components/ui/button";
import { GitHubIcon, LinkedInIcon } from "@/components/icons";
import { site } from "@/lib/content";

export function Contact() {
  return (
    <Section id="contact" className="border-t border-border/60">
      <div className="flex items-center gap-3 font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
        <span className="text-brand">06</span>
        <span className="h-px w-8 bg-border" />
        <span>Contact</span>
      </div>

      <h2 className="mt-6 text-balance font-heading text-4xl font-medium tracking-tight sm:text-6xl">
        Let&apos;s build something
        <span className="text-brand">.</span>
      </h2>
      <p className="mt-5 max-w-xl text-pretty text-lg leading-relaxed text-muted-foreground">
        I&apos;m currently exploring new senior and staff front-end and design-systems
        roles. The fastest way to reach me is email — I read everything.
      </p>

      <a
        href={`mailto:${site.email}`}
        className="group mt-8 inline-flex items-center gap-3 font-heading text-2xl font-medium tracking-tight underline-offset-8 hover:underline sm:text-3xl"
      >
        <Mail className="size-6 text-brand" />
        {site.email}
        <ArrowUpRight className="size-6 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
      </a>

      <div className="mt-10 flex flex-wrap items-center gap-3">
        <Button asChild variant="outline">
          <a href={site.socials.github} target="_blank" rel="noopener noreferrer">
            <GitHubIcon className="size-4" />
            GitHub
          </a>
        </Button>
        <Button asChild variant="outline">
          <a href={site.socials.linkedin} target="_blank" rel="noopener noreferrer">
            <LinkedInIcon className="size-4" />
            LinkedIn
          </a>
        </Button>
        <Button asChild variant="outline">
          <a href={site.resume} target="_blank" rel="noopener noreferrer">
            <Download className="size-4" />
            Resume (PDF)
          </a>
        </Button>
      </div>
    </Section>
  );
}
