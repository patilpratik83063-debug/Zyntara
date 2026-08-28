import React, { useState } from 'react';
import { SectionHeader } from '../common/SectionHeader';
import { Button } from '../common/Button';
import { ViewType } from '../../types';
import { 
  Activity, 
  Sliders, 
  TrendingUp, 
  ShieldCheck, 
  ArrowRight, 
  Sparkles, 
  RotateCw, 
  BarChart3,
  Cpu,
  Layers
} from 'lucide-react';

interface DigitalTwinSectionProps {
  onNavigate: (view: ViewType) => void;
}

export const DigitalTwinSection: React.FC<DigitalTwinSectionProps> = ({ onNavigate }) => {
  const [demandShift, setDemandShift] = useState<number>(-15);
  const [priceShift, setPriceShift] = useState<number>(6);
  const [supplyEfficiency, setSupplyEfficiency] = useState<number>(88);

  // Dynamic simulation calculations
  const baseMargin = 24.5; // percent
  const calculatedMargin = (baseMargin + (priceShift * 0.8) + (demandShift * 0.25) + ((supplyEfficiency - 80) * 0.3)).toFixed(1);
  const workingCapitalDelta = (demandShift * -0.4 + priceShift * 0.6).toFixed(1);
  const riskLevel = Number(calculatedMargin) < 18 ? 'High' : Number(calculatedMargin) < 23 ? 'Moderate' : 'Low / Resilient';

  const resetToPreset = (d: number, p: number, s: number) => {
    setDemandShift(d);
    setPriceShift(p);
    setSupplyEfficiency(s);
  };

  return (
    <section id="digital-twin-section" className="py-28 px-4 sm:px-6 lg:px-8 bg-[#090B10] relative overflow-hidden border-t border-white/[0.08]">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          eyebrow="Predictive Enterprise Simulation"
          badge="Digital Twin Engine"
          title="SIMULATE THE FUTURE"
          highlightText="BEFORE YOU BUILD IT."
          description="Test strategic decisions, demand shocks, price elasticity, and supply chain re-routing inside a living computational model before deploying capital in reality."
          align="center"
        />

        {/* Quick Macro Scenario Presets */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-2">
          <span className="text-xs font-mono text-[#7E8491] mr-2">Scenario Presets:</span>
          <button
            onClick={() => resetToPreset(-20, 0, 80)}
            className="px-3.5 py-1.5 rounded-xl text-xs font-mono bg-[#101420] hover:bg-[#262E40] text-[#B6BAC4] border border-white/[0.06] transition-colors"
          >
            "Demand Drops 20%"
          </button>
          <button
            onClick={() => resetToPreset(0, 7, 92)}
            className="px-3.5 py-1.5 rounded-xl text-xs font-mono bg-[#101420] hover:bg-[#262E40] text-[#D6B77A] border border-[#D6B77A]/25 transition-colors"
          >
            "Increase Price 7% + High Efficiency"
          </button>
          <button
            onClick={() => resetToPreset(-10, -5, 95)}
            className="px-3.5 py-1.5 rounded-xl text-xs font-mono bg-[#101420] hover:bg-[#262E40] text-[#B6BAC4] border border-white/[0.06] transition-colors"
          >
            "Competitive Price War Stress-Test"
          </button>
        </div>

        {/* Interactive Simulation Sandbox */}
        <div className="mt-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Controls Sandbox (6 cols) */}
          <div className="lg:col-span-6 p-6 sm:p-8 rounded-3xl bg-[#1A2030]/95 border border-white/10 shadow-xl space-y-6 flex flex-col justify-between backdrop-blur-xl">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-white/[0.08]">
                <div className="flex items-center gap-2">
                  <Sliders className="w-4 h-4 text-[#D6B77A]" />
                  <h3 className="font-display font-bold text-base text-[#F5F3EE]">
                    Operational Stress-Test Parameters
                  </h3>
                </div>
                <span className="text-xs font-mono text-[#D6B77A]">
                  Live Computational Mesh
                </span>
              </div>

              {/* Slider 1: Demand Variation */}
              <div className="mt-6 space-y-2">
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="text-[#B6BAC4]">Macro Market Demand Shift:</span>
                  <span className={`font-bold ${demandShift >= 0 ? 'text-[#2DD4BF]' : 'text-rose-400'}`}>
                    {demandShift > 0 ? `+${demandShift}%` : `${demandShift}%`}
                  </span>
                </div>
                <input
                  type="range"
                  min="-40"
                  max="40"
                  value={demandShift}
                  onChange={(e) => setDemandShift(Number(e.target.value))}
                  className="w-full accent-[#34D399] bg-[#262E40] h-2 rounded-lg cursor-pointer"
                />
              </div>

              {/* Slider 2: Pricing Power Shift */}
              <div className="mt-6 space-y-2">
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="text-[#B6BAC4]">Enterprise Price Realization:</span>
                  <span className={`font-bold ${priceShift >= 0 ? 'text-[#D6B77A]' : 'text-rose-400'}`}>
                    {priceShift > 0 ? `+${priceShift}%` : `${priceShift}%`}
                  </span>
                </div>
                <input
                  type="range"
                  min="-20"
                  max="20"
                  value={priceShift}
                  onChange={(e) => setPriceShift(Number(e.target.value))}
                  className="w-full accent-[#D6B77A] bg-[#262E40] h-2 rounded-lg cursor-pointer"
                />
              </div>

              {/* Slider 3: Supply Chain OEE Efficiency */}
              <div className="mt-6 space-y-2">
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="text-[#B6BAC4]">Autonomous OEE & Supply Efficiency:</span>
                  <span className="font-bold text-[#34D399]">
                    {supplyEfficiency}%
                  </span>
                </div>
                <input
                  type="range"
                  min="60"
                  max="99"
                  value={supplyEfficiency}
                  onChange={(e) => setSupplyEfficiency(Number(e.target.value))}
                  className="w-full accent-[#34D399] bg-[#262E40] h-2 rounded-lg cursor-pointer"
                />
              </div>
            </div>

            <div className="pt-4 border-t border-white/[0.08] flex items-center justify-between text-xs font-mono text-[#7E8491]">
              <span>Monte Carlo Engine: 50,000 runs</span>
              <button 
                onClick={() => resetToPreset(0, 0, 85)}
                className="hover:text-white flex items-center gap-1 cursor-pointer"
              >
                <RotateCw className="w-3.5 h-3.5" />
                <span>Reset Baseline</span>
              </button>
            </div>
          </div>

          {/* Results Analytics Stage (6 cols) */}
          <div className="lg:col-span-6 p-6 sm:p-8 rounded-3xl bg-[#1A2030]/95 border border-white/10 shadow-xl flex flex-col justify-between backdrop-blur-xl relative overflow-hidden">
            <div className="space-y-6">
              <div className="flex items-center justify-between pb-4 border-b border-white/[0.08]">
                <div className="flex items-center gap-2">
                  <BarChart3 className="w-4 h-4 text-[#34D399]" />
                  <h3 className="font-display font-bold text-base text-[#F5F3EE]">
                    Simulated Financial Impact
                  </h3>
                </div>
                <span className="text-xs font-mono text-[#2DD4BF] flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#2DD4BF] animate-ping" />
                  Live Re-Calculation
                </span>
              </div>

              {/* Metric 1: Simulated Operating Margin */}
              <div className="p-5 rounded-2xl bg-[#1E2638]/90 border border-white/[0.08]">
                <div className="text-xs font-mono text-[#7E8491] uppercase">
                  Projected Enterprise EBITDA Margin
                </div>
                <div className="text-3xl sm:text-4xl font-display font-extrabold text-[#F5F3EE] mt-1">
                  {calculatedMargin}%
                </div>
                <div className="text-xs text-[#B6BAC4] mt-1 flex items-center gap-1">
                  <span>Delta vs Baseline (24.5%):</span>
                  <span className={`font-mono font-bold ${Number(calculatedMargin) >= 24.5 ? 'text-[#2DD4BF]' : 'text-rose-400'}`}>
                    {Number(calculatedMargin) >= 24.5 ? `+${(Number(calculatedMargin) - 24.5).toFixed(1)}%` : `${(Number(calculatedMargin) - 24.5).toFixed(1)}%`}
                  </span>
                </div>
              </div>

              {/* Key Indicators Grid */}
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 rounded-2xl bg-[#1E2638]/80 border border-white/[0.06]">
                  <div className="text-[11px] font-mono text-[#7E8491] uppercase">
                    Working Capital Shift
                  </div>
                  <div className="text-xl font-display font-bold text-[#F5F3EE] mt-1">
                    {Number(workingCapitalDelta) >= 0 ? `+$${workingCapitalDelta}M` : `-$${Math.abs(Number(workingCapitalDelta))}M`}
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-[#1E2638]/80 border border-white/[0.06]">
                  <div className="text-[11px] font-mono text-[#7E8491] uppercase">
                    Model Risk Exposure
                  </div>
                  <div className="text-xl font-display font-bold text-[#D6B77A] mt-1">
                    {riskLevel}
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-white/[0.08] flex items-center justify-between">
              <span className="text-xs font-mono text-[#7E8491]">
                Zyntara Digital Twin Framework
              </span>
              <Button
                variant="primary"
                size="sm"
                icon
                onClick={() => onNavigate('solutions')}
              >
                Configure Enterprise Twin
              </Button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
