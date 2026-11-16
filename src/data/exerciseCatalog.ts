import { CatalogExercise, MuscleGroup } from '../types';

export const EXERCISE_CATALOG: CatalogExercise[] = [
  {
    "name": "Supino inclinado com halteres",
    "muscle": "chest",
    "subGroup": "chest_incline",
    "movementLabel": "Peitoral Superior (Inclinado)",
    "demoUrl": "https://cdn.jsdelivr.net/gh/JahelCuadrado/ExerciseGymGifsDB@v1.1.0/pectorals/dumbbell-incline-bench-press.gif"
  },
  {
    "name": "Supino reto com halteres",
    "muscle": "chest",
    "subGroup": "chest_flat",
    "movementLabel": "Peitoral Médio (Reto)",
    "demoUrl": "https://cdn.jsdelivr.net/gh/JahelCuadrado/ExerciseGymGifsDB@v1.1.0/pectorals/dumbbell-bench-press.gif"
  },
  {
    "name": "Supino declinado barra ou máquina",
    "muscle": "chest",
    "subGroup": "chest_decline",
    "movementLabel": "Peitoral Inferior (Declinado)",
    "demoUrl": "https://cdn.jsdelivr.net/gh/JahelCuadrado/ExerciseGymGifsDB@v1.1.0/pectorals/barbell-decline-bench-press.gif"
  },
  {
    "name": "Voador com pico de contração",
    "muscle": "chest",
    "subGroup": "chest_fly",
    "movementLabel": "Peitoral (Isolador / Crucifixo)",
    "demoUrl": "https://cdn.jsdelivr.net/gh/JahelCuadrado/ExerciseGymGifsDB@v1.1.0/pectorals/dumbbell-fly.gif"
  },
  {
    "name": "Rosca direta barra ou cabo",
    "muscle": "biceps",
    "subGroup": "biceps_curl",
    "movementLabel": "Bíceps (Geral / Direta)",
    "demoUrl": "https://cdn.jsdelivr.net/gh/JahelCuadrado/ExerciseGymGifsDB@v1.1.0/biceps/barbell-curl.gif"
  },
  {
    "name": "Rosca Scott máquina",
    "muscle": "biceps",
    "subGroup": "biceps_scott",
    "movementLabel": "Bíceps (Isolado / Scott)",
    "demoUrl": "https://cdn.jsdelivr.net/gh/JahelCuadrado/ExerciseGymGifsDB@v1.1.0/biceps/barbell-preacher-curl.gif"
  },
  {
    "name": "Rosca direta corda",
    "muscle": "biceps",
    "subGroup": "biceps_curl",
    "movementLabel": "Bíceps (Geral / Direta)",
    "demoUrl": "https://cdn.jsdelivr.net/gh/JahelCuadrado/ExerciseGymGifsDB@v1.1.0/biceps/cable-hammer-curl-with-rope.gif"
  },
  {
    "name": "Abdominal supra declinado",
    "muscle": "core",
    "subGroup": "core_crunch",
    "movementLabel": "Abdômen (Prancha Declinada)",
    "demoUrl": "https://cdn.jsdelivr.net/gh/JahelCuadrado/ExerciseGymGifsDB@v1.1.0/abs/decline-sit-up.gif"
  },
  {
    "name": "Remada curvada com barra",
    "muscle": "back",
    "subGroup": "back_rows",
    "movementLabel": "Dorsal (Espessura / Remada)",
    "demoUrl": "https://cdn.jsdelivr.net/gh/JahelCuadrado/ExerciseGymGifsDB@v1.1.0/upper-back/barbell-bent-over-row.gif"
  },
  {
    "name": "Remada baixa triângulo",
    "muscle": "back",
    "subGroup": "back_rows",
    "movementLabel": "Dorsal (Espessura / Remada)",
    "demoUrl": "https://cdn.jsdelivr.net/gh/JahelCuadrado/ExerciseGymGifsDB@v1.1.0/upper-back/cable-low-seated-row.gif"
  },
  {
    "name": "Remada baixa pegada aberta",
    "muscle": "back",
    "subGroup": "back_rows",
    "movementLabel": "Dorsal (Espessura / Remada)",
    "demoUrl": "https://cdn.jsdelivr.net/gh/JahelCuadrado/ExerciseGymGifsDB@v1.1.0/upper-back/cable-seated-wide-grip-row.gif"
  },
  {
    "name": "Pulley frente triângulo",
    "muscle": "triceps",
    "subGroup": "triceps_cable",
    "movementLabel": "Tríceps (Polia / Extensão)",
    "demoUrl": "https://cdn.jsdelivr.net/gh/JahelCuadrado/ExerciseGymGifsDB@v1.1.0/lats/twin-handle-parallel-grip-lat-pulldown.gif"
  },
  {
    "name": "Meio terra",
    "muscle": "back",
    "subGroup": "back_lower",
    "movementLabel": "Costas / Lombar",
    "demoUrl": "https://cdn.jsdelivr.net/gh/JahelCuadrado/ExerciseGymGifsDB@v1.1.0/glutes/barbell-rack-pull.gif"
  },
  {
    "name": "Panturrilha máquina ou smith",
    "muscle": "calves",
    "subGroup": "calves",
    "movementLabel": "Panturrilhas",
    "demoUrl": "https://cdn.jsdelivr.net/gh/JahelCuadrado/ExerciseGymGifsDB@v1.1.0/calves/lever-standing-calf-raise.gif"
  },
  {
    "name": "Desenvolvimento halteres ou máquina",
    "muscle": "shoulders",
    "subGroup": "shoulders_press",
    "movementLabel": "Ombros (Desenvolvimento / Frontal)",
    "demoUrl": "https://cdn.jsdelivr.net/gh/JahelCuadrado/ExerciseGymGifsDB@v1.1.0/delts/dumbbell-seated-shoulder-press.gif"
  },
  {
    "name": "Elevação frontal corda ou halteres",
    "muscle": "shoulders",
    "subGroup": "shoulders_front",
    "movementLabel": "Ombros (Deltoide Anterior)",
    "demoUrl": "https://cdn.jsdelivr.net/gh/JahelCuadrado/ExerciseGymGifsDB@v1.1.0/delts/cable-front-raise.gif"
  },
  {
    "name": "Elevação lateral",
    "muscle": "shoulders",
    "subGroup": "shoulders_lateral",
    "movementLabel": "Ombros (Deltoide Lateral)",
    "demoUrl": "https://cdn.jsdelivr.net/gh/JahelCuadrado/ExerciseGymGifsDB@v1.1.0/delts/dumbbell-lateral-raise.gif"
  },
  {
    "name": "Elevação unilateral no cabo",
    "muscle": "shoulders",
    "subGroup": "shoulders_lateral",
    "movementLabel": "Ombros (Deltoide Lateral)",
    "demoUrl": "https://cdn.jsdelivr.net/gh/JahelCuadrado/ExerciseGymGifsDB@v1.1.0/delts/cable-one-arm-lateral-raise.gif"
  },
  {
    "name": "Tríceps testa corda",
    "muscle": "triceps",
    "subGroup": "triceps_overhead",
    "movementLabel": "Tríceps (Cabeça Longa / Testa)",
    "demoUrl": "https://cdn.jsdelivr.net/gh/JahelCuadrado/ExerciseGymGifsDB@v1.1.0/triceps/cable-lying-triceps-extension-v-2.gif"
  },
  {
    "name": "Tríceps corda",
    "muscle": "triceps",
    "subGroup": "triceps_cable",
    "movementLabel": "Tríceps (Polia / Extensão)",
    "demoUrl": "https://cdn.jsdelivr.net/gh/JahelCuadrado/ExerciseGymGifsDB@v1.1.0/triceps/cable-pushdown-with-rope-attachment.gif"
  },
  {
    "name": "Tríceps francês",
    "muscle": "triceps",
    "subGroup": "triceps_overhead",
    "movementLabel": "Tríceps (Cabeça Longa / Testa)",
    "demoUrl": "https://cdn.jsdelivr.net/gh/JahelCuadrado/ExerciseGymGifsDB@v1.1.0/triceps/cable-overhead-triceps-extension-rope-attachment.gif"
  },
  {
    "name": "Abdominal infra na torre",
    "muscle": "core",
    "subGroup": "core",
    "movementLabel": "Abdômen / Core",
    "demoUrl": "https://cdn.jsdelivr.net/gh/JahelCuadrado/ExerciseGymGifsDB@v1.1.0/abs/hanging-leg-raise.gif"
  },
  {
    "name": "Panturrilha sentada",
    "muscle": "calves",
    "subGroup": "calves",
    "movementLabel": "Panturrilhas",
    "demoUrl": "https://cdn.jsdelivr.net/gh/JahelCuadrado/ExerciseGymGifsDB@v1.1.0/calves/lever-seated-calf-raise.gif"
  },
  {
    "name": "Agachamento livre",
    "muscle": "quads",
    "subGroup": "quads_compound",
    "movementLabel": "Quadríceps (Composto / Agachamento)",
    "demoUrl": "https://cdn.jsdelivr.net/gh/JahelCuadrado/ExerciseGymGifsDB@v1.1.0/glutes/barbell-full-squat-side-pov.gif"
  },
  {
    "name": "Leg 45",
    "muscle": "quads",
    "subGroup": "quads_compound",
    "movementLabel": "Quadríceps (Composto / Agachamento)",
    "demoUrl": "https://cdn.jsdelivr.net/gh/JahelCuadrado/ExerciseGymGifsDB@v1.1.0/glutes/sled-45-leg-press-side-pov.gif"
  },
  {
    "name": "Extensor",
    "muscle": "quads",
    "subGroup": "quads_isolation",
    "movementLabel": "Quadríceps (Extensão / Isolador)",
    "demoUrl": "https://cdn.jsdelivr.net/gh/JahelCuadrado/ExerciseGymGifsDB@v1.1.0/quads/lever-leg-extension.gif"
  },
  {
    "name": "Flexor deitado",
    "muscle": "hamstrings",
    "subGroup": "hamstrings_curls",
    "movementLabel": "Posterior (Mesa / Cadeira Flexora)",
    "demoUrl": "https://cdn.jsdelivr.net/gh/JahelCuadrado/ExerciseGymGifsDB@v1.1.0/hamstrings/lever-lying-leg-curl.gif"
  },
  {
    "name": "Stiff",
    "muscle": "hamstrings",
    "subGroup": "hamstrings_hinge",
    "movementLabel": "Posterior (Stiff / Quadril)",
    "demoUrl": "https://cdn.jsdelivr.net/gh/JahelCuadrado/ExerciseGymGifsDB@v1.1.0/hamstrings/barbell-straight-leg-deadlift.gif"
  },
  {
    "name": "Elevação de quadril",
    "muscle": "glutes",
    "subGroup": "glutes_bridge",
    "movementLabel": "Glúteos (Elevação Pélvica)",
    "demoUrl": "https://cdn.jsdelivr.net/gh/JahelCuadrado/ExerciseGymGifsDB@v1.1.0/glutes/barbell-glute-bridge.gif"
  },
  {
    "name": "Supino inclinado",
    "muscle": "chest",
    "subGroup": "chest_incline",
    "movementLabel": "Peitoral Superior (Inclinado)",
    "demoUrl": "https://cdn.jsdelivr.net/gh/JahelCuadrado/ExerciseGymGifsDB@v1.1.0/pectorals/barbell-incline-bench-press.gif"
  },
  {
    "name": "Supino reto barra",
    "muscle": "chest",
    "subGroup": "chest_flat",
    "movementLabel": "Peitoral Médio (Reto)",
    "demoUrl": "https://cdn.jsdelivr.net/gh/JahelCuadrado/ExerciseGymGifsDB@v1.1.0/pectorals/barbell-bench-press.gif"
  },
  {
    "name": "Pulley frente aberto",
    "muscle": "triceps",
    "subGroup": "triceps_cable",
    "movementLabel": "Tríceps (Polia / Extensão)",
    "demoUrl": "https://cdn.jsdelivr.net/gh/JahelCuadrado/ExerciseGymGifsDB@v1.1.0/lats/cable-bar-lateral-pulldown.gif"
  },
  {
    "name": "Desenvolvimento sentado com halteres",
    "muscle": "shoulders",
    "subGroup": "shoulders_press",
    "movementLabel": "Ombros (Desenvolvimento / Frontal)",
    "demoUrl": "https://cdn.jsdelivr.net/gh/JahelCuadrado/ExerciseGymGifsDB@v1.1.0/delts/dumbbell-seated-shoulder-press.gif"
  },
  {
    "name": "Rosca direta barra",
    "muscle": "biceps",
    "subGroup": "biceps_curl",
    "movementLabel": "Bíceps (Geral / Direta)",
    "demoUrl": "https://cdn.jsdelivr.net/gh/JahelCuadrado/ExerciseGymGifsDB@v1.1.0/biceps/barbell-curl.gif"
  },
  {
    "name": "Flexor sentado",
    "muscle": "hamstrings",
    "subGroup": "hamstrings_curls",
    "movementLabel": "Posterior (Mesa / Cadeira Flexora)",
    "demoUrl": "https://cdn.jsdelivr.net/gh/JahelCuadrado/ExerciseGymGifsDB@v1.1.0/hamstrings/lever-seated-leg-curl.gif"
  },
  {
    "name": "Abdutor",
    "muscle": "glutes",
    "subGroup": "glutes_abduction",
    "movementLabel": "Glúteos (Cadeira Abdutora)",
    "demoUrl": "https://cdn.jsdelivr.net/gh/JahelCuadrado/ExerciseGymGifsDB@v1.1.0/abductors/lever-seated-hip-abduction.gif"
  },
  {
    "name": "Panturrilha em pé na máquina ou smith",
    "muscle": "calves",
    "subGroup": "calves",
    "movementLabel": "Panturrilhas",
    "demoUrl": "https://cdn.jsdelivr.net/gh/JahelCuadrado/ExerciseGymGifsDB@v1.1.0/calves/lever-standing-calf-raise.gif"
  },
  {
    "name": "Abdominal supra no solo",
    "muscle": "core",
    "subGroup": "core",
    "movementLabel": "Abdômen / Core",
    "demoUrl": "https://cdn.jsdelivr.net/gh/JahelCuadrado/ExerciseGymGifsDB@v1.1.0/abs/crunch-floor.gif"
  },
  {
    "name": "Supino inclinado com halteres ou máquina",
    "muscle": "chest",
    "subGroup": "chest_incline",
    "movementLabel": "Peitoral Superior (Inclinado)",
    "demoUrl": "https://cdn.jsdelivr.net/gh/JahelCuadrado/ExerciseGymGifsDB@v1.1.0/pectorals/dumbbell-incline-bench-press.gif"
  },
  {
    "name": "Supino reto com halteres ou máquina",
    "muscle": "chest",
    "subGroup": "chest_flat",
    "movementLabel": "Peitoral Médio (Reto)",
    "demoUrl": "https://cdn.jsdelivr.net/gh/JahelCuadrado/ExerciseGymGifsDB@v1.1.0/pectorals/dumbbell-bench-press.gif"
  },
  {
    "name": "Voador com 2 segundos de pico de contração",
    "muscle": "chest",
    "subGroup": "chest_fly",
    "movementLabel": "Peitoral (Isolador / Crucifixo)",
    "demoUrl": "https://cdn.jsdelivr.net/gh/JahelCuadrado/ExerciseGymGifsDB@v1.1.0/pectorals/lever-seated-fly.gif"
  },
  {
    "name": "Rosca direta barra livre ou cabo com barra",
    "muscle": "biceps",
    "subGroup": "biceps_curl",
    "movementLabel": "Bíceps (Geral / Direta)",
    "demoUrl": "https://cdn.jsdelivr.net/gh/JahelCuadrado/ExerciseGymGifsDB@v1.1.0/biceps/barbell-curl.gif"
  },
  {
    "name": "Abdominal supra na prancha declinada",
    "muscle": "core",
    "subGroup": "core_crunch",
    "movementLabel": "Abdômen (Prancha Declinada)",
    "demoUrl": "https://cdn.jsdelivr.net/gh/JahelCuadrado/ExerciseGymGifsDB@v1.1.0/abs/decline-crunch.gif"
  },
  {
    "name": "Remada curvada com barra com 2 segundos de pico de contração",
    "muscle": "back",
    "subGroup": "back_rows",
    "movementLabel": "Dorsal (Espessura / Remada)",
    "demoUrl": "https://cdn.jsdelivr.net/gh/JahelCuadrado/ExerciseGymGifsDB@v1.1.0/upper-back/barbell-bent-over-row.gif"
  },
  {
    "name": "Remada baixa triângulo com 2 segundos de pico de contração",
    "muscle": "back",
    "subGroup": "back_rows",
    "movementLabel": "Dorsal (Espessura / Remada)",
    "demoUrl": "https://cdn.jsdelivr.net/gh/JahelCuadrado/ExerciseGymGifsDB@v1.1.0/upper-back/cable-low-seated-row.gif"
  },
  {
    "name": "Remada baixa pegada aberta com 2 segundos de pico de contração",
    "muscle": "back",
    "subGroup": "back_rows",
    "movementLabel": "Dorsal (Espessura / Remada)",
    "demoUrl": "https://cdn.jsdelivr.net/gh/JahelCuadrado/ExerciseGymGifsDB@v1.1.0/upper-back/cable-seated-wide-grip-row.gif"
  },
  {
    "name": "Pulley frente triângulo com 2 segundos de pico de contração",
    "muscle": "triceps",
    "subGroup": "triceps_cable",
    "movementLabel": "Tríceps (Polia / Extensão)",
    "demoUrl": "https://cdn.jsdelivr.net/gh/JahelCuadrado/ExerciseGymGifsDB@v1.1.0/lats/twin-handle-parallel-grip-lat-pulldown.gif"
  },
  {
    "name": "Panturrilha máquina ou em pé no smith",
    "muscle": "calves",
    "subGroup": "calves",
    "movementLabel": "Panturrilhas",
    "demoUrl": "https://cdn.jsdelivr.net/gh/JahelCuadrado/ExerciseGymGifsDB@v1.1.0/calves/lever-standing-calf-raise.gif"
  },
  {
    "name": "Elevação unilateral cabo",
    "muscle": "shoulders",
    "subGroup": "shoulders_lateral",
    "movementLabel": "Ombros (Deltoide Lateral)",
    "demoUrl": "https://cdn.jsdelivr.net/gh/JahelCuadrado/ExerciseGymGifsDB@v1.1.0/delts/cable-one-arm-lateral-raise.gif"
  },
  {
    "name": "Flexor deitado com 2 segundos de pico de contração",
    "muscle": "hamstrings",
    "subGroup": "hamstrings_curls",
    "movementLabel": "Posterior (Mesa / Cadeira Flexora)",
    "demoUrl": "https://cdn.jsdelivr.net/gh/JahelCuadrado/ExerciseGymGifsDB@v1.1.0/hamstrings/lever-lying-leg-curl.gif"
  },
  {
    "name": "Elevação de quadril com 2 segundos de pico de contração",
    "muscle": "glutes",
    "subGroup": "glutes_bridge",
    "movementLabel": "Glúteos (Elevação Pélvica)",
    "demoUrl": "https://cdn.jsdelivr.net/gh/JahelCuadrado/ExerciseGymGifsDB@v1.1.0/glutes/barbell-glute-bridge.gif"
  },
  {
    "name": "Elevação lateral sentada com halteres",
    "muscle": "shoulders",
    "subGroup": "shoulders_lateral",
    "movementLabel": "Ombros (Deltoide Lateral)",
    "demoUrl": "https://cdn.jsdelivr.net/gh/JahelCuadrado/ExerciseGymGifsDB@v1.1.0/delts/dumbbell-seated-lateral-raise.gif"
  },
  {
    "name": "Panturrilha máquina em pé",
    "muscle": "calves",
    "subGroup": "calves",
    "movementLabel": "Panturrilhas",
    "demoUrl": "https://cdn.jsdelivr.net/gh/JahelCuadrado/ExerciseGymGifsDB@v1.1.0/calves/lever-standing-calf-raise.gif"
  },
  {
    "name": "Hack machine",
    "muscle": "quads",
    "subGroup": "quads_compound",
    "movementLabel": "Quadríceps (Composto / Agachamento)",
    "demoUrl": "https://cdn.jsdelivr.net/gh/JahelCuadrado/ExerciseGymGifsDB@v1.1.0/glutes/sled-hack-squat.gif"
  },
  {
    "name": "Hiperextensão no banco romano",
    "muscle": "back",
    "subGroup": "back_lower",
    "movementLabel": "Costas / Lombar",
    "demoUrl": "https://cdn.jsdelivr.net/gh/JahelCuadrado/ExerciseGymGifsDB@v1.1.0/spine/hyperextension-on-bench.gif"
  },
  {
    "name": "Abdominal supra na prancha",
    "muscle": "core",
    "subGroup": "core",
    "movementLabel": "Abdômen / Core",
    "demoUrl": "https://cdn.jsdelivr.net/gh/JahelCuadrado/ExerciseGymGifsDB@v1.1.0/abs/decline-crunch.gif"
  },
  {
    "name": "Cross over",
    "muscle": "chest",
    "subGroup": "chest_fly",
    "movementLabel": "Peitoral (Isolador / Crucifixo)",
    "demoUrl": "https://cdn.jsdelivr.net/gh/JahelCuadrado/ExerciseGymGifsDB@v1.1.0/pectorals/cable-standing-up-straight-crossovers.gif"
  },
  {
    "name": "Desenvolvimento com halteres",
    "muscle": "shoulders",
    "subGroup": "shoulders_press",
    "movementLabel": "Ombros (Desenvolvimento / Frontal)",
    "demoUrl": "https://cdn.jsdelivr.net/gh/JahelCuadrado/ExerciseGymGifsDB@v1.1.0/delts/dumbbell-seated-shoulder-press.gif"
  },
  {
    "name": "Supino inclinado máquina ou halteres ou smith",
    "muscle": "chest",
    "subGroup": "chest_incline",
    "movementLabel": "Peitoral Superior (Inclinado)",
    "demoUrl": "https://cdn.jsdelivr.net/gh/JahelCuadrado/ExerciseGymGifsDB@v1.1.0/pectorals/dumbbell-incline-bench-press.gif"
  },
  {
    "name": "Voador",
    "muscle": "chest",
    "subGroup": "chest_fly",
    "movementLabel": "Peitoral (Isolador / Crucifixo)",
    "demoUrl": "https://cdn.jsdelivr.net/gh/JahelCuadrado/ExerciseGymGifsDB@v1.1.0/pectorals/lever-seated-fly.gif"
  },
  {
    "name": "Elevação lateral sentada",
    "muscle": "shoulders",
    "subGroup": "shoulders_lateral",
    "movementLabel": "Ombros (Deltoide Lateral)",
    "demoUrl": "https://cdn.jsdelivr.net/gh/JahelCuadrado/ExerciseGymGifsDB@v1.1.0/delts/dumbbell-seated-lateral-raise.gif"
  },
  {
    "name": "Rosca direta banco 45 graus",
    "muscle": "biceps",
    "subGroup": "biceps_curl",
    "movementLabel": "Bíceps (Geral / Direta)",
    "demoUrl": "https://cdn.jsdelivr.net/gh/JahelCuadrado/ExerciseGymGifsDB@v1.1.0/biceps/dumbbell-incline-curl.gif"
  },
  {
    "name": "Tríceps francês com corda",
    "muscle": "triceps",
    "subGroup": "triceps_overhead",
    "movementLabel": "Tríceps (Cabeça Longa / Testa)",
    "demoUrl": "https://cdn.jsdelivr.net/gh/JahelCuadrado/ExerciseGymGifsDB@v1.1.0/triceps/cable-overhead-triceps-extension-rope-attachment.gif"
  },
  {
    "name": "Agachamento Hack",
    "muscle": "quads",
    "subGroup": "quads_compound",
    "movementLabel": "Quadríceps (Composto / Agachamento)",
    "demoUrl": "https://cdn.jsdelivr.net/gh/JahelCuadrado/ExerciseGymGifsDB@v1.1.0/glutes/sled-hack-squat.gif"
  },
  {
    "name": "Supino reto máquina ou halteres ou smith",
    "muscle": "chest",
    "subGroup": "chest_flat",
    "movementLabel": "Peitoral Médio (Reto)",
    "demoUrl": "https://cdn.jsdelivr.net/gh/JahelCuadrado/ExerciseGymGifsDB@v1.1.0/pectorals/dumbbell-bench-press.gif"
  },
  {
    "name": "Remada curvada",
    "muscle": "back",
    "subGroup": "back_rows",
    "movementLabel": "Dorsal (Espessura / Remada)",
    "demoUrl": "https://cdn.jsdelivr.net/gh/JahelCuadrado/ExerciseGymGifsDB@v1.1.0/upper-back/barbell-bent-over-row.gif"
  },
  {
    "name": "Desenvolvimento máquina ou halteres",
    "muscle": "shoulders",
    "subGroup": "shoulders_press",
    "movementLabel": "Ombros (Desenvolvimento / Frontal)",
    "demoUrl": "https://cdn.jsdelivr.net/gh/JahelCuadrado/ExerciseGymGifsDB@v1.1.0/delts/dumbbell-seated-shoulder-press.gif"
  },
  {
    "name": "Rosca Scott máquina ou Scott no cabo",
    "muscle": "biceps",
    "subGroup": "biceps_scott",
    "movementLabel": "Bíceps (Isolado / Scott)",
    "demoUrl": "https://cdn.jsdelivr.net/gh/JahelCuadrado/ExerciseGymGifsDB@v1.1.0/biceps/barbell-preacher-curl.gif"
  },
  {
    "name": "Hack",
    "muscle": "quads",
    "subGroup": "quads_compound",
    "movementLabel": "Quadríceps (Composto / Agachamento)",
    "demoUrl": "https://cdn.jsdelivr.net/gh/JahelCuadrado/ExerciseGymGifsDB@v1.1.0/glutes/sled-hack-squat.gif"
  },
  {
    "name": "Serrote",
    "muscle": "back",
    "subGroup": "back_rows",
    "movementLabel": "Dorsal (Espessura / Remada)",
    "demoUrl": "https://cdn.jsdelivr.net/gh/JahelCuadrado/ExerciseGymGifsDB@v1.1.0/upper-back/dumbbell-one-arm-bent-over-row.gif"
  },
  {
    "name": "Rosca direta cabo",
    "muscle": "biceps",
    "subGroup": "biceps_curl",
    "movementLabel": "Bíceps (Geral / Direta)",
    "demoUrl": "https://cdn.jsdelivr.net/gh/JahelCuadrado/ExerciseGymGifsDB@v1.1.0/biceps/cable-straight-bar-biceps-curl.gif"
  },
  {
    "name": "Supino inclinado máquina ou halteres",
    "muscle": "chest",
    "subGroup": "chest_incline",
    "movementLabel": "Peitoral Superior (Inclinado)",
    "demoUrl": "https://cdn.jsdelivr.net/gh/JahelCuadrado/ExerciseGymGifsDB@v1.1.0/pectorals/dumbbell-incline-bench-press.gif"
  },
  {
    "name": "Supino reto máquina ou smith",
    "muscle": "chest",
    "subGroup": "chest_flat",
    "movementLabel": "Peitoral Médio (Reto)",
    "demoUrl": "https://cdn.jsdelivr.net/gh/JahelCuadrado/ExerciseGymGifsDB@v1.1.0/pectorals/barbell-bench-press.gif"
  },
  {
    "name": "Elevação lateral máquina ou cabo unilateral",
    "muscle": "shoulders",
    "subGroup": "shoulders_lateral",
    "movementLabel": "Ombros (Deltoide Lateral)",
    "demoUrl": "https://cdn.jsdelivr.net/gh/JahelCuadrado/ExerciseGymGifsDB@v1.1.0/delts/cable-one-arm-lateral-raise.gif"
  },
  {
    "name": "Tríceps na polia alta",
    "muscle": "triceps",
    "subGroup": "triceps_cable",
    "movementLabel": "Tríceps (Polia / Extensão)",
    "demoUrl": "https://cdn.jsdelivr.net/gh/JahelCuadrado/ExerciseGymGifsDB@v1.1.0/triceps/cable-pushdown-with-rope-attachment.gif"
  },
  {
    "name": "Crucifixo inclinado no cabo",
    "muscle": "chest",
    "subGroup": "chest_incline",
    "movementLabel": "Peitoral Superior (Inclinado)",
    "demoUrl": "https://cdn.jsdelivr.net/gh/JahelCuadrado/ExerciseGymGifsDB@v1.1.0/pectorals/cable-incline-fly.gif"
  },
  {
    "name": "Leg 45°",
    "muscle": "quads",
    "subGroup": "quads_compound",
    "movementLabel": "Quadríceps (Composto / Agachamento)",
    "demoUrl": "https://cdn.jsdelivr.net/gh/JahelCuadrado/ExerciseGymGifsDB@v1.1.0/glutes/sled-45-leg-press-side-pov.gif"
  },
  {
    "name": "Extensora com 2 segundos de pico de contração",
    "muscle": "quads",
    "subGroup": "quads_isolation",
    "movementLabel": "Quadríceps (Extensão / Isolador)",
    "demoUrl": "https://cdn.jsdelivr.net/gh/JahelCuadrado/ExerciseGymGifsDB@v1.1.0/quads/lever-leg-extension.gif"
  },
  {
    "name": "Abdutor com 2 segundos de pico de contração",
    "muscle": "glutes",
    "subGroup": "glutes_abduction",
    "movementLabel": "Glúteos (Cadeira Abdutora)",
    "demoUrl": "https://cdn.jsdelivr.net/gh/JahelCuadrado/ExerciseGymGifsDB@v1.1.0/abductors/lever-seated-hip-abduction.gif"
  },
  {
    "name": "Elevação frontal",
    "muscle": "shoulders",
    "subGroup": "shoulders_front",
    "movementLabel": "Ombros (Deltoide Anterior)",
    "demoUrl": "https://cdn.jsdelivr.net/gh/JahelCuadrado/ExerciseGymGifsDB@v1.1.0/delts/cable-front-raise.gif"
  },
  {
    "name": "Tríceps corda com 2 segundos de pico de contração",
    "muscle": "triceps",
    "subGroup": "triceps_cable",
    "movementLabel": "Tríceps (Polia / Extensão)",
    "demoUrl": "https://cdn.jsdelivr.net/gh/JahelCuadrado/ExerciseGymGifsDB@v1.1.0/triceps/cable-pushdown-with-rope-attachment.gif"
  },
  {
    "name": "Rosca Scott máquina com 2 segundos de pico de contração",
    "muscle": "biceps",
    "subGroup": "biceps_scott",
    "movementLabel": "Bíceps (Isolado / Scott)",
    "demoUrl": "https://cdn.jsdelivr.net/gh/JahelCuadrado/ExerciseGymGifsDB@v1.1.0/biceps/barbell-preacher-curl.gif"
  },
  {
    "name": "Flexor sentado com 2 segundos de pico de contração",
    "muscle": "hamstrings",
    "subGroup": "hamstrings_curls",
    "movementLabel": "Posterior (Mesa / Cadeira Flexora)",
    "demoUrl": "https://cdn.jsdelivr.net/gh/JahelCuadrado/ExerciseGymGifsDB@v1.1.0/hamstrings/lever-seated-leg-curl.gif"
  },
  {
    "name": "Extensor com 2 segundos de pico de contração",
    "muscle": "quads",
    "subGroup": "quads_isolation",
    "movementLabel": "Quadríceps (Extensão / Isolador)",
    "demoUrl": "https://cdn.jsdelivr.net/gh/JahelCuadrado/ExerciseGymGifsDB@v1.1.0/quads/lever-leg-extension.gif"
  },
  {
    "name": "Rosca Scott máquina ou cabo com 2 segundos de pico de contração",
    "muscle": "biceps",
    "subGroup": "biceps_scott",
    "movementLabel": "Bíceps (Isolado / Scott)",
    "demoUrl": "https://cdn.jsdelivr.net/gh/JahelCuadrado/ExerciseGymGifsDB@v1.1.0/biceps/barbell-preacher-curl.gif"
  },
  {
    "name": "Tríceps francês na corda",
    "muscle": "triceps",
    "subGroup": "triceps_overhead",
    "movementLabel": "Tríceps (Cabeça Longa / Testa)",
    "demoUrl": "https://cdn.jsdelivr.net/gh/JahelCuadrado/ExerciseGymGifsDB@v1.1.0/triceps/cable-overhead-triceps-extension-rope-attachment.gif"
  },
  {
    "name": "Panturrilha em pé no smith com 2 segundos de pico de contração",
    "muscle": "calves",
    "subGroup": "calves",
    "movementLabel": "Panturrilhas",
    "demoUrl": "https://cdn.jsdelivr.net/gh/JahelCuadrado/ExerciseGymGifsDB@v1.1.0/calves/lever-standing-calf-raise.gif"
  },
  {
    "name": "Elevação lateral máquina ou unilateral no cabo",
    "muscle": "shoulders",
    "subGroup": "shoulders_lateral",
    "movementLabel": "Ombros (Deltoide Lateral)",
    "demoUrl": "https://cdn.jsdelivr.net/gh/JahelCuadrado/ExerciseGymGifsDB@v1.1.0/delts/cable-one-arm-lateral-raise.gif"
  },
  {
    "name": "Tríceps testa corda banco 35 graus",
    "muscle": "triceps",
    "subGroup": "triceps_overhead",
    "movementLabel": "Tríceps (Cabeça Longa / Testa)",
    "demoUrl": "https://cdn.jsdelivr.net/gh/JahelCuadrado/ExerciseGymGifsDB@v1.1.0/triceps/cable-lying-triceps-extension-v-2.gif"
  },
  {
    "name": "Rosca direta cabo com 2 segundos de pico de contração",
    "muscle": "biceps",
    "subGroup": "biceps_curl",
    "movementLabel": "Bíceps (Geral / Direta)",
    "demoUrl": "https://cdn.jsdelivr.net/gh/JahelCuadrado/ExerciseGymGifsDB@v1.1.0/biceps/cable-straight-bar-biceps-curl.gif"
  },
  {
    "name": "Pulley frente aberto com 2 segundos de pico de contração",
    "muscle": "triceps",
    "subGroup": "triceps_cable",
    "movementLabel": "Tríceps (Polia / Extensão)",
    "demoUrl": "https://cdn.jsdelivr.net/gh/JahelCuadrado/ExerciseGymGifsDB@v1.1.0/lats/cable-bar-lateral-pulldown.gif"
  },
  {
    "name": "Serrote com 2 segundos de pico de contração",
    "muscle": "back",
    "subGroup": "back_rows",
    "movementLabel": "Dorsal (Espessura / Remada)",
    "demoUrl": "https://cdn.jsdelivr.net/gh/JahelCuadrado/ExerciseGymGifsDB@v1.1.0/upper-back/dumbbell-one-arm-bent-over-row.gif"
  },
  {
    "name": "Abdominal infra na torre com 2 segundos de pico de contração",
    "muscle": "core",
    "subGroup": "core",
    "movementLabel": "Abdômen / Core",
    "demoUrl": "https://cdn.jsdelivr.net/gh/JahelCuadrado/ExerciseGymGifsDB@v1.1.0/abs/hanging-leg-raise.gif"
  },
  {
    "name": "Remada curvada com 2 segundos de pico de contração",
    "muscle": "back",
    "subGroup": "back_rows",
    "movementLabel": "Dorsal (Espessura / Remada)",
    "demoUrl": "https://cdn.jsdelivr.net/gh/JahelCuadrado/ExerciseGymGifsDB@v1.1.0/upper-back/barbell-bent-over-row.gif"
  },
  {
    "name": "Rosca Scott máquina ou cabo",
    "muscle": "biceps",
    "subGroup": "biceps_scott",
    "movementLabel": "Bíceps (Isolado / Scott)",
    "demoUrl": "https://cdn.jsdelivr.net/gh/JahelCuadrado/ExerciseGymGifsDB@v1.1.0/biceps/barbell-preacher-curl.gif"
  },
  {
    "name": "Supino reto máquina ou halteres",
    "muscle": "chest",
    "subGroup": "chest_flat",
    "movementLabel": "Peitoral Médio (Reto)",
    "demoUrl": "https://cdn.jsdelivr.net/gh/JahelCuadrado/ExerciseGymGifsDB@v1.1.0/pectorals/dumbbell-bench-press.gif"
  },
  {
    "name": "Supino declinado máquina, barra ou crossover",
    "muscle": "chest",
    "subGroup": "chest_decline",
    "movementLabel": "Peitoral Inferior (Declinado)",
    "demoUrl": "https://cdn.jsdelivr.net/gh/JahelCuadrado/ExerciseGymGifsDB@v1.1.0/pectorals/barbell-decline-bench-press.gif"
  },
  {
    "name": "Elevação frontal com corda",
    "muscle": "shoulders",
    "subGroup": "shoulders_front",
    "movementLabel": "Ombros (Deltoide Anterior)",
    "demoUrl": "https://cdn.jsdelivr.net/gh/JahelCuadrado/ExerciseGymGifsDB@v1.1.0/delts/cable-front-raise.gif"
  },
  {
    "name": "Adutor",
    "muscle": "quads",
    "subGroup": "quads_adduction",
    "movementLabel": "Coxas / Adutores (Cadeira Adutora)",
    "demoUrl": "https://cdn.jsdelivr.net/gh/JahelCuadrado/ExerciseGymGifsDB@v1.1.0/adductors/lever-seated-hip-adduction.gif"
  },
  {
    "name": "Pulldown com corda",
    "muscle": "back",
    "subGroup": "back_lats",
    "movementLabel": "Dorsal (Largura / Puxada)",
    "demoUrl": "https://cdn.jsdelivr.net/gh/JahelCuadrado/ExerciseGymGifsDB@v1.1.0/lats/cable-straight-arm-pulldown.gif"
  },
  {
    "name": "Rosca direta no cabo",
    "muscle": "biceps",
    "subGroup": "biceps_curl",
    "movementLabel": "Bíceps (Geral / Direta)",
    "demoUrl": "https://cdn.jsdelivr.net/gh/JahelCuadrado/ExerciseGymGifsDB@v1.1.0/biceps/cable-straight-bar-biceps-curl.gif"
  },
  {
    "name": "Elevação lateral unilateral no cabo",
    "muscle": "shoulders",
    "subGroup": "shoulders_lateral",
    "movementLabel": "Ombros (Deltoide Lateral)",
    "demoUrl": "https://cdn.jsdelivr.net/gh/JahelCuadrado/ExerciseGymGifsDB@v1.1.0/delts/cable-one-arm-lateral-raise.gif"
  },
  {
    "name": "Paralela peso do corpo",
    "muscle": "triceps",
    "subGroup": "triceps_compound",
    "movementLabel": "Tríceps (Composto / Paralela)",
    "demoUrl": "https://cdn.jsdelivr.net/gh/JahelCuadrado/ExerciseGymGifsDB@v1.1.0/triceps/dips.gif"
  },
  {
    "name": "Panturrilha em pé na máquina",
    "muscle": "calves",
    "subGroup": "calves",
    "movementLabel": "Panturrilhas",
    "demoUrl": "https://cdn.jsdelivr.net/gh/JahelCuadrado/ExerciseGymGifsDB@v1.1.0/calves/lever-standing-calf-raise.gif"
  },
  {
    "name": "Remada baixa pegada aberta ou máquina",
    "muscle": "back",
    "subGroup": "back_rows",
    "movementLabel": "Dorsal (Espessura / Remada)",
    "demoUrl": "https://cdn.jsdelivr.net/gh/JahelCuadrado/ExerciseGymGifsDB@v1.1.0/upper-back/cable-seated-wide-grip-row.gif"
  },
  {
    "name": "Rosca direta corda com 2 segundos de pico de contração",
    "muscle": "biceps",
    "subGroup": "biceps_curl",
    "movementLabel": "Bíceps (Geral / Direta)",
    "demoUrl": "https://cdn.jsdelivr.net/gh/JahelCuadrado/ExerciseGymGifsDB@v1.1.0/biceps/cable-hammer-curl-with-rope.gif"
  },
  {
    "name": "Supino inclinado barra",
    "muscle": "chest",
    "subGroup": "chest_incline",
    "movementLabel": "Peitoral Superior (Inclinado)",
    "demoUrl": "https://cdn.jsdelivr.net/gh/JahelCuadrado/ExerciseGymGifsDB@v1.1.0/pectorals/barbell-incline-bench-press.gif"
  },
  {
    "name": "Panturrilha em pé na máquina ou no smith com step",
    "muscle": "calves",
    "subGroup": "calves",
    "movementLabel": "Panturrilhas",
    "demoUrl": "https://cdn.jsdelivr.net/gh/JahelCuadrado/ExerciseGymGifsDB@v1.1.0/calves/lever-standing-calf-raise.gif"
  },
  {
    "name": "Agachamento livre ou smith",
    "muscle": "quads",
    "subGroup": "quads_compound",
    "movementLabel": "Quadríceps (Composto / Agachamento)",
    "demoUrl": "https://cdn.jsdelivr.net/gh/JahelCuadrado/ExerciseGymGifsDB@v1.1.0/glutes/barbell-full-squat-side-pov.gif"
  },
  {
    "name": "Panturrilha em pé na máquina ou smith com step",
    "muscle": "calves",
    "subGroup": "calves",
    "movementLabel": "Panturrilhas",
    "demoUrl": "https://cdn.jsdelivr.net/gh/JahelCuadrado/ExerciseGymGifsDB@v1.1.0/calves/lever-standing-calf-raise.gif"
  },
  {
    "name": "Elevação frontal sentado com halteres",
    "muscle": "shoulders",
    "subGroup": "shoulders_front",
    "movementLabel": "Ombros (Deltoide Anterior)",
    "demoUrl": "https://cdn.jsdelivr.net/gh/JahelCuadrado/ExerciseGymGifsDB@v1.1.0/delts/dumbbell-front-raise.gif"
  },
  {
    "name": "Afundo no smith com step",
    "muscle": "quads",
    "subGroup": "quads_compound",
    "movementLabel": "Quadríceps / Glúteos (Afundo no Smith)",
    "demoUrl": "https://cdn.jsdelivr.net/gh/JahelCuadrado/ExerciseGymGifsDB@v1.1.0/glutes/barbell-one-leg-squat.gif"
  },
  {
    "name": "Abdutor com 3 segundos de pico de contração",
    "muscle": "glutes",
    "subGroup": "glutes_abduction",
    "movementLabel": "Glúteos (Cadeira Abdutora)",
    "demoUrl": "https://cdn.jsdelivr.net/gh/JahelCuadrado/ExerciseGymGifsDB@v1.1.0/abductors/lever-seated-hip-abduction.gif"
  },
  {
    "name": "Agachamento smith",
    "muscle": "quads",
    "subGroup": "quads_compound",
    "movementLabel": "Quadríceps (Composto / Agachamento)",
    "demoUrl": "https://cdn.jsdelivr.net/gh/JahelCuadrado/ExerciseGymGifsDB@v1.1.0/glutes/smith-full-squat.gif"
  },
  {
    "name": "Tríceps corda unilateral",
    "muscle": "triceps",
    "subGroup": "triceps_cable",
    "movementLabel": "Tríceps (Polia / Extensão Unilateral)",
    "demoUrl": "https://cdn.jsdelivr.net/gh/JahelCuadrado/ExerciseGymGifsDB@v1.1.0/triceps/cable-one-arm-pushdown.gif"
  },
  {
    "name": "Remada baixa pegada triângulo",
    "muscle": "back",
    "subGroup": "back_rows",
    "movementLabel": "Dorsal (Espessura / Remada)",
    "demoUrl": "https://cdn.jsdelivr.net/gh/JahelCuadrado/ExerciseGymGifsDB@v1.1.0/upper-back/cable-low-seated-row.gif"
  },
  {
    "name": "Puxada frente aberta com 2 segundos de pico",
    "muscle": "back",
    "subGroup": "back_lats",
    "movementLabel": "Dorsal (Largura / Puxada)",
    "demoUrl": "https://cdn.jsdelivr.net/gh/JahelCuadrado/ExerciseGymGifsDB@v1.1.0/lats/cable-bar-lateral-pulldown.gif"
  },
  {
    "name": "Supino reto máquina ou halteres — variação",
    "muscle": "chest",
    "subGroup": "chest_flat",
    "movementLabel": "Peitoral Médio (Reto)",
    "demoUrl": "https://cdn.jsdelivr.net/gh/JahelCuadrado/ExerciseGymGifsDB@v1.1.0/pectorals/dumbbell-bench-press.gif"
  },
  {
    "name": "Puxada frente aberta",
    "muscle": "back",
    "subGroup": "back_lats",
    "movementLabel": "Dorsal (Largura / Puxada)",
    "demoUrl": "https://cdn.jsdelivr.net/gh/JahelCuadrado/ExerciseGymGifsDB@v1.1.0/lats/cable-bar-lateral-pulldown.gif"
  },
  {
    "name": "Puxada frente triângulo",
    "muscle": "back",
    "subGroup": "back_lats",
    "movementLabel": "Dorsal (Largura / Puxada)",
    "demoUrl": "https://cdn.jsdelivr.net/gh/JahelCuadrado/ExerciseGymGifsDB@v1.1.0/lats/twin-handle-parallel-grip-lat-pulldown.gif"
  },
  {
    "name": "Voador inverso com 2 segundos de pico",
    "muscle": "shoulders",
    "subGroup": "shoulders_rear",
    "movementLabel": "Ombros (Deltoide Posterior)",
    "demoUrl": "https://cdn.jsdelivr.net/gh/JahelCuadrado/ExerciseGymGifsDB@v1.1.0/delts/lever-seated-reverse-fly.gif"
  },
  {
    "name": "Desenvolvimento com halteres ou máquina",
    "muscle": "shoulders",
    "subGroup": "shoulders_press",
    "movementLabel": "Ombros (Desenvolvimento / Frontal)",
    "demoUrl": "https://cdn.jsdelivr.net/gh/JahelCuadrado/ExerciseGymGifsDB@v1.1.0/delts/dumbbell-seated-shoulder-press.gif"
  }
];

export const MUSCLE_LABELS: Record<MuscleGroup, string> = {
  chest: 'Peitoral',
  back: 'Costas',
  shoulders: 'Ombros',
  biceps: 'Bíceps',
  triceps: 'Tríceps',
  quads: 'Quadríceps',
  hamstrings: 'Posterior de Coxa',
  glutes: 'Glúteos',
  calves: 'Panturrilhas',
  core: 'Abdômen'
};

/**
 * Detecta o grupamento muscular a partir do nome caso o exercício seja customizado ou não encontrado
 */
export function detectMuscleFromName(name: string): MuscleGroup {
  const n = name.toLowerCase();
  if (/supino|voador(?!.*inverso)|cross\s*over|crossover|crucifixo(?!.*inverso)/i.test(n)) return 'chest';
  if (/remada|pulley|puxada|terra|serrote|pulldown|hiperextens/i.test(n)) return 'back';
  if (/rosca|scott|b[ií]ceps/i.test(n)) return 'biceps';
  if (/tr[ií]ceps|paralela|franc[eê]s|testa/i.test(n)) return 'triceps';
  if (/desenvolvimento|eleva[cç][aã]o\s*lateral|eleva[cç][aã]o\s*frontal|deltoide|voador\s*inverso|crucifixo\s*inverso/i.test(n)) return 'shoulders';
  if (/abdominal|infra|supra|prancha|core/i.test(n)) return 'core';
  if (/panturrilha/i.test(n)) return 'calves';
  if (/agachamento|hack|leg\s*45|extens|adutor/i.test(n)) return 'quads';
  if (/flexor|stiff/i.test(n)) return 'hamstrings';
  if (/quadril|abdutor|gl[uú]teo|p[eé]lvica|eleva[cç][aã]o\s*de\s*quadril|afundo|avan[cç]o/i.test(n)) return 'glutes';
  return 'chest';
}

/**
 * Retorna as opções selecionadas de substituição para um exercício:
 * - Filtra ESTRITAMENTE pelo mesmo músculo (sem jamais misturar grupos musculares).
 * - Prioriza o mesmo sub-agrupamento / plano de movimento (ex: Inclinado com Inclinado).
 * - Remove repetições desnecessárias.
 */
export function getSubstitutionsForExercise(currentName: string, targetMuscle?: MuscleGroup): CatalogExercise[] {
  const current = EXERCISE_CATALOG.find(e => e.name.toLowerCase() === currentName.toLowerCase());
  
  // O grupo muscular ALVO é rigoroso: usa targetMuscle se passado, ou o músculo do exercício atual
  const muscle: MuscleGroup = targetMuscle || current?.muscle || detectMuscleFromName(currentName);

  // Filtra ESTRITAMENTE pelo mesmo músculo (garantia de 100% de isolamento)
  const allSameMuscle = EXERCISE_CATALOG.filter(
    e => e.muscle === muscle && e.name.toLowerCase() !== currentName.toLowerCase()
  );

  // Se tivermos o subgrupo biomecânico do exercício atual, priorizamos primeiro
  if (current?.subGroup) {
    const sameSubGroup = allSameMuscle.filter(e => e.subGroup === current.subGroup);
    const otherSubGroup = allSameMuscle.filter(e => e.subGroup !== current.subGroup);
    return [...sameSubGroup, ...otherSubGroup].slice(0, 8);
  }

  return allSameMuscle.slice(0, 8);
}
