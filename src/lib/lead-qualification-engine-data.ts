const DEMO_EMAIL_URL =
  "https://app.nautix.io/book/skVGGbpLujeMxRTL2JgwnzUut4AC3N-X/xU-NHVEi4rMuY9DlQZdvrHqnJkY-YVAp";

export const PAGE_DATA = {
  hero: {
    eyebrow: "Lead Qualification Engine",
    h1: "Qualified leads. Not just inquiries.",
    subhead:
      "Most inquiries aren't ready to buy — and your team wastes hours finding out which ones are. Nautix asks the right questions, scores every lead, and hands your sales team only the ones worth pursuing, with the full picture attached.",
    primaryCta: { label: "Book a demo", href: DEMO_EMAIL_URL },
    secondaryCta: { label: "See it in action", href: "#how-it-works" },
  },
  problem: {
    heading: "Your team is drowning in unqualified inquiries.",
    painPoints: [
      {
        icon: "tyre-kicker",
        title: "Time wasted on tyre-kickers",
        detail:
          "Your team manually qualifies every inquiry, spending the same effort on a ready buyer and a casual browser.",
      },
      {
        icon: "queue",
        title: "Hot leads wait in the queue",
        detail:
          "The serious buyer sits behind ten casual inquiries because nothing tells your team who's who.",
      },
      {
        icon: "scatter",
        title: "Inconsistent qualification",
        detail:
          "Different team members ask different questions, so lead quality and data are all over the place.",
      },
    ],
  },
  howItWorks: {
    heading: "Qualify, score, route. Automatically.",
    subhead:
      "Every inquiry goes through a consistent, intelligent qualification flow before it reaches a human.",
    steps: [
      {
        stepNumber: 1,
        title: "Greets every inquiry instantly",
        detail:
          "The moment someone inquires, Nautix engages — no lead waits, no matter the hour.",
        stat: "Instant",
        statLabel: "engagement",
        kind: "greet",
      },
      {
        stepNumber: 2,
        title: "Asks the qualifying questions",
        detail:
          "It gathers exactly what your team needs to know — budget, need, timeline, location, fit — conversationally.",
        stat: "BANT+",
        statLabel: "qualification",
        kind: "question",
      },
      {
        stepNumber: 3,
        title: "Scores the lead",
        detail:
          "Based on the answers, it scores how qualified and ready each lead is, using your criteria.",
        stat: "Scored",
        statLabel: "& ranked",
        kind: "score",
      },
      {
        stepNumber: 4,
        title: "Routes to the right person",
        detail:
          "Hot leads go to sales immediately with a full brief; others are nurtured automatically until they're ready.",
        stat: "Routed",
        statLabel: "& briefed",
        kind: "route",
      },
    ],
  },
  capabilities: {
    heading: "What the qualification engine does",
    cards: [
      {
        kind: "question",
        title: "Smart questioning",
        body: "Asks the right qualifying questions conversationally — never an interrogation.",
      },
      {
        kind: "scoring",
        title: "Lead scoring",
        body: "Scores every lead against your criteria so your team knows who to call first.",
      },
      {
        kind: "routing",
        title: "Intelligent routing",
        body: "Sends each lead to the right person or team based on type, territory, or value.",
      },
      {
        kind: "brief",
        title: "Full lead briefs",
        body: "Your team receives every lead with all the context already gathered — no re-asking.",
      },
      {
        kind: "clock",
        title: "24/7 qualification",
        body: "Leads are qualified the moment they arrive, day or night — never left waiting.",
      },
      {
        kind: "crm",
        title: "CRM-ready",
        body: "Qualified leads flow into your CRM or pipeline with all fields populated.",
      },
    ],
  },
  industryTable: {
    heading: "Qualified leads for every kind of sale.",
    subhead:
      "Whatever 'a good lead' means for you, Nautix identifies it.",
    rows: [
      {
        vertical: "ISPs",
        howTheyUseIt:
          "A coverage inquiry is qualified by location, package interest, and timeline — and a serviceable, ready-to-connect lead is routed to sales while an out-of-area one is captured for future expansion.",
      },
      {
        vertical: "Real Estate",
        howTheyUseIt:
          "A property inquiry is qualified by budget, type, location, and buying timeline — so agents spend their time on serious buyers, not browsers.",
      },
      {
        vertical: "E-commerce",
        howTheyUseIt:
          "A bulk or high-value inquiry is qualified by quantity, use case, and urgency — routing wholesale and serious buyers to the right person instantly.",
      },
      {
        vertical: "Finance / SACCOs",
        howTheyUseIt:
          "A loan or membership inquiry is qualified by eligibility criteria, amount, and purpose — so officers focus on members who actually qualify and are ready.",
      },
    ],
  },
  outcomes: {
    heading: "What automated qualification delivers",
    stats: [
      { value: "100%", label: "Of leads qualified before reaching your team" },
      {
        value: "\u2191 2\u00d7",
        label: "More sales time spent on real opportunities",
      },
      {
        value: "24/7",
        label: "Qualification, so no hot lead ever waits",
      },
    ],
  },
  faq: {
    heading: "Common questions",
    items: [
      {
        question: "Can I set my own qualifying questions and scoring?",
        answer:
          "Yes. You define the questions that matter to your business and the criteria that make a lead 'hot.' Nautix applies them consistently to every single inquiry, around the clock.",
      },
      {
        question: "What happens to leads that don't qualify yet?",
        answer:
          "They're not discarded — they're nurtured. Leads that aren't ready are kept warm with automated follow-up until they're ready to buy, at which point they're routed to your team.",
      },
      {
        question: "Does it connect to my CRM?",
        answer:
          "Yes. Qualified leads flow into your CRM or sales pipeline with all the gathered information already populated, so your team picks up a complete record — not a blank inquiry.",
      },
      {
        question: "Will leads feel like they're being interrogated?",
        answer:
          "No. Nautix gathers qualifying information conversationally and naturally, woven into a helpful exchange — so it feels like good service, not a form.",
      },
    ],
  },
};
