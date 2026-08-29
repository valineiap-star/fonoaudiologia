import React, { useState, useEffect } from 'react';
import { 
  CreditCard, 
  MailCheck, 
  Download, 
  ChevronLeft, 
  ChevronRight, 
  MousePointerClick,
  ShieldCheck,
  Zap
} from 'lucide-react';

interface PurchaseStep {
  stepNumber: string;
  title: string;
  shortDesc: string;
  icon: React.ReactNode;
}

export const PurchaseFlowCarousel: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const steps: PurchaseStep[] = [
    {
      stepNumber: '01',
      title: '1. Escolha o Plano',
      shortDesc: 'Selecione o plano Essencial ou Completo com bônus e clique no botão.',
      icon: <MousePointerClick className="w-5 h-5 text-teal-400" />,
    },
    {
      stepNumber: '02',
      title: '2. Checkout Seguro',
      shortDesc: 'Preencha seus dados em ambiente criptografado e 100% blindado.',
      icon: <ShieldCheck className="w-5 h-5 text-teal-400" />,
    },
    {
      stepNumber: '03',
      title: '3. Pagamento Rápido',
      shortDesc: 'Pague via PIX para aprovação imediata ou em até 3x no Cartão.',
      icon: <CreditCard className="w-5 h-5 text-teal-400" />,
    },
    {
      stepNumber: '04',
      title: '4. Receba no E-mail',
      shortDesc: 'O link de acesso chega na sua caixa de entrada em instantes.',
      icon: <MailCheck className="w-5 h-5 text-teal-400" />,
    },
    {
      stepNumber: '05',
      title: '5. Baixe os PDFs',
      shortDesc: 'Acesse os arquivos digitais em alta resolução para sempre.',
      icon: <Download className="w-5 h-5 text-teal-400" />,
    },
  ];

  // Auto-play timer
  useEffect(() => {
    if (!isAutoPlaying) return;
    const timer = setInterval(() => {
      setCurrentStep((prev) => (prev + 1) % steps.length);
    }, 4500);
    return () => clearInterval(timer);
  }, [isAutoPlaying, steps.length]);

  const handlePrev = () => {
    setIsAutoPlaying(false);
    setCurrentStep((prev) => (prev === 0 ? steps.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setIsAutoPlaying(false);
    setCurrentStep((prev) => (prev + 1) % steps.length);
  };

  return (
    <div 
      className="mt-12 pt-8 border-t border-slate-800/80 max-w-2xl mx-auto px-4"
      onMouseEnter={() => setIsAutoPlaying(false)}
      onMouseLeave={() => setIsAutoPlaying(true)}
    >
      {/* Mini Title */}
      <div className="flex items-center justify-between gap-2 mb-3 text-xs">
        <span className="flex items-center gap-1.5 font-bold uppercase tracking-wider text-teal-400">
          <Zap className="w-3.5 h-3.5" />
          Como Você Recebe o Material
        </span>
        <span className="text-slate-400 font-mono text-[11px]">
          Etapa {currentStep + 1} de {steps.length}
        </span>
      </div>

      {/* Compact Minimal Card */}
      <div className="bg-slate-900/90 border border-teal-500/20 rounded-2xl p-4 sm:p-5 shadow-lg backdrop-blur-xs flex items-center justify-between gap-3 sm:gap-5">
        
        {/* Prev Mini Button */}
        <button
          onClick={handlePrev}
          aria-label="Etapa anterior"
          className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors cursor-pointer shrink-0 border border-slate-700/60"
        >
          <ChevronLeft className="w-4 h-4" />
        </button>

        {/* Content Box */}
        <div className="flex items-center gap-3 sm:gap-4 min-w-0 flex-1">
          <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-teal-950/90 border border-teal-500/30 flex items-center justify-center shrink-0 shadow-inner">
            {steps[currentStep].icon}
          </div>
          <div className="min-w-0 flex-1">
            <h4 className="text-sm sm:text-base font-bold text-white truncate">
              {steps[currentStep].title}
            </h4>
            <p className="text-xs text-slate-300 line-clamp-2 leading-relaxed mt-0.5">
              {steps[currentStep].shortDesc}
            </p>
          </div>
        </div>

        {/* Next Mini Button */}
        <button
          onClick={handleNext}
          aria-label="Próxima etapa"
          className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors cursor-pointer shrink-0 border border-slate-700/60"
        >
          <ChevronRight className="w-4 h-4" />
        </button>

      </div>

      {/* Minimal Stepper Indicator Dots */}
      <div className="flex items-center justify-center gap-1.5 mt-3">
        {steps.map((step, idx) => (
          <button
            key={step.stepNumber}
            onClick={() => {
              setIsAutoPlaying(false);
              setCurrentStep(idx);
            }}
            aria-label={`Ir para etapa ${idx + 1}`}
            className={`transition-all duration-300 rounded-full cursor-pointer ${
              currentStep === idx 
                ? 'w-6 h-1.5 bg-teal-400' 
                : 'w-1.5 h-1.5 bg-slate-700 hover:bg-slate-500'
            }`}
          />
        ))}
      </div>
    </div>
  );
};
