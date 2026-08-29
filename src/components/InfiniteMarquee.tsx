import React, { useState } from 'react';
import { 
  Sparkles, ZoomIn, X, ChevronRight, CheckCircle2 
} from 'lucide-react';

interface InfiniteMarqueeProps {
  onCtaClick?: () => void;
}

export const InfiniteMarquee: React.FC<InfiniteMarqueeProps> = ({ onCtaClick }) => {
  const [selectedImage, setSelectedImage] = useState<{ url: string; title: string } | null>(null);

  const galleryImages = [
    {
      id: 'img-1',
      url: 'https://i.postimg.cc/HsGHxmRR/Chat-GPT-Image-27-de-ago-de-2026-18-26-16-(5).png',
      title: 'Anatomia da Laringe & Pregas Vocais',
      category: 'Voz & Laringe',
    },
    {
      id: 'img-2',
      url: 'https://i.postimg.cc/15pSVT1M/Chat-GPT-Image-27-de-ago-de-2026-18-26-16-(6).png',
      title: 'Esquema Anatômico da Audição',
      category: 'Audiologia',
    },
    {
      id: 'img-3',
      url: 'https://i.postimg.cc/9FG2wSHJ/Chat-GPT-Image-27-de-ago-de-2026-18-26-16-(7).png',
      title: 'Neuroanatomia & Linguagem',
      category: 'Neurofuncional',
    },
    {
      id: 'img-4',
      url: 'https://i.postimg.cc/GhkRTNnM/Chat-GPT-Image-27-de-ago-de-2026-18-26-16-(8).png',
      title: 'Fases da Deglutição & Disfagia',
      category: 'Deglutição',
    },
    {
      id: 'img-5',
      url: 'https://i.postimg.cc/kXr94CzZ/Chat-GPT-Image-27-de-ago-de-2026-18-35-19-(5).png',
      title: 'Músculos da Mímica & Mastigação',
      category: 'Motricidade Orofacial',
    },
    {
      id: 'img-6',
      url: 'https://i.postimg.cc/wTKHvzZr/Chat-GPT-Image-27-de-ago-de-2026-18-35-19-(6).png',
      title: 'Pares Cranianos da Fonoaudiologia',
      category: 'Neurologia Clínica',
    },
    {
      id: 'img-7',
      url: 'https://i.postimg.cc/7YvD64dW/Chat-GPT-Image-27-de-ago-de-2026-18-35-20-(10).png',
      title: 'Resumo Visual de Consulta Rápida',
      category: 'Fono de Bolso',
    },
    {
      id: 'img-8',
      url: 'https://i.postimg.cc/J4wmn8vP/Chat-GPT-Image-27-de-ago-de-2026-18-35-20-(9).png',
      title: 'Mapa Mental & Fluxograma Diagnóstico',
      category: 'Prática Clínica',
    },
  ];

  // Duplicate for seamless infinite loop
  const displayImages = [...galleryImages, ...galleryImages];

  return (
    <section className="bg-[#081B26] text-white py-6 border-y border-teal-500/20 overflow-hidden relative select-none">
      
      {/* Header bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-teal-400 animate-pulse" />
          <span className="text-xs font-bold uppercase tracking-wider text-teal-300 font-mono">
            PRÉVIA DOS MATERIAIS VISUAIS
          </span>
        </div>
        <span className="text-[11px] text-slate-400 hidden sm:inline-block">
          Passe o mouse ou toque para pausar e ampliar
        </span>
      </div>

      {/* Gradient Fades for Left and Right Edges */}
      <div className="absolute left-0 top-0 bottom-0 w-12 sm:w-24 bg-gradient-to-r from-[#081B26] to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-12 sm:w-24 bg-gradient-to-l from-[#081B26] to-transparent z-10 pointer-events-none" />

      {/* Scrolling Track */}
      <div className="flex w-max items-center animate-infinite-marquee hover:[animation-play-state:paused] py-2">
        {displayImages.map((item, idx) => (
          <div
            key={`${item.id}-${idx}`}
            onClick={() => setSelectedImage({ url: item.url, title: item.title })}
            className="mx-3 group relative cursor-pointer rounded-2xl overflow-hidden bg-slate-900 border border-teal-500/30 hover:border-teal-400 transition-all shadow-lg hover:shadow-teal-500/20 hover:scale-[1.03] duration-300 shrink-0 w-56 sm:w-64"
          >
            {/* Image Preview Box */}
            <div className="aspect-[4/3] bg-slate-950 overflow-hidden relative flex items-center justify-center">
              <img
                src={item.url}
                alt={item.title}
                referrerPolicy="no-referrer"
                loading="lazy"
                className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
              />

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-slate-950/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-xs">
                <span className="px-3 py-1.5 bg-teal-600/90 text-white font-bold text-xs rounded-xl shadow-md flex items-center gap-1.5 transform translate-y-2 group-hover:translate-y-0 transition-transform">
                  <ZoomIn className="w-3.5 h-3.5" />
                  Ampliar
                </span>
              </div>
            </div>

            {/* Caption */}
            <div className="p-3 bg-[#0B2533] border-t border-slate-800 flex items-center justify-between">
              <div className="truncate pr-2">
                <span className="text-[10px] uppercase font-bold text-teal-400 block tracking-wider font-mono">
                  {item.category}
                </span>
                <span className="text-xs font-semibold text-white truncate block">
                  {item.title}
                </span>
              </div>
              <div className="w-6 h-6 rounded-lg bg-teal-500/20 flex items-center justify-center text-teal-300 shrink-0">
                <ZoomIn className="w-3 h-3" />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Image Modal Lightbox */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-md animate-in fade-in duration-200"
          onClick={() => setSelectedImage(null)}
        >
          <div 
            className="relative max-w-4xl w-full bg-slate-900 rounded-3xl border border-teal-500/40 shadow-2xl overflow-hidden flex flex-col max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-4 bg-[#0B2533] border-b border-slate-800 flex items-center justify-between">
              <div>
                <span className="text-xs font-bold text-teal-400 uppercase tracking-wider font-mono">
                  Visualização de Material
                </span>
                <h3 className="text-sm sm:text-base font-bold text-white">
                  {selectedImage.title}
                </h3>
              </div>
              <button
                onClick={() => setSelectedImage(null)}
                className="p-2 rounded-xl bg-white/10 hover:bg-white/20 text-slate-300 hover:text-white transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-4 bg-slate-950 flex-1 overflow-auto flex items-center justify-center">
              <img
                src={selectedImage.url}
                alt={selectedImage.title}
                referrerPolicy="no-referrer"
                className="max-h-[70vh] w-auto max-w-full rounded-xl object-contain shadow-2xl border border-slate-800"
              />
            </div>

            <div className="p-4 bg-[#0B2533] border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-3">
              <p className="text-xs text-slate-300 text-center sm:text-left">
                Material completo em alta resolução disponível para download na biblioteca.
              </p>
              {onCtaClick && (
                <button
                  onClick={() => {
                    setSelectedImage(null);
                    onCtaClick();
                  }}
                  className="px-5 py-2.5 bg-teal-600 hover:bg-teal-700 text-white font-bold text-xs sm:text-sm rounded-xl shadow-md transition-all flex items-center gap-1.5 cursor-pointer shrink-0"
                >
                  <span>GARANTIR MEU ACESSO</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              )}
            </div>
          </div>
        </div>
      )}

    </section>
  );
};

