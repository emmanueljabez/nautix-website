"use client";

import { PAIN_CARDS_DATA } from "@/lib/isp-data";
import { useReveal } from "@/hooks/useReveal";

/**
 * IspProblemCards — Section 2: Validate pain.
 *
 * Three short cards. Each card has a time-anchor pill,
 * a headline, body copy, and a visually distinct cost line.
 *
 * The cost line is the part that converts — styled with purple
 * accent, a top border separator, and bold weight to draw the eye.
 *
 * Recognition test: after reading these three cards, the ISP
 * operator should think "Yes, this person knows my business."
 * That recognition earns the next 30 seconds of attention.
 */
export function IspProblemCards() {
  const ref = useReveal<HTMLElement>();
  const { sectionHeading, cards } = PAIN_CARDS_DATA;

  return (
    <section
      ref={ref}
       className="relative border-t border-primary-100/50 bg-white py-24 md:py-32"
    >
      <div className="mx-auto max-w-[1280px] px-6 md:px-10">
        {/* Section heading */}
        <h2 className="reveal text-center"
          style={{
            fontFamily: '"Sharp Grotesk", Sans-serif',
            fontSize: "clamp(2rem, 5vw, 3rem)",
            lineHeight: "1.1em",
            letterSpacing: "-0.06rem",
          }}
        >
          Built for the way{" "}
          <span
            style={{
              background: "#E2FF5E",
              color: "#16404B",
              boxShadow: "inset 0 0 0 1px rgba(34,48,63,0.06)",
            }}
          >
            ISPs actually run.
          </span>
        </h2>

        {/* 3-card responsive grid */}
        <div className="reveal mt-12 grid gap-6 md:grid-cols-3">
          {cards.map((card, i) => (
            <div
              key={card.timeAnchor}
              className="group relative flex flex-col rounded-3xl border border-black/10 bg-[#FAF8F5] p-6 transition hover:-translate-y-0.5 hover:shadow-lg md:p-8"
              style={{ animationDelay: `${i * 80}ms` }}
            >
              {/* Time anchor — prominent pill with live-indicator dot */}
              <div className="mb-5 inline-flex items-center gap-2 self-start rounded-full border border-primary-200 bg-primary-50/60 px-3.5 py-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-primary-600" />
                <span className="text-[12px] font-bold uppercase tracking-[0.1em] text-primary-700">
                  {card.timeAnchor}
                </span>
              </div>

              {/* Headline */}
              <h3 className="font-[var(--font-heading)] text-[20px] font-semibold leading-[1.25] tracking-[-0.015em] text-neutral-900 md:text-[22px]">
                {card.headline}
              </h3>

              {/* Body */}
              <p className="mt-3 flex-1 text-[14px] leading-[1.6] text-black/60">
                {card.body}
              </p>

              {/* Cost — visually distinct, the converting line */}
              <div className="mt-6 border-t border-black/10 pt-4">
                <span className="text-[13px] font-semibold leading-[1.5] text-primary-700">
                  → {card.cost}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}