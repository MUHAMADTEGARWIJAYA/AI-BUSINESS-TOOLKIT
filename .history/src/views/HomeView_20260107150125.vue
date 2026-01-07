<template>
  <div class="min-h-screen flex flex-row justify-center items-start">
    <!-- Container -->
    <div class="w-full max-w-full">
      <!-- Background Image -->
      <div
        class="w-full h-96 rounded-xl bg-cover bg-no-repeat bg-center"
        style="background-image: url('/cc.png')"
      ></div>
    </div>
    <!-- Floating Names Component -->
    <div class="w-full">
      <NamaFloating />
    </div>
  </div>
</template>

<script setup>
import NamaFloating from './NamaFloating.vue'
</script>
