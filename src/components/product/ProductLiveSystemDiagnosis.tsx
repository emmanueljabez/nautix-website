"use client";

import { useEffect, useState } from "react";
import type { LandingPageData } from "@/lib/seo-pages";
import { PAGE_DATA } from "@/lib/live-system-diagnosis-data";
import { buildFaqSchema } from "@/lib/seo";
import { Button } from "@/components/ui/Button";
import { Pill } from "@/components/ui/Pill";
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
      { rootMargin: "-60px", threshold: 0.08 },
    );

    const sections = document.querySelectorAll<HTMLElement>(".reveal-section");
    sections.forEach((n, i) => {
      n.style.animationDelay = `${i * 80}ms`;
      observer.observe(n);
    });

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
    <div className="relative w-full max-w-[460px] mx-auto lg:mx-0">
      {/* Chat window mockup */}
      <div className="bg-white rounded-2xl border border-neutral-200 shadow-xl overflow-hidden">
        {/* Chat header */}
        <div className="bg-gradient-to-r from-[#7C3AED] to-[#EC4899] px-4 py-3 flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center text-white text-xs font-bold">
            N
          </div>
          <div>
            <p className="text-white text-sm font-semibold leading-tight">Nautix Support</p>
            <p className="text-white/70 text-[11px] leading-tight">Online now</p>
          </div>
        </div>

        {/* Chat body */}
        <div className="p-4 space-y-3 bg-neutral-50/50 min-h-[220px]">
          {/* User message */}
          <div className="flex justify-end">
            <div className="bg-[#7C3AED] text-white rounded-2xl rounded-br-md px-4 py-2.5 max-w-[80%] shadow-sm">
              <p className="text-[13px] leading-snug">Did my payment go through?</p>
              <span className="text-[10px] text-white/60 mt-1 block text-right">11:47 pm</span>
            </div>
          </div>

          {/* Bot "looking up" indicator */}
          <div className="flex justify-start">
            <div className="bg-white border border-neutral-200 rounded-full px-3 py-1.5 flex items-center gap-2 shadow-sm">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#7C3AED] opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-[#7C3AED]" />
              </span>
              <span className="text-[11px] font-semibold text-[#7C3AED] uppercase tracking-wider">
                Data Lookup
              </span>
            </div>
          </div>

          {/* Bot response */}
          <div className="flex justify-start">
            <div className="bg-white border border-neutral-200 rounded-2xl rounded-bl-md px-4 py-2.5 max-w-[85%] shadow-sm">
              <p className="text-[13px] text-neutral-700 leading-snug">
                Yes — received at <span className="font-semibold text-[#7C3AED]">2:14pm</span>. Your account is active.
              </p>
              <div className="flex items-center gap-1.5 mt-2">
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                  <path d="M2.5 6l2.5 2.5 4.5-5" stroke="#7C3AED" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span className="text-[10px] text-neutral-400">11:48 pm</span>
              </div>
            </div>
          </div>
        </div>

        {/* Chat input bar */}
        <div className="px-4 py-3 border-t border-neutral-100 bg-white flex items-center gap-2">
          <span className="text-neutral-300 text-sm">Type a message...</span>
          <div className="ml-auto w-7 h-7 rounded-full bg-gradient-to-r from-[#7C3AED] to-[#EC4899] flex items-center justify-center">
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
              <path d="M2 6h6m0 0L5.5 3.5M8 6l-2.5 2.5" stroke="#fff" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
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
        @keyframes reveal-fade-up {
          from { opacity: 0; transform: translateY(18px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        .reveal-section {
          opacity: 0;
        }
        .reveal-section.is-visible {
          animation: reveal-fade-up 0.75s cubic-bezier(.22,.61,.36,1) forwards;
        }
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
                Real answers, pulled from{" "}
                <span className="inline-block bg-[#e2fe5e] px-2 py-0.5 rounded-sm text-[#22303f]">
                  your real systems.
                </span>
              </h1>

              <p className="font-[var(--font-sans)] text-lg text-neutral-600 leading-relaxed max-w-xl">
                {D.hero.subhead}
              </p>

              <div className="flex flex-wrap gap-3 pt-2">
                <a
                  href={D.hero.primaryCta.href}
                  className="inline-flex items-center justify-center rounded-full bg-white text-[#7C3AED] border-0 hover:bg-gray-100 px-6 py-2.5 text-sm font-semibold transition-all shadow-md"
                >
                  {D.hero.primaryCta.label}
                </a>
                <a
                  href={D.hero.secondaryCta.href}
                  className="inline-flex items-center justify-center rounded-full bg-[#e2fe5e] text-gray-900 border-0 hover:bg-[#d4f04f] px-6 py-2.5 text-sm font-semibold transition-all shadow-md"
                >
                  {D.hero.secondaryCta.label}
                </a>
              </div>
            </div>

            {/* Right: visual */}
            <HeroVisual />
          </div>

          {/* Dashboard screenshot — full width below */}
          <div className="max-w-5xl mx-auto mt-16">
            <img
              src="/images/dashboard-full.png.png"
              alt="Nautix dashboard showing total messages and live delivery rates"
              className="w-full rounded-xl shadow-2xl border border-gray-200"
            />
          </div>
        </div>
      </section>

      {/* ================================================================= */}
      {/*  PROBLEM                                                           */}
      {/* ================================================================= */}
      <section className="reveal-section py-20 lg:py-28 bg-white/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-[var(--font-heading)] text-3xl md:text-4xl lg:text-5xl font-bold text-center text-[#171717] mb-14">
            A reply that isn&rsquo;t real{" "}
            <span className="inline-block bg-[#e2fe5e] px-2 py-0.5 rounded-md text-gray-900">
              is worse than no reply.
            </span>
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
            <h2 className="font-[var(--font-heading)] text-3xl md:text-4xl lg:text-5xl font-bold text-[#171717] mb-0">
              It checks.{" "}
              <span className="inline-block bg-[#e2fe5e] px-2 py-0.5 rounded-md text-gray-900">
                It doesn&rsquo;t guess.
              </span>
            </h2>
            <p className="font-[var(--font-sans)] text-lg text-neutral-600 max-w-2xl mx-auto mt-4">
              {D.howItWorks.subhead}
            </p>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-0 max-w-4xl mx-auto">
            {D.howItWorks.steps.map((s, idx) => (
              <div key={s.stepNumber} className="flex items-center w-full md:w-auto">
                {/* Step card */}
                <div className="flex flex-col items-center text-center gap-3 bg-white rounded-2xl border border-neutral-200 p-5 w-full md:w-48 shadow-sm hover:shadow-md hover:border-purple-200 transition-all duration-300">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#7C3AED] to-[#EC4899] flex items-center justify-center shadow-md shadow-purple-500/20">
                    <span className="text-white font-bold text-sm">
                      {s.stepNumber}
                    </span>
                  </div>
                  <div>
                    <h3 className="font-[var(--font-heading)] font-bold text-sm text-[#171717] mb-1">
                      {s.title}
                    </h3>
                    <p className="font-[var(--font-sans)] text-xs text-neutral-500 leading-relaxed max-w-[180px]">
                      {s.detail}
                    </p>
                  </div>
                </div>

                {/* Connecting arrow (hidden on last item + mobile) */}
                {idx < D.howItWorks.steps.length - 1 && (
                  <div className="hidden md:flex items-center justify-center w-10 shrink-0">
                    <svg width="20" height="14" viewBox="0 0 20 14" fill="none" aria-hidden="true">
                      <path d="M1 7h14m0 0L11.5 3.5M15 7l-3.5 3.5" stroke="#7C3AED" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.5" />
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================================================================= */}
      {/*  CAPABILITIES                                                      */}
      {/* ================================================================= */}
      <section className="reveal-section py-20 lg:py-28 bg-white/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-[var(--font-heading)] text-3xl md:text-4xl lg:text-5xl font-bold text-center text-[#171717] mb-8">
            What live diagnosis{" "}
            <span className="inline-block bg-[#e2fe5e] px-2 py-0.5 rounded-md text-gray-900">
              does
            </span>
          </h2>

          {/* Dashboard screenshot */}
          <div className="max-w-5xl mx-auto mb-10">
            <img
              src="/images/dashboard-diagnosis.png"
              alt="Nautix full dashboard overview"
              className="w-full rounded-xl shadow-lg border border-gray-200"
            />
          </div>

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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-[var(--font-heading)] text-3xl md:text-4xl lg:text-5xl font-bold text-[#171717] mb-0">
              Live answers, from{" "}
              <span className="inline-block bg-[#e2fe5e] px-2 py-0.5 rounded-md text-gray-900">
                whatever systems you run.
              </span>
            </h2>
            <p className="font-[var(--font-sans)] text-lg text-neutral-600 max-w-2xl mx-auto mt-4">
              {D.industryTable.subhead}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {D.industryTable.rows.map((row) => {
              const imageMap: Record<string, string> = {
                ISPs: "/images/isps.jpg",
                "Real Estate": "/images/real-estate.jpg",
                "E-commerce": "/images/ecommerce2.avif",
                "Finance / SACCOs": "/images/finance.png",
              };

              return (
                <article
                  key={row.vertical}
                  className="group bg-white rounded-2xl shadow-sm border border-neutral-200 hover:shadow-xl hover:border-purple-200 transition-all duration-300 overflow-hidden flex flex-col"
                >
                  {/* Image block with gradient overlay */}
                  <div className="relative w-full h-48 overflow-hidden rounded-t-2xl">
                    <img
                      src={imageMap[row.vertical]}
                      alt={row.vertical}
                      className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>

                  {/* Content block */}
                  <div className="p-5 flex flex-col gap-2 flex-1">
                    <span className="self-start inline-block bg-[#f3e8ff] text-[#7C3AED] px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider">
                      {row.vertical}
                    </span>
                    <h3 className="font-[var(--font-heading)] font-bold text-base text-[#171717] leading-tight">
                      {row.vertical}
                    </h3>
                    <p className="font-[var(--font-sans)] text-[13px] text-neutral-600 leading-relaxed">
                      {row.howTheyUseIt}
                    </p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* ================================================================= */}
      {/*  OUTCOMES                                                          */}
      {/* ================================================================= */}
      <section className="reveal-section py-20 lg:py-28 bg-white/50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-[var(--font-heading)] text-3xl md:text-4xl lg:text-5xl font-bold text-center text-[#171717] mb-10">
            What live diagnosis{" "}
            <span className="inline-block bg-[#e2fe5e] px-2 py-0.5 rounded-md text-gray-900">
              delivers
            </span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            <div className="bg-white rounded-xl border border-gray-200 p-4 shadow-sm">
              <img
                src="/images/dashboard-metric-delivery.png.png"
                alt="Real-time delivery accuracy dashboard metric"
                className="w-full rounded-lg"
              />
              <p className="text-center text-sm text-gray-500 mt-2 font-[var(--font-sans)]">
                Real-time delivery accuracy
              </p>
            </div>
            <div className="bg-white rounded-xl border border-gray-200 p-4 shadow-sm">
              <img
                src="/images/dashboard-metric-response.png.png"
                alt="Instant response times dashboard metric"
                className="w-full rounded-lg"
              />
              <p className="text-center text-sm text-gray-500 mt-2 font-[var(--font-sans)]">
                Instant response times
              </p>
            </div>
            <div className="bg-white rounded-xl border border-gray-200 p-4 shadow-sm">
              <img
                src="/images/dashboard-metric-automation.png.png"
                alt="Full automation visibility dashboard metric"
                className="w-full rounded-lg"
              />
              <p className="text-center text-sm text-gray-500 mt-2 font-[var(--font-sans)]">
                Full automation visibility
              </p>
            </div>
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
      <section className="reveal-section nautix-final-cta-section bg-[#fdfcfa]">
        <div
          className="nautix-final-cta-shell"
          style={{
            background:
              "linear-gradient(145deg, #7e10a2 0%, #651082 54%, #2b1539 100%)",
            boxShadow: "0 32px 70px rgba(65, 16, 95, 0.22)",
          }}
        >
          <img
            className="nautix-final-cta-decor nautix-final-cta-decor--left"
            src="/wp-content/uploads/2025/05/green-stars.svg"
            width={55}
            height={50}
            loading="lazy"
            alt=""
            aria-hidden="true"
          />
          <img
            className="nautix-final-cta-decor nautix-final-cta-decor--right"
            src="/wp-content/uploads/2025/05/green-star.svg"
            width={19}
            height={30}
            loading="lazy"
            alt=""
            aria-hidden="true"
          />
          <div
            className="nautix-final-cta-content"
            style={{
              background:
                "linear-gradient(145deg, #7e10a2 0%, #651082 54%, #2b1539 100%)",
              borderRadius: "inherit",
            }}
          >
            <h2 className="nautix-final-cta-title mb-0">
              {D.finalCta.heading}
            </h2>
            <p className="nautix-final-cta-copy mb-0">
              {D.finalCta.subhead}
            </p>
            <div className="nautix-final-cta-actions">
              <a
                className="nautix-final-cta-button nautix-final-cta-button--primary"
                href={D.finalCta.primaryCta.href}
              >
                {D.finalCta.primaryCta.label}
              </a>
              <a
                className="nautix-final-cta-button nautix-final-cta-button--secondary"
                href={D.finalCta.secondaryCta.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                {D.finalCta.secondaryCta.label}
              </a>
            </div>
            <p className="nautix-final-cta-note mb-0">
              14-day pilot - If Nautix does not work the way we showed you, you do not pay for that period.
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
    <section className="reveal-section py-20 lg:py-28 bg-[#fdfcfa]">
      <JsonLd data={buildFaqSchema([...D.faq.items])} />

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-[var(--font-heading)] text-3xl md:text-4xl lg:text-5xl font-bold text-center text-[#171717] mb-10">
          Common{" "}
          <span className="inline-block bg-[#e2fe5e] px-2 py-0.5 rounded-md text-gray-900">
            questions
          </span>
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
