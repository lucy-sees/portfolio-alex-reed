"use client";

import { useRef, useCallback, useState } from "react";
import Scene from "@/components/3d/Scene";
import CommandCenter from "@/components/agent/CommandCenter";
import { SITE_META, PROFILE_IMAGE_URL } from "@/lib/config";
import { fonts } from "@/styles/theme";

// ─── ProfileCard ──────────────────────────────────────────────────────────────

export default function ProfileCard() {
  const cardRef = useRef<HTMLDivElement>(null);
  const [blobPos, setBlobPos] = useState({ x: 0.5, y: 0.5 });

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    const el = cardRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    setBlobPos({
      x: (e.clientX - rect.left) / rect.width,
      y: (e.clientY - rect.top) / rect.height,
    });
  }, []);

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      style={{
        width: "340px",
        flexShrink: 0,
        background: "#8E94F2",
        borderRadius: "2.5rem",
        padding: "2rem",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        position: "relative",
        overflow: "hidden",
        color: "#fff",
        minHeight: "520px",
        cursor: "default",
      }}
    >
      {/* 3D / SVG Blob layer */}
      <Scene blobX={blobPos.x} blobY={blobPos.y} />

      {/* Avatar */}
      <div style={{ position: "relative", zIndex: 1 }}>
        <div
          style={{
            position: "relative",
            width: "160px",
            height: "160px",
            margin: "0 auto",
          }}
        >
          <div
            style={{
              position: "absolute",
              inset: "-8px",
              border: "1.5px solid rgba(255,255,255,0.3)",
              borderRadius: "50%",
            }}
          />
          <div
            style={{
              position: "absolute",
              inset: "-18px",
              border: "1.5px solid rgba(255,200,255,0.2)",
              borderRadius: "50%",
            }}
          />
          <img
            src={PROFILE_IMAGE_URL}
            alt={`${SITE_META.name} Profile`}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              borderRadius: "50%",
              filter: "grayscale(100%)",
            }}
          />
        </div>
      </div>

      {/* Name + Agent */}
      <div style={{ position: "relative", zIndex: 1, marginTop: "auto" }}>
        <h2
          style={{
            fontFamily: fonts.headline,
            fontSize: "clamp(3rem,6vw,4rem)",
            fontWeight: 900,
            lineHeight: 1,
            margin: "0 0 1.5rem",
            letterSpacing: "-0.03em",
          }}
        >
          I&apos;m,
          <br />
          Alex
          <br />
          Reed
        </h2>

        <CommandCenter />
      </div>

      {/* Spinning badge */}
      <SpinningBadge />
    </div>
  );
}

// ─── SpinningBadge ────────────────────────────────────────────────────────────

function SpinningBadge() {
  return (
    <div
      style={{
        position: "absolute",
        bottom: "1.5rem",
        right: "1.5rem",
        width: "60px",
        height: "60px",
      }}
    >
      <svg
        viewBox="0 0 100 100"
        style={{
          width: "100%",
          height: "100%",
          animation: "spin 12s linear infinite",
          position: "absolute",
        }}
      >
        <path
          d="M 50,50 m -37,0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
          fill="none"
          id="circlePath"
        />
        <text
          fill="white"
          fontSize="11.5"
          fontFamily="Manrope"
          fontWeight="700"
          letterSpacing="1"
        >
          <textPath href="#circlePath">{SITE_META.badgeText}</textPath>
        </text>
      </svg>
      <div
        style={{
          position: "absolute",
          inset: 0,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#000",
          borderRadius: "50%",
        }}
      >
        <div
          style={{ width: "8px", height: "8px", background: "#fff", borderRadius: "50%" }}
        />
      </div>
    </div>
  );
}
