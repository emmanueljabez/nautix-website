/**
 * Proactive Alerts — Page Data
 *
 * Rich data constants for the /product/proactive-alerts page.
 * Follows the pattern of src/lib/live-system-diagnosis-data.ts.
 */

const BOOK_DEMO_URL =
  "https://app.nautix.io/book/skVGGbpLujeMxRTL2JgwnzUut4AC3N-X/xU-NHVEi4rMuY9DlQZdvrHqnJkY-YVAp";

// ---------------------------------------------------------------------------
//  Shared types
// ---------------------------------------------------------------------------

export interface PaCta {
  readonly label: string;
  readonly href: string;
}

export interface PaPainPoint {
  readonly title: string;
  readonly detail: string;
}

export interface PaStep {
  readonly stepNumber: number;
  readonly title: string;
  readonly detail: string;
}

export interface PaCapabilityCard {
  readonly title: string;
  readonly body: string;
}

export interface PaIndustryRow {
  readonly vertical: string;
  readonly howTheyUseIt: string;
}

export interface PaStat {
  readonly value: string;
  readonly label: string;
}

export interface PaFaqItem {
  readonly question: string;
  readonly answer: string;
}

// ---------------------------------------------------------------------------
//  Section: Metadata
// ---------------------------------------------------------------------------

export interface PaMetadata {
  readonly title: string;
  readonly description: string;
  readonly ogTitle: string;
  readonly ogDesc: string;
  readonly keywords: string;
}

// ---------------------------------------------------------------------------
//  Section: Hero
// ---------------------------------------------------------------------------

export interface PaHero {
  readonly eyebrow: string;
  readonly h1: string;
  readonly subhead: string;
  readonly primaryCta: PaCta;
  readonly secondaryCta: PaCta;
}

// ---------------------------------------------------------------------------
//  Section: Problem
// ---------------------------------------------------------------------------

export interface PaProblem {
  readonly heading: string;
  readonly painPoints: readonly PaPainPoint[];
}

// ---------------------------------------------------------------------------
//  Section: How It Works
// ---------------------------------------------------------------------------

export interface PaHowItWorks {
  readonly heading: string;
  readonly subhead: string;
  readonly steps: readonly PaStep[];
}

// ---------------------------------------------------------------------------
//  Section: Capabilities
// ---------------------------------------------------------------------------

export interface PaCapabilities {
  readonly heading: string;
  readonly cards: readonly PaCapabilityCard[];
}

// ---------------------------------------------------------------------------
//  Section: Industry Table
// ---------------------------------------------------------------------------

export interface PaIndustryTable {
  readonly heading: string;
  readonly subhead: string;
  readonly rows: readonly PaIndustryRow[];
}

// ---------------------------------------------------------------------------
//  Section: Outcomes
// ---------------------------------------------------------------------------

export interface PaOutcomes {
  readonly heading: string;
  readonly stats: readonly PaStat[];
}

// ---------------------------------------------------------------------------
//  Section: FAQ
// ---------------------------------------------------------------------------

export interface PaFaq {
  readonly heading: string;
  readonly items: readonly PaFaqItem[];
}

// ---------------------------------------------------------------------------
//  Section: Final CTA
// ---------------------------------------------------------------------------

export interface PaFinalCta {
  readonly heading: string;
  readonly subhead: string;
  readonly primaryCta: PaCta;
  readonly secondaryCta: PaCta;
  readonly reassurance: string;
}

// ---------------------------------------------------------------------------
//  Combined page data type
// ---------------------------------------------------------------------------

export interface ProactiveAlertsPageData {
  readonly metadata: PaMetadata;
  readonly hero: PaHero;
  readonly problem: PaProblem;
  readonly howItWorks: PaHowItWorks;
  readonly capabilities: PaCapabilities;
  readonly industryTable: PaIndustryTable;
  readonly outcomes: PaOutcomes;
  readonly faq: PaFaq;
  readonly finalCta: PaFinalCta;
}

// ---------------------------------------------------------------------------
//  Page data
// ---------------------------------------------------------------------------

export const PAGE_DATA: ProactiveAlertsPageData = {
  metadata: {
    title: "Proactive Customer Alerts & Notifications | Nautix",
    description:
      "Detect issues and events in your systems and message customers first — before they complain. Turn problems into trust with proactive alerts. Built for African businesses.",
    ogTitle: "Reach Out Before They Ask — Nautix",
    ogDesc:
      "Detect issues in your systems and proactively notify customers first.",
    keywords:
      "proactive alerts, customer notifications, proactive support, automated alerts, outage notifications",
  },
  hero: {
    eyebrow: "PROACTIVE ALERTS",
    h1: "The best message is the one they never had to send.",
    subhead:
      "When something happens — an outage, a payment due, an order shipped, a status change — Nautix detects it in your systems and reaches out to the customer first. Before the complaint. Before the worry. Before they have to ask.",
    primaryCta: { label: "Book a demo", href: BOOK_DEMO_URL },
    secondaryCta: { label: "See it in action", href: "#" },
  },
  problem: {
    heading: "Silence turns small problems into big complaints.",
    painPoints: [
      {
        title: "Customers discover problems first",
        detail:
          'An outage hits and your phone floods with "is it down?" — when you could have told them it was already being fixed.',
      },
      {
        title: "Reactive support always looks slow",
        detail:
          "Answering complaints one by one after the fact makes even a fast team look like they're behind.",
      },
      {
        title: "Your systems know, but stay quiet",
        detail:
          "The information that would reassure the customer is sitting in your systems, unused, while they worry.",
      },
    ],
  },
  howItWorks: {
    heading: "Detect the event. Reach out first.",
    subhead:
      "Nautix watches your systems and turns the events that matter into timely, personal messages.",
    steps: [
      {
        stepNumber: 1,
        title: "Watches for events",
        detail:
          "Outages, overdue payments, shipped orders, status changes, expiring services — whatever matters to your customers.",
      },
      {
        stepNumber: 2,
        title: "Identifies who's affected",
        detail:
          "It pulls the exact list of customers impacted by the event from your systems.",
      },
      {
        stepNumber: 3,
        title: "Sends a personal message",
        detail:
          "Each affected customer gets a clear, personalised heads-up on their preferred channel — not a generic broadcast.",
      },
      {
        stepNumber: 4,
        title: "Handles the replies",
        detail:
          "When customers respond, Nautix answers their follow-up questions automatically — closing the loop.",
      },
    ],
  },
  capabilities: {
    heading: "What proactive alerts do",
    cards: [
      {
        title: "Event detection",
        body: "Monitors your systems for the events that matter and triggers the right message automatically.",
      },
      {
        title: "Precise targeting",
        body: "Messages only the customers actually affected — never spammy mass-blasts.",
      },
      {
        title: "Personalised messages",
        body: "Each alert is tailored with the customer's name, details, and relevant specifics.",
      },
      {
        title: "Two-way follow-up",
        body: "When customers reply with questions, Nautix answers them automatically.",
      },
      {
        title: "Perfect timing",
        body: "Reminders and alerts go out at the right moment — not too early, not too late.",
      },
      {
        title: "Delivery tracking",
        body: "See who was alerted, who opened it, and who responded — full visibility on every campaign.",
      },
    ],
  },
  industryTable: {
    heading: "Reach out first — whatever your business.",
    subhead:
      "The events differ by industry. The trust they build is the same.",
    rows: [
      {
        vertical: "ISPs",
        howTheyUseIt:
          'An outage is detected. Before subscribers even notice, every affected customer gets a message: "We\'ve detected an issue in your area and our team is on it." Complaints become reassurance.',
      },
      {
        vertical: "Real Estate",
        howTheyUseIt:
          "A rent payment is due, a lease is expiring, or a new matching property is listed. The right tenant or buyer hears about it first, automatically.",
      },
      {
        vertical: "E-commerce",
        howTheyUseIt:
          "An order ships, a delivery is delayed, or a wishlist item is back in stock. The customer gets a timely, personal update — not anxious silence.",
      },
      {
        vertical: "Finance / SACCOs",
        howTheyUseIt:
          "A loan repayment is due, a contribution is missed, or a statement is ready. The member is gently reminded before it becomes a problem — improving collections and trust.",
      },
    ],
  },
  outcomes: {
    heading: "What reaching out first delivers",
    stats: [
      {
        value: "50%",
        label: "Fewer inbound complaints during incidents",
      },
      {
        value: "First",
        label: "You tell them — before they find out",
      },
      {
        value: "\u2191",
        label: "Measurably higher trust and retention",
      },
    ],
  },
  faq: {
    heading: "Common questions",
    items: [
      {
        question: "How does Nautix know when to send an alert?",
        answer:
          "It connects to your systems and watches for the events you define — an outage, an overdue payment, a shipped order, an expiring service. When the event happens, the alert is triggered automatically to exactly the right customers.",
      },
      {
        question: "Won't customers find proactive messages annoying?",
        answer:
          "Not when they're relevant and timely. Proactive alerts only go to affected customers, personalised to their situation. A heads-up about an outage or a payment reminder is welcomed — it's the silence that frustrates people.",
      },
      {
        question: "Can customers reply to an alert?",
        answer:
          "Yes, and they should. When a customer replies to an alert with a question, Nautix answers automatically — turning a one-way notification into a helpful two-way conversation.",
      },
      {
        question: "Which channels do alerts go out on?",
        answer:
          "Whichever channel the customer prefers — typically WhatsApp, since it has the highest open rates, but alerts can go across your connected channels.",
      },
    ],
  },
  finalCta: {
    heading: "Turn problems into trust.",
    subhead:
      "See how proactive alerts detect events in your systems and reach customers first — before the complaint, before the worry.",
    primaryCta: { label: "Book a demo", href: BOOK_DEMO_URL },
    secondaryCta: {
      label: "WhatsApp us: +254 720 482 575",
      href: "https://wa.me/254720482575",
    },
    reassurance: "No credit card \u00B7 30-day free pilot \u00B7 Cancel anytime",
  },
};
