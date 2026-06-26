"use client";

import { useEffect, useState } from "react";
import type { LandingPageData } from "@/lib/seo-pages";
import { PAGE_DATA } from "@/lib/proactive-alerts-data";
import { buildFaqSchema } from "@/lib/seo";
import { Pill } from "@/components/ui/Pill";
import { Counter } from "@/components/ui/Counter";
import { JsonLd } from "@/components/seo/JsonLd";

interface ProductProactiveAlertsProps {
  data: LandingPageData;
}

const D = PAGE_DATA;

const IMAGE_MAP: Record<string, string> = {
  ISPs: "/nautix-industries/isps.jpg",
  "Real Estate": "/nautix-industries/real-estate.jpg",
  "E-commerce": "/nautix-industries/ecommerce.jpg",
  "Finance / SACCOs": "/nautix-industries/finance.jpg",
};

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

export function ProductProactiveAlerts({
  data,
}: ProductProactiveAlertsProps) {
  useScrollReveal();

  return (
    <div className="min-h-screen bg-white">
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
                The best message is the one{" "}
                <span className="inline-block bg-[#e2fe5e] px-2 rounded-sm text-[#22303f]">
                  they never had to send.
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

            {/* Right: trust bar + channel badges */}
            <div className="flex flex-col gap-8">
              <div className="flex items-center gap-2">
                <span className="text-sm text-neutral-600">
                  Trusted by{" "}
                  <span className="font-semibold text-[#7C3AED]">leading teams</span>{" "}
                  across industries
                </span>
              </div>
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-xs font-medium text-neutral-500 tracking-wider uppercase">Channels:</span>
                <span className="px-3 py-1 bg-green-50 text-green-700 rounded-full text-xs font-semibold border border-green-200">WhatsApp</span>
                <span className="px-3 py-1 bg-pink-50 text-pink-700 rounded-full text-xs font-semibold border border-pink-200">Instagram</span>
                <span className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-xs font-semibold border border-blue-200">Facebook</span>
              </div>
              <div className="flex flex-wrap items-center gap-3">
                <div className="flex items-center gap-1.5">
                  <span className="text-xs text-neutral-500">via</span>
                  <span className="px-2 py-0.5 bg-purple-50 text-[#7C3AED] rounded text-[10px] font-semibold uppercase tracking-wider">System events</span>
                  <span className="text-xs text-neutral-400">→</span>
                  <span className="px-2 py-0.5 bg-purple-50 text-[#7C3AED] rounded text-[10px] font-semibold uppercase tracking-wider">Personal message</span>
                  <span className="text-xs text-neutral-400">→</span>
                  <span className="px-2 py-0.5 bg-emerald-50 text-emerald-700 rounded text-[10px] font-semibold uppercase tracking-wider">Customer reassured</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================================================================= */}
      {/*  PROBLEM                                                           */}
      {/* ================================================================= */}
      <section className="reveal-section py-14 lg:py-20 bg-red-50/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-[var(--font-heading)] text-3xl md:text-4xl lg:text-5xl font-bold text-center text-[#171717] mb-10">
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
      <section className="reveal-section py-14 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="font-[var(--font-heading)] text-3xl md:text-4xl lg:text-5xl font-bold text-[#171717] mb-0">
              {D.howItWorks.heading}
            </h2>
            <p className="font-[var(--font-sans)] text-lg text-neutral-600 max-w-2xl mx-auto mt-4">
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
      <section className="reveal-section py-14 lg:py-20 bg-white/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-[var(--font-heading)] text-center text-3xl md:text-4xl lg:text-5xl font-bold text-[#171717] mb-10">
            {D.capabilities.heading}
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {D.capabilities.cards.map((c) => (
              <article
                key={c.title}
                className="bg-white border border-neutral-200 rounded-2xl p-6 hover:border-purple-200 hover:shadow-md transition-all duration-300"
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
      <section className="reveal-section py-14 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-[var(--font-heading)] text-3xl md:text-4xl lg:text-5xl font-bold text-[#171717] mb-0">
              {D.industryTable.heading}
            </h2>
            <p className="font-[var(--font-sans)] text-lg text-neutral-600 max-w-2xl mx-auto mt-4">
              {D.industryTable.subhead}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {D.industryTable.rows.map((row) => (
              <article
                key={row.vertical}
                className="group bg-white rounded-2xl shadow-sm border border-neutral-200 hover:shadow-xl hover:border-purple-200 transition-all duration-300 overflow-hidden flex flex-col"
              >
                <div className="relative w-full h-48 overflow-hidden rounded-t-2xl">
                  <img
                    src={IMAGE_MAP[row.vertical]}
                    alt={row.vertical}
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
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
            ))}
          </div>
        </div>
      </section>

      {/* ================================================================= */}
      {/*  OUTCOMES                                                          */}
      {/* ================================================================= */}
      <section className="reveal-section py-14 lg:py-20 bg-emerald-50/30">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-[var(--font-heading)] text-center text-3xl md:text-4xl lg:text-5xl font-bold text-[#171717] mb-10">
            {D.outcomes.heading}
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {D.outcomes.stats.map((stat) => {
              const isFifty = stat.value === "50%";

              return (
                <div key={stat.label} className="text-center">
                  <div className="font-[var(--font-heading)] text-4xl font-bold text-[#7C3AED] mb-2">
                    {isFifty ? (
                      <>
                        <Counter target={50} />
                        %
                      </>
                    ) : (
                      <span>{stat.value}</span>
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
      <section className="reveal-section nautix-final-cta-section">
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
    <section className="reveal-section py-14 lg:py-20 bg-white">
      <JsonLd data={buildFaqSchema([...D.faq.items])} />

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-[var(--font-heading)] text-center text-3xl md:text-4xl lg:text-5xl font-bold text-[#171717] mb-10">
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
                  openIndex === i
                    ? "max-h-[500px] pb-4 opacity-100"
                    : "max-h-0 opacity-0"
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
