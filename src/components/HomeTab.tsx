import React, { useState } from 'react';
import { 
  ActiveWorkoutSession, 
  MuscleGroup, 
  MuscleRecoveryState, 
  WorkoutPlanRaw 
} from '../types';
import { MuscleAnatomyCard } from './MuscleAnatomyCard';
import { EXERCISE_CATALOG } from '../data/exerciseCatalog';
import { getWorkoutHistory } from '../utils/storage';
import { 
  Play, 
  Dumbbell, 
  Clock, 
  X,
  Video,
  Trash2
} from 'lucide-react';

interface Props {
  plan: WorkoutPlanRaw;
  activeWorkout: ActiveWorkoutSession | null;
  recoveryData: Record<MuscleGroup, MuscleRecoveryState>;
  onStartWorkout: (workoutId: string) => void;
  onResumeWorkout: () => void;
  onDiscardWorkout: () => void;
  onOpenPlans: () => void;
  standardRestSeconds: number;
}

export const HomeTab: React.FC<Props> = ({
  plan,
  activeWorkout,
  recoveryData,
  onStartWorkout,
  onResumeWorkout,
  onDiscardWorkout,
  onOpenPlans,
  standardRestSeconds
}) => {
  const [selectedWorkoutIndex, setSelectedWorkoutIndex] = useState(0);
  const [previewDemo, setPreviewDemo] = useState<{ name: string; url: string } | null>(null);

  const history = getWorkoutHistory();
  const totalHistoricalSets = history.reduce((sum, h) => sum + h.setsCount, 0);

  const currentWorkout = plan.workouts[selectedWorkoutIndex] || plan.workouts[0];

  return (
    <div className="space-y-4 pb-24">
      {/* BANNER SE HOUVER TREINO EM ANDAMENTO (Sem fundo verde fixo) */}
      {activeWorkout && (
        <div className="bg-gradient-to-r from-brand-subtle via-card to-card border border-brand-solid rounded-2xl p-4 shadow-xl flex items-center justify-between animate-in fade-in">
          <div className="space-y-1">
            <span className="text-[10px] uppercase font-bold text-brand tracking-wider flex items-center gap-1">
              <span className="w-2 h-2 rounded-full bg-brand animate-ping" />
              Sessão em Andamento
            </span>
            <h3 className="text-sm font-black text-white">
              {activeWorkout.workoutName}
            </h3>
            <p className="text-xs text-gray-400">
              {activeWorkout.exercises.length} exercícios • Toque para continuar
            </p>
          </div>

          <div className="flex items-center gap-2">
            {/* BOTÃO DE DESCARTAR TREINO NA TELA INICIAL */}
            <button
              type="button"
              onClick={() => {
                if (confirm('Deseja descartar este treino em andamento? Todos os dados desta sessão serão apagados.')) {
                  onDiscardWorkout();
                }
              }}
              className="p-2.5 rounded-xl bg-red-500/10 hover:bg-red-500/20 text-red-400 border border-red-500/20 hover:border-red-500/40 transition-colors"
              title="Descartar treino"
            >
              <Trash2 className="w-4 h-4" />
            </button>

            <button
              onClick={onResumeWorkout}
              className="px-4 py-2.5 rounded-xl bg-brand hover:bg-brand-hover text-black font-extrabold text-xs flex items-center gap-1.5 shadow-brand active:scale-95 transition-all"
            >
              <Play className="w-4 h-4 fill-current" />
              <span>Retomar</span>
            </button>
          </div>
        </div>
      )}

      {/* PLANO ATIVO & CABEÇALHO */}
      <div className="flex items-center justify-between">
        <div>
          <span className="text-[10px] font-bold uppercase tracking-wider text-brand">
            Plano Ativo
          </span>
          <h1 className="text-xl font-black text-white">{plan.name}</h1>
          <p className="text-xs text-gray-400">{plan.note}</p>
        </div>

        <button
          onClick={onOpenPlans}
          className="text-xs font-semibold text-brand hover:underline px-3 py-1.5 rounded-xl bg-elevated border border-app transition-colors"
        >
          Trocar Plano
        </button>
      </div>

      {/* SELETOR DE DIAS (TREINO A, B, C, D...) */}
      <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-none">
        {plan.workouts.map((w, idx) => {
          const isSelected = selectedWorkoutIndex === idx;
          return (
            <button
              key={w.id}
              onClick={() => setSelectedWorkoutIndex(idx)}
              className={`px-4 py-2.5 rounded-xl text-left border shrink-0 transition-all ${
                isSelected
                  ? 'bg-brand-subtle border-brand-solid text-white shadow-brand'
                  : 'bg-card border-app text-gray-400 hover:text-gray-200'
              }`}
            >
              <div className="text-[10px] uppercase font-bold text-brand">
                Treino {w.id}
              </div>
              <div className="text-xs font-bold truncate max-w-[140px]">
                {w.name}
              </div>
            </button>
          );
        })}
      </div>

      {/* CARD DO TREINO SELECIONADO */}
      {currentWorkout && (
        <div className="bg-card border border-app rounded-2xl p-5 shadow-xl space-y-4">
          <div className="flex items-start justify-between">
            <div>
              <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-brand-subtle text-brand">
                Próxima Sessão
              </span>
              <h2 className="text-lg font-black text-white mt-1">
                Treino {currentWorkout.id} • {currentWorkout.name}
              </h2>
              <div className="flex items-center gap-3 text-xs text-gray-400 mt-1">
                <span className="flex items-center gap-1">
                  <Dumbbell className="w-3.5 h-3.5 text-brand" />
                  {currentWorkout.exercises.length} exercícios
                </span>
                <span>•</span>
                <span className="flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5 text-brand" />
                  ~50 min
                </span>
                <span>•</span>
                <span>Descanso: {standardRestSeconds}s</span>
              </div>
            </div>

            <button
              onClick={() => onStartWorkout(currentWorkout.id)}
              className="px-5 py-3 rounded-xl bg-brand hover:bg-brand-hover text-black font-extrabold text-sm flex items-center gap-2 shadow-brand active:scale-95 transition-all shrink-0"
            >
              <Play className="w-4 h-4 fill-current" />
              <span>Iniciar</span>
            </button>
          </div>

          {/* LISTA RESUMIDA DOS EXERCÍCIOS DESTE TREINO */}
          <div className="border-t border-app pt-3 space-y-2">
            <span className="text-[11px] font-semibold text-gray-400 block">
              Sequência prescrita:
            </span>

            <div className="space-y-1.5">
              {currentWorkout.exercises.map((raw, idx) => {
                const name = raw[0];
                const desc = raw[1];
                const reps = raw[2];
                const catalogEntry = EXERCISE_CATALOG.find(e => e.name.toLowerCase() === name.toLowerCase());

                return (
                  <div
                    key={idx}
                    className="flex items-center justify-between p-2.5 rounded-xl bg-card-subtle border border-app text-xs"
                  >
                    <div className="truncate pr-2">
                      <span className="font-semibold text-gray-200 block truncate">
                        {idx + 1}. {name}
                      </span>
                      <span className="text-[11px] text-gray-400 truncate block">
                        {desc} • {reps} reps
                      </span>
                    </div>

                    <div className="flex items-center gap-1.5 shrink-0">
                      {/* BOTÃO PARA VISUALIZAR GIF DO EXERCÍCIO */}
                      {catalogEntry?.demoUrl && (
                        <button
                          type="button"
                          onClick={() => setPreviewDemo({ name, url: catalogEntry.demoUrl! })}
                          className="px-2 py-1 rounded-lg bg-elevated hover:bg-[var(--bg-hover)] text-brand flex items-center gap-1 text-[11px] font-semibold border border-app transition-colors"
                          title="Ver demonstração em GIF"
                        >
                          <Play className="w-2.5 h-2.5 fill-current" />
                          <span>GIF</span>
                        </button>
                      )}

                      {catalogEntry?.movementLabel && (
                        <span className="text-[10px] px-2 py-0.5 rounded bg-elevated text-gray-300">
                          {catalogEntry.movementLabel}
                        </span>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}

      {/* HISTÓRICO RÁPIDO DE TREINOS / SÉRIES / QUANTAS VEZES NA SEMANA (IGUAL AO PRINT DO USUÁRIO) */}
      <div className="grid grid-cols-3 gap-2.5">
        <div className="bg-card border border-app rounded-2xl p-4 text-left shadow-sm">
          <span className="font-black text-2xl text-white block tracking-tight leading-none">
            {history.length}
          </span>
          <span className="text-xs text-gray-400 block mt-2 font-medium">
            treinos feitos
          </span>
        </div>

        <div className="bg-card border border-app rounded-2xl p-4 text-left shadow-sm">
          <span className="font-black text-2xl text-white block tracking-tight leading-none">
            {totalHistoricalSets}
          </span>
          <span className="text-xs text-gray-400 block mt-2 font-medium">
            séries totais
          </span>
        </div>

        <div className="bg-card border border-app rounded-2xl p-4 text-left shadow-sm">
          <span className="font-black text-2xl text-white block tracking-tight leading-none">
            {plan.days}x
          </span>
          <span className="text-xs text-gray-400 block mt-2 font-medium">
            por semana
          </span>
        </div>
      </div>

      {/* MAPA ANATÔMICO DE RECUPERAÇÃO MUSCULAR */}
      <MuscleAnatomyCard recoveryData={recoveryData} />

      {/* MODAL DE PRÉ-VISUALIZAÇÃO DE GIF */}
      {previewDemo && (
        <div 
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in duration-200"
          onClick={() => setPreviewDemo(null)}
        >
          <div 
            className="w-full max-w-sm bg-card border border-app rounded-2xl p-4 shadow-2xl text-center space-y-3"
            onClick={e => e.stopPropagation()}
          >
            <div className="flex items-center justify-between pb-2 border-b border-app">
              <div className="flex items-center gap-1.5 text-xs font-bold text-white truncate pr-2">
                <Video className="w-4 h-4 text-brand shrink-0" />
                <span className="truncate">{previewDemo.name}</span>
              </div>
              <button 
                onClick={() => setPreviewDemo(null)}
                className="p-1 rounded-lg text-gray-400 hover:text-white"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="bg-card-subtle rounded-xl p-2 border border-app flex items-center justify-center">
              <img
                src={previewDemo.url}
                alt={previewDemo.name}
                className="max-h-60 object-contain rounded-lg"
              />
            </div>

            <p className="text-[11px] text-gray-400">
              Mantenha a postura e contração adequada durante todo o movimento.
            </p>
          </div>
        </div>
      )}
    </div>
  );
};
