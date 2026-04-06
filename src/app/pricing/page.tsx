"use client";

import { useMemo, useState } from "react";

import { FinalCtaSection } from "@/components/homepage/FinalCtaSection";

const REGISTER_URL = "https://app.nautix.io/register";
const DEMO_URL = "https://app.nautix.io/register";
const PRICING_PAGE_STYLESHEET = "/wp-content/uploads/elementor/css/post-4682.css";

type PricingPlan = {
  name: string;
  price: string;
  suffix: string;
  note: string;
  ctaLabel: string;
  ctaHref: string;
  highlighted: boolean;
  ctaFootnote: string;
  features: readonly string[];
};

const PLATFORM_PLANS = {
  monthly: [
    {
      name: "Starter",
      price: "$50",
      suffix: "/mo",
      note: "Perfect for small businesses starting with WhatsApp.",
      ctaLabel: "Start 7-day free trial",
      ctaHref: REGISTER_URL,
      highlighted: false,
      ctaFootnote: "No credit card required",
      features: [
        "Up to 5 team members",
        "1 WhatsApp Business number",
        "1,000 service conversations/mo",
        "Shared team inbox",
        "Basic automation workflows",
      ],
    },
    {
      name: "Growth",
      price: "$170",
      suffix: "/mo",
      note: "For growing teams that need advanced routing, campaigns, and analytics.",
      ctaLabel: "Start 7-day free trial",
      ctaHref: REGISTER_URL,
      highlighted: true,
      ctaFootnote: "Best for scaling teams",
      features: [
        "Up to 20 team members",
        "Up to 5 WhatsApp numbers",
        "10,000 service conversations/mo",
        "Broadcast campaigns & sequences",
        "Advanced analytics & dashboards",
      ],
    },
    {
      name: "Enterprise",
      price: "Talk to Us",
      suffix: "",
      note: "For high-volume businesses needing custom workflows, SLAs, and deeper integrations.",
      ctaLabel: "Contact Sales",
      ctaHref: DEMO_URL,
      highlighted: false,
      ctaFootnote: "Custom onboarding included",
      features: [
        "Unlimited team members",
        "Unlimited WhatsApp numbers",
        "30,000 service conversations/mo",
        "Custom API & webhook integrations",
        "24/7 priority support",
      ],
    },
  ],
  annual: [
    {
      name: "Starter",
      price: "$45",
      suffix: "/mo",
      note: "Perfect for small businesses starting with WhatsApp.",
      ctaLabel: "Start 7-day free trial",
      ctaHref: REGISTER_URL,
      highlighted: false,
      ctaFootnote: "Billed $540 annually",
      features: [
        "Up to 5 team members",
        "1 WhatsApp Business number",
        "1,000 service conversations/mo",
        "Shared team inbox",
        "Basic automation workflows",
      ],
    },
    {
      name: "Growth",
      price: "$153",
      suffix: "/mo",
      note: "For growing teams that need advanced routing, campaigns, and analytics.",
      ctaLabel: "Start 7-day free trial",
      ctaHref: REGISTER_URL,
      highlighted: true,
      ctaFootnote: "Billed $1,836 annually",
      features: [
        "Up to 20 team members",
        "Up to 5 WhatsApp numbers",
        "10,000 service conversations/mo",
        "Broadcast campaigns & sequences",
        "Advanced analytics & dashboards",
      ],
    },
    {
      name: "Enterprise",
      price: "Talk to Us",
      suffix: "",
      note: "For high-volume businesses needing custom workflows, SLAs, and deeper integrations.",
      ctaLabel: "Contact Sales",
      ctaHref: DEMO_URL,
      highlighted: false,
      ctaFootnote: "Custom annual agreements",
      features: [
        "Unlimited team members",
        "Unlimited WhatsApp numbers",
        "30,000 service conversations/mo",
        "Custom API & webhook integrations",
        "24/7 priority support",
      ],
    },
  ],
} as const;

const AI_QUANTITIES = [100, 500, 1000, 2000, 3000, 5000] as const;

const COMPARISON_GROUPS = [
  {
    heading: "Platform plans",
    rows: [
      { label: "Team members", values: ["Up to 5", "Up to 20", "Unlimited"] },
      { label: "WhatsApp numbers", values: ["1", "Up to 5", "Unlimited"] },
      { label: "Included service conversations", values: ["1,000/mo", "10,000/mo", "30,000/mo"] },
      { label: "Shared team inbox", values: [true, true, true] },
      { label: "Chat routing & SLA alerts", values: [false, true, true] },
      { label: "Broadcast campaigns", values: [false, true, true] },
      { label: "Automation workflows", values: ["Basic", "Advanced", "Custom"] },
      { label: "Analytics dashboards", values: ["Basic", "Advanced", "Custom"] },
      { label: "Support", values: ["Email", "Priority email & chat", "24/7 priority"] },
    ],
  },
  {
    heading: "AI agent add-on",
    rows: [
      { label: "Available on this plan", values: [false, true, true] },
      { label: "24/7 AI responses", values: [false, true, true] },
      { label: "Custom knowledge base", values: [false, true, true] },
      { label: "Human handoff", values: [false, true, true] },
      { label: "Sentiment analysis", values: [false, true, true] },
      { label: "AI performance analytics", values: [false, true, true] },
    ],
  },
] as const;

const FAQS = [
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
    question: "Is the 7-day trial really free?",
    answer:
      "Yes. No credit card is required. You get full access to your selected platform plan and can test the AI agent on a limited volume of live conversations.",
  },
  {
    question: "Can Nautix be trained on our business data?",
    answer:
      "Yes. We use your FAQs, workflows, product or service data, policies, and escalation rules to make responses specific to your business and brand voice.",
  },
] as const;

type BillingCycle = "monthly" | "annual";
type ComparisonValue = string | boolean;

function PlanValue({ value }: { value: ComparisonValue }) {
  if (typeof value === "boolean") {
    return (
      <div>
        <span
          className={`cstack w-24px h-24px rounded-circle ${
            value
              ? "bg-primary text-white dark:bg-tertiary dark:text-dark"
              : "bg-dark dark:bg-white bg-opacity-10"
          }`}
        >
          <i className={`icon-narrow fw-bold ${value ? "unicon-checkmark" : "unicon-close"}`} />
        </span>
      </div>
    );
  }

  return (
    <div>
      <span>{value}</span>
    </div>
  );
}

function PricingPlanCard({
  plan,
}: {
  plan: PricingPlan;
}) {
  return (
    <div className="elementor-widget-container">
      <div
        className={`vstack mini-pricing-box ${
          plan.highlighted
            ? "panel border border-2 rounded-1-5 border-primary dark:border-tertiary contrast-shadow-md z-1"
            : ""
        }`}
        style={plan.highlighted ? { marginTop: "-2px", marginBottom: "-2px" } : undefined}
      >
        <div className="panel vstack items-center gap-narrow p-2 py-4 position-relative">
          <h3 className={`title h5 mb-1 ${plan.highlighted ? "text-primary dark:text-tertiary" : ""}`}>
            {plan.name}
          </h3>

          {plan.price.startsWith("$") ? (
            <h5 className="price h3 lg:h2 m-0">
              <sup className="h5 m-0 mx-narrow">$</sup>
              {plan.price.replace("$", "")}
            </h5>
          ) : (
            <h5 className="price h3 lg:h2 m-0">{plan.price}</h5>
          )}

          <span className="fs-7 short-text fw-normal m-0">
            {plan.suffix ? `${plan.suffix} · ${plan.note}` : plan.note}
          </span>

          {plan.highlighted ? (
            <span className="position-absolute top-0 end-0 cstack px-1 bg-tertiary text-primary border rounded-default m-1">
              Best value
            </span>
          ) : null}
        </div>

        <div className="vstack items-center gap-2 p-4 pt-0">
          <a
            href={plan.ctaHref}
            className={`btn btn-md ${
              plan.highlighted
                ? "btn-primary dark:bg-tertiary dark:text-primary"
                : "btn-ghost-primary border"
            } fw-bold rounded-pill px-3 w-100`}
          >
            {plan.ctaLabel}
          </a>
          <p className="fs-7 m-0 fw-normal">{plan.ctaFootnote}</p>
        </div>

        <div className="px-3 pb-3 sm:px-4">
          <ul className="nav-y gap-1 fs-7 text-dark dark:text-white text-opacity-70">
            {plan.features.map((feature) => (
              <li key={feature} className="hstack items-start gap-1">
                <i className="icon icon-narrow unicon-checkmark fw-bold mt-px text-primary" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default function PricingPage() {
  const [billingCycle, setBillingCycle] = useState<BillingCycle>("monthly");
  const [selectedAiQuantity, setSelectedAiQuantity] = useState<number>(1000);

  const plans = PLATFORM_PLANS[billingCycle];
  const aiMonthlyPrice = useMemo(
    () => (selectedAiQuantity * 0.03).toFixed(0),
    [selectedAiQuantity],
  );

  return (
    <>
      <link rel="stylesheet" href={PRICING_PAGE_STYLESHEET} />
      <main className="main-area">
        <div
          data-elementor-type="wp-page"
          data-elementor-id={4682}
          className="elementor elementor-4682"
        >
          <div
            className="elementor-element elementor-element-1abff72 animejs-onview e-flex e-con-boxed animejs-element e-con e-parent"
            data-id="1abff72"
            data-element_type="container"
          >
            <div className="e-con-inner">
              <div
                className="elementor-element elementor-element-3f0fd5c e-con-full animejs-onview e-flex animejs-element e-con e-child"
                data-id="3f0fd5c"
                data-element_type="container"
              >
                <div
                  className="elementor-element elementor-element-bdd3ad3 e-con-full e-flex animejs-disable e-con e-child"
                  data-id="bdd3ad3"
                  data-element_type="container"
                >
                  <div
                    className="elementor-element elementor-element-704d07e border rounded-pill animejs-disable elementor-widget elementor-widget-tg-heading"
                    data-id="704d07e"
                    data-element_type="widget"
                  >
                    <div className="elementor-widget-container">
                      <p className="title tg-element-title mb-0">Pricing</p>
                    </div>
                  </div>
                </div>
                <div
                  className="elementor-element elementor-element-cea7ce0 animejs-disable elementor-widget elementor-widget-tg-heading"
                  data-id="cea7ce0"
                  data-element_type="widget"
                >
                  <div className="elementor-widget-container">
                    <h2 className="title tg-element-title mb-0">
                      Simple, <span className="px-1">transparent pricing</span>
                    </h2>
                  </div>
                </div>
                <div
                  className="elementor-element elementor-element-9639fa5 animejs-disable elementor-widget elementor-widget-tg-heading"
                  data-id="9639fa5"
                  data-element_type="widget"
                >
                  <div className="elementor-widget-container">
                    <p className="title tg-element-title mb-0">
                      Choose your platform plan, then add AI automation as needed. No hidden fees.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mb-3 hstack justify-center gap-1 flex-wrap">
                <button
                  type="button"
                  onClick={() => setBillingCycle("monthly")}
                  className={`btn btn-sm rounded-pill px-2 fw-bold ${
                    billingCycle === "monthly"
                      ? "btn-primary dark:bg-tertiary dark:text-primary"
                      : "btn-ghost-primary border"
                  }`}
                >
                  Monthly
                </button>
                <button
                  type="button"
                  onClick={() => setBillingCycle("annual")}
                  className={`btn btn-sm rounded-pill px-2 fw-bold ${
                    billingCycle === "annual"
                      ? "btn-primary dark:bg-tertiary dark:text-primary"
                      : "btn-ghost-primary border"
                  }`}
                >
                  Annual
                </button>
                <span className="cstack px-1 bg-tertiary text-primary border rounded-default">
                  Save 10%
                </span>
              </div>

              <div
                className="elementor-element elementor-element-1b5e8a2 e-grid e-con-full animejs-disable e-con e-child"
                data-id="1b5e8a2"
                data-element_type="container"
              >
                <div
                  className="elementor-element elementor-element-eaf0d7b animejs-disable elementor-widget elementor-widget-tg-pricing-mini"
                  data-id="eaf0d7b"
                  data-element_type="widget"
                >
                  <PricingPlanCard plan={plans[0]} />
                </div>
                <div
                  className="elementor-element elementor-element-5b756b7 animejs-disable elementor-widget elementor-widget-tg-pricing-mini"
                  data-id="5b756b7"
                  data-element_type="widget"
                >
                  <PricingPlanCard plan={plans[1]} />
                </div>
                <div
                  className="elementor-element elementor-element-4bc88ad animejs-disable elementor-widget elementor-widget-tg-pricing-mini"
                  data-id="4bc88ad"
                  data-element_type="widget"
                >
                  <PricingPlanCard plan={plans[2]} />
                </div>
              </div>
            </div>
          </div>

          <div
            className="elementor-element elementor-element-b23db01 animejs-onview e-flex e-con-boxed animejs-element e-con e-parent"
            data-id="b23db01"
            data-element_type="container"
          >
            <div className="e-con-inner">
              <div
                className="elementor-element elementor-element-7c50fc6 e-flex e-con-boxed animejs-disable e-con e-child"
                data-id="7c50fc6"
                data-element_type="container"
              >
                <div className="e-con-inner">
                  <div
                    className="elementor-element elementor-element-8ddc344 animejs-disable elementor-widget elementor-widget-tg-heading"
                    data-id="8ddc344"
                    data-element_type="widget"
                  >
                    <div className="elementor-widget-container">
                      <h4 className="title tg-element-title mb-0">
                        Compare plans and choose the best fit for your team.
                      </h4>
                    </div>
                  </div>
                </div>
              </div>

              <div
                className="elementor-element elementor-element-1add5c2 e-con-full overflow-md-scroll e-flex animejs-disable e-con e-child"
                data-id="1add5c2"
                data-element_type="container"
              >
                <div
                  className="elementor-element elementor-element-87207ae table-responsive-xs animejs-disable elementor-widget elementor-widget-tg-comparison-list"
                  data-id="87207ae"
                  data-element_type="widget"
                >
                  <div className="elementor-widget-container">
                    <table className="uc-table uc-table-divider">
                      <thead className="table-head sticky-top z-1 bg-white text-dark dark:bg-gray-900 dark:text-white">
                        <tr className="table-row border-white dark:border-gray-900">
                          <th className="table-header-cell" scope="row">
                            <div className="text-transparent">
                              <span>Feature</span>
                            </div>
                          </th>
                          {plans.map((plan, index) => (
                            <th
                              key={plan.name}
                              className="table-header-cell w-1/5"
                              scope="col"
                              id={`plan-${index + 1}`}
                            >
                              <div className="title">
                                <div className="h6 lg:h5 mt-4 mb-2">
                                  <span>{plan.name}</span>
                                </div>
                              </div>
                            </th>
                          ))}
                        </tr>
                      </thead>

                      {COMPARISON_GROUPS.map((group) => (
                        <tbody key={group.heading} className="table-body">
                          <tr className="table-row table-heading bg-primary-25 dark:bg-gray-700 border-white dark:border-gray-900">
                            <th colSpan={4} scope="colgroup">
                              <div className="h5 m-0 text-dark dark:text-white">
                                <span>{group.heading}</span>
                              </div>
                            </th>
                          </tr>

                          {group.rows.map((row, rowIndex) => (
                            <tr
                              key={row.label}
                              className={`table-row ${
                                rowIndex === 0
                                  ? "border-white dark:border-gray-900"
                                  : "border-gray-100 dark:border-gray-600"
                              }`}
                            >
                              <th scope="row">
                                <div className="hstack gap-1 justify-start">
                                  <span className="fs-5 fw-bold text-dark dark:text-white">
                                    {row.label}
                                  </span>
                                </div>
                              </th>

                              {row.values.map((value, index) => (
                                <td key={`${row.label}-${index}`}>
                                  <PlanValue value={value} />
                                </td>
                              ))}
                            </tr>
                          ))}
                        </tbody>
                      ))}
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div
            className="elementor-element elementor-element-0a0453f animejs-onview e-flex e-con-boxed animejs-element e-con e-parent"
            data-id="0a0453f"
            data-element_type="container"
          >
            <div className="e-con-inner">
              <div
                className="elementor-element elementor-element-eb76118 e-flex e-con-boxed animejs-disable e-con e-child"
                data-id="eb76118"
                data-element_type="container"
              >
                <div className="e-con-inner">
                  <div
                    className="elementor-element elementor-element-249f978 animejs-disable elementor-widget elementor-widget-tg-heading"
                    data-id="249f978"
                    data-element_type="widget"
                  >
                    <div className="elementor-widget-container">
                      <h2 className="title tg-element-title mb-0">
                        Add AI support on <span className="px-1">your terms</span>
                      </h2>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="elementor-element elementor-element-a17ba6d animejs-disable elementor-widget elementor-widget-tg-heading"
                data-id="a17ba6d"
                data-element_type="widget"
              >
                  <div className="elementor-widget-container">
                    <p className="title tg-element-title mb-0">
                      Automate customer support with AI that learns your business. Available on Growth and Enterprise plans.
                    </p>
                  </div>
                </div>

              <div className="mx-auto mt-4 w-100 max-w-900px">
                <div className="panel border border-2 rounded-1-5 border-primary contrast-shadow-md bg-white p-2 lg:p-4">
                  <div className="vstack gap-2">
                    <div className="hstack items-start justify-between gap-2 flex-wrap">
                      <div>
                        <h4 className="title h4 mb-narrow">AI agent responses</h4>
                        <p className="fs-7 m-0 text-dark text-opacity-70">Select monthly volume</p>
                      </div>
                      <div className="panel text-end">
                        <div className="h2 m-0 text-primary">
                          ${aiMonthlyPrice}
                          <span className="fs-6 text-dark text-opacity-50"> / month</span>
                        </div>
                      </div>
                    </div>

                    <div className="panel border rounded-1 p-1 bg-primary-25">
                      <label htmlFor="ai-quantity" className="d-block fs-8 fw-bold text-uppercase text-primary mb-1">
                        Quantity
                      </label>
                      <select
                        id="ai-quantity"
                        value={selectedAiQuantity}
                        onChange={(event) => setSelectedAiQuantity(Number(event.target.value))}
                        className="uc-select uc-form-large bg-transparent border-0 text-primary fw-bold"
                      >
                        {AI_QUANTITIES.map((quantity) => (
                          <option key={quantity} value={quantity}>
                            {quantity === 5000 ? "5000+" : quantity}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div className="panel vstack gap-1">
                      {[
                        "24/7 AI responses",
                        "Custom knowledge base",
                        "Multi-language support",
                        "Human handoff",
                        "Sentiment analysis",
                        "AI performance analytics",
                      ].map((feature) => (
                        <div key={feature} className="hstack items-start gap-1">
                          <i className="icon icon-narrow unicon-checkmark fw-bold mt-px text-primary" />
                          <span className="fs-7 text-dark text-opacity-80">{feature}</span>
                        </div>
                      ))}
                    </div>

                    <div className="hstack justify-center">
                      <a
                        href={REGISTER_URL}
                        className="btn btn-md btn-primary dark:bg-tertiary dark:text-primary fw-bold rounded-pill px-3"
                      >
                        Get started
                      </a>
                    </div>
                  </div>
                </div>

                <div className="panel border rounded-1-5 mt-3 p-2 bg-primary-25">
                  <h5 className="title h5 mb-1 text-primary">Understanding WhatsApp conversations</h5>
                  <p className="fs-7 m-0 text-dark text-opacity-75">
                    Service conversations are customer-initiated chats within 24 hours. Business-initiated campaigns and
                    broadcasts are billed separately by Meta at current rates. Additional service conversations beyond
                    your included plan allowance are billed at $0.02 each.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div
            className="elementor-element elementor-element-4b0dfa1 animejs-onview e-flex e-con-boxed animejs-element e-con e-parent"
            data-id="4b0dfa1"
            data-element_type="container"
          >
            <div className="e-con-inner">
              <div
                className="elementor-element elementor-element-5a9a03e animejs-disable elementor-widget elementor-widget-tg-heading"
                data-id="5a9a03e"
                data-element_type="widget"
              >
                <div className="elementor-widget-container">
                  <div className="nautix-industry-head">
                    <h2 className="nautix-section-title mb-0">
                      <span className="nautix-section-title-line">Frequently asked</span>
                      <span className="nautix-section-title-focus">Questions</span>
                    </h2>
                  </div>
                </div>
              </div>

              <div
                className="elementor-element elementor-element-08158c3 e-con-full e-flex animejs-disable e-con e-child"
                data-id="08158c3"
                data-element_type="container"
              >
                <div
                  className="elementor-element elementor-element-f7be974 elementor-widget__width-initial animejs-disable elementor-widget elementor-widget-genix-faq"
                  data-id="f7be974"
                  data-element_type="widget"
                >
                  <div className="elementor-widget-container">
                    <ul
                      className="uc-accordion-divider gap-5"
                      data-uc-accordion="targets: > li; multiple: true;"
                    >
                      {FAQS.map((faq, index) => (
                        <li key={faq.question} className={index === 0 ? "uc-open" : undefined}>
                          <a className="uc-accordion-title fs-5 sm:fs-4" href="#">
                            {faq.question}
                          </a>
                          <div className="uc-accordion-content">
                            <p>{faq.answer}</p>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
              <FinalCtaSection />
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
