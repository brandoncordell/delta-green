import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

import { arabicNames } from '@stores/data/names/arabic.js'

interface GivenName {
  name: string
  meaning?: string
  sex: string
}

interface Surname {
  name: string
}

interface Name {
  given_names: GivenName[]
  surnames: []
}

export const useNameStore = defineStore('name', () => {
  const arabic = ref(arabicNames as Name)
  const chinese = ref({} as Name)
  const english = ref({} as Name)
  const french = ref({} as Name)
  const german = ref({} as Name)
  const hindi = ref({} as Name)
  const italian = ref({} as Name)
  const japanese = ref({} as Name)
  const korean = ref({} as Name)
  const russian = ref({} as Name)
  const spanish = ref({} as Name)
  const swahili = ref({} as Name)
  const turkish = ref({} as Name)
  const welsh = ref({} as Name)

  return {
    arabic,
    chinese,
    english,
    french,
    german,
    hindi,
    italian,
    japanese,
    korean,
    russian,
    spanish,
    swahili,
    turkish,
    welsh
  }
})
