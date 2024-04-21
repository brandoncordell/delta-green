import { reactive } from 'vue'
import { defineStore } from 'pinia'

interface Stat {
  score?: number
  distinguishing_feature?: string
}

export const useCharacterStore = defineStore('character', () => {
  const details = reactive({
    personalData: {
      name: 'Bob the Builder',
      profession: null,
      employer: null,
      nationality: null,
      sex: null,
      age_and_dob: null,
      education_and_occupational_history: null
    },

    statisticalData: {
      strength: {} as Stat,
      constitution: {} as Stat,
      dexterity: {} as Stat,
      intelligence: {} as Stat,
      power: {} as Stat,
      charisma: {} as Stat
    },

    psychologicalData: {},
    applicable_skill_sets: {},
    injuries: {},
    equipment: {},
    remarks: {},
    authorizing_officer: null
  })

  return { details }
})
