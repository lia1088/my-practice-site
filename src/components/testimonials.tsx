import Image from "next/image";
import { Container, Eyebrow, SectionHeading } from "@/components/atoms";

const photoRowA = [
  "/esw-01.avif",
  "/esw-02.avif",
  "/esw-03.avif",
  "/esw-04.avif",
  "/esw-05.avif",
  "/esw-06.avif",
];
const photoRowB = [
  "/esw-07.avif",
  "/ESW-JPMORGAN-2025-72.jpg",
  "/ESW-Katy5K-2025-37.jpg",
  "/EventSouthwest-BigStarFrisco-25-26.jpg",
  "/Dallas_Bike_Ride_2025-27.jpg",
  "/esw-04.avif",
];

const testimonials = [
  {
    quote: "We love working with the ESW team! They are extremely organized, detail oriented, efficient and productive. Managing our 50,000+ person Heart Walk is no small feat and they execute flawlessly. They leave no stone unturned when it comes to managing even the smallest of details to ensure a unique and memorable guest experience.",
    name: "Ashley B.",
    org: "American Heart Association",
    initials: "AB",
  },
  {
    quote: "The folks at Event Southwest are the best in the business. They know exactly what it takes to produce and execute a top-notch event in a competitive field. They listen to your needs, identify creative solutions and make ideas come to fruition. Most importantly, they care.",
    name: "Elizabeth C.",
    org: "Genesis Women's Shelter & Support",
    initials: "EC",
  },
  {
    quote: "Our company hired Event Southwest to help us with two of our fall events and we couldn't have been more pleased! What was most impressive was their expertise and willingness to help us problem solve on the spot! They are quick on their feet, customer service driven and eager to help. Highly recommend.",
    name: "Lauren S.",
    org: "SBG Hospitality",
    initials: "LS",
  },
];

const Stars = () => (
  <div className="flex gap-0.5">
    {Array.from({ length: 5 }).map((_, i) => (
      <svg key={i} className="h-4 w-4 fill-[#FBBC05]" viewBox="0 0 20 20">
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ))}
  </div>
);

export function Testimonials() {
  return (
    <section className="relative bg-background border-t border-border overflow-hidden" style={{ paddingTop: 0, paddingBottom: 80 }}>
      <Container>
        <div className="mb-16 text-center">
          <Eyebrow>Client Stories</Eyebrow>
          <SectionHeading className="mt-3">Our clients are like family</SectionHeading>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="relative flex flex-col border border-border bg-card p-8"
            >
              <div className="absolute left-0 top-8 bottom-8 w-0.5 bg-[var(--brand-primary)]" />
              <Stars />
              <blockquote className="mt-6 flex-1 text-sm leading-relaxed text-muted-foreground">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <div className="mt-8 flex items-center gap-3">
                <div
                  className="flex h-10 w-10 items-center justify-center text-xs font-bold"
                  style={{
                    backgroundColor: "color-mix(in srgb, var(--brand-primary) 10%, transparent)",
                    color: "var(--brand-primary)",
                  }}
                >
                  {t.initials}
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">{t.name}</p>
                  <p className="text-xs text-muted-foreground">{t.org}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>

      {/* Photo marquee rows */}
      <div className="relative z-10 mt-20 flex flex-col gap-3 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
        <div className="flex animate-marquee items-center gap-3">
          {[...photoRowA, ...photoRowA].map((src, i) => (
            <div key={i} className="relative h-44 w-72 flex-none overflow-hidden border border-border">
              <Image src={src} alt="Event Southwest" fill className="object-cover" sizes="288px" />
            </div>
          ))}
        </div>
        <div className="flex animate-marquee-reverse items-center gap-3">
          {[...photoRowB, ...photoRowB].map((src, i) => (
            <div key={i} className="relative h-44 w-72 flex-none overflow-hidden border border-border">
              <Image src={src} alt="Event Southwest" fill className="object-cover" sizes="288px" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
