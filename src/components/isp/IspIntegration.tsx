"use client";

import { INTEGRATION_DATA } from "@/lib/isp-data";
import { useReveal } from "@/hooks/useReveal";

/**
 * Brand colours for integration logo badges.
 * Replace these with <img> tags when actual logo assets exist.
 */
/**
 * Partner logos for the integration strip.
 * Uses the exact same structure as CLIENT_LOGOS in HomepageEnhanced.
 */
const PARTNER_LOGOS = [
  { src: "/nautix-partners/smart-olt.png", alt: "SmartOLT" },
  { src: "/nautix-partners/splynx-logo.png", alt: "Splynx" },
  { src: "/nautix-partners/m-pesa-daraja.png", alt: "M-Pesa Daraja" },
  { src: "/nautix-partners/whatsapp-business.png", alt: "WhatsApp Business" },
  { src: "/nautix-partners/meta-logo.png", alt: "Meta/Instagram" },
] as const;


/**
 * Icon mapping for architecture boxes.
 * Matches the WORKFLOW_CARDS icon pattern from HomepageEnhanced.
 */
const BOX_ICONS: Record<string, { icon: string; alt: string }> = {
  "Subscriber Message": {
    icon: "/wp-content/uploads/2025/04/icon-07.svg",
    alt: "Message channels icon",
  },
  Nautix: {
    icon: "/nautix-logo.png",
    alt: "AI operations icon",
  },
  "Your Stack": {
    icon: "/wp-content/uploads/2025/05/icon-02.svg",
    alt: "System stack icon",
  },
};

/* -------------------------------------------------------------------------- */
/*  Animated flow arrow between architecture boxes                            */
/* -------------------------------------------------------------------------- */

function FlowArrow() {
  return (
    <div className="flex items-center justify-center py-3 md:py-0 md:px-1">
      <svg
        width="52"
        height="52"
        viewBox="0 0 52 52"
        fill="none"
        aria-hidden
        className="shrink-0 rotate-90 md:rotate-0"
      >
        {/* Animated dashed track */}
        <path
          d="M6 26 h28"
          stroke="url(#flowGrad)"
          strokeWidth="2"
          strokeDasharray="4 6"
          strokeLinecap="round"
          style={{ animation: "dash 4s linear infinite" }}
        />
        {/* Arrow head */}
        <path
          d="M34 20 l8 6-8 6"
          stroke="url(#flowGrad)"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
        <defs>
          <linearGradient id="flowGrad" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#7C3AED" />
            <stop offset="100%" stopColor="#EC4899" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*  Checkmark icon for trust signals                                          */
/* -------------------------------------------------------------------------- */

function Checkmark() {
  return (
    <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary-100">
      <svg
        width="13"
        height="13"
        viewBox="0 0 13 13"
        fill="none"
        aria-hidden
      >
        <path
          d="M10.833 3.25 4.875 9.208 2.167 6.5"
          stroke="#7C3AED"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </span>
  );
}

/* -------------------------------------------------------------------------- */
/*  IspIntegration â€” Section 6                                                */
/* -------------------------------------------------------------------------- */

export function IspIntegration() {
  const ref = useReveal<HTMLElement>();
  const {
    sectionHeading,
    architectureBoxes,
    trustSignals,
    integrationLogos,
  } = INTEGRATION_DATA;

  return (
    <section
      ref={ref}
       className="border-t border-primary-100/50 py-24 md:py-32"
   style={{
     background:
       "linear-gradient(180deg, rgba(126,16,162,0.045) 0%, rgba(251,242,254,0.35) 55%, rgba(255,255,255,0) 100%), #fff",
  }}
  >
      <div className="mx-auto max-w-[1280px] px-6 md:px-10">
        {/* â”€â”€ Section heading â”€â”€ */}
                <h2 className="reveal text-center"
          style={{
            fontFamily: '"Sharp Grotesk", Sans-serif',
            fontSize: "clamp(2rem, 5vw, 3rem)",
            lineHeight: "1.1em",
            letterSpacing: "-0.06rem",
          }}
        >
          Connects to the systems{" "}
          <span
            style={{
              background: "#E2FF5E",
              color: "#16404B",
              boxShadow: "inset 0 0 0 1px rgba(34,48,63,0.06)",
            }}
          >
            you already run.
          </span>
        </h2>

        {/* â”€â”€ Architecture diagram â”€â”€ */}
        <div className="reveal mt-14 flex flex-col items-center md:flex-row md:justify-center md:gap-0">
          {architectureBoxes.map((box, i) => {
            const boxIcon = BOX_ICONS[box.title] ?? {
              icon: "/wp-content/uploads/2025/05/icon-01.svg",
              alt: "",
            };

            return (
              <div key={box.title} className="contents">
                {/* Box card */}
                <div className="relative w-full max-w-[280px] overflow-hidden rounded-[20px] border border-black/5 bg-white p-6 shadow-sm md:w-[240px] md:p-7">

                  {/* Gradient top line */}
                  <div
                    aria-hidden
                    className="absolute inset-x-0 top-0 h-[3px] rounded-t-[20px]"
                    style={{
                      background:
                        "linear-gradient(90deg, #7e10a2 0%, #b52ed1 50%, #7e10a2 100%)",
                    }}
                  />

                  {/* Icon â€” matches WORKFLOW_CARDS pattern */}
                  <div
                      style={{
                      width: 48,
                      height: 48,
                      borderRadius: 12,
                      background: "rgba(126,16,162,0.08)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      marginBottom: 16,
                    }}
                  >
                    <img
                      src={boxIcon.icon}
                      alt={boxIcon.alt}
                      loading="lazy"
                      style={{ width: 26, height: 26 }}
                    />
                  </div>

                  {/* Box title */}
                  <h3
                    className="mb-0"
                    style={{
                      fontFamily: "var(--font-heading), sans-serif",
                      fontSize: 18,
                      fontWeight: 600,
                      color: "#171717",
                    }}
                  >
                    {box.title}
                  </h3>

                  {/* Items list */}
                  

                <ul
                className="mt-3 space-y-2"
                style={{ paddingLeft: 0, paddingInlineStart: 0 }}
                >

                    {box.items.map((item) => (
                        <li
    key={item}
    className="flex items-center justify-start gap-1.5 text-[13px] leading-[1.5] text-foreground/60"
   style={{ marginLeft: 0, paddingLeft: 0 }}
  >
                        <span className="h-1 w-1 rounded-full bg-primary-400" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Flow arrow between boxes */}
                {i < architectureBoxes.length - 1 && <FlowArrow />}
              </div>
            );
          })}
        </div>

        {/* â”€â”€ Trust signals â”€â”€ */}
        <div className="reveal mx-auto mt-14 max-w-[680px]">
          <div className="rounded-2xl border border-primary-100 bg-primary-50/30 p-5 md:p-7">
            <ul className="space-y-4">
              {trustSignals.map((signal) => (
                <li key={signal} className="flex items-start gap-3">
                  <Checkmark />
                  <p className="text-[14px] leading-[1.65] text-foreground/65">
                    {signal}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>

                {/* â”€â”€ Integration logo strip â”€â”€ */}
        <div className="reveal" style={{ marginTop: 40 }}>
          <div className="nautix-client-marquee">
            <div className="nautix-client-logo-row" aria-label="Integration partners" style={{ display: "flex", gap: 110, alignItems: "center", justifyContent: "center", flexWrap: "nowrap" }}>
              {PARTNER_LOGOS.map((logo) => {
                // Larger sizes for specific partner logos
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