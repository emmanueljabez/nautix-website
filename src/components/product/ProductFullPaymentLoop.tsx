"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import type { LandingPageData } from "@/lib/seo-pages";
import { PAGE_DATA } from "@/lib/full-payment-loop-data";
import { buildFaqSchema } from "@/lib/seo";
import { Counter } from "@/components/ui/Counter";
import { JsonLd } from "@/components/seo/JsonLd";

interface ProductFullPaymentLoopProps {
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
  const loopSteps = [
    { label: "Request", icon: "📤", color: "#7e10a2" },
    { label: "Collect", icon: "💳", color: "#b52ed1" },
    { label: "Verify", icon: "✅", color: "#7e10a2" },
    { label: "Reconcile", icon: "🔗", color: "#b52ed1" },
    { label: "Record", icon: "📚", color: "#651082" },
  ];

  return (
    <div className="relative flex flex-col items-center w-full max-w-[520px] mx-auto lg:mx-0">
      {/* Loop visual */}
      <div className="relative w-full aspect-square max-w-[420px]">
        {/* Dashed circle track */}
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 200 200" fill="none" aria-hidden="true">
          <circle cx="100" cy="100" r="80" stroke="url(#fpl-track)" strokeWidth="1.5" strokeDasharray="6 5" fill="none" />
          <defs>
            <linearGradient id="fpl-track" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#7e10a2" stopOpacity="0.15" />
              <stop offset="35%" stopColor="#b52ed1" stopOpacity="0.3" />
              <stop offset="65%" stopColor="#b52ed1" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#7e10a2" stopOpacity="0.15" />
            </linearGradient>
          </defs>
        </svg>

        {/* Animated progress arc */}
        <svg className="absolute inset-0 w-full h-full animate-[fpl-spin_8s_linear_infinite]" viewBox="0 0 200 200" fill="none" aria-hidden="true">
          <circle cx="100" cy="100" r="80" stroke="url(#fpl-progress)" strokeWidth="2.5" strokeLinecap="round" strokeDasharray="100 400" fill="none" />
          <defs>
            <linearGradient id="fpl-progress" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#7e10a2" />
              <stop offset="50%" stopColor="#b52ed1" />
              <stop offset="100%" stopColor="#b52ed1" />
            </linearGradient>
          </defs>
        </svg>

        {/* Center badge */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 rounded-full bg-gradient-to-br from-[#7e10a2] to-[#651082] flex flex-col items-center justify-center shadow-lg shadow-purple-500/25 z-10">
          <span className="text-[10px] font-bold text-white/70 tracking-wider uppercase">Closed</span>
          <span className="text-[11px] font-bold text-white leading-tight">Loop</span>
        </div>

        {/* Step nodes around the circle */}
        {loopSteps.map((step, i) => {
          const angle = i * (360 / loopSteps.length) - 90;
          const rad = (angle * Math.PI) / 180;
          const radius = 38;
          const cx = 50 + radius * Math.cos(rad);
          const cy = 50 + radius * Math.sin(rad);

          return (
            <div
              key={step.label}
              className="absolute flex flex-col items-center gap-0.5 z-10"
              style={{
                left: `${cx}%`,
                top: `${cy}%`,
                transform: "translate(-50%, -50%)",
              }}
            >
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center text-sm shadow-md border-2 border-white"
                style={{ background: step.color }}
              >
                <span style={{ fontSize: 14 }}>{step.icon}</span>
              </div>
              <span className="text-[10px] font-semibold text-foreground/70 tracking-wide">
                {step.label}
              </span>
            </div>
          );
        })}

        {/* Connecting arrows between nodes (simplified as small arrows) */}
        {loopSteps.map((_, i) => {
          const fromAngle = i * (360 / loopSteps.length) - 90;
          const toAngle = ((i + 1) % loopSteps.length) * (360 / loopSteps.length) - 90;
          const midAngle = (fromAngle + toAngle) / 2;
          const rad = (midAngle * Math.PI) / 180;
          const arrowRadius = 42;
          const ax = 50 + arrowRadius * Math.cos(rad);
          const ay = 50 + arrowRadius * Math.sin(rad);

          return (
            <div
              key={`arrow-${i}`}
              className="absolute text-[9px]"
              style={{
                left: `${ax}%`,
                top: `${ay}%`,
                transform: "translate(-50%, -50%)",
                color: "rgba(126,16,162,0.3)",
              }}
            >
              ›
            </div>
          );
        })}
      </div>

      {/* Loop status summary */}
      <div className="mt-4 flex items-center gap-3 px-4 py-2.5 rounded-full border border-primary/15 bg-primary/[0.03]">
        <span className="inline-block w-2 h-2 rounded-full bg-green-500 animate-pulse" />
        <span className="text-[12px] font-semibold text-primary">
          Every stage automated — no manual gaps
        </span>
      </div>
    </div>
  );
}

function ProblemIcon({ kind }: { kind: string }) {
  if (kind === "manual") {
    return (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: 26, height: 26 }}>
        <path d="M20 7l-3-3-8 8-4 4 3 3 4-4 8-8z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M9 15l-3 3M13 11l-2 2M17 7l-2 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.4" />
        <circle cx="7" cy="17" r="1" fill="currentColor" opacity="0.3" />
        <circle cx="17" cy="7" r="1" fill="currentColor" opacity="0.3" />
      </svg>
    );
  }
  if (kind === "hours") {
    return (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: 26, height: 26 }}>
        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.8" />
        <path d="M12 6v6l4 2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M12 4v2M12 18v2M4 12h2M18 12h2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.35" />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: 26, height: 26 }}>
      <path d="M12 2l1 3h3l-2.5 2 1 3L12 8.5 9.5 10l1-3L8 5h3l1-3z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M3 14l9-4 9 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" opacity="0.45" />
      <path d="M21 18l-9-4-9 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" opacity="0.2" />
      <path d="M12 10v12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeDasharray="2 2" opacity="0.35" />
    </svg>
  );
}

function StepIcon({ kind }: { kind: string }) {
  if (kind === "request") {
    return (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="3" y="5" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M3 10h18" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        <path d="M7 15h3M7 18h5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.5" />
      </svg>
    );
  }
  if (kind === "collect") {
    return (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="4" y="2" width="16" height="20" rx="3" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M7 12h10M12 7v10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="12" cy="12" r="1.5" fill="currentColor" />
      </svg>
    );
  }
  if (kind === "verify") {
    return (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M22 4L12 14.01l-3-3" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.8" />
      <path d="M8 12h8M12 8v8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M16 6l-4 4-4-4M16 18l-4-4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.4" />
    </svg>
  );
}

function CapabilityIcon({ kind }: { kind: string }) {
  const size = 26;
  if (kind === "request") {
    return (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: size, height: size }}>
        <path d="M13 3h8v8l-4-4-4-4z" fill="currentColor" fillOpacity="0.7" />
        <path d="M8 8h8v8l-4-4-4-4z" fill="currentColor" />
        <path d="M3 13h8v8l-4-4-4-4z" fill="currentColor" fillOpacity="0.7" />
      </svg>
    );
  }
  if (kind === "verify") {
    return (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: size, height: size }}>
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M22 4L12 14.01l-3-3" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }
  if (kind === "reconcile") {
    return (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: size, height: size }}>
        <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07L12.5 4.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07L11.5 19.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }
  if (kind === "records") {
    return (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: size, height: size }}>
        <path d="M4 2h16v20l-3.5-2.5L13 22l-3.5-2.5L6 22V2z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M8 7h8M8 11h8M8 15h5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.5" />
        <path d="M8 2v3M16 2v3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.35" />
      </svg>
    );
  }
  if (kind === "exceptions") {
    return (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: size, height: size }}>
        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.8" />
        <path d="M12 8v4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        <circle cx="12" cy="16" r="1" fill="currentColor" />
        <path d="M4 4l16 16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.25" />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: size, height: size }}>
      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="12" cy="12" r="6" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="12" cy="12" r="2" stroke="currentColor" strokeWidth="1.8" fill="currentColor" fillOpacity="0.15" />
      <path d="M12 2v4M12 18v4M2 12h4M18 12h4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.5" />
    </svg>
  );
}

function FaqSection() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="fpl-faq reveal-section" style={{ maxWidth: 880, margin: "0 auto", padding: "40px 24px 60px" }}>
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
  if (value.endsWith("%")) {
    const num = Number.parseFloat(value);
    if (Number.isNaN(num)) return null;
    return { target: num, suffix: "%" };
  }
  const match = value.match(/^([\d.]+)\s*(.+)$/);
  if (match) return { target: Number.parseFloat(match[1]), suffix: ` ${match[2]}` };
  return null;
}

export function ProductFullPaymentLoop({ data: _data }: ProductFullPaymentLoopProps) {
  useScrollReveal();

  return (
    <div className="min-h-screen bg-white">
      <style>{`
        @keyframes reveal-fade-up {
          from { opacity: 0; transform: translateY(18px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        @keyframes fpl-spin {
          from { transform: rotate(0deg); }
          to   { transform: rotate(360deg); }
        }

        .reveal-section {
          opacity: 0;
        }
        .reveal-section.is-visible {
          animation: reveal-fade-up 0.75s cubic-bezier(.22,.61,.36,1) forwards;
        }

        .fpl-how .nautix-section-title-line {
          max-width: none;
          white-space: nowrap;
        }
        .fpl-how .nautix-section-title-focus {
          background: #e2fe5e;
          color: #22303f;
          box-shadow: inset 0 0 0 1px rgba(34, 48, 63, 0.06);
        }
        .fpl-how .fpl-steps-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 20px;
          margin-top: 48px;
          position: relative;
        }
        .fpl-how .fpl-steps-grid::before {
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
          .fpl-how .fpl-steps-grid {
            grid-template-columns: repeat(2, 1fr);
          }
          .fpl-how .fpl-steps-grid::before { display: none; }
        }
        @media (max-width: 540px) {
          .fpl-how .fpl-steps-grid {
            grid-template-columns: 1fr;
          }
        }

        .fpl-how .fpl-step-card {
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
        .fpl-how .fpl-step-card:hover {
          transform: translateY(-5px);
          border-color: rgba(126,16,162,0.25);
          box-shadow: 0 24px 48px -20px rgba(126,16,162,0.28);
        }
        .fpl-how .fpl-step-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          width: 100%;
          margin-bottom: 14px;
        }
        .fpl-how .fpl-step-badge {
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
        .fpl-how .fpl-step-icon {
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
        .fpl-how .fpl-step-icon svg { width: 20px; height: 20px; }
        .fpl-how .fpl-step-title {
          font-family: var(--font-heading), sans-serif;
          font-size: 21px;
          font-weight: 600;
          color: #171717;
          margin: 0 0 8px;
          letter-spacing: -0.01em;
          line-height: 1.3;
        }
        .fpl-how .fpl-step-copy {
          font-size: 14.5px;
          line-height: 1.6;
          color: rgba(23,23,23,0.62);
          margin: 0 0 auto;
        }
        .fpl-how .fpl-step-stat {
          display: flex;
          align-items: center;
          gap: 8px;
          margin-top: 18px;
          padding-top: 14px;
          border-top: 1px dashed rgba(126,16,162,0.15);
          width: 100%;
        }
        .fpl-how .fpl-step-stat b {
          font-family: var(--font-heading), sans-serif;
          font-size: 17px;
          font-weight: 700;
          color: #7e10a2;
        }
        .fpl-how .fpl-step-stat span {
          font-size: 11.5px;
          color: rgba(23,23,23,0.5);
          text-transform: uppercase;
          letter-spacing: 0.08em;
        }

        .fpl-faq .nautix-section-title-focus {
          background: #e2fe5e;
          color: #22303f;
          box-shadow: inset 0 0 0 1px rgba(34, 48, 63, 0.06);
        }
        .fpl-faq .he-faq-item {
          border-top: 1px solid rgba(23,23,23,0.08);
          padding: 18px 0;
        }
        .fpl-faq .he-faq-item:last-child {
          border-bottom: 1px solid rgba(23,23,23,0.08);
        }
        .fpl-faq .he-faq-button {
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
        .fpl-faq .he-faq-chevron {
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
        .fpl-faq .he-faq-item[data-open="true"] .he-faq-chevron {
          transform: rotate(45deg);
          background: #7e10a2;
          color: #fff;
        }
        .fpl-faq .he-faq-body {
          overflow: hidden;
          max-height: 0;
          transition: max-height 0.35s ease;
        }
        .fpl-faq .he-faq-item[data-open="true"] .he-faq-body {
          max-height: 400px;
        }
        .fpl-faq .he-faq-body p {
          margin: 10px 0 0;
          color: rgba(23,23,23,0.72);
          font-size: 16px;
          line-height: 1.6;
        }

        .fpl-problem .nautix-section-title-line {
          max-width: none;
          white-space: nowrap;
        }
        .fpl-problem .nautix-section-title-focus,
        .fpl-industry .nautix-section-title-focus {
          background: #e2fe5e;
          color: #22303f;
          box-shadow: inset 0 0 0 1px rgba(34, 48, 63, 0.06);
        }
        .fpl-industry .nautix-section-title-line {
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

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="flex flex-col gap-6">
              <h1 className="font-[var(--font-heading)] font-bold text-4xl md:text-5xl lg:text-6xl tracking-[-0.04em] text-primary-950 leading-[1.05]">
                {D.hero.h1}
              </h1>
              <p className="font-[var(--font-sans)] text-lg text-foreground/70 leading-relaxed max-w-xl">
                {D.hero.subhead}
              </p>
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
      <section className="fpl-problem reveal-section py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="nautix-section-title mb-0">
              <span className="nautix-section-title-line">Collecting the money is only</span>
              <span className="nautix-section-title-focus">half the work.</span>
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
      <section id="how-it-works" className="fpl-how reveal-section py-20 lg:py-28">
        <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 24px" }}>
          <div className="nautix-pillars-head" style={{ textAlign: "center" }}>
            <h2 className="nautix-section-title mb-0">
              {renderHeading(D.howItWorks.heading)}
            </h2>
            <p style={{ fontSize: 16, color: "rgba(23,23,23,0.68)", margin: "12px 0 0", maxWidth: 620, marginInline: "auto" }}>
              {D.howItWorks.subhead}
            </p>
          </div>
          <div className="fpl-steps-grid">
            {D.howItWorks.steps.map((s) => (
              <article key={s.stepNumber} className="fpl-step-card">
                <span className="fpl-step-icon" aria-hidden="true">
                  <StepIcon kind={s.kind} />
                </span>
                <div className="fpl-step-header">
                  <span className="fpl-step-badge">Step {s.stepNumber}</span>
                </div>
                <h3 className="fpl-step-title">{s.title}</h3>
                <p className="fpl-step-copy">{s.detail}</p>
                <div className="fpl-step-stat">
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
            <span className="px-1" style={{ color: "#16404B", backgroundColor: "#E2FF5E" }}>the full loop</span>{" "}
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
      <section className="fpl-industry reveal-section py-20 lg:py-28 bg-white">
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
                  <div className="text-[clamp(48px,8vw,80px)] font-semibold leading-none tracking-[-0.04em] tabular-nums" style={{ fontFamily: "var(--font-heading), sans-serif", color: "#7e10a2" }}>
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
        <div className="nautix-final-cta-shell" style={{ background: "linear-gradient(145deg, #7e10a2 0%, #651082 54%, #2b1539 100%)", boxShadow: "0 32px 70px rgba(65,16,95,0.22)" }}>
          <img className="nautix-final-cta-decor nautix-final-cta-decor--left" src="/wp-content/uploads/2025/05/green-stars.svg" width={55} height={50} loading="lazy" alt="" aria-hidden="true" />
          <img className="nautix-final-cta-decor nautix-final-cta-decor--right" src="/wp-content/uploads/2025/05/green-star.svg" width={19} height={30} loading="lazy" alt="" aria-hidden="true" />
          <div className="nautix-final-cta-content" style={{ background: "linear-gradient(145deg, #7e10a2 0%, #651082 54%, #2b1539 100%)", borderRadius: "inherit" }}>
            <h2 className="nautix-final-cta-title mb-0">
              Turn money owed
              <br />
              <span className="nautix-final-cta-focus">into money accounted for.</span>
            </h2>
            <p className="nautix-final-cta-copy mb-0">
              See how the full payment loop runs from request to reconciliation automatically — with zero manual steps and no unmatched payments.
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
            <Link href="/product/in-chat-payment-close" className="text-sm text-primary hover:text-primary-700 transition-colors underline underline-offset-4">
              In-Conversation Payments
            </Link>
            <span className="text-foreground/20">·</span>
            <Link href="/product/full-payment-loop" className="text-sm text-primary hover:text-primary-700 transition-colors underline underline-offset-4">
              Full Payment Loop
            </Link>
            <span className="text-foreground/20">·</span>
            <Link href="/product/analytics" className="text-sm text-primary hover:text-primary-700 transition-colors underline underline-offset-4">
              Analytics &amp; Reporting
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
