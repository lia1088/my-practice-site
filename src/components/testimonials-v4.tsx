import Image from "next/image";
import { Section, Container, Eyebrow, SectionHeading } from "@/components/atoms";

const stats = [
  { value: "50K+", label: "Attendees at Heart Walk 2023", client: "American Heart Association" },
  { value: "$2.4M", label: "Raised at charity events we produced", client: "Susan G. Komen" },
  { value: "Zero", label: "Safety incidents across 200+ events", client: "City of Phoenix" },
  { value: "3×", label: "Clients who have renewed 3+ consecutive years", client: "YMCA" },
];

const testimonials = [
  {
    quote: "Managing our 50,000+ person Heart Walk is no small feat and they execute flawlessly. Extremely organized, detail oriented, efficient and productive.",
    name: "Ashley B.",
    title: "American Heart Association",
  },
  {
    quote: "They know exactly what it takes to produce and execute a top-notch event. They listen to your needs, identify creative solutions and make ideas come to fruition.",
    name: "Elizabeth C.",
    title: "Genesis Women's Shelter & Support",
  },
];

function QuoteCard({ testimonial }: { testimonial: typeof testimonials[0] }) {
  return (
    <div className="flex flex-col justify-between border border-border h-full" style={{ background: "#0e0e1a" }}>
      {/* Top: photo + quote */}
      <div className="flex h-full">
        {/* Photo */}
        <div className="relative shrink-0 overflow-hidden" style={{ width: "33%" }}>
          <Image src="/esw-07.avif" alt="" fill className="object-cover object-center" sizes="20vw" />
        </div>

        {/* Quote content */}
        <div className="flex flex-col justify-between flex-1" style={{ padding: "40px" }}>
          <p className="text-body-sm text-foreground leading-relaxed">
            "{testimonial.quote}"
          </p>

          <div className="flex flex-col gap-4" style={{ marginTop: 32 }}>
            {/* Logo placeholder */}
            <div style={{ width: 80, height: 24, background: "#2a2a3a" }} />

            <div className="flex items-end justify-between">
              <div className="flex flex-col gap-1">
                <span className="font-heading font-bold text-foreground text-sm">{testimonial.name}</span>
                <span className="text-[0.65rem] font-sans tracking-[0.12em] uppercase text-muted-foreground">{testimonial.title}</span>
              </div>
              <span className="text-foreground text-lg">→</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function StatCard({ stat, shade }: { stat: typeof stats[0]; shade: string }) {
  return (
    <div className="flex flex-col justify-between border border-border h-full" style={{ padding: "40px", background: shade }}>
      <div>
        <div
          className="font-heading font-bold"
          style={{ fontSize: "clamp(2.4rem, 4vw, 3.5rem)", lineHeight: 1, color: "var(--brand-primary)" }}
        >
          {stat.value}
        </div>
        <div className="border-t border-foreground/20" style={{ marginTop: 16, paddingTop: 16 }}>
          <span className="text-[0.72rem] font-sans tracking-[0.12em] uppercase text-muted-foreground" style={{ lineHeight: 1 }}>
            {stat.label}
          </span>
        </div>
      </div>

      <div className="flex items-end justify-between" style={{ marginTop: 32 }}>
        {/* Logo placeholder */}
        <div style={{ width: 72, height: 20, background: "rgba(255,255,255,0.15)" }} />
        <span className="text-foreground text-lg">→</span>
      </div>
    </div>
  );
}

export function TestimonialsV4() {
  const shades = ["#1a1a2e", "#16213e", "#1a1a2a", "#0f0f1e"];

  return (
    <Section>
      <Container>

        {/* Header */}
        <div className="flex flex-col gap-[24px]" style={{ marginBottom: 80 }}>
          <Eyebrow>What clients say</Eyebrow>
          <SectionHeading>Trusted by the organizations that matter.</SectionHeading>
        </div>

        {/* Row 1: wide quote + 2 stat cards */}
        <div className="grid grid-cols-12" style={{ gap: 24 }}>
          <div className="col-span-6" style={{ minHeight: 300 }}>
            <QuoteCard testimonial={testimonials[0]} />
          </div>
          <div className="col-span-3">
            <StatCard stat={stats[0]} shade={shades[0]} />
          </div>
          <div className="col-span-3">
            <StatCard stat={stats[1]} shade={shades[1]} />
          </div>
        </div>

        {/* Row 2: 2 stat cards + wide quote */}
        <div className="grid grid-cols-12" style={{ gap: 24, marginTop: 24 }}>
          <div className="col-span-3">
            <StatCard stat={stats[2]} shade={shades[2]} />
          </div>
          <div className="col-span-3">
            <StatCard stat={stats[3]} shade={shades[3]} />
          </div>
          <div className="col-span-6" style={{ minHeight: 300 }}>
            <QuoteCard testimonial={testimonials[1]} />
          </div>
        </div>

      </Container>
    </Section>
  );
}
