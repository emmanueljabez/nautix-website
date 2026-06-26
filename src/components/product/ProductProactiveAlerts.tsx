"use client";

import type { LandingPageData } from "@/lib/seo-pages";

interface ProductProactiveAlertsProps {
  data: LandingPageData;
}

export function ProductProactiveAlerts({
  data,
}: ProductProactiveAlertsProps) {
  return (
    <div className="min-h-screen bg-white">
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <h1 className="font-[var(--font-heading)] text-4xl md:text-6xl font-bold tracking-tight text-[#091624] mb-6">
          {data.heading}
        </h1>
        <p className="text-lg text-neutral-600 max-w-3xl">{data.subheading}</p>
      </main>
    </div>
  );
}
