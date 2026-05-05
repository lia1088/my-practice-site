import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { Container } from "@/components/atoms";

const stats = [
  { value: "14+", label: "Years in business" },
  { value: "4M+", label: "Event participants served" },
  { value: "52", label: "Production team" },
  { value: "7+ yrs", label: "Avg client relationship" },
];

function GoogleRating() {
  return (
    <div className="flex items-center gap-3">
      <div className="flex h-8 w-8 items-center justify-center bg-white">
        <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none">
          <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
          <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
          <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z"/>
          <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
        </svg>
      </div>
      <span className="text-xl font-extrabold text-foreground">5.0</span>
      <div className="flex gap-0.5">
        {Array.from({ length: 5 }).map((_, i) => (
          <svg key={i} className="h-4 w-4 fill-[#FBBC05]" viewBox="0 0 20 20">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>
      <span className="text-[0.72rem] font-sans tracking-wide text-muted-foreground uppercase">Google Reviews</span>
    </div>
  );
}

export function HeroStats() {
  return (
    <div className="border-t border-border bg-background">
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
                className="font-heading font-extrabold text-foreground"
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
  );
}

export function Hero() {
  return (
    <section className="relative h-screen flex flex-col bg-background pt-16">

      {/* Ghost watermark */}
      <div aria-hidden="true" className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
        <span
          className="font-heading font-extrabold select-none"
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
        <div className="flex items-center py-12">
          <div className="flex flex-col gap-6" style={{ width: "80%" }}>

            {/* Pill / eyebrow */}
            <div className="inline-flex w-fit items-center gap-2 border rounded-full" style={{ padding: "12px 20px", borderColor: "color-mix(in srgb, var(--brand-primary) 30%, transparent)", backgroundColor: "color-mix(in srgb, var(--brand-primary) 8%, transparent)" }}>
              <span className="h-1.5 w-1.5 rounded-full animate-pulse" style={{ backgroundColor: "var(--brand-primary)" }} />
              <span className="text-xs font-medium tracking-wide uppercase" style={{ color: "var(--brand-primary)" }}>
                Est. 2012 · Dallas, TX · Nationwide
              </span>
            </div>

            <h1
              className="font-heading font-extrabold text-foreground capitalize"
              style={{ fontSize: "clamp(2.4rem, 5.5vw, 4.8rem)", letterSpacing: "0", lineHeight: 0.95 }}
            >
              The best kept secret in event management.
            </h1>

            <p className="text-foreground font-sans" style={{ maxWidth: "80%" }}>
              Large-scale public event management for non-profits, municipalities, brands, companies, and agencies.
            </p>

            <GoogleRating />

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

    </section>
  );
}
