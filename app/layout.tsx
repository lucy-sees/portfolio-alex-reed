import type { Metadata, Viewport } from "next";
import { AgentProvider } from "@/context/AgentContext";
import "@/styles/globals.css";
import { SITE_META } from "@/lib/config";

// ─── Metadata ─────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title:       SITE_META.title,
  description: `${SITE_META.name} — Agentic Portfolio`,
};

export const viewport: Viewport = {
  width:        "device-width",
  initialScale: 1,
  maximumScale: 1,   // prevent iOS auto-zoom on input focus
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
        <AgentProvider>{children}</AgentProvider>
      </body>
    </html>
  );
}
