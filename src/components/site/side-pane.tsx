"use client";

import { useEffect, useState } from "react";
import { Download } from "lucide-react";
import { GitHubIcon, LinkedInIcon } from "@/components/icons";
import { NavLink } from "@/components/site/nav-link";
import { ExternalLink } from "@/components/ui/external-link";
import { nav, site } from "@/lib/content";

export function SidePane() {
  const [active, setActive] = useState(nav[0].href.slice(1));

  useEffect(() => {
    const ids = nav.map((n) => n.href.slice(1));

    const onScroll = () => {
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
    <header className="bg-dark text-slate-300 lg:w-2/5 lg:max-w-108 lg:shrink-0">
      <div className="flex flex-col justify-between gap-12 px-6 py-8 sm:px-10 lg:sticky lg:top-0 lg:h-screen lg:max-h-screen lg:gap-0 lg:px-8 lg:py-14">
        <div>
          {/* Name / role / bio + right-side tablet nav */}
          <div className="flex items-start justify-between gap-8">
            <div className="max-w-94">
              <h1 className="font-display text-4xl font-semibold tracking-tight text-white sm:text-5xl">
                <a href="#top" className="">
                  Dan Welch
                </a>
              </h1>
              <h2 className="mt-3 text-lg font-sans uppercase font-semibold tracking-wide leading-none text-brand-on-dark">
                Design Systems Architect
              </h2>
              <p className="mt-4 text-balance leading-relaxed text-slate-300">
                17+ years building scalable front-end platforms, design systems, and
                developer experiences.
              </p>
            </div>

            {/* Wide full-width header only — right-aligned, lines on right, no active state */}
            <nav className="hidden shrink-0 sm:block lg:hidden" aria-label="In-page">
              <ul className="space-y-1">
                {nav.map((item) => (
                  <li key={item.href}>
                    <NavLink href={item.href} label={item.label} lineSide="right" />
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Sidebar nav — below bio, lines on left, active state */}
          <nav className="mt-16 hidden lg:block" aria-label="In-page">
            <ul className="space-y-1">
              {nav.map((item) => (
                <li key={item.href}>
                  <NavLink
                    href={item.href}
                    label={item.label}
                    active={active === item.href.slice(1)}
                  />
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div>
          <div className="flex items-center gap-5">
            <ExternalLink
              href={site.socials.github}
              aria-label="GitHub"
              className="p-2 -m-2 text-slate-400 transition-colors hover:text-white"
            >
              <GitHubIcon className="size-5" />
            </ExternalLink>
            <ExternalLink
              href={site.socials.linkedin}
              aria-label="LinkedIn"
              className="p-2 -m-2 text-slate-400 transition-colors hover:text-white"
            >
              <LinkedInIcon className="size-5" />
            </ExternalLink>
            <span className="h-4 w-px bg-white/15" />
            <ExternalLink
              href={site.resume}
              className="inline-flex items-center gap-1.5 rounded-xs bg-slate-400 px-2 py-1.5 text-xs font-semibold text-dark transition-colors hover:bg-white uppercase tracking-wide"
            >
              Résumé
              <Download className="size-3" />
            </ExternalLink>
          </div>
        </div>
      </div>
    </header>
  );
}
