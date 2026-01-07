<script setup>
import { aiTableData } from '@/data/data.js'
</script>

<template>
  <div class="min-h-screen bg-neutral-900 p-6">
    <h1 class="text-white text-2xl font-bold mb-4">Explore AI Tools</h1>

    <div class="overflow-x-auto border border-neutral-700 rounded-xl">
      <table class="min-w-full text-sm text-left">
        <!-- Header -->
        <thead class="bg-neutral-800 text-gray-300 uppercase">
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
          <tr
            v-for="(item, index) in aiTableData"
            :key="item.id"
            class="border-t border-neutral-700 hover:bg-neutral-800 transition"
          >
            <td class="px-4 py-3 text-gray-400">
              {{ index + 1 }}
            </td>
            <td class="px-4 py-3 text-white font-medium">
              {{ item.usage }}
            </td>
            <td class="px-4 py-3 text-gray-300">
              {{ item.tools }}
            </td>
            <td class="px-4 py-3 text-gray-300">
              {{ item.impact }}
            </td>
            <td class="px-4 py-3 text-gray-300">
              {{ item.department }}
            </td>
            <td class="px-4 py-3 text-center">
              <a
                :href="item.link"
                target="_blank"
                class="inline-flex items-center justify-center w-9 h-9 rounded-lg bg-green-500 hover:bg-green-400 transition"
              >
                🔗
              </a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
