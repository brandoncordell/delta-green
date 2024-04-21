<template>
  <div class="flex items-center fixed top-0 left-0 border border-gray-400 p-2 bg-gray-300 text-xs">
    Current breakpoint
    <div class="text-blue-600">
      <span class="ml-1 sm:hidden md:hidden lg:hidden xl:hidden">default (&lt; 640px)</span>
      <span class="ml-1 hidden sm:inline md:hidden font-extrabold">sm</span>
      <span class="ml-1 hidden md:inline lg:hidden font-extrabold">md</span>
      <span class="ml-1 hidden lg:inline xl:hidden font-extrabold">lg</span>
      <span class="ml-1 hidden xl:inline font-extrabold">xl</span>
    </div>
  </div>
</template>

<script setup lang="ts"></script>
