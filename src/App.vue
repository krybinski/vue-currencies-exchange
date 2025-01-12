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
  @apply h-full;
}

#app {
  @apply min-h-screen;
}
</style>
