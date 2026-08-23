import Lenis from 'lenis';

let lenis: Lenis | null = null;

/**
 * Initialise Lenis smooth scrolling (calm luxury feel).
 * Falls back to native scroll for reduced-motion users.
 */
export function initLenis(): void {
  if (typeof window === 'undefined') return;
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  if (lenis) return;

  lenis = new Lenis({
    lerp: 0.09,
    wheelMultiplier: 1,
    smoothWheel: true,
    touchMultiplier: 1.4,
  });

  const raf = (time: number) => {
    lenis?.raf(time);
    requestAnimationFrame(raf);
  };
  requestAnimationFrame(raf);
}

export function destroyLenis(): void {
  lenis?.destroy();
  lenis = null;
}

/** Buttery programmatic scroll (falls back to native). */
export function smoothScrollTo(target: number | string, offset = 0): void {
  if (lenis) {
    lenis.scrollTo(target, { offset, duration: 1.2 });
  } else {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
