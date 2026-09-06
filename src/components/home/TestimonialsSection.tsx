import React, { useState } from 'react';
import { SectionHeader } from '../common/SectionHeader';
import { StaggerGroup, StaggerItem } from '../common/Reveal';
import { ViewType } from '../../types';
import { Quote, Star, Building2, ArrowRight } from 'lucide-react';

interface TestimonialsSectionProps {
  onNavigate: (view: ViewType) => void;
}

interface Testimonial {
  quote: string;
  name: string;
  role: string;
  company: string;
  metric: string;
  rating: number;
  initials: string;
}

const TESTIMONIALS: Testimonial[] = [
  {
    quote: 'Zyntara didn\'t just automate a workflow — they rebuilt how our entire sales pipeline moves. Leads are captured, qualified and routed in real time without a single manual follow-up.',
    name: 'Arjun Mehta',
    role: 'Chief Operating Officer',
    company: 'Apex Industrial Group',
    metric: '68% faster lead-to-deal cycle',
    rating: 5,
    initials: 'AM'
  },
  {
    quote: 'The AI workforce handles 60% of our support tickets autonomously. Our team finally focuses on complex escalations and customer relationships instead of repetitive replies.',
    name: 'Priya Sharma',
    role: 'Head of Customer Experience',
    company: 'Nova Retail Solutions',
    metric: '60% tickets resolved autonomously',
    rating: 5,
    initials: 'PS'
  },
  {
    quote: 'We went from three weeks of month-end close to four days. The automated OCR and three-way matching across our ERP removed an entire class of manual financial work.',
    name: 'Rajesh Iyer',
    role: 'VP Finance',
    company: 'Meridian Manufacturing',
    metric: '75% faster month-end close',
    rating: 5,
    initials: 'RI'
  },
  {
    quote: 'Unlike every other vendor, Zyntara started with our business process, not their product. The architecture they deployed connects WhatsApp, email, CRM and ERP into one operating layer.',
    name: 'Sarah Chen',
    role: 'Managing Director',
    company: 'Vertex Logistics',
    metric: '90% reduction in manual data entry',
    rating: 5,
    initials: 'SC'
  },
  {
    quote: 'Real-time pipeline orchestration changed the game for our sales team. Every inquiry, booking, invoice and reminder happens automatically — our reps just close deals.',
    name: 'Vikram Rao',
    role: 'Founder & CEO',
    company: 'Titan Health Systems',
    metric: '41% increase in qualified opportunities',
    rating: 5,
    initials: 'VR'
  },
  {
    quote: 'The executive dashboard they built gives our leadership live visibility into every business metric. Weekly reporting that used to take days now happens instantly.',
    name: 'Ananya Deshpande',
    role: 'Chief Digital Officer',
    company: 'Orbit Financial Services',
    metric: '12 hours of reporting saved weekly',
    rating: 5,
    initials: 'AD'
  }
];

export const TestimonialsSection: React.FC<TestimonialsSectionProps> = ({ onNavigate }) => {
  const [activeIdx, setActiveIdx] = useState(0);
  const featured = TESTIMONIALS[activeIdx];

  return (
    <section id="testimonials-section" className="py-28 px-4 sm:px-6 lg:px-8 bg-[#0D1017] border-t border-white/[0.08] relative overflow-hidden">
      {/* Ambient luminosity */}
      <div className="absolute top-1/3 right-0 w-[600px] h-[500px] bg-[#10B981]/06 blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[400px] bg-[#D6B77A]/05 blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        <SectionHeader
          eyebrow="Enterprise Trust & Results"
          badge="Proven Outcomes"
          title="LEADERS TRUST ZYNTARA"
          highlightText="ACROSS EVERY INDUSTRY."
          description="Real enterprise leaders describe what happened when they replaced fragmented manual work with an intelligent, unified business operating system."
          align="center"
        />

        <div className="mt-14 grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Featured Quote Card (7 cols) */}
          <StaggerItem className="lg:col-span-7 h-full">
            <div className="h-full p-8 sm:p-10 rounded-3xl bg-[#1A2030]/90 border border-[#D6B77A]/25 shadow-2xl relative overflow-hidden flex flex-col">
              {/* Giant decorative quote mark */}
              <Quote className="absolute top-6 right-6 w-20 h-20 text-[#D6B77A]/10" />

              <div className="flex items-center gap-2 mb-6">
                {Array.from({ length: featured.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-[#D6B77A] fill-[#D6B77A]" />
                ))}
              </div>

              <p className="text-lg sm:text-2xl font-display font-semibold text-[#F5F3EE] leading-relaxed flex-1">
                "{featured.quote}"
              </p>

              <div className="mt-8 pt-6 border-t border-white/[0.08] flex items-center justify-between gap-4 flex-wrap">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#10B981] to-[#059669] flex items-center justify-center font-display font-bold text-[#0F1219] shrink-0 shadow-[0_0_15px_rgba(16,185,129,0.35)]">
                    {featured.initials}
                  </div>
                  <div>
                    <div className="font-display font-bold text-[#F5F3EE]">{featured.name}</div>
                    <div className="text-xs text-[#B6BAC4] font-mono">{featured.role}, {featured.company}</div>
                  </div>
                </div>
                <span className="px-3 py-1.5 rounded-full bg-[#262E40] border border-[#34D399]/30 text-xs font-tag text-[#34D399] shadow-sm">
                  {featured.metric}
                </span>
              </div>
            </div>
          </StaggerItem>

          {/* Grid of all testimonials (5 cols) */}
          <StaggerGroup className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-4" stagger={0.08}>
            {TESTIMONIALS.map((t, idx) => {
              const isActive = idx === activeIdx;
              return (
                <StaggerItem key={idx} className="h-full">
                  <button
                    type="button"
                    onClick={() => setActiveIdx(idx)}
                    className={`h-full w-full p-5 rounded-2xl border text-left transition-all duration-300 cursor-pointer ${
                      isActive
                        ? 'bg-[#262E40]/60 border-[#D6B77A]/40 shadow-[0_4px_20px_rgba(214,183,122,0.12)]'
                        : 'bg-[#1A2030]/60 border-white/[0.06] hover:border-[#34D399]/40 hover:bg-[#1E2638]'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-3">
                      <div className="w-9 h-9 rounded-full bg-[#1E2638] border border-white/10 flex items-center justify-center font-display font-bold text-xs text-[#D6B77A]">
                        {t.initials}
                      </div>
                      <span className="text-[10px] font-mono text-[#7E8491] flex items-center gap-1">
                        <Building2 className="w-3 h-3" />
                        {t.company.split(' ')[0]}
                      </span>
                    </div>
                    <p className="text-xs text-[#B6BAC4] leading-relaxed line-clamp-4">
                      "{t.quote}"
                    </p>
                    <div className="mt-4 flex items-center justify-between">
                      <span className="text-[11px] font-semibold text-[#F5F3EE]">{t.name}</span>
                      <span className="text-[11px] font-mono text-[#34D399]">{t.metric}</span>
                    </div>
                  </button>
                </StaggerItem>
              );
            })}
          </StaggerGroup>
        </div>

        {/* Social proof strip */}
        <StaggerGroup className="mt-14 grid grid-cols-2 sm:grid-cols-4 gap-4" stagger={0.1}>
          {[
            { value: '40+', label: 'Enterprise Programs Deployed' },
            { value: '12', label: 'Industries Served' },
            { value: '1M+', label: 'Automated Transactions / Month' },
            { value: '98%', label: 'Client Retention Rate' }
          ].map((s, idx) => (
            <StaggerItem key={idx}>
              <div className="p-6 rounded-2xl bg-[#1A2030]/70 border border-white/[0.06] text-center">
                <div className="text-3xl font-display font-extrabold text-[#F5F3EE]">{s.value}</div>
                <div className="text-xs text-[#7E8491] mt-1 font-mono">{s.label}</div>
              </div>
            </StaggerItem>
          ))}
        </StaggerGroup>

        {/* CTA */}
        <div className="mt-16 text-center">
          <button
            type="button"
            onClick={() => onNavigate('contact')}
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-[#34D399] via-[#059669] to-[#D6B77A] text-[#0F1219] font-bold font-display border border-[#F5E7CA]/40 shadow-[0_4px_24px_rgba(214,183,122,0.3)] hover:shadow-[0_8px_36px_rgba(214,183,122,0.5)] hover:brightness-110 transition-all duration-300 cursor-pointer active:scale-[0.98]"
          >
            <span>Become Our Next Success Story</span>
            <ArrowRight className="w-4 h-4 transition-transform duration-300 hover:translate-x-1" />
          </button>
        </div>
      </div>
    </section>
  );
};
