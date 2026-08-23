import React, { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform, MotionStyle } from 'motion/react';

interface TiltCardProps {
  children: React.ReactNode;
  className?: string;
  maxTilt?: number;
  spotlight?: boolean;
}

/**
 * TiltCard — calm 3D tilt + cursor-follow emerald spotlight.
 * Reduced-motion & touch safe (no pointer effects).
 */
export const TiltCard: React.FC<TiltCardProps> = ({
  children,
  className = '',
  maxTilt = 3.5,
  spotlight = true,
}) => {
  const ref = useRef<HTMLDivElement | null>(null);

  // Normalised cursor position (0..1)
  const px = useMotionValue(0.5);
  const py = useMotionValue(0.5);
  const sx = useSpring(px, { stiffness: 180, damping: 24 });
  const sy = useSpring(py, { stiffness: 180, damping: 24 });

  const rotateX = useTransform(sy, [0, 1], [maxTilt, -maxTilt]);
  const rotateY = useTransform(sx, [0, 1], [-maxTilt, maxTilt]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    if (window.matchMedia('(pointer: coarse)').matches) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const rect = ref.current.getBoundingClientRect();
    px.set((e.clientX - rect.left) / rect.width);
    py.set((e.clientY - rect.top) / rect.height);
  };

  const handleMouseLeave = () => {
    px.set(0.5);
    py.set(0.5);
  };

  const mx = useTransform(px, (v) => `${v * 100}%`);
  const my = useTransform(py, (v) => `${v * 100}%`);

  const style: MotionStyle = {
    rotateX,
    rotateY,
    transformStyle: 'preserve-3d',
    perspective: 900,
    '--mx': mx as never,
    '--my': my as never,
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={style}
      className={`group relative h-full ${className}`}
    >
      {children}
      {spotlight && (
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 rounded-[inherit] opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{
            background:
              'radial-gradient(420px circle at var(--mx, 50%) var(--my, 50%), rgba(52, 211, 153, 0.07), transparent 65%)',
          }}
        />
      )}
    </motion.div>
  );
};
