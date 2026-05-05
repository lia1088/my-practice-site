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
    featured: true,
  },
  {
    title: "Charity Walks",
    href: "#services",
    badge: "Charity Events",
    description: "Permitting, site logistics, volunteer coordination, and participant experience so the day reflects the mission — not the friction behind it.",
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
    description: "Road closures, safety coordination, route logistics, and participant management across distances that stretch production thin.",
    img: "/Dallas_Bike_Ride_2025-27.jpg",
  },
  {
    title: "Community Events",
    href: "#services",
    badge: "Civic & Community",
    description: "Parades, civic celebrations, and holiday programming at a scale most internal teams aren't built for. We are.",
    img: "/EventSouthwest-BigStarFrisco-25-26.jpg",
  },
  {
    title: "Brand Activations",
    href: "#services",
    badge: "Brand & Experiential",
    description: "Permitting, site design, vendor management, and day-of oversight — giving the production the same quality as the brand.",
    img: "/ESW-JPMORGAN-2025-72.jpg",
  },
];

const featured = eventTypes[0];
const regular = eventTypes.slice(1, 5);

export function WhatWeDo() {
  return (
    <section className="relative bg-background border-t border-border overflow-hidden" style={{ paddingTop: 0, paddingBottom: 80 }}>
      <Container>
        <div className="flex flex-col gap-[24px]" style={{ marginBottom: 80 }}>
          <Eyebrow>What We Do</Eyebrow>
          <SectionHeading>Public Event Management</SectionHeading>
        </div>

        <div className="flex flex-col gap-6">

        {/* Featured card */}
        <Link
          href={featured.href}
          className="group relative flex flex-col md:flex-row overflow-hidden border border-border bg-card transition-all hover:border-[var(--brand-primary)]/40"
        >
          <div className="relative h-64 md:h-80 md:w-[52%] flex-none overflow-hidden">
            <Image
              src={featured.img}
              alt={featured.title}
              fill
              className="object-cover transition-all duration-700 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, 52vw"
              priority
            />
            <div className="absolute inset-x-0 bottom-0 h-8 bg-gradient-to-t from-card to-transparent md:hidden" />
          </div>
          <div className="flex flex-1 flex-col justify-center" style={{ padding: 24 }}>
            <p className="mb-3 text-[10px] font-extrabold uppercase tracking-[0.15em] text-muted-foreground">Featured</p>
            <span className="mb-4 inline-block w-fit border border-[var(--brand-primary)]/30 bg-[var(--brand-primary)]/8 text-[var(--brand-primary)] text-xs px-2 py-0.5 tracking-wide">
              {featured.badge}
            </span>
            <h3 className="font-heading text-2xl font-extrabold text-foreground leading-snug group-hover:text-[var(--brand-primary)] transition-colors md:text-3xl capitalize">
              {featured.title}
            </h3>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground max-w-sm">
              {featured.description}
            </p>
            <div className="mt-6 text-xs font-semibold uppercase tracking-wider text-muted-foreground group-hover:text-[var(--brand-primary)] transition-colors">
              Learn More →
            </div>
          </div>
        </Link>

        {/* 4-card grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4" style={{ gap: 24 }}>
          {regular.map((event) => (
            <Link
              key={event.title}
              href={event.href}
              className="group relative flex flex-col overflow-hidden border border-border bg-card transition-all hover:border-[var(--brand-primary)]/40"
            >
              <div className="relative h-44 w-full overflow-hidden">
                <Image
                  src={event.img}
                  alt={event.title}
                  fill
                  className="object-cover transition-all duration-500 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
                <div className="absolute inset-x-0 bottom-0 h-8 bg-gradient-to-t from-card to-transparent" />
              </div>
              <div className="flex flex-1 flex-col" style={{ padding: 24 }}>
                <span className="mb-3 inline-block w-fit border border-[var(--brand-primary)]/30 bg-[var(--brand-primary)]/8 text-[var(--brand-primary)] text-xs px-2 py-0.5 tracking-wide">
                  {event.badge}
                </span>
                <h3 className="font-heading text-base font-extrabold text-foreground leading-snug group-hover:text-[var(--brand-primary)] transition-colors capitalize">
                  {event.title}
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-muted-foreground line-clamp-3">
                  {event.description}
                </p>
                <div className="mt-auto pt-4 text-xs font-semibold uppercase tracking-wider text-muted-foreground group-hover:text-[var(--brand-primary)] transition-colors">
                  Learn More →
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* View all row */}
        <div>
          <Link
            href="#services"
            className="group flex items-center justify-between border border-dashed border-border bg-card/60 px-8 py-5 transition-all hover:border-[var(--brand-primary)]/40"
          >
            <div className="flex items-center gap-4">
              <span className="inline-block w-fit border border-[var(--brand-primary)]/30 bg-[var(--brand-primary)]/8 text-[var(--brand-primary)] text-xs px-2 py-0.5 tracking-wide">
                {eventTypes[5].badge}
              </span>
              <span className="text-sm font-semibold text-foreground group-hover:text-[var(--brand-primary)] transition-colors">
                {eventTypes[5].title}
              </span>
            </div>
            <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground group-hover:text-[var(--brand-primary)] transition-colors">
              Learn More →
            </span>
          </Link>
        </div>

        </div>{/* end bento flex-col gap-6 */}
      </Container>
    </section>
  );
}
