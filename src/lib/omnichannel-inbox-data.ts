const DEMO_EMAIL_URL =
  "https://app.nautix.io/book/skVGGbpLujeMxRTL2JgwnzUut4AC3N-X/xU-NHVEi4rMuY9DlQZdvrHqnJkY-YVAp";

export const PAGE_DATA = {
  hero: {
    eyebrow: "Omnichannel Inbox", 
    h1: "Every customer conversation, in one place.",
    subhead:
      "Your customers message you on WhatsApp, Instagram, Facebook, and your website. Nautix brings every conversation into one shared inbox — so nothing slips through, and your whole team works from the same screen.",
    primaryCta: { label: "Book a Demo", href: DEMO_EMAIL_URL },
    secondaryCta: { label: "See it in action", href: "#how-it-works" },
  },
  problem: {
    heading: "Messages everywhere. Answers nowhere.",
    painPoints: [
  {
    icon: "/nautix-icons/oi-msg-scattered.svg",
    title: "Messages scattered across apps",
    detail:
      "Your team toggles between WhatsApp Web, Instagram, Facebook Pages, and email all day — and still misses things.",
  },
  {
    icon: "/nautix-icons/oi-no-visibility.svg",
    title: "No shared visibility",
    detail:
      "Two team members reply to the same customer. Or worse, nobody does, because each assumed the other had it.",
  },
  {
    icon: "/nautix-icons/oi-context-lost.svg",
    title: "Context lost between channels",
    detail:
      "A customer who DM'd on Instagram last week messages on WhatsApp today — and your team has no memory of the first conversation.",
  },
],
   
  },
  howItWorks: {
    heading: "One inbox. Every channel. Full context.",
    subhead:
      "Connect your channels once. Every message flows into a single, shared, organised queue.",
    steps: [
      {
        stepNumber: 1,
        title: "Connect your channels",
        detail:
          "Link WhatsApp Business, Instagram, Facebook, and your website chat in a few clicks. No technical setup.",
        stat: "< 5 min",
        statLabel: "per channel",
        kind: "connect",
      },
      {
        stepNumber: 2,
        title: "Messages unify automatically",
        detail:
          "Every incoming message — regardless of channel — lands in one shared inbox, tagged by source and customer.",
        stat: "1 inbox",
        statLabel: "all channels",
        kind: "train",
      },
      {
        stepNumber: 3,
        title: "Your team works together",
        detail:
          "Assign conversations, leave internal notes, see who's handling what. No two people reply to the same customer twice.",
        stat: "Unlimited",
        statLabel: "team members",
        kind: "launch",
      },
      {
        stepNumber: 4,
        title: "History follows the customer",
        detail:
          "Every past conversation across every channel is attached to the customer, so context is never lost.",
        stat: "100%",
        statLabel: "context retained",
        kind: "train",
      },
    ],
  },
  capabilities: {
    heading: "What the inbox does",
        cards: [
      {
        title: "Unified queue",
        body: "WhatsApp, Instagram, Facebook, and webchat in one stream — sorted, tagged, and searchable.",
      },
      {
        icon: "/nautix-icons/oi-team.svg",
        title: "Team assignment",
        body: "Route conversations to the right person. See who's online, who's handling what, and what's unassigned.",
      },
      {
        icon: "/nautix-icons/oi-notes.svg",
        title: "Internal notes",
        body: "Leave private notes on any conversation that only your team can see — never the customer.",
      },
      {
        icon: "/nautix-icons/oi-tags.svg",
        title: "Tags & labels",
        body: "Categorise conversations by type, priority, or status so nothing important gets buried.",
      },
      {
        icon: "/nautix-icons/oi-search.svg",
        title: "Full-text search",
        body: "Find any past conversation by customer name, keyword, or channel in seconds.",
      },
      {
        icon: "/nautix-icons/oi-tracking.svg",
        title: "Response tracking",
        body: "See how fast your team responds, where the backlog is, and which conversations are waiting too long.",
      },
    ],
  },
  industries: {
    heading: "One inbox. Every kind of business.",
    subhead:
      "However your customers reach you, they land in the same organised queue.",
    
      cards: [
      {
        image: "/nautix-product/Omnichannel%20Inbox/isps.png",
        label: "ISPs ",
        desc: "Subscriber support requests from WhatsApp, outage complaints from Facebook, and new-line inquiries from Instagram — all in one queue, routed to the right technician or sales rep.",
      },
      {
        image: "/nautix-product/Omnichannel%20Inbox/real-estate.png",
        label: "Real Estate",
        desc: "Property inquiries from Instagram ads, viewing requests on WhatsApp, and tenant maintenance issues from Facebook — unified so no hot lead or urgent repair is missed.",
      },
      {
        image: "/nautix-product/Omnichannel%20Inbox/e-commerce.png",
        label: "E-commerce",
        desc: "Order questions, delivery follow-ups, and product inquiries across every social channel — consolidated so your team answers fast and closes more sales.",
      },
      {
        image: "/nautix-product/Omnichannel%20Inbox/finance-saccos.png",
        label: "Finance / SACCOs",
        desc: "Member inquiries, loan questions, and account requests from every channel — organised, assigned, and answered with full member history attached.",
      },
    ],
  },
  outcomes: {
    heading: "What unifying your inbox delivers",
    stats: [
      { value: "0", label: "Missed messages — every channel in one queue" },
      {
        value: "3×",
        label: "Faster response times with shared team visibility",
      },
      {
        value: "100%",
        label: "Conversation history retained across channels",
      },
    ],
  },
  faq: {
    heading: "Common questions",
    items: [
      {
        question: "Which channels can I connect?",
        answer:
          "WhatsApp Business, Instagram, Facebook Messenger, and your website's webchat. We add new channels regularly — ask us about any specific platform you need.",
      },
      {
        question: "Can my whole team use the same inbox?",
        answer:
          "Yes. The inbox is built for teams. You can add unlimited team members, assign conversations, see who's handling what, and leave internal notes that customers never see.",
      },
      {
        question: "Will I lose my existing chat history?",
        answer:
          "No. Once connected, your conversations flow into Nautix and stay attached to each customer. Going forward, every conversation across every channel is preserved in one place.",
      },
      {
        question: "Do customers know they're talking through Nautix?",
        answer:
          "No. Customers continue messaging you exactly as they do now — on WhatsApp, Instagram, or Facebook. Nautix simply organises everything behind the scenes for your team.",
      },
    ],
  },
  finalCta: {
    heading: "Bring every conversation into one place.",
    subhead:
      "See how the omnichannel inbox unifies your WhatsApp, Instagram, Facebook, and webchat into a single screen your whole team can work from.",
    primaryCta: { label: "Book a demo", href: DEMO_EMAIL_URL },
    secondaryCta: {
      label: "WhatsApp us: +254 762 758 987",
      href: "https://wa.me/254762758987",
    },
    reassurance: "No credit card \u00B7 30-day free pilot \u00B7 Cancel anytime",
  },
};
