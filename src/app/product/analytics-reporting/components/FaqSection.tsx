"use client";

import { useState } from "react";
import type { FaqItem } from "@/lib/faq-data";

interface FaqSectionProps {
  items: readonly FaqItem[];
}

export function FaqSection({ items }: FaqSectionProps) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="border-t border-primary-100/50 bg-white">
      <div className="mx-auto max-w-[880px] px-6 py-16 md:py-24">
        <h2 className="nautix-section-title mb-0">
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
            <span
              className="nautix-section-title-line"
              style={{ maxWidth: "none" }}
            >
              Frequently asked
            </span>{" "}
            <span
              className="nautix-section-title-focus"
              style={{
                background: "#e2fe5e",
                color: "#22303f",
                boxShadow: "inset 0 0 0 1px rgba(34,48,63,0.06)",
              }}
            >
              questions
            </span>
          </div>
        </h2>

        <ul style={{ listStyle: "none", padding: 0, margin: "32px 0 0" }}>
          {items.map((item, idx) => {
            const isOpen = open === idx;
            const isLast = idx === items.length - 1;

            return (
              <li
                key={idx}
                style={{
                  borderTop: "1px solid rgba(23,23,23,0.08)",
                  padding: "18px 0",
                  ...(isLast
                    ? { borderBottom: "1px solid rgba(23,23,23,0.08)" }
                    : {}),
                }}
              >
                <button
                  type="button"
                  aria-expanded={isOpen}
                  onClick={() => setOpen(isOpen ? null : idx)}
                  style={{
                    display: "flex",
                    width: "100%",
                    alignItems: "center",
                    justifyContent: "space-between",
                    gap: 16,
                    padding: "6px 0",
                    border: 0,
                    background: "transparent",
                    cursor: "pointer",
                    textAlign: "left",
                    fontFamily: "var(--font-heading), sans-serif",
                    fontSize: 20,
                    fontWeight: 500,
                    color: "#171717",
                  }}
                >
                  <span>{item.question}</span>

                  <span
                    aria-hidden
                    className="shrink-0"
                    style={{
                      width: 32,
                      height: 32,
                      borderRadius: 999,
                      background: isOpen
                        ? "#7e10a2"
                        : "rgba(126,16,162,0.08)",
                      color: isOpen ? "#fff" : "#7e10a2",
                      display: "inline-flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontWeight: 400,
                      fontSize: 20,
                      lineHeight: 1,
                      transform: isOpen ? "rotate(45deg)" : "rotate(0deg)",
                      transition:
                        "transform 0.3s ease, background 0.25s ease",
                    }}
                  >
                    +
                  </span>
                </button>

                <div
                  style={{
                    overflow: "hidden",
                    maxHeight: isOpen ? 400 : 0,
                    transition: "max-height 0.35s ease",
                  }}
                >
                  <p
                    style={{
                      margin: "10px 0 0",
                      color: "rgba(23,23,23,0.72)",
                      fontSize: 16,
                      lineHeight: 1.6,
                    }}
                  >
                    {item.answer}
                  </p>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}