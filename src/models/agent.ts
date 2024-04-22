import { ObjectId } from 'mongodb'

import type { Stat } from '@/src/types'

interface PersonalData {
  name?: string
  profession?: string
  employer?: string
  nationality?: string
  sex?: string
  age_and_dob?: string
  education_and_occupational_history?: string
}

interface StatisticalData {
  strength: Stat
  constitution: Stat
  dexterity: Stat
  intelligence: Stat
  power: Stat
  charisma: Stat
}

export default class Agent {
  public id?: ObjectId
  public personalData: PersonalData
  public statisticalData: StatisticalData

  constructor(personalData: PersonalData, statisticalData: StatisticalData, id?: ObjectId) {
    this.personalData = personalData
    this.statisticalData = statisticalData

    this.id = id ? id : new ObjectId()
  }
}
