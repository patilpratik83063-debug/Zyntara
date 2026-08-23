import React, { useState } from 'react';
import { SectionHeader } from '../common/SectionHeader';
import { Button } from '../common/Button';
import { ViewType } from '../../types';
import { 
  TrendingUp, 
  Cpu, 
  ArrowRight, 
  CheckCircle2, 
  Sparkles, 
  Activity, 
  Workflow, 
  ShieldCheck, 
  PhoneCall, 
  Users, 
  Layers, 
  Repeat
} from 'lucide-react';

interface AIRowSectionProps {
  onNavigate: (view: ViewType) => void;
}

export const AIRowSection: React.FC<AIRowSectionProps> = ({ onNavigate }) => {
  const [activeRevenueStage, setActiveRevenueStage] = useState<number>(0);

  const revenueJourney = [
    { label: 'LEAD', desc: 'Inbound signal capture & instant IP intent scoring' },
    { label: 'QUALIFY', desc: 'Sub-15s conversational qualification via voice/chat' },
    { label: 'CRM', desc: 'Autonomous enrichment & dynamic deal staging in Salesforce' },
    { label: 'SALES', desc: 'Auto-generated custom pitch decks & ROI calculators' },
    { label: 'FOLLOW-UP', desc: 'Multi-touch persistent personalized outreach orchestration' },
    { label: 'CONVERSION', desc: 'Autonomous RFP responses & CPQ proposal generation' },
    { label: 'SUPPORT', desc: '24/7 sub-300ms voice & omnichannel customer resolution' },
    { label: 'RETENTION', desc: 'Predictive churn preemption & automatic renewal brief' },
    { label: 'UPSELL', desc: 'Algorithmic expansion triggers conditioned on feature usage' }
  ];

  const operationsSteps = [
    { step: '01', title: 'Manual Process', desc: 'Legacy ticket created or email received' },
    { step: '02', title: 'Intelligent Workflow', desc: 'Cognitive parser identifies intent, entities & urgency' },
    { step: '03', title: 'AI Decision', desc: 'Domain model evaluates policy rules & optimal pathway' },
    { step: '04', title: 'Deterministic Automation', desc: 'State machine updates SAP, NetSuite, and databases' },
    { step: '05', title: 'Human Approval (HITL)', desc: 'Instant 1-click review only for high-value variances' },
    { step: '06', title: 'Final Execution', desc: 'Zero-error completion with auditable cryptographic log' }
  ];

  return (
    <section id="revenue-ops-section" className="py-28 px-4 sm:px-6 lg:px-8 bg-[#090B10] relative overflow-hidden border-t border-white/[0.08]">
      <div className="max-w-7xl mx-auto space-y-24">
        
        {/* Block A: AI Revenue Engine */}
        <div>
          <SectionHeader
            eyebrow="Commercial Acceleration"
            badge="Revenue Mesh"
            title="TURN AI INTO A"
            highlightText="GROWTH ENGINE."
            description="Accelerate sales pipeline velocity, eliminate lead decay, and power continuous customer expansion with autonomous revenue agents."
            align="center"
          />

          {/* Interactive 9-Stage Revenue Journey Flow */}
          <div className="mt-14 p-6 sm:p-8 rounded-3xl bg-[#0D1018]/95 border border-white/10 shadow-2xl backdrop-blur-xl">
            <div className="text-xs font-mono text-[#D6B77A] uppercase mb-4 text-center tracking-wider">
              End-to-End Autonomous Revenue Lifecycle (Click Stage to Inspect)
            </div>

            <div className="grid grid-cols-3 sm:grid-cols-5 lg:grid-cols-9 gap-2">
              {revenueJourney.map((stage, idx) => {
                const isActive = idx === activeRevenueStage;

                return (
                  <button
                    key={stage.label}
                    onClick={() => setActiveRevenueStage(idx)}
                    className={`p-3 rounded-2xl border text-center transition-all duration-300 flex flex-col items-center justify-center cursor-pointer ${
                      isActive
                        ? 'bg-gradient-to-b from-[#181D2E] to-[#121624] border-[#D6B77A] text-[#F5F3EE] shadow-[0_4px_20px_rgba(214,183,122,0.25)] scale-105'
                        : 'bg-[#121622]/60 border-white/[0.06] text-[#7E8491] hover:text-white hover:border-white/15'
                    }`}
                  >
                    <span className="font-mono text-[10px] opacity-70">0{idx + 1}</span>
                    <span className="font-display font-bold text-xs tracking-wider mt-1">{stage.label}</span>
                  </button>
                );
              })}
            </div>

            {/* Active Stage Detail Banner */}
            <div className="mt-6 p-5 rounded-2xl bg-[#141824]/90 border border-white/[0.08] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <div className="text-xs font-mono text-[#D6B77A] font-semibold uppercase">
                  STAGE {activeRevenueStage + 1}: {revenueJourney[activeRevenueStage].label}
                </div>
                <div className="text-sm text-[#F5F3EE] mt-0.5 font-normal">
                  {revenueJourney[activeRevenueStage].desc}
                </div>
              </div>

              <Button
                variant="primary"
                size="sm"
                icon
                onClick={() => onNavigate('contact')}
              >
                Deploy Revenue Agents
              </Button>
            </div>
          </div>
        </div>

        {/* Block B: Intelligent Operations Architecture */}
        <div>
          <SectionHeader
            eyebrow="Operational Mesh"
            badge="Process Transformation"
            title="SCALE OPERATIONS WITH"
            highlightText="ZERO LATENCY."
            description="Replace manual email chains, spreadsheet reconciliations, and ticket queues with deterministic AI workflows that execute in milliseconds."
            align="center"
          />

          {/* 6 Step Operations Progression */}
          <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {operationsSteps.map((op, idx) => (
              <div
                key={idx}
                className="p-7 rounded-3xl bg-[#0D1018]/90 border border-white/10 hover:border-[#34D399]/40 transition-all duration-300 flex flex-col justify-between group shadow-lg"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-mono text-xs font-bold text-[#D6B77A] px-2 py-0.5 rounded-md bg-[#181D2A] border border-[#D6B77A]/25">
                      STEP {op.step}
                    </span>
                    <span className="w-2 h-2 rounded-full bg-[#34D399]" />
                  </div>

                  <h3 className="text-lg font-display font-bold text-[#F5F3EE] group-hover:text-white transition-colors">
                    {op.title}
                  </h3>
                  <p className="text-xs text-[#B6BAC4] mt-2 leading-relaxed">
                    {op.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-white/[0.06] flex items-center justify-between text-[11px] font-mono text-[#7E8491]">
                  <span>Operational Standard</span>
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#2DD4BF]" />
                </div>
              </div>
            ))}
          </div>

          {/* Integration CTAs */}
          <div className="mt-12 flex justify-center">
            <Button
              variant="outline"
              size="lg"
              icon
              onClick={() => onNavigate('solutions')}
            >
              Explore Operations Solutions
            </Button>
          </div>
        </div>

      </div>
    </section>
  );
};
