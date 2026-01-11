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
    <!-- <!-- <div class="aurora-container">
      <Aurora
        :color-stops="['#7cff67', '#171D22', '#7cff67']"
        :amplitude="1.0"
        :blend="0.5"
        :speed="1.0"
        :intensity="1.0"
        class="w-full h-full"
      /> -->
    </div> -->
    <div class="w-full flex justify-center px-10 md:px-0 items-center">
      <div class="min-h-screen space-y-4">
        <h1 class="text-white text-2xl font-bold mb-6">Lingkup Penerapan AI</h1>

        <router-link v-for="item in lingkupAI" :key="item.id" :to="item.route" class="block">
          <div class="flex items-center gap-4 border border-neutral-700 rounded-xl p-4 transition">
            <img
              :src="item.image"
              alt="icon"
              class="w-20 h-20 object-contain bg-white rounded-lg p-3"
            />
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
import { ref, onMounted, onUnmounted } from 'vue'
import NamaFloating from './NamaFloating.vue'
import { lingkupAI } from '../data/data.js'
import FooterView from './FooterView.vue'
import Aurora from '@/component/Aurora/Aurora.vue'
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
