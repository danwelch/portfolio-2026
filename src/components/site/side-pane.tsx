"use client";

import { useEffect, useState } from "react";
import { ArrowUpRight, MapPin } from "lucide-react";
import { GitHubIcon, LinkedInIcon } from "@/components/icons";
import { nav, site } from "@/lib/content";
import { cn } from "@/lib/utils";

export function SidePane() {
  const [active, setActive] = useState(nav[0].href.slice(1));

  useEffect(() => {
    const ids = nav.map((n) => n.href.slice(1));

    const onScroll = () => {
      // At the bottom of the page, the last (often short) section can't reach
      // the detection line — pin it active explicitly.
      const atBottom =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 4;
      if (atBottom) {
        setActive(ids[ids.length - 1]);
        return;
      }

      const threshold = window.innerHeight * 0.35;
      let current = ids[0];
      for (const id of ids) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= threshold) current = id;
      }
      setActive(current);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <header className="py-12 lg:sticky lg:top-0 lg:flex lg:h-screen lg:max-h-screen lg:w-[44%] lg:flex-col lg:justify-between lg:py-24">
      <div>
        <span className="inline-flex w-fit items-center gap-2.5 rounded-full border border-border bg-surface px-3 py-1 text-[0.7rem] font-medium uppercase tracking-[0.14em] text-muted-foreground shadow-sm">
          <span className="relative flex size-1.5">
            <span className="absolute inline-flex size-full animate-ping rounded-full bg-brand opacity-75" />
            <span className="relative inline-flex size-1.5 rounded-full bg-brand" />
          </span>
          Under construction
        </span>

        <h1 className="mt-6 font-display text-5xl font-semibold tracking-tight sm:text-6xl">
          <a href="#top" className="hover:text-brand">
            Dan Welch
          </a>
        </h1>
        <h2 className="mt-3 text-lg font-medium tracking-tight text-foreground">
          Design Systems Architect
        </h2>
        <p className="mt-4 max-w-xs text-pretty leading-relaxed text-muted-foreground">
          Front-of-the-front-end engineer crafting the components, tokens, and
          tooling teams build on.
        </p>

        <nav className="mt-16 hidden lg:block" aria-label="In-page">
          <ul className="space-y-1">
            {nav.map((item) => {
              const id = item.href.slice(1);
              const isActive = active === id;
              return (
                <li key={item.href}>
                  <a href={item.href} className="group flex items-center py-2">
                    <span
                      className={cn(
                        "mr-4 h-px transition-all duration-200",
                        isActive
                          ? "w-14 bg-brand"
                          : "w-7 bg-muted-foreground/40 group-hover:w-14 group-hover:bg-foreground",
                      )}
                    />
                    <span
                      className={cn(
                        "text-xs font-semibold uppercase tracking-[0.16em] transition-colors",
                        isActive
                          ? "text-foreground"
                          : "text-muted-foreground group-hover:text-foreground",
                      )}
                    >
                      {item.label}
                    </span>
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>

      <div className="mt-12 lg:mt-0">
        <div className="flex items-center gap-5">
          <a
            href={site.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-muted-foreground transition-colors hover:text-foreground"
          >
            <GitHubIcon className="size-5" />
          </a>
          <a
            href={site.socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-muted-foreground transition-colors hover:text-foreground"
          >
            <LinkedInIcon className="size-5" />
          </a>
          <span className="h-4 w-px bg-border" />
          <a
            href={site.resume}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-1 text-sm font-medium text-foreground"
          >
            Resume
            <ArrowUpRight className="size-4 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-brand" />
          </a>
        </div>
        <p className="mt-5 flex items-center gap-1.5 text-xs font-medium uppercase tracking-[0.14em] text-subtle">
          <MapPin className="size-3.5" />
          {site.location}
        </p>
      </div>
    </header>
  );
}
