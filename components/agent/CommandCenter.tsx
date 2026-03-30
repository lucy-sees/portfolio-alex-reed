"use client";

import { useState } from "react";
import AgentGreeting from "./AgentGreeting";
import { useAgent } from "./useAgent";
import { SITE_META } from "@/lib/config";
import { useBreakpoint } from "@/lib/useBreakpoint";

// ─── CommandCenter ────────────────────────────────────────────────────────────

export default function CommandCenter() {
  const { query, placeholder, typed, setQuery } = useAgent();
  const [focused, setFocused] = useState(false);
  const screen = useBreakpoint();
  const isMobile = screen === "mobile";

  return (
    <>
      {/* Glassmorphic bar */}
      <div
        style={{
          background: "rgba(255,255,255,0.12)",
          backdropFilter: "blur(10px)",
          border: "1px solid rgba(255,255,255,0.25)",
          borderRadius: "0.875rem",
          padding: isMobile ? "0.5rem 0.75rem" : "0.75rem 1rem",
          transition: "all 0.3s",
          boxShadow: focused ? "0 0 0 2px rgba(255,255,255,0.4)" : "none",
        }}
      >
        <p
          style={{
            fontSize: "9px",
            fontWeight: 600,
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            color: "rgba(255,255,255,0.65)",
            margin: "0 0 3px",
          }}
        >
          Agent
        </p>

        {/* Hide typewriter on mobile to save space — just show the input */}
        {!isMobile && <AgentGreeting typed={typed} />}

        <input
          className="agent-input"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          placeholder={isMobile ? "Search..." : placeholder}
          style={{
            width: "100%",
            background: "rgba(255,255,255,0.15)",
            border: "none",
            borderRadius: "0.5rem",
            color: "#fff",
            fontSize: "12px",
            padding: "5px 8px",
            outline: "none",
            boxSizing: "border-box",
          }}
        />
      </div>

      {/* Contact row */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          borderTop: "1px solid rgba(255,255,255,0.2)",
          marginTop: isMobile ? "0.5rem" : "1rem",
          paddingTop: isMobile ? "0.5rem" : "0.75rem",
        }}
      >
        <span style={{ fontSize: isMobile ? "10px" : "11px", opacity: 0.75 }}>
          {SITE_META.email}
        </span>
        <span
          style={{
            fontFamily: "'Material Symbols Outlined'",
            fontSize: "14px",
            opacity: 0.5,
          }}
        >
          mail
        </span>
      </div>
    </>
  );
}
