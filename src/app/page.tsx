import { SidePane } from "@/components/site/side-pane";
import { About } from "@/components/site/about";
import { Experience } from "@/components/site/experience";
import { Work } from "@/components/site/work";
import { Testimonials } from "@/components/site/testimonials";
import { Contact } from "@/components/site/contact";
import { SiteFooter } from "@/components/site/footer";

export default function Home() {
  return (
    <div
      id="top"
      className="mx-auto flex max-w-6xl flex-col px-6 sm:px-10 lg:flex-row lg:gap-16 lg:px-12"
    >
      <SidePane />
      <main className="min-w-0 lg:flex-1 lg:py-24">
        <About />
        <Experience />
        <Work />
        <Testimonials />
        <Contact />
        <SiteFooter />
      </main>
    </div>
  );
}
