import { PageIntro } from "@/components/page-intro";
import { Nav } from "@/components/nav";
import { Hero } from "@/components/hero";
import { TrustStrip } from "@/components/trust-strip";
import { Services } from "@/components/services";
import { Work } from "@/components/work";
import { WorkV2 } from "@/components/work-v2";
import { EditorialBreak } from "@/components/editorial-break";
import { Process } from "@/components/process";
import { Testimonials } from "@/components/testimonials";
import { TestimonialsV4 } from "@/components/testimonials-v4";
import { TestimonialsV5 } from "@/components/testimonials-v5";
import { FAQ } from "@/components/faq";
import { CtaNap } from "@/components/cta-nap";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <>
      <Nav />
      <PageIntro />
      <Hero />
      <main className="bg-background flex flex-col">
        <TrustStrip />
        <Services />
        <Work />
        <WorkV2 />
        <EditorialBreak />
        <Process />
        <Testimonials />
        <TestimonialsV4 />
        <TestimonialsV5 />
        <FAQ />
        <CtaNap />
        <Footer />
      </main>
    </>
  );
}
