import React, { useState } from 'react';
import { ViewType, AutomationItem } from '../../types';
import { ZYNTARA_LOGO_ICON } from '../../assets/logo';
import { 
  AUTOMATION_LEVELS_META, 
  AUTOMATION_CATEGORIES, 
  AUTOMATION_ITEMS, 
  INTEGRATED_WORKFLOW_EXAMPLES, 
  DEPARTMENT_MATURITY_MODELS, 
  MULTI_AGENT_DEPARTMENT_SWARMS 
} from '../../data/automationData';
import { SectionHeader } from '../common/SectionHeader';
import { Button } from '../common/Button';
import { 
  Bot, 
  Zap, 
  MessageSquare, 
  Mail, 
  Smartphone, 
  UserCheck, 
  Calendar, 
  Database, 
  TrendingUp, 
  ShoppingBag, 
  CreditCard, 
  FileText, 
  Users, 
  Building2, 
  Truck, 
  ShieldCheck, 
  BarChart3, 
  Layers, 
  Cpu, 
  ArrowRight, 
  CheckCircle2, 
  Clock, 
  X, 
  Sparkles, 
  Filter, 
  Search, 
  ChevronRight, 
  Workflow, 
  Sliders, 
  Activity, 
  Lock, 
  RefreshCw, 
  Share2, 
  AlertCircle,
  HelpCircle,
  PhoneCall,
  Flame,
  ArrowUpRight
} from 'lucide-react';

interface AutomationViewProps {
  onNavigate: (view: ViewType) => void;
  onOpenAssessment: () => void;
}

export const AutomationView: React.FC<AutomationViewProps> = ({
  onNavigate,
  onOpenAssessment
}) => {
  const [selectedLevel, setSelectedLevel] = useState<number | 'all'>('all');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedScale, setSelectedScale] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedAutomation, setSelectedAutomation] = useState<AutomationItem | null>(null);
  
  // Interactive Active Tabs for Subsections
  const [activeWorkflowId, setActiveWorkflowId] = useState<string>('lead-to-sales');
  const [activeMaturityDept, setActiveMaturityDept] = useState<string>('Sales & Revenue');
  const [activeSwarmId, setActiveSwarmId] = useState<string>('ai-sales-department-swarm');

  // Filter Automation Items
  const filteredAutomations = AUTOMATION_ITEMS.filter((item) => {
    const matchesLevel = selectedLevel === 'all' || item.level === selectedLevel;
    const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
    const matchesScale = selectedScale === 'all' || item.targetScale.includes(selectedScale);
    const matchesSearch = 
      searchQuery.trim() === '' ||
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.department.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.keyFeatures.some(f => f.toLowerCase().includes(searchQuery.toLowerCase()));
    
    return matchesLevel && matchesCategory && matchesScale && matchesSearch;
  });

  const activeWorkflow = INTEGRATED_WORKFLOW_EXAMPLES.find(w => w.id === activeWorkflowId) || INTEGRATED_WORKFLOW_EXAMPLES[0];
  const activeMaturity = DEPARTMENT_MATURITY_MODELS.find(m => m.department === activeMaturityDept) || DEPARTMENT_MATURITY_MODELS[0];
  const activeSwarm = MULTI_AGENT_DEPARTMENT_SWARMS.find(s => s.id === activeSwarmId) || MULTI_AGENT_DEPARTMENT_SWARMS[0];

  return (
    <div className="pt-28 pb-24 px-4 sm:px-6 lg:px-8 bg-[#111520] min-h-screen text-slate-100 selection:bg-emerald-600">
      <div className="max-w-7xl mx-auto space-y-24">

        {/* ===================== HERO SECTION ===================== */}
        <div className="text-center space-y-6 pt-4 max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#1E2638] border border-[#2DD4BF]/30 text-xs font-mono text-[#2DD4BF] shadow-[0_0_15px_rgba(45, 212, 191,0.2)]">
            <img 
              src={ZYNTARA_LOGO_ICON} 
              alt="Zyntara" 
              referrerPolicy="no-referrer"
              className="w-4 h-4 rounded-full object-cover"
            />
            <span>ZYNTARA TECHNOLOGY • AUTOMATION ARCHITECTURE (L1-L5)</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-extrabold text-white tracking-tight leading-[1.1]">
            Automate What Slows <br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-emerald-400 to-emerald-300">
              Your Business Down.
            </span>
          </h1>

          <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            From simple workflow automation to AI-powered autonomous operations, Zyntara Technology builds automation systems around the way your business actually works.
          </p>

          {/* Quick CTA row */}
          <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
            <Button
              variant="primary"
              size="lg"
              icon
              onClick={() => onNavigate('contact')}
            >
              Request Automation Scoping
            </Button>
            <button
              onClick={onOpenAssessment}
              className="px-5 py-3 rounded-xl bg-slate-900/80 hover:bg-slate-800 border border-slate-700 text-sm font-medium text-slate-200 hover:text-white transition-colors flex items-center gap-2 cursor-pointer"
            >
              <BarChart3 className="w-4 h-4 text-emerald-400" />
              <span>Evaluate Automation Readiness</span>
            </button>
          </div>
        </div>

        {/* ===================== 5-LEVEL MATURITY LADDER BANNER ===================== */}
        <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-b from-slate-900/90 to-[#0A0D18]/90 border border-slate-800 shadow-2xl relative overflow-hidden">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6 pb-6 border-b border-slate-800/80">
            <div>
              <div className="text-xs font-mono uppercase tracking-widest text-emerald-400">
                Strategic Scale & Hierarchy
              </div>
              <h2 className="text-xl sm:text-2xl font-display font-bold text-white mt-1">
                The 5 Levels of Enterprise Automation
              </h2>
            </div>
            <div className="text-xs text-slate-400 font-mono flex items-center gap-2">
              <span className="inline-block w-2 h-2 rounded-full bg-emerald-400" />
              <span>Modular Implementation • Scale With Your Growth</span>
            </div>
          </div>

          {/* 5 Levels Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {AUTOMATION_LEVELS_META.map((lvl) => {
              const isSelected = selectedLevel === lvl.level;
              return (
                <button
                  key={lvl.level}
                  onClick={() => setSelectedLevel(isSelected ? 'all' : lvl.level)}
                  className={`p-4 rounded-2xl text-left transition-all duration-300 border flex flex-col justify-between cursor-pointer relative group ${
                    isSelected
                      ? 'bg-emerald-950/80 border-emerald-400/80 shadow-[0_0_20px_rgba(16, 185, 129,0.25)]'
                      : 'bg-slate-950/60 border-slate-800/90 hover:border-slate-700 hover:bg-slate-900/60'
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between">
                      <span 
                        className="text-[10px] font-mono px-2 py-0.5 rounded font-semibold uppercase"
                        style={{ color: lvl.accentColor, backgroundColor: `${lvl.accentColor}18`, border: `1px solid ${lvl.accentColor}40` }}
                      >
                        {lvl.badge}
                      </span>
                      <span className="text-[10px] font-mono text-slate-500">
                        {lvl.capabilitiesCount}
                      </span>
                    </div>

                    <h3 className="text-sm font-display font-bold text-white mt-2.5 line-clamp-2">
                      {lvl.name}
                    </h3>
                    
                    <p className="text-xs text-slate-400 mt-1.5 line-clamp-3 leading-relaxed">
                      {lvl.tagline}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-slate-800/80 flex items-center justify-between text-[11px] font-mono text-slate-400">
                    <span className="truncate">{lvl.targetFit.split(',')[0]}</span>
                    <ChevronRight className="w-3.5 h-3.5 text-emerald-400 group-hover:translate-x-1 transition-transform shrink-0" />
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* ===================== INTERACTIVE AUTOMATION EXPLORER ===================== */}
        <div id="automation-explorer" className="space-y-8">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <div>
              <div className="text-xs font-mono uppercase tracking-widest text-emerald-400">
                Full Capability Directory
              </div>
              <h2 className="text-2xl sm:text-3xl font-display font-extrabold text-white mt-1">
                Explore Automation Systems & Workflows
              </h2>
              <p className="text-sm text-slate-400 mt-1">
                Filter across 48+ basic, integrated, AI-assisted, and autonomous business capabilities.
              </p>
            </div>

            {/* Search & Scale Filter */}
            <div className="flex flex-wrap items-center gap-3">
              {/* Search Bar */}
              <div className="relative min-w-[240px]">
                <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="Search WhatsApp, CRM, Invoices..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-9 pr-3 py-2 text-xs rounded-xl bg-slate-900 border border-slate-700/80 text-white placeholder-slate-500 focus:outline-none focus:border-emerald-400 transition-colors"
                />
                {searchQuery && (
                  <button 
                    onClick={() => setSearchQuery('')}
                    className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white"
                  >
                    <X className="w-3.5 h-3.5" />
                  </button>
                )}
              </div>

              {/* Organization Scale Filter */}
              <div className="flex items-center gap-1.5 p-1 rounded-xl bg-slate-900 border border-slate-800 text-xs">
                {['all', 'Small Businesses', 'Mid-Market', 'Enterprise'].map((tier) => (
                  <button
                    key={tier}
                    onClick={() => setSelectedScale(tier === 'all' ? 'all' : tier)}
                    className={`px-3 py-1.5 rounded-lg font-medium transition-colors cursor-pointer ${
                      (selectedScale === tier || (selectedScale === 'all' && tier === 'all'))
                        ? 'bg-emerald-600 text-white'
                        : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    {tier === 'all' ? 'All Scales' : tier}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Category Filter Pills */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-thin">
            {AUTOMATION_CATEGORIES.map((cat) => {
              const isActive = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-medium whitespace-nowrap transition-all duration-200 cursor-pointer flex items-center gap-1.5 ${
                    isActive
                      ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-400/50 shadow-[0_0_12px_rgba(16, 185, 129,0.2)]'
                      : 'bg-slate-900/80 text-slate-400 hover:text-slate-200 border border-slate-800'
                  }`}
                >
                  <span>{cat.label}</span>
                </button>
              );
            })}
          </div>

          {/* Filter Status Reset Bar if active */}
          {(selectedLevel !== 'all' || selectedCategory !== 'all' || selectedScale !== 'all' || searchQuery) && (
            <div className="flex items-center justify-between p-3 rounded-xl bg-emerald-950/30 border border-emerald-500/20 text-xs text-slate-300">
              <div className="flex items-center gap-2">
                <Filter className="w-3.5 h-3.5 text-emerald-400" />
                <span>
                  Showing <strong>{filteredAutomations.length}</strong> matching capabilities
                  {selectedLevel !== 'all' && ` • Level ${selectedLevel}`}
                  {selectedCategory !== 'all' && ` • ${selectedCategory}`}
                  {searchQuery && ` • "${searchQuery}"`}
                </span>
              </div>
              <button
                onClick={() => {
                  setSelectedLevel('all');
                  setSelectedCategory('all');
                  setSelectedScale('all');
                  setSearchQuery('');
                }}
                className="text-emerald-400 hover:underline font-mono text-[11px] cursor-pointer"
              >
                Reset All Filters
              </button>
            </div>
          )}

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredAutomations.map((item) => (
              <div
                key={item.id}
                className="p-6 rounded-2xl bg-[#141A26] border border-slate-800/80 hover:border-emerald-500/40 transition-all duration-300 flex flex-col justify-between group hover:shadow-[0_10px_30px_rgba(16, 185, 129,0.1)] relative"
              >
                <div className="space-y-4">
                  {/* Card Header: Level Badge & Dept */}
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-[10px] font-mono px-2.5 py-0.5 rounded bg-emerald-950 text-emerald-300 border border-emerald-500/30 uppercase font-semibold">
                      Level {item.level} • {item.levelName.split(' ')[0]}
                    </span>
                    <span className="text-[11px] font-mono text-slate-400">
                      {item.department}
                    </span>
                  </div>

                  {/* Title & Tagline */}
                  <div>
                    <h3 className="text-lg font-display font-bold text-white group-hover:text-emerald-300 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-xs text-slate-400 mt-1 line-clamp-2 leading-relaxed">
                      {item.tagline}
                    </p>
                  </div>

                  {/* Problem & Solution Snippet */}
                  <div className="p-3 rounded-xl bg-slate-950/70 border border-slate-800/80 space-y-1 text-xs">
                    <div className="text-slate-400 text-[11px]">
                      <strong className="text-slate-300 font-medium">Trigger:</strong> {item.trigger}
                    </div>
                    <div className="text-slate-400 text-[11px]">
                      <strong className="text-emerald-400 font-medium">Outcome:</strong> {item.outcomes[0]}
                    </div>
                  </div>

                  {/* Key Capabilities Pills */}
                  <div className="space-y-1.5">
                    <div className="text-[10px] font-mono uppercase tracking-wider text-slate-500">
                      Included Capabilities:
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {item.keyFeatures.slice(0, 3).map((feat, idx) => (
                        <span key={idx} className="text-[11px] px-2 py-0.5 rounded bg-slate-900 text-slate-300 border border-slate-800 flex items-center gap-1">
                          <CheckCircle2 className="w-2.5 h-2.5 text-emerald-400 shrink-0" />
                          <span className="truncate max-w-[190px]">{feat}</span>
                        </span>
                      ))}
                      {item.keyFeatures.length > 3 && (
                        <span className="text-[10px] px-2 py-0.5 rounded bg-slate-900/60 text-slate-500 font-mono">
                          +{item.keyFeatures.length - 3} more
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                {/* Card Footer Action */}
                <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs">
                  <span className="text-[11px] font-mono text-slate-500">
                    {item.targetScale.split('&')[0]}
                  </span>
                  <button
                    onClick={() => setSelectedAutomation(item)}
                    className="text-emerald-400 hover:text-emerald-300 font-medium flex items-center gap-1 group/btn cursor-pointer"
                  >
                    <span>View Architecture</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {filteredAutomations.length === 0 && (
            <div className="text-center py-16 p-8 rounded-2xl bg-slate-900/40 border border-slate-800 space-y-3">
              <AlertCircle className="w-8 h-8 text-emerald-400 mx-auto opacity-70" />
              <div className="text-base font-semibold text-white">No automation capabilities matched your filter</div>
              <p className="text-xs text-slate-400 max-w-sm mx-auto">
                Try clearing your search query or selecting "All Automations" to view the complete catalog.
              </p>
              <button
                onClick={() => {
                  setSelectedLevel('all');
                  setSelectedCategory('all');
                  setSelectedScale('all');
                  setSearchQuery('');
                }}
                className="mt-2 px-4 py-2 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-medium cursor-pointer"
              >
                Show All Capabilities
              </button>
            </div>
          )}
        </div>

        {/* ===================== INTEGRATED WORKFLOW PIPELINES (LEVEL 2) ===================== */}
        <div className="p-6 sm:p-10 rounded-3xl bg-[#090C17] border border-slate-800 space-y-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <div className="text-xs font-mono uppercase tracking-widest text-emerald-400">
                Level 2 • Integrated Workflows
              </div>
              <h2 className="text-2xl sm:text-3xl font-display font-extrabold text-white mt-1">
                Multi-System Automated Pipelines
              </h2>
              <p className="text-sm text-slate-400 mt-1">
                Eliminate manual handoffs by connecting Website, CRM, ERP, Invoicing, and Customer Communications.
              </p>
            </div>

            {/* Pipeline Selector Tabs */}
            <div className="flex items-center gap-1.5 overflow-x-auto p-1 rounded-xl bg-slate-950 border border-slate-800 text-xs">
              {INTEGRATED_WORKFLOW_EXAMPLES.map((wf) => (
                <button
                  key={wf.id}
                  onClick={() => setActiveWorkflowId(wf.id)}
                  className={`px-3.5 py-2 rounded-lg font-medium whitespace-nowrap transition-colors cursor-pointer ${
                    activeWorkflowId === wf.id
                      ? 'bg-emerald-600 text-white shadow'
                      : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  {wf.title.split(' ')[0]}
                </button>
              ))}
            </div>
          </div>

          {/* Active Workflow Diagram Card */}
          <div className="p-6 sm:p-8 rounded-2xl bg-slate-950/80 border border-slate-800/80 space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-800">
              <div>
                <span className="text-xs font-mono text-emerald-400 uppercase tracking-wider">
                  Active Workflow Architecture
                </span>
                <h3 className="text-xl font-display font-bold text-white mt-0.5">
                  {activeWorkflow.title}
                </h3>
                <p className="text-xs text-slate-400 mt-1">
                  {activeWorkflow.subtitle}
                </p>
              </div>

              <div className="p-3 rounded-xl bg-emerald-950/40 border border-emerald-500/20 text-xs font-mono text-emerald-300 sm:text-right">
                <div>Deployment Velocity: {activeWorkflow.implementationDuration}</div>
                <div className="text-[11px] text-slate-400 mt-0.5">Zero Downtime Migration</div>
              </div>
            </div>

            {/* Step-by-Step Flow Diagrams */}
            <div className="space-y-3">
              <div className="text-xs font-mono text-slate-400 uppercase">
                Trigger: <span className="text-slate-200 font-normal">{activeWorkflow.trigger}</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-7 gap-3 pt-2">
                {activeWorkflow.steps.map((step) => (
                  <div
                    key={step.step}
                    className="p-3.5 rounded-xl bg-[#0C0F1E] border border-slate-800 flex flex-col justify-between relative group hover:border-emerald-500/40 transition-colors"
                  >
                    <div>
                      <div className="flex items-center justify-between">
                        <span className="w-5 h-5 rounded-full bg-emerald-950 text-emerald-400 border border-emerald-500/40 text-[10px] font-mono flex items-center justify-center font-bold">
                          {step.step}
                        </span>
                        {step.aiPowered && (
                          <span className="text-[9px] font-mono px-1.5 py-0.5 rounded bg-emerald-950 text-emerald-300 border border-emerald-500/30">
                            AI
                          </span>
                        )}
                        {step.humanApproval && (
                          <span className="text-[9px] font-mono px-1.5 py-0.5 rounded bg-amber-950 text-amber-300 border border-amber-500/30">
                            Approval
                          </span>
                        )}
                      </div>

                      <div className="font-display font-bold text-xs text-white mt-2">
                        {step.title}
                      </div>

                      <div className="text-[10px] font-mono text-emerald-300 mt-1">
                        {step.system}
                      </div>

                      <p className="text-[11px] text-slate-400 mt-1.5 leading-snug">
                        {step.action}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Business Outcome Banner */}
            <div className="p-4 rounded-xl bg-gradient-to-r from-emerald-950/30 via-slate-900/60 to-emerald-950/30 border border-emerald-500/30 flex items-center gap-3 text-xs sm:text-sm text-slate-200">
              <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
              <div>
                <strong className="text-emerald-300 font-semibold">Verified Business Outcome: </strong>
                {activeWorkflow.businessOutcome}
              </div>
            </div>
          </div>
        </div>

        {/* ===================== FOLLOW-UP CADENCE VISUALIZER (DAY 0 TO REACTIVATION) ===================== */}
        <div className="p-6 sm:p-10 rounded-3xl bg-gradient-to-br from-[#0B0E1D] to-[#070912] border border-slate-800 space-y-6">
          <div className="max-w-3xl">
            <div className="text-xs font-mono uppercase tracking-widest text-emerald-400">
              Systematic Cadence Engine
            </div>
            <h2 className="text-2xl sm:text-3xl font-display font-extrabold text-white mt-1">
              Multi-Step Automated Follow-Up Sequence
            </h2>
            <p className="text-sm text-slate-400 mt-1">
              Never let an interested prospect or quote go cold. Automated multi-channel touchpoints with instant exit upon reply.
            </p>
          </div>

          {/* Timeline Visualizer */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-3 pt-4">
            {[
              { day: 'DAY 0', timing: 'Instant (<30s)', channel: 'WhatsApp + Email', action: 'Instant acknowledgment, value asset delivery & 1-click meeting calendar link.' },
              { day: 'DAY 1', timing: '+24 Hours', channel: 'Email', action: 'Contextual industry case study & specific ROI benchmarks relevant to their sector.' },
              { day: 'DAY 3', timing: '+72 Hours', channel: 'WhatsApp / SMS', action: 'Direct availability check & interactive quick-reply questionnaire.' },
              { day: 'DAY 7', timing: '+1 Week', channel: 'Email + Sales Task', action: 'Executive briefing summary + automatic CRM notification to Account Exec.' },
              { day: 'DAY 14', timing: '+2 Weeks', channel: 'Email', action: 'Final courtesy check-in with self-serve sandbox / ROI calculator link.' },
              { day: 'DAY 30+', timing: 'Monthly Nurture', channel: 'Omnichannel', action: 'Automated transition to monthly executive research & product update reactivation.' }
            ].map((step, idx) => (
              <div key={idx} className="p-4 rounded-2xl bg-slate-950/80 border border-slate-800 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono font-bold text-emerald-300 px-2 py-0.5 rounded bg-emerald-950 border border-emerald-500/30">
                      {step.day}
                    </span>
                    <span className="text-[10px] font-mono text-slate-500">
                      {step.timing}
                    </span>
                  </div>

                  <div className="text-xs font-mono text-slate-300 font-semibold mt-3">
                    {step.channel}
                  </div>

                  <p className="text-xs text-slate-400 mt-1.5 leading-relaxed">
                    {step.action}
                  </p>
                </div>

                <div className="mt-4 pt-2 border-t border-slate-900 text-[10px] font-mono text-emerald-400 flex items-center gap-1">
                  <CheckCircle2 className="w-3 h-3 text-emerald-400 shrink-0" />
                  <span>Auto-Exits on Reply</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ===================== MULTI-AGENT DEPARTMENT SWARMS (LEVEL 4) ===================== */}
        <div className="p-6 sm:p-10 rounded-3xl bg-[#080B15] border border-slate-800 space-y-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <div className="text-xs font-mono uppercase tracking-widest text-emerald-400">
                Level 4 • Agentic Swarms
              </div>
              <h2 className="text-2xl sm:text-3xl font-display font-extrabold text-white mt-1">
                Multi-Agent Departmental Swarms
              </h2>
              <p className="text-sm text-slate-400 mt-1">
                Specialized AI digital workers collaborating to execute complex departmental objectives.
              </p>
            </div>

            <div className="flex items-center gap-1.5 p-1 rounded-xl bg-slate-950 border border-slate-800 text-xs">
              {MULTI_AGENT_DEPARTMENT_SWARMS.map((swarm) => (
                <button
                  key={swarm.id}
                  onClick={() => setActiveSwarmId(swarm.id)}
                  className={`px-3.5 py-2 rounded-lg font-medium whitespace-nowrap transition-colors cursor-pointer ${
                    activeSwarmId === swarm.id
                      ? 'bg-emerald-600 text-white shadow'
                      : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  {swarm.department.split('&')[0]}
                </button>
              ))}
            </div>
          </div>

          <div className="p-6 sm:p-8 rounded-2xl bg-slate-950/80 border border-slate-800/80 space-y-6">
            <div>
              <span className="text-xs font-mono text-emerald-400 uppercase tracking-wider">
                Autonomous Swarm Objective
              </span>
              <h3 className="text-xl font-display font-bold text-white mt-0.5">
                {activeSwarm.name}
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 mt-1 max-w-3xl leading-relaxed">
                {activeSwarm.objective}
              </p>
            </div>

            {/* Individual Agents in Swarm */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {activeSwarm.agents.map((agent, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-[#0C0F1E] border border-slate-800 space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="font-display font-bold text-sm text-white">
                      {agent.name}
                    </div>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-950 text-emerald-300 border border-emerald-500/30">
                      {agent.role}
                    </span>
                  </div>

                  <p className="text-xs text-slate-300 leading-relaxed">
                    {agent.responsibility}
                  </p>

                  <div className="pt-2 border-t border-slate-800/80">
                    <div className="text-[10px] font-mono text-slate-500 mb-1">Approved Toolset:</div>
                    <div className="flex flex-wrap gap-1">
                      {agent.toolSet.map((t, i) => (
                        <span key={i} className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-slate-900 text-slate-400 border border-slate-800">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Execution Flow & Impact */}
            <div className="p-4 rounded-xl bg-emerald-950/20 border border-emerald-500/30 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs">
              <div className="space-y-1">
                <span className="font-mono text-emerald-400 uppercase font-semibold">Swarm Execution Impact:</span>
                <p className="text-slate-200">{activeSwarm.impact}</p>
              </div>
              <Button
                variant="primary"
                size="sm"
                onClick={() => onNavigate('contact')}
              >
                Deploy Swarm
              </Button>
            </div>
          </div>
        </div>

        {/* ===================== DEPARTMENT MATURITY MODELS ===================== */}
        <div className="p-6 sm:p-10 rounded-3xl bg-[#090C18] border border-slate-800 space-y-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <div className="text-xs font-mono uppercase tracking-widest text-emerald-400">
                Organizational Benchmark
              </div>
              <h2 className="text-2xl sm:text-3xl font-display font-extrabold text-white mt-1">
                Department Automation Maturity Models
              </h2>
              <p className="text-sm text-slate-400 mt-1">
                Evaluate where your business operates today and chart your roadmap to autonomous operations.
              </p>
            </div>

            {/* Department Selector */}
            <div className="flex items-center gap-1.5 overflow-x-auto p-1 rounded-xl bg-slate-950 border border-slate-800 text-xs">
              {DEPARTMENT_MATURITY_MODELS.map((m) => (
                <button
                  key={m.department}
                  onClick={() => setActiveMaturityDept(m.department)}
                  className={`px-3.5 py-2 rounded-lg font-medium whitespace-nowrap transition-colors cursor-pointer ${
                    activeMaturityDept === m.department
                      ? 'bg-emerald-600 text-white shadow'
                      : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  {m.department}
                </button>
              ))}
            </div>
          </div>

          {/* 5 Levels in active department */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {activeMaturity.levels.map((lvl) => (
              <div
                key={lvl.level}
                className="p-5 rounded-2xl bg-slate-950/80 border border-slate-800/80 flex flex-col justify-between space-y-4 hover:border-slate-700 transition-colors"
              >
                <div className="space-y-2.5">
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-mono font-bold text-emerald-400">
                      LEVEL {lvl.level}
                    </span>
                  </div>

                  <h3 className="font-display font-bold text-sm text-white">
                    {lvl.title}
                  </h3>

                  <p className="text-xs text-slate-400 leading-relaxed">
                    {lvl.description}
                  </p>

                  <div className="pt-2 border-t border-slate-900 space-y-1">
                    <div className="text-[10px] font-mono text-slate-500 uppercase">Core Capabilities:</div>
                    {lvl.keyCapabilities.slice(0, 3).map((k, i) => (
                      <div key={i} className="text-[11px] text-slate-300 flex items-start gap-1 font-mono">
                        <span className="text-emerald-400">•</span>
                        <span className="line-clamp-1">{k}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-3 border-t border-slate-800/80 text-[11px]">
                  <span className="text-slate-500 font-mono">Human Role: </span>
                  <span className="text-slate-300">{lvl.humanRole}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ===================== LEVEL 5: CLOSED-LOOP AUTONOMOUS OPERATIONS ===================== */}
        <div className="p-6 sm:p-10 rounded-3xl bg-gradient-to-r from-emerald-950/40 via-slate-900 to-emerald-950/40 border border-emerald-500/30 space-y-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950 text-emerald-400 border border-emerald-500/30 text-xs font-mono">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>LEVEL 5 • AUTONOMOUS BUSINESS SYSTEMS</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-display font-extrabold text-white mt-2">
              Closed-Loop Autonomous Operations
            </h2>
            <p className="text-sm text-slate-300 mt-1 leading-relaxed">
              Zyntara One™ unites real-time event streaming, cognitive planning, tool execution, and continuous learning into a safe, auditable operating engine with strict human governance.
            </p>
          </div>

          {/* Feedback Loop Visualizer */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
            {[
              { step: '01', name: 'Event Ingestion', desc: 'Real-time telemetry detects customer signals, supply chain delays, or revenue shifts.' },
              { step: '02', name: 'Context Analysis', desc: 'Cognitive reasoning evaluates cross-functional impact across CRM, ERP, and Finance.' },
              { step: '03', name: 'Action Planning', desc: 'Formulates multi-agent plan and simulates financial & operational ROI.' },
              { step: '04', name: 'Governed Execution', desc: 'Calls approved tools with tiered human approval for high-risk financial thresholds.' },
              { step: '05', name: 'Continuous Learning', desc: 'Records execution outcome in audit ledger and refines system heuristics.' }
            ].map((node) => (
              <div key={node.step} className="p-4 rounded-2xl bg-slate-950/80 border border-slate-800 space-y-2">
                <div className="text-xs font-mono font-bold text-emerald-400">
                  PHASE {node.step}
                </div>
                <div className="font-display font-bold text-sm text-white">
                  {node.name}
                </div>
                <p className="text-xs text-slate-400 leading-relaxed">
                  {node.desc}
                </p>
              </div>
            ))}
          </div>

          <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs">
            <div className="flex items-center gap-2 text-slate-300">
              <Lock className="w-4 h-4 text-emerald-400" />
              <span>Full cryptographic audit trails • Zero autonomous action without policy compliance</span>
            </div>
            <button
              onClick={() => onNavigate('zyntara-one')}
              className="text-emerald-400 hover:text-emerald-300 font-mono flex items-center gap-1 cursor-pointer"
            >
              <span>Explore Zyntara One™ Architecture</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* ===================== ZYNTARA ONE ARCHITECTURE CONNECTION ===================== */}
        <div className="p-6 sm:p-10 rounded-3xl bg-[#070A14] border border-slate-800 text-center space-y-6">
          <div className="text-xs font-mono uppercase tracking-widest text-emerald-400">
            Unified Enterprise Architecture
          </div>
          <h2 className="text-2xl sm:text-3xl font-display font-extrabold text-white">
            Automation is not a disconnected tool.<br />
            It becomes part of your enterprise architecture.
          </h2>

          {/* Architecture Cascade Diagram */}
          <div className="flex flex-wrap items-center justify-center gap-2 max-w-4xl mx-auto pt-2 text-xs font-mono">
            {['DATA FABRIC', 'AI COGNITION', 'AUTOMATION', 'AGENTIC SWARMS', 'CRM / ERP', 'CUSTOMER EXPERIENCE', 'REVENUE ENGINE', 'AUTONOMOUS OPS'].map((layer, idx) => (
              <React.Fragment key={idx}>
                <span className="px-3 py-1.5 rounded-lg bg-emerald-950/60 border border-emerald-500/30 text-emerald-300 font-semibold">
                  {layer}
                </span>
                {idx < 7 && <ArrowRight className="w-3.5 h-3.5 text-slate-600 shrink-0" />}
              </React.Fragment>
            ))}
          </div>

          <p className="text-xs sm:text-sm text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Whether starting with a <strong>WhatsApp Business Suite</strong> or orchestrating a <strong>Global Multi-Agent Workforce</strong>, Zyntara provides one coherent architectural foundation that grows with your enterprise.
          </p>

          <div className="pt-4 flex justify-center">
            <Button
              variant="primary"
              size="lg"
              icon
              onClick={() => onNavigate('contact')}
            >
              Schedule an Automation Architecture Session
            </Button>
          </div>
        </div>

      </div>

      {/* ===================== INTERACTIVE AUTOMATION DETAIL MODAL ===================== */}
      {selectedAutomation && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
          <div className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-3xl bg-[#090C18] border border-slate-700 shadow-2xl p-6 sm:p-8 space-y-6">
            {/* Close Button */}
            <button
              onClick={() => setSelectedAutomation(null)}
              className="absolute top-6 right-6 p-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-white cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Header */}
            <div className="space-y-2 pr-10">
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono px-2.5 py-0.5 rounded bg-emerald-950 text-emerald-300 border border-emerald-500/30 uppercase font-semibold">
                  Level {selectedAutomation.level} • {selectedAutomation.levelName}
                </span>
                <span className="text-xs font-mono text-slate-400">
                  {selectedAutomation.department} • {selectedAutomation.targetScale}
                </span>
              </div>

              <h2 className="text-2xl font-display font-bold text-white">
                {selectedAutomation.title}
              </h2>

              <p className="text-sm text-emerald-300 font-normal">
                {selectedAutomation.tagline}
              </p>
            </div>

            {/* Description & Problem Solved */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-1.5">
                <div className="text-xs font-mono text-slate-400 uppercase font-semibold">
                  Business Problem Solved:
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {selectedAutomation.problemSolved}
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-1.5">
                <div className="text-xs font-mono text-emerald-400 uppercase font-semibold">
                  Primary Trigger Event:
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {selectedAutomation.trigger}
                </p>
              </div>
            </div>

            {/* Step-by-Step Workflow Steps */}
            <div className="space-y-3">
              <div className="text-xs font-mono text-emerald-400 uppercase font-bold">
                Automated Execution Workflow:
              </div>
              <div className="space-y-2">
                {selectedAutomation.workflowSteps.map((step, idx) => (
                  <div key={idx} className="p-3 rounded-xl bg-[#0C0F20] border border-slate-800 flex items-start gap-3 text-xs text-slate-300">
                    <span className="w-5 h-5 rounded-full bg-emerald-950 text-emerald-400 border border-emerald-500/40 font-mono text-[10px] flex items-center justify-center shrink-0 font-bold mt-0.5">
                      {idx + 1}
                    </span>
                    <span className="leading-relaxed">{step}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Key Capabilities */}
            <div className="space-y-2">
              <div className="text-xs font-mono text-emerald-400 uppercase font-bold">
                Included Features & Capabilities:
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {selectedAutomation.keyFeatures.map((feat, idx) => (
                  <div key={idx} className="text-xs text-slate-300 flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Verified Outcomes */}
            <div className="p-4 rounded-xl bg-emerald-950/30 border border-emerald-500/30 space-y-1.5">
              <div className="text-xs font-mono text-emerald-400 uppercase font-bold">
                Quantified Outcomes:
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-xs text-slate-200">
                {selectedAutomation.outcomes.map((out, idx) => (
                  <div key={idx} className="flex items-center gap-1.5">
                    <span className="text-emerald-400">✓</span>
                    <span>{out}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Systems, Security & Zyntara One Integration */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
              <div className="space-y-1">
                <span className="text-slate-400 font-mono">Systems & Integrations:</span>
                <div className="flex flex-wrap gap-1">
                  {selectedAutomation.integrations.map((item, idx) => (
                    <span key={idx} className="px-2 py-0.5 rounded bg-slate-900 text-slate-300 border border-slate-800 font-mono text-[11px]">
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              <div className="space-y-1">
                <span className="text-slate-400 font-mono">Zyntara One™ Layer:</span>
                <div className="text-emerald-300 font-mono text-[11px]">
                  {selectedAutomation.zyntaraOneLayer}
                </div>
              </div>
            </div>

            {/* Modal CTA */}
            <div className="pt-4 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-3">
              <span className="text-xs font-mono text-slate-400">
                SOC-2 & Zero-Data Retention Architecture
              </span>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setSelectedAutomation(null)}
                  className="px-4 py-2 text-xs font-medium text-slate-400 hover:text-white"
                >
                  Close
                </button>
                <Button
                  variant="primary"
                  size="sm"
                  onClick={() => {
                    setSelectedAutomation(null);
                    onNavigate('contact');
                  }}
                >
                  Deploy This Automation
                </Button>
              </div>
            </div>

          </div>
        </div>
      )}
    </div>
  );
};
