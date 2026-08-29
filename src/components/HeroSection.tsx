import React, { useState } from 'react';
import { Check, Sparkles, ArrowDown, Eye, Layers, ShieldCheck, Zap, Smartphone, BookOpen } from 'lucide-react';
import { AnatomyMockupGraphic } from './AnatomyMockupGraphic';
import { MaterialSheet } from '../types';

interface HeroSectionProps {
  onCtaClick: () => void;
  onPreviewSheet: (sheetId: string) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onCtaClick, onPreviewSheet }) => {
  const [activeTab, setActiveTab] = useState<'laringe' | 'pregas-vocais' | 'audicao' | 'cerebro' | 'orofacial'>('laringe');

  const highlights = [
    'Conteúdo visual e organizado',
    'Diversas áreas da Fonoaudiologia',
    'Acesso digital',
    'Consulte pelo celular, tablet ou computador'
  ];

  return (
    <section className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden bg-gradient-to-b from-[#FAFBFD] via-[#F3F7FA] to-[#FAFBFD] border-b border-slate-200/60">
      {/* Subtle background glow */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-teal-100/40 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-40 right-10 w-96 h-96 bg-purple-100/30 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headlines, Value Props, Highlights and Primary CTA */}
          <div className="lg:col-span-6 space-y-6 text-left">
            {/* Category tag */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-50 border border-teal-200/80 text-teal-800 text-xs font-semibold tracking-wide shadow-xs">
              <span className="w-2 h-2 rounded-full bg-teal-500 animate-pulse"></span>
              Biblioteca Visual em PDF para Estudo & Consulta
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.15]">
              DOMINE OS PRINCIPAIS CONTEÚDOS DA FONOAUDIOLOGIA{' '}
              <span className="text-teal-600 relative inline-block">
                DE FORMA VISUAL
                <svg className="absolute -bottom-1.5 left-0 w-full h-2 text-teal-300 -z-10" viewBox="0 0 100 20" preserveAspectRatio="none">
                  <path d="M0,10 Q50,0 100,10" stroke="currentColor" strokeWidth="8" fill="none" />
                </svg>
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
              Tenha em mãos mapas, esquemas anatômicos, comparativos e resumos visuais para estudar, revisar e consultar os principais conteúdos da Fonoaudiologia com muito mais clareza.
            </p>

            {/* 4 Feature Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2">
              {highlights.map((item, idx) => (
                <div key={idx} className="flex items-start space-x-2.5">
                  <div className="mt-0.5 w-5 h-5 rounded-full bg-teal-100 text-teal-700 flex items-center justify-center shrink-0 border border-teal-200">
                    <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                  </div>
                  <span className="text-sm font-medium text-slate-700 leading-snug">
                    {item}
                  </span>
                </div>
              ))}
            </div>

            {/* Primary CTA Area */}
            <div className="pt-4 space-y-2.5">
              <button
                onClick={onCtaClick}
                className="w-full sm:w-auto px-8 py-4 bg-teal-600 hover:bg-teal-700 active:bg-teal-800 text-white font-bold text-base rounded-xl shadow-lg shadow-teal-700/20 hover:shadow-xl hover:shadow-teal-700/30 transition-all transform hover:-translate-y-0.5 flex items-center justify-center gap-3 cursor-pointer group"
              >
                <span>QUERO ACESSAR O FONO VISUAL</span>
                <span className="px-2 py-0.5 text-xs bg-teal-800/60 rounded-md font-semibold text-teal-200 group-hover:bg-teal-900 transition-colors">
                  PDF 100% Digital
                </span>
              </button>
              
              <p className="text-xs text-slate-500 font-medium flex items-center gap-1.5 pt-1">
                <Zap className="w-3.5 h-3.5 text-teal-600" />
                Acesso imediato após a confirmação do pagamento.
              </p>
            </div>
          </div>

          {/* Right Column: Premium Multi-Sheet Mockup Showcase */}
          <div className="lg:col-span-6 relative">
            {/* Sheet Selector Tabs */}
            <div className="flex items-center gap-1.5 overflow-x-auto pb-2 mb-3 no-scrollbar">
              <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider mr-1 shrink-0">
                Amostras:
              </span>
              {[
                { id: 'laringe', label: 'Laringe' },
                { id: 'pregas-vocais', label: 'Pregas Vocais' },
                { id: 'audicao', label: 'Sistema Auditivo' },
                { id: 'cerebro', label: 'Áreas Cerebrais' },
                { id: 'orofacial', label: 'Musculatura' },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as any)}
                  className={`px-3 py-1 text-xs rounded-lg font-medium transition-all shrink-0 cursor-pointer ${
                    activeTab === tab.id
                      ? 'bg-[#0B2533] text-white shadow-sm'
                      : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Multi-layered Realistic Stack Mockup */}
            <div className="relative mx-auto max-w-md sm:max-w-lg lg:max-w-none">
              {/* Back Layer Sheet 2 */}
              <div 
                className="absolute top-4 -left-2 right-6 h-full bg-slate-900 rounded-2xl border border-slate-700 opacity-40 transform -rotate-3 scale-95 shadow-md -z-20 hidden sm:block" 
              />
              {/* Back Layer Sheet 1 */}
              <div 
                className="absolute top-2 -right-2 left-6 h-full bg-[#0e3344] rounded-2xl border border-teal-500/30 opacity-70 transform rotate-2 scale-98 shadow-lg -z-10 hidden sm:block" 
              />

              {/* Main Active Sheet Mockup Card */}
              <div className="relative group cursor-pointer" onClick={() => onPreviewSheet(activeTab)}>
                <AnatomyMockupGraphic sheetId={activeTab} showLabels={true} />
                
                {/* Floating Preview Badge */}
                <div className="absolute top-4 right-4 bg-slate-900/90 backdrop-blur-md text-white text-[11px] font-semibold px-3 py-1.5 rounded-lg border border-teal-500/40 shadow-lg flex items-center gap-1.5 group-hover:bg-teal-600 transition-colors">
                  <Eye className="w-3.5 h-3.5 text-teal-300" />
                  <span>Clique para Ampliar</span>
                </div>

                {/* Overlaid Badge Bottom */}
                <div className="absolute -bottom-3 left-4 sm:left-6 bg-white border border-slate-200 rounded-xl px-3.5 py-2 shadow-lg flex items-center gap-2.5">
                  <div className="w-7 h-7 rounded-lg bg-teal-50 text-teal-700 flex items-center justify-center font-bold text-xs">
                    +100
                  </div>
                  <div className="text-left leading-tight">
                    <span className="text-xs font-bold text-slate-900 block">Biblioteca Completa</span>
                    <span className="text-[10px] text-slate-500">Mapas, Tabelas e Esquemas em PDF</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Feature Pill under Mockup */}
            <div className="mt-7 flex flex-wrap items-center justify-center gap-3 text-xs text-slate-500">
              <span className="flex items-center gap-1">
                <Layers className="w-3.5 h-3.5 text-teal-600" />
                10 Módulos Estruturados
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <BookOpen className="w-3.5 h-3.5 text-teal-600" />
                Pranchas de Alta Definição
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <Smartphone className="w-3.5 h-3.5 text-teal-600" />
                Compatível com Qualquer Dispositivo
              </span>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
