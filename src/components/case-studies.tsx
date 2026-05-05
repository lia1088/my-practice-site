"use client";

import React, { useState, useCallback, useRef, useEffect } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

const DURATION = 6000;

const cases = [
  {
    photo: "/esw-01.avif",
    category: "Race Production",
    title: "Desert Dash Ultra Marathon",
    description: "Full-scale race management for 12,000+ athletes across a 3-day weekend — logistics, medical, and finish-line operations.",
    stat: "12,000+",
    statLabel: "Participants",
  },
  {
    photo: "/esw-02.avif",
    category: "Municipal Event",
    title: "Big Star Frisco",
    description: "City-commissioned outdoor festival spanning 6 city blocks with 45,000 attendees and zero safety incidents.",
    stat: "45,000+",
    statLabel: "Attendees",
  },
  {
    photo: "/ESW-Katy5K-2025-37.jpg",
    category: "Road Race",
    title: "Katy 5K Classic",
    description: "USATF-certified road race with permitting, course management, and finish-line production from bib to medal.",
    stat: "8,500+",
    statLabel: "Runners",
  },
  {
    photo: "/Dallas_Bike_Ride_2025-27.jpg",
    category: "Cycling Event",
    title: "Dallas Bike Ride",
    description: "Multi-route cycling event across closed city streets, coordinating road closures, safety crews, and participant logistics.",
    stat: "22,000+",
    statLabel: "Riders",
  },
  {
    photo: "/EventSouthwest-BigStarFrisco-25-26.jpg",
    category: "Community Event",
    title: "Big Star Frisco Festival",
    description: "Multi-day community festival with live entertainment, vendor villages, and city-wide permitting from concept to cleanup.",
    stat: "35,000+",
    statLabel: "Guests",
  },
  {
    photo: "/ESW-JPMORGAN-2025-72.jpg",
    category: "Corporate Event",
    title: "JPMorgan Chase Corporate Run",
    description: "Corporate wellness event for one of the country's largest employers — full production, timing, and site management.",
    stat: "5,000+",
    statLabel: "Employees",
  },
];

export function CaseStudies() {
  const [current, setCurrent] = useState(0);
  const [animKey, setAnimKey] = useState(0);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const goTo = useCallback((index: number) => {
    if (timerRef.current) clearTimeout(timerRef.current);
    setCurrent(index);
    setAnimKey((k) => k + 1);
  }, []);

  const next = useCallback(() => goTo((current + 1) % cases.length), [current, goTo]);
  const prev = useCallback(() => goTo((current - 1 + cases.length) % cases.length), [current, goTo]);

  useEffect(() => {
    timerRef.current = setTimeout(next, DURATION);
    return () => { if (timerRef.current) clearTimeout(timerRef.current); };
  }, [current, next]);

  const cs = cases[current];

  return (
    <section className="relative w-full overflow-hidden border-t border-border" id="work" style={{ height: "92vh" }}>

      {/* Background images */}
      {cases.map((c, i) => (
        <Image
          key={c.photo}
          src={c.photo}
          alt={c.title}
          fill
          priority={i === 0}
          sizes="100vw"
          className={cn(
            "object-cover object-center transition-opacity duration-700",
            current === i ? "opacity-100" : "opacity-0"
          )}
        />
      ))}

      {/* Gradient overlay */}
      <div
        className="absolute inset-0"
        style={{ background: "linear-gradient(to right, rgba(0,0,0,0.82) 0%, rgba(0,0,0,0.45) 55%, rgba(0,0,0,0.1) 100%)" }}
      />

      {/* Content */}
      <div className="absolute inset-0 flex flex-col justify-between px-10" style={{ maxWidth: 1920, margin: "0 auto" }}>

        {/* Top — section label + counter */}
        <div className="flex items-center justify-between pt-12">
          <span className="text-[0.62rem] font-mono tracking-[0.22em] uppercase" style={{ color: "var(--brand-primary)" }}>
            Our Work
          </span>
          <span className="text-[0.62rem] font-mono tracking-[0.18em] text-white/40">
            {String(current + 1).padStart(2, "0")} / {String(cases.length).padStart(2, "0")}
          </span>
        </div>

        {/* Middle — case info */}
        <div className="flex flex-col gap-6" style={{ maxWidth: "52ch" }}>
          <span
            key={`cat-${animKey}`}
            className="text-[0.62rem] font-mono tracking-[0.22em] uppercase text-white/50"
            style={{ animation: "fadeUp 0.5s ease both" }}
          >
            {cs.category}
          </span>

          <h2
            key={`title-${animKey}`}
            className="font-heading font-bold text-white capitalize"
            style={{
              fontSize: "clamp(2.4rem, 5.5vw, 5rem)",
              lineHeight: 0.95,
              letterSpacing: 0,
              animation: "fadeUp 0.5s 0.06s ease both",
            }}
          >
            {cs.title}
          </h2>

          <p
            key={`desc-${animKey}`}
            className="text-white/70 leading-relaxed"
            style={{ animation: "fadeUp 0.5s 0.12s ease both", maxWidth: "42ch" }}
          >
            {cs.description}
          </p>

          <div
            key={`stat-${animKey}`}
            className="flex items-baseline gap-3"
            style={{ animation: "fadeUp 0.5s 0.18s ease both" }}
          >
            <span className="font-heading font-bold text-white capitalize" style={{ fontSize: "clamp(2rem, 3.5vw, 3.2rem)" }}>
              {cs.stat}
            </span>
            <span className="text-[0.62rem] font-mono tracking-[0.18em] uppercase text-white/50">
              {cs.statLabel}
            </span>
          </div>
        </div>

        {/* Bottom — progress dots + arrows */}
        <div className="flex items-center justify-between pb-12">

          {/* Dots */}
          <div className="flex items-center gap-2">
            {cases.map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                className="relative overflow-hidden transition-all duration-300"
                style={{
                  height: 2,
                  width: current === i ? 32 : 16,
                  background: current === i ? "var(--brand-primary)" : "rgba(255,255,255,0.25)",
                }}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>

          {/* Arrows */}
          <div className="flex items-center gap-3">
            <button
              onClick={prev}
              className="flex items-center justify-center border border-white/20 text-white hover:border-white/60 transition-colors"
              style={{ width: 44, height: 44 }}
              aria-label="Previous"
            >
              ←
            </button>
            <button
              onClick={next}
              className="flex items-center justify-center border border-white/20 text-white hover:border-white/60 transition-colors"
              style={{ width: 44, height: 44 }}
              aria-label="Next"
            >
              →
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}
