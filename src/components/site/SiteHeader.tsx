"use client";

import { useEffect, useState } from "react";

export function SiteHeader() {
  const loginUrl = "https://app.nautix.io/login";
  const registerUrl = "https://app.nautix.io/register";
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openMobileSection, setOpenMobileSection] = useState<string | null>(null);

  useEffect(() => {
    if (!isMobileMenuOpen) {
      document.body.style.removeProperty("overflow");
      return;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener("keydown", handleEscape);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleEscape);
    };
  }, [isMobileMenuOpen]);

  const closeMobileMenu = () => setIsMobileMenuOpen(false);
  const toggleMobileSection = (section: string) => {
    setOpenMobileSection((current) => (current === section ? null : section));
  };

  return (
    <>
      <div className="backtotop-wrap position-fixed bottom-0 end-0 z-999 m-2 vstack">
            <div className="darkmode-trigger cstack w-40px h-40px rounded-circle text-none bg-gray-100 dark:bg-gray-700 dark:text-white" data-darkmode-toggle>
              <label className="switch">
                <span className="sr-only">Dark mode toggle</span>
                <input type="checkbox" />
                <span className="slider fs-5" />
              </label>
            </div>
            <a className="btn btn-sm bg-primary text-white w-40px h-40px rounded-circle" href="to_top" data-uc-backtotop>
              <i className="unicon-chevron-up" />
            </a>
          </div>
          <div data-elementor-type="wp-post" data-elementor-id={3891} className="elementor elementor-3891">
            <div className="elementor-element elementor-element-a09287d e-con-full e-flex animejs-disable e-con e-parent" data-id="a09287d" data-element_type="container">
              <div className="elementor-element elementor-element-a723796 animejs-disable elementor-widget elementor-widget-tg-header" data-id="a723796" data-element_type="widget" data-widget_type="tg-header.default">
                <div className="elementor-widget-container">
                  <header className="uc-header header-seven uc-navbar-sticky-wrap z-999" data-uc-sticky="start: 100vh; show-on-up: true; animation: uc-animation-slide-top; sel-target: .uc-navbar-container; cls-active: uc-navbar-sticky; cls-inactive: uc-navbar-transparent;">
                    <nav className="uc-navbar-container uc-navbar-float ft-tertiary z-1">
                      <div className="uc-navbar-main" style={{ ["--ucNavHeight" as string]: "64px" }}>
                        <div className="container">
                          <div className="uc-navbar min-h-64px text-gray-900 dark:text-white" data-uc-navbar=" animation: uc-animation-slide-top-small; duration: 150;">
                            <div className="uc-navbar-left">
                              <div className="uc-logo">
                                <a className="panel text-none" href="/">
                                  <img className="dark:d-none" src="/wp-content/uploads/2025/04/logo-new-light.svg" alt="Nautix" />
                                  <img className="d-none dark:d-block" src="/wp-content/uploads/2025/04/logo-new-dark.svg" alt="Nautix" />
                                </a>
                              </div>
                              <ul id="menu-1-a723796" className="uc-navbar-nav gap-3 xl:gap-4 d-none lg:d-flex fw-medium ms-5">
                                <li id="menu-item-3971" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-3971 nav-item has-megamenu-elementor"><a title="Solutions" href="#" className="nav-links">Solutions</a><div className="uc-dropbar uc-dropbar-top hide-scrollbar rounded-0 overflow-hidden shadow-xl bg-white dark:bg-gray-900 p-0 dropdown-width-px-4868">
                                    <div className="elementor-element elementor-element-1af385f dark:bg-gray-900 e-flex e-con-boxed animejs-disable e-con e-parent" data-id="1af385f" data-element_type="container" data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
                                      <div className="e-con-inner">
                                        <div className="elementor-element elementor-element-bfd0e3a e-con-full e-flex animejs-disable e-con e-child" data-id="bfd0e3a" data-element_type="container">
                                          <div className="elementor-element elementor-element-dec1898 e-con-full e-flex animejs-disable e-con e-child" data-id="dec1898" data-element_type="container" style={{display: 'grid', gridTemplateColumns: 'repeat(3,minmax(0,1fr))', gap: 32, alignItems: 'start'}}>
                                            <div className="elementor-element elementor-element-d3b0d26 nautix-solutions-column e-con-full e-flex animejs-disable e-con e-child" data-id="d3b0d26" data-element_type="container" style={{width: 'auto', minWidth: 0}}>
                                              <div className="elementor-element elementor-element-b611a88 e-con-full e-flex animejs-disable e-con e-child" data-id="b611a88" data-element_type="container">
                                                <div className="nautix-solution-head">
                                                  <span className="nautix-solution-symbol"><i aria-hidden="true" className="genix unicon-cube" /></span>
                                                  <h5 className="title tg-element-title mb-0">Marketing</h5>
                                                </div>
                                              </div>
                                              <div className="elementor-element elementor-element-a4f122a megamenu-list2 animejs-disable elementor-widget elementor-widget-tg-menu-list" data-id="a4f122a" data-element_type="widget" data-widget_type="tg-menu-list.default">
                                                <div className="elementor-widget-container nautix-solutions-column-list">
                                                  <a href="/#solutions" className="hstack mega-image-card items-start gap-2 text-none text-dark dark:text-white hover:text-primary dark:hover:text-tertiary">
                                                    <div className="cstack lexend-icon flex-auto min-w-32px h-32px rounded bg-tertiary">
                                                      <i className="icon-1 fw-bold text-primary unicon-checkmark" aria-hidden="true" />
                                                    </div>
                                                    <div className="panel">
                                                      <span className="fs-7 card-title fw-medium mb-narrow text-inherit">Cross-channel lead capture</span>
                                                      <p className="fs-8 card-desc text-muted m-0">Instant response on Instagram, Facebook &amp; WhatsApp.</p>
                                                    </div>
                                                  </a>
                                                  <a href="/#solutions" className="hstack mega-image-card items-start gap-2 text-none text-dark dark:text-white hover:text-primary dark:hover:text-tertiary">
                                                    <div className="cstack lexend-icon flex-auto min-w-32px h-32px rounded bg-tertiary">
                                                      <i className="icon-1 fw-bold text-primary genix unicon-increase-level" aria-hidden="true" />
                                                    </div>
                                                    <div className="panel">
                                                      <span className="fs-7 card-title fw-medium mb-narrow text-inherit">Comment monitoring &amp; auto-DM</span>
                                                      <p className="fs-8 card-desc text-muted m-0">Every intent comment gets a private follow-up automatically.</p>
                                                    </div>
                                                  </a>
                                                  <a href="/#solutions" className="hstack mega-image-card items-start gap-2 text-none text-dark dark:text-white hover:text-primary dark:hover:text-tertiary">
                                                    <div className="cstack lexend-icon flex-auto min-w-32px h-32px rounded bg-tertiary">
                                                      <i className="icon-1 fw-bold text-primary genix unicon-chart-pie" aria-hidden="true" />
                                                    </div>
                                                    <div className="panel">
                                                      <span className="fs-7 card-title fw-medium mb-narrow text-inherit">Campaign automation</span>
                                                      <p className="fs-8 card-desc text-muted m-0">Promotions, launches, and re-engagement at scale.</p>
                                                    </div>
                                                  </a>
                                                  <a href="/#solutions" target="_self" rel="nofollow" className="text-none tg-btn text-dark dark:text-white hover:text-primary dark:hover:text-tertiary">
                                                    <span className="border-bottom hover:border-primary duration-150">Explore Marketing</span>
                                                    <i className="fs-8 unicon-arrow-up-right fw-bold" />
                                                  </a>
                                                </div>
                                              </div>
                                            </div>
                                            <div className="elementor-element elementor-element-dfee558 nautix-solutions-column e-con-full e-flex animejs-disable e-con e-child" data-id="dfee558" data-element_type="container" style={{width: 'auto', minWidth: 0}}>
                                              <div className="elementor-element elementor-element-d756846 e-con-full e-flex animejs-disable e-con e-child" data-id="d756846" data-element_type="container">
                                                <div className="nautix-solution-head">
                                                  <span className="nautix-solution-symbol"><i aria-hidden="true" className="genix unicon-gamification" /></span>
                                                  <h5 className="title tg-element-title mb-0">Sales</h5>
                                                </div>
                                              </div>
                                              <div className="elementor-element elementor-element-3c44103 megamenu-list2 animejs-disable elementor-widget elementor-widget-tg-menu-list" data-id="3c44103" data-element_type="widget" data-widget_type="tg-menu-list.default">
                                                <div className="elementor-widget-container nautix-solutions-column-list">
                                                  <a href="/#solutions" className="hstack mega-image-card items-start gap-2 text-none text-dark dark:text-white hover:text-primary dark:hover:text-tertiary">
                                                    <div className="cstack lexend-icon flex-auto min-w-32px h-32px rounded bg-tertiary">
                                                      <i className="icon-1 fw-bold text-primary genix unicon-chart-pie" aria-hidden="true" />
                                                    </div>
                                                    <div className="panel">
                                                      <span className="fs-7 card-title fw-medium mb-narrow text-inherit">Prospect qualification engine</span>
                                                      <p className="fs-8 card-desc text-muted m-0">Budget, need, authority &amp; timeline captured in 5 minutes.</p>
                                                    </div>
                                                  </a>
                                                  <a href="/#solutions" className="hstack mega-image-card items-start gap-2 text-none text-dark dark:text-white hover:text-primary dark:hover:text-tertiary">
                                                    <div className="cstack lexend-icon flex-auto min-w-32px h-32px rounded bg-tertiary">
                                                      <i className="icon-1 fw-bold text-primary genix unicon-increase-level" aria-hidden="true" />
                                                    </div>
                                                    <div className="panel">
                                                      <span className="fs-7 card-title fw-medium mb-narrow text-inherit">Structured nurture sequences</span>
                                                      <p className="fs-8 card-desc text-muted m-0">7-day warm and 30-day cold follow-up, always running.</p>
                                                    </div>
                                                  </a>
                                                  <a href="/#solutions" className="hstack mega-image-card items-start gap-2 text-none text-dark dark:text-white hover:text-primary dark:hover:text-tertiary">
                                                    <div className="cstack lexend-icon flex-auto min-w-32px h-32px rounded bg-tertiary">
                                                      <i className="icon-1 fw-bold text-primary genix unicon-chart-venn-diagram" aria-hidden="true" />
                                                    </div>
                                                    <div className="panel">
                                                      <span className="fs-7 card-title fw-medium mb-narrow text-inherit">In-conversation payment close</span>
                                                      <p className="fs-8 card-desc text-muted m-0">Card or mobile money collected within the chat.</p>
                                                    </div>
                                                  </a>
                                                  <a href="/#solutions" target="_self" rel="nofollow" className="text-none tg-btn text-dark dark:text-white hover:text-primary dark:hover:text-tertiary">
                                                    <span className="border-bottom hover:border-primary duration-150">Explore Sales</span>
                                                    <i className="fs-8 unicon-arrow-up-right fw-bold" />
                                                  </a>
                                                </div>
                                              </div>
                                            </div>
                                            <div className="elementor-element elementor-element-5f5d4b0 nautix-solutions-column e-con-full e-flex animejs-disable e-con e-child" data-id="5f5d4b0" data-element_type="container" style={{width: 'auto', minWidth: 0}}>
                                              <div className="elementor-element elementor-element-d756846 e-con-full e-flex animejs-disable e-con e-child" data-id="d756846-support" data-element_type="container">
                                                <div className="nautix-solution-head">
                                                  <span className="nautix-solution-symbol"><i aria-hidden="true" className="genix unicon-headphones" /></span>
                                                  <h5 className="title tg-element-title mb-0">Customer Support</h5>
                                                </div>
                                              </div>
                                              <div className="elementor-element elementor-element-1d4abec megamenu-list2 animejs-disable elementor-widget elementor-widget-tg-menu-list" data-id="1d4abec" data-element_type="widget" data-widget_type="tg-menu-list.default">
                                                <div className="elementor-widget-container nautix-solutions-column-list">
                                                  <a href="/#solutions" className="hstack mega-image-card items-start gap-2 text-none text-dark dark:text-white hover:text-primary dark:hover:text-tertiary">
                                                    <div className="cstack lexend-icon flex-auto min-w-32px h-32px rounded bg-tertiary">
                                                      <i className="icon-1 fw-bold text-primary unicon-checkmark" aria-hidden="true" />
                                                    </div>
                                                    <div className="panel">
                                                      <span className="fs-7 card-title fw-medium mb-narrow text-inherit">Autonomous Tier 1 resolution</span>
                                                      <p className="fs-8 card-desc text-muted m-0">Issues fixed in minutes without agent involvement.</p>
                                                    </div>
                                                  </a>
                                                  <a href="/#solutions" className="hstack mega-image-card items-start gap-2 text-none text-dark dark:text-white hover:text-primary dark:hover:text-tertiary">
                                                    <div className="cstack lexend-icon flex-auto min-w-32px h-32px rounded bg-tertiary">
                                                      <i className="icon-1 fw-bold text-primary genix unicon-chart-pie" aria-hidden="true" />
                                                    </div>
                                                    <div className="panel">
                                                      <span className="fs-7 card-title fw-medium mb-narrow text-inherit">Proactive alerts</span>
                                                      <p className="fs-8 card-desc text-muted m-0">Customers notified before they contact you.</p>
                                                    </div>
                                                  </a>
                                                  <a href="/#solutions" className="hstack mega-image-card items-start gap-2 text-none text-dark dark:text-white hover:text-primary dark:hover:text-tertiary">
                                                    <div className="cstack lexend-icon flex-auto min-w-32px h-32px rounded bg-tertiary">
                                                      <i className="icon-1 fw-bold text-primary genix unicon-chat" aria-hidden="true" />
                                                    </div>
                                                    <div className="panel">
                                                      <span className="fs-7 card-title fw-medium mb-narrow text-inherit">Smart escalation</span>
                                                      <p className="fs-8 card-desc text-muted m-0">Human agents receive full context, with no repeated information.</p>
                                                    </div>
                                                  </a>
                                                  <a href="/#solutions" target="_self" rel="nofollow" className="text-none tg-btn text-dark dark:text-white hover:text-primary dark:hover:text-tertiary">
                                                    <span className="border-bottom hover:border-primary duration-150">Explore Customer Support</span>
                                                    <i className="fs-8 unicon-arrow-up-right fw-bold" />
                                                  </a>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div></div></li>
                                <li id="menu-item-3972" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-3972 nav-item has-megamenu-elementor">
                                  <a title="Product" href="#" className="nav-links">Product</a>
                                  <div className="uc-dropbar uc-dropbar-top hide-scrollbar rounded-0 overflow-hidden shadow-xl bg-white dark:bg-gray-900 p-0 dropdown-width-px-4898" data-uc-drop="mode: hover; offset: 0; boundary: true; stretch: x; animation: uc-animation-slide-top-small; duration: 150;">
                                    <div data-elementor-type="page" data-elementor-id={4898} className="elementor elementor-4898">
                                      <div className="elementor-element elementor-element-5047bbc dark:bg-gray-900 e-flex e-con-boxed animejs-disable e-con e-parent" data-id="5047bbc" data-element_type="container" data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
                                        <div className="e-con-inner">
                                          <div className="elementor-element elementor-element-96a82e8 e-con-full e-flex animejs-disable e-con e-child" data-id="96a82e8" data-element_type="container">
                                            <div className="elementor-element elementor-element-7080dcc e-con-full e-flex animejs-disable e-con e-child" data-id="7080dcc" data-element_type="container">
                                              <div className="elementor-element elementor-element-5d46837 e-con-full e-flex animejs-disable e-con e-child" data-id="5d46837" data-element_type="container">
                                                <div className="elementor-element elementor-element-b93e252 e-con-full e-flex animejs-disable e-con e-child" data-id="b93e252" data-element_type="container">
                                                  <div className="nautix-product-head">
                                                    <span className="nautix-product-symbol"><i aria-hidden="true" className="genix unicon-chat" /></span>
                                                    <h5 className="title tg-element-title mb-0">Channels &amp; Inbox</h5>
                                                  </div>
                                                </div>
                                                <div className="elementor-element elementor-element-d58ee14 animejs-disable elementor-widget elementor-widget-tg-megamenu-demos" data-id="d58ee14" data-element_type="widget" data-widget_type="tg-megamenu-demos.default">
                                                  <div className="elementor-widget-container">
                                                    <ul className="uc-nav uc-navbar-dropdown-nav vstack gap-2">
                                                      <li>
                                                        <a className="hstack items-start gap-2" href="https://lexend.themegenix.com/features/">
                                                          <div className="cstack lexend-icon flex-auto min-w-32px h-32px rounded bg-tertiary">
                                                            <i className="icon-1 fw-bold text-primary unicon-checkmark" aria-hidden="true" />                              </div>
                                                          <span className="vstack gap-narrow mt-nnarrow">
                                                            <b className="fw-medium card-title dark:text-white">Omnichannel Inbox</b>
                                                            <span className="fs-8 card-desc text-muted">WhatsApp, Instagram, and Facebook messages in one unified view.</span>
                                                          </span>
                                                        </a>
                                                      </li>
                                                      <li>
                                                        <a className="hstack items-start gap-2" href="https://lexend.themegenix.com/features/">
                                                          <div className="cstack lexend-icon flex-auto min-w-32px h-32px rounded bg-tertiary">
                                                            <i className="icon-1 fw-bold text-primary genix unicon-chart-pie" aria-hidden="true" />                              </div>
                                                          <span className="vstack gap-narrow mt-nnarrow">
                                                            <b className="fw-medium card-title dark:text-white">Instant Auto-Response</b>
                                                            <span className="fs-8 card-desc text-muted">Every message acknowledged within 60 seconds, on any channel, at any hour.</span>
                                                          </span>
                                                        </a>
                                                      </li>
                                                      <li>
                                                        <a className="hstack items-start gap-2" href="https://lexend.themegenix.com/features/">
                                                          <div className="cstack lexend-icon flex-auto min-w-32px h-32px rounded bg-tertiary">
                                                            <i className="icon-1 fw-bold text-primary genix unicon-increase-level" aria-hidden="true" />                              </div>
                                                          <span className="vstack gap-narrow mt-nnarrow">
                                                            <b className="fw-medium card-title dark:text-white">Comment Monitoring</b>
                                                            <span className="fs-8 card-desc text-muted">Instagram and Facebook comments scanned for intent and turned into DMs automatically.</span>
                                                          </span>
                                                        </a>
                                                      </li>
                                                    </ul>
                                                  </div>
                                                </div>
                                              </div>
                                              <div className="elementor-element elementor-element-7dbdffb e-con-full e-flex animejs-disable e-con e-child" data-id="7dbdffb" data-element_type="container">
                                                <div className="elementor-element elementor-element-44bb7bf e-con-full e-flex animejs-disable e-con e-child" data-id="44bb7bf" data-element_type="container">
                                                  <div className="nautix-product-head">
                                                    <span className="nautix-product-symbol"><i aria-hidden="true" className="genix unicon-checkmark" /></span>
                                                    <h5 className="title tg-element-title mb-0">AI Resolution Engine</h5>
                                                  </div>
                                                </div>
                                                <div className="elementor-element elementor-element-4be23f6 animejs-disable elementor-widget elementor-widget-tg-megamenu-demos" data-id="4be23f6" data-element_type="widget" data-widget_type="tg-megamenu-demos.default">
                                                  <div className="elementor-widget-container">
                                                    <ul className="uc-nav uc-navbar-dropdown-nav vstack gap-2">
                                                      <li>
                                                        <a className="hstack items-start gap-2" href="https://lexend.themegenix.com/features/">
                                                          <div className="cstack lexend-icon flex-auto min-w-32px h-32px rounded bg-tertiary">
                                                            <i className="icon-1 fw-bold text-primary genix unicon-chart-venn-diagram" aria-hidden="true" />                              </div>
                                                          <span className="vstack gap-narrow mt-nnarrow">
                                                            <b className="fw-medium card-title dark:text-white">Live System Diagnosis</b>
                                                            <span className="fs-8 card-desc text-muted">Connects to your backend systems and queries live data before responding.</span>
                                                          </span>
                                                        </a>
                                                      </li>
                                                      <li>
                                                        <a className="hstack items-start gap-2" href="https://lexend.themegenix.com/features/">
                                                          <div className="cstack lexend-icon flex-auto min-w-32px h-32px rounded bg-tertiary">
                                                            <i className="icon-1 fw-bold text-primary genix unicon-chat" aria-hidden="true" />                              </div>
                                                          <span className="vstack gap-narrow mt-nnarrow">
                                                            <b className="fw-medium card-title dark:text-white">Autonomous Resolution</b>
                                                            <span className="fs-8 card-desc text-muted">Reboots devices, reactivates accounts, updates records, and confirms the resolution automatically.</span>
                                                          </span>
                                                        </a>
                                                      </li>
                                                      <li>
                                                        <a className="hstack items-start gap-2" href="https://lexend.themegenix.com/features/">
                                                          <div className="cstack lexend-icon flex-auto min-w-32px h-32px rounded bg-tertiary">
                                                            <i className="icon-1 fw-bold text-primary genix unicon-checkmark" aria-hidden="true" />                              </div>
                                                          <span className="vstack gap-narrow mt-nnarrow">
                                                            <b className="fw-medium card-title dark:text-white">Proactive Alerts</b>
                                                            <span className="fs-8 card-desc text-muted">Outage alerts, payment reminders, renewal notices, and delivery updates sent before customers ask.</span>
                                                          </span>
                                                        </a>
                                                      </li>
                                                    </ul>
                                                  </div>
                                                </div>
                                              </div>
                                              <div className="elementor-element elementor-element-f4e0c9a e-con-full e-flex animejs-disable e-con e-child" data-id="f4e0c9a" data-element_type="container">
                                                <div className="elementor-element elementor-element-da15923 e-con-full e-flex animejs-disable e-con e-child" data-id="da15923" data-element_type="container">
                                                  <div className="nautix-product-head">
                                                    <span className="nautix-product-symbol"><i aria-hidden="true" className="genix unicon-increase-level" /></span>
                                                    <h5 className="title tg-element-title mb-0">Sales &amp; Growth</h5>
                                                  </div>
                                                </div>
                                                <div className="elementor-element elementor-element-e34541d animejs-disable elementor-widget elementor-widget-tg-megamenu-demos" data-id="e34541d" data-element_type="widget" data-widget_type="tg-megamenu-demos.default">
                                                  <div className="elementor-widget-container">
                                                    <ul className="uc-nav uc-navbar-dropdown-nav vstack gap-2">
                                                      <li>
                                                        <a className="hstack items-start gap-2" href="https://lexend.themegenix.com/features/">
                                                          <div className="cstack lexend-icon flex-auto min-w-32px h-32px rounded bg-tertiary">
                                                            <i className="icon-1 fw-bold text-primary genix unicon-chart-pie" aria-hidden="true" />                              </div>
                                                          <span className="vstack gap-narrow mt-nnarrow">
                                                            <b className="fw-medium card-title dark:text-white">Lead Qualification Engine</b>
                                                            <span className="fs-8 card-desc text-muted">Budget, need, authority, and timeline captured within the first 5 minutes of contact.</span>
                                                          </span>
                                                        </a>
                                                      </li>
                                                      <li>
                                                        <a className="hstack items-start gap-2" href="https://lexend.themegenix.com/features/">
                                                          <div className="cstack lexend-icon flex-auto min-w-32px h-32px rounded bg-tertiary">
                                                            <i className="icon-1 fw-bold text-primary genix unicon-increase-level" aria-hidden="true" />                              </div>
                                                          <span className="vstack gap-narrow mt-nnarrow">
                                                            <b className="fw-medium card-title dark:text-white">Nurture Sequences</b>
                                                            <span className="fs-8 card-desc text-muted">7-day warm and 30-day cold follow-up sequences run automatically for every prospect.</span>
                                                          </span>
                                                        </a>
                                                      </li>
                                                      <li>
                                                        <a className="hstack items-start gap-2" href="https://lexend.themegenix.com/features/">
                                                          <div className="cstack lexend-icon flex-auto min-w-32px h-32px rounded bg-tertiary">
                                                            <i className="icon-1 fw-bold text-primary genix unicon-chart-venn-diagram" aria-hidden="true" />                              </div>
                                                          <span className="vstack gap-narrow mt-nnarrow">
                                                            <b className="fw-medium card-title dark:text-white">In-Chat Payment Close</b>
                                                            <span className="fs-8 card-desc text-muted">Card or mobile money is initiated within the active conversation flow when the prospect is ready.</span>
                                                          </span>
                                                        </a>
                                                      </li>
                                                    </ul>
                                                  </div>
                                                </div>
                                              </div>
                                              <div className="elementor-element elementor-element-6b7f4fd e-con-full e-flex animejs-disable e-con e-child" data-id="6b7f4fd" data-element_type="container">
                                                <div className="nautix-product-head">
                                                  <span className="nautix-product-symbol"><i aria-hidden="true" className="genix unicon-chart-pie" /></span>
                                                  <h5 className="title tg-element-title mb-0">Payments + Analytics</h5>
                                                </div>
                                                <div className="elementor-element elementor-element-79db714 animejs-disable elementor-widget elementor-widget-tg-megamenu-demos" data-id="79db714" data-element_type="widget" data-widget_type="tg-megamenu-demos.default">
                                                  <div className="elementor-widget-container">
                                                    <ul className="uc-nav uc-navbar-dropdown-nav vstack gap-2 nautix-product-list">
                                                      <li>
                                                        <a className="hstack items-start gap-2" href="/#product">
                                                          <div className="cstack lexend-icon flex-auto min-w-32px h-32px rounded bg-tertiary">
                                                            <i className="icon-1 fw-bold text-primary genix unicon-chart-venn-diagram" aria-hidden="true" />
                                                          </div>
                                                          <span className="vstack gap-narrow mt-nnarrow">
                                                            <b className="fw-medium card-title dark:text-white">In-Conversation Payments</b>
                                                            <span className="fs-8 card-desc text-muted">Card and mobile money requests are initiated directly inside the customer conversation.</span>
                                                          </span>
                                                        </a>
                                                      </li>
                                                      <li>
                                                        <a className="hstack items-start gap-2" href="/#product">
                                                          <div className="cstack lexend-icon flex-auto min-w-32px h-32px rounded bg-tertiary">
                                                            <i className="icon-1 fw-bold text-primary genix unicon-checkmark" aria-hidden="true" />
                                                          </div>
                                                          <span className="vstack gap-narrow mt-nnarrow">
                                                            <b className="fw-medium card-title dark:text-white">Full Payment Loop</b>
                                                            <span className="fs-8 card-desc text-muted">Reminders, confirmations, collections, and follow-ups run automatically from first request to payment completion.</span>
                                                          </span>
                                                        </a>
                                                      </li>
                                                      <li>
                                                        <a className="hstack items-start gap-2" href="/#product">
                                                          <div className="cstack lexend-icon flex-auto min-w-32px h-32px rounded bg-tertiary">
                                                            <i className="icon-1 fw-bold text-primary genix unicon-chart-pie" aria-hidden="true" />
                                                          </div>
                                                          <span className="vstack gap-narrow mt-nnarrow">
                                                            <b className="fw-medium card-title dark:text-white">Analytics &amp; Reporting</b>
                                                            <span className="fs-8 card-desc text-muted">Track conversion, collections, conversation volume, and team performance in one dashboard.</span>
                                                          </span>
                                                        </a>
                                                      </li>
                                                    </ul>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div></div></div></li>
                                <li id="menu-item-4913" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-4913 nav-item has-megamenu-elementor"><a title="Industries" href="#" className="nav-links">Industries</a><div className="uc-dropbar uc-dropbar-top hide-scrollbar rounded-0 overflow-hidden shadow-xl bg-white dark:bg-gray-900 p-0 dropdown-width-px-4898 nautix-industries-dropbar" data-uc-drop="mode: hover; offset: 0; boundary: true; stretch: x; animation: uc-animation-slide-top-small; duration: 150;">
                                    <div className="nautix-industries-mega">
                                      <div className="nautix-industries-grid">
                                        <section className="nautix-industry-card">
                                          <div className="nautix-product-head">
                                            <span className="nautix-product-symbol"><i aria-hidden="true" className="genix unicon-glyph-square-fill" /></span>
                                            <h5 className="title tg-element-title mb-0">ISPs</h5>
                                          </div>
                                          <ul className="uc-nav uc-navbar-dropdown-nav vstack gap-2 nautix-product-list">
                                            <li>
                                              <a className="hstack items-start gap-2" href="/#industries">
                                                <div className="cstack lexend-icon flex-auto min-w-32px h-32px rounded bg-tertiary">
                                                  <i className="icon-1 fw-bold text-primary unicon-checkmark" aria-hidden="true" />
                                                </div>
                                                <span className="vstack gap-narrow mt-nnarrow">
                                                  <b className="fw-medium card-title">No internet resolution</b>
                                                  <span className="fs-8 card-desc text-muted">Diagnose issues and restore service without waiting for an agent.</span>
                                                </span>
                                              </a>
                                            </li>
                                            <li>
                                              <a className="hstack items-start gap-2" href="/#industries">
                                                <div className="cstack lexend-icon flex-auto min-w-32px h-32px rounded bg-tertiary">
                                                  <i className="icon-1 fw-bold text-primary genix unicon-chart-pie" aria-hidden="true" />
                                                </div>
                                                <span className="vstack gap-narrow mt-nnarrow">
                                                  <b className="fw-medium card-title">Billing and payment collection</b>
                                                  <span className="fs-8 card-desc text-muted">Collect card or mobile money payments and update accounts instantly.</span>
                                                </span>
                                              </a>
                                            </li>
                                            <li>
                                              <a className="hstack items-start gap-2" href="/#industries">
                                                <div className="cstack lexend-icon flex-auto min-w-32px h-32px rounded bg-tertiary">
                                                  <i className="icon-1 fw-bold text-primary genix unicon-increase-level" aria-hidden="true" />
                                                </div>
                                                <span className="vstack gap-narrow mt-nnarrow">
                                                  <b className="fw-medium card-title">Proactive outage alerts</b>
                                                  <span className="fs-8 card-desc text-muted">Send status updates before subscribers contact support.</span>
                                                </span>
                                              </a>
                                            </li>
                                          </ul>
                                          <a href="/#industries" className="text-none tg-btn text-dark dark:text-white hover:text-primary dark:hover:text-tertiary">
                                            <span className="border-bottom hover:border-primary duration-150">See Demo</span>
                                            <i className="fs-8 unicon-arrow-up-right fw-bold" />
                                          </a>
                                        </section>
                                        <section className="nautix-industry-card">
                                          <div className="nautix-product-head">
                                            <span className="nautix-product-symbol"><i aria-hidden="true" className="genix unicon-cube" /></span>
                                            <h5 className="title tg-element-title mb-0">Real Estate</h5>
                                          </div>
                                          <ul className="uc-nav uc-navbar-dropdown-nav vstack gap-2 nautix-product-list">
                                            <li>
                                              <a className="hstack items-start gap-2" href="/#industries">
                                                <div className="cstack lexend-icon flex-auto min-w-32px h-32px rounded bg-tertiary">
                                                  <i className="icon-1 fw-bold text-primary unicon-checkmark" aria-hidden="true" />
                                                </div>
                                                <span className="vstack gap-narrow mt-nnarrow">
                                                  <b className="fw-medium card-title">Cross-channel lead capture</b>
                                                  <span className="fs-8 card-desc text-muted">Capture and qualify buyer inquiries from Instagram, Facebook, and WhatsApp.</span>
                                                </span>
                                              </a>
                                            </li>
                                            <li>
                                              <a className="hstack items-start gap-2" href="/#industries">
                                                <div className="cstack lexend-icon flex-auto min-w-32px h-32px rounded bg-tertiary">
                                                  <i className="icon-1 fw-bold text-primary genix unicon-chart-pie" aria-hidden="true" />
                                                </div>
                                                <span className="vstack gap-narrow mt-nnarrow">
                                                  <b className="fw-medium card-title">Site visit booking</b>
                                                  <span className="fs-8 card-desc text-muted">Offer slots, confirm visits, and brief agents automatically.</span>
                                                </span>
                                              </a>
                                            </li>
                                            <li>
                                              <a className="hstack items-start gap-2" href="/#industries">
                                                <div className="cstack lexend-icon flex-auto min-w-32px h-32px rounded bg-tertiary">
                                                  <i className="icon-1 fw-bold text-primary genix unicon-increase-level" aria-hidden="true" />
                                                </div>
                                                <span className="vstack gap-narrow mt-nnarrow">
                                                  <b className="fw-medium card-title">Post-visit follow-up</b>
                                                  <span className="fs-8 card-desc text-muted">Keep every lead warm with structured nurture sequences.</span>
                                                </span>
                                              </a>
                                            </li>
                                          </ul>
                                          <a href="/#industries" className="text-none tg-btn text-dark dark:text-white hover:text-primary dark:hover:text-tertiary">
                                            <span className="border-bottom hover:border-primary duration-150">See Demo</span>
                                            <i className="fs-8 unicon-arrow-up-right fw-bold" />
                                          </a>
                                        </section>
                                        <section className="nautix-industry-card">
                                          <div className="nautix-product-head">
                                            <span className="nautix-product-symbol"><i aria-hidden="true" className="genix unicon-gamification" /></span>
                                            <h5 className="title tg-element-title mb-0">Ecommerce</h5>
                                          </div>
                                          <ul className="uc-nav uc-navbar-dropdown-nav vstack gap-2 nautix-product-list">
                                            <li>
                                              <a className="hstack items-start gap-2" href="/#industries">
                                                <div className="cstack lexend-icon flex-auto min-w-32px h-32px rounded bg-tertiary">
                                                  <i className="icon-1 fw-bold text-primary unicon-checkmark" aria-hidden="true" />
                                                </div>
                                                <span className="vstack gap-narrow mt-nnarrow">
                                                  <b className="fw-medium card-title">DM-to-order conversion</b>
                                                  <span className="fs-8 card-desc text-muted">Answer product questions and move buyers to payment in one thread.</span>
                                                </span>
                                              </a>
                                            </li>
                                            <li>
                                              <a className="hstack items-start gap-2" href="/#industries">
                                                <div className="cstack lexend-icon flex-auto min-w-32px h-32px rounded bg-tertiary">
                                                  <i className="icon-1 fw-bold text-primary genix unicon-chart-pie" aria-hidden="true" />
                                                </div>
                                                <span className="vstack gap-narrow mt-nnarrow">
                                                  <b className="fw-medium card-title">In-chat payment completion</b>
                                                  <span className="fs-8 card-desc text-muted">Close orders with card or mobile money inside the conversation.</span>
                                                </span>
                                              </a>
                                            </li>
                                            <li>
                                              <a className="hstack items-start gap-2" href="/#industries">
                                                <div className="cstack lexend-icon flex-auto min-w-32px h-32px rounded bg-tertiary">
                                                  <i className="icon-1 fw-bold text-primary genix unicon-increase-level" aria-hidden="true" />
                                                </div>
                                                <span className="vstack gap-narrow mt-nnarrow">
                                                  <b className="fw-medium card-title">Delivery updates</b>
                                                  <span className="fs-8 card-desc text-muted">Automate dispatch, tracking, and post-purchase follow-up.</span>
                                                </span>
                                              </a>
                                            </li>
                                          </ul>
                                          <a href="/#industries" className="text-none tg-btn text-dark dark:text-white hover:text-primary dark:hover:text-tertiary">
                                            <span className="border-bottom hover:border-primary duration-150">See Demo</span>
                                            <i className="fs-8 unicon-arrow-up-right fw-bold" />
                                          </a>
                                        </section>
                                        <section className="nautix-industry-card">
                                          <div className="nautix-product-head">
                                            <span className="nautix-product-symbol"><i aria-hidden="true" className="genix unicon-glyph-caution" /></span>
                                            <h5 className="title tg-element-title mb-0">Finance</h5>
                                          </div>
                                          <ul className="uc-nav uc-navbar-dropdown-nav vstack gap-2 nautix-product-list">
                                            <li>
                                              <a className="hstack items-start gap-2" href="/#industries">
                                                <div className="cstack lexend-icon flex-auto min-w-32px h-32px rounded bg-tertiary">
                                                  <i className="icon-1 fw-bold text-primary unicon-checkmark" aria-hidden="true" />
                                                </div>
                                                <span className="vstack gap-narrow mt-nnarrow">
                                                  <b className="fw-medium card-title">Member self-service</b>
                                                  <span className="fs-8 card-desc text-muted">Answer balances, eligibility, and account questions instantly.</span>
                                                </span>
                                              </a>
                                            </li>
                                            <li>
                                              <a className="hstack items-start gap-2" href="/#industries">
                                                <div className="cstack lexend-icon flex-auto min-w-32px h-32px rounded bg-tertiary">
                                                  <i className="icon-1 fw-bold text-primary genix unicon-chart-pie" aria-hidden="true" />
                                                </div>
                                                <span className="vstack gap-narrow mt-nnarrow">
                                                  <b className="fw-medium card-title">Renewal and repayment flows</b>
                                                  <span className="fs-8 card-desc text-muted">Run reminders and collect payments without manual chasing.</span>
                                                </span>
                                              </a>
                                            </li>
                                            <li>
                                              <a className="hstack items-start gap-2" href="/#industries">
                                                <div className="cstack lexend-icon flex-auto min-w-32px h-32px rounded bg-tertiary">
                                                  <i className="icon-1 fw-bold text-primary genix unicon-increase-level" aria-hidden="true" />
                                                </div>
                                                <span className="vstack gap-narrow mt-nnarrow">
                                                  <b className="fw-medium card-title">Certificate delivery</b>
                                                  <span className="fs-8 card-desc text-muted">Send policy or membership documents directly inside chat.</span>
                                                </span>
                                              </a>
                                            </li>
                                          </ul>
                                          <a href="/#industries" className="text-none tg-btn text-dark dark:text-white hover:text-primary dark:hover:text-tertiary">
                                            <span className="border-bottom hover:border-primary duration-150">See Demo</span>
                                            <i className="fs-8 unicon-arrow-up-right fw-bold" />
                                          </a>
                                        </section>
                                      </div>
                                    </div>
                                  </div></li>
                                <li id="menu-item-4915" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-4915 nav-item"><a title="Pricing" href="/pricing" className="nav-links">Pricing</a></li>
                                <li id="menu-item-4916" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-4916 nav-item"><a title="Resources" href="/#resources" className="nav-links">Resources</a></li>
                              </ul>                              </div>
                            <div className="uc-navbar-right">
                              <ul className="nav-x d-none lg:d-flex">
                                <li className="d-none xl:d-inline-flex">
                                  <a className="nautix-login-link" href={loginUrl}>Log In</a>
                                </li>
                              </ul>
                              <a className="btn btn-sm btn-primary text-white fw-bold rounded-pill lg:px-2 text-none hover:contrast-shadow d-none lg:d-inline-flex" href={registerUrl}>Get Started <i className="fs-8 unicon-arrow-up-right fw-bold" /></a>
                              <button
                                type="button"
                                className="nautix-mobile-trigger d-block lg:d-none"
                                aria-label="Open menu"
                                aria-expanded={isMobileMenuOpen}
                                onClick={() => setIsMobileMenuOpen(true)}
                              >
                                <span />
                                <span />
                                <span />
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </nav>
                  </header>
                  <div
                    className={`nautix-mobile-menu lg:d-none${isMobileMenuOpen ? " is-open" : ""}`}
                    aria-hidden={!isMobileMenuOpen}
                  >
                    <button
                      type="button"
                      className="nautix-mobile-menu-backdrop"
                      aria-label="Close menu"
                      onClick={closeMobileMenu}
                    />
                    <div className="nautix-mobile-panel bg-gray-900 text-white dark:bg-gray-900 dark:text-white">
                      <header className="uc-offcanvas-header hstack justify-between items-center pb-2 bg-gray-900 dark:bg-gray-900">
                        <div className="uc-logo mobile-logo text-dark dark:text-white">
                          <a href="/" className="h5 text-none text-white" onClick={closeMobileMenu}>
                            <img className="d-block" src="/wp-content/uploads/2025/04/logo-new-light.svg" alt="Nautix" />
                          </a>
                        </div>
                        <button
                          className="uc-offcanvas-close rtl:end-auto rtl:start-0 m-1 mt-2 icon-3 btn border-0 text-white hover:text-primary hover:rotate-90 duration-150 transition-all"
                          type="button"
                          onClick={closeMobileMenu}
                        >
                          <i className="unicon-close" />
                        </button>
                      </header>
                      <div className="panel">
                        <a className="nautix-mobile-login d-inline-flex fw-medium mb-3" href={loginUrl} onClick={closeMobileMenu}>Log In</a>
                        <ul id="menu-2-a723796" className="nav-y gap-narrow fw-medium fs-6 uc-nav nautix-mobile-nav">
                          <li id="menu-item-5055" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children uc-parent menu-item-5055 nav-item">
                            <button
                              type="button"
                              className="nav-links nautix-mobile-section-toggle"
                              aria-expanded={openMobileSection === "solutions"}
                              onClick={() => toggleMobileSection("solutions")}
                            >
                              <span>Solutions</span>
                              <i className="unicon-angle-down" />
                            </button>
                            <ul className={`uc-nav-sub${openMobileSection === "solutions" ? " is-open" : ""}`} role="menu">
                              <li id="menu-item-6045" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-6045 nav-item"><a title="Marketing" href="/#solutions" className="dropdown-items" onClick={closeMobileMenu}>Marketing</a></li>
                              <li id="menu-item-6046" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-6046 nav-item"><a title="Sales" href="/#solutions" className="dropdown-items" onClick={closeMobileMenu}>Sales</a></li>
                              <li id="menu-item-6047" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-6047 nav-item"><a title="Customer Support" href="/#solutions" className="dropdown-items" onClick={closeMobileMenu}>Customer Support</a></li>
                              <li id="menu-item-6048" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-6048 nav-item"><a title="See full platform" href="/#solutions" className="dropdown-items" onClick={closeMobileMenu}>See full platform →</a></li>
                            </ul>
                          </li>
                          <li id="menu-item-5056" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children uc-parent menu-item-5056 nav-item">
                            <button
                              type="button"
                              className="nav-links nautix-mobile-section-toggle"
                              aria-expanded={openMobileSection === "product"}
                              onClick={() => toggleMobileSection("product")}
                            >
                              <span>Product</span>
                              <i className="unicon-angle-down" />
                            </button>
                            <ul className={`uc-nav-sub${openMobileSection === "product" ? " is-open" : ""}`} role="menu">
                              <li id="menu-item-6049" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-6049 nav-item"><a title="Channels & Inbox" href="/#product" className="dropdown-items" onClick={closeMobileMenu}>Channels &amp; Inbox</a></li>
                              <li id="menu-item-6050" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-6050 nav-item"><a title="AI Resolution Engine" href="/#product" className="dropdown-items" onClick={closeMobileMenu}>AI Resolution Engine</a></li>
                              <li id="menu-item-6051" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-6051 nav-item"><a title="Sales & Growth" href="/#product" className="dropdown-items" onClick={closeMobileMenu}>Sales &amp; Growth</a></li>
                              <li id="menu-item-6052" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-6052 nav-item"><a title="Payments" href="/#product" className="dropdown-items" onClick={closeMobileMenu}>Payments</a></li>
                              <li id="menu-item-6053" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-6053 nav-item"><a title="Analytics & Reporting" href="/#product" className="dropdown-items" onClick={closeMobileMenu}>Analytics &amp; Reporting</a></li>
                              <li id="menu-item-6054" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-6054 nav-item"><a title="See full platform" href="/#product" className="dropdown-items" onClick={closeMobileMenu}>See full platform →</a></li>
                            </ul>
                          </li>
                          <li id="menu-item-6055" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children uc-parent menu-item-6055 nav-item">
                            <button
                              type="button"
                              className="nav-links nautix-mobile-section-toggle"
                              aria-expanded={openMobileSection === "industries"}
                              onClick={() => toggleMobileSection("industries")}
                            >
                              <span>Industries</span>
                              <i className="unicon-angle-down" />
                            </button>
                            <ul className={`uc-nav-sub${openMobileSection === "industries" ? " is-open" : ""}`} role="menu">
                              <li id="menu-item-6056" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-6056 nav-item"><a title="ISPs" href="/#industries" className="dropdown-items" onClick={closeMobileMenu}>ISPs</a></li>
                              <li id="menu-item-6057" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-6057 nav-item"><a title="Real Estate" href="/#industries" className="dropdown-items" onClick={closeMobileMenu}>Real Estate</a></li>
                              <li id="menu-item-6058" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-6058 nav-item"><a title="Ecommerce" href="/#industries" className="dropdown-items" onClick={closeMobileMenu}>Ecommerce</a></li>
                              <li id="menu-item-6059" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-6059 nav-item"><a title="Finance" href="/#industries" className="dropdown-items" onClick={closeMobileMenu}>Finance</a></li>
                              <li id="menu-item-6060" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-6060 nav-item"><a title="All industries" href="/#industries" className="dropdown-items" onClick={closeMobileMenu}>All industries →</a></li>
                            </ul>
                          </li>
                          <li id="menu-item-6062" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-6062 nav-item"><a title="Pricing" href="/pricing" className="nav-links" onClick={closeMobileMenu}>Pricing</a></li>
                          <li id="menu-item-6063" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children uc-parent menu-item-6063 nav-item">
                            <button
                              type="button"
                              className="nav-links nautix-mobile-section-toggle"
                              aria-expanded={openMobileSection === "resources"}
                              onClick={() => toggleMobileSection("resources")}
                            >
                              <span>Resources</span>
                              <i className="unicon-angle-down" />
                            </button>
                            <ul className={`uc-nav-sub${openMobileSection === "resources" ? " is-open" : ""}`} role="menu">
                              <li id="menu-item-6064" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-6064 nav-item"><a title="Blog & Insights" href="/#resources" className="dropdown-items" onClick={closeMobileMenu}>Blog &amp; Insights</a></li>
                              <li id="menu-item-6065" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-6065 nav-item"><a title="Case Studies" href="/#resources" className="dropdown-items" onClick={closeMobileMenu}>Case Studies</a></li>
                              <li id="menu-item-6066" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-6066 nav-item"><a title="Engine Playbooks" href="/#resources" className="dropdown-items" onClick={closeMobileMenu}>Engine Playbooks</a></li>
                              <li id="menu-item-6067" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-6067 nav-item"><a title="Demo Library" href="/#resources" className="dropdown-items" onClick={closeMobileMenu}>Demo Library</a></li>
                              <li id="menu-item-6068" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-6068 nav-item"><a title="Product Updates" href="/#resources" className="dropdown-items" onClick={closeMobileMenu}>Product Updates</a></li>
                            </ul>
                          </li>
                        </ul>
                        <div className="nautix-mobile-cta pt-3 mt-4 bg-transparent" data-uc-sticky="position: bottom">
                          <a className="btn btn-primary text-white fw-bold rounded-pill w-100 justify-center text-none" href={registerUrl} onClick={closeMobileMenu}>Get Started <i className="fs-8 unicon-arrow-up-right fw-bold" /></a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
      {/* main-area */}
    </>
  );
}
