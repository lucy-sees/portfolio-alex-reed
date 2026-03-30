"use client";

import { NAV_ITEMS, ACTIVE_NAV } from "@/lib/config";
import { fonts } from "@/styles/theme";
import { useBreakpoint } from "@/lib/useBreakpoint";

// ─── Sidebar ──────────────────────────────────────────────────────────────────

export default function Sidebar() {
  const screen = useBreakpoint();
  const isMobile = screen === "mobile";

  if (isMobile) {
    // ── Mobile: horizontal top bar ──────────────────────────────────────────
    return (
      <header
        style={{
          width: "100%",
          borderBottom: "1px solid #f0f0f0",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0.875rem 1.25rem",
          background: "#fff",
          flexShrink: 0,
        }}
      >
        {/* Logo mark */}
        <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
          <span style={{ fontSize: "16px", fontFamily: fonts.icons }}>filter_vintage</span>
          <span style={{ fontSize: "9px", fontWeight: 800, letterSpacing: "0.08em", textTransform: "uppercase", color: "#111" }}>
            Alex Reed
          </span>
        </div>

        {/* Nav links — horizontal */}
        <nav style={{ display: "flex", alignItems: "center", gap: "1.25rem" }}>
          {NAV_ITEMS.map((item) => {
            const isActive = item === ACTIVE_NAV;
            return (
              <a
                key={item}
                href="#"
                style={{
                  fontSize: "9px",
                  fontWeight: 700,
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  color: isActive ? "#000" : "#aaa",
                  textDecoration: isActive ? "underline" : "none",
                  textDecorationThickness: "2px",
                  textUnderlineOffset: "4px",
                  cursor: "pointer",
                  transition: "color 0.2s",
                }}
              >
                {item}
              </a>
            );
          })}
        </nav>
      </header>
    );
  }

  // ── Tablet / Desktop: vertical sidebar ──────────────────────────────────────
  return (
    <aside
      style={{
        width: "72px",
        borderRight: "1px solid #f0f0f0",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "2.5rem 0",
        gap: "2rem",
        background: "#fff",
        flexShrink: 0,
      }}
    >
      {/* Logo mark */}
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "4px", marginBottom: "1rem" }}>
        <span style={{ fontSize: "18px", fontFamily: fonts.icons }}>filter_vintage</span>
        <span style={{ fontSize: "9px", fontWeight: 800, letterSpacing: "0.08em", textTransform: "uppercase", color: "#111" }}>
          Me
        </span>
      </div>

      {/* Nav links */}
      <nav style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "2.5rem", flex: 1, justifyContent: "center" }}>
        {NAV_ITEMS.map((item) => {
          const isActive = item === ACTIVE_NAV;
          return (
            <a
              key={item}
              href="#"
              style={{
                writingMode: "vertical-rl",
                transform: "rotate(180deg)",
                fontSize: "9px",
                fontWeight: 700,
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color: isActive ? "#000" : "#aaa",
                textDecoration: isActive ? "underline" : "none",
                textDecorationThickness: "2px",
                textUnderlineOffset: "4px",
                cursor: "pointer",
                transition: "color 0.2s",
                textDecorationColor: isActive ? "#000" : "transparent",
              }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "#000")}
              onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = isActive ? "#000" : "#aaa")}
            >
              {item}
            </a>
          );
        })}
      </nav>
    </aside>
  );
}
