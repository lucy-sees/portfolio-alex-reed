import Sidebar     from "@/components/ui/Sidebar";
import ProfileCard  from "@/components/ui/ProfileCard";
import KineticText  from "@/components/ui/KineticText";
import Grid         from "@/components/ui/Grid";

// ─── Landing Page ─────────────────────────────────────────────────────────────

export default function HomePage() {
  return (
    <main
      style={{
        background: "#DDDDD8",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "2rem",
        fontFamily: "'Manrope', sans-serif",
        boxSizing: "border-box",
      }}
    >
      {/* Outer card shell */}
      <div
        style={{
          background: "#fff",
          borderRadius: "3rem",
          boxShadow: "0 40px 100px rgba(0,0,0,0.18)",
          width: "100%",
          maxWidth: "1180px",
          overflow: "hidden",
          display: "flex",
          minHeight: "700px",
        }}
      >
        <Sidebar />

        {/* Main content area */}
        <div
          style={{
            flex: 1,
            padding: "2.5rem 3rem",
            display: "flex",
            gap: "2rem",
            flexWrap: "wrap",
          }}
        >
          <ProfileCard />

          {/* Right column: headline + dynamic grid */}
          <div
            style={{
              flex: 1,
              display: "flex",
              flexDirection: "column",
              gap: "1.5rem",
              minWidth: "300px",
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
