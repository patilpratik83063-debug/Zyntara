import React, { useEffect, useRef, useState } from 'react';

export const CustomCursor: React.FC = () => {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [trailingPos, setTrailingPos] = useState({ x: -100, y: -100 });
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  // Refs mirror the state so the animation loop never needs to re-subscribe.
  const posRef = useRef(position);
  const isVisibleRef = useRef(false);

  useEffect(() => {
    // Disable on touch devices
    if (window.matchMedia('(pointer: coarse)').matches) {
      return;
    }

    const handleMouseMove = (e: MouseEvent) => {
      posRef.current = { x: e.clientX, y: e.clientY };
      setPosition(posRef.current);

      if (!isVisibleRef.current) {
        isVisibleRef.current = true;
        setIsVisible(true);
      }

      // Check if hovering interactive target
      const target = e.target as HTMLElement | null;
      if (target) {
        const interactive = target.closest('button, a, input, select, textarea, [role="button"], .cursor-pointer, .interactive-node');
        setIsHovering(!!interactive);
      }
    };

    const handleMouseLeave = () => {
      isVisibleRef.current = false;
      setIsVisible(false);
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);

    // Smooth trailing loop — registered once; reads refs, never re-subscribes.
    let animationId: number;
    const updateTrailing = () => {
      if (isVisibleRef.current) {
        setTrailingPos(prev => ({
          x: prev.x + (posRef.current.x - prev.x) * 0.18,
          y: prev.y + (posRef.current.y - prev.y) * 0.18
        }));
      }
      animationId = requestAnimationFrame(updateTrailing);
    };
    animationId = requestAnimationFrame(updateTrailing);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      cancelAnimationFrame(animationId);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div className="hidden lg:block pointer-events-none fixed inset-0 z-50 overflow-hidden">
      {/* Precision center dot in champagne */}
      <div
        className="fixed w-2 h-2 rounded-full bg-[#D6B77A] -translate-x-1/2 -translate-y-1/2 shadow-[0_0_10px_rgba(214,183,122,0.8)] transition-transform duration-75"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          transform: `translate(-50%, -50%) scale(${isHovering ? 1.6 : 1})`
        }}
      />

      {/* Smooth outer aura ring with emerald/champagne blend */}
      <div
        className={`fixed rounded-full border transition-all duration-300 -translate-x-1/2 -translate-y-1/2 ${
          isHovering
            ? 'w-10 h-10 border-[#34D399]/60 bg-[#34D399]/10 shadow-[0_0_20px_rgba(52, 211, 153,0.25)]'
            : 'w-6 h-6 border-white/15 bg-transparent'
        }`}
        style={{
          left: `${trailingPos.x}px`,
          top: `${trailingPos.y}px`
        }}
      />
    </div>
  );
};
