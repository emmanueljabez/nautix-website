"use client";

import { useEffect, useRef, useState } from "react";
import { PAGE_DATA } from "@/lib/live-system-diagnosis-data";

const DATA = PAGE_DATA;

/* -------------------------------------------------------------------------- */
/*  Scoped styles                                                             */
/* -------------------------------------------------------------------------- */

function LsdStyles() {
  return (
    <style>{`
      .lsd-root {
        --lsd-accent: #7e10a2;
        --lsd-accent-soft: #b52ed1;
        --lsd-accent-tint: rgba(126, 16, 162, 0.08);
        --lsd-accent-faint: rgba(126, 16, 162, 0.035);
      }

      @keyframes lsd-fade-up {
        from { opacity: 0; transform: translateY(18px); }
        to   { opacity: 1; transform: translateY(0); }
      }
      @keyframes lsd-float-a {
        0%,100% { transform: translate(0,0) rotate(0deg); }
        50%     { transform: translate(18px,-14px) rotate(4deg); }
      }
      @keyframes lsd-float-b {
        0%,100% { transform: translate(0,0); }
        50%     { transform: translate(-16px,12px); }
      }
      @keyframes lsd-float-c {
        0%,100% { transform: translate(0,0) rotate(-3deg); }
        50%     { transform: translate(12px,16px) rotate(3deg); }
      }

      .lsd-root .lsd-reveal {
        opacity: 0;
      }
      .lsd-root .lsd-reveal.is-in {
        animation: lsd-fade-up 0.75s cubic-bezier(.22,.61,.36,1) forwards;
      }

      /* Hero floating shapes */
      .lsd-root .lsd-hero-shapes .lsd-shape {
        position: absolute;
        display: inline-block;
        width: 56px;
        height: 56px;
        will-change: transform;
        filter: drop-shadow(0 8px 18px rgba(23,23,23,0.06));
      }
      .lsd-root .lsd-hero-shapes .lsd-shape svg {
        width: 100%;
        height: 100%;
        display: block;
      }
      .lsd-root .lsd-shape--database {
        top: 15%; left: 6%;
        animation: lsd-float-a 8s ease-in-out infinite;
      }
      .lsd-root .lsd-shape--magnifier {
        top: 10%; right: 8%;
        animation: lsd-float-b 7.5s ease-in-out infinite;
      }
      .lsd-root .lsd-shape--shield {
        top: 33%; right: 2%;
        animation: lsd-float-c 9s ease-in-out infinite;
      }
      .lsd-root .lsd-shape--chat {
        top: 38%; left: 4%;
        animation: lsd-float-a 7s ease-in-out infinite;
      }
      @media (max-width: 768px) {
        .lsd-root .lsd-hero-shapes .lsd-shape { display: none; }
      }

      /* Pain card */
      .lsd-root .lsd-pain-card {
        padding: 28px;
        border-radius: 20px;
        background: #ffffff;
        border: 1px solid rgba(23,23,23,0.07);
        transition: border-color 0.25s ease, transform 0.25s ease, box-shadow 0.25s ease;
      }
      .lsd-root .lsd-pain-card:hover {
        transform: translateY(-3px);
        border-color: rgba(126,16,162,0.22);
        box-shadow: 0 20px 40px -24px rgba(126,16,162,0.28);
      }

      /* Step card */
      .lsd-root .lsd-step-card {
        position: relative;
        padding: 28px;
        border-radius: 20px;
        background: #ffffff;
        border: 1px solid rgba(23,23,23,0.07);
        transition: border-color 0.25s ease, transform 0.25s ease, box-shadow 0.25s ease;
        overflow: hidden;
      }
      .lsd-root .lsd-step-card::before {
        content: attr(data-num);
        position: absolute;
        top: -18px;
        right: -8px;
        font-family: var(--font-heading), sans-serif;
        font-size: 120px;
        font-weight: 700;
        line-height: 1;
        letter-spacing: -0.05em;
        color: rgba(126,16,162,0.04);
        pointer-events: none;
        user-select: none;
      }
      .lsd-root .lsd-step-card:hover {
        transform: translateY(-4px);
        border-color: rgba(126,16,162,0.3);
        box-shadow: 0 28px 50px -30px rgba(126,16,162,0.35);
      }

      /* Capability card */
      .lsd-root .lsd-cap-card {
        padding: 24px;
        border-radius: 16px;
        background: #ffffff;
        border: 1px solid rgba(23,23,23,0.07);
        transition: border-color 0.25s ease, transform 0.25s ease, box-shadow 0.25s ease;
      }
      .lsd-root .lsd-cap-card:hover {
        transform: translateY(-2px);
        border-color: rgba(126,16,162,0.2);
        box-shadow: 0 16px 32px -20px rgba(126,16,162,0.22);
      }

      /* Industry table */
      .lsd-root .lsd-industry-table {
        width: 100%;
        border-collapse: separate;
        border-spacing: 0;
        border-radius: 16px;
        overflow: hidden;
        border: 1px solid rgba(23,23,23,0.07);
      }
      .lsd-root .lsd-industry-table th,
      .lsd-root .lsd-industry-table td {
        padding: 20px 24px;
        text-align: left;
        border-bottom: 1px solid rgba(23,23,23,0.06);
        vertical-align: top;
      }
      .lsd-root .lsd-industry-table thead th {
        background: var(--lsd-accent-faint);
        font-family: var(--font-heading), sans-serif;
        font-weight: 600;
        font-size: 13px;
        color: var(--lsd-accent);
        letter-spacing: 0.06em;
        text-transform: uppercase;
      }
      .lsd-root .lsd-industry-table tbody tr:last-child td {
        border-bottom: 0;
      }
      .lsd-root .lsd-industry-table tbody tr:hover {
        background: var(--lsd-accent-faint);
      }

      /* Stat card */
      .lsd-root .lsd-stat-card {
        padding: 32px 24px;
        border-radius: 16px;
        background: #ffffff;
        border: 1px solid rgba(23,23,23,0.07);
        text-align: center;
      }

      /* FAQ accordion */
      .lsd-root .lsd-faq-item {
        border-top: 1px solid rgba(23,23,23,0.08);
        padding: 18px 0;
      }
      .lsd-root .lsd-faq-item:last-child {
        border-bottom: 1px solid rgba(23,23,23,0.08);
      }
      .lsd-root .lsd-faq-button {
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
        font-size: 18px;
        font-weight: 500;
        color: #171717;
      }
      .lsd-root .lsd-faq-chevron {
        flex-shrink: 0;
        width: 32px;
        height: 32px;
        border-radius: 999px;
        background: var(--lsd-accent-tint);
        color: var(--lsd-accent);
        display: inline-flex;
        align-items: center;
        justify-content: center;
        transition: transform 0.3s ease, background 0.25s ease, color 0.25s ease;
        font-size: 18px;
        font-weight: 600;
        line-height: 1;
      }
      .lsd-root .lsd-faq-item[data-open="true"] .lsd-faq-chevron {
        transform: rotate(45deg);
        background: var(--lsd-accent);
        color: #fff;
      }
      .lsd-root .lsd-faq-body {
        overflow: hidden;
        max-height: 0;
        transition: max-height 0.35s ease;
      }
      .lsd-root .lsd-faq-item[data-open="true"] .lsd-faq-body {
        max-height: 400px;
      }
      .lsd-root .lsd-faq-body p {
        margin: 10px 0 0;
        color: rgba(23,23,23,0.72);
        font-size: 16px;
        line-height: 1.6;
      }

      /* Final CTA card */
      .lsd-root .lsd-cta-card {
        padding: 60px 40px;
        border-radius: 28px;
        background: linear-gradient(145deg, #7e10a2 0%, #651082 54%, #2b1539 100%);
        box-shadow: 0 32px 70px rgba(65, 16, 95, 0.22);
        text-align: center;
        position: relative;
        overflow: hidden;
      }
      @media (max-width: 640px) {
        .lsd-root .lsd-cta-card { padding: 40px 24px; }
      }
    `}</style>
  );
}

/* -------------------------------------------------------------------------- */
/*  Reveal-on-scroll hook                                                     */
/* -------------------------------------------------------------------------- */

function useLsdReveal<T extends HTMLElement>(rootMargin = "-60px") {
  const ref = useRef<T | null>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("is-in");
            io.unobserve(e.target);
          }
        });
      },
      { rootMargin, threshold: 0.08 },
    );
    el.querySelectorAll<HTMLElement>(".lsd-reveal").forEach((n, i) => {
      n.style.animationDelay = `${i * 80}ms`;
      io.observe(n);
    });
    return () => io.disconnect();
  }, [rootMargin]);
  return ref;
}

/* -------------------------------------------------------------------------- */
/*  Section: Hero                                                             */
/* -------------------------------------------------------------------------- */

function Hero() {
  const ref = useLsdReveal<HTMLDivElement>();

  return (
    <div
      ref={ref}
      style={{
        position: "relative",
        padding: "100px 24px 60px",
        overflow: "hidden",
        background: "#fdfcfa",
      }}
    >
      {/* Floating decorative shapes */}
      <div
        className="lsd-hero-shapes"
        aria-hidden="true"
        style={{ position: "absolute", inset: 0, pointerEvents: "none" }}
      >
        {/* 1. Database / server stack */}
        <span className="lsd-shape lsd-shape--database">
          <svg viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="1" y="1" width="70" height="70" rx="20" fill="#fff" />
            <rect x="1" y="1" width="70" height="70" rx="20" stroke="#171717" strokeOpacity="0.06" />
            <ellipse cx="36" cy="24" rx="18" ry="8" fill="#fbf2fe" stroke="#7e10a2" strokeWidth="2.5" />
            <path d="M18 24v12c0 4.4 8.1 8 18 8s18-3.6 18-8V24" stroke="#7e10a2" strokeWidth="2.5" fill="#fbf2fe" />
            <path d="M18 36v12c0 4.4 8.1 8 18 8s18-3.6 18-8V36" stroke="#b52ed1" strokeWidth="2.5" fill="#fbf2fe" opacity="0.8" />
            <circle cx="28" cy="30" r="2" fill="#7e10a2" />
            <circle cx="36" cy="30" r="2" fill="#7e10a2" />
            <circle cx="44" cy="30" r="2" fill="#7e10a2" />
          </svg>
        </span>

        {/* 2. Magnifying glass / search */}
        <span className="lsd-shape lsd-shape--magnifier">
          <svg viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="1" y="1" width="70" height="70" rx="20" fill="#fff" />
            <rect x="1" y="1" width="70" height="70" rx="20" stroke="#171717" strokeOpacity="0.06" />
            <circle cx="32" cy="32" r="14" fill="#fbf2fe" stroke="#7e10a2" strokeWidth="2.5" />
            <path d="M42 42l10 10" stroke="#b52ed1" strokeWidth="3" strokeLinecap="round" />
            <circle cx="28" cy="28" r="3.5" fill="#b52ed1" opacity="0.35" />
          </svg>
        </span>

        {/* 3. Shield with tick */}
        <span className="lsd-shape lsd-shape--shield">
          <svg viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="1" y="1" width="70" height="70" rx="20" fill="#fff" />
            <rect x="1" y="1" width="70" height="70" rx="20" stroke="#171717" strokeOpacity="0.06" />
            <path d="M36 14l16 8v12c0 12-7 20-16 22-9-2-16-10-16-22V22l16-8z" fill="#fbf2fe" stroke="#7e10a2" strokeWidth="2.5" strokeLinejoin="round" />
            <path d="M28 35l7 7 12-12" stroke="#7e10a2" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </span>

        {/* 4. Chat bubble */}
        <span className="lsd-shape lsd-shape--chat">
          <svg viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="1" y="1" width="70" height="70" rx="20" fill="#fff" />
            <rect x="1" y="1" width="70" height="70" rx="20" stroke="#171717" strokeOpacity="0.06" />
            <path d="M18 24a6 6 0 0 1 6-6h24a6 6 0 0 1 6 6v20a6 6 0 0 1-6 6H32l-8 6v-6h-6a6 6 0 0 1-6-6V24z" fill="#fbf2fe" stroke="#7e10a2" strokeWidth="2.5" strokeLinejoin="round" />
            <circle cx="28" cy="32" r="2.5" fill="#7e10a2" />
            <circle cx="36" cy="32" r="2.5" fill="#7e10a2" />
            <circle cx="44" cy="32" r="2.5" fill="#7e10a2" />
            <path d="M36 38l4-4-4-4" stroke="#b52ed1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </span>
      </div>

      <div
        style={{
          position: "relative",
          maxWidth: 1100,
          margin: "0 auto",
          textAlign: "center",
        }}
      >
        <span
          className="lsd-reveal"
          style={{
            display: "inline-flex",
            alignItems: "center",
            padding: "6px 14px",
            borderRadius: 999,
            border: "1px solid rgba(126,16,162,0.18)",
            background: "rgba(126,16,162,0.06)",
            color: "var(--lsd-accent)",
            fontSize: 12,
            fontWeight: 700,
            letterSpacing: "0.12em",
            textTransform: "uppercase",
          }}
        >
          {DATA.hero.eyebrow}
        </span>

        <h1
          className="lsd-reveal"
          style={{
            fontFamily: "var(--font-heading), sans-serif",
            fontSize: "clamp(2.4rem, 6vw, 4.6rem)",
            lineHeight: 1.04,
            letterSpacing: "-0.055em",
            color: "#091624",
            margin: "24px 0 0",
          }}
        >
          {DATA.hero.h1}
        </h1>

        <p
          className="lsd-reveal"
          style={{
            fontSize: "clamp(16px, 1.4vw, 19px)",
            lineHeight: 1.55,
            color: "rgba(23,23,23,0.7)",
            maxWidth: 760,
            margin: "24px auto 0",
          }}
        >
          {DATA.hero.subhead}
        </p>

        <div
          className="lsd-reveal"
          style={{
            marginTop: 32,
            display: "flex",
            gap: 12,
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          <a
            className="nautix-hero-primary text-none"
            href={DATA.hero.primaryCta.href}
          >
            {DATA.hero.primaryCta.label}
          </a>
          <a
            className="nautix-hero-secondary text-none"
            href={DATA.hero.secondaryCta.href}
          >
            {DATA.hero.secondaryCta.label}
          </a>
        </div>
      </div>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*  Section: Problem                                                          */
/* -------------------------------------------------------------------------- */

function ProblemSection() {
  const ref = useLsdReveal<HTMLElement>();

  return (
    <section
      ref={ref}
      style={{
        padding: "80px 24px",
        maxWidth: 1200,
        margin: "0 auto",
      }}
    >
      <h2
        className="lsd-reveal"
        style={{
          fontFamily: "var(--font-heading), sans-serif",
          fontSize: "clamp(28px, 3.2vw, 42px)",
          fontWeight: 600,
          letterSpacing: "-0.03em",
          color: "#171717",
          textAlign: "center",
          margin: "0 0 48px",
        }}
      >
        {DATA.problem.heading}
      </h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: 20,
        }}
      >
        {DATA.problem.painPoints.map((pain, i) => (
          <article key={pain.title} className="lsd-pain-card lsd-reveal">
            <span
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                width: 40,
                height: 40,
                borderRadius: 12,
                background: "var(--lsd-accent-tint)",
                color: "var(--lsd-accent)",
                fontWeight: 700,
                fontSize: 15,
                marginBottom: 16,
              }}
            >
              {String(i + 1).padStart(2, "0")}
            </span>
            <h3
              style={{
                fontFamily: "var(--font-heading), sans-serif",
                fontSize: 18,
                fontWeight: 600,
                margin: "0 0 10px",
                color: "#171717",
              }}
            >
              {pain.title}
            </h3>
            <p
              style={{
                margin: 0,
                color: "rgba(23,23,23,0.65)",
                fontSize: 15,
                lineHeight: 1.55,
              }}
            >
              {pain.detail}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*  Section: How It Works                                                     */
/* -------------------------------------------------------------------------- */

function HowItWorks() {
  const ref = useLsdReveal<HTMLElement>();

  return (
    <section
      ref={ref}
      style={{
        padding: "80px 24px",
        background: "var(--lsd-accent-faint)",
      }}
    >
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: 48 }}>
          <h2
            className="lsd-reveal"
            style={{
              fontFamily: "var(--font-heading), sans-serif",
              fontSize: "clamp(28px, 3.2vw, 42px)",
              fontWeight: 600,
              letterSpacing: "-0.03em",
              color: "#171717",
              margin: "0 0 12px",
            }}
          >
            {DATA.howItWorks.heading}
          </h2>
          <p
            className="lsd-reveal"
            style={{
              fontSize: 16,
              color: "rgba(23,23,23,0.68)",
              margin: 0,
            }}
          >
            {DATA.howItWorks.subhead}
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: 20,
          }}
        >
          {DATA.howItWorks.steps.map((s) => (
            <article
              key={s.stepNumber}
              className="lsd-step-card lsd-reveal"
              data-num={`0${s.stepNumber}`}
            >
              <span
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: 44,
                  height: 44,
                  borderRadius: 14,
                  background:
                    "linear-gradient(135deg, #7e10a2 0%, #b52ed1 100%)",
                  color: "#fff",
                  fontFamily: "var(--font-heading), sans-serif",
                  fontWeight: 700,
                  fontSize: 16,
                  marginBottom: 16,
                  boxShadow: "0 10px 20px -10px rgba(126,16,162,0.5)",
                }}
              >
                {s.stepNumber}
              </span>
              <h3
                style={{
                  fontFamily: "var(--font-heading), sans-serif",
                  fontSize: 17,
                  fontWeight: 600,
                  margin: "0 0 10px",
                  color: "#171717",
                }}
              >
                {s.title}
              </h3>
              <p
                style={{
                  margin: 0,
                  color: "rgba(23,23,23,0.65)",
                  fontSize: 14.5,
                  lineHeight: 1.6,
                }}
              >
                {s.detail}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*  Section: Capabilities                                                     */
/* -------------------------------------------------------------------------- */

function CapabilitiesGrid() {
  const ref = useLsdReveal<HTMLElement>();

  return (
    <section
      ref={ref}
      style={{
        padding: "80px 24px",
        maxWidth: 1200,
        margin: "0 auto",
      }}
    >
      <h2
        className="lsd-reveal"
        style={{
          fontFamily: "var(--font-heading), sans-serif",
          fontSize: "clamp(28px, 3.2vw, 42px)",
          fontWeight: 600,
          letterSpacing: "-0.03em",
          color: "#171717",
          textAlign: "center",
          margin: "0 0 48px",
        }}
      >
        {DATA.capabilities.heading}
      </h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: 16,
        }}
      >
        {DATA.capabilities.cards.map((c) => (
          <article key={c.title} className="lsd-cap-card lsd-reveal">
            <h3
              style={{
                fontFamily: "var(--font-heading), sans-serif",
                fontSize: 17,
                fontWeight: 600,
                margin: "0 0 8px",
                color: "#171717",
              }}
            >
              {c.title}
            </h3>
            <p
              style={{
                margin: 0,
                color: "rgba(23,23,23,0.65)",
                fontSize: 14.5,
                lineHeight: 1.55,
              }}
            >
              {c.body}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*  Section: Industry Use Cases                                               */
/* -------------------------------------------------------------------------- */

function IndustryUseCases() {
  const ref = useLsdReveal<HTMLElement>();

  return (
    <section
      ref={ref}
      style={{
        padding: "80px 24px",
        background: "var(--lsd-accent-faint)",
      }}
    >
      <div style={{ maxWidth: 1000, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: 40 }}>
          <h2
            className="lsd-reveal"
            style={{
              fontFamily: "var(--font-heading), sans-serif",
              fontSize: "clamp(28px, 3.2vw, 42px)",
              fontWeight: 600,
              letterSpacing: "-0.03em",
              color: "#171717",
              margin: "0 0 12px",
            }}
          >
            {DATA.industryTable.heading}
          </h2>
          <p
            className="lsd-reveal"
            style={{
              fontSize: 16,
              color: "rgba(23,23,23,0.68)",
              margin: 0,
            }}
          >
            {DATA.industryTable.subhead}
          </p>
        </div>

        <div className="lsd-reveal" style={{ overflowX: "auto" }}>
          <table className="lsd-industry-table">
            <thead>
              <tr>
                <th style={{ width: "30%" }}>Industry</th>
                <th>How they use it</th>
              </tr>
            </thead>
            <tbody>
              {DATA.industryTable.rows.map((row) => (
                <tr key={row.vertical}>
                  <td>
                    <span
                      style={{
                        fontFamily: "var(--font-heading), sans-serif",
                        fontWeight: 600,
                        fontSize: 15,
                        color: "#171717",
                      }}
                    >
                      {row.vertical}
                    </span>
                  </td>
                  <td
                    style={{
                      fontSize: 15,
                      lineHeight: 1.55,
                      color: "rgba(23,23,23,0.72)",
                    }}
                  >
                    {row.howTheyUseIt}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*  Section: Outcomes                                                         */
/* -------------------------------------------------------------------------- */

function OutcomesSection() {
  const ref = useLsdReveal<HTMLElement>();

  return (
    <section
      ref={ref}
      style={{
        padding: "80px 24px",
        maxWidth: 1000,
        margin: "0 auto",
      }}
    >
      <h2
        className="lsd-reveal"
        style={{
          fontFamily: "var(--font-heading), sans-serif",
          fontSize: "clamp(28px, 3.2vw, 42px)",
          fontWeight: 600,
          letterSpacing: "-0.03em",
          color: "#171717",
          textAlign: "center",
          margin: "0 0 48px",
        }}
      >
        {DATA.outcomes.heading}
      </h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          gap: 20,
        }}
      >
        {DATA.outcomes.stats.map((stat) => (
          <div key={stat.label} className="lsd-stat-card lsd-reveal">
            <div
              style={{
                fontFamily: "var(--font-heading), sans-serif",
                fontSize: "clamp(32px, 3.5vw, 48px)",
                fontWeight: 600,
                lineHeight: 1,
                letterSpacing: "-0.03em",
                background:
                  "linear-gradient(135deg, #7e10a2 0%, #b52ed1 100%)",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                color: "transparent",
                marginBottom: 8,
              }}
            >
              {stat.value}
            </div>
            <div
              style={{
                fontSize: 14,
                color: "rgba(23,23,23,0.6)",
                lineHeight: 1.4,
              }}
            >
              {stat.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*  Section: FAQ                                                              */
/* -------------------------------------------------------------------------- */

function FaqSection() {
  const ref = useLsdReveal<HTMLDivElement>();
  const [open, setOpen] = useState<number | null>(null);

  return (
    <div
      ref={ref}
      style={{
        maxWidth: 800,
        margin: "0 auto",
        padding: "40px 24px 60px",
      }}
    >
      <h2
        className="lsd-reveal"
        style={{
          fontFamily: "var(--font-heading), sans-serif",
          fontSize: "clamp(28px, 3.2vw, 42px)",
          fontWeight: 600,
          letterSpacing: "-0.03em",
          color: "#171717",
          textAlign: "center",
          margin: "0 0 40px",
        }}
      >
        {DATA.faq.heading}
      </h2>

      <ul
        className="lsd-reveal"
        style={{ listStyle: "none", padding: 0, margin: 0 }}
      >
        {DATA.faq.items.map((f, idx) => (
          <li
            key={f.question}
            className="lsd-faq-item"
            data-open={open === idx}
          >
            <button
              type="button"
              className="lsd-faq-button"
              aria-expanded={open === idx}
              onClick={() => setOpen((o) => (o === idx ? null : idx))}
            >
              <span>{f.question}</span>
              <span className="lsd-faq-chevron" aria-hidden="true">
                +
              </span>
            </button>
            <div className="lsd-faq-body">
              <p>{f.answer}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*  Section: Final CTA                                                        */
/* -------------------------------------------------------------------------- */

function FinalCta() {
  return (
    <section style={{ padding: "80px 24px" }}>
      <div
        className="lsd-cta-card"
        style={{ maxWidth: 900, margin: "0 auto" }}
      >
        <h2
          style={{
            fontFamily: "var(--font-heading), sans-serif",
            fontSize: "clamp(28px, 3.5vw, 42px)",
            fontWeight: 600,
            letterSpacing: "-0.03em",
            color: "#fff",
            margin: "0 0 16px",
          }}
        >
          {DATA.finalCta.heading}
        </h2>
        <p
          style={{
            fontSize: 16,
            lineHeight: 1.6,
            color: "rgba(255,255,255,0.78)",
            maxWidth: 640,
            margin: "0 auto 32px",
          }}
        >
          {DATA.finalCta.subhead}
        </p>

        <div
          style={{
            display: "flex",
            gap: 14,
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          <a
            className="nautix-final-cta-button nautix-final-cta-button--primary"
            href={DATA.finalCta.primaryCta.href}
          >
            {DATA.finalCta.primaryCta.label}
          </a>
          <a
            className="nautix-final-cta-button nautix-final-cta-button--secondary"
            href={DATA.finalCta.secondaryCta.href}
            target="_blank"
            rel="noopener noreferrer"
          >
            {DATA.finalCta.secondaryCta.label}
          </a>
        </div>

        <p
          style={{
            marginTop: 20,
            fontSize: 13,
            color: "rgba(255,255,255,0.55)",
            letterSpacing: "0.03em",
          }}
        >
          {DATA.finalCta.reassurance}
        </p>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*  Page                                                                      */
/* -------------------------------------------------------------------------- */

export function LiveSystemDiagnosisPage() {
  return (
    <div className="lsd-root">
      <LsdStyles />
      <main style={{ background: "#fdfcfa", minHeight: "100vh" }}>
        <Hero />
        <ProblemSection />
        <HowItWorks />
        <CapabilitiesGrid />
        <IndustryUseCases />
        <OutcomesSection />
        <FaqSection />
        <FinalCta />
      </main>
    </div>
  );
}
