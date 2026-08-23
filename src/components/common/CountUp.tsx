import React, { useEffect, useRef } from 'react';
import { animate, useInView, useReducedMotion } from 'motion/react';

interface CountUpProps {
  to: number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
  duration?: number;
  className?: string;
}

/**
 * CountUp — spring-accelerated number that counts when scrolled into view.
 */
export const CountUp: React.FC<CountUpProps> = ({
  to,
  prefix = '',
  suffix = '',
  decimals = 0,
  duration = 1.8,
  className = '',
}) => {
  const ref = useRef<HTMLSpanElement | null>(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    if (!inView || !ref.current) return;
    if (prefersReducedMotion) {
      ref.current.textContent = `${prefix}${to.toFixed(decimals)}${suffix}`;
      return;
    }

    const controls = animate(0, to, {
      duration,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (v) => {
        if (ref.current) {
          ref.current.textContent = `${prefix}${v.toFixed(decimals)}${suffix}`;
        }
      },
    });

    return () => controls.stop();
  }, [inView, to, prefix, suffix, decimals, duration, prefersReducedMotion]);

  return (
    <span ref={ref} className={className}>
      {`${prefix}${prefersReducedMotion ? to.toFixed(decimals) : '0'}${suffix}`}
    </span>
  );
};
