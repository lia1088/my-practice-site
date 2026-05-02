import Link from "next/link";
import { cn } from "@/lib/utils";
import { Section, Container, Eyebrow, SectionHeading } from "@/components/atoms";

const workItems = [
  {
    title: "Desert Dash Ultra Marathon",
    category: "Race Production",
    participants: "12,000+",
    featured: true,
  },
  {
    title: "Phoenix City Festival",
    category: "Municipal Event",
    participants: "45,000+",
    featured: false,
  },
  {
    title: "Red Cross Charity Run",
    category: "Non-Profit",
    participants: "8,500+",
    featured: false,
  },
  {
    title: "Spartan Southwest Series",
    category: "Obstacle Race",
    participants: "22,000+",
    featured: false,
  },
];

function WorkCard({
  item,
  className,
  height,
}: {
  item: typeof workItems[0];
  className?: string;
  height: number;
}) {
  return (
    <div
      className={cn("relative overflow-hidden group cursor-pointer", className)}
      style={{ height, background: "#1a1a2a" }}
    >
      {/* Caption overlay */}
      <div className="absolute bottom-0 left-0 right-0 flex items-end justify-between" style={{ padding: "0 24px 24px 24px" }}>
        <div className="flex flex-col gap-3">
          <span className="text-[0.62rem] font-sans tracking-[0.14em] uppercase text-muted-foreground">
            {item.category}
          </span>
          <span className="font-heading font-black text-foreground" style={{ fontSize: "clamp(1.1rem, 1.6vw, 1.5rem)" }}>
            {item.title}
          </span>
        </div>
        <span className="text-[0.62rem] font-sans tracking-[0.14em] uppercase text-muted-foreground shrink-0 ml-8">
          {item.participants} participants
        </span>
      </div>
    </div>
  );
}

export function Work() {
  return (
    <Section>
      <Container>

        {/* Header */}
        <div className="flex flex-col gap-[24px]" style={{ marginBottom: 80 }}>
          <Eyebrow>Our work</Eyebrow>
          <SectionHeading>Events that move people.</SectionHeading>
        </div>

      </Container>

      {/* Full-width featured card */}
      <Container>
        <WorkCard item={workItems[0]} height={480} className="border border-border" />
      </Container>

      {/* Three supporting cards */}
      <Container>
        <div className="grid grid-cols-3 border-l border-b border-border mt-px">
          {workItems.slice(1).map((item) => (
            <WorkCard
              key={item.title}
              item={item}
              height={280}
              className="border-r border-t border-border"
            />
          ))}
        </div>
      </Container>

    </Section>
  );
}
