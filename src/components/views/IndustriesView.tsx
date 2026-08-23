import React, { useState } from 'react';
import { INDUSTRIES_DATA } from '../../data/industriesData';
import { SectionHeader } from '../common/SectionHeader';
import { Button } from '../common/Button';
import { ViewType, IndustryProfile } from '../../types';
import { 
  Building2, 
  Cpu, 
  CheckCircle2, 
  ArrowRight, 
  ShieldCheck, 
  TrendingUp, 
  Zap,
  Activity,
  Boxes
} from 'lucide-react';

interface IndustriesViewProps {
  onNavigate: (view: ViewType) => void;
  onOpenAssessment: () => void;
}

export const IndustriesView: React.FC<IndustriesViewProps> = ({
  onNavigate,
  onOpenAssessment
}) => {
  const [selectedIndustryId, setSelectedIndustryId] = useState<string>('manufacturing');

  const current = INDUSTRIES_DATA.find(i => i.id === selectedIndustryId) || INDUSTRIES_DATA[0];

  return (
    <div className="pt-28 pb-24 px-4 sm:px-6 lg:px-8 bg-[#07090E] min-h-screen text-slate-100">
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-950/70 border border-blue-500/30 text-xs font-mono text-cyan-300">
            <Building2 className="w-3.5 h-3.5" />
            <span>VERTICAL ENTERPRISE INTELLIGENCE</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-extrabold text-white tracking-tight">
            INDUSTRY ARCHITECTURES
          </h1>

          <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto">
            Domain-adapted AI operating systems engineered to address the specific compliance, operational latency, and data silos of your sector.
          </p>
        </div>

        {/* Industry Selector Tabs */}
        <div className="overflow-x-auto pb-2 scrollbar-thin">
          <div className="flex items-center gap-2 min-w-max mx-auto justify-center">
            {INDUSTRIES_DATA.map((ind) => {
              const isSelected = ind.id === selectedIndustryId;
              return (
                <button
                  key={ind.id}
                  onClick={() => setSelectedIndustryId(ind.id)}
                  className={`px-4 py-2.5 rounded-xl text-xs font-mono font-semibold tracking-wider transition-all duration-300 border cursor-pointer ${
                    isSelected
                      ? 'bg-blue-600 text-white border-cyan-300 shadow-[0_0_15px_#38bdf8] scale-105'
                      : 'bg-slate-900/80 text-slate-400 border-slate-800 hover:text-slate-200 hover:border-slate-700'
                  }`}
                >
                  {ind.name.toUpperCase()}
                </button>
              );
            })}
          </div>
        </div>

        {/* Active Industry Comprehensive Profile */}
        <div className="p-8 sm:p-10 rounded-3xl bg-[#090C16] border border-blue-500/30 shadow-2xl space-y-8">
          {/* Top Headline & Opportunity */}
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 border-b border-slate-800">
            <div>
              <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest">
                Target Industry Sector
              </span>
              <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-white mt-1">
                {current.name}
              </h2>
              <p className="text-sm text-cyan-300 mt-1 font-mono">
                {current.headline}
              </p>
            </div>

            <Button
              variant="glow"
              size="md"
              icon
              onClick={() => onNavigate('contact')}
            >
              Request {current.name} Blueprint
            </Button>
          </div>

          {/* Core Problem vs AI Opportunity */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-2xl bg-rose-950/20 border border-rose-500/30 space-y-2">
              <div className="text-xs font-mono text-rose-400 uppercase font-bold">
                Industry Challenge & Structural Latency:
              </div>
              <p className="text-sm text-slate-200 leading-relaxed">
                {current.industryProblem}
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-blue-950/30 border border-cyan-500/30 space-y-2">
              <div className="text-xs font-mono text-cyan-400 uppercase font-bold">
                Zyntara AI Transformation Opportunity:
              </div>
              <p className="text-sm text-slate-200 leading-relaxed">
                {current.aiOpportunity}
              </p>
            </div>
          </div>

          {/* Intelligence Layer Applications */}
          <div className="space-y-3">
            <h3 className="text-xs font-mono text-slate-400 uppercase tracking-wider">
              Domain Intelligence & Telemetry Ingestion:
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {current.intelligenceLayerUse.map((item, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 text-xs text-slate-300 flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Expected Outcomes Framework */}
          <div className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-4">
            <div className="text-xs font-mono text-cyan-400 uppercase font-semibold">
              Quantifiable Business Impact Metrics:
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {current.expectedOutcomes.map((out, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-slate-950 border border-slate-800/80">
                  <div className="text-xs font-mono text-emerald-400 font-bold">{out.metric}</div>
                  <p className="text-xs text-slate-300 mt-1">{out.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Architecture Components & Workforce Modules */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4 border-t border-slate-800">
            <div>
              <div className="text-xs font-mono text-slate-400 uppercase mb-2">
                Deployed Workforce Modules:
              </div>
              <div className="flex flex-wrap gap-2">
                {current.workforceModules.map((wm, i) => (
                  <span key={i} className="text-xs font-mono px-3 py-1 rounded bg-blue-950/60 text-cyan-300 border border-blue-500/30">
                    {wm}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <div className="text-xs font-mono text-slate-400 uppercase mb-2">
                Architecture Components:
              </div>
              <div className="flex flex-wrap gap-2">
                {current.architectureComponents.map((comp, i) => (
                  <span key={i} className="text-xs font-mono px-3 py-1 rounded bg-slate-900 text-slate-300 border border-slate-800">
                    {comp}
                  </span>
                ))}
              </div>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};
