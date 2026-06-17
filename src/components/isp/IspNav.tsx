"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { ArrowRight } from "@/components/ui/ArrowRight";
import { Wordmark } from "@/components/ui/Wordmark";

const BOOK_DEMO_URL =
  "https://app.nautix.io/book/skVGGbpLujeMxRTL2JgwnzUut4AC3N-X/xU-NHVEi4rMuY9DlQZdvrHqnJkY-YVAp";

const NAV_LINKS = [
  { label: "Problem", href: "#problem" },
  { label: "Capabilities", href: "#capabilities" },
  { label: "Story", href: "#pioneer" },
  { label: "Integration", href: "#integration" },
  { label: "Pilot", href: "#pilot" },
  { label: "FAQ", href: "#faq" },
] as const;

export function IspNav() {
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

      <div className="mx-auto flex max-w-5xl min-h-[64px] items-center justify-between px-4 lg:max-w-[1140px]">
        <Link href="#hero" className="text-neutral-900 shrink-0">
          <Wordmark />
        </Link>

        <nav className="hidden items-center gap-8 text-[13px] text-black/65 md:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="transition hover:text-black"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <Link
          href={BOOK_DEMO_URL}
          className="group relative inline-flex shrink-0 items-center gap-2 overflow-hidden rounded-full bg-neutral-900 px-4 py-2 text-[13px] font-medium text-white transition"
        >
          <span
            className="absolute inset-0 opacity-0 transition-opacity group-hover:opacity-100"
            style={{
              background: "linear-gradient(92deg,#7C3AED 0%,#EC4899 100%)",
            }}
          />
          <span className="relative">Book a Demo</span>
          <ArrowRight className="relative transition-transform group-hover:translate-x-0.5" />
        </Link>
      </div>
    </header>
  );
}