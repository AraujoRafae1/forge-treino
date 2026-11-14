import React, { useState } from 'react';
import { CatalogExercise, MuscleGroup } from '../types';
import { EXERCISE_CATALOG, MUSCLE_LABELS } from '../data/exerciseCatalog';
import { Plus, X, Search, Dumbbell, ZoomIn } from 'lucide-react';

interface Props {
  onAdd: (exercise: CatalogExercise) => void;
  onClose: () => void;
}

export const AddExerciseModal: React.FC<Props> = ({ onAdd, onClose }) => {
  const [search, setSearch] = useState('');
  const [selectedMuscle, setSelectedMuscle] = useState<MuscleGroup | 'all'>('all');
  const [zoomedExercise, setZoomedExercise] = useState<CatalogExercise | null>(null);

  const filtered = EXERCISE_CATALOG.filter(e => {
    const matchesSearch = e.name.toLowerCase().includes(search.toLowerCase());
    const matchesMuscle = selectedMuscle === 'all' || e.muscle === selectedMuscle;
    return matchesSearch && matchesMuscle;
  });

  const muscleKeys: MuscleGroup[] = [
    'chest', 'back', 'shoulders', 'biceps', 'triceps', 
    'quads', 'hamstrings', 'glutes', 'calves', 'core'
  ];

  return (
    <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-sm flex items-end sm:items-center justify-center p-0 sm:p-4">
      <div 
        className="w-full max-w-lg bg-card border border-app rounded-t-3xl sm:rounded-2xl p-5 shadow-2xl max-h-[88vh] flex flex-col"
        onClick={e => e.stopPropagation()}
      >
        <div className="flex items-center justify-between pb-3 border-b border-app">
          <div className="flex items-center gap-2">
            <div className="p-2 rounded-xl bg-brand-subtle text-brand">
              <Dumbbell className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base font-bold text-gray-100">Adicionar Exercício</h3>
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

        {/* Campo de Busca */}
        <div className="relative my-3">
          <Search className="w-4 h-4 absolute left-3 top-3 text-gray-400" />
          <input
            type="text"
            placeholder="Buscar por nome do exercício..."
            value={search}
            onChange={e => setSearch(e.target.value)}
            className="w-full pl-9 pr-4 py-2 text-sm bg-card-subtle border border-app rounded-xl text-gray-100 placeholder-gray-500 focus:outline-none focus:border-brand-solid"
          />
        </div>

        {/* Filtro rápido por músculo */}
        <div className="flex gap-1.5 overflow-x-auto pb-2 scrollbar-none text-xs">
          <button
            onClick={() => setSelectedMuscle('all')}
            className={`px-3 py-1 rounded-full whitespace-nowrap transition-colors ${
              selectedMuscle === 'all' 
                ? 'bg-brand text-black font-semibold shadow-brand' 
                : 'bg-elevated text-gray-300 hover:bg-[var(--bg-hover)]'
            }`}
          >
            Todos
          </button>
          {muscleKeys.map(m => (
            <button
              key={m}
              onClick={() => setSelectedMuscle(m)}
              className={`px-3 py-1 rounded-full whitespace-nowrap transition-colors ${
                selectedMuscle === m 
                  ? 'bg-brand text-black font-semibold shadow-brand' 
                  : 'bg-elevated text-gray-300 hover:bg-[var(--bg-hover)]'
              }`}
            >
              {MUSCLE_LABELS[m]}
            </button>
          ))}
        </div>

        {/* Lista de Exercícios com GIF */}
        <div className="flex-1 overflow-y-auto space-y-2 pr-1 my-2">
          {filtered.slice(0, 50).map(ex => (
            <div
              key={ex.name}
              className="w-full p-2.5 rounded-2xl bg-card-subtle hover:bg-elevated border border-app hover:border-brand-solid transition-all flex items-center gap-3 group"
            >
              {/* Miniatura do GIF */}
              <div 
                className="relative w-14 h-14 sm:w-16 sm:h-16 rounded-xl overflow-hidden bg-card-subtle border border-app shrink-0 cursor-pointer group-hover:border-brand transition-colors"
                onClick={() => setZoomedExercise(ex)}
                title="Clique para ver o GIF maior"
              >
                {ex.demoUrl ? (
                  <>
                    <img
                      src={ex.demoUrl}
                      alt={ex.name}
                      className="w-full h-full object-contain"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity">
                      <ZoomIn className="w-3.5 h-3.5 text-white" />
                    </div>
                  </>
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-gray-600">
                    <Dumbbell className="w-5 h-5" />
                  </div>
                )}
              </div>

              {/* Informações */}
              <div 
                className="flex-1 min-w-0 cursor-pointer"
                onClick={() => onAdd(ex)}
              >
                <div className="text-sm font-bold text-gray-100 group-hover:text-brand transition-colors truncate">
                  {ex.name}
                </div>
                <div className="text-xs text-gray-400 flex items-center gap-1.5 mt-0.5">
                  <span className="text-brand font-medium">{MUSCLE_LABELS[ex.muscle]}</span>
                  <span>•</span>
                  <span className="truncate">{ex.movementLabel}</span>
                </div>
              </div>

              {/* Botão Adicionar */}
              <button
                type="button"
                onClick={() => onAdd(ex)}
                className="w-8 h-8 rounded-xl bg-elevated group-hover:bg-brand text-gray-300 group-hover:text-black flex items-center justify-center shrink-0 transition-all border border-app group-hover:border-transparent group-hover:shadow-brand active:scale-95"
              >
                <Plus className="w-4 h-4 stroke-[3]" />
              </button>
            </div>
          ))}

          {filtered.length === 0 && (
            <div className="p-6 text-center text-gray-400 text-xs">
              Nenhum exercício encontrado.
            </div>
          )}
        </div>
      </div>

      {/* Modal Zoom do GIF */}
      {zoomedExercise && (
        <div 
          className="fixed inset-0 z-60 bg-black/90 backdrop-blur-md flex items-center justify-center p-4"
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
                  onAdd(zoomedExercise);
                  setZoomedExercise(null);
                }}
                className="flex-1 py-2.5 rounded-xl bg-brand hover:bg-brand-hover text-black font-extrabold text-xs shadow-brand flex items-center justify-center gap-1.5"
              >
                <Plus className="w-4 h-4 stroke-[3]" />
                <span>Adicionar ao Treino</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
