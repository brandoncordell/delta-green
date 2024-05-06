<template>
  <component :is="tag" class="button" :class="buttonClasses">
    <fa-icon v-if="icon" :icon="icon.name" class="button__icon" />

    <span>
      <slot />
    </span>
  </component>
</template>

<script setup lang="ts">
import { computed } from 'vue'

// this would normally be imported from a types.ts file
interface Icon {
  name?: string
  style?: 'duotone' | 'solid' | 'regular' | 'light' | 'brands'
}

interface ButtonIcon extends Icon {
  alignment?: 'leading' | 'trailing'
}

interface Props {
  tag?: string
  size?: 'xs' | 'sm' | 'base' | 'lg' | 'xl'
  type?: 'primary' | 'secondary' | 'light'
  dark?: boolean
  icon?: ButtonIcon
}

const props = withDefaults(defineProps<Props>(), {
  tag: 'button',
  size: 'base',
  type: 'primary',
  dark: false
})

const buttonClasses = computed(() => {
  return [
    `button--${props.type}`,
    `button--${props.size}`,
    { 'button--dark': props.dark },
    { 'button--icon': props.icon },
    { '-icon-trailing': props.icon?.alignment === 'trailing' }
  ]
})
</script>

<style scoped lang="scss">
button {
  @apply rounded-md font-semibold px-2.5 py-1.5 text-sm shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2;
}

/* sizes */
.button--xs {
  @apply rounded px-2 py-1 text-xs;
}

.button--sm {
  @apply rounded px-2 py-1 text-sm;
}

.button--lg {
  @apply px-3 py-2 text-sm;
}

.button--xl {
  @apply px-3.5 py-2.5 text-sm;
}

/* types */
.button--primary {
  @apply bg-dg-green text-white hover:bg-dg-green-500 focus-visible:outline-dg-green;

  &.button--dark {
    @apply bg-dg-green-500 hover:bg-dg-green-400 focus-visible:outline-dg-green-500;

    text-shadow: 0 0 2px #045034;
  }
}

.button--secondary {
  @apply rounded-md bg-white text-gray-900 hover:bg-gray-50;

  &:not(.button--dark) {
    @apply ring-1 ring-inset ring-gray-300;
  }

  &.button--dark {
    @apply bg-white/10 text-white hover:bg-white/20;
  }
}

/* icon buttons */
.button--icon {
  @apply inline-flex items-center gap-x-1.5;
}

.-icon-trailing {
  @apply flex-row-reverse;
}
</style>
