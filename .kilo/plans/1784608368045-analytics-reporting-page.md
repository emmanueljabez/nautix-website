# Analytics & Reporting Product Page

## Goal

Create a new dedicated product page at `/product/analytics-reporting` using the Gallabox-style design language — alternating left-right section layouts, feature cards with illustrations, accordion FAQ, stats bar, and a modern SaaS aesthetic. The page uses the provided copy document and images from `public/analytics-and-reporting/`.

## Route & Structure

- **Route**: `src/app/product/analytics-reporting/page.tsx` (static, coexists with existing `[slug]` dynamic route)
- **No changes** to `src/app/product/[slug]/page.tsx` or `src/lib/seo-pages.ts`
- The page renders as a standalone component tree, not through `LandingSectionPage`

## Available Images (map to sections)

| Image File | Section |
|---|---|
| `Nautix_Product_analytics_reporting-Hero.jpg` | Hero |
| `Nautix_Product_analytics_reporting-Hero1.jpg` | Hero (alternate, use as dashboard visual) |
| `Nautix_Product_analytics_reporting-The-Problem-It-Solves.jpg` | Problem section |
| `Nautix_Product_analytics_reporting-How-It-Works.jpg` | How It Works |
| `Nautix_Product_analytics_reporting-Key-Capabilities.jpg` | Key Capabilities |
| `Nautix_Product_analytics_reporting-Across-Every-Industry-ISPs.jpg` | Industry: ISPs |
| `Nautix_Product_analytics_reporting-Across-Every-Industry-Real-Estate.jpg` | Industry: Real Estate |
| `Nautix_Product_analytics_reporting-Across-Every-Industry-E-commerce.jpg` | Industry: E-commerce |
| `Nautix_Product_analytics_reporting-Across-Every-Industry-Finance.jpg` | Industry: Finance |
| `Nautix_Product_analytics_reporting-The-Outcomes.jpg` | Outcomes |

## Design System & Styling

- **Fonts**: Use existing `--font-inter` (body) and `--font-outfit` (headings) from `globals.css`
- **Colors**: Use existing primary palette (`primary-50` through `primary-950`) from `globals.css`
- **Tailwind v4**: All styling via Tailwind utility classes, no custom CSS needed
- **Layout**: Full-width sections with `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8` containers
- **Backgrounds**: Alternate between white (`bg-background`) and light tint (`bg-primary-50/50`) sections for visual rhythm
- **Cards**: `rounded-2xl border border-black/5 bg-white shadow-sm` — consistent with existing site

## Page Sections (in order)

### 1. Hero
- Eyebrow badge: "ANALYTICS & REPORTING"
- H1: "Run your operation on facts, not feelings."
- Subhead paragraph
- Two CTAs: "Book a demo →" (primary, filled) and "See it in action" (outline)
- Right side: Dashboard image (`Hero.jpg`) with subtle border/shadow
- Background: `bg-background`

### 2. The Problem It Solves
- Heading: "You can't improve what you can't see."
- Intro paragraph (2 sentences)
- 3 pain-point cards in a row (grid-cols-3):
  - "Performance is invisible"
  - "Data is scattered or missing"
  - "Decisions are guesswork"
- Each card: icon (use inline SVG — eye-off, scatter, question-mark), title, description
- Background: `bg-primary-50/50`

### 3. How It Works
- Heading: "Everything measured. Everything visible."
- Subhead
- 4 numbered steps in a vertical timeline or horizontal cards:
  1. Captures everything
  2. Organises into metrics
  3. Shows it on live dashboards
  4. Delivers a daily report
- Right side: `How-It-Works.jpg` image
- Background: `bg-background`
- Layout: text left, image right (alternating pattern)

### 4. Key Capabilities
- Heading: "What analytics & reporting does"
- 6 cards in a 3x2 grid:
  - Live dashboards, Daily report, Response & resolution metrics, Revenue & payment tracking, Lead & conversion insight, Trends over time
- Each card: emoji icon, title, description
- Background: `bg-primary-50/50`

### 5. Across Every Industry
- Heading: "Clear insight for every operation."
- Subhead
- 4 industry cards (2x2 grid on desktop, 1 column on mobile):
  - ISPs, Real Estate, E-commerce, Finance
- Each card: image thumbnail, industry name, description (concrete examples from copy)
- Background: `bg-background`

### 6. The Outcomes
- Heading: "What full visibility delivers"
- 3 stat cards in a row:
  - "7am" — Daily report, before your day even starts
  - "Real-time" — Dashboards covering your whole operation
  - "100%" — Of activity captured and measurable
- Right side: `The-Outcomes.jpg` image
- Background: `bg-primary-950` (dark section for contrast) with white text

### 7. FAQ
- Heading: "Common questions"
- 4 accordion items (expandable/collapsible):
  - What does the daily report include?
  - Can I see data broken down by channel, team, or type?
  - Is the data real-time?
  - Can I export reports or share them?
- Use client component with `useState` for accordion toggle
- Background: `bg-background`

### 8. Final CTA
- Heading: "Know exactly how your operation is performing."
- Subhead
- Two CTAs: "Book a demo →" and "WhatsApp us: +254 720 482 575"
- Reassurance line: "No credit card · 30-day free pilot · Cancel anytime"
- Background: `bg-primary-50/50`

## Cross-Links (in Final CTA or footer area)

- Omnichannel Inbox → `/product/channels-inbox`
- Autonomous Resolution → `/product/ai-resolution`
- Full Payment Loop → `/product/payments`

## SEO Metadata

- **Title**: "Customer Operations Analytics & Reporting | Nautix"
- **Description**: "Turn every conversation, lead, and payment into clear dashboards and a daily report. See response times, resolution rates, and revenue at a glance. For African businesses."
- **OG Title**: "See Your Whole Operation at a Glance — Nautix"
- **OG Description**: "Dashboards and a daily report covering conversations, leads, resolutions, and payments."
- **Keywords**: customer analytics, operations reporting, support analytics, conversation analytics, business dashboards
- **FAQPage JSON-LD**: Include for the 4 FAQ items

## Component Architecture

```
src/app/product/analytics-reporting/
  page.tsx                    — Server component, assembles all sections, SEO metadata
  components/
    HeroSection.tsx           — Hero with dashboard image
    ProblemSection.tsx        — 3 pain-point cards
    HowItWorksSection.tsx     — 4-step process with image
    CapabilitiesSection.tsx   — 6-card feature grid
    IndustrySection.tsx       — 4 industry cards with images
    OutcomesSection.tsx       — Dark stats section
    FaqSection.tsx            — Client component, accordion
    FinalCtaSection.tsx       — CTA with cross-links
```

All section components are server components except `FaqSection.tsx` (needs `"use client"` for accordion state).

## Implementation Tasks

1. Create `src/app/product/analytics-reporting/page.tsx` with SEO metadata and section composition
2. Create `src/app/product/analytics-reporting/components/HeroSection.tsx`
3. Create `src/app/product/analytics-reporting/components/ProblemSection.tsx`
4. Create `src/app/product/analytics-reporting/components/HowItWorksSection.tsx`
5. Create `src/app/product/analytics-reporting/components/CapabilitiesSection.tsx`
6. Create `src/app/product/analytics-reporting/components/IndustrySection.tsx`
7. Create `src/app/product/analytics-reporting/components/OutcomesSection.tsx`
8. Create `src/app/product/analytics-reporting/components/FaqSection.tsx` (client component)
9. Create `src/app/product/analytics-reporting/components/FinalCtaSection.tsx`
10. Run `npm run lint` and `npm run build` to validate

## Validation

- `npm run build` succeeds with no errors
- `npm run lint` passes
- Page renders at `/product/analytics-reporting`
- FAQ accordion toggles work
- All images load from `/analytics-and-reporting/` path
- Responsive: works on mobile, tablet, desktop
- SEO metadata present in page source
