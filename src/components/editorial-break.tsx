import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { Container } from "@/components/atoms";

export function EditorialBreak() {
  return (
    <div className="relative overflow-hidden" style={{ height: 600 }}>
      <Image src="/esw-06.avif" alt="" fill className="object-cover object-center" priority />

      {/* Gradient overlay */}
      <div
        className="absolute inset-0"
        style={{ background: "linear-gradient(to right, rgba(8,8,15,0.85) 0%, rgba(8,8,15,0.2) 60%, transparent 100%)" }}
      />

      {/* Content */}
      <div className="absolute inset-0 flex items-end" style={{ paddingBottom: 80 }}>
        <Container>
          <div className="flex flex-col gap-[24px]" style={{ maxWidth: 600 }}>
            <p className="text-[0.72rem] font-sans tracking-[0.18em] uppercase text-muted-foreground">
              14 years. 4 million participants.
            </p>
            <h2
              className="font-heading font-bold text-foreground"
              style={{ fontSize: "clamp(2.4rem, 5vw, 4.5rem)", lineHeight: 0.95, letterSpacing: 0 }}
            >
              We don't just manage events.<br />We make them unforgettable.
            </h2>
            <div style={{ paddingTop: 16 }}>
              <Link
                href="#contact"
                className={cn(buttonVariants({ size: "lg" }), "font-sans")}
                style={{ backgroundColor: "var(--brand-primary)", color: "#ffffff", padding: "12px 40px" }}
              >
                Work with us
              </Link>
            </div>
          </div>
        </Container>
      </div>

    </div>
  );
}
