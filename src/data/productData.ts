export interface KitPlan {
  id: string;
  title: string;
  subtitle: string;
  months: number;
  bottles: number;
  capsules: number;
  imageUrl: string;
  originalPrice: number;
  price: number;
  priceFormatted: string;
  installmentValueFormatted: string;
  dailyCostFormatted: string;
  savingsFormatted: string;
  savingsPercent: number;
  purchaseUrl: string;
  isPopular?: boolean;
  stockMessage?: string;
  description: string;
}

export interface Ingredient {
  id: string;
  name: string;
  dosage: string;
  category: 'circulacao' | 'controle' | 'energia' | 'libido';
  categoryLabel: string;
  description: string;
  mechanism: string;
}

export interface BenefitItem {
  id: string;
  icon: string;
  title: string;
  description: string;
  metric: string;
}

export interface Testimonial {
  id: string;
  name: string;
  age: number;
  location: string;
  rating: number;
  kitUsed: string;
  quote: string;
  verified: boolean;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category: string;
}

export const HERO_CHECKLIST = [
  'EREÇÕES FEITO ROCHA',
  'MAIS DISPOSIÇÃO NO DIA A DIA',
  'TENHA CONTROLE TOTAL',
  'DEIXE SUA PARCEIRA LOUCA DE TESÃO',
  'DURE MUITO MAIS NA HORA "H"',
];

export const BENEFITS: BenefitItem[] = [
  {
    id: 'nervoso',
    icon: '🧠',
    title: 'Ação no sistema nervoso',
    description: 'Mais controle e foco para prolongar o prazer, reduzindo a hiperexcitabilidade e a ansiedade de desempenho.',
    metric: 'Controle Neuromuscular',
  },
  {
    id: 'circulacao',
    icon: '❤️',
    title: 'Melhora da circulação',
    description: 'Ereções mais firmes e duradouras através de vasodilatação periférica otimizada e fluxo sanguíneo contínuo.',
    metric: 'Fluxo Sanguíneo Intenso',
  },
  {
    id: 'resistencia',
    icon: '💪',
    title: 'Mais resistência física',
    description: 'Energia e vigor físico para aproveitar ao máximo cada momento sem fadiga precoce.',
    metric: 'Vigor & Disposição',
  },
  {
    id: 'natural',
    icon: '🌿',
    title: 'Fórmula natural e segura',
    description: 'Ingredientes selecionados em sinergia para sua confiança, saúde da próstata e bem-estar diário.',
    metric: '100% Seguro e Discreto',
  },
];

export const INGREDIENTS: Ingredient[] = [
  {
    id: 'tadalafila',
    name: 'Tadalafila (10mg)',
    dosage: '10mg por dose',
    category: 'circulacao',
    categoryLabel: 'Vasodilatação & Rigidez',
    description: 'Potente vasodilatador que melhora o fluxo sanguíneo, garantindo ereções mais firmes e duradouras.',
    mechanism: 'Atua na inibição da PDE5, promovendo relaxamento muscular liso e influxo sanguíneo nos corpos cavernosos por até 36 horas.',
  },
  {
    id: 'long-jack',
    name: 'Long Jack',
    dosage: 'Extrato Concentrado',
    category: 'libido',
    categoryLabel: 'Testosterona & Vigor',
    description: 'Estimula a produção natural de testosterona, aumentando a libido e o desempenho físico.',
    mechanism: 'Raiz asiática (Eurycoma longifolia) que reduz o SHBG e libera testosterona biodisponível para força e apetite sexual.',
  },
  {
    id: 'saw-palmetto',
    name: 'Saw Palmetto',
    dosage: 'Extrato Padronizado',
    category: 'controle',
    categoryLabel: 'Saúde Prostática & Controle',
    description: 'Auxilia na saúde da próstata e no equilíbrio hormonal, contribuindo para maior controle.',
    mechanism: 'Equilibra a conversão de DHT e protege o trato urogenital masculino, essencial para a sustentação ejaculatória.',
  },
  {
    id: 'marapuama',
    name: 'Marapuama',
    dosage: 'Ativo Amazônico',
    category: 'energia',
    categoryLabel: 'Estímulo & Resistência',
    description: 'Planta afrodisíaca que atua no sistema nervoso, promovendo maior resistência e desejo sexual.',
    mechanism: 'Adaptógeno neuromodulador tradicionalmente utilizado para combater a astenia sexual e elevar a resposta aos estímulos.',
  },
  {
    id: 'valeriana',
    name: 'Valeriana',
    dosage: 'Ácidos Valerênicos',
    category: 'controle',
    categoryLabel: 'Redução de Ansiedade',
    description: 'Calmante natural que reduz a ansiedade, ajudando no controle da ejaculação.',
    mechanism: 'Modula os receptores GABA no sistema nervoso central, neutralizando a tensão psicológica que dispara o reflexo precoce.',
  },
  {
    id: 'damiana',
    name: 'Damiana',
    dosage: 'Turnera diffusa',
    category: 'libido',
    categoryLabel: 'Prazer & Sensibilidade',
    description: 'Melhora a sensibilidade e o prazer sexual com seus efeitos afrodisíacos e estimulantes.',
    mechanism: 'Oxigena a região pélvica e intensifica a percepção de prazer sem acelerar o limiar ejaculatório.',
  },
  {
    id: 'ginseng',
    name: 'Ginseng',
    dosage: 'Ginsenosídeos Ativos',
    category: 'energia',
    categoryLabel: 'Energia & Óxido Nítrico',
    description: 'Aumenta a energia, melhora a circulação e estimula a libido, reduzindo o estresse e a fadiga.',
    mechanism: 'Potencializa a síntese endotelial de óxido nítrico (NO) e eleva a capacidade cardiorrespiratória durante a intimidade.',
  },
];

export const KIT_PLANS: KitPlan[] = [
  {
    id: 'kit-1',
    title: 'Tratamento 1 Mês',
    subtitle: '1 Frasco · Ciclo Inicial',
    months: 1,
    bottles: 1,
    capsules: 30,
    imageUrl: '/assets/aistudio/Erectus-Retard-mockup-premium-final_a23fcaae.webp',
    originalPrice: 299.9,
    price: 249.9,
    priceFormatted: 'R$ 249,90',
    installmentValueFormatted: '12x de R$ 25,09',
    dailyCostFormatted: 'R$ 8,33 por dia',
    savingsFormatted: 'Economize R$ 50,00',
    savingsPercent: 17,
    purchaseUrl: 'https://ev.braip.com/checkout/plagyn2m/che16g1v',
    description: 'Kit inicial para experimentar os primeiros benefícios de controle e firmeza.',
  },
  {
    id: 'kit-2',
    title: 'Tratamento 2 Meses',
    subtitle: '2 Frascos · Ciclo Médio',
    months: 2,
    bottles: 2,
    capsules: 60,
    imageUrl: '/assets/aistudio/Erectus-Retard-mockup-premium-final_a23fcaae.webp',
    originalPrice: 499.8,
    price: 379.9,
    priceFormatted: 'R$ 379,90',
    installmentValueFormatted: '12x de R$ 38,14',
    dailyCostFormatted: 'R$ 6,33 por dia',
    savingsFormatted: 'Economize R$ 119,90',
    savingsPercent: 24,
    purchaseUrl: 'https://ev.braip.com/checkout/pla2qdyz/che16g1v',
    description: 'Tratamento intermediário para consolidação do equilíbrio nervoso e vascular.',
  },
  {
    id: 'kit-3',
    title: 'Tratamento 3 Meses',
    subtitle: '3 Frascos · Recomendado',
    months: 3,
    bottles: 3,
    capsules: 90,
    imageUrl: '/assets/aistudio/Erectus-Retard-mockup-premium-final_a23fcaae.webp',
    originalPrice: 749.7,
    price: 529.9,
    priceFormatted: 'R$ 529,90',
    installmentValueFormatted: '12x de R$ 53,20',
    dailyCostFormatted: 'R$ 5,88 por dia',
    savingsFormatted: 'Economize R$ 219,80',
    savingsPercent: 29,
    purchaseUrl: 'https://ev.braip.com/checkout/plaxq8gg/che16g1v',
    stockMessage: '🔥 Poucas unidades!',
    description: 'Ciclo recomendado para reeducação completa do tempo de resposta e potência máxima.',
  },
  {
    id: 'kit-6',
    title: 'Tratamento 6 Meses',
    subtitle: '6 Frascos · Ciclo Completo',
    months: 6,
    bottles: 6,
    capsules: 180,
    imageUrl: '/assets/aistudio/Erectus-Retard-mockup-premium-final_a23fcaae.webp',
    originalPrice: 1499.4,
    price: 699.9,
    priceFormatted: 'R$ 699,90',
    installmentValueFormatted: '12x de R$ 70,27',
    dailyCostFormatted: 'R$ 3,88 por dia',
    savingsFormatted: 'Economize R$ 799,50',
    savingsPercent: 53,
    purchaseUrl: 'https://ev.braip.com/checkout/plaxq8gg/che16g1v',
    isPopular: true,
    stockMessage: '🔥 Estoque quase no fim!',
    description: 'Tratamento completo com o maior desconto por cápsula para resultados definitivos e duradouros.',
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'joao',
    name: 'João S.',
    age: 42,
    location: 'São Paulo, SP',
    rating: 5,
    kitUsed: 'Tratamento 3 Meses',
    quote: 'Eu estava cético, mas o Erectus Retard realmente mudou minha vida. Tenho muito mais controle e minha confiança disparou. Minha parceira nunca esteve tão feliz.',
    verified: true,
  },
  {
    id: 'carlos',
    name: 'Carlos M.',
    age: 38,
    location: 'Rio de Janeiro, RJ',
    rating: 5,
    kitUsed: 'Tratamento 6 Meses',
    quote: 'Chega de ansiedade e frustração. Esse suplemento me deu a resistência que eu precisava. As noites se tornaram muito mais longas e prazerosas.',
    verified: true,
  },
  {
    id: 'ricardo',
    name: 'Ricardo P.',
    age: 49,
    location: 'Belo Horizonte, MG',
    rating: 5,
    kitUsed: 'Tratamento 3 Meses',
    quote: 'Fórmula discreta e eficaz. Os resultados apareceram rápido e de forma natural. Recomendo para qualquer homem que queira melhorar seu desempenho.',
    verified: true,
  },
];

export const FAQ_ITEMS: FaqItem[] = [
  {
    id: 'como-usar',
    category: 'Uso e Dosagem',
    question: 'Como devo usar o Erectus Retard?',
    answer: 'Recomendamos tomar uma cápsula por dia, de preferência com uma refeição. Para melhores resultados, mantenha o uso contínuo e siga as instruções da embalagem.',
  },
  {
    id: 'efeitos-colaterais',
    category: 'Segurança',
    question: 'Existem efeitos colaterais?',
    answer: 'Erectus Retard é formulado com ingredientes naturais e é seguro para a maioria dos homens. No entanto, se você tiver alguma condição médica preexistente, recomendamos consultar seu médico antes de usar.',
  },
  {
    id: 'tempo-resultados',
    category: 'Resultados',
    question: 'Em quanto tempo verei os resultados?',
    answer: 'Os resultados podem variar de pessoa para pessoa. Muitos usuários relatam sentir os primeiros benefícios já nas primeiras semanas de uso contínuo, com resultados mais significativos ao longo do tempo.',
  },
  {
    id: 'embalagem-discreta',
    category: 'Entrega e Sigilo',
    question: 'A embalagem e a entrega são discretas?',
    answer: 'Sim. Prezamos pela sua privacidade. O produto é enviado em uma embalagem neutra, sem qualquer identificação do conteúdo, garantindo total discrição.',
  },
  {
    id: 'compra-segura',
    category: 'Pagamento',
    question: 'Minha compra é segura neste site?',
    answer: 'Com certeza. Nosso site utiliza tecnologia de criptografia de ponta (SSL) para proteger todos os seus dados. Sua compra é 100% segura e confidencial.',
  },
];

export const WHATSAPP_CONTACTS = [
  {
    label: '71 98382-1218',
    phone: '5571983821218',
    url: 'https://wa.me/557198382-1218?text=Ol%C3%A1%2C%20gostaria%20de%20saber%20mais%20sobre%20o%20Erectus%20Retard',
  },
  {
    label: '71 99117-1830',
    phone: '5571991171830',
    url: 'https://wa.me/557199117-1830?text=Ol%C3%A1%2C%20gostaria%20de%20saber%20mais%20sobre%20o%20Erectus%20Retard',
  },
  {
    label: '71 99954-5085',
    phone: '5571999545085',
    url: 'https://wa.me/557199954-5085?text=Ol%C3%A1%2C%20gostaria%20de%20saber%20mais%20sobre%20o%20Erectus%20Retard',
  },
];

export interface SimulationInput {
  goal: 'controle' | 'firmeza' | 'ambos';
  durationLevel: 'iniciante' | 'intermediario' | 'intenso';
}

export function recommendKitPlan(input: SimulationInput, plans: KitPlan[] = KIT_PLANS): KitPlan {
  if (input.durationLevel === 'intenso' || input.goal === 'ambos') {
    return plans.find((p) => p.months === 6) || plans[plans.length - 1];
  }
  if (input.durationLevel === 'intermediario' || input.goal === 'controle') {
    return plans.find((p) => p.months === 3) || plans[2];
  }
  return plans.find((p) => p.months === 2) || plans[1];
}

export function filterIngredientsByCategory(
  category: 'todos' | Ingredient['category'],
  items: Ingredient[] = INGREDIENTS
): Ingredient[] {
  if (category === 'todos') return items;
  return items.filter((item) => item.category === category);
}

export function calculateTimeRemaining(endTimeMs: number, nowMs: number): {
  hours: string;
  minutes: string;
  seconds: string;
  expired: boolean;
} {
  const diff = endTimeMs - nowMs;
  if (diff <= 0) {
    return { hours: '00', minutes: '00', seconds: '00', expired: true };
  }
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / 1000 / 60) % 60);
  const seconds = Math.floor((diff / 1000) % 60);
  return {
    hours: String(hours).padStart(2, '0'),
    minutes: String(minutes).padStart(2, '0'),
    seconds: String(seconds).padStart(2, '0'),
    expired: false,
  };
}
