import React, { useState, useEffect } from 'react';
import { 
  ActiveWorkoutSession, 
  ActiveExerciseSession, 
  WorkoutSet, 
  CatalogExercise, 
  MuscleGroup 
} from '../types';
import { 
  playRestAlarm, 
  triggerHapticFeedback, 
  sendRestNotification, 
  enableScreenWakeLock, 
  releaseScreenWakeLock 
} from '../utils/audioAlarm';
import { completeWorkout, getSavedWeight, saveActiveWorkout } from '../utils/storage';
import { calculateWorkoutElapsedSeconds, formatWorkoutTime } from '../utils/workoutParser';
import { EXERCISE_CATALOG, MUSCLE_LABELS } from '../data/exerciseCatalog';
import { ExerciseSubstitutionModal } from './ExerciseSubstitutionModal';
import { AddExerciseModal } from './AddExerciseModal';
import confetti from 'canvas-confetti';
import { 
  Play, 
  Pause, 
  Check, 
  Trash2, 
  Plus, 
  RefreshCw, 
  Clock, 
  Bell, 
  Flame, 
  X,
  AlertCircle,
  AlertTriangle,
  ChevronRight
} from 'lucide-react';

interface Props {
  session: ActiveWorkoutSession;
  onUpdateSession: (session: ActiveWorkoutSession | null) => void;
  onFinishWorkout: () => void;
  onDiscardWorkout: () => void;
  onMinimizeWorkout: () => void;
  standardRestSeconds: number;
}

export const LiveWorkoutModal: React.FC<Props> = ({
  session,
  onUpdateSession,
  onFinishWorkout,
  onDiscardWorkout,
  onMinimizeWorkout,
  standardRestSeconds
}) => {
  const [substitutionModal, setSubstitutionModal] = useState<{
    exerciseIndex: number;
    currentName: string;
    muscle: MuscleGroup;
    movementLabel?: string;
  } | null>(null);

  const [showAddModal, setShowAddModal] = useState(false);
  const [openDemoIndex, setOpenDemoIndex] = useState<number | null>(null);
  const [restRemaining, setRestRemaining] = useState<number>(0);
  const [confirmExit, setConfirmExit] = useState(false);
  const [displayElapsed, setDisplayElapsed] = useState<number>(() => calculateWorkoutElapsedSeconds(session));

  // Mantém a tela acesa enquanto o treino estiver ativo
  useEffect(() => {
    enableScreenWakeLock();
    return () => {
      releaseScreenWakeLock();
    };
  }, []);

  // Cronômetro do Treino com Sincronização Absoluta por Timestamps (iOS / Android / PWA em segundo plano)
  useEffect(() => {
    const syncElapsed = () => {
      const realElapsed = calculateWorkoutElapsedSeconds(session);
      setDisplayElapsed(realElapsed);
    };

    // Sincroniza imediatamente na montagem
    syncElapsed();

    // Ticker visual suave para atualizar os segundos na tela
    const timer = setInterval(() => {
      if (!session.isPaused) {
        syncElapsed();
      }
    }, 500);

    // Eventos disparados quando o celular é desbloqueado ou o app volta do segundo plano
    const handleVisibilityOrFocus = () => {
      if (document.visibilityState === 'visible') {
        syncElapsed();
        // Reativa WakeLock se necessário ao voltar do segundo plano
        if (!session.isPaused) {
          enableScreenWakeLock();
        }
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityOrFocus);
    window.addEventListener('focus', handleVisibilityOrFocus);
    window.addEventListener('pageshow', handleVisibilityOrFocus);

    return () => {
      clearInterval(timer);
      document.removeEventListener('visibilitychange', handleVisibilityOrFocus);
      window.removeEventListener('focus', handleVisibilityOrFocus);
      window.removeEventListener('pageshow', handleVisibilityOrFocus);
    };
  }, [session.startTimestamp, session.isPaused, session.pausedAtTimestamp, session.pausedTotalMs]);

  // Persistência periódica do tempo de treino no localStorage (a cada 5 segundos ou ao pausar/sair)
  useEffect(() => {
    const interval = setInterval(() => {
      if (!session.isPaused) {
        const realElapsed = calculateWorkoutElapsedSeconds(session);
        if (realElapsed !== session.elapsedSeconds) {
          const updated = {
            ...session,
            elapsedSeconds: realElapsed
          };
          onUpdateSession(updated);
          saveActiveWorkout(updated);
        }
      }
    }, 5000);

    return () => clearInterval(interval);
  }, [session, onUpdateSession]);

  // Cronômetro de Descanso com Sincronização de Fundo (iOS e Android)
  useEffect(() => {
    if (!session.restTimer) {
      setRestRemaining(0);
      return;
    }

    const checkRestTime = () => {
      if (!session.restTimer) return;
      const now = Date.now();
      const diff = Math.ceil((session.restTimer.endTimestamp - now) / 1000);

      if (diff <= 0) {
        // Alarme finalizado!
        playRestAlarm();
        triggerHapticFeedback();
        sendRestNotification(
          session.restTimer.exerciseName, 
          session.restTimer.setIndex + 1
        );

        // Remove o timer de descanso
        const updated: ActiveWorkoutSession = {
          ...session,
          restTimer: null
        };
        onUpdateSession(updated);
        saveActiveWorkout(updated);
        setRestRemaining(0);
      } else {
        setRestRemaining(diff);
      }
    };

    checkRestTime();
    const interval = setInterval(checkRestTime, 500);

    const onVisibilityChange = () => {
      if (document.visibilityState === 'visible') {
        checkRestTime();
      }
    };
    document.addEventListener('visibilitychange', onVisibilityChange);
    window.addEventListener('focus', onVisibilityChange);
    window.addEventListener('pageshow', onVisibilityChange);

    return () => {
      clearInterval(interval);
      document.removeEventListener('visibilitychange', onVisibilityChange);
      window.removeEventListener('focus', onVisibilityChange);
      window.removeEventListener('pageshow', onVisibilityChange);
    };
  }, [session.restTimer, onUpdateSession]);

  const togglePause = () => {
    const now = Date.now();
    let updated: ActiveWorkoutSession;

    if (session.isPaused) {
      // Retomando o treino: acumula a duração da pausa decorrida
      const pauseDuration = session.pausedAtTimestamp ? Math.max(0, now - session.pausedAtTimestamp) : 0;
      const newPausedTotal = (session.pausedTotalMs || 0) + pauseDuration;
      
      const newElapsed = calculateWorkoutElapsedSeconds({
        ...session,
        isPaused: false,
        pausedAtTimestamp: null,
        pausedTotalMs: newPausedTotal
      }, now);

      updated = {
        ...session,
        isPaused: false,
        pausedAtTimestamp: null,
        pausedTotalMs: newPausedTotal,
        elapsedSeconds: newElapsed
      };
      enableScreenWakeLock();
    } else {
      // Pausando o treino: marca o momento exato do pause
      const currentElapsed = calculateWorkoutElapsedSeconds(session, now);
      updated = {
        ...session,
        isPaused: true,
        pausedAtTimestamp: now,
        elapsedSeconds: currentElapsed
      };
      releaseScreenWakeLock();
    }

    setDisplayElapsed(updated.elapsedSeconds);
    onUpdateSession(updated);
    saveActiveWorkout(updated);
  };

  const startRestTimer = (exerciseName: string, exerciseIndex: number, setIndex: number, customSeconds?: number) => {
    const seconds = customSeconds || standardRestSeconds || 90;
    const endTimestamp = Date.now() + seconds * 1000;

    const updated: ActiveWorkoutSession = {
      ...session,
      restTimer: {
        totalSeconds: seconds,
        endTimestamp,
        exerciseIndex,
        setIndex,
        exerciseName
      }
    };
    onUpdateSession(updated);
    saveActiveWorkout(updated);
  };

  const adjustRest = (deltaSeconds: number) => {
    if (!session.restTimer) return;
    const newEnd = session.restTimer.endTimestamp + deltaSeconds * 1000;
    if (newEnd <= Date.now()) {
      skipRest();
      return;
    }
    const updated: ActiveWorkoutSession = {
      ...session,
      restTimer: {
        ...session.restTimer,
        endTimestamp: newEnd,
        totalSeconds: session.restTimer.totalSeconds + deltaSeconds
      }
    };
    onUpdateSession(updated);
    saveActiveWorkout(updated);
  };

  const skipRest = () => {
    const updated: ActiveWorkoutSession = {
      ...session,
      restTimer: null
    };
    onUpdateSession(updated);
    saveActiveWorkout(updated);
    setRestRemaining(0);
  };

  const toggleSetComplete = (exerciseIndex: number, setIndex: number) => {
    const exercises = [...session.exercises];
    const targetSet = exercises[exerciseIndex].sets[setIndex];
    const willComplete = !targetSet.completed;

    targetSet.completed = willComplete;

    const updated: ActiveWorkoutSession = {
      ...session,
      exercises
    };

    onUpdateSession(updated);
    saveActiveWorkout(updated);

    if (willComplete) {
      const targetRest = targetSet.restSeconds !== undefined 
        ? targetSet.restSeconds 
        : (targetSet.type === 'warmup' ? 60 : (standardRestSeconds || 90));
      if (targetRest > 0) {
        startRestTimer(exercises[exerciseIndex].currentName, exerciseIndex, setIndex, targetRest);
      }
    }
  };

  const updateSetValue = (
    exerciseIndex: number, 
    setIndex: number, 
    field: 'weight' | 'reps', 
    value: number
  ) => {
    const exercises = [...session.exercises];
    exercises[exerciseIndex].sets[setIndex][field] = Math.max(0, value);
    const updated: ActiveWorkoutSession = {
      ...session,
      exercises
    };
    onUpdateSession(updated);
    saveActiveWorkout(updated);
  };

  const adjustWeight = (exerciseIndex: number, setIndex: number, delta: number) => {
    const exercises = [...session.exercises];
    const current = exercises[exerciseIndex].sets[setIndex].weight || 0;
    exercises[exerciseIndex].sets[setIndex].weight = Math.max(0, Math.round((current + delta) * 10) / 10);
    const updated: ActiveWorkoutSession = {
      ...session,
      exercises
    };
    onUpdateSession(updated);
    saveActiveWorkout(updated);
  };

  // REMOVER SÉRIE (Lixeira)
  const removeSet = (exerciseIndex: number, setIndex: number) => {
    const exercises = [...session.exercises];
    const targetSets = exercises[exerciseIndex].sets;

    if (targetSets.length <= 1) {
      alert('O exercício precisa ter pelo menos 1 série.');
      return;
    }

    targetSets.splice(setIndex, 1);
    targetSets.forEach((s, idx) => {
      s.number = idx + 1;
    });

    const updated: ActiveWorkoutSession = {
      ...session,
      exercises
    };
    onUpdateSession(updated);
    saveActiveWorkout(updated);
  };

  const addSet = (exerciseIndex: number) => {
    const exercises = [...session.exercises];
    const sets = exercises[exerciseIndex].sets;
    const lastSet = sets[sets.length - 1];

    const newSet: WorkoutSet = {
      id: `set_${Date.now()}_${Math.random()}`,
      number: sets.length + 1,
      type: 'work',
      label: 'Trabalho',
      targetReps: lastSet?.targetReps || '8-12',
      weight: lastSet?.weight || 0,
      reps: lastSet?.reps || 10,
      completed: false,
      prevWeight: lastSet?.prevWeight,
      prevReps: lastSet?.prevReps
    };

    sets.push(newSet);
    const updated: ActiveWorkoutSession = {
      ...session,
      exercises
    };
    onUpdateSession(updated);
    saveActiveWorkout(updated);
  };

  const handleSubstituteExercise = (newExercise: CatalogExercise) => {
    if (!substitutionModal) return;
    const { exerciseIndex } = substitutionModal;

    const exercises = [...session.exercises];
    exercises[exerciseIndex] = {
      ...exercises[exerciseIndex],
      currentName: newExercise.name,
      muscle: newExercise.muscle,
      subGroup: newExercise.subGroup,
      movementLabel: newExercise.movementLabel,
      demoUrl: newExercise.demoUrl
    };

    const updated: ActiveWorkoutSession = {
      ...session,
      exercises
    };
    onUpdateSession(updated);
    saveActiveWorkout(updated);
    setSubstitutionModal(null);
  };

  const handleAddExercise = (exercise: CatalogExercise) => {
    const savedWeight = getSavedWeight(exercise.name) || 0;

    const newExerciseSession: ActiveExerciseSession = {
      originalName: exercise.name,
      currentName: exercise.name,
      muscle: exercise.muscle,
      subGroup: exercise.subGroup,
      movementLabel: exercise.movementLabel,
      demoUrl: exercise.demoUrl,
      sets: [
        {
          id: `set_${Date.now()}_1`,
          number: 1,
          type: 'warmup',
          label: 'Aquec.',
          targetReps: '12-15',
          weight: Math.round(savedWeight * 0.5),
          reps: 15,
          completed: false,
          prevWeight: savedWeight
        },
        {
          id: `set_${Date.now()}_2`,
          number: 2,
          type: 'work',
          label: 'Trabalho',
          targetReps: '8-10',
          weight: savedWeight,
          reps: 10,
          completed: false,
          prevWeight: savedWeight
        },
        {
          id: `set_${Date.now()}_3`,
          number: 3,
          type: 'work',
          label: 'Trabalho',
          targetReps: '8-10',
          weight: savedWeight,
          reps: 10,
          completed: false,
          prevWeight: savedWeight
        }
      ]
    };

    const updated: ActiveWorkoutSession = {
      ...session,
      exercises: [...session.exercises, newExerciseSession]
    };
    onUpdateSession(updated);
    saveActiveWorkout(updated);
    setShowAddModal(false);
  };

  const handleFinish = () => {
    const completedSets = session.exercises.reduce(
      (acc, ex) => acc + ex.sets.filter(s => s.completed).length, 
      0
    );

    if (completedSets === 0) {
      if (!confirm('Nenhuma série foi marcada como concluída. Deseja mesmo finalizar assim?')) {
        return;
      }
    }

    try {
      confetti({
        particleCount: 120,
        spread: 80,
        origin: { y: 0.6 }
      });
    } catch {
      // Ignora erro de canvas
    }

    const finalElapsed = calculateWorkoutElapsedSeconds(session);
    const finalizedSession: ActiveWorkoutSession = {
      ...session,
      elapsedSeconds: finalElapsed
    };

    completeWorkout(finalizedSession);
    onFinishWorkout();
  };

  const currentVolume = session.exercises.reduce((total, ex) => {
    return total + ex.sets.filter(s => s.completed).reduce((sum, s) => sum + (s.weight * s.reps), 0);
  }, 0);

  const totalCompletedSets = session.exercises.reduce((total, ex) => {
    return total + ex.sets.filter(s => s.completed).length;
  }, 0);

  return (
    <div className="fixed inset-0 z-40 bg-app text-gray-100 flex flex-col overflow-hidden">
      {/* Top Header */}
      <header className="bg-card border-b border-app px-4 pt-3 pb-3 shrink-0 flex items-center justify-between shadow-md">
        <div>
          <span className="text-[10px] font-bold uppercase tracking-wider text-brand">
            Treino Ativo • {session.planName}
          </span>
          <h1 className="text-lg font-black text-white truncate max-w-[200px] sm:max-w-xs">
            {session.workoutName}
          </h1>
        </div>

        {/* Cronômetro e Botões */}
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1.5 bg-app px-3 py-1.5 rounded-xl border border-app">
            <Clock className="w-4 h-4 text-brand" />
            <span className="font-mono text-base font-bold text-brand">
              {formatWorkoutTime(displayElapsed)}
            </span>
          </div>

          <button
            onClick={togglePause}
            className={`p-2 rounded-xl border transition-all ${
              session.isPaused 
                ? 'bg-yellow-500/20 text-yellow-400 border-yellow-500/50' 
                : 'bg-elevated text-gray-300 border-app hover:text-white'
            }`}
            title={session.isPaused ? 'Retomar treino' : 'Pausar treino'}
          >
            {session.isPaused ? <Play className="w-4 h-4 fill-current" /> : <Pause className="w-4 h-4" />}
          </button>

          <button
            onClick={() => setConfirmExit(true)}
            className="p-2 rounded-xl bg-red-500/10 text-red-400 border border-red-500/20 hover:bg-red-500/20"
            title="Sair do treino"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </header>

      {session.isPaused && (
        <div className="bg-yellow-500/15 border-b border-yellow-500/30 px-4 py-2 text-xs text-yellow-400 font-semibold flex items-center gap-2">
          <AlertCircle className="w-4 h-4" />
          Treino pausado — cronômetro e descanso estão suspensos.
        </div>
      )}

      {/* BARRA FIXA DE DESCANSO */}
      {session.restTimer && (
        <div className="bg-card border-b-2 border-brand-solid p-3 shrink-0 shadow-lg animate-in slide-in-from-top-2">
          <div className="max-w-2xl mx-auto flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-brand text-black flex items-center justify-center font-bold animate-pulse shadow-brand">
                <Bell className="w-4 h-4" />
              </div>
              <div>
                <span className="text-[10px] uppercase font-bold text-brand tracking-wider">
                  Descanso Ativo
                </span>
                <div className="text-xs text-gray-300 font-medium truncate max-w-[150px] sm:max-w-xs">
                  Próxima série de {session.restTimer.exerciseName}
                </div>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <span className="font-mono text-2xl font-black text-brand tracking-wider">
                {formatWorkoutTime(restRemaining)}
              </span>

              <div className="flex items-center gap-1">
                <button
                  onClick={() => adjustRest(30)}
                  className="px-2 py-1 text-xs font-bold rounded-lg bg-elevated hover:bg-[var(--bg-hover)] text-brand border border-app"
                >
                  +30s
                </button>
                <button
                  onClick={() => adjustRest(-15)}
                  className="px-2 py-1 text-xs font-bold rounded-lg bg-elevated hover:bg-[var(--bg-hover)] text-gray-300 border border-app"
                >
                  -15s
                </button>
                <button
                  onClick={skipRest}
                  className="px-2.5 py-1 text-xs font-bold rounded-lg bg-brand text-black hover:bg-brand-hover shadow-brand"
                >
                  Pular
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Conteúdo rolável dos exercícios */}
      <div className="flex-1 overflow-y-auto px-4 py-4 space-y-4 max-w-3xl mx-auto w-full pb-28">
        {/* Barra de volume */}
        <div className="grid grid-cols-2 gap-2 text-xs">
          <div className="p-3 rounded-xl bg-card border border-app flex items-center justify-between">
            <span className="text-gray-400">Séries Feitas</span>
            <span className="font-bold text-brand">{totalCompletedSets} concluídas</span>
          </div>
          <div className="p-3 rounded-xl bg-card border border-app flex items-center justify-between">
            <span className="text-gray-400">Volume Total</span>
            <span className="font-bold text-white flex items-center gap-1">
              <Flame className="w-3.5 h-3.5 text-orange-400" />
              {currentVolume.toLocaleString('pt-BR')} kg
            </span>
          </div>
        </div>

        {/* Cards de Exercícios */}
        {session.exercises.map((exercise, exIdx) => {
          // Garante fallback dinâmico para a demoUrl se faltar no objeto do exercício
          const demoUrl = exercise.demoUrl || 
            EXERCISE_CATALOG.find(e => e.name.toLowerCase() === exercise.currentName.toLowerCase())?.demoUrl;

          const isDemoOpen = openDemoIndex === exIdx;

          return (
            <article 
              key={`${exercise.originalName}_${exIdx}`}
              className="bg-card border border-app rounded-2xl p-4 shadow-sm"
            >
              {/* Header do Exercício */}
              <div className="mb-2">
                <div className="flex items-center gap-2">
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-brand-subtle text-brand uppercase">
                    {MUSCLE_LABELS[exercise.muscle] || 'Geral'}
                  </span>
                  {exercise.movementLabel && (
                    <span className="text-[10px] text-gray-400">
                      {exercise.movementLabel}
                    </span>
                  )}
                </div>

                <h3 className="text-base font-bold text-white mt-1">
                  {exercise.currentName}
                </h3>

                {/* BOTÕES DE DEMONSTRAÇÃO EM GIF E SUBSTITUIR (BEM VISÍVEIS!) */}
                <div className="flex items-center gap-2 mt-2.5">
                  {demoUrl && (
                    <button
                      type="button"
                      onClick={() => setOpenDemoIndex(isDemoOpen ? null : exIdx)}
                      className={`px-3 py-1.5 rounded-xl text-xs font-bold flex items-center gap-1.5 border transition-all ${
                        isDemoOpen
                          ? 'bg-brand text-black border-brand-solid shadow-brand'
                          : 'bg-elevated hover:bg-[var(--bg-hover)] text-brand border-app'
                      }`}
                    >
                      <Play className="w-3 h-3 fill-current" />
                      <span>{isDemoOpen ? 'Ocultar demonstração' : 'Ver demonstração'}</span>
                    </button>
                  )}

                  <button
                    type="button"
                    onClick={() => setSubstitutionModal({
                      exerciseIndex: exIdx,
                      currentName: exercise.currentName,
                      muscle: exercise.muscle,
                      movementLabel: exercise.movementLabel
                    })}
                    className="px-3 py-1.5 rounded-xl text-xs font-bold bg-elevated hover:bg-[var(--bg-hover)] text-gray-300 hover:text-white flex items-center gap-1.5 border border-app transition-colors"
                  >
                    <RefreshCw className="w-3 h-3" />
                    <span>Substituir</span>
                  </button>
                </div>
              </div>

              {/* DEMONSTRAÇÃO EM GIF VISÍVEL QUANDO EXPANDIDA */}
              {isDemoOpen && demoUrl && (
                <div className="my-3 rounded-2xl overflow-hidden border border-app bg-app p-3 text-center animate-in fade-in zoom-in-95 duration-200">
                  <div className="relative inline-block max-w-full">
                    <img
                      src={demoUrl}
                      alt={exercise.currentName}
                      className="max-h-56 mx-auto object-contain rounded-xl shadow-lg"
                      loading="eager"
                    />
                    <span className="text-[10px] text-gray-400 block mt-1.5">
                      Execução biomecânica de {exercise.currentName}
                    </span>
                  </div>
                </div>
              )}

              {/* Tabela de Séries */}
              <div className="space-y-2 mt-3">
                <div className="grid grid-cols-12 gap-1.5 text-[10px] uppercase font-bold text-gray-400 px-1">
                  <div className="col-span-2 text-center">Série</div>
                  <div className="col-span-2 text-center">Anterior</div>
                  <div className="col-span-4 text-center">Carga (kg)</div>
                  <div className="col-span-2 text-center">Reps</div>
                  <div className="col-span-2 text-center">Ações</div>
                </div>

                {exercise.sets.map((set, setIdx) => (
                  <div 
                    key={set.id}
                    className={`grid grid-cols-12 gap-1.5 items-center p-2 rounded-xl transition-colors border ${
                      set.completed 
                        ? 'bg-brand-subtle border-brand' 
                        : 'bg-card-subtle border-app'
                    }`}
                  >
                    <div className="col-span-2 flex flex-col items-center">
                      <span className="font-bold text-xs text-white">#{set.number}</span>
                      <span className="text-[9px] text-gray-400 font-semibold">{set.label}</span>
                      {set.technique && (
                        <span className="text-[8px] text-brand font-bold leading-none mt-0.5">{set.technique}</span>
                      )}
                    </div>

                    <div className="col-span-2 text-center text-[11px] text-gray-400">
                      {set.prevWeight ? `${set.prevWeight}kg` : '—'}
                    </div>

                    {/* Steppers de Carga */}
                    <div className="col-span-4 flex items-center justify-center gap-1">
                      <button
                        type="button"
                        onClick={() => adjustWeight(exIdx, setIdx, -2.5)}
                        className="w-6 h-7 rounded bg-elevated text-gray-300 hover:text-white text-xs font-bold shrink-0"
                      >
                        -
                      </button>
                      <input
                        type="number"
                        step="0.5"
                        min="0"
                        value={set.weight || ''}
                        placeholder="0"
                        onChange={e => updateSetValue(exIdx, setIdx, 'weight', parseFloat(e.target.value) || 0)}
                        className="w-12 text-center py-1 text-sm font-bold bg-app border border-app rounded-lg text-white focus:outline-none focus:border-brand-solid"
                      />
                      <button
                        type="button"
                        onClick={() => adjustWeight(exIdx, setIdx, 2.5)}
                        className="w-6 h-7 rounded bg-elevated text-gray-300 hover:text-white text-xs font-bold shrink-0"
                      >
                        +
                      </button>
                    </div>

                    {/* Input de Repetições */}
                    <div className="col-span-2 flex justify-center">
                      <input
                        type="number"
                        min="0"
                        value={set.reps || ''}
                        placeholder={set.targetReps || '0'}
                        onChange={e => updateSetValue(exIdx, setIdx, 'reps', parseInt(e.target.value, 10) || 0)}
                        className="w-11 text-center py-1 text-sm font-bold bg-app border border-app rounded-lg text-white focus:outline-none focus:border-brand-solid"
                      />
                    </div>

                    {/* Botão de Concluir Série & Botão de Remover Série (Lixeira) */}
                    <div className="col-span-2 flex items-center justify-center gap-1.5">
                      <button
                        type="button"
                        onClick={() => toggleSetComplete(exIdx, setIdx)}
                        className={`w-7 h-7 rounded-lg flex items-center justify-center transition-all ${
                          set.completed
                            ? 'bg-brand text-black shadow-brand'
                            : 'bg-elevated text-gray-400 hover:bg-[var(--bg-hover)]'
                        }`}
                        title={set.completed ? 'Desmarcar série' : 'Marcar série concluída'}
                      >
                        <Check className="w-4 h-4 stroke-[3]" />
                      </button>

                      {/* LIXEIRA: REMOVER SÉRIE */}
                      <button
                        type="button"
                        onClick={() => removeSet(exIdx, setIdx)}
                        className="w-6 h-7 rounded flex items-center justify-center text-gray-400 hover:text-red-400 hover:bg-red-500/10 transition-colors"
                        title="Remover esta série"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              {/* Botão "+ Acrescentar série" */}
              <div className="mt-3 pt-2 border-t border-app flex justify-between items-center">
                <span className="text-[11px] text-gray-400">
                  Alvo sugerido: {exercise.sets[0]?.targetReps || '8-12'} reps
                </span>
                <button
                  type="button"
                  onClick={() => addSet(exIdx)}
                  className="px-3 py-1 text-xs font-semibold rounded-lg bg-elevated hover:bg-[var(--bg-hover)] text-brand flex items-center gap-1 transition-colors"
                >
                  <Plus className="w-3.5 h-3.5" />
                  <span>Adicionar série</span>
                </button>
              </div>
            </article>
          );
        })}

        {/* Botão "+ Adicionar outro exercício ao treino" */}
        <button
          type="button"
          onClick={() => setShowAddModal(true)}
          className="w-full py-3.5 rounded-2xl border-2 border-dashed border-app hover:border-brand-solid bg-card/50 text-gray-300 hover:text-brand font-semibold text-xs flex items-center justify-center gap-2 transition-all"
        >
          <Plus className="w-4 h-4" />
          <span>Adicionar outro exercício a este treino</span>
        </button>
      </div>

      {/* Barra de Rodapé Fixa - Finalizar Treino */}
      <footer className="bg-card border-t border-app px-4 py-3 shrink-0 flex items-center justify-between shadow-2xl">
        <div className="text-xs">
          <span className="text-gray-400 block">Progresso</span>
          <span className="font-bold text-white">
            {totalCompletedSets} séries feitas
          </span>
        </div>

        <button
          onClick={handleFinish}
          className="px-6 py-3 rounded-xl bg-brand hover:bg-brand-hover text-black font-extrabold text-sm shadow-brand transition-all flex items-center gap-2 active:scale-98"
        >
          <Check className="w-5 h-5 stroke-[2.5]" />
          <span>Finalizar Treino</span>
        </button>
      </footer>

      {substitutionModal && (
        <ExerciseSubstitutionModal
          currentExerciseName={substitutionModal.currentName}
          targetMuscle={substitutionModal.muscle}
          movementLabel={substitutionModal.movementLabel}
          onSelect={handleSubstituteExercise}
          onClose={() => setSubstitutionModal(null)}
        />
      )}

      {showAddModal && (
        <AddExerciseModal
          onAdd={handleAddExercise}
          onClose={() => setShowAddModal(false)}
        />
      )}

      {confirmExit && (
        <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-card border border-app rounded-3xl p-5 max-w-sm w-full space-y-4 shadow-2xl animate-in zoom-in-95 duration-150">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-2xl bg-red-500/10 text-red-400 border border-red-500/20 shrink-0">
                <AlertTriangle className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-base font-bold text-white">Sair da Sessão</h3>
                <p className="text-xs text-gray-400">Escolha o que deseja fazer com este treino</p>
              </div>
            </div>

            <div className="space-y-2 pt-1">
              {/* Opção 1: Minimizar e Manter em Segundo Plano */}
              <button
                type="button"
                onClick={() => {
                  setConfirmExit(false);
                  onMinimizeWorkout();
                }}
                className="w-full p-3 rounded-2xl bg-card-subtle hover:bg-elevated border border-app text-left transition-colors flex items-center justify-between group"
              >
                <div>
                  <span className="text-xs font-bold text-white group-hover:text-brand block">
                    Minimizar e Manter Ativo
                  </span>
                  <span className="text-[11px] text-gray-400 block mt-0.5">
                    O cronômetro continua e você pode retomar na tela inicial.
                  </span>
                </div>
                <ChevronRight className="w-4 h-4 text-gray-400 group-hover:text-brand shrink-0 ml-2" />
              </button>

              {/* Opção 2: Descartar Treino (Sem Salvar no Histórico) */}
              <button
                type="button"
                onClick={() => {
                  if (confirm('Tem certeza que deseja DESCARTAR este treino? Todos os dados desta sessão serão apagados e ela não constará no histórico.')) {
                    setConfirmExit(false);
                    onDiscardWorkout();
                  }
                }}
                className="w-full p-3 rounded-2xl bg-red-500/10 hover:bg-red-500/20 border border-red-500/20 hover:border-red-500/40 text-left transition-colors flex items-center justify-between group"
              >
                <div>
                  <span className="text-xs font-bold text-red-400 flex items-center gap-1.5 block">
                    <Trash2 className="w-3.5 h-3.5" />
                    Descartar Treino
                  </span>
                  <span className="text-[11px] text-red-400/80 block mt-0.5">
                    Cancela e apaga a sessão sem salvar no histórico.
                  </span>
                </div>
                <ChevronRight className="w-4 h-4 text-red-400 shrink-0 ml-2" />
              </button>
            </div>

            <div className="pt-2 border-t border-app">
              <button
                type="button"
                onClick={() => setConfirmExit(false)}
                className="w-full py-2.5 rounded-xl bg-elevated hover:bg-[var(--bg-hover)] text-xs font-bold text-gray-300"
              >
                Continuar Treinando
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
