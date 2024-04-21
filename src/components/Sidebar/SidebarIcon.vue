<template>
  <i :class="[icon, 'shrink-0']" :style="duotoneStyles" />
</template>

<script setup type="ts">
import { reactive } from 'vue'
import resolveConfig from 'tailwindcss/resolveConfig'
import tailwindConfig from '@/tailwind.config.ts'

const config = resolveConfig(tailwindConfig)

defineProps({
  icon: String
})

const duotoneStyles = reactive({
  '--fa-primary-color': config.theme.colors['dg-green'][600],
    '--fa-secondary-color': config.theme.colors['dg-green'][300]
})
</script>
