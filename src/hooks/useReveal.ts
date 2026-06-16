"use client";

import { useEffect, useRef } from "react";

export function useReveal<T extends HTMLElement>() {
  const ref = useRef<T>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    el.querySelectorAll<HTMLElement>(".reveal").forEach((n) => io.observe(n));
    return () => io.disconnect();
  }, []);

  return ref;
}
