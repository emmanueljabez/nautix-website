export type LandingPageData = {
  slug: string;
  path: string;
  title: string;
  description: string;
  heading: string;
  subheading: string;
  highlights: readonly string[];
  outcomes: readonly string[];
  keywords: readonly string[];
};

const DEMO_EMAIL_URL = "mailto:support@nautix.io?subject=Book%20a%20Nautix%20Demo";

export const SOLUTION_SLUGS = ["marketing", "sales", "customer-support"] as const;
export type SolutionSlug = (typeof SOLUTION_SLUGS)[number];

export const SOLUTION_PAGES: Record<SolutionSlug, LandingPageData> = {
  marketing: {
    slug: "marketing",
    path: "/solutions/marketing",
    title: "Marketing Automation Solution | Nautix",
    description:
      "Capture intent from comments and DMs, qualify leads automatically, and move campaigns faster across WhatsApp, Instagram, and Facebook.",
    heading: "Marketing automation that turns intent into pipeline.",
    subheading:
      "Nautix picks up inbound intent, qualifies prospects, and keeps follow-up running so campaign traffic does not go cold.",
    highlights: [
      "Capture leads from Instagram and Facebook comments in real time.",
      "Trigger auto-DM and follow-up flows the moment intent is detected.",
      "Segment audiences by buying intent and route the right journey.",
      "Re-engage warm prospects automatically with timed nudges.",
    ],
    outcomes: [
      "Faster response on high-intent campaigns.",
      "Lower lead leakage during peak traffic windows.",
      "More qualified conversations passed to sales.",
    ],
    keywords: [
      "marketing automation whatsapp",
      "instagram comment automation",
      "facebook dm automation",
      "lead capture automation",
    ],
  },
  sales: {
    slug: "sales",
    path: "/solutions/sales",
    title: "Sales Automation Solution | Nautix",
    description:
      "Qualify inbound buyers, guide offers, and close inside chat with payment and workflow actions handled directly in conversation.",
    heading: "Sales execution inside the conversation.",
    subheading:
      "Nautix qualifies buyers, routes offers, and keeps momentum from first message to payment confirmation.",
    highlights: [
      "Collect qualification context in minutes, not days.",
      "Route each prospect to the right plan, product, or next step.",
      "Run nurture sequences automatically for warm and cold opportunities.",
      "Initiate and confirm payment from the same customer thread.",
    ],
    outcomes: [
      "Shorter lead-to-close cycle times.",
      "Higher consistency in follow-up execution.",
      "More conversions without adding headcount.",
    ],
    keywords: [
      "sales automation whatsapp",
      "chat based lead qualification",
      "conversational sales software",
      "whatsapp payment collection",
    ],
  },
  "customer-support": {
    slug: "customer-support",
    path: "/solutions/customer-support",
    title: "Customer Support Automation Solution | Nautix",
    description:
      "Resolve routine customer issues automatically, send proactive alerts, and escalate only exceptions with full context to human teams.",
    heading: "Customer support that resolves, not just responds.",
    subheading:
      "Nautix handles high-volume Tier 1 requests, keeps customers informed proactively, and escalates only when human judgment is needed.",
    highlights: [
      "Resolve billing, account, and order-status requests automatically.",
      "Send proactive alerts before customers contact your team.",
      "Escalate with complete context when intervention is required.",
      "Reduce repetitive workload while preserving service quality.",
    ],
    outcomes: [
      "Lower Tier 1 workload for support agents.",
      "Faster issue resolution across channels.",
      "More consistent customer experience at scale.",
    ],
    keywords: [
      "customer support automation",
      "ai support agent whatsapp",
      "tier 1 resolution automation",
      "omnichannel support software",
    ],
  },
};

export const INDUSTRY_SLUGS = ["isps", "real-estate", "ecommerce", "finance"] as const;
export type IndustrySlug = (typeof INDUSTRY_SLUGS)[number];

export const INDUSTRY_PAGES: Record<IndustrySlug, LandingPageData> = {
  isps: {
    slug: "isps",
    path: "/industries/isps",
    title: "Internet Service Providers | Nautix",
    description:
      "Nautix helps ISPs resolve subscriber issues faster, automate outage communication, and reduce repetitive support load across channels.",
    heading: "Purpose-built for internet service providers.",
    subheading:
      "Handle outage communication, account requests, and service troubleshooting without flooding your human queue.",
    highlights: [
      "Automate subscriber updates for outages and maintenance windows.",
      "Handle common service and billing requests in real time.",
      "Trigger approved operational actions in connected ISP workflows.",
      "Escalate difficult tickets with complete interaction context.",
    ],
    outcomes: [
      "Faster first response for subscriber requests.",
      "Lower call-center pressure during outages.",
      "Improved service transparency and customer trust.",
    ],
    keywords: [
      "isp customer support automation",
      "telecom whatsapp automation",
      "outage communication automation",
      "subscriber support ai",
    ],
  },
  "real-estate": {
    slug: "real-estate",
    path: "/industries/real-estate",
    title: "Real Estate Automation | Nautix",
    description:
      "Capture property demand, qualify buyers, and book site visits faster with always-on conversational workflows.",
    heading: "Real estate conversations that convert faster.",
    subheading:
      "Nautix responds to listing demand instantly, qualifies buyer intent, and moves serious prospects into site-visit and closing flows.",
    highlights: [
      "Capture inbound property interest from comments and DMs instantly.",
      "Qualify buyers by budget, location, and readiness criteria.",
      "Automate site-visit scheduling and reminders.",
      "Keep agents focused on high-intent prospects only.",
    ],
    outcomes: [
      "More qualified site visits from social channels.",
      "Lower leakage from high-intent leads.",
      "Improved speed from inquiry to booking.",
    ],
    keywords: [
      "real estate lead qualification",
      "property inquiry automation",
      "site visit booking automation",
      "real estate whatsapp crm",
    ],
  },
  ecommerce: {
    slug: "ecommerce",
    path: "/industries/ecommerce",
    title: "Ecommerce Conversational Automation | Nautix",
    description:
      "Convert social demand into confirmed orders with automated support, payment prompts, and post-purchase messaging.",
    heading: "Built for ecommerce teams that sell in chat.",
    subheading:
      "From product questions to payment confirmation, Nautix keeps ecommerce conversations moving without manual bottlenecks.",
    highlights: [
      "Handle product, stock, and shipping queries instantly.",
      "Recover abandoned conversations with structured follow-up.",
      "Initiate and verify payment within active conversations.",
      "Send post-purchase and dispatch updates automatically.",
    ],
    outcomes: [
      "Higher conversion from social traffic.",
      "Fewer lost orders from delayed responses.",
      "More consistent buyer journey at scale.",
    ],
    keywords: [
      "ecommerce whatsapp automation",
      "instagram dm sales automation",
      "chat commerce software",
      "order support automation",
    ],
  },
  finance: {
    slug: "finance",
    path: "/industries/finance",
    title: "Finance and SACCO Conversational Automation | Nautix",
    description:
      "Serve members faster with automated eligibility checks, repayment workflows, and support resolution across chat channels.",
    heading: "Finance workflows delivered in conversation.",
    subheading:
      "Nautix helps SACCOs, MFIs, and financial teams resolve member queries quickly while automating repayment and service workflows.",
    highlights: [
      "Handle balance, repayment, and eligibility inquiries instantly.",
      "Run repayment reminders and collection flows automatically.",
      "Confirm transaction and service status in real time.",
      "Escalate regulated or sensitive cases to human teams with context.",
    ],
    outcomes: [
      "Faster service for member-facing requests.",
      "More repayment consistency through proactive automation.",
      "Lower manual workload for frontline support teams.",
    ],
    keywords: [
      "sacco whatsapp automation",
      "mfi customer support automation",
      "financial services conversational ai",
      "repayment reminder automation",
    ],
  },
};

export const PRODUCT_SLUGS = ["channels-inbox", "ai-resolution", "payments", "analytics"] as const;
export type ProductSlug = (typeof PRODUCT_SLUGS)[number];

export const PRODUCT_PAGES: Record<ProductSlug, LandingPageData> = {
  "channels-inbox": {
    slug: "channels-inbox",
    path: "/product/channels-inbox",
    title: "Channels and Inbox | Nautix Product",
    description:
      "Manage WhatsApp, Instagram, and Facebook conversations in one operational inbox with routing, SLA tracking, and team collaboration.",
    heading: "One inbox for every customer channel.",
    subheading:
      "Nautix unifies conversation flow across channels so teams can work from one operating view instead of fragmented inboxes.",
    highlights: [
      "Unified threads across WhatsApp, Instagram, and Facebook.",
      "Routing rules by intent, urgency, and team ownership.",
      "SLA visibility and escalation triggers built into flow.",
      "Context preserved across handoff and channel changes.",
    ],
    outcomes: [
      "Faster team coordination during high message volume.",
      "Lower response-time variance across channels.",
      "Improved accountability and case ownership.",
    ],
    keywords: [
      "omnichannel inbox",
      "whatsapp instagram shared inbox",
      "team inbox software",
      "customer operations inbox",
    ],
  },
  "ai-resolution": {
    slug: "ai-resolution",
    path: "/product/ai-resolution",
    title: "AI Resolution Engine | Nautix Product",
    description:
      "Nautix AI resolution engine reads intent, checks live context, resolves routine issues, and escalates only exceptions.",
    heading: "AI resolution engine for real operations.",
    subheading:
      "Go beyond scripted chatbot flows with AI agents that can execute approved actions and resolve routine requests end to end.",
    highlights: [
      "Intent detection with context-aware response logic.",
      "Execution of approved operational actions in flow.",
      "Built-in human handoff with action history attached.",
      "Continuous tuning from conversation outcomes.",
    ],
    outcomes: [
      "Higher autonomous resolution for routine requests.",
      "Lower repetitive workload for human teams.",
      "More consistent quality across high-volume support.",
    ],
    keywords: [
      "ai resolution engine",
      "autonomous customer support",
      "ai agent platform",
      "chat automation engine",
    ],
  },
  payments: {
    slug: "payments",
    path: "/product/payments",
    title: "Conversational Payments | Nautix Product",
    description:
      "Initiate, verify, and confirm payment inside active conversations while keeping workflow state and customer context in sync.",
    heading: "Payments built into the conversation flow.",
    subheading:
      "Nautix supports payment progression from prompt to confirmation without forcing customers to restart in separate channels.",
    highlights: [
      "Payment prompt and collection within active threads.",
      "Real-time status checks and confirmation messaging.",
      "Workflow updates tied to payment outcome automatically.",
      "Consistent audit trail across payment-linked actions.",
    ],
    outcomes: [
      "Lower drop-off between intent and payment.",
      "Faster confirmation and fulfillment readiness.",
      "Improved conversion for chat-led sales journeys.",
    ],
    keywords: [
      "conversational payments",
      "whatsapp payment automation",
      "chat checkout automation",
      "payment confirmation workflow",
    ],
  },
  analytics: {
    slug: "analytics",
    path: "/product/analytics",
    title: "Analytics and Performance Insights | Nautix Product",
    description:
      "Track response speed, resolution quality, conversion flow, and AI performance with analytics designed for customer operations teams.",
    heading: "Analytics for execution, not vanity metrics.",
    subheading:
      "Measure how conversations move through qualification, resolution, and conversion so teams can improve outcomes continuously.",
    highlights: [
      "Response time and resolution dashboards by channel.",
      "Conversion and funnel visibility across conversation stages.",
      "AI performance and escalation trend monitoring.",
      "Team productivity and workload distribution insights.",
    ],
    outcomes: [
      "Clear visibility into what drives resolution and conversion.",
      "Faster optimization of workflows and escalation logic.",
      "Better planning for team capacity and channel growth.",
    ],
    keywords: [
      "customer operations analytics",
      "ai support analytics",
      "conversation performance dashboard",
      "whatsapp support reporting",
    ],
  },
};

export const COMPARE_SLUGS = ["nautix-vs-wati", "nautix-vs-respond-io"] as const;
export type CompareSlug = (typeof COMPARE_SLUGS)[number];

export const COMPARE_PAGES: Record<CompareSlug, LandingPageData> = {
  "nautix-vs-wati": {
    slug: "nautix-vs-wati",
    path: "/compare/nautix-vs-wati",
    title: "Nautix vs Wati | Comparison",
    description:
      "Compare Nautix and Wati for autonomous resolution, operational actions, and conversation-led conversion workflows.",
    heading: "Nautix vs Wati: execution layer vs inbox layer.",
    subheading:
      "Wati helps teams manage conversation routing. Nautix is built to execute real actions in-flow: qualify, resolve, collect, and escalate with context.",
    highlights: [
      "Nautix focuses on outcome execution, not only routing and response.",
      "AI workflows can resolve routine requests end to end.",
      "Payment and conversion actions run within active conversation flow.",
      "Escalation happens with full context and action history attached.",
    ],
    outcomes: [
      "Lower manual load for repetitive request categories.",
      "Higher operational consistency across channels.",
      "Stronger conversion from conversation-led demand.",
    ],
    keywords: [
      "nautix vs wati",
      "wati alternative",
      "whatsapp automation comparison",
      "customer support platform comparison",
    ],
  },
  "nautix-vs-respond-io": {
    slug: "nautix-vs-respond-io",
    path: "/compare/nautix-vs-respond-io",
    title: "Nautix vs Respond.io | Comparison",
    description:
      "Compare Nautix and Respond.io for AI resolution depth, workflow execution, and conversion-focused customer operations.",
    heading: "Nautix vs Respond.io: from routing to resolution.",
    subheading:
      "Respond.io is strong at omnichannel inbox coordination. Nautix adds an execution layer that resolves routine issues and drives conversion in-channel.",
    highlights: [
      "Autonomous workflows designed for support, sales, and marketing actions.",
      "Execution logic tied to operational context, not only templated replies.",
      "Built-in payment and workflow progression from active conversations.",
      "Escalation pathways preserve context and prior actions automatically.",
    ],
    outcomes: [
      "Improved resolution speed on routine requests.",
      "Reduced context loss during human handoff.",
      "More conversions from social and messaging channels.",
    ],
    keywords: [
      "nautix vs respond.io",
      "respond.io alternative",
      "omnichannel support comparison",
      "ai messaging platform comparison",
    ],
  },
};

export const DEMO_PAGE: LandingPageData = {
  slug: "demo",
  path: "/demo",
  title: "Book a Live Demo | Nautix",
  description:
    "Book a live Nautix demo to see AI workflows handling qualification, resolution, and conversion across your real channels and use cases.",
  heading: "See Nautix working on your real use case.",
  subheading:
    "In a focused walkthrough, we map your channels and workflows, then show how Nautix can qualify leads, resolve requests, and drive conversion with less manual effort.",
  highlights: [
    "Live walkthrough using your own customer journey scenarios.",
    "Clear view of setup requirements and implementation sequence.",
    "Workflow recommendations for marketing, sales, and support.",
    "Success criteria and pilot plan aligned to measurable outcomes.",
  ],
  outcomes: [
    "Clear deployment path tailored to your team.",
    "Confidence in expected operational impact.",
    "Pilot scope aligned to real conversion and resolution goals.",
  ],
  keywords: [
    "book nautix demo",
    "nautix pilot",
    "customer operations demo",
    "whatsapp ai automation demo",
  ],
};

export const DEFAULT_PRIMARY_CTA = {
  label: "Book a Demo",
  href: DEMO_EMAIL_URL,
} as const;

export const DEFAULT_SECONDARY_CTA = {
  label: "See Pricing",
  href: "/pricing",
} as const;
