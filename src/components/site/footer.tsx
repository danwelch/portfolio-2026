import { site } from "@/lib/content";

export function SiteFooter() {
  return (
    <footer className="border-t border-border/60 py-10 text-sm text-muted-foreground">
      <p>
        © {new Date().getFullYear()} {site.name}. Temporary site — full portfolio
        in progress.
      </p>
      <p className="mt-1 text-xs font-medium uppercase tracking-[0.14em] text-subtle">
        Built with Next.js + Tailwind
      </p>
    </footer>
  );
}
