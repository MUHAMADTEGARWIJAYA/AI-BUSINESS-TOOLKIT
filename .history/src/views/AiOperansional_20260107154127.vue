<script setup>
import { aiTableData } from '@/data/data.js'
</script>

<template>
  <div class="min-h-screen bg-white p-6">
    <div class="w-full max-w-full mb-10">
      <!-- Background Image -->
      <div
        class="w-full h-96 rounded-xl bg-cover bg-no-repeat bg-center"
        style="background-image: url('/cc.png')"
      ></div>
    </div>
    <h1 class="text-white text-2xl font-bold mb-4">Explore AI Tools</h1>

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
          <tr v-for="(item, index) in aiTableData" :key="item.id" class="border-t transition">
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
                <svg
                  viewBox="0 0 64 64"
                  xmlns="http://www.w3.org/2000/svg"
                  stroke-width="3"
                  stroke="#ffffff"
                  fill="none"
                >
                  <g id="SVGRepo_bgCarrier" stroke-width="2"></g>
                  <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                  <g id="SVGRepo_iconCarrier">
                    <path
                      d="M55.4,32V53.58a1.81,1.81,0,0,1-1.82,1.82H10.42A1.81,1.81,0,0,1,8.6,53.58V10.42A1.81,1.81,0,0,1,10.42,8.6H32"
                    ></path>
                    <polyline points="40.32 8.6 55.4 8.6 55.4 24.18"></polyline>
                    <line x1="19.32" y1="45.72" x2="54.61" y2="8.91"></line>
                  </g>
                </svg>
              </a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
