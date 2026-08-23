import React from 'react';
import { ViewType } from '../../types';
import { BrandLogo } from '../common/BrandLogo';
import { Reveal } from '../common/Reveal';
import { 
  ShieldCheck, 
  Lock, 
  ArrowRight, 
  Mail, 
  MapPin, 
  Phone,
  Zap,
  Globe
} from 'lucide-react';

interface FooterProps {
  onNavigate: (view: ViewType) => void;
  onOpenAssessment: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onNavigate,
  onOpenAssessment
}) => {
  const handleLinkClick = (view: ViewType) => {
    onNavigate(view);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="zyntara-footer" className="bg-[#050506] text-[#B6BAC4] border-t border-white/[0.08] relative overflow-hidden">
      {/* Top Accent Line */}
      <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-[#34D399]/50 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-12">
        <Reveal y={24}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-white/[0.08]">
          
          {/* Brand & Mission Column (4 cols) */}
          <div className="lg:col-span-4 space-y-6">
            <BrandLogo size="lg" showTagline />

            <p className="text-sm text-[#B6BAC4] leading-relaxed max-w-sm font-normal">
              Zyntara Technology architects, deploys, and operates intelligent business systems, autonomous AI agent swarms, and unified enterprise cognitive architectures.
            </p>

            {/* Official Mission Lockup */}
            <div className="p-4 rounded-2xl bg-gradient-to-br from-[#0F131D] to-[#07090E] border border-white/10 text-xs shadow-lg space-y-2">
              <div className="flex items-center justify-between">
                <span className="font-mono text-[#D6B77A] font-bold text-[10px] tracking-wider uppercase">Enterprise Brand</span>
                <span className="text-[10px] font-mono text-[#2DD4BF] bg-[#181D2A] px-2 py-0.5 rounded border border-[#2DD4BF]/30">AI • AUTOMATION</span>
              </div>
              <div className="font-display font-bold text-[#F5F3EE] text-sm">Zyntara Technology</div>
              <div className="text-[11px] text-[#A99A7A] italic">"Building Intelligent Systems For A Better Tomorrow"</div>
            </div>

            <div className="flex items-center gap-2 text-xs font-mono text-[#2DD4BF]">
              <span className="w-2 h-2 rounded-full bg-[#2DD4BF] animate-ping" />
              <span>All Systems Operational • Enterprise Grade</span>
            </div>
          </div>

          {/* Platform & Architecture Column (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="font-mono text-xs font-bold uppercase tracking-[0.16em] text-[#D6B77A]">
              Platform
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <button
                  onClick={() => handleLinkClick('zyntara-one')}
                  className="hover:text-[#F5F3EE] text-[#F5F3EE] font-semibold transition-colors flex items-center gap-1.5"
                >
                  <span className="text-[#D6B77A]">★</span>
                  <span>Zyntara One™</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLinkClick('automation')}
                  className="hover:text-[#F5F3EE] text-[#34D399] font-mono transition-colors flex items-center gap-1"
                >
                  <Zap className="w-3 h-3 text-[#D6B77A]" />
                  <span>Automation (L1-L5)</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLinkClick('technology')}
                  className="hover:text-[#F5F3EE] transition-colors"
                >
                  Architecture Stack
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLinkClick('solutions')}
                  className="hover:text-[#F5F3EE] transition-colors"
                >
                  AI Workforce Agents
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLinkClick('technology')}
                  className="hover:text-[#F5F3EE] transition-colors"
                >
                  GraphRAG & Knowledge
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLinkClick('solutions')}
                  className="hover:text-[#F5F3EE] transition-colors"
                >
                  Digital Twin Engine
                </button>
              </li>
            </ul>
          </div>

          {/* Solutions & Services Column (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-mono text-xs font-bold uppercase tracking-[0.16em] text-[#D6B77A]">
              Solutions & Services
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <button
                  onClick={() => handleLinkClick('solutions')}
                  className="hover:text-[#F5F3EE] transition-colors text-left"
                >
                  Enterprise AI Transformation
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLinkClick('solutions')}
                  className="hover:text-[#F5F3EE] transition-colors text-left"
                >
                  Autonomous AI Workforces
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLinkClick('solutions')}
                  className="hover:text-[#F5F3EE] transition-colors text-left"
                >
                  Enterprise Intelligence & Search
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLinkClick('solutions')}
                  className="hover:text-[#F5F3EE] transition-colors text-left"
                >
                  AI Revenue & Sales Engine
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLinkClick('industries')}
                  className="hover:text-[#F5F3EE] transition-colors text-left"
                >
                  Industry Solutions (Finance, Healthcare, Mfg)
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLinkClick('case-studies')}
                  className="hover:text-[#F5F3EE] transition-colors text-left"
                >
                  Executive Case Studies
                </button>
              </li>
            </ul>
          </div>

          {/* Company & Executive Column (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-mono text-xs font-bold uppercase tracking-[0.16em] text-[#D6B77A]">
              Executive Action
            </h4>
            
            <p className="text-xs text-[#7E8491]">
              Evaluate your enterprise infrastructure maturity and obtain a custom architectural blueprint.
            </p>

            <button
              onClick={onOpenAssessment}
              className="w-full py-2.5 px-4 rounded-xl text-xs font-mono text-[#D6B77A] bg-[#121622] hover:bg-[#181D2A] border border-[#D6B77A]/30 transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <Zap className="w-3.5 h-3.5 text-[#D6B77A]" />
              <span>Audit AI Readiness Score</span>
            </button>

            <button
              onClick={() => handleLinkClick('contact')}
              className="w-full py-2.5 px-4 rounded-xl text-xs font-mono text-white bg-gradient-to-r from-[#10B981] to-[#059669] hover:from-[#34D399] hover:to-[#059669] border border-[#34D399]/30 transition-all flex items-center justify-center gap-2 cursor-pointer shadow-md"
            >
              <span>Schedule Strategy Briefing</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>

            <div className="pt-2 flex items-center gap-4 text-xs text-[#7E8491]">
              <button onClick={() => handleLinkClick('about')} className="hover:text-[#F5F3EE]">About</button>
              <span>•</span>
              <button onClick={() => handleLinkClick('insights')} className="hover:text-[#F5F3EE]">Insights</button>
              <span>•</span>
              <button onClick={() => handleLinkClick('contact')} className="hover:text-[#F5F3EE]">Contact</button>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Security Badges & Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[#7E8491]">
          <div className="flex flex-wrap items-center gap-4">
            <span className="flex items-center gap-1 text-[#B6BAC4]">
              <ShieldCheck className="w-3.5 h-3.5 text-[#34D399]" />
              <span>SOC2 Type II Ready</span>
            </span>
            <span className="flex items-center gap-1 text-[#B6BAC4]">
              <Lock className="w-3.5 h-3.5 text-[#D6B77A]" />
              <span>Zero Data Retention Architecture</span>
            </span>
            <span className="flex items-center gap-1 text-[#B6BAC4]">
              <Globe className="w-3.5 h-3.5 text-[#2DD4BF]" />
              <span>Air-Gapped Sovereign Deployment</span>
            </span>
          </div>

            <div className="text-right">
              © {new Date().getFullYear()} Zyntara Technologies, Inc. All rights reserved.
            </div>
          </div>

        </Reveal>
      </div>
    </footer>
  );
};
