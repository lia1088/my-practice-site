import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const VIDEO_URL = "https://look-website-videos.b-cdn.net/brooks_-_boston_hyperion_house_2025%20(720p).mp4";

const stats = [
  { value: "4M+", label: "Participants Served" },
  { value: "13+", label: "Years Operating" },
  { value: "500+", label: "Events Produced" },
  { value: "36+", label: "Trusted Partners" },
];

export function ProofSection() {
  return (
    <section
      className="relative overflow-hidden -mt-20 -mb-20 z-10"
      style={{ clipPath: "polygon(0 0, 100% 80px, 100% 100%, 0 calc(100% - 80px))" }}
    >
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 h-full w-full object-cover"
      >
        <source src={VIDEO_URL} type="video/mp4" />
      </video>

      <div className="absolute inset-0 bg-black/55" />

      <div className="pointer-events-none select-none absolute inset-0 flex items-center justify-center overflow-hidden">
        <span
          className="font-heading font-bold tracking-tighter leading-none"
          style={{
            fontSize: "clamp(160px, 28vw, 400px)",
            WebkitTextStroke: "1px rgba(255,255,255,0.07)",
            color: "transparent",
          }}
        >
          ESW
        </span>
      </div>

      <div className="relative z-10 px-10 py-32 md:py-44">
        <div className="mx-auto max-w-[1920px] w-full text-center">
          <p className="mb-4 text-xs font-mono font-semibold uppercase tracking-widest text-[var(--brand-primary)]">
            Track Record
          </p>
          <h2 className="font-heading text-4xl font-bold tracking-tight text-white md:text-6xl capitalize">
            13 years. 4 million participants.{" "}
            <br className="hidden md:block" />
            <span style={{ color: "var(--brand-primary)" }}>Zero shortcuts.</span>
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-zinc-400">
            Since 2012, we&rsquo;ve operated as the general contractor for some of the
            highest-profile public events in the Southwest — and our standards haven&rsquo;t moved.
          </p>

          <div className="mt-16 grid grid-cols-2 gap-px bg-white/10 md:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label} className="bg-black/30 backdrop-blur-sm px-8 py-10">
                <div className="font-heading text-5xl font-bold text-white tabular-nums md:text-6xl">
                  {stat.value}
                </div>
                <div className="mt-2 text-sm font-medium text-zinc-400">{stat.label}</div>
              </div>
            ))}
          </div>

          <div className="mt-12">
            <Link
              href="#contact"
              className={cn(buttonVariants(), "font-sans text-[14px] tracking-widest")}
              style={{ backgroundColor: "var(--brand-primary)", color: "#ffffff", padding: "12px 40px" }}
            >
              Book a Consultation
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
