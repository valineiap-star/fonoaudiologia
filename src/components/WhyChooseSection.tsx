import React from 'react';
import { BENEFITS_DATA } from '../data/materialsData';
import { 
  Eye, Zap, Search, Layers, Smartphone, BookmarkCheck, 
  XCircle, CheckCircle2 
} from 'lucide-react';

interface WhyChooseSectionProps {
  onCtaClick: () => void;
}

export const WhyChooseSection: React.FC<WhyChooseSectionProps> = ({ onCtaClick }) => {
  const getBenefitIcon = (iconName: string) => {
    const props = { className: 'w-6 h-6 text-teal-600 group-hover:text-white transition-colors shrink-0' };
    switch (iconName) {
      case 'Eye': return <Eye {...props} />;
      case 'Zap': return <Zap {...props} />;
      case 'Search': return <Search {...props} />;
      case 'Layers': return <Layers {...props} />;
      case 'Smartphone': return <Smartphone {...props} />;
      case 'BookmarkCheck': return <BookmarkCheck {...props} />;
      default: return <Eye {...props} />;
    }
  };

  return (
    <section id="beneficios" className="py-20 bg-[#FAFBFD] border-b border-slate-200/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-50 border border-teal-200 text-teal-800 text-xs font-semibold uppercase tracking-wider">
            Didática & Eficiência nos Estudos
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
            FONOAUDIOLOGIA NÃO PRECISA SER UM MAR DE TEXTOS
          </h2>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Transformamos conteúdos extensos em materiais que ajudam você a enxergar as informações e compreender as relações entre estruturas, funções e conceitos.
          </p>
        </div>

        {/* 6 Benefits Grid - Centered Icons & Layout */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {BENEFITS_DATA.map((benefit) => (
            <div
              key={benefit.number}
              className="bg-white p-7 rounded-2xl border border-slate-200 shadow-xs hover:shadow-md hover:border-teal-300 transition-all group flex flex-col justify-between text-center relative"
            >
              <div>
                {/* Number Badge at Top Right */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-bold text-teal-700 bg-teal-50 px-2 py-0.5 rounded-full border border-teal-100 font-mono">
                    #{benefit.number}
                  </span>
                  <span className="text-2xl font-black text-slate-200 group-hover:text-teal-200 transition-colors font-mono">
                    0{benefit.number}
                  </span>
                </div>

                {/* Centered Icon Container */}
                <div className="mb-4 flex justify-center">
                  <div className="w-14 h-14 rounded-2xl bg-teal-50 border border-teal-100 flex items-center justify-center group-hover:bg-teal-600 transition-colors shadow-xs">
                    {getBenefitIcon(benefit.iconName)}
                  </div>
                </div>

                <h3 className="text-base font-bold text-slate-900 tracking-tight mb-2">
                  {benefit.title}
                </h3>

                <p className="text-sm text-slate-600 leading-relaxed">
                  {benefit.description}
                </p>
              </div>

              <div className="mt-5 pt-3 border-t border-slate-100 flex items-center justify-center text-xs font-semibold text-teal-600">
                <span>Material pronto para consulta</span>
              </div>
            </div>
          ))}
        </div>

        {/* Visual Comparison: SEM O FONO VISUAL vs COM O FONO VISUAL */}
        <div className="mt-16 max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
              A Diferença na Sua Rotina de Estudos e Atendimentos
            </h3>
            <p className="text-sm text-slate-500 mt-1">
              Compare como fica seu rendimento com uma estrutura visual consolidada
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
            
            {/* SEM O FONO VISUAL */}
            <div className="bg-rose-50/40 border border-rose-200/80 rounded-2xl p-7 space-y-5">
              <div className="flex items-center gap-2.5 pb-3 border-b border-rose-200/60">
                <div className="w-8 h-8 rounded-lg bg-rose-100 text-rose-600 flex items-center justify-center font-bold text-sm">
                  ✕
                </div>
                <h4 className="text-base font-bold text-rose-950 uppercase tracking-wider">
                  SEM O FONO VISUAL
                </h4>
              </div>

              <ul className="space-y-3.5 text-sm text-slate-700">
                <li className="flex items-start gap-3">
                  <XCircle className="w-5 h-5 text-rose-500 shrink-0 mt-0.5" />
                  <span><strong>Várias anotações espalhadas:</strong> cadernos, prints soltos e PDFs desorganizados.</span>
                </li>
                <li className="flex items-start gap-3">
                  <XCircle className="w-5 h-5 text-rose-500 shrink-0 mt-0.5" />
                  <span><strong>Textos extensos:</strong> páginas e páginas densas para encontrar um único parâmetro.</span>
                </li>
                <li className="flex items-start gap-3">
                  <XCircle className="w-5 h-5 text-rose-500 shrink-0 mt-0.5" />
                  <span><strong>Dificuldade para revisar:</strong> lentidão antes de provas, estágios ou atendimentos.</span>
                </li>
                <li className="flex items-start gap-3">
                  <XCircle className="w-5 h-5 text-rose-500 shrink-0 mt-0.5" />
                  <span><strong>Informações difíceis de encontrar:</strong> perda de tempo precioso na rotina acadêmica.</span>
                </li>
              </ul>
            </div>

            {/* COM O FONO VISUAL */}
            <div className="bg-gradient-to-br from-teal-50/80 via-white to-teal-50/40 border-2 border-teal-500/80 rounded-2xl p-7 space-y-5 shadow-lg relative">
              <div className="absolute -top-3.5 right-6 bg-teal-600 text-white text-[11px] font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-sm">
                Recomendado
              </div>

              <div className="flex items-center gap-2.5 pb-3 border-b border-teal-200">
                <div className="w-8 h-8 rounded-lg bg-teal-600 text-white flex items-center justify-center font-bold text-sm">
                  ✓
                </div>
                <h4 className="text-base font-bold text-teal-950 uppercase tracking-wider">
                  COM O FONO VISUAL
                </h4>
              </div>

              <ul className="space-y-3.5 text-sm text-slate-800">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-teal-600 shrink-0 mt-0.5" />
                  <span><strong>Conteúdo organizado:</strong> biblioteca padronizada e catalogada por módulos temáticos.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-teal-600 shrink-0 mt-0.5" />
                  <span><strong>Informações visuais:</strong> mapas, esquemas anatômicos e fluxogramas claros.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-teal-600 shrink-0 mt-0.5" />
                  <span><strong>Consulta rápida:</strong> fichas objetivas com parâmetros essenciais na palma da mão.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-teal-600 shrink-0 mt-0.5" />
                  <span><strong>Diversas áreas reunidas:</strong> voz, linguagem, audiologia, motricidade e neuro em um só lugar.</span>
                </li>
              </ul>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
