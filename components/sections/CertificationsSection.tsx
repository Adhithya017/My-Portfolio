"use client";

import { motion } from "framer-motion";
import { BadgeCheck } from "lucide-react";
import { FaAws } from "react-icons/fa";
import { certifications } from "@/data/portfolio";

function CertIcon({ logo }: { logo: string }) {
  if (logo === "ibm") {
    return (
      <span
        style={{
          color: "var(--accent-cyan)",
          fontFamily: "var(--font-heading)",
          fontSize: "28px",
          fontWeight: 700,
          letterSpacing: "0.1em",
        }}
      >
        IBM
      </span>
    );
  }
  if (logo === "aws") {
    return <FaAws size={48} style={{ color: "var(--accent-magenta)" }} />;
  }
  return <BadgeCheck size={48} style={{ color: "var(--accent-violet)" }} />;
}

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, ease: "easeOut" as const },
  },
};

export default function CertificationsSection() {
  return (
    <section id="certifications" className="relative">
      <div className="section-container">
        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="section-heading gradient-text">Certifications</h2>
        </motion.div>

        {/* Flip cards grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {certifications.map((cert) => (
            <motion.div
              key={cert.title}
              variants={cardVariants}
              className="flip-card h-64"
            >
              <div className="flip-card-inner relative w-full h-full">
                {/* Front Face */}
                <div className="flip-card-front absolute inset-0">
                  <div className="glass-card w-full h-full flex flex-col items-center justify-center p-8 text-center gap-5">
                    {/* Glow ring around icon */}
                    <div
                      className="w-20 h-20 rounded-full flex items-center justify-center"
                      style={{
                        background:
                          cert.logo === "ibm"
                            ? "rgba(0, 240, 255, 0.08)"
                            : "rgba(236, 72, 153, 0.08)",
                        border: `1px solid ${
                          cert.logo === "ibm"
                            ? "rgba(0, 240, 255, 0.2)"
                            : "rgba(236, 72, 153, 0.2)"
                        }`,
                      }}
                    >
                      <CertIcon logo={cert.logo} />
                    </div>

                    <h3
                      className="text-base font-bold leading-snug"
                      style={{
                        fontFamily: "var(--font-heading)",
                        color: "var(--text-primary)",
                      }}
                    >
                      {cert.title}
                    </h3>
                  </div>
                </div>

                {/* Back Face */}
                <div className="flip-card-back absolute inset-0">
                  <div
                    className="glass-card w-full h-full flex flex-col items-center justify-center p-8 text-center gap-5"
                    style={{
                      background: "rgba(15, 16, 35, 0.85)",
                      borderColor: "rgba(0, 240, 255, 0.2)",
                    }}
                  >
                    {/* Checkmark badge */}
                    <div
                      className="w-16 h-16 rounded-full flex items-center justify-center"
                      style={{
                        background: "rgba(0, 240, 255, 0.1)",
                        border: "1px solid rgba(0, 240, 255, 0.3)",
                      }}
                    >
                      <BadgeCheck
                        size={36}
                        style={{ color: "var(--accent-cyan)" }}
                      />
                    </div>

                    <div>
                      <p
                        className="text-sm mb-1"
                        style={{ color: "var(--text-secondary)" }}
                      >
                        Issued by
                      </p>
                      <p
                        className="text-xl font-bold"
                        style={{
                          fontFamily: "var(--font-heading)",
                          color: "var(--accent-cyan)",
                        }}
                      >
                        {cert.issuer}
                      </p>
                    </div>

                    <p
                      className="text-xs"
                      style={{ color: "var(--text-muted)" }}
                    >
                      Verified Certification
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
