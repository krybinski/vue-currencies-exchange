<script setup lang="ts">
import { RouterView } from 'vue-router';
</script>

<template>
  <div class="min-h-screen flex items-center">
    <RouterView />
  </div>
</template>

<style>
html,
body {
  @apply h-full bg-blue-100;
}

#app {
  @apply min-h-screen;
}
</style>
