import React from 'react';
import { TESTIMONIALS_DATA } from '../data/materialsData';
import { MessageSquareQuote, UserCheck, Sparkles, Info } from 'lucide-react';

export const TestimonialsSection: React.FC = () => {
  return (
    <section className="py-20 bg-white border-b border-slate-200/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-50 border border-teal-200 text-teal-800 text-xs font-semibold uppercase tracking-wider">
            Experiência de Aprendizado
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
            PARA QUEM QUER ESTUDAR COM MAIS CLAREZA
          </h2>

          <p className="text-base text-slate-600">
            Veja como estudantes e fonoaudiólogos se beneficiam de uma abordagem visual para consolidar matérias complexas.
          </p>

          {/* Ethical Disclaimer as requested */}
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-slate-100 rounded-lg text-slate-500 text-xs mt-2">
            <Info className="w-3.5 h-3.5" />
            <span>Espaço reservado para depoimentos e impressões de estudantes e profissionais.</span>
          </div>
        </div>

        {/* 3 Testimonials Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS_DATA.map((t, idx) => (
            <div
              key={t.id}
              className="bg-[#FAFBFD] p-7 rounded-2xl border border-slate-200 shadow-xs flex flex-col justify-between relative group hover:border-teal-300 transition-colors"
            >
              {/* Badge: Exemplo de Depoimento */}
              <div className="flex items-center justify-between mb-4">
                <span className="text-[10px] font-bold uppercase tracking-wider bg-slate-200/70 text-slate-600 px-2 py-0.5 rounded">
                  Exemplo de Depoimento
                </span>
                <MessageSquareQuote className="w-6 h-6 text-teal-600/30" />
              </div>

              <blockquote className="text-sm text-slate-700 leading-relaxed italic mb-6">
                “{t.quote}”
              </blockquote>

              <div className="pt-4 border-t border-slate-200/80 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-teal-100 text-teal-800 font-bold text-xs flex items-center justify-center border border-teal-200">
                  {t.avatarInitials}
                </div>
                <div>
                  <div className="text-sm font-bold text-slate-900">
                    {t.author}
                  </div>
                  <div className="text-xs text-teal-700 font-medium">
                    {t.role}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
