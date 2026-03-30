// ─── Portfolio Route (future expansion) ──────────────────────────────────────
// This route group is scaffolded for future pages such as:
//   /portfolio/branding
//   /portfolio/motion
//   /portfolio/awards
//
// Add dynamic [slug] routes here as the portfolio grows.

export default function PortfolioPage() {
  return (
    <main
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "'Manrope', sans-serif",
        color: "#111",
      }}
    >
      <div style={{ textAlign: "center" }}>
        <h1
          style={{
            fontFamily: "'Epilogue', sans-serif",
            fontSize: "4rem",
            fontWeight: 900,
            letterSpacing: "-0.04em",
            margin: "0 0 1rem",
          }}
        >
          Coming Soon
        </h1>
        <p style={{ fontSize: "14px", color: "#888" }}>
          Individual portfolio pages live here. Add <code>[slug]/page.tsx</code> to
          expand.
        </p>
        <a
          href="/"
          style={{
            display: "inline-block",
            marginTop: "2rem",
            fontSize: "11px",
            fontWeight: 700,
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            color: "#8E94F2",
            textDecoration: "none",
          }}
        >
          ← Back to Portfolio
        </a>
      </div>
    </main>
  );
}
