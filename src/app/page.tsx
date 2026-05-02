import { Nav } from "@/components/nav";
import { Hero } from "@/components/hero";
import { TrustStrip } from "@/components/trust-strip";
import { Services } from "@/components/services";
export default function Home() {
  return (
    <>
      <Nav />
      <Hero />
      <main className="bg-background flex flex-col">
        <TrustStrip />
        <Services />
      </main>
    </>
  );
}
