import React from 'react';
import { MuscleGroup, MuscleRecoveryState } from '../types';
import { MUSCLE_LABELS } from '../data/exerciseCatalog';
import { Activity, Info } from 'lucide-react';

interface Props {
  recoveryData?: Record<MuscleGroup, MuscleRecoveryState> | null;
}

export const MuscleAnatomyCard: React.FC<Props> = ({ recoveryData }) => {
  const musclesList: MuscleGroup[] = [
    'chest', 'back', 'shoulders', 'biceps', 'triceps', 
    'quads', 'hamstrings', 'glutes', 'calves', 'core'
  ];

  const safeRecovery = recoveryData || ({} as Record<MuscleGroup, MuscleRecoveryState>);

  const getSafeState = (m: MuscleGroup): MuscleRecoveryState => {
    return safeRecovery[m] || {
      lastTrained: 0,
      totalSets: 0,
      status: 'ready',
      hoursElapsed: 999,
      colorHex: '#35d568',
      statusText: 'Pronto para treinar'
    };
  };

  // Músculos que estão em recuperação (menos de 72h)
  const activeMuscles = musclesList
    .map(m => {
      const state = getSafeState(m);
      return {
        muscle: m,
        ...state,
        color: state.status === 'recent' 
          ? 'red' 
          : state.status === 'recovering' 
            ? 'yellow' 
            : 'green',
        colorHex: state.status === 'recent' 
          ? '#ff4545' 
          : state.status === 'recovering' 
            ? '#ffd447' 
            : '#35d568',
        remainingHours: Math.max(0, 72 - state.hoursElapsed)
      };
    })
    .filter(item => item.lastTrained > 0 && item.remainingHours > 0)
    .sort((a, b) => b.lastTrained - a.lastTrained);

  return (
    <div className="bg-card border border-app rounded-2xl p-4 shadow-xl">
      {/* Header do Card */}
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2">
          <div className="p-1.5 rounded-lg bg-brand-subtle text-brand">
            <Activity className="w-5 h-5" />
          </div>
          <div>
            <h2 className="text-base font-bold text-gray-100">Recuperação muscular</h2>
            <p className="text-xs text-gray-400">Frente e costas • músculos segmentados</p>
          </div>
        </div>
      </div>

      {/* Ilustração Anatômica Original com Máscaras Segmentadas */}
      <div className="relative w-full aspect-[3/2] rounded-2xl overflow-hidden bg-white mb-3 shadow-md">
        {/* Imagem anatômica base oficial */}
        <img
          src="./anatomy-base-hq.png"
          alt="Mapa anatômico detalhado com vistas frontal e posterior"
          className="w-full h-full object-cover block select-none pointer-events-none"
        />

        {/* Camadas de máscara de cada músculo */}
        {musclesList.map(m => {
          const state = getSafeState(m);
          const colorHex = state.status === 'recent' 
            ? '#ff4545' 
            : state.status === 'recovering' 
              ? '#ffd447' 
              : '#35d568';

          return (
            <span
              key={m}
              className="absolute inset-0 pointer-events-none transition-all duration-300"
              style={{
                backgroundColor: colorHex,
                opacity: 0.88,
                WebkitMaskImage: `url('./anatomy-masks/${m}.png')`,
                maskImage: `url('./anatomy-masks/${m}.png')`,
                WebkitMaskSize: '100% 100%',
                maskSize: '100% 100%',
                WebkitMaskRepeat: 'no-repeat',
                maskRepeat: 'no-repeat'
              }}
            />
          );
        })}
      </div>

      {/* Lista de status e legenda idêntica ao original */}
      <div className="space-y-2 mt-3">
        {activeMuscles.length > 0 ? (
          <div className="grid grid-cols-2 gap-2 text-xs">
            {activeMuscles.slice(0, 6).map(item => (
              <div 
                key={item.muscle}
                className="flex items-center justify-between p-2 rounded-lg bg-card-subtle border border-app"
              >
                <div className="flex items-center gap-1.5 truncate">
                  <span 
                    className="w-2.5 h-2.5 rounded-full shrink-0" 
                    style={{ backgroundColor: item.colorHex }}
                  />
                  <span className="font-bold text-gray-200 truncate">{MUSCLE_LABELS[item.muscle]}</span>
                </div>
                <span className="text-[11px] text-gray-400 shrink-0">
                  {item.remainingHours}h restantes
                </span>
              </div>
            ))}
          </div>
        ) : (
          <div className="p-3 text-center bg-card-subtle rounded-xl border border-app flex items-center justify-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#35d568] shrink-0" />
            <span className="text-xs text-gray-200 font-semibold">
              Corpo recuperado • <span className="text-gray-400 font-normal">Todos os grupos em verde</span>
            </span>
          </div>
        )}

        {/* Linha de Legenda */}
        <div className="flex items-center justify-around pt-2 border-t border-app text-xs text-gray-400">
          <div className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-[#ff4545]" />
            <span>Recente</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-[#ffd447]" />
            <span>Recuperando</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-[#35d568]" />
            <span>Pronto</span>
          </div>
        </div>

        <p className="mt-2 text-[10px] text-gray-400 flex items-center gap-1">
          <Info className="w-3 h-3 text-gray-400 shrink-0" />
          Cada cor usa uma máscara exclusiva do músculo, sem invadir regiões vizinhas. Estimativa: 48–72h.
        </p>
      </div>
    </div>
  );
};
