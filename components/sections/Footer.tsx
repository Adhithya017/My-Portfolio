"use client";

import { motion } from "framer-motion";
import { Rocket, Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const socialIcons = [
  {
    icon: FaGithub,
    href: "https://github.com/Adhithya017",
    label: "GitHub",
  },
  {
    icon: FaLinkedin,
    href: "https://linkedin.com/in/adithyaacharya-",
    label: "LinkedIn",
  },
  {
    icon: Mail,
    href: "mailto:adithyaacharya054@gmail.com",
    label: "Email",
  },
];

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative" style={{ background: "var(--bg-secondary)" }}>
      {/* Animated gradient line */}
      <div
        className="h-px w-full"
        style={{ background: "var(--gradient-primary)" }}
      />

      <div className="max-w-1200 mx-auto px-6 py-12 flex flex-col items-center gap-8">
        {/* Social icons row */}
        <div className="flex items-center gap-5">
          {socialIcons.map((social) => {
            const Icon = social.icon;
            return (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="w-11 h-11 rounded-xl flex items-center justify-center transition-all duration-300"
                style={{
                  background: "rgba(255, 255, 255, 0.05)",
                  border: "1px solid rgba(255, 255, 255, 0.08)",
                }}
                whileHover={{
                  scale: 1.15,
                  borderColor: "rgba(0, 240, 255, 0.4)",
                  boxShadow: "0 0 20px rgba(0, 240, 255, 0.2)",
                }}
                whileTap={{ scale: 0.95 }}
              >
                <Icon size={20} style={{ color: "var(--text-secondary)" }} />
              </motion.a>
            );
          })}
        </div>

        {/* Copyright */}
        <p
          className="text-sm text-center"
          style={{
            fontFamily: "var(--font-heading)",
            color: "var(--text-muted)",
          }}
        >
          Designed &amp; Built with ❤️ by Adithya Acharya — © 2026
        </p>

        {/* Back to top button */}
        <motion.button
          onClick={scrollToTop}
          className="group flex items-center gap-2 px-5 py-2.5 rounded-xl transition-all duration-300 cursor-pointer"
          style={{
            background: "rgba(255, 255, 255, 0.05)",
            border: "1px solid rgba(255, 255, 255, 0.08)",
            color: "var(--text-secondary)",
            fontFamily: "var(--font-heading)",
            fontSize: "0.85rem",
            fontWeight: 600,
          }}
          whileHover={{
            borderColor: "rgba(0, 240, 255, 0.3)",
            boxShadow: "0 0 15px rgba(0, 240, 255, 0.15)",
          }}
          whileTap={{ scale: 0.95 }}
          aria-label="Back to top"
        >
          <motion.span
            className="inline-flex"
            whileHover={{ y: -3 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <Rocket size={18} style={{ color: "var(--accent-cyan)" }} />
          </motion.span>
          Back to Top
        </motion.button>
      </div>
    </footer>
  );
}
