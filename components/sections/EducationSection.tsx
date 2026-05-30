"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { GraduationCap, Calendar, Award } from "lucide-react";
import { education } from "@/data/portfolio";

function EducationCard({
  item,
  index,
}: {
  item: (typeof education)[number];
  index: number;
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ rotateX: 0, rotateY: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * -10;
    const rotateY = ((x - centerX) / centerX) * 10;
    setTilt({ rotateX, rotateY });
  };

  const handleMouseLeave = () => {
    setTilt({ rotateX: 0, rotateY: 0 });
  };

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.2, ease: "easeOut" as const }}
      viewport={{ once: true, margin: "-50px" }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: `perspective(800px) rotateX(${tilt.rotateX}deg) rotateY(${tilt.rotateY}deg)`,
        transition: "transform 0.15s ease-out",
      }}
      className="glass-card relative overflow-hidden p-8 flex-1 min-w-0"
    >
      {/* Accent glow */}
      <div
        className="absolute top-0 left-0 w-full h-1 rounded-t-2xl"
        style={{ background: "var(--gradient-primary)" }}
      />

      {/* Icon */}
      <div
        className="w-14 h-14 rounded-xl flex items-center justify-center mb-6"
        style={{
          background: "rgba(0, 240, 255, 0.1)",
          border: "1px solid rgba(0, 240, 255, 0.2)",
        }}
      >
        <GraduationCap
          size={28}
          style={{ color: "var(--accent-cyan)" }}
        />
      </div>

      {/* Institution */}
      <h3
        className="text-xl md:text-2xl font-bold mb-2"
        style={{ fontFamily: "var(--font-heading)" }}
      >
        {item.institution}
      </h3>

      {/* Degree */}
      <p
        className="text-lg font-semibold mb-4"
        style={{ color: "var(--accent-cyan)" }}
      >
        {item.degree}
      </p>

      {/* Duration & Grade */}
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-2" style={{ color: "var(--text-secondary)" }}>
          <Calendar size={16} style={{ color: "var(--accent-violet)" }} />
          <span className="text-sm">{item.duration}</span>
        </div>
        <div className="flex items-center gap-2" style={{ color: "var(--text-secondary)" }}>
          <Award size={16} style={{ color: "var(--accent-magenta)" }} />
          <span className="text-sm font-medium">{item.grade}</span>
        </div>
      </div>

      {/* Decorative corner dots */}
      <div
        className="absolute bottom-4 right-4 w-2 h-2 rounded-full"
        style={{
          background: "var(--accent-cyan)",
          boxShadow: "0 0 8px var(--accent-cyan-glow)",
        }}
      />
    </motion.div>
  );
}

export default function EducationSection() {
  return (
    <section id="education" className="relative">
      <div className="section-container">
        {/* Section heading with floating icon */}
        <div className="flex items-center justify-center gap-4 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="section-heading gradient-text text-center">
              Education
            </h2>
          </motion.div>

          <div className="animate-float">
            <GraduationCap
              size={36}
              style={{
                color: "var(--accent-cyan)",
                filter: "drop-shadow(0 0 10px rgba(0, 240, 255, 0.4))",
              }}
            />
          </div>
        </div>

        {/* Education cards grid */}
        <div className="flex flex-col md:flex-row gap-8">
          {education.map((item, index) => (
            <EducationCard key={item.institution} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
