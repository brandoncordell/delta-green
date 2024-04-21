<template>
  <character-sheet-section>
    <template #title-image>
      <img
        src="@assets/images/statistical-data-header.png"
        alt="Statistical data header"
        class="w-3.5"
      />
    </template>

    <div class="flex-1">
      <div class="grid grid-cols-12 divide-x-2 divide-smoke border-b-2 border-smoke">
        <div class="col-span-3 flex items-center">
          <span class="light flex-1 p-2 uppercase">8. Statistics</span>
        </div>

        <div class="col-span-2 flex items-center">
          <p class="light flex-1 p-2 text-center uppercase leading-none">Score</p>
        </div>

        <div class="col-span-2 flex items-center">
          <p class="light flex-1 p-2 text-center leading-none">x5</p>
        </div>

        <div class="col-span-5 flex items-center">
          <span class="light flex-1 p-1 text-center uppercase">Distinguishing features</span>
        </div>
      </div>

      <div class="grid grid-cols-12 divide-x-2 divide-smoke border-b-2 border-smoke">
        <div class="col-span-3 flex">
          <span class="light self-center p-1 text-center text-xs">Strength (STR)</span>
        </div>

        <div class="col-span-2 flex">
          <stat-input />
        </div>

        <div class="col-span-2 flex">
          <p
            class="light text-md flex-1 items-center justify-center self-center p-1 text-center font-serif text-lg font-bold"
          >
            90
          </p>
        </div>

        <div class="col-span-5 flex">
          <span class="light mb-1 self-center p-1 text-center uppercase"
            >Distinguishing features</span
          >
        </div>
      </div>

      <div class="grid grid-cols-12 divide-x-2 divide-smoke border-b-2 border-smoke">
        <div class="col-span-3 flex">
          <span class="light self-center p-1 text-center text-xs">Constitution (CON)</span>
        </div>

        <div class="col-span-2 flex">
          <stat-input />
        </div>

        <div class="col-span-2 flex">
          <p
            class="light text-md flex-1 items-center justify-center self-center p-1 text-center font-serif text-lg font-bold"
          >
            90
          </p>
        </div>

        <div class="col-span-5 flex">
          <span class="light mb-1 self-center p-1 text-center uppercase"
            >Distinguishing features</span
          >
        </div>
      </div>

      <div class="grid grid-cols-12 divide-x-2 divide-smoke border-b-2 border-smoke">
        <div class="col-span-3 flex">
          <span class="light self-center p-1 text-center text-xs">Dexterity (DEX)</span>
        </div>

        <div class="col-span-2 flex">
          <stat-input />
        </div>

        <div class="col-span-2 flex">
          <p
            class="light text-md flex-1 items-center justify-center self-center p-1 text-center font-serif text-lg font-bold"
          >
            90
          </p>
        </div>

        <div class="col-span-5 flex">
          <span class="light mb-1 self-center p-1 text-center uppercase"
            >Distinguishing features</span
          >
        </div>
      </div>

      <div class="grid grid-cols-12 divide-x-2 divide-smoke border-b-2 border-smoke">
        <div class="col-span-3 flex">
          <span class="light self-center p-1 text-center text-xs">Intelligence (INT)</span>
        </div>

        <div class="col-span-2 flex">
          <stat-input />
        </div>

        <div class="col-span-2 flex">
          <p
            class="light text-md flex-1 items-center justify-center self-center p-1 text-center font-serif text-lg font-bold"
          >
            90
          </p>
        </div>

        <div class="col-span-5 flex">
          <span class="light mb-1 self-center p-1 text-center uppercase"
            >Distinguishing features</span
          >
        </div>
      </div>

      <div class="grid grid-cols-12 divide-x-2 divide-smoke border-b-2 border-smoke">
        <div class="col-span-3 flex">
          <span class="light self-center p-1 text-center text-xs">Power (POW)</span>
        </div>

        <div class="col-span-2 flex">
          <stat-input />
        </div>

        <div class="col-span-2 flex">
          <p
            class="light text-md flex-1 items-center justify-center self-center p-1 text-center font-serif text-lg font-bold"
          >
            90
          </p>
        </div>

        <div class="col-span-5 flex">
          <span class="light mb-1 self-center p-1 text-center uppercase"
            >Distinguishing features</span
          >
        </div>
      </div>

      <div class="grid grid-cols-12 divide-x-2 divide-smoke border-b-2 border-smoke">
        <div class="col-span-3 flex">
          <span class="light self-center p-1 text-center text-xs">Charisma (CHA)</span>
        </div>

        <div class="col-span-2 flex">
          <stat-input />
        </div>

        <div class="col-span-2 flex">
          <p
            class="light text-md flex-1 items-center justify-center self-center p-1 text-center font-serif text-lg font-bold"
          >
            90
          </p>
        </div>

        <div class="col-span-5 flex">
          <span class="light mb-1 self-center p-1 text-center uppercase"
            >Distinguishing features</span
          >
        </div>
      </div>

      <div class="grid grid-cols-12 divide-x-2 divide-smoke border-b-2 border-smoke">
        <div class="col-span-6 flex items-center">
          <span class="light flex-1 p-2 uppercase">9. Derived attributes</span>
        </div>

        <div class="col-span-3 flex items-center">
          <p class="light flex-1 p-2 text-center uppercase leading-none">Maximum</p>
        </div>

        <div class="col-span-3 flex items-center">
          <p class="light flex-1 p-2 text-center uppercase leading-none">Current</p>
        </div>
      </div>

      <div class="grid grid-cols-12 divide-x-2 divide-smoke border-b-2 border-smoke">
        <div class="col-span-6 flex">
          <span class="light self-center p-1 text-center text-xs">Hit Points (HP)</span>
        </div>

        <div class="col-span-3 flex">
          <p
            class="light text-md flex-1 items-center justify-center self-center p-1 text-center font-serif text-lg font-bold"
          >
            90
          </p>
        </div>

        <div class="col-span-3 flex">
          <p
            class="light text-md flex-1 items-center justify-center self-center p-1 text-center font-serif text-lg font-bold"
          >
            90
          </p>
        </div>
      </div>

      <div class="grid grid-cols-12 divide-x-2 divide-smoke border-b-2 border-smoke">
        <div class="col-span-6 flex">
          <span class="light self-center p-1 text-center text-xs">Willpower Points (WP)</span>
        </div>

        <div class="col-span-3 flex">
          <p
            class="light text-md flex-1 items-center justify-center self-center p-1 text-center font-serif text-lg font-bold"
          >
            90
          </p>
        </div>

        <div class="col-span-3 flex">
          <p
            class="light text-md flex-1 items-center justify-center self-center p-1 text-center font-serif text-lg font-bold"
          >
            90
          </p>
        </div>
      </div>

      <div class="grid grid-cols-12 divide-x-2 divide-smoke border-b-2 border-smoke">
        <div class="col-span-6 flex">
          <span class="light self-center p-1 text-center text-xs">Sanity Points (SAN)</span>
        </div>

        <div class="col-span-3 flex">
          <p
            class="light text-md flex-1 items-center justify-center self-center p-1 text-center font-serif text-lg font-bold"
          >
            90
          </p>
        </div>

        <div class="col-span-3 flex">
          <p
            class="light text-md flex-1 items-center justify-center self-center p-1 text-center font-serif text-lg font-bold"
          >
            90
          </p>
        </div>
      </div>

      <div class="grid grid-cols-12 divide-x-2 divide-smoke border-b-2 border-smoke">
        <div class="col-span-6 flex">
          <span class="light self-center p-1 text-center text-xs">Breaking Point (BP)</span>
        </div>

        <div class="col-span-3 flex">
          <p
            class="light text-md flex-1 items-center justify-center self-center p-1 text-center font-serif text-lg font-bold"
          >
            90
          </p>
        </div>

        <div class="col-span-3 flex">
          <p
            class="light text-md flex-1 items-center justify-center self-center p-1 text-center font-serif text-lg font-bold"
          >
            90
          </p>
        </div>
      </div>

      <div class="grid grid-cols-12 divide-x-2 divide-smoke border-b-2 border-smoke">
        <div class="col-span-12 flex items-center">
          <textarea-input class="flex-1" label="10. Physical description" />
        </div>
      </div>
    </div>
  </character-sheet-section>
</template>

<script setup lang="ts">
import CharacterSheetSection from '@components/CharacterSheet/CharacterSheetSection.vue'
import CheckboxInput from '@components/Inputs/CheckboxInput.vue'
import StatInput from '@components/Inputs/StatInput.vue'
import TextareaInput from '@components/Inputs/TextareaInput.vue'

const personalData = defineModel()
</script>

<style lang="scss" scoped>
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

input[type='number'] {
  appearance: textfield;
}
</style>
