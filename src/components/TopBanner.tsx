import React from 'react';
import { Timer, ArrowRight, Sparkles } from 'lucide-react';

interface TopBannerProps {
  onCtaClick?: () => void;
}

export const TopBanner: React.FC<TopBannerProps> = ({ onCtaClick }) => {
  return (
    <div className="w-full bg-gradient-to-r from-teal-50 via-emerald-50 to-teal-50 text-slate-800 text-xs sm:text-sm font-semibold py-2.5 px-4 border-b border-teal-200/80 shadow-2xs relative z-30">
      <div className="max-w-7xl mx-auto flex items-center justify-center gap-2.5 text-center flex-wrap">
        <div className="flex items-center gap-2">
          <Timer className="w-4 h-4 text-teal-700 shrink-0" />
          <span className="tracking-wide uppercase text-slate-800 font-bold">
            Oferta disponível por tempo limitado
          </span>
        </div>

        {onCtaClick && (
          <button
            onClick={() => onCtaClick()}
            className="hidden sm:inline-flex items-center gap-1 text-teal-700 hover:text-teal-900 font-bold ml-2 underline underline-offset-4 decoration-teal-500 hover:decoration-teal-800 transition-colors cursor-pointer text-xs"
          >
            Garantir com Desconto
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        )}
      </div>
    </div>
  );
};
