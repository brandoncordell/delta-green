<template>
  <base-button type="primary" :dark="true" @click="onClick">Log in</base-button>
</template>

<script setup lang="ts">
import { useAuth0 } from '@auth0/auth0-vue'
import BaseButton from '@components/Buttons/BaseButton.vue'

const { loginWithRedirect } = useAuth0()

const onClick = (): void => {
  loginWithRedirect({
    appState: {
      target: '/main'
    }
  })
}
</script>
