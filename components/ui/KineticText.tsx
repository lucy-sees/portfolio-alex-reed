"use client";

import { useRef } from "react";
import { useKineticText } from "@/components/animations/useGSAPAnimations";
import { useAgentContext } from "@/context/AgentContext";
import { SITE_META, ReferralKey } from "@/lib/config";
import { fonts, transitions } from "@/styles/theme";
import { useBreakpoint } from "@/lib/useBreakpoint";

// ─── KineticText ──────────────────────────────────────────────────────────────

const CONTEXTS: ReferralKey[] = ["default", "recruiter", "creative"];

export default function KineticText() {
  const headlineRef = useRef<HTMLHeadingElement>(null);
  useKineticText(headlineRef);

  const { referral, setReferral } = useAgentContext();
  const screen = useBreakpoint();
  const isMobile = screen === "mobile";

  return (
    <div
      style={{
        display: "flex",
        flexDirection: isMobile ? "column" : "row",
        justifyContent: "space-between",
        alignItems: isMobile ? "flex-start" : "flex-end",
        gap: isMobile ? "0.5rem" : undefined,
      }}
    >
      <h1
        ref={headlineRef}
        style={{
          fontFamily: fonts.headline,
          fontSize: isMobile ? "clamp(2.5rem,12vw,3.5rem)" : "clamp(4rem,8vw,6rem)",
          fontWeight: 900,
          letterSpacing: "-0.04em",
          margin: 0,
          lineHeight: 1,
          color: "#000",
        }}
      >
        Portfolio
        <sup style={{ fontSize: "0.75rem", fontWeight: 700, verticalAlign: "super", marginLeft: "4px" }}>
          {SITE_META.portfolioCount}
        </sup>
      </h1>

      {/* Context switcher */}
      <div style={{ display: "flex", gap: "6px", alignItems: "center", flexWrap: "wrap" }}>
        {CONTEXTS.map((ctx) => (
          <button
            key={ctx}
            onClick={() => setReferral(ctx)}
            style={{
              fontSize: "10px",
              fontWeight: 700,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              padding: "4px 10px",
              borderRadius: "2rem",
              border: "1px solid",
              background:  referral === ctx ? "#000" : "transparent",
              color:       referral === ctx ? "#fff" : "#999",
              borderColor: referral === ctx ? "#000" : "#ddd",
              cursor: "pointer",
              transition: transitions.all,
            }}
          >
            {ctx === "default" ? "All" : ctx}
          </button>
        ))}
      </div>
    </div>
  );
}
