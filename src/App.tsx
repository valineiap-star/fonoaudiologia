import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { InfiniteMarquee } from './components/InfiniteMarquee';
import { ModulesSection } from './components/ModulesSection';
import { WhyChooseSection } from './components/WhyChooseSection';
import { BonusSection } from './components/BonusSection';
import { InsideLookSection } from './components/InsideLookSection';
import { OfferSection } from './components/OfferSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { GuaranteeSection } from './components/GuaranteeSection';
import { FaqSection } from './components/FaqSection';
import { Footer } from './components/Footer';
import { SheetModal } from './components/SheetModal';
import { CheckoutModal } from './components/CheckoutModal';
import { LegalModal } from './components/LegalModals';
import { MATERIAL_SHEETS } from './data/materialsData';
import { MaterialSheet } from './types';
import { ArrowUp, ArrowRight, ShieldCheck, Sparkles } from 'lucide-react';

export default function App() {
  const [selectedSheet, setSelectedSheet] = useState<MaterialSheet | null>(null);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [selectedCheckoutPlan, setSelectedCheckoutPlan] = useState<'essencial' | 'completo'>('completo');
  const [legalModalType, setLegalModalType] = useState<'terms' | 'privacy' | 'contact' | null>(null);
  const [showFloatingCta, setShowFloatingCta] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show floating CTA after scrolling past hero section (400px)
      setShowFloatingCta(window.scrollY > 500);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToOffer = () => {
    const offerElement = document.getElementById('oferta');
    if (offerElement) {
      offerElement.scrollIntoView({ behavior: 'smooth' });
    } else {
      setSelectedCheckoutPlan('completo');
      setIsCheckoutOpen(true);
    }
  };

  const handleOpenCheckoutWithPlan = (planId?: 'essencial' | 'completo') => {
    setSelectedCheckoutPlan(planId || 'completo');
    setIsCheckoutOpen(true);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handlePreviewSheetById = (sheetId: string) => {
    const found = MATERIAL_SHEETS.find((s) => s.id === sheetId) || MATERIAL_SHEETS[0];
    setSelectedSheet(found);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAFBFD] text-slate-850 selection:bg-teal-500 selection:text-white relative">
      
      {/* Navigation */}
      <Navbar onCtaClick={scrollToOffer} />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* SEÇÃO 01 — HERO */}
        <HeroSection
          onCtaClick={scrollToOffer}
          onPreviewSheet={handlePreviewSheetById}
        />

        {/* CARROSSEL INFINITO DE TÓPICOS E MATERIAIS */}
        <InfiniteMarquee onCtaClick={scrollToOffer} />

        {/* SEÇÃO 02 — O QUE VOCÊ VAI RECEBER (MÓDULOS 01 A 10) */}
        <ModulesSection
          onPreviewSheet={handlePreviewSheetById}
          onCtaClick={scrollToOffer}
        />

        {/* SEÇÃO 03 — POR QUE ESCOLHER O FONO VISUAL? (BENEFÍCIOS + COMPARAÇÃO) */}
        <WhyChooseSection onCtaClick={scrollToOffer} />

        {/* SEÇÃO 04 — BÔNUS EXCLUSIVOS */}
        <BonusSection
          onCtaClick={scrollToOffer}
          onPreviewSheet={handlePreviewSheetById}
        />

        {/* SEÇÃO 06 — VEJA POR DENTRO (GALERIA INTERATIVA DE PRANCHAS) */}
        <InsideLookSection
          onSelectSheet={(sheet) => setSelectedSheet(sheet)}
          onCtaClick={scrollToOffer}
        />

        {/* SEÇÃO 05 — OFERTA DE ALTA CONVERSÃO */}
        <OfferSection
          onGuaranteeClick={() => {
            const el = document.getElementById('garantia');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }}
          onOpenCheckout={handleOpenCheckoutWithPlan}
        />

        {/* SEÇÃO 07 — DEPOIMENTOS (COM MARCAÇÃO CLARA DE EXEMPLO) */}
        <TestimonialsSection />

        {/* SEÇÃO 08 — GARANTIA INCONDICIONAL DE 7 DIAS */}
        <GuaranteeSection onCtaClick={scrollToOffer} />

        {/* SEÇÃO 09 — PERGUNTAS FREQUENTES (ACCORDION) */}
        <FaqSection onCtaClick={scrollToOffer} />
      </main>

      {/* SEÇÃO 10 — RODAPÉ */}
      <Footer onOpenLegal={(type) => setLegalModalType(type)} />

      {/* Floating Bottom Bar on Mobile/Desktop after scroll */}
      {showFloatingCta && (
        <div className="fixed bottom-4 left-4 right-4 sm:left-auto sm:right-6 z-30 flex items-center gap-2 animate-in slide-in-from-bottom-4 duration-300">
          <button
            onClick={scrollToTop}
            className="p-3 bg-white hover:bg-slate-100 text-slate-700 rounded-full shadow-lg border border-slate-200 transition-colors hidden sm:flex items-center justify-center cursor-pointer"
            title="Voltar ao topo"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
          <button
            onClick={scrollToOffer}
            className="w-full sm:w-auto px-5 py-3 bg-[#0B2533] hover:bg-teal-700 text-white font-bold text-xs sm:text-sm rounded-xl shadow-xl border border-teal-500/30 flex items-center justify-center gap-2 cursor-pointer group"
          >
            <span>QUERO ACESSAR O FONO VISUAL</span>
            <ArrowRight className="w-3.5 h-3.5 text-teal-300 group-hover:translate-x-0.5 transition-transform" />
          </button>
        </div>
      )}

      {/* High-Resolution Sheet Inspection Modal */}
      <SheetModal
        sheet={selectedSheet}
        onClose={() => setSelectedSheet(null)}
        onCtaClick={scrollToOffer}
      />

      {/* Interactive Checkout Modal */}
      <CheckoutModal
        isOpen={isCheckoutOpen}
        onClose={() => setIsCheckoutOpen(false)}
        initialPlanId={selectedCheckoutPlan}
      />

      {/* Terms, Privacy, Contact Modals */}
      <LegalModal
        type={legalModalType}
        onClose={() => setLegalModalType(null)}
      />

    </div>
  );
}
