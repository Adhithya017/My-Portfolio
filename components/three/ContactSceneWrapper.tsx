"use client";

import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import ContactScene from "./ContactScene";

export default function ContactSceneWrapper() {
  return (
    <div className="absolute inset-0 z-0 opacity-40">
      <Canvas
        camera={{ position: [0, 2, 8], fov: 50 }}
        dpr={[1, 1.5]}
        gl={{
          antialias: true,
          alpha: true,
          powerPreference: "high-performance",
        }}
        style={{ background: "transparent" }}
      >
        <Suspense fallback={null}>
          <ContactScene />
        </Suspense>
      </Canvas>
    </div>
  );
}
