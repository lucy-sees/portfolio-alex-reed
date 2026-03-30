"use client";

import { useRef, useCallback, useState } from "react";
import Scene from "@/components/3d/Scene";
import CommandCenter from "@/components/agent/CommandCenter";
import { SITE_META, PROFILE_IMAGE_URL } from "@/lib/config";
import { fonts } from "@/styles/theme";
import { useBreakpoint } from "@/lib/useBreakpoint";

// ─── ProfileCard ──────────────────────────────────────────────────────────────

export default function ProfileCard() {
  const screen = useBreakpoint();
  const isMobile = screen === "mobile";
  const isTablet = screen === "tablet";

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

  const avatarSize  = isMobile ? "100px" : "160px";
  const cardPadding = isMobile ? "1.25rem" : "2rem";
  const cardWidth   = isMobile ? "100%" : isTablet ? "280px" : "340px";
  const minHeight   = isMobile ? "unset" : "520px";
  const nameFontSize = isMobile ? "2.4rem" : "clamp(3rem,6vw,4rem)";

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      style={{
        width: cardWidth,
        flexShrink: 0,
        background: "#8E94F2",
        borderRadius: "2rem",
        padding: cardPadding,
        display: "flex",
        flexDirection: isMobile ? "row" : "column",
        justifyContent: isMobile ? "flex-start" : "space-between",
        alignItems: isMobile ? "center" : "stretch",
        gap: isMobile ? "1rem" : undefined,
        position: "relative",
        overflow: "hidden",
        color: "#fff",
        minHeight,
        cursor: "default",
      }}
    >
      {/* 3D / SVG Blob layer */}
      <Scene blobX={blobPos.x} blobY={blobPos.y} />

      {/* Avatar */}
      <div style={{ position: "relative", zIndex: 1, flexShrink: 0 }}>
        <div
          style={{
            position: "relative",
            width: avatarSize,
            height: avatarSize,
            margin: isMobile ? "0" : "0 auto",
          }}
        >
          <div style={{ position: "absolute", inset: isMobile ? "-5px" : "-8px", border: "1.5px solid rgba(255,255,255,0.3)", borderRadius: "50%" }} />
          <div style={{ position: "absolute", inset: isMobile ? "-12px" : "-18px", border: "1.5px solid rgba(255,200,255,0.2)", borderRadius: "50%" }} />
          <img
            src={PROFILE_IMAGE_URL}
            alt={`${SITE_META.name} Profile`}
            style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: "50%", filter: "grayscale(100%)" }}
          />
        </div>
      </div>

      {/* Name + Agent — takes remaining width on mobile */}
      <div
        style={{
          position: "relative",
          zIndex: 1,
          marginTop: isMobile ? 0 : "auto",
          flex: isMobile ? 1 : undefined,
        }}
      >
        <h2
          style={{
            fontFamily: fonts.headline,
            fontSize: nameFontSize,
            fontWeight: 900,
            lineHeight: 1,
            margin: isMobile ? "0 0 0.75rem" : "0 0 1.5rem",
            letterSpacing: "-0.03em",
          }}
        >
          {isMobile ? (
            // Single line on mobile to save vertical space
            <>I&apos;m Alex Reed</>
          ) : (
            <>I&apos;m,<br />Alex<br />Reed</>
          )}
        </h2>

        <CommandCenter />
      </div>

      {/* Spinning badge — hide on mobile to avoid overflow */}
      {!isMobile && <SpinningBadge />}
    </div>
  );
}

// ─── SpinningBadge ────────────────────────────────────────────────────────────

function SpinningBadge() {
  return (
    <div style={{ position: "absolute", bottom: "1.5rem", right: "1.5rem", width: "60px", height: "60px" }}>
      <svg
        viewBox="0 0 100 100"
        style={{ width: "100%", height: "100%", animation: "spin 12s linear infinite", position: "absolute" }}
      >
        <path d="M 50,50 m -37,0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" fill="none" id="circlePath" />
        <text fill="white" fontSize="11.5" fontFamily="Manrope" fontWeight="700" letterSpacing="1">
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
        <div style={{ width: "8px", height: "8px", background: "#fff", borderRadius: "50%" }} />
      </div>
    </div>
  );
}
