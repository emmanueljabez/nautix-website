"use client";

import Link from "next/link";
import { PIONEER_MOMENT_DATA } from "@/lib/isp-data";
import { useReveal } from "@/hooks/useReveal";

const BOOK_DEMO_URL =
  "https://app.nautix.io/book/skVGGbpLujeMxRTL2JgwnzUut4AC3N-X/xU-NHVEi4rMuY9DlQZdvrHqnJkY-YVAp";

/**
 * IspPioneerMoment — Section 4: The most important section after Hero.
 */
export function IspPioneerMoment() {
  const ref = useReveal<HTMLElement>();
  const {
    sectionHeading,
    leftColumn,
    rightColumn,
    cta,
    ctaSub,
  } = PIONEER_MOMENT_DATA;

  return (
    <section
      ref={ref}
      className="relative border-t border-primary-100/50 bg-white py-24 md:py-32"
    >
      <div className="mx-auto max-w-[1280px] px-6 md:px-10">
        {/* ── Section heading ── */}
        
              <div className="reveal">
          <h2
            style={{
              fontFamily: '"Sharp Grotesk", Sans-serif',
              fontSize: "clamp(2rem, 5vw, 3rem)",
              lineHeight: "1.1em",
              letterSpacing: "-0.06rem",
              textAlign: "center",
            }}
          >
            11:47pm. Subscriber loses internet. Fixed by 11:49pm.
          </h2>
          <p
            style={{
              fontFamily: '"Sharp Grotesk", Sans-serif',
              fontSize: "clamp(1.8rem, 4vw, 2.5rem)",
              lineHeight: "1.1em",
              letterSpacing: "-0.06rem",
              textAlign: "center",
              marginTop: 8,
            }}
          >
            <span
              style={{
                background: "#E2FF5E",
                color: "#16404B",
                boxShadow: "inset 0 0 0 1px rgba(34,48,63,0.06)",
                borderRadius: 999,
                display: "inline-block",
                padding: "0.08em 0.34em 0.14em",
              }}
            >
              No agent involved.
            </span>
          </p>
        </div>

        {/* ── Two-column grid ── */}
        <div className="reveal mt-14 grid gap-16 lg:grid-cols-[1fr_440px]">
          {/* ═══════════════════════════════════════════
              LEFT COLUMN — Technical timeline
              ═══════════════════════════════════════════ */}

          <div>
            <h3 className="font-[var(--font-heading)] text-[20px] font-semibold tracking-[-0.015em] text-primary-950">
              {leftColumn.heading}
            </h3>

            {/* Timeline */}
            <div className="relative mt-8">
              <div
                aria-hidden
                className="absolute left-[5px] top-1.5 h-[calc(100%-28px)] w-px bg-primary-100"
              />

              <div className="space-y-0">
                {leftColumn.steps.map((step, i) => (
                  <div
                    key={i}
                    className="relative flex gap-5 pb-7 last:pb-0"
                  >
                    <span
                      className={`relative z-10 mt-1.5 flex h-3 w-3 shrink-0 rounded-full ring-4 ${
                        i === 0
                          ? "bg-primary-600 ring-primary-100"
                          : "bg-white ring-primary-100 border-2 border-primary-300"
                      }`}
                    />

                    <div className="min-w-0 flex-1">
                      <span className="font-mono text-[12px] font-bold uppercase tracking-[0.08em] text-primary-600">
                        {step.time}
                      </span>
                      <p className="mt-1 text-[14px] leading-[1.6] text-foreground/70">
                        {step.action}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* ── Summary callout ── */}
            <div
              className="mt-8 rounded-2xl p-5"
              style={{
                background:
                  "linear-gradient(135deg, rgba(124,58,237,0.06), rgba(236,72,153,0.04))",
              }}
            >
              <ul className="space-y-2">
                <li className="flex items-center gap-2.5">
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="none"
                    aria-hidden
                    className="shrink-0"
                  >
                    <path
                      d="M11.667 3.5 5.25 9.917 2.333 7"
                      stroke="#7C3AED"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span className="text-[14px] font-semibold text-primary-800">
                    Total time: {leftColumn.summary.totalTime}
                  </span>
                </li>
                <li className="flex items-center gap-2.5">
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="none"
                    aria-hidden
                    className="shrink-0"
                  >
                    <path
                      d="M11.667 3.5 5.25 9.917 2.333 7"
                      stroke="#7C3AED"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span className="text-[13px] leading-[1.5] text-foreground/60">
                    Agents involved: {leftColumn.summary.agentsInvolved}
                  </span>
                </li>
                <li className="flex items-center gap-2.5">
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="none"
                    aria-hidden
                    className="shrink-0"
                  >
                    <path
                      d="M11.667 3.5 5.25 9.917 2.333 7"
                      stroke="#7C3AED"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span className="text-[13px] leading-[1.5] text-foreground/60">
                    {leftColumn.summary.result}
                  </span>
                </li>
              </ul>
            </div>
          </div>

          {/* ═══════════════════════════════════════════
              RIGHT COLUMN — WhatsApp chat recreation
              ═══════════════════════════════════════════ */}

          <div className="lg:-mt-2">
            <div className="overflow-hidden rounded-3xl border border-black/10 shadow-[0_20px_60px_-20px_rgba(11,11,14,0.18)]">
              {/* WhatsApp header */}
              <div className="flex items-center gap-3 bg-[#075E54] px-4 py-3">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white/20 text-[14px] font-semibold text-white">
                  D
                </span>
                <div className="min-w-0">
                  <div className="truncate text-[14px] font-medium leading-tight text-white">
                    David
                  </div>
                  <div className="text-[11px] leading-tight text-white/65">
                    online
                  </div>
                </div>
              </div>

              {/* Chat body — WhatsApp wallpaper */}
              <div
                className="space-y-3 p-4"
                style={{
                  backgroundColor: "#E5DDD5",
                  backgroundImage:
                    "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23d2c9bc' fill-opacity='0.28'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
                }}
              >
                {rightColumn.chatMessages.map((msg, i) => {
                  const isCustomer = msg.sender === "customer";

                  return (
                    <div
                      key={i}
                      className={`flex flex-col ${
                        isCustomer ? "items-start" : "items-end"
                      }`}
                    >
                      {/* Timestamp above bubble */}
                      <span
                        className={`mb-1 text-[10px] tracking-[0.04em] ${
                          isCustomer ? "pl-1" : "pr-1"
                        } text-black/40`}
                      >
                        {msg.time}
                      </span>

                      {/* Bubble */}
                      <div
                        className={`max-w-[84%] rounded-2xl px-3.5 py-2.5 text-[13px] leading-[1.45] ${
                          isCustomer
                            ? "rounded-tl-sm bg-neutral-900 text-white"
                            : "rounded-tr-sm text-white shadow-sm"
                        }`}
                        style={
                          !isCustomer
                            ? { background: "#7e10a2" }
                            : undefined
                        }
                      >
                        {msg.text}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* ── CTA below both columns ── */}
        <div className="reveal mt-14 flex flex-col items-center md:mt-20">
          <Link
            href={BOOK_DEMO_URL}
            className="group inline-flex items-center gap-2 rounded-full bg-primary-700 px-7 py-4 text-sm font-bold text-white shadow-md transition-colors hover:bg-primary-800"
          >
            <span className="flex flex-col items-center text-center leading-[1.4]">
            <span className="inline-flex items-center gap-1.5 text-[13px] font-semibold">
               {cta}
               <i
                 className="fs-8 unicon-arrow-up-right fw-bold"
                 aria-hidden="true"
               />
              </span> 
              <span className="text-[16px] font-semibold">{ctaSub}</span>
            </span>
            
          </Link>
        </div>
      </div>
    </section>
  );
}
