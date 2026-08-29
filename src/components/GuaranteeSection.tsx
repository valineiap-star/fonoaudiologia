import React from 'react';
import { ShieldCheck, CheckCircle2, RefreshCw } from 'lucide-react';

interface GuaranteeSectionProps {
  onCtaClick: () => void;
}

export const GuaranteeSection: React.FC<GuaranteeSectionProps> = ({ onCtaClick }) => {
  return (
    <section id="garantia" className="py-20 bg-[#FAFBFD] border-b border-slate-200/60 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="bg-white rounded-3xl border border-slate-200 p-8 sm:p-12 shadow-md relative overflow-hidden flex flex-col md:flex-row items-center gap-8">
          
          {/* Guarantee Seal Graphic */}
          <div className="shrink-0 flex flex-col items-center justify-center">
            <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-full bg-gradient-to-tr from-[#0B2533] to-teal-700 p-1.5 shadow-xl flex items-center justify-center relative group">
              <div className="w-full h-full rounded-full border-2 border-dashed border-teal-300/60 flex flex-col items-center justify-center text-center text-white px-2">
                <ShieldCheck className="w-8 h-8 text-teal-300 mb-0.5" />
                <span className="text-xl sm:text-2xl font-black tracking-tight leading-none text-white font-mono">
                  7 DIAS
                </span>
                <span className="text-[9px] uppercase font-bold tracking-widest text-teal-200 mt-0.5">
                  Garantia Total
                </span>
              </div>
            </div>
            <span className="mt-3 text-[11px] font-bold text-teal-800 uppercase tracking-wider bg-teal-50 px-2.5 py-0.5 rounded-full border border-teal-200">
              100% Sem Risco
            </span>
          </div>

          {/* Copy text */}
          <div className="flex-1 text-center md:text-left space-y-3">
            <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
              GARANTIA INCONDICIONAL DE 7 DIAS
            </h3>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              Você pode acessar o <strong>Fono Visual</strong> e conhecer os materiais com tranquilidade. Se dentro do prazo de 7 dias você entender que o produto não é para você, poderá solicitar o reembolso conforme as regras da plataforma de pagamento.
            </p>

            <p className="text-sm font-semibold text-teal-800">
              Você tem 7 dias para experimentar sem risco.
            </p>

            <div className="pt-2 flex flex-wrap items-center justify-center md:justify-start gap-4 text-xs text-slate-500">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-teal-600" />
                Reembolso sem burocracia
              </span>
              <span className="flex items-center gap-1.5">
                <RefreshCw className="w-4 h-4 text-teal-600" />
                Acesso direto pelo e-mail
              </span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
