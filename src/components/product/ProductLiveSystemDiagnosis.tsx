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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
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
                  className="inline-flex items-center justify-center rounded-full bg-white text-[#7C3AED] border-0 hover:bg-gray-100 px-6 py-2.5 text-sm font-semibold transition-all shadow-md hover:-translate-y-0.5"
                >
                  {D.hero.primaryCta.label}
                </a>
                <a
                  href={D.hero.secondaryCta.href}
                  className="inline-flex items-center justify-center rounded-full bg-[#e2fe5e] text-gray-900 border-0 hover:bg-[#d4f04f] px-6 py-2.5 text-sm font-semibold transition-all shadow-md hover:-translate-y-0.5"
                >
                  {D.hero.secondaryCta.label}
                </a>
              </div>
            </div>
            <DashboardShowcase />
          </div>

          {/* Product demo video */}
          <div className="reveal-section max-w-5xl mx-auto mt-16 md:mt-20">
            <div className="rounded-2xl overflow-hidden border border-neutral-200/60 shadow-2xl shadow-purple-500/10 bg-black">
              <video
                preload="auto"
                autoPlay
                playsInline
                muted
                loop
                poster="/nautix-media/home-hero-0419-poster.jpg"
                src="/nautix-media/home-hero-0419-optimized.mp4"
                className="block w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ================================================================= */}
      {/*  PROBLEM                                                           */}
      {/* ================================================================= */}
      <section className="reveal-section py-20 md:py-28 bg-white/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-[var(--font-heading)] text-3xl md:text-4xl lg:text-5xl font-bold text-center text-[#171717] mb-14">
            A reply that isn&rsquo;t real{" "}
            <span className="inline-block bg-[#e2fe5e] px-2 py-0.5 rounded-md text-gray-900">
              is worse than no reply.
            </span>
          </h2>
          <div className="grid md:grid-cols-3 gap-10">
            {D.problem.painPoints.map((pain, i) => (
              <article
                key={pain.title}
                className="bg-white border border-neutral-200 rounded-2xl p-8 shadow-sm hover:shadow-xl hover:-translate-y-1 hover:border-purple-200 transition-all duration-300"
              >
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-purple-50 text-[#7C3AED] font-bold text-sm mb-5">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="font-[var(--font-heading)] font-bold text-lg text-[#171717] mb-3">
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
      <section className="reveal-section py-20 md:py-28">
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
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-0 max-w-5xl mx-auto">
            {D.howItWorks.steps.map((s, idx) => (
              <div key={s.stepNumber} className="flex items-center w-full md:w-auto">
                <div className="flex flex-col items-center text-center gap-4 bg-white rounded-2xl border border-neutral-200 p-6 w-full md:w-52 shadow-sm hover:shadow-xl hover:-translate-y-1 hover:border-purple-200 transition-all duration-300">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#7C3AED] to-[#EC4899] flex items-center justify-center shadow-lg shadow-purple-500/25">
                    <span className="text-white font-bold text-base">{s.stepNumber}</span>
                  </div>
                  <div>
                    <h3 className="font-[var(--font-heading)] font-bold text-sm text-[#171717] mb-1">{s.title}</h3>
                    <p className="font-[var(--font-sans)] text-xs text-neutral-500 leading-relaxed max-w-[200px]">{s.detail}</p>
                  </div>
                </div>
                {idx < D.howItWorks.steps.length - 1 && (
                  <div className="hidden md:flex items-center justify-center w-12 shrink-0">
                    <svg width="24" height="14" viewBox="0 0 24 14" fill="none" aria-hidden="true">
                      <path d="M1 7h18m0 0l-4-3.5M19 7l-4 3.5" stroke="#7C3AED" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.4" />
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
      <section className="reveal-section py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className="rounded-[32px] px-8 sm:px-12 py-16 md:py-24"
            style={{ background: "linear-gradient(145deg, #7e10a2 0%, #651082 54%, #2b1539 100%)" }}
          >
            <h2 className="font-[var(--font-heading)] text-3xl md:text-4xl lg:text-5xl font-bold text-white text-center">
              Live answers, powered by{" "}
              <span className="inline-block bg-[#e2fe5e] px-2 rounded-sm text-gray-900">your live systems.</span>
            </h2>
            <p className="font-[var(--font-sans)] text-base md:text-lg text-[#cbd5e1] max-w-3xl mx-auto text-center mt-4">
              Nautix bridges the gap between your customer conversations and your actual business systems—billing, inventory, and network. It looks up the real, current answer in real time, so your customers never have to wait for a manual check.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto mt-14">
              {D.capabilities.cards.map((c) => (
                <article
                  key={c.title}
                  className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col gap-4"
                >
                  <div className="w-12 h-12 bg-[#f3e8ff] text-[#7C3AED] rounded-xl flex items-center justify-center font-bold text-lg shrink-0">
                    <span>{c.title[0]}</span>
                  </div>
                  <h3 className="font-[var(--font-heading)] text-xl font-bold text-gray-900">{c.title}</h3>
                  <p className="font-[var(--font-sans)] text-gray-600 text-sm leading-relaxed">{c.body}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ================================================================= */}
      {/*  INDUSTRY TABLE                                                    */}
      {/* ================================================================= */}
      <section className="reveal-section py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="font-[var(--font-heading)] text-3xl md:text-4xl lg:text-5xl font-bold text-[#171717] mb-0">
              Live answers, from{" "}
              <span className="inline-block bg-[#e2fe5e] px-2 py-0.5 rounded-md text-gray-900">whatever systems you run.</span>
            </h2>
            <p className="font-[var(--font-sans)] text-lg text-neutral-600 max-w-2xl mx-auto mt-4">{D.industryTable.subhead}</p>
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
                    <p className="font-[var(--font-sans)] text-[13px] text-neutral-600 leading-relaxed">{row.howTheyUseIt}</p>
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
      <section className="reveal-section py-20 md:py-28 bg-white/50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-[var(--font-heading)] text-3xl md:text-4xl lg:text-5xl font-bold text-center text-[#171717] mb-14">
            What live diagnosis{" "}
            <span className="inline-block bg-[#e2fe5e] px-2 py-0.5 rounded-md text-gray-900">delivers</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              { img: "/images/dashboard-metric-delivery.png.png", label: "Real-time delivery accuracy" },
              { img: "/images/dashboard-metric-response.png.png", label: "Instant response times" },
              { img: "/images/dashboard-metric-automation.png.png", label: "Full automation visibility" },
            ].map((m) => (
              <div
                key={m.label}
                className="bg-white rounded-2xl border border-neutral-200 p-5 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                <img src={m.img} alt={m.label} className="w-full rounded-xl shadow-sm" />
                <p className="text-center text-sm text-neutral-500 mt-3 font-[var(--font-sans)]">{m.label}</p>
              </div>
            ))}
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
    <section className="reveal-section py-20 md:py-28 bg-white">
      <JsonLd data={buildFaqSchema([...D.faq.items])} />
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-[var(--font-heading)] text-3xl md:text-4xl lg:text-5xl font-bold text-center text-[#171717] mb-14">
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
                <p>{item.answer}</p>
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
