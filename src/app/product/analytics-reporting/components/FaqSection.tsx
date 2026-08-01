"use client";

import { useState } from "react";
import type { FaqItem } from "@/lib/faq-data";

interface FaqSectionProps {
  items: readonly FaqItem[];
}

export function FaqSection({ items }: FaqSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-white border-b border-gray-200">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10 lg:py-12">
        <h2 className="text-3xl sm:text-4xl font-heading font-extrabold tracking-tight text-gray-900 text-center">
          Common questions
        </h2>
        <div className="mt-10 flex flex-col divide-y divide-black/10">
          {items.map((item, index) => (
            <div key={index} className="py-4">
              <button
                onClick={() => toggle(index)}
                className="w-full flex items-center justify-between gap-4 text-left group"
              >
                <span className="text-lg font-heading font-bold text-gray-900 group-hover:text-primary-700 transition-colors">
                  {item.question}
                </span>
                <span
                  className={`flex-shrink-0 w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center text-gray-500 transition-transform duration-200 ${
                    openIndex === index ? "rotate-45" : ""
                  }`}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <line x1="12" y1="5" x2="12" y2="19" />
                    <line x1="5" y1="12" x2="19" y2="12" />
                  </svg>
                </span>
              </button>
              <div
                className={`grid transition-all duration-300 ease-in-out ${
                  openIndex === index
                    ? "grid-rows-[1fr] opacity-100 mt-3"
                    : "grid-rows-[0fr] opacity-0"
                }`}
              >
                <div className="overflow-hidden">
                  <p className="text-sm font-medium text-gray-700 leading-relaxed pb-1">
                    {item.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
