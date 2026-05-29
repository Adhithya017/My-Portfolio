'use client';

import { useRef, useState, useCallback } from 'react';
import { motion, useInView } from 'framer-motion';
import { ExternalLink, FolderGit2 } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
import { projects } from '@/data/portfolio';

const sectionVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const headingVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as const },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 60, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const },
  },
};

const bulletVariants = {
  hidden: { opacity: 0, x: -12 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.35, ease: 'easeOut' as const },
  },
};

const chipVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.3, ease: 'easeOut' as const },
  },
};

function ProjectCard({
  project,
  index,
}: {
  project: (typeof projects)[number];
  index: number;
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(cardRef, { once: true, margin: '-60px' });
  const [tilt, setTilt] = useState({ rotateX: 0, rotateY: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (!cardRef.current) return;
      const rect = cardRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const rotateX = ((y - centerY) / centerY) * -8;
      const rotateY = ((x - centerX) / centerX) * 8;
      setTilt({ rotateX, rotateY });
    },
    []
  );

  const handleMouseEnter = useCallback(() => {
    setIsHovered(true);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setIsHovered(false);
    setTilt({ rotateX: 0, rotateY: 0 });
  }, []);

  return (
    <motion.div
      ref={cardRef}
      variants={cardVariants}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        perspective: '1000px',
      }}
    >
      <div
        className="glass-card gradient-border relative overflow-hidden h-full flex flex-col"
        style={{
          transform: `rotateX(${tilt.rotateX}deg) rotateY(${tilt.rotateY}deg) translateY(${isHovered ? -8 : 0}px)`,
          transition: 'transform 0.2s ease-out, box-shadow 0.3s ease',
          transformStyle: 'preserve-3d',
          boxShadow: isHovered
            ? '0 0 30px rgba(0, 240, 255, 0.12), 0 20px 60px rgba(0, 0, 0, 0.4)'
            : '0 0 0 transparent',
        }}
      >
        {/* Top gradient accent bar */}
        <div className="h-[3px] w-full bg-gradient-to-r from-[var(--accent-cyan)] via-[var(--accent-violet)] to-[var(--accent-magenta)]" />

        <div className="p-6 lg:p-8 flex flex-col flex-1">
          {/* Header */}
          <div className="flex items-start justify-between gap-3 mb-4">
            <div className="flex items-center gap-3">
              <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-[rgba(139,92,246,0.1)] border border-[rgba(139,92,246,0.2)] flex items-center justify-center">
                <FolderGit2 size={18} className="text-[var(--accent-violet)]" />
              </div>
              <div>
                <h3
                  className="text-lg lg:text-xl font-bold tracking-tight"
                  style={{ fontFamily: 'var(--font-heading)' }}
                >
                  {project.title}
                </h3>
              </div>
            </div>
            <span className="flex-shrink-0 px-2.5 py-1 rounded-full text-[10px] font-semibold uppercase tracking-wider bg-[rgba(0,240,255,0.1)] text-[var(--accent-cyan)] border border-[rgba(0,240,255,0.15)]">
              {project.date}
            </span>
          </div>

          {/* Bullet points */}
          <motion.ul
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            variants={{
              visible: {
                transition: {
                  staggerChildren: 0.08,
                  delayChildren: 0.2 + index * 0.08,
                },
              },
            }}
            className="space-y-2 mb-5 flex-1"
          >
            {project.bullets.map((bullet, bIdx) => (
              <motion.li
                key={bIdx}
                variants={bulletVariants}
                className="flex items-start gap-2 text-sm text-[var(--text-secondary)] leading-relaxed"
              >
                <span className="mt-[7px] flex-shrink-0 w-1.5 h-1.5 rounded-full bg-[var(--accent-cyan)]" />
                <span>{bullet}</span>
              </motion.li>
            ))}
          </motion.ul>

          {/* Tech stack */}
          <motion.div
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            variants={{
              visible: {
                transition: {
                  staggerChildren: 0.05,
                  delayChildren: 0.4 + index * 0.08,
                },
              },
            }}
            className="flex flex-wrap gap-2 mb-6"
          >
            {project.tech.map((t) => (
              <motion.span key={t} variants={chipVariants} className="tech-chip">
                {t}
              </motion.span>
            ))}
          </motion.div>

          {/* GitHub button */}
          {project.github && (
            <div className="mt-auto relative z-10">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary inline-flex items-center gap-2 text-sm cursor-pointer"
              >
                <FaGithub size={16} />
                <span>View on GitHub</span>
                <ExternalLink size={14} />
              </a>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
}

export default function ProjectsSection() {
  return (
    <section id="projects" className="relative">
      <div className="section-container">
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {/* Heading */}
          <motion.div variants={headingVariants} className="text-center mb-16 lg:mb-20">
            <h2 className="section-heading gradient-text mb-4">Featured Projects</h2>
            <p className="text-[var(--text-muted)] max-w-lg mx-auto">
              Handpicked projects showcasing full-stack development, system design, and
              real-world problem solving.
            </p>
          </motion.div>

          {/* Project Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {projects.map((project, index) => (
              <ProjectCard key={project.title} project={project} index={index} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
