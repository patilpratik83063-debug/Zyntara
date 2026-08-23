import React, { useState } from 'react';
import { CASE_STUDIES_DATA } from '../../data/caseStudiesData';
import { SectionHeader } from '../common/SectionHeader';
import { Button } from '../common/Button';
import { ViewType, CaseStudyItem } from '../../types';
import { 
  Building2, 
  TrendingUp, 
  CheckCircle2, 
  ArrowRight, 
  Layers, 
  Cpu, 
  Clock, 
  ShieldCheck,
  Quote
} from 'lucide-react';

interface CaseStudiesViewProps {
  onNavigate: (view: ViewType) => void;
  onOpenAssessment: () => void;
}

export const CaseStudiesView: React.FC<CaseStudiesViewProps> = ({
  onNavigate,
  onOpenAssessment
}) => {
  const [selectedCaseStudyId, setSelectedCaseStudyId] = useState<string>(CASE_STUDIES_DATA[0].id);

  const activeStudy = CASE_STUDIES_DATA.find(c => c.id === selectedCaseStudyId) || CASE_STUDIES_DATA[0];

  return (
    <div className="pt-28 pb-24 px-4 sm:px-6 lg:px-8 bg-[#07090E] min-h-screen text-slate-100">
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-950/70 border border-blue-500/30 text-xs font-mono text-cyan-300">
            <TrendingUp className="w-3.5 h-3.5" />
            <span>MEASURABLE ENTERPRISE IMPACT</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-extrabold text-white tracking-tight">
            TRANSFORMATION BLUEPRINTS
          </h1>

          <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto">
            Explore how enterprise organizations deployed Zyntara One™ to replace fragmented manual tools with cohesive, autonomous business intelligence.
          </p>
        </div>

        {/* Case Study Selector Bar */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {CASE_STUDIES_DATA.map((cs) => {
            const isSelected = cs.id === selectedCaseStudyId;
            return (
              <button
                key={cs.id}
                onClick={() => setSelectedCaseStudyId(cs.id)}
                className={`p-4 rounded-xl border text-left transition-all duration-300 cursor-pointer flex flex-col justify-between ${
                  isSelected
                    ? 'bg-blue-950/80 border-cyan-400 text-white shadow-[0_0_20px_rgba(0,210,255,0.25)]'
                    : 'bg-slate-900/60 border-slate-800 text-slate-400 hover:text-slate-200 hover:border-slate-700'
                }`}
              >
                <div>
                  <div className="text-[10px] font-mono uppercase text-cyan-400">
                    {cs.industry}
                  </div>
                  <div className="font-display font-bold text-xs mt-1 text-white line-clamp-2">
                    {cs.clientBadge}
                  </div>
                </div>
                <div className="text-[11px] font-mono text-emerald-400 mt-3 font-semibold">
                  {cs.verifiedOutcomes[0].label}
                </div>
              </button>
            );
          })}
        </div>

        {/* Detailed Case Study Card */}
        <div className="p-8 sm:p-12 rounded-3xl bg-[#090C16] border border-blue-500/30 shadow-2xl space-y-10">
          
          {/* Header Info */}
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-8 border-b border-slate-800">
            <div>
              <div className="flex items-center gap-3">
                <span className="text-xs font-mono px-3 py-1 rounded bg-blue-950 text-cyan-300 border border-blue-500/30 uppercase">
                  {activeStudy.industry}
                </span>
                <span className="text-xs font-mono text-slate-400">
                  {activeStudy.implementationDuration}
                </span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-display font-extrabold text-white mt-2">
                {activeStudy.clientType}
              </h2>
            </div>

            <Button
              variant="glow"
              size="md"
              icon
              onClick={() => onNavigate('contact')}
            >
              Discuss Similar Transformation
            </Button>
          </div>

          {/* Quantified Outcomes Metrics Bar */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {activeStudy.verifiedOutcomes.map((m, idx) => (
              <div key={idx} className="p-6 rounded-2xl bg-[#0B0E1B] border border-slate-800">
                <div className="text-lg font-display font-extrabold text-cyan-300">
                  {m.label}
                </div>
                <div className="text-xs text-slate-300 mt-2 leading-relaxed">
                  {m.description}
                </div>
              </div>
            ))}
          </div>

          {/* Problem vs Solution Architecture */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="p-6 sm:p-8 rounded-2xl bg-rose-950/15 border border-rose-500/30 space-y-3">
              <div className="text-xs font-mono text-rose-400 uppercase font-bold">
                Legacy State & Architectural Bottleneck:
              </div>
              <p className="text-sm text-slate-200 leading-relaxed">
                {activeStudy.businessChallenge}
              </p>
            </div>

            <div className="p-6 sm:p-8 rounded-2xl bg-blue-950/20 border border-cyan-500/30 space-y-3">
              <div className="text-xs font-mono text-cyan-400 uppercase font-bold">
                Zyntara One™ Architecture Deployed:
              </div>
              <p className="text-sm text-slate-200 leading-relaxed">
                {activeStudy.zyntaraApproach}
              </p>
            </div>
          </div>

          {/* Enterprise Architecture Topology Tags */}
          <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-3">
            <div className="text-xs font-mono text-slate-400 uppercase">
              Integrated Zyntara One™ Layers & Subsystems:
            </div>
            <div className="flex flex-wrap gap-2">
              {activeStudy.systemArchitecture.map((layer, idx) => (
                <span key={idx} className="px-3 py-1.5 rounded-lg text-xs font-mono bg-slate-950 text-cyan-300 border border-slate-800 flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" />
                  <span>{layer}</span>
                </span>
              ))}
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};

