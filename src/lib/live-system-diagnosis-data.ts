/**
 * Live System Diagnosis — Page Data
 *
 * Rich data constants for the /product/live-system-diagnosis page.
 * Follows the pattern of src/lib/isp-data.ts.
 * This is the source of truth for all page copy; the component reads from here.
 */

const BOOK_DEMO_URL =
  "https://app.nautix.io/book/skVGGbpLujeMxRTL2JgwnzUut4AC3N-X/xU-NHVEi4rMuY9DlQZdvrHqnJkY-YVAp";

// ---------------------------------------------------------------------------
//  Shared types
// ---------------------------------------------------------------------------

export interface LsdCta {
  readonly label: string;
  readonly href: string;
}

export interface LsdPainPoint {
  readonly title: string;
  readonly detail: string;
}

export interface LsdStep {
  readonly stepNumber: number;
  readonly title: string;
  readonly detail: string;
}

export interface LsdCapabilityCard {
  readonly title: string;
  readonly body: string;
}

export interface LsdIndustryRow {
  readonly vertical: string;
  readonly howTheyUseIt: string;
}

export interface LsdStat {
  readonly value: string;
  readonly label: string;
}

export interface LsdFaqItem {
  readonly question: string;
  readonly answer: string;
}

// ---------------------------------------------------------------------------
//  Section: Metadata
// ---------------------------------------------------------------------------

export interface LsdMetadata {
  readonly title: string;
  readonly description: string;
  readonly ogTitle: string;
  readonly ogDesc: string;
  readonly keywords: string;
}

// ---------------------------------------------------------------------------
//  Section: Hero
// ---------------------------------------------------------------------------

export interface LsdHero {
  readonly eyebrow: string;
  readonly h1: string;
  readonly subhead: string;
  readonly primaryCta: LsdCta;
  readonly secondaryCta: LsdCta;
}

// ---------------------------------------------------------------------------
//  Section: Problem
// ---------------------------------------------------------------------------

export interface LsdProblem {
  readonly heading: string;
  readonly painPoints: readonly LsdPainPoint[];
}

// ---------------------------------------------------------------------------
//  Section: How It Works
// ---------------------------------------------------------------------------

export interface LsdHowItWorks {
  readonly heading: string;
  readonly subhead: string;
  readonly steps: readonly LsdStep[];
}

// ---------------------------------------------------------------------------
//  Section: Capabilities
// ---------------------------------------------------------------------------

export interface LsdCapabilities {
  readonly heading: string;
  readonly cards: readonly LsdCapabilityCard[];
}

// ---------------------------------------------------------------------------
//  Section: Industry Table
// ---------------------------------------------------------------------------

export interface LsdIndustryTable {
  readonly heading: string;
  readonly subhead: string;
  readonly rows: readonly LsdIndustryRow[];
}

// ---------------------------------------------------------------------------
//  Section: Outcomes
// ---------------------------------------------------------------------------

export interface LsdOutcomes {
  readonly heading: string;
  readonly stats: readonly LsdStat[];
}

// ---------------------------------------------------------------------------
//  Section: FAQ
// ---------------------------------------------------------------------------

export interface LsdFaq {
  readonly heading: string;
  readonly items: readonly LsdFaqItem[];
}

// ---------------------------------------------------------------------------
//  Section: Final CTA
// ---------------------------------------------------------------------------

export interface LsdFinalCta {
  readonly heading: string;
  readonly subhead: string;
  readonly primaryCta: LsdCta;
  readonly secondaryCta: LsdCta;
  readonly reassurance: string;
}

// ---------------------------------------------------------------------------
//  Combined page data type
// ---------------------------------------------------------------------------

export interface LiveSystemDiagnosisPageData {
  readonly metadata: LsdMetadata;
  readonly hero: LsdHero;
  readonly problem: LsdProblem;
  readonly howItWorks: LsdHowItWorks;
  readonly capabilities: LsdCapabilities;
  readonly industryTable: LsdIndustryTable;
  readonly outcomes: LsdOutcomes;
  readonly faq: LsdFaq;
  readonly finalCta: LsdFinalCta;
}

// ---------------------------------------------------------------------------
//  Page data
// ---------------------------------------------------------------------------

export const PAGE_DATA: LiveSystemDiagnosisPageData = {
  metadata: {
    title: "Live System Diagnosis & Real-Time Lookups | Nautix",
    description:
      "Nautix connects to your billing, inventory, and account systems to answer customer questions with real, live data — not canned replies. Built for African businesses.",
    ogTitle: "Real Answers from Your Real Systems — Nautix",
    ogDesc:
      "Live lookups into your billing, inventory, and account systems mid-conversation.",
    keywords:
      "live system diagnosis, real-time lookup, system integration, account lookup, automated diagnosis",
  },
  hero: {
    eyebrow: "LIVE SYSTEM DIAGNOSIS",
    h1: "Real answers, pulled from your real systems.",
    subhead:
      "Generic chatbots guess. Nautix connects to your actual systems — billing, accounts, inventory, network — and looks up the true, current answer to a customer's question while the conversation is still live.",
    primaryCta: { label: "Book a demo", href: BOOK_DEMO_URL },
    secondaryCta: { label: "See it in action", href: "#" },
  },
  problem: {
    heading: "A reply that isn't real is worse than no reply.",
    painPoints: [
      {
        title: "The answer exists but isn't reachable",
        detail:
          "Your systems know whether the payment cleared or the item's in stock. Most chatbots simply can't access that.",
      },
      {
        title: "Manual lookups are slow",
        detail:
          "A human has to stop, open the billing system, search the account, and come back — for every single query.",
      },
      {
        title: "Generic replies erode trust",
        detail:
          "'We'll check and get back to you' for a question your system could answer instantly makes you look slow and disorganized.",
      },
    ],
  },
  howItWorks: {
    heading: "It checks. It doesn't guess.",
    subhead:
      "Connected directly to your systems, Nautix retrieves the real answer in the moment.",
    steps: [
      {
        stepNumber: 1,
        title: "Customer asks a question",
        detail:
          "'Did my payment go through?' 'Is this product available?' 'What's my account status?'",
      },
      {
        stepNumber: 2,
        title: "Nautix identifies the customer",
        detail:
          "It matches the conversation to the right account, order, or record in your system.",
      },
      {
        stepNumber: 3,
        title: "Queries the live system",
        detail:
          "It securely reads the current, real data — the payment status, the stock level, the account balance, the device state.",
      },
      {
        stepNumber: 4,
        title: "Answers with the truth",
        detail:
          "The customer gets the actual answer, right now — not a placeholder, not a guess, not a 'we'll check.'",
      },
    ],
  },
  capabilities: {
    heading: "What live diagnosis does",
    cards: [
      {
        title: "Connects to your systems",
        body: "Nautix plugs into the billing, inventory, network, and accounting systems you already run.",
      },
      {
        title: "Real-time lookups",
        body: "Every answer is pulled live — no stale data, no cached guesses.",
      },
      {
        title: "Read-only by default",
        body: "Security-first: Nautix looks up information without the ability to write or modify data unless you explicitly grant write access.",
      },
      {
        title: "Full audit trail",
        body: "Every single lookup is logged. You know who asked, when, and what system answered — for full visibility and accountability.",
      },
      {
        title: "Customer matching",
        body: "Nautix uses identifiers like phone numbers, account IDs, or order references to find the exact record in your system.",
      },
      {
        title: "Your data stays put",
        body: "We don't copy your data. We read it live, on demand, governed by your security rules.",
      },
    ],
  },
  industryTable: {
    heading: "Live answers, from whatever systems you run.",
    subhead:
      "Connected to your stack, Nautix gives customers real answers in real time.",
    rows: [
      {
        vertical: "ISPs",
        howTheyUseIt:
          "A subscriber reports slow internet. Nautix queries the network management system, reads the live signal and device status, and diagnoses the issue on the spot.",
      },
      {
        vertical: "Real Estate",
        howTheyUseIt:
          "A prospect asks if a unit is still available. Nautix checks the live listing system and confirms availability, price, and viewing slots instantly.",
      },
      {
        vertical: "E-commerce",
        howTheyUseIt:
          'A shopper asks "is this in stock and when can it arrive?" Nautix reads the live inventory and delivery system and answers with real figures.',
      },
      {
        vertical: "Finance / SACCOs",
        howTheyUseIt:
          'A member asks "did my deposit reflect?" or "what\'s my loan balance?" Nautix queries the core system and returns the real, current figure securely.',
      },
    ],
  },
  outcomes: {
    heading: "What live diagnosis delivers",
    stats: [
      {
        value: "Real-time",
        label: "Answers pulled from live systems, not scripts",
      },
      {
        value: "0",
        label: "Manual lookups for routine status questions",
      },
      {
        value: "100%",
        label: "Of lookups logged for full auditability",
      },
    ],
  },
  faq: {
    heading: "Common questions",
    items: [
      {
        question: "What systems can Nautix connect to?",
        answer:
          "Billing platforms, account systems, inventory systems, network management tools, and payment providers. If your system has an API, Nautix can typically connect to it. We'll confirm your specific stack during setup.",
      },
      {
        question: "Is it safe to connect Nautix to my systems?",
        answer:
          "Yes. Nautix is read-only by default — it looks up information without changing anything. Every lookup is logged, your data stays in your systems, and write access is only ever granted with your explicit permission.",
      },
      {
        question: "How does it know which customer is which?",
        answer:
          "Nautix matches each conversation to the right record in your system using identifiers like phone number, account number, or order reference — so it always looks up the correct customer.",
      },
      {
        question: "What if the system is down or slow?",
        answer:
          "Nautix handles errors gracefully — if a system can't be reached, it lets the customer know it's checking and routes to a human rather than guessing or giving a wrong answer.",
      },
    ],
  },
  finalCta: {
    heading: "Give customers the real answer — instantly.",
    subhead:
      "See how live system diagnosis connects Nautix to your billing, inventory, and account systems to answer questions with real data, in real time.",
    primaryCta: { label: "Book a demo", href: BOOK_DEMO_URL },
    secondaryCta: {
      label: "WhatsApp us: +254 720 482 575",
      href: "https://wa.me/254720482575",
    },
    reassurance: "No credit card \u00B7 30-day free pilot \u00B7 Cancel anytime",
  },
};
