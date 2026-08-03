"use client";

import { useState } from "react";
import { CAPABILITIES_DATA } from "@/lib/isp-data";
import { useReveal } from "@/hooks/useReveal";

/**
 * IspCapabilities — Section 3: What Nautix Does.
 *
 * Six capability cards in a 2Ã—3 responsive grid (2 columns Ã— 3 rows
 * on desktop, stacked on mobile). Each card has an icon, title,
 * description, and a visually distinct outcome line.
 *
 * Cards are clickable to expand more detail via accordion.
 * The high-level scan is enough to convince — expansion
 * provides deeper context for the sceptical technical reader.
 */
const CAPABILITY_ICONS: Record<string, string> = {
  "Technical Support": "/nautix-icons/icon-tech.svg",
  "Billing & Collections": "/nautix-icons/icon-billing.svg",
  "Proactive Outage Alerts": "/nautix-icons/icon-alert.svg",
  "Lead Capture": "/nautix-icons/icon-target.svg",
  "Subscriber Onboarding": "/nautix-icons/icon-onboarding.svg",
  "Daily Operations Report": "/nautix-icons/icon-report.svg",
};

const CAPABILITY_IMAGES: Record<string, string> = {
  "Technical Support": "/nautix-isp/technical-support.png",
  "Billing & Collections": "/nautix-isp/billing-and-collections.png",
  "Proactive Outage Alerts": "/nautix-isp/proactive-outage-alerts.png",
  "Lead Capture": "/nautix-isp/lead-capture.png",
  "Subscriber Onboarding": "/nautix-isp/subscriber-onboarding.png",
  "Daily Operations Report": "/nautix-isp/daily-operations-report.png",
};


export function IspCapabilities() {
  const ref = useReveal<HTMLElement>();
  const { sectionHeading, sectionSubhead, cards } = CAPABILITIES_DATA;
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const toggleExpand = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section
      ref={ref}
      className="relative border-t border-primary-100/50 bg-white py-24 md:py-32"
    >
      <div className="mx-auto max-w-[1280px] px-6 md:px-10">
        {/* Section heading */}
        <div className="reveal">
      <h2
            style={{
              fontFamily: '"Sharp Grotesk", Sans-serif',
              fontSize: "clamp(2rem, 5vw, 3rem)",
              lineHeight: "1.1em",
              letterSpacing: "-0.06rem",
              textAlign: "center",
            }}
          >
            Six ways Nautix runs your ISP {"\u2014"}{" "}
            <span
              style={{
                background: "#E2FF5E",
                color: "#16404B",
                boxShadow: "inset 0 0 0 1px rgba(34,48,63,0.06)",
              }}
            >
              automatically.
            </span>
    </h2>
          <p className="mt-4 max-w-[720px] text-[15px] leading-[1.6] text-black/60 md:text-[16px]">
            {sectionSubhead}
          </p>
        </div>

        {/* 2Ã—3 grid: 2 columns on md+, 1 column on mobile */}
        <div className="reveal mt-12 grid gap-4 md:grid-cols-3">
          {cards.map((card, i) => {
            const isExpanded = expandedIndex === i;

            return (
                <div
                key={card.title}
                className={`group relative flex cursor-pointer flex-col rounded-[20px] border bg-white p-5 text-left transition-all duration-300 ${
                  isExpanded
                    ? "border-primary-300 shadow-lg shadow-primary-100/50 ring-1 ring-primary-200"
                    : "border-black/10 hover:-translate-y-0.5 hover:shadow-lg"
                }`}
                style={{ animationDelay: `${i * 60}ms` }}
                onClick={() => toggleExpand(i)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    toggleExpand(i);
                  }
                }}
              >
                {/* —— Card image —— */}
                <div className="-mx-5 -mt-5 mb-4 overflow-hidden rounded-t-[20px]">
                  <img
                    src={CAPABILITY_IMAGES[card.title]}
                    alt={card.title}
                    className="h-48 w-full object-cover"
                  />
                </div>

                {/* —— Icon + Title + Description —— */}
                <div className="flex items-start gap-4">
                  {/* Icon container — matches WORKFLOW_CARDS exactly */}
                  <span
                    className="shrink-0 text-[20px] leading-none"
                    style={{
                      width: 48,
                      height: 48,
                      borderRadius: 12,
                      background: "rgba(126,16,162,0.08)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <img
                      src={CAPABILITY_ICONS[card.title]}
                      alt={card.title}
                      style={{ width: 24, height: 24 }}
                    />
                  </span>

                  <div className="min-w-0 flex-1">
                    {/* Title — matches WORKFLOW_CARDS exactly */}
                    <h3
                      style={{
                        fontFamily: "var(--font-heading), sans-serif",
                        fontSize: 18,
                        fontWeight: 600,
                        margin: "0 0 8px",
                        color: "#171717",
                      }}
                    >
                      {card.title}
                    </h3>

                    {/* Description — matches WORKFLOW_CARDS exactly */}
                    <p
                      style={{
                        margin: 0,
                        color: "rgba(23,23,23,0.68)",
                        fontSize: 15,
                        lineHeight: 1.55,
                      }}
                    >
                      {card.description}
                    </p>
                  </div>
                </div>

                {/* —— Outcome line — visually distinct —— */}
                <div className="mt-3 flex items-start gap-2 border-t border-black/10 pt-3">
                  <span className="mt-px shrink-0 text-[13px] text-primary-600">
                    →
                  </span>
                  <span className="text-[13px] font-semibold leading-[1.5] text-primary-700">
                    {card.outcome}
                  </span>
                </div>

                {/* —— Expand affordance —— */}
                <div className="mt-2 flex items-center gap-1.5 text-[11px] text-black/35 transition-colors group-hover:text-black/55">
                  <svg
                    width="10"
                    height="10"
                    viewBox="0 0 10 10"
                    fill="none"
                    aria-hidden
                    className={`shrink-0 transition-transform duration-300 ${
                      isExpanded ? "rotate-45" : ""
                    }`}
                  >
                    <path
                      d="M5 1v8M1 5h8"
                      stroke="currentColor"
                      strokeWidth="1.4"
                      strokeLinecap="round"
                    />
                  </svg>
                  {isExpanded ? "Close detail" : "How it works"}
                </div>

                {/* —— Expanded detail panel —— */}
                {isExpanded && (
                  <div className="mt-2 rounded-2xl bg-primary-50/40 p-4"
                    style={{ animation: "msg-in 0.35s ease both" }}
                  >
                    <p className="text-[13px] leading-[1.7] text-primary-800">
                      {card.description}
                    </p>
                    <p className="mt-3 text-[12px] leading-[1.6] text-primary-600/80">
                      Nautix handles this end→to→end across WhatsApp,
                      Instagram, and Facebook — 24 hours a day, without a
                      human agent in the loop. Every interaction is logged,
                      every outcome tracked.
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}