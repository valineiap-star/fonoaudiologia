import React, { useState, useEffect, useRef, useCallback } from 'react';
import { TESTIMONIAL_SLIDES } from '../data/materialsData';
import { 
  Star, 
  CheckCircle2, 
  Sparkles, 
  ChevronLeft, 
  ChevronRight, 
  ShieldCheck,
  Pause,
  Play
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export const TestimonialsSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState<number>(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);
  
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);
  const totalSlides = TESTIMONIAL_SLIDES.length;

  const goToNext = useCallback(() => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % totalSlides);
  }, [totalSlides]);

  const goToPrev = useCallback(() => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
  }, [totalSlides]);

  const goToIndex = (index: number) => {
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
  };

  // Auto-play timer
  useEffect(() => {
    if (!isAutoPlay) return;
    const interval = setInterval(() => {
      goToNext();
    }, 5500);
    return () => clearInterval(interval);
  }, [isAutoPlay, goToNext]);

  // Touch handlers for mobile swipe
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    const distance = touchStartX.current - touchEndX.current;
    const minSwipeDistance = 45;

    if (distance > minSwipeDistance) {
      goToNext();
    } else if (distance < -minSwipeDistance) {
      goToPrev();
    }

    touchStartX.current = null;
    touchEndX.current = null;
  };

  const currentSlide = TESTIMONIAL_SLIDES[currentIndex];

  const slideVariants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 120 : -120,
      opacity: 0,
      scale: 0.96
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        x: { type: 'spring', stiffness: 350, damping: 30 },
        opacity: { duration: 0.3 }
      }
    },
    exit: (dir: number) => ({
      x: dir > 0 ? -120 : 120,
      opacity: 0,
      scale: 0.96,
      transition: {
        x: { type: 'spring', stiffness: 350, damping: 30 },
        opacity: { duration: 0.25 }
      }
    })
  };

  return (
    <section 
      id="depoimentos" 
      className="py-18 sm:py-24 bg-gradient-to-b from-white via-slate-50/60 to-white border-b border-slate-200/60 relative overflow-hidden"
    >
      {/* Background Soft Lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-teal-100/30 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3.5">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-50 border border-teal-200 text-teal-800 text-xs font-bold uppercase tracking-wider shadow-2xs">
            <Sparkles className="w-3.5 h-3.5 text-teal-600" />
            <span>Opinião de Quem Já Utiliza</span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
            QUEM ESTUDA E ATENDE COM O <span className="text-teal-600">FONO VISUAL</span>
          </h2>

          <p className="text-sm sm:text-base text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Veja relatos e prints reais enviados por estudantes de graduação, residentes e fonoaudiólogos que utilizam o material no dia a dia.
          </p>

          {/* Social Proof Stats Pills */}
          <div className="pt-2 flex flex-wrap items-center justify-center gap-3 text-xs font-semibold text-slate-600">
            <div className="flex items-center gap-1.5 px-3 py-1.5 bg-white rounded-full border border-slate-200 shadow-2xs">
              <div className="flex text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <span className="text-slate-800 font-bold">4.9 / 5.0</span>
              <span className="text-slate-400">avaliação média</span>
            </div>
            
            <div className="flex items-center gap-1.5 px-3 py-1.5 bg-white rounded-full border border-slate-200 shadow-2xs">
              <CheckCircle2 className="w-3.5 h-3.5 text-teal-600" />
              <span className="text-slate-800 font-bold">+1.200</span>
              <span className="text-slate-400">alunos e profissionais</span>
            </div>

            <div className="flex items-center gap-1.5 px-3 py-1.5 bg-teal-50/80 rounded-full border border-teal-200/80 text-teal-900 shadow-2xs">
              <ShieldCheck className="w-3.5 h-3.5 text-teal-600" />
              <span className="font-bold">Prints 100% Verificados</span>
            </div>
          </div>
        </div>

        {/* Carousel Container */}
        <div 
          className="mt-10 sm:mt-12 relative max-w-3xl mx-auto"
          onMouseEnter={() => setIsAutoPlay(false)}
          onMouseLeave={() => setIsAutoPlay(true)}
        >
          {/* Main Slide Card Area */}
          <div 
            className="relative flex items-center justify-center"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            {/* Desktop Left Navigation Arrow */}
            <button
              id="testimonials-prev-btn"
              onClick={goToPrev}
              aria-label="Depoimento anterior"
              className="hidden sm:flex absolute -left-5 lg:-left-6 z-20 w-12 h-12 rounded-full bg-white text-slate-700 hover:text-teal-700 hover:bg-white items-center justify-center border border-slate-200/90 shadow-md hover:shadow-xl transition-all duration-200 cursor-pointer focus:outline-none focus:ring-2 focus:ring-teal-500 hover:scale-105 active:scale-95"
            >
              <ChevronLeft className="w-6 h-6 -ml-0.5" />
            </button>

            {/* Slide Frame with Animation - Pure Rounded Image, No Zoom Overlay */}
            <div className="w-full relative flex items-center justify-center">
              <AnimatePresence initial={false} custom={direction} mode="wait">
                <motion.div
                  key={currentSlide.id}
                  custom={direction}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  className="w-full flex items-center justify-center"
                >
                  <div className="relative w-full flex items-center justify-center">
                    <img
                      src={currentSlide.image}
                      alt={currentSlide.alt}
                      referrerPolicy="no-referrer"
                      loading="eager"
                      className="w-full h-auto max-h-[580px] object-contain rounded-2xl sm:rounded-3xl shadow-md select-none"
                    />
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Desktop Right Navigation Arrow */}
            <button
              id="testimonials-next-btn"
              onClick={goToNext}
              aria-label="Próximo depoimento"
              className="hidden sm:flex absolute -right-5 lg:-right-6 z-20 w-12 h-12 rounded-full bg-white text-slate-700 hover:text-teal-700 hover:bg-white items-center justify-center border border-slate-200/90 shadow-md hover:shadow-xl transition-all duration-200 cursor-pointer focus:outline-none focus:ring-2 focus:ring-teal-500 hover:scale-105 active:scale-95"
            >
              <ChevronRight className="w-6 h-6 -mr-0.5" />
            </button>
          </div>

          {/* Controls Bar: Mobile Arrows + Counter + Dots + AutoPlay toggle */}
          <div className="mt-5 flex flex-col sm:flex-row items-center justify-between gap-4 px-2">
            
            {/* Slide Index Pill */}
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold text-slate-700 bg-white px-3 py-1 rounded-full border border-slate-200 shadow-2xs">
                Depoimento <strong className="text-teal-600 font-extrabold">{currentIndex + 1}</strong> de {totalSlides}
              </span>
              
              <button
                type="button"
                onClick={() => setIsAutoPlay(!isAutoPlay)}
                title={isAutoPlay ? 'Pausar rotação automática' : 'Ativar rotação automática'}
                className="w-7 h-7 rounded-full bg-white hover:bg-slate-50 border border-slate-200 text-slate-500 hover:text-slate-700 flex items-center justify-center text-xs transition-colors shadow-2xs cursor-pointer"
                aria-label={isAutoPlay ? 'Pausar' : 'Reproduzir'}
              >
                {isAutoPlay ? <Pause className="w-3 h-3 text-teal-600" /> : <Play className="w-3 h-3 ml-0.5 text-slate-600" />}
              </button>
            </div>

            {/* Navigation Dots */}
            <div className="flex items-center gap-2.5">
              {TESTIMONIAL_SLIDES.map((slide, idx) => (
                <button
                  key={slide.id}
                  id={`testimonial-dot-${idx}`}
                  onClick={() => goToIndex(idx)}
                  aria-label={`Ir para depoimento ${idx + 1}`}
                  className={`transition-all duration-300 rounded-full cursor-pointer focus:outline-none focus:ring-2 focus:ring-teal-500 ${
                    currentIndex === idx 
                      ? 'w-8 h-2.5 bg-teal-600 shadow-xs' 
                      : 'w-2.5 h-2.5 bg-slate-300 hover:bg-slate-400'
                  }`}
                />
              ))}
            </div>

            {/* Mobile Navigation Arrows */}
            <div className="flex sm:hidden items-center gap-2">
              <button
                onClick={goToPrev}
                aria-label="Depoimento anterior"
                className="w-9 h-9 rounded-full bg-white text-slate-700 active:bg-slate-100 flex items-center justify-center border border-slate-200 shadow-2xs cursor-pointer"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={goToNext}
                aria-label="Próximo depoimento"
                className="w-9 h-9 rounded-full bg-white text-slate-700 active:bg-slate-100 flex items-center justify-center border border-slate-200 shadow-2xs cursor-pointer"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
};

