import React, { useState } from 'react';
import { X, ChevronRight, ZoomIn } from 'lucide-react';

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
    },
    {
      id: 'img-2',
      url: 'https://i.postimg.cc/15pSVT1M/Chat-GPT-Image-27-de-ago-de-2026-18-26-16-(6).png',
      title: 'Esquema Anatômico da Audição',
    },
    {
      id: 'img-3',
      url: 'https://i.postimg.cc/9FG2wSHJ/Chat-GPT-Image-27-de-ago-de-2026-18-26-16-(7).png',
      title: 'Neuroanatomia & Linguagem',
    },
    {
      id: 'img-4',
      url: 'https://i.postimg.cc/GhkRTNnM/Chat-GPT-Image-27-de-ago-de-2026-18-26-16-(8).png',
      title: 'Fases da Deglutição & Disfagia',
    },
    {
      id: 'img-5',
      url: 'https://i.postimg.cc/kXr94CzZ/Chat-GPT-Image-27-de-ago-de-2026-18-35-19-(5).png',
      title: 'Músculos da Mímica & Mastigação',
    },
    {
      id: 'img-6',
      url: 'https://i.postimg.cc/wTKHvzZr/Chat-GPT-Image-27-de-ago-de-2026-18-35-19-(6).png',
      title: 'Pares Cranianos da Fonoaudiologia',
    },
    {
      id: 'img-7',
      url: 'https://i.postimg.cc/7YvD64dW/Chat-GPT-Image-27-de-ago-de-2026-18-35-20-(10).png',
      title: 'Resumo Visual de Consulta Rápida',
    },
    {
      id: 'img-8',
      url: 'https://i.postimg.cc/J4wmn8vP/Chat-GPT-Image-27-de-ago-de-2026-18-35-20-(9).png',
      title: 'Mapa Mental & Fluxograma Diagnóstico',
    },
  ];

  // Duplicate for seamless infinite loop
  const displayImages = [...galleryImages, ...galleryImages];

  return (
    <section className="py-8 sm:py-12 overflow-hidden relative select-none bg-transparent">
      
      {/* Gradient Fades for Left and Right Edges */}
      <div className="absolute left-0 top-0 bottom-0 w-20 sm:w-40 bg-gradient-to-r from-[#FAFBFD] via-[#FAFBFD]/80 to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-20 sm:w-40 bg-gradient-to-l from-[#FAFBFD] via-[#FAFBFD]/80 to-transparent z-10 pointer-events-none" />

      {/* Scrolling Track with pure rounded images */}
      <div className="flex w-max items-center animate-infinite-marquee hover:[animation-play-state:paused] py-3">
        {displayImages.map((item, idx) => (
          <div
            key={`${item.id}-${idx}`}
            onClick={() => setSelectedImage({ url: item.url, title: item.title })}
            className="mx-4 group relative cursor-pointer rounded-2xl sm:rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-[1.03] shrink-0 w-72 sm:w-88 md:w-[420px] aspect-[4/3] bg-slate-900 border border-slate-200/60"
          >
            <img
              src={item.url}
              alt={item.title}
              referrerPolicy="no-referrer"
              loading="lazy"
              className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 rounded-2xl sm:rounded-3xl"
            />

            {/* Subtle Zoom indicator on hover */}
            <div className="absolute inset-0 bg-slate-950/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-xs rounded-2xl sm:rounded-3xl">
              <span className="px-4 py-2.5 bg-slate-900/90 text-white font-semibold text-sm rounded-xl shadow-lg flex items-center gap-2 transform translate-y-2 group-hover:translate-y-0 transition-transform border border-white/20">
                <ZoomIn className="w-4 h-4 text-teal-300" />
                Ampliar Imagem
              </span>
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
              <h3 className="text-sm sm:text-base font-bold text-white">
                {selectedImage.title}
              </h3>
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
                className="max-h-[70vh] w-auto max-w-full rounded-2xl object-contain shadow-2xl border border-slate-800"
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

