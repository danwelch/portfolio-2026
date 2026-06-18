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
        <div className="max-w-4xl px-6 py-16 sm:px-10 lg:px-16 lg:py-24">
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
