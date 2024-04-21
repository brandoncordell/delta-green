<template>
  <div class="flex flex-col p-2">
    <label for="name" class="light mb-1 flex items-center justify-between uppercase">
      {{ label }}

      <span>
        <img
          src="@assets/images/random-dice.svg"
          alt="Dice icon"
          class="h-5 w-5 opacity-20 hover:cursor-pointer hover:opacity-40"
        />
      </span>
    </label>

    <textarea
      class="focus:ring-none rounded-none bg-gray-100 font-serif text-lg font-bold focus:bg-white focus:outline-none"
      rows="4"
    ></textarea>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  label?: string
}>()

const value = defineModel()
</script>
