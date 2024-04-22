<template>
  <base-button type="secondary" :dark="true" @click="onClick"> Sign up </base-button>
</template>

<script setup lang="ts">
import { useAuth0 } from '@auth0/auth0-vue'
import BaseButton from '@components/Buttons/BaseButton.vue'

const { loginWithRedirect } = useAuth0()

const onClick = (): void => {
  loginWithRedirect({
    appState: {
      target: '/main'
    },

    authorizationParams: {
      screen_hint: 'signup'
    }
  })
}
</script>
