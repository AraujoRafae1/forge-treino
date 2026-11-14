import { WorkoutPlanRaw } from '../types';

export const DEFAULT_PLANS: WorkoutPlanRaw[] = [
  {
    "id": "female-ab-2",
    "name": "Feminino AB • 2× na semana",
    "level": "Iniciante",
    "days": 2,
    "note": "Corpo inteiro • base técnica e adaptação",
    "workouts": [
      {
        "id": "A",
        "name": "Corpo inteiro 1",
        "exercises": [
          [
            "Leg 45",
            "3 trabalho",
            "10-15",
            false
          ],
          [
            "Supino reto barra",
            "3 trabalho",
            "10-15",
            false
          ],
          [
            "Flexor sentado",
            "3 trabalho",
            "10-15",
            false
          ],
          [
            "Pulley frente triângulo",
            "3 trabalho",
            "10-15",
            false
          ],
          [
            "Adutor",
            "3 trabalho",
            "10-15",
            false
          ],
          [
            "Elevação lateral",
            "3 trabalho",
            "10-15",
            false
          ],
          [
            "Abdutor",
            "3 trabalho",
            "10-15",
            false
          ],
          [
            "Tríceps corda",
            "3 trabalho",
            "10-15",
            false
          ]
        ]
      },
      {
        "id": "B",
        "name": "Corpo inteiro 2",
        "exercises": [
          [
            "Extensor",
            "3 trabalho",
            "10-15",
            false
          ],
          [
            "Voador",
            "3 trabalho",
            "10-15",
            false
          ],
          [
            "Flexor deitado",
            "3 trabalho",
            "10-15",
            false
          ],
          [
            "Remada baixa triângulo",
            "3 trabalho",
            "10-15",
            false
          ],
          [
            "Adutor",
            "3 trabalho",
            "10-15",
            false
          ],
          [
            "Elevação frontal",
            "3 trabalho",
            "10-15",
            false
          ],
          [
            "Abdutor",
            "3 trabalho",
            "10-15",
            false
          ],
          [
            "Panturrilha em pé na máquina",
            "3 trabalho",
            "10-15",
            false
          ]
        ]
      }
    ]
  },
  {
    "id": "female-ab-4",
    "name": "Feminino AB • 4× na semana",
    "level": "Iniciante",
    "days": 4,
    "note": "AB repetido • volume moderado e execução simples",
    "workouts": [
      {
        "id": "A",
        "name": "Pernas + abdômen",
        "exercises": [
          [
            "Leg 45",
            "3 trabalho",
            "10-15",
            false
          ],
          [
            "Extensor",
            "3 trabalho",
            "10-15",
            false
          ],
          [
            "Flexor sentado",
            "3 trabalho",
            "10-15",
            false
          ],
          [
            "Flexor deitado",
            "3 trabalho",
            "10-15",
            false
          ],
          [
            "Abdutor",
            "3 trabalho",
            "10-15",
            false
          ],
          [
            "Adutor",
            "3 trabalho",
            "10-15",
            false
          ],
          [
            "Abdominal supra no solo",
            "3 trabalho",
            "15-20",
            false
          ]
        ]
      },
      {
        "id": "B",
        "name": "Superior + panturrilhas",
        "exercises": [
          [
            "Supino inclinado barra",
            "3 trabalho",
            "10-15",
            false
          ],
          [
            "Pulley frente aberto",
            "3 trabalho",
            "10-15",
            false
          ],
          [
            "Remada baixa triângulo",
            "3 trabalho",
            "10-15",
            false
          ],
          [
            "Desenvolvimento sentado com halteres",
            "3 trabalho",
            "10-15",
            false
          ],
          [
            "Elevação lateral",
            "3 trabalho",
            "10-15",
            false
          ],
          [
            "Tríceps corda",
            "3 trabalho",
            "10-15",
            false
          ],
          [
            "Panturrilha em pé na máquina ou no smith com step",
            "3 trabalho",
            "10-15",
            false
          ]
        ]
      }
    ]
  },
  {
    "id": "beginner-4",
    "name": "Iniciantes 4x na semana",
    "level": "Iniciante",
    "days": 4,
    "note": "Base técnica e adaptação • A/B repetido",
    "workouts": [
      {
        "id": "A",
        "name": "Parte superior",
        "exercises": [
          [
            "Supino inclinado",
            "3 séries",
            "10-15",
            false
          ],
          [
            "Supino reto barra",
            "3 séries",
            "10-15",
            false
          ],
          [
            "Pulley frente aberto",
            "3 séries",
            "10-15",
            false
          ],
          [
            "Remada baixa triângulo",
            "3 séries",
            "10-15",
            false
          ],
          [
            "Desenvolvimento sentado com halteres",
            "3 séries",
            "10-15",
            false
          ],
          [
            "Elevação lateral",
            "3 séries",
            "10-15",
            false
          ],
          [
            "Tríceps corda",
            "3 séries",
            "10-15",
            false
          ],
          [
            "Rosca direta barra",
            "3 séries",
            "10-15",
            false
          ]
        ]
      },
      {
        "id": "B",
        "name": "Pernas + abdômen",
        "exercises": [
          [
            "Leg 45",
            "3 séries",
            "10-15",
            false
          ],
          [
            "Extensor",
            "3 séries",
            "10-15",
            false
          ],
          [
            "Flexor sentado",
            "3 séries",
            "10-15",
            false
          ],
          [
            "Flexor deitado",
            "3 séries",
            "10-15",
            false
          ],
          [
            "Abdutor",
            "3 séries",
            "10-15",
            false
          ],
          [
            "Panturrilha em pé na máquina ou smith",
            "3 séries",
            "10-15",
            false
          ],
          [
            "Abdominal supra no solo",
            "3 séries",
            "10-15",
            false
          ]
        ]
      }
    ]
  },
  {
    "id": "ppl-int",
    "name": "PPL Intermediário",
    "level": "Intermediário",
    "days": 3,
    "note": "Pull • Push • Legs",
    "workouts": [
      {
        "id": "A",
        "name": "Costas + bíceps + abdômen",
        "exercises": [
          [
            "Remada curvada com barra",
            "2 aquec. + 2 ajuste + 1 trabalho",
            "6-10",
            false
          ],
          [
            "Remada baixa triângulo",
            "2 ajuste + 1 trabalho",
            "6-10",
            false
          ],
          [
            "Remada baixa pegada aberta",
            "1 ajuste + 1 trabalho",
            "6-10",
            false
          ],
          [
            "Pulley frente triângulo",
            "2 ajuste + 1 trabalho + 1 drop set",
            "10-15",
            false,
            {
              "kind": "drop",
              "count": 1
            }
          ],
          [
            "Meio terra",
            "1 aquec. + 2 ajuste + 1 trabalho",
            "6-10",
            false
          ],
          [
            "Rosca Scott máquina",
            "2 ajuste + 2 trabalho + 2 rest-pause de 10s",
            "6-10",
            false,
            {
              "kind": "rest-pause",
              "count": 2,
              "seconds": 10
            }
          ],
          [
            "Abdominal infra na torre",
            "3 trabalho",
            "Máx.",
            false
          ]
        ]
      },
      {
        "id": "B",
        "name": "Peito + ombros + tríceps + panturrilhas",
        "exercises": [
          [
            "Supino inclinado com halteres",
            "2 aquec. + 2 ajuste + 1 trabalho",
            "6-10",
            false
          ],
          [
            "Supino reto com halteres",
            "2 ajuste + 1 trabalho + 2 rest-pause de 10s",
            "6-10",
            false,
            {
              "kind": "rest-pause",
              "count": 2,
              "seconds": 10
            }
          ],
          [
            "Supino declinado barra ou máquina",
            "1 ajuste + 1 trabalho",
            "6-10",
            false
          ],
          [
            "Voador com pico de contração",
            "2 ajuste + 1 trabalho + 1 drop set",
            "10-15",
            false,
            {
              "kind": "drop",
              "count": 1
            }
          ],
          [
            "Elevação frontal corda ou halteres",
            "1 ajuste + 1 trabalho",
            "6-10",
            false
          ],
          [
            "Elevação lateral sentada com halteres",
            "2 ajuste + 1 trabalho + 1 drop set",
            "8-12",
            false,
            {
              "kind": "drop",
              "count": 1
            }
          ],
          [
            "Tríceps corda",
            "2 ajuste + 2 trabalho + 2 rest-pause de 10s",
            "6-10",
            false,
            {
              "kind": "rest-pause",
              "count": 2,
              "seconds": 10
            }
          ],
          [
            "Panturrilha máquina em pé",
            "2 aquec. + 2 ajuste + 3 trabalho",
            "8-12",
            false
          ]
        ]
      },
      {
        "id": "C",
        "name": "Pernas + glúteos",
        "exercises": [
          [
            "Extensor",
            "2 aquec. + 2 ajuste + 1 trabalho",
            "6-10",
            false
          ],
          [
            "Hack machine",
            "1 aquec. + 2 ajuste + 1 trabalho + 2 rest-pause de 10s",
            "6-10",
            false,
            {
              "kind": "rest-pause",
              "count": 2,
              "seconds": 10
            }
          ],
          [
            "Leg 45",
            "2 ajuste + 1 trabalho + 10 repetições parciais após a falha",
            "6-10",
            false,
            {
              "kind": "partials",
              "count": 1
            }
          ],
          [
            "Flexor deitado",
            "1 aquec. + 2 ajuste + 1 trabalho + 2 rest-pause de 10s",
            "6-10",
            false,
            {
              "kind": "rest-pause",
              "count": 2,
              "seconds": 10
            }
          ],
          [
            "Stiff",
            "1 aquec. + 2 ajuste + 1 trabalho",
            "6-10",
            false
          ],
          [
            "Elevação de quadril",
            "1 aquec. + 2 ajuste + 1 trabalho",
            "6-10",
            false
          ]
        ]
      }
    ]
  },
  {
    "id": "abcd-int",
    "name": "ABCD Intermediário",
    "level": "Intermediário",
    "days": 4,
    "note": "Peito e bíceps • Costas • Ombros e tríceps • Pernas",
    "workouts": [
      {
        "id": "A",
        "name": "Peito + bíceps",
        "exercises": [
          [
            "Supino inclinado com halteres",
            "1-2 aquec. + 1-2 ajuste + 1 trabalho",
            "6-10",
            false
          ],
          [
            "Supino reto com halteres",
            "2 ajuste + 1 trabalho + 2 rest-pause de 10s",
            "6-10",
            false,
            {
              "kind": "rest-pause",
              "count": 2,
              "seconds": 10
            }
          ],
          [
            "Supino declinado barra ou máquina",
            "1 ajuste + 1 trabalho",
            "6-10",
            false
          ],
          [
            "Voador com pico de contração",
            "2 ajuste + 1 trabalho + 1 drop set",
            "10-15",
            false,
            {
              "kind": "drop",
              "count": 1
            }
          ],
          [
            "Rosca direta barra ou cabo",
            "1-2 aquec. + 1-2 ajuste + 1 trabalho",
            "6-10",
            false
          ],
          [
            "Rosca Scott máquina",
            "2 ajuste + 1 trabalho + 2 rest-pause de 10s",
            "6-10",
            false,
            {
              "kind": "rest-pause",
              "count": 2,
              "seconds": 10
            }
          ],
          [
            "Rosca direta corda",
            "1 ajuste + 1 trabalho + 1 drop set",
            "6-10",
            false,
            {
              "kind": "drop",
              "count": 1
            }
          ],
          [
            "Abdominal supra declinado",
            "3 séries",
            "15-20",
            false
          ]
        ]
      },
      {
        "id": "B",
        "name": "Costas",
        "exercises": [
          [
            "Remada curvada com barra",
            "1-2 aquec. + 1-2 ajuste + 1 trabalho",
            "6-10",
            false
          ],
          [
            "Remada baixa triângulo",
            "2 ajuste + 1 trabalho + 2 rest-pause de 10s",
            "6-10",
            false,
            {
              "kind": "rest-pause",
              "count": 2,
              "seconds": 10
            }
          ],
          [
            "Remada baixa pegada aberta",
            "1 ajuste + 1 trabalho",
            "6-10",
            false
          ],
          [
            "Pulley frente triângulo",
            "2 ajuste + 1 trabalho + 1 drop set",
            "6-10",
            false,
            {
              "kind": "drop",
              "count": 1
            }
          ],
          [
            "Meio terra",
            "1 aquec. + 1-2 ajuste + 1 trabalho",
            "6-10",
            false
          ],
          [
            "Panturrilha máquina ou smith",
            "1 aquec. + 1-2 ajuste",
            "10-15",
            false
          ]
        ]
      },
      {
        "id": "C",
        "name": "Ombros + tríceps",
        "exercises": [
          [
            "Desenvolvimento halteres ou máquina",
            "1-2 aquec. + 1-2 ajuste",
            "4-6",
            false
          ],
          [
            "Elevação frontal corda ou halteres",
            "2 ajuste + 1 trabalho + 2 rest-pause de 10s",
            "6-10",
            false,
            {
              "kind": "rest-pause",
              "count": 2,
              "seconds": 10
            }
          ],
          [
            "Elevação lateral",
            "1 ajuste + 1 trabalho",
            "6-10",
            false
          ],
          [
            "Elevação unilateral no cabo",
            "2 ajuste + 1 trabalho + 1 drop set",
            "10-15",
            true,
            {
              "kind": "drop",
              "count": 1
            }
          ],
          [
            "Tríceps testa corda",
            "1-2 aquec. + 1-2 ajuste + 1 trabalho",
            "6-10",
            false
          ],
          [
            "Tríceps corda",
            "2 ajuste + 1 trabalho + 2 rest-pause de 10s",
            "6-10",
            false,
            {
              "kind": "rest-pause",
              "count": 2,
              "seconds": 10
            }
          ],
          [
            "Tríceps francês",
            "1 ajuste + 1 trabalho + 1 drop set",
            "6-10",
            false,
            {
              "kind": "drop",
              "count": 1
            }
          ],
          [
            "Abdominal infra na torre",
            "3 séries",
            "15-20",
            false
          ]
        ]
      },
      {
        "id": "D",
        "name": "Pernas",
        "exercises": [
          [
            "Panturrilha sentada",
            "1 aquec. + 1-2 ajuste + 3 trabalho",
            "6-10",
            false
          ],
          [
            "Agachamento livre",
            "1-2 aquec. + 1-2 ajuste + 1 trabalho",
            "6-10",
            false
          ],
          [
            "Leg 45",
            "1 aquec. + 2 ajuste + 1 trabalho + 2 rest-pause de 10s",
            "6-10",
            false,
            {
              "kind": "rest-pause",
              "count": 2,
              "seconds": 10
            }
          ],
          [
            "Extensor",
            "2 ajuste + 1 trabalho + 1 drop set",
            "6-10",
            false,
            {
              "kind": "drop",
              "count": 1
            }
          ],
          [
            "Flexor deitado",
            "1 aquec. + 2 ajuste + 1 trabalho + 2 rest-pause de 10s",
            "6-10",
            false,
            {
              "kind": "rest-pause",
              "count": 2,
              "seconds": 10
            }
          ],
          [
            "Stiff",
            "1 aquec. + 1-2 ajuste + 1 trabalho",
            "6-10",
            false
          ],
          [
            "Elevação de quadril",
            "1 aquec. + 1-2 ajuste + 1 trabalho",
            "6-10",
            false
          ]
        ]
      }
    ]
  },
  {
    "id": "upper-lower",
    "name": "Upper / Lower",
    "level": "Intermediário",
    "days": 4,
    "note": "Superior e inferior alternados",
    "workouts": [
      {
        "id": "A",
        "name": "Upper 1 • Superior 1",
        "exercises": [
          [
            "Supino inclinado máquina ou halteres ou smith",
            "2 aquec. + 3 ajuste + 2 trabalho",
            "6-10",
            false,
            null,
            {
              "adjustReps": [
                "4-6",
                "2-4",
                "2-4"
              ]
            }
          ],
          [
            "Voador",
            "3 ajuste + 2 trabalho",
            "6-10",
            false,
            null,
            {
              "adjustReps": [
                "4-6",
                "2-4",
                "2-4"
              ]
            }
          ],
          [
            "Pulley frente aberto",
            "2 aquec. + 3 ajuste + 2 trabalho",
            "6-10",
            false,
            null,
            {
              "adjustReps": [
                "4-6",
                "2-4",
                "2-4"
              ]
            }
          ],
          [
            "Remada baixa triângulo",
            "2 ajuste + 2 trabalho",
            "6-10",
            false,
            null,
            {
              "adjustReps": [
                "4-6",
                "2-4"
              ]
            }
          ],
          [
            "Elevação lateral sentada",
            "2 ajuste + 2 trabalho",
            "6-10",
            false,
            null,
            {
              "adjustReps": [
                "4-6",
                "2-4"
              ]
            }
          ],
          [
            "Rosca direta banco 45 graus",
            "2 ajuste + 2 trabalho",
            "6-10",
            false,
            null,
            {
              "adjustReps": [
                "4-6",
                "2-4"
              ]
            }
          ],
          [
            "Tríceps francês com corda",
            "2 ajuste + 2 trabalho",
            "6-10",
            false,
            null,
            {
              "adjustReps": [
                "4-6",
                "2-4"
              ]
            }
          ]
        ]
      },
      {
        "id": "B",
        "name": "Lower 1 • Inferior 1",
        "exercises": [
          [
            "Flexor deitado",
            "2 aquec. + 3 ajuste + 2 trabalho",
            "6-10",
            false,
            null,
            {
              "adjustReps": [
                "4-6",
                "2-4",
                "2-4"
              ]
            }
          ],
          [
            "Agachamento Hack",
            "2 aquec. + 3 ajuste + 2 trabalho",
            "6-10",
            false,
            null,
            {
              "adjustReps": [
                "4-6",
                "2-4",
                "2-4"
              ]
            }
          ],
          [
            "Leg 45",
            "3 ajuste + 2 trabalho",
            "6-10",
            false,
            null,
            {
              "adjustReps": [
                "4-6",
                "2-4",
                "2-4"
              ]
            }
          ],
          [
            "Extensor",
            "3 ajuste + 2 trabalho",
            "6-10",
            false,
            null,
            {
              "adjustReps": [
                "4-6",
                "2-4",
                "2-4"
              ]
            }
          ],
          [
            "Stiff",
            "3 ajuste + 2 trabalho",
            "6-10",
            false,
            null,
            {
              "adjustReps": [
                "4-6",
                "2-4",
                "2-4"
              ]
            }
          ]
        ]
      },
      {
        "id": "C",
        "name": "Upper 2 • Superior 2",
        "exercises": [
          [
            "Supino reto máquina ou halteres ou smith",
            "2 aquec. + 3 ajuste + 2 trabalho",
            "6-10",
            false,
            null,
            {
              "adjustReps": [
                "4-6",
                "2-4",
                "2-4"
              ]
            }
          ],
          [
            "Cross over",
            "3 ajuste + 2 trabalho",
            "6-10",
            false,
            null,
            {
              "adjustReps": [
                "4-6",
                "2-4",
                "2-4"
              ]
            }
          ],
          [
            "Remada curvada",
            "2 aquec. + 3 ajuste + 2 trabalho",
            "6-10",
            false,
            null,
            {
              "adjustReps": [
                "4-6",
                "2-4",
                "2-4"
              ]
            }
          ],
          [
            "Pulley frente triângulo",
            "2 ajuste + 2 trabalho",
            "6-10",
            false,
            null,
            {
              "adjustReps": [
                "4-6",
                "2-4"
              ]
            }
          ],
          [
            "Desenvolvimento máquina ou halteres",
            "2 ajuste + 2 trabalho",
            "6-10",
            false,
            null,
            {
              "adjustReps": [
                "4-6",
                "2-4"
              ]
            }
          ],
          [
            "Rosca Scott máquina ou Scott no cabo",
            "2 ajuste + 2 trabalho",
            "6-10",
            false,
            null,
            {
              "adjustReps": [
                "4-6",
                "2-4"
              ]
            }
          ],
          [
            "Tríceps corda",
            "2 ajuste + 2 trabalho",
            "6-10",
            false,
            null,
            {
              "adjustReps": [
                "4-6",
                "2-4"
              ]
            }
          ]
        ]
      },
      {
        "id": "D",
        "name": "Lower 2 • Inferior 2",
        "exercises": [
          [
            "Flexor sentado",
            "2 aquec. + 3 ajuste + 2 trabalho",
            "6-10",
            false,
            null,
            {
              "adjustReps": [
                "4-6",
                "2-4",
                "2-4"
              ]
            }
          ],
          [
            "Flexor deitado",
            "3 ajuste + 2 trabalho",
            "6-10",
            false,
            null,
            {
              "adjustReps": [
                "4-6",
                "2-4",
                "2-4"
              ]
            }
          ],
          [
            "Elevação de quadril",
            "2 aquec. + 3 ajuste + 2 trabalho",
            "6-10",
            false,
            null,
            {
              "adjustReps": [
                "4-6",
                "2-4",
                "2-4"
              ]
            }
          ],
          [
            "Hack",
            "3 ajuste + 2 trabalho",
            "6-10",
            false,
            null,
            {
              "adjustReps": [
                "4-6",
                "2-4",
                "2-4"
              ]
            }
          ],
          [
            "Leg 45",
            "3 ajuste + 2 trabalho",
            "6-10",
            false,
            null,
            {
              "adjustReps": [
                "4-6",
                "2-4",
                "2-4"
              ]
            }
          ]
        ]
      }
    ]
  },
  {
    "id": "female-advanced-3",
    "name": "Feminino Avançado • 3× na semana",
    "level": "Avançado",
    "days": 3,
    "note": "Quadríceps • superior • posterior e glúteos",
    "workouts": [
      {
        "id": "A",
        "name": "Quadríceps + glúteos + panturrilhas",
        "exercises": [
          [
            "Agachamento livre ou smith",
            "4 trabalho",
            "6-10",
            false,
            null,
            {
              "workReps": [
                "15-20",
                "10-15",
                "8-12",
                "6-10"
              ]
            }
          ],
          [
            "Hack machine",
            "3 trabalho + 2 rest-pause de 10s",
            "8-12",
            false,
            {
              "kind": "rest-pause",
              "count": 2,
              "seconds": 10
            },
            {
              "workReps": [
                "10-15",
                "8-12",
                "8-12"
              ]
            }
          ],
          [
            "Leg 45",
            "3 trabalho + 10 repetições parciais após a falha",
            "8-12",
            false,
            {
              "kind": "partials",
              "count": 1
            },
            {
              "workReps": [
                "10-15",
                "8-12",
                "8-12"
              ]
            }
          ],
          [
            "Elevação de quadril com 2 segundos de pico de contração",
            "3 trabalho + 1 rest-pause de 10s",
            "10-15",
            false,
            {
              "kind": "rest-pause",
              "count": 1,
              "seconds": 10
            }
          ],
          [
            "Abdutor com 2 segundos de pico de contração",
            "5 trabalho",
            "10-15",
            false
          ],
          [
            "Panturrilha em pé na máquina ou smith com step",
            "4 trabalho + 1 drop set",
            "6-10",
            false,
            {
              "kind": "drop",
              "count": 1
            },
            {
              "workReps": [
                "15-20",
                "10-15",
                "8-12",
                "6-10"
              ]
            }
          ]
        ]
      },
      {
        "id": "B",
        "name": "Superior + abdômen",
        "exercises": [
          [
            "Abdominal supra na prancha",
            "3 trabalho",
            "Máx.",
            false
          ],
          [
            "Pulley frente aberto com 2 segundos de pico de contração",
            "4 trabalho",
            "10-15",
            false
          ],
          [
            "Remada baixa triângulo com 2 segundos de pico de contração",
            "4 trabalho",
            "10-15",
            false
          ],
          [
            "Supino inclinado com halteres",
            "4 trabalho",
            "10-15",
            false
          ],
          [
            "Elevação frontal sentado com halteres",
            "4 trabalho",
            "10-15",
            false
          ],
          [
            "Elevação lateral sentada com halteres",
            "4 trabalho + 10 repetições parciais após a falha",
            "10-15",
            false,
            {
              "kind": "partials",
              "count": 1
            }
          ],
          [
            "Tríceps corda com 2 segundos de pico de contração",
            "4 trabalho",
            "10-15",
            false
          ]
        ]
      },
      {
        "id": "C",
        "name": "Posterior + glúteos",
        "exercises": [
          [
            "Flexor deitado",
            "4 trabalho",
            "6-10",
            false,
            null,
            {
              "workReps": [
                "15-20",
                "10-15",
                "8-12",
                "6-10"
              ]
            }
          ],
          [
            "Flexor sentado com 2 segundos de pico de contração",
            "3 trabalho + 2 rest-pause de 10s",
            "8-12",
            false,
            {
              "kind": "rest-pause",
              "count": 2,
              "seconds": 10
            },
            {
              "workReps": [
                "15-20",
                "10-15",
                "8-12"
              ]
            }
          ],
          [
            "Stiff",
            "3 trabalho",
            "8-12",
            false
          ],
          [
            "Afundo no smith com step",
            "3 trabalho",
            "8-12",
            true
          ],
          [
            "Elevação de quadril",
            "4 trabalho + 2 rest-pause de 10s",
            "6-10",
            false,
            {
              "kind": "rest-pause",
              "count": 2,
              "seconds": 10
            },
            {
              "workReps": [
                "15-20",
                "10-15",
                "8-12",
                "6-10"
              ]
            }
          ],
          [
            "Abdutor com 3 segundos de pico de contração",
            "5 trabalho",
            "10-15",
            false
          ]
        ]
      }
    ]
  },
  {
    "id": "ppl-abc",
    "name": "PPL ABC",
    "level": "Avançado",
    "days": 3,
    "note": "Pull • Push • Legs com maior volume",
    "workouts": [
      {
        "id": "A",
        "name": "Costas + bíceps + abdômen",
        "exercises": [
          [
            "Remada curvada com barra",
            "2 aquec. + 2 ajuste + 2 trabalho",
            "6-10",
            false
          ],
          [
            "Remada baixa triângulo",
            "2 ajuste + 1 trabalho + 2 rest-pause de 10s",
            "6-10",
            false,
            {
              "kind": "rest-pause",
              "count": 2,
              "seconds": 10
            }
          ],
          [
            "Remada baixa pegada aberta",
            "1 ajuste + 2 trabalho",
            "6-10",
            false
          ],
          [
            "Pulley frente triângulo",
            "2 ajuste + 2 trabalho",
            "10-15",
            false
          ],
          [
            "Meio terra",
            "1 aquec. + 2 ajuste + 2 trabalho",
            "6-10",
            false
          ],
          [
            "Rosca Scott máquina",
            "2 ajuste + 3 trabalho + 2 rest-pause de 10s",
            "6-10",
            false,
            {
              "kind": "rest-pause",
              "count": 2,
              "seconds": 10
            }
          ],
          [
            "Abdominal infra na torre",
            "3 trabalho",
            "Máx.",
            false
          ]
        ]
      },
      {
        "id": "B",
        "name": "Peito + ombros + tríceps + panturrilhas",
        "exercises": [
          [
            "Supino inclinado com halteres",
            "2 aquec. + 2 ajuste + 2 trabalho",
            "6-10",
            false
          ],
          [
            "Supino reto com halteres",
            "1 ajuste + 2 trabalho",
            "6-10",
            false
          ],
          [
            "Supino declinado barra ou máquina",
            "1 ajuste + 2 trabalho",
            "6-10",
            false
          ],
          [
            "Voador com pico de contração",
            "2 ajuste + 2 trabalho + 1 drop set",
            "10-15",
            false,
            {
              "kind": "drop",
              "count": 1
            }
          ],
          [
            "Elevação frontal corda ou halteres",
            "1 ajuste + 2 trabalho",
            "6-10",
            false
          ],
          [
            "Elevação lateral sentada com halteres",
            "2 ajuste + 2 trabalho + 1 drop set",
            "8-12",
            false,
            {
              "kind": "drop",
              "count": 1
            }
          ],
          [
            "Tríceps corda",
            "2 ajuste + 3 trabalho + 2 rest-pause de 10s",
            "6-10",
            false,
            {
              "kind": "rest-pause",
              "count": 2,
              "seconds": 10
            }
          ],
          [
            "Panturrilha máquina em pé",
            "2 aquec. + 2 ajuste + 3 trabalho",
            "8-12",
            false
          ]
        ]
      },
      {
        "id": "C",
        "name": "Pernas + glúteos",
        "exercises": [
          [
            "Extensor",
            "2 aquec. + 2 ajuste + 2 trabalho",
            "6-10",
            false
          ],
          [
            "Hack machine",
            "1 aquec. + 2 ajuste + 2 trabalho + 2 rest-pause de 10s",
            "6-10",
            false,
            {
              "kind": "rest-pause",
              "count": 2,
              "seconds": 10
            }
          ],
          [
            "Leg 45",
            "2 ajuste + 2 trabalho + 10 repetições parciais após a falha",
            "6-10",
            false,
            {
              "kind": "partials",
              "count": 1
            }
          ],
          [
            "Flexor deitado",
            "1 aquec. + 2 ajuste + 1 trabalho + 2 rest-pause de 10s",
            "6-10",
            false,
            {
              "kind": "rest-pause",
              "count": 2,
              "seconds": 10
            }
          ],
          [
            "Stiff",
            "1 aquec. + 2 ajuste + 2 trabalho",
            "6-10",
            false
          ],
          [
            "Elevação de quadril",
            "1 aquec. + 2 ajuste + 2 trabalho",
            "6-10",
            false
          ]
        ]
      }
    ]
  },
  {
    "id": "abcd-adv",
    "name": "ABCD Avançado",
    "level": "Avançado",
    "days": 4,
    "note": "Maior volume • rest-pause e drop sets",
    "workouts": [
      {
        "id": "A",
        "name": "Peito + bíceps + abdômen",
        "exercises": [
          [
            "Supino inclinado com halteres ou máquina",
            "2 aquec. + 2 ajuste + 2 trabalho",
            "6-10",
            false
          ],
          [
            "Supino reto com halteres ou máquina",
            "2 ajuste + 2 trabalho + 2 rest-pause de 10s",
            "6-10",
            false,
            {
              "kind": "rest-pause",
              "count": 2,
              "seconds": 10
            }
          ],
          [
            "Supino declinado barra ou máquina",
            "1 ajuste + 2 trabalho",
            "6-10",
            false
          ],
          [
            "Voador com 2 segundos de pico de contração",
            "2 ajuste + 2 trabalho + 1 drop set",
            "10-15",
            false,
            {
              "kind": "drop",
              "count": 1
            }
          ],
          [
            "Rosca direta barra livre ou cabo com barra",
            "2 aquec. + 2 ajuste + 2 trabalho",
            "6-10",
            false
          ],
          [
            "Rosca Scott máquina",
            "2 ajuste + 2 trabalho + 2 rest-pause de 10s",
            "6-10",
            false,
            {
              "kind": "rest-pause",
              "count": 2,
              "seconds": 10
            }
          ],
          [
            "Rosca direta corda",
            "1 ajuste + 2 trabalho + 1 drop set",
            "6-10",
            false,
            {
              "kind": "drop",
              "count": 1
            }
          ],
          [
            "Abdominal supra na prancha declinada",
            "3 trabalho",
            "15-20",
            false
          ]
        ]
      },
      {
        "id": "B",
        "name": "Costas + panturrilhas",
        "exercises": [
          [
            "Remada curvada com barra com 2 segundos de pico de contração",
            "2 aquec. + 2 ajuste + 2 trabalho",
            "6-10",
            false
          ],
          [
            "Remada baixa triângulo com 2 segundos de pico de contração",
            "2 ajuste + 2 trabalho",
            "6-10",
            false
          ],
          [
            "Remada baixa pegada aberta com 2 segundos de pico de contração",
            "1 ajuste + 2 trabalho",
            "6-10",
            false
          ],
          [
            "Pulley frente triângulo com 2 segundos de pico de contração",
            "2 ajuste + 2 trabalho",
            "6-10",
            false
          ],
          [
            "Meio terra",
            "1 aquec. + 2 ajuste + 2 trabalho",
            "6-10",
            false
          ],
          [
            "Panturrilha máquina ou em pé no smith",
            "1 aquec. + 2 ajuste + 3 trabalho",
            "6-10",
            false
          ]
        ]
      },
      {
        "id": "C",
        "name": "Ombros + tríceps + abdômen",
        "exercises": [
          [
            "Desenvolvimento halteres ou máquina",
            "2 aquec. + 2 ajuste + 2 trabalho",
            "6-10",
            false
          ],
          [
            "Elevação frontal corda ou halteres",
            "2 ajuste + 2 trabalho + 2 rest-pause de 10s",
            "6-10",
            false,
            {
              "kind": "rest-pause",
              "count": 2,
              "seconds": 10
            }
          ],
          [
            "Elevação lateral",
            "1 ajuste + 2 trabalho",
            "6-10",
            false
          ],
          [
            "Elevação unilateral cabo",
            "2 ajuste + 2 trabalho + 1 drop set",
            "10-15",
            true,
            {
              "kind": "drop",
              "count": 1
            }
          ],
          [
            "Tríceps testa corda",
            "2 aquec. + 2 ajuste + 2 trabalho",
            "6-10",
            false
          ],
          [
            "Tríceps corda",
            "2 ajuste + 2 trabalho + 2 rest-pause de 10s",
            "6-10",
            false,
            {
              "kind": "rest-pause",
              "count": 2,
              "seconds": 10
            }
          ],
          [
            "Tríceps francês",
            "1 ajuste + 2 trabalho + 1 drop set",
            "6-10",
            false,
            {
              "kind": "drop",
              "count": 1
            }
          ],
          [
            "Abdominal infra na torre",
            "3 trabalho",
            "15-20",
            false
          ]
        ]
      },
      {
        "id": "D",
        "name": "Pernas + glúteos",
        "exercises": [
          [
            "Panturrilha sentada",
            "1 aquec. + 2 ajuste + 3 trabalho",
            "6-10",
            false
          ],
          [
            "Agachamento livre",
            "2 aquec. + 2 ajuste + 2 trabalho",
            "6-10",
            false
          ],
          [
            "Leg 45",
            "1 aquec. + 2 ajuste + 2 trabalho + 2 rest-pause de 10s",
            "6-10",
            false,
            {
              "kind": "rest-pause",
              "count": 2,
              "seconds": 10
            }
          ],
          [
            "Extensor",
            "2 ajuste + 2 trabalho + 1 drop set",
            "6-10",
            false,
            {
              "kind": "drop",
              "count": 1
            }
          ],
          [
            "Flexor deitado com 2 segundos de pico de contração",
            "1 aquec. + 2 ajuste + 2 trabalho + 2 rest-pause de 10s",
            "6-10",
            false,
            {
              "kind": "rest-pause",
              "count": 2,
              "seconds": 10
            }
          ],
          [
            "Stiff",
            "1 aquec. + 2 ajuste + 2 trabalho",
            "6-10",
            false
          ],
          [
            "Elevação de quadril com 2 segundos de pico de contração",
            "1 aquec. + 2 ajuste + 3 trabalho",
            "6-10",
            false
          ]
        ]
      }
    ]
  },
  {
    "id": "female-upper-lower-4",
    "name": "Feminino Upper / Lower • 4×",
    "level": "Avançado",
    "days": 4,
    "note": "Superior e inferior alternados • cargas progressivas",
    "workouts": [
      {
        "id": "A",
        "name": "Lower 1 • Inferior 1",
        "exercises": [
          [
            "Flexor deitado",
            "2 aquec. + 3 ajuste + 2 trabalho",
            "6-10",
            false,
            null,
            {
              "adjustReps": [
                "4-6",
                "2-4",
                "2-4"
              ]
            }
          ],
          [
            "Agachamento smith",
            "2 aquec. + 3 ajuste + 2 trabalho",
            "6-10",
            false,
            null,
            {
              "adjustReps": [
                "4-6",
                "2-4",
                "2-4"
              ]
            }
          ],
          [
            "Leg 45",
            "3 ajuste + 2 trabalho",
            "6-10",
            false,
            null,
            {
              "adjustReps": [
                "4-6",
                "2-4",
                "2-4"
              ]
            }
          ],
          [
            "Extensor",
            "2 ajuste + 2 trabalho",
            "6-10",
            false,
            null,
            {
              "adjustReps": [
                "2-4",
                "2-4"
              ]
            }
          ],
          [
            "Stiff",
            "3 ajuste + 2 trabalho",
            "6-10",
            false,
            null,
            {
              "adjustReps": [
                "4-6",
                "2-4",
                "2-4"
              ]
            }
          ],
          [
            "Abdutor",
            "3 ajuste + 2 trabalho",
            "6-10",
            false,
            null,
            {
              "adjustReps": [
                "4-6",
                "2-4",
                "2-4"
              ]
            }
          ]
        ]
      },
      {
        "id": "B",
        "name": "Upper 1 • Superior 1",
        "exercises": [
          [
            "Supino inclinado máquina ou halteres ou smith",
            "2 aquec. + 1 ajuste + 2 trabalho",
            "8-12",
            false
          ],
          [
            "Pulley frente aberto",
            "2 aquec. + 1 ajuste + 2 trabalho",
            "8-12",
            false
          ],
          [
            "Remada baixa triângulo",
            "1 ajuste + 2 trabalho",
            "8-12",
            false
          ],
          [
            "Elevação lateral sentada",
            "2 ajuste + 2 trabalho",
            "6-10",
            false
          ],
          [
            "Tríceps francês com corda",
            "1 ajuste + 2 trabalho",
            "8-12",
            false
          ],
          [
            "Abdominal supra na prancha",
            "3 trabalho",
            "15-20",
            false
          ]
        ]
      },
      {
        "id": "C",
        "name": "Lower 2 • Inferior 2",
        "exercises": [
          [
            "Flexor deitado",
            "2 aquec. + 3 ajuste + 2 trabalho",
            "6-10",
            false,
            null,
            {
              "adjustReps": [
                "4-6",
                "2-4",
                "2-4"
              ]
            }
          ],
          [
            "Flexor sentado",
            "2 ajuste + 2 trabalho",
            "6-10",
            false,
            null,
            {
              "adjustReps": [
                "2-4",
                "2-4"
              ]
            }
          ],
          [
            "Elevação de quadril",
            "2 aquec. + 3 ajuste + 2 trabalho",
            "6-10",
            false,
            null,
            {
              "adjustReps": [
                "4-6",
                "2-4",
                "2-4"
              ]
            }
          ],
          [
            "Hack",
            "3 ajuste + 2 trabalho",
            "6-10",
            false,
            null,
            {
              "adjustReps": [
                "4-6",
                "2-4",
                "2-4"
              ]
            }
          ],
          [
            "Leg 45",
            "2 ajuste + 2 trabalho",
            "6-10",
            false,
            null,
            {
              "adjustReps": [
                "2-4",
                "2-4"
              ]
            }
          ],
          [
            "Abdutor",
            "3 ajuste + 2 trabalho",
            "6-10",
            false,
            null,
            {
              "adjustReps": [
                "4-6",
                "2-4",
                "2-4"
              ]
            }
          ]
        ]
      },
      {
        "id": "D",
        "name": "Upper 2 • Superior 2",
        "exercises": [
          [
            "Supino reto máquina ou halteres ou smith",
            "2 aquec. + 1 ajuste + 2 trabalho",
            "8-12",
            false
          ],
          [
            "Remada curvada",
            "2 aquec. + 2 ajuste + 2 trabalho",
            "8-12",
            false
          ],
          [
            "Pulley frente triângulo",
            "1 ajuste + 2 trabalho",
            "6-10",
            false
          ],
          [
            "Desenvolvimento máquina ou halteres",
            "2 ajuste + 2 trabalho",
            "8-12",
            false
          ],
          [
            "Tríceps corda unilateral",
            "1 ajuste + 2 trabalho",
            "6-10",
            true
          ],
          [
            "Abdominal infra na torre",
            "3 trabalho",
            "15-20",
            false
          ]
        ]
      }
    ]
  },
  {
    "id": "abcde-low",
    "name": "ABCDE - ênfase inferiores",
    "level": "Avançado",
    "days": 5,
    "note": "Prioridade para pernas • 2 estímulos inferiores",
    "workouts": [
      {
        "id": "A",
        "name": "Quadríceps + posteriores + glúteos",
        "exercises": [
          [
            "Agachamento livre",
            "2 aquec. + 2 ajuste + 2 trabalho",
            "6-10",
            false
          ],
          [
            "Hack machine",
            "2 ajuste + 2 trabalho + 2 rest-pause de 10s",
            "6-10",
            false,
            {
              "kind": "rest-pause",
              "count": 2,
              "seconds": 10
            }
          ],
          [
            "Leg 45°",
            "2 ajuste + 2 trabalho + 10 repetições parciais",
            "10-15",
            false,
            {
              "kind": "partials",
              "count": 1
            }
          ],
          [
            "Extensora com 2 segundos de pico de contração",
            "2 ajuste + 2 trabalho + 2 drop sets",
            "6-10",
            false,
            {
              "kind": "drop",
              "count": 2
            }
          ],
          [
            "Flexor deitado com 2 segundos de pico de contração",
            "2 ajuste + 2 trabalho",
            "6-10",
            false
          ],
          [
            "Abdutor com 2 segundos de pico de contração",
            "1 aquec. + 2 ajuste + 2 trabalho",
            "6-10",
            false
          ]
        ]
      },
      {
        "id": "B",
        "name": "Peito + ombros + tríceps",
        "exercises": [
          [
            "Supino inclinado com halteres ou máquina",
            "2 aquec. + 2 ajuste + 2 trabalho",
            "6-10",
            false
          ],
          [
            "Supino reto com halteres ou máquina",
            "2 ajuste + 2 trabalho + 2 rest-pause de 10s",
            "6-10",
            false,
            {
              "kind": "rest-pause",
              "count": 2,
              "seconds": 10
            }
          ],
          [
            "Supino declinado barra ou máquina",
            "1 ajuste + 2 trabalho",
            "6-10",
            false
          ],
          [
            "Voador com 2 segundos de pico de contração",
            "2 ajuste + 2 trabalho + 1 drop set",
            "10-15",
            false,
            {
              "kind": "drop",
              "count": 1
            }
          ],
          [
            "Elevação frontal",
            "1 ajuste + 2 trabalho",
            "6-10",
            false
          ],
          [
            "Elevação lateral sentada com halteres",
            "2 ajuste + 2 trabalho + 1 drop set",
            "8-12",
            false,
            {
              "kind": "drop",
              "count": 1
            }
          ],
          [
            "Tríceps corda com 2 segundos de pico de contração",
            "2 ajuste + 3 trabalho + 2 rest-pause de 10s",
            "6-10",
            false,
            {
              "kind": "rest-pause",
              "count": 2,
              "seconds": 10
            }
          ]
        ]
      },
      {
        "id": "C",
        "name": "Costas + bíceps + panturrilhas",
        "exercises": [
          [
            "Remada curvada com barra com 2 segundos de pico de contração",
            "2 aquec. + 2 ajuste + 2 trabalho",
            "6-10",
            false
          ],
          [
            "Remada baixa triângulo com 2 segundos de pico de contração",
            "2 ajuste + 2 trabalho + 2 rest-pause de 10s",
            "6-10",
            false,
            {
              "kind": "rest-pause",
              "count": 2,
              "seconds": 10
            }
          ],
          [
            "Remada baixa pegada aberta com 2 segundos de pico de contração",
            "1 ajuste + 2 trabalho",
            "6-10",
            false
          ],
          [
            "Pulley frente triângulo com 2 segundos de pico de contração",
            "2 ajuste + 2 trabalho + 1 drop set",
            "8-12",
            false,
            {
              "kind": "drop",
              "count": 1
            }
          ],
          [
            "Meio terra",
            "1 aquec. + 2 ajuste + 2 trabalho",
            "6-10",
            false
          ],
          [
            "Hiperextensão no banco romano",
            "3 trabalho",
            "10-15",
            false
          ],
          [
            "Rosca Scott máquina com 2 segundos de pico de contração",
            "1 ajuste + 3 trabalho",
            "6-10",
            false
          ],
          [
            "Panturrilha em pé na máquina ou smith",
            "2 aquec. + 2 ajuste + 3 trabalho",
            "8-12",
            false
          ]
        ]
      },
      {
        "id": "D",
        "name": "Posteriores + glúteos + quadríceps",
        "exercises": [
          [
            "Flexor deitado com 2 segundos de pico de contração",
            "2 aquec. + 2 ajuste + 2 trabalho",
            "6-10",
            false
          ],
          [
            "Flexor sentado com 2 segundos de pico de contração",
            "2 ajuste + 2 trabalho + 2 rest-pause de 10s",
            "6-10",
            false,
            {
              "kind": "rest-pause",
              "count": 2,
              "seconds": 10
            }
          ],
          [
            "Stiff",
            "1 aquec. + 2 ajuste + 2 trabalho",
            "6-10",
            false
          ],
          [
            "Elevação de quadril com 2 segundos de pico de contração",
            "1 aquec. + 2 ajuste + 2 trabalho + 2 rest-pause de 10s",
            "6-10",
            false,
            {
              "kind": "rest-pause",
              "count": 2,
              "seconds": 10
            }
          ],
          [
            "Abdutor com 2 segundos de pico de contração",
            "2 ajuste + 2 trabalho",
            "6-10",
            false
          ],
          [
            "Extensor com 2 segundos de pico de contração",
            "1 aquec. + 2 ajuste + 2 trabalho + 1 drop set",
            "6-10",
            false,
            {
              "kind": "drop",
              "count": 1
            }
          ]
        ]
      },
      {
        "id": "E",
        "name": "Upper body + panturrilhas",
        "exercises": [
          [
            "Supino inclinado com halteres ou máquina",
            "2 aquec. + 2 ajuste + 2 trabalho",
            "6-10",
            false
          ],
          [
            "Supino reto com halteres ou máquina",
            "2 ajuste + 2 trabalho + 2 rest-pause de 10s",
            "6-10",
            false,
            {
              "kind": "rest-pause",
              "count": 2,
              "seconds": 10
            }
          ],
          [
            "Remada baixa pegada aberta com 2 segundos de pico de contração",
            "1 aquec. + 2 ajuste + 2 trabalho",
            "6-10",
            false
          ],
          [
            "Pulley frente triângulo com 2 segundos de pico de contração",
            "2 ajuste + 2 trabalho + 2 rest-pause de 10s",
            "6-10",
            false,
            {
              "kind": "rest-pause",
              "count": 2,
              "seconds": 10
            }
          ],
          [
            "Desenvolvimento halteres ou máquina",
            "2 ajuste + 2 trabalho + 2 rest-pause de 10s",
            "6-10",
            false,
            {
              "kind": "rest-pause",
              "count": 2,
              "seconds": 10
            }
          ],
          [
            "Rosca Scott máquina ou cabo com 2 segundos de pico de contração",
            "2 ajuste + 2 trabalho + 2 rest-pause de 10s",
            "6-10",
            false,
            {
              "kind": "rest-pause",
              "count": 2,
              "seconds": 10
            }
          ],
          [
            "Tríceps francês com corda",
            "2 ajuste + 2 trabalho + 1 drop set",
            "6-10",
            false,
            {
              "kind": "drop",
              "count": 1
            }
          ],
          [
            "Panturrilha em pé na máquina ou smith",
            "2 aquec. + 2 ajuste + 3 trabalho",
            "8-12",
            false
          ]
        ]
      }
    ]
  },
  {
    "id": "abcde-up",
    "name": "ABCDE - ênfase superiores",
    "level": "Avançado",
    "days": 5,
    "note": "Prioridade para tronco • peito, costas, ombros e braços",
    "workouts": [
      {
        "id": "A",
        "name": "Peito + ombros + tríceps",
        "exercises": [
          [
            "Supino inclinado com halteres ou máquina",
            "2 aquec. + 2 ajuste + 2 trabalho",
            "6-10",
            false
          ],
          [
            "Supino reto com halteres ou máquina",
            "2 ajuste + 2 trabalho + 2 rest-pause de 10s",
            "6-10",
            false,
            {
              "kind": "rest-pause",
              "count": 2,
              "seconds": 10
            }
          ],
          [
            "Supino declinado barra ou máquina",
            "1 ajuste + 2 trabalho",
            "6-10",
            false
          ],
          [
            "Voador com 2 segundos de pico de contração",
            "2 ajuste + 2 trabalho + 1 drop set",
            "10-15",
            false,
            {
              "kind": "drop",
              "count": 1
            }
          ],
          [
            "Elevação frontal",
            "1 ajuste + 2 trabalho",
            "6-10",
            false
          ],
          [
            "Elevação lateral sentada com halteres",
            "2 ajuste + 2 trabalho + 1 drop set",
            "8-12",
            false,
            {
              "kind": "drop",
              "count": 1
            }
          ],
          [
            "Tríceps francês na corda",
            "1 ajuste + 3 trabalho",
            "6-10",
            false
          ]
        ]
      },
      {
        "id": "B",
        "name": "Costas + bíceps",
        "exercises": [
          [
            "Remada curvada com barra com 2 segundos de pico de contração",
            "2 aquec. + 2 ajuste + 2 trabalho",
            "6-10",
            false
          ],
          [
            "Remada baixa triângulo com 2 segundos de pico de contração",
            "2 ajuste + 2 trabalho + 2 rest-pause de 10s",
            "6-10",
            false,
            {
              "kind": "rest-pause",
              "count": 2,
              "seconds": 10
            }
          ],
          [
            "Remada baixa pegada aberta com 2 segundos de pico de contração",
            "1 ajuste + 2 trabalho",
            "6-10",
            false
          ],
          [
            "Pulley frente triângulo com 2 segundos de pico de contração",
            "2 ajuste + 2 trabalho + 1 drop set",
            "8-12",
            false,
            {
              "kind": "drop",
              "count": 1
            }
          ],
          [
            "Meio terra",
            "1 aquec. + 2 ajuste + 2 trabalho",
            "6-10",
            false
          ],
          [
            "Hiperextensão no banco romano",
            "3 trabalho",
            "10-15",
            false
          ],
          [
            "Rosca Scott máquina com 2 segundos de pico de contração",
            "1 ajuste + 3 trabalho",
            "6-10",
            false
          ]
        ]
      },
      {
        "id": "C",
        "name": "Membros inferiores",
        "exercises": [
          [
            "Agachamento livre",
            "2 aquec. + 2 ajuste + 2 trabalho",
            "6-10",
            false
          ],
          [
            "Leg 45",
            "1 ajuste + 2 trabalho + 2 rest-pause de 10s",
            "8-12",
            false,
            {
              "kind": "rest-pause",
              "count": 2,
              "seconds": 10
            }
          ],
          [
            "Extensor com 2 segundos de pico de contração",
            "2 ajuste + 2 trabalho",
            "10-15",
            false
          ],
          [
            "Flexor deitado com 2 segundos de pico de contração",
            "1 aquec. + 2 ajuste + 2 trabalho",
            "6-10",
            false
          ],
          [
            "Stiff",
            "1 aquec. + 2 ajuste + 2 trabalho",
            "8-10",
            false
          ],
          [
            "Elevação de quadril com 2 segundos de pico de contração",
            "2 ajuste + 2 trabalho + 1 drop set",
            "6-10",
            false,
            {
              "kind": "drop",
              "count": 1
            }
          ],
          [
            "Panturrilha em pé no smith com 2 segundos de pico de contração",
            "2 aquec. + 2 ajuste + 3 trabalho",
            "10-15",
            false
          ]
        ]
      },
      {
        "id": "D",
        "name": "Ombros + peito + tríceps",
        "exercises": [
          [
            "Desenvolvimento com halteres",
            "2 aquec. + 2 ajuste + 2 trabalho",
            "6-10",
            false
          ],
          [
            "Elevação frontal",
            "2 ajuste + 2 trabalho + 2 rest-pause de 10s",
            "10-15",
            false,
            {
              "kind": "rest-pause",
              "count": 2,
              "seconds": 10
            }
          ],
          [
            "Elevação lateral sentada com halteres",
            "2 ajuste + 2 trabalho",
            "8-12",
            false
          ],
          [
            "Elevação lateral máquina ou unilateral no cabo",
            "1 ajuste + 2 trabalho + 1 drop set",
            "8-12",
            true,
            {
              "kind": "drop",
              "count": 1
            }
          ],
          [
            "Voador com 2 segundos de pico de contração",
            "2 aquec. + 2 ajuste + 3 trabalho",
            "6-10",
            false
          ],
          [
            "Tríceps corda com 2 segundos de pico de contração",
            "3 trabalho",
            "6-10",
            false
          ],
          [
            "Tríceps testa corda banco 35 graus",
            "2 ajuste + 3 trabalho + 2 rest-pause de 10s",
            "8-12",
            false,
            {
              "kind": "rest-pause",
              "count": 2,
              "seconds": 10
            }
          ]
        ]
      },
      {
        "id": "E",
        "name": "Bíceps + costas + abdômen",
        "exercises": [
          [
            "Rosca direta cabo com 2 segundos de pico de contração",
            "2 aquec. + 2 ajuste + 2 trabalho",
            "6-10",
            false
          ],
          [
            "Rosca Scott máquina ou cabo com 2 segundos de pico de contração",
            "2 ajuste + 2 trabalho + 2 rest-pause de 10s",
            "8-12",
            false,
            {
              "kind": "rest-pause",
              "count": 2,
              "seconds": 10
            }
          ],
          [
            "Rosca direta corda",
            "2 ajuste + 2 trabalho + 1 drop set",
            "10-15",
            false,
            {
              "kind": "drop",
              "count": 1
            }
          ],
          [
            "Pulley frente aberto com 2 segundos de pico de contração",
            "2 aquec. + 2 ajuste + 3 trabalho",
            "8-12",
            false
          ],
          [
            "Pulley frente triângulo com 2 segundos de pico de contração",
            "2 ajuste + 3 trabalho + 1 drop set",
            "8-12",
            false,
            {
              "kind": "drop",
              "count": 1
            }
          ],
          [
            "Serrote com 2 segundos de pico de contração",
            "2 ajuste + 2 trabalho",
            "6-10",
            true
          ],
          [
            "Abdominal infra na torre com 2 segundos de pico de contração",
            "3 trabalho",
            "Máx.",
            false
          ],
          [
            "Abdominal supra na prancha declinada",
            "3 trabalho",
            "Máx.",
            false
          ]
        ]
      }
    ]
  },
  {
    "id": "pplul",
    "name": "Push Pull Legs Upper Lower",
    "level": "Avançado",
    "days": 5,
    "note": "Cinco estímulos • sem dias de descanso na lista",
    "workouts": [
      {
        "id": "A",
        "name": "Pull • Puxar",
        "exercises": [
          [
            "Remada curvada",
            "2 aquec. + 3 ajuste + 2 trabalho",
            "6-10",
            false,
            null,
            {
              "adjustReps": [
                "4-6",
                "2-4",
                "2-4"
              ]
            }
          ],
          [
            "Remada baixa pegada aberta",
            "2 ajuste + 2 trabalho",
            "6-10",
            false,
            null,
            {
              "adjustReps": [
                "4-6",
                "2-4"
              ]
            }
          ],
          [
            "Serrote",
            "2 ajuste + 2 trabalho",
            "6-10",
            true,
            null,
            {
              "adjustReps": [
                "4-6",
                "2-4"
              ]
            }
          ],
          [
            "Pulley frente triângulo",
            "2 ajuste + 2 trabalho",
            "6-10",
            false,
            null,
            {
              "adjustReps": [
                "4-6",
                "2-4"
              ]
            }
          ],
          [
            "Rosca direta cabo",
            "2 ajuste + 2 trabalho",
            "6-10",
            false,
            null,
            {
              "adjustReps": [
                "4-6",
                "2-4"
              ]
            }
          ]
        ]
      },
      {
        "id": "B",
        "name": "Push • Empurrar",
        "exercises": [
          [
            "Supino inclinado máquina ou halteres",
            "2 aquec. + 3 ajuste + 2 trabalho",
            "6-10",
            false,
            null,
            {
              "adjustReps": [
                "4-6",
                "2-4",
                "2-4"
              ]
            }
          ],
          [
            "Supino reto máquina ou smith",
            "3 ajuste + 2 trabalho",
            "6-10",
            false,
            null,
            {
              "adjustReps": [
                "4-6",
                "2-4",
                "2-4"
              ]
            }
          ],
          [
            "Voador",
            "3 ajuste + 2 trabalho",
            "6-10",
            false,
            null,
            {
              "adjustReps": [
                "4-6",
                "2-4",
                "2-4"
              ]
            }
          ],
          [
            "Elevação lateral sentada",
            "3 ajuste + 2 trabalho",
            "6-10",
            false,
            null,
            {
              "adjustReps": [
                "4-6",
                "2-4",
                "2-4"
              ]
            }
          ],
          [
            "Elevação lateral máquina ou cabo unilateral",
            "3 ajuste + 2 trabalho",
            "6-10",
            true,
            null,
            {
              "adjustReps": [
                "4-6",
                "2-4",
                "2-4"
              ]
            }
          ],
          [
            "Tríceps na polia alta",
            "3 ajuste + 2 trabalho",
            "6-10",
            false,
            null,
            {
              "adjustReps": [
                "4-6",
                "2-4",
                "2-4"
              ]
            }
          ]
        ]
      },
      {
        "id": "C",
        "name": "Legs • Pernas",
        "exercises": [
          [
            "Flexor deitado",
            "2 aquec. + 3 ajuste + 2 trabalho",
            "6-10",
            false,
            null,
            {
              "adjustReps": [
                "4-6",
                "2-4",
                "2-4"
              ]
            }
          ],
          [
            "Agachamento Hack",
            "2 aquec. + 3 ajuste + 2 trabalho",
            "6-10",
            false,
            null,
            {
              "adjustReps": [
                "4-6",
                "2-4",
                "2-4"
              ]
            }
          ],
          [
            "Leg 45",
            "3 ajuste + 2 trabalho",
            "6-10",
            false,
            null,
            {
              "adjustReps": [
                "4-6",
                "2-4",
                "2-4"
              ]
            }
          ],
          [
            "Extensor",
            "3 ajuste + 2 trabalho",
            "6-10",
            false,
            null,
            {
              "adjustReps": [
                "4-6",
                "2-4",
                "2-4"
              ]
            }
          ],
          [
            "Stiff",
            "3 ajuste + 2 trabalho",
            "6-10",
            false,
            null,
            {
              "adjustReps": [
                "4-6",
                "2-4",
                "2-4"
              ]
            }
          ]
        ]
      },
      {
        "id": "D",
        "name": "Upper • Superior",
        "exercises": [
          [
            "Supino reto máquina ou smith",
            "2 aquec. + 3 ajuste + 2 trabalho",
            "6-10",
            false,
            null,
            {
              "adjustReps": [
                "4-6",
                "2-4",
                "2-4"
              ]
            }
          ],
          [
            "Crucifixo inclinado no cabo",
            "3 ajuste + 2 trabalho",
            "6-10",
            false,
            null,
            {
              "adjustReps": [
                "4-6",
                "2-4",
                "2-4"
              ]
            }
          ],
          [
            "Pulley frente aberto",
            "2 aquec. + 3 ajuste + 2 trabalho",
            "6-10",
            false,
            null,
            {
              "adjustReps": [
                "4-6",
                "2-4",
                "2-4"
              ]
            }
          ],
          [
            "Remada baixa triângulo",
            "2 ajuste + 2 trabalho",
            "6-10",
            false,
            null,
            {
              "adjustReps": [
                "4-6",
                "2-4"
              ]
            }
          ],
          [
            "Elevação lateral sentada",
            "3 ajuste + 2 trabalho",
            "6-10",
            false,
            null,
            {
              "adjustReps": [
                "4-6",
                "2-4",
                "2-4"
              ]
            }
          ],
          [
            "Rosca direta banco 45 graus",
            "2 ajuste + 2 trabalho",
            "6-10",
            false,
            null,
            {
              "adjustReps": [
                "4-6",
                "2-4"
              ]
            }
          ],
          [
            "Tríceps francês com corda",
            "2 ajuste + 2 trabalho",
            "6-10",
            false,
            null,
            {
              "adjustReps": [
                "4-6",
                "2-4"
              ]
            }
          ]
        ]
      },
      {
        "id": "E",
        "name": "Lower • Inferior",
        "exercises": [
          [
            "Flexor sentado",
            "2 aquec. + 3 ajuste + 2 trabalho",
            "6-10",
            false,
            null,
            {
              "adjustReps": [
                "4-6",
                "2-4",
                "2-4"
              ]
            }
          ],
          [
            "Flexor deitado",
            "3 ajuste + 2 trabalho",
            "6-10",
            false,
            null,
            {
              "adjustReps": [
                "4-6",
                "2-4",
                "2-4"
              ]
            }
          ],
          [
            "Elevação de quadril",
            "2 aquec. + 3 ajuste + 2 trabalho",
            "6-10",
            false,
            null,
            {
              "adjustReps": [
                "4-6",
                "2-4",
                "2-4"
              ]
            }
          ],
          [
            "Hack",
            "3 ajuste + 2 trabalho",
            "6-10",
            false,
            null,
            {
              "adjustReps": [
                "4-6",
                "2-4",
                "2-4"
              ]
            }
          ],
          [
            "Leg 45",
            "3 ajuste + 2 trabalho",
            "6-10",
            false,
            null,
            {
              "adjustReps": [
                "4-6",
                "2-4",
                "2-4"
              ]
            }
          ]
        ]
      }
    ]
  },
  {
    "id": "hot-6",
    "name": "Além da Genética 6x",
    "level": "Avançado",
    "days": 6,
    "note": "Programa 2.0 • A/B/C/D/E/F do PDF",
    "workouts": [
      {
        "id": "A",
        "name": "Posteriores + glúteos + quadríceps",
        "exercises": [
          [
            "Flexor deitado com 2 segundos de pico de contração",
            "2 aquec. + 2 ajuste + 2 trabalho",
            "6-10",
            false
          ],
          [
            "Flexor sentado com 2 segundos de pico de contração",
            "2 ajuste + 2 trabalho + 2 rest-pause de 10s",
            "6-10",
            false,
            {
              "kind": "rest-pause",
              "count": 2,
              "seconds": 10
            }
          ],
          [
            "Stiff",
            "1 aquec. + 2 ajuste + 2 trabalho",
            "6-10",
            false
          ],
          [
            "Elevação de quadril com 2 segundos de pico de contração",
            "1 aquec. + 2 ajuste + 2 trabalho + 2 rest-pause de 10s",
            "6-10",
            false,
            {
              "kind": "rest-pause",
              "count": 2,
              "seconds": 10
            }
          ],
          [
            "Abdutor com 2 segundos de pico de contração",
            "2 ajuste + 2 trabalho",
            "6-10",
            false
          ],
          [
            "Extensor com 2 segundos de pico de contração",
            "1 aquec. + 2 ajuste + 2 trabalho + 1 drop set",
            "6-10",
            false,
            {
              "kind": "drop",
              "count": 1
            }
          ]
        ]
      },
      {
        "id": "B",
        "name": "Peito + ombros + tríceps + panturrilhas",
        "exercises": [
          [
            "Supino inclinado com halteres ou máquina",
            "2 aquec. + 2 ajuste + 2 trabalho",
            "6-10",
            false
          ],
          [
            "Supino reto com halteres ou máquina",
            "2 ajuste + 2 trabalho + 2 rest-pause de 10s",
            "6-10",
            false,
            {
              "kind": "rest-pause",
              "count": 2,
              "seconds": 10
            }
          ],
          [
            "Supino declinado barra ou máquina",
            "1 ajuste + 2 trabalho",
            "6-10",
            false
          ],
          [
            "Voador com 2 segundos de pico de contração",
            "2 ajuste + 2 trabalho + 1 drop set",
            "10-15",
            false,
            {
              "kind": "drop",
              "count": 1
            }
          ],
          [
            "Elevação frontal",
            "1 ajuste + 2 trabalho",
            "6-10",
            false
          ],
          [
            "Elevação lateral sentada com halteres",
            "2 ajuste + 2 trabalho + 1 drop set",
            "8-12",
            false,
            {
              "kind": "drop",
              "count": 1
            }
          ],
          [
            "Tríceps corda com 2 segundos de pico de contração",
            "2 ajuste + 3 trabalho + 2 rest-pause de 10s",
            "6-10",
            false,
            {
              "kind": "rest-pause",
              "count": 2,
              "seconds": 10
            }
          ],
          [
            "Panturrilha em pé na máquina ou smith",
            "2 aquec. + 2 ajuste + 3 trabalho",
            "8-12",
            false
          ]
        ]
      },
      {
        "id": "C",
        "name": "Costas + abdômen",
        "exercises": [
          [
            "Remada curvada com barra com 2 segundos de pico de contração",
            "2 aquec. + 2 ajuste + 2 trabalho",
            "6-10",
            false
          ],
          [
            "Remada baixa triângulo com 2 segundos de pico de contração",
            "2 ajuste + 2 trabalho + 2 rest-pause de 10s",
            "6-10",
            false,
            {
              "kind": "rest-pause",
              "count": 2,
              "seconds": 10
            }
          ],
          [
            "Remada baixa pegada aberta ou máquina",
            "1 ajuste + 2 trabalho",
            "6-10",
            false
          ],
          [
            "Pulley frente aberto com 2 segundos de pico de contração",
            "2 ajuste + 2 trabalho + 1 drop set",
            "6-10",
            false,
            {
              "kind": "drop",
              "count": 1
            }
          ],
          [
            "Meio terra",
            "1 aquec. + 2 ajuste + 2 trabalho",
            "6-10",
            false
          ],
          [
            "Hiperextensão no banco romano",
            "3 trabalho",
            "10-15",
            false
          ],
          [
            "Abdominal infra na torre",
            "3 trabalho",
            "Máx.",
            false
          ]
        ]
      },
      {
        "id": "D",
        "name": "Quadríceps + posteriores + glúteos",
        "exercises": [
          [
            "Agachamento livre",
            "2 aquec. + 2 ajuste + 2 trabalho",
            "6-10",
            false
          ],
          [
            "Hack machine",
            "2 ajuste + 2 trabalho + 2 rest-pause de 10s",
            "6-10",
            false,
            {
              "kind": "rest-pause",
              "count": 2,
              "seconds": 10
            }
          ],
          [
            "Leg 45",
            "2 ajuste + 2 trabalho + 10 repetições parciais após a falha",
            "10-15",
            false,
            {
              "kind": "partials",
              "count": 1
            }
          ],
          [
            "Extensor com 2 segundos de pico de contração",
            "2 ajuste + 2 trabalho + 2 drop sets",
            "6-10",
            false,
            {
              "kind": "drop",
              "count": 2
            }
          ],
          [
            "Flexor deitado com 2 segundos de pico de contração",
            "2 ajuste + 2 trabalho",
            "6-10",
            false
          ],
          [
            "Abdutor com 2 segundos de pico de contração",
            "1 aquec. + 2 ajuste + 2 trabalho",
            "6-10",
            false
          ]
        ]
      },
      {
        "id": "E",
        "name": "Ombros + peito + panturrilhas",
        "exercises": [
          [
            "Desenvolvimento com halteres",
            "2 aquec. + 2 ajuste + 2 trabalho",
            "6-10",
            false
          ],
          [
            "Elevação frontal",
            "2 ajuste + 2 trabalho + 2 rest-pause de 10s",
            "10-15",
            false,
            {
              "kind": "rest-pause",
              "count": 2,
              "seconds": 10
            }
          ],
          [
            "Elevação lateral sentada com halteres",
            "2 ajuste + 2 trabalho",
            "8-12",
            false
          ],
          [
            "Elevação lateral máquina ou unilateral no cabo",
            "1 ajuste + 2 trabalho + 1 drop set",
            "8-12",
            true,
            {
              "kind": "drop",
              "count": 1
            }
          ],
          [
            "Supino inclinado com halteres ou máquina",
            "2 aquec. + 2 ajuste + 2 trabalho",
            "6-10",
            false
          ],
          [
            "Voador com 2 segundos de pico de contração",
            "2 ajuste + 2 trabalho + 2 rest-pause de 10s",
            "6-10",
            false,
            {
              "kind": "rest-pause",
              "count": 2,
              "seconds": 10
            }
          ],
          [
            "Panturrilha sentada",
            "2 aquec. + 2 ajuste + 3 trabalho",
            "8-12",
            false
          ]
        ]
      },
      {
        "id": "F",
        "name": "Bíceps + tríceps + costas + abdômen",
        "exercises": [
          [
            "Rosca direta cabo com 2 segundos de pico de contração",
            "2 aquec. + 2 ajuste + 2 trabalho",
            "6-10",
            false
          ],
          [
            "Rosca Scott máquina ou cabo com 2 segundos de pico de contração",
            "2 ajuste + 2 trabalho + 2 rest-pause de 10s",
            "6-10",
            false,
            {
              "kind": "rest-pause",
              "count": 2,
              "seconds": 10
            }
          ],
          [
            "Rosca direta corda com 2 segundos de pico de contração",
            "2 ajuste + 2 trabalho + 1 drop set",
            "6-10",
            false,
            {
              "kind": "drop",
              "count": 1
            }
          ],
          [
            "Tríceps corda com 2 segundos de pico de contração",
            "2 aquec. + 2 ajuste + 2 trabalho",
            "6-10",
            false
          ],
          [
            "Tríceps testa corda banco 35 graus",
            "2 ajuste + 2 trabalho + 2 rest-pause de 10s",
            "6-10",
            false,
            {
              "kind": "rest-pause",
              "count": 2,
              "seconds": 10
            }
          ],
          [
            "Tríceps francês com corda",
            "2 ajuste + 2 trabalho + 1 drop set",
            "6-10",
            false,
            {
              "kind": "drop",
              "count": 1
            }
          ],
          [
            "Pulley frente triângulo com 2 segundos de pico de contração",
            "2 ajuste + 3 trabalho + 1 drop set",
            "6-10",
            false,
            {
              "kind": "drop",
              "count": 1
            }
          ],
          [
            "Abdominal supra na prancha declinada",
            "3 trabalho",
            "Máx.",
            false
          ]
        ]
      }
    ]
  },
  {
    "id": "ppl-6",
    "name": "PPL ABC/DEF",
    "level": "Avançado",
    "days": 6,
    "note": "ABC • descanso • DEF",
    "workouts": [
      {
        "id": "A",
        "name": "Pull 1",
        "exercises": [
          [
            "Remada curvada com barra",
            "2 aquec. + 2 ajuste + 2 trabalho",
            "6-10",
            false
          ],
          [
            "Remada baixa triângulo",
            "2 ajuste + 1 trabalho + 2 rest-pause",
            "6-10",
            false,
            {
              "kind": "rest-pause",
              "count": 2
            }
          ],
          [
            "Remada baixa pegada aberta",
            "1 ajuste + 2 trabalho",
            "6-10",
            false
          ],
          [
            "Pulley frente triângulo",
            "2 ajuste + 2 trabalho + 1 drop set",
            "6-10",
            false,
            {
              "kind": "drop",
              "count": 1
            }
          ],
          [
            "Meio terra",
            "1 aquec. + 2 ajuste + 2 trabalho",
            "6-10",
            false
          ],
          [
            "Rosca Scott máquina",
            "2 ajuste + 2 trabalho + 2 rest-pause",
            "6-10",
            false,
            {
              "kind": "rest-pause",
              "count": 2
            }
          ],
          [
            "Abdominal infra na torre",
            "3 trabalho",
            "Máx.",
            false
          ]
        ]
      },
      {
        "id": "B",
        "name": "Push 1",
        "exercises": [
          [
            "Supino inclinado com halteres",
            "2 aquec. + 2 ajuste + 2 trabalho",
            "6-10",
            false
          ],
          [
            "Supino reto com halteres",
            "2 ajuste + 2 trabalho + 2 rest-pause",
            "6-10",
            false,
            {
              "kind": "rest-pause",
              "count": 2
            }
          ],
          [
            "Supino declinado barra ou máquina",
            "1 ajuste + 2 trabalho",
            "6-10",
            false
          ],
          [
            "Voador com pico de contração",
            "2 ajuste + 2 trabalho + 1 drop set",
            "10-15",
            false,
            {
              "kind": "drop",
              "count": 1
            }
          ],
          [
            "Elevação frontal corda ou halteres",
            "1 ajuste + 2 trabalho",
            "6-10",
            false
          ],
          [
            "Elevação lateral sentada com halteres",
            "2 ajuste + 2 trabalho + 1 drop set",
            "8-12",
            false,
            {
              "kind": "drop",
              "count": 1
            }
          ],
          [
            "Tríceps corda",
            "2 ajuste + 3 trabalho + 2 rest-pause",
            "6-10",
            false,
            {
              "kind": "rest-pause",
              "count": 2
            }
          ],
          [
            "Panturrilha máquina em pé",
            "2 aquec. + 2 ajuste + 3 trabalho",
            "8-12",
            false
          ]
        ]
      },
      {
        "id": "C",
        "name": "Legs 1",
        "exercises": [
          [
            "Extensor",
            "2 aquec. + 2 ajuste + 2 trabalho",
            "6-10",
            false
          ],
          [
            "Hack machine",
            "1 aquec. + 2 ajuste + 2 trabalho + 2 rest-pause",
            "6-10",
            false,
            {
              "kind": "rest-pause",
              "count": 2
            }
          ],
          [
            "Leg 45",
            "2 ajuste + 2 trabalho + 10 repetições parciais",
            "6-10",
            false,
            {
              "kind": "partials",
              "count": 1
            }
          ],
          [
            "Flexor deitado",
            "1 aquec. + 2 ajuste + 2 trabalho + 2 rest-pause",
            "6-10",
            false,
            {
              "kind": "rest-pause",
              "count": 2
            }
          ],
          [
            "Stiff",
            "1 aquec. + 2 ajuste + 2 trabalho",
            "6-10",
            false
          ],
          [
            "Elevação de quadril",
            "1 aquec. + 2 ajuste + 2 trabalho",
            "6-10",
            false
          ]
        ]
      },
      {
        "id": "D",
        "name": "Pull 2",
        "exercises": [
          [
            "Remada curvada com barra",
            "2 aquec. + 2 ajuste + 2 trabalho",
            "6-10",
            false
          ],
          [
            "Remada baixa pegada aberta",
            "2 ajuste + 2 trabalho + 2 rest-pause",
            "6-10",
            false,
            {
              "kind": "rest-pause",
              "count": 2
            }
          ],
          [
            "Pulley frente aberto",
            "2 ajuste + 2 trabalho",
            "8-12",
            false
          ],
          [
            "Pulley frente triângulo",
            "2 ajuste + 2 trabalho + 1 drop set",
            "6-10",
            false,
            {
              "kind": "drop",
              "count": 1
            }
          ],
          [
            "Hiperextensão no banco romano",
            "3 trabalho",
            "12-15",
            false
          ],
          [
            "Rosca Scott máquina",
            "2 ajuste + 3 trabalho + 2 rest-pause",
            "6-10",
            false,
            {
              "kind": "rest-pause",
              "count": 2
            }
          ],
          [
            "Abdominal supra na prancha",
            "3 trabalho",
            "Máx.",
            false
          ]
        ]
      },
      {
        "id": "E",
        "name": "Push 2",
        "exercises": [
          [
            "Supino inclinado com halteres",
            "2 aquec. + 2 ajuste + 2 trabalho",
            "6-10",
            false
          ],
          [
            "Supino reto com halteres",
            "2 ajuste + 2 trabalho + 2 rest-pause",
            "6-10",
            false,
            {
              "kind": "rest-pause",
              "count": 2
            }
          ],
          [
            "Cross over",
            "1 ajuste + 2 trabalho",
            "6-10",
            false
          ],
          [
            "Desenvolvimento com halteres",
            "2 ajuste + 2 trabalho",
            "6-10",
            false
          ],
          [
            "Elevação frontal corda ou halteres",
            "2 ajuste + 2 trabalho + 2 rest-pause",
            "6-10",
            false,
            {
              "kind": "rest-pause",
              "count": 2
            }
          ],
          [
            "Elevação lateral sentada com halteres",
            "2 ajuste + 2 trabalho + 1 drop set",
            "8-12",
            false,
            {
              "kind": "drop",
              "count": 1
            }
          ],
          [
            "Tríceps francês",
            "2 ajuste + 3 trabalho + 2 rest-pause",
            "6-10",
            false,
            {
              "kind": "rest-pause",
              "count": 2
            }
          ],
          [
            "Panturrilha sentada",
            "2 aquec. + 2 ajuste + 3 trabalho",
            "8-12",
            false
          ]
        ]
      },
      {
        "id": "F",
        "name": "Legs 2",
        "exercises": [
          [
            "Flexor deitado",
            "2 aquec. + 2 ajuste + 2 trabalho",
            "6-10",
            false
          ],
          [
            "Flexor sentado",
            "1 aquec. + 2 ajuste + 2 trabalho + 2 rest-pause",
            "6-10",
            false,
            {
              "kind": "rest-pause",
              "count": 2
            }
          ],
          [
            "Stiff",
            "1 aquec. + 2 ajuste + 2 trabalho",
            "6-10",
            false
          ],
          [
            "Elevação de quadril",
            "1 aquec. + 2 ajuste + 2 trabalho + 2 rest-pause",
            "6-10",
            false,
            {
              "kind": "rest-pause",
              "count": 2
            }
          ],
          [
            "Abdutor",
            "2 ajuste + 2 trabalho",
            "6-10",
            false
          ],
          [
            "Extensor",
            "1 aquec. + 2 ajuste + 2 trabalho + 1 drop set",
            "6-10",
            false,
            {
              "kind": "drop",
              "count": 1
            }
          ]
        ]
      }
    ]
  },
  {
    "id": "mens",
    "name": "Men's Physique Olympia",
    "level": "Olympia",
    "days": 5,
    "note": "Ali Bilau • 5 treinos do PDF",
    "workouts": [
      {
        "id": "A",
        "name": "Costas + panturrilhas",
        "exercises": [
          [
            "Remada curvada",
            "2 aquec. + 2 ajuste + 2 trabalho",
            "6-10",
            false
          ],
          [
            "Remada baixa pegada triângulo",
            "2 ajuste + 2 trabalho",
            "6-10",
            false
          ],
          [
            "Serrote",
            "1 ajuste + 2 trabalho",
            "6-10",
            true
          ],
          [
            "Remada baixa pegada aberta",
            "1 ajuste + 2 trabalho",
            "8-12",
            false
          ],
          [
            "Puxada frente aberta com 2 segundos de pico",
            "1 ajuste + 2 trabalho",
            "8-12",
            false
          ],
          [
            "Hiperextensão no banco romano",
            "3 trabalho",
            "10-15",
            false
          ],
          [
            "Panturrilha em pé na máquina",
            "2 aquec. + 2 ajuste + 2 trabalho",
            "6-10",
            false
          ]
        ]
      },
      {
        "id": "B",
        "name": "Peito + ombros + abdômen",
        "exercises": [
          [
            "Supino inclinado máquina ou halteres",
            "2 aquec. + 2 ajuste + 2 trabalho",
            "6-10",
            false
          ],
          [
            "Supino reto máquina ou halteres",
            "2 ajuste + 2 trabalho",
            "6-10",
            false
          ],
          [
            "Supino reto máquina ou halteres — variação",
            "2 ajuste + 2 trabalho",
            "6-10",
            false
          ],
          [
            "Voador",
            "1 ajuste + 1 trabalho + 1 drop set",
            "8-12",
            false,
            {
              "kind": "drop",
              "count": 1
            }
          ],
          [
            "Elevação lateral sentada com halteres",
            "1 ajuste + 1 trabalho + 1 drop set",
            "8-12",
            false,
            {
              "kind": "drop",
              "count": 1
            }
          ],
          [
            "Abdominal supra na prancha",
            "3 trabalho",
            "15-20",
            false
          ]
        ]
      },
      {
        "id": "C",
        "name": "Pernas",
        "exercises": [
          [
            "Extensor",
            "2 aquec. + 2 ajuste + 2 trabalho",
            "6-10",
            false
          ],
          [
            "Hack machine",
            "2 aquec. + 2 ajuste + 2 trabalho + 2 rest-pause de 10s",
            "6-10",
            false,
            {
              "kind": "rest-pause",
              "count": 2,
              "seconds": 10
            }
          ],
          [
            "Leg 45",
            "2 ajuste + 2 trabalho",
            "6-10",
            false
          ],
          [
            "Flexor sentado",
            "2 aquec. + 2 ajuste + 2 trabalho",
            "6-10",
            false
          ],
          [
            "Abdutor",
            "2 ajuste + 2 trabalho",
            "6-10",
            false
          ],
          [
            "Adutor",
            "2 ajuste + 2 trabalho",
            "8-12",
            false
          ]
        ]
      },
      {
        "id": "D",
        "name": "Costas + panturrilhas",
        "exercises": [
          [
            "Puxada frente aberta",
            "2 aquec. + 2 ajuste + 2 trabalho",
            "6-10",
            false
          ],
          [
            "Puxada frente triângulo",
            "2 ajuste + 2 trabalho",
            "6-10",
            false
          ],
          [
            "Serrote",
            "1 ajuste + 2 trabalho",
            "6-10",
            true
          ],
          [
            "Remada baixa pegada aberta",
            "1 ajuste + 2 trabalho",
            "8-12",
            false
          ],
          [
            "Voador inverso com 2 segundos de pico",
            "1 ajuste + 2 trabalho",
            "8-12",
            false
          ],
          [
            "Panturrilha sentada",
            "2 aquec. + 2 ajuste + 2 trabalho",
            "6-10",
            false
          ]
        ]
      },
      {
        "id": "E",
        "name": "Ombros + tríceps + peito + abdômen",
        "exercises": [
          [
            "Desenvolvimento com halteres ou máquina",
            "2 aquec. + 2 ajuste + 2 trabalho",
            "6-10",
            false
          ],
          [
            "Elevação frontal",
            "2 ajuste + 2 trabalho + 2 rest-pause de 10s",
            "8-12",
            false,
            {
              "kind": "rest-pause",
              "count": 2,
              "seconds": 10
            }
          ],
          [
            "Elevação lateral sentada com halteres",
            "2 ajuste + 2 trabalho",
            "8-12",
            false
          ],
          [
            "Tríceps francês com corda",
            "2 aquec. + 2 ajuste + 2 trabalho",
            "6-10",
            false
          ],
          [
            "Voador",
            "2 aquec. + 2 ajuste + 2 trabalho",
            "6-10",
            false
          ],
          [
            "Abdominal infra na torre",
            "3 trabalho",
            "15-20",
            false
          ]
        ]
      }
    ]
  },
  {
    "id": "classic",
    "name": "ABCDEF Classic Olympia",
    "level": "Olympia",
    "days": 6,
    "note": "Ramon Dino e Menegate • 6 treinos do PDF",
    "workouts": [
      {
        "id": "A",
        "name": "Costas + bíceps",
        "exercises": [
          [
            "Remada curvada com 2 segundos de pico de contração",
            "2 aquec. + 2 ajuste + 2 trabalho",
            "6-10",
            false
          ],
          [
            "Remada baixa triângulo com 2 segundos de pico de contração",
            "2 ajuste + 2 trabalho",
            "6-10",
            false
          ],
          [
            "Serrote",
            "2 ajuste + 2 trabalho",
            "6-10",
            true
          ],
          [
            "Pulley frente triângulo",
            "2 ajuste + 2 trabalho",
            "6-10",
            false
          ],
          [
            "Hiperextensão no banco romano",
            "2 ajuste + 2 trabalho",
            "6-10",
            false
          ],
          [
            "Rosca Scott máquina ou cabo",
            "2 ajuste + 2 trabalho + 2 rest-pause de 10s",
            "6-10",
            false,
            {
              "kind": "rest-pause",
              "count": 2,
              "seconds": 10
            }
          ]
        ]
      },
      {
        "id": "B",
        "name": "Peito + ombros + tríceps",
        "exercises": [
          [
            "Supino inclinado máquina ou halteres",
            "2 aquec. + 2 ajuste + 2 trabalho",
            "6-10",
            false
          ],
          [
            "Supino reto máquina ou halteres",
            "2 ajuste + 2 trabalho + 2 rest-pause de 10s",
            "6-10",
            false,
            {
              "kind": "rest-pause",
              "count": 2,
              "seconds": 10
            }
          ],
          [
            "Supino declinado máquina, barra ou crossover",
            "2 ajuste + 2 trabalho",
            "6-10",
            false
          ],
          [
            "Voador",
            "2 ajuste + 2 trabalho + 2 drop sets",
            "6-10",
            false,
            {
              "kind": "drop",
              "count": 2
            }
          ],
          [
            "Elevação frontal com corda",
            "2 ajuste + 2 trabalho",
            "6-10",
            false
          ],
          [
            "Elevação lateral sentada com halteres",
            "2 ajuste + 2 trabalho + 2 rest-pause de 10s",
            "6-10",
            false,
            {
              "kind": "rest-pause",
              "count": 2,
              "seconds": 10
            }
          ],
          [
            "Tríceps corda",
            "2 ajuste + 2 trabalho",
            "6-10",
            false
          ]
        ]
      },
      {
        "id": "C",
        "name": "Pernas",
        "exercises": [
          [
            "Panturrilha sentada",
            "2 aquec. + 2 ajuste + 2 trabalho",
            "6-10",
            false
          ],
          [
            "Extensor",
            "2 aquec. + 2 ajuste + 2 trabalho",
            "6-10",
            false
          ],
          [
            "Hack machine",
            "2 ajuste + 2 trabalho + 2 rest-pause de 10s",
            "8-12",
            false,
            {
              "kind": "rest-pause",
              "count": 2,
              "seconds": 10
            }
          ],
          [
            "Leg 45",
            "2 ajuste + 2 trabalho + 10 parciais após a falha",
            "10-15",
            false,
            {
              "kind": "partials",
              "count": 10
            }
          ],
          [
            "Flexor sentado",
            "2 ajuste + 2 trabalho",
            "6-10",
            false
          ],
          [
            "Adutor",
            "2 ajuste + 2 trabalho",
            "6-10",
            false
          ]
        ]
      },
      {
        "id": "D",
        "name": "Costas + bíceps",
        "exercises": [
          [
            "Pulldown com corda",
            "2 aquec. + 2 ajuste + 2 trabalho",
            "6-10",
            false
          ],
          [
            "Pulley frente aberto",
            "2 ajuste + 2 trabalho",
            "6-10",
            false
          ],
          [
            "Remada baixa pegada aberta",
            "2 ajuste + 2 trabalho",
            "6-10",
            false
          ],
          [
            "Serrote",
            "2 ajuste + 2 trabalho",
            "6-10",
            true
          ],
          [
            "Hiperextensão no banco romano",
            "2 ajuste + 2 trabalho",
            "6-10",
            false
          ],
          [
            "Rosca direta no cabo",
            "2 ajuste + 2 trabalho + 2 rest-pause de 10s",
            "6-10",
            false,
            {
              "kind": "rest-pause",
              "count": 2,
              "seconds": 10
            }
          ]
        ]
      },
      {
        "id": "E",
        "name": "Peito + ombros + tríceps",
        "exercises": [
          [
            "Supino inclinado máquina ou halteres",
            "2 aquec. + 2 ajuste + 2 trabalho",
            "6-10",
            false
          ],
          [
            "Supino reto máquina ou halteres",
            "2 ajuste + 2 trabalho",
            "6-10",
            false
          ],
          [
            "Voador",
            "2 ajuste + 2 trabalho",
            "6-10",
            false
          ],
          [
            "Elevação frontal com corda",
            "2 ajuste + 2 trabalho",
            "6-10",
            false
          ],
          [
            "Elevação lateral sentada com halteres",
            "2 ajuste + 2 trabalho + 2 rest-pause de 10s",
            "6-10",
            false,
            {
              "kind": "rest-pause",
              "count": 2,
              "seconds": 10
            }
          ],
          [
            "Elevação lateral unilateral no cabo",
            "2 ajuste + 2 trabalho",
            "6-10",
            true
          ],
          [
            "Paralela peso do corpo",
            "3 trabalho",
            "Máx.",
            false
          ]
        ]
      },
      {
        "id": "F",
        "name": "Pernas",
        "exercises": [
          [
            "Panturrilha em pé na máquina",
            "2 aquec. + 2 ajuste + 2 trabalho",
            "6-10",
            false
          ],
          [
            "Flexor deitado",
            "2 aquec. + 2 ajuste + 2 trabalho",
            "6-10",
            false
          ],
          [
            "Stiff",
            "2 ajuste + 2 trabalho",
            "10-15",
            false
          ],
          [
            "Abdutor",
            "2 ajuste + 2 trabalho",
            "6-10",
            false
          ],
          [
            "Elevação de quadril",
            "2 ajuste + 2 trabalho + 2 rest-pause de 10s",
            "8-12",
            false,
            {
              "kind": "rest-pause",
              "count": 2,
              "seconds": 10
            }
          ],
          [
            "Extensor",
            "2 ajuste + 2 trabalho",
            "6-10",
            false
          ]
        ]
      }
    ]
  }
];
