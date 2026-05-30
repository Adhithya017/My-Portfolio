"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

function WavePlane() {
  const meshRef = useRef<THREE.Mesh>(null);
  const geometryRef = useRef<THREE.PlaneGeometry>(null);

  useFrame((state) => {
    if (!geometryRef.current || !meshRef.current) return;

    const positions = geometryRef.current.attributes.position;
    const time = state.clock.elapsedTime;

    for (let i = 0; i < positions.count; i++) {
      const x = positions.getX(i);
      const y = positions.getY(i);
      const z =
        Math.sin(x * 0.5 + time * 0.8) * 0.3 +
        Math.cos(y * 0.3 + time * 0.6) * 0.2 +
        Math.sin((x + y) * 0.3 + time * 0.4) * 0.15;
      positions.setZ(i, z);
    }

    positions.needsUpdate = true;
    meshRef.current.rotation.z = time * 0.02;
  });

  return (
    <mesh ref={meshRef} rotation={[-Math.PI / 3, 0, 0]} position={[0, -2, 0]}>
      <planeGeometry ref={geometryRef} args={[20, 20, 64, 64]} />
      <meshBasicMaterial
        color="#8b5cf6"
        wireframe
        transparent
        opacity={0.08}
      />
    </mesh>
  );
}

export default function ContactScene() {
  return (
    <>
      <ambientLight intensity={0.2} />
      <pointLight position={[5, 5, 5]} intensity={0.3} color="#00f0ff" />
      <WavePlane />
    </>
  );
}
