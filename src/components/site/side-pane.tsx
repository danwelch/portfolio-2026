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
    <header className="bg-dark text-slate-300 lg:w-2/5 lg:max-w-[27rem] lg:shrink-0">
      <div className="flex flex-col justify-between gap-12 px-6 py-12 sm:px-10 lg:sticky lg:top-0 lg:h-screen lg:max-h-screen lg:gap-0 lg:px-12 lg:py-20">
        <div>
          <h1 className="font-display text-5xl font-semibold tracking-tight text-white sm:text-6xl">
            <a href="#top" className="transition-colors hover:text-brand">
              Dan Welch
            </a>
          </h1>
          <h2 className="mt-3 text-lg font-medium tracking-tight text-slate-100">
            Design Systems Architect
          </h2>
          <p className="mt-4 max-w-xs text-pretty leading-relaxed text-slate-400">
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
                            : "w-7 bg-slate-600 group-hover:w-14 group-hover:bg-slate-300",
                        )}
                      />
                      <span
                        className={cn(
                          "text-xs font-semibold uppercase tracking-[0.16em] transition-colors",
                          isActive
                            ? "text-white"
                            : "text-slate-500 group-hover:text-slate-200",
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

        <div>
          <div className="flex items-center gap-5">
            <a
              href={site.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="text-slate-400 transition-colors hover:text-white"
            >
              <GitHubIcon className="size-5" />
            </a>
            <a
              href={site.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-slate-400 transition-colors hover:text-white"
            >
              <LinkedInIcon className="size-5" />
            </a>
            <span className="h-4 w-px bg-white/15" />
            <a
              href={site.resume}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-1 text-sm font-medium text-white"
            >
              Resume
              <ArrowUpRight className="size-4 text-slate-400 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-brand" />
            </a>
          </div>
          <p className="mt-5 flex items-center gap-1.5 text-xs font-medium uppercase tracking-[0.14em] text-slate-500">
            <MapPin className="size-3.5" />
            {site.location}
          </p>
        </div>
      </div>
    </header>
  );
}
