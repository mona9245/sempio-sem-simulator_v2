export const FX = 1370;

// cpcKRW = (페이지 상단 입찰가 최저 + 최고) / 2 평균값
export const SECTIONS = [
  {
    id: 'discovery',
    name: 'Discovery',
    sub: 'Recipe & Korean food',
    color: '#4ade80',
    dimColor: '#166534',
    bgColor: 'rgba(74,222,128,0.08)',
    keywords: [
      { kw: 'tteokbokki recipe',         vol: 50000, comp: 'low',  cpcKRW: Math.round((27+283)/2) },
      { kw: 'how to make kimchi',         vol: 50000, comp: 'low',  cpcKRW: Math.round((28+73)/2) },
      { kw: 'japchae recipe',             vol: 50000, comp: 'low',  cpcKRW: Math.round((23+70)/2) },
      { kw: 'bulgogi recipe',             vol: 50000, comp: 'low',  cpcKRW: Math.round((22+285)/2) },
      { kw: 'bibimbap recipe',            vol: 50000, comp: 'low',  cpcKRW: Math.round((30+257)/2) },
      { kw: 'kimchi fried rice recipe',   vol: 50000, comp: 'low',  cpcKRW: Math.round((27+45)/2) },
      { kw: 'gochujang recipe',           vol: 5000,  comp: 'low',  cpcKRW: Math.round((31+454)/2) },
      { kw: 'korean bbq recipe',          vol: 5000,  comp: 'low',  cpcKRW: Math.round((35+957)/2) },
      { kw: 'korean glass noodles recipe',vol: 5000,  comp: 'low',  cpcKRW: Math.round((27+109)/2) },
      { kw: 'instant tteokbokki',         vol: 5000,  comp: 'high', cpcKRW: Math.round((186+1221)/2) },
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
      { kw: 'korean bbq sauce',      vol: 50000, comp: 'high', cpcKRW: Math.round((242+1187)/2) },
      { kw: 'korean sauces',         vol: 5000,  comp: 'high', cpcKRW: Math.round((348+2314)/2) },
      { kw: 'korean hot sauce',      vol: 5000,  comp: 'high', cpcKRW: Math.round((408+2103)/2) },
      { kw: 'korean condiments',     vol: 5000,  comp: 'low',  cpcKRW: Math.round((61+1286)/2) },
      { kw: 'korean food recipe',    vol: 5000,  comp: 'low',  cpcKRW: Math.round((44+311)/2) },
      { kw: 'best gochujang brand',  vol: 5000,  comp: 'low',  cpcKRW: Math.round((135+1087)/2) },
      { kw: 'korean soy sauce',      vol: 5000,  comp: 'low',  cpcKRW: Math.round((151+1301)/2) },
      { kw: 'kimchi brand',          vol: 5000,  comp: 'high', cpcKRW: Math.round((392+3372)/2) },
      { kw: 'tteokbokki sauce',      vol: 5000,  comp: 'low',  cpcKRW: Math.round((329+1292)/2) },
      { kw: 'best soy sauce brand',  vol: 5000,  comp: 'mid',  cpcKRW: Math.round((107+357)/2) },
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
      { kw: 'gluten free soy sauce',   vol: 50000, comp: 'mid',  cpcKRW: Math.round((156+1293)/2) },
      { kw: 'wheat free soy sauce',    vol: 50000, comp: 'mid',  cpcKRW: Math.round((156+1293)/2) },
      { kw: 'gluten free gochujang',   vol: 5000,  comp: 'high', cpcKRW: Math.round((376+1210)/2) },
      { kw: 'organic soy sauce',       vol: 5000,  comp: 'high', cpcKRW: Math.round((309+2571)/2) },
      { kw: 'vegan kimchi',            vol: 5000,  comp: 'high', cpcKRW: Math.round((384+1867)/2) },
      { kw: 'organic gochujang',       vol: 500,   comp: 'high', cpcKRW: Math.round((513+1676)/2) },
      { kw: 'vegan gochujang',         vol: 500,   comp: 'low',  cpcKRW: Math.round((240+661)/2) },
      { kw: 'non gmo soy sauce',       vol: 500,   comp: 'low',  cpcKRW: Math.round((319+1617)/2) },
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
      { kw: 'tamari sauce',                  vol: 50000, comp: 'high', cpcKRW: Math.round((23+401)/2) },
      { kw: 'gochujang paste',               vol: 50000, comp: 'high', cpcKRW: Math.round((75+873)/2) },
      { kw: 'japchae noodles',               vol: 50000, comp: 'mid',  cpcKRW: Math.round((44+1002)/2) },
      { kw: 'umami seasoning',               vol: 5000,  comp: 'high', cpcKRW: Math.round((171+1066)/2) },
      { kw: 'coconut aminos alternative',    vol: 5000,  comp: 'low',  cpcKRW: Math.round((63+536)/2) },
      { kw: 'soy sauce substitute gluten free', vol: 5000, comp: 'mid', cpcKRW: Math.round((37+893)/2) },
      { kw: 'fish sauce substitute vegan',   vol: 5000,  comp: 'low',  cpcKRW: Math.round((30+1330)/2) },
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
      { kw: 'yondu',           vol: 50000, comp: 'low',  cpcKRW: Math.round((583+2742)/2) },
      { kw: 'sempio',          vol: 500,   comp: 'low',  cpcKRW: Math.round((500+886)/2) },
      { kw: 'sempio soy sauce',vol: 500,   comp: 'high', cpcKRW: Math.round((546+1488)/2) },
      { kw: 'sempio gochujang',vol: 500,   comp: 'mid',  cpcKRW: Math.round((314+1202)/2) },
      { kw: 'yondu umami sauce',vol: 50,   comp: 'high', cpcKRW: Math.round((367+1578)/2) },
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
