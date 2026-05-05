import Link from "next/link";
import Image from "next/image";
import { Container, Eyebrow, SectionHeading } from "@/components/atoms";

const eventTypes = [
  {
    title: "Concerts & Festivals",
    href: "#services",
    badge: "Live Events",
    description: "Multi-stage productions with crowd management, vendor coordination, and site design that holds up in front of thousands of people.",
    img: "/esw-01.avif",
  },
  {
    title: "Charity Walks",
    href: "#services",
    badge: "Charity Events",
    description: "Permitting, site logistics, volunteer coordination, and participant experience so the day reflects the mission.",
    img: "/esw-02.avif",
  },
  {
    title: "Runs & Road Races",
    href: "#services",
    badge: "Road Races",
    description: "Route permitting, USATF certification, race-day logistics, participant flow, and finish-line production.",
    img: "/ESW-Katy5K-2025-37.jpg",
  },
  {
    title: "Cycling Events",
    href: "#services",
    badge: "Rides",
    description: "Road closures, safety coordination, route logistics, and participant management across distances.",
    img: "/Dallas_Bike_Ride_2025-27.jpg",
  },
  {
    title: "Community Events",
    href: "#services",
    badge: "Civic & Community",
    description: "Parades, civic celebrations, and holiday programming at a scale most internal teams aren't built for.",
    img: "/EventSouthwest-BigStarFrisco-25-26.jpg",
  },
  {
    title: "Brand Activations",
    href: "#services",
    badge: "Brand & Experiential",
    description: "Permitting, site design, vendor management, and day-of oversight — giving production the quality the brand deserves.",
    img: "/ESW-JPMORGAN-2025-72.jpg",
  },
];

function BentoCard({
  event,
  showDescription = false,
  className = "",
}: {
  event: typeof eventTypes[0];
  showDescription?: boolean;
  className?: string;
}) {
  return (
    <Link
      href={event.href}
      className={`group relative overflow-hidden bg-card ${className}`}
      style={{ border: "3px solid var(--border)" }}
    >
      {/* Image */}
      <Image
        src={event.img}
        alt={event.title}
        fill
        className="object-cover transition-transform duration-700 group-hover:scale-105"
        sizes="(max-width: 768px) 100vw, 50vw"
        priority
      />

      {/* Base gradient — always on, darkens on hover */}
      <div
        className="absolute inset-0 transition-opacity duration-400"
        style={{ background: "linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.35) 55%, rgba(0,0,0,0.1) 100%)" }}
      />
      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/35 transition-colors duration-400" />

      {/* Content — slides up on hover, button reveals */}
      <div
        className="absolute bottom-0 left-0 right-0 flex flex-col gap-2 transition-transform duration-400 group-hover:-translate-y-3"
        style={{ padding: 24 }}
      >
        <h3 className="font-heading font-extrabold text-white capitalize leading-tight" style={{ fontSize: "clamp(1rem, 1.4vw, 1.3rem)" }}>
          {event.title}
        </h3>
        {showDescription && (
          <p className="text-sm text-white/70 leading-relaxed" style={{ maxWidth: "42ch" }}>
            {event.description}
          </p>
        )}

        {/* Button — hidden below, slides up on hover */}
        <div className="overflow-hidden" style={{ marginTop: 8 }}>
          <span
            className="inline-flex items-center gap-2 text-[0.72rem] font-sans tracking-widest uppercase translate-y-full group-hover:translate-y-0 transition-transform duration-400 w-fit"
            style={{ backgroundColor: "var(--brand-primary)", color: "#ffffff", padding: "12px 20px", border: "3px solid #ffffff" }}
          >
            View More
          </span>
        </div>
      </div>
    </Link>
  );
}

export function WhatWeDo() {
  return (
    <section className="relative bg-background border-t border-border overflow-hidden" style={{ paddingTop: 0, paddingBottom: 80 }}>
      <Container>
        <div className="flex flex-col gap-[24px]" style={{ marginBottom: 80 }}>
          <Eyebrow>What We Do</Eyebrow>
          <SectionHeading>Public Event Management</SectionHeading>
        </div>

        {/* Bento grid */}
        <div
          className="grid grid-cols-3"
          style={{
            gap: 24,
            gridTemplateRows: "300px 300px 400px",
          }}
        >
          {/* Featured — spans 2 cols × 2 rows */}
          <BentoCard event={eventTypes[0]} showDescription className="col-span-2 row-span-2" />

          {/* Right column — two stacked cards */}
          <BentoCard event={eventTypes[1]} showDescription />
          <BentoCard event={eventTypes[2]} showDescription />

          {/* Bottom row — three equal cards */}
          <BentoCard event={eventTypes[3]} showDescription />
          <BentoCard event={eventTypes[4]} showDescription />
          <BentoCard event={eventTypes[5]} showDescription />
        </div>
      </Container>
    </section>
  );
}
