"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function PageLoader() {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setLoading(false), 1500);
          return 100;
        }
        // Accelerating progress
        const increment = prev < 70 ? 2 : prev < 90 ? 1.5 : 1;
        return Math.min(prev + increment, 100);
      });
    }, 40);

    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          className="loader-container"
          exit={{ opacity: 0, scale: 1.1 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Animated AA Monogram */}
          <motion.svg
            width="80"
            height="80"
            viewBox="0 0 80 80"
            fill="none"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Outer pulsing ring */}
            <motion.circle
              cx="40"
              cy="40"
              r="38"
              stroke="url(#loaderGrad)"
              strokeWidth="1.5"
              fill="none"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1.5, ease: "easeInOut" as const }}
            />
            {/* First A */}
            <motion.path
              d="M24 56L32 24H36L44 56"
              stroke="url(#loaderGrad)"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              fill="none"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1, delay: 0.3, ease: "easeInOut" as const }}
            />
            <motion.line
              x1="28"
              y1="44"
              x2="40"
              y2="44"
              stroke="url(#loaderGrad)"
              strokeWidth="2"
              strokeLinecap="round"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 0.5, delay: 0.8, ease: "easeInOut" as const }}
            />
            {/* Second A */}
            <motion.path
              d="M38 56L46 24H50L58 56"
              stroke="url(#loaderGrad)"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              fill="none"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1, delay: 0.6, ease: "easeInOut" as const }}
            />
            <motion.line
              x1="42"
              y1="44"
              x2="54"
              y2="44"
              stroke="url(#loaderGrad)"
              strokeWidth="2"
              strokeLinecap="round"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 0.5, delay: 1.1, ease: "easeInOut" as const }}
            />
            <defs>
              <linearGradient
                id="loaderGrad"
                x1="0"
                y1="0"
                x2="80"
                y2="80"
              >
                <stop stopColor="#00f0ff" />
                <stop offset="0.5" stopColor="#8b5cf6" />
                <stop offset="1" stopColor="#ec4899" />
              </linearGradient>
            </defs>
          </motion.svg>

          {/* Progress Bar */}
          <div className="loader-progress mt-8">
            <motion.div
              className="loader-progress-bar"
              initial={{ width: "0%" }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.1 }}
            />
          </div>

          {/* Loading text */}
          <motion.p
            className="text-[#a1a1aa] text-sm mt-4 font-[family-name:var(--font-heading)] tracking-wider"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            {progress < 100 ? "INITIALIZING..." : "WELCOME TO MY PORTFOLIO"}
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
