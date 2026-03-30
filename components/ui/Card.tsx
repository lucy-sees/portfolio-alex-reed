"use client";

import { CardConfig } from "@/lib/config";
import { fonts, transitions } from "@/styles/theme";

// ─── Card ─────────────────────────────────────────────────────────────────────

interface CardProps {
  card: CardConfig;
  highlighted: string | null;
  size?: "tall" | "wide";
}

export default function Card({ card, highlighted, size = "wide" }: CardProps) {
  const isActive = highlighted === card.tag;

  const sharedStyle: React.CSSProperties = {
    background: card.color,
    borderRadius: "2rem",
    padding: size === "tall" ? "1.5rem" : "1.25rem 1.5rem",
    display: "flex",
    flexDirection: size === "tall" ? "column" : "row",
    justifyContent: size === "tall" ? "space-between" : undefined,
    alignItems: size === "wide" ? "center" : undefined,
    position: "relative",
    overflow: "hidden",
    transition: transitions.cardSpring,
    transform: isActive ? "scale(1.04)" : "scale(1)",
    boxShadow: isActive && size === "tall" ? "0 12px 40px rgba(0,0,0,0.15)" : "none",
    flex: size === "tall" ? 1 : undefined,
  };

  return (
    <div style={sharedStyle}>
      {size === "tall" && (
        <span
          style={{
            fontFamily: fonts.icons,
            fontSize: "14px",
            color: card.text,
            opacity: 0.25,
            alignSelf: "flex-end",
          }}
        >
          north_east
        </span>
      )}

      <div>
        <h4
          style={{
            fontFamily: fonts.headline,
            fontSize: size === "tall" ? "3rem" : "2rem",
            fontWeight: 900,
            margin: 0,
            color: card.text,
            lineHeight: 1,
          }}
        >
          {card.value}
        </h4>
        <p
          style={{
            fontSize: "10px",
            fontWeight: 700,
            letterSpacing: "0.15em",
            textTransform: "uppercase",
            color: card.text,
            opacity: 0.6,
            margin: "4px 0 0",
          }}
        >
          {card.label}
        </p>
      </div>

      {size === "wide" && (
        <span
          style={{
            fontFamily: fonts.icons,
            fontSize: "14px",
            color: card.text,
            opacity: 0.25,
          }}
        >
          north_east
        </span>
      )}
    </div>
  );
}
