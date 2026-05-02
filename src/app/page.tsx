import { Eyebrow, SectionHeading } from "@/components/atoms";
import { Nav } from "@/components/nav";

export default function Home() {
  return (
    <>
    <Nav />
    <main className="min-h-screen bg-background p-16 pt-32 flex flex-col gap-12">

      {/* Font + token verification */}
      <section className="flex flex-col gap-6">
        <Eyebrow>Phase 2 — Design System Check</Eyebrow>

        <h1
          className="font-heading font-black text-foreground"
          style={{ fontSize: "clamp(2.8rem, 7vw, 5.8rem)", letterSpacing: "0" }}
        >
          Event South West
        </h1>

        <SectionHeading>The best kept secret in event management.</SectionHeading>

        <p className="font-sans text-muted-foreground text-sm max-w-lg leading-relaxed">
          Body text check — DM Mono at small size. Specializing in large-scale public events
          for non-profits, municipalities, brands, companies, and agencies.
        </p>
      </section>

      {/* Accent color check */}
      <section className="flex flex-col gap-4">
        <Eyebrow accent>01 — Accent Active</Eyebrow>
        <Eyebrow>02 — Muted Inactive</Eyebrow>
      </section>

      {/* Card / border token check */}
      <section className="border border-border bg-card p-8 flex flex-col gap-2 max-w-sm">
        <span className="text-[0.6rem] font-mono tracking-widest uppercase text-muted-foreground">Card background</span>
        <span className="font-heading font-black text-2xl">Border token check</span>
      </section>

    </main>
    </>
  );
}
