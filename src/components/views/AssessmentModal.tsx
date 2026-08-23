import React, { useState } from 'react';
import { ViewType } from '../../types';
import { Button } from '../common/Button';
import { ZYNTARA_LOGO_ICON } from '../../assets/logo';
import { 
  X, 
  CheckCircle2, 
  BarChart3, 
  ArrowRight, 
  Cpu, 
  Sparkles, 
  Layers, 
  ShieldCheck, 
  TrendingUp, 
  Zap, 
  Database,
  Building2,
  Calendar
} from 'lucide-react';

interface AssessmentModalProps {
  isOpen: boolean;
  onClose: () => void;
  onProceedToContact: (assessmentData: any) => void;
}

export const AssessmentModal: React.FC<AssessmentModalProps> = ({
  isOpen,
  onClose,
  onProceedToContact
}) => {
  const [step, setStep] = useState<1 | 2 | 3 | 4>(1);
  const [formData, setFormData] = useState({
    companySize: '500-2,500',
    primaryIndustry: 'Manufacturing & Industrial',
    currentSystems: ['SAP / Enterprise ERP', 'Salesforce / Enterprise CRM'],
    biggestPainPoint: 'Disconnected AI tools & manual cross-department handoffs',
    primaryGoal: 'Autonomous operations & unified enterprise intelligence',
    timelineTarget: '3-6 months'
  });

  if (!isOpen) return null;

  const toggleSystem = (sys: string) => {
    setFormData(prev => {
      const exists = prev.currentSystems.includes(sys);
      return {
        ...prev,
        currentSystems: exists 
          ? prev.currentSystems.filter(s => s !== sys)
          : [...prev.currentSystems, sys]
      };
    });
  };

  const calculateScore = () => {
    // Generate maturity insights
    return {
      currentStage: 'Stage 2: Fragmented AI Experimentation',
      targetStage: 'Stage 5: Unified Autonomous Enterprise',
      readinessScore: 78,
      recommendedArchitecture: 'Zyntara One™ Hybrid Core (Data Fabric + Multi-Agent Swarm + ERP Connectors)',
      estimatedEfficiencyGain: '38% - 52%',
      paybackPeriod: '4.8 Months'
    };
  };

  const results = calculateScore();

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-xl overflow-y-auto">
      <div 
        className="relative w-full max-w-3xl rounded-2xl bg-[#0A0D14] border border-emerald-500/30 shadow-[0_0_50px_rgba(16, 185, 129,0.25)] p-6 sm:p-8 text-slate-100 my-8 overflow-hidden"
        role="dialog"
        aria-modal="true"
      >
        {/* Subtle decorative glow */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-600/10 rounded-full blur-3xl pointer-events-none" />

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 rounded-lg bg-slate-900/80 hover:bg-slate-800 text-slate-400 hover:text-white border border-slate-800 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header with Official Logo Icon */}
        <div className="mb-6">
          <div className="flex items-center gap-2.5 mb-1.5">
            <img 
              src={ZYNTARA_LOGO_ICON} 
              alt="Zyntara" 
              referrerPolicy="no-referrer"
              className="w-5 h-5 rounded-full object-cover shadow-[0_0_8px_rgba(45, 212, 191,0.6)]"
            />
            <span className="font-mono text-xs text-[#2DD4BF] tracking-wider uppercase font-semibold">
              Zyntara Technology • Executive Assessment Engine
            </span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-display font-bold text-white">
            Enterprise AI Readiness & Architecture Index
          </h3>
          <p className="text-sm text-slate-400 mt-1">
            Evaluate your enterprise architecture readiness and generate a tailored Zyntara One™ transformation blueprint.
          </p>

          {/* Progress Indicators */}
          <div className="flex items-center gap-2 mt-4">
            {[1, 2, 3, 4].map((i) => (
              <div 
                key={i} 
                className={`h-1.5 flex-1 rounded-full transition-all duration-300 ${
                  step >= i ? 'bg-emerald-500 shadow-[0_0_8px_#10b981]' : 'bg-slate-800'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Step 1: Enterprise Profile & Size */}
        {step === 1 && (
          <div className="space-y-6">
            <div>
              <label className="block text-xs font-mono uppercase text-slate-300 mb-2">
                01. Enterprise Employee Scale
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {['100 - 500', '500 - 2,500', '2,500 - 10,000', '10,000+'].map((size) => (
                  <button
                    key={size}
                    type="button"
                    onClick={() => setFormData({ ...formData, companySize: size })}
                    className={`py-3 px-3 rounded-lg text-xs font-medium border text-center transition-all ${
                      formData.companySize === size
                        ? 'bg-emerald-950/80 border-emerald-400 text-emerald-200 shadow-[0_0_15px_rgba(0,210,255,0.2)]'
                        : 'bg-slate-900/60 border-slate-800 text-slate-300 hover:border-slate-700'
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-xs font-mono uppercase text-slate-300 mb-2">
                02. Core Industry Vertical
              </label>
              <select
                value={formData.primaryIndustry}
                onChange={(e) => setFormData({ ...formData, primaryIndustry: e.target.value })}
                className="w-full px-4 py-3 rounded-lg bg-slate-900 border border-slate-800 text-slate-100 text-sm focus:border-emerald-500 focus:outline-none"
              >
                <option value="Manufacturing & Industrial">Manufacturing & Industrial</option>
                <option value="Financial Services & Banking">Financial Services & Banking</option>
                <option value="Healthcare & Health Systems">Healthcare & Health Systems</option>
                <option value="Retail & Consumer Goods">Retail & Consumer Goods</option>
                <option value="Logistics & Supply Chain">Logistics & Supply Chain</option>
                <option value="Technology & Enterprise SaaS">Technology & Enterprise SaaS</option>
                <option value="Pharma & Life Sciences">Pharma & Life Sciences</option>
                <option value="Real Estate & Infrastructure">Real Estate & Infrastructure</option>
              </select>
            </div>

            <div className="pt-4 flex justify-end">
              <Button variant="primary" size="md" icon onClick={() => setStep(2)}>
                Next: Systems & Tech Stack
              </Button>
            </div>
          </div>
        )}

        {/* Step 2: Existing Systems & Stack */}
        {step === 2 && (
          <div className="space-y-6">
            <div>
              <label className="block text-xs font-mono uppercase text-slate-300 mb-2">
                03. Select Active Enterprise Systems of Record
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  'SAP / Enterprise ERP',
                  'Salesforce / Enterprise CRM',
                  'Oracle / NetSuite Financials',
                  'Workday / HRIS',
                  'Snowflake / Databricks Data Lake',
                  'Custom Legacy Databases & APIs',
                  'ServiceNow / Jira ITSM',
                  'Microsoft 365 / Google Workspace'
                ].map((sys) => {
                  const selected = formData.currentSystems.includes(sys);
                  return (
                    <button
                      key={sys}
                      type="button"
                      onClick={() => toggleSystem(sys)}
                      className={`py-3 px-4 rounded-lg text-xs font-medium border text-left flex items-center justify-between transition-all ${
                        selected
                          ? 'bg-emerald-950/80 border-emerald-400 text-emerald-200'
                          : 'bg-slate-900/60 border-slate-800 text-slate-300 hover:border-slate-700'
                      }`}
                    >
                      <span>{sys}</span>
                      {selected && <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />}
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="pt-4 flex items-center justify-between">
              <button 
                onClick={() => setStep(1)}
                className="text-xs text-slate-400 hover:text-white"
              >
                Back
              </button>
              <Button variant="primary" size="md" icon onClick={() => setStep(3)}>
                Next: Transformation Objectives
              </Button>
            </div>
          </div>
        )}

        {/* Step 3: Transformation Pain Points & Goals */}
        {step === 3 && (
          <div className="space-y-6">
            <div>
              <label className="block text-xs font-mono uppercase text-slate-300 mb-2">
                04. Primary Organizational AI Challenge
              </label>
              <div className="space-y-2.5">
                {[
                  'Disconnected AI tools & manual cross-department handoffs',
                  'Unstructured enterprise data locked in PDFs, silos, and old databases',
                  'High operational latency in sales, underwriting, or invoice workflows',
                  'Compliance, security, and data privacy governance barriers'
                ].map((pain) => (
                  <button
                    key={pain}
                    type="button"
                    onClick={() => setFormData({ ...formData, biggestPainPoint: pain })}
                    className={`w-full py-3 px-4 rounded-lg text-xs font-medium border text-left transition-all ${
                      formData.biggestPainPoint === pain
                        ? 'bg-emerald-950/80 border-emerald-400 text-emerald-200'
                        : 'bg-slate-900/60 border-slate-800 text-slate-300 hover:border-slate-700'
                    }`}
                  >
                    {pain}
                  </button>
                ))}
              </div>
            </div>

            <div className="pt-4 flex items-center justify-between">
              <button 
                onClick={() => setStep(2)}
                className="text-xs text-slate-400 hover:text-white"
              >
                Back
              </button>
              <Button variant="primary" size="md" icon onClick={() => setStep(4)}>
                Generate Architecture Blueprint
              </Button>
            </div>
          </div>
        )}

        {/* Step 4: Executive Blueprint & Results */}
        {step === 4 && (
          <div className="space-y-6">
            {/* Top Score Matrix */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 text-center">
                <div className="text-xs font-mono text-slate-400">Current AI Maturity</div>
                <div className="text-sm font-semibold text-amber-400 mt-1">Stage 2: Fragmented Pilots</div>
                <div className="text-[11px] text-slate-500 mt-0.5">Point solutions without ERP sync</div>
              </div>

              <div className="p-4 rounded-xl bg-emerald-950/40 border border-emerald-500/40 text-center">
                <div className="text-xs font-mono text-emerald-400">Target Transformation</div>
                <div className="text-sm font-semibold text-white mt-1">Stage 5: Autonomous Enterprise</div>
                <div className="text-[11px] text-emerald-300 mt-0.5">Unified Zyntara One™ Architecture</div>
              </div>

              <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 text-center">
                <div className="text-xs font-mono text-slate-400">Projected Margin Gain</div>
                <div className="text-lg font-bold text-emerald-400 mt-0.5">+38% to +52%</div>
                <div className="text-[11px] text-slate-500">Payback in ~4.8 months</div>
              </div>
            </div>

            {/* Recommended Blueprint */}
            <div className="p-5 rounded-xl bg-slate-900/90 border border-slate-800 space-y-3">
              <div className="flex items-center gap-2">
                <Cpu className="w-4 h-4 text-emerald-400" />
                <span className="font-mono text-xs text-emerald-300 uppercase">
                  Recommended Architecture Blueprint
                </span>
              </div>
              <h4 className="text-base font-display font-bold text-white">
                Zyntara One™ {formData.primaryIndustry} Transformation Architecture
              </h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                Connect your {formData.currentSystems.length} core systems of record into a unified cognitive mesh. 
                Deploys multi-agent worker swarms for automated cross-departmental operations with full air-gapped sovereign governance.
              </p>

              <div className="grid grid-cols-2 gap-2 pt-2 text-[11px] font-mono text-slate-400">
                <div>• Timeline: 8 to 14 Weeks</div>
                <div>• Governance: Air-Gapped / Sovereign</div>
                <div>• Orchestrator: Multi-Agent Swarm</div>
                <div>• Connectors: {formData.currentSystems.slice(0, 2).join(', ')}</div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3">
              <button
                onClick={() => setStep(1)}
                className="text-xs text-slate-400 hover:text-white"
              >
                Re-calculate Inputs
              </button>

              <div className="flex items-center gap-3 w-full sm:w-auto">
                <Button
                  variant="outline"
                  size="md"
                  onClick={onClose}
                  className="w-full sm:w-auto"
                >
                  Close
                </Button>
                <Button
                  variant="glow"
                  size="md"
                  icon
                  onClick={() => {
                    onClose();
                    onProceedToContact(formData);
                  }}
                  className="w-full sm:w-auto"
                >
                  Schedule Scoping Review
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
