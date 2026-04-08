import { FinalCtaSection } from "@/components/homepage/FinalCtaSection";
import { HomepageBodyClass } from "@/components/homepage/HomepageBodyClass";
import { SiteFooter } from "@/components/site/SiteFooter";
import { SiteHeader } from "@/components/site/SiteHeader";
import { HOMEPAGE_FAQS } from "@/lib/faq-data";

const DEMO_EMAIL_URL = "mailto:support@nautix.io?subject=Book%20a%20Nautix%20Demo";
const CLIENT_LOGOS = [
  { src: "/nautix-clients/vsquared-networks.png", alt: "Vsquared Networks" },
  { src: "/nautix-clients/p-cash.png", alt: "P-Cash" },
  { src: "/nautix-clients/rewards.png", alt: "Rewards" },
  { src: "/nautix-clients/kings-mabati.png", alt: "Kings Mabati" },
] as const;

export function Homepage() {
  return (
    <div>
      <HomepageBodyClass />
      <SiteHeader />
      <main className="main-area">
        <div data-elementor-type="wp-page" data-elementor-id={3841} className="elementor elementor-3841">
          <div
            className="elementor-element elementor-element-f152d04 e-con-full hero-header e-flex animejs-disable e-con e-parent"
            data-id="f152d04"
            data-element_type="container"
          >
            <div
              className="elementor-element elementor-element-f008070 elementor-absolute h-100 w-100 animejs-disable elementor-widget elementor-widget-tg-shapes"
              data-id="f008070"
              data-element_type="widget"
              data-settings="{&quot;_position&quot;:&quot;absolute&quot;}"
              data-widget_type="tg-shapes.default"
            >
              <div className="elementor-widget-container">
                <div
                  className="d-none lg:d-block"
                  data-anime="targets: >*; scale: [0, 1]; opacity: [0, 1]; easing: easeOutCubic; duration: 750; delay: anime.stagger(150, {start: 500});"
                >
                  <img decoding="async" src="/wp-content/uploads/2025/04/marketing.svg" alt="Icon" className="d-inline-block position-absolute w-72px dark:d-none" style={{ top: "15%", left: "10%" }} />
                  <img decoding="async" src="/wp-content/uploads/2025/04/marketing-dark.svg" alt="Icon" className="d-inline-block position-absolute w-72px d-none dark:d-block" style={{ top: "15%", left: "10%" }} />
                  <img decoding="async" src="/wp-content/uploads/2025/04/charts-pc.svg" alt="Icon" className="d-inline-block position-absolute w-72px dark:d-none" style={{ top: "15%", right: "10%" }} />
                  <img decoding="async" src="/wp-content/uploads/2025/04/charts-pc-dark.svg" alt="Icon" className="d-inline-block position-absolute w-72px d-none dark:d-block" style={{ top: "15%", right: "10%" }} />
                  <img decoding="async" src="/wp-content/uploads/2025/04/group.svg" alt="Icon" className="d-inline-block position-absolute w-64px dark:d-none" style={{ top: "35%", right: "-1%", transform: "rotate(45deg)" }} />
                  <img decoding="async" src="/wp-content/uploads/2025/04/group-dark.svg" alt="Icon" className="d-inline-block position-absolute w-64px d-none dark:d-block" style={{ top: "35%", right: "-1%", transform: "rotate(45deg)" }} />
                  <img decoding="async" src="/wp-content/uploads/2025/04/idea.svg" alt="Icon" className="d-inline-block position-absolute w-48px dark:d-none" style={{ top: "40%", left: "15%" }} />
                  <img decoding="async" src="/wp-content/uploads/2025/04/idea-dark.svg" alt="Icon" className="d-inline-block position-absolute w-48px d-none dark:d-block" style={{ top: "40%", left: "15%" }} />
                  <img decoding="async" src="/wp-content/uploads/2025/04/group.svg" alt="Icon" className="d-inline-block position-absolute w-64px dark:d-none" style={{ top: "30%", left: "-1%" }} />
                  <img decoding="async" src="/wp-content/uploads/2025/04/group-dark.svg" alt="Icon" className="d-inline-block position-absolute w-64px d-none dark:d-block" style={{ top: "30%", left: "-1%" }} />
                </div>
              </div>
            </div>
            <div className="elementor-element elementor-element-6b627a9 e-con-full h--100 e-flex animejs-disable e-con e-child" data-id="6b627a9" data-element_type="container" data-settings="{&quot;background_background&quot;:&quot;classic&quot;,&quot;position&quot;:&quot;absolute&quot;}" />
            <div className="elementor-element elementor-element-2438a1e e-con-full h--100 e-flex animejs-disable e-con e-child" data-id="2438a1e" data-element_type="container" data-settings="{&quot;background_background&quot;:&quot;gradient&quot;,&quot;position&quot;:&quot;absolute&quot;}" />
            <div className="elementor-element elementor-element-f42f923 e-flex e-con-boxed animejs-disable e-con e-child" data-id="f42f923" data-element_type="container">
              <div className="e-con-inner">
                <div
                  className="elementor-element elementor-element-549f63b animejs-onview e-flex e-con-boxed animejs-element e-con e-child"
                  data-id="549f63b"
                  data-element_type="container"
                  data-anime="onview: ; loop: false; targets: .e-con-inner > *; opacity: [0, 1]; translateY: [48, 0]; easing: 'easeOutCubic'; duration: 500; delay: 0; delay: anime.stagger(100, {start: 200})"
                  data-anime-devices="mobile,tablet,desktop"
                >
                  <div className="e-con-inner">
                    <div className="elementor-element elementor-element-f9e6c88 animejs-disable elementor-widget elementor-widget-tg-animated-heading" data-id="f9e6c88" data-element_type="widget" data-widget_type="tg-animated-heading.default">
                      <div className="elementor-widget-container">
                        <h1 className="title tg-element-title mb-0 ">
                          When your customers
                          <br />
                          reach out.
                          <br />
                          Nautix is{" "}
                          <span className="px-1 animated-title" data-uc-typed="typeSpeed: 80; backSpeed: 50; backDelay: 1600; loop: true;">
                            <span>solving</span>
                            <span>qualifying</span>
                            <span>converting</span>
                          </span>
                        </h1>
                      </div>
                    </div>
                    <div className="elementor-element elementor-element-7c4133d animejs-disable elementor-widget elementor-widget-tg-heading" data-id="7c4133d" data-element_type="widget" data-widget_type="tg-heading.default">
                      <div className="elementor-widget-container">
                        <p className="title tg-element-title mb-0 ">
                          Nautix reads customer messages, checks your live business context, and resolves issues
                          across Instagram, Facebook, and WhatsApp without a human in the loop.
                        </p>
                      </div>
                    </div>
                    <div className="elementor-element elementor-element-086f348 elementor-align-center show-original-svg elementor-mobile-align-center animejs-disable elementor-widget elementor-widget-button" data-id="086f348" data-element_type="widget" data-widget_type="button.default">
                      <div className="elementor-widget-container">
                        <div className="nautix-hero-actions">
                          <div className="nautix-hero-action-row">
                            <a className="nautix-hero-primary text-none" href={DEMO_EMAIL_URL}>
                              Book a Live Demo <i className="fs-8 unicon-arrow-up-right fw-bold" aria-hidden="true" />
                            </a>
                            <a className="nautix-hero-secondary text-none" href="/pricing">
                              See Pricing
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="elementor-element elementor-element-a33bb53 animejs-disable elementor-widget elementor-widget-tg-video" data-id="a33bb53" data-element_type="widget" data-widget_type="tg-video.default">
                  <div className="elementor-widget-container">
                    <div className="uc-video-scene" data-anime="scale: [1.2, 1]; opacity: [0, 1]; easing: easeOutCubic; duration: 750; delay: 500;">
                      <div id="hero-overview" className="panel max-w-1000px mx-auto mt-2 rounded lg:rounded-1-5 xl:rounded-2 border border-dark contrast-shadow-lg overflow-hidden" data-anime="onscroll: .hero-header; onscroll-trigger: 0.5; translateY: [-80, 0]; scale: [0.8, 1]; easing: linear;">
                        <video preload="auto" data-uc-video="autoplay: true;" playsInline muted loop poster="/wp-content/uploads/2025/04/lexend-home-7-scaled.webp" src="/nautix-media/marketing-loop.mp4" title="Nautix product overview" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="nautix-hero-marquee">
                  <p className="nautix-hero-marquee-title mb-0">Trusted by leading teams across industries</p>
                  <div className="nautix-client-marquee">
                    <div className="nautix-client-logo-row" aria-label="Selected Nautix customers">
                      {CLIENT_LOGOS.map((logo) => (
                        <div key={logo.alt} className="brand-item text-center">
                          <img decoding="async" className="brand-item-image nautix-client-logo" src={logo.src} loading="lazy" alt={logo.alt} />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <section id="solutions" className="nautix-pillars-section animejs-onview animejs-element" data-anime="onview: -200; loop: false; targets: .nautix-pillars-head > *, .nautix-pillars-tabs-wrap; opacity: [0, 1]; translateY: [36, 0]; easing: 'easeOutCubic'; duration: 500; delay: anime.stagger(100, {start: 200})" data-anime-devices="mobile,tablet,desktop">
            <div className="nautix-pillars-head">
              <h2 className="nautix-section-title mb-0">
                <span className="nautix-section-title-line">Everything you need to grow</span>
                <span className="nautix-section-title-focus">across marketing, sales, and support.</span>
              </h2>
              <p className="nautix-section-copy mb-0">Nautix supports every stage of the customer journey.</p>
            </div>
            <div className="nautix-pillars-tabs-wrap">
              <ul className="uc-subnav uc-subnav-outline-pill gap-1 lg:gap-2 fs-5 fw-medium justify-center mx-auto overflow-scroll hide-scrollbar max-w-100 nautix-pillars-tabs" data-uc-switcher="connect: .nautix-pillars-switcher; animation: uc-animation-fade">
                <li><a href="#">Marketing</a></li>
                <li><a href="#">Sales</a></li>
                <li><a href="#">Customer Support</a></li>
              </ul>
              <div className="nautix-pillars-switcher uc-switcher">
                <div>
                  <div className="nautix-pillar-panel">
                    <div className="nautix-pillar-media-panel">
                      <div className="nautix-pillar-media">
                        <video className="nautix-pillar-video nautix-pillar-video--ui-frame" autoPlay muted loop playsInline preload="metadata" disablePictureInPicture aria-label="Marketing automation demo">
                          <source src="/nautix-media/marketing-loop.mp4" type="video/mp4" />
                        </video>
                      </div>
                    </div>
                    <div className="nautix-pillar-feature-grid">
                      <article className="nautix-pillar-feature">
                        <span className="nautix-pillar-feature-kicker">Coverage</span>
                        <h4 className="nautix-pillar-feature-title mb-0">Never miss a lead</h4>
                        <p className="nautix-pillar-feature-copy mb-0">Capture inquiries after hours, on weekends, and during campaigns.</p>
                      </article>
                      <article className="nautix-pillar-feature">
                        <span className="nautix-pillar-feature-kicker">Targeting</span>
                        <h4 className="nautix-pillar-feature-title mb-0">Segment by intent</h4>
                        <p className="nautix-pillar-feature-copy mb-0">Separate buyers, repeat customers, and support requests automatically.</p>
                      </article>
                      <article className="nautix-pillar-feature">
                        <span className="nautix-pillar-feature-kicker">Re-engagement</span>
                        <h4 className="nautix-pillar-feature-title mb-0">Re-engage warm audiences</h4>
                        <p className="nautix-pillar-feature-copy mb-0">Bring back interested prospects with timed nudges and reminders.</p>
                      </article>
                      <article className="nautix-pillar-feature">
                        <span className="nautix-pillar-feature-kicker">Launch</span>
                        <h4 className="nautix-pillar-feature-title mb-0">Launch campaigns faster</h4>
                        <p className="nautix-pillar-feature-copy mb-0">Send promotions and announcements without manual broadcast work.</p>
                      </article>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="nautix-pillar-panel">
                    <div className="nautix-pillar-media-panel">
                      <div className="nautix-pillar-media">
                        <video className="nautix-pillar-video nautix-pillar-video--ui-frame" autoPlay muted loop playsInline preload="metadata" disablePictureInPicture aria-label="Sales automation demo">
                          <source src="/nautix-media/sales-loop.mp4" type="video/mp4" />
                        </video>
                      </div>
                    </div>
                    <div className="nautix-pillar-feature-grid">
                      <article className="nautix-pillar-feature">
                        <span className="nautix-pillar-feature-kicker">Qualification</span>
                        <h4 className="nautix-pillar-feature-title mb-0">Qualify in minutes</h4>
                        <p className="nautix-pillar-feature-copy mb-0">Capture budget, need, authority, and timeline from the first exchange.</p>
                      </article>
                      <article className="nautix-pillar-feature">
                        <span className="nautix-pillar-feature-kicker">Matching</span>
                        <h4 className="nautix-pillar-feature-title mb-0">Route the right offer</h4>
                        <p className="nautix-pillar-feature-copy mb-0">Match each buyer to the right product, plan, or next step.</p>
                      </article>
                      <article className="nautix-pillar-feature">
                        <span className="nautix-pillar-feature-kicker">Conversion</span>
                        <h4 className="nautix-pillar-feature-title mb-0">Close inside chat</h4>
                        <p className="nautix-pillar-feature-copy mb-0">Collect payment or confirm the next action without leaving the conversation.</p>
                      </article>
                      <article className="nautix-pillar-feature">
                        <span className="nautix-pillar-feature-kicker">Prioritization</span>
                        <h4 className="nautix-pillar-feature-title mb-0">Surface hot leads</h4>
                        <p className="nautix-pillar-feature-copy mb-0">Highlight buyers showing strong intent so your team acts faster.</p>
                      </article>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="nautix-pillar-panel">
                    <div className="nautix-pillar-media-panel">
                      <div className="nautix-pillar-media">
                        <video className="nautix-pillar-video nautix-pillar-video--ui-frame" autoPlay muted loop playsInline preload="metadata" disablePictureInPicture aria-label="Customer support automation demo">
                          <source src="/nautix-media/customer-support-loop.mp4" type="video/mp4" />
                        </video>
                      </div>
                    </div>
                    <div className="nautix-pillar-feature-grid">
                      <article className="nautix-pillar-feature">
                        <span className="nautix-pillar-feature-kicker">Resolution</span>
                        <h4 className="nautix-pillar-feature-title mb-0">Resolve Tier 1 issues</h4>
                        <p className="nautix-pillar-feature-copy mb-0">Handle billing, outages, order status, and account questions automatically.</p>
                      </article>
                      <article className="nautix-pillar-feature">
                        <span className="nautix-pillar-feature-kicker">Alerts</span>
                        <h4 className="nautix-pillar-feature-title mb-0">Send proactive alerts</h4>
                        <p className="nautix-pillar-feature-copy mb-0">Update customers before they ask about problems, reminders, or delays.</p>
                      </article>
                      <article className="nautix-pillar-feature">
                        <span className="nautix-pillar-feature-kicker">Escalation</span>
                        <h4 className="nautix-pillar-feature-title mb-0">Escalate with context</h4>
                        <p className="nautix-pillar-feature-copy mb-0">Hand off only the exceptions, with full conversation history attached.</p>
                      </article>
                      <article className="nautix-pillar-feature">
                        <span className="nautix-pillar-feature-kicker">Efficiency</span>
                        <h4 className="nautix-pillar-feature-title mb-0">Reduce team load</h4>
                        <p className="nautix-pillar-feature-copy mb-0">Let your team focus on edge cases instead of repetitive requests.</p>
                      </article>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section id="product" className="nautix-workflows-section nautix-workflows-section--cards animejs-onview animejs-element" data-anime="onview: -200; loop: false; targets: .nautix-workflows-head > *, .nautix-workflows-card-grid > *; opacity: [0, 1]; translateY: [36, 0]; easing: 'easeOutCubic'; duration: 500; delay: anime.stagger(80, {start: 200})" data-anime-devices="mobile,tablet,desktop">
            <div className="nautix-workflows-head">
              <h2 className="nautix-section-title mb-0">Build <span className="px-1">AI agents</span> your team will actually use.</h2>
              <p className="nautix-section-copy mb-0">Nautix lets your team define what an agent can resolve, when it should escalate, and which actions it can take across your channels. The result is an always-on execution layer, not just another bot.</p>
            </div>
            <div className="nautix-workflows-card-grid">
              <article className="features-item genix-box vstack items-center justify-center text-center gap-4 nautix-workflow-feature">
                <div className="icon-box cstack w-48px h-48px bg-tertiary rounded">
                  <img decoding="async" className="w-24px xl:w-32px" src="/wp-content/uploads/2025/05/icon-01.svg" loading="lazy" alt="Visual builder icon" />
                </div>
                <div className="panel">
                  <div className="vstack gap-1">
                    <h5 className="title m-0">Visual Agent Builder</h5>
                    <p className="desc m-0 fs-6 opacity-60 dark:opacity-90">Build agents with flows, rules, and actions your team can manage without engineering bottlenecks.</p>
                  </div>
                </div>
              </article>
              <article className="features-item genix-box vstack items-center justify-center text-center gap-4 nautix-workflow-feature">
                <div className="icon-box cstack w-48px h-48px bg-tertiary rounded">
                  <img decoding="async" className="w-24px xl:w-32px" src="/wp-content/uploads/2025/05/icon-02.svg" loading="lazy" alt="Off-script conversations icon" />
                </div>
                <div className="panel">
                  <div className="vstack gap-1">
                    <h5 className="title m-0">Handles Off-Script Conversations</h5>
                    <p className="desc m-0 fs-6 opacity-60 dark:opacity-90">Go beyond rigid chatbot trees with agents that adapt when customers ask unexpected questions.</p>
                  </div>
                </div>
              </article>
              <article className="features-item genix-box vstack items-center justify-center text-center gap-4 nautix-workflow-feature">
                <div className="icon-box cstack w-48px h-48px bg-tertiary rounded">
                  <img decoding="async" className="w-24px xl:w-32px" src="/wp-content/uploads/2025/05/icon-03.svg" loading="lazy" alt="Multi-channel deployment icon" />
                </div>
                <div className="panel">
                  <div className="vstack gap-1">
                    <h5 className="title m-0">Deploy Across Channels</h5>
                    <p className="desc m-0 fs-6 opacity-60 dark:opacity-90">Launch the same agent on WhatsApp, Instagram, and Facebook without rebuilding it for each channel.</p>
                  </div>
                </div>
              </article>
              <article className="features-item genix-box vstack items-center justify-center text-center gap-4 nautix-workflow-feature">
                <div className="icon-box cstack w-48px h-48px bg-tertiary rounded">
                  <img decoding="async" className="w-24px xl:w-32px" src="/wp-content/uploads/2025/04/icon-07.svg" loading="lazy" alt="Business context icon" />
                </div>
                <div className="panel">
                  <div className="vstack gap-1">
                    <h5 className="title m-0">Acts on Business Context</h5>
                    <p className="desc m-0 fs-6 opacity-60 dark:opacity-90">Give agents the context they need so they can diagnose, update, qualify, and confirm in real time.</p>
                  </div>
                </div>
              </article>
              <article className="features-item genix-box vstack items-center justify-center text-center gap-4 nautix-workflow-feature">
                <div className="icon-box cstack w-48px h-48px bg-tertiary rounded">
                  <img decoding="async" className="w-24px xl:w-32px" src="/wp-content/uploads/2025/05/icon-05.svg" loading="lazy" alt="Human handoff icon" />
                </div>
                <div className="panel">
                  <div className="vstack gap-1">
                    <h5 className="title m-0">Human Handoff When Needed</h5>
                    <p className="desc m-0 fs-6 opacity-60 dark:opacity-90">Escalate to a teammate with full context when judgment, approval, or intervention is required.</p>
                  </div>
                </div>
              </article>
              <article className="features-item genix-box vstack items-center justify-center text-center gap-4 nautix-workflow-feature">
                <div className="icon-box cstack w-48px h-48px bg-tertiary rounded">
                  <img decoding="async" className="w-24px xl:w-32px" src="/wp-content/uploads/2025/05/icon-06.svg" loading="lazy" alt="Optimization icon" />
                </div>
                <div className="panel">
                  <div className="vstack gap-1">
                    <h5 className="title m-0">Train, Test, Improve</h5>
                    <p className="desc m-0 fs-6 opacity-60 dark:opacity-90">Review conversations, refine logic, and improve agent performance over time as your use cases expand.</p>
                  </div>
                </div>
              </article>
            </div>
          </section>

          <section id="industries" className="nautix-industry-section animejs-onview animejs-element" data-anime="onview: -200; loop: false; targets: .nautix-industry-head > *, .nautix-industry-grid > *; opacity: [0, 1]; translateY: [36, 0]; easing: 'easeOutCubic'; duration: 500; delay: anime.stagger(70, {start: 200})" data-anime-devices="mobile,tablet,desktop">
            <div className="nautix-industry-head">
              <h2 className="nautix-section-title mb-0">
                <span className="nautix-section-title-line">Purpose-built.</span>
                <span className="nautix-section-title-focus">Not adapted.</span>
              </h2>
              <p className="nautix-industry-copy mb-0">Generic tools require you to adapt your business to their workflows. Nautix was built for four specific industries, with the payment rails, workflows, and operational logic each one actually needs.</p>
            </div>
            <div className="nautix-industry-grid">
              <article className="nautix-industry-card">
                <figure className="nautix-industry-media m-0">
                  <img decoding="async" src="/nautix-industries/isps.jpg" loading="lazy" alt="Nautix ISP workflow preview" />
                </figure>
                <div className="nautix-industry-card-top">
                  <span className="nautix-industry-label">Internet Service Providers</span>
                </div>
                <h3 className="nautix-industry-title mb-0">Support and collections on autopilot.</h3>
                <p className="nautix-industry-desc mb-0">Handles support automatically: reboots routers, reactivates suspended accounts, collects overdue payments, and sends proactive outage alerts before subscribers call.</p>
                <div className="nautix-industry-proof">
                  <span className="nautix-industry-proof-label">In action</span>
                  <p className="nautix-industry-proof-copy mb-0">AI reboots an ONU remotely via SmartOLT and confirms resolution to the subscriber in under 3 minutes. No agent. No call.</p>
                </div>
                <a className="nautix-industry-link" href="mailto:support@nautix.io?subject=Show%20me%20the%20Nautix%20ISP%20Demo">See ISP Demo <span aria-hidden="true">→</span></a>
              </article>
              <article className="nautix-industry-card">
                <figure className="nautix-industry-media m-0">
                  <img decoding="async" src="/nautix-industries/real-estate.jpg" loading="lazy" alt="Nautix real estate workflow preview" />
                </figure>
                <div className="nautix-industry-card-top">
                  <span className="nautix-industry-label">Real Estate</span>
                </div>
                <h3 className="nautix-industry-title mb-0">From comment to site visit.</h3>
                <p className="nautix-industry-desc mb-0">Captures leads from Instagram and Facebook, qualifies buyers on budget, bedrooms, and location, and books site visits automatically while your agents sleep.</p>
                <div className="nautix-industry-proof">
                  <span className="nautix-industry-proof-label">In action</span>
                  <p className="nautix-industry-proof-copy mb-0">Instagram comment at 9:47pm, buyer qualified by AI, WhatsApp site visit booking confirmed at 9:55pm. Eight minutes. Zero agent involvement.</p>
                </div>
                <a className="nautix-industry-link" href="mailto:support@nautix.io?subject=Show%20me%20the%20Nautix%20Real%20Estate%20Demo">See Real Estate Demo <span aria-hidden="true">→</span></a>
              </article>
              <article className="nautix-industry-card">
                <figure className="nautix-industry-media m-0">
                  <img decoding="async" src="/nautix-industries/ecommerce.jpg" loading="lazy" alt="Nautix ecommerce workflow preview" />
                </figure>
                <div className="nautix-industry-card-top">
                  <span className="nautix-industry-label">Ecommerce</span>
                </div>
                <h3 className="nautix-industry-title mb-0">Turn DMs into confirmed orders.</h3>
                <p className="nautix-industry-desc mb-0">Responds to every DM instantly, confirms stock availability, initiates payment inside the conversation, and sends dispatch and delivery notifications automatically.</p>
                <div className="nautix-industry-proof">
                  <span className="nautix-industry-proof-label">In action</span>
                  <p className="nautix-industry-proof-copy mb-0">Instagram video goes viral at midnight, Nautix handles every DM simultaneously, payments are collected, and confirmed orders are in by morning.</p>
                </div>
                <a className="nautix-industry-link" href="mailto:support@nautix.io?subject=Show%20me%20the%20Nautix%20Ecommerce%20Demo">See Ecommerce Demo <span aria-hidden="true">→</span></a>
              </article>
              <article className="nautix-industry-card">
                <figure className="nautix-industry-media m-0">
                  <img decoding="async" src="/nautix-industries/finance.jpg" loading="lazy" alt="Nautix finance workflow preview" />
                </figure>
                <div className="nautix-industry-card-top">
                  <span className="nautix-industry-label">Finance</span>
                </div>
                <h3 className="nautix-industry-title mb-0">Resolve, collect, and renew inside chat.</h3>
                <p className="nautix-industry-desc mb-0">Handles SACCO and MFI member queries, runs repayment collection via card or mobile money, delivers certificates quickly, and automates premium renewal before policies lapse.</p>
                <div className="nautix-industry-proof">
                  <span className="nautix-industry-proof-label">In action</span>
                  <p className="nautix-industry-proof-copy mb-0">A SACCO member checks loan eligibility in WhatsApp, gets the result in 30 seconds, and starts the application flow without visiting the branch.</p>
                </div>
                <a className="nautix-industry-link" href="mailto:support@nautix.io?subject=Show%20me%20the%20Nautix%20Finance%20Demo">See Finance Demo <span aria-hidden="true">→</span></a>
              </article>
            </div>
          </section>

          <div id="resources" className="elementor-element elementor-element-2efcd81 animejs-onview e-flex e-con-boxed animejs-element e-con e-parent" data-id="2efcd81" data-element_type="container" data-anime="onview: -200; loop: false; targets: .e-con-inner > *; opacity: [0, 1]; translateY: [48, 0]; easing: 'easeOutCubic'; duration: 500; delay: ; delay: anime.stagger(100, {start: 200})" data-anime-devices="mobile,tablet,desktop">
            <div className="e-con-inner">
              <div className="elementor-element elementor-element-12afcdd e-flex e-con-boxed animejs-disable e-con e-child" data-id="12afcdd" data-element_type="container">
                <div className="e-con-inner">
                  <div className="elementor-element elementor-element-ea0528e animejs-disable elementor-widget elementor-widget-tg-heading" data-id="ea0528e" data-element_type="widget" data-widget_type="tg-heading.default">
                    <div className="elementor-widget-container">
                      <h2 className="title tg-element-title mb-0 ">What our customers say about Nautix</h2>
                    </div>
                  </div>
                </div>
              </div>
              <div className="elementor-element elementor-element-96607fc animejs-disable elementor-widget elementor-widget-tg-testimonial-v2" data-id="96607fc" data-element_type="widget" data-widget_type="tg-testimonial-v2.default">
                <div className="elementor-widget-container">
                  <div className="swiper elements-swiper-active overflow-unset" data-uc-swiper="items: 1.25; active: 1; gap: 16; center: true; center-bounds: true;" data-uc-swiper-l="items: 4; gap: 24; center: false; center-bounds: false;">
                    <div className="swiper-wrapper">
                      <div className="swiper-slide">
                        <div className="px-3 testimonial-item-box sm:px-4 py-4 panel vstack justify-between gap-3 rounded-2 border hover:contrast-shadow-md hover:border-dark duration-150">
                          <div className="panel vstack items-start gap-2">
                            <p className="fs-6 lg:fs-5 text-dark dark:text-white text-opacity-70">“Before Nautix, outages and billing questions flooded our channels after hours. Now subscribers get instant updates, routine issues are resolved automatically, and agents only step in for exceptions.”</p>
                          </div>
                          <div className="panel vstack justify-center gap-narrow mt-2">
                            <span className="fw-bold reviewer-name m-0">Martin Njau</span>
                            <span className="reviewer-company m-0">VSquared</span>
                          </div>
                        </div>
                      </div>
                      <div className="swiper-slide">
                        <div className="px-3 testimonial-item-box sm:px-4 py-4 panel vstack justify-between gap-3 rounded-2 border hover:contrast-shadow-md hover:border-dark duration-150">
                          <div className="panel vstack items-start gap-2">
                            <p className="fs-6 lg:fs-5 text-dark dark:text-white text-opacity-70">“We used to lose serious buyers overnight. Now every ad inquiry gets a response immediately, leads are qualified in chat, and our team wakes up to scheduled site visits.”</p>
                          </div>
                          <div className="panel vstack justify-center gap-narrow mt-2">
                            <span className="fw-bold reviewer-name m-0">Lorna K.</span>
                            <span className="reviewer-company m-0">Hillview Homes</span>
                          </div>
                        </div>
                      </div>
                      <div className="swiper-slide">
                        <div className="px-3 testimonial-item-box sm:px-4 py-4 panel vstack justify-between gap-3 rounded-2 border hover:contrast-shadow-md hover:border-dark duration-150">
                          <div className="panel vstack items-start gap-2">
                            <p className="fs-6 lg:fs-5 text-dark dark:text-white text-opacity-70">“When campaigns spike, our inbox no longer becomes a bottleneck. Nautix handles product questions, nudges buyers toward payment, and helps us convert demand while it is still warm.”</p>
                          </div>
                          <div className="panel vstack justify-center gap-narrow mt-2">
                            <span className="fw-bold reviewer-name m-0">Maya A.</span>
                            <span className="reviewer-company m-0">Rewards</span>
                          </div>
                        </div>
                      </div>
                      <div className="swiper-slide">
                        <div className="px-3 testimonial-item-box sm:px-4 py-4 panel vstack justify-between gap-3 rounded-2 border hover:contrast-shadow-md hover:border-dark duration-150">
                          <div className="panel vstack items-start gap-2">
                            <p className="fs-6 lg:fs-5 text-dark dark:text-white text-opacity-70">“Members expect fast answers on balances, repayments, and eligibility. Nautix handles those conversations on WhatsApp with consistency, and our team only steps in when real judgment is needed.”</p>
                          </div>
                          <div className="panel vstack justify-center gap-narrow mt-2">
                            <span className="fw-bold reviewer-name m-0">Peter O.</span>
                            <span className="reviewer-company m-0">Imara SACCO</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="elementor-element elementor-element-c944443 animejs-onview e-flex e-con-boxed animejs-element e-con e-parent" data-id="c944443" data-element_type="container" data-anime="onview: -200; loop: false; targets: .e-con-inner > *; opacity: [0, 1]; translateY: [48, 0]; easing: 'easeOutCubic'; duration: 500; delay: ; delay: anime.stagger(100, {start: 200})" data-anime-devices="mobile,tablet,desktop">
            <div className="e-con-inner">
              <div className="elementor-element elementor-element-deadde5 animejs-disable elementor-widget elementor-widget-tg-heading" data-id="deadde5" data-element_type="widget" data-widget_type="tg-heading.default">
                <div className="elementor-widget-container">
                  <div className="nautix-industry-head">
                    <h2 className="nautix-section-title mb-0">
                      <span className="nautix-section-title-line">Frequently asked</span>
                      <span className="nautix-section-title-focus">questions</span>
                    </h2>
                  </div>
                </div>
              </div>
              <div className="elementor-element elementor-element-294ef09 e-con-full e-flex animejs-disable e-con e-child" data-id="294ef09" data-element_type="container">
                <div className="elementor-element elementor-element-3109d59 elementor-widget__width-initial animejs-disable elementor-widget elementor-widget-genix-faq" data-id="3109d59" data-element_type="widget" data-widget_type="genix-faq.default">
                  <div className="elementor-widget-container">
                    <ul className="uc-accordion-divider gap-5 " data-uc-accordion="targets: > li; multiple: true;">
                      {HOMEPAGE_FAQS.map((faq, index) => (
                        <li key={faq.question} className={index === 0 ? "uc-open" : undefined}>
                          <a className="uc-accordion-title fs-5 sm:fs-4" href="#">{faq.question}</a>
                          <div className="uc-accordion-content">
                            <p>{faq.answer}</p>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
              <FinalCtaSection />
            </div>
          </div>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
