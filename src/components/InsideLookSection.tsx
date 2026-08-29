import React, { useState } from 'react';
import { MATERIAL_SHEETS } from '../data/materialsData';
import { AnatomyMockupGraphic } from './AnatomyMockupGraphic';
import { MaterialSheet } from '../types';
import { Eye, ZoomIn, Sparkles, Layers, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';

interface InsideLookSectionProps {
  onSelectSheet: (sheet: MaterialSheet) => void;
  onCtaClick: () => void;
}

export const InsideLookSection: React.FC<InsideLookSectionProps> = ({ onSelectSheet, onCtaClick }) => {
  const [activeCategory, setActiveCategory] = useState<string>('todos');

  const categories = [
    { id: 'todos', label: 'Todos os Materiais' },
    { id: 'Anatomia e Voz', label: 'Laringe & Voz' },
    { id: 'Audiologia', label: 'Audiologia' },
    { id: 'Motricidade Orofacial', label: 'Motricidade' },
    { id: 'Neurofuncional', label: 'Neurofuncional' },
  ];

  const filteredSheets = activeCategory === 'todos'
    ? MATERIAL_SHEETS
    : MATERIAL_SHEETS.filter((s) => s.category.includes(activeCategory) || activeCategory.includes(s.category));

  return (
    <section id="veja-por-dentro" className="py-20 bg-white border-b border-slate-200/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-50 border border-teal-200 text-teal-800 text-xs font-semibold uppercase tracking-wider">
            Galeria Interativa de Materiais
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
            VEJA ALGUNS DOS MATERIAIS QUE VOCÊ VAI RECEBER
          </h2>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Navegue pelas pranchas e esquemas abaixo. Clique em qualquer imagem para abrir a visualização ampliada com detalhes anatômicos e estruturas.
          </p>
        </div>

        {/* Category Filters */}
        <div className="mt-8 flex items-center justify-center gap-2 overflow-x-auto pb-2 no-scrollbar">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all shrink-0 cursor-pointer ${
                activeCategory === cat.id
                  ? 'bg-[#0B2533] text-white shadow-sm'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200/80'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Desktop: 3 images per row Grid | Mobile: Horizontal Scrollable Carousel */}
        <div className="mt-10">
          {/* Mobile Horizontal Carousel */}
          <div className="md:hidden flex gap-4 overflow-x-auto pb-6 pt-2 snap-x snap-mandatory no-scrollbar -mx-4 px-4">
            {filteredSheets.map((sheet) => (
              <div
                key={sheet.id}
                onClick={() => onSelectSheet(sheet)}
                className="w-[85vw] max-w-xs shrink-0 snap-center bg-[#0B2533] rounded-2xl overflow-hidden shadow-lg border border-teal-500/30 group cursor-pointer flex flex-col justify-between"
              >
                <div className="p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] font-bold uppercase bg-teal-500/20 text-teal-300 px-2 py-0.5 rounded border border-teal-500/30">
                      {sheet.badge}
                    </span>
                    <span className="text-[10px] text-teal-400 font-medium">Toque para Abrir</span>
                  </div>
                  <h4 className="text-sm font-bold text-white mb-2 line-clamp-1">
                    {sheet.title}
                  </h4>
                  <div className="aspect-[4/3] rounded-xl overflow-hidden bg-slate-950 flex items-center justify-center border border-slate-800">
                    {sheet.imageUrl ? (
                      <img
                        src={sheet.imageUrl}
                        alt={sheet.title}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                      />
                    ) : (
                      <AnatomyMockupGraphic sheetId={sheet.id} showLabels={false} className="shadow-none border-none p-2" />
                    )}
                  </div>
                </div>
                <div className="bg-slate-950/60 p-3 flex items-center justify-between text-xs text-slate-300 border-t border-slate-800">
                  <span className="text-[11px] text-slate-400">{sheet.category}</span>
                  <span className="text-teal-400 font-semibold flex items-center gap-1">
                    <ZoomIn className="w-3.5 h-3.5" />
                    Ampliar
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Desktop 3 Columns Grid */}
          <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredSheets.map((sheet) => (
              <div
                key={sheet.id}
                onClick={() => onSelectSheet(sheet)}
                className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-xl hover:border-teal-400 transition-all group cursor-pointer flex flex-col justify-between"
              >
                {/* Visual Sheet Preview Box */}
                <div className="relative bg-slate-950 aspect-[16/10] overflow-hidden flex items-center justify-center">
                  {sheet.imageUrl ? (
                    <img
                      src={sheet.imageUrl}
                      alt={sheet.title}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    />
                  ) : (
                    <AnatomyMockupGraphic sheetId={sheet.id} showLabels={false} className="border-none shadow-none" />
                  )}
                  
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-teal-950/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-xs">
                    <span className="px-4 py-2 bg-teal-600 text-white font-bold text-xs rounded-xl shadow-lg flex items-center gap-2 transform translate-y-2 group-hover:translate-y-0 transition-transform">
                      <ZoomIn className="w-4 h-4" />
                      Visualizar Prancha em Alta Resolução
                    </span>
                  </div>
                </div>

                {/* Sheet Metadata */}
                <div className="p-5 flex-1 flex flex-col justify-between space-y-3">
                  <div>
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="text-[11px] font-bold text-teal-700 uppercase tracking-wider">
                        {sheet.badge}
                      </span>
                      <span className="text-xs text-slate-500 font-medium">
                        {sheet.category}
                      </span>
                    </div>

                    <h3 className="text-base font-bold text-slate-900 leading-snug group-hover:text-teal-700 transition-colors">
                      {sheet.title}
                    </h3>

                    <p className="text-xs text-slate-600 mt-1.5 leading-relaxed line-clamp-2">
                      {sheet.description}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                    <span className="flex items-center gap-1 text-teal-600 font-semibold">
                      <Eye className="w-3.5 h-3.5" />
                      Clique para detalhes
                    </span>
                    <span className="font-mono text-[11px] text-slate-400">PDF Vetorial A4</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Section Bottom Subtext & CTA */}
        <div className="mt-14 text-center space-y-4 max-w-xl mx-auto">
          <p className="text-base font-semibold text-slate-800">
            E isso é apenas uma pequena parte de tudo o que você receberá.
          </p>

          <p className="text-xs text-slate-500">
            A biblioteca conta com mais de 100 pranchas, mapas mentais, esquemas anatômicos, tabelas comparativas e resumos de consulta rápida.
          </p>

          <div className="pt-2">
            <button
              onClick={onCtaClick}
              className="px-8 py-3.5 bg-[#0B2533] hover:bg-teal-700 text-white font-bold text-sm rounded-xl shadow-md transition-all cursor-pointer inline-flex items-center gap-2"
            >
              <span>QUERO ACESSAR O FONO VISUAL</span>
              <ArrowRight className="w-4 h-4 text-teal-400" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
