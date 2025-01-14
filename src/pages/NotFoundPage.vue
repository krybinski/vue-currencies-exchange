<script setup lang="ts">
import { useRouter } from 'vue-router';
import DefaultLayout from '@/layouts/DefaultLayout.vue';

const router = useRouter();

const goHome = () => {
  router.push({ name: 'home' });
};
</script>

<template>
  <DefaultLayout>
    <main class="flex min-h-screen w-full items-center justify-center px-6 py-24 sm:py-32 lg:px-8">
      <div class="text-center">
        <p class="text-6xl font-semibold text-blue-500">404</p>
        <h1 class="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">
          Page not found
        </h1>
        <p class="mt-6 text-base leading-7 text-gray-600">
          Sorry, we couldn't find the page you're looking for.
        </p>
        <div class="mt-10">
          <button
            @click="goHome"
            class="rounded-md bg-blue-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-blue-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
          >
            Go back home
          </button>
        </div>
      </div>
    </main>
  </DefaultLayout>
</template>
