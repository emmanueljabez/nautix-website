import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd } from "@/components/seo/JsonLd";
import { FinalCtaSection } from "@/components/homepage/FinalCtaSection";
import { PRODUCT_PAGES, type ProductSlug } from "@/lib/seo-pages";
import {
  buildBreadcrumbSchema,
  buildFaqSchema,
  buildMetadata,
  buildSoftwareApplicationSchema,
} from "@/lib/seo";

const DEMO_URL =
  "https://app.nautix.io/book/skVGGbpLujeMxRTL2JgwnzUut4AC3N-X/xU-NHVEi4rMuY9DlQZdvrHqnJkY-YVAp";

const WHATSAPP = "+254720482575";

const PAGE = PRODUCT_PAGES["nurture-sequence" as ProductSlug];

const OG_TITLE = "Follow Up With Every Lead, Automatically — Nautix";
const OG_DESC =
  "Personalised, automated nurture sequences that keep leads warm until they buy.";

const baseMetadata = buildMetadata({
  title: PAGE.title,
  description: PAGE.description,
  path: PAGE.path,
  keywords: [...PAGE.keywords],
  image: "/icon.png",
});

export const metadata: Metadata = {
  ...baseMetadata,
  openGraph: {
    ...baseMetadata.openGraph,
    title: OG_TITLE,
    description: OG_DESC,
  },
  twitter: {
    ...baseMetadata.twitter,
    title: OG_TITLE,
    description: OG_DESC,
  },
};

const FAQ_ITEMS = [
  {
    question: "Can I customise the follow-up messages and timing?",
    answer:
      "Completely. You design the sequences — the messages, the timing, the triggers — to match your sales cycle and brand voice. Or start from proven templates and adjust.",
  },
  {
    question: "Will this annoy my leads?",
    answer:
      "No, because the messages are personal, relevant, and well-timed — and Nautix respects opt-outs and knows when to stop. Good nurture feels like helpful attention, not spam.",
  },
  {
    question: "What happens when a lead becomes ready to buy?",
    answer:
      "The moment a lead shows real buying intent — replying, asking to proceed, clicking through — Nautix hands them to your sales team with the full conversation history, so your team closes a warm, informed lead.",
  },
  {
    question: "Can I re-engage old leads?",
    answer:
      "Yes. Cold or dormant leads can be enrolled in re-engagement sequences later, recovering sales you'd otherwise have written off.",
  },
];

const breadcrumbSchema = buildBreadcrumbSchema([
  { name: "Home", path: "/" },
  { name: "Product", path: "/#product" },
  { name: "Nurture Sequence", path: PAGE.path },
]);

const softwareSchema = buildSoftwareApplicationSchema({
  name: PAGE.title,
  description: PAGE.description,
  path: PAGE.path,
});

const faqSchema = buildFaqSchema(FAQ_ITEMS);

function HeroSection() {
  const messages = [
    {
      time: "Day 1 · 2h after inquiry",
      text: "Hi Jane, thanks for your interest in our fibre packages! Let me know if you have any questions — I'm here to help.",
      sent: true,
    },
    {
      time: "Day 3 · 10:30 AM",
      text: "Hey Jane, just checking in. Many of our customers love the 20Mbps plan for streaming and working from home. Want me to walk you through it?",
      sent: true,
    },
    {
      time: "Day 7 · 3:15 PM",
      text: "Hi Jane! Quick update — we've just expanded coverage to your area. Still interested in getting connected? I can check availability for your exact address.",
      sent: true,
    },
    {
      time: "Day 14 · 9:00 AM",
      text: "Yes please! Can we set up installation for next week?",
      sent: false,
      highlight: true,
    },
  ];

  return (
    <section className="relative pt-40 pb-24 overflow-hidden bg-gradient-to-b from-[#FAF8F5] to-white">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="inline-flex items-center px-3 py-1 rounded-full border border-primary/25 bg-primary/5 text-primary text-sm font-semibold mb-6">
              NURTURE SEQUENCE
            </span>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-neutral-900 mb-6 font-heading">
              {PAGE.heading}
            </h1>
            <p className="text-lg md:text-xl text-neutral-600 mb-8 leading-relaxed">
              {PAGE.subheading}
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href={DEMO_URL}
                className="inline-flex items-center justify-center rounded-full px-6 py-3 text-base font-semibold bg-primary hover:bg-primary-700 text-white transition-colors"
              >
                Book a demo &rarr;
              </a>
              <a
                href="#how-it-works"
                className="inline-flex items-center justify-center rounded-full px-6 py-3 text-base font-semibold border border-neutral-300 text-neutral-700 hover:bg-neutral-50 transition-colors"
              >
                See it in action
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-br from-primary-100/40 via-transparent to-transparent rounded-3xl blur-2xl" />
            <div className="relative max-w-sm mx-auto bg-white rounded-2xl shadow-xl border border-neutral-200 overflow-hidden">
              <div className="bg-[#075E54] px-4 py-3 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center text-white font-semibold text-sm">
                  J
                </div>
                <div>
                  <div className="text-white text-sm font-semibold">Jane</div>
                  <div className="text-white/70 text-xs">Nurture Sequence</div>
                </div>
              </div>
              <div className="p-4 space-y-4 bg-[#E5DDD5] min-h-[320px]">
                {messages.map((msg, i) => (
                  <div
                    key={i}
                    className={`flex ${msg.sent ? "justify-end" : "justify-start"}`}
                  >
                    <div
                      className={`max-w-[85%] px-3 py-2 rounded-lg text-sm leading-relaxed ${
                        msg.highlight
                          ? "bg-[#DCF8C6] text-neutral-900"
                          : msg.sent
                            ? "bg-[#DCF8C6] text-neutral-900"
                            : "bg-white text-neutral-900"
                      }`}
                    >
                      {!msg.sent && (
                        <div className="text-[10px] text-neutral-400 mb-1">
                          {msg.time}
                        </div>
                      )}
                      <p>{msg.text}</p>
                      {msg.sent && (
                        <div className="text-[10px] text-neutral-400 text-right mt-1">
                          {msg.time}
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="absolute -bottom-3 -left-3 bg-white rounded-full px-4 py-2 shadow-lg border border-neutral-200 text-xs font-medium text-neutral-600 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              Persistent but personal
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ProblemSection() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="max-w-4xl">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-neutral-900 mb-6 font-heading">
            The fortune is in the follow-up. You&apos;re leaving it there.
          </h2>
          <p className="text-lg text-neutral-600 mb-12 leading-relaxed">
            A lead says &apos;let me think about it&apos; and your team never
            circles back. Another goes quiet and is forgotten. Most sales happen
            after several touches — but most businesses give up after one. Every
            un-nurtured lead is money you already paid to acquire, walking out
            the door because nobody followed up.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="rounded-2xl border border-red-100 bg-red-50/50 p-7">
              <div className="w-10 h-10 rounded-xl bg-red-100 flex items-center justify-center mb-4 text-lg">
                &#9888;
              </div>
              <h3 className="text-lg font-semibold text-neutral-900 mb-3 font-heading">
                Follow-up falls through the cracks
              </h3>
              <p className="text-neutral-600 text-sm leading-relaxed">
                Your team is busy with today&apos;s inquiries; yesterday&apos;s
                &apos;maybe later&apos; leads get forgotten entirely.
              </p>
            </div>
            <div className="rounded-2xl border border-amber-100 bg-amber-50/50 p-7">
              <div className="w-10 h-10 rounded-xl bg-amber-100 flex items-center justify-center mb-4 text-lg">
                &#x26A0;
              </div>
              <h3 className="text-lg font-semibold text-neutral-900 mb-3 font-heading">
                One touch is rarely enough
              </h3>
              <p className="text-neutral-600 text-sm leading-relaxed">
                Most people don&apos;t buy on first contact — but most
                businesses only make first contact.
              </p>
            </div>
            <div className="rounded-2xl border border-orange-100 bg-orange-50/50 p-7">
              <div className="w-10 h-10 rounded-xl bg-orange-100 flex items-center justify-center mb-4 text-lg">
                &#x26A0;
              </div>
              <h3 className="text-lg font-semibold text-neutral-900 mb-3 font-heading">
                Manual follow-up doesn&apos;t scale
              </h3>
              <p className="text-neutral-600 text-sm leading-relaxed">
                Remembering to message every lead at the right time, with the
                right thing, for hundreds of leads, is impossible by hand.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function HowItWorksSection() {
  const steps = [
    {
      num: "01",
      title: "Lead enters a sequence",
      detail:
        "When a lead isn't ready, Nautix enrols them in the right nurture sequence for their situation.",
    },
    {
      num: "02",
      title: "Sends timely, personal messages",
      detail:
        "Over days or weeks, it sends helpful, personalised follow-ups — not spam, but relevant nudges.",
    },
    {
      num: "03",
      title: "Adapts to their response",
      detail:
        "If the lead engages, replies, or shows buying signals, the sequence adapts or hands off to your team.",
    },
    {
      num: "04",
      title: "Converts or recycles",
      detail:
        "When the lead is ready, it's routed to sales. If they go cold, they're kept for future re-engagement.",
    },
  ];

  return (
    <section id="how-it-works" className="py-24 bg-[#FAF8F5]">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-neutral-900 mb-4 font-heading">
            Personal follow-up, on autopilot.
          </h2>
          <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
            Nautix follows up with each lead at the right time, with the right
            message — until they convert or opt out.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, i) => (
            <div key={step.title} className="relative">
              <span className="block text-6xl font-bold text-primary/15 mb-4 font-heading">
                {step.num}
              </span>
              <h3 className="text-lg font-semibold text-neutral-900 mb-2 font-heading">
                {step.title}
              </h3>
              <p className="text-neutral-600 text-sm leading-relaxed">
                {step.detail}
              </p>
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-10 left-[calc(100%+0.5rem)] w-8 border-t-2 border-dashed border-primary/20" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CapabilitiesSection() {
  const cards = [
    {
      emoji: "📨",
      title: "Automated sequences",
      body: "Multi-step follow-up that runs on its own, timed perfectly for each lead.",
    },
    {
      emoji: "✍️",
      title: "Personalised messages",
      body: "Each message uses the lead's name, interest, and context — never generic blasts.",
    },
    {
      emoji: "🔄",
      title: "Behaviour-based",
      body: "Sequences adapt based on how the lead responds — engaged leads get a different path than quiet ones.",
    },
    {
      emoji: "🤝",
      title: "Seamless handoff",
      body: "The moment a lead shows real intent, they're routed to your team to close.",
    },
    {
      emoji: "🛑",
      title: "Smart stopping",
      body: "Knows when to stop — respects opt-outs and never over-messages.",
    },
    {
      emoji: "♻️",
      title: "Re-engagement",
      body: "Cold leads can be revived later with fresh sequences, recovering otherwise-lost sales.",
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-neutral-900 mb-4 font-heading">
            What the nurture sequence does
          </h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {cards.map((card) => (
            <div
              key={card.title}
              className="rounded-2xl border border-neutral-200 bg-white p-7 hover:shadow-md hover:border-primary/30 transition-all"
            >
              <div className="text-2xl mb-3">{card.emoji}</div>
              <h3 className="text-lg font-semibold text-neutral-900 mb-2 font-heading">
                {card.title}
              </h3>
              <p className="text-neutral-600 text-sm leading-relaxed">
                {card.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function IndustriesSection() {
  const industries = [
    {
      name: "ISPs",
      detail:
        "A prospect outside current coverage, or one still deciding, gets periodic check-ins and offers — so when they're ready (or coverage reaches them), Nautix is the first they hear from.",
    },
    {
      name: "Real Estate",
      detail:
        "A buyer not ready today gets nurtured with new matching listings, price updates, and gentle check-ins — staying engaged through a months-long decision.",
    },
    {
      name: "E-commerce",
      detail:
        "A shopper who didn't complete a purchase gets a timely nudge, a reminder, or an offer — recovering carts and converting hesitation into a sale.",
    },
    {
      name: "Finance / SACCOs",
      detail:
        "A member who inquired about a loan but didn't proceed gets helpful follow-ups about eligibility and benefits — converting interest into applications over time.",
    },
  ];

  return (
    <section className="py-24 bg-[#FAF8F5]">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-neutral-900 mb-4 font-heading">
            Stay top-of-mind — in any business.
          </h2>
          <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
            Whatever your sales cycle, Nautix keeps the conversation alive until
            they&apos;re ready.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {industries.map((ind) => (
            <div
              key={ind.name}
              className="rounded-2xl border border-neutral-200 bg-white p-7"
            >
              <h3 className="text-lg font-semibold text-primary mb-3 font-heading">
                {ind.name}
              </h3>
              <p className="text-neutral-600 text-sm leading-relaxed">
                {ind.detail}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function OutcomesSection() {
  const stats = [
    {
      value: "↑ 50%",
      label: "More leads converted with systematic follow-up",
    },
    {
      value: "0",
      label: "Forgotten follow-ups — every lead is nurtured",
    },
    {
      value: "Auto",
      label: "Re-engagement that recovers lost sales",
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-neutral-900 mb-4 font-heading">
            What consistent follow-up delivers
          </h2>
        </div>
        <div className="grid sm:grid-cols-3 gap-8 max-w-4xl mx-auto text-center">
          {stats.map((stat) => (
            <div key={stat.label}>
              <div className="text-5xl md:text-6xl font-bold text-primary mb-3 font-heading">
                {stat.value}
              </div>
              <p className="text-neutral-600 text-sm leading-relaxed">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
        <p className="text-center text-xs text-neutral-400 mt-8">
          Illustrative benchmarks — to be replaced with real numbers from case
          studies as they come in.
        </p>
      </div>
    </section>
  );
}

function FaqSection() {
  return (
    <section className="py-24 bg-[#FAF8F5]">
      <div className="container mx-auto px-4 max-w-4xl">
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-neutral-900 mb-12 text-center font-heading">
          Common questions
        </h2>
        <dl className="space-y-6">
          {FAQ_ITEMS.map((faq) => (
            <div
              key={faq.question}
              className="rounded-2xl border border-neutral-200 bg-white p-6"
            >
              <dt className="text-lg font-semibold text-neutral-900 mb-2 font-heading">
                {faq.question}
              </dt>
              <dd className="text-neutral-600 leading-relaxed">{faq.answer}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}

function FinalNurtureCta() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 max-w-4xl text-center">
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-neutral-900 mb-4 font-heading">
          Never let a lead go cold again.
        </h2>
        <p className="text-lg text-neutral-600 max-w-3xl mx-auto mb-8 leading-relaxed">
          See how the nurture sequence keeps every lead warm with personal,
          automated follow-up — until they&apos;re ready to buy.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center mb-6">
          <a
            href={DEMO_URL}
            className="inline-flex items-center justify-center rounded-full px-8 py-4 text-base font-semibold bg-primary hover:bg-primary-700 text-white transition-colors"
          >
            Book a demo &rarr;
          </a>
          <a
            href={`https://wa.me/${WHATSAPP}`}
            className="inline-flex items-center justify-center rounded-full px-8 py-4 text-base font-semibold border border-primary/25 text-primary hover:bg-primary/5 transition-colors"
          >
            💬 WhatsApp us: +254 720 482 575
          </a>
        </div>
        <p className="text-sm text-neutral-400">
          No credit card · 30-day free pilot · Cancel anytime
        </p>

        <div className="mt-16 pt-10 border-t border-neutral-200">
          <p className="text-sm text-neutral-500 mb-4 font-semibold">
            Related product pages
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link
              href="/product/ai-resolution"
              className="text-sm text-neutral-600 hover:text-primary transition-colors underline underline-offset-2"
            >
              Lead Qualification Engine
            </Link>
            <span className="text-neutral-300 hidden sm:inline">·</span>
            <Link
              href="/product/analytics"
              className="text-sm text-neutral-600 hover:text-primary transition-colors underline underline-offset-2"
            >
              Proactive Alerts
            </Link>
            <span className="text-neutral-300 hidden sm:inline">·</span>
            <Link
              href="/product/payments"
              className="text-sm text-neutral-600 hover:text-primary transition-colors underline underline-offset-2"
            >
              In-Chat Payment Close
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function NurtureSequencePage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={softwareSchema} />
      <JsonLd data={faqSchema} />
      <main>
        <HeroSection />
        <ProblemSection />
        <HowItWorksSection />
        <CapabilitiesSection />
        <IndustriesSection />
        <OutcomesSection />
        <FaqSection />
        <FinalNurtureCta />
        <FinalCtaSection />
      </main>
    </>
  );
}
