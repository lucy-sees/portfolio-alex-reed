"use client";

import { useState, useEffect } from "react";

// ─── Breakpoints (px) ─────────────────────────────────────────────────────────
export const BP = {
  mobile:  640,   // < 640  → mobile  (Pixel 7: 412px)
  tablet: 1024,   // 640–1023 → tablet
                  // ≥ 1024  → desktop
} as const;

export type Screen = "mobile" | "tablet" | "desktop";

// ─── useBreakpoint ────────────────────────────────────────────────────────────
// Returns the current screen category, re-evaluating on resize.
// SSR-safe: defaults to "desktop" on the server so the first render matches
// the full layout (avoids layout shift on desktop); hydration corrects it
// instantly on mobile.

export function useBreakpoint(): Screen {
  const getScreen = (): Screen => {
    if (typeof window === "undefined") return "desktop";
    if (window.innerWidth < BP.mobile)  return "mobile";
    if (window.innerWidth < BP.tablet)  return "tablet";
    return "desktop";
  };

  const [screen, setScreen] = useState<Screen>(getScreen);

  useEffect(() => {
    const handler = () => setScreen(getScreen());
    window.addEventListener("resize", handler);
    handler(); // correct immediately after mount
    return () => window.removeEventListener("resize", handler);
  }, []);

  return screen;
}
