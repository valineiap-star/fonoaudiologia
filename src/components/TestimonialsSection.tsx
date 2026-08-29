import React from 'react';
import { TESTIMONIALS_DATA } from '../data/materialsData';
import { Star, CheckCircle2, MessageSquareQuote, Sparkles, MapPin } from 'lucide-react';

export const TestimonialsSection: React.FC = () => {
  return (
    <section id="depoimentos" className="py-20 bg-gradient-to-b from-white via-slate-50/50 to-white border-b border-slate-200/60 relative overflow-hidden">
      
      {/* Background Soft Lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-teal-100/20 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3.5">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-50 border border-teal-200 text-teal-800 text-xs font-bold uppercase tracking-wider shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-teal-600" />
            <span>Opinião de Quem Já Utiliza</span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
            QUEM ESTUDA E ATENDE COM O <span className="text-teal-600">FONO VISUAL</span>
          </h2>

          <p className="text-sm sm:text-base text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Veja relatos reais de estudantes de graduação, residentes e fonoaudiólogos clínicos que utilizam o material no dia a dia.
          </p>

          {/* Social Proof Stats Pills */}
          <div className="pt-2 flex flex-wrap items-center justify-center gap-4 text-xs font-semibold text-slate-600">
            <div className="flex items-center gap-1.5 px-3 py-1 bg-white rounded-full border border-slate-200 shadow-2xs">
              <div className="flex text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <span className="text-slate-800 font-bold">4.9 / 5.0</span>
              <span className="text-slate-400">de avaliação média</span>
            </div>
            <div className="flex items-center gap-1.5 px-3 py-1 bg-white rounded-full border border-slate-200 shadow-2xs">
              <CheckCircle2 className="w-3.5 h-3.5 text-teal-600" />
              <span className="text-slate-800 font-bold">+1.200</span>
              <span className="text-slate-400">estudantes e profissionais</span>
            </div>
          </div>
        </div>

        {/* 6 Realistic Testimonials Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {TESTIMONIALS_DATA.map((t) => (
            <div
              key={t.id}
              className="bg-white p-6 sm:p-7 rounded-2xl border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between relative group hover:border-teal-300"
            >
              {/* Top Row: Stars + Verified Badge */}
              <div className="flex items-center justify-between gap-2 mb-4">
                <div className="flex items-center gap-1">
                  {[...Array(t.rating || 5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <span className="inline-flex items-center gap-1 text-[10px] font-bold text-teal-700 bg-teal-50 px-2 py-0.5 rounded-full border border-teal-200">
                  <CheckCircle2 className="w-3 h-3 text-teal-600" />
                  Acesso Verificado
                </span>
              </div>

              {/* Highlight Tag */}
              {t.highlight && (
                <div className="mb-3">
                  <span className="text-xs font-bold text-slate-800 bg-slate-100 px-2.5 py-1 rounded-md border border-slate-200/80 inline-block">
                    “{t.highlight}”
                  </span>
                </div>
              )}

              {/* Main Quote */}
              <blockquote className="text-xs sm:text-sm text-slate-700 leading-relaxed font-normal mb-6 flex-1">
                {t.quote}
              </blockquote>

              {/* Author Info with Photo */}
              <div className="pt-4 border-t border-slate-100 flex items-center gap-3.5 mt-auto">
                {t.avatarUrl ? (
                  <img
                    src={t.avatarUrl}
                    alt={t.author}
                    referrerPolicy="no-referrer"
                    className="w-11 h-11 rounded-full object-cover border-2 border-teal-500/30 shrink-0 shadow-xs"
                    onError={(e) => {
                      // Fallback to initials if image fails
                      (e.target as HTMLElement).style.display = 'none';
                    }}
                  />
                ) : (
                  <div className="w-11 h-11 rounded-full bg-teal-100 text-teal-800 font-bold text-xs flex items-center justify-center border border-teal-200 shrink-0">
                    {t.avatarInitials}
                  </div>
                )}

                <div className="min-w-0 flex-1">
                  <h4 className="text-sm font-bold text-slate-900 truncate leading-snug">
                    {t.author}
                  </h4>
                  <p className="text-[11px] text-teal-700 font-semibold truncate leading-tight">
                    {t.role}
                  </p>
                  {t.location && (
                    <p className="text-[10px] text-slate-400 font-medium flex items-center gap-0.5 mt-0.5">
                      <MapPin className="w-2.5 h-2.5" />
                      <span>{t.location}</span>
                    </p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
