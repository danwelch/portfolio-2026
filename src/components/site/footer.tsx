import type { ComponentProps } from "react";
import { ExternalLink } from "@/components/ui/external-link";
import { cn } from "@/lib/utils";
import { site } from "@/lib/content";

function FooterLink({ className, ...props }: ComponentProps<"a">) {
  return (
    <ExternalLink
      {...props}
      className={cn("hover:text-foreground transition-colors", className)}
    />
  );
}

export function SiteFooter() {
  return (
    <footer className="border-t border-border/60 pt-10 pb-0 text-sm text-muted-foreground flex flex-col gap-2">
      <p>© {new Date().getFullYear()} · {site.name}</p>
      <p className="mt-1 leading-relaxed flex flex-col sm:flex-row sm:flex-wrap gap-y-1">
        <span>Built with{" "}
          <FooterLink href="https://nextjs.org">Next.js</FooterLink>,{" "}
          <FooterLink href="https://tailwindcss.com">Tailwind</FooterLink>, &amp;{" "}
          <FooterLink href="https://ui.shadcn.com">shadcn/ui</FooterLink>
        </span>
        <span className="sm:before:content-['·'] sm:before:mx-2">Typeset in{" "}
          <FooterLink href="https://fonts.google.com/specimen/Bitter">Bitter</FooterLink> &amp;{" "}
          <FooterLink href="https://fonts.google.com/specimen/Inter">Inter</FooterLink>
        </span>
        <span className="sm:before:content-['·'] sm:before:mx-2">Deployed on{" "}
          <FooterLink href="https://vercel.com">Vercel</FooterLink>.
        </span>
      </p>
    </footer>
  );
}
