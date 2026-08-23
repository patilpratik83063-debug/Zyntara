import React from 'react';
import { motion } from 'motion/react';

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
          <span className={`font-mono text-xs tracking-[0.2em] uppercase font-semibold ${isLight ? 'text-[#5A48F5]' : 'text-[#D6B77A]'}`}>
            {eyebrow}
          </span>
        )}
        {eyebrow && <span className={`hidden sm:block w-10 h-px ${isLight ? 'bg-[#5A48F5]/40' : 'bg-[#D6B77A]/40'}`} />}
        {badge && (
          <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-[10px] font-mono tracking-wider ${
            isLight
              ? 'bg-[#111216]/5 text-[#111216] border border-[#111216]/10 font-semibold'
              : 'bg-[#141824]/80 text-[#EBD9B3] border border-[#D6B77A]/25'
          }`}>
            {badge}
          </span>
        )}
      </motion.div>

      {/* Main Heading with mathematical typography scale */}
      <motion.h2
        variants={item}
        className={`text-3xl md:text-4xl lg:text-5xl font-display font-extrabold tracking-tight leading-[1.12] ${
          isLight ? 'text-[#111216]' : 'text-[#F5F3EE]'
        }`}
      >
        {title}{' '}
        {highlightText && (
          <span className={`text-transparent bg-clip-text animate-gradient-pan bg-[length:200%_auto] ${
            isLight
              ? 'bg-gradient-to-r from-[#5A48F5] via-[#8B7CFF] to-[#5A48F5]'
              : 'bg-gradient-to-r from-[#C4BEFF] via-[#8B7CFF] to-[#D6B77A]'
          }`}>
            {highlightText}
          </span>
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
