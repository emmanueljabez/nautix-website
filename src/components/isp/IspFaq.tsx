"use client";

import { useState } from "react";
import { FAQ_DATA } from "@/lib/isp-data";
import { useReveal } from "@/hooks/useReveal";

/**
 * IspFaq â€” Section 8: Objection handling.
 *
 * Five-question accordion with the exact HomepageEnhanced
 * FaqSection styling â€” border dividers, 32 px purple chevrons
 * that rotate 45Â° on open, lime-highlighted focus word,
 * and maxâ€‘height animation on answers.
 */
export function IspFaq() {
  const ref = useReveal<HTMLDivElement>();
  const [open, setOpen] = useState<number | null>(0);
  const { sectionHeading, questions } = FAQ_DATA;

  return (
    <section ref={ref} className="border-t border-primary-100/50 bg-white">
      <div className="mx-auto max-w-[880px] px-6 py-24 md:py-32">
        {/* â”€â”€ Heading â€” matches nautix-section-title pattern â”€â”€ */}
     {/* <div className="reveal text-center">
           <h2 className="nautix-section-title mb-0 whitespace-nowrap"> */}
           <div className="reveal">
   <h2
   className="nautix-section-title mb-0 whitespace-nowrap"
   style={{ textAlign: "center" }}
 >
    <span
      className="nautix-section-title-line"
     style={{ maxWidth: "none", width: "fit-content", marginLeft: "auto", marginRight: "auto" }}
    >
      Questions ISP operators
    </span>{" "}
            <span
              className="nautix-section-title-focus"
              style={{
                background: "#e2fe5e",
                color: "#22303f",
                boxShadow: "inset 0 0 0 1px rgba(34,48,63,0.06)",
              }}
            >
              ask before booking.
            </span>
          </h2>
        </div>

        {/* â”€â”€ FAQ items â”€â”€ */}
        <ul className="reveal" style={{ listStyle: "none", padding: 0, margin: "32px 0 0" }}>
          {questions.map((faq, idx) => {
            const isOpen = open === idx;
            const isLast = idx === questions.length - 1;

            return (
              <li
                key={faq.question}
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
                  <span>{faq.question}</span>

                  {/* Chevron â€” matches he-faq-chevron */}
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

                {/* Answer body â€” matches he-faq-body */}
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
                    {faq.answer}
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