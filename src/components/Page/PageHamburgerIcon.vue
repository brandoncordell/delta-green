<template>
  <div class="delta-green-close-icon">
    <span></span>
    <span></span>
    <span></span>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.delta-green-close-icon {
  @apply relative rotate-0 duration-500 ease-in-out cursor-pointer w-6 h-6;

  span {
    @apply block absolute h-0.5 w-full bg-[#009859] opacity-100 left-0 rotate-0 duration-200 ease-in-out;
  }

  span:nth-child(1) {
    @apply top-0;
  }
  span:nth-child(2) {
    @apply top-1.5;
  }
  span:nth-child(3) {
    @apply top-3;
  }
}

#nav-icon1 span,
#nav-icon3 span,
#nav-icon4 span {
}
</style>
