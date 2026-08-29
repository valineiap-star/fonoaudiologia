import React from 'react';
import { Timer, ArrowRight, Sparkles } from 'lucide-react';

interface TopBannerProps {
  onCtaClick?: () => void;
}

export const TopBanner: React.FC<TopBannerProps> = ({ onCtaClick }) => {
  return (
    <div className="w-full bg-[#081B26] text-white text-xs sm:text-sm font-semibold py-2.5 px-4 border-b border-teal-500/20 shadow-xs relative z-30">
      <div className="max-w-7xl mx-auto flex items-center justify-center gap-2.5 text-center flex-wrap">
        <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-teal-500/20 text-teal-300 text-[11px] font-bold uppercase tracking-wider border border-teal-500/30">
          <span className="w-1.5 h-1.5 rounded-full bg-teal-400 animate-pulse" />
          Atenção
        </span>

        <div className="flex items-center gap-2">
          <Timer className="w-4 h-4 text-teal-400 shrink-0" />
          <span className="tracking-wide uppercase text-slate-100 font-bold">
            Oferta disponível por tempo limitado
          </span>
        </div>

        {onCtaClick && (
          <button
            onClick={onCtaClick}
            className="hidden sm:inline-flex items-center gap-1 text-teal-300 hover:text-white font-bold ml-2 underline underline-offset-4 decoration-teal-400 hover:decoration-white transition-colors cursor-pointer text-xs"
          >
            Garantir com Desconto
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        )}
      </div>
    </div>
  );
};
