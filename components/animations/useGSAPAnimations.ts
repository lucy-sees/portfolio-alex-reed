"use client";

import { useEffect, RefObject } from "react";

// ─── useGSAPAnimations ────────────────────────────────────────────────────────
// Centralised GSAP animation hooks.
// Install: npm install gsap @gsap/react
// Then uncomment the imports below and replace the stubs.

// import { useGSAP } from "@gsap/react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// gsap.registerPlugin(ScrollTrigger);

/**
 * Animates a headline element with kinetic font-weight + letter-spacing
 * on scroll. Currently a no-op stub — wire up GSAP when ready.
 */
export function useKineticText(ref: RefObject<HTMLElement | null>) {
  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // TODO: Replace with real GSAP ScrollTrigger animation:
    // gsap.to(el, {
    //   fontVariationSettings: '"wght" 900',
    //   letterSpacing: "-0.06em",
    //   scrollTrigger: { trigger: el, start: "top center", scrub: true },
    // });
  }, [ref]);
}

/**
 * Applies a GSAP Flip-style reorder to a grid of card elements.
 * Currently a no-op stub — wire up GSAP Flip when ready.
 */
export function useGridFlip(
  containerRef: RefObject<HTMLElement | null>,
  deps: unknown[]
) {
  useEffect(() => {
    // TODO: Replace with GSAP Flip:
    // import { Flip } from "gsap/Flip";
    // gsap.registerPlugin(Flip);
    // const state = Flip.getState(containerRef.current?.children);
    // // re-order DOM...
    // Flip.from(state, { duration: 0.5, ease: "power2.inOut" });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);
}
