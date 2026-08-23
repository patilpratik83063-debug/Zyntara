import React from 'react';
import { ViewType } from '../../types';
import { Button } from '../common/Button';
import { StaggerGroup, StaggerItem } from '../common/Reveal';
import { 
  CheckCircle2, 
  HelpCircle,
  BarChart3
} from 'lucide-react';

interface OutcomesSectionProps {
  onNavigate: (view: ViewType) => void;
}

export const OutcomesSection: React.FC<OutcomesSectionProps> = ({ onNavigate }) => {
  const repeatingWorkQuestions = [
    {
      question: 'How many leads are followed up manually every week?',
      impact: 'Leads that wait >5 minutes experience an 80% drop in qualification rates.',
      systemSolution: 'Instant AI lead capture, intent scoring, and real-time CRM routing.'
    },
    {
      question: 'How many hours are spent updating CRM records?',
      impact: 'Sales reps spend an estimated 65% of their working hours on non-selling admin.',
      systemSolution: 'Bi-directional auto-sync from WhatsApp, email, and meeting transcripts.'
    },
    {
      question: 'How many customer messages wait for a response?',
      impact: 'Delayed responses increase churn risk and overload human support desks.',
      systemSolution: '24/7 sub-minute tier-1 resolution with structured escalation paths.'
    },
    {
      question: 'How many invoices require manual validation and entry?',
      impact: 'Manual accounting entry causes delays in month-end close and payment reconciliation.',
      systemSolution: 'Automated OCR extraction, 3-way matching, and ERP ledger posting.'
    },
    {
      question: 'How many reports are prepared repeatedly every Monday?',
      impact: 'Valuable executive hours spent compiling spreadsheets instead of strategic decision-making.',
      systemSolution: 'Automated executive SQL dashboards and weekly metric broadcasts.'
    }
  ];

  return (
    <section id="outcomes-section" className="py-28 px-4 sm:px-6 lg:px-8 bg-[#F5F3EE] text-[#0A0D14] relative overflow-hidden border-y border-[#E2DFD6]">
      <div className="max-w-7xl mx-auto">
        
        {/* Header with High-Contrast Editorial Typography */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EAE7DE] border border-[#D5D1C5] text-xs font-mono text-[#4A4E58] mb-4">
            <BarChart3 className="w-3.5 h-3.5 text-[#5143E0]" />
            <span className="font-semibold uppercase tracking-wider">Enterprise Performance Metric</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-[#0A0D14] tracking-tight leading-tight">
            WE DON'T MEASURE AI BY DEMOS.{' '}
            <span className="text-[#5143E0]">
              WE MEASURE IT BY BUSINESS OUTCOMES.
            </span>
          </h2>

          <p className="text-base sm:text-lg text-[#555A68] mt-4 leading-relaxed max-w-3xl mx-auto">
            The true ROI of intelligent systems is removing friction from the revenue pipeline, eliminating repetitive human data entry, and allowing your company to scale without linear headcount expansion.
          </p>
        </div>

        {/* Section 35: THINK ABOUT THE WORK YOU REPEAT */}
        <div className="mb-16 p-8 sm:p-10 rounded-3xl bg-white border border-[#E0DCD0] shadow-[0_10px_40px_rgba(0,0,0,0.04)]">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-9 h-9 rounded-xl bg-[#5143E0]/10 flex items-center justify-center text-[#5143E0]">
              <HelpCircle className="w-5 h-5" />
            </div>
            <div>
              <span className="text-xs font-mono text-[#5143E0] uppercase font-bold tracking-wider">
                Operational Audit
              </span>
              <h3 className="text-xl sm:text-2xl font-display font-bold text-[#0A0D14]">
                THINK ABOUT THE WORK YOU REPEAT.
              </h3>
            </div>
          </div>

          <StaggerGroup className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5" stagger={0.07}>
            {repeatingWorkQuestions.map((item, idx) => (
              <StaggerItem key={idx} className="h-full">
                <div className="p-5 rounded-2xl bg-[#F9F8F5] border border-[#E8E4DA] flex flex-col justify-between space-y-3 h-full transition-transform duration-300 hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(0,0,0,0.06)]">
                  <div>
                    <h4 className="font-display font-bold text-sm text-[#0A0D14] leading-snug">
                      "{item.question}"
                    </h4>
                    <p className="text-xs text-[#6E7382] mt-2 leading-relaxed">
                      {item.impact}
                    </p>
                  </div>
                  <div className="pt-3 border-t border-[#E8E4DA] text-xs font-mono text-[#5143E0] font-medium flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#5143E0] shrink-0" />
                    <span>{item.systemSolution}</span>
                  </div>
                </div>
              </StaggerItem>
            ))}

            {/* Closing Opportunity Callout Card */}
            <StaggerItem className="h-full">
              <div className="p-6 rounded-2xl bg-[#0F131E] text-white border border-[#23293D] flex flex-col justify-between space-y-4 shadow-lg h-full">
                <div>
                  <span className="text-[10px] font-mono text-[#D6B77A] uppercase tracking-widest font-bold">
                    Core Economic Truth
                  </span>
                  <p className="text-sm font-display font-bold text-[#F5F3EE] mt-2 leading-relaxed">
                    "The opportunity isn't only saving time. It's creating a business process that can operate consistently at scale."
                  </p>
                </div>

                <button
                  onClick={() => onNavigate('contact')}
                  className="w-full py-2.5 rounded-xl bg-gradient-to-r from-[#695CF6] to-[#5143E0] text-xs font-mono font-bold text-white shadow-md hover:scale-[1.02] transition-transform cursor-pointer text-center"
                >
                  Audit Your Workflows
                </button>
              </div>
            </StaggerItem>
          </StaggerGroup>
        </div>

        {/* 3 Rigorous Enterprise Impact Principles */}
        <StaggerGroup className="grid grid-cols-1 md:grid-cols-3 gap-6" stagger={0.12}>
          <StaggerItem className="h-full">
            <div className="p-6 rounded-2xl bg-white border border-[#E0DCD0] h-full transition-all duration-300 hover:-translate-y-1 hover:border-[#5143E0]/30 hover:shadow-[0_14px_34px_rgba(81,67,224,0.08)]">
              <div className="font-mono text-xs font-bold text-[#5143E0] uppercase tracking-wider mb-2">
                01 • Operational Velocity
              </div>
              <h4 className="text-lg font-display font-bold text-[#0A0D14]">
                Zero Friction Handoffs
              </h4>
              <p className="text-xs text-[#555A68] mt-2 leading-relaxed">
                Processes move automatically from WhatsApp inquiry to CRM qualification, calendar booking, invoice dispatch, and financial reconciliation in real time.
              </p>
            </div>
          </StaggerItem>

          <StaggerItem className="h-full">
            <div className="p-6 rounded-2xl bg-white border border-[#E0DCD0] h-full transition-all duration-300 hover:-translate-y-1 hover:border-[#5143E0]/30 hover:shadow-[0_14px_34px_rgba(81,67,224,0.08)]">
              <div className="font-mono text-xs font-bold text-[#5143E0] uppercase tracking-wider mb-2">
                02 • Headcount Leverage
              </div>
              <h4 className="text-lg font-display font-bold text-[#0A0D14]">
                Amplify Your Existing Team
              </h4>
              <p className="text-xs text-[#555A68] mt-2 leading-relaxed">
                Eliminate repetitive data entry and routine status chasing so your skilled staff can focus on customer relationships, strategy, and critical approvals.
              </p>
            </div>
          </StaggerItem>

          <StaggerItem className="h-full">
            <div className="p-6 rounded-2xl bg-white border border-[#E0DCD0] h-full transition-all duration-300 hover:-translate-y-1 hover:border-[#5143E0]/30 hover:shadow-[0_14px_34px_rgba(81,67,224,0.08)]">
              <div className="font-mono text-xs font-bold text-[#5143E0] uppercase tracking-wider mb-2">
                03 • Compounding Data Asset
              </div>
              <h4 className="text-lg font-display font-bold text-[#0A0D14]">
                Organizational Knowledge
              </h4>
              <p className="text-xs text-[#555A68] mt-2 leading-relaxed">
                Every resolved inquiry, processed invoice, and closed deal enriches your central enterprise intelligence layer, making subsequent decisions smarter.
              </p>
            </div>
          </StaggerItem>
        </StaggerGroup>

      </div>
    </section>
  );
};
