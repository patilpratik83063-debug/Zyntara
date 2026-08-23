import React from 'react';
import { SectionHeader } from '../common/SectionHeader';
import { Button } from '../common/Button';
import { BrandLogo } from '../common/BrandLogo';
import { ZYNTARA_LOGO_EMBLEM, ZYNTARA_LOGO_ICON } from '../../assets/logo';
import { ViewType } from '../../types';
import { 
  Building2, 
  ShieldCheck, 
  Target, 
  Cpu, 
  Globe2, 
  Users, 
  CheckCircle2, 
  ArrowRight,
  Sparkles,
  Layers,
  Zap
} from 'lucide-react';

interface AboutViewProps {
  onNavigate: (view: ViewType) => void;
  onOpenAssessment: () => void;
}

export const AboutView: React.FC<AboutViewProps> = ({
  onNavigate,
  onOpenAssessment
}) => {
  const principles = [
    {
      title: 'Business Outcome Primacy',
      desc: 'We evaluate every system against EBITDA expansion, risk mitigation, and operational velocity — never vanity demos or hype.'
    },
    {
      title: 'Architectural Unity',
      desc: 'Isolated AI point solutions create tech debt. We believe in unified cognitive backbones that connect all data and workflows.'
    },
    {
      title: 'Cryptographic Sovereignty',
      desc: 'Enterprise IP belongs to the enterprise. Zero client data retention, air-gapped models, and strict zero-trust data enclaves.'
    },
    {
      title: 'Deterministic Orchestration',
      desc: 'Hallucination is unacceptable in production. We engineer multi-agent swarms with formal verification and human-in-the-loop controls.'
    }
  ];

  const leadership = [
    {
      name: 'Dr. Marcus Vance',
      role: 'Chief Executive Officer & Founder',
      background: 'Former Head of Systems Architecture at Palantir; 18+ years leading enterprise digital transformations across Fortune 50 industrial clients.'
    },
    {
      name: 'Elena Rostova, Ph.D.',
      role: 'Chief AI Architect & Head of Research',
      background: 'Ex-DeepMind research lead specializing in multi-agent reinforcement learning and deterministic state machine orchestration.'
    },
    {
      name: 'Julian Sterling',
      role: 'Head of Enterprise Engineering',
      background: 'Former VP of Infrastructure at Snowflake; architected real-time data streaming backbones processing 50B+ daily transactions.'
    },
    {
      name: 'Claire Chen',
      role: 'Managing Partner, Global Transformation',
      background: 'Former Senior Partner at McKinsey Digital & Cloud Practice; led 40+ C-suite digital roadmap initiatives globally.'
    }
  ];

  const hubs = [
    { city: 'San Francisco, CA', role: 'Global Headquarters & AI Systems Lab', region: 'Americas' },
    { city: 'New York, NY', role: 'Financial Systems & Enterprise Practice', region: 'Americas' },
    { city: 'London, UK', role: 'European Transformation Center', region: 'EMEA' },
    { city: 'Zurich, Switzerland', role: 'Sovereignty & Security Research Lab', region: 'EMEA' },
    { city: 'Singapore', role: 'Asia-Pacific Enterprise Hub', region: 'APAC' }
  ];

  return (
    <div className="pt-28 pb-24 px-4 sm:px-6 lg:px-8 bg-[#07090E] min-h-screen text-slate-100">
      <div className="max-w-7xl mx-auto space-y-20">
        
        {/* Header with Official Logo Spotlight */}
        <div className="text-center max-w-4xl mx-auto space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#121622] border border-[#2DD4BF]/30 text-xs font-mono text-[#2DD4BF] shadow-[0_0_15px_rgba(45, 212, 191,0.2)]">
            <img 
              src={ZYNTARA_LOGO_ICON} 
              alt="Zyntara" 
              referrerPolicy="no-referrer" 
              className="w-4 h-4 rounded-full object-cover"
            />
            <span>ZYNTARA TECHNOLOGY • ENTERPRISE ARCHITECTURE</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-extrabold text-white tracking-tight leading-[1.1]">
            ENGINEERING THE INTELLIGENT ENTERPRISE
          </h1>

          <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Zyntara Technology exists to bridge the vast gap between experimental AI prototypes and enterprise-grade, revenue-generating autonomous business systems.
          </p>

          {/* Official Brand Identity Showcase Banner */}
          <div className="mt-8 p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-[#0E1B14] via-[#090C16] to-[#05070B] border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.8)] flex flex-col md:flex-row items-center justify-between gap-8 text-left">
            <div className="flex items-center gap-5">
              <div className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-2xl p-1 bg-gradient-to-b from-[#1E2638] to-[#0A0D15] border border-[#2DD4BF]/40 shadow-[0_0_25px_rgba(45, 212, 191,0.3)] shrink-0 overflow-hidden">
                <img 
                  src={ZYNTARA_LOGO_EMBLEM} 
                  alt="Zyntara Technology Official Emblem"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover rounded-xl"
                />
              </div>
              <div className="space-y-1.5">
                <div className="flex items-center gap-2">
                  <span className="font-display font-extrabold text-2xl text-white tracking-wide">ZYNTARA</span>
                  <span className="font-mono text-xs text-[#D6B77A] px-2 py-0.5 rounded bg-[#181D2A] border border-[#D6B77A]/30">TECHNOLOGY</span>
                </div>
                <div className="text-xs font-mono text-[#2DD4BF] flex items-center gap-2">
                  <span>AI</span>
                  <span>•</span>
                  <span>AUTOMATION</span>
                  <span>•</span>
                  <span>DEVELOPMENT</span>
                </div>
                <p className="text-xs text-[#B6BAC4] italic max-w-md">
                  "Building Intelligent Systems For A Better Tomorrow"
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0 w-full md:w-auto">
              <Button
                variant="primary"
                size="sm"
                icon
                onClick={() => onNavigate('contact')}
                className="w-full sm:w-auto"
              >
                Schedule Consultation
              </Button>
              <button
                onClick={onOpenAssessment}
                className="w-full sm:w-auto px-4 py-2 rounded-xl text-xs font-mono text-[#D6B77A] bg-[#121622] hover:bg-[#181D2A] border border-[#D6B77A]/30 transition-all cursor-pointer"
              >
                Audit AI Readiness
              </button>
            </div>
          </div>
        </div>

        {/* Mission & Vision Bento */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-8 sm:p-10 rounded-3xl bg-[#090C16] border border-emerald-500/30 shadow-2xl space-y-4">
            <div className="w-10 h-10 rounded-xl bg-emerald-950 border border-emerald-500/40 text-emerald-400 flex items-center justify-center">
              <Target className="w-5 h-5" />
            </div>
            <h2 className="text-2xl font-display font-bold text-white">Our Mission</h2>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
              To engineer the unified cognitive architecture that transforms modern enterprises into autonomous, compounding business engines — connecting data, workflows, and decisions into a single high-velocity operating fabric.
            </p>
          </div>

          <div className="p-8 sm:p-10 rounded-3xl bg-[#090C16] border border-emerald-400/30 shadow-2xl space-y-4">
            <div className="w-10 h-10 rounded-xl bg-emerald-950 border border-emerald-400/40 text-emerald-300 flex items-center justify-center">
              <Sparkles className="w-5 h-5" />
            </div>
            <h2 className="text-2xl font-display font-bold text-white">Our Vision</h2>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
              A future where every major enterprise operates as a living computational system — with zero data friction, sub-second decision latency, and autonomous digital workers executing cross-functional operations alongside human leadership.
            </p>
          </div>
        </div>

        {/* Core Principles */}
        <div>
          <SectionHeader
            eyebrow="Foundational Values"
            badge="Engineering Creed"
            title="THE ARCHITECTURAL"
            highlightText="PRINCIPLES WE LIVE BY."
            description="Our non-negotiable standards when designing mission-critical enterprise systems."
            align="center"
          />

          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {principles.map((p, idx) => (
              <div key={idx} className="p-6 rounded-2xl bg-slate-900/40 border border-slate-800 space-y-3">
                <div className="text-xs font-mono font-bold text-emerald-400">0{idx + 1}</div>
                <h3 className="font-display font-bold text-lg text-white">{p.title}</h3>
                <p className="text-xs text-slate-300 leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Leadership & Systems Architects */}
        <div>
          <SectionHeader
            eyebrow="Executive Leadership"
            badge="Systems Architects"
            title="LED BY PRACTITIONERS"
            highlightText="AND SYSTEMS RESEARCHERS."
            description="Our team combines decades of deep enterprise infrastructure engineering with cutting-edge autonomous intelligence research."
            align="center"
          />

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
            {leadership.map((l, idx) => (
              <div key={idx} className="p-8 rounded-3xl bg-[#090C16] border border-slate-800 space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-xl font-display font-bold text-white">{l.name}</h3>
                    <div className="text-xs font-mono text-emerald-400 mt-0.5">{l.role}</div>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-emerald-950 border border-emerald-500/30 flex items-center justify-center font-mono text-xs text-emerald-300 font-bold">
                    {l.name.split(' ').map(n => n[0]).join('')}
                  </div>
                </div>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {l.background}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Global Hubs */}
        <div className="p-8 sm:p-10 rounded-3xl bg-[#090C16] border border-slate-800 space-y-6">
          <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-slate-800">
            <div>
              <h3 className="text-2xl font-display font-bold text-white">Global Practice Locations</h3>
              <p className="text-xs text-slate-400 mt-1 font-mono">Deploying enterprise transformations across North America, EMEA, and APAC</p>
            </div>
            <div className="flex items-center gap-2 text-xs font-mono text-emerald-300">
              <Globe2 className="w-4 h-4" />
              <span>24/7 Global Enterprise Support</span>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {hubs.map((hub, idx) => (
              <div key={idx} className="p-4 rounded-xl bg-slate-900/60 border border-slate-800/80">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-semibold text-white">{hub.city}</span>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-950 text-emerald-300 border border-emerald-500/30">{hub.region}</span>
                </div>
                <div className="text-xs text-slate-400 mt-1">{hub.role}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="p-8 rounded-3xl bg-gradient-to-r from-emerald-950/60 via-slate-900 to-emerald-950/60 border border-emerald-400/30 text-center space-y-4">
          <h3 className="text-2xl font-display font-bold text-white">
            Partner with Zyntara on your next strategic evolution.
          </h3>
          <p className="text-sm text-slate-300 max-w-xl mx-auto">
            Schedule a conversation with our leadership and enterprise architecture team.
          </p>
          <div className="flex justify-center gap-3">
            <Button
              variant="glow"
              size="md"
              icon
              onClick={() => onNavigate('contact')}
            >
              Start Your AI Transformation
            </Button>
          </div>
        </div>

      </div>
    </div>
  );
};
