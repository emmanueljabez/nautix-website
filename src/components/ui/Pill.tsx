"use client";

import type { ReactNode } from "react";

interface PillProps {
  tone?: "light" | "dark";
  children: ReactNode;
}

export function Pill({ children, tone = "light" }: PillProps) {
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
