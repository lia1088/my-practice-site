"use client";

const logos = [
  "City of Phoenix",
  "American Red Cross",
  "Nike",
  "YMCA",
  "City of Denver",
  "Tough Mudder",
  "United Way",
  "Spartan Race",
  "City of Austin",
  "Lululemon",
];

export function TrustStrip() {
  return (
    <div className="border-y border-border overflow-hidden" style={{ paddingTop: 24, paddingBottom: 24 }}>
      <div className="flex animate-marquee whitespace-nowrap">
        {[...logos, ...logos].map((logo, i) => (
          <span
            key={i}
            className="mx-10 text-[0.72rem] font-sans tracking-[0.18em] uppercase text-muted-foreground shrink-0"
          >
            {logo}
          </span>
        ))}
      </div>
    </div>
  );
}
