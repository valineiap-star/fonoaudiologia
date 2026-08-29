import React, { useState } from 'react';
import { MODULES_DATA } from '../data/materialsData';
import { AnatomyMockupGraphic } from './AnatomyMockupGraphic';
import { 
  Activity, Baby, Mic, Smile, Volume2, FastForward, 
  Headphones, Utensils, Brain, BookOpen, CheckCircle2, 
  ChevronRight, Sparkles, Layers, Eye
} from 'lucide-react';

interface ModulesSectionProps {
  onPreviewSheet: (sheetId: string) => void;
  onCtaClick: () => void;
}

export const ModulesSection: React.FC<ModulesSectionProps> = ({ onPreviewSheet, onCtaClick }) => {
  const [selectedModuleId, setSelectedModuleId] = useState<string>('mod-01');

  const getModuleIcon = (iconName: string) => {
    const props = { className: 'w-5 h-5 text-teal-600' };
    switch (iconName) {
      case 'Activity': return <Activity {...props} />;
      case 'Baby': return <Baby {...props} />;
      case 'Mic': return <Mic {...props} />;
      case 'Smile': return <Smile {...props} />;
      case 'Volume2': return <Volume2 {...props} />;
      case 'FastForward': return <FastForward {...props} />;
      case 'Headphones': return <Headphones {...props} />;
      case 'Utensils': return <Utensils {...props} />;
      case 'Brain': return <Brain {...props} />;
      case 'BookOpen': return <BookOpen {...props} />;
      default: return <Layers {...props} />;
    }
  };

  const activeModule = MODULES_DATA.find((m) => m.id === selectedModuleId) || MODULES_DATA[0];

  return (
    <section id="modulos" className="py-20 bg-white border-b border-slate-200/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-50 border border-teal-200 text-teal-800 text-xs font-semibold uppercase tracking-wider">
            Estrutura Completa da Biblioteca
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
            UMA BIBLIOTECA VISUAL DE FONOAUDIOLOGIA NA PALMA DA SUA MÃO
          </h2>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Em vez de procurar informações espalhadas em dezenas de anotações, tenha conteúdos essenciais organizados de forma visual e fácil de consultar.
          </p>
        </div>

        {/* Highlight Banner: +100 MATERIAIS VISUAIS - Light & Clean */}
        <div className="mt-10 mb-14 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-teal-50 via-sky-50 to-emerald-50 border border-teal-200 text-slate-900 shadow-md relative overflow-hidden">
          <div className="absolute right-0 top-0 bottom-0 w-1/3 bg-teal-200/25 rounded-full blur-2xl pointer-events-none" />
          
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-teal-100 text-teal-800 text-xs font-bold uppercase tracking-wider border border-teal-200">
                <Sparkles className="w-3.5 h-3.5 text-teal-600" />
                Acervo Completo
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900">
                +100 MATERIAIS VISUAIS
              </h3>
              <p className="text-sm text-slate-600 max-w-xl">
                Mapas • Anatomias • Tabelas • Comparativos • Fluxogramas • Resumos
              </p>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-3">
              <div className="bg-white/80 backdrop-blur-xs px-4 py-2.5 rounded-xl border border-teal-200 text-center shadow-2xs">
                <span className="text-xl font-bold text-teal-800 block">10</span>
                <span className="text-[11px] text-slate-600 font-medium">Módulos Especializados</span>
              </div>
              <div className="bg-white/80 backdrop-blur-xs px-4 py-2.5 rounded-xl border border-teal-200 text-center shadow-2xs">
                <span className="text-xl font-bold text-teal-800 block">100%</span>
                <span className="text-[11px] text-slate-600 font-medium">Digital & Imprimível</span>
              </div>
            </div>
          </div>
        </div>

        {/* Modules Interactive Explorer & Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left: Modules List (1 to 10) */}
          <div className="lg:col-span-7 space-y-3">
            <div className="flex items-center justify-between pb-2 mb-1 border-b border-slate-100">
              <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                Clique para ver os tópicos de cada módulo:
              </span>
              <span className="text-xs font-semibold text-teal-700">
                10 Módulos Inclusos
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {MODULES_DATA.map((module) => {
                const isSelected = module.id === selectedModuleId;
                return (
                  <div
                    key={module.id}
                    onClick={() => setSelectedModuleId(module.id)}
                    className={`p-4 rounded-xl border text-left transition-all cursor-pointer relative ${
                      isSelected
                        ? 'border-teal-600 bg-teal-50/40 shadow-sm ring-1 ring-teal-500'
                        : 'border-slate-200/80 bg-white hover:border-teal-200 hover:bg-slate-50/70'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                          isSelected ? 'bg-teal-600 text-white' : 'bg-slate-100 text-slate-700'
                        }`}>
                          {getModuleIcon(module.iconName)}
                        </div>
                        <span className="text-[11px] font-bold text-teal-700 uppercase tracking-wider">
                          {module.number}
                        </span>
                      </div>
                      {module.id === 'mod-01' && (
                        <span className="text-[9px] font-bold bg-teal-100 text-teal-800 px-1.5 py-0.5 rounded">
                          Principal
                        </span>
                      )}
                    </div>

                    <h4 className="text-sm font-bold text-slate-900 leading-snug">
                      {module.title}
                    </h4>

                    <p className="text-xs text-slate-500 mt-1 line-clamp-2 leading-relaxed">
                      {module.subtitle}
                    </p>

                    <div className="mt-3 flex items-center justify-between text-[11px] font-medium text-teal-700 pt-2 border-t border-slate-100">
                      <span>{module.topics.length} tópicos mapeados</span>
                      <ChevronRight className={`w-3.5 h-3.5 transition-transform ${isSelected ? 'translate-x-1' : ''}`} />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right: Selected Module Deep Dive Panel with Mockup & Topics List */}
          <div className="lg:col-span-5 sticky top-24 space-y-4">
            <div className="bg-[#FAFBFD] border border-slate-200 rounded-2xl p-6 shadow-md relative overflow-hidden">
              <div className="flex items-center justify-between pb-3 border-b border-slate-200">
                <div>
                  <span className="text-xs font-bold text-teal-700 uppercase tracking-wider">
                    {activeModule.number}
                  </span>
                  <h3 className="text-lg font-bold text-slate-900 mt-0.5">
                    {activeModule.title}
                  </h3>
                </div>
                <div className="w-9 h-9 rounded-xl bg-teal-100/70 text-teal-700 flex items-center justify-center">
                  {getModuleIcon(activeModule.iconName)}
                </div>
              </div>

              {/* Module Topics Detailed Checklist */}
              <div className="py-4 space-y-2">
                <h5 className="text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                  Conteúdos e Esquemas Inclusos neste Módulo:
                </h5>
                <ul className="space-y-2 text-xs text-slate-700">
                  {activeModule.topics.map((topic, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                      <span className="leading-snug font-medium">{topic}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Visual Preview Sample Card */}
              {activeModule.sampleSheetId && (
                <div className="mt-4 pt-4 border-t border-slate-200">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">
                      Amostra Visual do Módulo:
                    </span>
                    <button
                      onClick={() => onPreviewSheet(activeModule.sampleSheetId!)}
                      className="text-[11px] font-semibold text-teal-600 hover:text-teal-700 flex items-center gap-1 cursor-pointer"
                    >
                      <Eye className="w-3.5 h-3.5" />
                      Ampliar Prancha
                    </button>
                  </div>
                  <div 
                    onClick={() => onPreviewSheet(activeModule.sampleSheetId!)}
                    className="cursor-pointer group relative rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
                  >
                    <AnatomyMockupGraphic sheetId={activeModule.sampleSheetId} showLabels={false} className="max-h-40" />
                    <div className="absolute inset-0 bg-teal-950/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white text-xs font-semibold gap-1.5 backdrop-blur-[1px]">
                      <Eye className="w-4 h-4" />
                      Clique para Visualizar em Alta Resolução
                    </div>
                  </div>
                </div>
              )}

              {/* CTA inside Module Box */}
              <div className="mt-6 pt-4 border-t border-slate-200">
                <button
                  onClick={onCtaClick}
                  className="w-full py-3 bg-teal-600 hover:bg-teal-700 active:bg-teal-800 text-white font-bold text-xs sm:text-sm rounded-xl transition-all shadow-sm flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>QUERO ACESSAR O FONO VISUAL</span>
                </button>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
