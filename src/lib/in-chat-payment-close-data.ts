const DEMO_EMAIL_URL =
  "https://app.nautix.io/book/skVGGbpLujeMxRTL2JgwnzUut4AC3N-X/xU-NHVEi4rMuY9DlQZdvrHqnJkY-YVAp";

export const PAGE_DATA = {
  hero: {
    eyebrow: "In-Chat Payment Close",
    h1: "Close the sale before the moment cools.",
    subhead:
      "When a customer is ready to buy, every extra step loses them. Nautix closes the sale right inside the chat — requests payment, takes it via mobile money, and confirms — capturing the buying moment exactly where it happens.",
    primaryCta: { label: "Book a demo", href: DEMO_EMAIL_URL },
    secondaryCta: { label: "See it in action", href: "#how-it-works" },
  },
  problem: {
    heading: "Every step between 'yes' and 'paid' loses customers.",
    painPoints: [
      {
        icon: "redirect",
        title: "Redirects kill momentum",
        detail:
          "Sending a ready buyer to a separate page or app introduces friction exactly when you should be closing.",
      },
      {
        icon: "hesitation",
        title: "Hesitation creeps in",
        detail:
          "Each extra step is a moment for second thoughts, distractions, and abandoned purchases.",
      },
      {
        icon: "context-lost",
        title: "The conversation context is lost",
        detail:
          "Once they leave the chat to pay elsewhere, the connection — and often the sale — breaks.",
      },
    ],
  },
  howItWorks: {
    heading: "Request, pay, confirm. all in the chat.",
    subhead:
      "The whole payment happens inside the conversation, on the channel the customer is already using.",
    steps: [
      {
        stepNumber: 1,
        title: "Customer is ready to buy",
        detail:
          "The conversation reaches the moment of decision — they want to pay.",
        stat: "In-chat",
        statLabel: "intent",
        kind: "intent",
      },
      {
        stepNumber: 2,
        title: "Nautix requests payment in-chat",
        detail:
          "A payment request goes out right in the conversation, with the exact amount and clear instructions.",
        stat: "Exact",
        statLabel: "amount",
        kind: "request",
      },
      {
        stepNumber: 3,
        title: "Customer pays via mobile money",
        detail:
          "They pay with M-Pesa or their preferred mobile money — without leaving the chat or re-entering details.",
        stat: "M-Pesa",
        statLabel: "native",
        kind: "mpesa",
      },
      {
        stepNumber: 4,
        title: "Payment confirms instantly",
        detail:
          "Nautix verifies the payment in real time and confirms the sale — the customer is done, in seconds.",
        stat: "Seconds",
        statLabel: "confirmed",
        kind: "confirm",
      },
    ],
  },
  capabilities: {
    heading: "What in-chat closing does",
    cards: [
      {
        kind: "chat",
        title: "Pay in the conversation",
        body: "No redirects, no separate apps — the payment happens where the customer already is.",
      },
      {
        kind: "mobile",
        title: "Mobile money native",
        body: "M-Pesa and mobile money built in — the way your customers already pay.",
      },
      {
        kind: "instant",
        title: "Instant confirmation",
        body: "Payment is verified in real time and the sale confirmed on the spot.",
      },
      {
        kind: "target",
        title: "Captures the moment",
        body: "Closes while intent is highest — before hesitation or distraction sets in.",
      },
      {
        kind: "receipt",
        title: "Auto-receipts",
        body: "Customers get an instant receipt and confirmation, all within the chat.",
      },
      {
        kind: "secure",
        title: "Secure & verified",
        body: "Every payment is securely processed and verified before the sale is confirmed.",
      },
    ],
  },
  industryTable: {
    heading: "Close the sale in-chat. in any business.",
    subhead:
      "Wherever the buying decision happens, the payment happens right there too.",
    rows: [
      {
        vertical: "ISPs",
        howTheyUseIt:
          "A subscriber ready to pay an overdue bill or buy an upgrade pays right in the chat via M-Pesa — and service is restored or upgraded the moment payment confirms.",
      },
      {
        vertical: "Real Estate",
        howTheyUseIt:
          "A booking fee, deposit, or application payment is requested and paid inside the conversation — securing the commitment while the intent is hot.",
      },
      {
        vertical: "E-commerce",
        howTheyUseIt:
          "A shopper ready to buy completes payment in-chat — no cart abandonment on a separate checkout page, just a fast close where they decided.",
      },
      {
        vertical: "Finance / SACCOs",
        howTheyUseIt:
          "A member makes a contribution, loan repayment, or fee payment directly in the conversation — fast, verified, and recorded, without sending them elsewhere.",
      },
    ],
  },
  outcomes: {
    heading: "What closing in-chat delivers",
    stats: [
      { value: "\u2191 35%", label: "Higher close rate vs sending payment links away" },
      {
        value: "Seconds",
        label: "From 'yes' to paid and confirmed",
      },
      {
        value: "0",
        label: "Redirects, drop-off pages, or re-entered details",
      },
    ],
  },
  faq: {
    heading: "Common questions",
    items: [
      {
        question: "What payment methods are supported?",
        answer:
          "Mobile money — M-Pesa and the methods your customers already use — built directly into the conversation. We'll confirm the specific providers for your market during setup.",
      },
      {
        question: "Is paying in-chat secure?",
        answer:
          "Yes. Payments are processed securely through trusted payment infrastructure and verified in real time before any sale is confirmed. Customers pay with the same trusted mobile money flow they already know.",
      },
      {
        question: "Does the customer leave WhatsApp to pay?",
        answer:
          "No — that's the entire point. The payment request and confirmation happen within the conversation, so the customer never loses momentum by being sent to a separate page or app.",
      },
      {
        question: "How does the customer get a receipt?",
        answer:
          "Automatically, in the chat. The moment payment is confirmed, Nautix sends an instant receipt and confirmation right in the conversation.",
      },
    ],
  },
};
