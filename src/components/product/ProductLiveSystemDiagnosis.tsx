"use client";

import { useEffect, useState } from "react";
import type { LandingPageData } from "@/lib/seo-pages";
import { PAGE_DATA } from "@/lib/live-system-diagnosis-data";
import { buildFaqSchema } from "@/lib/seo";
import { Pill } from "@/components/ui/Pill";
import { JsonLd } from "@/components/seo/JsonLd";
import { DashboardShowcase } from "@/components/product/DashboardShowcase";

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
        .reveal-section { opacity: 0; }
        .reveal-section.is-visible { animation: reveal-fade-up 0.75s cubic-bezier(.22,.61,.36,1) forwards; }
      `}</style>

      {/* ================================================================= */}
      {/*  HERO                                                              */}
      {/* ================================================================= */}
      <section className="reveal-section relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 md:pt-28 pb-12 md:pb-16">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-stretch min-h-[450px] lg:min-h-[500px]">
            <div className="flex flex-col gap-6">
              <Pill>{D.hero.eyebrow}</Pill>
              <h1 className="font-[var(--font-heading)] font-bold text-6xl md:text-8xl lg:text-[6rem] tracking-[-0.04em] text-[#091624] leading-[1.05]">
                Real answers, pulled from{" "}
                <span className="inline-block bg-[#e2fe5e] px-2 py-0.5 rounded-sm text-[#22303f]">
                  your real systems.
                </span>
              </h1>
              <p className="font-medium text-[#1a1a1a] text-lg max-w-2xl">
                {D.hero.subhead}
              </p>
              <div className="flex flex-wrap gap-3 pt-2">
                <a
                  className="nautix-hero-primary text-none"
                  href={D.hero.primaryCta.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {D.hero.primaryCta.label}
                </a>
                <a
                  className="nautix-hero-secondary text-none"
                  href={D.hero.secondaryCta.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {D.hero.secondaryCta.label}
                </a>
              </div>
            </div>
            <div className="flex flex-col justify-end h-full w-full">
              <DashboardShowcase />
            </div>
          </div>
        </div>
      </section>

      {/* ================================================================= */}
      {/*  WHY NAUTIX                                                        */}
      {/* ================================================================= */}
      <section className="reveal-section pt-4 md:pt-6 pb-8 md:pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="flex flex-col gap-6">
              <h2 className="font-[var(--font-heading)] text-6xl md:text-8xl lg:text-[6rem] font-bold text-[#171717] leading-tight">
                A reply that isn&rsquo;t real{" "}
                <span className="inline-block bg-[#e2fe5e] px-2 py-0.5 rounded-md text-gray-900">
                  is worse than no reply.
                </span>
              </h2>
              <div className="flex flex-col gap-2.5 mt-4">
                {D.problem.painPoints.map((pain) => (
                  <div key={pain.title} className="flex gap-3">
                    <span className="mt-0.5 shrink-0 inline-flex items-center justify-center w-5 h-5 rounded-full bg-purple-100 text-[#7C3AED]">
                      <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                        <path d="M2.5 6L5 8.5L9.5 3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </span>
                    <div>
                      <h3 className="font-[var(--font-heading)] font-bold text-base text-[#171717] mb-1">
                        {pain.title}
                      </h3>
                      <p className="font-[var(--font-sans)] text-base text-neutral-600 leading-relaxed font-medium">
                        {pain.detail}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex items-center justify-center">
              <img
                src="/images/dashh.png"
                alt="Live System Diagnosis dashboard"
                className="w-full h-auto max-h-[550px] object-contain rounded-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="border-t border-neutral-300" />
      </div>

      {/* ================================================================= */}
      {/*  HOW IT WORKS                                                      */}
      {/* ================================================================= */}
      <section className="reveal-section py-8 md:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="flex flex-col gap-6">
              <h2 className="font-[var(--font-heading)] text-6xl md:text-8xl lg:text-[6rem] font-bold text-[#171717] leading-tight">
                It checks.{" "}
                <span className="inline-block bg-[#e2fe5e] px-2 py-0.5 rounded-md text-gray-900">
                  It doesn&rsquo;t guess.
                </span>
              </h2>
              <p className="font-[var(--font-sans)] text-base text-neutral-600 font-medium">
                {D.howItWorks.subhead}
              </p>
              <div className="flex flex-col gap-2.5 mt-4">
                {D.howItWorks.steps.map((s) => (
                  <div key={s.stepNumber} className="flex gap-3">
                    <span className="mt-0.5 shrink-0 inline-flex items-center justify-center w-5 h-5 rounded-full bg-purple-100 text-[#7C3AED]">
                      <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                        <path d="M2.5 6L5 8.5L9.5 3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </span>
                    <div>
                      <h3 className="font-[var(--font-heading)] font-bold text-base text-[#171717] mb-1">
                        {s.title}
                      </h3>
                      <p className="font-[var(--font-sans)] text-base text-neutral-600 leading-relaxed font-medium">
                        {s.detail}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex items-center justify-center">
              <img
                src="/images/section.png"
                alt="How it works"
                className="w-full h-auto max-h-[550px] object-contain rounded-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="border-t border-neutral-300" />
      </div>

      {/* ================================================================= */}
      {/*  CAPABILITIES                                                      */}
      {/* ================================================================= */}
      <section className="reveal-section py-8 md:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="flex flex-col gap-6">
              <h2 className="font-[var(--font-heading)] text-6xl md:text-8xl lg:text-[6rem] font-bold text-[#171717] leading-tight">
                Live answers, powered by{" "}
                <span className="inline-block bg-[#e2fe5e] px-2 rounded-sm text-gray-900">your live systems.</span>
              </h2>
              <p className="font-[var(--font-sans)] text-base text-neutral-600 font-medium">
                Nautix bridges the gap between your customer conversations and your actual business systems—billing, inventory, and network. It looks up the real, current answer in real time, so your customers never have to wait for a manual check.
              </p>
              <div className="flex flex-col gap-2.5 mt-4">
                {D.capabilities.cards.map((c) => (
                  <div key={c.title} className="flex gap-3">
                    <span className="mt-0.5 shrink-0 inline-flex items-center justify-center w-5 h-5 rounded-full bg-purple-100 text-[#7C3AED]">
                      <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                        <path d="M2.5 6L5 8.5L9.5 3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </span>
                    <div>
                      <h3 className="font-[var(--font-heading)] font-bold text-base text-[#171717] mb-1">
                        {c.title}
                      </h3>
                      <p className="font-[var(--font-sans)] text-base text-neutral-600 leading-relaxed font-medium">
                        {c.body}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex flex-col items-center justify-center gap-6">
              <img
                src="/images/crm.png"
                alt="Live System Diagnosis CRM"
                className="w-full h-auto object-contain rounded-2xl"
              />
              <img
                src="/images/crmm.png"
                alt="Live System Diagnosis CRM detail"
                className="w-full h-auto object-contain rounded-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="border-t border-neutral-300" />
      </div>

      {/* ================================================================= */}
      {/*  INDUSTRY TABLE                                                    */}
      {/* ================================================================= */}
      <section className="reveal-section py-8 md:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="font-[var(--font-heading)] text-6xl md:text-8xl lg:text-[6rem] font-bold text-[#171717] mb-0">
              Live answers, from{" "}
              <span className="inline-block bg-[#e2fe5e] px-2 py-0.5 rounded-md text-gray-900">whatever systems you run.</span>
            </h2>
             <p className="font-[var(--font-sans)] text-lg text-neutral-600 max-w-2xl mx-auto mt-4 font-medium">{D.industryTable.subhead}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
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
                  className="group bg-white rounded-2xl shadow-sm border border-neutral-200 hover:shadow-xl hover:-translate-y-1 hover:border-purple-200 transition-all duration-300 overflow-hidden flex flex-col"
                >
                  <div className="relative w-full h-48 overflow-hidden">
                    <img
                      src={imageMap[row.vertical]}
                      alt={row.vertical}
                      className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  <div className="p-5 flex flex-col gap-2 flex-1">
                    <span className="self-start inline-block bg-[#f3e8ff] text-[#7C3AED] px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider">{row.vertical}</span>
                    <h3 className="font-[var(--font-heading)] font-bold text-base text-[#171717] leading-tight">{row.vertical}</h3>
                     <p className="font-[var(--font-sans)] text-[13px] text-neutral-600 leading-relaxed font-medium">{row.howTheyUseIt}</p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="border-t border-neutral-300" />
      </div>

      {/* ================================================================= */}
      {/*  OUTCOMES                                                          */}
      {/* ================================================================= */}
      <section className="reveal-section py-8 md:py-12 bg-white/50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-[var(--font-heading)] text-6xl md:text-8xl lg:text-[6rem] font-bold text-center text-[#171717] mb-14">
            What live diagnosis{" "}
            <span className="inline-block bg-[#e2fe5e] px-2 py-0.5 rounded-md text-gray-900">delivers</span>
          </h2>
          <div className="overflow-hidden rounded-2xl shadow-2xl shadow-purple-500/10">
            <video
              preload="auto"
              autoPlay
              playsInline
              muted
              loop
              src="/videos/recordd.mp4"
              className="block w-full -mt-[8%] -mb-[8%]"
            />
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
          style={{ background: "linear-gradient(145deg, #7e10a2 0%, #651082 54%, #2b1539 100%)", boxShadow: "0 32px 70px rgba(65, 16, 95, 0.22)" }}
        >
          <img className="nautix-final-cta-decor nautix-final-cta-decor--left" src="/wp-content/uploads/2025/05/green-stars.svg" width={55} height={50} loading="lazy" alt="" aria-hidden="true" />
          <img className="nautix-final-cta-decor nautix-final-cta-decor--right" src="/wp-content/uploads/2025/05/green-star.svg" width={19} height={30} loading="lazy" alt="" aria-hidden="true" />
          <div className="nautix-final-cta-content" style={{ background: "linear-gradient(145deg, #7e10a2 0%, #651082 54%, #2b1539 100%)", borderRadius: "inherit" }}>
            <h2 className="nautix-final-cta-title mb-0">{D.finalCta.heading}</h2>
            <p className="nautix-final-cta-copy mb-0">{D.finalCta.subhead}</p>
            <div className="nautix-final-cta-actions">
              <a className="nautix-final-cta-button nautix-final-cta-button--primary" href={D.finalCta.primaryCta.href}>{D.finalCta.primaryCta.label}</a>
              <a className="nautix-final-cta-button nautix-final-cta-button--secondary" href={D.finalCta.secondaryCta.href} target="_blank" rel="noopener noreferrer">{D.finalCta.secondaryCta.label}</a>
            </div>
            <p className="nautix-final-cta-note mb-0">14-day pilot - If Nautix does not work the way we showed you, you do not pay for that period.</p>
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
    <section className="reveal-section py-8 md:py-12 bg-white">
      <JsonLd data={buildFaqSchema([...D.faq.items])} />
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-[var(--font-heading)] text-6xl md:text-8xl lg:text-[6rem] font-bold text-center text-[#171717] mb-14">
          Common{" "}
          <span className="inline-block bg-[#e2fe5e] px-2 py-0.5 rounded-md text-gray-900">questions</span>
        </h2>
        <dl>
          {D.faq.items.map((item, i) => (
            <div key={item.question} className="border-b border-neutral-200 last:border-b-0">
              <dt>
                <button
                  type="button"
                  onClick={() => setOpenIndex((prev) => (prev === i ? null : i))}
                  className="w-full cursor-pointer font-[var(--font-heading)] font-bold text-lg text-[#171717] flex justify-between items-center py-5 text-left gap-4 hover:text-[#7C3AED] transition-colors"
                  aria-expanded={openIndex === i}
                >
                  <span>{item.question}</span>
                  <span className={`shrink-0 w-9 h-9 rounded-full flex items-center justify-center text-sm font-semibold transition-all duration-300 ${openIndex === i ? "bg-[#7C3AED] text-white rotate-45" : "bg-purple-50 text-[#7C3AED]"}`} aria-hidden="true">+</span>
                </button>
              </dt>
              <dd className={`font-[var(--font-sans)] text-neutral-600 leading-relaxed overflow-hidden transition-all duration-300 ${openIndex === i ? "max-h-[500px] pb-5 opacity-100" : "max-h-0 opacity-0"}`}>
                 <p className="font-medium">{item.answer}</p>
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
