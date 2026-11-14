export interface ThemeOption {
  id: string;
  name: string;
  colorHex: string;
  hoverHex: string;
  textHex: string;
  glow: string;
  borderBrand: string;
  subtle: string;
  // Cores de fundo e superfícies que eliminam o fundo verde fixo
  bgApp: string;
  bgCard: string;
  bgCardSubtle: string;
  bgElevated: string;
  bgHover: string;
  border: string;
}

export const THEMES: ThemeOption[] = [
  {
    id: 'green',
    name: 'Verde',
    colorHex: '#10b981',
    hoverHex: '#059669',
    textHex: '#000000',
    glow: 'rgba(16, 185, 129, 0.25)',
    borderBrand: 'rgba(16, 185, 129, 0.4)',
    subtle: 'rgba(16, 185, 129, 0.12)',
    bgApp: '#070d0b',
    bgCard: '#0d1714',
    bgCardSubtle: '#08100d',
    bgElevated: '#13221e',
    bgHover: '#1c322b',
    border: '#1b332b'
  },
  {
    id: 'blue',
    name: 'Azul',
    colorHex: '#3b82f6',
    hoverHex: '#2563eb',
    textHex: '#ffffff',
    glow: 'rgba(59, 130, 246, 0.25)',
    borderBrand: 'rgba(59, 130, 246, 0.4)',
    subtle: 'rgba(59, 130, 246, 0.12)',
    bgApp: '#060a12',
    bgCard: '#0b1220',
    bgCardSubtle: '#080d17',
    bgElevated: '#121e33',
    bgHover: '#182947',
    border: '#1a2b4a'
  },
  {
    id: 'cyan',
    name: 'Ciano',
    colorHex: '#06b6d4',
    hoverHex: '#0891b2',
    textHex: '#000000',
    glow: 'rgba(6, 182, 212, 0.25)',
    borderBrand: 'rgba(6, 182, 212, 0.4)',
    subtle: 'rgba(6, 182, 212, 0.12)',
    bgApp: '#050d12',
    bgCard: '#0a1720',
    bgCardSubtle: '#071017',
    bgElevated: '#102432',
    bgHover: '#173347',
    border: '#18364b'
  },
  {
    id: 'orange',
    name: 'Laranja',
    colorHex: '#f97316',
    hoverHex: '#ea580c',
    textHex: '#000000',
    glow: 'rgba(249, 115, 22, 0.25)',
    borderBrand: 'rgba(249, 115, 22, 0.4)',
    subtle: 'rgba(249, 115, 22, 0.12)',
    bgApp: '#0e0906',
    bgCard: '#17110c',
    bgCardSubtle: '#110c08',
    bgElevated: '#241a12',
    bgHover: '#332419',
    border: '#382619'
  },
  {
    id: 'purple',
    name: 'Roxo',
    colorHex: '#a855f7',
    hoverHex: '#9333ea',
    textHex: '#ffffff',
    glow: 'rgba(168, 85, 247, 0.25)',
    borderBrand: 'rgba(168, 85, 247, 0.4)',
    subtle: 'rgba(168, 85, 247, 0.12)',
    bgApp: '#0c0612',
    bgCard: '#160d20',
    bgCardSubtle: '#100918',
    bgElevated: '#221432',
    bgHover: '#301c47',
    border: '#351e4f'
  },
  {
    id: 'pink',
    name: 'Rosa',
    colorHex: '#ec4899',
    hoverHex: '#db2777',
    textHex: '#ffffff',
    glow: 'rgba(236, 72, 153, 0.25)',
    borderBrand: 'rgba(236, 72, 153, 0.4)',
    subtle: 'rgba(236, 72, 153, 0.12)',
    bgApp: '#12060e',
    bgCard: '#1e0d19',
    bgCardSubtle: '#160812',
    bgElevated: '#2e1427',
    bgHover: '#401b36',
    border: '#4a1e3f'
  },
  {
    id: 'red',
    name: 'Vermelho',
    colorHex: '#ef4444',
    hoverHex: '#dc2626',
    textHex: '#ffffff',
    glow: 'rgba(239, 68, 68, 0.25)',
    borderBrand: 'rgba(239, 68, 68, 0.4)',
    subtle: 'rgba(239, 68, 68, 0.12)',
    bgApp: '#120606',
    bgCard: '#1e0c0c',
    bgCardSubtle: '#160808',
    bgElevated: '#301313',
    bgHover: '#421a1a',
    border: '#471c1c'
  },
  {
    id: 'yellow',
    name: 'Amarelo',
    colorHex: '#eab308',
    hoverHex: '#ca8a04',
    textHex: '#000000',
    glow: 'rgba(234, 179, 8, 0.25)',
    borderBrand: 'rgba(234, 179, 8, 0.4)',
    subtle: 'rgba(234, 179, 8, 0.12)',
    bgApp: '#0f0e06',
    bgCard: '#19170b',
    bgCardSubtle: '#131107',
    bgElevated: '#262310',
    bgHover: '#363116',
    border: '#3b3518'
  },
  {
    id: 'white',
    name: 'Branco',
    colorHex: '#ffffff',
    hoverHex: '#e5e7eb',
    textHex: '#000000',
    glow: 'rgba(255, 255, 255, 0.25)',
    borderBrand: 'rgba(255, 255, 255, 0.4)',
    subtle: 'rgba(255, 255, 255, 0.12)',
    bgApp: '#09090b',
    bgCard: '#121215',
    bgCardSubtle: '#0e0e11',
    bgElevated: '#1c1c22',
    bgHover: '#282830',
    border: '#292934'
  },
  {
    id: 'black',
    name: 'Preto',
    colorHex: '#e5e7eb',
    hoverHex: '#f3f4f6',
    textHex: '#000000',
    glow: 'rgba(255, 255, 255, 0.15)',
    borderBrand: 'rgba(255, 255, 255, 0.35)',
    subtle: 'rgba(255, 255, 255, 0.08)',
    // True pitch black stealth: fundo totalmente preto sem nenhum tom de verde!
    bgApp: '#000000',
    bgCard: '#0c0c0e',
    bgCardSubtle: '#050506',
    bgElevated: '#18181b',
    bgHover: '#242428',
    border: '#26262a'
  }
];

export function applyTheme(themeId: string) {
  if (typeof document === 'undefined') return;
  const t = THEMES.find(item => item.id === themeId) || THEMES[0];
  const root = document.documentElement;

  // Atualiza cores de fundo e cartões em todo o app
  root.style.setProperty('--bg-app', t.bgApp);
  root.style.setProperty('--bg-card', t.bgCard);
  root.style.setProperty('--bg-card-subtle', t.bgCardSubtle);
  root.style.setProperty('--bg-elevated', t.bgElevated);
  root.style.setProperty('--bg-hover', t.bgHover);
  root.style.setProperty('--border-app', t.border);

  // Atualiza cores de destaque da marca
  root.style.setProperty('--brand-color', t.colorHex);
  root.style.setProperty('--brand-hover', t.hoverHex);
  root.style.setProperty('--brand-text', t.textHex);
  root.style.setProperty('--brand-glow', t.glow);
  root.style.setProperty('--brand-border', t.borderBrand);
  root.style.setProperty('--brand-subtle', t.subtle);

  // Atualiza a meta tag de cor da barra de status no iOS / Android
  const metaTheme = document.querySelector('meta[name="theme-color"]');
  if (metaTheme) {
    metaTheme.setAttribute('content', t.bgApp);
  }
}
