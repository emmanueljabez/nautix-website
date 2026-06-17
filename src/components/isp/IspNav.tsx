"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

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
      className={`sticky top-0 z-50 pt-3 transition-all duration-300 ${
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

      <div className="mx-auto flex max-w-5xl min-h-[64px] items-center px-4 lg:max-w-[1140px]">
        <Link href="#hero" className="shrink-0">
          <img
            src="/wp-content/uploads/2025/04/logo-new-light.svg"
            alt="Nautix"
            className="max-h-[34px] w-auto"
          />
        </Link>

        <nav className="ml-auto mr-auto hidden items-center gap-7 text-[14px] font-medium lg:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="inline-flex items-center gap-1.5 pb-[0.35rem] transition hover:text-primary-700"
              style={{ color: "#091624" }}
            >
              {link.label}
              <svg
                width="10"
                height="6"
                viewBox="0 0 10 6"
                fill="none"
                aria-hidden
              >
                <path
                  d="M1 1L5 5L9 1"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>
          ))}
        </nav>

        <Link
          href={BOOK_DEMO_URL}
          className="inline-flex shrink-0 items-center gap-1.5 rounded-full px-4 text-[14px] font-bold transition hover:bg-[#670d87]"
          style={{
            minHeight: "2.625rem",
            background: "#7e10a2",
            color: "#ffffff",
            boxShadow: "0 14px 32px rgba(126, 16, 162, 0.16)",
          }}
        >
          Book a Demo
          <svg
            width="10"
            height="10"
            viewBox="0 0 10 10"
            fill="none"
            aria-hidden
          >
            <path
              d="M1 9L9 1M9 1H3.5M9 1V6.5"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </Link>
      </div>
    </header>
  );
}