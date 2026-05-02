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
          className="font-heading font-black select-none"
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
      <div className="relative flex-1 flex items-center">
        <Container className="w-full">
          <div className="flex flex-col gap-[24px]" style={{ maxWidth: 800 }}>
            <Eyebrow>Event Management — South West</Eyebrow>

            <div className="flex flex-col gap-[40px]">
              <h1
                className="font-heading font-black text-foreground"
                style={{ fontSize: "clamp(3rem, 8vw, 7rem)", letterSpacing: "0", lineHeight: 0.9 }}
              >
                The best kept secret in event management.
              </h1>

              <p className="text-foreground font-sans text-sm leading-relaxed">
                Large-scale public event management for non-profits, municipalities, brands, companies, and agencies. Ready to help your event today.
              </p>

              <div className="flex items-center gap-4">
                <Link
                  href="#contact"
                  className={cn(buttonVariants({ size: "lg" }), "font-sans")}
                  style={{ color: "#08080f", padding: "12px 40px" }}
                >
                  Book a free consultation
                </Link>
                <Link
                  href="#work"
                  className={cn(buttonVariants({ variant: "outline", size: "lg" }), "font-sans")}
                  style={{ padding: "12px 40px" }}
                >
                  See our work
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </div>

      {/* Stats bar */}
      <div className="relative grid grid-cols-2 md:grid-cols-4 border-t border-border">
        {stats.map((stat, i) => (
          <div
            key={stat.label}
            className={cn(
              "p-6 flex flex-col gap-1",
              i < stats.length - 1 && "border-r border-border"
            )}
          >
            <span
              className="font-heading font-black text-foreground"
              style={{ fontSize: "clamp(1.6rem, 3vw, 2.4rem)" }}
            >
              {stat.value}
            </span>
            <span className="text-[0.62rem] font-sans text-muted-foreground tracking-[0.12em] uppercase">
              {stat.label}
            </span>
          </div>
        ))}
      </div>

    </section>
  );
}
