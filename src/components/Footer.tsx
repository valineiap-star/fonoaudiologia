import React from 'react';
import { BookOpen, ShieldCheck, Heart } from 'lucide-react';

interface FooterProps {
  onOpenLegal: (type: 'terms' | 'privacy' | 'contact') => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenLegal }) => {
  return (
    <footer className="bg-slate-100 text-slate-600 py-12 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          {/* Brand */}
          <div className="space-y-1.5">
            <div className="flex items-center justify-center md:justify-start space-x-2">
              <div className="w-8 h-8 rounded-lg bg-teal-600 flex items-center justify-center text-white font-bold text-xs shadow-xs">
                FV
              </div>
              <span className="font-extrabold text-lg tracking-tight text-slate-900">
                FONO <span className="text-teal-600">VISUAL</span>
              </span>
            </div>
            <p className="text-xs text-slate-500 max-w-sm">
              Material educacional destinado ao estudo e à consulta rápida.
            </p>
          </div>

          {/* Legal and Support Links */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-slate-600 font-semibold">
            <button
              onClick={() => onOpenLegal('terms')}
              className="hover:text-teal-700 transition-colors cursor-pointer"
            >
              Termos de Uso
            </button>
            <span>•</span>
            <button
              onClick={() => onOpenLegal('privacy')}
              className="hover:text-teal-700 transition-colors cursor-pointer"
            >
              Política de Privacidade
            </button>
            <span>•</span>
            <button
              onClick={() => onOpenLegal('contact')}
              className="hover:text-teal-700 transition-colors cursor-pointer"
            >
              Contato
            </button>
          </div>
        </div>

        {/* Bottom Disclaimer and Copyright */}
        <div className="pt-6 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500 text-center sm:text-left">
          <p>
            © 2026 Fono Visual. Todos os direitos reservados.
          </p>
          <p className="max-w-md text-slate-500">
            Aviso: Este material é de caráter educacional e complementar para estudo e revisão. Não substitui avaliações clínicas individualizadas ou literatura científica formal.
          </p>
        </div>

      </div>
    </footer>
  );
};
