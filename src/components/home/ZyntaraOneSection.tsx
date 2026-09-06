import React, { useState } from 'react';
import { ARCHITECTURE_LAYERS } from '../../data/architectureLayers';
import { SectionHeader } from '../common/SectionHeader';
import { Button } from '../common/Button';
import { ViewType, ArchitectureLayer } from '../../types';
import { 
  Layers, 
  Cpu, 
  Database, 
  Zap, 
  Activity, 
  ShieldCheck, 
  ArrowRight, 
  CheckCircle2, 
  Boxes, 
  Sparkles,
  Server,
  Network,
  Workflow,
  ChevronRight
} from 'lucide-react';

interface ZyntaraOneSectionProps {
  onNavigate: (view: ViewType) => void;
}

export const ZyntaraOneSection: React.FC<ZyntaraOneSectionProps> = ({ onNavigate }) => {
  const [selectedLayerId, setSelectedLayerId] = useState<string>('ai-agents');

  const currentLayer = ARCHITECTURE_LAYERS.find(l => l.id === selectedLayerId) || ARCHITECTURE_LAYERS[2];

  const crossLayerFlow = [
    { from: 'WhatsApp Workflow', to: 'CRM Pipeline', desc: 'Captures inquiry and qualifies lead' },
    { from: 'CRM Pipeline', to: 'Sales Process', desc: 'Routes to rep and books meeting' },
    { from: 'Sales Process', to: 'Finance & Invoicing', desc: 'Generates proposal and tracks payment' },
    { from: 'Finance & Invoicing', to: 'Executive Reporting', desc: 'Reconciles books and updates metrics' },
    { from: 'Executive Reporting', to: 'Enterprise Intelligence', desc: 'Compounds organizational knowledge' },
  ];

  return (
    <section id="zyntara-one-section" className="py-28 px-4 sm:px-6 lg:px-8 bg-[#07090F] relative overflow-hidden border-t border-white/[0.08]">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-[#34D399]/08 blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <SectionHeader
          eyebrow="Signature Enterprise Architecture"
          badge="Flagship Ecosystem"
          title="ZYNTARA ONE™"
          highlightText="ONE AI ARCHITECTURE. YOUR ENTIRE BUSINESS."
          description="Automation is one layer. Zyntara One connects them all. From lead capture to autonomous operations, it bridges data, intelligence, workflows and enterprise systems into a unified intelligent operating architecture."
          align="center"
        />

        {/* Narrative Connection Bridge */}
        <div className="mt-10 p-6 rounded-2xl bg-[#1A2030]/90 border border-white/[0.08] max-w-5xl mx-auto">
          <div className="text-center mb-4">
            <span className="text-sm font-tag text-[#D6B77A] uppercase tracking-widest font-semibold">
              How Zyntara One Unifies Workflows Across Departments:
            </span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-5 gap-2 text-center">
            {crossLayerFlow.map((flow, idx) => (
              <div key={idx} className="p-3 rounded-xl bg-[#222A3A]/70 border border-white/[0.04] flex flex-col justify-between">
                <div className="text-xs font-mono font-bold text-[#F5F3EE]">{flow.from}</div>
                <div className="my-1.5 flex justify-center">
                  <ArrowRight className="w-3.5 h-3.5 text-[#34D399]" />
                </div>
                <div className="text-[11px] font-mono text-[#D6B77A] font-semibold">{flow.to}</div>
                <div className="text-[10px] text-[#7E8491] mt-1 line-clamp-2">{flow.desc}</div>
              </div>
            ))}
          </div>
          <div className="mt-4 pt-3 border-t border-white/[0.06] text-center">
            <span className="text-xs font-mono text-[#B6BAC4] italic">
              "One business. One intelligent architecture."
            </span>
          </div>
        </div>

        {/* Interactive 8-Layer Architecture Explorer */}
        <div className="mt-14 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: The 8-Layer Interactive Architecture Stack (5 cols) */}
          <div className="lg:col-span-5 flex flex-col space-y-2.5">
            <div className="flex items-center justify-between px-2 mb-1">
              <span className="text-sm font-tag text-[#7E8491] uppercase tracking-wider">
                Full-Stack Architecture (Top to Bottom)
              </span>
              <span className="text-xs font-mono text-[#D6B77A]">
                Click Layer to Inspect
              </span>
            </div>

            {ARCHITECTURE_LAYERS.map((layer) => {
              const isSelected = layer.id === selectedLayerId;

              return (
                <button
                  key={layer.id}
                  type="button"
                  onClick={() => setSelectedLayerId(layer.id)}
                  className={`w-full p-4 rounded-2xl text-left transition-all duration-300 flex items-center justify-between border cursor-pointer group ${
                    isSelected
                      ? 'bg-gradient-to-r from-[#181D2E] to-[#101A14] border-[#D6B77A]/50 shadow-[0_8px_30px_rgba(214,183,122,0.15)] scale-[1.02]'
                      : 'bg-[#0E1119]/80 border-white/[0.06] hover:border-white/15 hover:bg-[#222A3A]'
                  }`}
                >
                  <div className="flex items-center gap-3.5">
                    <span className={`font-mono text-xs font-bold px-2 py-1 rounded-lg ${
                      isSelected 
                        ? 'bg-[#D6B77A] text-[#0F1219] shadow-[0_0_10px_rgba(214,183,122,0.6)]' 
                        : 'bg-[#262E40] text-[#7E8491]'
                    }`}>
                      {layer.number}
                    </span>
                    <div>
                      <div className={`font-display font-bold text-sm tracking-wide ${
                        isSelected ? 'text-[#F5F3EE]' : 'text-[#B6BAC4] group-hover:text-white'
                      }`}>
                        {layer.name}
                      </div>
                      <div className="text-xs text-[#7E8491] line-clamp-1">
                        {layer.subtitle}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <span className={`w-2 h-2 rounded-full ${
                      layer.status === 'active' 
                        ? 'bg-[#2DD4BF]' 
                        : layer.status === 'streaming' 
                        ? 'bg-[#D6B77A] animate-pulse' 
                        : 'bg-[#34D399]'
                    }`} />
                    <span className="text-xs font-tag text-[#7E8491] uppercase">
                      {layer.status}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right Column: Active Layer Live Inspection & Capabilities (7 cols) */}
          <div className="lg:col-span-7 p-6 sm:p-8 rounded-3xl bg-[#1A2030]/95 border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.6)] backdrop-blur-xl relative overflow-hidden space-y-6">
            
            {/* Subtle layer background glow */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-[#34D399]/08 rounded-full blur-[100px] pointer-events-none" />

            {/* Header info */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-white/[0.08]">
              <div>
                <div className="flex items-center gap-2.5 mb-1.5">
                  <span className="font-mono text-xs font-bold text-[#D6B77A] px-2 py-0.5 rounded-md bg-[#262E40] border border-[#D6B77A]/25">
                    {currentLayer.number}
                  </span>
                  <span className="font-tag text-sm text-[#34D399] uppercase tracking-wider">
                    {currentLayer.subtitle}
                  </span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-display font-bold text-[#F5F3EE]">
                  {currentLayer.name}
                </h3>
              </div>

              <div className="flex items-center gap-2 shrink-0">
                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-tag bg-[#222A3A] text-[#2DD4BF] border border-[#2DD4BF]/30">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#2DD4BF] animate-ping mr-1.5" />
                  Status: {currentLayer.status.toUpperCase()}
                </span>
              </div>
            </div>

            {/* Layer Description */}
            <p className="text-base text-[#B6BAC4] leading-relaxed">
              {currentLayer.description}
            </p>

            {/* Architectural Sub-Components List */}
            <div>
              <div className="text-sm font-tag text-[#D6B77A] uppercase tracking-wider mb-3">
                Core Architectural Sub-Systems & Pipelines:
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {currentLayer.technicalDetails.map((detail, idx) => (
                  <div 
                    key={idx}
                    className="p-3.5 rounded-xl bg-[#222A3A]/70 border border-white/[0.06] flex items-center gap-3"
                  >
                    <div className="w-2 h-2 rounded-full bg-[#34D399] shrink-0" />
                    <span className="text-xs font-mono text-[#E0E2EC]">{detail}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Enterprise Benefits Chips */}
            <div>
              <div className="text-sm font-tag text-[#7E8491] uppercase tracking-wider mb-3">
                Enterprise Business Benefits:
              </div>
              <div className="flex flex-wrap gap-2">
                {currentLayer.enterpriseBenefits.map((benefit, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 rounded-lg text-xs font-mono bg-[#262E40] text-[#F5F3EE] border border-white/10 flex items-center gap-1.5"
                  >
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#D6B77A]" />
                    <span>{benefit}</span>
                  </span>
                ))}
              </div>
            </div>

            {/* Connected Systems & Actions */}
            <div className="pt-4 border-t border-white/[0.08] flex flex-wrap items-center justify-between gap-4">
              <div className="text-xs font-mono text-[#7E8491] flex flex-wrap items-center gap-2 min-w-0">
                <span>Integrated Protocols:</span>
                <span className="text-[#34D399] break-words">{currentLayer.connectedSystems.join(', ')}</span>
              </div>

              <Button
                variant="primary"
                size="sm"
                icon
                onClick={() => onNavigate('zyntara-one')}
              >
                Deep Architecture Blueprint
              </Button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
