import { Section, Container, Eyebrow } from "@/components/atoms";

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

// V2 — Large editorial quote, one at a time stacked as rows
export function TestimonialsV2() {
  return (
    <Section>
      <Container>

        <div className="flex flex-col gap-[24px]" style={{ marginBottom: 80 }}>
          <Eyebrow>What clients say</Eyebrow>
        </div>

        <div className="flex flex-col">
          {testimonials.map((t, i) => (
            <div
              key={t.name}
              className="grid grid-cols-12 gap-6 border-t border-border"
              style={{ paddingTop: 48, paddingBottom: 48 }}
            >
              {/* Author — 3 cols */}
              <div className="col-span-3 flex flex-col gap-2 pt-1">
                <span className="font-heading font-black text-foreground">{t.name}</span>
                <span className="text-[0.68rem] font-sans tracking-[0.12em] uppercase text-muted-foreground">{t.title}</span>
              </div>

              {/* Quote — 8 cols */}
              <div className="col-span-8 col-start-4">
                <p
                  className="font-heading font-black text-foreground"
                  style={{ fontSize: "clamp(1.4rem, 2.2vw, 2rem)", lineHeight: 1.1, letterSpacing: 0 }}
                >
                  "{t.quote}"
                </p>
              </div>
            </div>
          ))}
          <div className="border-t border-border" />
        </div>

      </Container>
    </Section>
  );
}
