"use client";

// ─── AgentGreeting ────────────────────────────────────────────────────────────
// Renders the animated typewriter greeting inside the Command Center.

interface AgentGreetingProps {
  typed: string;
}

export default function AgentGreeting({ typed }: AgentGreetingProps) {
  return (
    <p
      style={{
        fontSize: "12px",
        color: "rgba(255,255,255,0.9)",
        margin: "0 0 8px",
        minHeight: "32px",
        lineHeight: 1.4,
      }}
    >
      {typed}
      <span style={{ opacity: 0.5, animation: "blink 1s infinite" }}>|</span>
    </p>
  );
}
