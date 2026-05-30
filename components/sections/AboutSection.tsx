'use client';

import { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { personalInfo, stats } from '@/data/portfolio';

/* ──────────────────────── animation variants ──────────────────────── */
const headingVariants = {
  hidden: { opacity: 0, x: -60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as const },
  },
};

const paragraphVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as const, delay: 0.2 },
  },
};

const cardContainerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15, delayChildren: 0.3 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const },
  },
};

/* ──────────────────────── highlight keywords ──────────────────────── */
const HIGHLIGHT_TERMS = ['Spring Boot', 'React.js', 'MySQL', 'REST APIs', 'clean architecture'];

function highlightSummary(text: string) {
  const regex = new RegExp(`(${HIGHLIGHT_TERMS.map((t) => t.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')).join('|')})`, 'g');
  const parts = text.split(regex);

  return parts.map((part, i) =>
    HIGHLIGHT_TERMS.includes(part) ? (
      <span key={i} className="text-[#00f0ff] font-semibold">
        {part}
      </span>
    ) : (
      <span key={i}>{part}</span>
    ),
  );
}

/* ──────────────────────── CountUp component ──────────────────────── */
function CountUp({
  target,
  decimals = 0,
  duration = 2000,
  inView,
}: {
  target: number;
  decimals?: number;
  duration?: number;
  inView: boolean;
}) {
  const [value, setValue] = useState(0);
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (!inView || hasAnimated.current) return;
    hasAnimated.current = true;

    const startTime = performance.now();
    const startValue = 0;

    function step(now: number) {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // ease-out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = startValue + (target - startValue) * eased;
      setValue(current);
      if (progress < 1) requestAnimationFrame(step);
    }

    requestAnimationFrame(step);
  }, [inView, target, duration]);

  return <>{value.toFixed(decimals)}</>;
}

/* ═══════════════════════  ABOUT SECTION  ═══════════════════════════ */
export default function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const sectionInView = useInView(sectionRef, { once: true, margin: '-100px' });
  const statsInView = useInView(statsRef, { once: true, margin: '-60px' });

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative overflow-hidden"
    >
      {/* ambient background glow */}
      <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[600px] rounded-full bg-[var(--accent-violet)] opacity-[0.04] blur-[150px]" />

      <div className="section-container">
        {/* ── heading ── */}
        <motion.div
          className="mb-16 text-center"
          variants={headingVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
        >
          <span className="mb-3 inline-block rounded-full border border-[var(--border-glass)] bg-[var(--bg-glass)] px-4 py-1 text-xs uppercase tracking-[0.2em] text-[var(--accent-cyan)] backdrop-blur-md font-[family-name:var(--font-body)]">
            Get to know me
          </span>
          <h2 className="section-heading gradient-text font-[family-name:var(--font-heading)]">
            About Me
          </h2>
        </motion.div>

        {/* ── two columns ── */}
        <div className="flex flex-col items-start gap-12 lg:flex-row lg:gap-16">
          {/* LEFT — summary */}
          <motion.div
            className="lg:w-1/2"
            variants={paragraphVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
          >
            <div className="glass-card p-8">
              <p className="text-base leading-[1.85] text-[var(--text-secondary)] font-[family-name:var(--font-body)] sm:text-lg">
                {highlightSummary(personalInfo.summary)}
              </p>

              {/* decorative line */}
              <div className="mt-6 h-[2px] w-20 rounded-full bg-gradient-to-r from-[var(--accent-cyan)] to-[var(--accent-violet)]" />
            </div>
          </motion.div>

          {/* RIGHT — stat cards */}
          <motion.div
            ref={statsRef}
            className="lg:w-1/2 w-full"
            variants={cardContainerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
          >
            <div className="grid grid-cols-2 gap-4 sm:gap-5">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  variants={cardVariants}
                  className="glass-card group relative overflow-hidden p-6 text-center sm:p-7"
                >
                  {/* glow overlay on hover */}
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-[var(--accent-cyan-glow)] to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                  {/* big number */}
                  <div className="relative z-10">
                    <span className="text-3xl font-bold tracking-tight text-[var(--text-primary)] sm:text-4xl font-[family-name:var(--font-heading)]">
                      <CountUp
                        target={stat.value}
                        decimals={stat.decimals}
                        inView={statsInView}
                        duration={1800 + index * 200}
                      />
                      {stat.suffix && (
                        <span className="text-[var(--accent-cyan)]">{stat.suffix}</span>
                      )}
                    </span>

                    {/* label */}
                    <p className="mt-2 text-sm text-[var(--text-secondary)] font-[family-name:var(--font-body)]">
                      {stat.label}
                    </p>
                  </div>

                  {/* bottom accent bar */}
                  <div className="absolute bottom-0 left-0 h-[2px] w-full bg-gradient-to-r from-transparent via-[var(--accent-cyan)] to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-60" />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
