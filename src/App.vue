<script setup lang="ts">
import { RouterView } from 'vue-router';
import PWABadge from './PWABadge.vue';
</script>

<template>
  <div class="flex min-h-screen items-center">
    <RouterView />
  </div>
  <PWABadge />
</template>

<style>
#app {
  @apply min-h-screen;
}
</style>
