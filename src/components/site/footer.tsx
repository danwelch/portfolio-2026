import { Container } from "@/components/site/section";
import { site } from "@/lib/content";

export function SiteFooter() {
  return (
    <footer className="border-t border-border/60 py-10">
      <Container className="flex flex-col items-center justify-between gap-4 text-sm text-muted-foreground sm:flex-row">
        <p>
          © {new Date().getFullYear()} {site.name}. Temporary site — full
          portfolio in progress.
        </p>
        <p className="font-mono text-xs uppercase tracking-[0.15em]">
          Built with Next.js + Tailwind
        </p>
      </Container>
    </footer>
  );
}
