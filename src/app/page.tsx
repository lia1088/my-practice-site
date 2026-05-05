import { Nav } from "@/components/nav";
import { TrustStrip } from "@/components/trust-strip";
import { WhatWeDo } from "@/components/what-we-do";
import { ServicesSection } from "@/components/services-section";
import { Hero } from "@/components/hero";
import { ProofSection } from "@/components/proof-section";
import { Process } from "@/components/process";
import { Testimonials } from "@/components/testimonials";
import { FAQ } from "@/components/faq";
import { CtaNap } from "@/components/cta-nap";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main className="bg-background flex flex-col">
        <TrustStrip />
        <WhatWeDo />
        <ServicesSection />
        <Hero />
        <ProofSection />
        <Process />
        <Testimonials />
        <FAQ />
        <CtaNap />
        <Footer />
      </main>
    </>
  );
}
