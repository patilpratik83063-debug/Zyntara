import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useSpring } from 'motion/react';
import { ViewType } from '../../types';
import { BrandLogo } from '../common/BrandLogo';
import { Button } from '../common/Button';
import { 
  Menu, 
  X, 
  Zap
} from 'lucide-react';
import { smoothScrollTo } from '../../lib/lenis';

interface NavbarProps {
  activeView: ViewType;
  onNavigate: (view: ViewType) => void;
  onOpenAssessment: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeView: currentView,
  onNavigate,
  onOpenAssessment
}) => {
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Smooth reading-progress bar (emerald → gold)
  const { scrollY, scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 30, mass: 0.4 });

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Auto-hide on scroll down, reveal on scroll up (calm luxury pattern)
  useEffect(() => {
    return scrollY.on('change', (latest) => {
      const prev = scrollY.getPrevious() ?? 0;
      const delta = latest - prev;
      if (Math.abs(delta) < 8) return;
      setHidden(delta > 0 && latest > 140);
    });
  }, [scrollY]);

  const navItems: { label: string; view: ViewType; highlight?: boolean; badge?: string }[] = [
    { label: 'Zyntara One™', view: 'zyntara-one', highlight: true },
    { label: 'Automation', view: 'automation', badge: 'L1-L5' },
    { label: 'Solutions', view: 'solutions' },
    { label: 'Industries', view: 'industries' },
    { label: 'Technology', view: 'technology' },
    { label: 'Case Studies', view: 'case-studies' },
    { label: 'Insights', view: 'insights' },
    { label: 'About', view: 'about' }
  ];

  const handleNavClick = (view: ViewType) => {
    onNavigate(view);
    setMobileMenuOpen(false);
    setHidden(false);
    smoothScrollTo(0);
  };

  return (
    <motion.header
      id="zyntara-navbar"
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: hidden ? '-100%' : 0, opacity: 1 }}
      transition={{
        y: { type: 'spring', stiffness: 300, damping: 32 },
        opacity: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
      }}
      className={`fixed top-0 left-0 right-0 z-40 transition-colors duration-500 ${
        scrolled
          ? 'bg-[#0F1219]/85 backdrop-blur-2xl border-b border-white/[0.08] py-3.5 shadow-[0_12px_40px_rgba(0,0,0,0.7)]'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Left: Brand Logo */}
        <BrandLogo 
          size="md" 
          onClick={() => handleNavClick('home')} 
        />

        {/* Center: Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center flex-wrap gap-1 xl:gap-2">
          {navItems.map((item) => {
            const isActive = currentView === item.view;
            return (
              <button
                key={item.view}
                onClick={() => handleNavClick(item.view)}
                className={`relative px-3.5 py-2 text-xs font-medium tracking-wider uppercase transition-all duration-200 rounded-lg cursor-pointer flex items-center gap-1.5 ${
                  isActive
                    ? 'text-[#F5F3EE] bg-white/[0.06] border border-white/10 shadow-[0_0_15px_rgba(52, 211, 153,0.15)]'
                    : 'text-[#B6BAC4] hover:text-[#F5F3EE] hover:bg-white/[0.03]'
                } ${item.highlight ? 'font-semibold text-[#D6B77A]' : ''}`}
              >
                <span>{item.label}</span>
                {item.badge && (
                  <span className="text-[9px] font-tag px-1.5 py-0.2 rounded bg-[#262E40] text-[#34D399] border border-[#34D399]/30 font-bold">
                    {item.badge}
                  </span>
                )}
                {isActive && (
                  <motion.span
                    layoutId="nav-active-indicator"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-0.5 bg-gradient-to-r from-[#34D399] to-[#D6B77A] rounded-full shadow-[0_0_8px_rgba(214,183,122,0.8)]"
                  />
                )}
              </button>
            );
          })}
        </nav>

        {/* Right: Quick Action & Assessment CTA */}
        <div className="hidden lg:flex items-center gap-3">
          <button
            onClick={onOpenAssessment}
            className="px-3 py-2 rounded-lg text-xs font-mono text-[#D6B77A] hover:text-[#F5F3EE] hover:bg-white/[0.04] transition-colors border border-[#D6B77A]/20 cursor-pointer flex items-center gap-1.5"
          >
            <Zap className="w-3.5 h-3.5 text-[#D6B77A]" />
            <span>Audit AI Readiness</span>
          </button>

          <Button
            variant="primary"
            size="sm"
            icon
            onClick={() => handleNavClick('contact')}
          >
            Start Transformation
          </Button>
        </div>

        {/* Reading progress bar — emerald → gold */}
        <motion.div
          style={{ scaleX: progress }}
          className="absolute bottom-0 left-0 right-0 h-[2px] origin-left bg-gradient-to-r from-[#34D399] via-[#2DD4BF] to-[#D6B77A] shadow-[0_0_10px_rgba(52,211,153,0.6)]"
        />

        {/* Mobile Hamburger Button */}
        <div className="flex lg:hidden items-center gap-2">
          <button
            onClick={onOpenAssessment}
            className="px-2.5 py-1.5 rounded-lg text-[10px] font-mono text-[#D6B77A] bg-[#1E2638] border border-[#D6B77A]/30"
          >
            Audit
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg bg-[#1E2638] text-[#F5F3EE] hover:bg-[#181E2E] border border-white/10 transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -12, filter: 'blur(6px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            exit={{ opacity: 0, y: -12, filter: 'blur(6px)' }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="lg:hidden fixed inset-x-0 top-[65px] bg-[#0F1219]/98 border-b border-white/10 backdrop-blur-2xl p-6 shadow-2xl max-h-[85vh] overflow-y-auto"
          >
            <div className="flex flex-col space-y-3">
              {navItems.map((item) => {
                const isActive = currentView === item.view;
                return (
                  <button
                    key={item.view}
                    onClick={() => handleNavClick(item.view)}
                    className={`w-full text-left px-4 py-3 rounded-xl text-sm font-medium transition-all flex items-center justify-between ${
                      isActive
                        ? 'bg-[#262E40] text-[#F5F3EE] border border-[#34D399]/30 font-semibold'
                        : 'text-[#B6BAC4] hover:bg-white/[0.04] hover:text-[#F5F3EE]'
                    }`}
                  >
                    <span className={item.highlight ? 'text-[#D6B77A] font-semibold' : ''}>
                      {item.label}
                    </span>
                    {item.badge && (
                      <span className="text-[10px] font-tag px-2 py-0.5 rounded bg-[#1E2638] text-[#34D399] border border-[#34D399]/30">
                        {item.badge}
                      </span>
                    )}
                  </button>
                );
              })}

              <div className="pt-4 mt-2 border-t border-white/10 flex flex-col gap-3">
                <Button
                  variant="primary"
                  size="md"
                  icon
                  className="w-full"
                  onClick={() => handleNavClick('contact')}
                >
                  Schedule Executive Strategy Session
                </Button>
                
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenAssessment();
                  }}
                  className="w-full py-3 rounded-xl text-xs font-mono text-center text-[#D6B77A] bg-[#1E2638] border border-[#D6B77A]/30"
                >
                  Calculate Enterprise AI Maturity Score
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};
