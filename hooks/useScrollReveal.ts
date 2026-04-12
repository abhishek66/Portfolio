"use client";

import { useEffect, useRef } from "react";

/**
 * Attaches an IntersectionObserver to the returned ref.
 * Elements start invisible (applied after mount so SSR renders are visible).
 * When 15% of the element enters the viewport it fades + slides into place.
 * Fires only once per element, then unobserves.
 */
export function useScrollReveal<T extends HTMLElement>(delay = 0) {
  const ref = useRef<T>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Determine if already in the viewport before we hide anything
    const rect = el.getBoundingClientRect();
    const alreadyVisible =
      rect.top < window.innerHeight * 0.85 && rect.bottom > 0;

    if (!alreadyVisible) {
      // Hide element — no transition yet so there is no flash
      el.style.opacity = "0";
      el.style.transform = "translateY(24px)";
    }

    // One frame later: add the transition and start observing.
    // The rAF ensures the browser has painted the hidden state before
    // we watch for intersection, so the reveal is always animated.
    const raf = requestAnimationFrame(() => {
      el.style.transition = [
        `opacity 600ms ease ${delay}ms`,
        `transform 600ms cubic-bezier(0.4,0,0.2,1) ${delay}ms`,
      ].join(", ");

      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            el.style.opacity = "1";
            el.style.transform = "translateY(0)";
            obs.unobserve(el);
          }
        },
        { threshold: 0.15 }
      );

      obs.observe(el);
    });

    return () => {
      cancelAnimationFrame(raf);
    };
  }, [delay]);

  return ref;
}
