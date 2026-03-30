"use client";

import { CardConfig } from "@/lib/config";
import { fonts, transitions } from "@/styles/theme";
import { useBreakpoint } from "@/lib/useBreakpoint";

// ─── Card ─────────────────────────────────────────────────────────────────────

interface CardProps {
  card: CardConfig;
  highlighted: string | null;
  size?: "tall" | "wide";
}

export default function Card({ card, highlighted, size = "wide" }: CardProps) {
  const screen = useBreakpoint();
  const isMobile = screen === "mobile";
  const isActive = highlighted === card.tag;

  const tallPad  = isMobile ? "1rem 1.25rem" : "1.5rem";
  const widePad  = isMobile ? "0.875rem 1rem" : "1.25rem 1.5rem";
  const tallNum  = isMobile ? "2rem"  : "3rem";
  const wideNum  = isMobile ? "1.5rem": "2rem";
  const radius   = isMobile ? "1.25rem" : "2rem";

  const sharedStyle: React.CSSProperties = {
    background: card.color,
    borderRadius: radius,
    padding: size === "tall" ? tallPad : widePad,
    display: "flex",
    flexDirection: size === "tall" ? "column" : "row",
    justifyContent: size === "tall" ? "space-between" : undefined,
    alignItems: size === "wide" ? "center" : undefined,
    position: "relative",
    overflow: "hidden",
    transition: transitions.cardSpring,
    transform: isActive ? "scale(1.04)" : "scale(1)",
    boxShadow: isActive && size === "tall" ? "0 12px 40px rgba(0,0,0,0.15)" : "none",
    flex: size === "tall" ? 1 : 1,
    minWidth: 0,
  };

  return (
    <div style={sharedStyle}>
      {size === "tall" && (
        <span
          style={{
            fontFamily: fonts.icons,
            fontSize: "12px",
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
            fontSize: size === "tall" ? tallNum : wideNum,
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
            fontSize: "9px",
            fontWeight: 700,
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            color: card.text,
            opacity: 0.6,
            margin: "3px 0 0",
          }}
        >
          {card.label}
        </p>
      </div>

      {size === "wide" && (
        <span
          style={{
            fontFamily: fonts.icons,
            fontSize: "12px",
            color: card.text,
            opacity: 0.25,
            marginLeft: "auto",
          }}
        >
          north_east
        </span>
      )}
    </div>
  );
}
