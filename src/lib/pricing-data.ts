export type PricingPlan = {
  name: string;
  price: string;
  suffix: string;
  note: string;
  ctaLabel: string;
  ctaHref: string;
  highlighted: boolean;
  ctaFootnote: string;
  features: readonly string[];
};

export type BillingCycle = "monthly" | "annual";
export type ComparisonValue = string | boolean;

const REGISTER_URL = "https://app.nautix.io/register";
const DEMO_URL = "mailto:support@nautix.io?subject=Talk%20to%20Nautix%20Sales";

export const PLATFORM_PLANS = {
  monthly: [
    {
      name: "Starter",
      price: "$50",
      suffix: "/mo",
      note: "Perfect for small businesses starting with WhatsApp.",
      ctaLabel: "Start 14-day pilot",
      ctaHref: REGISTER_URL,
      highlighted: false,
      ctaFootnote: "No credit card required",
      features: [
        "Up to 5 team members",
        "1 WhatsApp Business number",
        "1,000 service conversations/mo",
        "Shared team inbox",
        "Basic automation workflows",
      ],
    },
    {
      name: "Growth",
      price: "$170",
      suffix: "/mo",
      note: "For growing teams that need advanced routing, campaigns, and analytics.",
      ctaLabel: "Start 14-day pilot",
      ctaHref: REGISTER_URL,
      highlighted: true,
      ctaFootnote: "Best for scaling teams",
      features: [
        "Up to 20 team members",
        "Up to 5 WhatsApp numbers",
        "10,000 service conversations/mo",
        "Broadcast campaigns & sequences",
        "Advanced analytics & dashboards",
      ],
    },
    {
      name: "Enterprise",
      price: "Talk to Us",
      suffix: "",
      note: "For high-volume businesses needing custom workflows, SLAs, and deeper integrations.",
      ctaLabel: "Contact Sales",
      ctaHref: DEMO_URL,
      highlighted: false,
      ctaFootnote: "Custom onboarding included",
      features: [
        "Unlimited team members",
        "Unlimited WhatsApp numbers",
        "30,000 service conversations/mo",
        "Custom API & webhook integrations",
        "24/7 priority support",
      ],
    },
  ],
  annual: [
    {
      name: "Starter",
      price: "$45",
      suffix: "/mo",
      note: "Perfect for small businesses starting with WhatsApp.",
      ctaLabel: "Start 14-day pilot",
      ctaHref: REGISTER_URL,
      highlighted: false,
      ctaFootnote: "Billed $540 annually",
      features: [
        "Up to 5 team members",
        "1 WhatsApp Business number",
        "1,000 service conversations/mo",
        "Shared team inbox",
        "Basic automation workflows",
      ],
    },
    {
      name: "Growth",
      price: "$153",
      suffix: "/mo",
      note: "For growing teams that need advanced routing, campaigns, and analytics.",
      ctaLabel: "Start 14-day pilot",
      ctaHref: REGISTER_URL,
      highlighted: true,
      ctaFootnote: "Billed $1,836 annually",
      features: [
        "Up to 20 team members",
        "Up to 5 WhatsApp numbers",
        "10,000 service conversations/mo",
        "Broadcast campaigns & sequences",
        "Advanced analytics & dashboards",
      ],
    },
    {
      name: "Enterprise",
      price: "Talk to Us",
      suffix: "",
      note: "For high-volume businesses needing custom workflows, SLAs, and deeper integrations.",
      ctaLabel: "Contact Sales",
      ctaHref: DEMO_URL,
      highlighted: false,
      ctaFootnote: "Custom annual agreements",
      features: [
        "Unlimited team members",
        "Unlimited WhatsApp numbers",
        "30,000 service conversations/mo",
        "Custom API & webhook integrations",
        "24/7 priority support",
      ],
    },
  ],
} as const satisfies Record<BillingCycle, readonly PricingPlan[]>;

export const AI_QUANTITIES = [100, 500, 1000, 2000, 3000, 5000] as const;

export const COMPARISON_GROUPS = [
  {
    heading: "Platform plans",
    rows: [
      { label: "Team members", values: ["Up to 5", "Up to 20", "Unlimited"] },
      { label: "WhatsApp numbers", values: ["1", "Up to 5", "Unlimited"] },
      { label: "Included service conversations", values: ["1,000/mo", "10,000/mo", "30,000/mo"] },
      { label: "Shared team inbox", values: [true, true, true] },
      { label: "Chat routing & SLA alerts", values: [false, true, true] },
      { label: "Broadcast campaigns", values: [false, true, true] },
      { label: "Automation workflows", values: ["Basic", "Advanced", "Custom"] },
      { label: "Analytics dashboards", values: ["Basic", "Advanced", "Custom"] },
      { label: "Support", values: ["Email", "Priority email & chat", "24/7 priority"] },
    ],
  },
  {
    heading: "AI agent add-on",
    rows: [
      { label: "Available on this plan", values: [false, true, true] },
      { label: "24/7 AI responses", values: [false, true, true] },
      { label: "Custom knowledge base", values: [false, true, true] },
      { label: "Human handoff", values: [false, true, true] },
      { label: "Sentiment analysis", values: [false, true, true] },
      { label: "AI performance analytics", values: [false, true, true] },
    ],
  },
] as const;

export const PRICING_REGISTER_URL = REGISTER_URL;
export const PRICING_DEMO_URL = DEMO_URL;
