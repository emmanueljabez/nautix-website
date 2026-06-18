"use client";

/**
 * IspLandingPage — orchestrator for the ISP landing page at nautix.io/isp.
 *
 * Section 1: Hero with CSS-based WhatsApp chat animation.
 * Future sections scaffolded as placeholders.
 */

import Link from "next/link";
import { useEffect, useRef } from "react";
import { AnimStyles } from "@/components/ui/AnimStyles";
import { ArrowRight } from "@/components/ui/ArrowRight";
import { Pill } from "@/components/ui/Pill";
import { HERO_DATA } from "@/lib/isp-data";

const BOOK_DEMO_URL =
  "https://app.nautix.io/book/skVGGbpLujeMxRTL2JgwnzUut4AC3N-X/xU-NHVEi4rMuY9DlQZdvrHqnJkY-YVAp";

/* -------------------------------------------------------------------------- */
/*  Chat data                                                                 */
/* -------------------------------------------------------------------------- */

interface ChatMsg {
  id: string;
  sender: "customer" | "ai";
  text: string;
  time: string;
}

const CHAT_MSGS: ChatMsg[] = [
  {
    id: "c1",
    sender: "customer",
    text: "My internet has been down since 10pm 😤",
    time: "11:47 PM",
  },
  {
    id: "a1",
    sender: "ai",
    text: "Hi David — I can see your router lost connection at 10:58pm. Rebooting now 🔧",
    time: "11:48 PM",
  },
  {
    id: "a2",
    sender: "ai",
    text: "Done ✅ Internet restored. Signal strong at 48 Mbps. All good?",
    time: "11:49 PM",
  },
  {
    id: "c2",
    sender: "customer",
    text: "Wow that was fast 🙏",
    time: "11:49 PM",
  },
];

/* -------------------------------------------------------------------------- */
/*  Chat Animation — 6-second looping WhatsApp conversation                   */
/* -------------------------------------------------------------------------- */

function ChatAnimation() {
  const containerRef = useRef<HTMLDivElement>(null);
  const activeRef = useRef(true);

  useEffect(() => {
    activeRef.current = true;
    const delay = (ms: number) =>
      new Promise<void>((r) => {
        window.setTimeout(r, ms);
      });

    // ——— DOM helpers ———
    function addBubble(msg: ChatMsg, parent: HTMLDivElement) {
      const isCustomer = msg.sender === "customer";

      const wrapper = document.createElement("div");
      wrapper.className = `flex flex-col ${
        isCustomer ? "items-start" : "items-end"
      }`;
      wrapper.style.animation = "msg-in 0.5s ease both";

      // Bubble
      const bubble = document.createElement("div");
      bubble.className = `max-w-[88%] rounded-2xl px-3.5 py-2.5 text-[13px] leading-[1.45] ${
        isCustomer
          ? "rounded-tl-sm bg-neutral-900 text-white"
          : "rounded-tr-sm text-white"
      }`;
      if (!isCustomer) {
        bubble.style.background =
          "linear-gradient(135deg,#7C3AED,#EC4899)";
      }
      bubble.textContent = msg.text;

      // Timestamp
      const timeEl = document.createElement("span");
      timeEl.className = `mt-1 text-[10px] tracking-[0.04em] ${
        isCustomer ? "text-black/35 pl-1" : "text-white/55 pr-1"
      }`;
      timeEl.textContent = msg.time;

      wrapper.appendChild(bubble);
      wrapper.appendChild(timeEl);
      parent.appendChild(wrapper);
    }

    function addTyping(parent: HTMLDivElement) {
      const wrapper = document.createElement("div");
      wrapper.className = "flex flex-col items-end typing-indicator";
      wrapper.style.animation = "msg-in 0.3s ease both";

      const dots = document.createElement("div");
      dots.className =
        "flex gap-1 rounded-2xl bg-white px-3 py-2 shadow-sm ring-1 ring-black/5";
      for (let i = 0; i < 3; i++) {
        const dot = document.createElement("span");
        dot.className =
          "h-1.5 w-1.5 animate-bounce rounded-full bg-black/40";
        if (i === 1) dot.style.animationDelay = "150ms";
        if (i === 2) dot.style.animationDelay = "300ms";
        dots.appendChild(dot);
      }
      wrapper.appendChild(dots);
      parent.appendChild(wrapper);
    }

    function removeTyping(parent: HTMLDivElement) {
      const el = parent.querySelector(".typing-indicator");
      if (el) el.remove();
    }

    // ——— Sequence ———
    let mounted = true;

    const sequence = async () => {
      const el = containerRef.current;
      if (!el) return;
      el.innerHTML = ""; // reset

      if (!activeRef.current || !mounted) return;
      await delay(100);

      // 1) Customer message — 11:47 PM
      if (!activeRef.current) return;
      addBubble(CHAT_MSGS[0], el);
      await delay(1000);

      // 2) Typing dots
      if (!activeRef.current) return;
      addTyping(el);
      await delay(900);

      // 3) AI reply 1 — 11:48 PM
      if (!activeRef.current) return;
      removeTyping(el);
      addBubble(CHAT_MSGS[1], el);
      await delay(900);

      // 4) AI reply 2 — 11:49 PM
      if (!activeRef.current) return;
      addBubble(CHAT_MSGS[2], el);
      await delay(900);

      // 5) Customer ack — 11:49 PM
      if (!activeRef.current) return;
      addBubble(CHAT_MSGS[3], el);
      await delay(1600);

      // Loop
      if (activeRef.current) sequence();
    };

    const t = window.setTimeout(() => sequence(), 200);
    return () => {
      mounted = false;
      activeRef.current = false;
      window.clearTimeout(t);
    };
  }, []);

  return (
    <div className="relative overflow-hidden rounded-3xl bg-white p-3 shadow-[0_20px_60px_-20px_rgba(11,11,14,0.2)] ring-1 ring-black/5 md:p-4">
      {/* Chat header — minimal, no phone frame */}
      <div className="mb-3 flex items-center gap-2 border-b border-black/5 pb-2">
        <span className="flex h-2 w-2 rounded-full bg-emerald-500" />
        <span className="text-[10px] font-medium uppercase tracking-[0.14em] text-black/45">
          Live · Nautix AI
        </span>
      </div>

      {/* Message container */}
      <div ref={containerRef} className="min-h-[180px] space-y-2.5">
        {/* Initial fallback shown before JS hydrates */}
        <div className="flex h-[120px] items-center justify-center text-[12px] text-black/30">
          <span className="animate-pulse">Waiting for message…</span>
        </div>
      </div>

      <noscript>
        <div className="mt-3 rounded-lg bg-amber-50 p-3 text-[12px] text-amber-800">
          Enable JavaScript to see the live chat demo.
        </div>
      </noscript>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*  Hero Section                                                              */
/* -------------------------------------------------------------------------- */

function HeroSection() {
  const { headline, subheadline, credibilityChips, primaryCta, secondaryCta } =
    HERO_DATA;

  return (
    <section className="relative overflow-hidden bg-[#FAF8F5] pb-20 pt-20 md:pb-32 md:pt-28">
      {/* Mesh backdrop */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div
          className="absolute -left-40 top-0 h-[520px] w-[520px] rounded-full opacity-60 blur-3xl"
          style={{
            background:
              "radial-gradient(closest-side, #C4B5FD 0%, rgba(196,181,253,0) 70%)",
            animation: "float-slow 14s ease-in-out infinite",
          }}
        />
        <div
          className="absolute -right-40 -top-20 h-[520px] w-[520px] rounded-full opacity-60 blur-3xl"
          style={{
            background:
              "radial-gradient(closest-side, #FBCFE8 0%, rgba(251,207,232,0) 70%)",
            animation: "float-med 18s ease-in-out infinite",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-[1280px] px-6 md:px-10">
        <div className="grid items-center gap-12 md:grid-cols-[1.2fr_1fr]">
          {/* ── Left: copy ── */}
          <div>
            <h1 className="font-[var(--font-heading)] text-[clamp(34px,5.6vw,72px)] font-semibold leading-[0.98] tracking-[-0.035em] text-neutral-900">
              {headline}
            </h1>

            <p className="mt-6 max-w-[600px] text-[17px] leading-[1.6] text-black/65 md:text-[18px]">
              {subheadline}
            </p>

            {/* Credibility chips (3 pills) */}
            <div className="mt-8 flex flex-wrap items-center gap-3">
              {credibilityChips.map((chip) => (
                <Pill key={chip.text}>
                  {chip.icon} {chip.text}
                </Pill>
              ))}
            </div>

            {/* CTAs */}
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Link
                href={BOOK_DEMO_URL}
                className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full px-7 py-4 text-[15px] font-semibold text-white shadow-lg transition-shadow hover:shadow-xl"
                style={{
                  background:
                    "linear-gradient(92deg,#7C3AED 0%,#EC4899 100%)",
                  backgroundSize: "200% auto",
                  animation: "gradient-shift 6s ease-in-out infinite",
                }}
              >
                <span>{primaryCta}</span>
                <ArrowRight className="transition-transform group-hover:translate-x-0.5" />
              </Link>

              <Link
                href="#"
                className="inline-flex items-center gap-2 text-[14px] font-medium text-black/50 underline underline-offset-4 decoration-black/20 transition hover:text-black/80 hover:decoration-black/40"
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  aria-hidden
                  className="shrink-0"
                >
                  <path d="M6 4v8l6-4-6-4Z" />
                </svg>
                {secondaryCta}
              </Link>
            </div>
          </div>

          {/* ── Right: WhatsApp chat animation ── */}
          <div className="w-full max-w-[440px] md:ml-auto">
            <ChatAnimation />
          </div>
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*  Future sections — placeholder                                             */
/* -------------------------------------------------------------------------- */

function PlaceholderSection({ label }: { label: string }) {
  return (
    <section className="border-t border-black/5 bg-[#FAF8F5] py-24">
      <div className="mx-auto max-w-[1280px] px-6 text-center md:px-10">
        <p className="font-[var(--font-heading)] text-2xl text-black/30">
          {label}
        </p>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*  Page                                                                      */
/* -------------------------------------------------------------------------- */

export function IspLandingPage() {
  return (
    <main className="min-h-screen bg-[#FAF8F5] text-neutral-900">
      <AnimStyles />
      <HeroSection />
      <PlaceholderSection label="Section 2 — Problem (pain cards)" />
      <PlaceholderSection label="Section 3 — Capabilities" />
      <PlaceholderSection label="Section 4 — Pioneer Moment" />
      <PlaceholderSection label="Section 5 — Numbers" />
      <PlaceholderSection label="Section 6 — Integration" />
      <PlaceholderSection label="Section 7 — Pilot Offer" />
      <PlaceholderSection label="Section 8 — FAQ" />
      <PlaceholderSection label="Section 9 — Testimonial" />
      <PlaceholderSection label="Section 10 — Final CTA" />
    </main>
  );
}