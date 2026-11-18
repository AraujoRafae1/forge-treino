import { PlanExerciseRaw, WorkoutSet, MuscleGroup } from '../types';
import { EXERCISE_CATALOG } from '../data/exerciseCatalog';

export interface ParsedSeries {
  type: string;
  category: 'warmup' | 'feeder' | 'work' | 'rest-pause' | 'drop' | 'partials' | string;
  rest: number;
  factor: number;
  reps: string;
  technique?: string;
}

export function countFor(meta: string, label: string, fallback = 0): number {
  const re = new RegExp('(\\d+)(?:-(\\d+))?\\s+' + label, 'i');
  const m = meta.match(re);
  return m ? +(m[2] || m[1]) : fallback;
}

export function parseSeriesForExercise(
  exercise: PlanExerciseRaw,
  standardRest = 90,
  restPause = 10
): ParsedSeries[] {
  const name = exercise[0] || '';
  const meta = exercise[1] || '';
  const workReps = exercise[2] || '8-12';
  const technique = exercise[4];
  const options = exercise[5];

  const arr: ParsedSeries[] = [];

  const warm = countFor(meta, 'aquec\\.', 0);
  const adjust = countFor(meta, 'ajuste', 0);
  const work = countFor(
    meta,
    'trabalho',
    meta.includes('séries') ? countFor(meta, 'séries', 1) : 1
  );

  for (let i = 0; i < warm; i++) {
    arr.push({
      type: 'Aquec.',
      category: 'warmup',
      rest: 60,
      factor: 0.25,
      reps: '10-15'
    });
  }

  for (let i = 0; i < adjust; i++) {
    arr.push({
      type: 'Ajuste',
      category: 'feeder',
      rest: standardRest,
      factor: 0.6,
      reps: options?.adjustReps?.[i] || '4-6'
    });
  }

  for (let i = 0; i < work; i++) {
    arr.push({
      type: 'Trabalho',
      category: 'work',
      rest: standardRest,
      factor: 1,
      reps: options?.workReps?.[i] || workReps
    });
  }

  if (technique?.kind === 'rest-pause') {
    if (arr.length) arr[arr.length - 1].rest = restPause;
    const count = technique.count || 2;
    for (let i = 0; i < count; i++) {
      arr.push({
        type: `Rest-pause ${i + 1}`,
        category: 'rest-pause',
        rest: i < count - 1 ? restPause : standardRest,
        factor: 0.8,
        reps: workReps,
        technique: `${technique.seconds || restPause}s`
      });
    }
  }

  if (technique?.kind === 'drop') {
    if (arr.length) arr[arr.length - 1].rest = 0;
    const count = technique.count || 1;
    for (let i = 0; i < count; i++) {
      arr.push({
        type: `Drop set ${i + 1}`,
        category: 'drop',
        rest: standardRest,
        factor: 0.9,
        reps: 'Máx.',
        technique: 'imediato'
      });
    }
  }

  if (technique?.kind === 'partials') {
    if (arr.length) arr[arr.length - 1].rest = 0;
    arr.push({
      type: 'Parciais',
      category: 'partials',
      rest: standardRest,
      factor: 0.7,
      reps: '10',
      technique: 'após a falha'
    });
  }

  return arr;
}
