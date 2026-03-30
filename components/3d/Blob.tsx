"use client";

import { useRef } from "react";

// ─── Blob ─────────────────────────────────────────────────────────────────────
// A lightweight SVG blob that tracks cursor position inside the profile card.
// Replace with a React Three Fiber <Canvas> scene for the full 3D upgrade.

interface BlobProps {
  x: number; // normalised 0-1 within the card
  y: number;
}

export default function Blob({ x, y }: BlobProps) {
  const bx = 30 + x * 40;
  const by = 30 + y * 40;

  return (
    <svg
      style={{
        position: "absolute",
        inset: 0,
        width: "100%",
        height: "100%",
        opacity: 0.18,
        pointerEvents: "none",
      }}
      viewBox="0 0 100 100"
    >
      <defs>
        <radialGradient id="blob-grad" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#fff" />
          <stop offset="100%" stopColor="transparent" />
        </radialGradient>
      </defs>
      <ellipse
        cx={bx}
        cy={by}
        rx="38"
        ry="34"
        fill="url(#blob-grad)"
        style={{ transition: "cx 0.4s ease, cy 0.4s ease" }}
      />
    </svg>
  );
}
