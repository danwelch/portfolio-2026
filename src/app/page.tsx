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
      <a
        href="#main"
        className="fixed top-4 left-4 z-50 -translate-y-20 rounded-xs bg-brand-on-dark px-4 py-2 text-sm font-semibold whitespace-nowrap text-dark opacity-0 transition focus:translate-y-0 focus:opacity-100"
      >
        Skip to content
      </a>
      <SidePane />
      <div className="min-w-0 lg:flex-1">
        <div className="@container max-w-4xl px-6 py-16 sm:px-10 lg:px-8 lg:pt-29.5 lg:pb-14">
          <main id="main" tabIndex={-1} className="outline-none">
            <About />
            <Experience />
            <Work />
            <Testimonials />
            <Contact />
          </main>
          <SiteFooter />
        </div>
      </div>
    </div>
  );
}
