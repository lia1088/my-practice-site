import Link from "next/link";
import { Container, Eyebrow, SectionHeading } from "@/components/atoms";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const services = [
  {
    number: "01",
    title: "Event Feasibility & Planning",
    description: "We map what your event actually requires before anything is committed. Feasibility analysis, budget development, permitting roadmap, and a project timeline your leadership team can stand behind.",
    tags: ["Feasibility Analysis", "Budget Planning", "Venue Selection", "Permitting Roadmaps"],
  },
  {
    number: "02",
    title: "Event Production & Logistics",
    description: "We are the general contractor for your event's operational infrastructure. Every vendor is sourced, coordinated, and accountable to us. One point of contact. One team that owns the outcome.",
    tags: ["Vendor Management", "Permitting", "Site Design", "Public Safety"],
  },
  {
    number: "03",
    title: "Creative & Marketing",
    description: "The brand layer of your event is part of the production. We support event design, signage, sponsorship strategy, and participant marketing so nothing looks improvised on the day.",
    tags: ["Sponsorship Strategy", "Event Design", "Signage", "Marketing"],
  },
  {
    number: "04",
    title: "Specialized Services",
    description: "Some events need race timing, USATF certification, or specialized equipment sourcing on top of standard production. We've built the capability to handle those requirements within scope.",
    tags: ["Race Timing", "USATF Certification", "Course Management", "Equipment Rentals"],
  },
];

export function ServicesSection() {
  return (
    <section className="relative bg-background border-t border-border" id="services" style={{ paddingTop: 0, paddingBottom: 80 }}>
      <Container>
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-[1fr_1.6fr]">

          {/* Sticky sidebar */}
          <div className="flex flex-col justify-between lg:sticky lg:top-32 lg:self-start">
            <div>
              <Eyebrow>Services</Eyebrow>
              <SectionHeading className="mt-3">Event Production Services</SectionHeading>
              <p className="mt-6 text-sm leading-relaxed text-muted-foreground">
                We&rsquo;ve been doing this since 2012. Across hundreds of events, the approach
                hasn&rsquo;t changed: thorough planning, clear accountability, and a team
                that&rsquo;s still on-site when everyone else has gone home.
              </p>
            </div>
            <div className="mt-10">
              <Link
                href="#contact"
                className={cn(buttonVariants(), "font-sans text-[14px] tracking-widest")}
                style={{ backgroundColor: "var(--brand-primary)", color: "#ffffff", padding: "12px 40px" }}
              >
                Book a Consultation
              </Link>
            </div>
          </div>

          {/* Service cards */}
          <div className="flex flex-col divide-y divide-border">
            {services.map((service) => (
              <div key={service.title} className="group relative py-8 first:pt-0 overflow-hidden">
                <span
                  className="pointer-events-none select-none absolute right-0 top-1/2 -translate-y-1/2 font-heading font-extrabold leading-none text-border"
                  style={{ fontSize: "7rem" }}
                >
                  {service.number}
                </span>
                <div className="relative flex items-start gap-6">
                  <span className="mt-1 text-xs font-extrabold text-foreground/10 tabular-nums">{service.number}</span>
                  <div className="flex-1 pr-16">
                    <h3 className="font-heading text-xl font-extrabold text-foreground transition-colors group-hover:text-[var(--brand-primary)] capitalize">
                      {service.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                      {service.description}
                    </p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {service.tags.map((tag) => (
                        <span
                          key={tag}
                          className="border border-border text-muted-foreground text-xs font-medium px-2 py-0.5 tracking-wide transition-colors hover:border-[var(--brand-primary)]/40 hover:text-[var(--brand-primary)]"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </Container>
    </section>
  );
}
