<template>
  <page-wrapper>
    <div class="flex flex-col gap-y-4">
      <div>
        <base-button size="xs">Base XS</base-button>
        <base-button size="sm">Base SM</base-button>
        <base-button>Base</base-button>
        <base-button size="lg">Base LG</base-button>
        <base-button size="xl">Base XL</base-button>
      </div>

      <div>
        <div class="flex gap-x-5">
          <base-button type="primary" size="xs">Primary XS</base-button>
          <base-button type="primary" size="sm">Primary SM</base-button>
          <base-button type="primary">Primary</base-button>
          <base-button type="primary" size="lg">Primary LG</base-button>
          <base-button type="primary" size="xl">Primary XL</base-button>
        </div>
      </div>

      <div>
        <div class="flex gap-x-5">
          <base-button type="secondary" size="xs">Secondary XS</base-button>
          <base-button type="secondary" size="sm">Secondary SM</base-button>
          <base-button type="secondary">Secondary</base-button>
          <base-button type="secondary" size="lg">Secondary LG</base-button>
          <base-button type="secondary" size="xl">Secondary XL</base-button>
        </div>
      </div>
    </div>
  </page-wrapper>
</template>

<script setup type="ts">
import PageWrapper from '@components/Page/PageWrapper.vue'
import BaseButton from '@components/Buttons/BaseButton.vue'
</script>
