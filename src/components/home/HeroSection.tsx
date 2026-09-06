import React, { useState, useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { ViewType } from '../../types';
import { Button } from '../common/Button';
import { InteractiveCanvas } from '../common/InteractiveCanvas';
import { AnimatedText } from '../common/AnimatedText';
import { ZYNTARA_LOGO_ICON } from '../../assets/logo';
import { 
  Zap, 
  ChevronRight,
  MessageCircle
} from 'lucide-react';

interface HeroSectionProps {
  onNavigate: (view: ViewType) => void;
  onOpenAssessment: () => void;
}

interface SystemNode {
  id: string;
  name: string;
  category: string;
  angle: number; // in degrees
  distance: number; // percentage from center
  color: string;
  metric: string;
  description: string;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onNavigate,
  onOpenAssessment
}) => {
  const [activeNode, setActiveNode] = useState<string | null>('ai-agents');
  const [mouseShift, setMouseShift] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement | null>(null);

  // Calm parallax — hero drifts away as you scroll past
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });
  const parallaxY = useTransform(scrollYProgress, [0, 1], [0, 140]);
  const parallaxOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0.3]);

  const trustChips = [
    'AI TRANSFORMATION',
    'AI AGENTS',
    'BUSINESS AUTOMATION',
    'ENTERPRISE INTELLIGENCE',
    'AI WORKFORCE',
    'CRM & ERP',
    'VOICE AI',
    'CUSTOM AI SOFTWARE',
    'DATA & ANALYTICS',
    'AI GOVERNANCE'
  ];

  const systemNodes: SystemNode[] = [
    { id: 'data', name: 'DATA', category: 'Data Fabric', angle: 0, distance: 38, color: '#34D399', metric: '100% Zero-Silo', description: 'Unified data ingestion & real-time semantic fabric' },
    { id: 'intelligence', name: 'INTELLIGENCE', category: 'Cognitive Engine', angle: 33, distance: 44, color: '#D6B77A', metric: 'Sub-300ms', description: 'Domain-adapted hybrid reasoning & GraphRAG' },
    { id: 'ai-agents', name: 'AI AGENTS', category: 'Autonomous Mesh', angle: 66, distance: 36, color: '#34D399', metric: 'Multi-Agent', description: 'Autonomous digital workers executing approved workflows' },
    { id: 'automation', name: 'AUTOMATION', category: 'Orchestration', angle: 100, distance: 42, color: '#059669', metric: 'Event-Driven', description: 'Deterministic state machines & cross-system queues' },
    { id: 'crm', name: 'CRM', category: 'Operating Layer', angle: 135, distance: 46, color: '#D6B77A', metric: 'Active Sync', description: 'Real-time pipeline orchestration & contact sync' },
    { id: 'erp', name: 'ERP', category: 'System of Record', angle: 170, distance: 40, color: '#34D399', metric: 'SAP / Oracle', description: 'Certified direct ledger & inventory orchestration' },
    { id: 'cx', name: 'CX & WHATSAPP', category: 'Business Channel', angle: 205, distance: 45, color: '#2DD4BF', metric: 'Real-Time', description: 'Lead capture, auto-replies, and human escalation' },
    { id: 'operations', name: 'OPERATIONS', category: 'Workflow Mesh', angle: 240, distance: 38, color: '#34D399', metric: 'Zero Friction', description: 'Cross-departmental handoffs & auditable execution' },
    { id: 'analytics', name: 'ANALYTICS', category: 'Decision Engine', angle: 275, distance: 42, color: '#D6B77A', metric: 'Live SQL', description: 'Operational decision support & automated reporting' },
    { id: 'revenue', name: 'REVENUE', category: 'Pipeline Growth', angle: 310, distance: 37, color: '#34D399', metric: 'Velocity', description: 'Automated chasing, qualification, and deal progression' },
    { id: 'growth', name: 'DIGITAL TWIN', category: 'Simulation', angle: 340, distance: 43, color: '#D6B77A', metric: 'Predictive', description: 'Scenario modeling & continuous process optimization' }
  ];

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 14;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * 14;
    setMouseShift({ x, y });
  };

  const selectedNodeData = systemNodes.find(n => n.id === activeNode) || systemNodes[2];

  const stagger = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.12, delayChildren: 0.15 } },
  };

  const item = {
    hidden: { opacity: 0, y: 30, filter: 'blur(10px)' },
    visible: {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] as const },
    },
  };

  const handleChipClick = (chip: string) => {
    if (chip.includes('AUTOMATION')) onNavigate('automation');
    else if (chip.includes('TRANSFORMATION') || chip.includes('INTELLIGENCE')) onNavigate('solutions');
    else if (chip.includes('WORKFORCE') || chip.includes('AGENTS')) onNavigate('solutions');
    else onNavigate('technology');
  };

  return (
    <section
      id="hero-section"
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="relative min-h-[92vh] lg:min-h-screen flex flex-col justify-center items-center pt-28 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden bg-[#0F1219]"
    >
      {/* Background Interactive Particle Canvas */}
      <InteractiveCanvas nodeCount={42} />

      {/* Atmospheric Spatial Lighting in Emerald & Champagne */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.8 }}
        transition={{ duration: 2, delay: 0.3 }}
        className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] rounded-full bg-hero-glow pointer-events-none"
        style={{
          transform: `translate(calc(-50% + ${mouseShift.x * -1.2}px), calc(-50% + ${mouseShift.y * -1.2}px))`
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center my-auto">
        
        {/* Left Col: Executive Headline & Narrative (6 cols) */}
        <motion.div
          style={{ y: parallaxY, opacity: parallaxOpacity }}
          variants={stagger}
          initial="hidden"
          animate="visible"
          className="lg:col-span-6 flex flex-col items-start text-left space-y-6"
        >
          
          {/* Eyebrow badge with official logo icon */}
          <motion.div variants={item} className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1E2638]/90 border border-[#D6B77A]/25 text-xs font-tag text-[#D6B77A] shadow-[0_2px_12px_rgba(0,0,0,0.5)]">
            <img 
              src={ZYNTARA_LOGO_ICON} 
              alt="Zyntara" 
              referrerPolicy="no-referrer"
              className="w-4 h-4 rounded-full object-cover shadow-[0_0_6px_rgba(45, 212, 191,0.8)]"
            />
            <span className="tracking-[0.16em] uppercase font-bold text-[#F5F3EE]">ZYNTARA TECHNOLOGY</span>
            <span className="text-white/20">•</span>
            <span className="text-[#2DD4BF] font-medium">AI • AUTOMATION • INTELLIGENT SYSTEMS</span>
          </motion.div>

          {/* Main Headline — cinematic word reveal */}
          <motion.h1 className="text-3xl sm:text-5xl lg:text-6xl xl:text-7xl font-display font-extrabold text-[#F5F3EE] tracking-tight leading-[1.05]">
            <AnimatedText
              text="BUILD AN"
              stagger={0.06}
              delay={0.2}
            />{' '}
            <AnimatedText
              text="AI-POWERED"
              wordClassName="text-transparent bg-clip-text bg-gradient-to-r from-[#6EE7B7] via-[#34D399] to-[#D6B77A] bg-[length:200%_auto] animate-gradient-pan"
              stagger={0.06}
              delay={0.55}
            />{' '}
            <AnimatedText text="ENTERPRISE." stagger={0.06} delay={0.85} />
          </motion.h1>

          {/* Supporting Executive Statement */}
          <motion.p variants={item} className="text-base sm:text-lg text-[#B6BAC4] font-normal leading-relaxed max-w-xl">
            Connect your data, workflows, teams and business systems with intelligent AI, automation and software built around the way your business actually works.
          </motion.p>

          {/* Flagship Ecosystem Callout */}
          <motion.div variants={item} className="flex flex-wrap items-center gap-3 py-2 px-4 rounded-xl bg-[#1D2434] border border-white/10 text-xs text-[#F5F3EE]">
            <span className="font-tag text-[#D6B77A] font-semibold uppercase tracking-wider">Flagship:</span>
            <span className="font-semibold text-white tracking-wide">ZYNTARA ONE™</span>
            <span className="text-white/20 hidden sm:inline">|</span>
            <span className="italic text-[#B6BAC4]">"One AI Architecture. Your Entire Business."</span>
          </motion.div>

          {/* Primary & Secondary Action CTAs with Microcopy */}
          <motion.div variants={item} className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 w-full">
            <Button
              variant="glow"
              size="lg"
              icon
              onClick={() => onNavigate('contact')}
            >
              Start Your AI Transformation
            </Button>

            <Button
              variant="outline"
              size="lg"
              onClick={() => onNavigate('zyntara-one')}
            >
              Explore Zyntara One™
            </Button>

            <button
              onClick={() => onNavigate('automation')}
              className="px-4 py-3.5 rounded-xl bg-[#1E2638] hover:bg-[#262E40] border border-[#34D399]/30 text-xs font-mono text-[#34D399] hover:text-white transition-all flex items-center justify-center gap-2 cursor-pointer shadow-sm hover:border-[#34D399]/60"
            >
              <Zap className="w-3.5 h-3.5 text-[#D6B77A]" />
              <span>Automate a Workflow</span>
            </button>

            <a
              href="https://wa.me/919151696922"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-3.5 rounded-xl bg-[#25D366]/15 hover:bg-[#25D366]/25 border border-[#25D366]/40 text-xs font-mono text-[#25D366] hover:text-white transition-all flex items-center justify-center gap-2 cursor-pointer shadow-sm hover:border-[#25D366]/70"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>Chat on WhatsApp</span>
            </a>
          </motion.div>

          {/* Conversion Microcopy */}
          <motion.div variants={item} className="flex flex-col space-y-1 text-xs text-[#7E8491]">
            <p className="flex items-center gap-2 text-[#B6BAC4]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#2DD4BF]" />
              <span>Built around your systems. Designed around your business.</span>
            </p>
            <p className="flex items-center gap-2 text-[#7E8491]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#D6B77A]" />
              <span>From repetitive workflows to enterprise-wide AI transformation.</span>
            </p>
          </motion.div>

          {/* Transformation Sequence Pill */}
          <motion.div variants={item} className="pt-1 flex items-center flex-wrap gap-1.5 text-[11px] font-mono text-[#34D399] bg-[#0E1119] px-3.5 py-2 rounded-xl border border-white/[0.08]">
            <span className="text-[#D6B77A] font-semibold">Sequence:</span>
            <span>Strategy</span>
            <ChevronRight className="w-3 h-3 text-[#7E8491]" />
            <span>Architecture</span>
            <ChevronRight className="w-3 h-3 text-[#7E8491]" />
            <span>AI</span>
            <ChevronRight className="w-3 h-3 text-[#7E8491]" />
            <span>Automation</span>
            <ChevronRight className="w-3 h-3 text-[#7E8491]" />
            <span>Software</span>
            <ChevronRight className="w-3 h-3 text-[#7E8491]" />
            <span className="text-white font-medium">Continuous Transformation</span>
          </motion.div>

        </motion.div>

        {/* Right Col: Interactive Enterprise AI Architecture Visualization (6 cols) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92, y: 40 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1.1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-6 flex flex-col items-center justify-center relative"
        >
          <motion.div style={{ y: parallaxY, opacity: parallaxOpacity }} className="w-full flex flex-col items-center">
          
          {/* Main Visual Stage in Frosted Obsidian Glass */}
          <div className="relative w-full max-w-[500px] animate-float-slow">
            <div 
              className="relative w-full aspect-square rounded-3xl bg-gradient-to-b from-[#101420]/80 via-[#0A0C13]/95 to-[#06070A] border border-white/10 p-6 shadow-[0_20px_60px_rgba(0,0,0,0.8)] flex items-center justify-center transition-transform duration-300 backdrop-blur-xl"
              style={{
                transform: `perspective(1000px) rotateY(${mouseShift.x * 0.35}deg) rotateX(${-mouseShift.y * 0.35}deg)`
              }}
            >
              
              {/* Animated Dynamic Connection Lines to Center */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 500 500">
                {systemNodes.map((node) => {
                  const rad = (node.angle * Math.PI) / 180;
                  const nodeX = 250 + Math.cos(rad) * (node.distance * 4.6);
                  const nodeY = 250 + Math.sin(rad) * (node.distance * 4.6);
                  const isSelected = node.id === activeNode;

                  return (
                    <g key={node.id}>
                      <line
                        x1="250"
                        y1="250"
                        x2={nodeX}
                        y2={nodeY}
                        stroke={isSelected ? '#D6B77A' : 'rgba(52, 211, 153, 0.2)'}
                        strokeWidth={isSelected ? '2' : '1'}
                        strokeDasharray={isSelected ? '4 2' : 'none'}
                      />
                      {isSelected && (
                        <circle
                          cx={(250 + nodeX) / 2}
                          cy={(250 + nodeY) / 2}
                          r="3"
                          fill="#D6B77A"
                          className="animate-ping"
                        />
                      )}
                    </g>
                  );
                })}
              </svg>

              {/* Central Hub: ZYNTARA ONE™ Core Processor with Official Emblem */}
              <div 
                onClick={() => onNavigate('zyntara-one')}
                className="relative z-20 w-36 h-36 rounded-2xl bg-gradient-to-br from-[#181D2E] via-[#0E111A] to-[#1F2538] border-2 border-[#2DD4BF]/60 flex flex-col items-center justify-center p-2 shadow-[0_0_35px_rgba(45, 212, 191,0.3)] cursor-pointer group hover:scale-105 transition-all duration-300"
              >
                {/* Outer pulsing ring in mint/emerald */}
                <div className="absolute -inset-2 rounded-2xl bg-[#2DD4BF]/20 blur-md group-hover:bg-[#34D399]/40 transition-colors animate-pulse" />
                
                {/* Official Logo Emblem Avatar */}
                <div className="relative w-14 h-14 rounded-xl overflow-hidden border border-[#2DD4BF]/50 shadow-[0_0_15px_rgba(45, 212, 191,0.6)] mb-1 bg-[#05070B] p-0.5">
                  <img 
                    src={ZYNTARA_LOGO_ICON} 
                    alt="Zyntara Core" 
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover rounded-lg group-hover:scale-110 transition-transform duration-300"
                  />
                </div>

                <span className="font-display font-extrabold text-[11px] tracking-wider text-[#F5F3EE]">
                  ZYNTARA ONE™
                </span>
                <span className="font-mono text-[8px] tracking-widest text-[#D6B77A] font-bold">
                  INTELLIGENCE HUB
                </span>
                <span className="text-[7px] font-mono text-[#2DD4BF] flex items-center gap-1 mt-0.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#2DD4BF] animate-ping" />
                  ACTIVE ENGINE
                </span>
              </div>

              {/* Orbiting System Nodes */}
              {systemNodes.map((node) => {
                const rad = (node.angle * Math.PI) / 180;
                const posX = 50 + Math.cos(rad) * (node.distance * 0.95);
                const posY = 50 + Math.sin(rad) * (node.distance * 0.95);
                const isSelected = node.id === activeNode;

                return (
                  <button
                    key={node.id}
                    type="button"
                    onClick={() => setActiveNode(node.id)}
                    onMouseEnter={() => setActiveNode(node.id)}
                  className={`absolute -translate-x-1/2 -translate-y-1/2 z-20 px-2 sm:px-2.5 py-1 rounded-lg text-[9px] sm:text-[10px] font-mono font-bold tracking-wider transition-all duration-300 cursor-pointer ${
                    isSelected
                      ? 'bg-gradient-to-r from-[#10B981] to-[#059669] text-white scale-110 border border-[#D6B77A] shadow-[0_0_18px_rgba(214,183,122,0.5)]'
                      : 'bg-[#101420]/95 text-[#B6BAC4] hover:text-white border border-white/10 hover:border-[#34D399]/50'
                  }`}
                    style={{
                      left: `${posX}%`,
                      top: `${posY}%`
                    }}
                  >
                    {node.name}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Active Node Live Telemetry Card Below Architecture Stage */}
          <div className="w-full max-w-[500px] mt-4 p-4 rounded-2xl bg-[#0D1017]/95 border border-white/10 backdrop-blur-xl flex items-center justify-between gap-4 shadow-xl">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-[#262E40] border border-[#D6B77A]/30 flex items-center justify-center shrink-0">
                <Zap className="w-4 h-4 text-[#D6B77A]" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="font-display font-bold text-sm text-[#F5F3EE]">
                    {selectedNodeData.name} NODE
                  </span>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-[#262E40] text-[#34D399] border border-[#34D399]/30 font-semibold">
                    {selectedNodeData.category}
                  </span>
                </div>
                <p className="text-xs text-[#B6BAC4] mt-0.5 line-clamp-1">
                  {selectedNodeData.description}
                </p>
              </div>
            </div>

            <div className="text-right shrink-0">
              <div className="text-[10px] font-mono text-[#7E8491]">Property</div>
              <div className="text-xs font-mono font-bold text-[#D6B77A]">{selectedNodeData.metric}</div>
            </div>
          </div>

        </motion.div>
        </motion.div>
      </div>

      {/* Hero Trust Chips / Horizontal Tag System */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 1, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10 max-w-7xl mx-auto w-full mt-12 pt-8 border-t border-white/[0.08]"
      >
        <div className="flex items-center justify-between gap-4 mb-3">
          <span className="text-xs font-tag text-[#7E8491] uppercase tracking-widest font-semibold">
            Enterprise Architecture Domains:
          </span>
          <span className="text-[11px] font-mono text-[#D6B77A]">
            End-to-End System Capabilities
          </span>
        </div>

        {/* Infinite marquee of trust chips */}
        <div className="relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
          <div className="flex w-max gap-2 animate-marquee hover:[animation-play-state:paused] py-1">
            {[...trustChips, ...trustChips].map((chip, index) => (
              <button
                key={index}
                onClick={() => handleChipClick(chip)}
                className="px-3.5 py-1.5 rounded-xl bg-[#1A2030] hover:bg-[#151928] border border-white/[0.08] hover:border-[#D6B77A]/40 text-xs font-mono text-[#B6BAC4] hover:text-[#F5F3EE] transition-all cursor-pointer shadow-sm hover:scale-[1.02] shrink-0"
              >
                {chip}
              </button>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};
