"use client";

import { Suspense } from "react";
import Blob from "./Blob";

// ─── Scene ────────────────────────────────────────────────────────────────────
// Entry point for the 3D layer. Currently renders the SVG Blob as a fallback.
// To upgrade: install @react-three/fiber + @react-three/drei and swap the
// <Blob /> below for a <Canvas> with an IcosahedronGeometry + MeshDistortMaterial.
//
// Example upgrade path:
//   import { Canvas } from "@react-three/fiber";
//   import { MeshDistortMaterial } from "@react-three/drei";
//   <Canvas><mesh><icosahedronGeometry /><MeshDistortMaterial /></mesh></Canvas>

interface SceneProps {
  blobX: number;
  blobY: number;
}

function Loader() {
  return (
    <div
      style={{
        position: "absolute",
        inset: 0,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "rgba(255,255,255,0.4)",
        fontSize: "11px",
        letterSpacing: "0.1em",
        textTransform: "uppercase",
      }}
    >
      Loading scene…
    </div>
  );
}

export default function Scene({ blobX, blobY }: SceneProps) {
  return (
    <Suspense fallback={<Loader />}>
      <Blob x={blobX} y={blobY} />
    </Suspense>
  );
}
