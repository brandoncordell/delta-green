<template>
  <!-- Static sidebar for desktop -->
  <div class="hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-72 lg:flex-col">
    <!-- Sidebar component, swap this element with another sidebar if you like -->
    <div class="flex grow flex-col gap-y-5 overflow-y-auto bg-zinc-900 px-6">
      <div class="flex h-16 pt-6 shrink-0 items-center gap-x-5">
        <img
          class="h-8 w-auto"
          src="@assets/images/delta-green-triangle-logomark.png"
          alt="Your Company"
        />

        <img class="h-8 w-auto" src="@assets/images/the-backstop-logo.png" alt="THEBACKSTOP logo" />
      </div>

      <nav class="flex flex-1 flex-col">
        <ul role="list" class="flex flex-1 flex-col gap-y-7">
          <li>
            <ul role="list" class="-mx-2 space-y-1">
              <li v-for="link in links" :key="link.name">
                <router-link
                  :to="link.href"
                  :class="[
                    link.current ? 'bg-zinc-800' : 'hover:bg-zinc-800',
                    'group flex items-center gap-x-3 rounded-md p-2'
                  ]"
                >
                  <sidebar-icon v-if="link.icon" :icon="link.icon" />

                  <span
                    :class="[link.current ? 'text-white' : 'text-gray-400 hover:text-white']"
                    class="text-sm leading-6 font-semibold"
                    >{{ link.name }}</span
                  >
                </router-link>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
    </div>
  </div>
</template>

<script setup lang="ts">
import SidebarIcon from '@components/Sidebar/SidebarIcon.vue'
import type { Link } from '@/src/types'

defineProps({
  links: Array<Link>
})
</script>
