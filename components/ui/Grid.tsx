"use client";

import { useMemo } from "react";
import Card from "./Card";
import { CARDS, HERO_IMAGE_URL } from "@/lib/config";
import { useAgentContext } from "@/context/AgentContext";
import { fonts } from "@/styles/theme";

// ─── Grid ─────────────────────────────────────────────────────────────────────

export default function Grid() {
  const { highlighted, query } = useAgentContext();

  const sortedCards = useMemo(() => {
    if (!highlighted) return CARDS;
    return [...CARDS].sort((a, b) =>
      a.tag === highlighted ? -1 : b.tag === highlighted ? 1 : 0
    );
  }, [highlighted]);

  return (
    <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: "1.5rem", minWidth: "300px" }}>

      {/* Main image + tall stat cards */}
      <div style={{ display: "flex", gap: "1.5rem", flex: 1 }}>

        {/* Hero image */}
        <div
          style={{
            flex: "0 0 55%",
            borderRadius: "2rem",
            overflow: "hidden",
            position: "relative",
            background: "#c5e8e7",
            minHeight: "260px",
          }}
        >
          <img
            src={HERO_IMAGE_URL}
            alt="Visual Art"
            style={{ width: "100%", height: "100%", objectFit: "cover", position: "absolute", inset: 0 }}
          />
          <div
            style={{
              position: "absolute",
              inset: 0,
              background: "rgba(160,226,225,0.15)",
              mixBlendMode: "multiply",
            }}
          />
          <div
            style={{
              position: "absolute",
              inset: 0,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div
              style={{
                width: "56px",
                height: "56px",
                background: "rgba(255,255,255,0.92)",
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                boxShadow: "0 4px 20px rgba(0,0,0,0.15)",
                cursor: "pointer",
                transition: "transform 0.2s",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.transform = "scale(1.1)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.transform = "scale(1)")
              }
            >
              <span style={{ fontFamily: fonts.icons, fontSize: "28px", color: "#000" }}>
                play_arrow
              </span>
            </div>
          </div>
        </div>

        {/* Tall stat cards (first 2) */}
        <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: "1rem" }}>
          {sortedCards.slice(0, 2).map((card) => (
            <Card key={card.id} card={card} highlighted={highlighted} size="tall" />
          ))}
        </div>
      </div>

      {/* Bottom wide cards (last 2) */}
      <div style={{ display: "flex", gap: "1rem" }}>
        {sortedCards.slice(2).map((card) => (
          <Card key={card.id} card={card} highlighted={highlighted} size="wide" />
        ))}

        {/* Active filter chip */}
        {query && (
          <div
            style={{
              flex: 1,
              background: "#111",
              borderRadius: "2rem",
              padding: "1.25rem 1.5rem",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <p style={{ fontSize: "10px", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "#8E94F2", margin: "0 0 4px" }}>
              Filtering
            </p>
            <p style={{ fontSize: "13px", color: "#fff", margin: 0, fontWeight: 600 }}>
              &ldquo;{query}&rdquo;
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
