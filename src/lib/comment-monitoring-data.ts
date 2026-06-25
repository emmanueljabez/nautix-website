const DEMO_EMAIL_URL =
  "https://app.nautix.io/book/skVGGbpLujeMxRTL2JgwnzUut4AC3N-X/xU-NHVEi4rMuY9DlQZdvrHqnJkY-YVAp";

export const PAGE_DATA = {
  hero: {
    eyebrow: "Comment Monitoring",
    h1: "Every comment is a customer. Catch them all.",
    subhead:
      "The comments under your posts and ads are full of buyers, questions, and complaints â€” in public, for everyone to see. Nautix monitors every comment and responds or routes it instantly, before it's missed or festers.",
    primaryCta: { label: "Book a Demo", href: DEMO_EMAIL_URL },
    secondaryCta: { label: "See it in action", href: "#how-it-works" },
  },
  problem: {
    heading: "Your comments section. Is leaking money.",
    painPoints: [
      {
        icon: "missed",
        title: "Buying-intent comments go unanswered",
        detail:
          "'How much?' under your ad is a ready buyer. Miss it, and a competitor's faster reply wins them.",
      },
      {
        icon: "complaint",
        title: "Complaints fester in public",
        detail:
          "An angry comment left visible for hours tells every potential customer to stay away.",
      },
      {
        icon: "volume",
        title: "Volume is impossible to track manually",
        detail:
          "A single ad can generate hundreds of comments. No one can watch them all, all the time.",
      },
    ],
  },
  howItWorks: {
    heading: "Watch, understand, respond. Automatically.",
    subhead:
      "Every comment is read, classified, and handled the moment it appears.",
    steps: [
      {
        stepNumber: 1,
        title: "Monitors every comment",
        detail:
          "Nautix watches all comments on your posts and ads across Instagram and Facebook in real time.",
        stat: "Real-time",
        statLabel: "across all posts",
        kind: "eye",
      },
      {
        stepNumber: 2,
        title: "Understands intent",
        detail:
          "It tells a buying question from a complaint from a compliment from spam â€” and treats each appropriately.",
        stat: "Intent",
        statLabel: "detection engine",
        kind: "target",
      },
      {
        stepNumber: 3,
        title: "Responds publicly or moves to DM",
        detail:
          "It can reply in the comment, or move the conversation privately to a DM to close the sale or resolve the issue.",
        stat: "Public + DM",
        statLabel: "dual response",
        kind: "reply",
      },
      {
        stepNumber: 4,
        title: "Routes what needs a human",
        detail:
          "Sensitive complaints or complex questions get flagged and routed to your team with full context.",
        stat: "Smart",
        statLabel: "escalation",
        kind: "user",
      },
    ],
  },
  capabilities: {
    heading: "What comment monitoring does",
    cards: [
      {
        icon: "/nautix-icons/cm-eye.svg",
        title: "Real-time watching",
        body: "Every comment on every post and ad, monitored the moment it appears.",
      },
      {
        icon: "/nautix-icons/cm-target.svg",
        title: "Intent detection",
        body: "Distinguishes buyers, questions, complaints, and spam - and handles each the right way.",
      },
      {
        icon: "/nautix-icons/cm-chat.svg",
        title: "Public + private reply",
        body: "Replies in the comment thread, or moves the conversation to a private DM to close.",
      },
      {
        icon: "/nautix-icons/cm-shield.svg",
        title: "Reputation protection",
        body: "Flags and surfaces negative comments fast, so complaints never sit unaddressed in public.",
      },
      {
        icon: "/nautix-icons/cm-ban.svg",
        title: "Spam filtering",
        body: "Hides or ignores spam and abuse automatically, keeping your comments clean.",
      },
      {
        icon: "/nautix-icons/cm-link.svg",
        title: "Comment-to-DM capture",
        body: "Turns a public commenter into a private lead in your inbox - where you can actually sell.",
      },
    ],
  },
  industryTable: {
    heading: "Comments are opportunities. In every industry.",
    subhead:
      "Whatever you post, the comments are full of customers. Nautix catches them.",
    rows: [
      {
        vertical: "ISPs",
        howTheyUseIt:
          "Comments asking 'do you cover my area?' on a coverage-expansion post get an instant reply and a coverage check  — turning curiosity into a new connection.",
      },
      {
        vertical: "Real Estate",
        howTheyUseIt:
          "'Is this still available?' and 'what's the price?' under a property post get answered instantly and moved to DM to book a viewing before the lead cools.",
      },
      {
        vertical: "E-commerce",
        howTheyUseIt:
          "'How much?' and 'do you deliver to...?' under a product ad get an instant reply and a path to purchase - capturing impulse buyers in the comments.",
      },
      {
        vertical: "Finance / SACCOs",
        howTheyUseIt:
          "Questions about loan products or membership under an awareness post get accurate answers and a private follow-up - protecting trust while capturing interest.",
      },
    ],
  },
  outcomes: {
    heading: "What catching every comment delivers",
    stats: [
      { value: "100%", label: "Of comments monitored and triaged" },
      {
        value: "30%+",
        label: "More leads captured from ad comments",
      },
      {
        value: "Minutes",
        label: "Not hours, before complaints are addressed",
      },
    ],
  },
  faq: {
    heading: "Common questions",
    items: [
      {
        question: "Which platforms does comment monitoring cover?",
        answer:
          "Instagram and Facebook posts and ads. When someone comments, Nautix sees it, understands it, and responds or routes it â€” in real time.",
      },
      {
        question: "Can it move public commenters into private chats?",
        answer:
          "Yes â€” this is one of its most valuable functions. A public 'how much?' can be answered in the thread and simultaneously invited into a private DM where you can actually close the sale.",
      },
      {
        question: "What about negative comments?",
        answer:
          "Negative or sensitive comments are detected and surfaced to your team immediately, so they're never left sitting in public. You decide whether Nautix responds or a human steps in.",
      },
      {
        question: "Will it reply to spam?",
        answer:
          "No. Spam and abuse are filtered out automatically, so only genuine comments get a response and your team's attention stays on real customers.",
      },
    ],
  },
};
