import React, { useState } from 'react';
import { SectionHeader } from '../common/SectionHeader';
import { Button } from '../common/Button';
import { ViewType } from '../../types';
import { 
  Zap, 
  Workflow, 
  Layers, 
  Cpu, 
  CheckCircle2, 
  ArrowRight, 
  Sparkles, 
  ShieldCheck,
  ChevronRight,
  Activity,
  Bot,
  Gauge
} from 'lucide-react';

interface BusinessAutomationSectionProps {
  onNavigate: (view: ViewType) => void;
}

export const BusinessAutomationSection: React.FC<BusinessAutomationSectionProps> = ({ onNavigate }) => {
  const [selectedLevel, setSelectedLevel] = useState<number>(3);

  const maturityLevels = [
    {
      level: 1,
      name: 'TASK AUTOMATION',
      tagline: 'Replace repetitive manual actions',
      description: 'Eliminates repetitive manual copy-pasting, data entry, basic form notifications, and isolated email alerts across single tools.',
      humanRole: 'Operator executes tasks manually; automation assists on single clicks',
      businessImpact: 'Saves 5-10 hours/week on routine administration',
      examples: ['Form-to-email alerts', 'Basic spreadsheet logging', 'Single-step notifications']
    },
    {
      level: 2,
      name: 'WORKFLOW AUTOMATION',
      tagline: 'Connect multiple steps into a process',
      description: 'Connects multiple disparate software tools (CRM, WhatsApp, payment gateways, calendar) so data flows automatically through the whole sequence.',
      humanRole: 'Supervisor initiates workflow; system executes multi-step handoffs',
      businessImpact: 'Removes handoff delays; synchronizes multi-department steps',
      examples: ['WhatsApp to CRM lead sync', 'Appointment booking + SMS reminders', 'Invoice generation on deal close']
    },
    {
      level: 3,
      name: 'INTELLIGENT AUTOMATION',
      tagline: 'Use AI to classify, understand, prioritize and recommend',
      description: 'Infuses cognitive models into workflows to understand unstructured customer messages, extract data from invoices and PDFs, and recommend next actions.',
      humanRole: 'Expert reviews AI-generated recommendations and approves edge cases',
      businessImpact: 'Processes messy unstructured inputs with 99%+ accuracy',
      examples: ['Document extraction & OCR', 'Support ticket intent classification', 'Lead qualification & scoring']
    },
    {
      level: 4,
      name: 'AI AGENTS',
      tagline: 'Let AI execute approved business workflows',
      description: 'Autonomous digital agents that can research information, reason through multi-step logic, call enterprise tools, update databases, and complete end-to-end roles.',
      humanRole: 'Manager sets objectives and guardrails; steps in only for sensitive exceptions',
      businessImpact: 'Augments team capacity without proportional headcount expansion',
      examples: ['AI Sales Development Rep', 'Autonomous Customer Support Agent', 'Procurement & Vendor Agent']
    },
    {
      level: 5,
      name: 'AUTONOMOUS OPERATIONS',
      tagline: 'Coordinate multiple systems and agents with human oversight',
      description: 'Full multi-agent departmental mesh integrated with core ERP/CRM, self-optimizing pipelines, auditable logs, and real-time executive decision support.',
      humanRole: 'Executive sets strategy, governance policies, and financial budgets',
      businessImpact: 'Entire business processes operate smoothly 24/7 at scale',
      examples: ['End-to-end revenue operations', 'Dynamic inventory & supply optimization', 'Self-reconciling financial workflows']
    }
  ];

  const currentLevelData = maturityLevels.find(m => m.level === selectedLevel) || maturityLevels[2];

  const transformationSequence = [
    { step: '01', title: 'TASK', desc: 'Single action executed' },
    { step: '02', title: 'WORKFLOW', desc: 'Multi-step process linked' },
    { step: '03', title: 'SYSTEM', desc: 'Cross-platform sync' },
    { step: '04', title: 'INTELLIGENCE', desc: 'AI context & decisions' },
    { step: '05', title: 'ACTION', desc: 'Autonomous outcome executed' },
  ];

  return (
    <section id="business-automation-section" className="py-28 px-4 sm:px-6 lg:px-8 bg-[#090B10] border-t border-white/[0.08] relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 right-1/4 w-[600px] h-[400px] bg-[#34D399]/06 blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <SectionHeader
          eyebrow="Business Process Transformation"
          badge="Beyond Simple Triggers"
          title="STOP AUTOMATING TASKS."
          highlightText="START TRANSFORMING HOW YOUR BUSINESS OPERATES."
          description="Automation is more than sending a message when a form is submitted. The real opportunity is connecting the entire workflow — from the first customer interaction to sales, operations, finance, support and reporting."
          align="center"
        />

        {/* Transformation Pipeline Highlight */}
        <div className="mt-12 p-6 rounded-2xl bg-[#1A2030] border border-white/10 max-w-4xl mx-auto shadow-xl">
          <div className="text-center mb-3">
            <span className="text-xs font-mono text-[#D6B77A] uppercase tracking-widest font-semibold">
              The Value Progression:
            </span>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
            {transformationSequence.map((item, idx) => (
              <div key={idx} className="p-3.5 rounded-xl bg-[#222A3A] border border-white/[0.06] flex flex-col items-center text-center">
                <span className="text-[10px] font-mono text-[#D6B77A] font-bold">STEP {item.step}</span>
                <span className="font-display font-extrabold text-sm text-[#F5F3EE] mt-0.5">{item.title}</span>
                <span className="text-[10px] text-[#7E8491] mt-1">{item.desc}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Business Explanation Card */}
        <div className="mt-10 p-8 rounded-3xl bg-gradient-to-r from-[#121624] via-[#0E111A] to-[#121624] border border-[#34D399]/30 shadow-2xl max-w-5xl mx-auto text-left relative overflow-hidden">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-[#34D399]/20 border border-[#34D399]/40 flex items-center justify-center shrink-0 mt-1">
              <Sparkles className="w-5 h-5 text-[#D6B77A]" />
            </div>
            <div>
              <span className="text-xs font-mono text-[#D6B77A] uppercase tracking-wider font-semibold">
                How Modern Business Automation Actually Works:
              </span>
              <p className="text-base sm:text-lg text-[#F5F3EE] mt-2 font-normal leading-relaxed">
                "A business process begins with an event. Zyntara captures that event, understands what needs to happen next, moves information between systems, sends the right communication, creates the right task, updates the right record and escalates the workflow when human judgment is required. The result is a process that moves without someone manually pushing it forward at every step."
              </p>
            </div>
          </div>
        </div>

        {/* Automation Maturity Model (Level 01 to Level 05) */}
        <div className="mt-20">
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#262E40] text-xs font-mono text-[#34D399] border border-[#34D399]/30 mb-2">
              <Gauge className="w-3.5 h-3.5 text-[#D6B77A]" />
              <span>5-Stage Automation Maturity Model</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-display font-bold text-[#F5F3EE]">
              FROM SIMPLE AUTOMATIONS TO AUTONOMOUS OPERATIONS.
            </h3>
            <p className="text-xs sm:text-sm text-[#7E8491] font-mono mt-1">
              Start with one workflow. Build toward an intelligent operating system.
            </p>
          </div>

          {/* Level Selection Tabs */}
          <div className="grid grid-cols-1 sm:grid-cols-5 gap-3">
            {maturityLevels.map((lvl) => {
              const isSelected = lvl.level === selectedLevel;
              return (
                <button
                  key={lvl.level}
                  onClick={() => setSelectedLevel(lvl.level)}
                  className={`p-4 rounded-2xl text-left transition-all duration-300 border cursor-pointer flex flex-col justify-between ${
                    isSelected
                      ? 'bg-gradient-to-b from-[#1E2438] to-[#121624] border-[#D6B77A] shadow-[0_4px_20px_rgba(214,183,122,0.2)] scale-[1.03]'
                      : 'bg-[#1A2030] border-white/[0.06] hover:border-white/20 hover:bg-[#222A3A]'
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className={`text-xs font-mono font-bold px-2 py-0.5 rounded-md ${
                      isSelected ? 'bg-[#D6B77A] text-[#0F1219]' : 'bg-[#262E40] text-[#7E8491]'
                    }`}>
                      LEVEL 0{lvl.level}
                    </span>
                    {isSelected && <span className="w-2 h-2 rounded-full bg-[#2DD4BF] animate-ping" />}
                  </div>

                  <div className="font-display font-bold text-sm text-[#F5F3EE] mt-1">
                    {lvl.name}
                  </div>
                  <div className="text-[11px] text-[#7E8491] mt-1 line-clamp-2">
                    {lvl.tagline}
                  </div>
                </button>
              );
            })}
          </div>

          {/* Selected Level Deep Dive Card */}
          <div className="mt-8 p-8 rounded-3xl bg-[#1A2030]/95 border border-white/10 shadow-2xl flex flex-col lg:flex-row items-start justify-between gap-8 backdrop-blur-xl">
            <div className="space-y-4 flex-1">
              <div className="flex items-center gap-3">
                <span className="px-3 py-1 rounded-lg text-xs font-mono font-bold bg-[#D6B77A] text-[#0F1219]">
                  LEVEL 0{currentLevelData.level}
                </span>
                <h4 className="text-xl sm:text-2xl font-display font-bold text-[#F5F3EE]">
                  {currentLevelData.name}: {currentLevelData.tagline}
                </h4>
              </div>

              <p className="text-sm sm:text-base text-[#B6BAC4] leading-relaxed">
                {currentLevelData.description}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-3.5 rounded-xl bg-[#222A3A] border border-white/[0.06]">
                  <span className="text-[10px] font-mono text-[#D6B77A] uppercase font-semibold">
                    Human Oversight & Role:
                  </span>
                  <p className="text-xs text-[#E0E2EC] mt-1">
                    {currentLevelData.humanRole}
                  </p>
                </div>

                <div className="p-3.5 rounded-xl bg-[#222A3A] border border-white/[0.06]">
                  <span className="text-[10px] font-mono text-[#2DD4BF] uppercase font-semibold">
                    Measurable Operational Impact:
                  </span>
                  <p className="text-xs text-[#E0E2EC] mt-1">
                    {currentLevelData.businessImpact}
                  </p>
                </div>
              </div>

              <div>
                <span className="text-xs font-mono text-[#7E8491] uppercase tracking-wider block mb-2">
                  Typical Production Automations:
                </span>
                <div className="flex flex-wrap gap-2">
                  {currentLevelData.examples.map((ex, idx) => (
                    <span key={idx} className="px-3 py-1 rounded-lg text-xs font-mono bg-[#262E40] text-[#F5F3EE] border border-white/10 flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#34D399]" />
                      <span>{ex}</span>
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="lg:w-72 shrink-0 p-6 rounded-2xl bg-[#222A3A] border border-white/[0.08] flex flex-col justify-between space-y-4 w-full">
              <div>
                <span className="text-xs font-mono text-[#D6B77A] uppercase font-bold">
                  Deploy This Maturity Level
                </span>
                <p className="text-xs text-[#B6BAC4] mt-1">
                  Start with a single target workflow at Level 0{currentLevelData.level} and scale predictably across your enterprise.
                </p>
              </div>

              <div className="space-y-2">
                <Button
                  variant="primary"
                  size="md"
                  icon
                  className="w-full"
                  onClick={() => onNavigate('automation')}
                >
                  Automate a Workflow
                </Button>
                <button
                  onClick={() => onNavigate('contact')}
                  className="w-full py-2.5 rounded-xl bg-transparent hover:bg-white/[0.04] text-xs font-mono text-[#7E8491] hover:text-white transition-colors cursor-pointer text-center"
                >
                  Discuss Architecture Blueprint
                </button>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
