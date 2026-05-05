import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/atoms";

const nav = [
  {
    heading: "Services",
    links: [
      { label: "Event Feasibility & Planning", href: "/services/feasibility-planning" },
      { label: "Event Production & Logistics", href: "/services/production-logistics" },
      { label: "Creative & Marketing", href: "/services/creative-marketing" },
      { label: "Specialized Services", href: "/services/specialized" },
    ],
  },
  {
    heading: "Company",
    links: [
      { label: "About Us", href: "/about" },
      { label: "Our Work", href: "/work" },
      { label: "Process", href: "/process" },
      { label: "Testimonials", href: "/testimonials" },
      { label: "Careers", href: "/careers" },
    ],
  },
  {
    heading: "Resources",
    links: [
      { label: "FAQ", href: "#faq" },
      { label: "Event Planning Guide", href: "/resources/guide" },
      { label: "Free Consultation", href: "#contact" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="border-t border-border">

      {/* Main footer */}
      <Container>
        <div className="grid grid-cols-12" style={{ gap: 24, paddingTop: 80, paddingBottom: 80 }}>

          {/* Brand + contact — cols 1-3 */}
          <div className="col-span-3 flex flex-col gap-8">
            <div className="flex flex-col gap-3">
              <Image src="/esw-logo.png" alt="Event South West" width={80} height={32} className="object-contain" />
              <p className="text-body-sm text-muted-foreground">
                The best kept secret in event management.
              </p>
            </div>

            <div className="flex flex-col gap-4">
              <a href="mailto:lear@eventsouthwest.com" className="text-body-sm text-muted-foreground hover:text-foreground transition-colors">
                lear@eventsouthwest.com
              </a>
              <a href="tel:4698931832" className="text-body-sm text-muted-foreground hover:text-foreground transition-colors">
                (469) 893-1832
              </a>
              <address className="text-body-sm text-muted-foreground not-italic">
                6060 N Central Expy, Suite 500<br />
                Dallas, TX 75206
              </address>
            </div>
          </div>

          {/* Nav columns — cols 4-9 */}
          {nav.map((group) => (
            <div key={group.heading} className="col-span-2 col-start-auto flex flex-col gap-6">
              <span className="text-[0.72rem] font-sans font-semibold tracking-[0.14em] uppercase text-foreground">
                {group.heading}
              </span>
              <ul className="flex flex-col gap-3">
                {group.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-body-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact CTA — cols 10-12 */}
          <div className="col-span-3 flex flex-col gap-6">
            <span className="text-[0.72rem] font-sans font-semibold tracking-[0.14em] uppercase text-foreground">
              Get in touch
            </span>
            <div className="flex flex-col gap-4">
              <p className="text-body-sm text-muted-foreground">
                Based in Dallas, proudly serving major markets across the United States.
              </p>
              <Link
                href="#contact"
                className="text-body-sm text-foreground underline underline-offset-4 hover:text-muted-foreground transition-colors"
              >
                Book a free consultation →
              </Link>
            </div>
          </div>

        </div>
      </Container>

      {/* Bottom bar */}
      <div className="border-t border-border">
        <Container>
          <div className="flex items-center justify-between" style={{ paddingTop: 24, paddingBottom: 24 }}>
            <span className="text-[0.68rem] font-sans text-muted-foreground">
              © 2025 Event South West. All rights reserved.
            </span>
            <div className="flex items-center gap-8">
              <Link href="/privacy" className="text-[0.68rem] font-sans text-muted-foreground hover:text-foreground transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-[0.68rem] font-sans text-muted-foreground hover:text-foreground transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </Container>
      </div>

    </footer>
  );
}
