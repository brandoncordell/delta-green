<template>
  <button
    type="button"
    class="rounded-md bg-dg-green px-6 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-dg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-dg-green"
    @click="onClick"
  >
    Log out
  </button>
</template>

<script setup lang="ts">
import { useAuth0 } from '@auth0/auth0-vue'

const { logout } = useAuth0()

const onClick = (): void => {
  logout({
    logoutParams: {
      returnTo: window.location.origin
    }
  })
}
</script>
