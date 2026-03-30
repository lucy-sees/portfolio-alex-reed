import type { Metadata } from "next";
import { AgentProvider } from "@/context/AgentContext";
import "@/styles/globals.css";
import { SITE_META } from "@/lib/config";

// ─── Metadata ─────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title:       SITE_META.title,
  description: `${SITE_META.name} — Agentic Portfolio`,
};

// ─── Root Layout ──────────────────────────────────────────────────────────────

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {/*
          AgentProvider wraps the entire app so any component — profile card,
          grid, command center — can read/write shared agent state without
          prop-drilling.
        */}
        <AgentProvider>{children}</AgentProvider>
      </body>
    </html>
  );
}
