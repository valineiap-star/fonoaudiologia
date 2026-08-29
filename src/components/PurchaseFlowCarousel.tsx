import React, { useRef, useState, useEffect } from 'react';
import { 
  CreditCard, 
  MailCheck, 
  Download, 
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
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const steps: PurchaseStep[] = [
    {
      id: 'step-1',
      stepNumber: '01',
      shortLabel: 'Plano',
      badge: 'ETAPA 01',
      title: '1. Escolha o seu plano ideal',
      description: 'Clique no botão do Plano Essencial (R$ 10,00) ou no Plano Completo com Atlas e 3 Bônus (R$ 27,90).',
      highlight: 'Pagamento único e sem mensalidades.',
      icon: <MousePointerClick className="w-5 h-5 text-teal-600" />,
    },
    {
      id: 'step-2',
      stepNumber: '02',
      shortLabel: 'Checkout',
      badge: 'ETAPA 02',
      title: '2. Preencha seus dados com segurança',
      description: 'Informe seu nome e o e-mail onde deseja receber os materiais. A página é 100% criptografada e protegida.',
      highlight: 'Criptografia e proteção total de dados.',
      icon: <ShieldCheck className="w-5 h-5 text-teal-600" />,
    },
    {
      id: 'step-3',
      stepNumber: '03',
      shortLabel: 'Pagamento',
      badge: 'ETAPA 03',
      title: '3. Confirme via PIX ou Cartão',
      description: 'Pague via PIX para liberação instantânea ou parcele em até 3x no Cartão com total comodidade.',
      highlight: 'Confirmação rápida e segura.',
      icon: <CreditCard className="w-5 h-5 text-teal-600" />,
    },
    {
      id: 'step-4',
      stepNumber: '04',
      shortLabel: 'E-mail',
      badge: 'ETAPA 04',
      title: '4. Receba o acesso no seu e-mail',
      description: 'Assim que o pagamento é aprovado, nossa plataforma envia automaticamente a mensagem com os links de acesso.',
      highlight: 'Envio imediato na sua caixa de entrada.',
      icon: <MailCheck className="w-5 h-5 text-teal-600" />,
    },
    {
      id: 'step-5',
      stepNumber: '05',
      shortLabel: 'Download',
      badge: 'ETAPA 05',
      title: '5. Baixe os PDFs e estude quando quiser',
      description: 'Salve todos os arquivos em PDF de alta resolução no seu celular, tablet ou computador para consultar e imprimir.',
      highlight: 'Acesso permanente aos seus arquivos.',
      icon: <Download className="w-5 h-5 text-teal-600" />,
    },
  ];

  // Handle scroll detection to update active dot
  const handleScroll = () => {
    if (!scrollContainerRef.current) return;
    const container = scrollContainerRef.current;
    const scrollPosition = container.scrollLeft;
    const cardWidth = container.offsetWidth * 0.85; // approximate width on mobile/desktop
    const newIndex = Math.round(scrollPosition / cardWidth);
    setActiveIndex(Math.min(Math.max(newIndex, 0), steps.length - 1));
  };

  const scrollToStep = (index: number) => {
    if (!scrollContainerRef.current) return;
    const container = scrollContainerRef.current;
    const cards = container.querySelectorAll<HTMLElement>('[data-step-card]');
    if (cards[index]) {
      cards[index].scrollIntoView({
        behavior: 'smooth',
        inline: 'center',
        block: 'nearest'
      });
      setActiveIndex(index);
    }
  };

  return (
    <div className="mt-12 max-w-5xl mx-auto px-2 sm:px-4">
      {/* Header Info */}
      <div className="text-center mb-6 space-y-1">
        <span className="text-xs font-bold text-teal-700 uppercase tracking-wider bg-teal-50 border border-teal-200/80 px-3 py-1 rounded-full inline-block">
          Como funciona a entrega
        </span>
        <h3 className="text-lg sm:text-xl font-bold text-slate-800">
          Passo a passo simples e 100% digital
        </h3>
        <p className="text-xs text-slate-500">
          Deslize para o lado para acompanhar todo o processo de compra e recebimento
        </p>
      </div>

      {/* Scrollable Container */}
      <div 
        ref={scrollContainerRef}
        onScroll={handleScroll}
        className="flex gap-4 overflow-x-auto pb-4 pt-2 px-2 scroll-smooth snap-x snap-mandatory focus:outline-none no-scrollbar cursor-grab active:cursor-grabbing"
        style={{
          scrollbarWidth: 'thin',
          WebkitOverflowScrolling: 'touch'
        }}
      >
        {steps.map((step, idx) => (
          <div
            key={step.id}
            data-step-card
            className="snap-center shrink-0 w-[82vw] sm:w-[320px] md:w-[340px] bg-white border border-teal-200/80 hover:border-teal-400/80 rounded-2xl p-5 shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between relative overflow-hidden"
          >
            {/* Top Glow */}
            <div className="absolute top-0 right-0 w-24 h-24 bg-teal-50 rounded-full blur-xl pointer-events-none" />

            <div className="space-y-3 relative z-10">
              {/* Badge & Icon Row */}
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-extrabold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-teal-100/70 text-teal-800 border border-teal-200">
                  {step.badge}
                </span>
                <div className="w-10 h-10 rounded-xl bg-teal-50 border border-teal-200 flex items-center justify-center text-teal-600 shadow-2xs">
                  {step.icon}
                </div>
              </div>

              {/* Title & Desc */}
              <div className="space-y-1.5 pt-1">
                <h4 className="text-sm sm:text-base font-bold text-slate-900 leading-snug">
                  {step.title}
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed min-h-[48px]">
                  {step.description}
                </p>
              </div>
            </div>

            {/* Reassurance pill */}
            <div className="pt-3 mt-3 border-t border-slate-100 relative z-10">
              <div className="inline-flex items-center gap-1.5 text-[11px] text-teal-800 font-medium">
                <Sparkles className="w-3 h-3 text-teal-600 shrink-0" />
                <span>{step.highlight}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination Dots (No Arrows) */}
      <div className="mt-4 flex items-center justify-center gap-1.5">
        {steps.map((s, i) => (
          <button
            key={`dot-${s.id}`}
            onClick={() => scrollToStep(i)}
            aria-label={`Ir para etapa ${i + 1}`}
            className={`transition-all duration-300 rounded-full cursor-pointer ${
              activeIndex === i 
                ? 'w-6 h-2 bg-teal-600' 
                : 'w-2 h-2 bg-slate-300 hover:bg-slate-400'
            }`}
          />
        ))}
      </div>
    </div>
  );
};
