"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import type { LandingPageData } from "@/lib/seo-pages";
import { PAGE_DATA } from "@/lib/comment-monitoring-data";
import { buildFaqSchema } from "@/lib/seo";
import { Counter } from "@/components/ui/Counter";
import { JsonLd } from "@/components/seo/JsonLd";

interface ProductCommentMonitoringProps {
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
      {/* ── Instagram post card ── */}
      <div className="w-full rounded-2xl border border-black/[0.06] bg-white shadow-sm overflow-hidden">
        {/*
          Header: avatar + username + Sponsored label + three-dot menu
        */}
        <div className="flex items-center px-4 py-[14px]">
          <div className="relative w-8 h-8 shrink-0 mr-3">
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#FCAF45] via-[#E4405F] to-[#833AB4]" />
            <div className="absolute inset-[2px] rounded-full bg-white flex items-center justify-center">
              <span className="text-[11px] font-bold text-[#262626]">I</span>
            </div>
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-1">
              <span className="text-[14px] font-semibold text-[#262626] leading-tight">Internet Service</span>
              <svg viewBox="0 0 24 24" className="w-[10px] h-[10px] fill-[#0095F6] shrink-0" aria-label="Verified"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m-2 15-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8z"/></svg>
            </div>
            <p className="text-[12px] text-[#8E8E8E] m-0 leading-none mt-[1px]">Sponsored</p>
          </div>
          <svg viewBox="0 0 24 24" className="w-6 h-6 fill-[#262626] shrink-0 -mr-1" aria-label="More options"><circle cx="12" cy="5" r="1.5"/><circle cx="12" cy="12" r="1.5"/><circle cx="12" cy="19" r="1.5"/></svg>
        </div>

        {/*
          Ad image
        */}
        <div className="w-full aspect-[16/9] overflow-hidden"><img src="/nautix-industries/faster-internet.jpg" alt="Faster internet ad creative" className="w-full h-full object-cover scale-125" /></div>

        {/* Action bar: like | comment | repost | share  ---  save */}
        <div className="flex items-center px-4 pt-3 pb-1">
          <div className="flex items-center gap-3">
            {/* Heart / Like */}
            <svg viewBox="0 0 24 24" className="w-5 h-5 fill-none stroke-[#262626] stroke-[1.5]" fill="none" aria-label="Like">
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
            </svg>
            {/* Comment bubble */}
            <img src="/nautix-partners/comment.png" alt="Comment" className="w-5 h-5" />
            {/* Repost / Reshare */}
            <img src="/nautix-partners/repost.png" alt="Repost" className="w-5 h-5" />
            {/* Share / Direct */}
            <img src="/nautix-partners/share.png" alt="Share" className="w-5 h-5" />
          </div>
          {/* Save / Bookmark */}
          <svg viewBox="0 0 24 24" className="w-5 h-5 ml-auto fill-none stroke-[#262626] stroke-[1.5]" fill="none" aria-label="Save">
            <path d="M17 3H7c-1.05 0-2 .95-2 2v16l7-4 7 4V5c0-1.05-.95-2-2-2z"/>
          </svg>
        </div>

        {/*
          Likes
        */}
        <div className="px-4 pt-1">
          <p className="text-[14px] font-semibold text-[#262626] m-0" style={{fontFamily:"-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif"}}>47 likes</p>
        </div>

        {/*
          Caption
        */}
        <div className="px-4 pt-[2px]">
          <p className="text-[14px] leading-[1.45] text-[#262626] m-0" style={{fontFamily:"-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif"}}>
            <span className="font-semibold">Internet Service</span> Need faster internet? We are rolling out fibre in your area. Check availability today.
          </p>
        </div>

        {/*
          Comments
        */}
        <div className="px-4 pt-[2px] space-y-0">
          <p className="text-[14px] text-[#262626] m-0 leading-[1.45]">
            <span className="font-semibold" style={{fontFamily:"-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif"}}>John</span> Do you cover my area?
          </p>
          <p className="text-[14px] text-[#262626] m-0 leading-[1.45]">
            <span className="font-semibold" style={{fontFamily:"-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif"}}>Mary</span> How much per month?
          </p>
        </div>

        {/*
          Timestamp
        */}
        <div className="px-4 pb-3 pt-[2px]">
          <p className="text-[11px] tracking-[.03em] text-[#8E8E8E] m-0 leading-tight">1 hour ago</p>
        </div>
      </div>

      {/* Connection arrows */}
      <div className="relative h-10 w-full">
        <svg
          className="absolute inset-0 w-full h-full"
          viewBox="0 0 400 40"
          fill="none"
          aria-hidden="true"
        >
          <path
            d="M80 0 Q160 20 240 0 Q320 -20 360 10"
            stroke="url(#g-cm)"
            strokeWidth="1.5"
            fill="none"
            strokeDasharray="4 3"
          />
          <defs>
            <linearGradient id="g-cm" x1="0" y1="0" x2="400" y2="0">
              <stop offset="0%" stopColor="#7C3AED" stopOpacity="0.1" />
              <stop offset="50%" stopColor="#7C3AED" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#7C3AED" stopOpacity="0.1" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Nautix response card */}
      <div className="w-full rounded-2xl border border-primary/20 bg-primary/[0.03] shadow-sm p-4">
        <div className="flex items-center gap-2 mb-2">
          <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center text-white text-xs font-bold">
            N
          </div>
          <span className="text-xs font-semibold text-primary">
            Nautix Auto-Reply
          </span>
          <span className="ml-auto text-[10px] text-foreground/40">
            Just now
          </span>
        </div>
        <div className="flex gap-2 items-start">
          <div className="w-5 h-5 rounded-full bg-green-100 flex-shrink-0 flex items-center justify-center text-[8px] font-bold text-green-700">
            J
          </div>
          <div className="flex-1">
            <p className="text-xs text-foreground/70 m-0">
              @John Thanks for asking! We do cover most areas in Nairobi. I have
              sent you a DM with the coverage map — check your requests. 🚀
            </p>
          </div>
        </div>
        <div className="mt-2 flex items-center gap-1.5 text-[10px] text-primary/60">
          <span className="inline-block w-2 h-2 rounded-full bg-green-500" />
          Moved to DM
        </div>
      </div>

      {/* Platform badges */}
      <div className="flex items-center justify-center gap-4 mt-4">
        <div className="w-10 h-10 rounded-xl bg-[#E4405F]/10 border border-[#E4405F]/20 flex items-center justify-center">
          <img
            src="/nautix-partners/instagram-logo.png"
            alt="Instagram"
            className="w-5 h-5 object-contain"
          />
        </div>
        <div className="w-10 h-10 rounded-xl bg-[#1877F2]/10 border border-[#1877F2]/20 flex items-center justify-center">
          <img
            src="/nautix-partners/facebook-logo.png"
            alt="Facebook"
            className="w-5 h-5 object-contain"
          />
        </div>
      </div>
    </div>
  );
}

function ProblemIcon({ kind }: { kind: string }) {
  if (kind === "missed") {
    return (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ width: 26, height: 26 }}
      >
        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5" />
        <path
          d="M12 8v4M12 16h0"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    );
  }
  if (kind === "complaint") {
    return (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ width: 26, height: 26 }}
      >
        <path
          d="M12 2L2 19h20L12 2z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
        <path
          d="M12 9v4M12 17h0"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    );
  }
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ width: 26, height: 26 }}
    >
      <rect
        x="3"
        y="3"
        width="18"
        height="18"
        rx="3"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path
        d="M9 12h6M12 9v6"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}


function StepIcon({ kind }: { kind: string }) {
  // Eye — monitoring / watching
  if (kind === "eye") {
    return (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1.8" />
      </svg>
    );
  }
  // Target / crosshair — intent detection
  if (kind === "target") {
    return (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.8" />
        <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.8" />
        <circle cx="12" cy="12" r="1.5" fill="currentColor" />
        <path d="M12 2v3M12 19v3M2 12h3M19 12h3" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    );
  }
  // Chat bubble with arrow — reply / DM
  if (kind === "reply") {
    return (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10z"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path d="M12 7v6M9 10l3 3 3-3" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }
  // Person — routing to a human
  return (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="12" cy="7" r="4" stroke="currentColor" strokeWidth="1.8" />
      <path d="M17 6l3 3 3-3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function FaqSection() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div
      className="cm-faq reveal-section"
      style={{ maxWidth: 880, margin: "0 auto", padding: "40px 24px 60px" }}
    >
      <JsonLd data={buildFaqSchema([...D.faq.items])} />

      <div className="nautix-industry-head">
        <h2 className="nautix-section-title mb-0">
          <span className="nautix-section-title-line">Common</span>
          <span className="nautix-section-title-focus">questions</span>
        </h2>
      </div>

      <ul style={{ listStyle: "none", padding: 0, margin: "32px 0 0" }}>
        {D.faq.items.map((item, idx) => (
          <li
            key={item.question}
            className="he-faq-item"
            data-open={open === idx}
          >
            <button
              type="button"
              className="he-faq-button"
              aria-expanded={open === idx}
              onClick={() => setOpen((o) => (o === idx ? null : idx))}
            >
              <span>{item.question}</span>
              <span className="he-faq-chevron" aria-hidden="true">
                +
              </span>
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

function toCounter(
  value: string,
): { target: number; suffix: string } | null {
  if (/\dm\s?\d+s/.test(value)) return null;
  if (value.endsWith("%"))
    return { target: Number.parseFloat(value), suffix: "%" };
  const match = value.match(/^([\d.]+)\s*(.+)$/);
  if (match)
    return { target: Number.parseFloat(match[1]), suffix: ` ${match[2]}` };
  return null;
}

export function ProductCommentMonitoring({
  data,
}: ProductCommentMonitoringProps) {
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
                  
                  .cm-how .nautix-section-title-line {
          max-width: none;
          white-space: nowrap;
        }

                  /* --- 4 wide cards in one row, left-aligned --- */
        .cm-how .cm-steps-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 20px;
          margin-top: 48px;
          position: relative;
        }
        /* Connecting line through the badges */
        .cm-how .cm-steps-grid::before {
          content: "";
          position: absolute;
          top: 24px;
          left: calc(12.5% + 24px);
          right: calc(12.5% + 24px);
          height: 2px;
          background: linear-gradient(
            90deg,
            rgba(126,16,162,0.08) 0%,
            rgba(126,16,162,0.35) 25%,
            rgba(126,16,162,0.35) 75%,
            rgba(126,16,162,0.08) 100%
          );
          z-index: 0;
          pointer-events: none;
        }
        @media (max-width: 900px) {
          .cm-how .cm-steps-grid {
            grid-template-columns: repeat(2, 1fr);
          }
          .cm-how .cm-steps-grid::before { display: none; }
        }
        @media (max-width: 540px) {
          .cm-how .cm-steps-grid {
            grid-template-columns: 1fr;
          }
        }

        .cm-how .cm-step-card {
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
        .cm-how .cm-step-card:hover {
          transform: translateY(-5px);
          border-color: rgba(126,16,162,0.25);
          box-shadow: 0 24px 48px -20px rgba(126,16,162,0.28);
        }

                /* Card header: badge on the left */
        .cm-how .cm-step-header {
          display: flex;
          align-items: center;
          width: 100%;
          margin-bottom: 14px;
        }

        /* Step number badge — left corner */
        .cm-how .cm-step-badge {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 3px 14px;
          height: 26px;
          border-radius: 999px;
          background: linear-gradient(135deg, #7e10a2 0%, #b52ed1 100%);
          color: #fff;
          font-family: var(--font-heading), sans-serif;
          font-weight: 600;
          font-size: 12px;
          letter-spacing: 0.06em;
          box-shadow: 0 6px 14px -6px rgba(126,16,162,0.4);
          z-index: 2;
        }

                /* Icon — above the badge, pushed to the right */
        .cm-how .cm-step-icon {
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
        .cm-how .cm-step-icon svg {
          width: 20px;
          height: 20px;
        }

        .cm-how .cm-step-title {
          font-family: var(--font-heading), sans-serif;
          font-size: 21px;
          font-weight: 600;
          color: #171717;
          margin: 0 0 8px;
          letter-spacing: -0.01em;
          line-height: 1.3;
        }

        .cm-how .cm-step-copy {
          font-size: 14.5px;
          line-height: 1.6;
          color: rgba(23,23,23,0.62);
          margin: 0 0 auto;
        }

        /* Stat row at bottom-left */
        .cm-how .cm-step-stat {
          display: inline-flex;
          align-items: center;
          gap: 7px;
          margin-top: 16px;
          padding: 4px 12px;
          border-radius: 999px;
          background: rgba(126,16,162,0.05);
          border: 1px solid rgba(126,16,162,0.08);
        }
        .cm-how .cm-step-stat::before {
          content: "";
          width: 5px;
          height: 5px;
          border-radius: 50%;
          background: #b52ed1;
          box-shadow: 0 0 0 3px rgba(181,46,209,0.15);
          flex-shrink: 0;
        }
        .cm-how .cm-step-stat b {
          font-family: var(--font-heading), sans-serif;
          font-size: 17px;
          font-weight: 700;
          color: #7e10a2;
        }
        .cm-how .cm-step-stat span {
          font-size: 11.5px;
          color: rgba(23,23,23,0.5);
          text-transform: uppercase;
          letter-spacing: 0.08em;
        }      
        .cm-how .nautix-section-title-focus {
          background: #e2fe5e;
          color: #22303f;
          box-shadow: inset 0 0 0 1px rgba(34, 48, 63, 0.06);
        }

        .cm-faq .nautix-section-title-focus {
          background: #e2fe5e;
          color: #22303f;
          box-shadow: inset 0 0 0 1px rgba(34, 48, 63, 0.06);
        }
        .cm-faq .he-faq-item {
          border-top: 1px solid rgba(23,23,23,0.08);
          padding: 18px 0;
        }
        .cm-faq .he-faq-item:last-child {
          border-bottom: 1px solid rgba(23,23,23,0.08);
        }
        .cm-faq .he-faq-button {
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
        .cm-faq .he-faq-chevron {
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
        .cm-faq .he-faq-item[data-open="true"] .he-faq-chevron {
          transform: rotate(45deg);
          background: #7e10a2;
          color: #fff;
        }
        .cm-faq .he-faq-body {
          overflow: hidden;
          max-height: 0;
          transition: max-height 0.35s ease;
        }
        .cm-faq .he-faq-item[data-open="true"] .he-faq-body {
          max-height: 400px;
        }
        .cm-faq .he-faq-body p {
          margin: 10px 0 0;
          color: rgba(23,23,23,0.72);
          font-size: 16px;
          line-height: 1.6;
        }

        .cm-problem .nautix-section-title-line {
          max-width: none;
          white-space: nowrap;
        }
        .cm-problem .nautix-section-title-focus,
        .cm-industry .nautix-section-title-focus {
          background: #e2fe5e;
          color: #22303f;
          box-shadow: inset 0 0 0 1px rgba(34, 48, 63, 0.06);
        }
        .cm-industry .nautix-section-title-line {
          max-width: none;
          white-space: nowrap;
        }
      `}</style>

      {/* HERO */}
      <section className="reveal-section relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-[130px] pb-20 lg:pt-[130px] lg:pb-28">
          <div className="flex justify-center mb-8">
            <span
              className="border rounded-pill inline-flex items-center"
              style={{ padding: "0.25rem 1rem" }}
            >
              <p
                className="mb-0"
                style={{
                  color: "#16404B",
                  fontFamily: '"Mabry Pro", Sans-serif',
                  fontSize: "0.875rem",
                  fontWeight: 700,
                  textAlign: "center",
                }}
              >
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

            <HeroVisual />
          </div>
        </div>
      </section>

      {/* PROBLEM */}
      <section className="cm-problem reveal-section py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="nautix-section-title mb-0">
              {renderHeading(D.problem.heading)}
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {D.problem.painPoints.map((pain) => (
              <article
                key={pain.title}
                className="bg-white border border-black/5 rounded-xl p-6 shadow-sm hover:shadow-md hover:border-primary/20 transition-all duration-300"
              >
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
                    color: "#7e10a2",
                  }}
                >
                  <ProblemIcon kind={pain.icon} />
                </div>
                <h3 className="font-[var(--font-heading)] font-bold text-lg text-foreground mb-2">
                  {pain.title}
                </h3>
                <p className="font-[var(--font-sans)] text-sm text-foreground/70 leading-relaxed">
                  {pain.detail}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

            {/* HOW IT WORKS */}
      <section id="how-it-works" className="cm-how reveal-section py-20 lg:py-28">
        <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 24px" }}>
          <div className="nautix-pillars-head" style={{ textAlign: "center" }}>
            <h2 className="nautix-section-title mb-0">
              {renderHeading(D.howItWorks.heading)}
            </h2>
            <p
              style={{
                fontSize: 16,
                color: "rgba(23,23,23,0.68)",
                margin: "12px 0 0",
                maxWidth: 620,
                marginInline: "auto",
              }}
            >
              {D.howItWorks.subhead}
            </p>
          </div>

                    <div className="cm-steps-grid">
            {D.howItWorks.steps.map((s) => (
                            <article key={s.stepNumber} className="cm-step-card">
                <span className="cm-step-icon" aria-hidden="true">
                  <StepIcon kind={s.kind} />
                </span>
                <div className="cm-step-header">
                  <span className="cm-step-badge">
                    Step {s.stepNumber}
                  </span>
                </div>
                <h3 className="cm-step-title">{s.title}</h3>
                <p className="cm-step-copy">{s.detail}</p>
                <div className="cm-step-stat">
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
          <h2
            className="nautix-section-title mb-12"
            style={{ color: "#fff", textAlign: "center" }}
          >
            What{" "}
            <span
              className="px-1"
              style={{ color: "#16404B", backgroundColor: "#E2FF5E" }}
            >
              comment monitoring
            </span>{" "}
            does
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {D.capabilities.cards.map((c) => (
              <article
                key={c.title}
                className="bg-white border border-white/20 rounded-2xl p-6 hover:border-white/40 hover:shadow-lg transition-all duration-300"
              >
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
                  }}
                >
                  <img
                    src={c.icon}
                    alt={c.title}
                    loading="lazy"
                    style={{ width: 26, height: 26 }}
                  />
                </div>
                <h3 className="font-[var(--font-heading)] font-bold text-lg text-foreground mb-2">
                  {c.title}
                </h3>
                <p className="font-[var(--font-sans)] text-sm text-foreground/70 leading-relaxed">
                  {c.body}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* INDUSTRY TABLE */}
      <section className="cm-industry reveal-section py-20 lg:py-28 bg-white">
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
                      <div className="title">
                        <span className="h6 fw-bold text-dark">Vertical</span>
                      </div>
                    </th>
                    <th className="table-header-cell" scope="col">
                      <div className="title">
                        <span className="h6 fw-bold text-dark">
                          How they use it
                        </span>
                      </div>
                    </th>
                  </tr>
                </thead>
                <tbody className="table-body">
                  {D.industryTable.rows.map((row, i) => (
                    <tr
                      key={row.vertical}
                      className={`table-row ${i === 0 ? "border-white" : "border-gray-100"}`}
                    >
                      <th scope="row">
                        <div className="hstack gap-1 justify-start">
                          <span className="fs-5 fw-bold text-dark">
                            {row.vertical}
                          </span>
                        </div>
                      </th>
                      <td>
                        <span className="text-dark">{row.howTheyUseIt}</span>
                      </td>
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

          <div className="mt-12 grid gap-10 md:grid-cols-3 md:gap-0">
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
                      background:
                        "linear-gradient(135deg, #7e10a2 0%, #b52ed1 100%)",
                      WebkitBackgroundClip: "text",
                      backgroundClip: "text",
                      color: "transparent",
                    }}
                  >
                    {counterProps ? (
                      <Counter
                        target={counterProps.target}
                        suffix={counterProps.suffix}
                      />
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
      <section className="nautix-final-cta-section reveal-section">
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
              Turn your comments section
              <br />
              <span className="nautix-final-cta-focus">
                into a sales channel.
              </span>
            </h2>
            <p className="nautix-final-cta-copy mb-0">
              See how comment monitoring catches every buying question and
              complaint on your posts and ads — and handles them before they are
              missed.
            </p>
            <div className="nautix-final-cta-actions">
              <a
                className="nautix-final-cta-button nautix-final-cta-button--primary"
                href={D.hero.primaryCta.href}
              >
                Book a Demo 
              </a>
              <a
                className="nautix-final-cta-button nautix-final-cta-button--secondary"
                href="https://wa.me/254762758987"
              >
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
          <p className="text-sm text-foreground/60 mb-4">
            Related product pages
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="/product/omnichannel-inbox"
              className="text-sm text-primary hover:text-primary-700 transition-colors underline underline-offset-4"
            >
              Omnichannel Inbox
            </Link>
            <span className="text-foreground/20">·</span>
            <Link
              href="/product/ai-resolution"
              className="text-sm text-primary hover:text-primary-700 transition-colors underline underline-offset-4"
            >
              Instant Auto-Response
            </Link>
            <span className="text-foreground/20">·</span>
            <Link
              href="/product/channels-inbox"
              className="text-sm text-primary hover:text-primary-700 transition-colors underline underline-offset-4"
            >
              Lead Qualification Engine
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
