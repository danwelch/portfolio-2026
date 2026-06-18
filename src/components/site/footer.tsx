import { Container } from "@/components/site/section";
import { site } from "@/lib/content";

export function SiteFooter() {
  return (
    <footer className="border-t border-border-dark bg-dark py-10 text-slate-400">
      <Container className="flex flex-col items-center justify-between gap-4 text-sm sm:flex-row">
        <p>
          © {new Date().getFullYear()} {site.name}. Temporary site — full
          portfolio in progress.
        </p>
        <p className="text-xs font-medium uppercase tracking-[0.14em] text-subtle">
          Built with Next.js + Tailwind
        </p>
      </Container>
    </footer>
  );
}
