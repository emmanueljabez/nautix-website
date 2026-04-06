"use client";

import { useEffect } from "react";

const HOMEPAGE_BODY_CLASSES = [
  "home",
  "wp-singular",
  "page-template",
  "page-template-elementor_header_footer",
  "page",
  "page-id-3841",
  "wp-embed-responsive",
  "wp-theme-lexend",
  "theme-lexend",
  "woocommerce-js",
  "no-sidebar",
  "uni-body",
  "panel",
  "bg-white",
  "text-gray-900",
  "dark:bg-gray-900",
  "dark:text-gray-200",
  "overflow-x-hidden",
  "elementor-default",
  "elementor-template-full-width",
  "elementor-kit-8",
  "elementor-page",
  "elementor-page-3841",
];

export function HomepageBodyClass() {
  useEffect(() => {
    document.body.classList.add(...HOMEPAGE_BODY_CLASSES);

    return () => {
      document.body.classList.remove(...HOMEPAGE_BODY_CLASSES);
    };
  }, []);

  return null;
}
