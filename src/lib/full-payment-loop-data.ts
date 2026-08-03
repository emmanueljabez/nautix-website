const DEMO_EMAIL_URL =
  "https://app.nautix.io/book/skVGGbpLujeMxRTL2JgwnzUut4AC3N-X/xU-NHVEi4rMuY9DlQZdvrHqnJkY-YVAp";

export const PAGE_DATA = {
  hero: {
    eyebrow: "Full Payment Loop",
    h1: "From request to reconciled — automatically.",
    subhead:
      "Taking the payment is only half the job. Nautix closes the entire loop — requesting, collecting, verifying, reconciling, and updating your records — so money owed becomes money received and properly accounted for, with zero manual steps.",
    primaryCta: { label: "Book a demo", href: DEMO_EMAIL_URL },
    secondaryCta: { label: "See it in action", href: "#how-it-works" },
  },
  problem: {
    heading: "Collecting the money is only half the work.",
    painPoints: [
      {
        icon: "manual",
        title: "Verification is manual",
        detail:
          "Someone checks whether each payment actually landed — a slow, tedious, error-prone task.",
      },
      {
        icon: "hours",
        title: "Reconciliation eats hours",
        detail:
          "Matching payments to the right invoices, accounts, and customers by hand is a constant drain on your team.",
      },
      {
        icon: "gaps",
        title: "Gaps cause real problems",
        detail:
          "An unmatched payment means a paying customer gets chased, or a service stays off — damaging trust and creating disputes.",
      },
    ],
  },
  howItWorks: {
    heading: "The whole loop. closed automatically.",
    subhead:
      "Every stage from request to reconciliation runs without a manual touch.",
    steps: [
      {
        stepNumber: 1,
        title: "Request",
        detail:
          "Nautix sends the payment request — the right amount, to the right customer, at the right time.",
        stat: "Automated",
        statLabel: "outreach",
        kind: "request",
      },
      {
        stepNumber: 2,
        title: "Collect",
        detail:
          "The customer pays via mobile money, right in the conversation.",
        stat: "In-chat",
        statLabel: "payment",
        kind: "collect",
      },
      {
        stepNumber: 3,
        title: "Verify",
        detail:
          "Nautix confirms in real time that the payment actually arrived — not just that it was initiated.",
        stat: "Real-time",
        statLabel: "confirmation",
        kind: "verify",
      },
      {
        stepNumber: 4,
        title: "Reconcile & record",
        detail:
          "It matches the payment to the right invoice, account, or record, updates your systems, and confirms the customer is settled — closing the loop.",
        stat: "Auto-",
        statLabel: "matched",
        kind: "reconcile",
      },
    ],
  },
  capabilities: {
    heading: "What the full loop does",
    cards: [
      {
        kind: "request",
        title: "Automated requests",
        body: "The right payment request goes to the right customer at the right time — no manual sending.",
      },
      {
        kind: "verify",
        title: "Real-time verification",
        body: "Confirms each payment genuinely arrived before marking anything as settled.",
      },
      {
        kind: "reconcile",
        title: "Auto-reconciliation",
        body: "Matches every payment to the correct invoice, account, or record automatically.",
      },
      {
        kind: "records",
        title: "Records updated",
        body: "Your systems and books are updated the moment a payment is confirmed.",
      },
      {
        kind: "exceptions",
        title: "Exception flagging",
        body: "Mismatches, partial payments, and anomalies are surfaced for review — nothing silently slips.",
      },
      {
        kind: "visibility",
        title: "Full visibility",
        body: "See every payment's status across the whole loop — requested, paid, verified, reconciled.",
      },
    ],
  },
  industryTable: {
    heading: "A closed payment loop. for every business.",
    subhead:
      "From the request to the reconciled record, fully handled — whatever you collect.",
    rows: [
      {
        vertical: "ISPs",
        howTheyUseIt:
          "A subscriber's monthly bill is requested, paid, verified, matched to their account, and their service kept active — with the ledger updated automatically and no manual reconciliation.",
      },
      {
        vertical: "Real Estate",
        howTheyUseIt:
          "Rent is requested, collected, verified, and reconciled against the right unit and tenant — so the landlord's records are always accurate and no payment is ever lost.",
      },
      {
        vertical: "E-commerce",
        howTheyUseIt:
          "An order payment is requested, collected, verified, and matched to the order — triggering fulfilment automatically and keeping the books clean.",
      },
      {
        vertical: "Finance / SACCOs",
        howTheyUseIt:
          "A loan repayment or contribution is requested, collected, verified, and reconciled against the member's account in the core system — accurately and instantly.",
      },
    ],
  },
  outcomes: {
    heading: "What closing the loop delivers",
    stats: [
      {
        value: "0",
        label: "Manual reconciliation for routine payments",
      },
      {
        value: "100%",
        label: "Of payments verified before being marked settled",
      },
      {
        value: "Real-time",
        label: "Records, always accurate and up to date",
      },
    ],
  },
  faq: {
    heading: "Common questions",
    items: [
      {
        question: "What does 'closing the loop' actually mean?",
        answer:
          "It means every stage of a payment is handled automatically — from sending the request, to collecting, to verifying the money truly arrived, to matching it against the right account or invoice, to updating your records. No manual steps, no gaps.",
      },
      {
        question: "How does reconciliation work?",
        answer:
          "Nautix automatically matches each verified payment to the correct customer, invoice, or account in your systems — eliminating the manual matching that normally consumes hours and causes errors.",
      },
      {
        question: "What happens if a payment is partial or doesn't match?",
        answer:
          "Exceptions like partial payments, overpayments, or mismatches are automatically flagged for your team to review — so anomalies are caught and handled, never silently lost.",
      },
      {
        question: "Does it update my existing accounting or billing system?",
        answer:
          "Yes. Once a payment is verified and reconciled, Nautix updates your connected systems so your records reflect reality in real time. We'll confirm your specific systems during setup.",
      },
    ],
  },
};
