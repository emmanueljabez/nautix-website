"use client";

import { TESTIMONIAL_DATA } from "@/lib/isp-data";
import { useReveal } from "@/hooks/useReveal";

const PARTNER_LOGOS = [
  { src: "/nautix-partners/smart-olt.png", alt: "SmartOLT" },
  { src: "/nautix-partners/splynx-logo.png", alt: "Splynx" },
  { src: "/nautix-partners/whatsapp-business.png", alt: "WhatsApp Business" },
  { src: "/nautix-partners/m-pesa-daraja.png", alt: "M-Pesa Daraja" },
  { src: "/nautix-partners/instagram-logo.png", alt: "Meta/Instagram" },
  { src: "/nautix-partners/facebook-logo.png", alt: "FaceBook" },
] as const;

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
                {/* ── Heading ── */}
        <h2 className="reveal" style={{
          fontFamily: '"Sharp Grotesk", Sans-serif',
          fontSize: "clamp(2rem, 5vw, 3rem)",
          lineHeight: "1.1em",
          letterSpacing: "-0.06rem",
          textAlign: "center",
        }}>
          Built for ISPs across{" "}
          <span
            style={{
              background: "#E2FF5E",
              color: "#16404B",
              boxShadow: "inset 0 0 0 1px rgba(34,48,63,0.06)",
            }}
          >
            East Africa.
          </span>
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
        <div className="reveal" style={{ marginTop: 40 }}>
          <div className="nautix-client-marquee">
            <div className="nautix-client-logo-row" aria-label="Integration partners" style={{ display: "flex", gap: 20, alignItems: "center", justifyContent: "center", flexWrap: "nowrap" }}>
              {PARTNER_LOGOS.map((logo) => {
                const isLarge = logo.alt === "SmartOLT";
                const isSmall = logo.alt === "Splynx";
                const logoSize = isLarge ? { height: 52, width: "auto", maxHeight: 52 } : isSmall ? { height: 28, width: "auto", maxHeight: 28 } : { height: 40, width: "auto", maxHeight: 40 };
                return (
                  <div key={logo.alt} className="brand-item text-center">
                    <img
                      className="brand-item-image nautix-client-logo"
                      src={logo.src}
                      loading="lazy"
                      alt={logo.alt}
                      style={logoSize}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}