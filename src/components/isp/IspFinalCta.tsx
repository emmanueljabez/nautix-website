import { FINAL_CTA_DATA } from "@/lib/isp-data";

const BOOK_DEMO_URL =
  "https://app.nautix.io/book/skVGGbpLujeMxRTL2JgwnzUut4AC3N-X/xU-NHVEi4rMuY9DlQZdvrHqnJkY-YVAp";

export function IspFinalCta() {
  const {
    sectionHeading,
    subheadline,
    primaryCta,
    secondaryCta,
    secondaryCtaNumber,
    riskReversal,
  } = FINAL_CTA_DATA;

  const waNumber = secondaryCtaNumber.replace(/\s/g, "");

  return (
    <section className="nautix-final-cta-section">
      <div
        className="nautix-final-cta-shell"
        style={{
          background: "linear-gradient(145deg, #7e10a2 0%, #651082 54%, #2b1539 100%)",
          boxShadow: "0 32px 70px rgba(65, 16, 95, 0.22)",
        }}
      >
        <div
          className="nautix-final-cta-content"
          style={{
            background: "linear-gradient(145deg, #7e10a2 0%, #651082 54%, #2b1539 100%)",
            borderRadius: "inherit",
          }}
        >
          <h2 className="nautix-final-cta-title mb-0">
            See Nautix working on
            <br />
            <span className="nautix-final-cta-focus">your actual network.</span>
          </h2>
          <p className="nautix-final-cta-copy mb-0">
            {subheadline}
          </p>
          <div className="nautix-final-cta-actions">
            <a className="nautix-final-cta-button nautix-final-cta-button--primary" href={BOOK_DEMO_URL}>
              {primaryCta}
            </a>
            <a className="nautix-final-cta-button nautix-final-cta-button--secondary" href={`https://wa.me/${waNumber}`}>
              {secondaryCta}: {secondaryCtaNumber}
            </a>
          </div>
          <p className="nautix-final-cta-note mb-0">
            {riskReversal.join(" ")}
          </p>
        </div>
      </div>
    </section>
  );
}