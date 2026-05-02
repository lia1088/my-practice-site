import Link from "next/link";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { Container } from "@/components/atoms";

const links = [
  { label: "Services", href: "#services" },
  { label: "Work", href: "#work" },
  { label: "Process", href: "#process" },
  { label: "About", href: "#about" },
];

export function Nav() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-background/90 backdrop-blur-sm">
      <Container>
        <div className="grid grid-cols-12 gap-6 h-16 items-center">

          {/* Brand — cols 1-3 */}
          <Link href="/" className="col-span-3 font-heading font-black text-foreground uppercase tracking-wide text-lg">
            Event South West
          </Link>

          {/* Nav links — cols 4-9, hidden on mobile */}
          <nav className="col-span-6 hidden md:flex items-center justify-center gap-8">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-[0.78rem] font-sans text-muted-foreground hover:text-foreground transition-colors tracking-wide"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA — cols 10-12 */}
          <div className="col-span-3 flex justify-end">
            <Link
              href="#contact"
              className={cn(buttonVariants({ size: "sm" }), "font-sans text-[0.72rem] tracking-widest")}
              style={{ color: "#08080f", padding: "12px 40px" }}
            >
              Book a Consultation
            </Link>
          </div>

        </div>
      </Container>
    </header>
  );
}
