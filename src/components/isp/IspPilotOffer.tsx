"use client";

import Link from "next/link";
import { PILOT_OFFER_DATA } from "@/lib/isp-data";
import { useReveal } from "@/hooks/useReveal";

const BOOK_DEMO_URL =
  "https://app.nautix.io/book/skVGGbpLujeMxRTL2JgwnzUut4AC3N-X/xU-NHVEi4rMuY9DlQZdvrHqnJkY-YVAp";

/**
 * Checkmark icon — white on purple.
 */
function CheckWhite() {
  return (
    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-white/15">
      <svg
        width="11"
        height="11"
        viewBox="0 0 11 11"
        fill="none"
        aria-hidden
      >
        <path
          d="M9.167 2.75 4.125 7.792 1.833 5.5"
          stroke="#fff"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </span>
  );
}

/**
 * IspPilotOffer — Section 7: Risk reversal.
 *
 * Dark purple gradient background, white text, gold CTA,
 * checkmarked trust signals, subtle scarcity line.
 * The single strongest conversion element on the page.
 */
export function IspPilotOffer() {
  const ref = useReveal<HTMLElement>();
  const { sectionHeading, subheadline, trustSignals, scarcityLine, cta } =
    PILOT_OFFER_DATA;

  return (
    <section
      ref={ref}
      className="relative overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg, #7e10a2 0%, #550a6d 100%)",
      }}
    >
      {/* Depth blobs */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div
          className="absolute -left-32 -top-32 h-[400px] w-[400px] rounded-full blur-3xl"
          style={{
            background:
              "radial-gradient(closest-side, rgba(181,46,209,0.4), transparent 70%)",
          }}
        />
        <div
          className="absolute -bottom-32 -right-32 h-[360px] w-[360px] rounded-full blur-3xl"
          style={{
            background:
              "radial-gradient(closest-side, rgba(126,16,162,0.5), transparent 70%)",
          }}
        />
      </div>
        <div className="relative mx-auto max-w-[780px] px-6 pb-20 pt-16 text-center text-white md:pb-28 md:pt-24">
         {/* ── Main heading ── */}
        <h2 className="reveal font-[var(--font-heading)] text-[clamp(36px,5vw,60px)] font-semibold leading-[1.05] tracking-[-0.03em] text-white">Free 30-day pilot.</h2>
<p className="reveal mt-3 text-[20px] font-semibold leading-[1.4] text-white/70 whitespace-nowrap md:text-[24px]">Full integration. &nbsp; &nbsp;No commitment.</p>
        {/* ── Subheadline ── */}
        <p className="reveal mx-auto mt-5 max-w-[640px] text-[16px] leading-[1.7] text-white/75 md:text-[17px]">
          {subheadline}
        </p>

        {/* ── Trust signals ── */}
        <div className="reveal mt-9 flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
          {trustSignals.map((signal) => (
            <div
              key={signal}
              className="flex items-center gap-2.5 text-[14px] font-medium text-white/85"
            >
              <CheckWhite />
              {signal}
            </div>
          ))}
        </div>

        {/* ── CTA — gold on purple ── */}
        <div className="reveal mt-10">
          <Link
            href={BOOK_DEMO_URL}
            className="inline-flex items-center gap-2 rounded-full px-9 py-5 text-sm font-bold shadow-2xl transition-transform hover:scale-105"
            style={{
              background:
                "linear-gradient(135deg, #F59E0B 0%, #D97706 100%)",
              color: "#1a0a2e",
            }}
          >
            → &nbsp;{cta}
          </Link>
        </div>

        {/* ── Scarcity line ── */}
         <p className="reveal mt-6 text-[13px] tracking-[0.03em] text-white/40">
          {scarcityLine}
        </p>
      </div>
    </section>
  );
}
