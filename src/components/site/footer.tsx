import { site } from "@/lib/content";

export function SiteFooter() {
  return (
    <footer className="border-t border-border/60 pt-10 pb-0 text-sm text-muted-foreground flex flex-col gap-2">
      <p>© {new Date().getFullYear()} · {site.name}</p>
      <p className="mt-1 leading-relaxed flex flex-col sm:flex-row sm:flex-wrap gap-y-1">
        <span>Built with{" "}
          <a href="https://nextjs.org" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">Next.js</a>,{" "}
          <a href="https://tailwindcss.com" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">Tailwind</a>, &amp;{" "}
          <a href="https://ui.shadcn.com" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">shadcn/ui</a>
        </span>
        <span className="sm:before:content-['·'] sm:before:mx-2">Typeset in{" "}
          <a href="https://fonts.google.com/specimen/Bitter" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">Bitter</a> &amp;{" "}
          <a href="https://fonts.google.com/specimen/Noto+Sans" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">Noto Sans</a>
        </span>
        <span className="sm:before:content-['·'] sm:before:mx-2">Deployed on{" "}
          <a href="https://vercel.com" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">Vercel</a>.
        </span>
      </p>
    </footer>
  );
}
