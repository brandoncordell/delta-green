<template>
  <div class="my-12 mx-12 xl:mx-auto w-full xl:w-2/3">
    <character-sheet-header />

    <div class="grid grid-cols-12 gap-x-1 gap-y-1">
      <personal-data-section v-model="details.personalData" class="col-span-12" />

      <statistical-data-section v-model="details.statisticalData" class="col-span-6" />
      <character-sheet-section title="PD" class="col-span-6"> psych </character-sheet-section>

      <character-sheet-section class="col-span-12">
        <div class="flex-1">
          <div class="grid grid-cols-12 divide-x-2 divide-smoke">
            <div class="col-span-6">
              <text-input label="20. Authorizing officer" />
            </div>

            <div class="col-span-6">
              <div class="flex flex-col p-2 relative">
                <label for="name" class="light mb-1 uppercase">21. Agent signature</label>

                <p class="absolute top-8 font-[Zeyada] text-4xl">
                  {{ details.personalData.name }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </character-sheet-section>
    </div>
  </div>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useCharacterStore } from '@stores/character'

import CharacterSheetHeader from '@components/CharacterSheet/CharacterSheetHeader.vue'
import CharacterSheetSection from '@components/CharacterSheet/CharacterSheetSection.vue'
import PersonalDataSection from '@components/Sections/PersonalData.vue'
import StatisticalDataSection from '@components/Sections/StatisticalData.vue'
import TextInput from '@components/Inputs/TextInput.vue'

const character = useCharacterStore()

const { details } = storeToRefs(character)
</script>
