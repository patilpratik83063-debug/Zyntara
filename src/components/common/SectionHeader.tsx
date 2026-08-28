import React from 'react';
import { motion } from 'motion/react';
import { AnimatedText } from './AnimatedText';

interface SectionHeaderProps {
  eyebrow?: string;
  badge?: string;
  title: string;
  highlightText?: string;
  description?: string;
  align?: 'left' | 'center';
  className?: string;
  theme?: 'dark' | 'light';
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  eyebrow,
  badge,
  title,
  highlightText,
  description,
  align = 'center',
  className = '',
  theme = 'dark'
}) => {
  const isCenter = align === 'center';
  const isLight = theme === 'light';

  const stagger = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.12, delayChildren: 0.05 } },
  };

  const item = {
    hidden: { opacity: 0, y: 26, filter: 'blur(8px)' },
    visible: {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const },
    },
  };

  const headingGradient = isLight
    ? 'bg-gradient-to-r from-[#059669] via-[#10B981] to-[#059669] bg-[length:200%_auto] animate-gradient-pan'
    : 'bg-gradient-to-r from-[#6EE7B7] via-[#34D399] to-[#D6B77A] bg-[length:200%_auto] animate-gradient-pan';

  return (
    <motion.div
      variants={stagger}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-70px' }}
      className={`flex flex-col ${isCenter ? 'items-center text-center' : 'items-start text-left'} max-w-3xl ${isCenter ? 'mx-auto' : ''} ${className}`}
    >
      {/* Eyebrow or Badge */}
      <motion.div variants={item} className="flex items-center gap-2.5 mb-3.5">
        {eyebrow && (
          <span className={`font-mono text-xs tracking-[0.2em] uppercase font-semibold ${isLight ? 'text-[#059669]' : 'text-[#D6B77A]'}`}>
            {eyebrow}
          </span>
        )}
        {eyebrow && <span className={`hidden sm:block w-10 h-px ${isLight ? 'bg-[#059669]/40' : 'bg-[#D6B77A]/40'}`} />}
        {badge && (
          <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-[10px] font-mono tracking-wider ${
            isLight
              ? 'bg-[#111216]/5 text-[#111216] border border-[#111216]/10 font-semibold'
              : 'bg-[#222A3A]/80 text-[#EBD9B3] border border-[#D6B77A]/25'
          }`}>
            {badge}
          </span>
        )}
      </motion.div>

      {/* Main Heading — word-by-word masked reveal */}
      <motion.h2
        variants={item}
        className={`text-3xl md:text-4xl lg:text-5xl font-display font-extrabold tracking-tight leading-[1.12] ${
          isLight ? 'text-[#111216]' : 'text-[#F5F3EE]'
        }`}
      >
        <AnimatedText text={title} stagger={0.045} delay={0.05} />
        {highlightText && (
          <>
            {' '}
            <AnimatedText
              text={highlightText}
              wordClassName={`text-transparent bg-clip-text ${headingGradient}`}
              stagger={0.045}
              delay={0.3}
            />
          </>
        )}
      </motion.h2>

      {/* Supporting Text */}
      {description && (
        <motion.p
          variants={item}
          className={`mt-4 text-base md:text-lg font-normal leading-relaxed max-w-2xl ${
            isLight ? 'text-[#4A4E5A]' : 'text-[#B6BAC4]'
          }`}
        >
          {description}
        </motion.p>
      )}
    </motion.div>
  );
};
