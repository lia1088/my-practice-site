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

export function Testimonials() {
  return (
    <Section>
      <Container>

        {/* Header */}
        <div className="flex flex-col gap-[24px]" style={{ marginBottom: 80 }}>
          <Eyebrow>What clients say</Eyebrow>
          <SectionHeading>Trusted by the organizations that matter.</SectionHeading>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-3 border border-border">
          {testimonials.map((t, i) => (
            <div
              key={t.name}
              className={i < testimonials.length - 1 ? "border-r border-border" : ""}
              style={{ padding: "40px 32px 48px" }}
            >
<p className="text-body-sm text-foreground leading-relaxed flex-1">
                "{t.quote}"
              </p>

              <div className="flex flex-col gap-1" style={{ marginTop: 40 }}>
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
