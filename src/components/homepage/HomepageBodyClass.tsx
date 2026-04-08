"use client";

import { useEffect } from "react";

const HOMEPAGE_BODY_CLASSES = [
  "home",
  "page-id-3841",
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
