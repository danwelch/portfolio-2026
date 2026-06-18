import { SiteHeader } from "@/components/site/header";
import { Hero } from "@/components/site/hero";
import { About } from "@/components/site/about";
import { Experience } from "@/components/site/experience";
import { Work } from "@/components/site/work";
import { Testimonials } from "@/components/site/testimonials";
import { Contact } from "@/components/site/contact";
import { SiteFooter } from "@/components/site/footer";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main className="flex-1">
        <Hero />
        <About />
        <Experience />
<Work />
        <Testimonials />
        <Contact />
      </main>
      <SiteFooter />
    </>
  );
}
