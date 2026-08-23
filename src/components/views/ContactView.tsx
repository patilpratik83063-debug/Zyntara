import React, { useState } from 'react';
import { SectionHeader } from '../common/SectionHeader';
import { Button } from '../common/Button';
import { ZYNTARA_LOGO_ICON, ZYNTARA_LOGO_EMBLEM } from '../../assets/logo';
import { ViewType, ContactSubmission } from '../../types';
import { 
  Building2, 
  Mail, 
  User, 
  Send, 
  CheckCircle2, 
  ShieldCheck, 
  Calendar, 
  Clock, 
  FileText, 
  Lock, 
  Sparkles,
  PhoneCall
} from 'lucide-react';

interface ContactViewProps {
  onNavigate: (view: ViewType) => void;
  onOpenAssessment: () => void;
}

export const ContactView: React.FC<ContactViewProps> = ({
  onNavigate,
  onOpenAssessment
}) => {
  const [formData, setFormData] = useState<ContactSubmission>({
    fullName: '',
    workEmail: '',
    companyName: '',
    jobTitle: '',
    industry: 'Manufacturing & Industrial',
    companySize: '1,000 - 5,000 employees',
    currentStack: 'SAP S/4HANA, Salesforce, Snowflake',
    primaryGoal: 'Autonomous Multi-Agent Workforce',
    timeline: '1 - 3 Months',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [selectedSlot, setSelectedSlot] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate enterprise lead submission & CRM ingestion
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1000);
  };

  const calendarSlots = [
    'Tuesday, 10:00 AM EST (Executive Architecture Call)',
    'Wednesday, 2:00 PM EST (Enterprise Scoping Session)',
    'Thursday, 11:30 AM EST (Zyntara One™ Feasibility Review)',
    'Friday, 3:00 PM EST (C-Suite Strategy Briefing)'
  ];

  return (
    <div className="pt-28 pb-24 px-4 sm:px-6 lg:px-8 bg-[#07090E] min-h-screen text-slate-100">
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Header with Official Logo Badge */}
        <div className="text-center max-w-4xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#121622] border border-[#2DD4BF]/30 text-xs font-mono text-[#2DD4BF] shadow-[0_0_15px_rgba(45, 212, 191,0.2)]">
            <img 
              src={ZYNTARA_LOGO_ICON} 
              alt="Zyntara" 
              referrerPolicy="no-referrer"
              className="w-4 h-4 rounded-full object-cover"
            />
            <span>ZYNTARA TECHNOLOGY • ENTERPRISE ENGAGEMENT</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-extrabold text-white tracking-tight leading-[1.1]">
            START YOUR AI TRANSFORMATION
          </h1>

          <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto">
            Engage directly with Zyntara Technology's enterprise transformation partners and systems architects to scope your organization's transition to an autonomous operating model.
          </p>
        </div>

        {/* 2-Column Scoping Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: What to Expect & Enterprise Guarantees (5 cols) */}
          <div className="lg:col-span-5 space-y-8">
            <div className="p-8 rounded-3xl bg-[#090C16] border border-emerald-500/30 shadow-2xl space-y-6">
              <h2 className="text-2xl font-display font-bold text-white">
                What Happens Next
              </h2>
              <p className="text-xs text-slate-400 font-mono">
                A structured, high-velocity onboarding path for enterprise leadership:
              </p>

              <div className="space-y-4">
                <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 flex items-start gap-3.5">
                  <div className="w-7 h-7 rounded-full bg-emerald-600 text-white font-mono text-xs font-bold flex items-center justify-center shrink-0">
                    1
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-white">Confidential Assessment</h3>
                    <p className="text-xs text-slate-400 mt-0.5">
                      Our architecture team reviews your systems of record and industry compliance perimeter under NDA.
                    </p>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 flex items-start gap-3.5">
                  <div className="w-7 h-7 rounded-full bg-emerald-600 text-white font-mono text-xs font-bold flex items-center justify-center shrink-0">
                    2
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-white">45-Minute Scoping Call</h3>
                    <p className="text-xs text-slate-400 mt-0.5">
                      Executive session with a Managing Partner to align on operational bottlenecks and EBITDA leverage targets.
                    </p>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 flex items-start gap-3.5">
                  <div className="w-7 h-7 rounded-full bg-emerald-600 text-white font-mono text-xs font-bold flex items-center justify-center shrink-0">
                    3
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-white">Custom Zyntara One™ Blueprint</h3>
                    <p className="text-xs text-slate-400 mt-0.5">
                      Receive a tailored 8-layer architectural proposal, multi-agent topology, and guaranteed ROI model.
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-emerald-950/40 border border-emerald-500/20 text-xs text-slate-300 space-y-2">
                <div className="flex items-center gap-2 text-emerald-300 font-mono font-semibold">
                  <ShieldCheck className="w-4 h-4" />
                  <span>Enterprise Data Guarantee</span>
                </div>
                <p className="text-[11px] text-slate-400 leading-relaxed">
                  All enterprise dialogues, data reviews, and architectural scoping are conducted under strict non-disclosure. We never train public models on your proprietary information.
                </p>
              </div>
            </div>

            {/* Quick Readiness Assessment Callout */}
            <div className="p-6 rounded-2xl bg-gradient-to-r from-emerald-950/40 to-slate-900 border border-slate-800 flex items-center justify-between">
              <div>
                <div className="text-sm font-semibold text-white">Need an immediate diagnostic?</div>
                <div className="text-xs text-slate-400 mt-0.5">Run our interactive 6-stage audit tool</div>
              </div>
              <button
                onClick={onOpenAssessment}
                className="px-4 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-emerald-300 text-xs font-mono border border-slate-700"
              >
                Readiness Audit →
              </button>
            </div>
          </div>

          {/* Right Column: Interactive Form or Success State (7 cols) */}
          <div className="lg:col-span-7">
            {isSubmitted ? (
              <div className="p-8 sm:p-10 rounded-3xl bg-[#090C16] border border-emerald-400/40 shadow-2xl space-y-6 text-center">
                <div className="w-16 h-16 rounded-full bg-emerald-950 border border-emerald-400 text-emerald-300 flex items-center justify-center mx-auto shadow-[0_0_20px_#34d399]">
                  <CheckCircle2 className="w-8 h-8" />
                </div>

                <div className="space-y-2">
                  <h3 className="text-2xl sm:text-3xl font-display font-extrabold text-white">
                    Engagement Request Received
                  </h3>
                  <p className="text-sm text-slate-300 max-w-md mx-auto">
                    Thank you, <span className="text-emerald-300 font-semibold">{formData.fullName}</span>. A Managing Partner and Principal Systems Architect from our {formData.industry} practice have received your briefing.
                  </p>
                </div>

                <div className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 text-left space-y-4 max-w-md mx-auto">
                  <div className="text-xs font-mono text-emerald-400 uppercase">
                    Direct Calendar Reservation (Optional):
                  </div>
                  <div className="space-y-2">
                    {calendarSlots.map((slot, idx) => (
                      <button
                        key={idx}
                        onClick={() => setSelectedSlot(slot)}
                        className={`w-full text-left p-3 rounded-xl text-xs font-mono transition-all border cursor-pointer ${
                          selectedSlot === slot
                            ? 'bg-emerald-600 text-white border-emerald-300 shadow-[0_0_12px_#34d399]'
                            : 'bg-slate-950 text-slate-300 border-slate-800 hover:border-slate-700'
                        }`}
                      >
                        {slot}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="pt-4 flex justify-center gap-4">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormData({
                        fullName: '',
                        workEmail: '',
                        companyName: '',
                        jobTitle: '',
                        industry: 'Manufacturing & Industrial',
                        companySize: '1,000 - 5,000 employees',
                        currentStack: '',
                        primaryGoal: 'Autonomous Multi-Agent Workforce',
                        timeline: '1 - 3 Months',
                        message: ''
                      });
                    }}
                  >
                    Submit Another Briefing
                  </Button>
                  <Button
                    variant="primary"
                    size="sm"
                    onClick={() => onNavigate('home')}
                  >
                    Return to Overview
                  </Button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="p-8 sm:p-10 rounded-3xl bg-[#090C16] border border-emerald-500/30 shadow-2xl space-y-6">
                <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                  <h3 className="text-xl font-display font-bold text-white">
                    Executive Scoping Form
                  </h3>
                  <span className="text-xs font-mono text-emerald-400">
                    Average Response Time: &lt; 2 Hours
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-mono text-slate-300">Full Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Katherine Sterling"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-xs text-white placeholder-slate-500 focus:border-emerald-500 focus:outline-none"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-mono text-slate-300">Enterprise Work Email *</label>
                    <input
                      type="email"
                      required
                      placeholder="name@company.com"
                      value={formData.workEmail}
                      onChange={(e) => setFormData({ ...formData, workEmail: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-xs text-white placeholder-slate-500 focus:border-emerald-500 focus:outline-none"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-mono text-slate-300">Company Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Global Dynamics Corp"
                      value={formData.companyName}
                      onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-xs text-white placeholder-slate-500 focus:border-emerald-500 focus:outline-none"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-mono text-slate-300">Job Title / Role *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Chief Operating Officer"
                      value={formData.jobTitle}
                      onChange={(e) => setFormData({ ...formData, jobTitle: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-xs text-white placeholder-slate-500 focus:border-emerald-500 focus:outline-none"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-mono text-slate-300">Industry Sector</label>
                    <select
                      value={formData.industry}
                      onChange={(e) => setFormData({ ...formData, industry: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-xs text-white focus:border-emerald-500 focus:outline-none"
                    >
                      <option>Manufacturing & Industrial</option>
                      <option>Financial Services & Banking</option>
                      <option>Healthcare & Health Systems</option>
                      <option>Retail & Consumer Goods</option>
                      <option>Logistics & Supply Chain</option>
                      <option>Real Estate & Infrastructure</option>
                      <option>Technology & Enterprise SaaS</option>
                      <option>Pharma & Life Sciences</option>
                    </select>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-mono text-slate-300">Company Size</label>
                    <select
                      value={formData.companySize}
                      onChange={(e) => setFormData({ ...formData, companySize: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-xs text-white focus:border-emerald-500 focus:outline-none"
                    >
                      <option>Under 250 employees</option>
                      <option>250 - 1,000 employees</option>
                      <option>1,000 - 5,000 employees</option>
                      <option>5,000 - 20,000 employees</option>
                      <option>20,000+ employees (Global Enterprise)</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-mono text-slate-300">Current Core Stack (ERP, CRM, Databases)</label>
                  <input
                    type="text"
                    placeholder="e.g. SAP S/4HANA, Salesforce CRM, Snowflake, Workday"
                    value={formData.currentStack}
                    onChange={(e) => setFormData({ ...formData, currentStack: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-xs text-white placeholder-slate-500 focus:border-emerald-500 focus:outline-none"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-mono text-slate-300">Primary Transformation Goal</label>
                    <select
                      value={formData.primaryGoal}
                      onChange={(e) => setFormData({ ...formData, primaryGoal: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-xs text-white focus:border-emerald-500 focus:outline-none"
                    >
                      <option>Zyntara One™ Architecture Deployment</option>
                      <option>Autonomous Multi-Agent Workforce</option>
                      <option>Enterprise Intelligence & GraphRAG</option>
                      <option>AI Revenue Engine & Sales Agents</option>
                      <option>Intelligent Operations & ERP Automation</option>
                      <option>Predictive Digital Twin Simulation</option>
                    </select>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-mono text-slate-300">Target Timeline</label>
                    <select
                      value={formData.timeline}
                      onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-xs text-white focus:border-emerald-500 focus:outline-none"
                    >
                      <option>Immediate / Next 30 Days</option>
                      <option>1 - 3 Months</option>
                      <option>3 - 6 Months</option>
                      <option>FY2026 Strategy Planning</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-mono text-slate-300">Specific Challenges or Transformation Scope</label>
                  <textarea
                    rows={3}
                    placeholder="Briefly describe your high-friction operational workflows, target EBITDA impact, or integration requirements..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-xs text-white placeholder-slate-500 focus:border-emerald-500 focus:outline-none"
                  />
                </div>

                <Button
                  type="submit"
                  variant="glow"
                  size="lg"
                  icon
                  className="w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Transmitting Scoping Brief...' : 'Request Architecture Consultation'}
                </Button>
              </form>
            )}
          </div>

        </div>

      </div>
    </div>
  );
};
