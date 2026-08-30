import React from 'react';
import { BONUSES_DATA } from '../data/materialsData';
import { Gift, Sparkles, CheckCircle2, ArrowRight, Layers, ZoomIn } from 'lucide-react';

interface BonusSectionProps {
  onCtaClick: () => void;
  onPreviewSheet?: (sheetId: string) => void;
}

export const BonusSection: React.FC<BonusSectionProps> = ({ onCtaClick }) => {
  return (
    <section id="bonus" className="py-20 bg-gradient-to-b from-white via-teal-50/20 to-white border-b border-slate-200/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-50 border border-purple-200 text-purple-800 text-xs font-bold uppercase tracking-wider shadow-xs">
            <Gift className="w-3.5 h-3.5 text-purple-600" />
            <span>Presentes Especiais Inclusos no Acesso</span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
            E VOCÊ AINDA RECEBE <span className="text-teal-600">3 BÔNUS EXCLUSIVOS</span>
          </h2>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Materiais complementares desenvolvidos para acelerar ainda mais suas consultas de cabeceira e fixação de conceitos essenciais.
          </p>
        </div>

        {/* 3 Bonuses Cards Grid */}
        <div className="mt-14 grid grid-cols-1 lg:grid-cols-3 gap-8">
          {BONUSES_DATA.map((bonus, index) => {
            return (
              <div
                key={bonus.id}
                className="bg-white rounded-2xl border border-slate-200 shadow-md hover:shadow-xl transition-all flex flex-col justify-between overflow-hidden relative group"
              >
                {/* Top Badge: INCLUSO GRATUITAMENTE */}
                <div className="bg-gradient-to-r from-teal-600 to-teal-700 text-white px-5 py-3 flex items-center justify-between">
                  <span className="text-xs font-extrabold tracking-wider text-teal-100 uppercase">
                    {bonus.number}
                  </span>
                  <span className="text-[11px] font-bold bg-white/20 text-white px-2.5 py-0.5 rounded-full border border-white/30">
                    {bonus.badge}
                  </span>
                </div>

                <div className="p-6 flex-1 space-y-4">
                  {/* Visual mockup card inside bonus */}
                  {bonus.imageUrl ? (
                    <div className="rounded-xl overflow-hidden border border-teal-200 bg-slate-50 shadow-inner group/img relative">
                      <div className="relative aspect-[16/10] overflow-hidden bg-slate-100 flex items-center justify-center">
                        <img
                          src={bonus.imageUrl}
                          alt={bonus.title}
                          onError={(e) => {
                            if (bonus.fallbackUrl) {
                              (e.target as HTMLImageElement).src = bonus.fallbackUrl;
                            }
                          }}
                          referrerPolicy="no-referrer"
                          className="w-full h-full object-cover object-center group-hover/img:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute top-2.5 left-2.5">
                          <span className="px-2 py-0.5 rounded-md bg-white/90 backdrop-blur-xs text-teal-800 text-[10px] font-bold uppercase tracking-wider border border-teal-200 shadow-xs flex items-center gap-1">
                            <Layers className="w-3 h-3 text-teal-600" />
                            {bonus.tag}
                          </span>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="p-4 rounded-xl bg-gradient-to-br from-teal-50/90 to-slate-100 text-slate-800 shadow-inner relative overflow-hidden border border-teal-100">
                      <div className="flex items-center justify-between text-[11px] text-teal-700 font-bold mb-2">
                        <span className="flex items-center gap-1">
                          <Sparkles className="w-3.5 h-3.5 text-teal-600" />
                          {bonus.tag}
                        </span>
                        <span className="px-2 py-0.5 bg-white rounded-md border border-slate-200 text-slate-600">PDF Digital</span>
                      </div>

                      {index === 1 && (
                        <div className="space-y-1.5 text-xs text-slate-700">
                          <div className="grid grid-cols-2 gap-1.5 text-[11px]">
                            <span className="p-1.5 bg-white rounded border border-slate-200 text-center font-semibold text-slate-800 shadow-2xs">Laringe & Cordas</span>
                            <span className="p-1.5 bg-white rounded border border-slate-200 text-center font-semibold text-slate-800 shadow-2xs">Língua & Palato</span>
                            <span className="p-1.5 bg-white rounded border border-slate-200 text-center font-semibold text-slate-800 shadow-2xs">Ouvido & Cóclea</span>
                            <span className="p-1.5 bg-white rounded border border-slate-200 text-center font-semibold text-slate-800 shadow-2xs">Áreas Cerebrais</span>
                          </div>
                        </div>
                      )}

                      {index === 2 && (
                        <div className="space-y-1.5 text-xs text-slate-700">
                          <div className="p-1.5 bg-white rounded border border-slate-200 flex items-center justify-between text-[11px] shadow-2xs">
                            <span className="text-rose-600 font-semibold">Fala</span>
                            <span className="text-slate-400">×</span>
                            <span className="text-teal-700 font-semibold">Linguagem</span>
                          </div>
                          <div className="p-1.5 bg-white rounded border border-slate-200 flex items-center justify-between text-[11px] shadow-2xs">
                            <span className="text-rose-600 font-semibold">Fonética</span>
                            <span className="text-slate-400">×</span>
                            <span className="text-teal-700 font-semibold">Fonologia</span>
                          </div>
                          <div className="p-1.5 bg-white rounded border border-slate-200 flex items-center justify-between text-[11px] shadow-2xs">
                            <span className="text-rose-600 font-semibold">Apraxia</span>
                            <span className="text-slate-400">×</span>
                            <span className="text-teal-700 font-semibold">Disartria</span>
                          </div>
                        </div>
                      )}
                    </div>
                  )}

                  <div>
                    <h3 className="text-lg font-bold text-slate-900 leading-snug">
                      {bonus.title}
                    </h3>
                    <p className="text-xs font-semibold text-teal-700 mt-0.5">
                      {bonus.subtitle}
                    </p>
                    <p className="text-sm text-slate-600 mt-2 leading-relaxed">
                      {bonus.description}
                    </p>
                  </div>

                  {/* Highlights list */}
                  <div className="pt-2 border-t border-slate-100">
                    <span className="text-xs font-bold text-slate-700 uppercase tracking-wider block mb-2">
                      Destaques do Material:
                    </span>
                    <ul className="space-y-1.5 text-xs text-slate-700">
                      {bonus.highlights.map((h, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-teal-600 shrink-0 mt-0.5" />
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="p-6 pt-0">
                  <div className="p-3 rounded-xl bg-teal-50 text-center border border-teal-100">
                    <span className="text-xs text-slate-500 line-through mr-2">Valor Individual: R$ 47,00</span>
                    <span className="text-xs font-extrabold text-teal-800">GRÁTIS HOJE</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bonus CTA */}
        <div className="mt-12 text-center">
          <button
            onClick={() => onCtaClick()}
            className="px-8 py-4 bg-teal-600 hover:bg-teal-700 text-white font-bold text-base rounded-xl shadow-lg shadow-teal-700/20 hover:shadow-xl transition-all cursor-pointer inline-flex items-center gap-2"
          >
            <span>QUERO ACESSAR O FONO VISUAL COM TODOS OS BÔNUS</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
};
