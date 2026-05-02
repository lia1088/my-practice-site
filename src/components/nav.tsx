import Link from "next/link";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";

const links = [
  { label: "Services", href: "#services" },
  { label: "Work", href: "#work" },
  { label: "Process", href: "#process" },
  { label: "About", href: "#about" },
];

export function Nav() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-background/90 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

        {/* Brand */}
        <Link href="/" className="font-heading font-black text-foreground uppercase tracking-wide text-lg">
          Event South West
        </Link>

        {/* Nav links — hidden on mobile */}
        <nav className="hidden md:flex items-center gap-8">
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

        {/* CTA */}
        <Link
          href="#contact"
          className={cn(
            buttonVariants({ size: "sm" }),
            "font-sans text-[0.72rem] tracking-widest"
          )}
          style={{ color: "#08080f" }}
        >
          Book a Consultation
        </Link>

      </div>
    </header>
  );
}
