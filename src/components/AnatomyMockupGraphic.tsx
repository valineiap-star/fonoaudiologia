import React from 'react';

interface AnatomyMockupGraphicProps {
  sheetId: string;
  className?: string;
  showLabels?: boolean;
}

export const AnatomyMockupGraphic: React.FC<AnatomyMockupGraphicProps> = ({
  sheetId,
  className = '',
  showLabels = true
}) => {
  switch (sheetId) {
    case 'laringe':
      return (
        <div className={`relative bg-gradient-to-br from-slate-900 via-[#0B2533] to-[#0A1A24] text-white p-5 rounded-xl border border-teal-500/30 overflow-hidden shadow-2xl ${className}`}>
          {/* Header of sheet */}
          <div className="flex items-center justify-between border-b border-teal-500/20 pb-3 mb-4">
            <div>
              <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded bg-teal-500/20 text-teal-300 border border-teal-500/30">
                Módulo 01 • Anatomia
              </span>
              <h4 className="text-sm md:text-base font-semibold text-white mt-1">
                Anatomia da Laringe e Esqueleto Cartilaginoso
              </h4>
            </div>
            <div className="text-[10px] text-slate-400 font-mono text-right">
              FONO VISUAL<br /><span className="text-teal-400">PRANCHA #04</span>
            </div>
          </div>

          {/* SVG Diagram */}
          <div className="relative flex items-center justify-center py-2">
            <svg viewBox="0 0 320 220" className="w-full max-h-56 drop-shadow-md">
              <defs>
                <linearGradient id="larynxGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#2dd4bf" stopOpacity="0.8" />
                  <stop offset="100%" stopColor="#0f766e" stopOpacity="0.9" />
                </linearGradient>
                <linearGradient id="thyroidGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.7" />
                  <stop offset="100%" stopColor="#0369a1" stopOpacity="0.8" />
                </linearGradient>
                <linearGradient id="epiglottisGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#fb7185" stopOpacity="0.8" />
                  <stop offset="100%" stopColor="#e11d48" stopOpacity="0.9" />
                </linearGradient>
              </defs>

              {/* Hyoid Bone */}
              <path d="M 90,30 Q 160,18 230,30 Q 235,38 220,38 Q 160,28 100,38 Z" fill="#94a3b8" stroke="#cbd5e1" strokeWidth="1.5" />
              
              {/* Epiglottis (Leaf shaped) */}
              <path d="M 160,22 C 145,22 135,45 142,85 C 148,110 160,120 160,120 C 160,120 172,110 178,85 C 185,45 175,22 160,22 Z" fill="url(#epiglottisGrad)" opacity="0.85" stroke="#f43f5e" strokeWidth="1.5" />

              {/* Thyroid Cartilage (Shield shape) */}
              <path d="M 95,80 L 160,110 L 225,80 L 220,150 L 160,170 L 100,150 Z" fill="url(#thyroidGrad)" stroke="#38bdf8" strokeWidth="1.8" />
              <path d="M 160,110 L 160,170" stroke="#bae6fd" strokeWidth="1.5" strokeDasharray="3 3" />
              {/* Thyroid Notch */}
              <path d="M 148,82 Q 160,94 172,82" stroke="#bae6fd" strokeWidth="2" fill="none" />

              {/* Cricoid Cartilage */}
              <path d="M 115,172 Q 160,165 205,172 L 200,195 Q 160,202 120,195 Z" fill="url(#larynxGrad)" stroke="#2dd4bf" strokeWidth="1.5" />

              {/* Tracheal Rings */}
              <path d="M 125,200 Q 160,205 195,200" stroke="#64748b" strokeWidth="3" fill="none" />
              <path d="M 125,208 Q 160,213 195,208" stroke="#64748b" strokeWidth="3" fill="none" />

              {showLabels && (
                <>
                  {/* Pin: Osso Hióide */}
                  <line x1="230" y1="30" x2="265" y2="25" stroke="#94a3b8" strokeWidth="1" />
                  <circle cx="230" cy="30" r="2.5" fill="#94a3b8" />
                  <text x="268" y="28" fill="#cbd5e1" fontSize="9" fontWeight="bold">Osso Hióide</text>

                  {/* Pin: Epiglote */}
                  <line x1="160" y1="45" x2="60" y2="45" stroke="#fb7185" strokeWidth="1" />
                  <circle cx="160" cy="45" r="2.5" fill="#fb7185" />
                  <text x="10" y="48" fill="#fda4af" fontSize="9" fontWeight="bold">Epiglote</text>

                  {/* Pin: Cartilagem Tireóidea */}
                  <line x1="215" y1="115" x2="260" y2="115" stroke="#38bdf8" strokeWidth="1" />
                  <circle cx="215" cy="115" r="2.5" fill="#38bdf8" />
                  <text x="264" y="118" fill="#bae6fd" fontSize="9" fontWeight="bold">C. Tireóidea</text>

                  {/* Pin: Cartilagem Cricóidea */}
                  <line x1="120" y1="185" x2="65" y2="185" stroke="#2dd4bf" strokeWidth="1" />
                  <circle cx="120" cy="185" r="2.5" fill="#2dd4bf" />
                  <text x="10" y="188" fill="#5eead4" fontSize="9" fontWeight="bold">C. Cricóidea</text>
                </>
              )}
            </svg>
          </div>

          {/* Sheet Footer Notes */}
          <div className="grid grid-cols-2 gap-2 mt-3 pt-3 border-t border-slate-700/60 text-[11px] text-slate-300">
            <div className="flex items-center space-x-1.5">
              <span className="w-2 h-2 rounded-full bg-teal-400 inline-block"></span>
              <span>Proteção e fonação</span>
            </div>
            <div className="flex items-center space-x-1.5 justify-end">
              <span className="text-teal-300 font-medium">Inervação: NC X (Vago)</span>
            </div>
          </div>
        </div>
      );

    case 'pregas-vocais':
      return (
        <div className={`relative bg-gradient-to-br from-[#0B2533] via-[#0F3B50] to-[#081b24] text-white p-5 rounded-xl border border-teal-500/30 overflow-hidden shadow-2xl ${className}`}>
          <div className="flex items-center justify-between border-b border-teal-500/20 pb-3 mb-4">
            <div>
              <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded bg-teal-500/20 text-teal-300 border border-teal-500/30">
                Módulo 01 / 05 • Fonação
              </span>
              <h4 className="text-sm md:text-base font-semibold text-white mt-1">
                Laringoscopia & Camadas da Prega Vocal
              </h4>
            </div>
            <div className="text-[10px] text-teal-400 font-mono">FONO VISUAL</div>
          </div>

          <div className="relative flex items-center justify-center py-2">
            <svg viewBox="0 0 320 200" className="w-full max-h-52 drop-shadow-md">
              <defs>
                <radialGradient id="glottisCircle" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#1e293b" />
                  <stop offset="100%" stopColor="#0f172a" />
                </radialGradient>
              </defs>
              {/* Laryngeal View Container */}
              <circle cx="160" cy="100" r="85" fill="url(#glottisCircle)" stroke="#334155" strokeWidth="3" />
              
              {/* Epiglottis arch top */}
              <path d="M 100,50 Q 160,20 220,50 Q 160,40 100,50 Z" fill="#f43f5e" opacity="0.8" />
              
              {/* True Vocal Folds */}
              <path d="M 160,50 L 130,135 Q 160,120 160,50 Z" fill="#e2e8f0" stroke="#cbd5e1" strokeWidth="1.5" />
              <path d="M 160,50 L 190,135 Q 160,120 160,50 Z" fill="#e2e8f0" stroke="#cbd5e1" strokeWidth="1.5" />

              {/* False Vocal Folds (Vestibular) */}
              <path d="M 115,55 Q 95,100 120,140 Q 128,100 115,55 Z" fill="#f43f5e" opacity="0.45" />
              <path d="M 205,55 Q 225,100 200,140 Q 192,100 205,55 Z" fill="#f43f5e" opacity="0.45" />

              {/* Arytenoid Cartilages at bottom */}
              <circle cx="130" cy="140" r="8" fill="#64748b" stroke="#94a3b8" />
              <circle cx="190" cy="140" r="8" fill="#64748b" stroke="#94a3b8" />

              {/* Glottic space in center */}
              <path d="M 160,55 L 140,130 L 180,130 Z" fill="#020617" />

              {showLabels && (
                <>
                  <line x1="145" y1="90" x2="50" y2="90" stroke="#38bdf8" strokeWidth="1" />
                  <circle cx="145" cy="90" r="2.5" fill="#38bdf8" />
                  <text x="5" y="93" fill="#38bdf8" fontSize="9" fontWeight="bold">Prega Vocal Verdadeira</text>

                  <line x1="195" y1="80" x2="255" y2="80" stroke="#fb7185" strokeWidth="1" />
                  <circle cx="195" cy="80" r="2.5" fill="#fb7185" />
                  <text x="258" y="83" fill="#fb7185" fontSize="9" fontWeight="bold">Prega Vestibular</text>

                  <line x1="190" y1="140" x2="245" y2="150" stroke="#a78bfa" strokeWidth="1" />
                  <circle cx="190" cy="140" r="2.5" fill="#a78bfa" />
                  <text x="248" y="153" fill="#c4b5fd" fontSize="9" fontWeight="bold">Aritenóides</text>
                </>
              )}
            </svg>
          </div>

          <div className="flex items-center justify-between text-[11px] text-slate-300 pt-2 border-t border-slate-700/60">
            <span className="text-teal-300">✓ 5 Camadas de Hirano</span>
            <span className="text-slate-400">Espaço de Reinke em destaque</span>
          </div>
        </div>
      );

    case 'audicao':
      return (
        <div className={`relative bg-gradient-to-br from-[#0a2332] via-[#0e3b4d] to-[#061822] text-white p-5 rounded-xl border border-teal-500/30 overflow-hidden shadow-2xl ${className}`}>
          <div className="flex items-center justify-between border-b border-teal-500/20 pb-3 mb-4">
            <div>
              <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded bg-blue-500/20 text-blue-300 border border-blue-500/30">
                Módulo 01 / 07 • Audiologia
              </span>
              <h4 className="text-sm md:text-base font-semibold text-white mt-1">
                Via Auditiva: Orelha Externa, Média e Interna
              </h4>
            </div>
            <div className="text-[10px] text-blue-300 font-mono">FONO VISUAL</div>
          </div>

          <div className="relative flex items-center justify-center py-2">
            <svg viewBox="0 0 320 180" className="w-full max-h-48 drop-shadow-md">
              {/* Outer Ear Pinna */}
              <path d="M 40,30 C 15,40 10,90 30,130 C 45,150 65,155 60,135 C 50,115 45,80 60,50 Z" fill="#fbcfe8" opacity="0.8" stroke="#f472b6" strokeWidth="1.5" />
              {/* Ear Canal */}
              <path d="M 60,85 L 120,95 L 120,115 L 60,105 Z" fill="#0f172a" stroke="#475569" strokeWidth="1.5" />
              {/* Tympanic Membrane */}
              <line x1="120" y1="90" x2="125" y2="120" stroke="#38bdf8" strokeWidth="3" />

              {/* Middle Ear: Ossicles */}
              {/* Malleus */}
              <line x1="124" y1="95" x2="140" y2="85" stroke="#f59e0b" strokeWidth="2.5" />
              {/* Incus */}
              <line x1="140" y1="85" x2="155" y2="92" stroke="#fbbf24" strokeWidth="2.5" />
              {/* Stapes & Oval Window */}
              <line x1="155" y1="92" x2="168" y2="96" stroke="#fde047" strokeWidth="2.5" />

              {/* Inner Ear: Cochlea spiral */}
              <path d="M 175,95 C 190,80 220,85 220,105 C 220,125 195,130 185,115 C 180,105 195,95 205,102 C 210,108 205,115 198,112" fill="none" stroke="#2dd4bf" strokeWidth="3" strokeLinecap="round" />

              {/* Semicircular canals */}
              <path d="M 185,85 C 185,55 215,55 215,85" fill="none" stroke="#a78bfa" strokeWidth="2" />
              <path d="M 200,80 C 225,65 240,90 220,95" fill="none" stroke="#a78bfa" strokeWidth="2" />

              {/* Auditory Nerve */}
              <path d="M 220,105 L 285,110" stroke="#f43f5e" strokeWidth="3" strokeDasharray="4 2" />

              {showLabels && (
                <>
                  <text x="15" y="170" fill="#f472b6" fontSize="8" fontWeight="bold">Orelha Externa</text>
                  <text x="110" y="170" fill="#fbbf24" fontSize="8" fontWeight="bold">Orelha Média</text>
                  <text x="200" y="170" fill="#2dd4bf" fontSize="8" fontWeight="bold">Orelha Interna</text>
                  <text x="240" y="125" fill="#fda4af" fontSize="8" fontWeight="bold">NC VIII</text>
                </>
              )}
            </svg>
          </div>

          <div className="grid grid-cols-3 gap-1 pt-2 border-t border-slate-700/60 text-center text-[10px] text-slate-300">
            <span className="bg-slate-800/80 py-1 rounded border border-slate-700">Tímpano & Canal</span>
            <span className="bg-slate-800/80 py-1 rounded border border-slate-700">Cadeia Ossicular</span>
            <span className="bg-slate-800/80 py-1 rounded border border-slate-700">Cóclea & Cílios</span>
          </div>
        </div>
      );

    case 'cerebro':
      return (
        <div className={`relative bg-gradient-to-br from-[#0c2230] via-[#103a4c] to-[#071924] text-white p-5 rounded-xl border border-teal-500/30 overflow-hidden shadow-2xl ${className}`}>
          <div className="flex items-center justify-between border-b border-teal-500/20 pb-3 mb-4">
            <div>
              <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded bg-purple-500/20 text-purple-300 border border-purple-500/30">
                Módulo 01 / 09 • Neurofuncional
              </span>
              <h4 className="text-sm md:text-base font-semibold text-white mt-1">
                Áreas Cerebrais da Linguagem & Comunicação
              </h4>
            </div>
            <div className="text-[10px] text-purple-300 font-mono">FONO VISUAL</div>
          </div>

          <div className="relative flex items-center justify-center py-2">
            <svg viewBox="0 0 320 190" className="w-full max-h-48 drop-shadow-md">
              {/* Brain Silhouette */}
              <path d="M 80,120 C 50,110 50,60 90,40 C 130,20 220,20 260,60 C 280,80 275,130 240,140 C 230,165 190,165 170,145 C 150,150 110,150 90,130 Z" fill="#1e293b" stroke="#475569" strokeWidth="2" />
              
              {/* Sulcus lines */}
              <path d="M 120,45 Q 160,80 200,90 Q 240,85 260,100" stroke="#334155" strokeWidth="1.5" fill="none" />
              <path d="M 160,35 Q 170,80 180,130" stroke="#334155" strokeWidth="1.5" fill="none" />

              {/* Broca's Area (Frontal) */}
              <circle cx="115" cy="85" r="18" fill="#0d9488" opacity="0.85" stroke="#2dd4bf" strokeWidth="1.5" />

              {/* Wernicke's Area (Temporal/Parietal) */}
              <circle cx="215" cy="95" r="18" fill="#8b5cf6" opacity="0.85" stroke="#a78bfa" strokeWidth="1.5" />

              {/* Arcuate Fasciculus (Connecting bridge) */}
              <path d="M 125,75 C 160,50 185,55 205,85" fill="none" stroke="#f59e0b" strokeWidth="2.5" strokeDasharray="3 2" />

              {/* Primary Auditory Cortex */}
              <circle cx="170" cy="98" r="9" fill="#38bdf8" opacity="0.75" />

              {showLabels && (
                <>
                  {/* Label Broca */}
                  <line x1="115" y1="85" x2="45" y2="85" stroke="#2dd4bf" strokeWidth="1" />
                  <circle cx="115" cy="85" r="2" fill="#2dd4bf" />
                  <text x="5" y="80" fill="#2dd4bf" fontSize="8.5" fontWeight="bold">Área de Broca</text>
                  <text x="5" y="90" fill="#94a3b8" fontSize="7.5">(Expressão / BA 44,45)</text>

                  {/* Label Wernicke */}
                  <line x1="215" y1="95" x2="275" y2="95" stroke="#a78bfa" strokeWidth="1" />
                  <circle cx="215" cy="95" r="2" fill="#a78bfa" />
                  <text x="245" y="90" fill="#c4b5fd" fontSize="8.5" fontWeight="bold">Wernicke</text>
                  <text x="245" y="100" fill="#94a3b8" fontSize="7.5">(Compreensão / BA 22)</text>

                  {/* Label Fascículo Arqueado */}
                  <text x="125" y="45" fill="#fcd34d" fontSize="7.5" fontWeight="bold">Fascículo Arqueado</text>
                </>
              )}
            </svg>
          </div>

          <div className="flex items-center justify-between text-[10px] text-slate-300 pt-2 border-t border-slate-700/60">
            <span className="text-teal-300">Topodiagnóstico das Afasias</span>
            <span className="text-purple-300">Bases da Neuroplasticidade</span>
          </div>
        </div>
      );

    case 'orofacial':
    default:
      return (
        <div className={`relative bg-gradient-to-br from-[#0c2432] via-[#0f3647] to-[#071720] text-white p-5 rounded-xl border border-teal-500/30 overflow-hidden shadow-2xl ${className}`}>
          <div className="flex items-center justify-between border-b border-teal-500/20 pb-3 mb-4">
            <div>
              <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded bg-teal-500/20 text-teal-300 border border-teal-500/30">
                Módulo 01 / 04 • Motricidade
              </span>
              <h4 className="text-sm md:text-base font-semibold text-white mt-1">
                Musculatura Orofacial & Mastigatória
              </h4>
            </div>
            <div className="text-[10px] text-teal-400 font-mono">FONO VISUAL</div>
          </div>

          <div className="relative flex items-center justify-center py-2">
            <svg viewBox="0 0 320 180" className="w-full max-h-48 drop-shadow-md">
              {/* Skull / Face Profile Outline */}
              <path d="M 120,30 C 170,25 210,40 220,80 C 225,95 240,105 235,115 C 230,125 210,125 205,130 C 200,150 170,165 140,160 L 110,135 Z" fill="#1e293b" stroke="#475569" strokeWidth="1.5" />
              
              {/* Masseter Muscle */}
              <path d="M 160,95 L 185,90 L 175,140 L 150,140 Z" fill="#f43f5e" opacity="0.8" stroke="#fb7185" strokeWidth="1.5" />

              {/* Temporal Muscle fan */}
              <path d="M 130,45 C 160,35 190,45 185,75 L 165,85 Z" fill="#f59e0b" opacity="0.75" stroke="#fcd34d" strokeWidth="1.5" />

              {/* Orbicularis Oris */}
              <ellipse cx="215" cy="120" rx="12" ry="8" fill="#2dd4bf" opacity="0.8" stroke="#5eead4" strokeWidth="1.5" />

              {/* Buccinator */}
              <path d="M 180,110 L 205,115 L 205,128 L 180,125 Z" fill="#8b5cf6" opacity="0.75" />

              {showLabels && (
                <>
                  <line x1="170" y1="120" x2="80" y2="120" stroke="#fb7185" strokeWidth="1" />
                  <circle cx="170" cy="120" r="2.5" fill="#fb7185" />
                  <text x="15" y="123" fill="#fda4af" fontSize="8.5" fontWeight="bold">M. Masseter</text>

                  <line x1="160" y1="55" x2="80" y2="55" stroke="#fcd34d" strokeWidth="1" />
                  <circle cx="160" cy="55" r="2.5" fill="#fcd34d" />
                  <text x="15" y="58" fill="#fef08a" fontSize="8.5" fontWeight="bold">M. Temporal</text>

                  <line x1="225" y1="120" x2="265" y2="120" stroke="#5eead4" strokeWidth="1" />
                  <circle cx="225" cy="120" r="2.5" fill="#5eead4" />
                  <text x="245" y="115" fill="#5eead4" fontSize="8.5" fontWeight="bold">M. Orbicular</text>
                </>
              )}
            </svg>
          </div>

          <div className="flex items-center justify-between text-[10px] text-slate-300 pt-2 border-t border-slate-700/60">
            <span className="text-teal-300">Oclusão & Mastigação</span>
            <span className="text-slate-400">Inervação: NC V (Trigêmeo)</span>
          </div>
        </div>
      );
  }
};
