"use client";

import { useEffect, useRef } from "react";

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Hide on touch devices
    if ("ontouchstart" in window) return;

    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    let mouseX = 0;
    let mouseY = 0;
    let ringX = 0;
    let ringY = 0;
    let isHovering = false;
    let isVisible = false;
    let currentScale = 1;
    let rafId: number;

    const updateVisibility = (visible: boolean) => {
      isVisible = visible;
      const opacityVal = visible ? "1" : "0";
      dot.style.opacity = opacityVal;
      ring.style.opacity = opacityVal;
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      if (!isVisible) {
        updateVisibility(true);
      }
      dot.style.transform = `translate(${mouseX - 4}px, ${mouseY - 4}px)`;
    };

    const handleMouseEnter = () => updateVisibility(true);
    const handleMouseLeave = () => updateVisibility(false);

    // Event delegation for hover state - highly performant, no memory leaks
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;
      
      const isInteractive = target.closest(
        'a, button, input, textarea, [role="button"], .glass-card, .btn-primary, .btn-secondary'
      );
      isHovering = !!isInteractive;
    };

    const animateRing = () => {
      // Lerp position
      ringX += (mouseX - ringX) * 0.15;
      ringY += (mouseY - ringY) * 0.15;

      // Lerp scale for smooth transition
      const targetScale = isHovering ? 1.5 : 1;
      currentScale += (targetScale - currentScale) * 0.15;

      ring.style.transform = `translate(${ringX - 20}px, ${ringY - 20}px) scale(${currentScale})`;

      rafId = requestAnimationFrame(animateRing);
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseenter", handleMouseEnter);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseover", handleMouseOver);

    rafId = requestAnimationFrame(animateRing);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseenter", handleMouseEnter);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseover", handleMouseOver);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <>
      {/* Dot */}
      <div
        ref={dotRef}
        className="fixed top-0 left-0 w-2 h-2 rounded-full pointer-events-none z-[10000] hidden lg:block"
        style={{
          background: "#00f0ff",
          boxShadow: "0 0 10px rgba(0,240,255,0.5), 0 0 20px rgba(0,240,255,0.3)",
          opacity: 0,
          transition: "opacity 0.3s ease",
        }}
      />
      {/* Ring */}
      <div
        ref={ringRef}
        className="fixed top-0 left-0 w-10 h-10 rounded-full pointer-events-none z-[10000] hidden lg:block"
        style={{
          border: "1.5px solid rgba(0,240,255,0.4)",
          opacity: 0,
          transition: "opacity 0.3s ease",
        }}
      />
    </>
  );
}
