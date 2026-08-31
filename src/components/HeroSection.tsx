import React from 'react';
import { Check, Zap, BookOpen, Layers, Smartphone } from 'lucide-react';

interface HeroSectionProps {
  onCtaClick: () => void;
  onPreviewSheet?: (sheetId: string) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onCtaClick }) => {
  const highlights = [
    'Conteúdo visual e organizado',
    'Diversas áreas da Fonoaudiologia',
    'Envio imediato no E-mail e WhatsApp',
    'Consulte pelo celular, tablet ou computador'
  ];

  return (
    <section className="relative pt-10 sm:pt-16 md:pt-20 pb-12 sm:pb-16 overflow-hidden bg-white">
      {/* Subtle background soft lighting */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-teal-100/30 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-40 right-10 w-96 h-96 bg-sky-100/20 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center space-y-8">
        
        {/* Main Headline */}
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.18] text-center max-w-3xl mx-auto">
          +90 MAPAS MENTAIS DE ESTUDO PARA{' '}
          <span className="text-teal-600 relative inline-block">
            FONOAUDIOLOGIA
            <svg className="absolute -bottom-1.5 left-0 w-full h-2 text-teal-300 -z-10" viewBox="0 0 100 20" preserveAspectRatio="none">
              <path d="M0,10 Q50,0 100,10" stroke="currentColor" strokeWidth="8" fill="none" />
            </svg>
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-base sm:text-lg md:text-xl text-slate-600 leading-relaxed font-normal max-w-2xl mx-auto text-center">
          Tenha em mãos mapas, esquemas anatômicos, comparativos e resumos visuais para estudar, revisar e consultar os principais conteúdos da Fonoaudiologia com muito mais clareza.
        </p>

        {/* 4 Feature Highlights Centered */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-2xl w-full mx-auto pt-1">
          {highlights.map((item, idx) => (
            <div key={idx} className="flex items-center justify-center sm:justify-start space-x-3 bg-white/90 backdrop-blur-xs px-4 py-3 rounded-xl border border-slate-200/80 shadow-xs">
              <div className="w-5 h-5 rounded-full bg-teal-100 text-teal-700 flex items-center justify-center shrink-0 border border-teal-200">
                <Check className="w-3.5 h-3.5 stroke-[2.5]" />
              </div>
              <span className="text-xs sm:text-sm font-semibold text-slate-800 leading-snug text-left">
                {item}
              </span>
            </div>
          ))}
        </div>

        {/* Primary CTA Area */}
        <div className="pt-2 flex flex-col items-center space-y-3 w-full">
          <button
            onClick={() => onCtaClick()}
            className="w-full sm:w-auto px-10 py-4 bg-teal-600 hover:bg-teal-700 active:bg-teal-800 text-white font-extrabold text-base rounded-xl shadow-xl shadow-teal-700/25 hover:shadow-2xl transition-all transform hover:-translate-y-0.5 flex items-center justify-center gap-3 cursor-pointer group"
          >
            <span>QUERO ACESSAR O FONO VISUAL</span>
            <span className="px-2.5 py-0.5 text-xs bg-teal-800/60 rounded-md font-bold text-teal-200 group-hover:bg-teal-900 transition-colors">
              PDF 100% Digital
            </span>
          </button>
          
          <p className="text-xs text-slate-500 font-medium flex items-center justify-center gap-1.5">
            <Zap className="w-3.5 h-3.5 text-teal-600" />
            Envio imediato no seu E-mail e WhatsApp após a confirmação.
          </p>
        </div>

        {/* Quick Feature Badges under CTA */}
        <div className="pt-4 flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-xs text-slate-500">
          <span className="flex items-center gap-1.5">
            <Layers className="w-4 h-4 text-teal-600" />
            10 Módulos Estruturados
          </span>
          <span>•</span>
          <span className="flex items-center gap-1.5">
            <BookOpen className="w-4 h-4 text-teal-600" />
            Pranchas de Alta Definição
          </span>
          <span>•</span>
          <span className="flex items-center gap-1.5">
            <Smartphone className="w-4 h-4 text-teal-600" />
            Compatível com Qualquer Dispositivo
          </span>
        </div>

      </div>
    </section>
  );
};

