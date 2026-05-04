import { Section, Container, Eyebrow, SectionHeading } from "@/components/atoms";

const testimonials = [
  {
    quote: "We love working with the ESW team! They are extremely organized, detail oriented, efficient and productive. Managing our 50,000+ person Heart Walk is no small feat and they execute flawlessly.",
    name: "Ashley B.",
    title: "American Heart Association",
  },
  {
    quote: "The folks at Event Southwest are the best in the business. They know exactly what it takes to produce and execute a top-notch event in a competitive field. They listen to your needs, identify creative solutions and make ideas come to fruition.",
    name: "Elizabeth C.",
    title: "Genesis Women's Shelter & Support",
  },
  {
    quote: "Our company hired Event Southwest to help us with two of our fall events and we couldn't have been more pleased! What was most impressive was their expertise and willingness to help us problem solve on the spot.",
    name: "Lauren S.",
    title: "SBG Hospitality",
  },
];

// V3 — Featured large quote + two smaller quotes below
export function TestimonialsV3() {
  return (
    <Section>
      <Container>

        <div className="flex flex-col gap-[24px]" style={{ marginBottom: 80 }}>
          <Eyebrow>What clients say</Eyebrow>
          <SectionHeading>Trusted by the organizations that matter.</SectionHeading>
        </div>

        {/* Featured quote */}
        <div className="border border-border" style={{ padding: "64px 48px" }}>
          <p
            className="font-heading font-black text-foreground"
            style={{ fontSize: "clamp(1.8rem, 3vw, 2.8rem)", lineHeight: 1.05, letterSpacing: 0, maxWidth: "80%" }}
          >
            "{testimonials[0].quote}"
          </p>
          <div className="flex items-center gap-6" style={{ marginTop: 48 }}>
            <div className="h-px flex-1 bg-border" />
            <span className="font-heading font-black text-foreground text-sm">{testimonials[0].name}</span>
            <span className="text-[0.68rem] font-sans tracking-[0.12em] uppercase text-muted-foreground">{testimonials[0].title}</span>
          </div>
        </div>

        {/* Two smaller quotes */}
        <div className="grid grid-cols-2 border-l border-b border-r border-border mt-px">
          {testimonials.slice(1).map((t, i) => (
            <div
              key={t.name}
              className={i === 0 ? "border-r border-border" : ""}
              style={{ padding: "40px 40px 48px" }}
            >
              <p className="text-body-sm text-muted-foreground leading-relaxed">
                "{t.quote}"
              </p>
              <div className="flex flex-col gap-1" style={{ marginTop: 32 }}>
                <span className="font-heading font-black text-foreground text-sm">{t.name}</span>
                <span className="text-[0.68rem] font-sans tracking-[0.12em] uppercase text-muted-foreground">{t.title}</span>
              </div>
            </div>
          ))}
        </div>

      </Container>
    </Section>
  );
}
