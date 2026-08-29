import React from 'react';
import { Sparkles, ArrowRight, Layers } from 'lucide-react';

interface MaterialsShowcaseSectionProps {
  onCtaClick: () => void;
}

interface ShowcaseItem {
  id: string;
  url: string;
  title: string;
}

export const MaterialsShowcaseSection: React.FC<MaterialsShowcaseSectionProps> = ({ onCtaClick }) => {
  // Group 1: 6 materials for Carousel 1
  const carouselRow1: ShowcaseItem[] = [
    {
      id: 'showcase-1',
      url: 'https://i.postimg.cc/Dzy0fhH4/Chat-GPT-Image-28-de-ago-de-2026-23-48-24-(3).png',
      title: 'Material Visual 1',
    },
    {
      id: 'showcase-2',
      url: 'https://i.postimg.cc/QMxCNDwW/Chat-GPT-Image-28-de-ago-de-2026-23-48-24-(4).png',
      title: 'Material Visual 2',
    },
    {
      id: 'showcase-3',
      url: 'https://i.postimg.cc/R0VhCmy6/Chat-GPT-Image-28-de-ago-de-2026-23-48-25-(5).png',
      title: 'Material Visual 3',
    },
    {
      id: 'showcase-4',
      url: 'https://i.postimg.cc/g0kjcpQn/Chat-GPT-Image-28-de-ago-de-2026-23-48-26-(6).png',
      title: 'Material Visual 4',
    },
    {
      id: 'showcase-9',
      url: 'https://i.postimg.cc/TPm7w8Dz/Chat-GPT-Image-28-de-ago-de-2026-23-56-12-(7).png',
      title: 'Material Visual 9',
    },
    {
      id: 'showcase-10',
      url: 'https://i.postimg.cc/5tv70cCT/Chat-GPT-Image-28-de-ago-de-2026-23-56-13-(8).png',
      title: 'Material Visual 10',
    },
  ];

  // Group 2: 6 materials for Carousel 2
  const carouselRow2: ShowcaseItem[] = [
    {
      id: 'showcase-5',
      url: 'https://i.postimg.cc/Ls654SwX/Chat-GPT-Image-28-de-ago-de-2026-23-48-26-(7).png',
      title: 'Material Visual 5',
    },
    {
      id: 'showcase-6',
      url: 'https://i.postimg.cc/TPY12xFh/Chat-GPT-Image-28-de-ago-de-2026-23-48-27-(8).png',
      title: 'Material Visual 6',
    },
    {
      id: 'showcase-7',
      url: 'https://i.postimg.cc/3wJNrhVN/Chat-GPT-Image-28-de-ago-de-2026-23-48-27-(9).png',
      title: 'Material Visual 7',
    },
    {
      id: 'showcase-8',
      url: 'https://i.postimg.cc/Ls654Sw8/Chat-GPT-Image-28-de-ago-de-2026-23-48-28-(10).png',
      title: 'Material Visual 8',
    },
    {
      id: 'showcase-11',
      url: 'https://i.postimg.cc/8CWK586x/Chat-GPT-Image-28-de-ago-de-2026-23-56-13-(9).png',
      title: 'Material Visual 11',
    },
    {
      id: 'showcase-12',
      url: 'https://i.postimg.cc/QdvYhNHy/Chat-GPT-Image-28-de-ago-de-2026-23-56-14-(10).png',
      title: 'Material Visual 12',
    },
  ];

  // Triplicate items for seamless infinite scroll on wide screens
  const displayRow1 = [...carouselRow1, ...carouselRow1, ...carouselRow1];
  const displayRow2 = [...carouselRow2, ...carouselRow2, ...carouselRow2];

  return (
    <section className="py-14 sm:py-20 bg-gradient-to-b from-[#FAFBFD] via-[#F3F8FB] to-[#FAFBFD] border-y border-slate-200/70 overflow-hidden relative select-none">
      
      {/* Background Soft Accents */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-teal-200/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 mb-10 sm:mb-14">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-50 border border-teal-200/80 text-teal-800 text-xs font-bold tracking-wide uppercase shadow-xs mb-4">
          <Layers className="w-3.5 h-3.5 text-teal-600" />
          <span>VEJA O MATERIAL POR DENTRO</span>
        </div>

        <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 tracking-tight max-w-3xl mx-auto">
          Pranchas Visuais Criadas para <span className="text-teal-600">Facilitar Seus Estudos</span> e Prática Clínica
        </h2>

        <p className="mt-3.5 text-sm sm:text-base text-slate-600 max-w-2xl mx-auto">
          Ilustrações anatômicas limpas, esquemas diretos ao ponto e resumos completos prontos para o seu dia a dia.
        </p>
      </div>

      {/* Carousels Container with Edge Fade Masks */}
      <div className="relative w-full">
        {/* Left and Right Fade Gradients */}
        <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-36 md:w-48 bg-gradient-to-r from-[#FAFBFD] via-[#FAFBFD]/80 to-transparent z-20 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-36 md:w-48 bg-gradient-to-l from-[#FAFBFD] via-[#FAFBFD]/80 to-transparent z-20 pointer-events-none" />

        {/* CAROUSEL ROW 1 (Leftward Flow) */}
        <div className="flex w-max items-center animate-infinite-marquee hover:[animation-play-state:paused] py-2 sm:py-3">
          {displayRow1.map((item, idx) => (
            <div
              key={`row1-${item.id}-${idx}`}
              className="mx-3 sm:mx-4 relative rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 shrink-0 w-64 sm:w-76 md:w-88 aspect-[4/3] bg-white border border-slate-200/90"
            >
              <img
                src={item.url}
                alt={item.title}
                referrerPolicy="no-referrer"
                loading="lazy"
                className="w-full h-full object-cover object-center rounded-2xl"
              />
            </div>
          ))}
        </div>

        {/* CAROUSEL ROW 2 (Rightward Flow) */}
        <div className="flex w-max items-center animate-infinite-marquee-reverse hover:[animation-play-state:paused] py-2 sm:py-3 mt-2 sm:mt-4">
          {displayRow2.map((item, idx) => (
            <div
              key={`row2-${item.id}-${idx}`}
              className="mx-3 sm:mx-4 relative rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 shrink-0 w-64 sm:w-76 md:w-88 aspect-[4/3] bg-white border border-slate-200/90"
            >
              <img
                src={item.url}
                alt={item.title}
                referrerPolicy="no-referrer"
                loading="lazy"
                className="w-full h-full object-cover object-center rounded-2xl"
              />
            </div>
          ))}
        </div>
      </div>

      {/* CTA Button below carousels */}
      <div className="mt-10 sm:mt-12 text-center relative z-10 px-4">
        <button
          onClick={() => onCtaClick()}
          className="w-full sm:w-auto px-8 py-4 bg-[#0B2533] hover:bg-teal-700 text-white font-extrabold text-sm sm:text-base rounded-xl shadow-lg shadow-slate-900/10 hover:shadow-xl transition-all inline-flex items-center justify-center gap-2.5 cursor-pointer group"
        >
          <Sparkles className="w-4 h-4 text-teal-300" />
          <span>QUERO ACESSAR TODAS AS PRANCHAS ILUSTRADAS</span>
          <ArrowRight className="w-4 h-4 text-teal-300 group-hover:translate-x-1 transition-transform" />
        </button>
      </div>

    </section>
  );
};
