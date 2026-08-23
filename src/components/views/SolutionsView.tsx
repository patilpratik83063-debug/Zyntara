import React, { useState } from 'react';
import { SOLUTIONS_DATA } from '../../data/solutionsData';
import { SectionHeader } from '../common/SectionHeader';
import { Button } from '../common/Button';
import { ZENTARA_LOGO_ICON } from '../../assets/logo';
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
  Clock, 
  Sparkles,
  Boxes
} from 'lucide-react';

interface SolutionsViewProps {
  onNavigate: (view: ViewType) => void;
  onOpenAssessment: () => void;
}

export const SolutionsView: React.FC<SolutionsViewProps> = ({
  onNavigate,
  onOpenAssessment
}) => {
  const [activeCategory, setActiveCategory] = useState<'all' | 'core' | 'advanced' | 'infrastructure'>('all');
  const [selectedSolution, setSelectedSolution] = useState<SolutionItem>(SOLUTIONS_DATA[0]);

  const iconMap: Record<string, React.ReactNode> = {
    Compass: <Compass className="w-6 h-6" />,
    Users: <Users className="w-6 h-6" />,
    Cpu: <Cpu className="w-6 h-6" />,
    Database: <Database className="w-6 h-6" />,
    TrendingUp: <TrendingUp className="w-6 h-6" />,
    Layers: <Layers className="w-6 h-6" />,
    ShieldCheck: <ShieldCheck className="w-6 h-6" />,
    Activity: <Activity className="w-6 h-6" />
  };

  const filtered = activeCategory === 'all'
    ? SOLUTIONS_DATA
    : SOLUTIONS_DATA.filter(s => s.category === activeCategory);

  return (
    <div className="pt-28 pb-24 px-4 sm:px-6 lg:px-8 bg-[#07090E] min-h-screen text-slate-100">
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Header with Official Logo Badge */}
        <div className="text-center max-w-4xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#121622] border border-[#59D6C4]/30 text-xs font-mono text-[#59D6C4] shadow-[0_0_15px_rgba(89,214,196,0.2)]">
            <img 
              src={ZENTARA_LOGO_ICON} 
              alt="Zentara" 
              referrerPolicy="no-referrer"
              className="w-4 h-4 rounded-full object-cover"
            />
            <span>ZENTARA TECHNOLOGY • ENTERPRISE SOLUTIONS DIRECTORY</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-extrabold text-white tracking-tight">
            INTELLIGENT BUSINESS SYSTEMS
          </h1>

          <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto">
            Comprehensive enterprise AI transformation systems designed to integrate directly with your systems of record and unlock compounding operational leverage.
          </p>

          {/* Filter Pills */}
          <div className="pt-4 flex justify-center">
            <div className="p-1 rounded-xl bg-slate-900/90 border border-slate-800 flex flex-wrap items-center gap-1">
              {[
                { id: 'all', label: 'All Solutions (8)' },
                { id: 'core', label: 'Core Transformation' },
                { id: 'advanced', label: 'Revenue & Products' },
                { id: 'infrastructure', label: 'Core & Digital Twin' }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveCategory(tab.id as any)}
                  className={`px-4 py-2 rounded-lg text-xs font-mono font-medium tracking-wider transition-all ${
                    activeCategory === tab.id
                      ? 'bg-blue-600 text-white shadow-[0_0_12px_rgba(0,102,255,0.4)]'
                      : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Master Solutions Catalog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filtered.map((sol) => (
            <div
              key={sol.id}
              className="p-8 rounded-3xl bg-[#090C16] border border-slate-800 hover:border-cyan-400/40 transition-all duration-300 flex flex-col justify-between group shadow-xl"
            >
              <div className="space-y-6">
                {/* Card Header */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-xs font-bold px-3 py-1 rounded bg-blue-600 text-white">
                      {sol.number}
                    </span>
                    <div>
                      <h3 className="text-2xl font-display font-bold text-white group-hover:text-cyan-200 transition-colors">
                        {sol.title}
                      </h3>
                      <div className="text-xs font-mono text-cyan-400">
                        {sol.tagline}
                      </div>
                    </div>
                  </div>

                  <div className="w-12 h-12 rounded-2xl bg-blue-950/80 border border-blue-500/30 text-cyan-400 flex items-center justify-center group-hover:scale-110 transition-transform">
                    {iconMap[sol.iconName] || <Cpu className="w-6 h-6" />}
                  </div>
                </div>

                <p className="text-sm text-slate-300 leading-relaxed">
                  {sol.description}
                </p>

                {/* Capabilities */}
                <div className="space-y-2">
                  <div className="text-xs font-mono text-slate-400 uppercase tracking-wider">
                    Core Architectural Capabilities:
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {sol.capabilities.map((cap, i) => (
                      <div key={i} className="text-xs text-slate-300 flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                        <span>{cap}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Business Outcomes */}
                <div className="p-4 rounded-xl bg-blue-950/30 border border-blue-500/20 space-y-1.5">
                  <div className="text-xs font-mono text-cyan-400 uppercase font-semibold">
                    Measurable Enterprise Outcomes:
                  </div>
                  {sol.businessOutcomes.map((out, i) => (
                    <div key={i} className="text-xs text-slate-200 flex items-start gap-2">
                      <span className="text-cyan-400">•</span>
                      <span>{out}</span>
                    </div>
                  ))}
                </div>

                {/* Architecture Layers */}
                <div className="flex flex-wrap items-center gap-1.5">
                  <span className="text-[11px] font-mono text-slate-500 mr-1">Layers:</span>
                  {sol.architectureLayers.map((l, i) => (
                    <span key={i} className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-900 text-cyan-300 border border-slate-800">
                      {l}
                    </span>
                  ))}
                </div>
              </div>

              {/* Card Footer */}
              <div className="mt-8 pt-4 border-t border-slate-800/80 flex items-center justify-between">
                <div className="flex items-center gap-1.5 text-xs font-mono text-slate-400">
                  <Clock className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Timeline: {sol.implementationTimeline}</span>
                </div>

                <Button
                  variant="outline"
                  size="sm"
                  icon
                  onClick={() => onNavigate('contact')}
                >
                  Scope Solution
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Scoping CTA */}
        <div className="p-8 rounded-3xl bg-gradient-to-r from-blue-950/60 via-slate-900 to-blue-950/60 border border-cyan-400/30 text-center space-y-4">
          <h3 className="text-2xl font-display font-bold text-white">
            Unify multiple business solutions under Zyntara One™
          </h3>
          <p className="text-sm text-slate-300 max-w-xl mx-auto">
            Our enterprise architects will structure a phased transformation roadmap customized to your technology environment.
          </p>
          <div className="flex justify-center gap-3">
            <Button
              variant="glow"
              size="md"
              icon
              onClick={() => onNavigate('contact')}
            >
              Start Your AI Transformation
            </Button>
          </div>
        </div>

      </div>
    </div>
  );
};
