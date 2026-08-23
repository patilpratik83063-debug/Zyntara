import React from 'react';
import { motion, useReducedMotion } from 'motion/react';

interface AnimatedTextProps {
  text: string;
  className?: string;
  wordClassName?: string;
  delay?: number;
  stagger?: number;
  once?: boolean;
  as?: 'span' | 'h1' | 'h2' | 'h3' | 'p';
}

/**
 * AnimatedText — editorial word-by-word masked reveal.
 * Each word rises out of an overflow-hidden mask with a soft blur.
 */
export const AnimatedText: React.FC<AnimatedTextProps> = ({
  text,
  className = '',
  wordClassName = '',
  delay = 0,
  stagger = 0.055,
  once = true,
  as = 'span',
}) => {
  const prefersReducedMotion = useReducedMotion();
  const Comp = motion[as];

  if (prefersReducedMotion) {
    return <span className={className}>{text}</span>;
  }

  const words = text.split(' ');

  return (
    <Comp className={className} aria-label={text}>
      {words.map((word, i) => (
        <span
          key={i}
          className="inline-block overflow-hidden align-top pb-[0.14em] -mb-[0.14em]"
        >
          <motion.span
            className={`inline-block ${wordClassName}`}
            initial={{ y: '112%', rotate: 1.5, filter: 'blur(6px)' }}
            whileInView={{ y: '0%', rotate: 0, filter: 'blur(0px)' }}
            viewport={{ once, margin: '-60px' }}
            transition={{
              duration: 0.75,
              delay: delay + i * stagger,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            {word}
            {i < words.length - 1 ? '\u00A0' : ''}
          </motion.span>
        </span>
      ))}
    </Comp>
  );
};
