import React, { useState } from 'react';
import { SectionHeader } from '../common/SectionHeader';
import { Button } from '../common/Button';
import { CountUp } from '../common/CountUp';
import { ViewType } from '../../types';
import { 
  Users, 
  Bot, 
  Sparkles, 
  ArrowRight, 
  CheckCircle2, 
  ShieldCheck, 
  Workflow, 
  Cpu, 
  Layers, 
  MessageSquare,
  Search,
  FileCheck,
  TrendingUp,
  Mail,
  Zap,
  Activity
} from 'lucide-react';

interface AIWorkforceSectionProps {
  onNavigate: (view: ViewType) => void;
}

/** Counts up numeric outcomes like "40%+", "65%" when scrolled into view. */
const OutcomeCountUp: React.FC<{ value: string }> = ({ value }) => {
  const match = value.match(/^(\d+)(%\+?)(.*)$/);
  if (!match) return <>{value}</>;
  return (
    <>
      <CountUp to={Number(match[1])} suffix={match[2]} />
      {match[3]}
    </>
  );
};

export const AIWorkforceSection: React.FC<AIWorkforceSectionProps> = ({ onNavigate }) => {
  const [activeDepartment, setActiveDepartment] = useState<'sales' | 'support' | 'finance' | 'procurement'>('sales');

  const cognitiveCapabilities = [
    { name: 'CLASSIFICATION', desc: 'Sort customer intent & risk tier' },
    { name: 'EXTRACTION', desc: 'Pull structured data from PDFs' },
    { name: 'SUMMARIZATION', desc: 'Synthesize complex case files' },
    { name: 'PREDICTION', desc: 'Forecast deal close velocity' },
    { name: 'RECOMMENDATION', desc: 'Suggest optimal next action' },
    { name: 'PRIORITIZATION', desc: 'Route urgent inquiries first' },
    { name: 'GENERATION', desc: 'Draft context-specific emails' },
    { name: 'DECISION SUPPORT', desc: 'Surface verified analytics' }
  ];

  const swarms = {
    sales: {
      name: 'AI Sales Workforce',
      headline: 'Autonomous Inbound & Outbound Pipeline Acceleration',
      agents: [
        { role: 'Research Agent', action: 'Enriches inbound company domain & tech stack from web data' },
        { role: 'Sales SDR Agent', action: 'Engages prospect in WhatsApp / Email within 10 seconds' },
        { role: 'CRM Agent', action: 'Creates contact, logs notes & schedules follow-up tasks' },
        { role: 'Proposal Agent', action: 'Generates customized pricing sheet based on requirements' },
        { role: 'Follow-Up Agent', action: 'Monitors reply velocity and re-engages dormant leads' }
      ],
      flow: 'Research → Qualify → CRM Update → Outreach → Follow-Up → Meeting → Proposal → Close',
      outcome: '40%+ faster pipeline progression with zero manual chasing by reps'
    },
    support: {
      name: 'AI Customer Support Workforce',
      headline: 'Sub-Minute Issue Resolution with Intelligent Human Escalation',
      agents: [
        { role: 'Triage Agent', action: 'Classifies message intent, urgency, and sentiment in real time' },
        { role: 'Resolution Agent', action: 'Answers technical and billing questions using verified SOPs' },
        { role: 'Ticket Agent', action: 'Opens structured Jira / Zendesk tickets with payload logs' },
        { role: 'Escalation Agent', action: 'Alerts tier-3 senior engineers for high-risk system edge cases' },
        { role: 'Feedback Agent', action: 'Follows up post-resolution and updates organizational knowledge' }
      ],
      flow: 'Chat Inbound → Intent Classification → Knowledge Lookup → Auto-Resolve → Ticket / Escalate → Feedback',
      outcome: '65% of repetitive support tickets resolved instantly without human intervention'
    },
    finance: {
      name: 'AI Financial Operations Workforce',
      headline: 'Continuous Ledger Reconciliation and Invoice Settlement',
      agents: [
        { role: 'Invoice OCR Agent', action: 'Extracts line items, tax IDs, and payment terms from scanned bills' },
        { role: 'Matching Agent', action: 'Performs 3-way matching against purchase orders and receipts' },
        { role: 'Approval Agent', action: 'Routes expenditures over $5,000 to executive Slack for approval' },
        { role: 'Ledger Agent', action: 'Posts journal entries into ERP / QuickBooks with zero errors' },
        { role: 'Collection Agent', action: 'Sends automated WhatsApp and email reminders for overdue accounts' }
      ],
      flow: 'Invoice Arrives → Extract Data → 3-Way Match → Human Approval Gate → Post to ERP → Reconcile',
      outcome: 'Accelerates payment cycles and eliminates manual data entry in finance'
    },
    procurement: {
      name: 'AI Procurement & Supply Workforce',
      headline: 'Autonomous Vendor Sourcing, PO Generation, and Inventory Sync',
      agents: [
        { role: 'Inventory Agent', action: 'Monitors real-time warehouse thresholds and forecasts depletion' },
        { role: 'Sourcing Agent', action: 'Requests quotes from approved supplier list and compares SLAs' },
        { role: 'PO Agent', action: 'Generates purchase orders with verified contract discount pricing' },
        { role: 'Compliance Agent', action: 'Verifies vendor certifications, tax documents, and insurance' },
        { role: 'Tracking Agent', action: 'Monitors shipment milestones and notifies logistics upon receipt' }
      ],
      flow: 'Threshold Alert → Vendor Quotes → PO Generation → Compliance Verification → Logistics Sync',
      outcome: 'Prevents supply stockouts while ensuring 100% vendor contract compliance'
    }
  };

  const activeSwarm = swarms[activeDepartment];

  return (
    <section id="ai-workforce-section" className="py-28 px-4 sm:px-6 lg:px-8 bg-[#0F1219] relative overflow-hidden border-t border-white/[0.08]">
      {/* Ambient background glow */}
      <div className="absolute top-1/3 left-1/4 w-[700px] h-[500px] bg-[#34D399]/06 blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        
        {/* Section 27: DON'T JUST AUTOMATE THE TASK. AUTOMATE THE ROLE. */}
        <SectionHeader
          eyebrow="Autonomous Digital Workers"
          badge="Multi-Agent Systems"
          title="DON'T JUST AUTOMATE THE TASK."
          highlightText="AUTOMATE THE ROLE."
          description="AI agents can perform multi-step workflows across approved business systems — researching information, updating records, communicating with customers, preparing outputs and escalating decisions when human judgment is needed."
          align="center"
        />

        {/* Section 26: WHEN RULES AREN'T ENOUGH, ADD INTELLIGENCE */}
        <div className="mt-14 p-6 sm:p-8 rounded-3xl bg-[#1A2030]/90 border border-white/10 shadow-xl max-w-5xl mx-auto">
          <div className="text-center mb-6">
            <span className="text-xs font-mono text-[#D6B77A] uppercase tracking-widest font-semibold">
              Cognitive Evolution: Beyond Static If-This-Then-That Rules
            </span>
            <h3 className="text-xl sm:text-2xl font-display font-bold text-[#F5F3EE] mt-1">
              WHEN RULES AREN'T ENOUGH, ADD INTELLIGENCE.
            </h3>
            <p className="text-xs sm:text-sm text-[#B6BAC4] mt-2 max-w-2xl mx-auto">
              Traditional automation follows predefined rules. AI-powered automation understands context, extracts meaning, prioritizes work, generates responses, and recommends what should happen next.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {cognitiveCapabilities.map((cap, idx) => (
              <div key={idx} className="p-3.5 rounded-xl bg-[#222A3A] border border-white/[0.06] flex flex-col justify-between">
                <span className="font-mono text-xs font-bold text-[#34D399]">{cap.name}</span>
                <span className="text-[11px] text-[#7E8491] mt-1">{cap.desc}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Section 28: ONE AI AGENT IS USEFUL. AN AI WORKFORCE IS TRANSFORMATIVE. */}
        <div className="mt-20">
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1E2638] text-xs font-mono text-[#2DD4BF] border border-[#2DD4BF]/30 mb-2">
              <Users className="w-3.5 h-3.5 text-[#2DD4BF]" />
              <span>Multi-Agent Swarm Orchestration</span>
            </div>
            <h3 className="text-2xl sm:text-4xl font-display font-bold text-[#F5F3EE]">
              ONE AI AGENT IS USEFUL. AN AI WORKFORCE IS TRANSFORMATIVE.
            </h3>
            <p className="text-xs sm:text-sm text-[#7E8491] font-mono mt-1">
              Connect specialized AI agents so different parts of a business process work together seamlessly.
            </p>
          </div>

          {/* Department Selection Tabs */}
          <div className="flex justify-center mb-10">
            <div className="p-1.5 rounded-2xl bg-[#1A2030] border border-white/10 flex flex-wrap gap-1 shadow-lg">
              {[
                { id: 'sales', label: 'AI Sales Workforce' },
                { id: 'support', label: 'AI Support Workforce' },
                { id: 'finance', label: 'AI Finance Workforce' },
                { id: 'procurement', label: 'AI Procurement Workforce' }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveDepartment(tab.id as any)}
                  className={`px-4 py-2 rounded-xl text-xs font-mono font-medium transition-all cursor-pointer ${
                    activeDepartment === tab.id
                      ? 'bg-gradient-to-r from-[#10B981] to-[#059669] text-white shadow-md'
                      : 'text-[#7E8491] hover:text-[#F5F3EE]'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Active Swarm Architecture Box */}
          <div className="p-8 sm:p-10 rounded-3xl bg-[#1A2030]/95 border border-white/10 shadow-2xl backdrop-blur-xl space-y-8">
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-6 border-b border-white/[0.08]">
              <div>
                <span className="text-xs font-mono text-[#D6B77A] uppercase font-bold tracking-wider">
                  Specialized Digital Team
                </span>
                <h4 className="text-2xl sm:text-3xl font-display font-bold text-[#F5F3EE] mt-0.5">
                  {activeSwarm.name}: {activeSwarm.headline}
                </h4>
              </div>

              <Button
                variant="primary"
                size="md"
                icon
                onClick={() => onNavigate('contact')}
              >
                Deploy This AI Workforce
              </Button>
            </div>

            {/* Specialized Agents in the Swarm */}
            <div>
              <span className="text-xs font-mono text-[#7E8491] uppercase tracking-wider block mb-4">
                Specialized Agents in This Workforce:
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3.5">
                {activeSwarm.agents.map((agent, idx) => (
                  <div key={idx} className="p-4 rounded-2xl bg-[#222A3A] border border-white/[0.06] flex flex-col justify-between space-y-2">
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 rounded-lg bg-[#1D2335] flex items-center justify-center text-[#D6B77A]">
                        <Bot className="w-3.5 h-3.5" />
                      </div>
                      <span className="font-display font-bold text-xs text-[#F5F3EE]">{agent.role}</span>
                    </div>
                    <p className="text-[11px] text-[#B6BAC4] leading-relaxed">
                      {agent.action}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Swarm Execution Flow */}
            <div className="p-4 rounded-2xl bg-[#222A3A]/60 border border-white/[0.06] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <span className="text-[10px] font-mono text-[#7E8491] uppercase tracking-wider block">
                  End-to-End Swarm Execution Sequence:
                </span>
                <div className="font-mono text-xs text-[#2DD4BF] mt-1 break-words">
                  {activeSwarm.flow}
                </div>
              </div>

              <div className="text-xs font-mono text-[#D6B77A] shrink-0">
                Verified Outcome: <OutcomeCountUp value={activeSwarm.outcome} />
              </div>
            </div>

          </div>

        </div>

        {/* Section 29: AUTONOMOUS OPERATIONS & HUMAN OVERSIGHT */}
        <div className="mt-20 p-8 rounded-3xl bg-[#1A2030] border border-white/10 shadow-xl max-w-5xl mx-auto flex flex-col sm:flex-row items-center gap-6">
          <div className="w-14 h-14 rounded-2xl bg-[#262E40] border border-[#D6B77A]/40 flex items-center justify-center shrink-0 text-[#D6B77A]">
            <ShieldCheck className="w-7 h-7" />
          </div>
          <div>
            <span className="text-xs font-mono text-[#D6B77A] uppercase font-bold tracking-wider">
              Enterprise Governance & Control
            </span>
            <h4 className="text-xl sm:text-2xl font-display font-bold text-[#F5F3EE] mt-0.5">
              THE NEXT STEP AFTER AUTOMATION: INTELLIGENT OPERATIONS.
            </h4>
            <p className="text-sm text-[#B6BAC4] mt-2 leading-relaxed">
              "The goal isn't to remove humans from every process. The goal is to remove unnecessary manual coordination while giving people control over decisions that require judgment, accountability or approval."
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};
