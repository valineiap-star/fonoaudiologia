import React from 'react';
import { 
  Check, ShieldCheck, Zap, Lock, Sparkles, 
  ArrowRight, X as XIcon, Star
} from 'lucide-react';

interface OfferSectionProps {
  onGuaranteeClick: () => void;
  onOpenCheckout: (planId?: 'essencial' | 'completo') => void;
}

export const OfferSection: React.FC<OfferSectionProps> = ({ onGuaranteeClick, onOpenCheckout }) => {
  return (
    <section id="oferta" className="py-20 bg-gradient-to-b from-[#FAFBFD] via-[#F1F6F9] to-[#FAFBFD] border-b border-slate-200/60 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center space-y-3 max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-50 border border-teal-200 text-teal-800 text-xs font-bold uppercase tracking-wider shadow-xs">
            Planos & Condições Especiais
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
            ESCOLHA O SEU PLANO DE ACESSO
          </h2>

          <p className="text-sm sm:text-base text-slate-600">
            Selecione a melhor opção para a sua rotina de estudos e garanta acesso digital imediato.
          </p>
        </div>

        {/* 2 Offer Cards Grid */}
        <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch max-w-5xl mx-auto">
          
          {/* CARD 01: Plano Essencial - R$ 10,00 */}
          <div className="bg-white rounded-3xl border border-slate-200 shadow-lg hover:shadow-xl transition-all flex flex-col justify-between overflow-hidden relative">
            {/* Top Bar */}
            <div className="bg-slate-100 text-slate-700 px-6 py-3.5 border-b border-slate-200 flex items-center justify-between">
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 block font-mono">
                  OPÇÃO DE ENTRADA
                </span>
                <h3 className="text-base sm:text-lg font-bold text-slate-900">
                  Plano Essencial
                </h3>
              </div>
              <span className="text-xs font-semibold px-2.5 py-1 bg-white rounded-full text-slate-700 border border-slate-200">
                Resumos Práticos
              </span>
            </div>

            <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between space-y-6">
              
              {/* Pricing Display */}
              <div className="space-y-1 text-center sm:text-left">
                <span className="text-xs font-medium text-slate-400">
                  De <span className="line-through">R$ 39,00</span> por apenas
                </span>
                <div className="flex items-baseline justify-center sm:justify-start gap-1 text-slate-900">
                  <span className="text-xl font-bold text-slate-600">R$</span>
                  <span className="text-4xl sm:text-5xl font-black tracking-tight text-slate-900 font-mono">
                    10
                  </span>
                  <span className="text-xl font-bold text-slate-600">,00</span>
                </div>
                <p className="text-[11px] text-slate-500">
                  Pagamento único • Acesso digital liberado na hora
                </p>
              </div>

              {/* Feature Checklist */}
              <div className="space-y-3 pt-2">
                <div className="text-xs font-bold uppercase tracking-wider text-slate-700">
                  O que está incluso:
                </div>
                <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700">
                  <li className="flex items-start gap-2.5">
                    <div className="w-4 h-4 rounded-full bg-teal-100 text-teal-700 flex items-center justify-center shrink-0 mt-0.5 border border-teal-200">
                      <Check className="w-3 h-3 stroke-[3]" />
                    </div>
                    <span><strong>+30 materiais e resumos visuais</strong> essenciais</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <div className="w-4 h-4 rounded-full bg-teal-100 text-teal-700 flex items-center justify-center shrink-0 mt-0.5 border border-teal-200">
                      <Check className="w-3 h-3 stroke-[3]" />
                    </div>
                    <span>Módulos fundamentais de consulta rápida</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <div className="w-4 h-4 rounded-full bg-teal-100 text-teal-700 flex items-center justify-center shrink-0 mt-0.5 border border-teal-200">
                      <Check className="w-3 h-3 stroke-[3]" />
                    </div>
                    <span>Mapas mentais selecionados em alta resolução</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <div className="w-4 h-4 rounded-full bg-teal-100 text-teal-700 flex items-center justify-center shrink-0 mt-0.5 border border-teal-200">
                      <Check className="w-3 h-3 stroke-[3]" />
                    </div>
                    <span>Download em PDF para celular, tablet e computador</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <div className="w-4 h-4 rounded-full bg-teal-100 text-teal-700 flex items-center justify-center shrink-0 mt-0.5 border border-teal-200">
                      <Check className="w-3 h-3 stroke-[3]" />
                    </div>
                    <span><strong>Bônus:</strong> 30 Termos da Fono Descomplicados</span>
                  </li>
                  <li className="flex items-start gap-2.5 text-slate-400">
                    <div className="w-4 h-4 rounded-full bg-slate-100 text-slate-400 flex items-center justify-center shrink-0 mt-0.5 border border-slate-200">
                      <XIcon className="w-3 h-3 stroke-[2.5]" />
                    </div>
                    <span className="line-through">Sem os 10 módulos completos</span>
                  </li>
                  <li className="flex items-start gap-2.5 text-slate-400">
                    <div className="w-4 h-4 rounded-full bg-slate-100 text-slate-400 flex items-center justify-center shrink-0 mt-0.5 border border-slate-200">
                      <XIcon className="w-3 h-3 stroke-[2.5]" />
                    </div>
                    <span className="line-through">Sem as 20 Pranchas Anatômicas Avançadas</span>
                  </li>
                </ul>
              </div>

              {/* Action Button */}
              <div className="pt-4 space-y-2">
                <button
                  onClick={() => onOpenCheckout('essencial')}
                  className="w-full py-3.5 px-6 bg-slate-850 hover:bg-slate-900 text-white font-bold text-sm rounded-xl shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Lock className="w-4 h-4 text-slate-300" />
                  <span>ESCOLHER PLANO ESSENCIAL (R$ 10,00)</span>
                </button>
                <p className="text-[11px] text-center text-slate-500">
                  Acesso imediato • Garantia de 7 dias
                </p>
              </div>

            </div>
          </div>

          {/* CARD 02: Plano Completo - R$ 27,90 (Destaque / Mais Vendido) */}
          <div className="bg-white rounded-3xl border-2 border-teal-500 shadow-2xl transition-all flex flex-col justify-between overflow-hidden relative scale-[1.01] lg:scale-[1.03]">
            {/* Top Ribbon */}
            <div className="bg-gradient-to-r from-[#0B2533] via-[#0E3A4F] to-[#0B2533] text-white px-6 py-4 flex items-center justify-between">
              <div>
                <div className="flex items-center gap-1 text-teal-300 text-[10px] font-extrabold uppercase tracking-wider mb-0.5">
                  <Star className="w-3 h-3 fill-teal-300" />
                  MAIS ESCOLHIDO • OFERTA COMPLETA
                </div>
                <h3 className="text-base sm:text-lg font-extrabold text-white">
                  Plano Completo — Atlas Fono Visual
                </h3>
              </div>
              <span className="text-xs font-bold px-3 py-1 bg-teal-500 text-white rounded-full shadow-xs shrink-0">
                100% Completo
              </span>
            </div>

            <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between space-y-6">
              
              {/* Pricing Display */}
              <div className="space-y-1 text-center sm:text-left">
                <span className="text-xs font-medium text-slate-400">
                  De <span className="line-through">R$ 97,00</span> por apenas
                </span>
                <div className="flex items-baseline justify-center sm:justify-start gap-1 text-slate-900">
                  <span className="text-xl font-bold text-slate-600">R$</span>
                  <span className="text-4xl sm:text-5xl font-black tracking-tight text-teal-700 font-mono">
                    27
                  </span>
                  <span className="text-2xl font-bold text-teal-700">,90</span>
                </div>
                <p className="text-xs text-slate-600 font-medium">
                  ou em até <strong>3x de R$ 9,80</strong> no cartão
                </p>
                <p className="text-[11px] text-teal-700 font-semibold">
                  (Pagamento único, sem mensalidades)
                </p>
              </div>

              {/* Feature Checklist */}
              <div className="space-y-3 pt-2">
                <div className="text-xs font-bold uppercase tracking-wider text-teal-900 flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-teal-600" />
                  Tudo o que você vai receber:
                </div>
                <ul className="space-y-2.5 text-xs sm:text-sm text-slate-800">
                  <li className="flex items-start gap-2.5">
                    <div className="w-4 h-4 rounded-full bg-teal-600 text-white flex items-center justify-center shrink-0 mt-0.5 shadow-xs">
                      <Check className="w-3 h-3 stroke-[3]" />
                    </div>
                    <span><strong>+100 materiais visuais</strong> em alta definição (Vetor A4)</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <div className="w-4 h-4 rounded-full bg-teal-600 text-white flex items-center justify-center shrink-0 mt-0.5 shadow-xs">
                      <Check className="w-3 h-3 stroke-[3]" />
                    </div>
                    <span><strong>Todos os 10 Módulos Completos</strong> estruturados</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <div className="w-4 h-4 rounded-full bg-teal-600 text-white flex items-center justify-center shrink-0 mt-0.5 shadow-xs">
                      <Check className="w-3 h-3 stroke-[3]" />
                    </div>
                    <span>Pranchas anatômicas detalhadas e esquemas de fisiologia</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <div className="w-4 h-4 rounded-full bg-teal-600 text-white flex items-center justify-center shrink-0 mt-0.5 shadow-xs">
                      <Check className="w-3 h-3 stroke-[3]" />
                    </div>
                    <span>Mapas mentais, tabelas diagnósticas e fluxogramas</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <div className="w-4 h-4 rounded-full bg-teal-600 text-white flex items-center justify-center shrink-0 mt-0.5 shadow-xs">
                      <Check className="w-3 h-3 stroke-[3]" />
                    </div>
                    <span>Resumos visuais para consulta rápida de bolso</span>
                  </li>
                  
                  {/* Free Bonuses Box */}
                  <li className="p-3 bg-purple-50 rounded-xl border border-purple-200/80 text-xs text-purple-900 space-y-1.5 mt-2">
                    <div className="font-bold text-purple-800 flex items-center gap-1">
                      <span>🎁 3 Bônus Especiais Inclusos Grátis:</span>
                    </div>
                    <div className="space-y-1 text-[11px] text-purple-800/90 pl-1">
                      <div>✓ Bônus 01: 30 Termos da Fono Descomplicados</div>
                      <div>✓ Bônus 02: Atlas de Anatomias Essenciais (20 pranchas)</div>
                      <div>✓ Bônus 03: 20 Comparativos Fonoaudiológicos</div>
                    </div>
                  </li>
                </ul>
              </div>

              {/* Big CTA Button */}
              <div className="pt-4 space-y-2">
                <button
                  onClick={() => onOpenCheckout('completo')}
                  className="w-full py-4 px-6 bg-teal-600 hover:bg-teal-700 active:bg-teal-800 text-white font-extrabold text-base rounded-xl shadow-xl shadow-teal-700/25 hover:shadow-2xl transition-all transform hover:-translate-y-0.5 flex items-center justify-center gap-2 cursor-pointer group"
                >
                  <Lock className="w-4 h-4 text-teal-200" />
                  <span>QUERO O PLANO COMPLETO (R$ 27,90)</span>
                </button>

                <p className="text-[11px] text-center text-slate-500">
                  Clique para abrir o checkout seguro e liberar seu acesso imediato
                </p>
              </div>

            </div>
          </div>

        </div>

        {/* Trust Badges under cards */}
        <div className="mt-12 max-w-lg mx-auto flex items-center justify-center gap-4 sm:gap-6 text-xs text-slate-600 flex-wrap">
          <span className="flex items-center gap-1 font-medium">
            <ShieldCheck className="w-4 h-4 text-teal-600" />
            Pagamento 100% seguro
          </span>
          <span>•</span>
          <span className="flex items-center gap-1 font-medium">
            <Zap className="w-4 h-4 text-teal-600" />
            Acesso digital imediato
          </span>
          <span>•</span>
          <span 
            className="flex items-center gap-1 font-medium cursor-pointer text-teal-700 hover:underline" 
            onClick={onGuaranteeClick}
          >
            Garantia de 7 dias
          </span>
        </div>

      </div>
    </section>
  );
};

