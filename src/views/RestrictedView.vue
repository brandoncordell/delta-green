<template>
  <div class="absolute inset-0 flex flex-col items-center justify-center h-full bg-zinc-900">
    <main class="flex items-center justify-center size-full mb-12">
      <img
        src="@assets/images/restricted.png"
        alt="Access restricted"
        class="cursor-pointer h-96"
        @click="router.push('/main')"
      />
    </main>

    <footer class="py-12">
      <p class="font-extralight text-sm text-zinc-500">
        Unauthorized entrants will be subject to imprisonment, Title 18, U.S.C, § 1030
      </p>
    </footer>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'

const router = useRouter()
</script>
