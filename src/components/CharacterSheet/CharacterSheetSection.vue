<template>
  <div class="flex border-2 border-smoke">
    <div class="bg-smoke flex items-center px-3">
      <slot name="title-image" />
    </div>

    <slot />
  </div>
</template>

<script setup lang="ts"></script>
