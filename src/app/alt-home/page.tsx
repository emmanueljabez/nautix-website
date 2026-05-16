"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const BOOK_DEMO_URL =
  "https://app.nautix.io/book/skVGGbpLujeMxRTL2JgwnzUut4AC3N-X/xU-NHVEi4rMuY9DlQZdvrHqnJkY-YVAp";

/* -------------------------------------------------------------------------- */
/*  Inline animation stylesheet                                               */
/* -------------------------------------------------------------------------- */

function AnimStyles() {
  return (
    <style>{`
      @keyframes float-slow {
        0%,100% { transform: translate(0,0) scale(1); }
        50%     { transform: translate(30px,-20px) scale(1.05); }
      }
      @keyframes float-med {
        0%,100% { transform: translate(0,0) scale(1); }
        50%     { transform: translate(-40px,25px) scale(1.08); }
      }
      @keyframes float-fast {
        0%,100% { transform: translate(0,0) scale(1); }
        50%     { transform: translate(20px,30px) scale(0.96); }
      }
      @keyframes gradient-shift {
        0%,100% { background-position: 0% 50%; }
        50%     { background-position: 100% 50%; }
      }
      @keyframes marquee {
        from { transform: translateX(0); }
        to   { transform: translateX(-50%); }
      }
      @keyframes pulse-ring {
        0%   { transform: scale(0.8); opacity: 0.6; }
        100% { transform: scale(1.8); opacity: 0; }
      }
      @keyframes dash {
        to { stroke-dashoffset: -400; }
      }
      @keyframes blink {
        50% { opacity: 0; }
      }
      @keyframes msg-in {
        0%   { opacity: 0; transform: translateY(6px) scale(0.98); }
        100% { opacity: 1; transform: translateY(0) scale(1); }
      }
      @keyframes orbit {
        from { transform: rotate(0deg) translateX(var(--r)) rotate(0deg); }
        to   { transform: rotate(360deg) translateX(var(--r)) rotate(-360deg); }
      }
      @keyframes fade-up {
        from { opacity: 0; transform: translateY(16px); }
        to   { opacity: 1; transform: translateY(0); }
      }
      .reveal { opacity: 0; }
      .reveal.in { animation: fade-up 0.9s cubic-bezier(.22,.61,.36,1) forwards; }
      .marquee-track { animation: marquee 38s linear infinite; }
      .grad-text {
        background: linear-gradient(92deg,#0B0B0E 0%,#7C3AED 45%,#EC4899 75%,#0B0B0E 100%);
        background-size: 200% auto;
        -webkit-background-clip: text;
        background-clip: text;
        -webkit-text-fill-color: transparent;
        animation: gradient-shift 9s ease-in-out infinite;
      }
      .cursor::after {
        content: "";
        display: inline-block;
        width: 3px; height: 0.9em;
        margin-left: 4px;
        background: #7C3AED;
        vertical-align: -0.05em;
        animation: blink 1s steps(2) infinite;
      }
    `}</style>
  );
}

/* -------------------------------------------------------------------------- */
/*  Primitives                                                                */
/* -------------------------------------------------------------------------- */

function Wordmark({ className = "" }: { className?: string }) {
  return (
    <span
      className={`font-[var(--font-heading)] text-[20px] font-semibold tracking-[-0.02em] ${className}`}
    >
      nautix
      <span className="ml-[2px] inline-block h-[6px] w-[6px] translate-y-[-10px] rounded-full bg-gradient-to-r from-[#7C3AED] to-[#EC4899] align-top" />
    </span>
  );
}

function Pill({ children, tone = "light" }: { children: React.ReactNode; tone?: "light" | "dark" }) {
  const cls =
    tone === "light"
      ? "border-black/10 bg-white text-black/70"
      : "border-white/15 bg-white/5 text-white/70";
  return (
    <span
      className={`inline-flex items-center gap-2 rounded-full border ${cls} px-3 py-1 text-[11px] font-medium uppercase tracking-[0.18em] backdrop-blur`}
    >
      <span className="relative flex h-1.5 w-1.5">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#7C3AED] opacity-75" />
        <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-[#7C3AED]" />
      </span>
      {children}
    </span>
  );
}

function ArrowRight({ className = "" }: { className?: string }) {
  return (
    <svg className={className} width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden>
      <path
        d="M3 7h8m0 0L7.5 3.5M11 7l-3.5 3.5"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/* Hook: reveal-on-scroll */
function useReveal<T extends HTMLElement>() {
  const ref = useRef<T>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    el.querySelectorAll<HTMLElement>(".reveal").forEach((n) => io.observe(n));
    return () => io.disconnect();
  }, []);
  return ref;
}

/* Animated counter */
function Counter({ to, suffix = "", duration = 1600 }: { to: number; suffix?: string; duration?: number }) {
  const [v, setV] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting && !started.current) {
          started.current = true;
          const start = performance.now();
          const tick = (now: number) => {
            const p = Math.min(1, (now - start) / duration);
            const eased = 1 - Math.pow(1 - p, 3);
            setV(to * eased);
            if (p < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
        }
      });
    });
    io.observe(el);
    return () => io.disconnect();
  }, [to, duration]);
  const display =
    to % 1 === 0 ? Math.round(v).toString() : v.toFixed(1);
  return (
    <span ref={ref}>
      {display}
      {suffix}
    </span>
  );
}

/* -------------------------------------------------------------------------- */
/*  Nav                                                                        */
/* -------------------------------------------------------------------------- */

function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 20);
      const h = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(h > 0 ? Math.min(1, y / h) : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-black/5 bg-[#FAF8F5]/80 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div
        aria-hidden
        className="absolute inset-x-0 bottom-0 h-[2px] origin-left"
        style={{
          transform: `scaleX(${progress})`,
          background: "linear-gradient(92deg,#7C3AED 0%,#EC4899 100%)",
          transition: "transform 80ms linear",
        }}
      />
      <div className="mx-auto flex max-w-[1280px] items-center justify-between px-6 py-4 md:px-10">
        <Link href="/alt-home" className="text-neutral-900">
          <Wordmark />
        </Link>
        <nav className="hidden items-center gap-8 text-[13px] text-black/65 md:flex">
          <Link href="#product" className="transition hover:text-black">Product</Link>
          <Link href="#flow" className="transition hover:text-black">How it works</Link>
          <Link href="#customers" className="transition hover:text-black">Customers</Link>
          <Link href="#pricing" className="transition hover:text-black">Pricing</Link>
          <Link href="#faq" className="transition hover:text-black">FAQ</Link>
        </nav>
        <div className="flex items-center gap-2">
          <Link href="/demo" className="hidden text-[13px] text-black/65 transition hover:text-black md:inline-flex">
            Sign in
          </Link>
          <Link
            href="/demo"
            className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-neutral-900 px-4 py-2 text-[13px] font-medium text-white transition"
          >
            <span
              className="absolute inset-0 opacity-0 transition-opacity group-hover:opacity-100"
              style={{
                background:
                  "linear-gradient(92deg,#7C3AED 0%,#EC4899 100%)",
              }}
            />
            <span className="relative">Get started</span>
            <ArrowRight className="relative transition-transform group-hover:translate-x-0.5" />
          </Link>
        </div>
      </div>
    </header>
  );
}

/* -------------------------------------------------------------------------- */
/*  Hero — mesh gradient, typing headline, orbiting channel chips             */
/* -------------------------------------------------------------------------- */

const ROTATING_WORDS = ["leads.", "support.", "checkout.", "loyalty.", "renewals."];

function useTypingLoop(words: string[], speed = 90, pause = 1400) {
  const [text, setText] = useState("");
  const [i, setI] = useState(0);
  const [deleting, setDeleting] = useState(false);
  useEffect(() => {
    const current = words[i];
    const done = !deleting && text === current;
    const empty = deleting && text === "";
    let t: number;
    if (done) {
      t = window.setTimeout(() => setDeleting(true), pause);
    } else if (empty) {
      t = window.setTimeout(() => {
        setDeleting(false);
        setI((n) => (n + 1) % words.length);
      }, 60);
    } else {
      t = window.setTimeout(
        () => setText(deleting ? current.slice(0, text.length - 1) : current.slice(0, text.length + 1)),
        deleting ? speed / 1.6 : speed
      );
    }
    return () => window.clearTimeout(t);
  }, [text, deleting, i, words, speed, pause]);
  return text;
}

function Hero() {
  const ref = useReveal<HTMLDivElement>();
  const typed = useTypingLoop(ROTATING_WORDS);
  return (
    <section ref={ref} className="relative overflow-hidden bg-[#FAF8F5] pt-10">
      {/* Mesh blobs */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div
          className="absolute -left-40 top-20 h-[520px] w-[520px] rounded-full opacity-60 blur-3xl"
          style={{
            background:
              "radial-gradient(closest-side, #C4B5FD 0%, rgba(196,181,253,0) 70%)",
            animation: "float-slow 14s ease-in-out infinite",
          }}
        />
        <div
          className="absolute right-[-10%] top-[-5%] h-[560px] w-[560px] rounded-full opacity-60 blur-3xl"
          style={{
            background:
              "radial-gradient(closest-side, #FBCFE8 0%, rgba(251,207,232,0) 70%)",
            animation: "float-med 18s ease-in-out infinite",
          }}
        />
        <div
          className="absolute left-1/2 bottom-[-10%] h-[480px] w-[480px] -translate-x-1/2 rounded-full opacity-55 blur-3xl"
          style={{
            background:
              "radial-gradient(closest-side, #FDE68A 0%, rgba(253,230,138,0) 70%)",
            animation: "float-fast 22s ease-in-out infinite",
          }}
        />
      </div>

      {/* Subtle grid overlay */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(11,11,14,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(11,11,14,0.06) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
          maskImage:
            "radial-gradient(ellipse at center, black 40%, transparent 75%)",
          WebkitMaskImage:
            "radial-gradient(ellipse at center, black 40%, transparent 75%)",
        }}
      />

      <div className="relative mx-auto max-w-[1280px] px-6 pb-24 pt-24 md:px-10 md:pb-32 md:pt-32">
        <div className="reveal">
          <Pill>New · Nautix 2.0 · AI agents that close</Pill>
        </div>

        <h1 className="reveal mt-8 max-w-[1080px] font-[var(--font-heading)] text-[clamp(44px,8.4vw,120px)] font-semibold leading-[0.95] tracking-[-0.035em] text-neutral-900">
          An AI teammate that
          <br />
          <span className="grad-text">handles</span>{" "}
          <span className="cursor">{typed}</span>
        </h1>

        <p className="reveal mt-8 max-w-[580px] text-[18px] leading-[1.55] text-black/65">
          Nautix unifies WhatsApp, Instagram, and Facebook into one inbox run by
          a grounded AI agent — and the humans it hands off to. Ship better
          conversations. Close more of them.
        </p>

        <div className="reveal mt-10 flex flex-wrap items-center gap-3">
          <Link
            href={BOOK_DEMO_URL}
            className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full px-6 py-3.5 text-[14px] font-medium text-white"
            style={{
              background: "linear-gradient(92deg,#7C3AED 0%,#EC4899 100%)",
              backgroundSize: "200% auto",
              animation: "gradient-shift 6s ease-in-out infinite",
            }}
          >
            <span>Book a demo</span>
            <ArrowRight className="transition-transform group-hover:translate-x-0.5" />
          </Link>
          <Link
            href="#product"
            className="inline-flex items-center gap-2 rounded-full border border-black/15 bg-white/60 px-6 py-3.5 text-[14px] font-medium text-neutral-900 backdrop-blur transition hover:border-black/30 hover:bg-white"
          >
            Watch 90s tour
            <svg width="14" height="14" viewBox="0 0 14 14" fill="currentColor" aria-hidden>
              <path d="M4 3.5v7l6-3.5-6-3.5Z" />
            </svg>
          </Link>
        </div>

        {/* Orbiting product dock */}
        <div className="reveal relative mt-24 hidden h-[220px] md:block">
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            <div
              className="relative flex h-28 w-28 items-center justify-center rounded-full text-white shadow-xl"
              style={{
                background: "linear-gradient(135deg,#7C3AED,#EC4899)",
              }}
            >
              <span
                aria-hidden
                className="absolute inset-0 rounded-full"
                style={{
                  boxShadow: "0 0 0 0 rgba(124,58,237,0.6)",
                  animation: "pulse-ring 2.6s ease-out infinite",
                }}
              />
              <span className="font-[var(--font-heading)] text-[26px] font-semibold tracking-[-0.02em]">
                ai
              </span>
            </div>
            {/* Orbit ring */}
            <div className="absolute left-1/2 top-1/2 h-[360px] w-[360px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-black/15" />
            {["WhatsApp","Instagram","Messenger","Webchat","Shopify","HubSpot"].map((label, idx, arr) => {
              const r = 180;
              const delay = -(idx * (36 / arr.length));
              return (
                <div
                  key={label}
                  className="absolute left-1/2 top-1/2"
                  style={
                    {
                      "--r": `${r}px`,
                      animation: `orbit 36s linear infinite`,
                      animationDelay: `${delay}s`,
                    } as React.CSSProperties
                  }
                >
                  <div className="-ml-14 -mt-5 flex items-center gap-2 rounded-full border border-black/10 bg-white px-3 py-1.5 text-[12px] font-medium text-neutral-900 shadow-sm">
                    <span className="h-1.5 w-1.5 rounded-full bg-gradient-to-r from-[#7C3AED] to-[#EC4899]" />
                    {label}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*  Logo marquee                                                              */
/* -------------------------------------------------------------------------- */

const LOGOS = [
  "Kōbe Atelier","Lumen & Co.","Northwind","Harbor Goods","Maison Rive",
  "Oslo Type","Verdant","Plein Air","Kite Club","Solstice","Pavilion","Roam",
];

function LogoBand() {
  return (
    <section className="border-y border-black/5 bg-white">
      <div className="mx-auto max-w-[1280px] px-6 py-10 md:px-10">
        <p className="mb-6 text-center text-[11px] uppercase tracking-[0.22em] text-black/45">
          Trusted by operations teams at
        </p>
        <div className="relative overflow-hidden">
          <div className="marquee-track flex w-max gap-14 whitespace-nowrap">
            {[...LOGOS, ...LOGOS].map((name, i) => (
              <span
                key={`${name}-${i}`}
                className="font-[var(--font-heading)] text-[19px] font-medium tracking-[-0.01em] text-black/45 transition hover:text-black"
              >
                {name}
              </span>
            ))}
          </div>
          {/* Edge fades */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-white to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-white to-transparent" />
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*  Stats                                                                     */
/* -------------------------------------------------------------------------- */

function Stats() {
  const ref = useReveal<HTMLDivElement>();
  const items = [
    { n: 72, suf: "%", l: "of tickets resolved without a human" },
    { n: 9,  suf: "s", l: "median first-response across every channel" },
    { n: 3.4,suf: "×", l: "lift on qualified leads from social DMs" },
    { n: 24, suf: "/7", l: "multilingual coverage out of the box" },
  ];
  return (
    <section ref={ref} className="bg-[#FAF8F5] text-neutral-900">
      <div className="mx-auto max-w-[1280px] px-6 py-28 md:px-10 md:py-40">
        <h2 className="reveal max-w-[900px] font-[var(--font-heading)] text-[clamp(34px,5.2vw,72px)] font-semibold leading-[1.02] tracking-[-0.025em]">
          Measured where it matters —{" "}
          <span className="grad-text">in the inbox</span>, not the dashboard.
        </h2>

        <div className="mt-16 grid gap-10 md:grid-cols-4 md:gap-0">
          {items.map((it, i) => (
            <div
              key={it.l}
              className={`reveal pt-8 md:px-8 ${i !== 0 ? "md:border-l md:border-black/10" : ""}`}
              style={{ animationDelay: `${i * 80}ms` }}
            >
              <div className="font-[var(--font-heading)] text-[64px] font-semibold leading-none tracking-[-0.04em] md:text-[80px]">
                <Counter to={it.n} suffix={it.suf} />
              </div>
              <p className="mt-5 max-w-[220px] text-[14px] leading-[1.5] text-black/60">
                {it.l}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*  Live activity ticker                                                      */
/* -------------------------------------------------------------------------- */

const ACTIVITY_SEED = [
  { ch: "WhatsApp", acc: "#25D366", name: "Anaïs L.", city: "Berlin", type: "Resolved", ms: 38 },
  { ch: "Instagram", acc: "#E1306C", name: "@sofia.m", city: "Milan", type: "Converted · €180", ms: 52 },
  { ch: "Messenger", acc: "#0084FF", name: "Paul V.", city: "Amsterdam", type: "Lead captured", ms: 21 },
  { ch: "WhatsApp", acc: "#25D366", name: "Kenji T.", city: "Tokyo", type: "Resolved", ms: 44 },
  { ch: "Instagram", acc: "#E1306C", name: "@kai.reads", city: "Lagos", type: "Refund · issued", ms: 63 },
  { ch: "Messenger", acc: "#0084FF", name: "Nina O.", city: "Lisbon", type: "Escalated · calmly", ms: 19 },
  { ch: "WhatsApp", acc: "#25D366", name: "Yara D.", city: "São Paulo", type: "Converted · €62", ms: 31 },
  { ch: "Instagram", acc: "#E1306C", name: "@aurora.s", city: "Stockholm", type: "Resolved", ms: 40 },
];

function LiveActivity() {
  const [items, setItems] = useState(() => ACTIVITY_SEED.slice(0, 5));
  const [count, setCount] = useState(1_284_921);
  useEffect(() => {
    const msgTick = window.setInterval(() => {
      setCount((c) => c + Math.floor(Math.random() * 4) + 1);
    }, 700);
    const feedTick = window.setInterval(() => {
      setItems((cur) => {
        const next = ACTIVITY_SEED[Math.floor(Math.random() * ACTIVITY_SEED.length)];
        return [{ ...next, ms: next.ms + Math.floor(Math.random() * 20) - 10 }, ...cur].slice(0, 5);
      });
    }, 1800);
    return () => {
      window.clearInterval(msgTick);
      window.clearInterval(feedTick);
    };
  }, []);
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-[1280px] px-6 py-20 md:px-10 md:py-28">
        <div className="grid gap-8 md:grid-cols-[1.2fr_1fr]">
          <div className="relative overflow-hidden rounded-3xl bg-neutral-900 p-8 text-white md:p-12">
            <div
              aria-hidden
              className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full blur-3xl"
              style={{ background: "radial-gradient(closest-side, rgba(236,72,153,0.45), transparent 70%)" }}
            />
            <div
              aria-hidden
              className="pointer-events-none absolute -bottom-24 -left-24 h-80 w-80 rounded-full blur-3xl"
              style={{ background: "radial-gradient(closest-side, rgba(124,58,237,0.45), transparent 70%)" }}
            />
            <div className="relative">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.18em] text-white/70 backdrop-blur">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400" />
                </span>
                Live · worldwide
              </div>
              <div className="mt-6 font-[var(--font-heading)] text-[clamp(40px,6vw,88px)] font-semibold leading-[0.98] tracking-[-0.035em] tabular-nums">
                {count.toLocaleString()}
              </div>
              <p className="mt-2 text-[14px] text-white/65">
                messages handled by Nautix today — and counting.
              </p>
            </div>
          </div>

          <div className="rounded-3xl border border-black/5 bg-[#FAF8F5] p-6">
            <div className="mb-4 flex items-center justify-between">
              <div className="text-[11px] uppercase tracking-[0.2em] text-black/45">Resolutions · live</div>
              <div className="flex items-center gap-1.5 text-[11px] text-emerald-600">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                streaming
              </div>
            </div>
            <ul className="space-y-2">
              {items.map((it, idx) => (
                <li
                  key={`${it.name}-${idx}-${it.city}`}
                  className="flex items-center gap-3 rounded-xl bg-white p-3 shadow-[0_1px_0_rgba(0,0,0,0.03)]"
                  style={{ animation: "msg-in 0.55s ease both" }}
                >
                  <span
                    className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-[11px] font-semibold text-white"
                    style={{ background: it.acc }}
                  >
                    {it.ch.charAt(0)}
                  </span>
                  <div className="min-w-0 flex-1">
                    <div className="truncate text-[13px] font-medium text-neutral-900">
                      {it.name} <span className="text-black/45">· {it.city}</span>
                    </div>
                    <div className="truncate text-[12px] text-black/55">
                      {it.ch} · {it.type}
                    </div>
                  </div>
                  <div className="text-right text-[11px] text-black/45">
                    <div className="tabular-nums text-neutral-900">{it.ms}s</div>
                    <div>handle</div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*  Product — tabbed inbox dashboard                                          */
/* -------------------------------------------------------------------------- */

type ChannelKey = "whatsapp" | "instagram" | "messenger";

const CHANNELS: Record<
  ChannelKey,
  {
    label: string;
    accent: string;
    dot: string;
    convo: { who: "c" | "a"; text: string; meta?: string }[];
    inbox: { name: string; preview: string; tag: string; time: string; unread?: number }[];
  }
> = {
  whatsapp: {
    label: "WhatsApp",
    accent: "#25D366",
    dot: "#25D366",
    convo: [
      { who: "c", text: "Hey — is the Lumen pendant still in stock in brass?" },
      { who: "a", text: "Yes — 3 left in brushed brass. Want me to hold one while you checkout?" },
      { who: "c", text: "Please. Ship to Berlin by Friday if possible." },
      { who: "a", text: "Done — express to Berlin arrives Thu. Pay-by-link sent: pay.harbor.co/lumen-brass · €248", meta: "Resolved · 38s" },
    ],
    inbox: [
      { name: "Anaïs L.", preview: "Please. Ship to Berlin by Friday…", tag: "Commerce", time: "2m", unread: 0 },
      { name: "Jonas R.", preview: "I need to change the delivery date", tag: "Support", time: "5m", unread: 2 },
      { name: "Priya S.", preview: "Thanks for the update — works!", tag: "CSAT", time: "12m" },
      { name: "Harbor PRO", preview: "Campaign reply · Spring drop", tag: "Lead", time: "18m" },
    ],
  },
  instagram: {
    label: "Instagram",
    accent: "#E1306C",
    dot: "#E1306C",
    convo: [
      { who: "c", text: "saw the story — are the raffia clutches restocked?" },
      { who: "a", text: "Yep — the bone and olive variants landed this morning. Want me to send a preview link?" },
      { who: "c", text: "the olive. and can u ship to milan" },
      { who: "a", text: "Reserved · milan · €180. Tap to checkout ↗", meta: "Handoff skipped" },
    ],
    inbox: [
      { name: "@sofia.m", preview: "the olive. and can u ship to milan", tag: "Commerce", time: "just now", unread: 1 },
      { name: "@the_ateliers", preview: "collab inquiry — DM for brief", tag: "Partnership", time: "7m" },
      { name: "@kai.reads", preview: "returns portal link?", tag: "Support", time: "20m" },
      { name: "@aurora.studio", preview: "shoot dates?", tag: "Lead", time: "1h" },
    ],
  },
  messenger: {
    label: "Messenger",
    accent: "#0084FF",
    dot: "#0084FF",
    convo: [
      { who: "c", text: "Hi, I clicked the ad for the weekend workshop — still open?" },
      { who: "a", text: "Two seats left on Saturday. Want me to hold one under your name?" },
      { who: "c", text: "yes please, paul vermeer" },
      { who: "a", text: "Held. Confirmation + calendar invite on the way. Paul · Sat 10:00", meta: "Lead captured" },
    ],
    inbox: [
      { name: "Paul Vermeer", preview: "yes please, paul vermeer", tag: "Lead", time: "just now", unread: 1 },
      { name: "Nina Okafor", preview: "Missed the class — credit note?", tag: "Support", time: "15m" },
      { name: "Leo Hahn", preview: "Gift voucher balance check", tag: "Commerce", time: "30m" },
      { name: "Sana Belkacem", preview: "Can you do corporate bookings?", tag: "Lead", time: "1h" },
    ],
  },
};

function Dashboard({ channel }: { channel: ChannelKey }) {
  const c = CHANNELS[channel];
  return (
    <div className="relative mx-auto w-full max-w-[1080px] overflow-hidden rounded-2xl border border-black/10 bg-white shadow-[0_30px_80px_-30px_rgba(11,11,14,0.25)]">
      {/* titlebar */}
      <div className="flex items-center justify-between border-b border-black/5 bg-[#FAFAFA] px-4 py-3">
        <div className="flex items-center gap-2">
          <span className="h-3 w-3 rounded-full bg-[#FF5F57]" />
          <span className="h-3 w-3 rounded-full bg-[#FEBC2E]" />
          <span className="h-3 w-3 rounded-full bg-[#28C840]" />
          <span className="ml-4 text-[12px] text-black/50">app.nautix.ai · inbox</span>
        </div>
        <div className="flex items-center gap-2 text-[11px] text-black/45">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
          Live · agent online
        </div>
      </div>

      <div className="grid grid-cols-[220px_320px_1fr] text-[13px]">
        {/* sidebar */}
        <aside className="hidden border-r border-black/5 bg-[#FBFBFB] p-4 md:block">
          <div className="mb-4 text-[11px] uppercase tracking-[0.18em] text-black/40">Channels</div>
          {(Object.keys(CHANNELS) as ChannelKey[]).map((k) => (
            <div
              key={k}
              className={`mb-1 flex items-center justify-between rounded-lg px-2 py-2 ${
                k === channel ? "bg-neutral-900 text-white" : "text-black/70 hover:bg-black/5"
              }`}
            >
              <span className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full" style={{ background: CHANNELS[k].dot }} />
                {CHANNELS[k].label}
              </span>
              <span className={`text-[11px] ${k === channel ? "text-white/60" : "text-black/40"}`}>
                {CHANNELS[k].inbox.length}
              </span>
            </div>
          ))}
          <div className="mt-6 mb-2 text-[11px] uppercase tracking-[0.18em] text-black/40">Views</div>
          {["Unassigned","Needs human","Escalations","Snoozed"].map((v) => (
            <div key={v} className="mb-1 rounded-lg px-2 py-2 text-black/65 hover:bg-black/5">
              {v}
            </div>
          ))}
        </aside>

        {/* thread list */}
        <div className="hidden border-r border-black/5 md:block">
          <div className="sticky top-0 flex items-center justify-between border-b border-black/5 bg-white/80 px-4 py-3 backdrop-blur">
            <span className="font-medium text-neutral-900">{c.label} · open</span>
            <span className="text-[11px] text-black/45">{c.inbox.length}</span>
          </div>
          <ul>
            {c.inbox.map((t, idx) => (
              <li
                key={t.name}
                className={`group cursor-pointer border-b border-black/5 px-4 py-3 transition hover:bg-black/[0.02] ${
                  idx === 0 ? "bg-[#FBF7FF]" : ""
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="font-medium text-neutral-900">{t.name}</span>
                  <span className="text-[11px] text-black/40">{t.time}</span>
                </div>
                <div className="mt-1 truncate text-black/55">{t.preview}</div>
                <div className="mt-2 flex items-center gap-2">
                  <span
                    className="rounded-full px-2 py-0.5 text-[10px] font-medium uppercase tracking-wider"
                    style={{
                      background: "rgba(124,58,237,0.08)",
                      color: "#7C3AED",
                    }}
                  >
                    {t.tag}
                  </span>
                  {t.unread ? (
                    <span className="ml-auto flex h-4 w-4 items-center justify-center rounded-full bg-neutral-900 text-[10px] text-white">
                      {t.unread}
                    </span>
                  ) : null}
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* chat pane */}
        <div className="flex min-h-[440px] flex-col bg-white">
          <div className="flex items-center justify-between border-b border-black/5 px-5 py-3">
            <div className="flex items-center gap-3">
              <span
                className="flex h-8 w-8 items-center justify-center rounded-full text-[11px] font-semibold text-white"
                style={{ background: c.accent }}
              >
                {c.label.charAt(0)}
              </span>
              <div>
                <div className="text-[13px] font-medium text-neutral-900">
                  {c.inbox[0].name}
                </div>
                <div className="text-[11px] text-black/50">
                  {c.label} · Grounded on · Catalog v4.2
                </div>
              </div>
            </div>
            <div className="flex items-center gap-2 text-[11px]">
              <span className="rounded-full bg-emerald-50 px-2 py-0.5 text-emerald-700">CSAT 4.9</span>
              <span className="rounded-full bg-black/5 px-2 py-0.5 text-black/60">Lang · EN · DE</span>
            </div>
          </div>

          <div className="flex-1 space-y-3 bg-[#FAF8F5] px-5 py-6">
            {c.convo.map((m, i) => (
              <div
                key={`${channel}-${i}`}
                className={`flex ${m.who === "a" ? "justify-end" : "justify-start"}`}
                style={{
                  animation: "msg-in 0.5s ease both",
                  animationDelay: `${i * 180}ms`,
                }}
              >
                <div
                  className={`max-w-[78%] rounded-2xl px-3.5 py-2.5 text-[13px] leading-[1.45] ${
                    m.who === "a"
                      ? "rounded-tr-sm text-white"
                      : "rounded-tl-sm bg-white text-neutral-900 shadow-[0_1px_0_rgba(0,0,0,0.04)]"
                  }`}
                  style={
                    m.who === "a"
                      ? { background: "linear-gradient(135deg,#7C3AED,#EC4899)" }
                      : undefined
                  }
                >
                  {m.text}
                  {m.meta ? (
                    <div className="mt-1 text-[10px] uppercase tracking-[0.15em] text-white/75">
                      {m.meta}
                    </div>
                  ) : null}
                </div>
              </div>
            ))}
            <div className="flex justify-end">
              <div className="flex gap-1 rounded-2xl bg-white px-3 py-2 shadow-sm">
                <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-black/40" />
                <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-black/40 [animation-delay:150ms]" />
                <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-black/40 [animation-delay:300ms]" />
              </div>
            </div>
          </div>

          <div className="border-t border-black/5 bg-white px-5 py-3">
            <div className="flex items-center gap-3">
              <div className="flex-1 rounded-full border border-black/10 bg-[#FAFAFA] px-4 py-2 text-[12px] text-black/40">
                Nautix is composing a grounded reply…
              </div>
              <button
                className="flex h-8 w-8 items-center justify-center rounded-full text-white"
                style={{ background: "linear-gradient(135deg,#7C3AED,#EC4899)" }}
                aria-label="send"
              >
                <ArrowRight />
              </button>
            </div>
            <div className="mt-2 flex flex-wrap gap-2 text-[11px]">
              {["Offer discount","Check inventory","Escalate to human","Close resolved"].map((a) => (
                <span
                  key={a}
                  className="rounded-full border border-black/10 bg-white px-2.5 py-1 text-black/60"
                >
                  / {a}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Product() {
  const [tab, setTab] = useState<ChannelKey>("whatsapp");
  const ref = useReveal<HTMLDivElement>();
  return (
    <section id="product" ref={ref} className="relative overflow-hidden bg-white">
      <div className="mx-auto max-w-[1280px] px-6 py-28 md:px-10 md:py-40">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div className="reveal max-w-[720px]">
            <Pill>One inbox · Every channel · One agent</Pill>
            <h2 className="mt-6 font-[var(--font-heading)] text-[clamp(32px,4.8vw,64px)] font-semibold leading-[1.05] tracking-[-0.025em] text-neutral-900">
              The inbox your ops team{" "}
              <span className="grad-text">wishes they&apos;d built.</span>
            </h2>
          </div>
          <div className="reveal inline-flex rounded-full border border-black/10 bg-[#FAF8F5] p-1">
            {(Object.keys(CHANNELS) as ChannelKey[]).map((k) => (
              <button
                key={k}
                onClick={() => setTab(k)}
                className={`relative rounded-full px-4 py-2 text-[13px] font-medium transition ${
                  tab === k ? "text-white" : "text-black/60 hover:text-black"
                }`}
              >
                {tab === k && (
                  <span
                    className="absolute inset-0 rounded-full"
                    style={{
                      background: "linear-gradient(135deg,#7C3AED,#EC4899)",
                    }}
                  />
                )}
                <span className="relative">{CHANNELS[k].label}</span>
              </button>
            ))}
          </div>
        </div>

        <div className="reveal mt-12">
          <Dashboard channel={tab} />
        </div>

        {/* stat chips floating below dashboard */}
        <div className="reveal mt-8 grid gap-4 md:grid-cols-4">
          {[
            { k: "Avg handle time", v: "38s", sub: "↓ 62% vs. baseline" },
            { k: "Self-served", v: "74%", sub: "last 30 days" },
            { k: "Conversion (DM→checkout)", v: "12.8%", sub: "↑ 3.1pp" },
            { k: "CSAT", v: "4.86 / 5", sub: "2,412 responses" },
          ].map((s) => (
            <div
              key={s.k}
              className="rounded-2xl border border-black/5 bg-[#FAF8F5] p-5 transition hover:-translate-y-0.5 hover:shadow-lg"
            >
              <div className="text-[11px] uppercase tracking-[0.2em] text-black/45">
                {s.k}
              </div>
              <div className="mt-2 font-[var(--font-heading)] text-[28px] font-semibold tracking-[-0.02em] text-neutral-900">
                {s.v}
              </div>
              <div className="mt-1 text-[12px] text-emerald-600">{s.sub}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*  Agent flow diagram                                                        */
/* -------------------------------------------------------------------------- */

function AgentFlow() {
  const ref = useReveal<HTMLDivElement>();
  const nodes = [
    { x: 60, y: 70,  w: 160, label: "Message in", sub: "WhatsApp · Instagram · FB" },
    { x: 280, y: 30, w: 170, label: "Intent & PII detect", sub: "Guardrails" },
    { x: 280, y: 120, w: 170, label: "Retrieval", sub: "Catalog · Policies · Orders" },
    { x: 510, y: 75, w: 160, label: "Plan & act", sub: "Tools · side effects" },
    { x: 740, y: 30, w: 150, label: "Reply", sub: "Grounded, on-brand" },
    { x: 740, y: 120, w: 150, label: "Handoff", sub: "Full context packet" },
    { x: 960, y: 75, w: 160, label: "CRM + analytics", sub: "HubSpot · Mixpanel" },
  ];
  const edges = [
    ["0","1"], ["0","2"], ["1","3"], ["2","3"], ["3","4"], ["3","5"], ["4","6"], ["5","6"],
  ];
  const idx = (i: string) => nodes[parseInt(i, 10)];
  return (
    <section id="flow" ref={ref} className="bg-[#FAF8F5]">
      <div className="mx-auto max-w-[1280px] px-6 py-28 md:px-10 md:py-40">
        <div className="reveal">
          <Pill>Under the hood</Pill>
          <h2 className="mt-6 max-w-[900px] font-[var(--font-heading)] text-[clamp(32px,4.8vw,64px)] font-semibold leading-[1.05] tracking-[-0.025em] text-neutral-900">
            A proper agent graph — not a
            <br />
            thousand-token prompt in a trench coat.
          </h2>
        </div>

        <div className="reveal mt-16 overflow-x-auto rounded-3xl border border-black/5 bg-white p-8 shadow-sm">
          <svg viewBox="0 0 1140 220" className="w-full min-w-[900px]">
            <defs>
              <linearGradient id="flowgrad" x1="0" x2="1">
                <stop offset="0%" stopColor="#7C3AED" />
                <stop offset="100%" stopColor="#EC4899" />
              </linearGradient>
              <marker id="arrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto">
                <path d="M0,0 L10,5 L0,10 z" fill="#7C3AED" />
              </marker>
            </defs>

            {edges.map(([a, b], i) => {
              const na = idx(a);
              const nb = idx(b);
              const x1 = na.x + na.w;
              const y1 = na.y + 25;
              const x2 = nb.x;
              const y2 = nb.y + 25;
              const cx = (x1 + x2) / 2;
              return (
                <path
                  key={i}
                  d={`M ${x1} ${y1} C ${cx} ${y1}, ${cx} ${y2}, ${x2} ${y2}`}
                  stroke="url(#flowgrad)"
                  strokeWidth="1.6"
                  fill="none"
                  strokeDasharray="4 6"
                  markerEnd="url(#arrow)"
                  style={{ animation: `dash 5s linear infinite`, animationDelay: `${i * 0.2}s` }}
                />
              );
            })}

            {nodes.map((n, i) => (
              <g key={i}>
                <rect
                  x={n.x}
                  y={n.y}
                  width={n.w}
                  height={50}
                  rx={10}
                  fill="white"
                  stroke="rgba(11,11,14,0.12)"
                />
                <circle cx={n.x + 14} cy={n.y + 25} r="4" fill="url(#flowgrad)" />
                <text x={n.x + 26} y={n.y + 22} fontSize="12" fontWeight="600" fill="#0B0B0E">
                  {n.label}
                </text>
                <text x={n.x + 26} y={n.y + 38} fontSize="10" fill="rgba(11,11,14,0.55)">
                  {n.sub}
                </text>
              </g>
            ))}
          </svg>
        </div>

        <div className="reveal mt-12 grid gap-8 md:grid-cols-3">
          {[
            { t: "Grounded by default", b: "Every reply carries citations against your own content. If it can’t cite, it escalates." },
            { t: "Tool-using", b: "Takes payment, books couriers, updates CRM, books calendars. It acts, not just answers." },
            { t: "Observable", b: "Every step logged and replayable. Eval suite runs on real traffic before you flip the switch." },
          ].map((c) => (
            <div key={c.t} className="rounded-2xl border border-black/5 bg-white p-6">
              <div className="font-[var(--font-heading)] text-[18px] font-semibold tracking-[-0.01em] text-neutral-900">
                {c.t}
              </div>
              <p className="mt-2 text-[14px] leading-[1.55] text-black/60">{c.b}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*  Feature bento grid                                                        */
/* -------------------------------------------------------------------------- */

function Features() {
  const ref = useReveal<HTMLDivElement>();
  return (
    <section ref={ref} className="bg-white">
      <div className="mx-auto max-w-[1280px] px-6 py-28 md:px-10 md:py-40">
        <div className="reveal flex items-end justify-between gap-10">
          <h2 className="max-w-[720px] font-[var(--font-heading)] text-[clamp(32px,4.8vw,64px)] font-semibold leading-[1.05] tracking-[-0.025em] text-neutral-900">
            Every primitive your team
            <br />
            actually asks for.
          </h2>
        </div>

        <div className="reveal mt-14 grid auto-rows-[240px] grid-cols-1 gap-4 md:grid-cols-4">
          {/* Large — live heatmap */}
          <div className="relative row-span-2 overflow-hidden rounded-3xl border border-black/5 bg-gradient-to-br from-[#FBF7FF] via-white to-[#FFF7FB] p-6 md:col-span-2">
            <Pill>Live dashboard</Pill>
            <div className="mt-4 font-[var(--font-heading)] text-[22px] font-semibold tracking-[-0.015em]">
              Inbox heatmap
            </div>
            <p className="mt-1 max-w-[360px] text-[13px] text-black/55">
              See hotspots by channel, geography, and hour. Spot the 7pm support wave before it lands.
            </p>
            <div
              className="mt-6 grid gap-1"
              style={{ gridTemplateColumns: "repeat(24, minmax(0, 1fr))" }}
            >
              {Array.from({ length: 24 * 7 }).map((_, i) => {
                const intensity = (Math.sin(i / 5) + Math.cos(i / 3) + 2) / 4;
                const op = 0.1 + intensity * 0.7;
                return (
                  <span
                    key={i}
                    className="h-3 rounded-sm"
                    style={{
                      background: `rgba(124,58,237,${op.toFixed(2)})`,
                      animation: `fade-up 0.8s ease both`,
                      animationDelay: `${i * 3}ms`,
                    }}
                  />
                );
              })}
            </div>
            <div className="mt-4 flex items-center gap-3 text-[11px] text-black/50">
              <span>Mon</span><span>Tue</span><span>Wed</span><span>Thu</span><span>Fri</span><span>Sat</span><span>Sun</span>
            </div>
          </div>

          {/* Guardrails */}
          <div className="overflow-hidden rounded-3xl border border-black/5 bg-[#FAF8F5] p-6">
            <div className="font-[var(--font-heading)] text-[18px] font-semibold">Guardrails</div>
            <p className="mt-1 text-[13px] text-black/55">
              PII redaction, profanity, brand tone, and refusal classes — enforced per-reply.
            </p>
            <div className="mt-4 space-y-1.5 text-[11px]">
              {["PII · redacted","Tone · friendly","Unsafe · blocked","Cite-or-escalate"].map((g) => (
                <div key={g} className="flex items-center justify-between rounded-md bg-white px-2.5 py-1.5">
                  <span className="text-black/70">{g}</span>
                  <span className="text-emerald-600">ok</span>
                </div>
              ))}
            </div>
          </div>

          {/* Multilingual */}
          <div className="relative overflow-hidden rounded-3xl border border-black/5 bg-white p-6">
            <div className="font-[var(--font-heading)] text-[18px] font-semibold">52 languages</div>
            <p className="mt-1 text-[13px] text-black/55">
              Detects, responds, and hands off — in the customer’s language.
            </p>
            <div className="mt-4 flex flex-wrap gap-1.5 text-[11px]">
              {["EN","DE","FR","ES","IT","PT","NL","AR","HE","JA","KO","ZH","HI","TH","TR","PL","SV","FI","DA","NO","EL"].map((l) => (
                <span key={l} className="rounded-md bg-black/5 px-2 py-0.5 text-black/60">{l}</span>
              ))}
            </div>
          </div>

          {/* Eval */}
          <div className="overflow-hidden rounded-3xl border border-black/5 bg-neutral-900 p-6 text-white">
            <div className="font-[var(--font-heading)] text-[18px] font-semibold">Eval suite</div>
            <p className="mt-1 text-[13px] text-white/65">
              Replay real conversations against new versions. Ship with confidence.
            </p>
            <div className="mt-4 rounded-xl bg-black/40 p-3 font-mono text-[11px] text-emerald-300">
              <div>$ nautix eval run --from=last-7d</div>
              <div className="text-white/70">→ 12,418 convos · 98.4% pass</div>
              <div className="text-white/50">→ 3 regressions · details ↗</div>
            </div>
          </div>

          {/* Handoff */}
          <div className="overflow-hidden rounded-3xl border border-black/5 bg-gradient-to-br from-[#FDF2F8] to-white p-6 md:col-span-2">
            <div className="font-[var(--font-heading)] text-[18px] font-semibold">Human handoff in seconds</div>
            <p className="mt-1 max-w-[460px] text-[13px] text-black/55">
              When Nautix hands off, your rep gets a one-paragraph brief, the customer profile, and three suggested next steps — before they&apos;ve read the thread.
            </p>
            <div className="mt-5 grid grid-cols-3 gap-3 text-[11px]">
              {[
                ["Brief","Customer wants brass pendant, DHL to Berlin by Thu."],
                ["Profile","3 prior orders · VIP · Speaks DE · EN"],
                ["Next steps","Offer courier upgrade; bundle 2nd pendant at -10%"],
              ].map(([k,v]) => (
                <div key={k} className="rounded-xl bg-white p-3 shadow-sm">
                  <div className="text-black/40 uppercase tracking-[0.14em] text-[10px]">{k}</div>
                  <div className="mt-1 text-black/80">{v}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*  Interactive playground                                                    */
/* -------------------------------------------------------------------------- */

const PLAYGROUND_PROMPTS: { q: string; a: string[] }[] = [
  {
    q: "I ordered last Thursday — where's my package?",
    a: [
      "Checking order #HG-10422 for you…",
      "It's on the truck — DHL Express, out for delivery in Berlin today.",
      "Tracking: DHL-XG8-7721. I'll ping you when it's scanned as delivered.",
    ],
  },
  {
    q: "Is the olive raffia clutch still in stock?",
    a: [
      "One sec — checking Milan and Berlin warehouses…",
      "Yes, 7 left in olive. Want me to reserve one?",
      "Tap to checkout · €180 · ships today ↗",
    ],
  },
  {
    q: "Can I speak with someone about a corporate order?",
    a: [
      "Happy to route you — how many units and what's your timeline?",
      "Got it. Pulling in Sana from partnerships with your thread context.",
      "Sana will reply here in under 8 min (she's online).",
    ],
  },
];

function Playground() {
  const [pick, setPick] = useState(0);
  const [shown, setShown] = useState<string[]>([]);
  const [typing, setTyping] = useState(false);
  const ref = useReveal<HTMLDivElement>();

  useEffect(() => {
    let cancelled = false;
    async function run() {
      setShown([]);
      setTyping(true);
      const msgs = PLAYGROUND_PROMPTS[pick].a;
      for (let i = 0; i < msgs.length; i++) {
        await new Promise((r) => setTimeout(r, 750 + i * 120));
        if (cancelled) return;
        setShown((s) => [...s, msgs[i]]);
      }
      setTyping(false);
    }
    run();
    return () => {
      cancelled = true;
    };
  }, [pick]);

  return (
    <section ref={ref} className="bg-[#FAF8F5]">
      <div className="mx-auto max-w-[1280px] px-6 py-28 md:px-10 md:py-40">
        <div className="reveal max-w-[760px]">
          <Pill>Playground</Pill>
          <h2 className="mt-6 font-[var(--font-heading)] text-[clamp(32px,4.8vw,64px)] font-semibold leading-[1.05] tracking-[-0.025em] text-neutral-900">
            Try it yourself.{" "}
            <span className="grad-text">No signup.</span>
          </h2>
          <p className="mt-4 max-w-[560px] text-[15px] text-black/60">
            Pick a real customer prompt below — watch Nautix ground itself, call
            tools, and respond like your best rep.
          </p>
        </div>

        <div className="reveal mt-12 grid gap-6 md:grid-cols-[1fr_1.1fr]">
          <div className="flex flex-col gap-3">
            {PLAYGROUND_PROMPTS.map((p, i) => (
              <button
                key={i}
                onClick={() => setPick(i)}
                className={`group flex items-start gap-3 rounded-2xl border p-4 text-left transition ${
                  pick === i
                    ? "border-transparent bg-neutral-900 text-white shadow-lg"
                    : "border-black/10 bg-white text-neutral-900 hover:border-black/25"
                }`}
              >
                <span
                  className={`mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-[11px] font-semibold ${
                    pick === i ? "bg-white/20 text-white" : "bg-black/5 text-black/60"
                  }`}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="text-[14px] leading-[1.45]">{p.q}</span>
              </button>
            ))}

            <div className="mt-4 rounded-2xl border border-dashed border-black/15 bg-white/50 p-4 text-[12px] text-black/55">
              Pro tip: Nautix does the same with your real data — catalog,
              inventory, order graph, and CRM — the moment you connect them.
            </div>
          </div>

          <div className="relative overflow-hidden rounded-3xl border border-black/10 bg-white shadow-[0_30px_80px_-30px_rgba(11,11,14,0.25)]">
            <div className="flex items-center justify-between border-b border-black/5 bg-[#FBFBFB] px-5 py-3">
              <div className="flex items-center gap-2 text-[12px] text-black/50">
                <span className="h-2 w-2 rounded-full bg-[#FF5F57]" />
                <span className="h-2 w-2 rounded-full bg-[#FEBC2E]" />
                <span className="h-2 w-2 rounded-full bg-[#28C840]" />
                <span className="ml-3">playground.nautix.ai</span>
              </div>
              <div className="text-[11px] text-black/40">session #ply-8421</div>
            </div>
            <div className="min-h-[320px] space-y-3 p-6">
              <div className="flex justify-start">
                <div className="max-w-[80%] rounded-2xl rounded-tl-sm bg-[#F1ECFF] px-3.5 py-2.5 text-[13px] text-neutral-900">
                  {PLAYGROUND_PROMPTS[pick].q}
                </div>
              </div>
              {shown.map((m, i) => (
                <div
                  key={`${pick}-${i}`}
                  className="flex justify-end"
                  style={{ animation: "msg-in 0.45s ease both" }}
                >
                  <div
                    className="max-w-[82%] rounded-2xl rounded-tr-sm px-3.5 py-2.5 text-[13px] text-white"
                    style={{ background: "linear-gradient(135deg,#7C3AED,#EC4899)" }}
                  >
                    {m}
                  </div>
                </div>
              ))}
              {typing && (
                <div className="flex justify-end">
                  <div className="flex gap-1 rounded-2xl bg-white px-3 py-2 shadow-sm ring-1 ring-black/5">
                    <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-black/40" />
                    <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-black/40 [animation-delay:150ms]" />
                    <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-black/40 [animation-delay:300ms]" />
                  </div>
                </div>
              )}
            </div>
            <div className="flex items-center gap-2 border-t border-black/5 bg-white px-4 py-3">
              <div className="flex-1 rounded-full border border-black/10 bg-[#FAFAFA] px-4 py-2 text-[12px] text-black/40">
                Pick a prompt above to replay…
              </div>
              <button
                onClick={() => setPick((p) => (p + 1) % PLAYGROUND_PROMPTS.length)}
                className="flex h-8 items-center gap-1.5 rounded-full bg-neutral-900 px-3 text-[11px] font-medium text-white"
              >
                Try another
                <ArrowRight />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*  Coverage globe                                                            */
/* -------------------------------------------------------------------------- */

const COVERAGE = [
  { c: "Berlin", x: 500, y: 160 },
  { c: "Lisbon", x: 430, y: 210 },
  { c: "Lagos", x: 500, y: 300 },
  { c: "Nairobi", x: 580, y: 310 },
  { c: "Dubai", x: 620, y: 230 },
  { c: "Mumbai", x: 680, y: 260 },
  { c: "Singapore", x: 760, y: 300 },
  { c: "Tokyo", x: 830, y: 200 },
  { c: "Sydney", x: 830, y: 360 },
  { c: "São Paulo", x: 320, y: 330 },
  { c: "New York", x: 260, y: 190 },
  { c: "Mexico City", x: 210, y: 250 },
];

function Globe() {
  const ref = useReveal<HTMLDivElement>();
  const [active, setActive] = useState(0);
  useEffect(() => {
    const t = window.setInterval(
      () => setActive((a) => (a + 1) % COVERAGE.length),
      1200
    );
    return () => window.clearInterval(t);
  }, []);
  return (
    <section ref={ref} className="bg-white">
      <div className="mx-auto max-w-[1280px] px-6 py-28 md:px-10 md:py-40">
        <div className="grid gap-12 md:grid-cols-[1fr_1.3fr] md:items-center">
          <div className="reveal">
            <Pill>Always on · Everywhere</Pill>
            <h2 className="mt-6 font-[var(--font-heading)] text-[clamp(32px,4.6vw,60px)] font-semibold leading-[1.05] tracking-[-0.025em] text-neutral-900">
              Global coverage,
              <br />
              <span className="grad-text">local tone.</span>
            </h2>
            <p className="mt-4 max-w-[460px] text-[15px] text-black/60">
              Data residency in EU, US, and APAC. Edge endpoints in 14 regions.
              Replies in 52 languages — honoring local date, currency, and tone
              conventions.
            </p>
            <div className="mt-8 grid grid-cols-3 gap-4">
              {[
                ["14", "edge regions"],
                ["52", "languages"],
                ["3", "data residencies"],
              ].map(([n, l]) => (
                <div key={l} className="rounded-2xl border border-black/5 bg-[#FAF8F5] p-4">
                  <div className="font-[var(--font-heading)] text-[32px] font-semibold tracking-[-0.02em] text-neutral-900">
                    {n}
                  </div>
                  <div className="mt-1 text-[12px] text-black/55">{l}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="reveal relative">
            <div
              className="relative overflow-hidden rounded-3xl border border-black/5 bg-gradient-to-br from-[#FBF7FF] via-white to-[#FFF1F7] p-6"
            >
              <svg viewBox="0 0 1000 460" className="w-full" aria-hidden>
                <defs>
                  <radialGradient id="g-grad" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stopColor="rgba(124,58,237,0.15)" />
                    <stop offset="100%" stopColor="rgba(124,58,237,0)" />
                  </radialGradient>
                </defs>
                {/* Dot-grid world silhouette */}
                {Array.from({ length: 46 }).map((_, row) =>
                  Array.from({ length: 100 }).map((__, col) => {
                    const cx = col * 10 + 5;
                    const cy = row * 10 + 5;
                    // rough continents via polar/ellipse shapes
                    const inland =
                      // Americas
                      (Math.pow((cx - 240) / 110, 2) + Math.pow((cy - 230) / 130, 2) < 1) ||
                      // Europe+Africa
                      (Math.pow((cx - 520) / 90, 2) + Math.pow((cy - 230) / 150, 2) < 1) ||
                      // Asia
                      (Math.pow((cx - 760) / 160, 2) + Math.pow((cy - 230) / 120, 2) < 1) ||
                      // Australia
                      (Math.pow((cx - 830) / 60, 2) + Math.pow((cy - 360) / 40, 2) < 1);
                    if (!inland) return null;
                    return (
                      <circle
                        key={`${row}-${col}`}
                        cx={cx}
                        cy={cy}
                        r={1.4}
                        fill="rgba(11,11,14,0.22)"
                      />
                    );
                  })
                )}
                <circle cx="500" cy="230" r="220" fill="url(#g-grad)" />
                {COVERAGE.map((p, i) => {
                  const on = i === active;
                  return (
                    <g key={p.c}>
                      {on && (
                        <circle
                          cx={p.x}
                          cy={p.y}
                          r="8"
                          fill="rgba(236,72,153,0.35)"
                          style={{ animation: "pulse-ring 1.6s ease-out infinite" }}
                        />
                      )}
                      <circle
                        cx={p.x}
                        cy={p.y}
                        r={on ? 5 : 3.2}
                        fill={on ? "#EC4899" : "#7C3AED"}
                        style={{ transition: "r 0.3s ease" }}
                      />
                      {on && (
                        <g>
                          <rect
                            x={p.x + 10}
                            y={p.y - 18}
                            rx="6"
                            ry="6"
                            width={p.c.length * 7 + 16}
                            height="22"
                            fill="#0B0B0E"
                          />
                          <text
                            x={p.x + 18}
                            y={p.y - 3}
                            fontSize="11"
                            fill="#fff"
                          >
                            {p.c}
                          </text>
                        </g>
                      )}
                    </g>
                  );
                })}
              </svg>
            </div>
            <div className="mt-4 flex flex-wrap gap-1.5 text-[11px]">
              {COVERAGE.map((c, i) => (
                <button
                  key={c.c}
                  onClick={() => setActive(i)}
                  className={`rounded-md px-2 py-1 transition ${
                    i === active
                      ? "bg-neutral-900 text-white"
                      : "bg-black/5 text-black/60 hover:bg-black/10"
                  }`}
                >
                  {c.c}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*  API snippet                                                               */
/* -------------------------------------------------------------------------- */

type Lang = "curl" | "node" | "python";
const SNIPPETS: Record<Lang, string> = {
  curl: `curl https://api.nautix.ai/v1/agents/reply \\
  -H "Authorization: Bearer $NAUTIX_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "channel": "whatsapp",
    "thread_id": "thr_7f2b",
    "message": "Is the olive clutch in stock?",
    "ground_on": ["catalog", "orders"]
  }'`,
  node: `import Nautix from "@nautix/sdk";

const nx = new Nautix(process.env.NAUTIX_KEY!);

const reply = await nx.agents.reply({
  channel: "whatsapp",
  thread_id: "thr_7f2b",
  message: "Is the olive clutch in stock?",
  ground_on: ["catalog", "orders"],
});

console.log(reply.text, reply.citations);`,
  python: `from nautix import Nautix

nx = Nautix(os.environ["NAUTIX_KEY"])

reply = nx.agents.reply(
    channel="whatsapp",
    thread_id="thr_7f2b",
    message="Is the olive clutch in stock?",
    ground_on=["catalog", "orders"],
)

print(reply.text, reply.citations)`,
};

function ApiSnippet() {
  const [lang, setLang] = useState<Lang>("node");
  const [copied, setCopied] = useState(false);
  const ref = useReveal<HTMLDivElement>();
  const copy = async () => {
    try {
      await navigator.clipboard.writeText(SNIPPETS[lang]);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1400);
    } catch {
      /* ignore */
    }
  };
  return (
    <section ref={ref} className="bg-[#FAF8F5]">
      <div className="mx-auto max-w-[1280px] px-6 py-28 md:px-10 md:py-40">
        <div className="grid gap-12 md:grid-cols-[1fr_1.2fr] md:items-center">
          <div className="reveal">
            <Pill>Developer-first</Pill>
            <h2 className="mt-6 font-[var(--font-heading)] text-[clamp(32px,4.6vw,60px)] font-semibold leading-[1.05] tracking-[-0.025em] text-neutral-900">
              A real API.
              <br />
              <span className="grad-text">Shipped in 7 lines.</span>
            </h2>
            <p className="mt-4 max-w-[460px] text-[15px] text-black/60">
              Wrap your own UI around Nautix or call us from a backend — the
              same agent graph, the same guardrails. SDKs for Node, Python, Go,
              Ruby, and plain HTTP.
            </p>
            <div className="mt-8 flex gap-3">
              <Link
                href="/docs"
                className="group inline-flex items-center gap-2 rounded-full bg-neutral-900 px-5 py-3 text-[13px] font-medium text-white"
              >
                Read the docs
                <ArrowRight className="transition-transform group-hover:translate-x-0.5" />
              </Link>
              <Link
                href="/demo"
                className="inline-flex items-center gap-2 rounded-full border border-black/15 bg-white px-5 py-3 text-[13px] font-medium text-neutral-900 transition hover:border-black/30"
              >
                Get an API key
              </Link>
            </div>
          </div>

          <div className="reveal overflow-hidden rounded-3xl border border-black/10 bg-neutral-900 text-white shadow-[0_30px_80px_-30px_rgba(11,11,14,0.35)]">
            <div className="flex items-center justify-between border-b border-white/10 px-4 py-3">
              <div className="flex gap-1">
                {(["curl", "node", "python"] as Lang[]).map((l) => (
                  <button
                    key={l}
                    onClick={() => setLang(l)}
                    className={`rounded-full px-3 py-1 text-[12px] transition ${
                      lang === l
                        ? "bg-white text-neutral-900"
                        : "text-white/60 hover:text-white"
                    }`}
                  >
                    {l}
                  </button>
                ))}
              </div>
              <button
                onClick={copy}
                className="flex items-center gap-1.5 rounded-md border border-white/15 bg-white/5 px-2.5 py-1 text-[11px] text-white/80 transition hover:text-white"
              >
                {copied ? "Copied ✓" : "Copy"}
              </button>
            </div>
            <pre className="overflow-x-auto p-6 font-mono text-[13px] leading-[1.6] text-emerald-200">
              <code>{SNIPPETS[lang]}</code>
            </pre>
            <div className="flex items-center justify-between border-t border-white/10 px-4 py-3 text-[11px] text-white/45">
              <span>200 · 142 ms · eu-central-1</span>
              <span>nautix-sdk @ 2.4.1</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*  Testimonial carousel                                                      */
/* -------------------------------------------------------------------------- */

const QUOTES = [
  {
    q: "We replaced four tools and a night-shift queue with Nautix. Our WhatsApp inbox went from a liability to our best-performing store.",
    a: "Mira Ricci", r: "Director of CX · Maison Rive",
  },
  {
    q: "The eval suite is the only reason we let an agent touch checkout. We ship changes twice a week and never regress.",
    a: "Omar Diallo", r: "Head of Ops · Harbor Goods",
  },
  {
    q: "Nautix hands off like our best senior rep — full context, suggested next step, calm tone. Our team actually likes the AI.",
    a: "Priya Shah", r: "VP Support · Solstice",
  },
];

function Testimonials() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = window.setInterval(() => setI((n) => (n + 1) % QUOTES.length), 6000);
    return () => window.clearInterval(t);
  }, []);
  return (
    <section id="customers" className="bg-[#FAF8F5]">
      <div className="mx-auto max-w-[1100px] px-6 py-28 md:px-10 md:py-40">
        <div className="relative min-h-[260px]">
          {QUOTES.map((q, idx) => (
            <article
              key={idx}
              className={`absolute inset-0 transition-all duration-700 ${
                idx === i ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-2 opacity-0"
              }`}
            >
              <svg width="40" height="30" viewBox="0 0 40 30" aria-hidden className="text-black/15" fill="currentColor">
                <path d="M0 30V16C0 7.163 7.163 0 16 0v6a10 10 0 0 0-10 10h10v14H0Zm24 0V16C24 7.163 31.163 0 40 0v6a10 10 0 0 0-10 10h10v14H24Z" />
              </svg>
              <blockquote className="mt-6 font-[var(--font-heading)] text-[clamp(26px,3.6vw,44px)] font-semibold leading-[1.15] tracking-[-0.02em] text-neutral-900">
                {q.q}
              </blockquote>
              <div className="mt-10 flex items-center gap-4">
                <div
                  className="flex h-11 w-11 items-center justify-center rounded-full text-[13px] font-semibold text-white"
                  style={{ background: "linear-gradient(135deg,#7C3AED,#EC4899)" }}
                >
                  {q.a.split(" ").map((p) => p[0]).slice(0, 2).join("")}
                </div>
                <div>
                  <div className="text-[14px] font-medium text-neutral-900">{q.a}</div>
                  <div className="text-[13px] text-black/55">{q.r}</div>
                </div>
              </div>
            </article>
          ))}
        </div>
        <div className="mt-12 flex items-center gap-2">
          {QUOTES.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setI(idx)}
              aria-label={`Quote ${idx + 1}`}
              className={`h-1.5 rounded-full transition-all ${
                idx === i ? "w-8 bg-neutral-900" : "w-3 bg-black/20 hover:bg-black/40"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*  Pricing                                                                   */
/* -------------------------------------------------------------------------- */

function Pricing() {
  const ref = useReveal<HTMLDivElement>();
  const plans = [
    {
      name: "Starter", price: "€0", sub: "14-day trial",
      feats: ["1 channel","500 AI conversations","Email support","Standard guardrails"],
      cta: "Start free",
      highlight: false,
    },
    {
      name: "Growth", price: "€490", sub: "per month · billed annually",
      feats: ["All channels","10,000 AI conversations","Shared Slack room","Eval suite · basic","CRM sync"],
      cta: "Book a demo",
      highlight: true,
    },
    {
      name: "Scale", price: "Custom", sub: "tailored to your ops",
      feats: ["Unlimited AI conversations","SSO · SCIM · audit log","Dedicated SRE","Eval suite · enterprise","Private deployment"],
      cta: "Talk to sales",
      highlight: false,
    },
  ];
  return (
    <section id="pricing" ref={ref} className="bg-white">
      <div className="mx-auto max-w-[1280px] px-6 py-28 md:px-10 md:py-40">
        <div className="reveal max-w-[780px]">
          <Pill>Pricing</Pill>
          <h2 className="mt-6 font-[var(--font-heading)] text-[clamp(32px,4.8vw,64px)] font-semibold leading-[1.05] tracking-[-0.025em] text-neutral-900">
            Simple plans. <span className="grad-text">Linear scaling.</span>
          </h2>
        </div>
        <div className="reveal mt-14 grid gap-6 md:grid-cols-3">
          {plans.map((p) => (
            <div
              key={p.name}
              className={`relative overflow-hidden rounded-3xl border p-8 transition hover:-translate-y-1 ${
                p.highlight
                  ? "border-transparent bg-neutral-900 text-white shadow-xl"
                  : "border-black/10 bg-white text-neutral-900"
              }`}
            >
              {p.highlight && (
                <>
                  <div
                    aria-hidden
                    className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full blur-3xl"
                    style={{
                      background:
                        "radial-gradient(closest-side, rgba(236,72,153,0.45), transparent 70%)",
                    }}
                  />
                  <div
                    aria-hidden
                    className="pointer-events-none absolute -bottom-20 -left-20 h-64 w-64 rounded-full blur-3xl"
                    style={{
                      background:
                        "radial-gradient(closest-side, rgba(124,58,237,0.45), transparent 70%)",
                    }}
                  />
                </>
              )}
              <div className="relative">
                <div className="text-[11px] uppercase tracking-[0.2em] opacity-70">{p.name}</div>
                <div className="mt-4 flex items-baseline gap-2">
                  <span className="font-[var(--font-heading)] text-[44px] font-semibold tracking-[-0.02em]">
                    {p.price}
                  </span>
                  <span className="text-[12px] opacity-60">{p.sub}</span>
                </div>
                <ul className="mt-6 space-y-2 text-[13px]">
                  {p.feats.map((f) => (
                    <li key={f} className="flex items-center gap-2 opacity-85">
                      <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden>
                        <path d="M2 7.5 5.5 11 12 3.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      {f}
                    </li>
                  ))}
                </ul>
                <Link
                  href={p.cta === "Book a demo" ? BOOK_DEMO_URL : "/demo"}
                  className={`mt-8 inline-flex w-full items-center justify-center gap-2 rounded-full px-5 py-3 text-[13px] font-medium transition ${
                    p.highlight
                      ? "bg-white text-neutral-900 hover:bg-[#FAF8F5]"
                      : "bg-neutral-900 text-white hover:bg-black"
                  }`}
                >
                  {p.cta}
                  <ArrowRight />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*  FAQ                                                                        */
/* -------------------------------------------------------------------------- */

const FAQ = [
  { q: "How long does it take to go live?", a: "Most teams ship their first channel in under a week. A single inbox can be wired up, grounded on your content, and live in an afternoon." },
  { q: "Can we keep our existing helpdesk?", a: "Yes. Nautix plugs into Zendesk, Intercom, HubSpot, Gorgias, and Freshdesk. Conversations flow both ways." },
  { q: "How does Nautix stay on-brand?", a: "A brand tone profile is learned from your existing content and enforced via guardrails on every reply, with per-team overrides." },
  { q: "What about security and compliance?", a: "SOC 2 Type II, GDPR, CCPA. Data residency in EU or US. PII redaction and fine-grained audit logs by default." },
  { q: "Can we try it on real traffic safely?", a: "Shadow mode runs the agent in parallel and shows you what it would have said — no customer impact until you flip the switch." },
];

function Faq() {
  const [open, setOpen] = useState<number | null>(0);
  const ref = useReveal<HTMLDivElement>();
  return (
    <section id="faq" ref={ref} className="bg-[#FAF8F5]">
      <div className="mx-auto max-w-[900px] px-6 py-28 md:px-10 md:py-40">
        <h2 className="reveal font-[var(--font-heading)] text-[clamp(32px,4.8vw,64px)] font-semibold leading-[1.05] tracking-[-0.025em] text-neutral-900">
          Frequently asked.
        </h2>
        <div className="reveal mt-12 divide-y divide-black/10 border-y border-black/10">
          {FAQ.map((f, i) => {
            const isOpen = open === i;
            return (
              <div key={f.q}>
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="group flex w-full items-center justify-between gap-6 py-6 text-left"
                >
                  <span className="font-[var(--font-heading)] text-[18px] font-medium tracking-[-0.01em] text-neutral-900 md:text-[22px]">
                    {f.q}
                  </span>
                  <span
                    className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-black/15 transition-transform ${
                      isOpen ? "rotate-45 bg-neutral-900 text-white" : "text-black/60"
                    }`}
                  >
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden>
                      <path d="M6 1v10M1 6h10" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
                    </svg>
                  </span>
                </button>
                <div
                  className="overflow-hidden transition-[max-height,opacity] duration-500"
                  style={{ maxHeight: isOpen ? 200 : 0, opacity: isOpen ? 1 : 0 }}
                >
                  <p className="pb-6 pr-12 text-[15px] leading-[1.6] text-black/65">{f.a}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*  Final CTA                                                                 */
/* -------------------------------------------------------------------------- */

function FinalCta() {
  return (
    <section className="relative overflow-hidden bg-white">
      <div className="mx-auto max-w-[1280px] px-6 py-24 md:px-10 md:py-32">
        <div
          className="relative overflow-hidden rounded-[32px] p-12 text-center md:p-20"
          style={{
            background:
              "linear-gradient(120deg,#FBF7FF 0%,#FFFFFF 40%,#FFF1F7 100%)",
            backgroundSize: "200% 200%",
            animation: "gradient-shift 10s ease-in-out infinite",
          }}
        >
          <div
            aria-hidden
            className="pointer-events-none absolute -left-20 -top-20 h-80 w-80 rounded-full blur-3xl"
            style={{
              background:
                "radial-gradient(closest-side, rgba(124,58,237,0.35), transparent 70%)",
              animation: "float-slow 14s ease-in-out infinite",
            }}
          />
          <div
            aria-hidden
            className="pointer-events-none absolute -bottom-20 -right-20 h-80 w-80 rounded-full blur-3xl"
            style={{
              background:
                "radial-gradient(closest-side, rgba(236,72,153,0.35), transparent 70%)",
              animation: "float-med 16s ease-in-out infinite",
            }}
          />
          <div className="relative">
            <Pill>Ready when you are</Pill>
            <h2 className="mx-auto mt-6 max-w-[880px] font-[var(--font-heading)] text-[clamp(36px,6vw,92px)] font-semibold leading-[0.98] tracking-[-0.03em] text-neutral-900">
              Ship a better inbox.
              <br />
              <span className="grad-text">This quarter.</span>
            </h2>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
              <Link
                href={BOOK_DEMO_URL}
                className="group inline-flex items-center gap-2 rounded-full px-6 py-3.5 text-[14px] font-medium text-white"
                style={{
                  background: "linear-gradient(92deg,#7C3AED 0%,#EC4899 100%)",
                  backgroundSize: "200% auto",
                  animation: "gradient-shift 6s ease-in-out infinite",
                }}
              >
                Book a demo
                <ArrowRight className="transition-transform group-hover:translate-x-0.5" />
              </Link>
              <Link
                href="#pricing"
                className="inline-flex items-center gap-2 rounded-full border border-black/15 bg-white px-6 py-3.5 text-[14px] font-medium text-neutral-900 transition hover:border-black/30"
              >
                See pricing
              </Link>
            </div>
            <p className="mt-6 text-[12px] text-black/50">
              14-day free trial · No card required · Setup in under an hour
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*  Footer                                                                    */
/* -------------------------------------------------------------------------- */

function Footer() {
  const cols = [
    { h: "Product", l: [["Features","#product"],["How it works","#flow"],["Pricing","#pricing"],["Security","/privacy"]] },
    { h: "Company", l: [["Customers","#customers"],["Blog","/blog"],["Changelog","/product-updates"],["Contact","/demo"]] },
    { h: "Legal", l: [["Privacy","/privacy"],["Terms","/terms"],["Data deletion","/data-deletion"]] },
  ];
  return (
    <footer className="border-t border-black/10 bg-[#FAF8F5] text-black/70">
      <div className="mx-auto max-w-[1280px] px-6 pb-10 pt-20 md:px-10">
        <div className="grid gap-12 md:grid-cols-[2fr_1fr_1fr_1fr]">
          <div>
            <Wordmark className="text-neutral-900" />
            <p className="mt-5 max-w-[320px] text-[14px] leading-[1.6] text-black/55">
              The AI operations layer for WhatsApp, Instagram, and Facebook.
              Built for teams that take conversations seriously.
            </p>
          </div>
          {cols.map((col) => (
            <div key={col.h}>
              <div className="text-[11px] uppercase tracking-[0.22em] text-black/40">{col.h}</div>
              <ul className="mt-5 space-y-3 text-[14px]">
                {col.l.map(([label, href]) => (
                  <li key={label}>
                    <Link href={href} className="text-black/70 transition hover:text-black">
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-20 flex flex-wrap items-center justify-between gap-4 border-t border-black/10 pt-8 text-[12px] text-black/45">
          <div>© {new Date().getFullYear()} Nautix, Inc.</div>
          <div>Berlin · Lagos · Singapore</div>
        </div>
      </div>
    </footer>
  );
}

/* -------------------------------------------------------------------------- */
/*  Page                                                                      */
/* -------------------------------------------------------------------------- */

export default function AltHomePage() {
  return (
    <main className="bg-[#FAF8F5] text-neutral-900">
      <AnimStyles />
      <Nav />
      <Hero />
      <LogoBand />
      <Stats />
      <LiveActivity />
      <Product />
      <Playground />
      <AgentFlow />
      <Features />
      <Globe />
      <ApiSnippet />
      <Testimonials />
      <Pricing />
      <Faq />
      <FinalCta />
      <Footer />
    </main>
  );
}
