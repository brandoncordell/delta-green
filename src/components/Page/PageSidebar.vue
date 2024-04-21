<template>
  <sidebar-mobile :links="links" :sidebarOpen="sidebarOpen" @sidebarClosed="onSidebarClosed" />
  <sidebar-desktop :links="links" />

  <div
    class="sticky top-0 z-40 flex items-center gap-x-6 bg-zinc-900 px-4 py-4 shadow-sm sm:px-6 lg:hidden"
  >
    <button type="button" class="-m-2.5 p-2.5 text-gray-400 lg:hidden" @click="sidebarOpen = true">
      <span class="sr-only">Open sidebar</span>
      <hamburger-icon />
    </button>

    <div class="flex-1 text-sm font-semibold leading-6 text-white">Dashboard</div>

    <a href="#">
      <span class="sr-only">Your profile</span>

      <img
        class="h-8 w-8 rounded-full bg-gray-800"
        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
        alt=""
      />
    </a>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

import SidebarDesktop from '@components/Page/PageSidebarDesktop.vue'
import SidebarMobile from '@components/Page/PageSidebarMobile.vue'
import HamburgerIcon from '@components/Page/PageHamburgerIcon.vue'

const sidebarOpen = ref(false)

const links = [
  {
    name: 'New Agent',
    href: '/agents/new',
    current: false,
    icon: 'fa-fw fa-lg fa-duotone fa-user-plus'
  },
  {
    name: 'Your Agents',
    href: '#',
    current: false,
    icon: 'fa-fw fa-lg fa-duotone fa-user-secret'
  },
  {
    name: 'Your Professions',
    href: '#',
    current: false,
    icon: 'fa-fw fa-lg fa-duotone fa-briefcase'
  },
  {
    name: 'Pregenerated Agents',
    href: '#',
    current: false,
    icon: 'fa-fw fa-lg fa-duotone fa-box-archive'
  }
]

function onSidebarClosed(): void {
  sidebarOpen.value = false
}
</script>
