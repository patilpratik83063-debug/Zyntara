import React from 'react';
import { motion, useReducedMotion, type Variants } from 'motion/react';

interface RevealProps {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  y?: number;
  x?: number;
  scale?: number;
  blur?: boolean;
  once?: boolean;
  className?: string;
  as?: 'div' | 'section' | 'span' | 'li' | 'p' | 'h2' | 'h3';
}

/**
 * Reveal — fade/slide/blur-in on scroll into view.
 * Honors the user's reduced-motion preference.
 */
export const Reveal: React.FC<RevealProps> = ({
  children,
  delay = 0,
  duration = 0.8,
  y = 28,
  x = 0,
  scale = 1,
  blur = true,
  once = true,
  className,
  as = 'div',
}) => {
  const prefersReducedMotion = useReducedMotion();
  const Comp = motion[as];

  return (
    <Comp
      className={className}
      initial={
        prefersReducedMotion
          ? { opacity: 1 }
          : {
              opacity: 0,
              y,
              x,
              scale,
              filter: blur ? 'blur(8px)' : 'blur(0px)',
            }
      }
      whileInView={
        prefersReducedMotion
          ? { opacity: 1 }
          : { opacity: 1, y: 0, x: 0, scale: 1, filter: 'blur(0px)' }
      }
      viewport={{ once, margin: '-80px' }}
      transition={{ duration, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </Comp>
  );
};

const containerVariants = (stagger: number): Variants => ({
  hidden: {},
  visible: {
    transition: { staggerChildren: stagger, delayChildren: 0.1 },
  },
});

const itemVariants = (y: number, blur: boolean): Variants => ({
  hidden: { opacity: 0, y, scale: 0.97, filter: blur ? 'blur(6px)' : 'blur(0px)' },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: 'blur(0px)',
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
  },
});

interface StaggerGroupProps {
  children: React.ReactNode;
  className?: string;
  stagger?: number;
  itemY?: number;
  blur?: boolean;
  once?: boolean;
  as?: 'div' | 'ul' | 'section';
}

/**
 * StaggerGroup — container that reveals its children one after another.
 * Children should each be wrapped in <StaggerItem>.
 */
export const StaggerGroup: React.FC<StaggerGroupProps> = ({
  children,
  className,
  stagger = 0.08,
  itemY = 24,
  blur = true,
  once = true,
  as = 'div',
}) => {
  const prefersReducedMotion = useReducedMotion();
  const Comp = motion[as];

  return (
    <Comp
      className={className}
      variants={containerVariants(stagger)}
      initial="hidden"
      whileInView={prefersReducedMotion ? undefined : 'visible'}
      viewport={{ once, margin: '-60px' }}
    >
      {children}
    </Comp>
  );
};

interface StaggerItemProps {
  children: React.ReactNode;
  className?: string;
  y?: number;
  blur?: boolean;
  as?: 'div' | 'li' | 'span' | 'p' | 'h3';
}

export const StaggerItem: React.FC<StaggerItemProps> = ({
  children,
  className,
  y = 24,
  blur = true,
  as = 'div',
}) => {
  const prefersReducedMotion = useReducedMotion();
  const Comp = motion[as];

  if (prefersReducedMotion) {
    return <Comp className={className}>{children}</Comp>;
  }

  return (
    <Comp className={className} variants={itemVariants(y, blur)}>
      {children}
    </Comp>
  );
};
