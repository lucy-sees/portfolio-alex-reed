"use client";

import Sidebar     from "@/components/ui/Sidebar";
import ProfileCard  from "@/components/ui/ProfileCard";
import KineticText  from "@/components/ui/KineticText";
import Grid         from "@/components/ui/Grid";
import { useBreakpoint } from "@/lib/useBreakpoint";

// ─── Landing Page ─────────────────────────────────────────────────────────────

export default function HomePage() {
  const screen = useBreakpoint();
  const isMobile = screen === "mobile";
  const isTablet = screen === "tablet";

  return (
    <main
      style={{
        background: "#DDDDD8",
        minHeight: "100vh",
        display: "flex",
        alignItems: isMobile ? "flex-start" : "center",
        justifyContent: "center",
        padding: isMobile ? "1rem" : "2rem",
        fontFamily: "'Manrope', sans-serif",
        boxSizing: "border-box",
      }}
    >
      {/* Outer card shell */}
      <div
        style={{
          background: "#fff",
          borderRadius: isMobile ? "1.5rem" : "3rem",
          boxShadow: "0 40px 100px rgba(0,0,0,0.18)",
          width: "100%",
          maxWidth: "1180px",
          overflow: "hidden",
          display: "flex",
          flexDirection: isMobile ? "column" : "row",
          minHeight: isMobile ? "unset" : "700px",
        }}
      >
        {/* Sidebar: left on desktop/tablet, top bar on mobile */}
        <Sidebar />

        {/* Main content area */}
        <div
          style={{
            flex: 1,
            padding: isMobile ? "1.25rem" : isTablet ? "1.75rem 2rem" : "2.5rem 3rem",
            display: "flex",
            flexDirection: isMobile ? "column" : "row",
            gap: isMobile ? "1.25rem" : "2rem",
            flexWrap: isMobile ? "nowrap" : "wrap",
          }}
        >
          <ProfileCard />

          {/* Right column: headline + dynamic grid */}
          <div
            style={{
              flex: 1,
              display: "flex",
              flexDirection: "column",
              gap: "1.25rem",
              minWidth: isMobile ? "unset" : "300px",
            }}
          >
            <KineticText />
            <Grid />
          </div>
        </div>
      </div>
    </main>
  );
}
