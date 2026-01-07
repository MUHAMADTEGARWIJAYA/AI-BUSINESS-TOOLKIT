<template>
  <div class="min-h-screen flex flex-col justify-center items-start">
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
    <div class="w-full flex justify-center px-10 items-center">
      <div class="min-h-screen space-y-4">
        <h1 class="text-white text-2xl font-bold mb-6">Lingkup Penerapan AI</h1>

        <router-link v-for="item in lingkupAI" :key="item.id" :to="item.route" class="block">
          <div class="flex items-center gap-4 border border-neutral-700 rounded-xl p-4 transition">
            <!-- Image -->
            <img
              :src="item.image"
              alt="icon"
              class="w-20 h-20 object-contain bg-white rounded-lg p-3"
            />

            <!-- Text -->
            <h2 class="text-black text-lg font-semibold">
              {{ item.title }}
            </h2>
          </div>
        </router-link>
      </div>
    </div>
  </div>
  <FooterView />
</template>

<script setup>
import NamaFloating from './NamaFloating.vue'
import { lingkupAI } from '../data/data.js'
import FooterView from './FooterView.vue'
</script>
