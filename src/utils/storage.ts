import { 
  ActiveWorkoutSession, 
  HistoryEntry, 
  MuscleGroup, 
  MuscleRecoveryState, 
  WorkoutPlanRaw 
} from '../types';
import { DEFAULT_PLANS } from '../data/defaultPlans';
import { MUSCLE_LABELS } from '../data/exerciseCatalog';

const KEYS = {
  CURRENT_PLAN_ID: 'forge_plan_id',
  CUSTOM_PLANS: 'forge_custom_plans',
  ACTIVE_WORKOUT: 'forge_active_workout',
  HISTORY: 'forge_history',
  WEIGHTS: 'forge_weights',
  RECOVERY: 'forge_recovery',
  SETTINGS: 'forge_settings',
};

export interface AppSettings {
  standardRestSeconds: number;
  restPauseSeconds: number;
  theme: string;
}

const DEFAULT_SETTINGS: AppSettings = {
  standardRestSeconds: 90,
  restPauseSeconds: 10,
  theme: 'emerald'
};

// Utilitários de leitura/escrita segura no localStorage
function safeGet<T>(key: string, fallback: T): T {
  if (typeof window === 'undefined') return fallback;
  try {
    const val = localStorage.getItem(key);
    return val ? JSON.parse(val) : fallback;
  } catch (err) {
    console.error(`Erro ao ler localStorage[${key}]:`, err);
    return fallback;
  }
}

function safeSet<T>(key: string, value: T): void {
  if (typeof window === 'undefined') return;
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (err) {
    console.error(`Erro ao gravar localStorage[${key}]:`, err);
  }
}

// Configurações
export function getAppSettings(): AppSettings {
  return safeGet<AppSettings>(KEYS.SETTINGS, DEFAULT_SETTINGS);
}

export function saveAppSettings(settings: Partial<AppSettings>): AppSettings {
  const current = getAppSettings();
  const updated = { ...current, ...settings };
  safeSet(KEYS.SETTINGS, updated);
  return updated;
}

// Planos
export function getAllPlans(): WorkoutPlanRaw[] {
  const custom = safeGet<WorkoutPlanRaw[]>(KEYS.CUSTOM_PLANS, []);
  return [...DEFAULT_PLANS, ...custom];
}

export function getCurrentPlanId(): string {
  if (typeof window !== 'undefined') {
    try {
      const v1 = localStorage.getItem(KEYS.CURRENT_PLAN_ID);
      if (v1) {
        const parsed = JSON.parse(v1);
        if (parsed) return parsed;
      }
      const v2 = localStorage.getItem('forge-plan');
      if (v2) {
        try {
          return JSON.parse(v2);
        } catch {
          return v2;
        }
      }
    } catch {}
  }
  return 'abcd-int';
}

export function setCurrentPlanId(id: string): void {
  safeSet(KEYS.CURRENT_PLAN_ID, id);
  if (typeof window !== 'undefined') {
    try {
      localStorage.setItem('forge-plan', JSON.stringify(id));
    } catch {}
  }
}

export function getActivePlan(): WorkoutPlanRaw {
  const plans = getAllPlans();
  const id = getCurrentPlanId();
  return plans.find(p => p.id === id) || plans.find(p => p.id === 'abcd-int') || plans[0] || DEFAULT_PLANS[0];
}

export function saveCustomPlan(plan: WorkoutPlanRaw): void {
  const custom = safeGet<WorkoutPlanRaw[]>(KEYS.CUSTOM_PLANS, []);
  const idx = custom.findIndex(p => p.id === plan.id);
  if (idx >= 0) {
    custom[idx] = plan;
  } else {
    custom.unshift(plan);
  }
  safeSet(KEYS.CUSTOM_PLANS, custom);
}

export function deleteCustomPlan(planId: string): void {
  const custom = safeGet<WorkoutPlanRaw[]>(KEYS.CUSTOM_PLANS, []);
  const filtered = custom.filter(p => p.id !== planId);
  safeSet(KEYS.CUSTOM_PLANS, filtered);
  if (getCurrentPlanId() === planId) {
    setCurrentPlanId('abcd-int');
  }
}

// Treino Ativo (recuperação de sessão)
export function getActiveWorkout(): ActiveWorkoutSession | null {
  return safeGet<ActiveWorkoutSession | null>(KEYS.ACTIVE_WORKOUT, null);
}

export function saveActiveWorkout(workout: ActiveWorkoutSession | null): void {
  if (workout === null) {
    localStorage.removeItem(KEYS.ACTIVE_WORKOUT);
  } else {
    safeSet(KEYS.ACTIVE_WORKOUT, workout);
  }
}

// Pesos Memorizados
export function getSavedWeights(): Record<string, number> {
  return safeGet<Record<string, number>>(KEYS.WEIGHTS, {});
}

export function getSavedWeight(exerciseName: string): number | undefined {
  const weights = getSavedWeights();
  return weights[exerciseName];
}

// Histórico de Treinos
export function getWorkoutHistory(): HistoryEntry[] {
  return safeGet<HistoryEntry[]>(KEYS.HISTORY, []);
}

// Salva Treino Concluído
export function completeWorkout(session: ActiveWorkoutSession): HistoryEntry {
  const history = getWorkoutHistory();
  const weights = getSavedWeights();
  const recovery = safeGet<Record<string, { timestamp: number; totalSets: number }>>(KEYS.RECOVERY, {});

  let totalSetsCount = 0;
  let totalVolumeKg = 0;

  const exercisesSummary = session.exercises.map(ex => {
    let exSetsCount = 0;
    let exRepsCount = 0;
    let exMaxWeight = 0;
    let exVolume = 0;

    const series = ex.sets
      .filter(s => s.completed)
      .map(s => {
        exSetsCount++;
        exRepsCount += s.reps;
        exMaxWeight = Math.max(exMaxWeight, s.weight);
        const setVolume = Math.round(s.weight * s.reps);
        exVolume += setVolume;

        return {
          setNumber: s.number,
          type: s.label,
          weight: s.weight,
          reps: s.reps,
          volume: setVolume,
          side: s.side || null
        };
      });

    totalSetsCount += exSetsCount;
    totalVolumeKg += exVolume;

    // Atualiza o peso memorizado para a próxima vez
    if (exMaxWeight > 0) {
      weights[ex.currentName] = exMaxWeight;
    }

    // Registra recuperação para o músculo
    if (exSetsCount > 0 && ex.muscle) {
      const prev = recovery[ex.muscle] || { timestamp: 0, totalSets: 0 };
      recovery[ex.muscle] = {
        timestamp: Date.now(),
        totalSets: prev.totalSets + exSetsCount
      };
    }

    return {
      name: ex.currentName,
      muscle: ex.muscle,
      totalSets: exSetsCount,
      totalReps: exRepsCount,
      maxWeight: exMaxWeight,
      totalVolume: exVolume,
      series
    };
  }).filter(e => e.series.length > 0);

  const durationMinutes = Math.max(1, Math.round(session.elapsedSeconds / 60));

  const newEntry: HistoryEntry = {
    id: `hist_${Date.now()}`,
    name: `${session.workoutName}`,
    plan: session.planName,
    dateStr: new Intl.DateTimeFormat('pt-BR', {
      day: '2-digit',
      month: 'short',
      hour: '2-digit',
      minute: '2-digit'
    }).format(new Date()),
    timestamp: Date.now(),
    durationMinutes,
    setsCount: totalSetsCount,
    totalVolumeKg,
    exercises: exercisesSummary
  };

  history.unshift(newEntry);
  safeSet(KEYS.HISTORY, history);
  safeSet(KEYS.WEIGHTS, weights);
  safeSet(KEYS.RECOVERY, recovery);
  saveActiveWorkout(null);

  return newEntry;
}

// Recuperação Muscular
export function getMuscleRecoveryData(): Record<MuscleGroup, MuscleRecoveryState> {
  const recovery = safeGet<Record<string, { timestamp: number; totalSets: number }>>(KEYS.RECOVERY, {});
  const now = Date.now();

  const muscles: MuscleGroup[] = [
    'chest', 'back', 'shoulders', 'biceps', 'triceps', 
    'quads', 'hamstrings', 'glutes', 'calves', 'core'
  ];

  const result = {} as Record<MuscleGroup, MuscleRecoveryState>;

  muscles.forEach(m => {
    const data = recovery[m];
    if (!data || !data.timestamp) {
      result[m] = {
        lastTrained: 0,
        totalSets: 0,
        status: 'ready',
        hoursElapsed: 999,
        colorHex: '#10b981', // Verde
        statusText: 'Pronto para treinar'
      };
      return;
    }

    const hours = (now - data.timestamp) / (1000 * 60 * 60);

    if (hours < 48) {
      result[m] = {
        lastTrained: data.timestamp,
        totalSets: data.totalSets,
        status: 'recent',
        hoursElapsed: Math.round(hours),
        colorHex: '#ef4444', // Vermelho
        statusText: `Treinado há ${Math.round(hours)}h (Recente)`
      };
    } else if (hours < 72) {
      result[m] = {
        lastTrained: data.timestamp,
        totalSets: data.totalSets,
        status: 'recovering',
        hoursElapsed: Math.round(hours),
        colorHex: '#eab308', // Amarelo
        statusText: `Treinado há ${Math.round(hours)}h (Recuperando)`
      };
    } else {
      result[m] = {
        lastTrained: data.timestamp,
        totalSets: data.totalSets,
        status: 'ready',
        hoursElapsed: Math.round(hours),
        colorHex: '#10b981', // Verde
        statusText: 'Pronto para treinar'
      };
    }
  });

  return result;
}

// Backup & Exportação
export function exportBackupJSON(): string {
  const data = {
    version: '1.0',
    exportedAt: new Date().toISOString(),
    planId: getCurrentPlanId(),
    customPlans: safeGet(KEYS.CUSTOM_PLANS, []),
    history: getWorkoutHistory(),
    weights: getSavedWeights(),
    recovery: safeGet(KEYS.RECOVERY, {}),
    settings: getAppSettings()
  };
  return JSON.stringify(data, null, 2);
}

export function importBackupJSON(jsonStr: string): boolean {
  try {
    const parsed = JSON.parse(jsonStr);
    if (!parsed || typeof parsed !== 'object') return false;

    if (parsed.planId) setCurrentPlanId(parsed.planId);
    if (parsed.customPlans) safeSet(KEYS.CUSTOM_PLANS, parsed.customPlans);
    if (parsed.history) safeSet(KEYS.HISTORY, parsed.history);
    if (parsed.weights) safeSet(KEYS.WEIGHTS, parsed.weights);
    if (parsed.recovery) safeSet(KEYS.RECOVERY, parsed.recovery);
    if (parsed.settings) safeSet(KEYS.SETTINGS, parsed.settings);

    return true;
  } catch (err) {
    console.error('Falha ao restaurar backup:', err);
    return false;
  }
}

export function exportHistoryCSV(): string {
  const history = getWorkoutHistory();
  const rows: string[] = [
    'Data,Treino,Plano,Duração (min),Exercício,Série,Carga (kg),Reps,Volume (kg)'
  ];

  history.forEach(h => {
    h.exercises.forEach(ex => {
      ex.series.forEach(s => {
        rows.push(
          `"${h.dateStr}","${h.name}","${h.plan}",${h.durationMinutes},"${ex.name}",${s.setNumber},${s.weight},${s.reps},${s.volume}`
        );
      });
    });
  });

  return rows.join('\n');
}
