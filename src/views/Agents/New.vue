<template>
  <div class="relative mt-32">
    <div
      class="fixed top-0 left-72 right-0 bg-white border-b border-gray-200 px-6 py-5 shadow-sm z-10 sm:flex sm:items-center sm:justify-between"
    >
      <h3 class="text-base font-semibold leading-6 text-gray-900">
        {{ details.personalData.name }}
      </h3>

      <div class="mt-3 flex sm:ml-4 sm:mt-0">
        <button
          type="button"
          class="inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
        >
          Share
        </button>

        <button
          type="button"
          class="ml-3 inline-flex items-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Create
        </button>

        <button
          type="button"
          class="inline-flex items-center gap-x-1.5 rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
        >
          <i class="fa-duotone fa-file-arrow-down -ml-0.5 h-5 w-5" />

          Export
        </button>
      </div>
    </div>
  </div>

  <character-sheet />
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useAgentStore } from '@stores/agent'

import CharacterSheet from '@components/CharacterSheet.vue'

const agent = useAgentStore()
const { details } = storeToRefs(agent)
</script>
