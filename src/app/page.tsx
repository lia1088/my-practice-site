import { Nav } from "@/components/nav";
import { Hero } from "@/components/hero";
import { TrustStrip } from "@/components/trust-strip";
import { Services } from "@/components/services";
import { Work } from "@/components/work";
import { EditorialBreak } from "@/components/editorial-break";
import { Process } from "@/components/process";
import { Testimonials } from "@/components/testimonials";
import { TestimonialsV4 } from "@/components/testimonials-v4";
export default function Home() {
  return (
    <>
      <Nav />
      <Hero />
      <main className="bg-background flex flex-col">
        <TrustStrip />
        <Services />
        <Work />
        <EditorialBreak />
        <Process />
        <Testimonials />
        <TestimonialsV4 />
      </main>
    </>
  );
}
