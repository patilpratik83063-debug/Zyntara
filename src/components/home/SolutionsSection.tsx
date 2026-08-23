import React, { useState } from 'react';
import { SOLUTIONS_DATA } from '../../data/solutionsData';
import { SectionHeader } from '../common/SectionHeader';
import { Button } from '../common/Button';
import { ViewType, SolutionItem } from '../../types';
import { 
  Compass, 
  Users, 
  Cpu, 
  Database, 
  TrendingUp, 
  Layers, 
  ShieldCheck, 
  Activity, 
  ArrowRight, 
  CheckCircle2, 
  Sparkles,
  Zap,
  ChevronRight,
  Boxes,
  Network
} from 'lucide-react';

interface SolutionsSectionProps {
  onNavigate: (view: ViewType) => void;
}

export const SolutionsSection: React.FC<SolutionsSectionProps> = ({ onNavigate }) => {
  const [activeCategory, setActiveCategory] = useState<'all' | 'core' | 'advanced' | 'infrastructure'>('all');
  const [selectedSolutionId, setSelectedSolutionId] = useState<string>('ai-transformation');

  const filteredSolutions = activeCategory === 'all' 
    ? SOLUTIONS_DATA 
    : SOLUTIONS_DATA.filter(s => s.category === activeCategory);

  const activeSolution = SOLUTIONS_DATA.find(s => s.id === selectedSolutionId) || SOLUTIONS_DATA[0];

  return (
    <section id="solutions-section" className="py-28 px-4 sm:px-6 lg:px-8 bg-[#07090E] relative overflow-hidden border-t border-white/[0.08]">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          eyebrow="Enterprise Solution Portfolio"
          badge="8 Core Intelligence Systems"
          title="TRANSFORM HOW YOUR BUSINESS"
          highlightText="SELLS, OPERATES & DECIDES."
          description="From strategic architecture to autonomous workforce deployment, we engineer the core intelligence systems that power modern enterprise operations."
          align="center"
        />

        {/* Filter Tabs */}
        <div className="mt-12 flex justify-center">
          <div className="p-1.5 rounded-2xl bg-[#0D1018] border border-white/10 flex flex-wrap items-center gap-1 shadow-lg">
            {[
              { id: 'all', label: 'All 8 Solutions' },
              { id: 'core', label: 'Core Transformation' },
              { id: 'advanced', label: 'Revenue & Products' },
              { id: 'infrastructure', label: 'Infrastructure & Simulation' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveCategory(tab.id as any)}
                className={`px-4 py-2 rounded-xl text-xs font-mono font-medium tracking-wider transition-all cursor-pointer ${
                  activeCategory === tab.id
                    ? 'bg-gradient-to-r from-[#695CF6] to-[#5143E0] text-white shadow-[0_2px_12px_rgba(105,92,246,0.35)]'
                    : 'text-[#7E8491] hover:text-[#F5F3EE]'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Solutions Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredSolutions.map((solution) => {
            const isSelected = solution.id === selectedSolutionId;

            return (
              <div
                key={solution.id}
                onClick={() => setSelectedSolutionId(solution.id)}
                className={`p-7 rounded-3xl transition-all duration-300 flex flex-col justify-between border cursor-pointer group ${
                  isSelected
                    ? 'bg-[#181D2E] border-[#D6B77A] shadow-[0_8px_30px_rgba(214,183,122,0.15)] ring-1 ring-[#D6B77A]/30'
                    : 'bg-[#0D1018]/90 border-white/[0.06] hover:border-white/15 hover:bg-[#121622]'
                }`}
              >
                <div>
                  {/* Top Bar with Number and Status */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-mono text-xs font-bold px-2 py-0.5 rounded-md bg-[#141824] text-[#D6B77A] border border-[#D6B77A]/25">
                      {solution.number}
                    </span>
                    <span className="text-[10px] font-mono text-[#7E8491] uppercase">
                      {solution.category}
                    </span>
                  </div>

                  <h3 className="font-display font-bold text-lg text-[#F5F3EE] group-hover:text-white transition-colors">
                    {solution.title}
                  </h3>
                  <div className="text-xs font-mono text-[#8B7CFF] font-medium mt-1">
                    {solution.tagline}
                  </div>

                  <p className="text-xs text-[#B6BAC4] mt-3 leading-relaxed line-clamp-3">
                    {solution.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-white/[0.06] flex items-center justify-between">
                  <span className="text-xs font-mono text-[#59D6C4] line-clamp-1">
                    {solution.businessOutcomes[0]}
                  </span>
                  <ArrowRight className="w-4 h-4 text-[#7E8491] group-hover:text-[#D6B77A] group-hover:translate-x-1 transition-all shrink-0 ml-2" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Selected Solution Full Executive Specification Card (Section 39 Copy) */}
        <div className="mt-12 p-8 sm:p-10 rounded-3xl bg-[#0D1018]/95 border border-white/10 shadow-2xl backdrop-blur-xl space-y-6">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-6 border-b border-white/[0.08]">
            <div>
              <div className="flex items-center gap-2.5 mb-1.5">
                <span className="font-mono text-xs font-bold text-[#D6B77A] px-2 py-0.5 rounded-md bg-[#181D2A] border border-[#D6B77A]/30">
                  SOLUTION {activeSolution.number}
                </span>
                <span className="text-xs font-mono text-[#8B7CFF] uppercase font-semibold">
                  {activeSolution.tagline}
                </span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-display font-bold text-[#F5F3EE]">
                {activeSolution.title}: {activeSolution.headline}
              </h3>
            </div>

            <div className="flex items-center gap-3 shrink-0">
              <Button
                variant="primary"
                size="md"
                icon
                onClick={() => onNavigate('contact')}
              >
                {activeSolution.ctaText || 'Start Transformation'}
              </Button>
              <Button
                variant="outline"
                size="md"
                onClick={() => onNavigate('solutions')}
              >
                All Solutions
              </Button>
            </div>
          </div>

          <p className="text-base text-[#B6BAC4] leading-relaxed">
            {activeSolution.description}
          </p>

          {/* Section 39 Specific Details Matrix */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
            
            <div className="p-4 rounded-2xl bg-[#141824]/80 border border-white/[0.06] space-y-1.5">
              <span className="text-[10px] font-mono text-[#D6B77A] uppercase font-bold tracking-wider">
                What We Build & Automate:
              </span>
              <p className="text-xs text-[#E0E2EC] leading-relaxed">
                {activeSolution.whatWeBuild}
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-[#141824]/80 border border-white/[0.06] space-y-1.5">
              <span className="text-[10px] font-mono text-[#8B7CFF] uppercase font-bold tracking-wider">
                Where It Fits In Your Business:
              </span>
              <p className="text-xs text-[#E0E2EC] leading-relaxed">
                {activeSolution.whereItFits}
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-[#141824]/80 border border-white/[0.06] space-y-1.5">
              <span className="text-[10px] font-mono text-[#59D6C4] uppercase font-bold tracking-wider">
                AI Cognitive Capability:
              </span>
              <p className="text-xs text-[#E0E2EC] leading-relaxed">
                {activeSolution.aiCapability}
              </p>
            </div>

          </div>

          {/* Typical Use Cases & Connected Systems */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 pt-2">
            <div>
              <span className="text-xs font-mono text-[#7E8491] uppercase tracking-wider block mb-2.5">
                Typical Production Use Cases:
              </span>
              <div className="space-y-2">
                {activeSolution.typicalUseCases.map((uc, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs text-[#B6BAC4]">
                    <CheckCircle2 className="w-4 h-4 text-[#D6B77A] shrink-0 mt-0.5" />
                    <span>{uc}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <span className="text-xs font-mono text-[#7E8491] uppercase tracking-wider block mb-2.5">
                Connected Systems & Protocols:
              </span>
              <div className="flex flex-wrap gap-2">
                {activeSolution.connectedSystems.map((sys, idx) => (
                  <span key={idx} className="px-3 py-1 rounded-lg text-xs font-mono bg-[#181D2A] text-[#F5F3EE] border border-white/10">
                    {sys}
                  </span>
                ))}
              </div>
              <div className="mt-4 text-xs font-mono text-[#7E8491]">
                Estimated Deployment: <span className="text-[#8B7CFF]">{activeSolution.implementationTimeline}</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
