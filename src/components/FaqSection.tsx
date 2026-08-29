import React, { useState } from 'react';
import { FAQ_DATA } from '../data/materialsData';
import { ChevronDown, HelpCircle, ArrowRight } from 'lucide-react';

interface FaqSectionProps {
  onCtaClick: () => void;
}

export const FaqSection: React.FC<FaqSectionProps> = ({ onCtaClick }) => {
  const [openId, setOpenId] = useState<string | null>('faq-01');

  const toggleFaq = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faq" className="py-20 bg-white border-b border-slate-200/60 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center space-y-3 max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-50 border border-teal-200 text-teal-800 text-xs font-semibold uppercase tracking-wider">
            Tire Suas Dúvidas
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
            PERGUNTAS FREQUENTES
          </h2>

          <p className="text-sm sm:text-base text-slate-600">
            Respostas claras para as principais dúvidas sobre o formato, acesso e aplicação do Fono Visual.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-3.5">
          {FAQ_DATA.map((item, idx) => {
            const isOpen = openId === item.id;
            return (
              <div
                key={item.id}
                className={`border rounded-2xl transition-all overflow-hidden ${
                  isOpen
                    ? 'border-teal-500 bg-[#FAFBFD] shadow-xs'
                    : 'border-slate-200 bg-white hover:border-slate-300'
                }`}
              >
                <button
                  onClick={() => toggleFaq(item.id)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-bold text-teal-700 font-mono">
                      0{idx + 1}
                    </span>
                    <span className="text-sm sm:text-base font-bold text-slate-900">
                      {item.question}
                    </span>
                  </div>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-200 ${
                    isOpen ? 'bg-teal-100 text-teal-800 rotate-180' : 'bg-slate-100 text-slate-500'
                  }`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-5 pt-0 text-sm text-slate-600 leading-relaxed border-t border-slate-100/80 mt-1">
                    <p className="pt-3">{item.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* FAQ Bottom CTA */}
        <div className="mt-12 text-center p-6 bg-[#FAFBFD] rounded-2xl border border-slate-200">
          <h4 className="text-base font-bold text-slate-900 mb-1">
            Pronto para ter sua biblioteca visual de consulta?
          </h4>
          <p className="text-xs text-slate-500 mb-4">
            Acesso liberado imediatamente após a confirmação do pagamento.
          </p>
          <button
            onClick={onCtaClick}
            className="px-6 py-3 bg-[#0B2533] hover:bg-teal-700 text-white font-bold text-xs sm:text-sm rounded-xl shadow-sm transition-all cursor-pointer inline-flex items-center gap-2"
          >
            <span>QUERO ACESSAR O FONO VISUAL</span>
            <ArrowRight className="w-4 h-4 text-teal-400" />
          </button>
        </div>

      </div>
    </section>
  );
};
