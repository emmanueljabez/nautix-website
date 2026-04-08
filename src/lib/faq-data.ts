export type FaqItem = {
  question: string;
  answer: string;
};

export const HOMEPAGE_FAQS: readonly FaqItem[] = [
  {
    question: "Is Nautix a chatbot?",
    answer:
      "No. Chatbots follow pre-set scripts. Nautix reads customer messages, uses the business context available to it, and takes action across marketing, sales, and support. It can qualify leads, resolve service issues, collect payments, trigger workflows, and escalate with full context when needed.",
  },
  {
    question: "Which channels does Nautix work on?",
    answer:
      "Nautix works across WhatsApp, Instagram DMs and comments, Facebook Messenger, and Facebook comments. It can engage, qualify, support, and resolve on the channel the customer used, while preserving context across the full customer journey. No inbox switching. No lost conversation history.",
  },
  {
    question: "How long does setup take?",
    answer:
      "The Starter plan can go live in 48 hours. The Growth plan typically takes 5 working days. The Scale plan usually takes 7 to 10 working days. Timing depends on your channels, workflows, and integration requirements. Setup includes channel connection, workflow configuration, integration work where needed, and testing with real interactions before launch.",
  },
  {
    question: "Can Nautix work with our current setup?",
    answer:
      "Yes. Nautix can fit into the channels, workflows, and operational data your team already uses. If your setup is still manual, Nautix can also start from a structured spreadsheet or another regularly updated data source. The exact setup depends on what needs to be connected and how much automation you want from day one.",
  },
  {
    question: "What happens when Nautix cannot resolve something?",
    answer:
      "Nautix escalates to a human agent with the relevant context from the conversation and the actions it has already taken. Your team can pick up from there without forcing the customer to start over.",
  },
  {
    question: "Is payment integration included in all plans?",
    answer:
      "Yes. Payment integration is available across all Nautix plans. Supported payment methods depend on your market and implementation. Nautix can initiate payment in the active conversation, confirm status in real time, update the workflow, and send confirmation automatically.",
  },
  {
    question: "What if our customers prefer talking to a human?",
    answer:
      "Most customers prefer getting their problem solved quickly. When a customer explicitly requests a human, Nautix escalates immediately with full context. Human interaction is preserved for the moments where it genuinely adds value.",
  },
  {
    question: "Is our customer data safe?",
    answer:
      "Nautix is designed to minimize sensitive data exposure. Sensitive checks and actions can be handled in real time, conversation logs are encrypted, and access is permission-based. Data-handling requirements can be configured to match your market and compliance needs.",
  },
  {
    question: "Do you offer a trial or pilot?",
    answer:
      "Yes. We offer a 14-day performance pilot for new clients. If Nautix does not measurably improve your response time, resolution rate, or lead follow-up consistency within 14 days, you do not pay for that period.",
  },
  {
    question: "How is Nautix different from Wati or Respond.io?",
    answer:
      "Tools like Wati and Respond.io help teams organize and route conversations. Nautix is built to do the work inside the conversation itself: qualify leads, resolve routine issues, trigger backend actions, collect payments, and escalate only when human judgment is needed. It is not just inbox management. It is an execution layer.",
  },
] as const;

export const PRICING_FAQS: readonly FaqItem[] = [
  {
    question: "How do platform plans and AI add-ons work together?",
    answer:
      "Choose a platform plan based on your team size and workflow needs. The AI add-on is available on Growth and Enterprise plans, and is priced separately based on how many conversations you want Nautix to handle end-to-end.",
  },
  {
    question: "What is included in onboarding?",
    answer:
      "We guide you through Meta Business verification, WhatsApp API setup, team training, automation configuration, and knowledge-base preparation for the AI agent.",
  },
  {
    question: "How does the AI Support Agent work?",
    answer:
      "The AI agent learns from your business information, policies, FAQs, and previous conversations so it can resolve routine issues, qualify leads, and escalate only when human judgment is needed.",
  },
  {
    question: "What is the difference between service conversations and AI conversations?",
    answer:
      "Service conversations are the total customer interactions on your platform. AI conversations are the subset that Nautix resolves autonomously without human intervention.",
  },
  {
    question: "Can I change plans or AI tiers later?",
    answer:
      "Yes. Platform plans and AI add-ons are separate, so you can upgrade or downgrade either one as your volume and team needs change.",
  },
  {
    question: "What happens if I exceed my conversation limit?",
    answer:
      "Additional service conversations are billed at $0.02 each. You can also upgrade your plan or AI volume tier at any time for better unit economics.",
  },
  {
    question: "Is the 14-day pilot really free?",
    answer:
      "Yes. No credit card is required. You get full access to your selected platform plan and can validate the workflows with live conversations during the 14-day pilot period.",
  },
  {
    question: "Can Nautix be trained on our business data?",
    answer:
      "Yes. We use your FAQs, workflows, product or service data, policies, and escalation rules to make responses specific to your business and brand voice.",
  },
] as const;
