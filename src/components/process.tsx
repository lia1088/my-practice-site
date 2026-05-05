import { Section, Container, Eyebrow, SectionHeading } from "@/components/atoms";

const steps = [
  {
    number: "01",
    title: "Visioning & Needs Assessment",
    desc: "We discuss your vision and document exactly which tasks we execute, which you handle, and what we coordinate together.",
  },
  {
    number: "02",
    title: "Planning & Coordination",
    desc: "We manage all vendors, timelines, and logistics — whether executing directly or overseeing your preferred partners.",
  },
  {
    number: "03",
    title: "Event Execution",
    desc: "Single point of accountability. We manage multi-stakeholder coordination across vendors, public safety, volunteers, and more.",
  },
  {
    number: "04",
    title: "Post-Event Review",
    desc: "We debrief, document outcomes, and capture learnings to make the next event better — and easier to produce.",
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
                className="font-heading font-bold select-none"
                style={{ fontSize: "4.5rem", color: "#ffffff", letterSpacing: 0, lineHeight: 1 }}
              >
                {step.number}
              </div>

              <div className="flex flex-col gap-4" style={{ marginTop: 32 }}>
                <div className="font-heading font-bold text-foreground" style={{ fontSize: "clamp(1rem, 1.2vw, 1.2rem)" }}>
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
