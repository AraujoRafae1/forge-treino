export type MuscleGroup = 
  | 'chest' 
  | 'back' 
  | 'shoulders' 
  | 'biceps' 
  | 'triceps' 
  | 'quads' 
  | 'hamstrings' 
  | 'glutes' 
  | 'calves' 
  | 'core';

export interface SetTechnique {
  kind: 'rest-pause' | 'drop' | 'peak' | 'normal' | 'partials' | string;
  count?: number;
  seconds?: number;
}

export interface WorkoutSet {
  id: string;
  number: number;
  type: 'warmup' | 'feeder' | 'work' | 'rest-pause' | 'drop' | 'partials' | string;
  label: string; // "Aquec.", "Ajuste", "Trabalho", "Rest-pause 1", etc.
  targetReps: string;
  weight: number;
  reps: number;
  completed: boolean;
  prevWeight?: number;
  prevReps?: number;
  side?: 'E' | 'D' | null;
  restSeconds?: number;
  technique?: string;
  factor?: number;
}

export interface CatalogExercise {
  name: string;
  muscle: MuscleGroup;
  subGroup: string;
  movementLabel: string;
  demoUrl?: string;
}

export interface PlanExerciseRaw {
  0: string; // name
  1: string; // prescription/desc
  2: string; // reps
  3?: boolean; // unilateral
  4?: SetTechnique | null;
  [key: number]: any;
}

export interface WorkoutPlanRaw {
  id: string;
  name: string;
  level: string;
  days: number;
  note: string;
  workouts: {
    id: string;
    name: string;
    exercises: PlanExerciseRaw[];
  }[];
}

export interface ActiveExerciseSession {
  originalName: string;
  currentName: string;
  muscle: MuscleGroup;
  subGroup: string;
  movementLabel: string;
  demoUrl?: string;
  sets: WorkoutSet[];
}

export interface ActiveWorkoutSession {
  planId: string;
  planName: string;
  workoutId: string;
  workoutName: string;
  startTimestamp: number;
  elapsedSeconds: number;
  isPaused: boolean;
  pausedAtTimestamp: number | null;
  exercises: ActiveExerciseSession[];
  restTimer: {
    totalSeconds: number;
    endTimestamp: number;
    exerciseIndex: number;
    setIndex: number;
    exerciseName: string;
  } | null;
}

export interface HistorySetItem {
  setNumber: number;
  type: string;
  weight: number;
  reps: number;
  volume: number;
  side?: 'E' | 'D' | null;
}

export interface HistoryExerciseItem {
  name: string;
  muscle: MuscleGroup;
  totalSets: number;
  totalReps: number;
  maxWeight: number;
  totalVolume: number;
  series: HistorySetItem[];
}

export interface HistoryEntry {
  id: string;
  name: string;
  plan: string;
  dateStr: string;
  timestamp: number;
  durationMinutes: number;
  setsCount: number;
  totalVolumeKg: number;
  exercises: HistoryExerciseItem[];
}

export interface MuscleRecoveryState {
  lastTrained: number; // timestamp
  totalSets: number;
  status: 'recent' | 'recovering' | 'ready'; // red, yellow, green
  hoursElapsed: number;
  colorHex: string;
  statusText: string;
}
