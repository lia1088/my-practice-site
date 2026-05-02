import { Section, Container, Eyebrow, SectionHeading } from "@/components/atoms";

const steps = [
  {
    number: "01",
    title: "[Step Title]",
    desc: "[Short description of what happens in this phase of the process.]",
  },
  {
    number: "02",
    title: "[Step Title]",
    desc: "[Short description of what happens in this phase of the process.]",
  },
  {
    number: "03",
    title: "[Step Title]",
    desc: "[Short description of what happens in this phase of the process.]",
  },
  {
    number: "04",
    title: "[Step Title]",
    desc: "[Short description of what happens in this phase of the process.]",
  },
];

export function Process() {
  return (
    <Section>
      <Container>

        {/* Header */}
        <div className="flex flex-col gap-[24px]" style={{ marginBottom: 80 }}>
          <Eyebrow>How we work</Eyebrow>
          <SectionHeading>A process built for scale.</SectionHeading>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-4 border border-border">
          {steps.map((step, i) => (
            <div
              key={step.number}
              className={i < steps.length - 1 ? "border-r border-border" : ""}
              style={{ padding: "40px 32px 48px" }}
            >
              {/* Ghost number */}
              <div
                aria-hidden="true"
                className="font-heading font-black select-none"
                style={{ fontSize: "4.5rem", color: "#ffffff", opacity: 0.06, letterSpacing: 0, lineHeight: 1 }}
              >
                {step.number}
              </div>

              <div className="flex flex-col gap-4" style={{ marginTop: 32 }}>
                <div className="font-heading font-black text-foreground" style={{ fontSize: "clamp(1rem, 1.2vw, 1.2rem)" }}>
                  {step.title}
                </div>
                <p className="text-body-sm text-muted-foreground">
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

      </Container>
    </Section>
  );
}
