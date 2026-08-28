/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, Suspense, lazy, useEffect } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { ViewType } from './types';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { InteractiveCanvas } from './components/common/InteractiveCanvas';
import { CustomCursor } from './components/common/CustomCursor';
import { FloatingWhatsApp } from './components/common/FloatingWhatsApp';
import { initLenis, destroyLenis, smoothScrollTo } from './lib/lenis';

// Home Page Sections (Ordered exactly according to Section 44)
import { HeroSection } from './components/home/HeroSection';
import { ProblemSection } from './components/home/ProblemSection';
import { ZyntaraOneSection } from './components/home/ZyntaraOneSection';
import { BusinessAutomationSection } from './components/home/BusinessAutomationSection';
import { AutomationExamplesSection } from './components/home/AutomationExamplesSection';
import { AIWorkforceSection } from './components/home/AIWorkforceSection';
import { SolutionsSection } from './components/home/SolutionsSection';
import { ProcessSection } from './components/home/ProcessSection';
import { OutcomesSection } from './components/home/OutcomesSection';
import { WhyZyntaraSection } from './components/home/WhyZyntaraSection';
import { FAQSection } from './components/home/FAQSection';
import { FinalCTASection } from './components/home/FinalCTASection';

// Dedicated Views — code-split for fast first load
const ZyntaraOneView = lazy(() => import('./components/views/ZyntaraOneView').then(m => ({ default: m.ZyntaraOneView })));
const AutomationView = lazy(() => import('./components/views/AutomationView').then(m => ({ default: m.AutomationView })));
const SolutionsView = lazy(() => import('./components/views/SolutionsView').then(m => ({ default: m.SolutionsView })));
const IndustriesView = lazy(() => import('./components/views/IndustriesView').then(m => ({ default: m.IndustriesView })));
const TechnologyView = lazy(() => import('./components/views/TechnologyView').then(m => ({ default: m.TechnologyView })));
const CaseStudiesView = lazy(() => import('./components/views/CaseStudiesView').then(m => ({ default: m.CaseStudiesView })));
const InsightsView = lazy(() => import('./components/views/InsightsView').then(m => ({ default: m.InsightsView })));
const AboutView = lazy(() => import('./components/views/AboutView').then(m => ({ default: m.AboutView })));
const ContactView = lazy(() => import('./components/views/ContactView').then(m => ({ default: m.ContactView })));
const AssessmentModal = lazy(() => import('./components/views/AssessmentModal').then(m => ({ default: m.AssessmentModal })));

// Premium loading placeholder while a view chunk streams in
const ViewLoader: React.FC = () => (
  <div className="flex items-center justify-center min-h-[70vh]">
    <div className="flex flex-col items-center gap-4">
      <div className="relative w-12 h-12">
        <div className="absolute inset-0 rounded-full border-2 border-[#34D399]/20" />
        <div className="absolute inset-0 rounded-full border-2 border-transparent border-t-[#34D399] animate-spin" />
        <div className="absolute inset-2 rounded-full border-2 border-transparent border-b-[#D6B77A] animate-spin [animation-direction:reverse] animate-[spin_1.2s_linear_infinite_reverse]" />
      </div>
      <span className="font-mono text-xs tracking-[0.3em] text-[#7E8491] uppercase">
        Loading Intelligence
      </span>
    </div>
  </div>
);

const viewTransition = {
  initial: { opacity: 0, y: 24, filter: 'blur(8px)' },
  animate: { opacity: 1, y: 0, filter: 'blur(0px)' },
  exit: { opacity: 0, y: -16, filter: 'blur(8px)' },
  transition: { duration: 0.45, ease: [0.16, 1, 0.3, 1] as const },
};

interface ViewProps {
  onNavigate: (view: ViewType) => void;
  onOpenAssessment?: () => void;
}

export default function App() {
  const [activeView, setActiveView] = useState<ViewType>('home');
  const [isAssessmentOpen, setIsAssessmentOpen] = useState<boolean>(false);

  // Luxury smooth scrolling
  useEffect(() => {
    initLenis();
    return () => destroyLenis();
  }, []);

  // Scroll to top when view changes
  const handleNavigate = (view: ViewType) => {
    setActiveView(view);
    smoothScrollTo(0);
  };

  const handleOpenAssessment = () => {
    setIsAssessmentOpen(true);
  };

  const handleCloseAssessment = () => {
    setIsAssessmentOpen(false);
  };

  const renderView = () => {
    const viewProps: ViewProps = {
      onNavigate: handleNavigate,
      ...(activeView !== 'home' ? { onOpenAssessment: handleOpenAssessment } : {}),
    };

    switch (activeView) {
      case 'home':
        return (
          <Suspense fallback={null}>
            <motion.div key="home" {...viewTransition}>
              {/* 01 HERO */}
              <HeroSection onNavigate={handleNavigate} onOpenAssessment={handleOpenAssessment} />

              {/* 02 PROBLEM */}
              <ProblemSection onNavigate={handleNavigate} />

              {/* 03 ZYNTARA ONE™ ARCHITECTURE */}
              <ZyntaraOneSection onNavigate={handleNavigate} />

              {/* 04 AUTOMATION PLATFORM / HOW IT WORKS / 5 MATURITY STAGES */}
              <BusinessAutomationSection onNavigate={handleNavigate} />

              {/* 05 AUTOMATION EXAMPLES / WHATSAPP CHANNEL / BEFORE-AFTER */}
              <AutomationExamplesSection onNavigate={handleNavigate} />

              {/* 06 AI WORKFORCE & MULTI-AGENT SWARMS */}
              <AIWorkforceSection onNavigate={handleNavigate} />

              {/* 07 SERVICES & SOLUTIONS PORTFOLIO */}
              <SolutionsSection onNavigate={handleNavigate} />

              {/* 08 5-STAGE ENGAGEMENT PROCESS */}
              <ProcessSection onNavigate={handleNavigate} />

              {/* 09 BUSINESS OUTCOMES & REPEATED WORK AUDIT */}
              <OutcomesSection onNavigate={handleNavigate} />

              {/* 10 WHY ZYNTARA & DIFFERENTIATION */}
              <WhyZyntaraSection onNavigate={handleNavigate} />

              {/* 11 EXECUTIVE & PRACTICAL FAQ */}
              <FAQSection onNavigate={handleNavigate} />

              {/* 12 FINAL CTA */}
              <FinalCTASection onNavigate={handleNavigate} />
            </motion.div>
          </Suspense>
        );
      case 'zyntara-one':
        return (
          <Suspense fallback={<ViewLoader />}>
            <motion.div key="zyntara-one" {...viewTransition}>
              <ZyntaraOneView {...viewProps} />
            </motion.div>
          </Suspense>
        );
      case 'automation':
        return (
          <Suspense fallback={<ViewLoader />}>
            <motion.div key="automation" {...viewTransition}>
              <AutomationView {...viewProps} />
            </motion.div>
          </Suspense>
        );
      case 'solutions':
        return (
          <Suspense fallback={<ViewLoader />}>
            <motion.div key="solutions" {...viewTransition}>
              <SolutionsView {...viewProps} />
            </motion.div>
          </Suspense>
        );
      case 'industries':
        return (
          <Suspense fallback={<ViewLoader />}>
            <motion.div key="industries" {...viewTransition}>
              <IndustriesView {...viewProps} />
            </motion.div>
          </Suspense>
        );
      case 'technology':
        return (
          <Suspense fallback={<ViewLoader />}>
            <motion.div key="technology" {...viewTransition}>
              <TechnologyView {...viewProps} />
            </motion.div>
          </Suspense>
        );
      case 'case-studies':
        return (
          <Suspense fallback={<ViewLoader />}>
            <motion.div key="case-studies" {...viewTransition}>
              <CaseStudiesView {...viewProps} />
            </motion.div>
          </Suspense>
        );
      case 'insights':
        return (
          <Suspense fallback={<ViewLoader />}>
            <motion.div key="insights" {...viewTransition}>
              <InsightsView {...viewProps} />
            </motion.div>
          </Suspense>
        );
      case 'about':
        return (
          <Suspense fallback={<ViewLoader />}>
            <motion.div key="about" {...viewTransition}>
              <AboutView {...viewProps} />
            </motion.div>
          </Suspense>
        );
      case 'contact':
        return (
          <Suspense fallback={<ViewLoader />}>
            <motion.div key="contact" {...viewTransition}>
              <ContactView {...viewProps} />
            </motion.div>
          </Suspense>
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-[#0F1219] text-slate-100 selection:bg-[#10B981] selection:text-white relative overflow-x-hidden font-sans grain-overlay">
      {/* Background Interactive Mesh Nodes */}
      <InteractiveCanvas />

      {/* Subtle Custom Cursor Follower */}
      <CustomCursor />

      {/* Floating WhatsApp CTA */}
      <FloatingWhatsApp />

      {/* Global Navigation Bar */}
      <Navbar
        activeView={activeView}
        onNavigate={handleNavigate}
        onOpenAssessment={handleOpenAssessment}
      />

      {/* Main Content Router with view transitions */}
      <main className="relative z-10">
        <AnimatePresence mode="wait">{renderView()}</AnimatePresence>
      </main>

      {/* Global Footer */}
      <Footer onNavigate={handleNavigate} />

      {/* Assessment Interactive Modal */}
      <AnimatePresence>
        {isAssessmentOpen && (
          <Suspense fallback={null}>
            <AssessmentModal
              isOpen={isAssessmentOpen}
              onClose={handleCloseAssessment}
              onNavigate={handleNavigate}
            />
          </Suspense>
        )}
      </AnimatePresence>
    </div>
  );
}
