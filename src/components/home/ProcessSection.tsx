import React, { useState } from 'react';
import { SectionHeader } from '../common/SectionHeader';
import { Button } from '../common/Button';
import { ViewType } from '../../types';
import { 
  Search, 
  Layers, 
  Cpu, 
  Rocket, 
  TrendingUp, 
  CheckCircle2, 
  ArrowRight, 
  Clock, 
  ShieldCheck, 
  Sparkles,
  Zap,
  HelpCircle
} from 'lucide-react';

interface ProcessSectionProps {
  onNavigate: (view: ViewType) => void;
}

export const ProcessSection: React.FC<ProcessSectionProps> = ({ onNavigate }) => {
  const [activeStep, setActiveStep] = useState<number>(0);

  const processSteps = [
    {
      step: '01',
      phase: 'STAGE 01',
      title: 'DISCOVER & MAP',
      tagline: 'Analyze the friction points in your current operations.',
      description: 'We audit your daily manual handoffs, repetitive communication channels (WhatsApp, email, CRM), spreadsheet workflows, and operational bottlenecks to calculate exact automation feasibility and business ROI.',
      deliverables: [
        'End-to-end process friction & latency mapping',
        'System integration & API readiness assessment',
        'Quantified business ROI & time-to-value projection',
        'Prioritized automation roadmap (Quick Wins → Core Architecture)'
      ],
      duration: 'Week 1 - 2',
      icon: Search
    },
    {
      step: '02',
      phase: 'STAGE 02',
      title: 'DESIGN THE ARCHITECTURE',
      tagline: 'Map the systems, data flow, automations, and AI capabilities.',
      description: 'We blueprint the end-to-end data flow, event triggers, error handling, database schemas, cognitive AI models, and human approval gates before writing a single line of production code.',
      deliverables: [
        'Zyntara One™ Architecture Technical Blueprint',
        'State machine logic & trigger-action specifications',
        'Security, role-based access & human approval gate definitions',
        'Integration sandbox environment provisioning'
      ],
      duration: 'Week 2 - 3',
      icon: Layers
    },
    {
      step: '03',
      phase: 'STAGE 03',
      title: 'BUILD & INTEGRATE',
      tagline: 'Connect the platforms, write the logic, and deploy the workflows.',
      description: 'Our engineering team connects your CRM, ERP, WhatsApp, databases, and custom software. We build the deterministic automations, train domain AI agents, and construct real-time telemetry dashboards.',
      deliverables: [
        'Production bi-directional API connectors & webhooks',
        'Specialized AI agent reasoning loops & prompt engineering',
        'Automated document extraction (OCR) & data pipelines',
        'Staging end-to-end integration testing & stress validation'
      ],
      duration: 'Week 3 - 6',
      icon: Cpu
    },
    {
      step: '04',
      phase: 'STAGE 04',
      title: 'GO LIVE & REFINE',
      tagline: 'Launch with human oversight, monitor execution, and optimize.',
      description: 'We deploy the system into live production with supervised human-in-the-loop controls. We monitor execution velocity, exception rates, and user adoption, continuously fine-tuning system prompts and routing rules.',
      deliverables: [
        'Supervised production launch with fallback safeguards',
        'Live execution telemetry & exception tracking dashboard',
        'Team training & executive handoff walkthroughs',
        'Prompt optimization & edge-case refinement'
      ],
      duration: 'Week 6 - 8',
      icon: Rocket
    },
    {
      step: '05',
      phase: 'STAGE 05',
      title: 'SCALE & EVOLVE',
      tagline: 'Expand from core workflows into end-to-end intelligent operations.',
      description: 'Once initial workflows prove high ROI and stability, we systematically connect adjacent departments, adding multi-agent swarms, predictive analytics, and enterprise intelligence layers.',
      deliverables: [
        'Cross-departmental workflow orchestration expansion',
        'GraphRAG Enterprise Intelligence Layer integration',
        'Predictive operational simulation & digital twin modeling',
        'Ongoing architectural support & SLA governance'
      ],
      duration: 'Ongoing Continuous Value',
      icon: TrendingUp
    }
  ];

  const current = processSteps[activeStep];
  const StepIcon = current.icon;

  return (
    <section id="process-section" className="py-28 px-4 sm:px-6 lg:px-8 bg-[#050506] border-t border-white/[0.08] relative overflow-hidden">
      {/* Ambient background lighting */}
      <div className="absolute top-1/3 right-1/4 w-[600px] h-[500px] bg-[#695CF6]/06 blur-[180px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        
        {/* Section 38: 5-STAGE ENGAGEMENT MODEL */}
        <SectionHeader
          eyebrow="The Zyntara Deployment Methodology"
          badge="From Friction to Production"
          title="A STRUCTURED PATH"
          highlightText="FROM MANUAL WORK TO AUTOMATED OPERATIONS."
          description="We take a disciplined, engineering-first approach to transforming business operations — minimizing organizational disruption while maximizing speed to business value."
          align="center"
        />

        {/* 5-Step Timeline Selector */}
        <div className="mt-14 grid grid-cols-2 sm:grid-cols-5 gap-2 max-w-5xl mx-auto">
          {processSteps.map((s, idx) => {
            const isSelected = activeStep === idx;
            return (
              <button
                key={idx}
                onClick={() => setActiveStep(idx)}
                className={`p-4 rounded-2xl text-left transition-all duration-300 border cursor-pointer ${
                  isSelected
                    ? 'bg-[#181D2E] border-[#D6B77A] shadow-[0_4px_20px_rgba(214,183,122,0.15)] ring-1 ring-[#D6B77A]/30'
                    : 'bg-[#0D1018] border-white/[0.06] hover:border-white/15 hover:bg-[#121622]'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className={`font-mono text-xs font-bold ${isSelected ? 'text-[#D6B77A]' : 'text-[#7E8491]'}`}>
                    {s.step}
                  </span>
                  <span className="text-[10px] font-mono text-[#7E8491]">{s.duration}</span>
                </div>
                <div className={`font-display font-bold text-xs sm:text-sm line-clamp-1 ${isSelected ? 'text-[#F5F3EE]' : 'text-[#B6BAC4]'}`}>
                  {s.title}
                </div>
              </button>
            );
          })}
        </div>

        {/* Detailed Active Stage Showcase */}
        <div className="mt-10 p-8 sm:p-12 rounded-3xl bg-[#0D1018]/95 border border-white/10 shadow-2xl backdrop-blur-xl max-w-5xl mx-auto space-y-8">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 border-b border-white/[0.08]">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-[#181D2A] border border-[#D6B77A]/30 flex items-center justify-center text-[#D6B77A] shrink-0">
                <StepIcon className="w-6 h-6" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="font-mono text-xs font-bold text-[#D6B77A]">
                    {current.phase} • TIMELINE: {current.duration}
                  </span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-display font-extrabold text-[#F5F3EE] mt-0.5">
                  {current.title}: {current.tagline}
                </h3>
              </div>
            </div>

            <Button
              variant="primary"
              size="md"
              icon
              onClick={() => onNavigate('contact')}
            >
              Start Stage 01 Audit
            </Button>
          </div>

          <p className="text-base text-[#B6BAC4] leading-relaxed">
            {current.description}
          </p>

          {/* Key Deliverables */}
          <div>
            <span className="text-xs font-mono text-[#7E8491] uppercase tracking-wider block mb-3">
              Core Technical Deliverables & Milestones:
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {current.deliverables.map((deliv, idx) => (
                <div key={idx} className="p-3.5 rounded-xl bg-[#141824] border border-white/[0.06] flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#59D6C4] shrink-0 mt-0.5" />
                  <span className="text-xs font-mono text-[#E0E2EC] leading-relaxed">
                    {deliv}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom Callout */}
          <div className="p-4 rounded-xl bg-[#121622] border-l-2 border-[#D6B77A] flex items-center justify-between text-xs font-mono text-[#E0E2EC]">
            <span>Every stage is backed by verifiable governance, rollback mechanisms, and complete code ownership.</span>
            <button
              onClick={() => onNavigate('about')}
              className="text-[#D6B77A] hover:underline flex items-center gap-1 cursor-pointer shrink-0 ml-4"
            >
              Learn More <ArrowRight className="w-3 h-3" />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
};
