import { CurrentYear } from "./CurrentYear";

const DEMO_EMAIL_URL = "mailto:support@nautix.io?subject=Book%20a%20Nautix%20Demo";
const BOOK_DEMO_URL =
  "https://app.nautix.io/book/skVGGbpLujeMxRTL2JgwnzUut4AC3N-X/xU-NHVEi4rMuY9DlQZdvrHqnJkY-YVAp";

const FOOTER_COLUMNS = [
  {
    title: "Solutions",
    links: [
      { href: "/solutions/marketing", label: "Marketing" },
      { href: "/solutions/sales", label: "Sales" },
      { href: "/solutions/customer-support", label: "Customer Support" },
      { href: BOOK_DEMO_URL, label: "Book a Demo" },
      { href: "/pricing", label: "Pricing" },
    ],
  },
  {
    title: "Resources",
    links: [
      { href: "/features", label: "Features" },
      { href: "/compare/nautix-vs-wati", label: "Nautix vs Wati" },
      { href: "/compare/nautix-vs-respond-io", label: "Nautix vs Respond.io" },
      { href: BOOK_DEMO_URL, label: "Book a Demo" },
      { href: "/privacy", label: "Privacy Policy" },
      { href: "/terms", label: "Terms of Service" },
    ],
  },
  {
    title: "Industries",
    links: [
      { href: "/industries/isps", label: "Internet Service Providers" },
      { href: "/industries/real-estate", label: "Real Estate" },
      { href: "/industries/ecommerce", label: "Ecommerce" },
      { href: "/industries/finance", label: "Finance" },
      { href: DEMO_EMAIL_URL, label: "Contact Us" },
    ],
  },
] as const;

export function SiteFooter() {
  return (
    <footer className="nautix-site-footer">
      <div className="nautix-site-footer__inner">
        <div className="nautix-site-footer__top">
          <div className="nautix-site-footer__brand">
            <a className="nautix-site-footer__logo panel text-none" href="/">
              <img
                className="dark:d-none"
                src="/wp-content/uploads/2025/04/logo-new-light.svg"
                loading="lazy"
                alt="Nautix"
              />
              <img
                className="d-none dark:d-block"
                src="/wp-content/uploads/2025/04/logo-new-dark.svg"
                loading="lazy"
                alt="Nautix"
              />
            </a>
            <p className="nautix-site-footer__tagline mb-0">
              Across every channel.
              <br />
              Resolves - not just responds.
            </p>
          </div>
          <div className="nautix-site-footer__columns">
            {FOOTER_COLUMNS.map((column) => (
              <div key={column.title} className="nautix-site-footer__column">
                <p className="nautix-site-footer__column-title mb-0">{column.title}</p>
                <ul className="nav-y gap-1 fw-medium genix-menu-list dark:text-white">
                  {column.links.map((link) => (
                    <li key={link.label}>
                      <a href={link.href}>{link.label}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className="nautix-site-footer__bottom">
          <p className="nautix-site-footer__copyright mb-0">
            © <CurrentYear /> Nautix. All rights reserved.
          </p>
          <ul className="nav-x gap-3 fw-medium nautix-footer-legal">
            <li>
              <a href="/privacy">Privacy Policy</a>
            </li>
            <li>
              <a href="/terms">Terms of Service</a>
            </li>
            <li>
              <a href="/data-deletion">Data Deletion</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
