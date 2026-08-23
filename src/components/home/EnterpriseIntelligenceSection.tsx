import React, { useState } from 'react';
import { SectionHeader } from '../common/SectionHeader';
import { Button } from '../common/Button';
import { ViewType } from '../../types';
import { 
  Database, 
  Search, 
  FileText, 
  Layers, 
  CheckCircle2, 
  ArrowRight, 
  Sparkles, 
  ShieldCheck, 
  HelpCircle,
  ExternalLink
} from 'lucide-react';

interface EnterpriseIntelligenceSectionProps {
  onNavigate: (view: ViewType) => void;
}

export const EnterpriseIntelligenceSection: React.FC<EnterpriseIntelligenceSectionProps> = ({ onNavigate }) => {
  const [activeQueryIndex, setActiveQueryIndex] = useState<number>(0);
  const [isSynthesizing, setIsSynthesizing] = useState<boolean>(false);

  const sampleQueries = [
    {
      query: "Why did European operating margins compress by 4.2% in Q2?",
      answer: "Analysis of SAP logistics feeds and supplier invoices reveals a 14% surge in Rotterdam freight spot rates combined with an unexpected 18-day port congestion delay. Contract terms with Carrier Logistics B.V. lacked dynamic fuel cap provisions, resulting in $640,000 in unbudgeted expedited delivery charges.",
      sources: ["SAP S/4HANA Logistics Feed (Table LIKP)", "Carrier Contract #EU-9042", "Q2 P&L Variance Ledger"],
      recommendedAction: "Trigger AI Procurement Negotiator to execute fuel clause amendments on next 4 carrier renewals.",
      confidence: "99.4% Verifiable"
    },
    {
      query: "Which top-tier enterprise accounts exhibit early indicators of churn risk?",
      answer: "Cross-correlating Zendesk ticket sentiment, weekly API call volumes, and executive sponsor LinkedIn movements identifies 3 accounts at risk: Apex Global (-34% API velocity), Meridian Dynamics (sponsor departed last Tuesday), and Helios Healthcare (unresolved SLA ticket #8019).",
      sources: ["Salesforce Opportunity History", "Datadog API Ingest", "Zendesk Sentiment Stream"],
      recommendedAction: "Dispatch automated executive re-engagement briefing to VP Customer Success with custom SLA remediation proposal.",
      confidence: "98.1% Verifiable"
    },
    {
      query: "Which factory assembly line should scale production to meet Q4 holiday backlog?",
      answer: "Factory Line #3 in Greenville demonstrates the highest OEE (88.4%) with 12% lower unit energy cost compared to Munich. Shifting 4,000 unit volume from Munich to Greenville optimizes margin by $1.85 per unit while maintaining 99.2% on-time delivery.",
      sources: ["MES Sensor Telemetry", "Energy Tariff Database", "Q4 Demand Forecast Model"],
      recommendedAction: "Submit production schedule change request to SAP MES orchestrator with automated supervisor sign-off.",
      confidence: "99.7% Verifiable"
    }
  ];

  const current = sampleQueries[activeQueryIndex];

  const handleQuerySelect = (idx: number) => {
    setIsSynthesizing(true);
    setActiveQueryIndex(idx);
    setTimeout(() => {
      setIsSynthesizing(false);
    }, 400);
  };

  const systemsList = [
    'CRM', 'ERP', 'DOCUMENTS', 'DATABASES', 'EMAIL', 'POLICIES', 'CONTRACTS', 'SOPs', 'REPORTS', 'APPLICATIONS'
  ];

  return (
    <section id="intelligence-section" className="py-28 px-4 sm:px-6 lg:px-8 bg-[#050506] relative overflow-hidden border-t border-white/[0.08]">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          eyebrow="Enterprise Cognitive Layer"
          badge="Hybrid GraphRAG"
          title="TURN YOUR BUSINESS DATA"
          highlightText="INTO BUSINESS INTELLIGENCE."
          description="Unify fragmented databases, emails, contracts, ERPs, and SOPs into an active conversational knowledge engine with verifiable citations."
          align="center"
        />

        {/* Enterprise Data Ingestion Badge Flow */}
        <div className="mt-14 flex flex-wrap items-center justify-center gap-2 max-w-4xl mx-auto">
          {systemsList.map((sys, idx) => (
            <span
              key={idx}
              className="px-3 py-1.5 rounded-xl text-xs font-mono font-medium bg-[#101420] text-[#B6BAC4] border border-white/[0.06] flex items-center gap-1.5"
            >
              <Database className="w-3 h-3 text-[#8B7CFF]" />
              <span>{sys}</span>
            </span>
          ))}
          <span className="px-3 py-1.5 rounded-xl text-xs font-mono font-bold bg-[#181D2A] text-[#D6B77A] border border-[#D6B77A]/30 shadow-[0_2px_12px_rgba(214,183,122,0.2)] flex items-center gap-1.5">
            <Sparkles className="w-3 h-3 text-[#D6B77A]" />
            <span>→ ENTERPRISE INTELLIGENCE LAYER</span>
          </span>
        </div>

        {/* Interactive Query Simulator Box */}
        <div className="mt-12 max-w-4xl mx-auto rounded-3xl bg-[#0D1018]/95 border border-white/10 p-6 sm:p-8 shadow-[0_20px_50px_rgba(0,0,0,0.7)] backdrop-blur-xl space-y-6">
          
          {/* Query Selector Tabs */}
          <div>
            <div className="text-xs font-mono text-[#7E8491] uppercase tracking-wider mb-2.5">
              Select Executive Strategic Query:
            </div>
            <div className="flex flex-col sm:flex-row gap-2">
              {sampleQueries.map((q, idx) => (
                <button
                  key={idx}
                  onClick={() => handleQuerySelect(idx)}
                  className={`p-3 rounded-2xl text-left text-xs font-medium transition-all duration-300 border flex-1 cursor-pointer ${
                    activeQueryIndex === idx
                      ? 'bg-[#181D2E] text-[#F5F3EE] border-[#D6B77A] shadow-[0_2px_14px_rgba(214,183,122,0.2)]'
                      : 'bg-[#121622]/60 text-[#7E8491] border-white/[0.06] hover:text-[#B6BAC4] hover:bg-[#141824]'
                  }`}
                >
                  <span className="line-clamp-2">"{q.query}"</span>
                </button>
              ))}
            </div>
          </div>

          {/* Active Query Output View */}
          <div className={`p-6 rounded-2xl bg-[#121622]/90 border border-white/[0.08] space-y-4 transition-opacity duration-300 ${isSynthesizing ? 'opacity-40' : 'opacity-100'}`}>
            
            {/* Header info */}
            <div className="flex items-center justify-between border-b border-white/[0.08] pb-3">
              <div className="flex items-center gap-2">
                <Search className="w-4 h-4 text-[#D6B77A]" />
                <span className="font-mono text-xs text-[#D6B77A] font-semibold">
                  Synthesized Executive Intelligence Brief
                </span>
              </div>
              <span className="text-[10px] font-mono text-[#59D6C4] px-2 py-0.5 rounded-md bg-[#181D2A] border border-[#59D6C4]/30 font-semibold">
                {current.confidence}
              </span>
            </div>

            {/* Answer Content */}
            <p className="text-sm sm:text-base text-[#F5F3EE] leading-relaxed font-normal">
              {current.answer}
            </p>

            {/* Source Citations */}
            <div className="pt-2">
              <div className="text-xs font-mono text-[#7E8491] uppercase tracking-wider mb-2">
                Verifiable Source Citations (Zero Hallucination):
              </div>
              <div className="flex flex-wrap gap-2">
                {current.sources.map((src, idx) => (
                  <span
                    key={idx}
                    className="px-2.5 py-1 rounded-md text-[11px] font-mono bg-[#181D2A] text-[#8B7CFF] border border-white/[0.06] flex items-center gap-1"
                  >
                    <FileText className="w-3 h-3 text-[#D6B77A]" />
                    <span>{src}</span>
                  </span>
                ))}
              </div>
            </div>

            {/* Recommended Autonomous Action */}
            <div className="p-4 rounded-xl bg-[#181D2E]/80 border border-[#D6B77A]/30 flex items-start gap-3">
              <Sparkles className="w-4 h-4 text-[#D6B77A] shrink-0 mt-0.5" />
              <div>
                <div className="text-xs font-mono text-[#D6B77A] font-semibold uppercase">
                  Automated Next Action:
                </div>
                <div className="text-xs text-[#F5F3EE] mt-0.5">
                  {current.recommendedAction}
                </div>
              </div>
            </div>

          </div>

          {/* Bottom Callout */}
          <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs font-mono text-[#7E8491]">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-[#8B7CFF]" />
              <span>Full cryptographic audit trail & strict data boundary isolation</span>
            </div>

            <Button
              variant="outline"
              size="sm"
              icon
              onClick={() => onNavigate('solutions')}
            >
              Enterprise Search Architecture
            </Button>
          </div>

        </div>

      </div>
    </section>
  );
};
