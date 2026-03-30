"use client";

import { useState } from "react";
import AgentGreeting from "./AgentGreeting";
import { useAgent } from "./useAgent";
import { SITE_META } from "@/lib/config";

// ─── CommandCenter ────────────────────────────────────────────────────────────
// Glassmorphic AI command bar embedded in the profile card.

export default function CommandCenter() {
  const { query, placeholder, typed, setQuery } = useAgent();
  const [focused, setFocused] = useState(false);

  return (
    <>
      {/* Glassmorphic bar */}
      <div
        style={{
          background: "rgba(255,255,255,0.12)",
          backdropFilter: "blur(10px)",
          border: "1px solid rgba(255,255,255,0.25)",
          borderRadius: "1rem",
          padding: "0.75rem 1rem",
          transition: "all 0.3s",
          boxShadow: focused ? "0 0 0 2px rgba(255,255,255,0.4)" : "none",
        }}
      >
        <p
          style={{
            fontSize: "10px",
            fontWeight: 600,
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            color: "rgba(255,255,255,0.65)",
            margin: "0 0 4px",
          }}
        >
          Agent
        </p>

        <AgentGreeting typed={typed} />

        <input
          className="agent-input"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          placeholder={placeholder}
          style={{
            width: "100%",
            background: "rgba(255,255,255,0.15)",
            border: "none",
            borderRadius: "0.5rem",
            color: "#fff",
            fontSize: "12px",
            padding: "6px 10px",
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
          marginTop: "1rem",
          paddingTop: "0.75rem",
        }}
      >
        <span style={{ fontSize: "11px", opacity: 0.75 }}>{SITE_META.email}</span>
        <span
          style={{
            fontFamily: "'Material Symbols Outlined'",
            fontSize: "16px",
            opacity: 0.5,
          }}
        >
          mail
        </span>
      </div>
    </>
  );
}
