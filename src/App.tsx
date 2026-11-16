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

  // Se houver treino salvo em andamento ao abrir a página, mantém o estado com GIFs garantidos
  useEffect(() => {
    const saved = getActiveWorkout();
    if (saved) {
      // Garante que todos os exercícios do treino salvo tenham o demoUrl preenchido
      const backfilled: ActiveWorkoutSession = {
        ...saved,
        exercises: saved.exercises.map(ex => ({
          ...ex,
          demoUrl: ex.demoUrl || EXERCISE_CATALOG.find(
            c => c.name.toLowerCase() === ex.currentName.toLowerCase()
          )?.demoUrl
        }))
      };
      setActiveWorkout(backfilled);
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
      const desc = raw[1];
      const targetReps = raw[2] || '8-12';
      const tech = raw[4];

      const catalogEntry = EXERCISE_CATALOG.find(e => e.name.toLowerCase() === name.toLowerCase());
      const savedWeight = getSavedWeight(name) || 0;

      const sets: WorkoutSet[] = [];
      let setNum = 1;

      if (/aquec/i.test(desc)) {
        sets.push({
          id: `set_${idx}_${setNum}`,
          number: setNum++,
          type: 'warmup',
          label: 'Aquec.',
          targetReps: '12-15',
          weight: Math.round(savedWeight * 0.5),
          reps: 12,
          completed: false,
          prevWeight: savedWeight
        });
      }

      if (/ajuste/i.test(desc)) {
        sets.push({
          id: `set_${idx}_${setNum}`,
          number: setNum++,
          type: 'feeder',
          label: 'Ajuste',
          targetReps: '4-6',
          weight: Math.round(savedWeight * 0.75),
          reps: 6,
          completed: false,
          prevWeight: savedWeight
        });
      }

      const workSetsCount = tech?.kind === 'rest-pause' ? 1 : 2;
      for (let i = 0; i < workSetsCount; i++) {
        sets.push({
          id: `set_${idx}_${setNum}`,
          number: setNum++,
          type: 'work',
          label: 'Trabalho',
          targetReps: targetReps,
          weight: savedWeight,
          reps: 8,
          completed: false,
          prevWeight: savedWeight
        });
      }

      if (tech?.kind === 'rest-pause') {
        const rpCount = tech.count || 2;
        for (let i = 0; i < rpCount; i++) {
          sets.push({
            id: `set_${idx}_${setNum}`,
            number: setNum++,
            type: 'rest-pause',
            label: `RP ${tech.seconds || settings.restPauseSeconds}s`,
            targetReps: 'Falha (3-5)',
            weight: savedWeight,
            reps: 4,
            completed: false,
            prevWeight: savedWeight
          });
        }
      }

      if (tech?.kind === 'drop') {
        sets.push({
          id: `set_${idx}_${setNum}`,
          number: setNum++,
          type: 'drop',
          label: 'Drop Set',
          targetReps: 'Falha',
          weight: Math.round(savedWeight * 0.7),
          reps: 8,
          completed: false,
          prevWeight: savedWeight
        });
      }

      if (sets.length === 0) {
        sets.push(
          {
            id: `set_${idx}_1`,
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
            id: `set_${idx}_2`,
            number: 2,
            type: 'work',
            label: 'Trabalho',
            targetReps: targetReps,
            weight: savedWeight,
            reps: 10,
            completed: false,
            prevWeight: savedWeight
          },
          {
            id: `set_${idx}_3`,
            number: 3,
            type: 'work',
            label: 'Trabalho',
            targetReps: targetReps,
            weight: savedWeight,
            reps: 10,
            completed: false,
            prevWeight: savedWeight
          }
        );
      }

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
        />
      )}
    </div>
  );
}

export default App;
