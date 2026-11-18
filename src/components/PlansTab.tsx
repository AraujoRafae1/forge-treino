import React, { useState } from 'react';
import { WorkoutPlanRaw, CatalogExercise } from '../types';
import { getAllPlans, getCurrentPlanId, setCurrentPlanId, saveCustomPlan } from '../utils/storage';
import { AddExerciseModal } from './AddExerciseModal';
import { 
  FolderPlus, 
  Check, 
  Plus, 
  Trash2, 
  X
} from 'lucide-react';

interface Props {
  onPlanChanged: () => void;
}

const LEVEL_RANK: Record<string, number> = {
  'Iniciante': 1,
  'Intermediário': 2,
  'Avançado': 3,
  'Olympia': 4,
  'Personalizado': 5
};

export const PlansTab: React.FC<Props> = ({ onPlanChanged }) => {
  const [plans, setPlans] = useState<WorkoutPlanRaw[]>(getAllPlans());
  const [currentId, setCurrentId] = useState<string>(getCurrentPlanId());
  const [levelFilter, setLevelFilter] = useState<string>('all');
  const [showCreateModal, setShowCreateModal] = useState(false);

  // Estados para criação de plano customizado
  const [newPlanName, setNewPlanName] = useState('');
  const [newPlanDays, setNewPlanDays] = useState(4);
  const [customWorkouts, setCustomWorkouts] = useState<
    { id: string; name: string; exercises: CatalogExercise[] }[]
  >([
    { id: 'A', name: 'Peito e Tríceps', exercises: [] },
    { id: 'B', name: 'Costas e Bíceps', exercises: [] },
    { id: 'C', name: 'Pernas Completo', exercises: [] },
    { id: 'D', name: 'Ombros e Abdômen', exercises: [] }
  ]);
  const [activeAddWorkoutIndex, setActiveAddWorkoutIndex] = useState<number | null>(null);

  const levels = ['all', 'Iniciante', 'Intermediário', 'Avançado', 'Olympia'];

  // Ordenação garantida: Iniciante -> Intermediário -> Avançado -> Olympia -> Personalizado
  const sortedPlans = [...plans].sort((a, b) => {
    const rA = LEVEL_RANK[a.level] || 99;
    const rB = LEVEL_RANK[b.level] || 99;
    if (rA !== rB) return rA - rB;
    if (a.days !== b.days) return a.days - b.days;
    return 0;
  });

  const filteredPlans = sortedPlans.filter(p => {
    if (levelFilter === 'all') return true;
    return p.level.toLowerCase() === levelFilter.toLowerCase();
  });

  const handleSelectPlan = (id: string) => {
    setCurrentPlanId(id);
    setCurrentId(id);
    onPlanChanged();
  };

  const handleCreatePlan = () => {
    if (!newPlanName.trim()) {
      alert('Por favor, informe o nome do plano.');
      return;
    }

    const createdPlan: WorkoutPlanRaw = {
      id: `custom_${Date.now()}`,
      name: newPlanName,
      level: 'Personalizado',
      days: newPlanDays,
      note: customWorkouts.map(w => w.name).join(' • '),
      workouts: customWorkouts.map(w => ({
        id: w.id,
        name: w.name,
        exercises: w.exercises.map(e => [
          e.name,
          '1 aquec. + 1 ajuste + 2 trabalho',
          '8-12',
          false
        ])
      }))
    };

    saveCustomPlan(createdPlan);
    setPlans(getAllPlans());
    handleSelectPlan(createdPlan.id);
    setShowCreateModal(false);
    setNewPlanName('');
  };

  const updateWorkoutCount = (days: number) => {
    setNewPlanDays(days);
    const letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G'];
    const updated = [];
    for (let i = 0; i < days; i++) {
      const existing = customWorkouts[i];
      updated.push(
        existing || {
          id: letters[i],
          name: `Treino ${letters[i]}`,
          exercises: []
        }
      );
    }
    setCustomWorkouts(updated);
  };

  return (
    <div className="space-y-4 pb-24">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <span className="text-[10px] font-bold uppercase tracking-wider text-brand">
            Biblioteca
          </span>
          <h1 className="text-xl font-black text-white">Planos de Treino</h1>
          <p className="text-xs text-gray-400">Ordenados de Iniciante até Avançado / Olympia</p>
        </div>

        <button
          onClick={() => setShowCreateModal(true)}
          className="px-3.5 py-2 rounded-xl bg-brand hover:bg-brand-hover text-black font-extrabold text-xs flex items-center gap-1.5 shadow-brand transition-colors"
        >
          <Plus className="w-4 h-4 stroke-[3]" />
          <span>Criar meu plano</span>
        </button>
      </div>

      {/* Filtro por Nível */}
      <div className="flex gap-1.5 overflow-x-auto pb-1 scrollbar-none text-xs">
        {levels.map(lvl => (
          <button
            key={lvl}
            onClick={() => setLevelFilter(lvl)}
            className={`px-3 py-1.5 rounded-full capitalize font-semibold transition-all ${
              levelFilter === lvl
                ? 'bg-brand text-black shadow-brand'
                : 'bg-card text-gray-400 hover:text-white border border-app'
            }`}
          >
            {lvl === 'all' ? 'Todos os Níveis' : lvl}
          </button>
        ))}
      </div>

      {/* Lista de Planos Ordenados */}
      <div className="grid gap-3">
        {filteredPlans.map(plan => {
          const isSelected = plan.id === currentId;
          return (
            <div
              key={plan.id}
              className={`p-4 rounded-2xl border transition-all ${
                isSelected
                  ? 'bg-gradient-to-r from-brand-subtle via-card to-card border-brand-solid shadow-brand'
                  : 'bg-card border-app hover:border-gray-700'
              }`}
            >
              <div className="flex items-start justify-between gap-3">
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-elevated text-brand">
                      {plan.level}
                    </span>
                    <span className="text-[10px] text-gray-400">
                      {plan.days} dias por semana
                    </span>
                  </div>
                  <h3 className="text-base font-bold text-white">{plan.name}</h3>
                  <p className="text-xs text-gray-400">{plan.note}</p>
                </div>

                <button
                  onClick={() => handleSelectPlan(plan.id)}
                  disabled={isSelected}
                  className={`px-4 py-2 rounded-xl text-xs font-bold transition-all shrink-0 flex items-center gap-1.5 ${
                    isSelected
                      ? 'bg-brand text-black cursor-default shadow-brand'
                      : 'bg-elevated text-gray-200 hover:bg-[var(--bg-hover)] hover:text-white border border-app'
                  }`}
                >
                  {isSelected ? (
                    <>
                      <Check className="w-3.5 h-3.5 stroke-[3]" />
                      <span>Ativo</span>
                    </>
                  ) : (
                    <span>Selecionar</span>
                  )}
                </button>
              </div>

              {/* Lista dos Treinos (A, B, C...) */}
              <div className="mt-3 pt-3 border-t border-app flex gap-1.5 flex-wrap">
                {plan.workouts.map(w => (
                  <span
                    key={w.id}
                    className="text-[11px] px-2.5 py-1 rounded-lg bg-card-subtle border border-app text-gray-300"
                  >
                    <b>{w.id}:</b> {w.name} ({w.exercises.length})
                  </span>
                ))}
              </div>
            </div>
          );
        })}
      </div>

      {/* Modal de Criação de Plano Personalizado */}
      {showCreateModal && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-end sm:items-center justify-center p-0 sm:p-4">
          <div 
            className="w-full max-w-lg bg-card border border-app rounded-t-3xl sm:rounded-2xl p-5 shadow-2xl max-h-[90vh] flex flex-col"
            onClick={e => e.stopPropagation()}
          >
            <div className="flex items-center justify-between pb-3 border-b border-app">
              <div className="flex items-center gap-2">
                <div className="p-2 rounded-xl bg-brand-subtle text-brand">
                  <FolderPlus className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-gray-100">Criar Novo Plano</h3>
                  <p className="text-xs text-gray-400">Monte seus treinos e escolha exercícios</p>
                </div>
              </div>
              <button 
                onClick={() => setShowCreateModal(false)}
                className="p-1.5 rounded-lg text-gray-400 hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto space-y-4 py-3 pr-1">
              <div>
                <label className="text-xs font-semibold text-gray-300 block mb-1">
                  Nome do Plano
                </label>
                <input
                  type="text"
                  placeholder="Ex: Treino Hipertrofia do Rafael"
                  value={newPlanName}
                  onChange={e => setNewPlanName(e.target.value)}
                  className="w-full px-3 py-2 text-sm bg-card-subtle border border-app rounded-xl text-white focus:outline-none focus:border-brand-solid"
                />
              </div>

              <div>
                <label className="text-xs font-semibold text-gray-300 block mb-1">
                  Frequência Semanal (Dias)
                </label>
                <div className="flex gap-2">
                  {[2, 3, 4, 5, 6].map(d => (
                    <button
                      key={d}
                      type="button"
                      onClick={() => updateWorkoutCount(d)}
                      className={`flex-1 py-1.5 rounded-xl text-xs font-bold border transition-colors ${
                        newPlanDays === d
                          ? 'bg-brand text-black border-brand-solid shadow-brand'
                          : 'bg-elevated text-gray-300 border-app'
                      }`}
                    >
                      {d} dias
                    </button>
                  ))}
                </div>
              </div>

              {/* Dias de Treino */}
              <div className="space-y-3">
                <span className="text-xs font-bold text-gray-300 block">
                  Configuração de cada dia:
                </span>

                {customWorkouts.map((w, idx) => (
                  <div key={w.id} className="p-3 rounded-xl bg-card-subtle border border-app space-y-2">
                    <div className="flex items-center gap-2">
                      <span className="font-bold text-xs text-brand">Treino {w.id}:</span>
                      <input
                        type="text"
                        value={w.name}
                        onChange={e => {
                          const updated = [...customWorkouts];
                          updated[idx].name = e.target.value;
                          setCustomWorkouts(updated);
                        }}
                        className="flex-1 px-2.5 py-1 text-xs bg-card border border-app rounded-lg text-white"
                      />
                    </div>

                    {/* Exercícios adicionados */}
                    <div className="space-y-1">
                      {w.exercises.map((ex, exIdx) => (
                        <div 
                          key={exIdx}
                          className="flex items-center justify-between text-xs px-2 py-1 rounded bg-card border border-app"
                        >
                          <span className="text-gray-300">{ex.name}</span>
                          <button
                            type="button"
                            onClick={() => {
                              const updated = [...customWorkouts];
                              updated[idx].exercises.splice(exIdx, 1);
                              setCustomWorkouts(updated);
                            }}
                            className="text-gray-400 hover:text-red-400"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      ))}
                    </div>

                    <button
                      type="button"
                      onClick={() => setActiveAddWorkoutIndex(idx)}
                      className="w-full py-1.5 rounded-lg bg-elevated hover:bg-[var(--bg-hover)] text-brand text-xs font-semibold flex items-center justify-center gap-1"
                    >
                      <Plus className="w-3.5 h-3.5" />
                      <span>Adicionar exercício a este dia</span>
                    </button>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-3 border-t border-app flex justify-end gap-2">
              <button
                onClick={() => setShowCreateModal(false)}
                className="px-4 py-2 rounded-xl bg-elevated text-gray-300 text-xs font-semibold"
              >
                Cancelar
              </button>
              <button
                onClick={handleCreatePlan}
                className="px-5 py-2 rounded-xl bg-brand hover:bg-brand-hover text-black text-xs font-bold shadow-brand"
              >
                Salvar e Ativar Plano
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Modal para adicionar exercício ao montar o plano customizado */}
      {activeAddWorkoutIndex !== null && (
        <AddExerciseModal
          onAdd={exercise => {
            const updated = [...customWorkouts];
            updated[activeAddWorkoutIndex].exercises.push(exercise);
            setCustomWorkouts(updated);
            setActiveAddWorkoutIndex(null);
          }}
          onClose={() => setActiveAddWorkoutIndex(null)}
        />
      )}
    </div>
  );
};
