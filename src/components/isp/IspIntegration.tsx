"use client";

import { INTEGRATION_DATA } from "@/lib/isp-data";
import { useReveal } from "@/hooks/useReveal";

/**
 * Brand colours for integration logo badges.
 * Replace these with <img> tags when actual logo assets exist.
 */
const LOGO_COLORS: Record<string, { bg: string; text: string }> = {
  SmartOLT:           { bg: "#E8F0FE", text: "#1A73E8" },
  Splynx:             { bg: "#F1F5F9", text: "#334155" },
  "M-Pesa Daraja":    { bg: "#E6F4EA", text: "#1E8E3E" },
  "WhatsApp Business": { bg: "#E6F7EC", text: "#075E54" },
  "Meta/Instagram":    { bg: "#FCE7F3", text: "#BE185D" },
};

/**
 * Icon mapping for architecture boxes.
 * Matches the WORKFLOW_CARDS icon pattern from HomepageEnhanced.
 */
const BOX_ICONS: Record<string, { icon: string; alt: string }> = {
  "Subscriber Message": {
    icon: "/wp-content/uploads/2025/05/icon-02.svg",
    alt: "Message channels icon",
  },
  Nautix: {
    icon: "/wp-content/uploads/2025/04/icon-07.svg",
    alt: "AI operations icon",
  },
  "Your Stack": {
    icon: "/wp-content/uploads/2025/05/icon-03.svg",
    alt: "System stack icon",
  },
};

/* -------------------------------------------------------------------------- */
/*  Animated flow arrow between architecture boxes                            */
/* -------------------------------------------------------------------------- */

function FlowArrow() {
  return (
    <div className="flex items-center justify-center py-3 md:py-0 md:px-1">
      <svg
        width="52"
        height="52"
        viewBox="0 0 52 52"
        fill="none"
        aria-hidden
        className="shrink-0 rotate-90 md:rotate-0"
      >
        {/* Animated dashed track */}
        <path
          d="M6 26 h28"
          stroke="url(#flowGrad)"
          strokeWidth="2"
          strokeDasharray="4 6"
          strokeLinecap="round"
          style={{ animation: "dash 4s linear infinite" }}
        />
        {/* Arrow head */}
        <path
          d="M34 20 l8 6-8 6"
          stroke="url(#flowGrad)"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
        <defs>
          <linearGradient id="flowGrad" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#7C3AED" />
            <stop offset="100%" stopColor="#EC4899" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*  Checkmark icon for trust signals                                          */
/* -------------------------------------------------------------------------- */

function Checkmark() {
  return (
    <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary-100">
      <svg
        width="13"
        height="13"
        viewBox="0 0 13 13"
        fill="none"
        aria-hidden
      >
        <path
          d="M10.833 3.25 4.875 9.208 2.167 6.5"
          stroke="#7C3AED"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </span>
  );
}

/* -------------------------------------------------------------------------- */
/*  IspIntegration — Section 6                                                */
/* -------------------------------------------------------------------------- */

export function IspIntegration() {
  const ref = useReveal<HTMLElement>();
  const {
    sectionHeading,
    architectureBoxes,
    trustSignals,
    integrationLogos,
  } = INTEGRATION_DATA;

  return (
    <section
      ref={ref}
       className="border-t border-primary-100/50 py-24 md:py-32"
   style={{
     background:
       "linear-gradient(180deg, rgba(126,16,162,0.045) 0%, rgba(251,242,254,0.35) 55%, rgba(255,255,255,0) 100%), #fff",
  }}
  >
      <div className="mx-auto max-w-[1280px] px-6 md:px-10">
        {/* ── Section heading ── */}
        <h2 className="reveal text-center font-[var(--font-heading)] text-[clamp(28px,4vw,48px)] font-semibold leading-[1.08] tracking-[-0.025em] text-primary-950">
          {sectionHeading}
        </h2>

        {/* ── Architecture diagram ── */}
        <div className="reveal mt-14 flex flex-col items-center md:flex-row md:justify-center md:gap-0">
          {architectureBoxes.map((box, i) => {
            const boxIcon = BOX_ICONS[box.title] ?? {
              icon: "/wp-content/uploads/2025/05/icon-01.svg",
              alt: "",
            };

            return (
              <div key={box.title} className="contents">
                {/* Box card */}
                <div className="relative w-full max-w-[280px] overflow-hidden rounded-[20px] border border-black/5 bg-white p-6 shadow-sm md:w-[240px] md:p-7">

                  {/* Gradient top line */}
                  <div
                    aria-hidden
                    className="absolute inset-x-0 top-0 h-[3px] rounded-t-[20px]"
                    style={{
                      background:
                        "linear-gradient(90deg, #7e10a2 0%, #b52ed1 50%, #7e10a2 100%)",
                    }}
                  />

                  {/* Icon — matches WORKFLOW_CARDS pattern */}
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
                      src={boxIcon.icon}
                      alt={boxIcon.alt}
                      loading="lazy"
                      style={{ width: 26, height: 26 }}
                    />
                  </div>

                  {/* Box title */}
                  <h3
                    className="mb-0"
                    style={{
                      fontFamily: "var(--font-heading), sans-serif",
                      fontSize: 18,
                      fontWeight: 600,
                      color: "#171717",
                    }}
                  >
                    {box.title}
                  </h3>

                  {/* Items list */}
                  

                <ul
                className="mt-3 space-y-2"
                style={{ paddingLeft: 0, paddingInlineStart: 0 }}
                >

                    {box.items.map((item) => (
                        <li
    key={item}
    className="flex items-center justify-start gap-1.5 text-[13px] leading-[1.5] text-foreground/60"
   style={{ marginLeft: 0, paddingLeft: 0 }}
  >
                        <span className="h-1 w-1 rounded-full bg-primary-400" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Flow arrow between boxes */}
                {i < architectureBoxes.length - 1 && <FlowArrow />}
              </div>
            );
          })}
        </div>

        {/* ── Trust signals ── */}
        <div className="reveal mx-auto mt-14 max-w-[680px]">
          <div className="rounded-2xl border border-primary-100 bg-primary-50/30 p-5 md:p-7">
            <ul className="space-y-4">
              {trustSignals.map((signal) => (
                <li key={signal} className="flex items-start gap-3">
                  <Checkmark />
                  <p className="text-[14px] leading-[1.65] text-foreground/65">
                    {signal}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* ── Integration logo strip ── */}
        <div className="reveal mt-14">
          <div className="rounded-2xl border border-primary-100 bg-primary-50/20 px-4 py-6">
            <div className="flex flex-wrap items-center justify-center gap-3">
              {integrationLogos.map((name) => {
                const c = LOGO_COLORS[name] ?? {
                  bg: "#F1F5F9",
                  text: "#334155",
                };
                return (
                  <span
                    key={name}
                    className="inline-flex items-center rounded-full px-4 py-2 text-[12px] font-semibold tracking-[0.04em] shadow-sm transition-shadow hover:shadow-md"
                    style={{
                      backgroundColor: c.bg,
                      color: c.text,
                    }}
                  >
                    {name}
                  </span>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}