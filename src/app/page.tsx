import { SidePane } from "@/components/site/side-pane";
import { About } from "@/components/site/about";
import { Experience } from "@/components/site/experience";
import { Work } from "@/components/site/work";
import { Testimonials } from "@/components/site/testimonials";
import { Contact } from "@/components/site/contact";
import { SiteFooter } from "@/components/site/footer";

export default function Home() {
  return (
    <div id="top" className="lg:flex">
      <SidePane />
      <main className="min-w-0 lg:flex-1">
        <div className="max-w-2xl px-6 py-16 sm:px-10 lg:px-16 lg:py-24">
          <div
            role="status"
            className="mb-14 flex items-center gap-3 rounded-lg border border-border bg-accent-subtle px-4 py-3 text-sm text-muted-foreground"
          >
            <span className="relative flex size-2 shrink-0">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-brand opacity-75" />
              <span className="relative inline-flex size-2 rounded-full bg-brand" />
            </span>
            <span>
              <span className="font-medium text-foreground">
                Work in progress
              </span>{" "}
              — a temporary site while the full portfolio comes together.
            </span>
          </div>
          <About />
          <Experience />
          <Work />
          <Testimonials />
          <Contact />
          <SiteFooter />
        </div>
      </main>
    </div>
  );
}
