<template>
  <page-sidebar v-if="!route.meta.fullscreen" />

  <page-wrapper>
    <router-view />
  </page-wrapper>
</template>

<script setup lang="ts">
import { RouterView, useRoute } from 'vue-router'

import PageSidebar from '@components/Page/PageSidebar.vue'
import PageWrapper from '@components/Page/PageWrapper.vue'
import TailwindBreakpointInspector from '@components/TailwindBreakpointInspector.vue'

const route = useRoute()
const inDevelopmentMode = import.meta.env.DEV
</script>

<style>
html {
  @apply bg-white;
}

html,
body,
#app {
  @apply size-full;
}
</style>
