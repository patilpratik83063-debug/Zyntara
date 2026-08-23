import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { SectionHeader } from '../common/SectionHeader';
import { Button } from '../common/Button';
import { ViewType } from '../../types';
import { 
  ChevronDown, 
  HelpCircle, 
  Sparkles, 
  MessageSquare, 
  ShieldCheck, 
  Layers, 
  ArrowRight 
} from 'lucide-react';

interface FAQSectionProps {
  onNavigate: (view: ViewType) => void;
}

export const FAQSection: React.FC<FAQSectionProps> = ({ onNavigate }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: 'How is Zyntara different from Zapier or Make?',
      category: 'Architecture',
      a: 'Tools like Zapier or Make give you basic building blocks for simple if-this-then-that triggers, but leave you to design, build, debug, and maintain fragile integrations yourself. Zyntara designs and engineers the entire unified operating architecture for your business — connecting your data, deterministic automations, cognitive AI agents, and WhatsApp channels with production-grade security, error handling, and continuous human oversight.'
    },
    {
      q: 'Do we have to replace our current software, ERP, or CRM?',
      category: 'Integration',
      a: 'No. Zyntara is engineered to sit on top of and connect your existing software stack (Salesforce, HubSpot, SAP, QuickBooks, Zendesk, PostgreSQL, Google Workspace, etc.). We turn your existing tools into an active, synchronized operating engine without forcing your team through a painful platform migration.'
    },
    {
      q: 'How does Zyntara use WhatsApp for business operations?',
      category: 'WhatsApp',
      a: 'Zyntara transforms WhatsApp from a manual messaging inbox into an autonomous business operating channel. Connected to the official WhatsApp Business Cloud API, our systems automatically qualify inbound leads, schedule calendar appointments, resolve customer support inquiries, route payments, and update your CRM in real time.'
    },
    {
      q: 'How do you handle enterprise security and sensitive customer data?',
      category: 'Security',
      a: 'We adhere to institutional security standards with zero data retention for AI model training. All customer and business data stays within your sovereign environment. We implement end-to-end encryption, strict role-based access control (RBAC), single sign-on (SSO), and immutable audit logging for full compliance with GDPR, HIPAA, and SOC 2.'
    },
    {
      q: 'Can humans still review and approve actions before they happen?',
      category: 'Oversight',
      a: 'Absolutely. We believe in automating execution without automating accountability. You define the exact approval thresholds (e.g., financial disbursements above a certain dollar amount, specific contract terms, or edge-case customer escalations) that require explicit human sign-off via Slack, WhatsApp, or email before the action is executed.'
    },
    {
      q: 'How long does it take to deploy an automation or AI workforce?',
      category: 'Timeline',
      a: 'Targeted single-workflow automations and initial WhatsApp pipelines are deployed in 2 to 4 weeks. Multi-agent departmental swarms and comprehensive Zyntara One™ enterprise architectures typically deploy in 6 to 12 weeks with full staging validation, staff training, and supervised rollout.'
    },
    {
      q: 'What kind of businesses benefit most from Zyntara?',
      category: 'Fit',
      a: 'Zyntara delivers massive ROI for growing SMEs, mid-market companies, and global enterprises that experience operational friction from high-volume customer inquiries, manual CRM data entry, multi-system coordination, and repetitive document processing across sales, support, finance, and logistics.'
    },
    {
      q: 'What is Zyntara One™?',
      category: 'Platform',
      a: 'Zyntara One™ is our flagship Unified Enterprise AI Architecture. It seamlessly connects five critical layers: Data Fabric, Enterprise Intelligence (GraphRAG), Autonomous AI Workforce, Deterministic Business Automation, and Front-Office/Back-Office Systems into a single, cohesive operating platform.'
    }
  ];

  const toggleFAQ = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq-section" className="py-28 px-4 sm:px-6 lg:px-8 bg-[#07090E] border-t border-white/[0.08] relative overflow-hidden">
      <div className="max-w-5xl mx-auto">
        
        {/* Section Header */}
        <SectionHeader
          eyebrow="Executive & Technical FAQ"
          badge="Direct Answers"
          title="FREQUENTLY ASKED"
          highlightText="QUESTIONS."
          description="Everything you need to know about our enterprise AI architecture, WhatsApp business automation, security guardrails, and deployment timeline."
          align="center"
        />

        {/* FAQ Accordion List */}
        <div className="mt-14 space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className={`rounded-2xl transition-all duration-300 border overflow-hidden ${
                  isOpen
                    ? 'bg-[#101A14] border-[#D6B77A]/50 shadow-[0_4px_25px_rgba(214,183,122,0.1)]'
                    : 'bg-[#0D1018]/90 border-white/[0.06] hover:border-white/15'
                }`}
              >
                <button
                  onClick={() => toggleFAQ(idx)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 cursor-pointer"
                >
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-xs font-bold text-[#D6B77A] px-2 py-0.5 rounded bg-[#181D2A] border border-[#D6B77A]/20">
                      0{idx + 1}
                    </span>
                    <span className="font-display font-bold text-base sm:text-lg text-[#F5F3EE]">
                      {faq.q}
                    </span>
                  </div>

                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                    className={`shrink-0 text-[#7E8491] ${isOpen ? 'text-[#D6B77A]' : ''}`}
                  >
                    <ChevronDown className="w-5 h-5" />
                  </motion.div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="faq-answer"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 pt-1 text-sm sm:text-base text-[#B6BAC4] leading-relaxed border-t border-white/[0.04]">
                        <p>{faq.a}</p>
                        <div className="mt-4 flex items-center gap-2 text-xs font-mono text-[#34D399]">
                          <span>Category: {faq.category}</span>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Bottom Contact Prompt */}
        <div className="mt-14 p-6 rounded-2xl bg-[#0D1018] border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div>
            <div className="font-display font-bold text-sm text-[#F5F3EE]">
              Have a specific technical or security question not listed here?
            </div>
            <div className="text-xs text-[#7E8491] font-mono mt-0.5">
              Our enterprise solutions architects are available for direct technical consultations.
            </div>
          </div>

          <Button
            variant="outline"
            size="md"
            icon
            onClick={() => onNavigate('contact')}
          >
            Speak With An Architect
          </Button>
        </div>

      </div>
    </section>
  );
};
