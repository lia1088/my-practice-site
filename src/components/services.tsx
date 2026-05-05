import Link from "next/link";
import { ClipboardList, Truck, Megaphone, Zap } from "lucide-react";
import { cn } from "@/lib/utils";
import { Section, Container, Eyebrow, SectionHeading } from "@/components/atoms";

const services = [
  {
    icon: ClipboardList,
    title: "Event Feasibility & Planning",
    desc: "Strategic planning to ensure your event is viable before you commit resources.",
    href: "/services/feasibility-planning",
  },
  {
    icon: Truck,
    title: "Event Production & Logistics",
    desc: "Turn-key event management from permits to production.",
    href: "/services/production-logistics",
  },
  {
    icon: Megaphone,
    title: "Creative & Marketing",
    desc: "In-house design and marketing services that integrate seamlessly with production.",
    href: "/services/creative-marketing",
  },
  {
    icon: Zap,
    title: "Specialized Services",
    desc: "Race timing, course certification, equipment rentals, and custom solutions for unique event needs.",
    href: "/services/specialized",
  },
];

export function Services() {
  return (
    <Section>
      <Container>

        {/* Header */}
        <div className="flex flex-col gap-[24px]" style={{ marginBottom: 80 }}>
          <Eyebrow>What we do</Eyebrow>
          <SectionHeading>Built for events that can't afford to fail.</SectionHeading>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-4 border border-border">
          {services.map((svc, i) => (
            <Link
              key={svc.title}
              href={svc.href}
              className={cn(
                "group flex flex-col gap-6 bg-background hover:bg-card transition-colors relative",
                i < services.length - 1 && "border-r border-border"
              )}
              style={{ padding: "40px 32px" }}
            >
              {/* Hover accent top border */}
              <div className="absolute top-0 left-0 right-0 h-[2px] opacity-0 group-hover:opacity-100 transition-opacity" style={{ background: "var(--brand-primary)" }} />

              <svc.icon size={28} className="text-foreground" strokeWidth={1.5} />

              <div className="font-heading font-bold text-foreground leading-tight" style={{ fontSize: "clamp(1.1rem, 1.4vw, 1.4rem)" }}>
                {svc.title}
              </div>

              <p className="text-body-sm text-muted-foreground flex-1">
                {svc.desc}
              </p>

              <div className="text-[0.68rem] font-sans tracking-[0.14em] uppercase text-muted-foreground">
                Learn more →
              </div>
            </Link>
          ))}
        </div>

      </Container>
    </Section>
  );
}
