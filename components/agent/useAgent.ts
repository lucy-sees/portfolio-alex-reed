"use client";

import { useState, useEffect } from "react";
import { useAgentContext } from "@/context/AgentContext";
import { REFERRAL_CONTEXTS } from "@/lib/config";

// ─── useAgent ─────────────────────────────────────────────────────────────────
// Exposes the full agent state + typewriter effect for AgentGreeting.

export function useAgent() {
  const { referral, query, highlighted, setReferral, setQuery } =
    useAgentContext();

  const fullGreeting = REFERRAL_CONTEXTS[referral].greeting;
  const placeholder  = REFERRAL_CONTEXTS[referral].placeholder;

  // Typewriter animation
  const [typed, setTyped] = useState("");

  useEffect(() => {
    let i = 0;
    setTyped("");
    const interval = setInterval(() => {
      setTyped(fullGreeting.slice(0, i + 1));
      i++;
      if (i >= fullGreeting.length) clearInterval(interval);
    }, 28);
    return () => clearInterval(interval);
  }, [referral, fullGreeting]);

  return {
    referral,
    query,
    highlighted,
    placeholder,
    typed,
    setReferral,
    setQuery,
  };
}
