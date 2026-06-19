import { site } from "@/lib/content";

export function SiteFooter() {
  return (
    <footer className="border-t border-border/60 pt-10 pb-0 text-sm text-muted-foreground flex flex-col gap-2">
      <p>© {new Date().getFullYear()} · {site.name}</p>
      <p className="mt-1 leading-relaxed">
        Built with{" "}
        <a href="https://nextjs.org" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">Next.js</a>,{" "}
        <a href="https://tailwindcss.com" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">Tailwind</a>, &amp;{" "}
        <a href="https://ui.shadcn.com" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">shadcn/ui</a>
        {"  ·  "}Typeset in{" "}
        <a href="https://fonts.google.com/specimen/Bitter" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">Bitter</a> &amp;{" "}
        <a href="https://fonts.google.com/specimen/Noto+Sans" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">Noto Sans</a>
        {"  ·  "}Deployed on{" "}
        <a href="https://vercel.com" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">Vercel</a>.
      </p>
    </footer>
  );
}
