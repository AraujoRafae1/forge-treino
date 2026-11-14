import React, { useState } from 'react';
import { MuscleGroup, MuscleRecoveryState } from '../types';
import { MUSCLE_LABELS } from '../data/exerciseCatalog';
import { Activity, Info } from 'lucide-react';

interface Props {
  recoveryData: Record<MuscleGroup, MuscleRecoveryState>;
}

export const MuscleAnatomyCard: React.FC<Props> = ({ recoveryData }) => {
  const [selectedMuscle, setSelectedMuscle] = useState<MuscleGroup | null>(null);

  const musclesList: MuscleGroup[] = [
    'chest', 'back', 'shoulders', 'biceps', 'triceps', 
    'quads', 'hamstrings', 'glutes', 'calves', 'core'
  ];

  const recentOrRecovering = musclesList
    .map(m => ({ muscle: m, ...recoveryData[m] }))
    .filter(m => m.lastTrained > 0)
    .sort((a, b) => b.lastTrained - a.lastTrained);

  return (
    <div className="bg-card border border-app rounded-2xl p-4 shadow-xl">
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2">
          <div className="p-1.5 rounded-lg bg-brand-subtle text-brand">
            <Activity className="w-5 h-5" />
          </div>
          <div>
            <h2 className="text-base font-bold text-gray-100">Recuperação Muscular</h2>
            <p className="text-xs text-gray-400">Frente e costas • Atualização por séries</p>
          </div>
        </div>
        <div className="flex items-center gap-2 text-[11px]">
          <span className="flex items-center gap-1 text-red-400">
            <span className="w-2 h-2 rounded-full bg-red-500"></span> Recente
          </span>
          <span className="flex items-center gap-1 text-yellow-400">
            <span className="w-2 h-2 rounded-full bg-yellow-500"></span> 48-72h
          </span>
          <span className="flex items-center gap-1 text-emerald-400">
            <span className="w-2 h-2 rounded-full bg-emerald-500"></span> Pronto
          </span>
        </div>
      </div>

      {/* Mapa Anatômico */}
      <div className="relative w-full aspect-[3/2] bg-card-subtle rounded-xl overflow-hidden border border-app mb-3">
        {/* Imagem base com frente e costas */}
        <img
          src="/anatomy-base-hq.png"
          alt="Mapa Anatômico Frente e Costas"
          className="w-full h-full object-contain pointer-events-none select-none opacity-85"
        />

        {/* Camadas coloridas de máscara muscular */}
        {musclesList.map(m => {
          const state = recoveryData[m];
          const isTrained = state.lastTrained > 0;
          if (!isTrained) return null;

          const maskColor = state.status === 'recent' 
            ? 'rgba(239, 68, 68, 0.75)'   // Vermelho
            : state.status === 'recovering' 
              ? 'rgba(234, 179, 8, 0.75)'  // Amarelo
              : 'rgba(16, 185, 129, 0.55)'; // Verde

          return (
            <div
              key={m}
              className="muscle-mask-layer"
              style={{
                backgroundColor: maskColor,
                WebkitMaskImage: `url('/anatomy-masks/${m}.png')`,
                maskImage: `url('/anatomy-masks/${m}.png')`
              }}
            />
          );
        })}
      </div>

      {/* Lista de status dos músculos treinados */}
      {recentOrRecovering.length > 0 ? (
        <div className="grid grid-cols-2 gap-2 text-xs">
          {recentOrRecovering.slice(0, 6).map(item => (
            <div 
              key={item.muscle}
              className="flex items-center justify-between p-2 rounded-lg bg-card-subtle border border-app"
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
        Estimativa biológica de 48h a 72h por grupamento. O descanso real pode variar com sono e alimentação.
      </p>
    </div>
  );
};
