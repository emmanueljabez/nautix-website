"use client";

import { useEffect, useState } from "react";
import type { LandingPageData } from "@/lib/seo-pages";
import { PAGE_DATA } from "@/lib/omnichannel-inbox-data";
import { buildFaqSchema } from "@/lib/seo";
import { Counter } from "@/components/ui/Counter";
import { JsonLd } from "@/components/seo/JsonLd";

interface ProductOmnichannelInboxProps {
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

function HeroVisual() {
  return (
    <div className="relative flex flex-col gap-4 w-full max-w-[480px] mx-auto lg:mx-0">
      <div className="flex items-center justify-center gap-4">
        <div className="w-14 h-14 rounded-2xl bg-[#25D366]/10 border border-[#25D366]/20 flex items-center justify-center">
          <img src="/nautix-partners/whatsapp-business.png" alt="WhatsApp" className="w-7 h-7 object-contain" />
        </div>

        <div className="w-14 h-14 rounded-2xl bg-[#E4405F]/10 border border-[#E4405F]/20 flex items-center justify-center">
          <img src="/nautix-partners/instagram-logo.png" alt="Instagram" className="w-6 h-6 object-contain" />
        </div>

        <div className="w-14 h-14 rounded-2xl bg-[#1877F2]/10 border border-[#1877F2]/20 flex items-center justify-center">
          <img src="/nautix-partners/facebook-logo.png" alt="Facebook" className="w-7 h-7 object-contain" />
        </div>

        <div className="w-14 h-14 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center">
          <img src="/globe.svg" alt="Webchat" className="w-6 h-6 object-contain" />
        </div>
      </div>

      <div className="relative h-8">
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 32" fill="none" aria-hidden="true">
          <path d="M50 28 Q200 0 200 16 Q200 32 350 4" stroke="url(#g-oi)" strokeWidth="1.5" fill="none" strokeDasharray="4 3" />
          <path d="M120 4 Q200 28 280 4" stroke="url(#g-oi)" strokeWidth="1.5" fill="none" strokeDasharray="4 3" />
          <defs>
            <linearGradient id="g-oi" x1="0" y1="0" x2="400" y2="0">
              <stop offset="0%" stopColor="#7C3AED" stopOpacity="0.1" />
              <stop offset="50%" stopColor="#7C3AED" stopOpacity="0.5" />
              <stop offset="100%" stopColor="#7C3AED" stopOpacity="0.1" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="flex flex-col items-center">
        <div className="w-16 h-16 rounded-2xl bg-primary flex items-center justify-center shadow-md">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d="M2 6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6z" stroke="#fff" strokeWidth="1.8" />
            <path d="M2 6l10 7 10-7" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
            <circle cx="12" cy="12" r="2" fill="#fff" opacity="0.4" />
          </svg>
        </div>
        <span className="mt-2 text-[10px] font-semibold text-primary/70 uppercase tracking-widest">
          One Inbox
        </span>
      </div>
    </div>
  );
}

function FaqSection() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="oi-faq reveal-section" style={{ maxWidth: 880, margin: "0 auto", padding: "20px 24px 20px" }}>
      <JsonLd data={buildFaqSchema([...D.faq.items])} />

      <div className="nautix-industry-head">
        <h2 className="nautix-section-title mb-0">
          <span className="nautix-section-title-line">Common</span>
          <span className="nautix-section-title-focus">questions</span>
        </h2>
      </div>

      <ul style={{ listStyle: "none", padding: 0, margin: "32px 0 0" }}>
        {D.faq.items.map((item, idx) => (
          <li key={item.question} className="he-faq-item" data-open={open === idx}>
            <button
              type="button"
              className="he-faq-button"
              aria-expanded={open === idx}
              onClick={() => setOpen((o) => (o === idx ? null : idx))}
            >
              <span>{item.question}</span>
              <span className="he-faq-chevron" aria-hidden="true">+</span>
            </button>
            <div className="he-faq-body">
              <p>{item.answer}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

function StepIcon({ kind }: { kind: string }) {
  if (kind === "connect") {
    return (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M9 3v4M15 3v4M6 9h12M9 9v5a3 3 0 0 0 3 3h0a3 3 0 0 0 3-3V9M12 17v4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }
  if (kind === "train") {
    return (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 3a5 5 0 0 0-5 5v1a3 3 0 0 0 0 6v2a3 3 0 0 0 3 3h1V3a2 2 0 0 0-2 2m10 0a5 5 0 0 1 5 5v1a3 3 0 0 1 0 6v2a3 3 0 0 1-3 3h-1V3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="8" cy="11" r="1.25" fill="currentColor" />
        <circle cx="16" cy="11" r="1.25" fill="currentColor" />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M4.5 16.5L3 21l4.5-1.5M13 3l8 8-6.5 2L11 16.5 7.5 13 10 9.5 13 3zM18 6l0 0" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function toCounter(value: string): { target: number; suffix: string } | null {
  if (/\dm\s?\d+s/.test(value)) return null;
  if (value.endsWith("%")) return { target: Number.parseFloat(value), suffix: "%" };
  const match = value.match(/^([\d.]+)\s*(.+)$/);
  if (match) return { target: Number.parseFloat(match[1]), suffix: ` ${match[2]}` };
  return null;
}

export function ProductOmnichannelInbox({
  data,
}: ProductOmnichannelInboxProps) {
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

        .oi-how .nautix-section-title-focus {
          background: #e2fe5e;
          color: #22303f;
          box-shadow: inset 0 0 0 1px rgba(34, 48, 63, 0.06);
        }
        .oi-how .he-steps-grid {
          position: relative;
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
          gap: 24px;
          margin-top: 48px;
        }
        .oi-how .he-steps-grid::before {
          content: "";
          position: absolute;
          top: 70px;
          left: 10%;
          right: 10%;
          height: 2px;
          background: linear-gradient(90deg, transparent 0%, rgba(126,16,162,0.25) 20%, rgba(181,46,209,0.35) 50%, rgba(126,16,162,0.25) 80%, transparent 100%);
          border-radius: 999px;
          z-index: 0;
          pointer-events: none;
        }
        @media (max-width: 820px) {
          .oi-how .he-steps-grid::before { display: none; }
        }
        .oi-how .he-step {
          position: relative;
          padding: 32px 28px 28px;
          border-radius: 22px;
          background: linear-gradient(180deg, rgba(126,16,162,0.025) 0%, rgba(255,255,255,0) 40%), #fff;
          border: 1px solid rgba(23,23,23,0.07);
          transition: border-color 0.3s ease, transform 0.3s ease, box-shadow 0.3s ease;
          overflow: hidden;
          z-index: 1;
        }
        .oi-how .he-step::before {
          content: "";
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 3px;
          background: linear-gradient(90deg, #7e10a2 0%, #b52ed1 50%, #7e10a2 100%);
          opacity: 0.9;
          border-radius: 22px 22px 0 0;
        }
        .oi-how .he-step::after {
          position: absolute;
          top: -28px;
          right: -12px;
          font-family: var(--font-heading), sans-serif;
          font-size: 200px;
          font-weight: 700;
          line-height: 1;
          letter-spacing: -0.05em;
          color: rgba(126,16,162,0.045);
          pointer-events: none;
          user-select: none;
          z-index: 0;
        }
        .oi-how .he-step:hover {
          transform: translateY(-6px);
          border-color: rgba(126,16,162,0.3);
          box-shadow: 0 36px 60px -32px rgba(126,16,162,0.35);
        }
        .oi-how .he-step-head {
          position: relative;
          display: flex;
          align-items: center;
          gap: 14px;
          margin-bottom: 22px;
          padding-bottom: 22px;
          border-bottom: 1px solid rgba(126,16,162,0.08);
        }
        .oi-how .he-step-head::after {
          content: "";
          position: absolute;
          left: 0;
          bottom: -1px;
          width: 40px;
          height: 2px;
          background: linear-gradient(90deg, #7e10a2 0%, #b52ed1 100%);
          border-radius: 2px;
        }
        .oi-how .he-step-num {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 52px;
          height: 52px;
          border-radius: 15px;
          background: linear-gradient(135deg, #7e10a2 0%, #b52ed1 100%);
          color: #fff;
          font-family: var(--font-heading), sans-serif;
          font-weight: 700;
          font-size: 18px;
          letter-spacing: 0.02em;
          box-shadow: 0 14px 26px -12px rgba(126,16,162,0.6), inset 0 1px 0 rgba(255,255,255,0.22);
          flex-shrink: 0;
          position: relative;
        }
        .oi-how .he-step-num::after {
          content: "";
          position: absolute;
          inset: -5px;
          border-radius: 19px;
          border: 1px dashed rgba(126,16,162,0.28);
          pointer-events: none;
        }
        .oi-how .he-step-icon {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 46px;
          height: 46px;
          border-radius: 13px;
          background: linear-gradient(135deg, rgba(126,16,162,0.1) 0%, rgba(181,46,209,0.14) 100%);
          color: #7e10a2;
          flex-shrink: 0;
          border: 1px solid rgba(126,16,162,0.12);
        }
        .oi-how .he-step-icon svg { width: 22px; height: 22px; }
        .oi-how .he-step-title {
          font-family: var(--font-heading), sans-serif;
          font-size: 21px;
          font-weight: 600;
          color: #171717;
          margin: 0 0 12px;
          letter-spacing: -0.015em;
          position: relative;
        }
        .oi-how .he-step-copy {
          margin: 0 0 22px;
          font-size: 14.5px;
          line-height: 1.6;
          color: rgba(23,23,23,0.65);
          position: relative;
        }
        .oi-how .he-step-stat {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 12px 14px;
          border-radius: 12px;
          background: linear-gradient(90deg, rgba(126,16,162,0.06) 0%, rgba(181,46,209,0.03) 100%);
          border: 1px solid rgba(126,16,162,0.1);
          position: relative;
        }
        .oi-how .he-step-stat::before {
          content: "";
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: #b52ed1;
          box-shadow: 0 0 0 3px rgba(181,46,209,0.18);
          flex-shrink: 0;
        }
        .oi-how .he-step-stat b {
          font-family: var(--font-heading), sans-serif;
          font-size: 17px;
          font-weight: 700;
          color: #7e10a2;
          letter-spacing: -0.01em;
        }
        .oi-how .he-step-stat span {
          font-size: 11.5px;
          color: rgba(23,23,23,0.55);
          text-transform: uppercase;
          letter-spacing: 0.1em;
          margin-left: auto;
        }

        .oi-faq .nautix-section-title-focus {
          background: #e2fe5e;
          color: #22303f;
          box-shadow: inset 0 0 0 1px rgba(34, 48, 63, 0.06);
        }
        .oi-faq .he-faq-item {
          border-top: 1px solid rgba(23,23,23,0.08);
          padding: 18px 0;
        }
        .oi-faq .he-faq-item:last-child {
          border-bottom: 1px solid rgba(23,23,23,0.08);
        }
        .oi-faq .he-faq-button {
          display: flex;
          width: 100%;
          align-items: center;
          justify-content: space-between;
          gap: 16px;
          padding: 6px 0;
          border: 0;
          background: transparent;
          cursor: pointer;
          text-align: left;
          font-family: var(--font-heading), sans-serif;
          font-size: 20px;
          font-weight: 500;
          color: #171717;
        }
        .oi-faq .he-faq-chevron {
          flex-shrink: 0;
          width: 32px;
          height: 32px;
          border-radius: 999px;
          background: rgba(126,16,162,0.08);
          color: #7e10a2;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          transition: transform 0.3s ease, background 0.25s ease;
          font-size: 18px;
          font-weight: 600;
          line-height: 1;
        }
        .oi-faq .he-faq-item[data-open="true"] .he-faq-chevron {
          transform: rotate(45deg);
          background: #7e10a2;
          color: #fff;
        }
        .oi-faq .he-faq-body {
          overflow: hidden;
          max-height: 0;
          transition: max-height 0.35s ease;
        }
        .oi-faq .he-faq-item[data-open="true"] .he-faq-body {
          max-height: 400px;
        }
        .oi-faq .he-faq-body p {
          margin: 10px 0 0;
          color: rgba(23,23,23,0.72);
          font-size: 16px;
          line-height: 1.6;
        }
     
        .oi-problem .nautix-section-title-line {
        max-width: none;
        white-space: nowrap;
      }
        .oi-problem .nautix-section-title-focus,
.oi-industry .nautix-section-title-focus {
  background: #e2fe5e;
  color: #22303f;
  box-shadow: inset 0 0 0 1px rgba(34, 48, 63, 0.06);
}
              .oi-industry .he-industry-card {
          position: relative;
          display: flex;
          flex-direction: column;
          gap: 18px;
          padding: 0 0 28px;
          border-radius: 22px;
          background: #ffffff;
          border: 1px solid rgba(23,23,23,0.07);
          overflow: hidden;
          transition: border-color 0.25s ease, transform 0.25s ease, box-shadow 0.25s ease;
        }
        .oi-industry .he-industry-card:hover {
          transform: translateY(-4px);
          border-color: rgba(126,16,162,0.22);
          box-shadow: 0 28px 50px -30px rgba(126,16,162,0.28);
        }
        .oi-industry .he-industry-media {
          position: relative;
          aspect-ratio: 16 / 12;
          overflow: hidden;
        }
        .oi-industry .he-industry-media img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.8s cubic-bezier(.22,.61,.36,1);
        }
        .oi-industry .he-industry-card:hover .he-industry-media img {
          transform: scale(1.06);
        }
        .oi-industry .he-industry-label {
          display: block;
          font-family: var(--font-heading), sans-serif;
          font-size: clamp(18px, 1.55vw, 22px);
          font-weight: 700;
          letter-spacing: -0.015em;
          color: #7e10a2;
          text-transform: none;
          line-height: 1.15;
          white-space: nowrap;
        }
        .oi-industry .he-industry-cta:hover {
          text-decoration: underline;
        }

      `}</style>

      {/* HERO */}
      <section className="reveal-section relative overflow-hidden">
       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-14 lg:pt-20 lg:pb-14">
      
          <div className="grid lg:grid-cols-5 gap-12 lg:gap-16 items-start">
            <div className="lg:col-span-2 flex flex-col gap-6">
              <h1 className="font-[var(--font-heading)] font-bold text-4xl md:text-5xl lg:text-6xl tracking-[-0.04em] text-primary-950 leading-[1.05]">
                {D.hero.h1}
              </h1>

              <p className="font-[var(--font-sans)] text-lg text-foreground/70 leading-relaxed max-w-xl">
                {D.hero.subhead}
              </p>



              <div className="flex gap-3 pt-2">
                <a
                  href={D.hero.primaryCta.href}
                  className="group inline-flex items-center gap-2 rounded-full bg-primary-700 min-h-12 px-[1.35rem] py-[0.85rem] text-base font-bold text-white shadow-md transition-colors hover:bg-primary-800"
                >
                  <span className="text-[16px] font-semibold">{D.hero.primaryCta.label}</span>
                  <i className="fs-8 unicon-arrow-up-right fw-bold" aria-hidden="true" />
                </a>
                <a
                  href={D.hero.secondaryCta.href}
                  className="inline-flex items-center justify-center rounded-full border border-primary/25 text-primary hover:bg-primary/5 min-h-12 px-[1.35rem] py-[0.85rem] text-base font-semibold transition-all"
                >
                  {D.hero.secondaryCta.label}
                </a>
              </div>
            </div>

                           <div className="lg:col-span-3 w-full lg:mt-[45px]">
              <div className="nautix-pillar-media-panel">
                <div className="nautix-pillar-media" style={{ aspectRatio: "auto", overflow: "visible" }}>
                  <img
                    src="/nautix-product/Omnichannel Inbox/Nautix-Omnichannel-Inbox-Hero.jpg"
                    alt="Nautix omnichannel inbox demo"
                    loading="lazy"
                    style={{ width: "100%", height: "auto", display: "block" }}
                  />
                </div>
              </div>
            </div>         
              
          </div>

        </div>
      </section>

      {/* PROBLEM */}
     <section className="oi-problem reveal-section pb-14 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center  mb-8">
            <h2 className="nautix-section-title mb-0">
              <span className="nautix-section-title-line">{D.problem.heading.split(". ")[0] + "."}</span>
              <span className="nautix-section-title-focus">{D.problem.heading.split(". ").slice(1).join(". ")}</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-2">
                        {D.problem.painPoints.map((pain, i) => (
              <article
                key={pain.title}
                               className={`bg-white border border-black/5 rounded-xl p-6 shadow-sm hover:shadow-md hover:border-primary/20 transition-all duration-300 ${i === 2 ? "md:col-span-2 md:pb-0 md:pt-0 md:px-0" : ""}`}
              >
                {i === 2 ? (
                  /* Third card: image left, text right, full width */
                  <div className="flex flex-col md:flex-row gap-6">
                    <div className="-mx-6 -mt-6 md:mx-0 md:mt-0 md:w-1/2 overflow-hidden rounded-t-xl md:rounded-xl">
                      <img
                        src={`/nautix-product/Omnichannel Inbox/${pain.title.toLowerCase().replace(/\s+/g, "-")}.jpg`}
                        alt={pain.title}
                        className="h-40 md:h-64 w-full object-cover"
                        loading="lazy"
                      />
                    </div>
                    <div className="md:w-1/2 flex flex-col justify-start">
                      <div
                        style={{
                          width: 48,
                          height: 48,
                          borderRadius: 14,
                          background: "rgba(126,16,162,0.08)",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          marginBottom: 16,
                        }}
                      >
                        <img src={pain.icon} alt={pain.title} loading="lazy" style={{ width: 26, height: 26 }} />
                      </div>
                      <h3 className="font-[var(--font-heading)] font-bold text-lg text-foreground mb-2">
                        {pain.title}
                      </h3>
                      <p className="font-[var(--font-sans)] text-sm text-foreground/70 leading-relaxed mt-2">
                        {pain.detail}
                      </p>
                    </div>
                  </div>
                ) : (
                  /* Cards 1 & 2: image top, text below */
                  <>
                    <div className="-mx-6 -mt-6 mb-5 overflow-hidden rounded-t-xl">
                      <img
                        src={`/nautix-product/Omnichannel Inbox/${pain.title.toLowerCase().replace(/\s+/g, "-")}.jpg`}
                        alt={pain.title}
                        className="h-40 w-full object-cover"
                        loading="lazy"
                      />
                    </div>
                    <div
                      style={{
                        width: 48,
                        height: 48,
                        borderRadius: 14,
                        background: "rgba(126,16,162,0.08)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        marginBottom: 16,
                      }}
                    >
                      <img src={pain.icon} alt={pain.title} loading="lazy" style={{ width: 26, height: 26 }} />
                    </div>
                    <h3 className="font-[var(--font-heading)] font-bold text-lg text-foreground mb-2">
                      {pain.title}
                    </h3>
                    <p className="font-[var(--font-sans)] text-sm text-foreground/70 leading-relaxed">
                      {pain.detail}
                    </p>
                  </>
                )}
              </article>
            ))}
              

            

          </div>
        </div>
      </section>

          {/* HOW IT WORKS */}
     <section id="how-it-works" className="oi-how reveal-section pb-14">
        <div style={{ maxWidth: 1288, margin: "0 auto", padding: "0 15px" }}>
          <div className="nautix-pillars-head" style={{ textAlign: "center", marginBottom: 16 }}>
            <h2 className="nautix-section-title mb-0">
              <span className="nautix-section-title-line">{D.howItWorks.heading.split(". ")[0] + "."}</span>
              <span className="nautix-section-title-focus">{D.howItWorks.heading.split(". ").slice(1).join(". ")}</span>
            </h2>
            <p style={{ fontSize: 16, color: "rgba(23,23,23,0.68)", margin: "12px 0 0", maxWidth: 620, marginInline: "auto" }}>
              {D.howItWorks.subhead}
            </p>
          </div>

          <div className="nautix-pillar-panel" style={{ marginTop: 20 }}>
            {/* Left: Image */}
            <div className="nautix-pillar-media-panel">
              <div className="nautix-pillar-media">
                  <img
                  src="/nautix-product/Omnichannel%20Inbox/Nautix-Omnichannel--How-It-Works.jpg"
                  alt="How it works"
                  loading="lazy"
                  style={{ objectFit: "cover", width: "100%", height: "100%" }}
                />
              </div>
            </div>

            {/* Right: 4 step cards in 2x2 grid */}
            <div className="grid grid-cols-2 gap-2">
                {D.howItWorks.steps.map((s) => (
               <article key={s.stepNumber} className="nautix-pillar-feature" style={{ minHeight: 0, padding: "0.6rem 1rem", gap: "0.3rem" }}>
                  <span className="nautix-pillar-feature-kicker">{`STEP ${String(s.stepNumber).padStart(2, "0")}`}</span>
                  <h4 className="nautix-pillar-feature-title mb-0">{s.title}</h4>
                  <p className="nautix-pillar-feature-copy mb-0">{s.detail}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>
            
            
         
              
      {/* CAPABILITIES */}
     <section className="reveal-section pb-14 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="nautix-section-title mb-8" style={{ color: "#091624", textAlign: "center" }}>
            What the <span className="px-1" style={{ color: "#16404B", backgroundColor: "#E2FF5E" }}>inbox</span> does
          </h2>

          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            {/* Left: 6 cards in 3×2 grid */}
            <div className="grid grid-cols-2 gap-3">
              {D.capabilities.cards.map((c, idx) => (
                <article key={c.title} className="nautix-pillar-feature" style={{ minHeight: 0, padding: "0.6rem 0.9rem", gap: "0.2rem" }}>
               <h4 className="nautix-pillar-feature-title mb-0">{c.title}</h4>
<p className="nautix-pillar-feature-copy mb-0">{c.body}</p>  
                </article>
              ))}
            </div>
      

            {/* Right: image */}
            <div className="flex justify-center lg:justify-start">
              <img
                src="/nautix-product/Omnichannel Inbox/Nautix-Omnichannel--Key-Capabilities.png"
                alt="Key capabilities overview"
                className="w-full max-w-lg"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>
      
                    
      

            {/* INDUSTRIES */}
     <section className="oi-industry reveal-section pb-14">
        <div className="nautix-industry-head" style={{ maxWidth: 1288, margin: "0 auto", padding: "0 24px", textAlign: "center" }}>
          <h2 className="nautix-section-title mb-0">
            <span className="nautix-section-title-line">{D.industries.heading.split(".")[0] + "."}</span>
            <span className="nautix-section-title-focus">{D.industries.heading.split(".").slice(1).join(".")}</span>
          </h2>
          <p className="nautix-section-copy mb-0" style={{ maxWidth: 620, margin: "12px auto 0" }}>
            {D.industries.subhead}
          </p>
        </div>

        <div
          style={{
            display: "grid",
           gridTemplateColumns: "repeat(2, 1fr)",
            gap: 24,
            maxWidth: 1288,
            margin: "32px auto 0",
            padding: "0 24px",
          }}
        >
          {D.industries.cards.map((i) => (
                       <article key={i.label} className="he-industry-card" style={{ display: "flex", flexDirection: "column", gap: 8, padding: 24 }}>
              <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                <h3 className="he-industry-label" style={{ margin: 0, whiteSpace: "normal" }}>
                  {i.label}
                </h3>
                <p style={{ margin: 0, color: "rgba(23,23,23,0.68)", fontSize: 14, lineHeight: 1.5 }}>
                  {i.desc}
                </p>
              </div>
              <div className="he-industry-media" style={{ borderRadius: 16 }}>
                <img src={i.image} loading="lazy" alt={i.label} />
              </div>
            </article>
          ))}
        </div>
      </section>
            

      {/* OUTCOMES */}
      <section className="reveal-section bg-white pb-6">
        <div className="mx-auto max-w-[1280px] px-6 md:px-10">
          <h2
            className="reveal text-center"
            style={{
              fontFamily: '"Sharp Grotesk", Sans-serif',
              fontSize: "clamp(2rem, 5vw, 3rem)",
              lineHeight: "1.1em",
              letterSpacing: "-0.06rem",
            }}
          >
            {D.outcomes.heading.replace("delivers", "")}
            <span
              style={{
                background: "#E2FF5E",
                color: "#16404B",
                boxShadow: "inset 0 0 0 1px rgba(34,48,63,0.06)",
              }}
            >
              delivers
            </span>
          </h2>

          <div className="mt-8 grid gap-10 md:grid-cols-3 md:gap-0">
            {D.outcomes.stats.map((stat, i) => {
              const counterProps = toCounter(stat.value);
              return (
                <div
                  key={stat.label}
                  className={`flex flex-col items-center text-center ${
                    i !== 0 ? "md:border-l md:border-primary/[0.15]" : ""
                  } px-4 md:px-10`}
                >
                  <div
                    className="text-[clamp(48px,8vw,80px)] font-semibold leading-none tracking-[-0.04em] tabular-nums"
                    style={{
                      fontFamily: "var(--font-heading), sans-serif",
                      background: "linear-gradient(135deg, #7e10a2 0%, #b52ed1 100%)",
                      WebkitBackgroundClip: "text",
                      backgroundClip: "text",
                      color: "transparent",
                    }}
                  >
                    {counterProps ? (
                      <Counter target={counterProps.target} suffix={counterProps.suffix} />
                    ) : (
                      <span>{stat.value}</span>
                    )}
                  </div>
                  <p className="mt-2.5 max-w-[220px] text-[15px] font-medium leading-[1.6] text-foreground">
                    {stat.label}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <FaqSection />

            {/* FINAL CTA */}
      <section className="nautix-final-cta-section" style={{ marginTop: "2rem" }}>
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
