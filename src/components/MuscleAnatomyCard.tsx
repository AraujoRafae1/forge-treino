import React, { useState } from 'react';
import { MuscleGroup, MuscleRecoveryState } from '../types';
import { MUSCLE_LABELS } from '../data/exerciseCatalog';
import { Activity, Info, CheckCircle2, AlertCircle, Clock, X } from 'lucide-react';

interface Props {
  recoveryData?: Record<MuscleGroup, MuscleRecoveryState> | null;
}

interface MuscleSpot {
  muscle: MuscleGroup;
  view: 'front' | 'back';
  cx: number;
  cy: number;
  rx: number;
  ry: number;
}

// Mapeamento anatômico de alta precisão (viewBox 0 0 1536 1024)
const MUSCLE_SPOTS: MuscleSpot[] = [
  // FRENTE (Corpo da esquerda)
  { muscle: 'shoulders', view: 'front', cx: 397, cy: 206, rx: 34, ry: 42 },
  { muscle: 'shoulders', view: 'front', cx: 654, cy: 206, rx: 34, ry: 42 },
  { muscle: 'chest', view: 'front', cx: 475, cy: 240, rx: 50, ry: 40 },
  { muscle: 'chest', view: 'front', cx: 574, cy: 240, rx: 50, ry: 40 },
  { muscle: 'core', view: 'front', cx: 523, cy: 355, rx: 36, ry: 90 },
  { muscle: 'biceps', view: 'front', cx: 365, cy: 317, rx: 25, ry: 48 },
  { muscle: 'biceps', view: 'front', cx: 682, cy: 317, rx: 25, ry: 48 },
  { muscle: 'quads', view: 'front', cx: 445, cy: 612, rx: 46, ry: 110 },
  { muscle: 'quads', view: 'front', cx: 599, cy: 612, rx: 46, ry: 110 },
  { muscle: 'calves', view: 'front', cx: 426, cy: 805, rx: 30, ry: 78 },
  { muscle: 'calves', view: 'front', cx: 616, cy: 805, rx: 30, ry: 78 },

  // COSTAS (Corpo da direita)
  { muscle: 'shoulders', view: 'back', cx: 896, cy: 205, rx: 34, ry: 40 },
  { muscle: 'shoulders', view: 'back', cx: 1160, cy: 205, rx: 34, ry: 40 },
  { muscle: 'back', view: 'back', cx: 971, cy: 278, rx: 58, ry: 86 },
  { muscle: 'back', view: 'back', cx: 1082, cy: 278, rx: 58, ry: 86 },
  { muscle: 'triceps', view: 'back', cx: 865, cy: 315, rx: 23, ry: 49 },
  { muscle: 'triceps', view: 'back', cx: 1192, cy: 315, rx: 23, ry: 49 },
  { muscle: 'glutes', view: 'back', cx: 966, cy: 506, rx: 48, ry: 58 },
  { muscle: 'glutes', view: 'back', cx: 1087, cy: 506, rx: 48, ry: 58 },
  { muscle: 'hamstrings', view: 'back', cx: 958, cy: 641, rx: 44, ry: 110 },
  { muscle: 'hamstrings', view: 'back', cx: 1097, cy: 641, rx: 44, ry: 110 },
  { muscle: 'calves', view: 'back', cx: 941, cy: 802, rx: 31, ry: 78 },
  { muscle: 'calves', view: 'back', cx: 1116, cy: 802, rx: 31, ry: 78 },
];

export const MuscleAnatomyCard: React.FC<Props> = ({ recoveryData }) => {
  const [selectedMuscle, setSelectedMuscle] = useState<MuscleGroup | null>(null);
  const [imgFailed, setImgFailed] = useState(false);

  const musclesList: MuscleGroup[] = [
    'chest', 'back', 'shoulders', 'biceps', 'triceps', 
    'quads', 'hamstrings', 'glutes', 'calves', 'core'
  ];

  // Tratamento 100% defensivo contra nulo/indefinido
  const safeRecovery = recoveryData || ({} as Record<MuscleGroup, MuscleRecoveryState>);

  const getSafeState = (m: MuscleGroup): MuscleRecoveryState => {
    return safeRecovery[m] || {
      lastTrained: 0,
      totalSets: 0,
      status: 'ready',
      hoursElapsed: 999,
      colorHex: '#10b981',
      statusText: 'Pronto para treinar'
    };
  };

  const recentOrRecovering = musclesList
    .map(m => ({ muscle: m, ...getSafeState(m) }))
    .filter(m => m.lastTrained > 0)
    .sort((a, b) => b.lastTrained - a.lastTrained);

  const selectedState = selectedMuscle ? getSafeState(selectedMuscle) : null;

  return (
    <div className="bg-card border border-app rounded-2xl p-4 shadow-xl">
      {/* Header do Card */}
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2">
          <div className="p-1.5 rounded-lg bg-brand-subtle text-brand">
            <Activity className="w-5 h-5" />
          </div>
          <div>
            <h2 className="text-base font-bold text-gray-100">Recuperação Muscular</h2>
            <p className="text-xs text-gray-400">Toque no músculo para ver detalhes</p>
          </div>
        </div>
        <div className="flex items-center gap-2 text-[11px]">
          <span className="flex items-center gap-1 text-red-400">
            <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span> Recente
          </span>
          <span className="flex items-center gap-1 text-yellow-400">
            <span className="w-2 h-2 rounded-full bg-yellow-500"></span> 48-72h
          </span>
          <span className="flex items-center gap-1 text-emerald-400">
            <span className="w-2 h-2 rounded-full bg-emerald-500"></span> Pronto
          </span>
        </div>
      </div>

      {/* Mapa Anatômico SVG Interativo */}
      <div className="relative w-full aspect-[3/2] bg-[#070c0a] rounded-xl overflow-hidden border border-app mb-3 flex items-center justify-center">
        {/* Imagem de base com fallback resiliente */}
        {!imgFailed && (
          <img
            src="anatomy-base-hq.png"
            alt="Mapa Anatômico Frente e Costas"
            className="absolute inset-0 w-full h-full object-contain pointer-events-none select-none opacity-80"
            onError={() => {
              // Tenta caminho absoluto se relativo falhar, ou ativa fallback vetorial puro
              const img = new Image();
              img.src = '/anatomy-base-hq.png';
              img.onerror = () => setImgFailed(true);
            }}
          />
        )}

        {/* Camada Vetorial SVG com as marcações dos músculos */}
        <svg 
          className="absolute inset-0 w-full h-full select-none" 
          viewBox="0 0 1536 1024" 
          aria-label="Mapa Anatômico Interativo"
        >
          <defs>
            <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="8" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
          </defs>

          {/* Silhueta vetorial de apoio quando a imagem não carregar */}
          {imgFailed && (
            <g fill="#1f2937" opacity="0.6">
              {/* Cabeça Frente */}
              <circle cx="524" cy="115" r="45" />
              {/* Tronco Frente */}
              <path d="M430 180 L618 180 L590 480 L458 480 Z" />
              {/* Braços Frente */}
              <path d="M420 190 L340 380 L370 390 L440 220 Z" />
              <path d="M628 190 L708 380 L678 390 L608 220 Z" />
              {/* Pernas Frente */}
              <path d="M458 480 L420 890 L470 890 L514 540 Z" />
              <path d="M590 480 L628 890 L578 890 L534 540 Z" />

              {/* Cabeça Costas */}
              <circle cx="1024" cy="115" r="45" />
              {/* Tronco Costas */}
              <path d="M930 180 L1118 180 L1090 480 L958 480 Z" />
              {/* Braços Costas */}
              <path d="M920 190 L840 380 L870 390 L940 220 Z" />
              <path d="M1128 190 L1208 380 L1178 390 L1108 220 Z" />
              {/* Pernas Costas */}
              <path d="M958 480 L920 890 L970 890 L1014 540 Z" />
              <path d="M1090 480 L1128 890 L1078 890 L1034 540 Z" />
            </g>
          )}

          {/* Rótulos FRENTE e COSTAS */}
          <text x="524" y="990" textAnchor="middle" fill="#9ca3af" fontSize="28" fontWeight="700" letterSpacing="4">
            FRENTE
          </text>
          <text x="1024" y="990" textAnchor="middle" fill="#9ca3af" fontSize="28" fontWeight="700" letterSpacing="4">
            COSTAS
          </text>

          {/* Spots Musculares Clicáveis com Cores do Status */}
          {MUSCLE_SPOTS.map((spot, idx) => {
            const state = getSafeState(spot.muscle);
            const isSelected = selectedMuscle === spot.muscle;

            let fillColor = 'rgba(16, 185, 129, 0.45)'; // Verde
            let strokeColor = '#10b981';
            let strokeWidth = 2;

            if (state.lastTrained > 0) {
              if (state.status === 'recent') {
                fillColor = 'rgba(239, 68, 68, 0.75)'; // Vermelho
                strokeColor = '#ef4444';
                strokeWidth = isSelected ? 5 : 3;
              } else if (state.status === 'recovering') {
                fillColor = 'rgba(234, 179, 8, 0.75)'; // Amarelo
                strokeColor = '#eab308';
                strokeWidth = isSelected ? 5 : 3;
              }
            } else {
              // Não treinado recentemente
              fillColor = isSelected ? 'rgba(16, 185, 129, 0.65)' : 'rgba(16, 185, 129, 0.28)';
              strokeColor = '#10b981';
              strokeWidth = isSelected ? 4 : 2;
            }

            return (
              <g 
                key={`${spot.muscle}_${spot.view}_${idx}`}
                className="cursor-pointer transition-all duration-200"
                onClick={() => setSelectedMuscle(selectedMuscle === spot.muscle ? null : spot.muscle)}
              >
                <ellipse
                  cx={spot.cx}
                  cy={spot.cy}
                  rx={spot.rx}
                  ry={spot.ry}
                  fill={fillColor}
                  stroke={strokeColor}
                  strokeWidth={strokeWidth}
                  filter={state.status === 'recent' || isSelected ? 'url(#glow)' : undefined}
                  className="hover:opacity-95 active:scale-95 transition-all"
                />
              </g>
            );
          })}
        </svg>
      </div>

      {/* Detalhe do Músculo Selecionado (Interativo) */}
      {selectedMuscle && selectedState && (
        <div className="mb-3 p-3 rounded-xl bg-card-subtle border border-brand animate-in fade-in duration-150">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span 
                className="w-3 h-3 rounded-full shrink-0" 
                style={{ backgroundColor: selectedState.colorHex }}
              />
              <span className="font-bold text-sm text-white">
                {MUSCLE_LABELS[selectedMuscle]}
              </span>
              <span 
                className="text-[11px] px-2 py-0.5 rounded-full font-semibold"
                style={{ 
                  backgroundColor: `${selectedState.colorHex}22`,
                  color: selectedState.colorHex 
                }}
              >
                {selectedState.status === 'recent' 
                  ? 'Recente' 
                  : selectedState.status === 'recovering' 
                    ? 'Recuperando' 
                    : 'Pronto para treinar'}
              </span>
            </div>
            <button
              onClick={() => setSelectedMuscle(null)}
              className="p-1 rounded-lg text-gray-400 hover:text-white hover:bg-elevated"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <div className="mt-2 text-xs text-gray-300 flex items-center justify-between">
            {selectedState.lastTrained > 0 ? (
              <>
                <span className="flex items-center gap-1 text-gray-400">
                  <Clock className="w-3.5 h-3.5 text-brand" />
                  Último treino: {selectedState.hoursElapsed}h atrás
                </span>
                <span className="text-gray-400">
                  {selectedState.hoursElapsed < 72 
                    ? `Faltam ~${Math.max(1, 72 - selectedState.hoursElapsed)}h para descanso total`
                    : 'Totalmente descansado'}
                </span>
              </>
            ) : (
              <span className="text-emerald-400 flex items-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5" />
                100% descansado e pronto para o próximo treino!
              </span>
            )}
          </div>
        </div>
      )}

      {/* Lista de status dos músculos treinados */}
      {recentOrRecovering.length > 0 ? (
        <div className="grid grid-cols-2 gap-2 text-xs">
          {recentOrRecovering.slice(0, 6).map(item => (
            <div 
              key={item.muscle}
              onClick={() => setSelectedMuscle(selectedMuscle === item.muscle ? null : item.muscle)}
              className={`flex items-center justify-between p-2 rounded-lg bg-card-subtle border cursor-pointer transition-colors ${
                selectedMuscle === item.muscle ? 'border-brand' : 'border-app hover:border-gray-600'
              }`}
            >
              <div className="flex items-center gap-1.5 truncate">
                <span 
                  className="w-2 h-2 rounded-full shrink-0" 
                  style={{ backgroundColor: item.colorHex }}
                />
                <span className="font-semibold text-gray-200 truncate">{MUSCLE_LABELS[item.muscle]}</span>
              </div>
              <span className="text-[11px] text-gray-400 shrink-0">{item.hoursElapsed}h atrás</span>
            </div>
          ))}
        </div>
      ) : (
        <div className="p-3 text-center bg-card-subtle rounded-xl border border-app">
          <p className="text-xs text-brand font-medium">
            ✓ Todos os grupos musculares estão 100% recuperados e prontos para treinar!
          </p>
        </div>
      )}

      <p className="mt-2 text-[10px] text-gray-400 flex items-center gap-1">
        <Info className="w-3 h-3 text-gray-400 shrink-0" />
        Estimativa biológica de 48h a 72h por grupamento muscular.
      </p>
    </div>
  );
};
