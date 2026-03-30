"use client";

import {
  createContext,
  useContext,
  useState,
  useCallback,
  ReactNode,
} from "react";
import { ReferralKey } from "@/lib/config";
import { parseIntent } from "@/lib/intentParser";

// ─── Types ────────────────────────────────────────────────────────────────────

interface AgentState {
  referral:    ReferralKey;
  query:       string;
  highlighted: string | null;
  setReferral: (key: ReferralKey) => void;
  setQuery:    (q: string) => void;
}

// ─── Context ─────────────────────────────────────────────────────────────────

const AgentContext = createContext<AgentState | null>(null);

// ─── Provider ─────────────────────────────────────────────────────────────────

export function AgentProvider({ children }: { children: ReactNode }) {
  const [referral,    setReferralState] = useState<ReferralKey>("default");
  const [query,       setQueryState]    = useState("");
  const [highlighted, setHighlighted]   = useState<string | null>(null);

  const setReferral = useCallback((key: ReferralKey) => {
    setReferralState(key);
  }, []);

  const setQuery = useCallback((q: string) => {
    setQueryState(q);
    setHighlighted(parseIntent(q));
  }, []);

  return (
    <AgentContext.Provider
      value={{ referral, query, highlighted, setReferral, setQuery }}
    >
      {children}
    </AgentContext.Provider>
  );
}

// ─── Hook ─────────────────────────────────────────────────────────────────────

export function useAgentContext(): AgentState {
  const ctx = useContext(AgentContext);
  if (!ctx) throw new Error("useAgentContext must be used inside <AgentProvider>");
  return ctx;
}
