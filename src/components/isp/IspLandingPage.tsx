"use client";

/**
 * IspLandingPage — orchestrator for the ISP landing page at nautix.io/isp.
 *
 * Page intro (PricingPage-style): pill label + heading + subheading
 * Section 1: Hero with CSS‑based WhatsApp chat animation.
 * Section 2: Problem validation (pain cards).
 * Section 3: Capabilities (6-card 2×3 grid).
 * Section 4: Pioneer Moment (timeline + chat recreation).
 * Future sections scaffolded as placeholders.
 */

import Link from "next/link";
import { useEffect, useRef } from "react";
import { AnimStyles } from "@/components/ui/AnimStyles";
import { IspProblemCards } from "@/components/isp/IspProblemCards";
import { IspCapabilities } from "@/components/isp/IspCapabilities";
import { IspPioneerMoment } from "@/components/isp/IspPioneerMoment";
import { IspNumbers } from "@/components/isp/IspNumbers";
import { IspIntegration } from "@/components/isp/IspIntegration";
import { IspPilotOffer } from "@/components/isp/IspPilotOffer";
import { IspFaq } from "@/components/isp/IspFaq";
import { IspTestimonial } from "@/components/isp/IspTestimonial";
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
/*  Chat Animation — 6‑second looping WhatsApp conversation                   */
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

    function addBubble(msg: ChatMsg, parent: HTMLDivElement) {
      const isCustomer = msg.sender === "customer";

      const wrapper = document.createElement("div");
      wrapper.className = `flex flex-col ${
        isCustomer ? "items-start" : "items-end"
      }`;
      wrapper.style.animation = "msg-in 0.5s ease both";

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

      const timeEl = document.createElement("span");
      timeEl.className =
        "mt-1 text-[10px] tracking-[0.04em] text-black/45";
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

    let mounted = true;

    const sequence = async () => {
      const el = containerRef.current;
      if (!el) return;
      el.innerHTML = "";

      if (!activeRef.current || !mounted) return;
      await delay(100);

      if (!activeRef.current) return;
      addBubble(CHAT_MSGS[0], el);
      await delay(1000);

      if (!activeRef.current) return;
      addTyping(el);
      await delay(900);

      if (!activeRef.current) return;
      removeTyping(el);
      addBubble(CHAT_MSGS[1], el);
      await delay(900);

      if (!activeRef.current) return;
      addBubble(CHAT_MSGS[2], el);
      await delay(900);

      if (!activeRef.current) return;
      addBubble(CHAT_MSGS[3], el);
      await delay(1600);

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
    <div className="relative overflow-hidden rounded-3xl shadow-[0_20px_60px_-20px_rgba(11,11,14,0.2)] ring-1 ring-black/5">
      {/* WhatsApp header */}
      <div className="flex items-center gap-3 bg-[#075E54] px-4 py-3">
        <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white/20 text-[13px] font-semibold text-white">
          D
        </span>
        <div className="min-w-0">
          <div className="truncate text-[13px] font-medium leading-tight text-white">
            David
          </div>
          <div className="text-[10px] leading-tight text-white/65">online</div>
        </div>
      </div>

      {/* Chat body — WhatsApp wallpaper */}
      <div
        className="p-3 md:p-4"
        style={{
          backgroundColor: "#E5DDD5",
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23d2c9bc' fill-opacity='0.28'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
        }}
      >
        <div ref={containerRef} className="min-h-[180px] space-y-2.5">
          <div className="flex h-[120px] items-center justify-center text-[12px] text-black/30">
            <span className="animate-pulse">Waiting for message…</span>
          </div>
        </div>
      </div>

      <noscript>
        <div className="rounded-b-3xl bg-amber-50 p-3 text-[12px] text-amber-800">
          Enable JavaScript to see the live chat demo.
        </div>
      </noscript>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*  Page Intro — PricingPage-style 3‑part header above the hero              */
/* -------------------------------------------------------------------------- */

function PageIntro() {
  return (
    <section className="bg-white pb-0 pt-16 md:pt-20">
      <div className="mx-auto max-w-[1280px] px-6 md:px-10">
        <div className="mx-auto max-w-[780px] text-center">
          {/* Pill label — "For ISPs" inside border rounded-pill */}
          <div className="inline-block rounded-full border border-primary/20 px-4 py-1">
            <p className="title tg-element-title mb-0">For ISPs</p>
          </div>

          {/* Heading */}
          <h2 className="title tg-element-title mb-0 mt-2 md:mt-3">
            Run your ISP —{" "}
            <span className="px-1">automatically.</span>
          </h2>

          {/* Subheading */}
          <p className="title tg-element-title mb-0 mt-2 md:mt-3">
            Stop losing subscribers to 11pm WhatsApp messages.
            Automate billing, outages, and support — across every
            channel.
          </p>
        </div>
      </div>
    </section>
  );
}
    

/* -------------------------------------------------------------------------- */
/*  Hero Section                                                              */
/* -------------------------------------------------------------------------- */

function HeroSection() {
  const { headline, subheadline, primaryCta, secondaryCta } = HERO_DATA;

  return (
    <section className="relative overflow-hidden bg-white pb-20 pt-10 md:pb-32 md:pt-16">
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
            <h1 className="font-[var(--font-heading)] text-[clamp(34px,5.6vw,72px)] font-semibold leading-[0.98] tracking-[-0.035em] text-primary-950">
              {headline}
            </h1>

            <p className="mt-6 max-w-[600px] text-[17px] leading-[1.6] text-foreground/70 md:text-[18px]">
              {subheadline}
            </p>

            {/* CTAs */}
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Link
                href={BOOK_DEMO_URL}
                className="group inline-flex items-center gap-2 rounded-full bg-primary-700 px-7 py-4 text-[15px] font-semibold text-white shadow-md transition-colors hover:bg-primary-800"
              >
                <span>{primaryCta}</span>
                <i
                  className="fs-8 unicon-arrow-up-right fw-bold"
                  aria-hidden="true"
                />
              </Link>

              <Link
                href="#"
                className="inline-flex items-center gap-2 text-[14px] font-medium text-foreground/50 underline underline-offset-4 decoration-black/20 transition hover:text-foreground/80 hover:decoration-black/40"
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
    <section className="border-t border-primary-100/50 bg-white py-24">
      <div className="mx-auto max-w-[1280px] px-6 text-center md:px-10">
        <p className="font-[var(--font-heading)] text-2xl text-foreground/30">
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
    <main className="min-h-screen bg-white text-foreground">
      <AnimStyles />
      <PageIntro />
      <HeroSection />
      <IspProblemCards />
      <IspCapabilities />
      <IspPioneerMoment />
      <IspNumbers />
      <IspIntegration />
      <IspPilotOffer />
      <IspFaq />
      <IspTestimonial />
      <PlaceholderSection label="Section 10 — Final CTA" />
    </main>
  );
}