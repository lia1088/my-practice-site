import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { Eyebrow, Container } from "@/components/atoms";

const stats = [
  { value: "14+", label: "Years in business" },
  { value: "4M+", label: "Event participants served" },
  { value: "52", label: "Production team" },
  { value: "7+ yrs", label: "Avg client relationship" },
];

export function Hero() {
  return (
    <section className="relative h-screen flex flex-col justify-between bg-background pt-16">

      {/* Ghost watermark */}
      <div aria-hidden="true" className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
        <span
          className="font-heading font-bold select-none"
          style={{
            fontSize: "clamp(120px, 28vw, 420px)",
            color: "transparent",
            WebkitTextStroke: "1px rgba(255,255,255,0.06)",
            letterSpacing: "0",
          }}
        >
          ESW
        </span>
      </div>

      {/* Main content */}
      <Container outerClassName="relative flex-1 h-full" className="grid grid-cols-2 h-full gap-0">

        {/* Text — left 50% */}
        <div className="flex items-center py-12" style={{ paddingRight: 48 }}>
          <div className="flex flex-col gap-[24px]">
            <Eyebrow>Event Management — South West</Eyebrow>

            <div className="flex flex-col gap-[40px]">
              <h1
                className="font-heading font-bold text-foreground"
                style={{ fontSize: "clamp(2.4rem, 5.5vw, 4.8rem)", letterSpacing: "0", lineHeight: 0.95 }}
              >
                The best kept secret in event management.
              </h1>

              <p className="text-foreground font-sans" style={{ maxWidth: "80%" }}>
                Large-scale public event management for non-profits, municipalities, brands, companies, and agencies. Ready to help your event today.
              </p>

              <div className="flex items-center gap-4">
                <Link
                  href="#contact"
                  className={cn(buttonVariants({ size: "lg" }), "font-sans")}
                  style={{ backgroundColor: "var(--brand-primary)", color: "#ffffff", padding: "12px 40px" }}
                >
                  Book a free consultation
                </Link>
                <Link
                  href="#work"
                  className={cn(buttonVariants({ variant: "outline", size: "lg" }), "font-sans")}
                  style={{ padding: "12px 40px", borderColor: "#ffffff" }}
                >
                  See our work
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Hero photo — right 50% */}
        <div className="relative overflow-hidden">
          <Image
            src="/hero.webp"
            alt="Event South West live production"
            fill
            className="object-cover object-center"
            priority
          />
        </div>

      </Container>

      {/* Stats bar */}
      <div className="border-t border-border">
        <Container>
          <div className="grid grid-cols-2 md:grid-cols-4">
            {stats.map((stat, i) => (
              <div
                key={stat.label}
                className={cn(
                  "flex flex-col gap-1",
                  i < stats.length - 1 && "border-r border-border"
                )}
                style={{ padding: "16px 24px 40px 24px" }}
              >
                <span
                  className="font-heading font-bold text-foreground"
                  style={{ fontSize: "clamp(2rem, 3vw, 3rem)" }}
                >
                  {stat.value}
                </span>
                <span className="text-[0.62rem] font-sans text-muted-foreground tracking-[0.12em] uppercase">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </Container>
      </div>

    </section>
  );
}
