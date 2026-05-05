"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import { Section, Container, Eyebrow, SectionHeading } from "@/components/atoms";

const DURATION = 5000;

const testimonials = [
  {
    client: "American Heart Association",
    quote: "Managing our 50,000+ person Heart Walk is no small feat and they execute flawlessly. Extremely organized, detail oriented, efficient and productive.",
    name: "Ashley B.",
    role: "Director of Events",
    photo: "/esw-07.avif",
  },
  {
    client: "Genesis Women's Shelter",
    quote: "They know exactly what it takes to produce and execute a top-notch event. They listen to your needs, identify creative solutions and make ideas come to fruition.",
    name: "Elizabeth C.",
    role: "Events Lead",
    photo: "/esw-05.avif",
  },
  {
    client: "City of Phoenix",
    quote: "Zero safety incidents across every event they've managed for us. Their attention to logistics, crowd control, and on-site coordination is unmatched.",
    name: "Marcus T.",
    role: "Municipal Events Manager",
    photo: "/esw-06.avif",
  },
  {
    client: "YMCA",
    quote: "We've renewed with Event South West three years running. They feel less like a vendor and more like an extension of our own team.",
    name: "Jordan L.",
    role: "Community Programs Director",
    photo: "/esw-04.avif",
  },
];

export function TestimonialsV5() {
  const [active, setActive] = useState(0);
  const [tick, setTick] = useState(0);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const advance = useCallback(() => {
    setActive((prev) => (prev + 1) % testimonials.length);
    setTick((t) => t + 1);
  }, []);

  useEffect(() => {
    timerRef.current = setTimeout(advance, DURATION);
    return () => { if (timerRef.current) clearTimeout(timerRef.current); };
  }, [active, advance]);

  const handleTabClick = (i: number) => {
    if (timerRef.current) clearTimeout(timerRef.current);
    setActive(i);
    setTick((t) => t + 1);
  };

  const t = testimonials[active];

  return (
    <Section>
      <Container>

        {/* Header */}
        <div className="flex flex-col items-center text-center gap-[24px]" style={{ marginBottom: 80 }}>
          <Eyebrow>What clients say</Eyebrow>
          <SectionHeading>Trusted by the organizations that matter.</SectionHeading>
        </div>

        {/* Card */}
        <div className="border border-border" style={{ background: "#0e0e1a" }}>

          {/* Tabs row */}
          <div className="grid border-b border-border" style={{ gridTemplateColumns: `repeat(${testimonials.length}, 1fr)` }}>
            {testimonials.map((item, i) => (
              <button
                key={item.client}
                onClick={() => handleTabClick(i)}
                className="relative flex items-center justify-center border-r border-border last:border-r-0 transition-opacity duration-300"
                style={{
                  padding: "24px 16px",
                  opacity: active === i ? 1 : 0.3,
                  cursor: "pointer",
                }}
              >
                <span
                  className="text-[0.68rem] font-mono tracking-[0.16em] uppercase text-foreground"
                >
                  {item.client}
                </span>

                {/* Fill bar on bottom edge */}
                {active === i && (
                  <div
                    key={`tab-bar-${i}-${tick}`}
                    style={{
                      position: "absolute",
                      bottom: -1,
                      left: 0,
                      width: "100%",
                      height: 2,
                      background: "var(--brand-primary)",
                      transformOrigin: "left center",
                      animation: `fill-bar ${DURATION}ms linear forwards`,
                      zIndex: 1,
                    }}
                  />
                )}
              </button>
            ))}
          </div>

          {/* Quote content */}
          <div
            className="flex flex-col items-center text-center"
            style={{ padding: "80px 80px 72px" }}
          >
            {/* Quote text */}
            <p
              key={active}
              className="font-sans font-normal text-foreground"
              style={{
                fontSize: "clamp(1.3rem, 2.2vw, 2rem)",
                lineHeight: 1.3,
                maxWidth: "720px",
                animation: "fadeUp 0.4s ease forwards",
              }}
            >
              "{t.quote}"
            </p>

            {/* Attribution */}
            <div
              className="flex items-center gap-4"
              style={{ marginTop: 48 }}
            >
              {/* Avatar */}
              <div
                className="relative overflow-hidden shrink-0"
                style={{ width: 48, height: 48, borderRadius: "50%", border: "2px solid var(--border)" }}
              >
                <Image
                  src={t.photo}
                  alt={t.name}
                  fill
                  className="object-cover object-center"
                  sizes="48px"
                />
              </div>

              {/* Name + role */}
              <div className="flex flex-col items-start gap-1">
                <span className="font-heading font-bold text-foreground text-sm">{t.name}</span>
                <span className="text-[0.62rem] font-mono tracking-[0.14em] uppercase text-muted-foreground">{t.role} · {t.client}</span>
              </div>
            </div>
          </div>

        </div>

      </Container>
    </Section>
  );
}
