# Agentic Portfolio — Alex Reed

A **Next.js 15 App Router** portfolio site with an embedded AI agent interface, cursor-reactive 3D blob, and dynamic content grid. Built to the 2026 "Agentic Narrative" spec.

---

## Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Run the development server
npm run dev

# 3. Open in browser
open http://localhost:3000
```

---

## Project Structure

```
agentic-portfolio/
│
├── app/                         # Next.js App Router
│   ├── layout.tsx               # Root layout (AgentProvider, global styles)
│   ├── page.tsx                 # Landing page — composes all major sections
│   └── (portfolio)/
│       └── page.tsx             # Scaffold for future portfolio sub-pages
│
├── components/
│   ├── 3d/
│   │   ├── Blob.tsx             # SVG cursor-reactive blob (swap for R3F later)
│   │   └── Scene.tsx            # Suspense wrapper — drop-in point for Canvas
│   │
│   ├── agent/
│   │   ├── CommandCenter.tsx    # Glassmorphic AI input bar
│   │   ├── AgentGreeting.tsx    # Typewriter greeting display
│   │   └── useAgent.ts          # Typewriter effect + agent state access
│   │
│   ├── ui/
│   │   ├── Sidebar.tsx          # Vertical navigation
│   │   ├── ProfileCard.tsx      # Purple profile card (blob + name + agent)
│   │   ├── KineticText.tsx      # Animated headline + context switcher
│   │   ├── Grid.tsx             # Dynamic sorted content grid
│   │   └── Card.tsx             # Reusable stat card (tall / wide variants)
│   │
│   └── animations/
│       └── useGSAPAnimations.ts # GSAP hook stubs (ready to wire up)
│
├── context/
│   └── AgentContext.tsx         # Global: referral mode, query, highlighted tag
│
├── lib/
│   ├── config.ts                # All site data: cards, nav, referral contexts
│   └── intentParser.ts          # Keyword → card-tag intent mapping
│
├── styles/
│   ├── globals.css              # Tailwind base + keyframes
│   └── theme.ts                 # Design tokens (colors, fonts, radii, shadows)
│
├── tailwind.config.ts
├── tsconfig.json
├── next.config.ts
├── postcss.config.js
└── package.json
```

---

## Features

| Feature | Status | Notes |
|---|---|---|
| Agentic command bar | ✅ Live | Glassmorphic input with typewriter greeting |
| Context switcher | ✅ Live | All / Recruiter / Creative modes |
| Intent-based grid sort | ✅ Live | Type a keyword → card springs to top |
| Cursor-reactive blob | ✅ Live | SVG version — smooth CSS transitions |
| Kinetic headline | ✅ Scaffold | GSAP hook wired, animation stub ready |
| 3D blob (R3F) | 🔲 Optional | Drop into `Scene.tsx` — see upgrade guide |
| GSAP Flip grid | 🔲 Optional | Stub in `useGSAPAnimations.ts` |
| Scroll-triggered text | 🔲 Optional | Stub in `useKineticText` |

---

## Upgrading to Full 3D (React Three Fiber)

The `components/3d/Scene.tsx` file is the drop-in point. Replace the `<Blob />` SVG component with a `<Canvas>` scene:

```bash
npm install @react-three/fiber @react-three/drei three @types/three
```

```tsx
// components/3d/Scene.tsx
import { Canvas } from "@react-three/fiber";
import { MeshDistortMaterial, Float } from "@react-three/drei";

export default function Scene({ blobX, blobY }: SceneProps) {
  return (
    <Canvas style={{ position: "absolute", inset: 0 }}>
      <ambientLight intensity={0.5} />
      <pointLight position={[blobX * 4 - 2, blobY * -4 + 2, 2]} intensity={1.5} />
      <Float speed={2} rotationIntensity={0.4}>
        <mesh>
          <icosahedronGeometry args={[1.2, 4]} />
          <MeshDistortMaterial color="#c4c8ff" distort={0.4} speed={2} roughness={0} />
        </mesh>
      </Float>
    </Canvas>
  );
}
```

## Enabling GSAP Animations

```bash
npm install gsap @gsap/react
```

Then uncomment the GSAP imports in `components/animations/useGSAPAnimations.ts` and wire up the `useKineticText` and `useGridFlip` hooks.

---

## Design Tokens

All colours, fonts, radii and shadows live in `styles/theme.ts` — edit there to retheme the whole site in one place.

## Site Data

All content (nav items, stat cards, referral greetings, image URLs) lives in `lib/config.ts`. No need to touch component files to update copy or numbers.

---

## Tech Stack

- **Next.js 15** — App Router, React Server Components
- **TypeScript** — strict mode
- **Tailwind CSS 3** — utility classes + custom tokens
- **React Context** — lightweight global agent state
- **GSAP / R3F** — optional, scaffolded and ready to install
