"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { Section, Container, Eyebrow, SectionHeading } from "@/components/atoms";

const DURATION = 4500;

const caseStudies = [
  {
    category: "Race Production",
    title: "Desert Dash Ultra Marathon",
    description: "Full-scale race management for 12,000+ athletes across a 3-day weekend — logistics, medical, finish line operations.",
    photo: "/esw-01.avif",
  },
  {
    category: "Municipal Event",
    title: "Big Star Frisco",
    description: "City-commissioned outdoor festival spanning 6 city blocks, coordinating 45,000 attendees with zero safety incidents.",
    photo: "/esw-02.avif",
  },
  {
    category: "Non-Profit",
    title: "Community Charity Walk",
    description: "End-to-end event production for a fundraising walk that raised over $800K for local shelters and food banks.",
    photo: "/esw-03.avif",
  },
];

function CategoryIcon() {
  return (
    <div
      className="shrink-0 flex items-center justify-center"
      style={{ width: 20, height: 20, background: "var(--brand-primary)" }}
    >
      <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
        <rect x="1" y="1" width="3.5" height="3.5" fill="white" />
        <rect x="5.5" y="1" width="3.5" height="3.5" fill="white" />
        <rect x="1" y="5.5" width="3.5" height="3.5" fill="white" />
        <rect x="5.5" y="5.5" width="3.5" height="3.5" fill="white" />
      </svg>
    </div>
  );
}

export function WorkV2() {
  const [active, setActive] = useState(0);
  const [tick, setTick] = useState(0);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const advance = useCallback(() => {
    setActive((prev) => (prev + 1) % caseStudies.length);
    setTick((t) => t + 1);
  }, []);

  useEffect(() => {
    timerRef.current = setTimeout(advance, DURATION);
    return () => { if (timerRef.current) clearTimeout(timerRef.current); };
  }, [active, advance]);

  const handleCardClick = (i: number) => {
    if (timerRef.current) clearTimeout(timerRef.current);
    setActive(i);
    setTick((t) => t + 1);
  };

  return (
    <Section>
      <Container>

        {/* Header */}
        <div className="flex flex-col gap-[24px]" style={{ marginBottom: 80 }}>
          <Eyebrow>Our work</Eyebrow>
          <SectionHeading>Events that move people.</SectionHeading>
        </div>

        {/* Featured image */}
        <div className="relative overflow-hidden w-full border border-border" style={{ aspectRatio: "16 / 7" }}>
          {caseStudies.map((cs, i) => (
            <Image
              key={i}
              src={cs.photo}
              alt={cs.title}
              fill
              className={cn(
                "object-cover object-center transition-opacity duration-700",
                active === i ? "opacity-100" : "opacity-0"
              )}
              priority={i === 0}
              sizes="100vw"
            />
          ))}
        </div>

        {/* Cards */}
        <div className="grid grid-cols-3 border-l border-b border-border">
          {caseStudies.map((cs, i) => (
            <button
              key={cs.title}
              onClick={() => handleCardClick(i)}
              className={cn(
                "text-left flex flex-col gap-5 border-r border-t border-border transition-opacity duration-300 cursor-pointer",
                active === i ? "opacity-100" : "opacity-30 hover:opacity-60"
              )}
              style={{ padding: "32px 32px 40px 32px" }}
            >
              {/* Category */}
              <div className="flex items-center gap-2">
                <CategoryIcon />
                <span
                  className="text-[0.62rem] font-mono tracking-[0.18em] uppercase"
                  style={{ color: "var(--brand-primary)" }}
                >
                  {cs.category}
                </span>
              </div>

              {/* Progress bar track */}
              <div className="relative w-full" style={{ borderTop: "1px solid var(--border)", marginTop: 0 }}>
                {active === i && (
                  <div
                    key={`bar-${i}-${tick}`}
                    style={{
                      position: "absolute",
                      top: -1,
                      left: 0,
                      width: "100%",
                      height: 1,
                      background: "var(--brand-primary)",
                      transformOrigin: "left center",
                      animation: `fill-bar ${DURATION}ms linear forwards`,
                    }}
                  />
                )}
              </div>

              {/* Title */}
              <h3
                className="font-heading font-bold text-foreground capitalize"
                style={{ fontSize: "clamp(1.2rem, 1.8vw, 1.7rem)", lineHeight: 1.05 }}
              >
                {cs.title}
              </h3>

              {/* Description */}
              <p className="text-body-sm text-muted-foreground" style={{ maxWidth: "38ch" }}>
                {cs.description}
              </p>

              {/* CTA */}
              <div style={{ marginTop: "auto", paddingTop: 16 }}>
                <span
                  className={cn(
                    "inline-flex items-center gap-2 text-[0.72rem] font-sans tracking-[0.14em] uppercase transition-colors",
                    active === i ? "text-foreground" : "text-muted-foreground"
                  )}
                >
                  Read more
                  <span
                    style={{ display: "inline-block", transition: "transform 0.3s", transform: active === i ? "translateX(4px)" : "translateX(0)" }}
                  >→</span>
                </span>
              </div>
            </button>
          ))}
        </div>

      </Container>
    </Section>
  );
}
