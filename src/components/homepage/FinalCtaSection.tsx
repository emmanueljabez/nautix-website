const DEMO_EMAIL_URL = "mailto:support@nautix.io?subject=Book%20a%20Nautix%20Demo";
const REGISTER_URL = "https://app.nautix.io/register";

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
            Your next customer is
            <br />
            <span className="nautix-final-cta-focus">expecting more than a reply.</span>
          </h2>
          <p className="nautix-final-cta-copy mb-0">
            Book a 15-minute live demo and see Nautix working across your real channels,
            workflows, and customer journeys. We will show you how it can qualify leads,
            resolve issues, and move conversations forward without the usual manual
            back-and-forth.
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
            30-day pilot - If Nautix does not work the way we showed you, you do not
            pay for that period.
          </p>
        </div>
      </div>
    </section>
  );
}
