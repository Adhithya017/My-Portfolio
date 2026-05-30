'use client';

import { useState, useEffect, useCallback } from 'react';
import { motion, type Variants } from 'framer-motion';
import { Mail, Phone, ArrowDown, Download, Eye } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { personalInfo, socialLinks } from '@/data/portfolio';

/* ──────────────────────── animation variants ──────────────────────── */
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.3 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const },
  },
};

const letterVariants: Variants = {
  hidden: { opacity: 0, y: 50, rotateX: -90 },
  visible: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] as const },
  },
};

const photoVariants: Variants = {
  hidden: { opacity: 0, scale: 0.7, rotate: -8 },
  visible: {
    opacity: 1,
    scale: 1,
    rotate: 0,
    transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] as const, delay: 0.6 },
  },
};

/* ──────────────────────── social icon mapper ──────────────────────── */
const socialIconMap: Record<string, React.ReactNode> = {
  github: <FaGithub size={20} />,
  linkedin: <FaLinkedin size={20} />,
  mail: <Mail size={20} />,
  phone: <Phone size={20} />,
};

/* ──────────────────────── typewriter hook ──────────────────────── */
function useTypewriter(words: readonly string[], typingSpeed = 100, deletingSpeed = 60, pauseTime = 2000) {
  const [text, setText] = useState('');
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[wordIndex];

    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          setText(currentWord.slice(0, text.length + 1));
          if (text.length + 1 === currentWord.length) {
            setTimeout(() => setIsDeleting(true), pauseTime);
          }
        } else {
          setText(currentWord.slice(0, text.length - 1));
          if (text.length - 1 === 0) {
            setIsDeleting(false);
            setWordIndex((prev) => (prev + 1) % words.length);
          }
        }
      },
      isDeleting ? deletingSpeed : typingSpeed,
    );

    return () => clearTimeout(timeout);
  }, [text, wordIndex, isDeleting, words, typingSpeed, deletingSpeed, pauseTime]);

  return text;
}

/* ═══════════════════════  HERO SECTION  ═══════════════════════════ */
export default function HeroSection() {
  const headlineText = "I'm Adithya Acharya";
  const typedText = useTypewriter(personalInfo.subtitles, 90, 50, 1800);

  /* ── parallax tilt state ── */
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 20;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * -20;
    setTilt({ x, y });
  }, []);

  const handleMouseLeave = useCallback(() => {
    setTilt({ x: 0, y: 0 });
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* ambient glow blobs */}
      <div className="pointer-events-none absolute -top-32 -left-32 h-[500px] w-[500px] rounded-full bg-[var(--accent-cyan)] opacity-[0.07] blur-[120px]" />
      <div className="pointer-events-none absolute -bottom-32 -right-32 h-[500px] w-[500px] rounded-full bg-[var(--accent-violet)] opacity-[0.07] blur-[120px]" />

      <div className="section-container w-full">
        <div className="flex flex-col-reverse items-center gap-12 lg:flex-row lg:items-center lg:justify-between lg:gap-16">
          {/* ── LEFT: text content ── */}
          <motion.div
            className="flex flex-col items-center text-center lg:items-start lg:text-left lg:max-w-[55%]"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* eyebrow */}
            <motion.span
              variants={itemVariants}
              className="mb-4 inline-block rounded-full border border-[var(--border-glass)] bg-[var(--bg-glass)] px-5 py-1.5 text-sm font-medium text-[var(--accent-cyan)] backdrop-blur-md font-[family-name:var(--font-body)]"
            >
              Hello, World 👋
            </motion.span>

            {/* headline – letter stagger */}
            <motion.h1
              className="mb-4 text-3xl font-bold leading-tight tracking-tight whitespace-nowrap sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-[family-name:var(--font-heading)]"
              variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.035 } } }}
              initial="hidden"
              animate="visible"
              aria-label={headlineText}
            >
              {headlineText.split('').map((char, i) => (
                <motion.span
                  key={`${char}-${i}`}
                  variants={letterVariants}
                  className={`inline-block ${char === ' ' ? 'w-[0.3em]' : ''} ${
                    i >= 4 ? 'gradient-text' : 'text-[var(--text-primary)]'
                  }`}
                  style={{ display: 'inline-block' }}
                >
                  {char === ' ' ? '\u00A0' : char}
                </motion.span>
              ))}
            </motion.h1>

            {/* typewriter subtitle */}
            <motion.div
              variants={itemVariants}
              className="mb-3 flex h-10 items-center gap-1 text-xl font-medium sm:text-2xl font-[family-name:var(--font-heading)]"
            >
              <span className="text-[var(--accent-cyan)]">&lt;</span>
              <span className="text-[var(--text-primary)]">{typedText}</span>
              <span className="inline-block h-6 w-[3px] animate-pulse rounded-sm bg-[var(--accent-cyan)]" />
              <span className="text-[var(--accent-cyan)]">/&gt;</span>
            </motion.div>

            {/* tagline */}
            <motion.p
              variants={itemVariants}
              className="mb-8 max-w-md text-base leading-relaxed text-[var(--text-secondary)] font-[family-name:var(--font-body)]"
            >
              {personalInfo.tagline}
            </motion.p>

            {/* CTAs */}
            <motion.div variants={itemVariants} className="mb-8 flex flex-wrap gap-4">
              <button
                className="btn-primary"
                onClick={() => {
                  document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                <Eye size={18} />
                View My Work
              </button>
              <a
                href={personalInfo.resumePdf}
                download
                className="btn-secondary"
              >
                <Download size={18} />
                Download Resume
              </a>
            </motion.div>

            {/* social row */}
            <motion.div variants={itemVariants} className="flex gap-3">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target={link.icon === 'mail' || link.icon === 'phone' ? undefined : '_blank'}
                  rel="noopener noreferrer"
                  aria-label={link.name}
                  className="group relative flex h-11 w-11 items-center justify-center rounded-xl border border-[var(--border-glass)] bg-[var(--bg-glass)] text-[var(--text-secondary)] backdrop-blur-md transition-all duration-300 hover:scale-110 hover:border-[var(--accent-cyan)] hover:text-[var(--accent-cyan)] hover:shadow-[0_0_20px_var(--accent-cyan-glow)]"
                >
                  {socialIconMap[link.icon]}
                </a>
              ))}
            </motion.div>
          </motion.div>

          {/* ── RIGHT: photo container ── */}
          <motion.div
            className="relative flex items-center justify-center"
            variants={photoVariants}
            initial="hidden"
            animate="visible"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
          >
            {/* 3d mount point (for future Three.js scene) */}
            <div id="hero-3d-container" className="absolute inset-0 pointer-events-none" />

            {/* rotating gradient ring */}
            <div className="absolute h-[300px] w-[300px] sm:h-[360px] sm:w-[360px] lg:h-[420px] lg:w-[420px] animate-[spin_8s_linear_infinite] rounded-full bg-[conic-gradient(from_0deg,var(--accent-cyan),var(--accent-violet),var(--accent-magenta),var(--accent-cyan))] opacity-60 blur-[2px]" />

            {/* photo wrapper with parallax tilt */}
            <div
              className="animate-float relative z-10"
              style={{
                transform: `perspective(800px) rotateY(${tilt.x}deg) rotateX(${tilt.y}deg)`,
                transition: 'transform 0.15s ease-out',
              }}
            >
              {/* clip-path hexagonal container */}
              <div className="relative h-[270px] w-[270px] sm:h-[330px] sm:w-[330px] lg:h-[380px] lg:w-[380px] overflow-hidden rounded-full border-4 border-[rgba(0,240,255,0.25)] shadow-[0_0_40px_var(--accent-cyan-glow)]">
                <img
                  src="/profile.jpg"
                  alt="Adithya Acharya"
                  className="h-full w-full object-cover"
                  loading="eager"
                />
                {/* inner overlay shimmer */}
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-primary)] via-transparent to-transparent opacity-30" />
              </div>

              {/* decorative floating dots */}
              <div className="absolute -top-3 -right-3 h-4 w-4 rounded-full bg-[var(--accent-cyan)] shadow-[0_0_12px_var(--accent-cyan)] animate-pulse" />
              <div className="absolute -bottom-3 -left-3 h-3 w-3 rounded-full bg-[var(--accent-violet)] shadow-[0_0_12px_var(--accent-violet)] animate-pulse [animation-delay:1s]" />
              <div className="absolute top-1/2 -right-5 h-2 w-2 rounded-full bg-[var(--accent-magenta)] shadow-[0_0_12px_var(--accent-magenta)] animate-pulse [animation-delay:0.5s]" />
            </div>
          </motion.div>
        </div>
      </div>

      {/* ── scroll indicator ── */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 scroll-indicator"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
      >
        {/* mouse outline */}
        <div className="flex h-9 w-6 items-start justify-center rounded-full border-2 border-[var(--text-muted)] p-1">
          <motion.div
            className="h-2 w-1 rounded-full bg-[var(--accent-cyan)]"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' as const }}
          />
        </div>
        <span className="text-[10px] uppercase tracking-[0.2em] text-[var(--text-muted)] font-[family-name:var(--font-body)]">
          Scroll
        </span>
        <ArrowDown size={14} className="text-[var(--text-muted)] animate-bounce" />
      </motion.div>
    </section>
  );
}
