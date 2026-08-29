import React, { useState, useEffect } from 'react';
import { BookOpen, Sparkles, Menu, X, ArrowRight, ShieldCheck } from 'lucide-react';

interface NavbarProps {
  onCtaClick: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onCtaClick }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-200 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-200/80 py-3'
          : 'bg-[#FAFBFD]/90 backdrop-blur-sm py-4 border-b border-slate-100'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <a 
          href="#" 
          className="flex items-center space-x-2.5 group cursor-pointer"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
        >
          <div className="w-10 h-10 rounded-xl bg-teal-600 flex items-center justify-center text-white shadow-md shadow-teal-700/20 group-hover:scale-105 transition-transform">
            <span className="font-extrabold text-sm tracking-wider text-white">FV</span>
          </div>
          <div>
            <div className="flex items-center gap-1.5">
              <span className="font-extrabold text-base sm:text-lg tracking-tight text-slate-900 leading-none">
                FONO <span className="text-teal-600">VISUAL</span>
              </span>
            </div>
            <span className="text-[10px] sm:text-[11px] font-medium tracking-wide text-slate-500 uppercase block leading-tight">
              Atlas Visual de Fonoaudiologia
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <div className="hidden lg:flex items-center space-x-7 text-sm font-medium text-slate-600">
          <button
            onClick={() => scrollToSection('beneficios')}
            className="hover:text-teal-600 transition-colors"
          >
            Por Que Escolher
          </button>
          <button
            onClick={() => scrollToSection('bonus')}
            className="hover:text-teal-600 transition-colors"
          >
            Bônus
          </button>
          <button
            onClick={() => scrollToSection('veja-por-dentro')}
            className="hover:text-teal-600 transition-colors"
          >
            Veja por Dentro
          </button>
          <button
            onClick={() => scrollToSection('garantia')}
            className="hover:text-teal-600 transition-colors"
          >
            Garantia
          </button>
          <button
            onClick={() => scrollToSection('faq')}
            className="hover:text-teal-600 transition-colors"
          >
            Dúvidas
          </button>
        </div>

        {/* CTA Button Desktop */}
        <div className="hidden sm:flex items-center space-x-3">
          <button
            onClick={onCtaClick}
            className="px-5 py-2.5 bg-[#0B2533] hover:bg-teal-700 text-white text-xs sm:text-sm font-semibold rounded-xl transition-all shadow-sm hover:shadow-md flex items-center gap-2 group cursor-pointer"
          >
            <span>QUERO ACESSAR O FONO VISUAL</span>
            <ArrowRight className="w-3.5 h-3.5 text-teal-400 group-hover:translate-x-0.5 transition-transform" />
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden flex items-center">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-xl text-slate-600 hover:text-slate-900 hover:bg-slate-100"
            aria-label="Abrir menu de navegação"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden px-4 pt-3 pb-6 bg-white border-b border-slate-200 shadow-xl space-y-3 animate-in slide-in-from-top-2 duration-150">
          <div className="flex flex-col space-y-2 text-sm font-medium text-slate-700">
            <button
              onClick={() => scrollToSection('beneficios')}
              className="text-left px-3 py-2 rounded-lg hover:bg-slate-50 text-slate-800"
            >
              Por Que Escolher
            </button>
            <button
              onClick={() => scrollToSection('bonus')}
              className="text-left px-3 py-2 rounded-lg hover:bg-slate-50 text-slate-800"
            >
              3 Bônus Gratuitos
            </button>
            <button
              onClick={() => scrollToSection('veja-por-dentro')}
              className="text-left px-3 py-2 rounded-lg hover:bg-slate-50 text-slate-800"
            >
              Veja por Dentro (Galeria)
            </button>
            <button
              onClick={() => scrollToSection('garantia')}
              className="text-left px-3 py-2 rounded-lg hover:bg-slate-50 text-slate-800"
            >
              Garantia de 7 Dias
            </button>
            <button
              onClick={() => scrollToSection('faq')}
              className="text-left px-3 py-2 rounded-lg hover:bg-slate-50 text-slate-800"
            >
              Perguntas Frequentes
            </button>
          </div>
          <div className="pt-2 border-t border-slate-100">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onCtaClick();
              }}
              className="w-full py-3 bg-[#0B2533] text-white text-sm font-bold rounded-xl shadow-md flex items-center justify-center gap-2"
            >
              <span>QUERO ACESSAR O FONO VISUAL</span>
              <ArrowRight className="w-4 h-4 text-teal-400" />
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};
