"use client";

import { useEffect, useState } from "react";
import type { LandingPageData } from "@/lib/seo-pages";
import { PAGE_DATA } from "@/lib/proactive-alerts-data";
import { buildFaqSchema } from "@/lib/seo";
import { Pill } from "@/components/ui/Pill";
import { Counter } from "@/components/ui/Counter";
import { JsonLd } from "@/components/seo/JsonLd";
import {
  Bell,
  Users,
  Send,
  MessageCircle,
  Activity,
  Crosshair,
  UserCheck,
  RefreshCw,
  Clock,
  BarChart3,
  ChevronDown,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface ProductProactiveAlertsProps {
  data: LandingPageData;
}

const D = PAGE_DATA;
const STEP_ICONS: LucideIcon[] = [Bell, Users, Send, MessageCircle];
const CAP_ICONS: LucideIcon[] = [
  Activity,
  Crosshair,
  UserCheck,
  RefreshCw,
  Clock,
  BarChart3,
];

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
    const sections = document.querySelectorAll<HTMLElement>(
      ".reveal-section, .reveal-card",
    );
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
        @keyframes pulse-ring {
          0%, 100% { box-shadow: 0 0 0 0 rgba(124, 58, 237, 0.4); }
          50%      { box-shadow: 0 0 0 12px rgba(124, 58, 237, 0); }
        }
        @keyframes float-slow {
          0%, 100% { transform: translateY(0); }
          50%      { transform: translateY(-8px); }
        }
        .reveal-section, .reveal-card { opacity: 0; }
        .reveal-section.is-visible, .reveal-card.is-visible {
          animation: reveal-fade-up 0.75s cubic-bezier(.22,.61,.36,1) forwards;
        }
        .hero-pulse {
          animation: pulse-ring 3s cubic-bezier(.4,0,.6,1) infinite;
        }
        .hero-float {
          animation: float-slow 6s ease-in-out infinite;
        }
      `}</style>

      {/* =============================================================== */}
      {/*  HERO — Dark gradient + lime highlight                          */}
      {/* =============================================================== */}
      <section className="reveal-section relative overflow-hidden bg-gradient-to-br from-[#2b1539] via-[#4c1d95] to-[#651082]">
        {/* Background ambient shapes */}
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          <div className="absolute top-20 left-[10%] w-64 h-64 rounded-full bg-white/5 blur-3xl" />
          <div className="absolute bottom-10 right-[5%] w-96 h-96 rounded-full bg-purple-500/10 blur-3xl" />
          <div className="absolute top-[40%] right-[30%] w-48 h-48 rounded-full bg-pink-500/10 blur-3xl" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left: text */}
            <div className="flex flex-col gap-6">
              <Pill tone="dark">{D.hero.eyebrow}</Pill>

              <h1 className="font-[var(--font-heading)] font-bold text-4xl md:text-5xl lg:text-6xl tracking-[-0.04em] text-white leading-[1.05]">
                The best message is the one{" "}
                <span className="inline-block bg-[#e2fe5e] px-2 py-0.5 rounded-sm text-[#22303f]">
                  they never had to send.
                </span>
              </h1>

              <p className="font-[var(--font-sans)] text-lg text-white/70 leading-relaxed max-w-xl">
                {D.hero.subhead}
              </p>

              <div className="flex flex-wrap gap-3 pt-2">
                <a
                  href={D.hero.primaryCta.href}
                  className="inline-flex items-center justify-center rounded-full bg-white text-[#7C3AED] border-0 hover:bg-gray-100 px-6 py-2.5 text-sm font-semibold transition-all shadow-lg shadow-purple-500/25 hover:-translate-y-0.5"
                >
                  {D.hero.primaryCta.label}
                </a>
                <a
                  href={D.hero.secondaryCta.href}
                  className="inline-flex items-center justify-center rounded-full bg-[#e2fe5e] text-gray-900 border-0 hover:bg-[#d4f04f] px-6 py-2.5 text-sm font-semibold transition-all shadow-lg shadow-yellow-300/20 hover:-translate-y-0.5"
                >
                  {D.hero.secondaryCta.label}
                </a>
              </div>
            </div>

            {/* Right: alert pulse visual */}
            <div className="flex items-center justify-center">
              <div className="relative">
                <div className="hero-pulse w-32 h-32 rounded-full bg-gradient-to-br from-[#7C3AED] to-[#EC4899] flex items-center justify-center shadow-2xl shadow-purple-500/30">
                  <Bell size={48} strokeWidth={1.5} className="text-white" />
                </div>
                {/* Orbiting dots */}
                <div className="hero-float absolute -top-3 -right-3 w-4 h-4 rounded-full bg-[#e2fe5e]" />
                <div
                  className="hero-float absolute -bottom-2 -left-2 w-3 h-3 rounded-full bg-pink-400"
                  style={{ animationDelay: "-2s" }}
                />
                <div
                  className="hero-float absolute top-1/2 -right-6 w-2 h-2 rounded-full bg-purple-300"
                  style={{ animationDelay: "-4s" }}
                />
              </div>
            </div>
          </div>

          {/* Trust strip */}
          <div className="mt-16 flex flex-wrap items-center justify-center gap-6 text-white/50 text-sm">
            <span>Channels:</span>
            <span className="px-3 py-1 bg-white/10 rounded-full text-xs font-semibold border border-white/10">
              WhatsApp
            </span>
            <span className="px-3 py-1 bg-white/10 rounded-full text-xs font-semibold border border-white/10">
              Instagram
            </span>
            <span className="px-3 py-1 bg-white/10 rounded-full text-xs font-semibold border border-white/10">
              Facebook
            </span>
          </div>
        </div>
      </section>

      {/* =============================================================== */}
      {/*  PROBLEM — 3 cards with subtle orange accents                    */}
      {/* =============================================================== */}
      <section className="reveal-section py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-[var(--font-heading)] text-3xl md:text-4xl lg:text-5xl font-bold text-center text-[#171717] mb-14">
            {D.problem.heading}
          </h2>
          <div className="grid md:grid-cols-3 gap-10">
            {D.problem.painPoints.map((pain, i) => (
              <article
                key={pain.title}
                className="reveal-card group bg-white border border-orange-100 rounded-2xl p-8 shadow-sm translate-y-0 hover:shadow-xl hover:-translate-y-1 hover:border-orange-200 transition-all duration-300"
              >
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-orange-50 text-orange-600 font-bold text-sm mb-5">
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

      {/* =============================================================== */}
      {/*  HOW IT WORKS — 4-step timeline with connecting lines            */}
      {/* =============================================================== */}
      <section className="reveal-section py-20 md:py-28 bg-purple-50/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-[var(--font-heading)] text-3xl md:text-4xl lg:text-5xl font-bold text-[#171717] mb-4">
              {D.howItWorks.heading}
            </h2>
            <p className="font-[var(--font-sans)] text-lg text-neutral-600 max-w-2xl mx-auto">
              {D.howItWorks.subhead}
            </p>
          </div>

          <div className="relative max-w-5xl mx-auto">
            {/* Connecting line */}
            <div className="hidden lg:block absolute top-12 left-[12.5%] right-[12.5%] h-0.5 bg-gradient-to-r from-[#7C3AED] via-[#b52ed1] to-[#EC4899]" />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0">
              {D.howItWorks.steps.map((s, idx) => {
                const Icon = STEP_ICONS[idx];
                return (
                  <div
                    key={s.stepNumber}
                    className="reveal-card flex flex-col items-center text-center gap-4 relative"
                  >
                    <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#7C3AED] to-[#EC4899] flex items-center justify-center shadow-lg shadow-purple-500/25 z-10 ring-4 ring-purple-50/30">
                      <Icon size={22} strokeWidth={2} className="text-white" />
                    </div>
                    <div className="px-2">
                      <h3 className="font-[var(--font-heading)] font-bold text-sm text-[#171717] mb-1">
                        {s.title}
                      </h3>
                      <p className="font-[var(--font-sans)] text-xs text-neutral-500 leading-relaxed max-w-[180px]">
                        {s.detail}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* =============================================================== */}
      {/*  CAPABILITIES — 6 cards in 3×2 grid, tinted backgrounds          */}
      {/* =============================================================== */}
      <section className="reveal-section py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-[var(--font-heading)] text-3xl md:text-4xl lg:text-5xl font-bold text-center text-[#171717] mb-14">
            {D.capabilities.heading}
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {D.capabilities.cards.map((c, idx) => {
              const Icon = CAP_ICONS[idx];
              return (
                <article
                  key={c.title}
                  className="reveal-card group bg-purple-50/40 border border-purple-100 rounded-2xl p-8 hover:border-purple-300 translate-y-0 hover:shadow-xl hover:-translate-y-1 hover:bg-purple-50/60 transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center mb-5 shadow-sm group-hover:shadow-md group-hover:scale-110 transition-all duration-300">
                    <Icon
                      size={22}
                      strokeWidth={1.8}
                      className="text-[#7C3AED]"
                    />
                  </div>
                  <h3 className="font-[var(--font-heading)] font-bold text-lg text-[#171717] mb-2">
                    {c.title}
                  </h3>
                  <p className="font-[var(--font-sans)] text-sm text-neutral-600 leading-relaxed">
                    {c.body}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* =============================================================== */}
      {/*  INDUSTRY — 4 cards with images                                  */}
      {/* =============================================================== */}
      <section className="reveal-section py-20 md:py-28 bg-purple-50/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="font-[var(--font-heading)] text-3xl md:text-4xl lg:text-5xl font-bold text-[#171717] mb-4">
              {D.industryTable.heading}
            </h2>
            <p className="font-[var(--font-sans)] text-lg text-neutral-600 max-w-2xl mx-auto">
              {D.industryTable.subhead}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {D.industryTable.rows.map((row) => (
              <article
                key={row.vertical}
                className="reveal-card group bg-white rounded-2xl shadow-sm border border-neutral-200 overflow-hidden flex flex-col translate-y-0 hover:shadow-xl hover:-translate-y-1 hover:border-purple-200 transition-all duration-300"
              >
                <div className="relative w-full h-48 overflow-hidden">
                  <img
                    src={IMAGE_MAP[row.vertical]}
                    alt={row.vertical}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="p-5 flex flex-col gap-2 flex-1">
                  <span className="self-start bg-[#f3e8ff] text-[#7C3AED] px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider">
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

      {/* =============================================================== */}
      {/*  OUTCOMES — 3 large stat cards                                   */}
      {/* =============================================================== */}
      <section className="reveal-section py-20 md:py-28 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-[var(--font-heading)] text-3xl md:text-4xl lg:text-5xl font-bold text-center text-[#171717] mb-14">
            {D.outcomes.heading}
          </h2>
          <div className="grid md:grid-cols-3 gap-10">
            {D.outcomes.stats.map((stat) => {
              const isFifty = stat.value === "50%";
              const isZero = stat.value === "0";
              return (
                <div
                  key={stat.label}
                  className="reveal-card text-center p-8 bg-purple-50/40 rounded-2xl border border-purple-100"
                >
                  <div className="font-[var(--font-heading)] text-5xl md:text-6xl font-bold bg-gradient-to-br from-[#7C3AED] to-[#EC4899] bg-clip-text text-transparent mb-3">
                    {isFifty ? (
                      <>
                        <Counter target={50} />%
                      </>
                    ) : isZero ? (
                      <Counter target={0} />
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

      {/* =============================================================== */}
      {/*  FAQ — accordion with left border accent                         */}
      {/* =============================================================== */}
      <FaqSection />

      {/* =============================================================== */}
      {/*  FINAL CTA — full-width gradient, homepage-matched               */}
      {/* =============================================================== */}
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
/*  FAQ accordion with left border accent                                     */
/* -------------------------------------------------------------------------- */

function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="reveal-section py-20 md:py-28 bg-purple-50/30">
      <JsonLd data={buildFaqSchema([...D.faq.items])} />
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-[var(--font-heading)] text-3xl md:text-4xl lg:text-5xl font-bold text-center text-[#171717] mb-14">
          {D.faq.heading}
        </h2>
        <div className="space-y-3">
          {D.faq.items.map((item, i) => (
            <div
              key={item.question}
              className={`rounded-2xl border transition-all duration-300 ${
                openIndex === i
                  ? "border-[#7C3AED] bg-white shadow-md border-l-4 border-l-[#7C3AED]"
                  : "border-neutral-200 bg-white shadow-sm hover:border-purple-200"
              }`}
            >
              <button
                type="button"
                onClick={() => setOpenIndex((prev) => (prev === i ? null : i))}
                className="w-full cursor-pointer font-[var(--font-heading)] font-bold text-lg text-[#171717] flex justify-between items-center p-5 text-left gap-4 hover:text-[#7C3AED] transition-colors"
                aria-expanded={openIndex === i}
              >
                <span>{item.question}</span>
                <ChevronDown
                  size={20}
                  strokeWidth={2.5}
                  className={`shrink-0 text-[#7C3AED] transition-transform duration-300 ${
                    openIndex === i ? "rotate-180" : ""
                  }`}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === i ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <p className="font-[var(--font-sans)] text-neutral-600 leading-relaxed px-5 pb-5">
                  {item.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
