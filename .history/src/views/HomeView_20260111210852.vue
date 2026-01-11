<template>
  <div class="min-h-screen flex flex-col justify-center items-start">
    <div class="w-full max-w-full">
      <div
        class="w-full md:h-96 h-52 rounded-xl bg-contain md:bg-cover bg-no-repeat bg-center"
        :style="{ backgroundImage: `url('${bgImage}')` }"
      ></div>
    </div>

    <div class="w-full">
      <NamaFloating />
    </div>
    <!-- <div class="aurora-container">
      <Aurora
        :color-stops="['#7cff67', '#171D22', '#7cff67']"
        :amplitude="1.0"
        :blend="0.5"
        :speed="1.0"
        :intensity="1.0"
        class="w-full h-full"
      />
    </div> -->
    <div
      class="w-full flex justify-center px-10 md:px-0 items-center min-h-[900px] relative overflow-hidden"
    >
      <!-- Aurora Background -->
      <div class="absolute inset-0 z-0 pointer-events-none">
        <ColorBends
          :colors="['#ff5c7a', '#8a5cff', '#00ffd1']"
          :rotation="30"
          :speed="0.3"
          :scale="1.2"
          :frequency="1.4"
          :warpStrength="1.2"
          :mouseInfluence="0.8"
          :parallax="0.6"
          :noise="0.08"
          transparent
        />
      </div>

      <!-- Content -->
      <div class="min-h-screen space-y-4 relative z-10">
        <h1 class="text-white text-2xl font-bold mb-6">Lingkup Penerapan AI</h1>

        <router-link v-for="item in lingkupAI" :key="item.id" :to="item.route" class="block">
          <div
            class="flex items-center gap-4 border border-neutral-700 rounded-xl p-4 transition bg-black/40 backdrop-blur-md"
          >
            <img
              :src="item.image"
              alt="icon"
              class="w-20 h-20 object-contain bg-white rounded-lg p-3"
            />
            <h2 class="text-white text-lg font-semibold">
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
import { ref, onMounted, onUnmounted } from 'vue'
import NamaFloating from './NamaFloating.vue'
import { lingkupAI } from '../data/data.js'
import FooterView from './FooterView.vue'
import Aurora from '@/component/Aurora/Aurora.vue'
import ColorBend from '@/component/Aurora/ColorBend.vue'
import { C } from 'vue-router/dist/router-CWoNjPRp.mjs'
const bgImage = ref('/dddd.png')

const updateBg = () => {
  bgImage.value = window.innerWidth >= 768 ? '/ai.png' : '/2.png'
}

onMounted(() => {
  updateBg()
  window.addEventListener('resize', updateBg)
})

onUnmounted(() => {
  window.removeEventListener('resize', updateBg)
})
</script>

<style scoped>
.aurora-container {
  width: 100%;
  height: 500px;
  position: relative;
  overflow: hidden;
}
</style>
