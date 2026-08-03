"use client";

import { useEffect, useState } from "react";
import type { LandingPageData } from "@/lib/seo-pages";
import { PAGE_DATA } from "@/lib/lead-qualification-engine-data";
import { buildFaqSchema } from "@/lib/seo";
import { Counter } from "@/components/ui/Counter";
import { JsonLd } from "@/components/seo/JsonLd";

interface ProductLeadQualificationEngineProps {
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
    <div className="-mt-6 w-full max-w-[480px] mx-auto lg:mx-0">
      <img
        src="/nautix-product/lead-qualification.png"
        alt="Lead qualification illustration"
        className="w-full h-auto"
        loading="lazy"
      />
    </div>
  );
}

function ProblemIcon({ kind }: { kind: string }) {
  if (kind === "tyre-kicker") {
    return (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: 26, height: 26 }}>
        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5" />
        <path d="M12 6v6l4 2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M4 4l16 16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.3" />
      </svg>
    );
  }
  if (kind === "queue") {
    return (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: 26, height: 26 }}>
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="9" cy="7" r="4" stroke="currentColor" strokeWidth="1.5" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: 26, height: 26 }}>
      <path d="M4 6h16M4 12h16M4 18h7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M16 14l3 3 3-3" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" opacity="0.5" />
      <path d="M16 20l3-3 3 3" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" opacity="0.5" />
    </svg>
  );
}

function StepIcon({ kind }: { kind: string }) {
  if (kind === "greet") {
    return (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M7 11.5a4.5 4.5 0 0 1 4.5-4.5h1a4.5 4.5 0 0 1 4.5 4.5V17a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1v-5.5z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M12 3v2M8 7V5c0-.9.16-1.76.45-2.54" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        <path d="M12 18v3" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    );
  }
  if (kind === "question") {
    return (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.8" />
        <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="12" cy="17" r="1" fill="currentColor" />
      </svg>
    );
  }
  if (kind === "score") {
    return (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M3 3v18h18" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M7 16l4-8 4 6 3-5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="19" cy="11" r="2.5" stroke="currentColor" strokeWidth="1.8" />
        <path d="M19 9.75v2.5M17.75 11h2.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 2l3 7h7l-5.5 4 2 7L12 16l-6.5 4 2-7L2 9h7l3-7z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M8 12h8M9 9h6M9 15h6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0" />
      <path d="M8 8l-3 3 3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.5" />
      <path d="M16 8l3 3-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.5" />
    </svg>
  );
}

function CapabilityIcon({ kind }: { kind: string }) {
  const size = 26;
  if (kind === "question") {
    return (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: size, height: size }}>
        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.8" />
        <path d="M9.5 9a2.5 2.5 0 0 1 4.5 1c0 1.5-2 2-2 3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <circle cx="10.5" cy="16" r="1" fill="currentColor" />
      </svg>
    );
  }
  if (kind === "scoring") {
    return (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: size, height: size }}>
        <rect x="3" y="14" width="4" height="9" rx="1" stroke="currentColor" strokeWidth="1.8" />
        <rect x="10" y="9" width="4" height="14" rx="1" stroke="currentColor" strokeWidth="1.8" />
        <rect x="17" y="5" width="4" height="18" rx="1" stroke="currentColor" strokeWidth="1.8" />
      </svg>
    );
  }
  if (kind === "routing") {
    return (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: size, height: size }}>
        <path d="M16 3l4 4-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M20 7H9" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        <path d="M8 21l-4-4 4-4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M4 17h11" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        <path d="M12 7l-2.5 2.5L12 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.5" />
        <path d="M12 12l2.5 2.5L12 17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.5" />
      </svg>
    );
  }
  if (kind === "brief") {
    return (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: size, height: size }}>
        <rect x="4" y="4" width="16" height="18" rx="2" stroke="currentColor" strokeWidth="1.8" />
        <path d="M8 4V2h8v2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M8 10h7M8 14h5M8 18h3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    );
  }
  if (kind === "clock") {
    return (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: size, height: size }}>
        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.8" />
        <path d="M12 6v6l4 2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }
  if (kind === "crm") {
    return (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: size, height: size }}>
        <circle cx="8" cy="8" r="3" stroke="currentColor" strokeWidth="1.8" />
        <circle cx="16" cy="16" r="3" stroke="currentColor" strokeWidth="1.8" />
        <path d="M5.5 13.5L14.5 4.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        <path d="M10.5 11L13.5 14" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    );
  }
  return null;
}

function FaqSection() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="lqe-faq reveal-section" style={{ maxWidth: 880, margin: "0 auto", padding: "40px 24px 60px" }}>
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

export function ProductLeadQualificationEngine({ data }: ProductLeadQualificationEngineProps) {
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

        .lqe-how .nautix-section-title-line {
          max-width: none;
          white-space: nowrap;
        }
        .lqe-how .nautix-section-title-focus {
          background: #e2fe5e;
          color: #22303f;
          box-shadow: inset 0 0 0 1px rgba(34, 48, 63, 0.06);
        }
        .lqe-how .lqe-steps-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 20px;
          margin-top: 48px;
          position: relative;
        }
        .lqe-how .lqe-steps-grid::before {
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
          .lqe-how .lqe-steps-grid {
            grid-template-columns: repeat(2, 1fr);
          }
          .lqe-how .lqe-steps-grid::before { display: none; }
        }
        @media (max-width: 540px) {
          .lqe-how .lqe-steps-grid {
            grid-template-columns: 1fr;
          }
        }

        .lqe-how .lqe-step-card {
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
        .lqe-how .lqe-step-card:hover {
          transform: translateY(-5px);
          border-color: rgba(126,16,162,0.25);
          box-shadow: 0 24px 48px -20px rgba(126,16,162,0.28);
        }
        .lqe-how .lqe-step-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          width: 100%;
          margin-bottom: 14px;
        }
        .lqe-how .lqe-step-badge {
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
        .lqe-how .lqe-step-icon {
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
        .lqe-how .lqe-step-icon svg { width: 20px; height: 20px; }
        .lqe-how .lqe-step-title {
          font-family: var(--font-heading), sans-serif;
          font-size: 21px;
          font-weight: 600;
          color: #171717;
          margin: 0 0 8px;
          letter-spacing: -0.01em;
          line-height: 1.3;
        }
        .lqe-how .lqe-step-copy {
          font-size: 14.5px;
          line-height: 1.6;
          color: rgba(23,23,23,0.62);
          margin: 0 0 auto;
        }
        .lqe-how .lqe-step-stat {
          display: flex;
          align-items: center;
          gap: 8px;
          margin-top: 18px;
          padding-top: 14px;
          border-top: 1px dashed rgba(126,16,162,0.15);
          width: 100%;
        }
        .lqe-how .lqe-step-stat b {
          font-family: var(--font-heading), sans-serif;
          font-size: 17px;
          font-weight: 700;
          color: #7e10a2;
        }
        .lqe-how .lqe-step-stat span {
          font-size: 11.5px;
          color: rgba(23,23,23,0.5);
          text-transform: uppercase;
          letter-spacing: 0.08em;
        }

        .lqe-faq .nautix-section-title-focus {
          background: #e2fe5e;
          color: #22303f;
          box-shadow: inset 0 0 0 1px rgba(34, 48, 63, 0.06);
        }
        .lqe-faq .he-faq-item {
          border-top: 1px solid rgba(23,23,23,0.08);
          padding: 18px 0;
        }
        .lqe-faq .he-faq-item:last-child {
          border-bottom: 1px solid rgba(23,23,23,0.08);
        }
        .lqe-faq .he-faq-button {
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
        .lqe-faq .he-faq-chevron {
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
        .lqe-faq .he-faq-item[data-open="true"] .he-faq-chevron {
          transform: rotate(45deg);
          background: #7e10a2;
          color: #fff;
        }
        .lqe-faq .he-faq-body {
          overflow: hidden;
          max-height: 0;
          transition: max-height 0.35s ease;
        }
        .lqe-faq .he-faq-item[data-open="true"] .he-faq-body {
          max-height: 400px;
        }
        .lqe-faq .he-faq-body p {
          margin: 10px 0 0;
          color: rgba(23,23,23,0.72);
          font-size: 16px;
          line-height: 1.6;
        }

        .lqe-problem .nautix-section-title-line {
          max-width: none;
          white-space: nowrap;
        }
        .lqe-problem .nautix-section-title-focus,
        .lqe-industry .nautix-section-title-focus {
          background: #e2fe5e;
          color: #22303f;
          box-shadow: inset 0 0 0 1px rgba(34, 48, 63, 0.06);
        }
        .lqe-industry .nautix-section-title-line {
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

              {/* Customer */}
              <div className="w-full max-w-[420px] rounded-2xl border border-black/10 bg-white shadow-sm p-4">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center text-white text-xs font-bold">
                    C
                  </div>
                  <span className="text-xs font-semibold text-foreground/60">Customer</span>
                  <span className="ml-auto text-[10px] text-foreground/40">09:14 AM</span>
                </div>
                <div className="rounded-lg bg-gray-50 border border-gray-100 p-3">
                  <p className="text-xs text-foreground/70 m-0">I&apos;m interested in your fibre packages. How much per month and do you cover Westlands?</p>
                </div>
                <div className="mt-2 flex items-center gap-1.5 text-[10px] text-amber-600">
                  <span className="inline-block w-2 h-2 rounded-full bg-amber-400" />
                  Raw inquiry — unqualified
                </div>
              </div>

              {/* Nautix Qualification */}
              <div className="w-full max-w-[420px] rounded-2xl border border-green-300 bg-green-50/40 shadow-sm p-4">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center text-white text-xs font-bold">
                    N
                  </div>
                  <span className="text-xs font-semibold text-primary">Nautix Qualification</span>
                  <span className="ml-auto text-[10px] text-foreground/40">09:16 AM</span>
                </div>
                <div className="rounded-lg bg-white border border-primary/10 p-3 space-y-2">
                  <div className="flex items-center gap-2">
                    <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center">
                      <svg width="11" height="11" viewBox="0 0 24 24" fill="none"><path d="M20 6L9 17l-5-5" stroke="#16a34a" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/></svg>
                    </div>
                    <p className="text-xs text-foreground/80 m-0">Location: Westlands — serviceable</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center">
                      <svg width="11" height="11" viewBox="0 0 24 24" fill="none"><path d="M20 6L9 17l-5-5" stroke="#16a34a" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/></svg>
                    </div>
                    <p className="text-xs text-foreground/80 m-0">Budget &amp; timeline confirmed</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center">
                      <svg width="11" height="11" viewBox="0 0 24 24" fill="none"><path d="M20 6L9 17l-5-5" stroke="#16a34a" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/></svg>
                    </div>
                    <p className="text-xs text-foreground/80 m-0">Lead score: 85 — routed to sales</p>
                  </div>
                </div>
                <div className="mt-2 flex items-center gap-1.5 text-[10px] text-green-600">
                  <span className="inline-block w-2 h-2 rounded-full bg-green-500" />
                  Qualified &amp; routed — 2 min
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
      <section className="lqe-problem reveal-section py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="nautix-section-title mb-0">
              <span className="nautix-section-title-line">Your team is drowning</span>
              <span className="nautix-section-title-focus">in unqualified inquiries.</span>
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
      <section id="how-it-works" className="lqe-how reveal-section py-20 lg:py-28">
        <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 24px" }}>
          <div className="nautix-pillars-head" style={{ textAlign: "center" }}>
            <h2 className="nautix-section-title mb-0">
              {renderHeading(D.howItWorks.heading)}
            </h2>
            <p style={{ fontSize: 16, color: "rgba(23,23,23,0.68)", margin: "12px 0 0", maxWidth: 620, marginInline: "auto" }}>
              {D.howItWorks.subhead}
            </p>
          </div>
          <div className="lqe-steps-grid">
            {D.howItWorks.steps.map((s) => (
              <article key={s.stepNumber} className="lqe-step-card">
                <span className="lqe-step-icon" aria-hidden="true">
                  <StepIcon kind={s.kind} />
                </span>
                <div className="lqe-step-header">
                  <span className="lqe-step-badge">Step {s.stepNumber}</span>
                </div>
                <h3 className="lqe-step-title">{s.title}</h3>
                <p className="lqe-step-copy">{s.detail}</p>
                <div className="lqe-step-stat">
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
            <span className="px-1" style={{ color: "#16404B", backgroundColor: "#E2FF5E" }}>the qualification engine</span>{" "}
            does
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {D.capabilities.cards.map((c) => (
              <article key={c.title} className="bg-white border border-white/20 rounded-2xl p-6 hover:border-white/40 hover:shadow-lg transition-all duration-300">
                <div
                  style={{
                    width: 48,
                    height: 48,
                    borderRadius: 12,
                    background: "rgba(126,16,162,0.08)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: 16,
                    color: "#7e10a2",
                  }}
                >
                  <CapabilityIcon kind={c.kind} />
                </div>
                <h3 className="font-[var(--font-heading)] font-bold text-lg text-foreground mb-2">{c.title}</h3>
                <p className="font-[var(--font-sans)] text-sm text-foreground/70 leading-relaxed">{c.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* INDUSTRY TABLE */}
      <section className="lqe-industry reveal-section py-20 lg:py-28 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="nautix-section-title mb-0">
              <span className="nautix-section-title-line">Qualified leads</span>
              <span className="nautix-section-title-focus">for every kind of sale.</span>
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
              Give your team only the leads
              <br />
              <span className="nautix-final-cta-focus">worth their time.</span>
            </h2>
            <p className="nautix-final-cta-copy mb-0">
              See how the lead qualification engine asks, scores, and routes every inquiry — so your team focuses on closing, not chasing.
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
            <a href="/product/ai-resolution" className="text-sm text-primary hover:text-primary-700 transition-colors underline underline-offset-4">
              Instant Auto-Response
            </a>
            <span className="text-foreground/20">·</span>
            <a href="/product/ai-resolution" className="text-sm text-primary hover:text-primary-700 transition-colors underline underline-offset-4">
              Nurture Sequence
            </a>
            <span className="text-foreground/20">·</span>
            <a href="/product/comment-monitoring" className="text-sm text-primary hover:text-primary-700 transition-colors underline underline-offset-4">
              Comment Monitoring
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
