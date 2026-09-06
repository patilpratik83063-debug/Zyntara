import React, { useState } from 'react';
import { SectionHeader } from '../common/SectionHeader';
import { Button } from '../common/Button';
import { ViewType } from '../../types';
import { 
  MessageSquare, 
  Users, 
  TrendingUp, 
  Mail, 
  Headphones, 
  Calendar, 
  CreditCard, 
  UserCheck, 
  Cog, 
  FileText, 
  ShoppingCart, 
  CheckCircle2, 
  ArrowRight, 
  Sparkles,
  Zap,
  HelpCircle,
  Clock,
  Send,
  AlertCircle,
  Play,
  RotateCcw
} from 'lucide-react';

interface AutomationExamplesSectionProps {
  onNavigate: (view: ViewType) => void;
}

export const AutomationExamplesSection: React.FC<AutomationExamplesSectionProps> = ({ onNavigate }) => {
  const [activeChannelTab, setActiveChannelTab] = useState<'whatsapp' | 'leads' | 'sales' | 'crm' | 'support' | 'appointments' | 'finance' | 'documents'>('whatsapp');
  const [whatsAppFlowType, setWhatsAppFlowType] = useState<'lead' | 'appointment' | 'support' | 'payment'>('lead');
  const [whatsAppStep, setWhatsAppStep] = useState<number>(0);
  
  // Interactive "What Should We Automate First?" State
  const [selectedDept, setSelectedDept] = useState<string>('Sales');
  const [selectedPainPoint, setSelectedPainPoint] = useState<string>('Lead follow-up & chasing');
  const [selectedTools, setSelectedTools] = useState<string[]>(['WhatsApp', 'CRM', 'Email']);

  const repetitiveQuestions = [
    { question: 'Who follows up with every new lead?', icon: Users },
    { question: 'Who reminds every customer before an appointment?', icon: Calendar },
    { question: 'Who checks every payment status?', icon: CreditCard },
    { question: 'Who moves information from WhatsApp into the CRM?', icon: MessageSquare },
    { question: 'Who sends every invoice reminder?', icon: FileText },
    { question: 'Who prepares the same report every Monday?', icon: TrendingUp },
    { question: 'Who tracks every pending approval?', icon: Cog },
    { question: 'Who manually routes every support request?', icon: Headphones },
  ];

  // WhatsApp Interactive Flows
  const whatsAppFlows = {
    lead: {
      title: 'New Lead Capture & CRM Sync',
      tag: 'LEAD CAPTURE',
      steps: [
        { sender: 'Customer', text: 'Hi, I need an enterprise AI consultation for our 200-person team.', time: '09:30 AM' },
        { sender: 'Zyntara AI', text: 'Hello! I can certainly help. To route this to the right enterprise architect, what core systems do you currently run (e.g. Salesforce, SAP, HubSpot)?', time: '09:30 AM', automated: true },
        { sender: 'Customer', text: 'We use Salesforce CRM and Jira for operations.', time: '09:31 AM' },
        { sender: 'Zyntara AI', text: 'Perfect. I have created a verified lead in Salesforce, notified our Senior Solutions Architect, and scheduled your discovery slot.', time: '09:31 AM', automated: true },
        { sender: 'System Action', text: '✓ Salesforce Contact Created | ✓ Slack Channel Alerted | ✓ Follow-Up Calendar Invite Sent', time: '09:31 AM', system: true }
      ]
    },
    appointment: {
      title: 'Appointment Booking & Confirmation',
      tag: 'BOOKINGS',
      steps: [
        { sender: 'Customer', text: 'Can we book a technical architecture review for tomorrow afternoon?', time: '02:15 PM' },
        { sender: 'Zyntara AI', text: 'Checking live calendar availability... We have slots open at 2:00 PM EST and 4:30 PM EST with our Chief Architect. Which works best?', time: '02:15 PM', automated: true },
        { sender: 'Customer', text: '2:00 PM EST works great.', time: '02:16 PM' },
        { sender: 'Zyntara AI', text: 'Confirmed for 2:00 PM EST tomorrow. Google Meet link sent to your calendar. You will receive a WhatsApp reminder 1 hour prior.', time: '02:16 PM', automated: true },
        { sender: 'System Action', text: '✓ Calendar Slot Reserved | ✓ WhatsApp Reminder Queued | ✓ CRM Meeting Logged', time: '02:16 PM', system: true }
      ]
    },
    support: {
      title: 'Customer Support & Intelligent Escalation',
      tag: 'SUPPORT',
      steps: [
        { sender: 'Customer', text: 'Our webhook endpoint returned a 504 timeout on batch ingestion.', time: '11:42 AM' },
        { sender: 'Zyntara AI', text: 'Analyzing webhook payload logs... Identified: Rate limit threshold exceeded on batch size >5,000. Re-submitting with chunked batching of 1,000 resolves this immediately.', time: '11:42 AM', automated: true },
        { sender: 'Customer', text: 'That fixed it, thanks! Can you log this incident?', time: '11:43 AM' },
        { sender: 'Zyntara AI', text: 'Incident #ZY-8842 logged with high-priority status in Jira Service Desk. Tier-3 on-call engineer notified.', time: '11:43 AM', automated: true },
        { sender: 'System Action', text: '✓ Jira Ticket Created | ✓ Telemetry Snapshot Attached | ✓ Knowledge Base Synced', time: '11:43 AM', system: true }
      ]
    },
    payment: {
      title: 'Payment Reminder & Re-Engagement',
      tag: 'FINANCE & PAYMENTS',
      steps: [
        { sender: 'Zyntara AI', text: 'Hi David, invoice #INV-4029 for the Q3 AI Agent Suite is ready. You can review and approve via the secure portal link below.', time: '10:00 AM', automated: true },
        { sender: 'Customer', text: 'Thanks! Just authorized payment via wire. Can you confirm receipt?', time: '10:14 AM' },
        { sender: 'Zyntara AI', text: 'Checking bank ledger feed... Verified wire settlement of $24,500.00. Receipt #REC-9104 dispatched to your billing email.', time: '10:15 AM', automated: true },
        { sender: 'System Action', text: '✓ QuickBooks Reconciled | ✓ CRM Account Status: ACTIVE | ✓ Operations Cleared', time: '10:15 AM', system: true }
      ]
    }
  };

  const channelCards = [
    {
      id: 'whatsapp',
      title: 'WhatsApp Business Channel',
      headline: 'TURN WHATSAPP INTO A BUSINESS OPERATING CHANNEL.',
      desc: 'Your customers are already on WhatsApp. Your business shouldn\'t depend on someone manually replying to every message. Zyntara connects WhatsApp to your lead management, sales, support, appointments, notifications and internal workflows.',
      tags: ['LEAD CAPTURE', 'AUTO-REPLIES', 'FOLLOW-UPS', 'BOOKINGS', 'NOTIFICATIONS', 'SUPPORT', 'CRM SYNC', 'CAMPAIGNS'],
      cta: 'Build My WhatsApp Workflow',
      quote: "Don't hire another person to watch the inbox. Build a system that knows what should happen next."
    },
    {
      id: 'leads',
      title: 'Lead Flow Automation',
      headline: 'EVERY LEAD SHOULD HAVE A NEXT STEP.',
      desc: 'A lead shouldn\'t disappear because someone forgot to reply. Zyntara automatically captures, qualifies, routes, follows up and updates your lead workflows across the systems you already use.',
      flow: ['VISITOR', 'LEAD', 'QUALIFICATION', 'CRM', 'SALES', 'FOLLOW-UP', 'MEETING', 'PROPOSAL', 'CLOSE'],
      cta: 'Automate My Lead Flow',
      quote: 'Never let high-intent inbound opportunities sit unaddressed.'
    },
    {
      id: 'sales',
      title: 'Sales & Revenue Chasing',
      headline: 'LET YOUR SALES TEAM SELL. LET THE SYSTEM HANDLE THE CHASING.',
      desc: 'From lead assignment to follow-ups, meeting reminders, CRM updates and re-engagement, Zyntara removes the repetitive work around the sales process.',
      tags: ['LEAD ROUTING', 'LEAD SCORING', 'FOLLOW-UP', 'CRM', 'MEETINGS', 'PROPOSALS', 'PIPELINE', 'REACTIVATION'],
      cta: 'Build a Revenue Workflow',
      quote: 'Maximize rep quota attainment by automating meeting reminders and deal staging.'
    },
    {
      id: 'crm',
      title: 'CRM Operating Layer',
      headline: 'YOUR CRM SHOULD WORK FOR YOUR TEAM.',
      desc: 'Stop treating your CRM like a database that someone has to maintain manually. Zyntara turns your CRM into an active operating layer that captures events, triggers workflows, updates records and keeps teams aligned.',
      flow: ['LEAD CREATED', 'ASSIGN OWNER', 'NOTIFY SALES', 'START FOLLOW-UP', 'CREATE TASK', 'BOOK MEETING', 'UPDATE STAGE'],
      cta: 'Automate CRM Operations',
      quote: 'Eliminate 80%+ of manual data entry for reps and account executives.'
    },
    {
      id: 'support',
      title: 'Customer Support Automation',
      headline: 'SUPPORT SHOULD MOVE FASTER THAN THE TICKET QUEUE.',
      desc: 'Route, classify, respond, update and escalate customer requests automatically — while keeping humans in the loop when the situation requires judgment.',
      flow: ['CHAT', 'CLASSIFY', 'ANSWER', 'TICKET', 'ESCALATE', 'RESOLVE', 'FEEDBACK'],
      cta: 'Automate Customer Support',
      quote: 'Instant resolution for 60%+ of routine inquiries with seamless human handoff.'
    },
    {
      id: 'appointments',
      title: 'Appointment Booking',
      headline: 'FROM "CAN WE BOOK A CALL?" TO CONFIRMED.',
      desc: 'Automates scheduling, calendar availability checks, multi-channel confirmations, WhatsApp reminders, instant rescheduling, cancellations, and post-meeting follow-up sequences.',
      tags: ['BOOKING', 'AVAILABILITY', 'CONFIRMATION', 'REMINDERS', 'RESCHEDULING', 'NO-SHOW WORKFLOWS', 'POST-MEETING'],
      cta: 'Automate Appointments',
      quote: 'Reduce no-shows by 45% with synchronized multi-channel reminders.'
    },
    {
      id: 'finance',
      title: 'Finance & Invoicing',
      headline: 'MAKE FINANCE OPERATIONS MOVE.',
      desc: 'Automate the repetitive flow around invoices, approvals, payment reminders, document processing, reporting and financial workflows across QuickBooks, Xero, and ERP.',
      flow: ['INVOICE', 'VALIDATE', 'APPROVE', 'DELIVER', 'REMIND', 'RECONCILE', 'REPORT'],
      cta: 'Automate Finance Operations',
      quote: 'Accelerate cash collection and eliminate manual ledger reconciliation errors.'
    },
    {
      id: 'documents',
      title: 'Document & OCR Processing',
      headline: 'STOP COPYING INFORMATION BETWEEN DOCUMENTS AND SYSTEMS.',
      desc: 'Extract structured data from invoices, receipts, contracts, forms, purchase orders, resumes, and technical reports directly into your databases and CRM.',
      flow: ['DOCUMENT', 'READ', 'EXTRACT', 'VALIDATE', 'ROUTE', 'UPDATE', 'ARCHIVE'],
      cta: 'Automate Document Extraction',
      quote: 'Turn scanned PDFs and paper trails into structured database records in milliseconds.'
    }
  ];

  const activeCard = channelCards.find(c => c.id === activeChannelTab) || channelCards[0];
  const activeFlowData = whatsAppFlows[whatsAppFlowType];

  return (
    <section id="automation-examples-section" className="py-28 px-4 sm:px-6 lg:px-8 bg-[#0F1219] border-t border-white/[0.08] relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* Section 11: WHY AUTOMATION MATTERS */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1E2638] border border-[#D6B77A]/30 text-xs font-tag text-[#D6B77A] mb-4">
            <HelpCircle className="w-3.5 h-3.5 text-[#D6B77A]" />
            <span>Why Automation Matters</span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-5xl font-display font-extrabold text-[#F5F3EE] tracking-tight leading-tight">
            WHAT WOULD YOUR TEAM STOP DOING{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D6B77A] to-[#34D399]">
              IF THE SYSTEM DID IT AUTOMATICALLY?
            </span>
          </h2>

          <p className="text-base text-[#B6BAC4] mt-4 max-w-2xl mx-auto">
            Look at the repetitive daily tasks that drain your team's energy.
          </p>

          {/* 8 Questions Grid */}
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 text-left">
            {repetitiveQuestions.map((q, idx) => {
              const Icon = q.icon;
              return (
                <div 
                  key={idx}
                  className="p-4 rounded-2xl bg-[#1A2030] border border-white/[0.06] hover:border-[#D6B77A]/40 transition-colors flex items-start gap-3 group"
                >
                  <div className="w-8 h-8 rounded-xl bg-[#262E40] border border-white/10 flex items-center justify-center shrink-0 group-hover:border-[#D6B77A]/50 transition-colors">
                    <Icon className="w-4 h-4 text-[#34D399] group-hover:text-[#D6B77A] transition-colors" />
                  </div>
                  <span className="text-xs font-mono text-[#E0E2EC] leading-relaxed">
                    {q.question}
                  </span>
                </div>
              );
            })}
          </div>

          {/* Punchline Banner */}
          <div className="mt-8 p-5 rounded-2xl bg-gradient-to-r from-[#181D2E] via-[#101420] to-[#181D2E] border border-[#D6B77A]/40 flex flex-wrap items-center justify-center gap-3 shadow-lg">
            <Sparkles className="w-5 h-5 text-[#D6B77A]" />
            <span className="font-display font-extrabold text-sm sm:text-base text-[#F5F3EE] tracking-wide uppercase">
              ZYNTARA AUTOMATES THE SYSTEM BEHIND THE WORK.
            </span>
          </div>
        </div>

        {/* Section 34: HIGH-CONVERSION BEFORE / AFTER */}
        <div className="mt-20 p-8 sm:p-10 rounded-3xl bg-[#1A2030]/90 border border-white/10 shadow-2xl relative overflow-hidden">
          <div className="text-center mb-8">
            <span className="text-xs font-tag text-[#2DD4BF] uppercase tracking-widest font-semibold">
              Operational Contrast
            </span>
            <h3 className="text-2xl sm:text-3xl font-display font-bold text-[#F5F3EE] mt-1">
              LESS MANUAL COORDINATION. MORE BUSINESS MOMENTUM.
            </h3>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
            
            {/* BEFORE */}
            <div className="p-6 rounded-2xl bg-[#120E12] border border-rose-500/30 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between pb-4 border-b border-rose-500/20 mb-4">
                  <span className="font-tag text-xs font-bold text-rose-300 uppercase tracking-wider">
                    BEFORE ZYNTARA (MANUAL FRICTION)
                  </span>
                  <span className="text-[10px] font-tag text-rose-400/80 bg-rose-950/80 px-2 py-0.5 rounded">
                    High Latency
                  </span>
                </div>

                <div className="space-y-2.5 font-mono text-xs text-[#B6BAC4]">
                  <div className="p-2.5 rounded-lg bg-[#181016] border border-rose-500/20 text-rose-200">1. Lead arrives on website / WhatsApp</div>
                  <div className="text-center text-rose-500">↓</div>
                  <div className="p-2.5 rounded-lg bg-[#181016] border border-rose-500/20">2. Someone checks WhatsApp inbox manually</div>
                  <div className="text-center text-rose-500">↓</div>
                  <div className="p-2.5 rounded-lg bg-[#181016] border border-rose-500/20">3. Someone copies lead details</div>
                  <div className="text-center text-rose-500">↓</div>
                  <div className="p-2.5 rounded-lg bg-[#181016] border border-rose-500/20">4. Someone pastes into CRM database</div>
                  <div className="text-center text-rose-500">↓</div>
                  <div className="p-2.5 rounded-lg bg-[#181016] border border-rose-500/20">5. Someone remembers to follow up</div>
                  <div className="text-center text-rose-500">↓</div>
                  <div className="p-2.5 rounded-lg bg-[#181016] border border-rose-500/20">6. Someone drafts message & books meeting</div>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-rose-500/20 text-xs text-rose-300/80 italic text-center">
                Result: Hours of delay, dropped leads, and human fatigue.
              </div>
            </div>

            {/* AFTER */}
            <div className="p-6 rounded-2xl bg-[#0B1B13] border border-[#2DD4BF]/40 flex flex-col justify-between shadow-[0_4px_25px_rgba(45, 212, 191,0.1)]">
              <div>
                <div className="flex items-center justify-between pb-4 border-b border-[#2DD4BF]/20 mb-4">
                  <span className="font-tag text-xs font-bold text-[#2DD4BF] uppercase tracking-wider">
                    AFTER ZYNTARA (AUTOMATED OPERATING ENGINE)
                  </span>
                  <span className="text-[10px] font-tag text-[#0F1219] bg-[#2DD4BF] px-2 py-0.5 rounded font-bold">
                    Sub-Second Sync
                  </span>
                </div>

                <div className="space-y-2.5 font-mono text-xs text-[#F5F3EE]">
                  <div className="p-2.5 rounded-lg bg-[#0E2218] border border-[#2DD4BF]/30 text-[#2DD4BF] font-bold">1. Lead arrives on website / WhatsApp</div>
                  <div className="text-center text-[#2DD4BF]">↓</div>
                  <div className="p-2.5 rounded-lg bg-[#0E2218] border border-[#2DD4BF]/30">2. System captures event instantly</div>
                  <div className="text-center text-[#2DD4BF]">↓</div>
                  <div className="p-2.5 rounded-lg bg-[#0E2218] border border-[#2DD4BF]/30">3. AI qualifies intent & extracts requirements</div>
                  <div className="text-center text-[#2DD4BF]">↓</div>
                  <div className="p-2.5 rounded-lg bg-[#0E2218] border border-[#2DD4BF]/30">4. CRM updates & owner assigned automatically</div>
                  <div className="text-center text-[#2DD4BF]">↓</div>
                  <div className="p-2.5 rounded-lg bg-[#0E2218] border border-[#2DD4BF]/30">5. Follow-up sequence begins immediately</div>
                  <div className="text-center text-[#2DD4BF]">↓</div>
                  <div className="p-2.5 rounded-lg bg-[#0E2218] border border-[#2DD4BF]/30 text-[#D6B77A] font-bold">6. Meeting booked & sales team notified</div>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-[#2DD4BF]/20 text-xs text-[#2DD4BF] font-medium text-center">
                Result: Instant response, zero dropped opportunities, predictable pipeline.
              </div>
            </div>

          </div>
        </div>

        {/* Section 12-25: DEDICATED CHANNEL EXPLORER WITH WHATSAPP SIMULATOR */}
        <div className="mt-24">
          <div className="text-center mb-8">
            <span className="text-xs font-tag text-[#D6B77A] uppercase tracking-widest font-semibold">
              Channel & Workflow Directory
            </span>
            <h3 className="text-2xl sm:text-3xl font-display font-bold text-[#F5F3EE] mt-1">
              PRODUCTION AUTOMATION WORKFLOWS
            </h3>
            <p className="text-xs sm:text-sm text-[#7E8491] font-mono mt-1">
              Select a channel to explore architecture and simulated executions.
            </p>
          </div>

          {/* Tabs */}
          <div className="flex flex-wrap justify-center gap-1.5 p-1.5 rounded-2xl bg-[#1A2030] border border-white/10 max-w-4xl mx-auto mb-10">
            {channelCards.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveChannelTab(tab.id as any)}
                className={`px-3.5 py-2 rounded-xl text-xs font-mono font-medium transition-all cursor-pointer ${
                  activeChannelTab === tab.id
                    ? 'bg-gradient-to-r from-[#10B981] to-[#059669] text-white shadow-md'
                    : 'text-[#7E8491] hover:text-[#F5F3EE]'
                }`}
              >
                {tab.title}
              </button>
            ))}
          </div>

          {/* Channel Content Box */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left: Active Channel Specification (7 cols) */}
            <div className="lg:col-span-7 p-8 rounded-3xl bg-[#1A2030]/95 border border-white/10 shadow-2xl space-y-6">
              <div>
                <span className="font-tag text-xs text-[#D6B77A] uppercase font-bold tracking-wider">
                  {activeCard.title}
                </span>
                <h4 className="text-xl sm:text-2xl font-display font-extrabold text-[#F5F3EE] mt-1">
                  {activeCard.headline}
                </h4>
              </div>

              <p className="text-sm sm:text-base text-[#B6BAC4] leading-relaxed">
                {activeCard.desc}
              </p>

              {/* Tags or Flow */}
              {activeCard.tags && (
                <div>
                  <span className="text-xs font-tag text-[#7E8491] uppercase tracking-wider block mb-2">
                    Core Capabilities:
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {activeCard.tags.map((tag, idx) => (
                      <span key={idx} className="px-3 py-1 rounded-lg text-xs font-tag bg-[#222A3A] text-[#34D399] border border-[#34D399]/20">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {activeCard.flow && (
                <div>
                  <span className="text-xs font-tag text-[#7E8491] uppercase tracking-wider block mb-2">
                    Automated Pipeline Flow:
                  </span>
                  <div className="flex flex-wrap items-center gap-1.5 text-xs font-mono text-[#F5F3EE]">
                    {activeCard.flow.map((item, idx) => (
                      <React.Fragment key={idx}>
                        <span className="px-2.5 py-1 rounded-md bg-[#262E40] border border-white/10 text-[#D6B77A]">
                          {item}
                        </span>
                        {idx < activeCard.flow!.length - 1 && (
                          <span className="text-[#7E8491]">→</span>
                        )}
                      </React.Fragment>
                    ))}
                  </div>
                </div>
              )}

              {/* Quote */}
              <div className="p-4 rounded-xl bg-[#222A3A] border-l-2 border-[#D6B77A] text-xs font-mono text-[#E0E2EC] italic">
                "{activeCard.quote}"
              </div>

              <div className="pt-2 flex flex-wrap items-center gap-3">
                <Button
                  variant="primary"
                  size="md"
                  icon
                  onClick={() => onNavigate('contact')}
                >
                  {activeCard.cta}
                </Button>
                <Button
                  variant="outline"
                  size="md"
                  onClick={() => onNavigate('automation')}
                >
                  Explore All Automations
                </Button>
              </div>
            </div>

            {/* Right: Live Interactive WhatsApp Simulator (5 cols) */}
            <div className="lg:col-span-5 p-6 rounded-3xl bg-[#090B10] border border-white/10 shadow-2xl flex flex-col justify-between">
              
              {/* Simulator Header */}
              <div className="flex items-center justify-between pb-4 border-b border-white/[0.08] mb-4">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-full bg-[#25D366]/20 border border-[#25D366]/40 flex items-center justify-center text-[#25D366]">
                    <MessageSquare className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="font-display font-bold text-xs text-[#F5F3EE]">Zyntara WhatsApp Engine</div>
                    <div className="text-[10px] font-mono text-[#25D366] flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#25D366] animate-ping" />
                      Live Interactive Simulation
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap gap-1">
                  {(['lead', 'appointment', 'support', 'payment'] as const).map((type) => (
                    <button
                      key={type}
                      onClick={() => setWhatsAppFlowType(type)}
                      className={`px-2 py-1 rounded text-[10px] font-mono uppercase transition-colors ${
                        whatsAppFlowType === type
                          ? 'bg-[#25D366] text-[#0F1219] font-bold'
                          : 'bg-[#222A3A] text-[#7E8491] hover:text-white'
                      }`}
                    >
                      {type}
                    </button>
                  ))}
                </div>
              </div>

              {/* Chat Window */}
              <div className="space-y-3 min-h-[300px] max-h-[400px] flex flex-col justify-start overflow-y-auto">
                <div className="text-center my-1">
                  <span className="text-[10px] font-tag text-[#7E8491] bg-[#1E2638] px-2.5 py-0.5 rounded-full">
                    Flow: {activeFlowData.title}
                  </span>
                </div>

                {activeFlowData.steps.map((msg, idx) => (
                  <div 
                    key={idx}
                    className={`flex flex-col ${
                      msg.system 
                        ? 'items-center my-2' 
                        : msg.sender === 'Customer' 
                        ? 'items-end' 
                        : 'items-start'
                    }`}
                  >
                    {msg.system ? (
                      <div className="p-2.5 rounded-lg bg-[#222A3A] border border-[#2DD4BF]/30 text-[10px] font-mono text-[#2DD4BF] text-center w-full shadow-sm">
                        {msg.text}
                      </div>
                    ) : (
                      <div className={`p-3 rounded-2xl max-w-[85%] text-xs leading-relaxed ${
                        msg.sender === 'Customer'
                          ? 'bg-[#181D2E] text-[#F5F3EE] rounded-tr-none border border-white/10'
                          : 'bg-[#0E281E] text-[#E0E2EC] rounded-tl-none border border-[#25D366]/30'
                      }`}>
                        <div className="text-[9px] font-mono text-[#7E8491] mb-1">
                          {msg.sender} • {msg.time}
                        </div>
                        <div>{msg.text}</div>
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {/* Simulator Footer Action */}
              <div className="mt-4 pt-3 border-t border-white/[0.08] flex items-center justify-between">
                <span className="text-[10px] font-mono text-[#7E8491]">
                  Connected: WhatsApp API ↔ Salesforce ↔ Calendar
                </span>
                <button
                  onClick={() => onNavigate('contact')}
                  className="text-xs font-mono text-[#D6B77A] hover:underline flex items-center gap-1 cursor-pointer"
                >
                  Deploy This Flow <ArrowRight className="w-3 h-3" />
                </button>
              </div>

            </div>

          </div>
        </div>

        {/* Section 33: "WHAT CAN WE AUTOMATE?" INTERACTIVE TOOL */}
        <div className="mt-28 p-8 sm:p-12 rounded-3xl bg-gradient-to-b from-[#1A2030] to-[#080A10] border border-white/10 shadow-2xl relative overflow-hidden">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#262E40] text-xs font-tag text-[#D6B77A] border border-[#D6B77A]/30 mb-2">
              <Sparkles className="w-3.5 h-3.5 text-[#D6B77A]" />
              <span>Interactive Workflow Blueprint Generator</span>
            </div>
            <h3 className="text-2xl sm:text-4xl font-display font-extrabold text-[#F5F3EE]">
              WHAT SHOULD WE AUTOMATE FIRST?
            </h3>
            <p className="text-xs sm:text-sm text-[#B6BAC4] mt-2">
              Select your department and operational friction point to see your custom end-to-end automation architecture.
            </p>
          </div>

          {/* Step 1: Department Selector */}
          <div className="space-y-6 max-w-4xl mx-auto">
            <div>
              <span className="text-xs font-tag text-[#7E8491] uppercase tracking-wider block mb-2">
                1. Select Department:
              </span>
              <div className="flex flex-wrap gap-2">
                {['Sales', 'Marketing', 'Customer Support', 'Finance', 'HR', 'Operations', 'Procurement', 'IT', 'E-commerce'].map((dept) => (
                  <button
                    key={dept}
                    onClick={() => {
                      setSelectedDept(dept);
                      if (dept === 'Sales') setSelectedPainPoint('Lead follow-up & chasing');
                      else if (dept === 'Marketing') setSelectedPainPoint('Campaign lead routing & CRM sync');
                      else if (dept === 'Customer Support') setSelectedPainPoint('Ticket classification & WhatsApp reply');
                      else if (dept === 'Finance') setSelectedPainPoint('Invoice approval & payment chasing');
                      else if (dept === 'HR') setSelectedPainPoint('Candidate screening & interview booking');
                      else setSelectedPainPoint('Cross-system data sync & reporting');
                    }}
                    className={`px-4 py-2 rounded-xl text-xs font-mono transition-all cursor-pointer ${
                      selectedDept === dept
                        ? 'bg-[#D6B77A] text-[#0F1219] font-bold shadow-[0_0_15px_rgba(214,183,122,0.4)]'
                        : 'bg-[#222A3A] text-[#B6BAC4] hover:text-white border border-white/[0.06]'
                    }`}
                  >
                    {dept}
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Pain Point */}
            <div>
              <span className="text-xs font-tag text-[#7E8491] uppercase tracking-wider block mb-2">
                2. Target Friction Point:
              </span>
              <div className="p-3 rounded-xl bg-[#222A3A] border border-white/10 text-xs font-mono text-[#F5F3EE] flex items-center justify-between">
                <span>{selectedPainPoint}</span>
                <span className="text-[10px] text-[#2DD4BF] bg-[#102420] px-2 py-0.5 rounded font-tag">
                  Target Workflow
                </span>
              </div>
            </div>

            {/* Output: YOUR AUTOMATION OPPORTUNITY BLUEPRINT */}
            <div className="mt-8 p-6 rounded-2xl bg-[#101A14] border border-[#34D399]/40 shadow-xl">
              <div className="flex items-center justify-between pb-3 border-b border-white/[0.08] mb-4">
                <span className="text-sm font-tag font-bold text-[#D6B77A] uppercase tracking-wider">
                  YOUR AUTOMATION OPPORTUNITY: {selectedDept.toUpperCase()} PIPELINE
                </span>
                <span className="text-[10px] font-mono text-[#34D399]">
                  Level 03-04 Automation
                </span>
              </div>

              {/* Flow: TRIGGER → PROCESS → SYSTEM → AI → ACTION → HUMAN APPROVAL */}
              <div className="grid grid-cols-2 sm:grid-cols-6 gap-2 text-center text-xs font-mono">
                <div className="p-2.5 rounded-lg bg-[#262E40] border border-white/10">
                  <div className="text-[9px] text-[#7E8491]">TRIGGER</div>
                  <div className="font-bold text-[#F5F3EE] mt-0.5">Event Detected</div>
                </div>
                <div className="p-2.5 rounded-lg bg-[#262E40] border border-white/10">
                  <div className="text-[9px] text-[#7E8491]">PROCESS</div>
                  <div className="font-bold text-[#F5F3EE] mt-0.5">Validation</div>
                </div>
                <div className="p-2.5 rounded-lg bg-[#262E40] border border-white/10">
                  <div className="text-[9px] text-[#7E8491]">SYSTEM</div>
                  <div className="font-bold text-[#34D399] mt-0.5">CRM / ERP Sync</div>
                </div>
                <div className="p-2.5 rounded-lg bg-[#262E40] border border-white/10">
                  <div className="text-[9px] text-[#7E8491]">AI</div>
                  <div className="font-bold text-[#D6B77A] mt-0.5">Intent Reasoning</div>
                </div>
                <div className="p-2.5 rounded-lg bg-[#262E40] border border-white/10">
                  <div className="text-[9px] text-[#7E8491]">ACTION</div>
                  <div className="font-bold text-[#2DD4BF] mt-0.5">Auto Handoff</div>
                </div>
                <div className="p-2.5 rounded-lg bg-[#262E40] border border-white/10">
                  <div className="text-[9px] text-[#7E8491]">OVERSIGHT</div>
                  <div className="font-bold text-white mt-0.5">Human Approval</div>
                </div>
              </div>

              <div className="mt-6 flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-white/[0.08]">
                <div className="text-xs text-[#B6BAC4] text-center sm:text-left">
                  Ready to deploy this workflow without disrupting your existing technology stack?
                </div>
                <Button
                  variant="glow"
                  size="md"
                  icon
                  onClick={() => onNavigate('contact')}
                >
                  Discuss This Workflow With Zyntara
                </Button>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
