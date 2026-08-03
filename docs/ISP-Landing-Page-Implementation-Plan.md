# ISP Landing Page — Implementation Plan

**Project:** nautix.io/isp  
**Team:** David + Erica  
**Status:** Draft for Senior Approval  
**Date:** 2026-06-11  

---

## Table of Contents

1. [Executive Summary](#1-executive-summary)
2. [Strategic Context](#2-strategic-context)
3. [Scope of Work](#3-scope-of-work)
4. [Technical Approach](#4-technical-approach)
5. [Task Breakdown & Assignments](#5-task-breakdown--assignments)
6. [Timeline & Milestones](#6-timeline--milestones)
7. [Dependencies & Prerequisites](#7-dependencies--prerequisites)
8. [Risk Assessment](#8-risk-assessment)
9. [Quality Gates](#9-quality-gates)
10. [Post-Launch Plan](#10-post-launch-plan)

---

## 1. Executive Summary

We are building a dedicated ISP landing page at `nautix.io/isp` targeting East African ISP and WISP operators (200–2,000 subscribers, running Splynx and SmartOLT). The page is for paid acquisition traffic (Meta Ads, Google Ads) and its single job is to convert a paid-ad click into a booked demo.

The page follows a 10-section structure defined in the ISP Landing Page write-up, built as a new Next.js route within the existing `nautix-website` codebase. Total estimated effort: **5–7 working days** for two developers working in parallel. Delivery in two phases: a shareable demo by Day 4, full launch by Day 7.

---

## 2. Strategic Context

### 2.1 Target Persona

East African ISP/WISP operator who:
- Runs Splynx for billing and SmartOLT for ONU management
- Has 200–2,000 subscribers
- Is personally involved in daily operations (time-poor)
- Is skeptical of imported software solutions
- Clicks ads Tuesday–Thursday, 8–10pm, on mobile

### 2.2 Success Criteria

| Metric | Target |
|---|---|
| Page load time (3G) | < 2 seconds |
| Mobile scannability | Fully readable in 60 seconds |
| Time to booked demo | < 90 seconds from landing |
| Conversion rate (click → demo booked) | To be baselined post-launch |

### 2.3 URL Strategy

| Route | Traffic Source | Status |
|---|---|---|
| `nautix.io/isp` | Paid ads (Meta, Google) | **New — this project** |
| `nautix.io/industries/isps` | Organic / SEO | Existing — unchanged |

Two separate routes, no conflict. The existing `/industries/isps` remains as an SEO content page in the industry section tree.

---

## 3. Scope of Work

### 3.1 In Scope

- New Next.js route: `src/app/isp/page.tsx`
- 10 new ISP-specific components in `src/components/isp/`
- Shared primitive extraction from `src/app/alt-home/page.tsx` to `src/components/ui/` and `src/hooks/`
- ISP data constants file: `src/lib/isp-data.ts`
- Integration partner logos in `public/isp-integrations/`
- Sticky navigation with persistent "Book a Demo" CTA
- CSS-based WhatsApp chat animation (hero visual)
- Mobile-first responsive design (380px–1440px)
- SEO metadata, JSON-LD schemas, OpenGraph tags

### 3.2 Out of Scope

- Inline booking form (v1 uses existing Calendly external link; inline form deferred to v2 if data supports it)
- Changes to existing pages (`/industries/isps`, `/pricing`, etc.)
- Backend work or API endpoint creation
- A/B testing setup (infrastructure to be added post-launch)
- Ad creative or campaign configuration
- Changes to the WordPress-mirror CSS or theme

### 3.3 The 10 Sections

| # | Section | Description |
|---|---|---|
| 1 | **Hero** | Headline, subheadline, credibility chips, primary/secondary CTAs, WhatsApp chat animation |
| 2 | **Problem** | Three pain cards: 11pm message, manual collections, outage flood |
| 3 | **Capabilities** | Six capability cards (2x3 grid): Technical support, billing, outage alerts, lead capture, onboarding, daily ops report |
| 4 | **Pioneer Moment** | Timestamped resolution story (11:47pm–11:49pm) with chat bubble recreation |
| 5 | **Numbers** | Three animated stats: 91% auto-resolution, 1m 52s avg time, 20 hrs/week freed |
| 6 | **Integration** | Architecture diagram (3 boxes with arrows) + partner logo strip |
| 7 | **Pilot Offer** | Purple section: free 30-day pilot, scarcity element, CTA |
| 8 | **FAQ** | Five ISP-specific objection-handling questions in accordion |
| 9 | **Testimonial** | One pull quote + integration logos row |
| 10 | **Final CTA** | Dark section: two CTAs (Book a Demo + WhatsApp), risk reversal |

---

## 4. Technical Approach

### 4.1 Stack

| Technology | Current Version | Usage |
|---|---|---|
| Next.js (App Router) | 16.1.6 | Framework — static export |
| React | 19.2.3 | UI library |
| TypeScript | 5.x | Type safety |
| Tailwind CSS | v4 | Utility styling |
| AWS Amplify | — | CI/CD + hosting |

### 4.2 Architecture Decisions

| Decision | Choice | Rationale |
|---|---|---|
| Route structure | `src/app/isp/page.tsx` | Matches existing pattern (`/pricing`, `/demo`, `/features`) |
| Component location | `src/components/isp/` | Domain-based colocation, existing convention |
| Hero visual | CSS animation (not video) | Aligns with page speed requirement, reuses patterns from `alt-home` Dashboard component |
| CTA verb | "Book a Demo" everywhere | Single verb reduces decision fatigue; matches existing site convention |
| Button emphasis color | Purple-to-pink gradient | Brand-consistent; no new brand colors introduced |
| Booking flow | External Calendly link (v1) | Meets <2s load target; simplest path to launch |
| Pricing display | KES 28,000/mo (dedicated ISP pricing constant) | Separate from existing USD pricing, stored in `src/lib/isp-data.ts` |
| Sticky nav | Persistent "Book a Demo" CTA on scroll | Satisfies Principle 1 (CTA always visible) |

### 4.3 File Structure

```
src/
  app/isp/page.tsx                    # Route entry + metadata + orchestrator
  components/isp/
    IspLandingPage.tsx                # Composition of all sections
    IspNav.tsx                        # Sticky nav with persistent CTA
    IspHero.tsx                       # Section 1
    IspProblemCards.tsx               # Section 2
    IspCapabilities.tsx               # Section 3
    IspPioneerMoment.tsx              # Section 4
    IspNumbersSection.tsx             # Section 5
    IspIntegration.tsx                # Section 6
    IspPilotOffer.tsx                 # Section 7
    IspFaq.tsx                        # Section 8
    IspTestimonial.tsx                # Section 9
    IspFinalCta.tsx                   # Section 10
  components/ui/                      # Extracted primitives (shared)
    Pill.tsx
    ArrowRight.tsx
    Counter.tsx
    Wordmark.tsx
  hooks/
    useReveal.ts                      # IntersectionObserver reveal hook
  lib/
    isp-data.ts                       # All ISP constants
public/isp-integrations/              # Partner logos (SmartOLT, Splynx, M-Pesa)
```

### 4.4 Design Tokens (Brand Consistency)

```
/* Primary brand palette (unchanged from existing site) */
Purple:    #7C3AED
Pink:      #EC4899
Dark bg:   #0B0B0E  (near-black)
Light bg:  #FAF8F5  (warm off-white)
Heading:   Outfit (via next/font/google, --font-heading)
Body:      Inter  (via next/font/google, --font-sans)
```

---

## 5. Task Breakdown & Assignments

### Phase 1: Foundation (Day 1, ~2 hours)

| ID | Task | Owner | Est. Time | Dependencies |
|---|---|---|---|---|
| 1.1 | Extract `useReveal` hook to `src/hooks/useReveal.ts` | Erica | 15 min | None |
| 1.2 | Extract `Pill` component to `src/components/ui/Pill.tsx` | Erica | 10 min | None |
| 1.3 | Extract `ArrowRight` icon to `src/components/ui/ArrowRight.tsx` | Erica | 10 min | None |
| 1.4 | Extract `Counter` component to `src/components/ui/Counter.tsx` | Erica | 10 min | None |
| 1.5 | Extract `Wordmark` component to `src/components/ui/Wordmark.tsx` | Erica | 10 min | None |
| 1.6 | Create `src/lib/isp-data.ts` with all ISP constants | David | 30 min | ISP write-up document |
| 1.7 | Create `src/app/isp/page.tsx` with metadata + layout shell | David | 15 min | None |
| 1.8 | Source integration logos to `public/isp-integrations/` | Erica | 15 min | Logo assets from brand team |

**Review Gate 1**: Foundation PR merged. Both verify extract compiles and data is complete.

### Phase 2: Parallel Component Build (Days 2–4)

| ID | Task | Owner | Est. Time | Dependencies |
|---|---|---|---|---|
| 2.1 | `IspNav.tsx` — sticky nav + persistent CTA | Erica | 1 hr | 1.2, 1.3, 1.5 |
| 2.2 | `IspHero.tsx` — headline, sub, chips, CTAs, CSS chat animation | David | 3 hrs | 1.1, 1.2, 1.3 |
| 2.3 | `IspProblemCards.tsx` — 3 pain cards with time anchors | Erica | 1.5 hrs | 1.1 |
| 2.4 | `IspCapabilities.tsx` — 6 cards in 2x3 responsive grid | David | 2.5 hrs | 1.1, 1.2 |
| 2.5 | `IspPioneerMoment.tsx` — timeline + chat bubble recreation | Erica | 3 hrs | 1.1 |
| 2.6 | `IspNumbersSection.tsx` — 3 animated Counter stats | David | 1 hr | 1.4 |
| 2.7 | `IspIntegration.tsx` — architecture diagram + logo strip | Erica | 2 hrs | 1.8 |
| 2.8 | `IspPilotOffer.tsx` — purple section + scarcity + CTA | David | 1 hr | 1.3 |
| 2.9 | `IspFaq.tsx` — 5-question accordion | Erica | 1 hr | 1.1 |
| 2.10 | `IspTestimonial.tsx` — quote + logos row | David | 30 min | 1.8 |
| 2.11 | `IspFinalCta.tsx` — dark section + 2 CTAs + risk reversal | Erica | 1 hr | 1.3 |
| 2.12 | `IspLandingPage.tsx` — orchestrate all sections into one page | David | 1 hr | All sections complete |

**Review Gate 2**: Full page assembled and rendering. Section-level visual review.

### Phase 3: Polish & QA (Days 5–6)

| ID | Task | Owner | Est. Time |
|---|---|---|---|
| 3.1 | Mobile QA — 390px iPhone / 360px Android / in-app browsers | Both | 2 hrs |
| 3.2 | Performance audit — Lighthouse, 3G throttling, bundle size | David | 1 hr |
| 3.3 | CTA link verification — every button routes correctly | Erica | 30 min |
| 3.4 | Content proofread — every section against the write-up | Both | 1 hr |
| 3.5 | Accessibility check — keyboard nav, focus states, aria labels | Erica | 1 hr |
| 3.6 | Sticky nav behavior — scroll test across all sections | David | 30 min |

### Phase 4: Launch (Day 7)

| ID | Task | Owner | Est. Time |
|---|---|---|---|
| 4.1 | Final QA sign-off | Both | 30 min |
| 4.2 | PR to `main` + code review | Both | 30 min |
| 4.3 | Deploy to staging (Amplify preview) | David | 15 min |
| 4.4 | Staging URL verification + final mobile test | Erica | 30 min |
| 4.5 | Deploy to production | David | 15 min |
| 4.6 | Production smoke test — all sections + CTA flows | Both | 20 min |
| 4.7 | Enable tracking events (GA4, Meta Pixel) | David | 30 min |

---

## 6. Timeline & Milestones

```
Week 1 (2026-06-15 to 2026-06-21)

  Monday   Day 1  | Phase 1: Foundation + extraction       | Both
  Tuesday  Day 2  | Phase 2: Hero + Nav + Problem + Capabilities | David: Hero+Capabilities, Erica: Nav+Problem
  Wednesday Day 3 | Phase 2: Pioneer + Numbers + Integration | David: Numbers, Erica: Pioneer+Integration
  Thursday Day 4  | Phase 2: Pilot + FAQ + Testimonial + Final CTA + Orchestration | Both complete remaining sections
                   | ** Milestone: Full page renderable **     |
  Friday   Day 5  | Phase 3: QA + mobile + performance       | Both

Week 2

  Monday   Day 6  | Phase 3: Polish + fixes + proofread      | Both
  Tuesday  Day 7  | Phase 4: Staging deploy + sign-off + production launch | Both
                   | ** Milestone: LIVE on nautix.io/isp **    |
  Wednesday Day 8 | Buffer day for launch issues             | Both
```

**Critical Milestones:**

| Milestone | Date | Deliverable |
|---|---|---|
| Foundation complete | Day 1 EOD | PR with extracted primitives + data file + route shell |
| Full page renderable | Day 4 EOD | All sections composed and visible on `/isp` |
| Launch | Day 7 EOD | `nautix.io/isp` live with tracking in place |

---

## 7. Dependencies & Prerequisites

### 7.1 Required Before Day 1

| Item | Owner | Status |
|---|---|---|
| ISP write-up document approved | Marketing | Complete |
| Access to partner logos (SmartOLT, Splynx, M-Pesa Daraja) | Brand / Design | **Needed** |
| WhatsApp Business number verified | Operations | Confirmed: +254 720 482 575 |
| Calendly (or equivalent) demo booking link configured | Marketing | **Needs confirmation** |
| Real pilot statistics for Section 5 (Numbers) | Product / Sales | **Needs finalized numbers** |
| Real testimonial quote for Section 9 | Customer references | Placeholder ready (anonymized acceptable) |

### 7.2 Internal Team Dependencies

| Team | What We Need |
|---|---|
| Design | Logo assets, any ISP-specific iconography |
| Marketing | Final sign-off on copy, tracking events configuration |
| Sales | Real statistics from existing ISP pilot |
| Product | Confirmation of SmartOLT/Splynx integration details |

---

## 8. Risk Assessment

| Risk | Probability | Impact | Mitigation |
|---|---|---|---|
| Stats not finalized (Section 5) | Medium | High | Build with placeholder constants in `isp-data.ts`; swap real numbers in 10 minutes when available |
| Partner logos not provided | Medium | Medium | Use text labels in integration strip; swap SVGs later |
| CSS chat animation causes performance issues | Low | Medium | Fallback plan: replace with compressed `<video>` (pattern exists in `public/nautix-media/`) |
| Sticky nav conflicts with existing WordPress CSS | Low | Medium | Scope styles with root class `.isp-page` to prevent leakage (same pattern as `.home-enhanced-root`) |
| Static export limitation blocks form | Low | Low | Already decided: use Calendly external link for v1 |
| Mobile in-app browser (Instagram/Facebook) breaks rendering | Medium | High | Test early (Day 3) on actual devices; fix before launch |
| Amplify `baseDirectory` mismatch | High | High | `amplify.yml` points to `.next` but `output: "export"` produces `out/`. **Must fix before v1 deploy.** |

### 8.1 Known Technical Issue to Resolve Before Launch

The project's `next.config.ts` sets `output: "export"` (static export) but `amplify.yml` deploys from `.next/` directory. Static exports output to `out/` by default. These must be reconciled:

- **Option A**: Remove `output: "export"` from `next.config.ts` and let Amplify use standard Next.js build output (`.next/`). Requires verifying no SSR features are needed.
- **Option B**: Change `amplify.yml` `baseDirectory` to `out/` and ensure all static assets work correctly.

**Recommendation**: Option A if the page does not need full static export isolation. Option B if the project must remain static-export compatible.

---

## 9. Quality Gates

Every gate must be passed before moving to the next phase.

### Gate 1: Foundation Complete (End of Day 1)

- [ ] All extracted primitives compile without errors
- [ ] `src/lib/isp-data.ts` is complete with all sections covered
- [ ] `src/app/isp/page.tsx` renders without crashing
- [ ] PR reviewed and merged

### Gate 2: All Sections Render (End of Day 4)

- [ ] All 10 sections visible on `/isp` (localhost)
- [ ] Sticky nav functions correctly across all sections
- [ ] CSS chat animation plays on Chrome, Safari, Firefox
- [ ] Responsive: no layout breakage at 390px or 1440px
- [ ] All CTAs point to correct destinations

### Gate 3: Launch Ready (End of Day 6)

- [ ] Lighthouse score > 90 (Performance, Accessibility, Best Practices)
- [ ] Page loads in < 2 seconds on simulated 3G (Slow 3G throttling in DevTools)
- [ ] Mobile QA passed: iPhone 390px, Android 360px, Instagram/Facebook in-app browsers
- [ ] Content proofread against write-up — zero discrepancies
- [ ] All links verified — no 404s, no wrong destinations
- [ ] Keyboard navigation works through all interactive elements
- [ ] Focus states visible on all buttons and links
- [ ] GA4 + Meta Pixel events firing on page view

### Gate 4: Production (End of Day 7)

- [ ] Staging deploy verified and signed off
- [ ] Production deploy completed
- [ ] Production smoke test passed
- [ ] UTM parameters preserved through booking flow
- [ ] Senior approval obtained

---

## 10. Post-Launch Plan

### 10.1 Week 1 Post-Launch (Days 8–14)

- Monitor page load performance via Lighthouse CI and real-user metrics
- Verify tracking events are populating in GA4 and Meta Ads Manager
- Set up Hotjar (or equivalent) for heatmap + session recording
- Collect first 50 visitor sessions for qualitative review

### 10.2 Week 2–4 (Days 15–30)

- First conversion data available — review drop-off points
- Prioritize v2 improvements based on data:
  - Inline booking form if Calendly external link shows drop-off
  - FAQ reordering if certain questions expand more frequently
  - Hero headline A/B test if click-through rate is below baseline

### 10.3 v2 Candidates (Data-Dependent)

| Feature | Trigger Metric | Est. Effort |
|---|---|---|
| Inline booking form | >30% drop-off from Calendly redirect | 1 day |
| Case study download | High FAQ engagement on Q3/Q4 | 4 hrs |
| ISP ROI calculator | Low pilot sign-up rate | 2 days |
| Video testimonial | Low Section 9 engagement | Depends on asset |

---

## Appendix A: Component Specification Summary

| Component | Sections | Key Elements | Shared Primitives Used |
|---|---|---|---|
| `IspNav` | All (fixed) | Logo, nav links, "Book a Demo" CTA, scroll progress bar | `Wordmark`, `ArrowRight` |
| `IspHero` | 1 | H1, subheadline, credibility chips, 2 CTAs, CSS chat animation | `Pill`, `ArrowRight`, `useReveal` |
| `IspProblemCards` | 2 | Section heading, 3 cards (time anchor, headline, body, cost) | `useReveal` |
| `IspCapabilities` | 3 | Section heading, subhead, 6 icon cards in 2x3 grid | `useReveal` |
| `IspPioneerMoment` | 4 | Section heading, 5-step timeline, 4 chat bubbles | `useReveal` |
| `IspNumbersSection` | 5 | Section heading, 3 `Counter` stats, supporting line | `Counter`, `useReveal` |
| `IspIntegration` | 6 | Section heading, 3-box SVG diagram, logo strip | `useReveal` |
| `IspPilotOffer` | 7 | Section heading, subhead, 3 trust signals, scarcity, CTA | `ArrowRight` |
| `IspFaq` | 8 | Section heading, 5 accordion items | `useReveal` |
| `IspTestimonial` | 9 | Section heading, pull quote, attribution, logo strip | None |
| `IspFinalCta` | 10 | Section heading, subhead, 2 CTAs, risk reversal line | `ArrowRight` |
| `IspLandingPage` | All | Composition order: Nav, Hero, Problem, Capabilities, Pioneer, Numbers, Integration, Pilot, FAQ, Testimonial, Final Cta | All |

---

## Appendix B: Copy Assets Needed

| Item | Source | Deadline |
|---|---|---|
| Customer testimonial quote (attributed or anonymized) | Sales / Customer references | Day 2 |
| Final statistics for Section 5 | ISP pilot data | Day 2 |
| SmartOLT logo (SVG or high-res PNG) | Design / Brand | Day 1 |
| Splynx logo (SVG or high-res PNG) | Design / Brand | Day 1 |
| M-Pesa Daraja logo (SVG or high-res PNG) | Design / Brand | Day 1 |
| WhatsApp Business logo | Public (use official) | Day 1 |
| Meta/Instagram logo | Public (use official) | Day 1 |
