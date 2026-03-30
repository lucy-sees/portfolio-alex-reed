"use client";

import { useMemo } from "react";
import Card from "./Card";
import { CARDS, HERO_IMAGE_URL } from "@/lib/config";
import { useAgentContext } from "@/context/AgentContext";
import { fonts } from "@/styles/theme";
import { useBreakpoint } from "@/lib/useBreakpoint";

// ─── Grid ─────────────────────────────────────────────────────────────────────

export default function Grid() {
  const { highlighted, query } = useAgentContext();
  const screen = useBreakpoint();
  const isMobile = screen === "mobile";
  const isTablet = screen === "tablet";

  const sortedCards = useMemo(() => {
    if (!highlighted) return CARDS;
    return [...CARDS].sort((a, b) =>
      a.tag === highlighted ? -1 : b.tag === highlighted ? 1 : 0
    );
  }, [highlighted]);

  return (
    <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: isMobile ? "1rem" : "1.5rem" }}>

      {/* ── Hero image + tall stat cards ─────────────────────────────────── */}
      <div
        style={{
          display: "flex",
          flexDirection: isMobile ? "column" : "row",
          gap: isMobile ? "1rem" : "1.5rem",
          flex: 1,
        }}
      >
        {/* Hero image */}
        <div
          style={{
            flex: isMobile ? "unset" : "0 0 55%",
            borderRadius: "1.5rem",
            overflow: "hidden",
            position: "relative",
            background: "#c5e8e7",
            // Fixed aspect ratio on mobile so it doesn't collapse
            aspectRatio: isMobile ? "16/9" : undefined,
            minHeight: isMobile ? "unset" : "260px",
          }}
        >
          <img
            src={HERO_IMAGE_URL}
            alt="Visual Art"
            style={{ width: "100%", height: "100%", objectFit: "cover", position: "absolute", inset: 0 }}
          />
          <div style={{ position: "absolute", inset: 0, background: "rgba(160,226,225,0.15)", mixBlendMode: "multiply" }} />
          <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center" }}>
            <div
              style={{
                width: "48px",
                height: "48px",
                background: "rgba(255,255,255,0.92)",
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                boxShadow: "0 4px 20px rgba(0,0,0,0.15)",
                cursor: "pointer",
                transition: "transform 0.2s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.1)")}
              onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
            >
              <span style={{ fontFamily: fonts.icons, fontSize: "26px", color: "#000" }}>play_arrow</span>
            </div>
          </div>
        </div>

        {/* Tall stat cards (first 2) — side by side on mobile, column otherwise */}
        <div
          style={{
            flex: 1,
            display: "flex",
            flexDirection: isMobile ? "row" : "column",
            gap: "1rem",
          }}
        >
          {sortedCards.slice(0, 2).map((card) => (
            <Card
              key={card.id}
              card={card}
              highlighted={highlighted}
              size={isMobile ? "wide" : "tall"}
            />
          ))}
        </div>
      </div>

      {/* ── Bottom wide cards (last 2) ────────────────────────────────────── */}
      <div style={{ display: "flex", gap: "1rem", flexWrap: "nowrap" }}>
        {sortedCards.slice(2).map((card) => (
          <Card key={card.id} card={card} highlighted={highlighted} size="wide" />
        ))}

        {/* Active filter chip */}
        {query && (
          <div
            style={{
              flex: 1,
              background: "#111",
              borderRadius: "1.5rem",
              padding: "1rem 1.25rem",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              minWidth: 0,
            }}
          >
            <p style={{ fontSize: "9px", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "#8E94F2", margin: "0 0 4px" }}>
              Filtering
            </p>
            <p style={{ fontSize: "12px", color: "#fff", margin: 0, fontWeight: 600, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
              &ldquo;{query}&rdquo;
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
