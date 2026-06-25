const DEMO_EMAIL_URL =
  "https://app.nautix.io/book/skVGGbpLujeMxRTL2JgwnzUut4AC3N-X/xU-NHVEi4rMuY9DlQZdvrHqnJkY-YVAp";

export const PAGE_DATA = {
  hero: {
    eyebrow: "Autonomous Resolution",
    h1: "Resolves. Doesn't just respond.",
    subhead:
      "A chatbot acknowledges the problem. Nautix solves it. It takes the real action — restoring a service, processing a request, completing a task — end to end, without waking a single team member.",
    primaryCta: { label: "Book a Demo", href: DEMO_EMAIL_URL },
    secondaryCta: { label: "See it in action", href: "#how-it-works" },
  },
  problem: {
    heading: "Responding. is not the same as resolving.",
    painPoints: [
      {
        icon: "acknowledge",
        title: "Acknowledgement isn't resolution",
        detail:
          "'We've received your request' doesn't restore the service, process the refund, or complete the task. The work still waits.",
      },
      {
        icon: "human",
        title: "Humans still do the real work",
        detail:
          "Most 'automation' just routes the actual problem to a person, who does what the system could have done itself.",
      },
      {
        icon: "outcome",
        title: "Customers want the outcome, not the chat",
        detail:
          "Nobody messages support for a pleasant conversation. They want the thing fixed. Fast.",
      },
    ],
  },
  howItWorks: {
    heading: "From problem to solved. Automatically.",
    subhead:
      "Nautix understands the issue, takes the real action, and confirms it's done.",
    steps: [
      {
        stepNumber: 1,
        title: "Understands the real problem",
        detail:
          "It identifies what the customer actually needs resolved — not just keywords, but the underlying issue.",
        stat: "Intent",
        statLabel: "understanding",
        kind: "understand",
      },
      {
        stepNumber: 2,
        title: "Diagnoses against live systems",
        detail:
          "It checks the real state of things in your systems to understand what's wrong and what action will fix it.",
        stat: "Live",
        statLabel: "system check",
        kind: "diagnose",
      },
      {
        stepNumber: 3,
        title: "Takes the action",
        detail:
          "It performs the real fix — restoring service, updating a record, processing the request — directly in your systems.",
        stat: "Action",
        statLabel: "executed",
        kind: "action",
      },
      {
        stepNumber: 4,
        title: "Confirms resolution",
        detail:
          "It verifies the problem is actually solved and tells the customer — then logs the whole thing for your team.",
        stat: "Verified",
        statLabel: "& logged",
        kind: "confirm",
      },
    ],
  },
  capabilities: {
    heading: "What autonomous resolution does",
    cards: [
      {
        icon: "/nautix-icons/icon-end-to-end-action.svg",
        title: "End-to-end action",
        body: "Takes the real step that fixes the problem — not a message about the problem.",
      },
      {
        icon: "/nautix-icons/icon-understands-intent.svg",
        title: "Understands intent",
        body: "Reads what the customer truly needs resolved, even when they phrase it imperfectly.",
      },
      {
        icon: "/nautix-icons/icon-acts-in-systems.svg",
        title: "Acts in your systems",
        body: "Performs the fix directly — with the permissions and guardrails you set.",
      },
      {
        icon: "/nautix-icons/icon-approval-gates.svg",
        title: "Approval gates",
        body: "Sensitive actions can require human approval before they execute — you decide which.",
      },
      {
        icon: "/nautix-icons/icon-smart-escalation.svg",
        title: "Smart escalation",
        body: "When something genuinely needs a human, it hands off cleanly with full context.",
      },
      {
        icon: "/nautix-icons/icon-complete-logging.svg",
        title: "Complete logging",
        body: "Every action it takes is recorded and auditable, so you always know exactly what happened.",
      },
    ],
  },
  industryTable: {
    heading: "Real resolution. in every industry.",
    subhead:
      "Whatever 'fixing it' means for your business, Nautix does the actual work.",
    rows: [
      {
        vertical: "ISPs",
        howTheyUseIt:
          "A subscriber's connection drops. Nautix diagnoses the offline device, reboots it remotely, confirms the signal is restored, and tells the customer — all in under two minutes.",
      },
      {
        vertical: "Real Estate",
        howTheyUseIt:
          "A tenant reports a maintenance issue. Nautix logs it, assigns the right vendor, schedules the visit, and confirms the appointment — without a property manager touching it.",
      },
      {
        vertical: "E-commerce",
        howTheyUseIt:
          "A customer wants to change a delivery address before dispatch. Nautix updates the order in the system, confirms the change, and notifies fulfilment — instantly.",
      },
      {
        vertical: "Finance / SACCOs",
        howTheyUseIt:
          "A member requests a statement or a balance reset. Nautix verifies identity, performs the action in the core system, and delivers the result securely.",
      },
    ],
  },
  outcomes: {
    heading: "What true resolution delivers",
    stats: [
      { value: "60-70%", label: "Of routine issues resolved without a human" },
      {
        value: "< 2 min",
        label: "Typical end-to-end resolution time",
      },
      {
        value: "24/7",
        label: "Resolution — not just responses — around the clock",
      },
    ],
  },
  faq: {
    heading: "Common questions",
    items: [
      {
        question: "How is this different from a chatbot?",
        answer:
          "A chatbot replies with words. Nautix takes action. Where a chatbot says 'we'll restore your service shortly,' Nautix actually restores the service, confirms it worked, and closes the issue — without a human.",
      },
      {
        question: "What if I don't want it taking certain actions automatically?",
        answer:
          "You're in full control. Sensitive or high-risk actions can require human approval before they execute. You decide exactly what Nautix resolves on its own and what it routes for a human to approve.",
      },
      {
        question: "What happens with problems it can't resolve?",
        answer:
          "It escalates to your team smoothly, passing along everything it has already diagnosed and attempted — so your team picks up with full context instead of starting from scratch.",
      },
      {
        question: "Can I see what actions it has taken?",
        answer:
          "Yes. Every action is logged with a full audit trail — what was done, when, for which customer, and with what result. You have complete visibility.",
      },
    ],
  },
};