import type { Metadata } from "next";
import { JsonLd } from "@/components/seo/JsonLd";
import {
  buildBreadcrumbSchema,
  buildMetadata,
  buildFaqSchema,
  buildSoftwareApplicationSchema,
} from "@/lib/seo";

const DEMO_URL =
  "https://app.nautix.io/book/skVGGbpLujeMxRTL2JgwnzUut4AC3N-X/xU-NHVEi4rMuY9DlQZdvrHqnJkY-YVAp";
const WHATSAPP_URL = "https://wa.me/254720482575";
const PATH = "/product/analytics-reporting";

export const metadata: Metadata = buildMetadata({
  title: "Customer Operations Analytics & Reporting | Nautix",
  description:
    "Turn every conversation, lead, and payment into clear dashboards and a daily report. See response times, resolution rates, and revenue at a glance. For African businesses.",
  path: PATH,
  keywords: [
    "customer analytics",
    "operations reporting",
    "support analytics",
    "conversation analytics",
    "business dashboards",
    "analytics and reporting",
  ],
});

const faqItems = [
  {
    question: "What does the daily report include?",
    answer:
      "A clear summary of yesterday's performance — conversations handled, issues resolved automatically, payments collected, leads captured, and anything needing your attention today. It lands on your phone every morning so you start the day informed.",
  },
  {
    question: "Can I see data broken down by channel, team, or type?",
    answer:
      "Yes. Dashboards let you break performance down however you need — by channel, team member, conversation type, time period, or vertical — so you can find exactly where things are working or stuck.",
  },
  {
    question: "Is the data real-time?",
    answer:
      "Yes. Dashboards update in real time as conversations, resolutions, and payments happen, so what you see always reflects the current state of your operation.",
  },
  {
    question: "Can I export reports or share them?",
    answer:
      "Yes. Reports and data can be exported and shared with your team or leadership, so everyone works from the same clear picture of performance.",
  },
];

const painPoints = [
  {
    title: "Performance is invisible",
    body: "You don't really know your response times, resolution rates, or conversion numbers — just impressions.",
  },
  {
    title: "Data is scattered or missing",
    body: "What little data exists is spread across apps and spreadsheets, never in one clear view.",
  },
  {
    title: "Decisions are guesswork",
    body: "Without clear numbers, you're guessing where the bottlenecks, wins, and losses really are.",
  },
] as const;

const steps = [
  {
    step: "1",
    title: "Captures everything",
    body: "Every conversation, resolution, lead, payment, and response time is recorded automatically as it happens.",
  },
  {
    step: "2",
    title: "Organises into metrics",
    body: "Raw activity becomes clear, meaningful metrics — response times, resolution rates, conversion, revenue.",
  },
  {
    step: "3",
    title: "Shows it on live dashboards",
    body: "See your whole operation at a glance, updated in real time, broken down however you need.",
  },
  {
    step: "4",
    title: "Delivers a daily report",
    body: "A clear summary lands on your phone every morning — wins, issues, and what needs attention, before your day starts.",
  },
] as const;

const capabilities = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <rect x="3" y="3" width="7" height="7" rx="1.5" stroke="currentColor" strokeWidth="1.5" />
        <rect x="14" y="3" width="7" height="7" rx="1.5" stroke="currentColor" strokeWidth="1.5" />
        <rect x="3" y="14" width="7" height="7" rx="1.5" stroke="currentColor" strokeWidth="1.5" />
        <rect x="14" y="14" width="7" height="7" rx="1.5" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    ),
    title: "Live dashboards",
    body: "Your whole operation at a glance, updated in real time — conversations, resolutions, leads, revenue.",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <rect x="3" y="4" width="18" height="17" rx="2" stroke="currentColor" strokeWidth="1.5" />
        <path d="M3 9h18" stroke="currentColor" strokeWidth="1.5" />
        <path d="M8 2v4M16 2v4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="8.5" cy="13.5" r="1.5" fill="currentColor" />
        <circle cx="13.5" cy="13.5" r="1.5" fill="currentColor" />
        <circle cx="8.5" cy="17.5" r="1.5" fill="currentColor" />
        <circle cx="13.5" cy="17.5" r="1.5" fill="currentColor" />
      </svg>
    ),
    title: "Daily report",
    body: "A clear morning summary on WhatsApp: yesterday's performance and today's priorities.",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <circle cx="12" cy="12" r="9.5" stroke="currentColor" strokeWidth="1.5" />
        <path d="M12 6v6l4 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: "Response & resolution metrics",
    body: "Know exactly how fast you respond and how much gets resolved automatically.",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <circle cx="12" cy="12" r="9.5" stroke="currentColor" strokeWidth="1.5" />
        <path
          d="M15.5 9.5a3.5 3.5 0 10-7 0c0 3.5 3.5 6.5 3.5 6.5s3.5-3 3.5-6.5z"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        <circle cx="12" cy="9.5" r="1.5" fill="currentColor" />
      </svg>
    ),
    title: "Revenue & payment tracking",
    body: "See what's been requested, collected, and reconciled — across the whole operation.",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path
          d="M12 2L2 7l10 5 10-5-10-5z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
        <path d="M2 17l10 5 10-5" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
        <path d="M2 12l10 5 10-5" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      </svg>
    ),
    title: "Lead & conversion insight",
    body: "Track inquiries, qualification, and conversion so you know what's working.",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path
          d="M3 20l4-8 4 4 6-12"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx="7" cy="12" r="1.5" fill="currentColor" />
        <circle cx="11" cy="16" r="1.5" fill="currentColor" />
        <circle cx="17" cy="4" r="1.5" fill="currentColor" />
      </svg>
    ),
    title: "Trends over time",
    body: "Spot what's improving, what's slipping, and where to focus — with historical trends.",
  },
] as const;

const industries = [
  {
    name: "ISPs",
    body: "See overnight tickets resolved automatically, average resolution times, payments collected, and outage response — with a 7am report that tells the owner exactly how the network and support performed.",
  },
  {
    name: "Real Estate",
    body: "Track inquiries per listing, viewing-to-offer conversion, rent collected, and response times — so agents and landlords see what's selling and what's lagging.",
  },
  {
    name: "E-commerce",
    body: "Monitor inquiry-to-sale conversion, response times, cart recovery, and revenue per channel — knowing exactly what drives your sales.",
  },
  {
    name: "Finance / SACCOs",
    body: "See member inquiries, loan conversion, repayment rates, and collection performance — giving leadership a clear, current view of the institution's health.",
  },
] as const;

const stats = [
  { value: "7am", label: "Daily report, before your day even starts" },
  { value: "Real-time", label: "Dashboards covering your whole operation" },
  { value: "100%", label: "Of activity captured and measurable" },
] as const;

const relatedPages = [
  { href: "/product/channels-inbox", label: "Omnichannel Inbox" },
  { href: "/product/ai-resolution", label: "Autonomous Resolution" },
  { href: "/product/payments", label: "Full Payment Loop" },
] as const;

export default function AnalyticsReportingPage() {
  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Product", path: "/#product" },
    { name: "Analytics & Reporting", path: PATH },
  ]);

  const faqSchema = buildFaqSchema(faqItems);

  const softwareSchema = buildSoftwareApplicationSchema({
    name: "Customer Operations Analytics & Reporting | Nautix",
    description:
      "Turn every conversation, lead, and payment into clear dashboards and a daily report. See response times, resolution rates, and revenue at a glance.",
    path: PATH,
  });

  return (
    <>
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={faqSchema} />
      <JsonLd data={softwareSchema} />

      <main className="bg-[#fdfcfa]">
        {/* ================================================================
        Section 1 — Hero
        ================================================================ */}
        <section className="relative overflow-hidden pt-28 pb-20 md:pt-36 md:pb-28">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-primary-100/30 blur-[120px]" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full bg-primary-200/20 blur-[100px]" />
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-primary-200 bg-primary-50 text-primary-700 text-xs font-semibold tracking-[0.15em] uppercase">
                Analytics &amp; Reporting
              </span>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mt-5 mb-5 text-primary-950 leading-[1.1]">
                Run your operation on facts, not feelings.
              </h1>

              <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Every conversation, resolution, lead, and payment becomes clear, visible data.
                Nautix gives you live dashboards and a daily summary that lands on your phone
                before your day begins — so you always know exactly how your operation is
                performing.
              </p>

              <div className="mt-9 flex flex-col sm:flex-row items-center gap-3 justify-center">
                <a
                  href={DEMO_URL}
                  className="inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-base font-semibold bg-primary-700 text-white hover:bg-primary-800 shadow-lg shadow-primary-700/25 transition-all hover:shadow-xl hover:shadow-primary-700/30 hover:-translate-y-0.5"
                >
                  Book a demo
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                    <path
                      d="M3 8h10m0 0L9 4m4 4l-4 4"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </a>
                <a
                  href={DEMO_URL}
                  className="inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-base font-semibold border border-primary-200 text-primary-700 hover:bg-primary-50 transition-colors"
                >
                  See it in action
                </a>
              </div>

              {/* Dashboard visual */}
              <div className="mt-16 max-w-3xl mx-auto">
                <div className="rounded-2xl border border-black/10 bg-white shadow-xl shadow-black/5 overflow-hidden">
                  <div className="flex items-center gap-2 px-4 py-3 border-b border-black/5 bg-gray-50/50">
                    <div className="flex gap-1.5">
                      <div className="w-3 h-3 rounded-full bg-red-400" />
                      <div className="w-3 h-3 rounded-full bg-yellow-400" />
                      <div className="w-3 h-3 rounded-full bg-green-400" />
                    </div>
                    <span className="ml-2 text-xs text-gray-400 font-medium">Dashboard — Analytics &amp; Reporting</span>
                  </div>
                  <div className="p-6">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                      {[
                        { value: "1,247", label: "Conversations", change: "+12%", up: true },
                        { value: "94%", label: "Resolution rate", change: "+3%", up: true },
                        { value: "142", label: "Leads captured", change: "+18%", up: true },
                        { value: "KES 2.4M", label: "Collected", change: "+8%", up: true },
                      ].map((metric) => (
                        <div key={metric.label} className="rounded-xl border border-black/5 bg-gray-50/70 p-4">
                          <div className="text-2xl font-bold text-primary-950">{metric.value}</div>
                          <div className="text-xs text-gray-500 mt-0.5">{metric.label}</div>
                          <div className="text-xs font-semibold text-emerald-600 mt-1.5">{metric.change}</div>
                        </div>
                      ))}
                    </div>
                    <div className="rounded-xl border border-black/5 bg-gray-50/70 p-4">
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-sm font-semibold text-primary-900">Response time trend</span>
                        <span className="text-xs text-gray-400">Last 7 days</span>
                      </div>
                      <svg viewBox="0 0 400 80" className="w-full h-20" preserveAspectRatio="none" aria-hidden="true">
                        <defs>
                          <linearGradient id="chartGrad" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="0%" stopColor="#7e10a2" stopOpacity="0.15" />
                            <stop offset="100%" stopColor="#7e10a2" stopOpacity="0" />
                          </linearGradient>
                        </defs>
                        <path
                          d="M0,60 C20,55 40,58 60,45 C80,32 100,50 120,38 C140,26 160,40 180,30 C200,20 220,35 240,22 C260,9 280,25 300,15 C320,5 340,18 360,8 C380,-2 400,10 400,10 L400,80 L0,80 Z"
                          fill="url(#chartGrad)"
                        />
                        <path
                          d="M0,60 C20,55 40,58 60,45 C80,32 100,50 120,38 C140,26 160,40 180,30 C200,20 220,35 240,22 C260,9 280,25 300,15 C320,5 340,18 360,8 C380,-2 400,10"
                          fill="none"
                          stroke="#7e10a2"
                          strokeWidth="2"
                          strokeLinecap="round"
                        />
                      </svg>
                    </div>
                    <div className="mt-4 flex items-center gap-3 p-3 rounded-xl bg-primary-50/60 border border-primary-100/50">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                        <path
                          d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"
                          stroke="#7e10a2"
                          strokeWidth="1.5"
                        />
                        <path
                          d="M12 6v6l4 2"
                          stroke="#7e10a2"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      <div>
                        <span className="text-sm font-semibold text-primary-800">Daily report arriving at 7am</span>
                        <span className="text-xs text-primary-600 ml-2">Yesterday: 98% resolved, 47 new leads, KES 320K collected</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ================================================================
        Section 2 — The Problem It Solves
        ================================================================ */}
        <section className="py-20 md:py-28">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-primary-950 mb-5">
                You can&apos;t improve what you can&apos;t see.
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed max-w-3xl">
                Most businesses run customer operations blind. How fast does your team really
                respond? How many issues get resolved without a human? Which leads convert? How
                much is collected? The answers are buried across apps and spreadsheets, or simply
                unknown. Without visibility, you&apos;re making decisions on gut feel — and you
                can&apos;t fix problems you can&apos;t see.
              </p>
            </div>

            <div className="max-w-5xl mx-auto mt-12 grid md:grid-cols-3 gap-6">
              {painPoints.map((point) => (
                <div
                  key={point.title}
                  className="relative rounded-2xl border border-red-100 bg-red-50/40 p-7 shadow-sm"
                >
                  <div className="w-10 h-10 rounded-xl bg-red-100 flex items-center justify-center mb-4">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                      <circle cx="12" cy="12" r="9.5" stroke="#dc2626" strokeWidth="1.5" />
                      <path d="M12 8v5M12 16.5v.5" stroke="#dc2626" strokeWidth="1.5" strokeLinecap="round" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-primary-950 mb-2">{point.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{point.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================================================================
        Section 3 — How It Works
        ================================================================ */}
        <section className="py-20 md:py-28 bg-primary-50/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center mb-14">
              <h2 className="text-3xl md:text-4xl font-bold text-primary-950 mb-4">
                Everything measured. Everything visible.
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Nautix turns every interaction into insight — on a live dashboard and in a daily
                report.
              </p>
            </div>

            <div className="max-w-5xl mx-auto grid md:grid-cols-4 gap-6">
              {steps.map((s) => (
                <div key={s.step} className="relative">
                  <div className="rounded-2xl border border-black/5 bg-white p-6 shadow-sm h-full">
                    <span className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-primary-700 text-white text-sm font-bold mb-4">
                      {s.step}
                    </span>
                    <h3 className="text-base font-semibold text-primary-950 mb-2">{s.title}</h3>
                    <p className="text-sm text-gray-600 leading-relaxed">{s.body}</p>
                  </div>
                  {s.step !== "4" && (
                    <div className="hidden md:block absolute top-1/2 -right-3 z-10">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                        <path
                          d="M5 12h14m0 0l-5-5m5 5l-5 5"
                          stroke="#7e10a2"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================================================================
        Section 4 — Key Capabilities
        ================================================================ */}
        <section className="py-20 md:py-28">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center mb-14">
              <h2 className="text-3xl md:text-4xl font-bold text-primary-950 mb-4">
                What analytics &amp; reporting does
              </h2>
            </div>

            <div className="max-w-6xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {capabilities.map((cap) => (
                <div
                  key={cap.title}
                  className="rounded-2xl border border-black/5 bg-white p-7 shadow-sm hover:shadow-md hover:border-primary-200/50 transition-all duration-300 group"
                >
                  <div className="w-11 h-11 rounded-xl bg-primary-100/60 text-primary-700 flex items-center justify-center mb-5 group-hover:bg-primary-700 group-hover:text-white transition-colors duration-300">
                    {cap.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-primary-950 mb-2">{cap.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{cap.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================================================================
        Section 5 — Across Every Industry
        ================================================================ */}
        <section className="py-20 md:py-28 bg-primary-50/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center mb-14">
              <h2 className="text-3xl md:text-4xl font-bold text-primary-950 mb-4">
                Clear insight for every operation.
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Whatever you run, you see it clearly and decide with confidence.
              </p>
            </div>

            <div className="max-w-5xl mx-auto grid sm:grid-cols-2 gap-6">
              {industries.map((ind) => (
                <div
                  key={ind.name}
                  className="rounded-2xl border border-black/5 bg-white p-7 shadow-sm"
                >
                  <h3 className="text-lg font-semibold text-primary-700 mb-3">{ind.name}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{ind.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================================================================
        Section 6 — The Outcomes
        ================================================================ */}
        <section className="py-20 md:py-28">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center mb-14">
              <h2 className="text-3xl md:text-4xl font-bold text-primary-950 mb-4">
                What full visibility delivers
              </h2>
            </div>

            <div className="max-w-3xl mx-auto grid grid-cols-3 gap-8">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="text-4xl md:text-5xl font-bold text-primary-700 mb-3">
                    {stat.value}
                  </div>
                  <p className="text-sm text-gray-600 leading-relaxed">{stat.label}</p>
                </div>
              ))}
            </div>

            <p className="text-center text-xs text-gray-400 mt-10 max-w-md mx-auto">
              Illustrative benchmarks. Real customer data from case studies will replace these
              figures as they become available. Never presented as verified.
            </p>
          </div>
        </section>

        {/* ================================================================
        Section 7 — FAQ
        ================================================================ */}
        <section className="py-20 md:py-28 bg-primary-50/30">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-primary-950 mb-10 text-center">
                Common questions
              </h2>

              <div className="space-y-4">
                {faqItems.map((faq) => (
                  <details
                    key={faq.question}
                    className="group rounded-2xl border border-black/5 bg-white shadow-sm"
                  >
                    <summary className="flex items-center justify-between px-6 py-5 cursor-pointer list-none">
                      <span className="text-base font-semibold text-primary-950 pr-4">
                        {faq.question}
                      </span>
                      <svg
                        className="w-5 h-5 shrink-0 text-primary-400 group-open:rotate-180 transition-transform"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        aria-hidden="true"
                      >
                        <path
                          d="M6 9l6 6 6-6"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </summary>
                    <div className="px-6 pb-5 text-sm text-gray-600 leading-relaxed">
                      {faq.answer}
                    </div>
                  </details>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ================================================================
        Section 8 — Final CTA
        ================================================================ */}
        <section className="py-20 md:py-28">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto rounded-3xl overflow-hidden shadow-2xl shadow-primary-900/15">
              <div
                className="p-10 md:p-14 text-center text-white"
                style={{
                  background: "linear-gradient(145deg, #7e10a2 0%, #651082 54%, #2b1539 100%)",
                }}
              >
                <h2 className="text-2xl md:text-4xl font-bold mb-4">
                  Know exactly how your operation is performing.
                </h2>
                <p className="text-base text-white/70 max-w-xl mx-auto mb-8 leading-relaxed">
                  See how analytics &amp; reporting turns every conversation, lead, and payment
                  into clear dashboards and a daily report that lands before your day starts.
                </p>
                <div className="flex flex-col sm:flex-row items-center gap-3 justify-center">
                  <a
                    href={DEMO_URL}
                    className="inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-base font-semibold bg-white text-primary-800 hover:bg-white/95 transition-colors shadow-lg"
                  >
                    Book a demo
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                      <path
                        d="M3 8h10m0 0L9 4m4 4l-4 4"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </a>
                  <a
                    href={WHATSAPP_URL}
                    className="inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-base font-semibold border border-white/30 text-white hover:bg-white/10 transition-colors"
                  >
                    WhatsApp us: +254 720 482 575
                  </a>
                </div>
                <p className="text-xs text-white/45 mt-6">
                  No credit card · 30-day free pilot · Cancel anytime
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ================================================================
        Related product pages — cross-links
        ================================================================ */}
        <section className="pb-20 md:pb-28">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <p className="text-sm text-gray-400 mb-5">Related product pages</p>
              <div className="flex flex-wrap items-center justify-center gap-3">
                {relatedPages.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full border border-black/10 text-sm text-gray-600 hover:text-primary-700 hover:border-primary-200 transition-colors"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </section>

      </main>
    </>
  );
}
