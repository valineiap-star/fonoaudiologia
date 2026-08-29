import React, { useState } from 'react';
import { TopBanner } from './components/TopBanner';
import { HeroSection } from './components/HeroSection';
import { MaterialsShowcaseSection } from './components/MaterialsShowcaseSection';
import { WhyChooseSection } from './components/WhyChooseSection';
import { BonusSection } from './components/BonusSection';
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

export default function App() {
  const [selectedSheet, setSelectedSheet] = useState<MaterialSheet | null>(null);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [selectedCheckoutPlan, setSelectedCheckoutPlan] = useState<'essencial' | 'completo'>('completo');
  const [legalModalType, setLegalModalType] = useState<'terms' | 'privacy' | 'contact' | null>(null);

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

  const handlePreviewSheetById = (sheetId: string) => {
    const found = MATERIAL_SHEETS.find((s) => s.id === sheetId) || MATERIAL_SHEETS[0];
    setSelectedSheet(found);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAFBFD] text-slate-850 selection:bg-teal-500 selection:text-white relative">
      
      {/* Top Announcement Bar */}
      <TopBanner onCtaClick={scrollToOffer} />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* SEÇÃO 01 — HERO */}
        <HeroSection
          onCtaClick={scrollToOffer}
          onPreviewSheet={handlePreviewSheetById}
        />

        {/* SEÇÃO DE MATERIAIS POR DENTRO COM DOIS CARROSSEIS INFINITOS */}
        <MaterialsShowcaseSection onCtaClick={scrollToOffer} />

        {/* SEÇÃO 03 — POR QUE ESCOLHER O FONO VISUAL? (BENEFÍCIOS + COMPARAÇÃO) */}
        <WhyChooseSection onCtaClick={scrollToOffer} />

        {/* SEÇÃO 04 — BÔNUS EXCLUSIVOS */}
        <BonusSection
          onCtaClick={scrollToOffer}
          onPreviewSheet={handlePreviewSheetById}
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
