import { Nav } from "@/components/nav";
import { Hero } from "@/components/hero";
import { TrustStrip } from "@/components/trust-strip";
import { WhatWeDo } from "@/components/what-we-do";
import { ServicesSection } from "@/components/services-section";
import { CaseStudies } from "@/components/case-studies";
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
      <Hero />
      <main className="bg-background flex flex-col">
        <TrustStrip />
        <WhatWeDo />
        <ServicesSection />
        <CaseStudies />
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
