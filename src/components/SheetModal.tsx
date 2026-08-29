import React from 'react';
import { MaterialSheet } from '../types';
import { AnatomyMockupGraphic } from './AnatomyMockupGraphic';
import { X, CheckCircle2, Download, ZoomIn, Eye, Sparkles, BookOpen, Layers, ShieldCheck } from 'lucide-react';

interface SheetModalProps {
  sheet: MaterialSheet | null;
  onClose: () => void;
  onCtaClick: () => void;
}

export const SheetModal: React.FC<SheetModalProps> = ({ sheet, onClose, onCtaClick }) => {
  if (!sheet) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/80 backdrop-blur-sm transition-opacity animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-4xl max-h-[90vh] bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-100 bg-[#FAFBFD]">
          <div className="flex items-center space-x-3">
            <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-semibold bg-teal-50 text-teal-700 border border-teal-200">
              {sheet.badge}
            </span>
            <span className="text-xs font-medium text-slate-500 uppercase tracking-wider">
              {sheet.category}
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
            title="Fechar visualização"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="flex-1 overflow-y-auto p-6 grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Left / Top: High Fidelity Visual Mockup */}
          <div className="lg:col-span-7 flex flex-col items-center justify-center bg-slate-950 p-4 rounded-xl shadow-inner border border-slate-800 relative group">
            <div className="w-full">
              <AnatomyMockupGraphic sheetId={sheet.id} showLabels={true} className="w-full" />
            </div>
            <div className="mt-3 flex items-center justify-between w-full text-[11px] text-slate-400 px-2">
              <span className="flex items-center gap-1 text-teal-400">
                <ZoomIn className="w-3.5 h-3.5" />
                Resolução Vetorial de Alta Densidade
              </span>
              <span>Visualização Oficial Fono Visual</span>
            </div>
          </div>

          {/* Right: Technical breakdown & features */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-5">
            <div>
              <h3 className="text-xl font-bold text-slate-900 leading-snug">
                {sheet.title}
              </h3>
              <p className="text-sm text-slate-600 mt-2 leading-relaxed">
                {sheet.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-1.5 mt-3">
                {sheet.tags.map((tag, idx) => (
                  <span key={idx} className="px-2 py-0.5 text-xs bg-slate-100 text-slate-600 rounded-md font-medium">
                    #{tag}
                  </span>
                ))}
              </div>

              {/* Structures List */}
              <div className="mt-5 pt-4 border-t border-slate-100">
                <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-2.5 flex items-center gap-1.5 text-teal-700">
                  <Layers className="w-4 h-4" />
                  Estruturas Mapeadas no Material:
                </h4>
                <ul className="space-y-1.5 text-xs text-slate-700">
                  {sheet.details.structures.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-teal-600 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Clinical Relevance */}
              <div className="mt-4 p-3 bg-teal-50/60 rounded-xl border border-teal-100">
                <span className="text-[11px] font-bold text-teal-900 uppercase tracking-wider block mb-1">
                  💡 Aplicação para Estudo & Consulta:
                </span>
                <p className="text-xs text-teal-800 leading-relaxed">
                  {sheet.details.clinicalRelevance}
                </p>
              </div>
            </div>

            {/* CTA inside modal */}
            <div className="pt-4 border-t border-slate-100 space-y-2">
              <button
                onClick={() => {
                  onClose();
                  onCtaClick();
                }}
                className="w-full py-3 px-4 bg-teal-600 hover:bg-teal-700 text-white font-semibold text-sm rounded-xl shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2"
              >
                <span>QUERO ACESSAR O FONO VISUAL</span>
              </button>
              <p className="text-center text-[11px] text-slate-400">
                Acesso imediato a todas as 100+ pranchas e resumos completos
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
