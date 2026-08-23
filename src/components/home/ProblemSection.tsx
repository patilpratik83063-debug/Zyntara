import React, { useState } from 'react';
import { SectionHeader } from '../common/SectionHeader';
import { Button } from '../common/Button';
import { ViewType } from '../../types';
import { 
  AlertTriangle, 
  CheckCircle2, 
  ArrowRight, 
  Split, 
  Layers, 
  ShieldAlert, 
  Zap, 
  Cpu, 
  Database, 
  Workflow,
  Globe,
  Users,
  MessageSquare,
  Mail,
  CreditCard,
  FileText,
  Boxes,
  Code
} from 'lucide-react';

interface ProblemSectionProps {
  onNavigate: (view: ViewType) => void;
}

export const ProblemSection: React.FC<ProblemSectionProps> = ({ onNavigate }) => {
  const [viewState, setViewState] = useState<'fragmented' | 'unified'>('unified');

  const disconnectedPieces = [
    { name: 'WEBSITES', icon: Globe, status: 'Isolated traffic & forms' },
    { name: 'CRM', icon: Users, status: 'Stale records & manual entry' },
    { name: 'ERP', icon: Boxes, status: 'Locked inventory & ledgers' },
    { name: 'WHATSAPP', icon: MessageSquare, status: 'Unmanaged inboxes' },
    { name: 'EMAIL', icon: Mail, status: 'Buried lead inquiries' },
    { name: 'PAYMENTS', icon: CreditCard, status: 'Manual reconciliation' },
    { name: 'DOCUMENTS', icon: FileText, status: 'Copy-pasting data' },
    { name: 'DATABASES', icon: Database, status: 'Unconnected data silos' },
    { name: 'TEAMS', icon: Users, status: 'Chasing status updates' },
    { name: 'CUSTOM SOFTWARE', icon: Code, status: 'No active AI sync' },
  ];

  const fragmentedIssues = [
    { title: 'Isolated AI Tools', desc: 'Siloed tools without access to your CRM, ERP or operational context' },
    { title: 'Repetitive Manual Work', desc: 'Teams spending valuable hours moving information from one system to another' },
    { title: 'Disconnected Software', desc: 'Fragmented apps creating operational friction and dropped customer handoffs' },
    { title: 'Scattered Data', desc: 'Critical business knowledge spread across inboxes, chats, spreadsheets and databases' },
    { title: 'Slow Response Times', desc: 'Leads waiting for someone to manually check messages, create records, and follow up' },
    { title: 'High Coordination Overhead', desc: 'Managers chasing approvals, status updates, and manual weekly reports' }
  ];

  const unifiedBenefits = [
    { title: 'Unified Architecture', desc: 'Single intelligent operating layer connecting every department and tool' },
    { title: 'Event-Driven Automation', desc: 'Processes move immediately when an event occurs without waiting for manual push' },
    { title: 'Active CRM & ERP Sync', desc: 'Bi-directional updates keep systems of record accurate and synchronized in real time' },
    { title: 'Multi-Channel Continuity', desc: 'WhatsApp, email, web forms and voice operate as unified communication streams' },
    { title: 'Autonomous Execution', desc: 'AI agents handle multi-step workflows with human escalation for key approvals' },
    { title: 'Compounding Intelligence', desc: 'Enterprise data continuously powers smarter decisions and automated recommendations' }
  ];

  return (
    <section id="problem-section" className="py-28 px-4 sm:px-6 lg:px-8 bg-[#090B10] border-t border-white/[0.08] relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-rose-950/08 blur-[140px] pointer-events-none" />
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-[#34D399]/08 blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        <SectionHeader
          eyebrow="The Root Operational Challenge"
          badge="System Reality"
          title="AI ISN'T THE PROBLEM."
          highlightText="DISCONNECTED SYSTEMS ARE."
          description="Most businesses don't need another isolated AI tool. They have fragmented workflows, disconnected software, repetitive manual work, scattered data and teams spending valuable time moving information from one system to another. Zyntara connects those pieces into intelligent systems designed to work together."
          align="center"
        />

        {/* Visual Transformation from 10 Disconnected Pieces to ONE INTELLIGENT ARCHITECTURE */}
        <div className="mt-14 p-8 rounded-3xl bg-[#0D1018]/90 border border-white/10 shadow-2xl relative overflow-hidden">
          <div className="text-center mb-6">
            <span className="text-xs font-mono text-[#D6B77A] uppercase tracking-widest font-semibold">
              The Architecture Shift
            </span>
            <h3 className="text-xl sm:text-2xl font-display font-bold text-[#F5F3EE] mt-1">
              FROM DISCONNECTED TOOLS TO ONE INTELLIGENT ARCHITECTURE
            </h3>
          </div>

          {/* Grid of 10 Systems */}
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
            {disconnectedPieces.map((piece, idx) => {
              const Icon = piece.icon;
              return (
                <div 
                  key={idx}
                  className="p-3.5 rounded-2xl bg-[#141824]/80 border border-white/[0.06] flex flex-col items-center text-center space-y-1.5 hover:border-[#34D399]/40 transition-colors"
                >
                  <div className="w-8 h-8 rounded-lg bg-[#1D2335] flex items-center justify-center text-[#34D399]">
                    <Icon className="w-4 h-4" />
                  </div>
                  <span className="font-mono text-xs font-bold text-[#F5F3EE] tracking-wider">
                    {piece.name}
                  </span>
                  <span className="text-[10px] text-[#7E8491] line-clamp-1">
                    {piece.status}
                  </span>
                </div>
              );
            })}
          </div>

          {/* Arrow / Bridge Indicator */}
          <div className="my-6 flex items-center justify-center gap-4">
            <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent via-white/20 to-[#D6B77A]" />
            <div className="px-5 py-2 rounded-full bg-gradient-to-r from-[#0F2219] to-[#121622] border border-[#D6B77A]/40 text-xs font-mono font-bold text-[#D6B77A] shadow-[0_0_15px_rgba(214,183,122,0.3)] flex items-center gap-2">
              <span>UNIFIED BY ZYNTARA</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#D6B77A]" />
            </div>
            <div className="h-[1px] flex-1 bg-gradient-to-l from-transparent via-white/20 to-[#D6B77A]" />
          </div>

          {/* Destination: ONE INTELLIGENT ARCHITECTURE Banner */}
          <div className="p-6 rounded-2xl bg-gradient-to-r from-[#181D2E] via-[#101420] to-[#181D2E] border border-[#D6B77A]/50 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left shadow-lg">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-[#D6B77A] text-[#050506] flex items-center justify-center shadow-[0_0_20px_rgba(214,183,122,0.5)] shrink-0">
                <Cpu className="w-6 h-6" />
              </div>
              <div>
                <span className="font-mono text-xs text-[#D6B77A] font-bold tracking-widest uppercase">
                  Flagship Platform
                </span>
                <h4 className="text-xl sm:text-2xl font-display font-extrabold text-[#F5F3EE]">
                  ONE INTELLIGENT ARCHITECTURE
                </h4>
                <p className="text-xs text-[#B6BAC4] mt-0.5">
                  Data, workflows, communication, agents and business systems synchronized into a single operating engine.
                </p>
              </div>
            </div>

            <Button
              variant="glow"
              size="md"
              icon
              onClick={() => onNavigate('zyntara-one')}
            >
              Explore Zyntara One™
            </Button>
          </div>
        </div>

        {/* Interactive Comparison Toggle: Fragmented vs Unified */}
        <div className="mt-14 flex justify-center">
          <div className="p-1.5 rounded-2xl bg-[#0D1018] border border-white/10 flex items-center gap-1 shadow-xl">
            <button
              onClick={() => setViewState('fragmented')}
              className={`px-5 py-2.5 rounded-xl text-xs font-mono font-semibold tracking-wider transition-all duration-300 flex items-center gap-2 cursor-pointer ${
                viewState === 'fragmented'
                  ? 'bg-rose-950/80 text-rose-300 border border-rose-500/40 shadow-[0_0_15px_rgba(244,63,94,0.2)]'
                  : 'text-[#7E8491] hover:text-[#F5F3EE]'
              }`}
            >
              <AlertTriangle className="w-3.5 h-3.5 text-rose-400" />
              <span>FRAGMENTED TOOLS (STATUS QUO)</span>
            </button>

            <button
              onClick={() => setViewState('unified')}
              className={`px-5 py-2.5 rounded-xl text-xs font-mono font-semibold tracking-wider transition-all duration-300 flex items-center gap-2 cursor-pointer ${
                viewState === 'unified'
                  ? 'bg-gradient-to-r from-[#10B981] to-[#059669] text-white border border-[#D6B77A] shadow-[0_4px_20px_rgba(16, 185, 129,0.4)]'
                  : 'text-[#7E8491] hover:text-[#F5F3EE]'
              }`}
            >
              <Cpu className="w-3.5 h-3.5 text-[#D6B77A]" />
              <span>ZYNTARA INTELLIGENT SYSTEMS</span>
            </button>
          </div>
        </div>

        {/* Comparison Cards */}
        <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          
          {/* Fragmented Tools Card */}
          <div className={`p-8 rounded-3xl transition-all duration-500 border ${
            viewState === 'fragmented'
              ? 'bg-[#120E12] border-rose-500/40 shadow-[0_8px_30px_rgba(244,63,94,0.15)] ring-1 ring-rose-500/30'
              : 'bg-[#0D1018]/50 border-white/[0.04] opacity-50'
          }`}>
            <div className="flex items-center justify-between pb-6 border-b border-white/[0.08]">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-xl bg-rose-950/80 border border-rose-500/30 flex items-center justify-center">
                  <Split className="w-4 h-4 text-rose-400" />
                </div>
                <div>
                  <h4 className="font-display font-bold text-lg text-rose-200">The Fragmented Tool Stack</h4>
                  <p className="text-xs text-[#7E8491]">Disconnected subscriptions & manual glue</p>
                </div>
              </div>
              <span className="font-mono text-xs px-2.5 py-1 rounded-full bg-rose-950/90 text-rose-300 border border-rose-500/30">
                High Friction
              </span>
            </div>

            <div className="mt-6 space-y-4">
              {fragmentedIssues.map((item, idx) => (
                <div key={idx} className="flex items-start gap-3.5">
                  <div className="w-5 h-5 rounded-full bg-rose-950/60 border border-rose-500/40 flex items-center justify-center shrink-0 mt-0.5">
                    <span className="text-rose-400 text-xs font-bold font-mono">✕</span>
                  </div>
                  <div>
                    <div className="font-display font-semibold text-sm text-[#F5F3EE]">{item.title}</div>
                    <div className="text-xs text-[#7E8491] mt-0.5">{item.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Unified Zyntara Architecture Card */}
          <div className={`p-8 rounded-3xl transition-all duration-500 border ${
            viewState === 'unified'
              ? 'bg-[#101A14] border-[#D6B77A]/60 shadow-[0_8px_30px_rgba(214,183,122,0.15)] ring-1 ring-[#D6B77A]/40'
              : 'bg-[#0D1018]/50 border-white/[0.04] opacity-50'
          }`}>
            <div className="flex items-center justify-between pb-6 border-b border-white/[0.08]">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-xl bg-[#1D2335] border border-[#D6B77A]/40 flex items-center justify-center">
                  <Cpu className="w-4 h-4 text-[#D6B77A]" />
                </div>
                <div>
                  <h4 className="font-display font-bold text-lg text-[#F5F3EE]">Zyntara Intelligent Systems</h4>
                  <p className="text-xs text-[#34D399]">Connected workflows, automation & AI</p>
                </div>
              </div>
              <span className="font-mono text-xs px-2.5 py-1 rounded-full bg-[#181D2E] text-[#D6B77A] border border-[#D6B77A]/40 font-semibold">
                One System
              </span>
            </div>

            <div className="mt-6 space-y-4">
              {unifiedBenefits.map((item, idx) => (
                <div key={idx} className="flex items-start gap-3.5">
                  <div className="w-5 h-5 rounded-full bg-[#181D2E] border border-[#2DD4BF]/40 flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#2DD4BF]" />
                  </div>
                  <div>
                    <div className="font-display font-semibold text-sm text-[#F5F3EE]">{item.title}</div>
                    <div className="text-xs text-[#B6BAC4] mt-0.5">{item.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
