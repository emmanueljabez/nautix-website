import Link from "next/link";
import { JsonLd } from "@/components/seo/JsonLd";
import {
  SITE_NAME,
  absoluteUrl,
  buildBreadcrumbSchema,
  buildMetadata,
} from "@/lib/seo";

const ARTICLE_PATH = "/resources/blog/your-internet-is-down-11pm";
const ARTICLE_TITLE = "Your Internet Is Down. It's 11pm. What Happens Next?";

export const metadata = buildMetadata({
  title: `${ARTICLE_TITLE} | Nautix`,
  description:
    "A practical look at how ISPs can resolve after-hours outages, automate billing recovery, and reduce churn using Splynx, SmartOLT, and AI operations.",
  path: ARTICLE_PATH,
  type: "article",
  keywords: [
    "isp customer support automation",
    "splynx smartolt automation",
    "whatsapp support for isps",
    "reduce isp churn",
    "autonomous isp support",
  ],
});

const breadcrumbSchema = buildBreadcrumbSchema([
  { name: "Home", path: "/" },
  { name: ARTICLE_TITLE, path: ARTICLE_PATH },
]);

const blogPostingSchema = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: ARTICLE_TITLE,
  description:
    "A practical look at how ISPs can resolve after-hours outages, automate billing recovery, and reduce churn using Splynx, SmartOLT, and AI operations.",
  mainEntityOfPage: absoluteUrl(ARTICLE_PATH),
  datePublished: "2026-04-08",
  dateModified: "2026-04-08",
  author: {
    "@type": "Organization",
    name: SITE_NAME,
  },
  publisher: {
    "@type": "Organization",
    name: SITE_NAME,
    logo: {
      "@type": "ImageObject",
      url: absoluteUrl("/icon.png"),
    },
  },
  wordCount: 2247,
  inLanguage: "en-KE",
  articleSection: [
    "ISP Support",
    "Customer Retention",
    "AI Operations",
    "Splynx",
    "SmartOLT",
  ],
  keywords: [
    "isp customer support automation",
    "splynx smartolt integration",
    "whatsapp support automation",
    "tier 1 resolution",
  ],
};

const spendingSignals = [
  "Support tickets are acknowledged, but issues still wait until morning.",
  "Outages spread across estate groups before your team sees the first escalation.",
  "Payments and reconnections depend on manual follow-ups and callbacks.",
  "Owners become the after-hours helpdesk because there is no always-on resolution layer.",
  "Churn happens quietly when unresolved nights become repeat experiences.",
];

const hiddenCosts = [
  {
    title: "Cash churn",
    description: "Unresolved overnight incidents convert into subscription cancellations.",
  },
  {
    title: "Support backlog",
    description: "Teams start the day clearing avoidable Tier 1 queues instead of doing strategic work.",
  },
  {
    title: "Escalation fatigue",
    description: "Founders and managers absorb operational load that should be automated.",
  },
  {
    title: "Revenue leakage",
    description: "Suspended accounts stay disconnected longer than necessary, delaying recovery.",
  },
  {
    title: "Referral loss",
    description: "Negative support moments travel quickly across neighborhood WhatsApp groups.",
  },
];

const projectRisks = [
  "You can identify incidents but cannot execute corrective actions without a human.",
  "Customers receive updates, not outcomes, which keeps churn risk active.",
  "Technical and billing conversations remain split across tools and teams.",
];

const resolutionFramework = [
  {
    title: "Identify instantly",
    description:
      "Map every inbound message to the right subscriber profile from Splynx in seconds.",
  },
  {
    title: "Read live context",
    description:
      "Check SmartOLT status, signal behavior, and account standing before replying.",
  },
  {
    title: "Act automatically",
    description:
      "Trigger approved workflows such as ONU reboot, payment prompts, and reconnection.",
  },
  {
    title: "Confirm clearly",
    description:
      "Send outcome-based updates with timestamps and resolution status in the same thread.",
  },
  {
    title: "Escalate with context",
    description:
      "When human intervention is needed, pass complete diagnostic history to the team.",
  },
];

const operatingModelCards = [
  {
    title: "Project-level resolution flows",
    description:
      "Run distinct automation tracks for residential support, enterprise SLAs, and billing recovery.",
  },
  {
    title: "Real-time operational visibility",
    description:
      "Track response, resolution, and recovery in one shared dashboard instead of morning reports.",
  },
  {
    title: "Automated policy execution",
    description:
      "Standardize night and weekend handling without depending on who is online.",
  },
  {
    title: "Payments inside support",
    description:
      "Collect overdue balances and restore service directly within WhatsApp conversations.",
  },
];

const comparisonRows = [
  {
    feature: "Response model",
    manual: "Auto-replies and next-day callbacks",
    nautix: "Real-time diagnosis plus corrective action",
  },
  {
    feature: "Outage handling",
    manual: "Customers report first, team reacts later",
    nautix: "Pattern detection and proactive customer updates",
  },
  {
    feature: "Payment recovery",
    manual: "Manual follow-up and delayed reactivation",
    nautix: "In-chat payment workflow with instant status updates",
  },
  {
    feature: "Escalations",
    manual: "Fragmented context across chats and tickets",
    nautix: "Structured handoff with full conversation and system history",
  },
  {
    feature: "Churn prevention",
    manual: "Limited to best-effort communication",
    nautix: "Resolution-first operations that reduce silent attrition",
  },
];

function SectionHeading({
  prefix,
  emphasis,
  suffix,
  subtitle,
}: {
  prefix: string;
  emphasis: string;
  suffix: string;
  subtitle?: string;
}) {
  return (
    <div className="text-center">
      <h2 className="font-heading text-3xl font-semibold leading-tight tracking-[-0.03em] text-[#20242d] sm:text-5xl">
        {prefix}
        <span className="text-[#7e10a2]">{emphasis}</span>
        {suffix}
      </h2>
      <span className="mx-auto mt-4 block h-1 w-20 rounded-full bg-[#7e10a2]" />
      {subtitle ? (
        <p className="mx-auto mt-4 max-w-3xl text-[16px] leading-7 text-[#5b6172]">{subtitle}</p>
      ) : null}
    </div>
  );
}

export default function IspAfterHoursArticlePage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={blogPostingSchema} />

      <main className="bg-[#f4f3f7] pb-20 pt-24">
        <article className="mx-auto max-w-[1160px]">
          <section className="mx-4 overflow-hidden rounded-[22px] bg-[linear-gradient(120deg,#6d0f8d_0%,#7e10a2_45%,#a31797_100%)] px-6 py-7 shadow-[0_20px_60px_rgba(44,11,63,0.24)] sm:px-9 sm:py-10">
            <div className="grid gap-7 lg:grid-cols-[1.02fr_1fr] lg:items-center">
              <div className="overflow-hidden rounded-[16px] border border-white/20">
                <img
                  src="/nautix-industries/isps.jpg"
                  alt="Fiber network infrastructure"
                  className="h-full min-h-[280px] w-full object-cover"
                />
              </div>

              <div>
                <span className="inline-flex rounded-full border border-white/30 bg-white/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-white/95">
                  ISP Support Operations
                </span>
                <h1 className="mt-4 font-heading text-[34px] font-semibold leading-[1.03] tracking-[-0.03em] text-white sm:text-[50px]">
                  {ARTICLE_TITLE}
                </h1>
                <p className="mt-4 max-w-[530px] text-[16px] leading-7 text-white/90">
                  At 11pm, customer messages are not routine support pings. They are live churn
                  moments. This breakdown shows how ISPs are replacing response-only workflows
                  with real-time resolution across support, billing, and retention.
                </p>

                <div className="mt-6 flex flex-wrap items-center gap-x-4 gap-y-2 text-[13px] font-semibold text-white/80">
                  <span>Nautix Team</span>
                  <span className="h-1 w-1 rounded-full bg-white/60" />
                  <span>April 8, 2026</span>
                  <span className="h-1 w-1 rounded-full bg-white/60" />
                  <span>11 min read</span>
                </div>
              </div>
            </div>
          </section>

          <section className="mx-4 mt-16">
            <SectionHeading
              prefix="Why ISPs lose customers when "
              emphasis="messages wait"
              suffix=""
              subtitle="Most operators do not lose customers because of one outage. They lose them when the outage goes unresolved while customers are actively asking for help."
            />

            <div className="mt-10 grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-start">
              <div>
                <div className="rounded-2xl border border-[#e4e6ec] bg-white p-6 text-[16px] leading-7 text-[#434958] shadow-[0_14px_40px_rgba(16,24,40,0.06)]">
                  The 11:04pm WhatsApp message is a churn event in progress. By morning, the issue
                  is no longer technical only. It has become a trust issue, a reputational issue,
                  and a revenue issue.
                </div>

                <ul className="mt-6 space-y-3">
                  {spendingSignals.map((signal) => (
                    <li
                      key={signal}
                      className="flex gap-3 rounded-2xl border border-[#e7e9ef] bg-white px-5 py-4 text-[15px] font-medium leading-7 text-[#394055]"
                    >
                      <span
                        className="mt-[10px] h-2.5 w-2.5 flex-none rounded-full bg-[#7e10a2]"
                        aria-hidden="true"
                      />
                      <span>{signal}</span>
                    </li>
                  ))}
                </ul>

                <blockquote className="mt-6 rounded-2xl border-l-4 border-[#7e10a2] bg-white px-5 py-4 text-[15px] font-semibold italic leading-7 text-[#3e4558] shadow-[0_10px_30px_rgba(17,24,39,0.05)]">
                  —Support teams don→t need more scripts. They need systems that resolve while the
                  customer is still in conversation.—
                </blockquote>
              </div>

              <div className="rounded-[24px] border border-[#d9dce5] bg-white p-4 shadow-[0_20px_45px_rgba(17,24,39,0.12)]">
                <img
                  src="/nautix-industries/isps.jpg"
                  alt="Internet network infrastructure"
                  className="h-auto w-full rounded-[18px] object-cover"
                />
              </div>
            </div>
          </section>

          <section className="mx-4 mt-16 rounded-[22px] bg-white px-6 py-10 shadow-[0_16px_42px_rgba(16,24,40,0.06)] sm:px-10">
            <SectionHeading
              prefix="The hidden cost of poor "
              emphasis="after-hours resolution"
              suffix=""
              subtitle="When issues are acknowledged but not resolved, the ripple effects compound across churn, team load, and growth."
            />

            <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
              {hiddenCosts.map((item) => (
                <div
                  key={item.title}
                  className="rounded-2xl border border-[#dadff0] bg-[#f8f9fe] px-5 py-5 shadow-[0_6px_18px_rgba(20,24,43,0.04)]"
                >
                  <h3 className="font-heading text-xl font-semibold tracking-[-0.02em] text-[#242a3a]">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-[14px] leading-6 text-[#4f5566]">{item.description}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 rounded-2xl bg-[linear-gradient(128deg,#4f1b8d_0%,#7e10a2_55%,#9f1e99_100%)] px-6 py-6 text-white shadow-[0_18px_44px_rgba(50,14,84,0.26)]">
              <p className="text-[16px] leading-7">
                For a 1,000-subscriber ISP, unresolved support events can quietly remove up to
                $15,000 in annual recurring revenue through avoidable churn and delayed payment
                recovery.
              </p>
            </div>
          </section>

          <section className="mx-4 mt-16 rounded-[22px] bg-[#ececf4] px-6 py-10 sm:px-10">
            <SectionHeading
              prefix="Managing ISP support operations: the "
              emphasis="overlooked gap"
              suffix=""
              subtitle="Most teams can see the issue. The real gap is taking approved action instantly, without waiting for morning shifts."
            />

            <div className="mt-10 grid gap-5 md:grid-cols-3">
              {projectRisks.map((risk) => (
                <div
                  key={risk}
                  className="rounded-2xl border border-[#d9dde9] bg-white px-5 py-5 text-[15px] leading-7 text-[#424859] shadow-[0_7px_20px_rgba(14,21,37,0.05)]"
                >
                  {risk}
                </div>
              ))}
            </div>

            <div className="mt-8 rounded-2xl border border-[#cfd4e6] bg-white px-6 py-6 text-[15px] leading-7 text-[#444b5f] shadow-[0_8px_22px_rgba(14,21,37,0.04)]">
              Real-world flow: at 11:47pm, a subscriber reports an outage. Nautix checks account
              status in Splynx, confirms ONU offline in SmartOLT, triggers remote reboot, verifies
              recovery, and sends confirmation at 11:49pm. Resolution time: one minute forty-seven
              seconds.
            </div>
          </section>

          <section className="mx-4 mt-16">
            <SectionHeading
              prefix="How Nautix simplifies ISP "
              emphasis="resolution workflows"
              suffix=""
              subtitle="This is where support moves from acknowledgments to outcomes."
            />

            <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-5">
              {resolutionFramework.map((step, index) => (
                <div
                  key={step.title}
                  className="rounded-2xl border border-[#dce1f0] bg-white px-5 py-5 shadow-[0_7px_18px_rgba(20,27,46,0.05)]"
                >
                  <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-[#f0e2f6] text-sm font-bold text-[#7e10a2]">
                    {index + 1}
                  </span>
                  <h3 className="mt-3 font-heading text-[20px] font-semibold leading-6 tracking-[-0.02em] text-[#242a39]">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-[14px] leading-6 text-[#52596a]">{step.description}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 rounded-2xl bg-[linear-gradient(128deg,#251b60_0%,#4a2286_55%,#7e10a2_100%)] px-6 py-6 text-white shadow-[0_18px_44px_rgba(33,20,80,0.3)]">
              <p className="text-[16px] leading-7">
                This framework is built for operators running live support on WhatsApp, with{" "}
                <strong>customer identity, network diagnostics, and payment workflows</strong>{" "}
                connected in one operational layer.
              </p>
            </div>
          </section>

          <section className="mx-4 mt-16 rounded-[22px] bg-white px-6 py-10 shadow-[0_16px_42px_rgba(16,24,40,0.06)] sm:px-10">
            <SectionHeading
              prefix="The future of ISP support in East Africa: "
              emphasis="resolve at source"
              suffix=""
              subtitle="The difference between manual support and autonomous support is not response speed alone. It is whether the issue gets solved in-thread."
            />

            <div className="mt-10 grid gap-4 md:grid-cols-2">
              {operatingModelCards.map((card) => (
                <div
                  key={card.title}
                  className="rounded-2xl border border-[#dbe0ee] bg-[#f9fafe] px-5 py-5"
                >
                  <h3 className="font-heading text-xl font-semibold tracking-[-0.02em] text-[#262d3e]">
                    {card.title}
                  </h3>
                  <p className="mt-2 text-[14px] leading-6 text-[#545b6d]">{card.description}</p>
                </div>
              ))}
            </div>

            <div className="mt-10 overflow-hidden rounded-2xl border border-[#d2d7e8]">
              <table className="w-full border-collapse text-left">
                <thead className="bg-[#f0f2f8]">
                  <tr>
                    <th className="px-5 py-3 text-[13px] font-bold uppercase tracking-[0.08em] text-[#303a4f]">
                      Capability
                    </th>
                    <th className="px-5 py-3 text-[13px] font-bold uppercase tracking-[0.08em] text-[#303a4f]">
                      Manual setup
                    </th>
                    <th className="px-5 py-3 text-[13px] font-bold uppercase tracking-[0.08em] text-[#303a4f]">
                      With Nautix
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonRows.map((row) => (
                    <tr key={row.feature} className="border-t border-[#e2e5f0] bg-white">
                      <td className="px-5 py-4 text-[14px] font-semibold text-[#2f374b]">
                        {row.feature}
                      </td>
                      <td className="px-5 py-4 text-[14px] text-[#555d6f]">{row.manual}</td>
                      <td className="px-5 py-4 text-[14px] font-medium text-[#2f374b]">{row.nautix}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <section className="mx-4 mt-16 rounded-[22px] bg-[linear-gradient(120deg,#5f1486_0%,#7e10a2_48%,#a01799_100%)] px-6 py-10 text-white shadow-[0_24px_60px_rgba(54,14,82,0.34)] sm:px-10">
            <h2 className="font-heading text-3xl font-semibold leading-tight tracking-[-0.03em] sm:text-5xl">
              Ready to resolve 11pm support events in real time?
            </h2>
            <p className="mt-4 max-w-3xl text-[16px] leading-7 text-white/90">
              We built the Nautix ISP Support Engine for teams running Splynx and SmartOLT.
              Book a live session to see a real outage flow, a real payment recovery sequence,
              and how this maps to your customer operations.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="https://app.nautix.io/book/skVGGbpLujeMxRTL2JgwnzUut4AC3N-X/xU-NHVEi4rMuY9DlQZdvrHqnJkY-YVAp"
                className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-[#5b0e7f] no-underline transition hover:bg-[#ece7f4]"
              >
                Book the ISP Demo
              </Link>
              <Link
                href="/industries/isps"
                className="inline-flex items-center justify-center rounded-full border border-white/35 bg-white/10 px-6 py-3 text-sm font-semibold text-white no-underline transition hover:bg-white/18"
              >
                Explore ISP Use Cases
              </Link>
              <Link
                href="/pricing"
                className="inline-flex items-center justify-center rounded-full border border-white/35 bg-white/10 px-6 py-3 text-sm font-semibold text-white no-underline transition hover:bg-white/18"
              >
                Review Pricing
              </Link>
            </div>
          </section>
        </article>
      </main>
    </>
  );
}
