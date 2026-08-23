import React from 'react';
import { SectionHeader } from '../common/SectionHeader';
import { Button } from '../common/Button';
import { TiltCard } from '../common/TiltCard';
import { ViewType } from '../../types';
import { 
  ShieldCheck, 
  Target, 
  Layers, 
  Lock, 
  Activity, 
  CheckCircle2, 
  ArrowRight, 
  Sparkles,
  Zap,
  Split,
  Eye,
  Sliders,
  Scale
} from 'lucide-react';

interface WhyZyntaraSectionProps {
  onNavigate: (view: ViewType) => void;
}

export const WhyZyntaraSection: React.FC<WhyZyntaraSectionProps> = ({ onNavigate }) => {
  const fivePrinciples = [
    {
      num: '01',
      title: 'BUSINESS FIRST',
      tagline: 'We start with the process, not the tool.',
      description: 'We don\'t push off-the-shelf software. We analyze your actual operational bottlenecks and design intelligent architecture tailored to how your business runs.'
    },
    {
      num: '02',
      title: 'CONNECTED SYSTEMS',
      tagline: 'Works across the systems your business depends on.',
      description: 'Automation and AI that integrate seamlessly with your CRM, ERP, WhatsApp, email, payment gateways, and databases without requiring you to replace your stack.'
    },
    {
      num: '03',
      title: 'INTELLIGENCE WHEN IT MATTERS',
      tagline: 'Use AI where understanding adds value.',
      description: 'We don\'t use AI indiscriminately. We apply machine reasoning where document extraction, intent classification, and decision support provide genuine leverage.'
    },
    {
      num: '04',
      title: 'HUMAN CONTROL',
      tagline: 'Automate execution without automating accountability.',
      description: 'Systems handle the high-volume repetitive work while routing critical financial, legal, and operational approvals directly to human decision-makers.'
    },
    {
      num: '05',
      title: 'BUILT TO SCALE',
      tagline: 'Start with one workflow. Evolve toward transformation.',
      description: 'Deploy a single high-impact automation in weeks, validate the operational ROI, and expand progressively into an enterprise-wide intelligent operating system.'
    }
  ];

  const genericToolSteps = [
    'Choose triggers from a limited list',
    'Build and maintain fragile custom webhooks',
    'Debug broken API connections yourself',
    'Pay escalating monthly SaaS fees per task',
    'Manage uncoordinated point solutions across teams'
  ];

  const zyntaraSystemSteps = [
    'Understand your end-to-end business process',
    'Design unified enterprise architecture',
    'Connect systems, databases, CRM, and WhatsApp',
    'Deploy deterministic automation and AI agents',
    'Add cognitive intelligence and GraphRAG where needed',
    'Monitor outcomes with strict audit logs and human oversight',
    'Scale from single workflows to autonomous operations'
  ];

  const trustPillars = [
    { name: 'Zero Data Retention', desc: 'Your proprietary business data is never retained or used to train public models.' },
    { name: 'Granular Access Controls', desc: 'Role-based access (RBAC) and SSO ensure team members only access approved data.' },
    { name: 'Immutable Audit Logs', desc: 'Every automated action, agent decision, and data transfer is cryptographically logged.' },
    { name: 'Human Approval Gates', desc: 'Financial disbursements and critical exceptions require explicit human sign-off.' }
  ];

  return (
    <section id="why-zyntara-section" className="py-28 px-4 sm:px-6 lg:px-8 bg-[#090B10] border-t border-white/[0.08] relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/3 w-[800px] h-[500px] bg-[#34D399]/06 blur-[180px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        
        {/* Section 36: WE DON'T AUTOMATE FOR THE SAKE OF AUTOMATION */}
        <SectionHeader
          eyebrow="The Zyntara Engineering Philosophy"
          badge="5 Operating Principles"
          title="WE DON'T AUTOMATE"
          highlightText="FOR THE SAKE OF AUTOMATION."
          description="Tools give you building blocks. Zyntara designs the system around them. We engineer business operations where data, workflows, and intelligence move together with human oversight."
          align="center"
        />

        {/* 5 Core Principles Grid */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {fivePrinciples.map((p, idx) => (
            <TiltCard
              key={idx}
              className={`rounded-3xl ${idx === 4 ? 'md:col-span-2 lg:col-span-2' : ''}`}
            >
              <div
                className={`p-8 rounded-3xl bg-[#0D1018]/90 border border-white/10 shadow-xl flex flex-col justify-between space-y-4 hover:border-[#D6B77A]/40 transition-colors h-full`}
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="font-mono text-xs font-bold px-2.5 py-1 rounded-md bg-[#181D2A] text-[#D6B77A] border border-[#D6B77A]/30">
                      PRINCIPLE {p.num}
                    </span>
                    <Sparkles className="w-4 h-4 text-[#34D399]" />
                  </div>

                  <h3 className="font-display font-extrabold text-lg sm:text-xl text-[#F5F3EE]">
                    {p.title}
                  </h3>
                  <div className="text-xs font-mono text-[#34D399] font-medium mt-1">
                    {p.tagline}
                  </div>

                  <p className="text-xs sm:text-sm text-[#B6BAC4] mt-3 leading-relaxed">
                    {p.description}
                  </p>
                </div>

                <div className="pt-2 flex items-center gap-1 text-xs font-mono text-[#2DD4BF]">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Enterprise Standard</span>
                </div>
              </div>
            </TiltCard>
          ))}
        </div>

        {/* Section 37: NOT ANOTHER AUTOMATION TOOL (DIFFERENTIATION) */}
        <div className="mt-24 p-8 sm:p-12 rounded-3xl bg-gradient-to-b from-[#0D1018] to-[#07090F] border border-white/10 shadow-2xl">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <span className="text-xs font-mono text-[#D6B77A] uppercase tracking-widest font-semibold">
              Clear Differentiation
            </span>
            <h3 className="text-2xl sm:text-4xl font-display font-extrabold text-[#F5F3EE] mt-1">
              NOT ANOTHER AUTOMATION TOOL.
            </h3>
            <p className="text-sm text-[#B6BAC4] mt-2">
              "Tools give you building blocks. Zyntara designs the system around them."
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
            
            {/* Generic Automation Tool Card */}
            <div className="p-8 rounded-2xl bg-[#120E12] border border-rose-500/30 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between pb-4 border-b border-rose-500/20 mb-4">
                  <span className="font-mono text-xs font-bold text-rose-300 uppercase tracking-wider">
                    GENERIC NO-CODE TOOL (Piecemeal)
                  </span>
                  <span className="text-[10px] font-mono text-rose-400 bg-rose-950 px-2 py-0.5 rounded">
                    Fragmented
                  </span>
                </div>

                <div className="space-y-3 font-mono text-xs text-[#B6BAC4]">
                  {genericToolSteps.map((step, idx) => (
                    <div key={idx} className="flex items-start gap-2.5">
                      <span className="text-rose-400 font-bold">✕</span>
                      <span>{step}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-rose-500/20 text-xs text-rose-300/80 italic">
                Leaves your team to maintain complex scripts and uncoordinated tools.
              </div>
            </div>

            {/* Zyntara Enterprise Architecture Card */}
            <div className="p-8 rounded-2xl bg-[#101A14] border border-[#D6B77A]/50 shadow-[0_4px_30px_rgba(214,183,122,0.15)] flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between pb-4 border-b border-[#D6B77A]/20 mb-4">
                  <span className="font-mono text-xs font-bold text-[#D6B77A] uppercase tracking-wider">
                    ZYNTARA ENTERPRISE ARCHITECTURE
                  </span>
                  <span className="text-[10px] font-mono text-[#050506] bg-[#D6B77A] px-2 py-0.5 rounded font-bold">
                    Turnkey System
                  </span>
                </div>

                <div className="space-y-3 font-mono text-xs text-[#F5F3EE]">
                  {zyntaraSystemSteps.map((step, idx) => (
                    <div key={idx} className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#2DD4BF] shrink-0 mt-0.5" />
                      <span>{step}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-[#D6B77A]/20 text-xs text-[#D6B77A] font-medium">
                We deliver a unified, self-running operating architecture built for your business.
              </div>
            </div>

          </div>
        </div>

        {/* Section 41: ENTERPRISE TECHNOLOGY, HUMAN OVERSIGHT (TRUST) */}
        <div className="mt-24 p-8 sm:p-10 rounded-3xl bg-[#0D1018]/90 border border-white/10 shadow-2xl">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-8 border-b border-white/[0.08]">
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-[#34D399]" />
                <span className="text-xs font-mono text-[#34D399] uppercase font-bold tracking-wider">
                  Security & Enterprise Governance
                </span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-display font-extrabold text-[#F5F3EE]">
                ENTERPRISE TECHNOLOGY, HUMAN OVERSIGHT.
              </h3>
              <p className="text-xs sm:text-sm text-[#B6BAC4] max-w-2xl">
                We build intelligent automation systems engineered for institutional security, sovereign data privacy, auditability, and human approval gates.
              </p>
            </div>

            <Button
              variant="outline"
              size="md"
              onClick={() => onNavigate('technology')}
            >
              Security Architecture
            </Button>
          </div>

          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {trustPillars.map((p, idx) => (
              <div key={idx} className="p-4 rounded-2xl bg-[#141824] border border-white/[0.06] space-y-1.5">
                <span className="font-display font-bold text-sm text-[#F5F3EE] block">
                  {p.name}
                </span>
                <p className="text-xs text-[#7E8491] leading-relaxed">
                  {p.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
