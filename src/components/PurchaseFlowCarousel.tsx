import React, { useState } from 'react';
import { 
  CreditCard, 
  MailCheck, 
  Download, 
  ChevronLeft, 
  ChevronRight, 
  MousePointerClick,
  ShieldCheck,
  Sparkles,
} from 'lucide-react';

interface PurchaseStep {
  id: string;
  stepNumber: string;
  shortLabel: string;
  title: string;
  description: string;
  highlight: string;
  badge: string;
  icon: React.ReactNode;
}

export const PurchaseFlowCarousel: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(0);

  const steps: PurchaseStep[] = [
    {
      id: 'step-1',
      stepNumber: '01',
      shortLabel: 'Plano',
      badge: 'ETAPA 01 • ESCOLHA DO PLANO',
      title: '1. Escolha o plano ideal para você',
      description: 'Clique no botão do Plano Essencial (R$ 10,00) ou no Plano Completo com Atlas e 3 Bônus Inclusos (R$ 27,90).',
      highlight: 'Pagamento único e sem mensalidades escondidas.',
      icon: <MousePointerClick className="w-5 h-5 text-teal-600" />,
    },
    {
      id: 'step-2',
      stepNumber: '02',
      shortLabel: 'Checkout',
      badge: 'ETAPA 02 • SEGURANÇA TOTAL',
      title: '2. Preencha seus dados com segurança',
      description: 'Informe seu nome e o e-mail onde deseja receber os materiais. A página é 100% criptografada e protegida.',
      highlight: 'Seus dados ficam protegidos com criptografia de ponta a ponta.',
      icon: <ShieldCheck className="w-5 h-5 text-teal-600" />,
    },
    {
      id: 'step-3',
      stepNumber: '03',
      shortLabel: 'Pagamento',
      badge: 'ETAPA 03 • PAGAMENTO INSTANTÂNEO',
      title: '3. Confirme via PIX ou Cartão de Crédito',
      description: 'Pague via PIX para liberação instantânea no sistema ou parcele em até 3x no Cartão com total comodidade.',
      highlight: 'No PIX, a confirmação ocorre em menos de 1 minuto.',
      icon: <CreditCard className="w-5 h-5 text-teal-600" />,
    },
    {
      id: 'step-4',
      stepNumber: '04',
      shortLabel: 'E-mail',
      badge: 'ETAPA 04 • ENVIO AUTOMÁTICO',
      title: '4. Receba o acesso direto no seu e-mail',
      description: 'Assim que o pagamento é identificado, nossa plataforma envia automaticamente a mensagem com os links de acesso.',
      highlight: 'Basta abrir a caixa de entrada para encontrar seu material.',
      icon: <MailCheck className="w-5 h-5 text-teal-600" />,
    },
    {
      id: 'step-5',
      stepNumber: '05',
      shortLabel: 'Download',
      badge: 'ETAPA 05 • USO ILIMITADO',
      title: '5. Baixe os PDFs e use quando quiser',
      description: 'Abra e salve todos os arquivos em PDF de alta resolução no seu celular, tablet ou computador para consultar e imprimir.',
      highlight: 'Acesso permanente para sempre aos seus arquivos digitais.',
      icon: <Download className="w-5 h-5 text-teal-600" />,
    },
  ];

  const handlePrev = () => {
    setCurrentStep((prev) => (prev === 0 ? steps.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentStep((prev) => (prev + 1) % steps.length);
  };

  const current = steps[currentStep];

  return (
    <div className="mt-12 max-w-3xl mx-auto px-4">
      {/* Main Step Showcase Card */}
      <div className="relative bg-white border border-teal-200/90 rounded-2xl p-5 sm:p-7 shadow-md overflow-hidden">
        
        {/* Soft Ambient Corner Accent */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-teal-100/40 rounded-full blur-2xl pointer-events-none" />
        
        {/* Step Badge and Navigation Controls */}
        <div className="flex items-center justify-between gap-3 pb-4 border-b border-slate-100">
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-1 rounded-md bg-teal-50 border border-teal-200 text-teal-800 text-[10px] sm:text-[11px] font-mono font-bold tracking-wider uppercase">
              {current.badge}
            </span>
          </div>

          {/* Prev / Next Arrows */}
          <div className="flex items-center gap-1.5">
            <button
              onClick={handlePrev}
              aria-label="Etapa anterior"
              className="p-1.5 sm:p-2 rounded-lg bg-slate-50 hover:bg-teal-50 text-slate-600 hover:text-teal-800 border border-slate-200 hover:border-teal-300 transition-all cursor-pointer"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={handleNext}
              aria-label="Próxima etapa"
              className="p-1.5 sm:p-2 rounded-lg bg-slate-50 hover:bg-teal-50 text-slate-600 hover:text-teal-800 border border-slate-200 hover:border-teal-300 transition-all cursor-pointer"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Step Content */}
        <div className="pt-4 flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6">
          {/* Icon Box */}
          <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-teal-50 border border-teal-200 flex items-center justify-center shrink-0 shadow-xs">
            {current.icon}
          </div>

          {/* Text and Highlights */}
          <div className="flex-1 space-y-2 min-w-0">
            <h4 className="text-base sm:text-lg font-extrabold text-slate-900 leading-snug">
              {current.title}
            </h4>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              {current.description}
            </p>
            
            {/* Reassurance pill */}
            <div className="pt-1.5">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-teal-50 border border-teal-200 text-teal-800 text-[11px] font-semibold">
                <Sparkles className="w-3.5 h-3.5 text-teal-600 shrink-0" />
                <span>{current.highlight}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Micro Timeline Indicators */}
        <div className="mt-5 pt-4 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500">
          <span className="flex items-center gap-1 font-medium">
            <span>Passo {currentStep + 1} de {steps.length}</span>
          </span>
          <div className="flex items-center gap-1.5">
            {steps.map((s, i) => (
              <button
                key={`dot-${s.id}`}
                onClick={() => setCurrentStep(i)}
                aria-label={`Ir para etapa ${i + 1}`}
                className={`transition-all duration-300 rounded-full cursor-pointer ${
                  currentStep === i 
                    ? 'w-5 h-1.5 bg-teal-600' 
                    : 'w-1.5 h-1.5 bg-slate-200 hover:bg-slate-300'
                }`}
              />
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};
