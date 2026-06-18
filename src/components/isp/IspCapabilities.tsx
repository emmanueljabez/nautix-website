"use client";

import { useState } from "react";
import { CAPABILITIES_DATA } from "@/lib/isp-data";
import { useReveal } from "@/hooks/useReveal";

/**
 * IspCapabilities — Section 3: What Nautix Does.
 *
 * Six capability cards in a 2×3 responsive grid (2 columns × 3 rows
 * on desktop, stacked on mobile). Each card has an icon, title,
 * description, and a visually distinct outcome line.
 *
 * Cards are clickable to expand more detail via accordion.
 * The high-level scan is enough to convince — expansion
 * provides deeper context for the sceptical technical reader.
 */
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
      className="relative border-t border-black/5 bg-[#FAF8F5] py-24 md:py-32"
    >
      <div className="mx-auto max-w-[1280px] px-6 md:px-10">
        {/* Section heading */}
        <div className="reveal">
          <h2 className="font-[var(--font-heading)] text-[clamp(28px,4vw,56px)] font-semibold leading-[1.05] tracking-[-0.025em] text-neutral-900">
            {sectionHeading}
          </h2>
          <p className="mt-4 max-w-[720px] text-[15px] leading-[1.6] text-black/60 md:text-[16px]">
            {sectionSubhead}
          </p>
        </div>

        {/* 2×3 grid: 2 columns on md+, 1 column on mobile */}
        <div className="reveal mt-12 grid gap-5 md:grid-cols-2">
          {cards.map((card, i) => {
            const isExpanded = expandedIndex === i;

            return (
              <div
                key={card.title}
                className={`group relative flex cursor-pointer flex-col rounded-3xl border bg-white p-6 text-left transition-all duration-300 md:p-8 ${
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
                {/* ── Icon + Title + Description ── */}
                <div className="flex items-start gap-4">
                  {/* Icon container — subtle purple/pink gradient bg */}
                  <span
                    className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl text-[22px] leading-none"
                    style={{
                      background:
                        "linear-gradient(135deg, rgba(124,58,237,0.1), rgba(236,72,153,0.08))",
                    }}
                  >
                    {card.icon}
                  </span>

                  <div className="min-w-0 flex-1">
                    {/* Title */}
                    <h3 className="font-[var(--font-heading)] text-[18px] font-semibold leading-[1.3] tracking-[-0.01em] text-neutral-900 md:text-[20px]">
                      {card.title}
                    </h3>

                    {/* Description */}
                    <p className="mt-2 text-[14px] leading-[1.6] text-black/60">
                      {card.description}
                    </p>
                  </div>
                </div>

                {/* ── Outcome line — visually distinct ── */}
                <div className="mt-5 flex items-start gap-2 border-t border-black/10 pt-4">
                  <span className="mt-px shrink-0 text-[13px] text-primary-600">
                    →
                  </span>
                  <span className="text-[13px] font-semibold leading-[1.5] text-primary-700">
                    {card.outcome}
                  </span>
                </div>

                {/* ── Expand affordance ── */}
                <div className="mt-3 flex items-center gap-1.5 text-[11px] text-black/35 transition-colors group-hover:text-black/55">
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

                {/* ── Expanded detail panel ── */}
                {isExpanded && (
                  <div
                    className="mt-3 rounded-2xl bg-primary-50/40 p-5"
                    style={{ animation: "msg-in 0.35s ease both" }}
                  >
                    <p className="text-[13px] leading-[1.7] text-primary-800">
                      {card.description}
                    </p>
                    <p className="mt-3 text-[12px] leading-[1.6] text-primary-600/80">
                      Nautix handles this end‑to‑end across WhatsApp,
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