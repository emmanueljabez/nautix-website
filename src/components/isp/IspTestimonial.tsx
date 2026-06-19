"use client";

import { TESTIMONIAL_DATA } from "@/lib/isp-data";
import { useReveal } from "@/hooks/useReveal";

const LOGO_COLORS: Record<string, { bg: string; text: string }> = {
  SmartOLT:           { bg: "#E8F0FE", text: "#1A73E8" },
  Splynx:             { bg: "#F1F5F9", text: "#334155" },
  "WhatsApp Business": { bg: "#E6F7EC", text: "#075E54" },
  "M-Pesa Daraja":    { bg: "#E6F4EA", text: "#1E8E3E" },
  Instagram:          { bg: "#FCE7F3", text: "#BE185D" },
  Facebook:           { bg: "#E8F0FE", text: "#1877F2" },
};

/**
 * IspTestimonial — Section 9: Social proof.
 *
 * One pull quote with attribution + context, followed by
 * a horizontal integration logo strip. Uses the exact
 * blockquote and figcaption styling from the
 * HomepageEnhanced TestimonialsSection.
 */
export function IspTestimonial() {
  const ref = useReveal<HTMLDivElement>();
  const { sectionHeading, quote, attribution, context, integrationLogos } =
    TESTIMONIAL_DATA;

  return (
    <section
      ref={ref}
      className="border-t border-primary-100/50 bg-white"
    >
      <div style={{ maxWidth: 980, margin: "0 auto", padding: "80px 24px" }}>
        {/* ── Heading — matches nautix-testimonials-heading ── */}
        <h2 className="reveal title tg-element-title mb-0 nautix-testimonials-heading">
          Built for ISPs{" "}
          <span className="px-1">across East Africa.</span>
        </h2>

        {/* ── Quote ── */}
        <div className="reveal" style={{ marginTop: 40 }}>
          <figure style={{ margin: 0 }}>
            <blockquote
              style={{
                margin: 0,
                fontFamily: "var(--font-heading), sans-serif",
                fontSize: "clamp(20px, 2vw, 28px)",
                lineHeight: 1.4,
                letterSpacing: "-0.015em",
                color: "#171717",
              }}
            >
              &ldquo;{quote}&rdquo;
            </blockquote>

            <figcaption
              style={{
                marginTop: 24,
                display: "flex",
                flexDirection: "column",
                gap: 2,
              }}
            >
              <span style={{ fontWeight: 600, color: "#171717" }}>
                — {attribution}
              </span>
              <span
                style={{
                  color: "rgba(23,23,23,0.6)",
                  fontSize: 14,
                }}
              >
                {context}
              </span>
            </figcaption>
          </figure>
        </div>

        {/* ── Integration logo strip ── */}
        <div className="reveal" style={{ marginTop: 48 }}>
          <div className="flex flex-wrap items-center justify-center gap-3">
            {integrationLogos.map((name) => {
              const c = LOGO_COLORS[name] ?? {
                bg: "#F1F5F9",
                text: "#334155",
              };
              return (
                <span
                  key={name}
                  className="inline-flex items-center rounded-full px-4 py-2 text-[12px] font-semibold tracking-[0.04em] shadow-sm"
                  style={{
                    backgroundColor: c.bg,
                    color: c.text,
                  }}
                >
                  {name}
                </span>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}