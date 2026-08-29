import React from 'react';
import { CheckCircle2, RefreshCw } from 'lucide-react';

interface GuaranteeSectionProps {
  onCtaClick: () => void;
}

export const GuaranteeSection: React.FC<GuaranteeSectionProps> = ({ onCtaClick }) => {
  return (
    <section id="garantia" className="py-16 sm:py-20 bg-transparent relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12">
          
          {/* Guarantee Seal Graphic with transparent blend */}
          <div className="shrink-0 flex flex-col items-center justify-center">
            <img
              src="https://i.postimg.cc/kgLXxSp7/images.jpg"
              alt="Garantia Incondicional de 7 Dias"
              referrerPolicy="no-referrer"
              className="w-40 h-40 sm:w-48 sm:h-48 object-contain mix-blend-multiply transition-transform hover:scale-105 duration-300"
            />
          </div>

          {/* Copy text */}
          <div className="flex-1 text-center md:text-left space-y-3.5 max-w-xl">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              GARANTIA INCONDICIONAL DE 7 DIAS
            </h3>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
              Você pode acessar o <strong>Fono Visual</strong> e conhecer os materiais com tranquilidade. Se dentro do prazo de 7 dias você entender que o produto não é para você, poderá solicitar o reembolso conforme as regras da plataforma de pagamento.
            </p>

            <p className="text-sm sm:text-base font-semibold text-teal-800">
              Você tem 7 dias para experimentar sem risco algum.
            </p>

            <div className="pt-2 flex flex-wrap items-center justify-center md:justify-start gap-4 text-xs text-slate-600">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-teal-600" />
                Reembolso sem burocracia
              </span>
              <span className="flex items-center gap-1.5">
                <RefreshCw className="w-4 h-4 text-teal-600" />
                Envio imediato no E-mail e WhatsApp
              </span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

