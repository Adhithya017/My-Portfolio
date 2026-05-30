'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Briefcase, MapPin, Calendar } from 'lucide-react';
import { experience } from '@/data/portfolio';

const sectionVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.3 },
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

const cardVariantsLeft = {
  hidden: { opacity: 0, x: -80, rotateY: 8 },
  visible: {
    opacity: 1,
    x: 0,
    rotateY: 0,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as const },
  },
};

const cardVariantsRight = {
  hidden: { opacity: 0, x: 80, rotateY: -8 },
  visible: {
    opacity: 1,
    x: 0,
    rotateY: 0,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as const },
  },
};

const dotVariants = {
  hidden: { scale: 0, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] as const },
  },
};

const bulletVariants = {
  hidden: { opacity: 0, x: -16 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.4, ease: 'easeOut' as const },
  },
};

function TimelineEntry({
  item,
  index,
}: {
  item: (typeof experience)[number];
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });
  const isLeft = index % 2 === 0;

  return (
    <div
      ref={ref}
      className="relative grid grid-cols-[32px_1fr] md:grid-cols-[1fr_40px_1fr] items-start gap-4 md:gap-8"
    >
      {/* Desktop left card or spacer */}
      <div className="hidden md:block">
        {isLeft ? (
          <motion.div
            variants={cardVariantsLeft}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            className="glass-card gradient-border p-6 lg:p-8"
          >
            <CardContent item={item} index={index} isInView={isInView} />
          </motion.div>
        ) : (
          <div />
        )}
      </div>

      {/* Center column — dot */}
      <div className="relative flex justify-center">
        <motion.div
          variants={dotVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="timeline-dot !relative !left-auto !translate-x-0 mt-2"
        />
      </div>

      {/* Desktop right card or spacer  &  Mobile card (always right) */}
      <div>
        {/* Desktop: show card only on right side when not left */}
        {!isLeft && (
          <motion.div
            variants={cardVariantsRight}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            className="hidden md:block glass-card gradient-border p-6 lg:p-8"
          >
            <CardContent item={item} index={index} isInView={isInView} />
          </motion.div>
        )}
        {isLeft && <div className="hidden md:block" />}

        {/* Mobile: always show card here */}
        <motion.div
          variants={cardVariantsRight}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="md:hidden glass-card gradient-border p-5"
        >
          <CardContent item={item} index={index} isInView={isInView} />
        </motion.div>
      </div>
    </div>
  );
}

function CardContent({
  item,
  index,
  isInView,
}: {
  item: (typeof experience)[number];
  index: number;
  isInView: boolean;
}) {
  return (
    <div>
      {/* Gradient top accent */}
      <div className="absolute top-0 left-0 right-0 h-[2px] rounded-t-[inherit] bg-gradient-to-r from-[var(--accent-cyan)] via-[var(--accent-violet)] to-[var(--accent-magenta)]" />

      <div className="flex items-center gap-3 mb-3">
        <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-[rgba(0,240,255,0.1)] border border-[rgba(0,240,255,0.2)] flex items-center justify-center">
          <Briefcase size={18} className="text-[var(--accent-cyan)]" />
        </div>
        <div>
          <h3
            className="text-lg lg:text-xl font-bold tracking-tight"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            {item.role}
          </h3>
          <p className="text-[var(--accent-cyan)] font-semibold text-sm">
            {item.company}
          </p>
        </div>
      </div>

      <div className="flex flex-wrap gap-x-4 gap-y-1 mb-4 text-xs text-[var(--text-muted)]">
        <span className="inline-flex items-center gap-1">
          <MapPin size={12} />
          {item.location}
        </span>
        <span className="inline-flex items-center gap-1">
          <Calendar size={12} />
          {item.duration}
        </span>
      </div>

      <motion.ul
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
        variants={{
          visible: {
            transition: { staggerChildren: 0.1, delayChildren: 0.3 + index * 0.1 },
          },
        }}
        className="space-y-2"
      >
        {item.bullets.map((bullet, bIdx) => (
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
    </div>
  );
}

export default function ExperienceSection() {
  const sectionRef = useRef<HTMLElement>(null);

  return (
    <section id="experience" ref={sectionRef} className="relative">
      <div className="section-container">
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {/* Heading */}
          <motion.div variants={headingVariants} className="text-center mb-16 lg:mb-20">
            <h2 className="section-heading gradient-text mb-4">Experience</h2>
            <p className="text-[var(--text-muted)] max-w-lg mx-auto">
              My professional journey and the impact I&apos;ve made along the way.
            </p>
          </motion.div>

          {/* Timeline */}
          <div className="relative">
            {/* Vertical glowing line */}
            <div className="timeline-line" />

            {/* Energy pulse dot */}
            <div className="energy-pulse" />

            {/* Timeline entries */}
            <div className="relative z-10 space-y-12 lg:space-y-16">
              {experience.map((item, index) => (
                <TimelineEntry key={index} item={item} index={index} />
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
