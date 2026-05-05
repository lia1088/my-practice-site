"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
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
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        scrolled
          ? "bg-background/90 backdrop-blur-sm"
          : "bg-transparent"
      )}
      style={{
        borderBottom: scrolled ? "1px solid rgba(255,255,255,0.5)" : "1px solid rgba(255,255,255,0.15)",
      }}
    >
      <Container>
        <div className="grid grid-cols-12 gap-6 items-center" style={{ paddingTop: 14, paddingBottom: 14 }}>

          {/* Brand — cols 1-3 */}
          <Link href="/" className="col-span-3 flex items-center">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/esw-logo.png" alt="Event South West" style={{ height: 40, width: "auto" }} />
          </Link>

          {/* Nav links — cols 4-9, hidden on mobile */}
          <nav className="col-span-6 hidden md:flex items-center justify-center gap-8">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-[16px] font-sans text-muted-foreground hover:text-foreground transition-colors tracking-wide"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA — cols 10-12 */}
          <div className="col-span-3 flex justify-end">
            <Link
              href="#contact"
              className={cn(buttonVariants({ size: "sm" }), "font-sans text-[14px] tracking-widest")}
              style={{ backgroundColor: "var(--brand-primary)", color: "#ffffff", padding: "12px 40px" }}
            >
              Book a Consultation
            </Link>
          </div>

        </div>
      </Container>
    </header>
  );
}
