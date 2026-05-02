# Event South West — Build Progress

## Brand Brief

**Company:** Event South West  
**Tagline:** "The best kept secret in event management."  
**Personality:** Bold, Confident, Experienced  
**Primary CTA:** Book a free consultation  

**Visual system:**
- Primary color: `#DF00FF` (electric magenta) — Phase 3B
- Background: `#08080f` (deep navy, near-black)
- Heading font: Big Shoulders (ultra-bold, condensed)
- Body font: Inter
- Corner style: 0px square
- Image direction: Dark cinematic

**Services:**
1. Event Feasibility & Planning
2. Event Production & Logistics
3. Creative & Marketing
4. Specialized Services

**Stats:** 14+ yrs · 4M+ participants · 52-person team · 7+ yr avg client relationship

---

## Phase Status

- [x] Phase 0 — Scaffold (Next.js 16, shadcn v4, Tailwind v4)
- [x] Phase 1 — Brand brief locked
- [x] Phase 2 — Design system (dark tokens, fonts, atoms, Container, Section)
- [ ] Phase 3A — Sections (in progress)
- [ ] Phase 3B — Brand color + polish
- [ ] Phase 4 — Pre-launch check

---

## Phase 3A — Section Progress

| Section | Status | Notes |
|---------|--------|-------|
| Nav | ✅ Done | Fixed header, 12-col grid, CTA button |
| Hero | ✅ Done | 100vh, 5-col text + 5-col photo placeholder, stats bar |
| Trust Strip | ✅ Done | Scrolling marquee |
| Services | ✅ Done | 4-col border grid, icons, no service numbers |
| Work | ✅ Done | Featured card + 3-col grid, caption overlays |
| Editorial Break | ✅ Done | Full-bleed, headline + CTA pinned bottom-left |
| Process | ✅ Done | 4-col grid, ghost numbers, steps TBD |
| Testimonials | ⏳ Next | |
| FAQ | ⏳ To do | |
| CTA + NAP | ⏳ To do | |
| Footer | ⏳ To do | |

---

## Design Decisions

- **Grid:** 12-column, `gap-6`, max-width 1920px, 40px side gutters — enforced via `Container` atom
- **Section spacing:** 40px top, 80px bottom — enforced via `Section` atom
- **Section header spacing:** 24px eyebrow → headline, 80px headline → content
- **Body font size:** `clamp(15px, 1.2vw, 18px)`, line-height 1.2
- **Paragraph max-width:** 65ch
- **Smaller body text:** `.text-body-sm` class — `clamp(13px, 0.9vw, 15px)`
- **Button padding:** 12px top/bottom, 40px left/right (inline style)
- **Headline tracking:** 0 (natural)
- **Border radius:** 0px everywhere

---

## To Do Before Phase 3B

- [ ] Fill in Process step titles and descriptions
- [ ] Build Testimonials, FAQ, CTA+NAP, Footer
- [ ] Replace photo placeholders with real/stock images
- [ ] Responsive layout pass (mobile breakpoints)
- [ ] Drop in brand color `#DF00FF`
