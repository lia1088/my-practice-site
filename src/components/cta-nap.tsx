import Link from "next/link";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { Container } from "@/components/atoms";

export function CtaNap() {
  return (
    <div className="border-t border-border" style={{ paddingTop: 120, paddingBottom: 120 }}>
      <Container>
        <div className="flex flex-col items-center text-center gap-[40px]">
          <h2
            className="font-heading font-extrabold text-foreground capitalize"
            style={{ fontSize: "clamp(2.4rem, 5vw, 5rem)", lineHeight: 0.95, letterSpacing: 0, maxWidth: "70%" }}
          >
            Ready to produce something unforgettable?
          </h2>
          <Link
            href="#contact"
            className={cn(buttonVariants({ size: "lg" }), "font-sans")}
            style={{ backgroundColor: "var(--brand-primary)", color: "#ffffff", padding: "12px 40px" }}
          >
            Book a free consultation
          </Link>
        </div>
      </Container>
    </div>
  );
}
