<template>
  <character-sheet-section>
    <template #title-image>
      <img src="@assets/images/personal-data-header.png" alt="Personal data header" class="w-3.5" />
    </template>

    <div class="flex-1">
      <div class="grid grid-cols-11 divide-x-2 divide-smoke border-b-2 border-smoke">
        <div class="col-span-6">
          <text-input
            v-model="personalData.name"
            label="1. Last name, First name, Middle initial"
          />
        </div>

        <div class="col-span-5">
          <text-input
            v-model="personalData.profession"
            label="2. Profession (Rank if applicable)"
          />
        </div>
      </div>

      <div class="grid grid-cols-11 divide-x-2 divide-smoke border-b-2 border-smoke">
        <div class="col-span-6">
          <text-input v-model="personalData.employer" label="3. Employer" />
        </div>

        <div class="col-span-5">
          <text-input v-model="personalData.nationality" label="4. Nationality" />
        </div>
      </div>

      <div class="grid grid-cols-11 divide-x-2 divide-smoke">
        <div class="col-span-2">
          <div class="flex flex-col p-2">
            <label for="name" class="light mb-1 uppercase">5. Sex</label>

            <div class="flex space-x-3">
              <checkbox-input label="F" name="sexFemale" />
              <checkbox-input label="M" name="sexMale" />
              <checkbox-input name="sexOther" />
            </div>
          </div>
        </div>

        <div class="col-span-2">
          <text-input v-model="personalData.age_and_dob" label="6. Age and D.O.B." />
        </div>

        <div class="col-span-7">
          <text-input
            v-model="personalData.education_and_occupational_history"
            label="7. Education and occupational history"
          />
        </div>
      </div>
    </div>
  </character-sheet-section>
</template>

<script setup lang="ts">
import CharacterSheetSection from '@components/CharacterSheet/CharacterSheetSection.vue'
import CheckboxInput from '@components/Inputs/CheckboxInput.vue'
import TextInput from '@components/Inputs/TextInput.vue'

const personalData = defineModel()
</script>
