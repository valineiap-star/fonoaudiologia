import React, { useState } from 'react';
import { X, ZoomIn, Sparkles, ArrowRight, Eye, Layers } from 'lucide-react';

interface CarouselItem {
  id: string;
  url: string;
  fallbackUrl: string;
  title: string;
  tag: string;
}

interface InfiniteMarqueeProps {
  onCtaClick?: () => void;
}

export const CAROUSEL_GALLERY: CarouselItem[] = [
  {
    id: 'img-1',
    url: '/carousel/slide-1.png',
    fallbackUrl: 'https://i.postimg.cc/fRFWsdc5/Chat-GPT-Image-28-de-ago-de-2026-23-56-09-(1).png',
    title: 'Pranchas Anatômicas e Fisiologia Estruturada',
    tag: 'Prancha Anatômica'
  },
  {
    id: 'img-2',
    url: '/carousel/slide-2.png',
    fallbackUrl: 'https://i.postimg.cc/MpXZg5Q7/Chat-GPT-Image-28-de-ago-de-2026-23-56-09-(2).png',
    title: 'Esquemas de Avaliação e Diagnóstico Clínico',
    tag: 'Esquema Clínico'
  },
  {
    id: 'img-3',
    url: '/carousel/slide-3.png',
    fallbackUrl: 'https://i.postimg.cc/dVDQg6yj/Chat-GPT-Image-28-de-ago-de-2026-23-56-10-(3).png',
    title: 'Mapas Mentais de Voz, Linguagem e Motricidade',
    tag: 'Mapa Mental'
  },
  {
    id: 'img-4',
    url: '/carousel/slide-4.png',
    fallbackUrl: 'https://i.postimg.cc/Jzt7Sxk3/Chat-GPT-Image-28-de-ago-de-2026-23-56-10-(4).png',
    title: 'Atlas Ilustrado de Fonoaudiologia Geral',
    tag: 'Atlas Especializado'
  },
  {
    id: 'img-5',
    url: '/carousel/slide-5.png',
    fallbackUrl: 'https://i.postimg.cc/Wznbcf82/Chat-GPT-Image-28-de-ago-de-2026-23-56-11-(5).png',
    title: 'Resumos Visuais para Consulta Rápida',
    tag: 'Resumo Prático'
  },
  {
    id: 'img-6',
    url: '/carousel/slide-6.png',
    fallbackUrl: 'https://i.postimg.cc/pLyV3CFY/Chat-GPT-Image-28-de-ago-de-2026-23-56-11-(6).png',
    title: 'Tabelas Comparativas e Fluxogramas Terapêuticos',
    tag: 'Fluxograma Clínico'
  }
];

export const InfiniteMarquee: React.FC<InfiniteMarqueeProps> = ({ onCtaClick }) => {
  const [selectedImage, setSelectedImage] = useState<CarouselItem | null>(null);

  // Duplicamos os itens 2 vezes para garantir uma rolagem contínua sem quebras
  const displayImages = [...CAROUSEL_GALLERY, ...CAROUSEL_GALLERY];

  return (
    <section className="py-14 sm:py-18 bg-gradient-to-b from-white via-teal-50/30 to-white overflow-hidden relative select-none border-t border-slate-200/60">
      
      {/* Header da Seção */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-8 sm:mb-10 space-y-3">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-50 border border-teal-200 text-teal-800 text-xs font-bold uppercase tracking-wider shadow-xs">
          <Sparkles className="w-3.5 h-3.5 text-teal-600" />
          <span>Galeria de Materiais • Alta Resolução</span>
        </div>

        <h3 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight">
          VEJA UMA PRÉVIA DOS MATERIAIS QUE VOCÊ TERÁ ACESSO
        </h3>

        <p className="text-xs sm:text-sm text-slate-600 max-w-xl mx-auto">
          Passe o mouse para pausar ou clique em qualquer prancha para ampliar em detalhes:
        </p>
      </div>

      {/* Container do Carrossel com Efeito de Fade nas Bordas Laterais */}
      <div className="relative w-full overflow-hidden">
        {/* Gradientes Laterais Esquerda / Direita */}
        <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-32 md:w-48 bg-gradient-to-r from-white via-white/80 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-32 md:w-48 bg-gradient-to-l from-white via-white/80 to-transparent z-10 pointer-events-none" />

        {/* Trilha de Rolagem Infinita */}
        <div className="flex w-max items-center animate-infinite-marquee hover:[animation-play-state:paused] py-3 cursor-grab active:cursor-grabbing">
          {displayImages.map((item, idx) => (
            <div
              key={`${item.id}-${idx}`}
              onClick={() => setSelectedImage(item)}
              className="mx-3 sm:mx-4 group relative cursor-pointer rounded-2xl overflow-hidden bg-white border-2 border-slate-200 hover:border-teal-400 shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 shrink-0 w-64 sm:w-80 md:w-96 aspect-[4/3] flex flex-col justify-between"
            >
              {/* Tag Superior */}
              <div className="absolute top-3 left-3 z-10">
                <span className="px-2.5 py-1 rounded-md bg-white/90 backdrop-blur-xs text-slate-800 text-[10px] font-bold uppercase tracking-wider border border-slate-200 shadow-xs flex items-center gap-1">
                  <Layers className="w-3 h-3 text-teal-600" />
                  {item.tag}
                </span>
              </div>

              {/* Imagem Principal */}
              <div className="w-full h-full bg-slate-50 flex items-center justify-center overflow-hidden">
                <img
                  src={item.url}
                  alt={item.title}
                  onError={(e) => {
                    // Fallback para link externo se houver qualquer problema de carregamento local
                    (e.target as HTMLImageElement).src = item.fallbackUrl;
                  }}
                  referrerPolicy="no-referrer"
                  loading="lazy"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Hover Overlay com Botão de Zoom */}
              <div className="absolute inset-0 bg-slate-900/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-[2px] p-4 text-center">
                <span className="px-4 py-2 bg-white text-slate-900 font-extrabold text-xs sm:text-sm rounded-xl shadow-xl flex items-center gap-2 transform translate-y-2 group-hover:translate-y-0 transition-transform border border-teal-200">
                  <Eye className="w-4 h-4 text-teal-600" />
                  Clique para Ampliar
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal / Lightbox de Visualização em Alta Resolução */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/80 backdrop-blur-sm animate-in fade-in duration-200"
          onClick={() => setSelectedImage(null)}
        >
          <div 
            className="relative max-w-4xl w-full bg-white rounded-3xl border border-teal-200 shadow-2xl overflow-hidden flex flex-col max-h-[92vh]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Cabeçalho do Modal */}
            <div className="p-4 sm:p-5 bg-gradient-to-r from-teal-50 via-slate-50 to-teal-50 border-b border-slate-200 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="px-2.5 py-1 rounded-md bg-teal-100 text-teal-800 text-[11px] font-bold uppercase tracking-wider border border-teal-200">
                  {selectedImage.tag}
                </span>
                <h3 className="text-sm sm:text-base font-extrabold text-slate-900 truncate">
                  {selectedImage.title}
                </h3>
              </div>
              <button
                onClick={() => setSelectedImage(null)}
                aria-label="Fechar visualização"
                className="p-2 rounded-xl bg-white hover:bg-slate-100 text-slate-500 hover:text-slate-900 transition-colors border border-slate-200 cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Imagem Ampliada */}
            <div className="p-4 sm:p-6 bg-slate-100 flex-1 overflow-auto flex items-center justify-center">
              <img
                src={selectedImage.url}
                alt={selectedImage.title}
                onError={(e) => {
                  (e.target as HTMLImageElement).src = selectedImage.fallbackUrl;
                }}
                referrerPolicy="no-referrer"
                className="max-h-[65vh] w-auto max-w-full rounded-2xl object-contain shadow-xl border border-slate-300/80"
              />
            </div>

            {/* Rodapé do Modal com CTA */}
            <div className="p-4 sm:p-5 bg-white border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3">
              <p className="text-xs text-slate-600 text-center sm:text-left">
                Arquivo digital em alta definição pronto para estudo, consulta rápida ou impressão.
              </p>
              {onCtaClick && (
                <button
                  onClick={() => {
                    setSelectedImage(null);
                    onCtaClick();
                  }}
                  className="w-full sm:w-auto px-6 py-3 bg-teal-600 hover:bg-teal-700 active:bg-teal-800 text-white font-extrabold text-xs sm:text-sm rounded-xl shadow-md shadow-teal-700/20 transition-all flex items-center justify-center gap-2 cursor-pointer shrink-0"
                >
                  <span>ESCOLHER PLANO DE ACESSO</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              )}
            </div>
          </div>
        </div>
      )}

    </section>
  );
};
