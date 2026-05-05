import React from "react";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Section, Container, Eyebrow, SectionHeading } from "@/components/atoms";

const workItems = [
  {
    title: "Desert Dash Ultra Marathon",
    category: "Race Production",
    participants: "12,000+",
    photo: "/esw-01.avif",
    featured: true,
  },
  {
    title: "Big Star Frisco",
    category: "Municipal Event",
    participants: "45,000+",
    photo: "/esw-03.avif",
    featured: false,
  },
  {
    title: "Community Charity Walk",
    category: "Non-Profit",
    participants: "8,500+",
    photo: "/esw-05.avif",
    featured: false,
  },
  {
    title: "Cycling Event Series",
    category: "Endurance",
    participants: "22,000+",
    photo: "/esw-04.avif",
    featured: false,
  },
];

function WorkCard({
  item,
  className,
  height,
  square,
  style,
}: {
  item: typeof workItems[0];
  className?: string;
  height?: string | number;
  square?: boolean;
  style?: React.CSSProperties;
}) {
  const baseStyle = square ? { aspectRatio: "1 / 1" } : height ? { height } : {};
  return (
    <div
      className={cn("relative overflow-hidden group cursor-pointer", className)}
      style={{ ...baseStyle, ...style }}
    >
      <Image src={item.photo} alt={item.title} fill className="object-cover object-center transition-transform duration-700 group-hover:scale-105" sizes="(max-width: 768px) 100vw, 50vw" />
      <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(0,0,0,0.92) 0%, rgba(0,0,0,0.6) 40%, rgba(0,0,0,0.15) 70%, transparent 100%)" }} />

      {/* Caption */}
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
        <WorkCard item={workItems[0]} className="border border-border" style={{ aspectRatio: "3 / 1" }} />
      </Container>

      {/* Three supporting cards */}
      <Container>
        <div className="grid grid-cols-3 border-l border-b border-border mt-px">
          {workItems.slice(1).map((item) => (
            <WorkCard
              key={item.title}
              item={item}
              square
              className="border-r border-t border-border"
            />
          ))}
        </div>
      </Container>

    </Section>
  );
}
