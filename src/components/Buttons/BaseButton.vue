<template>
  <component :is="tag" :class="buttonClasses">
    <slot />
  </component>
</template>

<script setup lang="ts">
import { computed } from 'vue'

interface Props {
  tag?: string
  size?: 'xs' | 'sm' | 'base' | 'lg' | 'xl'
  type?: 'primary' | 'secondary' | 'light'
  dark?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  tag: 'button',
  size: 'base',
  type: 'primary',
  dark: false
})

const buttonClasses = computed(() => {
  const classes = [`-${props.size}`, `-${props.type}`]

  if (props.dark) {
    classes.push('-dark')
  }

  return classes
})
</script>

<style scoped lang="scss">
button {
  @apply rounded-md font-semibold px-2.5 py-1.5 text-sm shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2;
}

/* sizes */
.-xs {
  @apply rounded px-2 py-1 text-xs;
}

.-sm {
  @apply rounded px-2 py-1 text-sm;
}

.-lg {
  @apply px-3 py-2 text-sm;
}

.-xl {
  @apply px-3.5 py-2.5 text-sm;
}

/* types */
.-primary {
  @apply bg-dg-green text-white hover:bg-dg-green-500 focus-visible:outline-dg-green;

  &.-dark {
    @apply bg-dg-green-500 hover:bg-dg-green-400 focus-visible:outline-dg-green-500;

    text-shadow: 0 0 2px #045034;
  }
}

.-secondary {
  @apply rounded-md bg-white text-gray-900 hover:bg-gray-50;

  &:not(.-dark) {
    @apply ring-1 ring-inset ring-gray-300;
  }

  &.-dark {
    @apply bg-white/10 text-white hover:bg-white/20;
  }
}
</style>
