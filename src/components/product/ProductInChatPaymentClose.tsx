"use client";

import { useEffect, useState } from "react";
import type { LandingPageData } from "@/lib/seo-pages";
import { PAGE_DATA } from "@/lib/in-chat-payment-close-data";
import { buildFaqSchema } from "@/lib/seo";
import { Counter } from "@/components/ui/Counter";
import { JsonLd } from "@/components/seo/JsonLd";

interface ProductInChatPaymentCloseProps {
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
      {/* Customer intent card */}
      <div className="w-full rounded-2xl border border-black/10 bg-white shadow-sm p-4">
        <div className="flex items-center gap-2 mb-3">
          <div className="w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center text-white text-xs font-bold">
            C
          </div>
          <span className="text-xs font-semibold text-foreground/60">Customer</span>
          <span className="ml-auto text-[10px] text-foreground/40">02:15 PM</span>
        </div>
        <div className="rounded-lg bg-gray-50 border border-gray-100 p-3">
          <p className="text-xs text-foreground/70 m-0">Yes, I'll take it. How do I pay?</p>
        </div>
        <div className="mt-2 flex items-center gap-1.5 text-[10px] text-green-600">
          <span className="inline-block w-2 h-2 rounded-full bg-green-500" />
          Ready to buy — payment moment
        </div>
      </div>

      {/* Arrow down */}
      <div className="relative h-8 w-full">
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 32" fill="none" aria-hidden="true">
          <path d="M160 4 Q200 28 240 4" stroke="url(#g-icpc-1)" strokeWidth="1.5" fill="none" strokeDasharray="4 3" />
          <defs>
            <linearGradient id="g-icpc-1" x1="0" y1="0" x2="0" y2="32">
              <stop offset="0%" stopColor="#7C3AED" stopOpacity="0.1" />
              <stop offset="100%" stopColor="#7C3AED" stopOpacity="0.5" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Payment request card */}
      <div className="w-full rounded-2xl border border-primary/20 bg-primary/5 shadow-sm p-4">
        <div className="flex items-center gap-2 mb-3">
          <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center text-white text-xs font-bold">
            N
          </div>
          <span className="text-xs font-semibold text-primary">Nautix Payment</span>
          <span className="ml-auto text-[10px] text-foreground/40">02:15 PM</span>
        </div>
        <div className="rounded-lg bg-white border border-primary/10 p-3 space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-[11px] text-foreground/60">Amount</span>
            <span className="text-sm font-bold text-foreground">KSh 4,999</span>
          </div>
          <div className="h-px bg-primary/10" />
          <div className="rounded-lg bg-green-50 border border-green-200 p-2.5 flex items-center gap-2">
            <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
              <svg width="10" height="10" viewBox="0 0 24 24" fill="none"><path d="M20 6L9 17l-5-5" stroke="#16a34a" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </div>
            <span className="text-[11px] font-semibold text-green-700">Pay via M-Pesa</span>
          </div>
          <p className="text-[10px] text-foreground/50 text-center m-0">No redirect. Pay right here in the chat.</p>
        </div>
      </div>

      {/* Arrow down */}
      <div className="relative h-8 w-full">
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 32" fill="none" aria-hidden="true">
          <path d="M160 4 Q200 28 240 4" stroke="url(#g-icpc-2)" strokeWidth="1.5" fill="none" strokeDasharray="4 3" />
          <defs>
            <linearGradient id="g-icpc-2" x1="0" y1="0" x2="0" y2="32">
              <stop offset="0%" stopColor="#16a34a" stopOpacity="0.1" />
              <stop offset="100%" stopColor="#16a34a" stopOpacity="0.5" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Confirmed card */}
      <div className="w-full rounded-2xl border border-green-300 bg-green-50/40 shadow-sm p-4">
        <div className="flex items-center gap-2 mb-3">
          <div className="w-8 h-8 rounded-lg bg-green-500 flex items-center justify-center text-white text-xs font-bold">
            N
          </div>
          <span className="text-xs font-semibold text-green-700">Nautix</span>
          <span className="ml-auto text-[10px] text-foreground/40">02:16 PM</span>
        </div>
        <div className="rounded-lg bg-white border border-green-200 p-3 space-y-2">
          <div className="flex items-center gap-2">
            <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center">
              <svg width="11" height="11" viewBox="0 0 24 24" fill="none"><path d="M20 6L9 17l-5-5" stroke="#16a34a" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </div>
            <p className="text-xs text-foreground/80 m-0">KSh 4,999 received</p>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center">
              <svg width="11" height="11" viewBox="0 0 24 24" fill="none"><path d="M20 6L9 17l-5-5" stroke="#16a34a" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </div>
            <p className="text-xs text-foreground/80 m-0">Sale confirmed</p>
          </div>
        </div>
        <div className="mt-2 flex items-center gap-1.5 text-[10px] text-green-600">
          <span className="inline-block w-2 h-2 rounded-full bg-green-500" />
          Paid & confirmed — in seconds
        </div>
      </div>
    </div>
  );
}

function ProblemIcon({ kind }: { kind: string }) {
  if (kind === "redirect") {
    return (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: 26, height: 26 }}>
        <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07L12.5 4.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07L11.5 19.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" opacity="0.35" />
        <path d="M18 18l5 5M6 6l-5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.35" />
      </svg>
    );
  }
  if (kind === "hesitation") {
    return (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: 26, height: 26 }}>
        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5" />
        <path d="M12 6v6l4 2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M4 4l16 16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.4" />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: 26, height: 26 }}>
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M8 9h8M8 13h6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.4" />
      <path d="M16 7l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.5" />
    </svg>
  );
}

function StepIcon({ kind }: { kind: string }) {
  if (kind === "intent") {
    return (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M7 11.5a4.5 4.5 0 0 1 4.5-4.5h1a4.5 4.5 0 0 1 4.5 4.5V17a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1v-5.5z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M12 3v2M16 5l-1.5 2.5M8 5l1.5 2.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }
  if (kind === "request") {
    return (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="2" y="4" width="20" height="16" rx="3" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M2 10h20" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        <path d="M7 15h3M7 18h5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.5" />
      </svg>
    );
  }
  if (kind === "mpesa") {
    return (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="4" y="2" width="16" height="20" rx="3" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M7 12h10M12 7v10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="12" cy="12" r="1.5" fill="currentColor" />
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

function CapabilityIcon({ kind }: { kind: string }) {
  const size = 26;
  if (kind === "chat") {
    return (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: size, height: size }}>
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M8 9h8M8 13h6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    );
  }
  if (kind === "mobile") {
    return (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: size, height: size }}>
        <rect x="5" y="2" width="14" height="20" rx="2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M12 18h.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <path d="M8 5h8v12H8V5z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.45" />
        <path d="M9 7l2 2-2 2M12 7l2 2-2 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }
  if (kind === "instant") {
    return (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: size, height: size }}>
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }
  if (kind === "target") {
    return (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: size, height: size }}>
        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.8" />
        <circle cx="12" cy="12" r="6" stroke="currentColor" strokeWidth="1.8" />
        <circle cx="12" cy="12" r="2" stroke="currentColor" strokeWidth="1.8" fill="currentColor" fillOpacity="0.15" />
        <path d="M12 2v4M12 18v4M2 12h4M18 12h4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.5" />
      </svg>
    );
  }
  if (kind === "receipt") {
    return (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: size, height: size }}>
        <path d="M4 2h16v20l-3.5-2.5L13 22l-3.5-2.5L6 22V2z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M8 7h8M8 11h8M8 15h5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.5" />
        <circle cx="17" cy="15" r="2" stroke="currentColor" strokeWidth="1.5" fill="currentColor" fillOpacity="0.15" />
        <path d="M15.5 13.5l3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    );
  }
  if (kind === "secure") {
    return (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: size, height: size }}>
        <rect x="5" y="11" width="14" height="11" rx="2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M8 11V7a4 4 0 0 1 8 0v4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="12" cy="16" r="1" fill="currentColor" />
        <path d="M12 16v2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: size, height: size }}>
      <path d="M12 2l1 3h3l-2.5 2 1 3L12 8.5 9.5 10l1-3L8 5h3l1-3z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M12 22V10M3 14l9-4 9 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" opacity="0.45" />
    </svg>
  );
}

function FaqSection() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="icpc-faq reveal-section" style={{ maxWidth: 880, margin: "0 auto", padding: "40px 24px 60px" }}>
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

export function ProductInChatPaymentClose({ data }: ProductInChatPaymentCloseProps) {
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

        .icpc-how .nautix-section-title-line {
          max-width: none;
          white-space: nowrap;
        }
        .icpc-how .nautix-section-title-focus {
          background: #e2fe5e;
          color: #22303f;
          box-shadow: inset 0 0 0 1px rgba(34, 48, 63, 0.06);
        }
        .icpc-how .icpc-steps-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 20px;
          margin-top: 48px;
          position: relative;
        }
        .icpc-how .icpc-steps-grid::before {
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
          .icpc-how .icpc-steps-grid {
            grid-template-columns: repeat(2, 1fr);
          }
          .icpc-how .icpc-steps-grid::before { display: none; }
        }
        @media (max-width: 540px) {
          .icpc-how .icpc-steps-grid {
            grid-template-columns: 1fr;
          }
        }

        .icpc-how .icpc-step-card {
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
        .icpc-how .icpc-step-card:hover {
          transform: translateY(-5px);
          border-color: rgba(126,16,162,0.25);
          box-shadow: 0 24px 48px -20px rgba(126,16,162,0.28);
        }
        .icpc-how .icpc-step-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          width: 100%;
          margin-bottom: 14px;
        }
        .icpc-how .icpc-step-badge {
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
        .icpc-how .icpc-step-icon {
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
        .icpc-how .icpc-step-icon svg { width: 20px; height: 20px; }
        .icpc-how .icpc-step-title {
          font-family: var(--font-heading), sans-serif;
          font-size: 21px;
          font-weight: 600;
          color: #171717;
          margin: 0 0 8px;
          letter-spacing: -0.01em;
          line-height: 1.3;
        }
        .icpc-how .icpc-step-copy {
          font-size: 14.5px;
          line-height: 1.6;
          color: rgba(23,23,23,0.62);
          margin: 0 0 auto;
        }
        .icpc-how .icpc-step-stat {
          display: flex;
          align-items: center;
          gap: 8px;
          margin-top: 18px;
          padding-top: 14px;
          border-top: 1px dashed rgba(126,16,162,0.15);
          width: 100%;
        }
        .icpc-how .icpc-step-stat b {
          font-family: var(--font-heading), sans-serif;
          font-size: 17px;
          font-weight: 700;
          color: #7e10a2;
        }
        .icpc-how .icpc-step-stat span {
          font-size: 11.5px;
          color: rgba(23,23,23,0.5);
          text-transform: uppercase;
          letter-spacing: 0.08em;
        }

        .icpc-faq .nautix-section-title-focus {
          background: #e2fe5e;
          color: #22303f;
          box-shadow: inset 0 0 0 1px rgba(34, 48, 63, 0.06);
        }
        .icpc-faq .he-faq-item {
          border-top: 1px solid rgba(23,23,23,0.08);
          padding: 18px 0;
        }
        .icpc-faq .he-faq-item:last-child {
          border-bottom: 1px solid rgba(23,23,23,0.08);
        }
        .icpc-faq .he-faq-button {
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
        .icpc-faq .he-faq-chevron {
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
        .icpc-faq .he-faq-item[data-open="true"] .he-faq-chevron {
          transform: rotate(45deg);
          background: #7e10a2;
          color: #fff;
        }
        .icpc-faq .he-faq-body {
          overflow: hidden;
          max-height: 0;
          transition: max-height 0.35s ease;
        }
        .icpc-faq .he-faq-item[data-open="true"] .he-faq-body {
          max-height: 400px;
        }
        .icpc-faq .he-faq-body p {
          margin: 10px 0 0;
          color: rgba(23,23,23,0.72);
          font-size: 16px;
          line-height: 1.6;
        }

        .icpc-problem .nautix-section-title-line {
          max-width: none;
          white-space: nowrap;
        }
        .icpc-problem .nautix-section-title-focus,
        .icpc-industry .nautix-section-title-focus {
          background: #e2fe5e;
          color: #22303f;
          box-shadow: inset 0 0 0 1px rgba(34, 48, 63, 0.06);
        }
        .icpc-industry .nautix-section-title-line {
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
      <section className="icpc-problem reveal-section py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="nautix-section-title mb-0">
              <span className="nautix-section-title-line">Every step between 'yes' and 'paid'</span>
              <span className="nautix-section-title-focus">loses customers.</span>
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
      <section id="how-it-works" className="icpc-how reveal-section py-20 lg:py-28">
        <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 24px" }}>
          <div className="nautix-pillars-head" style={{ textAlign: "center" }}>
            <h2 className="nautix-section-title mb-0">
              {renderHeading(D.howItWorks.heading)}
            </h2>
            <p style={{ fontSize: 16, color: "rgba(23,23,23,0.68)", margin: "12px 0 0", maxWidth: 620, marginInline: "auto" }}>
              {D.howItWorks.subhead}
            </p>
          </div>
          <div className="icpc-steps-grid">
            {D.howItWorks.steps.map((s) => (
              <article key={s.stepNumber} className="icpc-step-card">
                <span className="icpc-step-icon" aria-hidden="true">
                  <StepIcon kind={s.kind} />
                </span>
                <div className="icpc-step-header">
                  <span className="icpc-step-badge">Step {s.stepNumber}</span>
                </div>
                <h3 className="icpc-step-title">{s.title}</h3>
                <p className="icpc-step-copy">{s.detail}</p>
                <div className="icpc-step-stat">
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
            <span className="px-1" style={{ color: "#16404B", backgroundColor: "#E2FF5E" }}>in-chat closing</span>{" "}
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
      <section className="icpc-industry reveal-section py-20 lg:py-28 bg-white">
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
              Close the sale
              <br />
              <span className="nautix-final-cta-focus">where it happens.</span>
            </h2>
            <p className="nautix-final-cta-copy mb-0">
              See how in-chat payment close turns 'I'll take it' into 'paid and confirmed' — without ever leaving the conversation.
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
            <a href="/product/in-conversation-payments" className="text-sm text-primary hover:text-primary-700 transition-colors underline underline-offset-4">
              In-Conversation Payments
            </a>
            <span className="text-foreground/20">·</span>
            <a href="/product/full-payment-loop" className="text-sm text-primary hover:text-primary-700 transition-colors underline underline-offset-4">
              Full Payment Loop
            </a>
            <span className="text-foreground/20">·</span>
            <a href="/product/lead-qualification-engine" className="text-sm text-primary hover:text-primary-700 transition-colors underline underline-offset-4">
              Lead Qualification Engine
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
