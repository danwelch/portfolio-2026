import { ArrowUpRight, Download, Mail } from "lucide-react";
import { Section } from "@/components/site/section";
import { Button } from "@/components/ui/button";
import { GitHubIcon, LinkedInIcon } from "@/components/icons";
import { site } from "@/lib/content";

export function Contact() {
  return (
    <Section id="contact" className="bg-dark text-white">
      <div className="flex items-center gap-2.5 text-xs font-medium uppercase tracking-[0.18em] text-brand">
        <span className="tabular-nums">06</span>
        <span className="h-1 w-1 rounded-full bg-brand/50" />
        <span className="text-subtle">Contact</span>
      </div>

      <h2 className="mt-4 text-balance text-4xl font-semibold tracking-tight sm:text-6xl">
        Let&apos;s build something
        <span className="text-brand">.</span>
      </h2>
      <p className="mt-5 max-w-xl text-pretty text-lg leading-relaxed text-slate-300">
        I&apos;m currently exploring new Design Systems Architect and senior
        front-end roles. The fastest way to reach me is email — I read
        everything.
      </p>

      <a
        href={`mailto:${site.email}`}
        className="group mt-8 inline-flex items-center gap-3 text-2xl font-medium tracking-tight text-white underline-offset-8 hover:underline sm:text-3xl"
      >
        <Mail className="size-6 text-brand" />
        {site.email}
        <ArrowUpRight className="size-6 text-subtle transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
      </a>

      <div className="mt-10 flex flex-wrap items-center gap-3">
        <Button
          asChild
          variant="outline"
          className="border-border-dark bg-transparent text-white hover:bg-white/10 hover:text-white"
        >
          <a href={site.socials.github} target="_blank" rel="noopener noreferrer">
            <GitHubIcon className="size-4" />
            GitHub
          </a>
        </Button>
        <Button
          asChild
          variant="outline"
          className="border-border-dark bg-transparent text-white hover:bg-white/10 hover:text-white"
        >
          <a href={site.socials.linkedin} target="_blank" rel="noopener noreferrer">
            <LinkedInIcon className="size-4" />
            LinkedIn
          </a>
        </Button>
        <Button
          asChild
          className="bg-brand text-white hover:bg-accent-emphasis"
        >
          <a href={site.resume} target="_blank" rel="noopener noreferrer">
            <Download className="size-4" />
            Resume (PDF)
          </a>
        </Button>
      </div>
    </Section>
  );
}
