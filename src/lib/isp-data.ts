/**
 * ISP Landing Page — Data Constants
 *
 * Comprehensive constants file for nautix.io/isp.
 * Follows the pattern of src/lib/faq-data.ts and src/lib/pricing-data.ts.
 * All text matches the ISP Landing Page write-up document exactly.
 *
 * @see docs/ISP-Landing-Page-Implementation-Plan.md
 */

// ---------------------------------------------------------------------------
//  Shared types
// ---------------------------------------------------------------------------

export interface IspCredibilityChip {
  readonly icon: string;
  readonly text: string;
}

export interface IspPainCard {
  readonly timeAnchor: string;
  readonly headline: string;
  readonly body: string;
  readonly cost: string;
}

export interface IspCapabilityCard {
  readonly icon: string;
  readonly title: string;
  readonly description: string;
  readonly outcome: string;
}

export interface IspPioneerStep {
  readonly time: string;
  readonly action: string;
}

export interface IspPioneerSummary {
  readonly totalTime: string;
  readonly agentsInvolved: string;
  readonly result: string;
}

export interface IspChatMessage {
  readonly sender: "customer" | "ai";
  readonly time: string;
  readonly text: string;
}

export interface IspPioneerLeftColumn {
  readonly heading: string;
  readonly steps: readonly IspPioneerStep[];
  readonly summary: IspPioneerSummary;
}

export interface IspPioneerRightColumn {
  readonly chatMessages: readonly IspChatMessage[];
}

export interface IspNumberStat {
  readonly value: string;
  readonly label: string;
}

export interface IspArchitectureBox {
  readonly title: string;
  readonly items: readonly string[];
}

export interface IspFaqItem {
  readonly question: string;
  readonly answer: string;
}

export interface IspTestimonialData {
  readonly sectionHeading: string;
  readonly quote: string;
  readonly attribution: string;
  readonly context: string;
  readonly integrationLogos: readonly string[];
}

// ---------------------------------------------------------------------------
//  Section 1: Hero
// ---------------------------------------------------------------------------

export interface IspHeroData {
  readonly headline: string;
  readonly subheadline: string;
  readonly credibilityChips: readonly IspCredibilityChip[];
  readonly primaryCta: string;
  readonly secondaryCta: string;
}

/** Hero section — headline, subheadline, credibility chips, CTAs. */
export const HERO_DATA: IspHeroData = {
  headline: "Resolve ISP support issues in under 2 minutes. Automatically.",
  subheadline:
    "Nautix is the WhatsApp AI operations layer for ISPs running Splynx and SmartOLT. It reboots ONUs, collects overdue M-Pesa payments, qualifies new leads, and sends proactive outage alerts — without a human agent.",
  credibilityChips: [
    { icon: "\uD83D\uDD01", text: "Connected to SmartOLT" },
    { icon: "\uD83D\uDCCB", text: "Splynx integration" },
    { icon: "\uD83D\uDCAC", text: "WhatsApp + Instagram + Facebook" },
  ],
  primaryCta: "Book a Demo",
  secondaryCta: "Or watch a 60-second Demo video",
};

// ---------------------------------------------------------------------------
//  Section 2: Problem (Pain Cards)
// ---------------------------------------------------------------------------

export interface IspPainCardsData {
  readonly sectionHeading: string;
  readonly cards: readonly IspPainCard[];
}

/** Problem section — validates the ISP operator's pain with three cards. */
export const PAIN_CARDS_DATA: IspPainCardsData = {
  sectionHeading: "Built for the way ISPs actually run.",
  cards: [
    {
      timeAnchor: "11pm",
      headline:
        "Subscribers message after hours. Your team finished at 6pm.",
      body: "By morning the subscriber has either asked on the estate WhatsApp group or tagged a competing ISP. The churn decision has already been made.",
      cost: "14 unread messages every Monday morning",
    },
    {
      timeAnchor: "12 hrs",
      headline: "Overdue accounts need manual calls to collect.",
      body: "A team member dialling, taking payment over the phone, updating Splynx, calling back to confirm reactivation. Every single overdue account.",
      cost: "47 calls per month, 12 staff hours wasted",
    },
    {
      timeAnchor: "0 alerts",
      headline: "Outages generate dozens of inbound complaints.",
      body: "SmartOLT detects the fault before the subscriber notices \u2014 but subscribers find out when their internet drops, and complaints flood your team while NOC is already fixing it.",
      cost: "Support drowning during every outage",
    },
  ],
};

// ---------------------------------------------------------------------------
//  Section 3: Capabilities
// ---------------------------------------------------------------------------

export interface IspCapabilitiesData {
  readonly sectionHeading: string;
  readonly sectionSubhead: string;
  readonly cards: readonly IspCapabilityCard[];
}

/** Capabilities section — six cards in a 2×3 grid. */
export const CAPABILITIES_DATA: IspCapabilitiesData = {
  sectionHeading: "Six ways Nautix runs your ISP \u2014 automatically.",
  sectionSubhead:
    "Every Tier 1 query, every overdue payment, every new lead \u2014 handled across WhatsApp, Instagram, and Facebook without a human agent in the loop.",
  cards: [
    {
      icon: "\uD83D\uDD01",
      title: "Technical Support",
      description:
        "ONU reboots via SmartOLT, speed diagnosis from live port data, fault detection. Subscriber confirmed in under 90 seconds.",
      outcome: "Resolved automatically",
    },
    {
      icon: "\uD83D\uDCB3",
      title: "Billing & Collections",
      description:
        "M-Pesa payment requested within the WhatsApp conversation. Service restored on confirmation. Splynx ledger updated automatically.",
      outcome: "Zero manual collection calls",
    },
    {
      icon: "\uD83D\uDCE1",
      title: "Proactive Outage Alerts",
      description:
        "SmartOLT detects the fault. Nautix identifies every affected subscriber in Splynx and sends a personalised WhatsApp message \u2014 before they notice.",
      outcome: "Zero inbound complaints",
    },
    {
      icon: "\uD83C\uDFAF",
      title: "Lead Capture",
      description:
        "Instagram and Facebook inquiries qualified in 60 seconds. Coverage checked from Splynx. Installation booked \u2014 at any hour.",
      outcome: "Booked in under 2 minutes",
    },
    {
      icon: "\uD83D\uDC4B",
      title: "Subscriber Onboarding",
      description:
        "Welcome sequence, equipment guide, first billing notice, Day-30 NPS \u2014 every step automatic, every message personalised from the Splynx record.",
      outcome: "Lower 90-day churn",
    },
    {
      icon: "\uD83D\uDCCA",
      title: "Daily Operations Report",
      description:
        "7am WhatsApp summary every morning: resolutions, payments collected, escalations needing your attention \u2014 before the working day starts.",
      outcome: "Monday is review, not catch-up",
    },
  ],
};

// ---------------------------------------------------------------------------
//  Section 4: Pioneer Moment
// ---------------------------------------------------------------------------

export interface IspPioneerMomentData {
  readonly sectionHeading: string;
  readonly leftColumn: IspPioneerLeftColumn;
  readonly rightColumn: IspPioneerRightColumn;
  readonly cta: string;
  readonly ctaSub: string;
}

/**
 * Pioneer Moment section — the timestamped resolution story.
 * The single highest-converting section on the page.
 */
export const PIONEER_MOMENT_DATA: IspPioneerMomentData = {
  sectionHeading:
    "11:47pm. Subscriber loses internet. Fixed by 11:49pm. No agent involved.",
  leftColumn: {
    heading: "What just happened:",
    steps: [
      {
        time: "11:47pm",
        action:
          "Nautix received the WhatsApp message from David about no internet",
      },
      {
        time: "11:47pm",
        action:
          "Queried SmartOLT for David\u2019s ONU device by his account number",
      },
      {
        time: "11:48pm",
        action:
          "Identified the offline ONU and initiated a remote reboot",
      },
      {
        time: "11:48pm",
        action:
          "Device came back online \u00B7 signal confirmed at 48.2 Mbps",
      },
      {
        time: "11:49pm",
        action:
          "Confirmation sent to David. Ticket logged. Support team sees it in the morning report.",
      },
    ],
    summary: {
      totalTime: "1 minute 47 seconds",
      agentsInvolved: "zero",
      result: "Subscriber retained",
    },
  },
  rightColumn: {
    chatMessages: [
      {
        sender: "customer",
        time: "11:47",
        text: "My internet has been down since 10pm \uD83D\uDE24",
      },
      {
        sender: "ai",
        time: "11:48",
        text: "Hi David \u2014 I can see your router lost connection at 10:58pm. Rebooting now \uD83D\uDD27",
      },
      {
        sender: "ai",
        time: "11:49",
        text: "Done \u2705 Internet restored. Signal strong at 48 Mbps. All good?",
      },
      {
        sender: "customer",
        time: "11:49",
        text: "Wow that was fast \uD83D\uDE4F",
      },
    ],
  },
  // cta: "See this working on your network",
  ctaSub: "Book a Demo",
};

// ---------------------------------------------------------------------------
//  Section 5: Numbers
// ---------------------------------------------------------------------------

export interface IspNumbersData {
  readonly sectionHeading: string;
  readonly stats: readonly IspNumberStat[];
  readonly supportingCopy: readonly string[];
}

/** Numbers section — real statistics from a pilot ISP. */
export const NUMBERS_DATA: IspNumbersData = {
  sectionHeading:
    "Real numbers from a 1,200-subscriber WISP \u2014 Month 1.",
  stats: [
    {
      value: "91%",
      label: "Of overnight Tier 1 tickets resolved automatically",
    },
    {
      value: "1m 52s",
      label: "Average resolution time for no-internet queries",
    },
    {
      value: "20 hrs",
      label: "Of staff time freed per week, away from Tier 1 callbacks",
    },
  ],
  supportingCopy: [
    "Monthly churn rate: 5.1% \u2192 3.4%.",
    "Billing collections via in-chat M-Pesa: 34 accounts.",
    "Manual collection calls: 0.",
  ],
};

// ---------------------------------------------------------------------------
//  Section 6: Integration
// ---------------------------------------------------------------------------

export interface IspIntegrationData {
  readonly sectionHeading: string;
  readonly architectureBoxes: readonly IspArchitectureBox[];
  readonly trustSignals: readonly string[];
  readonly integrationLogos: readonly string[];
}

/** Integration section — architecture diagram + trust signals + logo strip. */
export const INTEGRATION_DATA: IspIntegrationData = {
  sectionHeading: "Connects to the systems you already run.",
  architectureBoxes: [
    {
      title: "Subscriber Message",
      items: ["WhatsApp", "Instagram", "Facebook"],
    },
    {
      title: "Nautix",
      items: ["Live query", "Take action", "Confirm"],
    },
    {
      title: "Your Stack",
      items: ["SmartOLT", "Splynx", "M-Pesa Daraja"],
    },
  ],
  trustSignals: [
    "Read-only by default. Write actions require elevated permission.",
    "Every API call logged. Full audit trail.",
    "No data leaves your existing systems \u2014 Nautix sits above them.",
  ],
  integrationLogos: [
    "SmartOLT",
    "Splynx",
    "M-Pesa Daraja",
    "WhatsApp Business",
    "Meta/Instagram",
  ],
};

// ---------------------------------------------------------------------------
//  Section 7: Pilot Offer
// ---------------------------------------------------------------------------

export interface IspPilotOfferData {
  readonly sectionHeading: string;
  readonly subheadline: string;
  readonly trustSignals: readonly string[];
  readonly scarcityLine: string;
  readonly cta: string;
}

/** Pilot Offer section — free 30-day trial, risk reversal, conversion engine. */
export const PILOT_OFFER_DATA: IspPilotOfferData = {
  sectionHeading:
    "Free 30-day pilot. Full integration. No commitment.",
  subheadline:
    "We connect Nautix to your Splynx and SmartOLT. You run the full system on your real subscribers for 30 days. If it does not measurably improve your operations \u2014 you pay nothing.",
  trustSignals: [
    "No setup fee",
    "Full integration in 7 days",
    "Cancel anytime in the first 30 days",
  ],
  scarcityLine: "3 pilot spots remaining this month.",
  cta: "Claim your pilot spot",
};

// ---------------------------------------------------------------------------
//  Section 8: FAQ
// ---------------------------------------------------------------------------

export interface IspFaqData {
  readonly sectionHeading: string;
  readonly questions: readonly IspFaqItem[];
}

/** FAQ section — five objection-handling questions. */
export const FAQ_DATA: IspFaqData = {
  sectionHeading: "Questions ISP operators ask before booking.",
  questions: [
    {
      question:
        "Will my subscribers know they are talking to an AI?",
      answer:
        "The conversations are in your ISP\u2019s voice and tone. Subscribers see them as your support team responding instantly. We configure the persona to match your brand exactly \u2014 your business name, your greeting style, your sign-off. Most subscribers do not realise the responses are automated until you tell them.",
    },
    {
      question: "Does Nautix replace my support team?",
      answer:
        "No. Nautix handles the 60\u201370% of Tier 1 queries that do not require human judgment \u2014 ONU reboots, billing queries, account status, package information. This frees your team for infrastructure issues, complex complaints, and relationship management. Your support team becomes more valuable, not less.",
    },
    {
      question: "How long does the integration take?",
      answer:
        "Typically 7 days from signing the pilot agreement to going live. You provide API access to Splynx and SmartOLT. We handle the integration, configuration, knowledge base setup, and team training. By Day 7, Nautix is responding to your live subscriber WhatsApp messages.",
    },
    {
      question: "What does it cost after the pilot?",
      answer:
        "Starter plans from KES 28,000 per month. Pricing scales with subscriber count and channel volume. Most ISPs on the Growth plan see a 9:1 monthly ROI from staff time freed, billing collections automated, and churn prevented \u2014 we will walk you through the specific numbers for your subscriber base during the demo.",
    },
    {
      question:
        "What if my subscribers want to speak to a real person?",
      answer:
        "Nautix escalates to a human agent automatically when the subscriber explicitly requests one, when a complaint or churn signal is detected, or when the query requires human judgment. The handoff is seamless \u2014 your agent picks up the conversation with the full subscriber context and AI analysis already loaded. The subscriber never has to repeat themselves.",
    },
  ],
};

// ---------------------------------------------------------------------------
//  Section 9: Testimonial
// ---------------------------------------------------------------------------

/** Testimonial section — single pull quote with attribution and logo row. */
export const TESTIMONIAL_DATA: IspTestimonialData = {
  sectionHeading: "Built for ISPs across East Africa.",
  quote:
    "Before, Monday morning was catch-up. After, Monday morning is review.",
  attribution: "WISP Operator",
  context: "1,200 subscribers \u00B7 Splynx + SmartOLT",
  integrationLogos: [
    "SmartOLT",
    "Splynx",
    "WhatsApp Business",
    "M-Pesa Daraja",
    "Instagram",
    "Facebook",
  ],
};

// ---------------------------------------------------------------------------
//  Section 10: Final CTA
// ---------------------------------------------------------------------------

export interface IspFinalCtaData {
  readonly sectionHeading: string;
  readonly subheadline: string;
  readonly primaryCta: string;
  readonly secondaryCta: string;
  readonly secondaryCtaNumber: string;
  readonly riskReversal: readonly string[];
}

/** Final CTA section — last conversion attempt with two CTAs and risk reversal. */
export const FINAL_CTA_DATA: IspFinalCtaData = {
  sectionHeading:
    "See Nautix working on your actual network.",
  subheadline:
    "Book a 15-minute live demo. We connect to your Splynx account, pull a real subscriber record, and show every Nautix function on your data. No slides. No mockups.",
  primaryCta: "Book a Demo",
  secondaryCta: "WhatsApp us instead",
  secondaryCtaNumber: "+254 762 758 987",
  riskReversal: [
    "No credit card. No commitment.",
    "30-day free pilot if you decide to proceed.",
  ],
};

// ---------------------------------------------------------------------------
//  Combined landing page data
// ---------------------------------------------------------------------------

export interface IspLandingPageData {
  readonly hero: IspHeroData;
  readonly painCards: IspPainCardsData;
  readonly capabilities: IspCapabilitiesData;
  readonly pioneerMoment: IspPioneerMomentData;
  readonly numbers: IspNumbersData;
  readonly integration: IspIntegrationData;
  readonly pilotOffer: IspPilotOfferData;
  readonly faq: IspFaqData;
  readonly testimonial: IspTestimonialData;
  readonly finalCta: IspFinalCtaData;
}

/**
 * Combined ISP landing page data.
 *
 * Import this single object in the ISP page component:
 *
 * ```ts
 * import { ISP_LANDING_PAGE_DATA } from "@/lib/isp-data";
 * ```
 */
export const ISP_LANDING_PAGE_DATA: IspLandingPageData = {
  hero: HERO_DATA,
  painCards: PAIN_CARDS_DATA,
  capabilities: CAPABILITIES_DATA,
  pioneerMoment: PIONEER_MOMENT_DATA,
  numbers: NUMBERS_DATA,
  integration: INTEGRATION_DATA,
  pilotOffer: PILOT_OFFER_DATA,
  faq: FAQ_DATA,
  testimonial: TESTIMONIAL_DATA,
  finalCta: FINAL_CTA_DATA,
};
