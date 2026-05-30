"use client";

import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import ParticleField from "./ParticleField";
import WireframeGlobe from "./WireframeGlobe";

export default function HeroScene() {
  return (
    <div className="absolute inset-0 z-0">
      <Canvas
        camera={{ position: [0, 0, 8], fov: 60 }}
        dpr={[1, 1.5]}
        gl={{
          antialias: true,
          alpha: true,
          powerPreference: "high-performance",
        }}
        style={{ background: "transparent" }}
      >
        <Suspense fallback={null}>
          <ambientLight intensity={0.3} />
          <pointLight position={[10, 10, 10]} intensity={0.5} color="#00f0ff" />
          <pointLight position={[-10, -10, -10]} intensity={0.3} color="#8b5cf6" />
          <ParticleField count={600} />
          <WireframeGlobe />
        </Suspense>
      </Canvas>
    </div>
  );
}
