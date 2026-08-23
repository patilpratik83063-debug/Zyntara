import React, { useState } from 'react';
import { CAPABILITIES_DATA } from '../../data/capabilitiesData';
import { SectionHeader } from '../common/SectionHeader';
import { Button } from '../common/Button';
import { ZYNTARA_LOGO_ICON } from '../../assets/logo';
import { ViewType, CapabilityItem } from '../../types';
import { 
  Cpu, 
  Terminal, 
  CheckCircle2, 
  ShieldCheck, 
  ArrowRight, 
  Boxes, 
  Layers, 
  Search
} from 'lucide-react';

interface TechnologyViewProps {
  onNavigate: (view: ViewType) => void;
  onOpenAssessment: () => void;
}

export const TechnologyView: React.FC<TechnologyViewProps> = ({
  onNavigate,
  onOpenAssessment
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = [
    'All',
    'Transformation & Strategy',
    'Agentic & Autonomous',
    'Enterprise Intelligence',
    'Core Infrastructure',
    'Operations & Revenue'
  ];

  const filtered = CAPABILITIES_DATA.filter(item => {
    const matchesCat = selectedCategory === 'All' || item.category === selectedCategory;
    const matchesSearch = item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          item.technicalSpecs.some(s => s.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCat && matchesSearch;
  });

  return (
    <div className="pt-28 pb-24 px-4 sm:px-6 lg:px-8 bg-[#07090E] min-h-screen text-slate-100">
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Header with Official Logo Badge */}
        <div className="text-center max-w-4xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#121622] border border-[#2DD4BF]/30 text-xs font-mono text-[#2DD4BF] shadow-[0_0_15px_rgba(45, 212, 191,0.2)]">
            <img 
              src={ZYNTARA_LOGO_ICON} 
              alt="Zyntara" 
              referrerPolicy="no-referrer"
              className="w-4 h-4 rounded-full object-cover"
            />
            <span>ZYNTARA TECHNOLOGY • CAPABILITIES ARCHITECTURE</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-extrabold text-white tracking-tight">
            TECHNOLOGY & CAPABILITIES
          </h1>

          <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto">
            A comprehensive catalog of 22+ enterprise AI capabilities, agentic frameworks, private model architectures, and governance guardrails.
          </p>

          {/* Search & Category Filter */}
          <div className="pt-6 flex flex-col sm:flex-row items-center justify-center gap-3 max-w-2xl mx-auto">
            <div className="relative w-full sm:w-80">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
              <input
                type="text"
                placeholder="Search capabilities, RAG, agents, SAP..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-4 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-xs text-slate-100 placeholder-slate-500 focus:border-emerald-500 focus:outline-none"
              />
            </div>

            <div className="flex flex-wrap items-center justify-center gap-1">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3 py-2 rounded-lg text-xs font-mono transition-all ${
                    selectedCategory === cat
                      ? 'bg-emerald-600 text-white shadow-[0_0_10px_#10b981]'
                      : 'bg-slate-900/80 text-slate-400 border border-slate-800 hover:text-white'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Capabilities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((cap) => (
            <div
              key={cap.id}
              className="p-6 rounded-2xl bg-[#090C16] border border-slate-800 hover:border-emerald-400/40 transition-all duration-300 flex flex-col justify-between group shadow-lg"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-950 text-emerald-300 border border-emerald-500/30">
                    {cap.category}
                  </span>
                  <span className="text-[10px] font-mono text-emerald-400 font-bold">
                    {cap.enterpriseReadiness}
                  </span>
                </div>

                <h3 className="text-lg font-display font-bold text-white group-hover:text-emerald-200 transition-colors">
                  {cap.title}
                </h3>

                <p className="text-xs text-slate-300 mt-2 leading-relaxed">
                  {cap.description}
                </p>

                {/* Technical Specs List */}
                <div className="mt-4 pt-3 border-t border-slate-800/80 space-y-1.5">
                  <div className="text-[10px] font-mono text-slate-500 uppercase">
                    Technical Specifications:
                  </div>
                  {cap.technicalSpecs.map((spec, sIdx) => (
                    <div key={sIdx} className="text-xs text-slate-300 flex items-center gap-1.5 font-mono">
                      <span className="text-emerald-400">•</span>
                      <span>{spec}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-800/60 flex items-center justify-between">
                <span className="text-[11px] font-mono text-slate-500">
                  Zyntara One™ Integrated
                </span>
                <button
                  onClick={() => onNavigate('contact')}
                  className="text-xs font-mono text-emerald-400 hover:text-white flex items-center gap-1"
                >
                  <span>Scope</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Scoping Action Footer */}
        <div className="p-8 rounded-3xl bg-gradient-to-r from-emerald-950/60 via-slate-900 to-emerald-950/60 border border-emerald-400/30 text-center space-y-4">
          <h3 className="text-2xl font-display font-bold text-white">
            Need a custom enterprise architecture blueprint?
          </h3>
          <p className="text-sm text-slate-300 max-w-xl mx-auto">
            Our systems architects will evaluate your current infrastructure and provide a detailed feasibility matrix.
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
