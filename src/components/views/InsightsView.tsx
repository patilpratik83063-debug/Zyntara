import React, { useState } from 'react';
import { INSIGHTS_DATA } from '../../data/insightsData';
import { SectionHeader } from '../common/SectionHeader';
import { Button } from '../common/Button';
import { ViewType, InsightArticle } from '../../types';
import { 
  BookOpen, 
  FileText, 
  Clock, 
  Calendar, 
  ArrowRight, 
  X, 
  Share2, 
  CheckCircle2, 
  Sparkles,
  Download
} from 'lucide-react';

interface InsightsViewProps {
  onNavigate: (view: ViewType) => void;
  onOpenAssessment: () => void;
}

export const InsightsView: React.FC<InsightsViewProps> = ({
  onNavigate,
  onOpenAssessment
}) => {
  const [selectedArticle, setSelectedArticle] = useState<InsightArticle | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', 'AI Strategy', 'Agentic AI', 'Enterprise Architecture', 'Operations'];

  const filtered = selectedCategory === 'All'
    ? INSIGHTS_DATA
    : INSIGHTS_DATA.filter(i => i.category === selectedCategory);

  return (
    <div className="pt-28 pb-24 px-4 sm:px-6 lg:px-8 bg-[#111520] min-h-screen text-slate-100">
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/70 border border-emerald-500/30 text-xs font-tag text-emerald-300">
            <BookOpen className="w-3.5 h-3.5" />
            <span>RESEARCH & EXECUTIVE PUBLICATIONS</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-extrabold text-white tracking-tight">
            ENTERPRISE AI INSIGHTS
          </h1>

          <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto">
            Architectural whitepapers, executive briefings, and engineering methodologies published by Zyntara’s systems research group.
          </p>

          {/* Category Filter */}
          <div className="pt-4 flex justify-center flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-mono transition-all ${
                  selectedCategory === cat
                    ? 'bg-emerald-600 text-white shadow-[0_0_12px_#34d399]'
                    : 'bg-slate-900/80 text-slate-400 border border-slate-800 hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filtered.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedArticle(item)}
              className="p-8 rounded-3xl bg-[#141A26] border border-slate-800 hover:border-emerald-400/40 transition-all duration-300 flex flex-col justify-between group shadow-xl cursor-pointer"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-tag px-2.5 py-1 rounded bg-emerald-950 text-emerald-300 border border-emerald-500/30 uppercase">
                    {item.category}
                  </span>
                  <div className="flex items-center gap-1.5 text-[11px] font-mono text-slate-500">
                    <Clock className="w-3 h-3 text-emerald-400" />
                    <span>{item.readTime}</span>
                  </div>
                </div>

                <h3 className="text-xl font-display font-bold text-white group-hover:text-emerald-200 transition-colors">
                  {item.title}
                </h3>

                <p className="text-xs text-slate-300 leading-relaxed">
                  {item.excerpt}
                </p>

                <div className="space-y-1.5 pt-2">
                  <div className="text-xs font-tag text-slate-500 uppercase">Key Takeaways:</div>
                  {item.keyInsights.slice(0, 3).map((k, i) => (
                    <div key={i} className="text-xs text-slate-300 flex items-start gap-1.5 font-mono">
                      <span className="text-emerald-400">•</span>
                      <span className="line-clamp-1">{k}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs font-mono">
                <span className="text-slate-400">{item.author.name} • {item.author.role}</span>
                <span className="text-emerald-400 group-hover:translate-x-1 transition-transform flex items-center gap-1">
                  <span>Read Paper</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Active Article Full Reader Modal */}
        {selectedArticle && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md">
            <div className="w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-3xl bg-[#141A26] border border-emerald-500/40 p-6 sm:p-10 space-y-8 shadow-2xl relative scrollbar-thin">
              
              {/* Close Button */}
              <button
                onClick={() => setSelectedArticle(null)}
                className="absolute top-6 right-6 p-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-white cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <span className="text-xs font-tag px-3 py-1 rounded bg-emerald-950 text-emerald-300 border border-emerald-500/30 uppercase">
                    {selectedArticle.category}
                  </span>
                  <span className="text-xs font-mono text-slate-400">
                    {selectedArticle.date} • {selectedArticle.readTime}
                  </span>
                </div>

                <h2 className="text-2xl sm:text-3xl font-display font-extrabold text-white">
                  {selectedArticle.title}
                </h2>

                <div className="text-xs font-mono text-emerald-400">
                  By {selectedArticle.author.name} ({selectedArticle.author.role})
                </div>
              </div>

              {/* Summary Callout */}
              <div className="p-6 rounded-2xl bg-emerald-950/30 border border-emerald-500/20 text-sm text-slate-200 leading-relaxed italic">
                "{selectedArticle.excerpt}"
              </div>

              {/* Full Content Paragraphs */}
              <div className="space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed font-normal">
                {selectedArticle.fullBody.map((paragraph, pIdx) => (
                  <p key={pIdx}>{paragraph}</p>
                ))}
              </div>

              {/* Key Takeaways */}
              <div className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-3">
                <div className="text-sm font-tag text-emerald-400 uppercase font-bold">
                  Executive Recommendations & Key Takeaways:
                </div>
                <div className="space-y-2">
                  {selectedArticle.keyInsights.map((t, idx) => (
                    <div key={idx} className="text-xs sm:text-sm text-slate-200 flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{t}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Footer Actions */}
              <div className="pt-6 border-t border-slate-800 flex flex-wrap items-center justify-between gap-4">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setSelectedArticle(null)}
                >
                  Close Briefing
                </Button>

                <Button
                  variant="glow"
                  size="sm"
                  icon
                  onClick={() => {
                    setSelectedArticle(null);
                    onNavigate('contact');
                  }}
                >
                  Discuss Architecture With Research Team
                </Button>
              </div>

            </div>
          </div>
        )}

      </div>
    </div>
  );
};

