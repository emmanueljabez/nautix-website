const FOOTER_COLUMNS = [
  {
    title: "Solutions",
    links: [
      { href: "#hero-overview", label: "Marketing" },
      { href: "#hero-overview", label: "Sales" },
      { href: "#hero-overview", label: "Customer Support" },
      { href: "#hero-overview", label: "Omnichannel" },
      { href: "#autonomous-workflows", label: "Integrations" },
    ],
  },
  {
    title: "Company",
    links: [
      { href: "#", label: "About us" },
      { href: "#", label: "How It Works" },
      { href: "#", label: "Pricing" },
      { href: "#", label: "Blog" },
      { href: "#hero-overview", label: "Contact Us" },
    ],
  },
  {
    title: "Industries",
    links: [
      { href: "#industries-section", label: "Internet Service Providers" },
      { href: "#industries-section", label: "Real Estate" },
      { href: "#industries-section", label: "Ecommerce" },
      { href: "#industries-section", label: "Finance" },
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
            <ul className="nav-x gap-2 social-btn dark:text-white nautix-footer-social">
              <li>
                <a href="#" className="icon-2" target="_blank" aria-label="LinkedIn">
                  <i aria-hidden="true" className="unicon-logo-linkedin" />
                </a>
              </li>
              <li>
                <a href="#" className="icon-2" target="_blank" aria-label="Instagram">
                  <i aria-hidden="true" className="genix unicon-logo-instagram" />
                </a>
              </li>
              <li>
                <a href="#" className="icon-2" target="_blank" aria-label="Facebook">
                  <i aria-hidden="true" className="genix unicon-logo-facebook" />
                </a>
              </li>
            </ul>
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
          <p className="nautix-site-footer__copyright mb-0">© 2025 Nautix. All rights reserved.</p>
          <ul className="nav-x gap-3 fw-medium nautix-footer-legal">
            <li>
              <a href="#">Privacy Policy</a>
            </li>
            <li>
              <a href="#">Terms of Service</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
