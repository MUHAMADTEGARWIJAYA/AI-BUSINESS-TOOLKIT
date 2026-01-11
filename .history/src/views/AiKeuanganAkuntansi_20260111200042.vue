<template>
  <div class="min-h-screen bg-white">
    <div class="w-full max-w-full mb-10">
      <!-- Background Image -->
      <!-- <div
        class="w-full h-96 rounded-xl bg-cover bg-no-repeat bg-center"
        style="background-image: url('/DIVISI\ AKUNTANSI\ DAN\ KEUANGAN.png')"
      ></div> -->
      <div
        class="w-full md:h-96 h-52 rounded-xl bg-contain md:bg-cover bg-no-repeat bg-center"
        :style="{ backgroundImage: `url('${bgImage}')` }"
      ></div>
    </div>
    <div class="p-8">
      <h1 class="text-black text-2xl font-bold mb-4">Explore AI Tools</h1>

      <div class="overflow-x-auto border border-neutral-300 rounded-xl">
        <table class="min-w-full text-sm text-left">
          <!-- Header -->
          <thead class="text-black uppercase">
            <tr>
              <th class="px-4 py-3">No</th>
              <th class="px-4 py-3">Penggunaan AI</th>
              <th class="px-4 py-3">Tools yang Digunakan</th>
              <th class="px-4 py-3">Dampak terhadap Kinerja</th>
              <th class="px-4 py-3">Bagian Terlibat</th>
              <th class="px-4 py-3 text-center">Website</th>
            </tr>
          </thead>

          <!-- Body -->
          <tbody>
            <tr v-for="(item, index) in aiakutansi" :key="item.id" class="border-t transition">
              <td class="px-4 py-3 text-black">
                {{ index + 1 }}
              </td>
              <td class="px-4 py-3 text-black font-medium">
                {{ item.usage }}
              </td>
              <td class="px-4 py-3 text-black">
                {{ item.tools }}
              </td>
              <td class="px-4 py-3 text-black">
                {{ item.impact }}
              </td>
              <td class="px-4 py-3 text-black">
                {{ item.department }}
              </td>
              <td class="px-4 py-3 text-center">
                <a
                  :href="item.link"
                  target="_blank"
                  class="inline-flex items-center py-2 px-2 text-white justify-center w-9 h-9 rounded-lg bg-blue-500 hover:bg-blue-400 transition"
                >
                  🔗
                </a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { aiakutansi } from '@/data/data.js'
const bgImage = ref('/dddd.png')
const updateBg = () => {
  bgImage.value = window.innerWidth >= 768 ? '/keuangan.png' : '/keuangan.png'
}

onMounted(() => {
  updateBg()
  window.addEventListener('resize', updateBg)
})

onUnmounted(() => {
  window.removeEventListener('resize', updateBg)
})
</script>
