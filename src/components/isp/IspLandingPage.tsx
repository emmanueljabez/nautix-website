"use client";
import { IspNav } from "@/components/isp/IspNav";

/**
 * IspLandingPage — orchestrator for the ISP landing page at nautix.io/isp.
 *
 * Will compose all 10 ISP sections once built.
 */
export function IspLandingPage() {
  return (
    <main className="min-h-screen bg-[#FAF8F5] text-neutral-900">
      <IspNav />
      <div className="flex items-center justify-center min-h-screen">
        <p className="font-[var(--font-heading)] text-2xl text-black/40">
          ISP Landing Page
        </p>
      </div>
    </main>
  );
}