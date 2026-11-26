import React, { useState, useEffect } from 'react';
import { 
  ActiveWorkoutSession, 
  ActiveExerciseSession, 
  WorkoutPlanRaw, 
  WorkoutSet 
} from './types';
import { 
  getActivePlan, 
  getActiveWorkout, 
  getAppSettings, 
  getMuscleRecoveryData, 
  getSavedWeight, 
  saveActiveWorkout 
} from './utils/storage';
import { parseSeriesForExercise, calculateWorkoutElapsedSeconds } from './utils/workoutParser';
import { cancelScheduledRestAlarm } from './utils/audioAlarm';
import { applyTheme } from './utils/theme';
import { EXERCISE_CATALOG, detectMuscleFromName, MUSCLE_LABELS } from './data/exerciseCatalog';
import { HomeTab } from './components/HomeTab';
import { PlansTab } from './components/PlansTab';
import { HistoryTab } from './components/HistoryTab';
import { SettingsTab } from './components/SettingsTab';
import { Navbar, TabType } from './components/Navbar';
import { LiveWorkoutModal } from './components/LiveWorkoutModal';

export function App() {
  const [activeTab, setActiveTab] = useState<TabType>('home');
  const [plan, setPlan] = useState<WorkoutPlanRaw>(getActivePlan());
  const [activeWorkout, setActiveWorkout] = useState<ActiveWorkoutSession | null>(getActiveWorkout());
  const [recoveryData, setRecoveryData] = useState(getMuscleRecoveryData());
  const [settings, setSettings] = useState(getAppSettings());
  const [isLiveWorkoutOpen, setIsLiveWorkoutOpen] = useState(false);

  // Aplica o tema salvo (cor customizada) ao carregar
  useEffect(() => {
    applyTheme(settings.theme || 'green');
  }, [settings.theme]);

  // Se houver treino salvo em andamento ao abrir a página, mantém o estado com GIFs garantidos e tempo recalculado
  useEffect(() => {
    const saved = getActiveWorkout();
    if (saved) {
      const now = Date.now();
      const realStart = saved.startTimestamp || (now - (saved.elapsedSeconds || 0) * 1000);
      const safeSession: ActiveWorkoutSession = {
        ...saved,
        startTimestamp: realStart,
        pausedTotalMs: saved.pausedTotalMs || 0
      };
      const realElapsed = calculateWorkoutElapsedSeconds(safeSession, now);

      // Garante que todos os exercícios do treino salvo tenham o demoUrl preenchido
      const backfilled: ActiveWorkoutSession = {
        ...safeSession,
        elapsedSeconds: realElapsed,
        exercises: saved.exercises.map(ex => ({
          ...ex,
          demoUrl: ex.demoUrl || EXERCISE_CATALOG.find(
            c => c.name.toLowerCase() === ex.currentName.toLowerCase()
          )?.demoUrl
        }))
      };
      setActiveWorkout(backfilled);
      saveActiveWorkout(backfilled);
      setIsLiveWorkoutOpen(true);
    }
  }, []);

  const refreshData = () => {
    const currentSettings = getAppSettings();
    setPlan(getActivePlan());
    setRecoveryData(getMuscleRecoveryData());
    setSettings(currentSettings);
    applyTheme(currentSettings.theme || 'green');
  };

  const handleStartWorkout = (workoutId: string) => {
    const targetWorkout = plan.workouts.find(w => w.id === workoutId) || plan.workouts[0];

    const exercises: ActiveExerciseSession[] = targetWorkout.exercises.map((raw, idx) => {
      const name = raw[0];
      const isUnilateral = Boolean(raw[3]);
      const catalogEntry = EXERCISE_CATALOG.find(e => e.name.toLowerCase() === name.toLowerCase());
      const savedWeight = getSavedWeight(name) || 0;

      const parsedSeries = parseSeriesForExercise(
        raw, 
        settings.standardRestSeconds || 90, 
        settings.restPauseSeconds || 10
      );

      const sets: WorkoutSet[] = parsedSeries.map((s, sIdx) => {
        let defaultReps = 10;
        if (s.reps && s.reps !== 'Máx.') {
          const m = s.reps.match(/\d+/);
          if (m) defaultReps = parseInt(m[0], 10);
        }

        const suggestedWeight = Math.round(savedWeight * s.factor);

        return {
          id: `set_${idx}_${sIdx + 1}`,
          number: sIdx + 1,
          type: s.category,
          label: s.type,
          targetReps: s.reps,
          weight: suggestedWeight,
          reps: defaultReps,
          completed: false,
          prevWeight: savedWeight,
          restSeconds: s.rest,
          technique: s.technique,
          factor: s.factor,
          side: isUnilateral ? 'E' : null
        };
      });

      const detectedMuscle = catalogEntry?.muscle || detectMuscleFromName(name);
      return {
        originalName: name,
        currentName: name,
        muscle: detectedMuscle,
        subGroup: catalogEntry?.subGroup || `${detectedMuscle}_default`,
        movementLabel: catalogEntry?.movementLabel || MUSCLE_LABELS[detectedMuscle] || 'Geral',
        demoUrl: catalogEntry?.demoUrl,
        sets
      };
    });

    const newSession: ActiveWorkoutSession = {
      planId: plan.id,
      planName: plan.name,
      workoutId: targetWorkout.id,
      workoutName: `Treino ${targetWorkout.id} • ${targetWorkout.name}`,
      startTimestamp: Date.now(),
      elapsedSeconds: 0,
      isPaused: false,
      pausedAtTimestamp: null,
      pausedTotalMs: 0,
      exercises,
      restTimer: null
    };

    setActiveWorkout(newSession);
    saveActiveWorkout(newSession);
    setIsLiveWorkoutOpen(true);
  };

  const handleResumeWorkout = () => {
    if (activeWorkout) {
      setIsLiveWorkoutOpen(true);
    }
  };

  const handleMinimizeWorkout = () => {
    setIsLiveWorkoutOpen(false);
  };

  const handleDiscardWorkout = () => {
    cancelScheduledRestAlarm();
    setActiveWorkout(null);
    saveActiveWorkout(null);
    setIsLiveWorkoutOpen(false);
    refreshData();
  };

  const handleFinishWorkout = () => {
    setActiveWorkout(null);
    setIsLiveWorkoutOpen(false);
    refreshData();
    setActiveTab('history');
  };

  return (
    <div className="min-h-screen bg-app text-gray-100 flex flex-col font-sans transition-colors duration-200">
      <main className="flex-1 w-full max-w-lg mx-auto px-4 pt-4">
        {activeTab === 'home' && (
          <HomeTab
            plan={plan}
            activeWorkout={activeWorkout}
            recoveryData={recoveryData}
            onStartWorkout={handleStartWorkout}
            onResumeWorkout={handleResumeWorkout}
            onDiscardWorkout={handleDiscardWorkout}
            onOpenPlans={() => setActiveTab('plans')}
            standardRestSeconds={settings.standardRestSeconds}
          />
        )}

        {activeTab === 'plans' && (
          <PlansTab
            onPlanChanged={() => {
              refreshData();
              setActiveTab('home');
            }}
          />
        )}

        {activeTab === 'history' && <HistoryTab />}

        {activeTab === 'settings' && (
          <SettingsTab onSettingsChanged={refreshData} />
        )}
      </main>

      <Navbar
        activeTab={activeTab}
        onTabChange={setActiveTab}
        hasActiveWorkout={Boolean(activeWorkout)}
      />

      {isLiveWorkoutOpen && activeWorkout && (
        <LiveWorkoutModal
          session={activeWorkout}
          onUpdateSession={setActiveWorkout}
          onFinishWorkout={handleFinishWorkout}
          onDiscardWorkout={handleDiscardWorkout}
          onMinimizeWorkout={handleMinimizeWorkout}
          standardRestSeconds={settings.standardRestSeconds}
          soundEnabled={settings.soundEnabled !== false}
          vibrationEnabled={settings.vibrationEnabled !== false}
        />
      )}
    </div>
  );
}

export default App;
