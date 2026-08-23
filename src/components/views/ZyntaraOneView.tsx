import React, { useState } from 'react';
import { ARCHITECTURE_LAYERS } from '../../data/architectureLayers';
import { SectionHeader } from '../common/SectionHeader';
import { Button } from '../common/Button';
import { ZENTARA_LOGO_ICON, ZENTARA_LOGO_EMBLEM } from '../../assets/logo';
import { ViewType } from '../../types';
import { 
  Layers, 
  Cpu, 
  Database, 
  ShieldCheck, 
  ArrowRight, 
  CheckCircle2, 
  Activity, 
  Zap, 
  Server, 
  Lock, 
  Network,
  Cloud,
  Terminal,
  Globe2
} from 'lucide-react';

interface ZyntaraOneViewProps {
  onNavigate: (view: ViewType) => void;
  onOpenAssessment: () => void;
}

export const ZyntaraOneView: React.FC<ZyntaraOneViewProps> = ({
  onNavigate,
  onOpenAssessment
}) => {
  const [activeLayerIndex, setActiveLayerIndex] = useState<number>(0);
  const currentLayer = ARCHITECTURE_LAYERS[activeLayerIndex];

  const deploymentModels = [
    {
      title: 'Air-Gapped Sovereign Enclave',
      badge: 'Zero External Egress',
      desc: 'Complete on-premises or private cloud Kubernetes deployment with fine-tuned open-weights models. Zero external API calls, 100% data sovereignty.',
      features: ['Bare-metal GPU cluster support', 'Local vector & graph indexes', 'Strict defense/banking compliance']
    },
    {
      title: 'Dedicated Enterprise VPC',
      badge: 'Isolated Cloud Virtual Private',
      desc: 'Single-tenant deployment within your AWS, Azure, or GCP virtual private cloud with private endpoint peering directly into ERP and CRM.',
      features: ['PrivateLink & DirectConnect', 'Automated cloud scale-out', 'Zero-data retention agreements']
    },
    {
      title: 'Zyntara Managed Sovereign Cloud',
      badge: 'Turnkey Enterprise SLA',
      desc: 'Fully managed multi-region enterprise cluster with 99.99% availability SLAs, automated ModelOps, continuous security patching, and sub-second latency.',
      features: ['24/7 dedicated solutions engineering', 'Continuous latency optimization', 'Automated backup & failover']
    }
  ];

  const enterpriseConnectors = [
    { name: 'SAP S/4HANA & ECC', category: 'Enterprise ERP', protocol: 'OData / BAPI / RFC' },
    { name: 'Salesforce & Service Cloud', category: 'Commercial Core', protocol: 'REST / GraphQL / Streaming' },
    { name: 'Oracle NetSuite & Cloud ERP', category: 'Financials', protocol: 'SuiteTalk / REST Webhooks' },
    { name: 'Workday HRIS', category: 'People Operations', protocol: 'RAAS / Enterprise WSDL' },
    { name: 'Snowflake & Databricks', category: 'Data Lakehouse', protocol: 'Direct SQL / Delta Lake' },
    { name: 'ServiceNow & Jira', category: 'ITSM & Ticketing', protocol: 'REST / Bi-Directional Events' }
  ];

  return (
    <div className="pt-28 pb-24 px-4 sm:px-6 lg:px-8 bg-[#07090E] min-h-screen text-slate-100">
      <div className="max-w-7xl mx-auto space-y-24">
        
        {/* Page Hero Header with Official Brand Identity */}
        <div className="text-center max-w-4xl mx-auto space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#121622] border border-[#59D6C4]/30 text-xs font-mono text-[#59D6C4] shadow-[0_0_15px_rgba(89,214,196,0.2)]">
            <img 
              src={ZENTARA_LOGO_ICON} 
              alt="Zentara" 
              referrerPolicy="no-referrer"
              className="w-4 h-4 rounded-full object-cover"
            />
            <span>ZENTARA TECHNOLOGY • FLAGSHIP ENTERPRISE ENGINE</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-extrabold text-white tracking-tight leading-[1.1]">
            ZENTARA ONE™
          </h1>

          <p className="text-xl sm:text-2xl font-display font-semibold text-cyan-300">
            "One AI Architecture. Your Entire Business."
          </p>

          <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Zentara One™ is the foundational cognitive architecture that unifies data, intelligence, autonomous multi-agent swarms, and enterprise business systems into a cohesive operating engine.
          </p>

          <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
            <Button
              variant="glow"
              size="lg"
              icon
              onClick={() => onNavigate('contact')}
            >
              Request Architecture Whitepaper & Scoping
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={onOpenAssessment}
            >
              Calculate Architecture Fit
            </Button>
          </div>
        </div>

        {/* 8-Layer Interactive Architecture Deep Dive */}
        <div className="p-6 sm:p-10 rounded-3xl bg-[#090C16] border border-blue-500/30 shadow-2xl">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-8 border-b border-slate-800">
            <div>
              <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest">
                System Specification
              </span>
              <h2 className="text-2xl sm:text-3xl font-display font-bold text-white mt-1">
                The 8-Layer Zyntara One™ Stack
              </h2>
            </div>
            <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
              <Activity className="w-4 h-4 text-emerald-400 animate-pulse" />
              <span>Full Bi-Directional Event Synchronization</span>
            </div>
          </div>

          {/* Layer Selector Bar */}
          <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-2">
            {ARCHITECTURE_LAYERS.map((layer, idx) => {
              const isSelected = idx === activeLayerIndex;
              return (
                <button
                  key={layer.id}
                  onClick={() => setActiveLayerIndex(idx)}
                  className={`p-3 rounded-xl border text-center transition-all duration-300 flex flex-col items-center justify-center cursor-pointer ${
                    isSelected
                      ? 'bg-blue-600 text-white border-cyan-300 shadow-[0_0_15px_#38bdf8] scale-105'
                      : 'bg-slate-900/80 text-slate-400 border-slate-800 hover:text-slate-200 hover:border-slate-700'
                  }`}
                >
                  <span className="font-mono text-[10px] font-bold">{layer.number}</span>
                  <span className="font-display font-bold text-xs mt-1 truncate w-full">{layer.name}</span>
                </button>
              );
            })}
          </div>

          {/* Selected Layer Technical Schematic */}
          <div className="mt-8 p-6 sm:p-8 rounded-2xl bg-[#0B0E1B] border border-slate-800 space-y-6">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <span className="font-mono text-xs font-bold px-3 py-1 rounded bg-blue-600 text-white">
                  LAYER {currentLayer.number}
                </span>
                <h3 className="text-2xl font-display font-bold text-white">
                  {currentLayer.name}: {currentLayer.subtitle}
                </h3>
              </div>
              <span className="text-xs font-mono text-cyan-300 px-3 py-1 rounded bg-blue-950/80 border border-blue-500/30">
                STATE: {currentLayer.status.toUpperCase()}
              </span>
            </div>

            <p className="text-sm sm:text-base text-slate-200 leading-relaxed">
              {currentLayer.description}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
              {/* Technical Specifications */}
              <div className="space-y-3">
                <h4 className="text-xs font-mono text-slate-400 uppercase font-semibold flex items-center gap-1.5">
                  <Terminal className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Technical Components & Protocols</span>
                </h4>
                <div className="space-y-2">
                  {currentLayer.technicalDetails.map((spec, i) => (
                    <div key={i} className="p-3 rounded-lg bg-slate-900/70 border border-slate-800 text-xs text-slate-300 flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                      <span>{spec}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Enterprise Benefits */}
              <div className="space-y-3">
                <h4 className="text-xs font-mono text-slate-400 uppercase font-semibold flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-blue-400" />
                  <span>Enterprise Business Advantage</span>
                </h4>
                <div className="p-4 rounded-xl bg-blue-950/30 border border-blue-500/20 space-y-2.5">
                  {currentLayer.enterpriseBenefits.map((b, i) => (
                    <div key={i} className="text-xs text-slate-200 flex items-start gap-2">
                      <span className="text-cyan-400 font-bold">•</span>
                      <span>{b}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-2">
                  <div className="text-xs font-mono text-slate-400 uppercase mb-2">
                    Verified Integrations:
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {currentLayer.connectedSystems.map((s, idx) => (
                      <span key={idx} className="px-2.5 py-1 rounded text-[11px] font-mono bg-slate-900 text-cyan-300 border border-slate-800">
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Enterprise Deployment Topologies */}
        <div>
          <SectionHeader
            eyebrow="Deployment Security & Sovereignty"
            badge="Infrastructure Options"
            title="WHEREVER YOUR DATA LIVES,"
            highlightText="ZYNTARA ONE™ DEPLOYS."
            description="We support air-gapped on-premises data centers, private cloud VPCs, and hybrid multi-region topologies."
            align="center"
          />

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            {deploymentModels.map((model, idx) => (
              <div
                key={idx}
                className="p-8 rounded-2xl bg-slate-900/40 border border-slate-800/80 hover:border-cyan-400/40 transition-all duration-300 flex flex-col justify-between group shadow-xl"
              >
                <div>
                  <span className="text-[10px] font-mono px-2.5 py-1 rounded bg-blue-950 text-cyan-300 border border-blue-500/30 uppercase">
                    {model.badge}
                  </span>
                  <h3 className="text-xl font-display font-bold text-white mt-4 group-hover:text-cyan-200 transition-colors">
                    {model.title}
                  </h3>
                  <p className="text-xs text-slate-300 mt-3 leading-relaxed">
                    {model.desc}
                  </p>

                  <div className="mt-6 space-y-2">
                    {model.features.map((f, fIdx) => (
                      <div key={fIdx} className="text-xs text-slate-300 flex items-center gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                        <span>{f}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-8 pt-4 border-t border-slate-800/80 flex items-center gap-2 text-xs font-mono text-slate-400">
                  <Lock className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Enterprise Security Standard</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Certified ERP/CRM Connectors Matrix */}
        <div className="p-8 rounded-3xl bg-[#090C16] border border-slate-800 space-y-6">
          <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-slate-800">
            <div>
              <h3 className="text-xl font-display font-bold text-white">
                Certified Enterprise System Connectors
              </h3>
              <p className="text-xs text-slate-400 mt-0.5 font-mono">
                Direct bi-directional event drivers without brittle screen scraping
              </p>
            </div>
            <span className="text-xs font-mono text-cyan-300">
              Zero Downtime Microservice Adapters
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {enterpriseConnectors.map((c, idx) => (
              <div key={idx} className="p-4 rounded-xl bg-slate-900/60 border border-slate-800/80 flex items-center justify-between">
                <div>
                  <div className="text-sm font-semibold text-white">{c.name}</div>
                  <div className="text-xs text-slate-400 mt-0.5">{c.category}</div>
                </div>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-blue-950 text-cyan-300 border border-blue-500/30">
                  {c.protocol}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Strategy Callout */}
        <div className="p-8 rounded-3xl bg-gradient-to-r from-blue-950/60 via-slate-900 to-blue-950/60 border border-cyan-400/30 text-center space-y-6">
          <h3 className="text-2xl sm:text-3xl font-display font-bold text-white">
            Transform your enterprise systems into a unified cognitive operating engine.
          </h3>
          <p className="text-sm text-slate-300 max-w-xl mx-auto">
            Schedule an architecture scoping session with our enterprise solutions team to review integration blueprints.
          </p>
          <div className="flex justify-center gap-4">
            <Button
              variant="glow"
              size="lg"
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
