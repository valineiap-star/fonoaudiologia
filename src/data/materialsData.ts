import { ModuleItem, MaterialSheet, BonusItem, BenefitItem, FaqItem, TestimonialItem } from '../types';

export const MODULES_DATA: ModuleItem[] = [
  {
    id: 'mod-01',
    number: 'MÓDULO 01',
    title: 'Anatomia e Fundamentos da Fono',
    subtitle: 'Bases estruturais e funcionais da comunicação humana',
    iconName: 'Activity',
    badge: 'Módulo Principal',
    topics: [
      'Sistema respiratório aplicado à fala',
      'Sistema fonatório',
      'Anatomia da laringe',
      'Pregas vocais',
      'Cavidade oral',
      'Língua',
      'Palato duro × palato mole',
      'Musculatura orofacial',
      'Sistema auditivo',
      'Áreas cerebrais da comunicação'
    ],
    sampleSheetId: 'laringe'
  },
  {
    id: 'mod-02',
    number: 'MÓDULO 02',
    title: 'Desenvolvimento da Linguagem Infantil',
    subtitle: 'Marcos do desenvolvimento, aquisição fonológica e etapas linguísticas',
    iconName: 'Baby',
    badge: 'Infantil & Linguagem',
    topics: [
      'Marcos do desenvolvimento linguístico (0 a 6 anos)',
      'Aquisição dos fonemas e processos fonológicos',
      'Pragmática, semântica e morfossintaxe',
      'Sinais de alerta no atraso de linguagem',
      'Tabela comparativa de idade de aquisição fonêmica'
    ],
    sampleSheetId: 'linguagem'
  },
  {
    id: 'mod-03',
    number: 'MÓDULO 03',
    title: 'Fala e Fonologia',
    subtitle: 'Articulação, inventário fonético e processos fonológicos simplificados',
    iconName: 'Mic',
    badge: 'Articulação',
    topics: [
      'Ponto e modo articulatório dos fonemas do PB',
      'Processos fonológicos e suas classificações',
      'Diferenciação: Fala × Linguagem',
      'Desvios fonológicos e inventário de erros',
      'Fluxograma de raciocínio para avaliação da fala'
    ],
    sampleSheetId: 'fonologia'
  },
  {
    id: 'mod-04',
    number: 'MÓDULO 04',
    title: 'Motricidade Orofacial',
    subtitle: 'Músculos da mastigação, mímica facial, respiração e postura lingual',
    iconName: 'Smile',
    badge: 'Anatomofisiologia',
    topics: [
      'Músculos mastigatórios (masseter, temporal, pterigóideos)',
      'Musculatura da mímica facial e orbicular da boca',
      'Respiração oral vs. nasal: impactos craniofaciais',
      'Frênulo lingual: anatomia e classificações visuais',
      'Tônus, mobilidade e postura das estruturas orofaciais'
    ],
    sampleSheetId: 'orofacial'
  },
  {
    id: 'mod-05',
    number: 'MÓDULO 05',
    title: 'Voz',
    subtitle: 'Fisiologia vocal, parâmetros acústicos, lesões de prega vocal e higiene',
    iconName: 'Volume2',
    badge: 'Acústica & Laringe',
    topics: [
      'Fisiologia da vibração das pregas vocais (ciclo glótico)',
      'Configuração glótica e tipos de fendas',
      'Lesões benignas da laringe (nódulos, pólipos, cistos)',
      'Escalas de avaliação perceptivo-auditiva (GRBASI, CAPE-V)',
      'Esquema de ressonância e trato vocal'
    ],
    sampleSheetId: 'pregas-vocais'
  },
  {
    id: 'mod-06',
    number: 'MÓDULO 06',
    title: 'Fluência',
    subtitle: 'Disfunções do fluxo da fala, gagueira, taquifemia e rupturas',
    iconName: 'FastForward',
    badge: 'Fluxo da Fala',
    topics: [
      'Disfluências típicas × disfluências gagas',
      'Fatores etiológicos e modelo multidimensional',
      'Critérios de diferenciação: Gagueira × Taquifemia',
      'Cálculo de porcentagem de descontinuidade da fala (%DG)',
      'Rupturas comuns e esforço articulatório associado'
    ],
    sampleSheetId: 'fluencia'
  },
  {
    id: 'mod-07',
    number: 'MÓDULO 07',
    title: 'Audiologia e Processamento Auditivo',
    subtitle: 'Audiometria, imitanciometria, curvas timpanométricas e via auditiva',
    iconName: 'Headphones',
    badge: 'Eletrofisiologia',
    topics: [
      'Via auditiva periférica e central',
      'Interpretação visual do audiograma e tipos de perda auditiva',
      'Curvas timpanométricas de Jerger (Tipos A, As, Ad, B, C)',
      'Processamento Auditivo Central (PAC): habilidades auditivas',
      'Emissões Otoacústicas (EOA) e BERA / PEATE em esquema'
    ],
    sampleSheetId: 'audicao'
  },
  {
    id: 'mod-08',
    number: 'MÓDULO 08',
    title: 'Deglutição e Disfagia',
    subtitle: 'Fases da deglutição, penetração, aspiração laringotraqueal e estases',
    iconName: 'Utensils',
    badge: 'Deglutição',
    topics: [
      'Fases da deglutição (antecipatória, oral, faríngea e esofágica)',
      'Proteção de vias aéreas e mecanismos de fechamento laríngeo',
      'Escala de Penetração e Aspiração (Rosenbek) em infográfico',
      'Sinais clínicos de disfagia orofaríngea',
      'Tabela de consistências alimentares (IDDSI simplificado)'
    ],
    sampleSheetId: 'degluticao'
  },
  {
    id: 'mod-09',
    number: 'MÓDULO 09',
    title: 'Fonoaudiologia Neurofuncional',
    subtitle: 'Afasias, disartrias, apraxias, pares cranianos e topografia neurológica',
    iconName: 'Brain',
    badge: 'Neurologia',
    topics: [
      '12 Pares de Nervos Cranianos aplicados à fonoaudiologia',
      'Quadro diferencial: Afasia × Apraxia de Fala × Disartria',
      'Classificação das Afasias (Broca, Wernicke, Condução, Global)',
      'Tipos de Disartria (Espástica, Flácida, Atáxica, Hipocinética)',
      'Áreas corticais de Brodmann ligadas à linguagem'
    ],
    sampleSheetId: 'cerebro'
  },
  {
    id: 'mod-10',
    number: 'MÓDULO 10',
    title: 'Fono de Bolso — Resumos para Consulta Rápida',
    subtitle: 'Fichas ultra-rápidas, valores de referência e tabelas de consulta de cabeceira',
    iconName: 'BookOpen',
    badge: 'Guia de Consulta',
    topics: [
      'Tabelas de valores de referência (TMF, f0 média por idade e sexo)',
      'Checklist rápido de observação clínica',
      'Siglas, termos médicos e abreviações frequentes',
      'Resumo de classificação dos fonemas consonantais',
      'Fluxogramas de conduta e encaminhamentos interdisciplinares'
    ],
    sampleSheetId: 'bolso'
  }
];

export const MATERIAL_SHEETS: MaterialSheet[] = [
  {
    id: 'laringe',
    title: 'Anatomia da Laringe e Esqueleto Cartilaginoso',
    category: 'Anatomia e Voz',
    description: 'Esquema completo com visualização anterior, posterior e sagital das cartilagens tireóidea, cricóidea, aritenóideas e epiglote.',
    badge: 'Módulo 01',
    tags: ['Cartilagens', 'Músculos Intrínsecos', 'Inervação'],
    color: '#0f3b50',
    imageUrl: 'https://i.postimg.cc/HsGHxmRR/Chat-GPT-Image-27-de-ago-de-2026-18-26-16-(5).png',
    aspect: 'portrait',
    details: {
      structures: ['Cartilagem Tireóidea', 'Cartilagem Cricóidea', 'Cartilagens Aritenóideas', 'Epiglote', 'Ligamento Vocal'],
      clinicalRelevance: 'Essencial para compreensão do mecanismo fonatório e avaliação funcional da fonação.',
      format: 'PDF Vetorial Alta Resolução (Imprimível em A4/A3)'
    }
  },
  {
    id: 'pregas-vocais',
    title: 'Pregas Vocais e Dinâmica Glótica',
    category: 'Voz e Fonação',
    description: 'Camadas histológicas da prega vocal (epitélio, lâmina própria e músculo vocal), tipos de fendas glóticas e fonação.',
    badge: 'Módulo 01 / 05',
    tags: ['Espaço de Reinke', 'Fendas Glóticas', 'Ciclo Vibratório'],
    color: '#0d9488',
    imageUrl: 'https://i.postimg.cc/7YvD64dW/Chat-GPT-Image-27-de-ago-de-2026-18-35-20-(10).png',
    aspect: 'portrait',
    details: {
      structures: ['Epitélio Estratificado', 'Lâmina Própria (Camadas Superficial, Intermediária e Profunda)', 'Músculo Tireoaritenóideo (Vocal)'],
      clinicalRelevance: 'Base para diagnóstico diferencial de lesões fonotraumáticas e acompanhamento de queixas vocais.',
      format: 'PDF Vetorial Alta Resolução'
    }
  },
  {
    id: 'audicao',
    title: 'Sistema Auditivo Periférico e Central',
    category: 'Audiologia',
    description: 'Divisão anatômica da orelha externa, média e interna com cadeia ossicular, cóclea e representação da via auditiva ascendente.',
    badge: 'Módulo 01 / 07',
    tags: ['Cóclea', 'Cadeia Ossicular', 'Nervo Auditivo VIII'],
    color: '#3b82f6',
    imageUrl: 'https://i.postimg.cc/15pSVT1M/Chat-GPT-Image-27-de-ago-de-2026-18-26-16-(6).png',
    aspect: 'landscape',
    details: {
      structures: ['Pavilhão e Meato', 'Membrana Timpânica', 'Martelo, Bigorna e Estribo', 'Órgão de Corti', 'Núcleo Coclear'],
      clinicalRelevance: 'Facilita a correlação entre achados timpanométricos, audiométricos e topodiagnóstico de perdas auditivas.',
      format: 'PDF Vetorial Alta Resolução'
    }
  },
  {
    id: 'orofacial',
    title: 'Musculatura Orofacial e Mímica',
    category: 'Motricidade Orofacial',
    description: 'Mapa detalhado dos músculos orbicular da boca, bucinador, zigomáticos, masseter e supra-hióideos aplicados à mastigação e fala.',
    badge: 'Módulo 01 / 04',
    tags: ['Mastigação', 'Mímica', 'Inervação V e VII'],
    color: '#6366f1',
    imageUrl: 'https://i.postimg.cc/kXr94CzZ/Chat-GPT-Image-27-de-ago-de-2026-18-35-19-(5).png',
    aspect: 'portrait',
    details: {
      structures: ['M. Orbicular da Boca', 'M. Bucinador', 'M. Masseter', 'M. Temporal', 'M. Pterigóideos'],
      clinicalRelevance: 'Direciona a avaliação de assimetrias faciais, alterações funcionais da mastigação e respiração oral.',
      format: 'PDF Vetorial Alta Resolução'
    }
  },
  {
    id: 'lingua',
    title: 'Língua: Estruturas, Músculos e Inervação',
    category: 'Anatomia e Articulação',
    description: 'Músculos intrínsecos e extrínsecos da língua (genioglosso, hioglosso, estiloglosso) e inervação motora (NC XII) e sensitiva/gustativa.',
    badge: 'Módulo 01 / 03',
    tags: ['Músculos Extrínsecos', 'Frênulo', 'Nervo Hipoglosso'],
    color: '#8b5cf6',
    imageUrl: 'https://i.postimg.cc/wTKHvzZr/Chat-GPT-Image-27-de-ago-de-2026-18-35-19-(6).png',
    aspect: 'portrait',
    details: {
      structures: ['M. Genioglosso', 'M. Hioglosso', 'M. Estiloglosso', 'Músculos Longitudinais e Transversos', 'Papilas Gustativas'],
      clinicalRelevance: 'Fundamental para avaliação de deglutição atípica, desvios fonéticos e avaliação do frênulo lingual.',
      format: 'PDF Vetorial Alta Resolução'
    }
  },
  {
    id: 'palato',
    title: 'Palato Duro × Palato Mole e Esfíncter Velofaríngeo',
    category: 'Anatomia e Ressonância',
    description: 'Comparativo estrutural e funcional do palato duro, véu palatino, músculos elevador e tensor do véu e fechamento velofaríngeo.',
    badge: 'Módulo 01 / 05',
    tags: ['Velofaringe', 'Ressonância', 'Hipernasalidade'],
    color: '#14b8a6',
    imageUrl: 'https://i.postimg.cc/J4wmn8vP/Chat-GPT-Image-27-de-ago-de-2026-18-35-20-(9).png',
    aspect: 'landscape',
    details: {
      structures: ['Processo Palatino da Maxila', 'Lâmina Horizontal do Palatino', 'M. Elevador do Véu Palatino', 'Úvula'],
      clinicalRelevance: 'Compreensão de disfunções velofaríngeas, fissuras labiopalatinas e avaliação de hipernasalidade na fala.',
      format: 'PDF Vetorial Alta Resolução'
    }
  },
  {
    id: 'cerebro',
    title: 'Áreas Cerebrais da Comunicação e Linguagem',
    category: 'Neurofuncional',
    description: 'Mapa das áreas de Broca (44/45), Wernicke (22), córtex auditivo primário, giro angular, fascículo arqueado e vias de processamento.',
    badge: 'Módulo 01 / 09',
    tags: ['Área de Broca', 'Área de Wernicke', 'Fascículo Arqueado'],
    color: '#0f766e',
    imageUrl: 'https://i.postimg.cc/9FG2wSHJ/Chat-GPT-Image-27-de-ago-de-2026-18-26-16-(7).png',
    aspect: 'portrait',
    details: {
      structures: ['Área de Broca (Frontal)', 'Área de Wernicke (Temporal)', 'Fascículo Arqueado', 'Giro Supramarginal e Angular'],
      clinicalRelevance: 'Topodiagnóstico neurológico para estudo de afasias motoras, sensoriais e condutivas após AVE ou TCE.',
      format: 'PDF Vetorial Alta Resolução'
    }
  },
  {
    id: 'respiratorio',
    title: 'Sistema Respiratório Aplicado à Fala',
    category: 'Fundamentos da Fala',
    description: 'Mecânica ventilatória, diafragma, intercostais, capacidades pulmonares e suporte aéreo para a produção da fonação contínua.',
    badge: 'Módulo 01',
    tags: ['Diafragma', 'Pressão Subglótica', 'Suporte Aéreo'],
    color: '#0284c7',
    imageUrl: 'https://i.postimg.cc/HsGHxmRR/Chat-GPT-Image-27-de-ago-de-2026-18-26-16-(5).png',
    aspect: 'landscape',
    details: {
      structures: ['Diafragma', 'Músculos Intercostais Externos/Internos', 'Traqueia e Brônquios', 'Volumes e Capacidades Pulmonares'],
      clinicalRelevance: 'Base para intervenção em incoordenação pneumofonoarticulatória e voz profissional.',
      format: 'PDF Vetorial Alta Resolução'
    }
  },
  {
    id: 'degluticao',
    title: 'Fases da Deglutição e Escala de Penetração',
    category: 'Deglutição e Disfagia',
    description: 'Sequência cronológica da fase oral preparatória, oral propriamente dita, faríngea e esofágica com pontos de proteção de via aérea.',
    badge: 'Módulo 08',
    tags: ['Fase Faríngea', 'Elevação Laríngea', 'IDDSI'],
    color: '#d97706',
    imageUrl: 'https://i.postimg.cc/GhkRTNnM/Chat-GPT-Image-27-de-ago-de-2026-18-26-16-(8).png',
    aspect: 'portrait',
    details: {
      structures: ['Base de Língua', 'Valécula Epiglótica', 'Seios Piriformes', 'Esfíncter Esofágico Superior'],
      clinicalRelevance: 'Raciocínio clínico imediato para detecção de broncoaspiração e manejo nutricional seguro.',
      format: 'PDF Vetorial Alta Resolução'
    }
  }
];

export const BENEFITS_DATA: BenefitItem[] = [
  {
    number: 1,
    title: 'APRENDA VISUALMENTE',
    description: 'Diagramas, anatomias e esquemas ajudam a visualizar conteúdos que seriam difíceis de compreender somente através de texto.',
    iconName: 'Eye'
  },
  {
    number: 2,
    title: 'REVISE MAIS RÁPIDO',
    description: 'Ideal para revisar um assunto antes de uma aula, prova, estágio ou atendimento clínico.',
    iconName: 'Zap'
  },
  {
    number: 3,
    title: 'ENCONTRE INFORMAÇÕES COM FACILIDADE',
    description: 'Cada material aborda um tema específico, facilitando consultas rápidas no dia a dia.',
    iconName: 'Search'
  },
  {
    number: 4,
    title: 'CONTEÚDOS ORGANIZADOS POR ÁREA',
    description: 'Linguagem, voz, audiologia, motricidade, fluência, deglutição e neurofuncional reunidos.',
    iconName: 'Layers'
  },
  {
    number: 5,
    title: 'ESTUDE DE ONDE QUISER',
    description: 'Acesse os PDFs pelo celular, computador ou tablet com total nitidez e compatibilidade.',
    iconName: 'Smartphone'
  },
  {
    number: 6,
    title: 'TENHA UMA BIBLIOTECA PARA CONSULTAR SEMPRE',
    description: 'Um material durável que acompanha sua evolução durante toda a graduação e vida profissional.',
    iconName: 'BookmarkCheck'
  }
];

export const BONUSES_DATA: BonusItem[] = [
  {
    id: 'bonus-01',
    number: 'BÔNUS 01',
    title: '30 Termos da Fono Descomplicados',
    subtitle: 'Glossário visual e terminológico',
    description: 'Um glossário visual para consultar conceitos e termos técnicos encontrados constantemente na Fonoaudiologia com definições claras e aplicações.',
    tag: 'Glossário Prático',
    highlights: [
      'Termos de audiologia, voz, linguagem e motricidade',
      'Definições diretas sem enrolação técnica excessiva',
      'Exemplos práticos de aplicação'
    ],
    badge: 'INCLUSO GRATUITAMENTE'
  },
  {
    id: 'bonus-02',
    number: 'BÔNUS 02',
    title: 'Atlas de Anatomias Essenciais da Fono',
    subtitle: '20 Pranchas Anatômicas de Alta Resolução',
    description: '20 pranchas visuais dedicadas com as estruturas anatômicas mais importantes da Fonoaudiologia esquematizadas em alta definição.',
    tag: '20 Pranchas Exclusivas',
    highlights: [
      'Laringe e Pregas Vocais',
      'Língua e Cavidade Oral',
      'Ouvido e Vias Auditivas',
      'Cérebro e Vias de Linguagem',
      'Músculos Orofaciais e da Mastigação'
    ],
    badge: 'INCLUSO GRATUITAMENTE'
  },
  {
    id: 'bonus-03',
    number: 'BÔNUS 03',
    title: '20 Comparativos Fonoaudiológicos',
    subtitle: 'Mapas de Diferenciação Clínica e Teórica',
    description: 'Materiais visuais desenhados especificamente para esclarecer e diferenciar conceitos comumente confundidos nas avaliações e provas.',
    tag: 'Quadro de Diferenciação',
    highlights: [
      'Fala × Linguagem',
      'Fonética × Fonologia',
      'Afasia × Apraxia',
      'Apraxia × Disartria',
      'Frequência × Intensidade',
      'Palato Duro × Palato Mole',
      'Deglutição Típica × Disfagia'
    ],
    badge: 'INCLUSO GRATUITAMENTE'
  }
];

export const TESTIMONIALS_DATA: TestimonialItem[] = [
  {
    id: 'test-01',
    author: 'Mariana Vasconcelos',
    role: 'Estudante do 7º período • UFMG',
    location: 'Belo Horizonte, MG',
    avatarUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=160&h=160&fit=crop&crop=faces&q=80',
    avatarInitials: 'MV',
    rating: 5,
    highlight: 'Salvou minha revisão do estágio',
    quote: 'Eu sempre tive muita dificuldade para memorizar a inervação dos músculos da laringe e os pares cranianos na matéria de neuroanatomia. As pranchas ilustradas salvaram minha revisão para a prova prática do estágio. Imprimi tudo em A4 e deixo no meu fichário de consulta.'
  },
  {
    id: 'test-02',
    author: 'Dra. Camila Ribeiro',
    role: 'Fonoaudióloga Clínica • Esp. em Voz (CRFa 2-19402)',
    location: 'São Paulo, SP',
    avatarUrl: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=160&h=160&fit=crop&crop=faces&q=80',
    avatarInitials: 'CR',
    rating: 5,
    highlight: 'Uso no iPad no consultório',
    quote: 'Uso muito no consultório no iPad para explicar aos pacientes como funcionam as pregas vocais e a dinâmica da fonação. A parte de fendas glóticas e anatomia da cartilagem é perfeita tanto para consulta rápida quanto para psicoeducação do paciente.'
  },
  {
    id: 'test-03',
    author: 'Lucas F. Mendes',
    role: 'Fonoaudiólogo • Motricidade Orofacial & Disfagia',
    location: 'Curitiba, PR',
    avatarUrl: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=160&h=160&fit=crop&crop=faces&q=80',
    avatarInitials: 'LM',
    rating: 5,
    highlight: 'Comparativos direto ao ponto',
    quote: 'O material de bolso e as tabelas comparativas (principalmente fala x linguagem e apraxia x disartria) valem cada centavo. Direto ao ponto, sem enrolação e com um design limpo e claro que facilita demais a rotina.'
  },
  {
    id: 'test-04',
    author: 'Beatriz Nogueira',
    role: 'Residente em Audiologia Clínica • USP',
    location: 'Ribeirão Preto, SP',
    avatarUrl: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=160&h=160&fit=crop&crop=faces&q=80',
    avatarInitials: 'BN',
    rating: 5,
    highlight: 'Esquema da via auditiva impecável',
    quote: 'O esquema da via auditiva e da cadeia ossicular é de longe o mais didático que já vi. Antes eu perdia horas tentando resumir capítulos gigantescos de livros pesados; agora consigo fazer uma revisão completa em 10 minutos antes de entrar no plantão.'
  },
  {
    id: 'test-05',
    author: 'Gabriel Siqueira',
    role: 'Estudante de Fonoaudiologia • 5º semestre',
    location: 'Rio de Janeiro, RJ',
    avatarUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=160&h=160&fit=crop&crop=faces&q=80',
    avatarInitials: 'GS',
    rating: 5,
    highlight: 'Qualidade vetorial surpreendente',
    quote: 'Comprei achando que seria só mais um PDF básico, mas me surpreendeu demais a qualidade vetorial. Dá pra dar zoom máximo no celular sem perder nitidez nenhuma. O bônus dos termos fonoaudiológicos me ajudou muito nos primeiros relatórios.'
  },
  {
    id: 'test-06',
    author: 'Juliana Paiva',
    role: 'Fonoaudióloga • Linguagem e Desenvolvimento Infantil',
    location: 'Porto Alegre, RS',
    avatarUrl: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=160&h=160&fit=crop&crop=faces&q=80',
    avatarInitials: 'JP',
    rating: 5,
    highlight: 'Organização impecável por módulos',
    quote: 'A organização em módulos por especialidade agiliza muito. Quando estou com dúvida rápida em marcos do desenvolvimento ou classificação fonética antes de atender, abro direto no tablet. Recomendo de olhos fechados!'
  }
];

export const FAQ_DATA: FaqItem[] = [
  {
    id: 'faq-01',
    question: 'Como receberei o Fono Visual?',
    answer: 'Após a confirmação do pagamento, você receberá acesso imediato aos materiais digitais disponibilizados na área de membros/plataforma de entrega através do seu e-mail cadastrado.'
  },
  {
    id: 'faq-02',
    question: 'Os materiais são físicos?',
    answer: 'Não. O Fono Visual é um produto 100% digital em formato PDF de alta resolução. Você poderá visualizar os materiais com total nitidez pelo celular, tablet ou computador e, se desejar, imprimir para uso pessoal e estudo.'
  },
  {
    id: 'faq-03',
    question: 'É indicado para estudantes?',
    answer: 'Sim! O conteúdo foi cuidadosamente estruturado e organizado para facilitar o estudo, o entendimento visual de anatomia e a revisão de matérias e estágios da graduação em Fonoaudiologia.'
  },
  {
    id: 'faq-04',
    question: 'Sou fonoaudiólogo formado. O material também serve para mim?',
    answer: 'Sim, com certeza. Além de estudantes, profissionais recém-formados e fonoaudiólogos atuantes utilizam os materiais como um recurso valioso de consulta rápida de cabeceira e revisão de conceitos no dia a dia clínico.'
  },
  {
    id: 'faq-05',
    question: 'O Fono Visual substitui livros, artigos ou protocolos clínicos?',
    answer: 'Não. O Fono Visual é um material educacional complementar de estudo, revisão e consulta rápida. Ele não substitui literatura científica clássica, avaliações individuais aprofundadas, protocolos formais de órgãos reguladores ou decisões clínicas soberanas.'
  }
];
