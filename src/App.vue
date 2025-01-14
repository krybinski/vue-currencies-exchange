<script setup lang="ts">
import { RouterView } from 'vue-router';
</script>

<template>
  <div class="flex min-h-screen items-center">
    <RouterView />
  </div>
</template>

<style>
#app {
  @apply min-h-screen;
}
</style>
