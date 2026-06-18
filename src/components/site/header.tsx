import Link from "next/link";
import { Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/site/section";
import { nav, site } from "@/lib/content";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-md">
      <Container className="flex h-16 items-center justify-between gap-6">
        <Link
          href="#top"
          className="font-heading text-lg font-medium tracking-tight"
        >
          Dan Welch<span className="text-brand">.</span>
        </Link>

        <nav className="hidden items-center gap-7 text-sm text-muted-foreground md:flex">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="transition-colors hover:text-foreground"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <Button asChild size="sm" variant="outline" className="shrink-0">
          <a href={site.resume} target="_blank" rel="noopener noreferrer">
            <Download className="size-4" />
            Resume
          </a>
        </Button>
      </Container>
    </header>
  );
}
