"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronUp, ChevronDown } from "lucide-react";
import { Section, Container, Eyebrow } from "@/components/atoms";

const faqs = [
  {
    question: "What types of events do you manage?",
    answer: "We specialize in large-scale public events including marathons, charity walks, municipal festivals, corporate activations, and community gatherings. If it involves crowds, permits, and logistics, we've done it.",
  },
  {
    question: "How far in advance should we contact you?",
    answer: "For large events (5,000+ attendees), we recommend reaching out 6–12 months in advance. For smaller activations, 3–4 months is typically sufficient. That said, we've pulled off last-minute productions — don't hesitate to call.",
  },
  {
    question: "Do you handle permitting and public safety?",
    answer: "Yes. Permit acquisition, public safety coordination, law enforcement liaison, and volunteer management are all part of our turn-key production model. We own the outcome so you don't have to juggle vendors.",
  },
  {
    question: "Can you work alongside our existing team?",
    answer: "Absolutely. We offer three engagement models: full-service, production-only, and strategic consulting. We adapt to your team's capabilities and fill in exactly where you need us.",
  },
  {
    question: "How do you price your services?",
    answer: "Every event is different, so we don't publish flat rates. After an initial consultation we'll scope the project and provide a detailed proposal. Book a free call to get started.",
  },
  {
    question: "Are you licensed and insured?",
    answer: "Yes. We carry full general liability and event production insurance. We can provide certificates of insurance to municipalities, venues, and partners as required.",
  },
];

export function FAQ() {
  const [open, setOpen] = useState<number>(0);

  return (
    <Section>
      <Container>
        <div className="grid grid-cols-12" style={{ gap: 24 }}>

          {/* Left — heading */}
          <div className="col-span-5 flex flex-col gap-6">
            <Eyebrow>FAQ</Eyebrow>
            <h2
              className="font-heading font-black text-foreground"
              style={{ fontSize: "clamp(2.4rem, 4vw, 4rem)", lineHeight: 0.95, letterSpacing: 0 }}
            >
              Frequently asked questions
            </h2>
            <p className="text-muted-foreground" style={{ marginTop: 8 }}>
              Don't see the answer you're looking for?{" "}
              <Link href="#contact" className="text-foreground underline underline-offset-4">
                Get in touch.
              </Link>
            </p>
          </div>

          {/* Right — accordion */}
          <div className="col-span-6 col-start-7">
            {faqs.map((faq, i) => (
              <div key={faq.question} className="border-t border-border">
                <button
                  className="w-full flex items-center justify-between text-left"
                  style={{ paddingTop: 24, paddingBottom: 24 }}
                  onClick={() => setOpen(open === i ? -1 : i)}
                >
                  <span className="font-sans font-semibold text-foreground" style={{ fontSize: "clamp(1rem, 1.2vw, 1.15rem)" }}>
                    {faq.question}
                  </span>
                  {open === i
                    ? <ChevronUp size={18} className="text-muted-foreground shrink-0 ml-4" />
                    : <ChevronDown size={18} className="text-muted-foreground shrink-0 ml-4" />
                  }
                </button>

                {open === i && (
                  <p className="text-muted-foreground" style={{ paddingBottom: 24 }}>
                    {faq.answer}
                  </p>
                )}
              </div>
            ))}
            <div className="border-t border-border" />
          </div>

        </div>
      </Container>
    </Section>
  );
}
