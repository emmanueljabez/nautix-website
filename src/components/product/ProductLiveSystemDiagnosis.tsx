"use client";

import { useEffect, useState } from "react";
import type { LandingPageData } from "@/lib/seo-pages";
import { PAGE_DATA } from "@/lib/live-system-diagnosis-data";
import { buildFaqSchema } from "@/lib/seo";
import { Button } from "@/components/ui/Button";
import { Pill } from "@/components/ui/Pill";
import { Counter } from "@/components/ui/Counter";
import { JsonLd } from "@/components/seo/JsonLd";

interface ProductLiveSystemDiagnosisProps {
  data: LandingPageData;
}

const D = PAGE_DATA;

function useScrollReveal() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -50px 0px" },
    );

    const sections = document.querySelectorAll(".reveal-section");
    sections.forEach((el) => observer.observe(el));

    return () => {
      sections.forEach((el) => observer.unobserve(el));
      observer.disconnect();
    };
  }, []);
}

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
  useScrollReveal();

  return (
    <div className="min-h-screen bg-[#fdfcfa]">
      <style>{`
        .reveal-section {
          opacity: 0;
          transform: translateY(30px);
          transition: all 0.8s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .reveal-section.is-visible {
          opacity: 1;
          transform: translateY(0);
        }

        .reveal-section:nth-child(2) { transition-delay: 0.1s; }
        .reveal-section:nth-child(3) { transition-delay: 0.2s; }
        .reveal-section:nth-child(4) { transition-delay: 0.3s; }
        .reveal-section:nth-child(5) { transition-delay: 0.4s; }
        .reveal-section:nth-child(6) { transition-delay: 0.5s; }
        .reveal-section:nth-child(7) { transition-delay: 0.6s; }
        .reveal-section:nth-child(8) { transition-delay: 0.7s; }
      `}</style>
      {/* ================================================================= */}
      {/*  HERO                                                              */}
      {/* ================================================================= */}
      <section className="reveal-section relative overflow-hidden">
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
      <section className="reveal-section py-20 lg:py-28 bg-white/50">
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

      {/* ================================================================= */}
      {/*  HOW IT WORKS                                                      */}
      {/* ================================================================= */}
      <section className="reveal-section py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="font-[var(--font-heading)] text-3xl md:text-4xl font-bold tracking-[-0.03em] text-[#171717] mb-4">
              {D.howItWorks.heading}
            </h2>
            <p className="font-[var(--font-sans)] text-lg text-neutral-600 max-w-2xl mx-auto">
              {D.howItWorks.subhead}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {D.howItWorks.steps.map((s) => (
              <article key={s.stepNumber} className="relative text-center group">
                <span className="block text-6xl font-bold text-neutral-100 select-none mb-[-0.5em] leading-none">
                  0{s.stepNumber}
                </span>
                <h3 className="font-[var(--font-heading)] font-bold text-lg text-[#171717] mb-2 relative">
                  {s.title}
                </h3>
                <p className="font-[var(--font-sans)] text-sm text-neutral-600 leading-relaxed">
                  {s.detail}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ================================================================= */}
      {/*  CAPABILITIES                                                      */}
      {/* ================================================================= */}
      <section className="reveal-section py-20 lg:py-28 bg-white/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-[var(--font-heading)] text-center text-3xl md:text-4xl font-bold tracking-[-0.03em] text-[#171717] mb-14">
            {D.capabilities.heading}
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {D.capabilities.cards.map((c) => (
              <article
                key={c.title}
                className="bg-[#fdfcfa] border border-neutral-200 rounded-2xl p-6 hover:border-purple-200 hover:shadow-md transition-all duration-300"
              >
                <h3 className="font-[var(--font-heading)] font-bold text-lg text-[#171717] mb-2">
                  {c.title}
                </h3>
                <p className="font-[var(--font-sans)] text-sm text-neutral-600 leading-relaxed">
                  {c.body}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ================================================================= */}
      {/*  INDUSTRY TABLE                                                    */}
      {/* ================================================================= */}
      <section className="reveal-section py-20 lg:py-28">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-[var(--font-heading)] text-3xl md:text-4xl font-bold tracking-[-0.03em] text-[#171717] mb-4">
              {D.industryTable.heading}
            </h2>
            <p className="font-[var(--font-sans)] text-lg text-neutral-600 max-w-2xl mx-auto">
              {D.industryTable.subhead}
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse rounded-2xl overflow-hidden border border-neutral-200">
              <thead>
                <tr className="bg-neutral-50">
                  <th className="font-[var(--font-heading)] font-bold text-sm text-[#7C3AED] uppercase tracking-[0.08em] text-left py-4 px-6 w-[30%]">
                    Industry
                  </th>
                  <th className="font-[var(--font-heading)] font-bold text-sm text-[#7C3AED] uppercase tracking-[0.08em] text-left py-4 px-6">
                    How they use it
                  </th>
                </tr>
              </thead>
              <tbody>
                {D.industryTable.rows.map((row, i) => (
                  <tr
                    key={row.vertical}
                    className={`${
                      i % 2 === 0 ? "bg-white" : "bg-neutral-50/50"
                    } hover:bg-purple-50/30 transition-colors`}
                  >
                    <td className="border-b border-neutral-100 py-4 px-6">
                      <span className="font-[var(--font-heading)] font-bold text-sm text-[#171717]">
                        {row.vertical}
                      </span>
                    </td>
                    <td className="border-b border-neutral-100 py-4 px-6">
                      <p className="font-[var(--font-sans)] text-sm text-neutral-600 leading-relaxed">
                        {row.howTheyUseIt}
                      </p>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ================================================================= */}
      {/*  OUTCOMES                                                          */}
      {/* ================================================================= */}
      <section className="reveal-section py-20 lg:py-28 bg-white/50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-[var(--font-heading)] text-center text-3xl md:text-4xl font-bold tracking-[-0.03em] text-[#171717] mb-14">
            {D.outcomes.heading}
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {D.outcomes.stats.map((stat) => {
              const numeric = parseInt(stat.value, 10);
              const isNumeric = !isNaN(numeric);

              return (
                <div key={stat.label} className="text-center">
                  <div className="font-[var(--font-heading)] text-4xl font-bold text-[#7C3AED] mb-2">
                    {!isNumeric ? (
                      <span>{stat.value}</span>
                    ) : stat.value.endsWith("%") ? (
                      <>
                        <Counter target={numeric} />
                        %
                      </>
                    ) : (
                      <Counter target={numeric} />
                    )}
                  </div>
                  <p className="font-[var(--font-sans)] text-sm text-neutral-600 leading-relaxed max-w-xs mx-auto">
                    {stat.label}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ================================================================= */}
      {/*  FAQ                                                                */}
      {/* ================================================================= */}
      <FaqSection />

      {/* ================================================================= */}
      {/*  FINAL CTA                                                          */}
      {/* ================================================================= */}
      <section className="reveal-section py-20 lg:py-28">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-[#7C3AED] to-[#EC4899] rounded-3xl p-10 md:p-16 text-center shadow-2xl shadow-purple-500/20">
            <h2 className="font-[var(--font-heading)] text-3xl md:text-4xl font-bold tracking-[-0.03em] text-white mb-4">
              {D.finalCta.heading}
            </h2>
            <p className="font-[var(--font-sans)] text-lg text-white/80 max-w-xl mx-auto mb-8 leading-relaxed">
              {D.finalCta.subhead}
            </p>

            <div className="flex flex-wrap gap-3 justify-center mb-6">
              <a
                href={D.finalCta.primaryCta.href}
                className="inline-flex items-center justify-center rounded-full bg-white text-[#7C3AED] hover:bg-neutral-100 px-6 py-2.5 text-sm font-semibold transition-all shadow-md"
              >
                {D.finalCta.primaryCta.label}
              </a>
              <a
                href={D.finalCta.secondaryCta.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full border border-white/30 text-white hover:bg-white/10 px-6 py-2.5 text-sm font-semibold transition-all"
              >
                {D.finalCta.secondaryCta.label}
              </a>
            </div>

            <p className="font-[var(--font-sans)] text-sm text-white/50">
              {D.finalCta.reassurance}
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*  FAQ accordion                                                             */
/* -------------------------------------------------------------------------- */

function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="reveal-section py-20 lg:py-28">
      <JsonLd data={buildFaqSchema([...D.faq.items])} />

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-[var(--font-heading)] text-center text-3xl md:text-4xl font-bold tracking-[-0.03em] text-[#171717] mb-12">
          {D.faq.heading}
        </h2>

        <dl>
          {D.faq.items.map((item, i) => (
            <div
              key={item.question}
              className="border-b border-neutral-200 last:border-b-0"
            >
              <dt>
                <button
                  type="button"
                  onClick={() =>
                    setOpenIndex((prev) => (prev === i ? null : i))
                  }
                  className="w-full cursor-pointer font-[var(--font-heading)] font-bold text-lg text-[#171717] flex justify-between items-center py-4 text-left gap-4 hover:text-[#7C3AED] transition-colors"
                  aria-expanded={openIndex === i}
                >
                  <span>{item.question}</span>
                  <span
                    className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold transition-all duration-300 ${
                      openIndex === i
                        ? "bg-[#7C3AED] text-white rotate-45"
                        : "bg-purple-50 text-[#7C3AED]"
                    }`}
                    aria-hidden="true"
                  >
                    +
                  </span>
                </button>
              </dt>
              <dd
                className={`font-[var(--font-sans)] text-neutral-600 leading-relaxed overflow-hidden transition-all duration-300 ${
                  openIndex === i ? "max-h-[500px] pb-4 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <p>{item.answer}</p>
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
