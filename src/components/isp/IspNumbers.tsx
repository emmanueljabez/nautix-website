"use client";

import { NUMBERS_DATA } from "@/lib/isp-data";
import { useReveal } from "@/hooks/useReveal";
import { Counter } from "@/components/ui/Counter";

/**
 * Parse a stat value string into Counter props.
 * Returns null for non-numeric values like "1m 52s"
 * that should be rendered as static text.
 */
function toCounter(
  value: string
): { target: number; suffix: string } | null {
  // Time durations e.g. "1m 52s" â€” display as static text
  if (/\dm\s?\d+s/.test(value)) return null;

  // Percentage e.g. "91%"
  if (value.endsWith("%")) {
    return { target: Number.parseFloat(value), suffix: "%" };
  }

  // Number with word suffix e.g. "20 hrs"
  const match = value.match(/^([\d.]+)\s*(.+)$/);
  if (match) {
    return {
      target: Number.parseFloat(match[1]),
      suffix: ` ${match[2]}`,
    };
  }

  return null;
}

/**
 * IspNumbers â€” Section 5: Statistical proof.
 *
 * Three big animated stats with Counter for numeric values
 * and static text for compound values like "1m 52s".
 * Animates on scroll reveal. Supporting copy line below.
 */
export function IspNumbers() {
  const ref = useReveal<HTMLElement>();
  const { sectionHeading, stats, supportingCopy } = NUMBERS_DATA;

  return (
    <section
      ref={ref}
      className="border-t border-primary-100/50 bg-white py-24 md:py-32"
    >
      <div className="mx-auto max-w-[1280px] px-6 md:px-10">
        {/* Section heading */}
                <h2 className="reveal text-center"
          style={{
            fontFamily: '"Sharp Grotesk", Sans-serif',
            fontSize: "clamp(2rem, 5vw, 3rem)",
            lineHeight: "1.1em",
            letterSpacing: "-0.06rem",
          }}
        >
          Real numbers from a 1,200-subscriber WISP {"\u2014"} {" "}
          <span
            style={{
              background: "#E2FF5E",
              color: "#16404B",
              boxShadow: "inset 0 0 0 1px rgba(34,48,63,0.06)",
            }}
          >
          Month 1.
          </span>
        </h2>

        {/* 3 stats â€” responsive grid */}
        <div className="reveal mt-12 grid gap-10 md:grid-cols-3 md:gap-0">
          {stats.map((stat, i) => {
            const counterProps = toCounter(stat.value);

            return (
              <div
                key={stat.label}
                className={`flex flex-col items-center text-center ${
                  i !== 0 ? "md:border-l md:border-primary-100" : ""
                } px-4 md:px-10`}
              >
                {/* Animated number or static text */}
                <div
   className="text-[clamp(48px,8vw,80px)] font-semibold leading-none tracking-[-0.04em] tabular-nums"
   style={{
     fontFamily: "var(--font-heading), sans-serif",
     background:
       "linear-gradient(135deg, #7e10a2 0%, #b52ed1 100%)",
     WebkitBackgroundClip: "text",
     backgroundClip: "text",
     color: "transparent",
   }}
 >
                  {counterProps ? (
                    <Counter
                      target={counterProps.target}
                      suffix={counterProps.suffix}
                    />
                  ) : (
                    <span>{stat.value}</span>
                  )}
                </div>

                {/* Label */}
                 <p className="mt-2.5 max-w-[220px] text-[15px] font-medium leading-[1.6] text-neutral-900">
                  {stat.label}
                </p>
              </div>
            );
          })}
        </div>

        {/* Supporting copy */}
        <div className="reveal mt-12 text-center">
           <p className="text-[13px] leading-[1.7] text-neutral-900/55">
            {supportingCopy.join("  Â·  ")}
          </p>
        </div>
      </div>
    </section>
  );
}