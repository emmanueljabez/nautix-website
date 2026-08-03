"use client";

import { useEffect, useState } from "react";
import type { LandingPageData } from "@/lib/seo-pages";
import { PAGE_DATA } from "@/lib/autonomous-resolution-data";
import { buildFaqSchema } from "@/lib/seo";
import { Counter } from "@/components/ui/Counter";
import { JsonLd } from "@/components/seo/JsonLd";

interface ProductAutonomousResolutionProps {
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

function renderHeading(heading: string) {
  const parts = heading.split(". ");
  if (parts.length > 1) {
    return (
      <>
        <span className="nautix-section-title-line">{parts[0] + "."}</span>
        <span className="nautix-section-title-focus">
          {parts.slice(1).join(". ")}
        </span>
      </>
    );
  }
  return <span className="nautix-section-title-line">{heading}</span>;
}
function HeroVisual() {
  return (
    <div className="relative flex flex-col items-center w-full max-w-[480px] mx-auto lg:mx-0">
      <img
        src="/nautix-product/autonomous-resolution.png"
        alt="Autonomous resolution illustration"
        className="w-full h-auto"
        loading="lazy"
      />
    </div>
  );
}
function ProblemIcon({ kind }: { kind: string }) {
  if (kind === "acknowledge") {
    return (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: 26, height: 26 }}>
        <path d="M5 13l4 4L19 7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5" />
        <path d="M12 8v4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    );
  }
  if (kind === "human") {
    return (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: 26, height: 26 }}>
        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="12" cy="7" r="4" stroke="currentColor" strokeWidth="1.8" />
        <path d="M7 10l-3 3 3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M17 10l3 3-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: 26, height: 26 }}>
      <path d="M5 13l4 4L19 7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M12 2v4M12 18v4M2 12h4M18 12h4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function StepIcon({ kind }: { kind: string }) {
  if (kind === "understand") {
    return (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 1 1 7.072 0l-.548.547A3.374 3.374 0 0 0 14 18.469V19a2 2 0 1 1-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }
  if (kind === "diagnose") {
    return (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.8" />
        <path d="M12 17v-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <circle cx="12" cy="7" r="1.25" fill="currentColor" />
        <path d="M8 12h8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    );
  }
  if (kind === "action") {
    return (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M22 4L12 14.01l-3-3" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
function FaqSection() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="ar-faq reveal-section" style={{ maxWidth: 880, margin: "0 auto", padding: "40px 24px 60px" }}>
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
            <button type="button" className="he-faq-button" aria-expanded={open === idx} onClick={() => setOpen((o) => (o === idx ? null : idx))}>
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

function toCounter(value: string): { target: number; suffix: string } | null {
  if (/\dm\s?\d+s/.test(value)) return null;
  if (/[\d.]+[-–][\d.]/.test(value)) return null;
  if (value.endsWith("%")) return { target: Number.parseFloat(value), suffix: "%" };
  const match = value.match(/^([\d.]+)\s*(.+)$/);
  if (match) return { target: Number.parseFloat(match[1]), suffix: ` ${match[2]}` };
  return null;
}
export function ProductAutonomousResolution({ data }: ProductAutonomousResolutionProps) {
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

        .ar-how .nautix-section-title-line {
          max-width: none;
          white-space: nowrap;
        }
        .ar-how .nautix-section-title-focus {
          background: #e2fe5e;
          color: #22303f;
          box-shadow: inset 0 0 0 1px rgba(34, 48, 63, 0.06);
        }
        .ar-how .ar-steps-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 20px;
          margin-top: 48px;
          position: relative;
        }
        .ar-how .ar-steps-grid::before {
          content: "";
          position: absolute;
          top: 24px;
          left: calc(12.5% + 24px);
          right: calc(12.5% + 24px);
          height: 2px;
          background: linear-gradient(90deg, transparent 0%, rgba(126,16,162,0.25) 20%, rgba(181,46,209,0.35) 50%, rgba(126,16,162,0.25) 80%, transparent 100%);
          border-radius: 999px;
          z-index: 0;
          pointer-events: none;
        }
        @media (max-width: 900px) {
          .ar-how .ar-steps-grid {
            grid-template-columns: repeat(2, 1fr);
          }
          .ar-how .ar-steps-grid::before { display: none; }
        }
        @media (max-width: 540px) {
          .ar-how .ar-steps-grid {
            grid-template-columns: 1fr;
          }
        }

        .ar-how .ar-step-card {
          position: relative;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          text-align: left;
          padding: 24px 22px 22px;
          border-radius: 18px;
          background: #fff;
          border: 1px solid rgba(23,23,23,0.06);
          transition: transform 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease;
          z-index: 1;
        }
        .ar-how .ar-step-card:hover {
          transform: translateY(-5px);
          border-color: rgba(126,16,162,0.25);
          box-shadow: 0 24px 48px -20px rgba(126,16,162,0.28);
        }
        .ar-how .ar-step-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          width: 100%;
          margin-bottom: 14px;
        }
        .ar-how .ar-step-badge {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 4px 18px;
          height: 30px;
          border-radius: 999px;
          background: linear-gradient(135deg, #7e10a2 0%, #b52ed1 100%);
          color: #fff;
          font-family: var(--font-heading), sans-serif;
          font-weight: 600;
          font-size: 14px;
          letter-spacing: 0.06em;
          box-shadow: 0 6px 14px -6px rgba(126,16,162,0.4);
          z-index: 2;
        }
        .ar-how .ar-step-icon {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          align-self: flex-end;
          width: 40px;
          height: 40px;
          border-radius: 11px;
          background: linear-gradient(135deg, rgba(126,16,162,0.08) 0%, rgba(181,46,209,0.12) 100%);
          color: #7e10a2;
          border: 1px solid rgba(126,16,162,0.1);
          margin-bottom: 10px;
          flex-shrink: 0;
        }
        .ar-how .ar-step-icon svg { width: 20px; height: 20px; }
        .ar-how .ar-step-title {
          font-family: var(--font-heading), sans-serif;
          font-size: 21px;
          font-weight: 600;
          color: #171717;
          margin: 0 0 8px;
          letter-spacing: -0.01em;
          line-height: 1.3;
        }
        .ar-how .ar-step-copy {
          font-size: 14.5px;
          line-height: 1.6;
          color: rgba(23,23,23,0.62);
          margin: 0 0 auto;
        }
        .ar-how .ar-step-stat {
          display: flex;
          align-items: center;
          gap: 8px;
          margin-top: 18px;
          padding-top: 14px;
          border-top: 1px dashed rgba(126,16,162,0.15);
          width: 100%;
        }
        .ar-how .ar-step-stat b {
          font-family: var(--font-heading), sans-serif;
          font-size: 17px;
          font-weight: 700;
          color: #7e10a2;
        }
        .ar-how .ar-step-stat span {
          font-size: 11.5px;
          color: rgba(23,23,23,0.5);
          text-transform: uppercase;
          letter-spacing: 0.08em;
        }

        .ar-faq .nautix-section-title-focus {
          background: #e2fe5e;
          color: #22303f;
          box-shadow: inset 0 0 0 1px rgba(34, 48, 63, 0.06);
        }
        .ar-faq .he-faq-item {
          border-top: 1px solid rgba(23,23,23,0.08);
          padding: 18px 0;
        }
        .ar-faq .he-faq-item:last-child {
          border-bottom: 1px solid rgba(23,23,23,0.08);
        }
        .ar-faq .he-faq-button {
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
        .ar-faq .he-faq-chevron {
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
        .ar-faq .he-faq-item[data-open="true"] .he-faq-chevron {
          transform: rotate(45deg);
          background: #7e10a2;
          color: #fff;
        }
        .ar-faq .he-faq-body {
          overflow: hidden;
          max-height: 0;
          transition: max-height 0.35s ease;
        }
        .ar-faq .he-faq-item[data-open="true"] .he-faq-body {
          max-height: 400px;
        }
        .ar-faq .he-faq-body p {
          margin: 10px 0 0;
          color: rgba(23,23,23,0.72);
          font-size: 16px;
          line-height: 1.6;
        }

        .ar-problem .nautix-section-title-line {
          max-width: none;
          white-space: nowrap;
        }
        .ar-problem .nautix-section-title-focus,
        .ar-industry .nautix-section-title-focus {
          background: #e2fe5e;
          color: #22303f;
          box-shadow: inset 0 0 0 1px rgba(34, 48, 63, 0.06);
        }
        .ar-industry .nautix-section-title-line {
          max-width: none;
          white-space: nowrap;
        }
      `}</style>
      {/* HERO */}
      <section className="reveal-section relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-[130px] pb-20 lg:pt-[130px] lg:pb-28">
          <div className="flex justify-center mb-8">
            <span className="border rounded-pill inline-flex items-center" style={{ padding: "0.25rem 1rem" }}>
              <p className="mb-0" style={{ color: "#16404B", fontFamily: '"Mabry Pro", Sans-serif', fontSize: "0.875rem", fontWeight: 700, textAlign: "center" }}>
                {D.hero.eyebrow}
              </p>
            </span>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            <div className="flex flex-col gap-6">
              <h1 className="font-[var(--font-heading)] font-bold text-4xl md:text-5xl lg:text-6xl tracking-[-0.04em] text-primary-950 leading-[1.05]">
                {D.hero.h1}
              </h1>
              <p className="font-[var(--font-sans)] text-lg text-foreground/70 leading-relaxed max-w-xl">
                {D.hero.subhead}
              </p>

              {/* Typical Chatbot */}
              <div className="w-full max-w-[420px] rounded-2xl border border-black/10 bg-white shadow-sm p-4">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center text-gray-600 text-xs font-bold">
                    B
                  </div>
                  <span className="text-xs font-semibold text-foreground/60">Typical Chatbot</span>
                  <span className="ml-auto text-[10px] text-foreground/40">10:23 AM</span>
                </div>
                <div className="rounded-lg bg-gray-50 border border-gray-100 p-3">
                  <p className="text-xs text-foreground/60 m-0">Thanks for reaching out! We have received your request and someone will look into it shortly.</p>
                </div>
                <div className="mt-2 flex items-center gap-1.5 text-[10px] text-red-500">
                  <span className="inline-block w-2 h-2 rounded-full bg-red-400" />
                  Problem not resolved
                </div>
              </div>

              {/* Nautix Resolution */}
              <div className="w-full max-w-[420px] rounded-2xl border border-green-300 bg-green-50/40 shadow-sm p-4">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center text-white text-xs font-bold">
                    N
                  </div>
                  <span className="text-xs font-semibold text-primary">Nautix Resolution</span>
                  <span className="ml-auto text-[10px] text-foreground/40">10:23 AM</span>
                </div>
                <div className="rounded-lg bg-white border border-primary/10 p-3 space-y-2">
                  <div className="flex items-center gap-2">
                    <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center">
                      <svg width="11" height="11" viewBox="0 0 24 24" fill="none"><path d="M20 6L9 17l-5-5" stroke="#16a34a" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/></svg>
                    </div>
                    <p className="text-xs text-foreground/80 m-0">Service diagnosed — offline</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center">
                      <svg width="11" height="11" viewBox="0 0 24 24" fill="none"><path d="M20 6L9 17l-5-5" stroke="#16a34a" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/></svg>
                    </div>
                    <p className="text-xs text-foreground/80 m-0">Device rebooted remotely</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center">
                      <svg width="11" height="11" viewBox="0 0 24 24" fill="none"><path d="M20 6L9 17l-5-5" stroke="#16a34a" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/></svg>
                    </div>
                    <p className="text-xs text-foreground/80 m-0">Connection restored</p>
                  </div>
                </div>
                <div className="mt-2 flex items-center gap-1.5 text-[10px] text-green-600">
                  <span className="inline-block w-2 h-2 rounded-full bg-green-500" />
                  Issue resolved — 47 seconds
                </div>
              </div>

              <div className="flex flex-wrap gap-3 pt-2">
                <a href={D.hero.primaryCta.href} className="group inline-flex items-center gap-2 rounded-full bg-primary-700 min-h-12 px-[1.35rem] py-[0.85rem] text-base font-bold text-white shadow-md transition-colors hover:bg-primary-800">
                  <span className="text-[16px] font-semibold">{D.hero.primaryCta.label}</span>
                  <i className="fs-8 unicon-arrow-up-right fw-bold" aria-hidden="true" />
                </a>
                <a href={D.hero.secondaryCta.href} className="inline-flex items-center justify-center rounded-full border border-primary/25 text-primary hover:bg-primary/5 min-h-12 px-[1.35rem] py-[0.85rem] text-base font-semibold transition-all">
                  {D.hero.secondaryCta.label}
                </a>
              </div>
            </div>
            <HeroVisual />
          </div>
        </div>
      </section>

      {/* PROBLEM */}
      <section className="ar-problem reveal-section py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="nautix-section-title mb-0">
              {renderHeading(D.problem.heading)}
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {D.problem.painPoints.map((pain) => (
              <article key={pain.title} className="bg-white border border-black/5 rounded-xl p-6 shadow-sm hover:shadow-md hover:border-primary/20 transition-all duration-300">
                <div style={{ width: 48, height: 48, borderRadius: 14, background: "rgba(126,16,162,0.08)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 16, color: "#7e10a2" }}>
                  <ProblemIcon kind={pain.icon} />
                </div>
                <h3 className="font-[var(--font-heading)] font-bold text-lg text-foreground mb-2">{pain.title}</h3>
                <p className="font-[var(--font-sans)] text-sm text-foreground/70 leading-relaxed">{pain.detail}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section id="how-it-works" className="ar-how reveal-section py-20 lg:py-28">
        <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 24px" }}>
          <div className="nautix-pillars-head" style={{ textAlign: "center" }}>
            <h2 className="nautix-section-title mb-0">
              {renderHeading(D.howItWorks.heading)}
            </h2>
            <p style={{ fontSize: 16, color: "rgba(23,23,23,0.68)", margin: "12px 0 0", maxWidth: 620, marginInline: "auto" }}>
              {D.howItWorks.subhead}
            </p>
          </div>
          <div className="ar-steps-grid">
            {D.howItWorks.steps.map((s) => (
              <article key={s.stepNumber} className="ar-step-card">
                <span className="ar-step-icon" aria-hidden="true">
                  <StepIcon kind={s.kind} />
                </span>
                <div className="ar-step-header">
                  <span className="ar-step-badge">Step {s.stepNumber}</span>
                </div>
                <h3 className="ar-step-title">{s.title}</h3>
                <p className="ar-step-copy">{s.detail}</p>
                <div className="ar-step-stat">
                  <b>{s.stat}</b>
                  <span>{s.statLabel}</span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
      {/* CAPABILITIES */}
      <section className="reveal-section py-20 lg:py-28 bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="nautix-section-title mb-12" style={{ color: "#fff", textAlign: "center" }}>
            What{" "}
            <span className="px-1" style={{ color: "#16404B", backgroundColor: "#E2FF5E" }}>autonomous resolution</span>{" "}
            does
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {D.capabilities.cards.map((c) => (
              <article key={c.title} className="bg-white border border-white/20 rounded-2xl p-6 hover:border-white/40 hover:shadow-lg transition-all duration-300">
                <div style={{ width: 48, height: 48, borderRadius: 12, background: "rgba(126,16,162,0.08)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 16 }}>
                  <img src={c.icon} alt="" width={24} height={24} aria-hidden="true" />
                </div>
                <h3 className="font-[var(--font-heading)] font-bold text-lg text-foreground mb-2">{c.title}</h3>
                <p className="font-[var(--font-sans)] text-sm text-foreground/70 leading-relaxed">{c.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* INDUSTRY TABLE */}
      <section className="ar-industry reveal-section py-20 lg:py-28 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="nautix-section-title mb-0">
              {renderHeading(D.industryTable.heading)}
            </h2>
            <p className="fs-6 mt-2 text-dark text-opacity-70 max-w-2xl mx-auto">
              {D.industryTable.subhead}
            </p>
          </div>
          <div className="overflow-x-auto">
            <div className="border rounded-2xl overflow-hidden">
              <table className="uc-table uc-table-divider">
                <thead className="table-head sticky-top z-1 bg-white">
                  <tr className="table-row border-white">
                    <th className="table-header-cell w-1/3" scope="col">
                      <div className="title"><span className="h6 fw-bold text-dark">Vertical</span></div>
                    </th>
                    <th className="table-header-cell" scope="col">
                      <div className="title"><span className="h6 fw-bold text-dark">How they use it</span></div>
                    </th>
                  </tr>
                </thead>
                <tbody className="table-body">
                  {D.industryTable.rows.map((row, i) => (
                    <tr key={row.vertical} className={`table-row ${i === 0 ? "border-white" : "border-gray-100"}`}>
                      <th scope="row">
                        <div className="hstack gap-1 justify-start">
                          <span className="fs-5 fw-bold text-dark">{row.vertical}</span>
                        </div>
                      </th>
                      <td><span className="text-dark">{row.howTheyUseIt}</span></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* OUTCOMES */}
      <section className="reveal-section bg-white border-t border-primary/[0.15] py-24 md:py-32">
        <div className="mx-auto max-w-[1280px] px-6 md:px-10">
          <h2 className="reveal text-center" style={{ fontFamily: '"Sharp Grotesk", Sans-serif', fontSize: "clamp(2rem, 5vw, 3rem)", lineHeight: "1.1em", letterSpacing: "-0.06rem" }}>
            {D.outcomes.heading.replace("delivers", "")}
            <span style={{ background: "#E2FF5E", color: "#16404B", boxShadow: "inset 0 0 0 1px rgba(34,48,63,0.06)" }}>delivers</span>
          </h2>
          <div className="mt-12 grid gap-10 md:grid-cols-3 md:gap-0">
            {D.outcomes.stats.map((stat, i) => {
              const counterProps = toCounter(stat.value);
              return (
                <div key={stat.label} className={`flex flex-col items-center text-center ${i !== 0 ? "md:border-l md:border-primary/[0.15]" : ""} px-4 md:px-10`}>
                  <div className="text-[clamp(48px,8vw,80px)] font-semibold leading-none tracking-[-0.04em] tabular-nums" style={{ fontFamily: "var(--font-heading), sans-serif", background: "linear-gradient(135deg, #7e10a2 0%, #b52ed1 100%)", WebkitBackgroundClip: "text", backgroundClip: "text", color: "transparent" }}>
                    {counterProps ? <Counter target={counterProps.target} suffix={counterProps.suffix} /> : <span>{stat.value}</span>}
                  </div>
                  <p className="mt-2.5 max-w-[220px] text-[15px] font-medium leading-[1.6] text-foreground">{stat.label}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <FaqSection />

      {/* FINAL CTA */}
      <section className="nautix-final-cta-section reveal-section">
        <div className="nautix-final-cta-shell" style={{ background: "linear-gradient(145deg, #7e10a2 0%, #651082 54%, #2b1539 100%)", boxShadow: "0 32px 70px rgba(65, 16, 95, 0.22)" }}>
          <img className="nautix-final-cta-decor nautix-final-cta-decor--left" src="/wp-content/uploads/2025/05/green-stars.svg" width={55} height={50} loading="lazy" alt="" aria-hidden="true" />
          <img className="nautix-final-cta-decor nautix-final-cta-decor--right" src="/wp-content/uploads/2025/05/green-star.svg" width={19} height={30} loading="lazy" alt="" aria-hidden="true" />
          <div className="nautix-final-cta-content" style={{ background: "linear-gradient(145deg, #7e10a2 0%, #651082 54%, #2b1539 100%)", borderRadius: "inherit" }}>
            <h2 className="nautix-final-cta-title mb-0">
              Stop responding.
              <br />
              <span className="nautix-final-cta-focus">Start resolving.</span>
            </h2>
            <p className="nautix-final-cta-copy mb-0">
              See how autonomous resolution takes the real action to fix customer problems end to end — without waking your team.
            </p>
            <div className="nautix-final-cta-actions">
              <a className="nautix-final-cta-button nautix-final-cta-button--primary" href={D.hero.primaryCta.href} style={{ minHeight: "3rem", minWidth: 0, padding: "0.85rem 1.35rem" }}>
                Book a Demo
              </a>
              <a className="nautix-final-cta-button nautix-final-cta-button--secondary" href="https://wa.me/254762758987"> 
                WhatsApp us: +254 762 758 987
              </a>
            </div>
            <p className="nautix-final-cta-note mb-0">
              No credit card · 30-day free pilot · Cancel anytime
            </p>
          </div>
        </div>
      </section>

      {/* CROSS-LINK FOOTER */}
      <footer className="reveal-section bg-gray-50 border-t border-black/5 py-12">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm text-foreground/60 mb-4">Related product pages</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a href="/product/comment-monitoring" className="text-sm text-primary hover:text-primary-700 transition-colors underline underline-offset-4">
              Live System Diagnosis
            </a>
            <span className="text-foreground/20">·</span>
            <a href="/product/ai-resolution" className="text-sm text-primary hover:text-primary-700 transition-colors underline underline-offset-4">
              Proactive Alerts
            </a>
            <span className="text-foreground/20">·</span>
            <a href="/product/channels-inbox" className="text-sm text-primary hover:text-primary-700 transition-colors underline underline-offset-4">
              Instant Auto-Response
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}