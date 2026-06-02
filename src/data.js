export const FX = 1370;

export const SECTIONS = [
  {
    id: 'discovery',
    name: 'Discovery',
    sub: 'Recipe & Korean food',
    color: '#4ade80',
    dimColor: '#166534',
    bgColor: 'rgba(74,222,128,0.08)',
    keywords: [
      { kw: 'tteokbokki recipe', vol: 50000, comp: 'low', cpcKRW: 155 },
      { kw: 'how to make kimchi', vol: 50000, comp: 'low', cpcKRW: 51 },
      { kw: 'japchae recipe', vol: 50000, comp: 'low', cpcKRW: 47 },
      { kw: 'bulgogi recipe', vol: 50000, comp: 'low', cpcKRW: 154 },
      { kw: 'bibimbap recipe', vol: 50000, comp: 'low', cpcKRW: 144 },
      { kw: 'kimchi fried rice recipe', vol: 50000, comp: 'low', cpcKRW: 36 },
      { kw: 'gochujang recipe', vol: 5000, comp: 'low', cpcKRW: 243 },
      { kw: 'korean bbq recipe', vol: 5000, comp: 'low', cpcKRW: 496 },
      { kw: 'korean glass noodles recipe', vol: 5000, comp: 'low', cpcKRW: 68 },
      { kw: 'instant tteokbokki', vol: 5000, comp: 'high', cpcKRW: 704 },
    ],
  },
  {
    id: 'korean',
    name: 'Korean food',
    sub: 'Category & sauces',
    color: '#60a5fa',
    dimColor: '#1e3a5f',
    bgColor: 'rgba(96,165,250,0.08)',
    keywords: [
      { kw: 'korean bbq sauce', vol: 50000, comp: 'high', cpcKRW: 715 },
      { kw: 'korean sauces', vol: 5000, comp: 'high', cpcKRW: 1331 },
      { kw: 'korean hot sauce', vol: 5000, comp: 'high', cpcKRW: 1256 },
      { kw: 'korean condiments', vol: 5000, comp: 'low', cpcKRW: 674 },
      { kw: 'korean food recipe', vol: 5000, comp: 'low', cpcKRW: 178 },
      { kw: 'best gochujang brand', vol: 5000, comp: 'low', cpcKRW: 611 },
      { kw: 'korean soy sauce', vol: 5000, comp: 'low', cpcKRW: 726 },
      { kw: 'kimchi brand', vol: 5000, comp: 'high', cpcKRW: 1882 },
      { kw: 'tteokbokki sauce', vol: 5000, comp: 'low', cpcKRW: 811 },
      { kw: 'best soy sauce brand', vol: 5000, comp: 'mid', cpcKRW: 232 },
    ],
  },
  {
    id: 'feature',
    name: 'Feature-driven',
    sub: 'Allergen & clean label',
    color: '#fb923c',
    dimColor: '#7c2d12',
    bgColor: 'rgba(251,146,60,0.08)',
    keywords: [
      { kw: 'gluten free soy sauce', vol: 50000, comp: 'mid', cpcKRW: 725 },
      { kw: 'wheat free soy sauce', vol: 50000, comp: 'mid', cpcKRW: 725 },
      { kw: 'gluten free gochujang', vol: 5000, comp: 'high', cpcKRW: 793 },
      { kw: 'organic soy sauce', vol: 5000, comp: 'high', cpcKRW: 1440 },
      { kw: 'vegan kimchi', vol: 5000, comp: 'high', cpcKRW: 1126 },
      { kw: 'organic gochujang', vol: 500, comp: 'high', cpcKRW: 1095 },
      { kw: 'vegan gochujang', vol: 500, comp: 'low', cpcKRW: 451 },
      { kw: 'non gmo soy sauce', vol: 500, comp: 'low', cpcKRW: 968 },
    ],
  },
  {
    id: 'alternative',
    name: 'Alternative',
    sub: 'Switch intent',
    color: '#c084fc',
    dimColor: '#581c87',
    bgColor: 'rgba(192,132,252,0.08)',
    keywords: [
      { kw: 'tamari sauce', vol: 50000, comp: 'high', cpcKRW: 212 },
      { kw: 'gochujang paste', vol: 50000, comp: 'high', cpcKRW: 474 },
      { kw: 'japchae noodles', vol: 50000, comp: 'mid', cpcKRW: 523 },
      { kw: 'umami seasoning', vol: 5000, comp: 'high', cpcKRW: 619 },
      { kw: 'coconut aminos alternative', vol: 5000, comp: 'low', cpcKRW: 300 },
      { kw: 'soy sauce substitute gluten free', vol: 5000, comp: 'mid', cpcKRW: 465 },
      { kw: 'fish sauce substitute vegan', vol: 5000, comp: 'low', cpcKRW: 680 },
    ],
  },
  {
    id: 'brand',
    name: 'Brand defense',
    sub: 'Sempio & Yondu',
    color: '#94a3b8',
    dimColor: '#334155',
    bgColor: 'rgba(148,163,184,0.08)',
    keywords: [
      { kw: 'yondu', vol: 50000, comp: 'low', cpcKRW: 1663 },
      { kw: 'sempio', vol: 500, comp: 'low', cpcKRW: 693 },
      { kw: 'sempio soy sauce', vol: 500, comp: 'high', cpcKRW: 1017 },
      { kw: 'sempio gochujang', vol: 500, comp: 'mid', cpcKRW: 758 },
      { kw: 'yondu umami sauce', vol: 50, comp: 'high', cpcKRW: 973 },
    ],
  },
];

export function estimateBudgetUSD(kw) {
  if (!kw.vol || !kw.cpcKRW) return null;
  const cpcUSD = kw.cpcKRW / FX;
  return Math.round(kw.vol * 0.02 * cpcUSD);
}

export function estimateImpression(kw) {
  return kw.vol ? Math.round(kw.vol * 0.8) : 0;
}

export function totalMaxBudget() {
  return SECTIONS.flatMap(s => s.keywords)
    .reduce((sum, kw) => sum + (estimateBudgetUSD(kw) || 0), 0);
}
