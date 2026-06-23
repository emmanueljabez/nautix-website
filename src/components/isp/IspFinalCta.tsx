"use client";

import Link from "next/link";
import { FINAL_CTA_DATA } from "@/lib/isp-data";
import { useReveal } from "@/hooks/useReveal";

const BOOK_DEMO_URL =
  "https://app.nautix.io/book/skVGGbpLujeMxRTL2JgwnzUut4AC3N-X/xU-NHVEi4rMuY9DlQZdvrHqnJkY-YVAp";

/**
 * IspFinalCta — Section 10: Last conversion attempt.
 *
 * Dark background, large heading, two CTAs (purple Book a Demo
 * + WhatsApp button), risk reversal reassurance below.
 */
export function IspFinalCta() {
  const ref = useReveal<HTMLElement>();
  const {
    sectionHeading,
    subheadline,
    primaryCta,
    secondaryCta,
    secondaryCtaNumber,
    riskReversal,
  } = FINAL_CTA_DATA;

  // Strip spaces from phone number for wa.me link
  const waNumber = secondaryCtaNumber.replace(/\s/g, "");

  return (
    <section
      ref={ref}
      className="bg-[#0a0a0a] py-24 md:py-32"
    >
      <div className="mx-auto max-w-[780px] px-6 text-center">
        {/* ── Heading ── */}
        <h2 className="reveal font-[var(--font-heading)] text-[clamp(28px,4vw,48px)] font-semibold leading-[1.08] tracking-[-0.025em] text-white">
          {sectionHeading}
        </h2>

        {/* ── Subheadline ── */}
        <p className="reveal mx-auto mt-5 max-w-[640px] text-[16px] leading-[1.65] text-white/65 md:text-[17px]">
          {subheadline}
        </p>

        {/* ── CTAs ── */}
        <div className="reveal mt-10 flex flex-wrap items-center justify-center gap-4">
          {/* Primary — same as hero button */}
          <Link
            href={BOOK_DEMO_URL}
            className="inline-flex items-center gap-2 rounded-full bg-primary-700 px-7 py-4 text-sm font-bold text-white shadow-md transition-colors hover:bg-primary-800"
          >
            <span>{primaryCta}</span>
            <i
              className="fs-8 unicon-arrow-up-right fw-bold"
              aria-hidden="true"
            />
          </Link>

          {/* Secondary — WhatsApp */}
          <a
            href={`https://wa.me/${waNumber}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-white/15 px-7 py-4 text-sm font-bold text-white/80 transition-colors hover:border-white/35 hover:text-white"
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            <span>{secondaryCta}</span>
            <span className="font-normal opacity-70">
              {secondaryCtaNumber}
            </span>
          </a>
        </div>

        {/* ── Risk reversal ── */}
        <div className="reveal mt-8 space-y-1">
          {riskReversal.map((line) => (
            <p
              key={line}
              className="text-[13px] leading-[1.6] text-white/35"
            >
              {line}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}
