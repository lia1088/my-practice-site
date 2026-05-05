"use client";

import { useEffect, useRef, useState } from "react";
import { Container, Eyebrow } from "@/components/atoms";

const categories = [
  {
    name: "Non-Profits",
    subtitle: "When your cause deserves a crowd",
    description: "We help non-profits produce fundraising walks, charity runs, and awareness events that move communities — and raise millions.",
    tags: ["Charity walks", "Fundraising events", "Awareness campaigns"],
  },
  {
    name: "Municipalities",
    subtitle: "City-scale events, flawlessly delivered",
    description: "From neighbourhood block parties to city-wide festivals, we partner with local governments to deliver safe, memorable public events.",
    tags: ["Public festivals", "City events", "Community programs"],
  },
  {
    name: "Brands",
    subtitle: "Experiences that earn attention",
    description: "Activations, product launches, and sponsored events that put your brand in front of the right crowd — and keep them talking.",
    tags: ["Brand activations", "Sponsored events", "Product launches"],
  },
  {
    name: "Companies",
    subtitle: "Internal events that actually land",
    description: "From team days to large-scale conferences, we manage the logistics so your people can focus on what matters.",
    tags: ["Conferences", "Team events", "Corporate retreats"],
  },
  {
    name: "Agencies",
    subtitle: "The production partner you can trust",
    description: "We slot in as your on-the-ground production team, handling execution while you keep the client relationship.",
    tags: ["Event production", "White-label", "On-site management"],
  },
];

const FONT_SIZE = "clamp(2rem, 4vw, 3.2rem)";

export function WhoWeHelp() {
  const [active, setActive] = useState(0);
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => {
      const wrapper = wrapperRef.current;
      if (!wrapper) return;
      const scrolled = window.scrollY - wrapper.offsetTop;
      const scrollable = wrapper.offsetHeight - window.innerHeight;
      const progress = Math.max(0, Math.min(1, scrolled / scrollable));
      const index = Math.min(categories.length - 1, Math.floor(progress * categories.length));
      setActive(index);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div ref={wrapperRef} style={{ height: `${categories.length * 100}vh` }}>
      <div
        style={{ position: "sticky", top: 0, height: "100vh", overflow: "hidden" }}
        className="flex flex-col justify-center bg-background"
      >
        <Container>

          {/* Eyebrow */}
          <div style={{ marginBottom: 40 }}>
            <Eyebrow>Who we work with</Eyebrow>
          </div>

          {/* Single sentence: "We work with [categories…]" */}
          <div className="flex items-baseline flex-wrap" style={{ gap: "0 0.35em", paddingBottom: "0.15em" }}>
            <h2
              className="font-heading font-bold text-foreground shrink-0"
              style={{ fontSize: FONT_SIZE, lineHeight: 1.02, letterSpacing: 0 }}
            >
              We work with
            </h2>

            {categories.map((cat, i) => {
              const offset = i - active;
              return (
                <button
                  key={cat.name}
                  onClick={() => setActive(i)}
                  className="shrink-0 font-heading font-bold transition-all duration-500"
                  style={{
                    fontSize: FONT_SIZE,
                    lineHeight: 1.02,
                    color: offset === 0 ? "var(--foreground)" : "var(--muted-foreground)",
                    opacity: offset === 0 ? 1 : 0.3,
                    cursor: offset === 0 ? "default" : "pointer",
                    whiteSpace: "nowrap",
                  }}
                >
                  {cat.name}{i < categories.length - 1 && <span style={{ color: "var(--border)", marginLeft: "0.2em" }}>/</span>}
                </button>
              );
            })}
          </div>

          {/* Progress line — full width */}
          <div className="relative" style={{ height: 1, background: "var(--border)", marginTop: 16 }}>
            <div
              className="absolute top-0 left-0 h-px transition-all duration-500"
              style={{
                width: `${((active + 1) / categories.length) * 100}%`,
                background: "var(--foreground)",
              }}
            />
          </div>

          {/* Active category content */}
          <div
            key={active}
            className="flex flex-col gap-4"
            style={{ marginTop: 48, maxWidth: 520, animation: "fadeUp 0.35s ease forwards" }}
          >
            <h3
              className="font-heading font-bold text-foreground"
              style={{ fontSize: "clamp(1.2rem, 1.8vw, 1.6rem)", lineHeight: 1.1 }}
            >
              {categories[active].subtitle}
            </h3>
            <p className="text-body-sm text-muted-foreground">
              {categories[active].description}
            </p>
            <div className="flex flex-wrap gap-2" style={{ marginTop: 8 }}>
              {categories[active].tags.map((tag) => (
                <span
                  key={tag}
                  className="text-[0.62rem] font-mono tracking-[0.14em] uppercase border border-border text-muted-foreground"
                  style={{ padding: "5px 12px" }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

        </Container>
      </div>
    </div>
  );
}
