"use client";

import type { LandingPageData } from "@/lib/seo-pages";
import { PAGE_DATA } from "@/lib/live-system-diagnosis-data";
import { Button } from "@/components/ui/Button";
import { Pill } from "@/components/ui/Pill";

interface ProductLiveSystemDiagnosisProps {
  data: LandingPageData;
}

const D = PAGE_DATA;

/* -------------------------------------------------------------------------- */
/*  Hero visual — chat → lookup → system → answer                             */
/* -------------------------------------------------------------------------- */

function HeroVisual() {
  return (
    <div className="relative flex flex-col items-center gap-0 w-full max-w-[480px] mx-auto lg:mx-0">
      {/* Step labels */}
      <div className="flex items-center justify-between w-full text-[11px] font-semibold uppercase tracking-[0.14em] text-neutral-400 mb-2 px-4">
        <span>Customer asks</span>
        <span>Nautix looks up</span>
        <span>Real answer</span>
      </div>

      {/* Visual row */}
      <div className="flex items-center gap-3 w-full">
        {/* Customer bubble */}
        <div className="flex-1 bg-white border border-neutral-200 rounded-2xl rounded-bl-md p-4 shadow-sm">
          <p className="text-[13px] text-neutral-600 leading-snug">
            &ldquo;Did my payment go through?&rdquo;
          </p>
          <div className="flex items-center gap-1.5 mt-2">
            <span className="w-5 h-5 rounded-full bg-neutral-100 flex items-center justify-center text-[10px]">
              ?
            </span>
            <span className="text-[10px] text-neutral-400">11:47 pm</span>
          </div>
        </div>

        {/* Arrow 1 */}
        <svg
          className="shrink-0 text-[#7C3AED]/40"
          width="28"
          height="20"
          viewBox="0 0 28 20"
          fill="none"
          aria-hidden="true"
        >
          <path
            d="M2 10h18m0 0l-5-5m5 5l-5 5"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M16 4l4 6-4 6"
            stroke="currentColor"
            strokeWidth="1.2"
            strokeLinecap="round"
            strokeLinejoin="round"
            opacity="0.5"
          />
        </svg>

        {/* Database / system icon */}
        <div className="shrink-0 flex flex-col items-center gap-1">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#7C3AED] to-[#EC4899] flex items-center justify-center shadow-lg shadow-purple-500/25">
            <svg
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              aria-hidden="true"
            >
              <ellipse cx="12" cy="6" rx="8" ry="3" stroke="#fff" strokeWidth="1.8" />
              <path d="M4 6v6c0 1.7 3.6 3 8 3s8-1.3 8-3V6" stroke="#fff" strokeWidth="1.8" />
              <path d="M4 12v6c0 1.7 3.6 3 8 3s8-1.3 8-3v-6" stroke="#fff" strokeWidth="1.8" opacity="0.6" />
            </svg>
          </div>
          <span className="text-[9px] font-semibold text-neutral-400 uppercase tracking-wider">
            Systems
          </span>
        </div>

        {/* Arrow 2 */}
        <svg
          className="shrink-0 text-[#7C3AED]/40"
          width="28"
          height="20"
          viewBox="0 0 28 20"
          fill="none"
          aria-hidden="true"
        >
          <path
            d="M2 10h18m0 0l-5-5m5 5l-5 5"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M16 4l4 6-4 6"
            stroke="currentColor"
            strokeWidth="1.2"
            strokeLinecap="round"
            strokeLinejoin="round"
            opacity="0.5"
          />
        </svg>

        {/* Answer bubble */}
        <div className="flex-1 bg-gradient-to-br from-[#7C3AED] to-[#EC4899] rounded-2xl rounded-br-md p-4 shadow-lg shadow-purple-500/20">
          <p className="text-[13px] text-white/90 leading-snug">
            &ldquo;Yes — received at 2:14pm. Your account is active.&rdquo;
          </p>
          <div className="flex items-center gap-1.5 mt-2">
            <span className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center">
              <svg
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M2.5 6l2.5 2.5 4.5-5"
                  stroke="#fff"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
            <span className="text-[10px] text-white/60">11:48 pm</span>
          </div>
        </div>
      </div>

      {/* Connecting line underneath */}
      <div className="relative w-full h-0 mt-0">
        <div className="absolute left-[10%] right-[10%] top-0 h-px bg-gradient-to-r from-transparent via-[#7C3AED]/25 to-transparent" />
      </div>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*  Page                                                                      */
/* -------------------------------------------------------------------------- */

export function ProductLiveSystemDiagnosis({
  data,
}: ProductLiveSystemDiagnosisProps) {
  return (
    <div className="min-h-screen bg-[#fdfcfa]">
      {/* ================================================================= */}
      {/*  HERO                                                              */}
      {/* ================================================================= */}
      <section className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left: text */}
            <div className="flex flex-col gap-6">
              <Pill>{D.hero.eyebrow}</Pill>

              <h1 className="font-[var(--font-heading)] font-bold text-4xl md:text-5xl lg:text-6xl tracking-[-0.04em] text-[#091624] leading-[1.05]">
                {D.hero.h1}
              </h1>

              <p className="font-[var(--font-sans)] text-lg text-neutral-600 leading-relaxed max-w-xl">
                {D.hero.subhead}
              </p>

              <div className="flex flex-wrap gap-3 pt-2">
                <a
                  href={D.hero.primaryCta.href}
                  className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-[#7C3AED] to-[#EC4899] hover:from-[#6D28D9] hover:to-[#DB2777] shadow-lg shadow-purple-500/25 text-white px-6 py-2.5 text-sm font-semibold transition-all"
                >
                  {D.hero.primaryCta.label}
                </a>
                <a
                  href={D.hero.secondaryCta.href}
                  className="inline-flex items-center justify-center rounded-full bg-white border border-neutral-200 text-neutral-700 hover:bg-neutral-50 px-6 py-2.5 text-sm font-semibold transition-all"
                >
                  {D.hero.secondaryCta.label}
                </a>
              </div>
            </div>

            {/* Right: visual */}
            <HeroVisual />
          </div>
        </div>
      </section>

      {/* ================================================================= */}
      {/*  PROBLEM                                                           */}
      {/* ================================================================= */}
      <section className="py-20 lg:py-28 bg-white/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-[var(--font-heading)] text-center text-3xl md:text-4xl font-bold tracking-[-0.03em] text-[#171717] mb-14">
            {D.problem.heading}
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {D.problem.painPoints.map((pain, i) => (
              <article
                key={pain.title}
                className="bg-white border border-neutral-200 rounded-xl p-6 shadow-sm hover:shadow-md hover:border-purple-200 transition-all duration-300"
              >
                <span className="inline-flex items-center justify-center w-9 h-9 rounded-lg bg-purple-50 text-[#7C3AED] font-bold text-sm mb-4">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="font-[var(--font-heading)] font-bold text-lg text-[#171717] mb-2">
                  {pain.title}
                </h3>
                <p className="font-[var(--font-sans)] text-sm text-neutral-600 leading-relaxed">
                  {pain.detail}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
