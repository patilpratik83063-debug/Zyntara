import React from 'react';
import { motion } from 'motion/react';
import { ViewType } from '../../types';
import { Button } from '../common/Button';
import { 
  Sparkles, 
  ShieldCheck, 
  Clock, 
  CheckCircle2, 
  Lock
} from 'lucide-react';

interface FinalCTASectionProps {
  onNavigate: (view: ViewType) => void;
}

export const FinalCTASection: React.FC<FinalCTASectionProps> = ({ onNavigate }) => {
  const stagger = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.13, delayChildren: 0.05 } },
  };

  const item = {
    hidden: { opacity: 0, y: 30, filter: 'blur(8px)' },
    visible: {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const },
    },
  };

  return (
    <section className="py-32 px-4 sm:px-6 lg:px-8 bg-[#050506] border-t border-white/[0.08] relative overflow-hidden">
      
      {/* Cinematic Dual Atmospheric Glows */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.4 }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-gradient-to-r from-[#695CF6]/15 via-[#D6B77A]/10 to-[#8B7CFF]/15 blur-[160px] pointer-events-none rounded-full"
      />

      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-80px' }}
        className="max-w-5xl mx-auto relative z-10 text-center"
      >
        
        {/* Badge */}
        <motion.div variants={item} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#121622] border border-[#D6B77A]/30 text-xs font-mono text-[#D6B77A] mb-8 shadow-lg">
          <Sparkles className="w-3.5 h-3.5 text-[#D6B77A]" />
          <span>Enterprise AI Architecture & Business Automation</span>
        </motion.div>

        {/* Section 42 Headline & Narrative */}
        <motion.h2 variants={item} className="text-3xl sm:text-5xl lg:text-6xl font-display font-extrabold text-[#F5F3EE] tracking-tight leading-[1.1]">
          TRANSFORM HOW YOUR{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D6B77A] via-[#F5F3EE] to-[#8B7CFF] bg-[length:200%_auto] animate-gradient-pan">
            BUSINESS OPERATES.
          </span>
        </motion.h2>

        <motion.p variants={item} className="text-base sm:text-xl text-[#B6BAC4] mt-6 max-w-3xl mx-auto leading-relaxed">
          "Tell us what slows your team down. We'll design the automation and AI architecture to move it forward. Stop spending time on manual coordination. Let's build a business operating system that moves automatically."
        </motion.p>

        {/* Section 42 Buttons Group */}
        <motion.div variants={item} className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <Button
            variant="glow"
            size="lg"
            icon
            onClick={() => onNavigate('contact')}
          >
            Book an Architecture Consultation
          </Button>

          <Button
            variant="outline"
            size="lg"
            onClick={() => onNavigate('automation')}
          >
            See What We Can Automate
          </Button>

          <Button
            variant="ghost"
            size="lg"
            onClick={() => onNavigate('zyntara-one')}
          >
            Explore Zyntara One™ →
          </Button>
        </motion.div>

        {/* Enterprise Trust Micro-Badges */}
        <motion.div variants={item} className="mt-14 pt-8 border-t border-white/[0.08] flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-xs font-mono text-[#7E8491]">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-[#59D6C4]" />
            <span>Sovereign & Air-Gapped Security</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-[#D6B77A]" />
            <span>Full Source Code Ownership</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4 text-[#8B7CFF]" />
            <span>Production Deployment in Weeks</span>
          </div>
          <div className="flex items-center gap-2">
            <Lock className="w-4 h-4 text-[#59D6C4]" />
            <span>Zero Data Retention for Training</span>
          </div>
        </motion.div>

      </motion.div>
    </section>
  );
};
