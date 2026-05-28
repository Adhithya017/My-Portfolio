'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Code2 } from 'lucide-react';
import { skillCategories } from '@/data/portfolio';

/* ── react-icons imports ── */
import {
  SiPython,
  SiJavascript,
  SiPhp,
  SiReact,
  SiHtml5,
  SiCss,
  SiTailwindcss,
  SiSpringboot,
  SiNodedotjs,
  SiExpress,
  SiMysql,
  SiMongodb,
  SiGit,
  SiGithub,
  SiPostman,
  SiIntellijidea,
  SiApachemaven,
} from 'react-icons/si';
import { FaJava } from 'react-icons/fa';
import type { IconType } from 'react-icons';

/* ──────────────────────── icon + color map ──────────────────────── */
interface SkillMeta {
  icon: IconType;
  color: string;
}

const skillIconMap: Record<string, SkillMeta> = {
  Java:             { icon: FaJava,               color: '#f89820' },
  Python:           { icon: SiPython,             color: '#3776ab' },
  JavaScript:       { icon: SiJavascript,         color: '#f7df1e' },
  PHP:              { icon: SiPhp,                color: '#777bb4' },
  'React.js':       { icon: SiReact,              color: '#61dafb' },
  HTML5:            { icon: SiHtml5,              color: '#e34f26' },
  CSS3:             { icon: SiCss,                color: '#1572b6' },
  TailwindCSS:      { icon: SiTailwindcss,        color: '#06b6d4' },
  'Spring Boot':    { icon: SiSpringboot,         color: '#6db33f' },
  'Node.js':        { icon: SiNodedotjs,          color: '#339933' },
  'Express.js':     { icon: SiExpress,            color: '#ffffff' },
  MySQL:            { icon: SiMysql,              color: '#4479a1' },
  MongoDB:          { icon: SiMongodb,            color: '#47a248' },
  Git:              { icon: SiGit,                color: '#f05032' },
  GitHub:           { icon: SiGithub,             color: '#ffffff' },
  Postman:          { icon: SiPostman,            color: '#ff6c37' },
  'IntelliJ IDEA':  { icon: SiIntellijidea,       color: '#fe315d' },
  'VS Code':        { icon: Code2 as unknown as IconType, color: '#007acc' },
  Maven:            { icon: SiApachemaven,        color: '#c71a36' },
};

function getSkillIcon(name: string): { Icon: IconType | typeof Code2; color: string } {
  const meta = skillIconMap[name];
  if (meta) return { Icon: meta.icon, color: meta.color };
  return { Icon: Code2, color: '#00f0ff' };
}

/* ──────────────────────── animation variants ──────────────────────── */
const headingVariants = {
  hidden: { opacity: 0, y: -30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const },
  },
};

const gridContainerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.07, delayChildren: 0.1 },
  },
};

const skillCardVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.92 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] as const },
  },
  exit: {
    opacity: 0,
    y: -20,
    scale: 0.92,
    transition: { duration: 0.3 },
  },
};

/* ═══════════════════════  SKILLS SECTION  ═══════════════════════════ */
export default function SkillsSection() {
  const [activeTab, setActiveTab] = useState(0);

  const activeCategory = skillCategories[activeTab];

  return (
    <section id="skills" className="relative overflow-hidden">
      {/* ambient glow */}
      <div className="pointer-events-none absolute -top-40 right-0 h-[500px] w-[500px] rounded-full bg-[var(--accent-magenta)] opacity-[0.04] blur-[160px]" />

      <div className="section-container">
        {/* ── heading ── */}
        <motion.div
          className="mb-14 text-center"
          variants={headingVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
        >
          <span className="mb-3 inline-block rounded-full border border-[var(--border-glass)] bg-[var(--bg-glass)] px-4 py-1 text-xs uppercase tracking-[0.2em] text-[var(--accent-cyan)] backdrop-blur-md font-[family-name:var(--font-body)]">
            What I work with
          </span>
          <h2 className="section-heading gradient-text font-[family-name:var(--font-heading)]">
            Tech Arsenal
          </h2>
        </motion.div>

        {/* ── tab bar ── */}
        <motion.div
          className="mb-10 flex flex-wrap items-center justify-center gap-3"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
        >
          {skillCategories.map((cat, idx) => (
            <button
              key={cat.category}
              onClick={() => setActiveTab(idx)}
              className={`relative rounded-full px-5 py-2 text-sm font-medium transition-all duration-300 font-[family-name:var(--font-heading)] ${
                activeTab === idx
                  ? 'text-[#05060f] shadow-[0_0_20px_var(--accent-cyan-glow)]'
                  : 'border border-[var(--border-glass)] bg-[var(--bg-glass)] text-[var(--text-secondary)] backdrop-blur-md hover:border-[var(--accent-cyan)] hover:text-[var(--accent-cyan)]'
              }`}
            >
              {activeTab === idx && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute inset-0 rounded-full bg-gradient-to-r from-[var(--accent-cyan)] to-[var(--accent-violet)]"
                  transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                />
              )}
              <span className="relative z-10">{cat.category}</span>
            </button>
          ))}
        </motion.div>

        {/* ── skill cards grid ── */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory.category}
            className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4"
            variants={gridContainerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            {activeCategory.skills.map((skill) => {
              const { Icon, color } = getSkillIcon(skill);
              return (
                <motion.div
                  key={skill}
                  variants={skillCardVariants}
                  className="glass-card group relative flex flex-col items-center justify-center gap-3 overflow-hidden p-6 text-center transition-all duration-300 hover:-translate-y-2 hover:scale-[1.04] hover:shadow-[0_0_25px_var(--accent-cyan-glow)]"
                >
                  {/* hover glow */}
                  <div
                    className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                    style={{
                      background: `radial-gradient(circle at center, ${color}15 0%, transparent 70%)`,
                    }}
                  />

                  {/* icon */}
                  <div className="relative z-10 text-3xl transition-transform duration-300 group-hover:scale-110 sm:text-4xl">
                    <Icon style={{ color }} />
                  </div>

                  {/* name */}
                  <span className="relative z-10 text-sm font-medium text-[var(--text-secondary)] transition-colors duration-300 group-hover:text-[var(--text-primary)] font-[family-name:var(--font-body)]">
                    {skill}
                  </span>

                  {/* bottom line accent */}
                  <div
                    className="absolute bottom-0 left-0 h-[2px] w-full origin-left scale-x-0 transition-transform duration-500 group-hover:scale-x-100"
                    style={{ background: `linear-gradient(90deg, ${color}, transparent)` }}
                  />
                </motion.div>
              );
            })}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
