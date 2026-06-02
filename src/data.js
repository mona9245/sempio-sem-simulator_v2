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
      { kw: 'tteokbokki recipe', vol: 50000, comp: 'low', cpcKRW: 27 },
      { kw: 'how to make kimchi', vol: 50000, comp: 'low', cpcKRW: 28 },
      { kw: 'japchae recipe', vol: 50000, comp: 'low', cpcKRW: 23 },
      { kw: 'bulgogi recipe', vol: 50000, comp: 'low', cpcKRW: 22 },
      { kw: 'bibimbap recipe', vol: 50000, comp: 'low', cpcKRW: 30 },
      { kw: 'kimchi fried rice recipe', vol: 50000, comp: 'low', cpcKRW: 27 },
      { kw: 'gochujang recipe', vol: 5000, comp: 'low', cpcKRW: 31 },
      { kw: 'korean bbq recipe', vol: 5000, comp: 'low', cpcKRW: 35 },
      { kw: 'korean glass noodles recipe', vol: 5000, comp: 'low', cpcKRW: 27 },
      { kw: 'doenjang jjigae recipe', vol: 5000, comp: 'low', cpcKRW: null },
      { kw: 'jjajangmyeon recipe', vol: 5000, comp: 'low', cpcKRW: null },
      { kw: 'instant tteokbokki', vol: 5000, comp: 'high', cpcKRW: 186 },
      { kw: 'cup japchae', vol: null, comp: null, cpcKRW: null },
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
      { kw: 'korean bbq sauce', vol: 50000, comp: 'high', cpcKRW: 242 },
      { kw: 'korean sauces', vol: 5000, comp: 'high', cpcKRW: 348 },
      { kw: 'korean hot sauce', vol: 5000, comp: 'high', cpcKRW: 408 },
      { kw: 'korean condiments', vol: 5000, comp: 'low', cpcKRW: 61 },
      { kw: 'korean food recipe', vol: 5000, comp: 'low', cpcKRW: 44 },
      { kw: 'best gochujang brand', vol: 5000, comp: 'low', cpcKRW: 135 },
      { kw: 'korean soy sauce', vol: 5000, comp: 'low', cpcKRW: 151 },
      { kw: 'kimchi brand', vol: 5000, comp: 'high', cpcKRW: 392 },
      { kw: 'tteokbokki sauce', vol: 5000, comp: 'low', cpcKRW: 329 },
      { kw: 'best soy sauce brand', vol: 5000, comp: 'mid', cpcKRW: 107 },
      { kw: 'best kimchi brand usa', vol: null, comp: null, cpcKRW: null },
      { kw: 'korean pantry essentials', vol: 50, comp: 'low', cpcKRW: null },
      { kw: 'korean cooking ingredients', vol: 50, comp: 'low', cpcKRW: null },
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
      { kw: 'gluten free soy sauce', vol: 50000, comp: 'mid', cpcKRW: 156 },
      { kw: 'wheat free soy sauce', vol: 50000, comp: 'mid', cpcKRW: 156 },
      { kw: 'gluten free gochujang', vol: 5000, comp: 'high', cpcKRW: 376 },
      { kw: 'organic soy sauce', vol: 5000, comp: 'high', cpcKRW: 309 },
      { kw: 'vegan kimchi', vol: 5000, comp: 'high', cpcKRW: 384 },
      { kw: 'organic gochujang', vol: 500, comp: 'high', cpcKRW: 513 },
      { kw: 'vegan gochujang', vol: 500, comp: 'low', cpcKRW: 240 },
      { kw: 'non gmo soy sauce', vol: 500, comp: 'low', cpcKRW: 319 },
      { kw: 'halal soy sauce', vol: 500, comp: 'mid', cpcKRW: null },
      { kw: 'plant based umami sauce', vol: 500, comp: 'low', cpcKRW: null },
      { kw: 'allergen free soy sauce', vol: 50, comp: 'high', cpcKRW: null },
      { kw: 'vegan doenjang', vol: 50, comp: 'low', cpcKRW: null },
      { kw: 'clean label kimchi', vol: null, comp: null, cpcKRW: null },
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
      { kw: 'tamari sauce', vol: 50000, comp: 'high', cpcKRW: 23 },
      { kw: 'gochujang paste', vol: 50000, comp: 'high', cpcKRW: 75 },
      { kw: 'japchae noodles', vol: 50000, comp: 'mid', cpcKRW: 44 },
      { kw: 'miso substitute', vol: 5000, comp: 'low', cpcKRW: null },
      { kw: 'umami seasoning', vol: 5000, comp: 'high', cpcKRW: 171 },
      { kw: 'coconut aminos alternative', vol: 5000, comp: 'low', cpcKRW: 63 },
      { kw: 'soy sauce substitute gluten free', vol: 5000, comp: 'mid', cpcKRW: 37 },
      { kw: 'fish sauce substitute vegan', vol: 5000, comp: 'low', cpcKRW: 30 },
      { kw: 'liquid aminos alternative', vol: 50, comp: 'low', cpcKRW: null },
      { kw: 'umami sauce substitute', vol: 50, comp: 'mid', cpcKRW: null },
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
      { kw: 'yondu', vol: 50000, comp: 'low', cpcKRW: 583 },
      { kw: 'sempio', vol: 500, comp: 'low', cpcKRW: 500 },
      { kw: 'sempio soy sauce', vol: 500, comp: 'high', cpcKRW: 546 },
      { kw: 'sempio gochujang', vol: 500, comp: 'mid', cpcKRW: 314 },
      { kw: 'yondu umami sauce', vol: 50, comp: 'high', cpcKRW: 367 },
      { kw: 'sempio kimchi', vol: 50, comp: 'mid', cpcKRW: null },
      { kw: 'yondu organic', vol: null, comp: null, cpcKRW: null },
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
