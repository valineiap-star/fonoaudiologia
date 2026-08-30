import React from 'react';
import { 
  Check, ShieldCheck, Zap, Lock, Sparkles, 
  ArrowRight, X as XIcon, Star, Tag, CreditCard,
  Flame, Gift, CheckCircle2
} from 'lucide-react';
import { PurchaseFlowCarousel } from './PurchaseFlowCarousel';

interface OfferSectionProps {
  onGuaranteeClick: () => void;
  onOpenCheckout: (planId?: 'essencial' | 'completo') => void;
}

export const OfferSection: React.FC<OfferSectionProps> = ({ onGuaranteeClick, onOpenCheckout }) => {
  return (
    <section id="oferta" className="py-20 sm:py-28 bg-gradient-to-b from-slate-50 via-teal-50/25 to-white text-slate-900 relative overflow-hidden border-t border-slate-200/80">
      
      {/* STYLIZED LIGHT GRID BACKGROUND & SOFT AMBIENT LIGHTING */}
      {/* 1. Subtle Precision Geometric Grid */}
      <div 
        className="absolute inset-0 opacity-[0.45] pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(13, 148, 136, 0.09) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(13, 148, 136, 0.09) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px',
          maskImage: 'radial-gradient(ellipse 80% 60% at 50% 40%, #000 60%, transparent 100%)',
          WebkitMaskImage: 'radial-gradient(ellipse 80% 60% at 50% 40%, #000 60%, transparent 100%)'
        }}
      />

      {/* 2. Micro Dot Grid Layer */}
      <div 
        className="absolute inset-0 opacity-[0.35] pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(#0d9488 1px, transparent 1px)',
          backgroundSize: '20px 20px',
          maskImage: 'radial-gradient(ellipse 70% 50% at 50% 50%, #000 50%, transparent 100%)',
          WebkitMaskImage: 'radial-gradient(ellipse 70% 50% at 50% 50%, #000 50%, transparent 100%)'
        }}
      />

      {/* 3. Soft Ambient Color Orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[380px] bg-teal-100/50 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[400px] h-[400px] bg-sky-100/40 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-20 right-10 w-[450px] h-[450px] bg-emerald-100/30 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center space-y-3.5 max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-teal-50 border border-teal-200 text-teal-800 text-xs font-bold uppercase tracking-wider shadow-xs backdrop-blur-xs">
            <Sparkles className="w-3.5 h-3.5 text-teal-600" />
            <span>Planos & Condições Especiais</span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
            ESCOLHA O SEU PLANO DE ACESSO
          </h2>

          <p className="text-sm sm:text-base text-slate-600">
            Selecione a melhor opção para a sua rotina de estudos e receba o acesso imediato no seu <strong>E-mail</strong> e <strong>WhatsApp</strong>.
          </p>
        </div>

        {/* 2 Offer Cards Grid */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch max-w-5xl mx-auto">
          
          {/* CARD 01: Plano Essencial - R$ 10,00 */}
          <div className="bg-white rounded-3xl border border-slate-200 shadow-xl hover:shadow-2xl transition-all flex flex-col justify-between overflow-hidden relative text-slate-900">
            {/* Top Bar */}
            <div className="bg-slate-50 text-slate-700 px-6 py-4 border-b border-slate-200 flex items-center justify-between">
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 block">
                  OPÇÃO DE ENTRADA
                </span>
                <h3 className="text-base sm:text-lg font-bold text-slate-900">
                  Plano Essencial
                </h3>
              </div>
              <span className="text-xs font-semibold px-2.5 py-1 bg-white rounded-full text-slate-700 border border-slate-200 shadow-2xs">
                Resumos Práticos
              </span>
            </div>

            <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between space-y-6">
              
              {/* Premium Pricing Display Container - Centralized */}
              <div className="p-5 rounded-2xl bg-gradient-to-b from-slate-50 to-slate-100/90 border border-slate-200/80 shadow-xs flex flex-col items-center text-center space-y-2.5">
                {/* De / Por & Discount badge */}
                <div className="flex items-center justify-center gap-2">
                  <span className="text-xs text-slate-500 font-normal">De</span>
                  <span className="text-xs line-through text-slate-400 font-normal">R$ 39,00</span>
                  <span className="text-xs text-slate-500 font-normal">por apenas</span>
                  <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-slate-200 text-slate-700 text-[11px] font-bold">
                    <Tag className="w-3 h-3" />
                    74% OFF
                  </span>
                </div>

                {/* Big Centered Price with Poppins Bold & Regular */}
                <div className="flex items-baseline justify-center gap-1 text-slate-900 my-1">
                  <span className="text-xl sm:text-2xl font-bold text-slate-600">R$</span>
                  <span className="text-6xl sm:text-7xl font-extrabold tracking-tight text-slate-900 leading-none">
                    10
                  </span>
                  <div className="flex flex-col text-left justify-end pb-1">
                    <span className="text-2xl sm:text-3xl font-extrabold text-slate-900 leading-none">,00</span>
                    <span className="text-[11px] uppercase font-medium text-slate-500 tracking-wider">à vista</span>
                  </div>
                </div>

                {/* Subtitle / Conditions */}
                <div className="w-full pt-2.5 border-t border-slate-200 flex items-center justify-center text-[12px] text-slate-600 font-normal">
                  <span className="flex items-center gap-1.5">
                    <Zap className="w-3.5 h-3.5 text-teal-600" />
                    <span>Pagamento único • Sem mensalidade • Acesso digital</span>
                  </span>
                </div>
              </div>

              {/* Feature Checklist */}
              <div className="space-y-3 pt-1">
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
                  <li className="flex items-start gap-2.5 text-slate-400">
                    <div className="w-4 h-4 rounded-full bg-slate-100 text-slate-400 flex items-center justify-center shrink-0 mt-0.5 border border-slate-200">
                      <XIcon className="w-3 h-3 stroke-[2.5]" />
                    </div>
                    <span className="line-through">Sem os 3 Bônus Exclusivos (apenas no Completo)</span>
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
                    <span className="line-through">Sem o Atlas de 20 Pranchas e 20 Comparativos</span>
                  </li>
                </ul>
              </div>

              {/* Action Button */}
              <div className="pt-2 space-y-2">
                <a
                  href="https://pay.wiapy.com/pq8eDC6y7VLk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-4 px-6 bg-teal-700 hover:bg-teal-800 active:bg-teal-900 text-white font-extrabold text-sm rounded-xl shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer no-underline"
                  style={{ backgroundColor: '#0f766e', color: '#ffffff' }}
                >
                  <Lock className="w-4 h-4 text-teal-200 shrink-0" />
                  <span className="text-white font-extrabold tracking-wide">
                    ESCOLHER PLANO ESSENCIAL (R$ 10,00)
                  </span>
                </a>
                <p className="text-[11px] text-center text-slate-500 font-medium">
                  Envio imediato no E-mail e WhatsApp • Garantia de 7 dias
                </p>
              </div>

            </div>
          </div>

          {/* CARD 02: Plano Completo - R$ 27,90 (Destaque / Mais Vendido) */}
          <div className="bg-white rounded-3xl border-2 border-teal-500 shadow-2xl shadow-teal-600/15 transition-all flex flex-col justify-between overflow-hidden relative scale-[1.01] lg:scale-[1.03] text-slate-900">
            {/* Top Ribbon */}
            <div className="bg-gradient-to-r from-teal-600 via-teal-700 to-emerald-600 text-white px-6 py-4 flex items-center justify-between shadow-xs">
              <div>
                <div className="flex items-center gap-1.5 text-amber-200 text-[10px] font-extrabold uppercase tracking-wider mb-0.5">
                  <Flame className="w-3.5 h-3.5 text-amber-300 fill-amber-300" />
                  <span>MAIS ESCOLHIDO • PACOTE COMPLETO</span>
                </div>
                <h3 className="text-base sm:text-lg font-extrabold text-white">
                  Plano Completo — Atlas Fono Visual
                </h3>
              </div>
              <span className="text-xs font-bold px-3 py-1 bg-white/20 text-white backdrop-blur-xs rounded-full shadow-xs shrink-0 border border-white/30">
                100% Completo
              </span>
            </div>

            <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between space-y-6">
              
              {/* Premium Pricing Display Container - Centralized */}
              <div className="p-5 rounded-2xl bg-gradient-to-b from-teal-50/90 via-teal-50/50 to-emerald-50/40 border-2 border-teal-300 shadow-xs flex flex-col items-center text-center space-y-2.5 relative overflow-hidden">
                
                {/* De / Por & Economy badge */}
                <div className="flex items-center justify-center gap-2">
                  <span className="text-xs text-slate-500 font-normal">De</span>
                  <span className="text-xs line-through text-slate-400 font-normal">R$ 97,00</span>
                  <span className="text-xs text-slate-500 font-normal">por apenas</span>
                  <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-md bg-teal-600 text-white text-[11px] font-bold shadow-2xs">
                    <Sparkles className="w-3 h-3 text-teal-200" />
                    ECONOMIZE R$ 69,10
                  </span>
                </div>

                {/* Big Centered Price with Poppins Bold & Regular */}
                <div className="flex items-baseline justify-center gap-1 text-teal-900 my-1">
                  <span className="text-xl sm:text-2xl font-bold text-teal-700">R$</span>
                  <span className="text-6xl sm:text-7xl font-extrabold tracking-tight text-teal-900 leading-none">
                    27
                  </span>
                  <div className="flex flex-col text-left justify-end pb-1">
                    <span className="text-2xl sm:text-3xl font-extrabold text-teal-900 leading-none">,90</span>
                    <span className="text-[11px] uppercase font-medium text-teal-700 tracking-wider">à vista</span>
                  </div>
                </div>

                {/* Centered Installment badge & Vitalício */}
                <div className="w-full pt-2.5 border-t border-teal-200/80 flex flex-col sm:flex-row items-center justify-center gap-2 text-xs">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-teal-100/90 text-teal-950 font-normal text-[11.5px] border border-teal-200">
                    <CreditCard className="w-3.5 h-3.5 text-teal-700 shrink-0" />
                    <span>ou em até <strong className="font-bold text-teal-900">3x de R$ 9,80</strong> no cartão</span>
                  </div>
                  <span className="text-[11.5px] font-normal text-teal-800 flex items-center gap-1">
                    <Zap className="w-3 h-3 text-teal-600 shrink-0" />
                    <span>Acesso vitalício aos materiais</span>
                  </span>
                </div>
              </div>

              {/* Feature Checklist */}
              <div className="space-y-3 pt-1">
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
                  <li className="p-4 bg-purple-50/90 rounded-2xl border border-purple-200/90 text-xs text-purple-950 space-y-2.5 mt-3 shadow-xs">
                    <div className="font-extrabold text-purple-900 flex items-center justify-between text-xs">
                      <span className="flex items-center gap-1.5">
                        <Gift className="w-4 h-4 text-purple-600 shrink-0" />
                        <span>3 Bônus Especiais Inclusos Grátis:</span>
                      </span>
                      <span className="text-[10px] uppercase font-bold bg-purple-200/70 text-purple-800 px-2 py-0.5 rounded-md">
                        Economize R$ 141
                      </span>
                    </div>
                    <div className="space-y-1.5 text-[11px] text-purple-900 font-medium pt-1 border-t border-purple-200/60">
                      <div className="flex items-start gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-purple-700 shrink-0 mt-0.5" />
                        <span><strong>Bônus 01:</strong> 30 Termos da Fono Descomplicados (Glossário Visual)</span>
                      </div>
                      <div className="flex items-start gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-purple-700 shrink-0 mt-0.5" />
                        <span><strong>Bônus 02:</strong> Atlas de Anatomias Essenciais (20 Pranchas em Alta Resolução)</span>
                      </div>
                      <div className="flex items-start gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-purple-700 shrink-0 mt-0.5" />
                        <span><strong>Bônus 03:</strong> 20 Comparativos Fonoaudiológicos (Diferenciação Clínica)</span>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>

              {/* Big CTA Button */}
              <div className="pt-2 space-y-2">
                <a
                  href="https://pay.wiapy.com/PQkBus3GGCH"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-4 px-6 bg-teal-600 hover:bg-teal-700 active:bg-teal-800 text-white font-extrabold text-base rounded-xl shadow-xl shadow-teal-700/25 hover:shadow-2xl transition-all transform hover:-translate-y-0.5 flex items-center justify-center gap-2 cursor-pointer group no-underline"
                  style={{ backgroundColor: '#0d9488', color: '#ffffff' }}
                >
                  <Zap className="w-5 h-5 text-amber-300 fill-amber-300" />
                  <span className="text-white font-extrabold tracking-wide">
                    QUERO O PLANO COMPLETO COM BÔNUS (R$ 27,90)
                  </span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform text-white" />
                </a>
                <p className="text-[11px] text-center text-slate-500 font-medium">
                  Envio imediato no E-mail e WhatsApp • Acesso vitalício
                </p>
              </div>

            </div>
          </div>

        </div>

        {/* Trust Badges under cards */}
        <div className="mt-10 max-w-lg mx-auto flex items-center justify-center gap-4 sm:gap-6 text-xs text-slate-600 flex-wrap">
          <span className="flex items-center gap-1 font-medium">
            <ShieldCheck className="w-4 h-4 text-teal-600" />
            Pagamento 100% seguro
          </span>
          <span>•</span>
          <span className="flex items-center gap-1 font-medium">
            <Zap className="w-4 h-4 text-teal-600" />
            Envio imediato no E-mail e WhatsApp
          </span>
          <span>•</span>
          <span 
            className="flex items-center gap-1 font-medium cursor-pointer text-teal-700 hover:underline" 
            onClick={onGuaranteeClick}
          >
            Garantia de 7 dias
          </span>
        </div>

        {/* CARROSSEL DO PROCESSO DE COMPRA E ENVIO DOS MATERIAIS */}
        <PurchaseFlowCarousel />

      </div>
    </section>
  );
};
