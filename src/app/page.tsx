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
