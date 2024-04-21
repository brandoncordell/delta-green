<template>
  <page-sidebar />

  <main class="py-10 lg:pl-72">
    <div class="px-4 sm:px-6 lg:px-8">
      <router-view />
    </div>
  </main>
</template>

<script setup lang="ts">
import { RouterView, useRoute } from 'vue-router'

import PageSidebar from '@components/Page/PageSidebar.vue'
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
