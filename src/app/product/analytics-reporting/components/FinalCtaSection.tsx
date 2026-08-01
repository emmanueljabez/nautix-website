const DEMO_EMAIL_URL =
  "https://app.nautix.io/book/skVGGbpLujeMxRTL2JgwnzUut4AC3N-X/xU-NHVEi4rMuY9DlQZdvrHqnJkY-YVAp";
const REGISTER_URL = "https://app.nautix.io/register";

const crossLinks = [
  { label: "Omnichannel Inbox", href: "/product/channels-inbox" },
  { label: "Autonomous Resolution", href: "/product/ai-resolution" },
  { label: "Full Payment Loop", href: "/product/payments" },
];

export function FinalCtaSection() {
  return (
    <section className="nautix-final-cta-section">
      <div
        className="nautix-final-cta-shell"
        style={{
          background: "linear-gradient(145deg, #7e10a2 0%, #651082 54%, #2b1539 100%)",
          boxShadow: "0 32px 70px rgba(65, 16, 95, 0.22)",
        }}
      >
        <img
          className="nautix-final-cta-decor nautix-final-cta-decor--left"
          src="/wp-content/uploads/2025/05/green-stars.svg"
          width={55}
          height={50}
          loading="lazy"
          alt=""
          aria-hidden="true"
        />
        <img
          className="nautix-final-cta-decor nautix-final-cta-decor--right"
          src="/wp-content/uploads/2025/05/green-star.svg"
          width={19}
          height={30}
          loading="lazy"
          alt=""
          aria-hidden="true"
        />
        <div
          className="nautix-final-cta-content"
          style={{
            background: "linear-gradient(145deg, #7e10a2 0%, #651082 54%, #2b1539 100%)",
            borderRadius: "inherit",
          }}
        >
          <h2 className="nautix-final-cta-title mb-0">
            Know exactly how your operation is performing.
          </h2>
          <p className="nautix-final-cta-copy mb-0">
            Stop guessing. See response times, resolution rates, lead conversion,
            and revenue in one place. Start every day with a clear picture of how
            your operation ran yesterday.
          </p>
          <div className="nautix-final-cta-actions">
            <a className="nautix-final-cta-button nautix-final-cta-button--primary" href={DEMO_EMAIL_URL}>
              Book a Demo
            </a>
            <a className="nautix-final-cta-button nautix-final-cta-button--secondary" href={REGISTER_URL}>
              Start For Free
            </a>
          </div>
          <p className="nautix-final-cta-note mb-0">
            No credit card &middot; 30-day free pilot &middot; Cancel anytime
          </p>
        </div>
      </div>
    </section>
  );
}
