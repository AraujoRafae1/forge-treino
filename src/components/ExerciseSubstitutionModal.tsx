import React, { useState } from 'react';
import { CatalogExercise, MuscleGroup } from '../types';
import { getSubstitutionsForExercise, MUSCLE_LABELS, EXERCISE_CATALOG } from '../data/exerciseCatalog';
import { RefreshCw, X, Check, Target, Dumbbell, ZoomIn } from 'lucide-react';

interface Props {
  currentExerciseName: string;
  targetMuscle: MuscleGroup;
  movementLabel?: string;
  onSelect: (newExercise: CatalogExercise) => void;
  onClose: () => void;
}

export const ExerciseSubstitutionModal: React.FC<Props> = ({
  currentExerciseName,
  targetMuscle,
  movementLabel,
  onSelect,
  onClose
}) => {
  const substitutions = getSubstitutionsForExercise(currentExerciseName, targetMuscle);
  const currentExercise = EXERCISE_CATALOG.find(
    e => e.name.toLowerCase() === currentExerciseName.toLowerCase()
  );

  const [zoomedExercise, setZoomedExercise] = useState<CatalogExercise | null>(null);

  return (
    <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-sm flex items-end sm:items-center justify-center p-0 sm:p-4 animate-in fade-in duration-200">
      <div 
        className="w-full max-w-lg bg-card border border-app rounded-t-3xl sm:rounded-2xl p-5 shadow-2xl max-h-[88vh] flex flex-col"
        onClick={e => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between pb-3 border-b border-app">
          <div className="flex items-center gap-2">
            <div className="p-2 rounded-xl bg-brand-subtle text-brand">
              <RefreshCw className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base font-bold text-gray-100">Substituir Exercício</h3>
              <p className="text-xs text-gray-400">Com demonstração visual de cada movimento</p>
            </div>
          </div>
          <button 
            onClick={onClose}
            className="p-1.5 rounded-lg text-gray-400 hover:text-white hover:bg-elevated"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Exercício Atual em Substituição */}
        <div className="my-3 p-3 rounded-2xl bg-card-subtle border border-app flex items-center gap-3">
          {currentExercise?.demoUrl ? (
            <div className="w-14 h-14 rounded-xl overflow-hidden bg-card border border-app shrink-0 flex items-center justify-center">
              <img
                src={currentExercise.demoUrl}
                alt={currentExerciseName}
                className="w-full h-full object-contain"
                loading="eager"
              />
            </div>
          ) : (
            <div className="w-14 h-14 rounded-xl bg-card border border-app shrink-0 flex items-center justify-center text-gray-500">
              <Dumbbell className="w-6 h-6" />
            </div>
          )}

          <div className="flex-1 min-w-0">
            <span className="text-[10px] uppercase font-bold text-gray-400 tracking-wider block">
              Exercício Sendo Substituído
            </span>
            <div className="flex items-center justify-between gap-1 mt-0.5">
              <span className="text-sm font-bold text-white truncate">{currentExerciseName}</span>
              <span className="text-[10px] px-2 py-0.5 rounded-full bg-brand-subtle text-brand font-semibold shrink-0">
                {MUSCLE_LABELS[targetMuscle] || 'Mesmo Músculo'}
              </span>
            </div>
            {movementLabel && (
              <span className="text-[11px] text-gray-400 mt-0.5 flex items-center gap-1 truncate">
                <Target className="w-3 h-3 text-brand shrink-0" /> {movementLabel}
              </span>
            )}
          </div>
        </div>

        {/* Lista de Alternativas com GIF Ilustrativo */}
        <div className="flex-1 overflow-y-auto space-y-2.5 pr-1 my-1">
          <div className="flex items-center justify-between mb-1">
            <p className="text-xs font-bold text-gray-300">
              Alternativas disponíveis ({substitutions.length}):
            </p>
            <span className="text-[10px] text-gray-400">
              Toque no GIF para ampliar
            </span>
          </div>

          {substitutions.length > 0 ? (
            substitutions.map((sub) => (
              <div
                key={sub.name}
                className="w-full p-2.5 rounded-2xl bg-card-subtle hover:bg-elevated border border-app hover:border-brand-solid transition-all flex items-center gap-3 group"
              >
                {/* Miniatura do GIF com botão de Zoom */}
                <div 
                  className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-xl overflow-hidden bg-card-subtle border border-app shrink-0 cursor-pointer group-hover:border-brand transition-colors"
                  onClick={() => setZoomedExercise(sub)}
                  title="Clique para ver o GIF maior"
                >
                  {sub.demoUrl ? (
                    <>
                      <img
                        src={sub.demoUrl}
                        alt={sub.name}
                        className="w-full h-full object-contain"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity">
                        <ZoomIn className="w-4 h-4 text-white drop-shadow" />
                      </div>
                    </>
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-gray-600">
                      <Dumbbell className="w-6 h-6" />
                    </div>
                  )}
                </div>

                {/* Dados do Exercício */}
                <div 
                  className="flex-1 min-w-0 cursor-pointer"
                  onClick={() => onSelect(sub)}
                >
                  <div className="text-sm font-bold text-gray-100 group-hover:text-brand transition-colors leading-snug">
                    {sub.name}
                  </div>
                  <div className="text-[11px] text-gray-400 flex items-center gap-1.5 mt-1 flex-wrap">
                    <span className="text-brand font-medium">{MUSCLE_LABELS[sub.muscle]}</span>
                    <span>•</span>
                    <span className="truncate">{sub.movementLabel}</span>
                  </div>
                </div>

                {/* Botão de Escolha */}
                <button
                  type="button"
                  onClick={() => onSelect(sub)}
                  className="px-3 py-2 rounded-xl bg-elevated group-hover:bg-brand text-gray-300 group-hover:text-black font-extrabold text-xs transition-all shrink-0 flex items-center gap-1 border border-app group-hover:border-transparent group-hover:shadow-brand active:scale-95"
                  title="Selecionar este exercício"
                >
                  <span className="hidden sm:inline">Escolher</span>
                  <Check className="w-4 h-4 stroke-[3]" />
                </button>
              </div>
            ))
          ) : (
            <div className="p-8 text-center text-gray-400 text-xs">
              Nenhuma outra alternativa direta encontrada para este grupo muscular.
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="pt-3 border-t border-app flex justify-end">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-xl bg-elevated hover:bg-[var(--bg-hover)] text-xs font-semibold text-gray-300"
          >
            Cancelar
          </button>
        </div>
      </div>

      {/* Modal de Zoom do GIF da Substituição */}
      {zoomedExercise && (
        <div 
          className="fixed inset-0 z-60 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 animate-in fade-in duration-150"
          onClick={() => setZoomedExercise(null)}
        >
          <div 
            className="w-full max-w-sm bg-card border border-app rounded-2xl p-5 shadow-2xl text-center space-y-3"
            onClick={e => e.stopPropagation()}
          >
            <div className="flex items-center justify-between pb-2 border-b border-app">
              <span className="text-sm font-bold text-white truncate text-left pr-2">
                {zoomedExercise.name}
              </span>
              <button 
                onClick={() => setZoomedExercise(null)}
                className="p-1 rounded-lg text-gray-400 hover:text-white"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="bg-card-subtle rounded-xl p-3 border border-app flex items-center justify-center">
              {zoomedExercise.demoUrl && (
                <img
                  src={zoomedExercise.demoUrl}
                  alt={zoomedExercise.name}
                  className="max-h-64 object-contain rounded-lg shadow-lg"
                />
              )}
            </div>

            <div className="text-xs text-gray-400 text-left">
              <span className="text-brand font-semibold block">{MUSCLE_LABELS[zoomedExercise.muscle]}</span>
              <span>{zoomedExercise.movementLabel}</span>
            </div>

            <div className="pt-2 flex gap-2">
              <button
                type="button"
                onClick={() => setZoomedExercise(null)}
                className="flex-1 py-2.5 rounded-xl bg-elevated text-gray-300 font-semibold text-xs"
              >
                Voltar
              </button>
              <button
                type="button"
                onClick={() => {
                  onSelect(zoomedExercise);
                  setZoomedExercise(null);
                }}
                className="flex-1 py-2.5 rounded-xl bg-brand hover:bg-brand-hover text-black font-extrabold text-xs shadow-brand flex items-center justify-center gap-1.5"
              >
                <Check className="w-4 h-4 stroke-[3]" />
                <span>Escolher Este</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
