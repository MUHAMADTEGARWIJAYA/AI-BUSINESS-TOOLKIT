<script setup>
import { aiUsageData } from '@/data/aiUsageData'
</script>

<template>
  <div class="min-h-screen bg-black p-6">
    <h1 class="text-white text-2xl font-bold mb-6">Implementasi AI dalam Operasional</h1>

    <div class="grid gap-5">
      <div
        v-for="item in aiUsageData"
        :key="item.id"
        class="bg-neutral-900 border border-neutral-700 rounded-xl p-5 hover:bg-neutral-800 transition"
      >
        <!-- Title -->
        <h2 class="text-white text-lg font-semibold mb-2">
          {{ item.usage }}
        </h2>

        <!-- Tools -->
        <div class="flex flex-wrap gap-2 mb-3">
          <span
            v-for="tool in item.tools"
            :key="tool"
            class="text-xs bg-blue-600/20 text-blue-400 px-3 py-1 rounded-full"
          >
            {{ tool }}
          </span>
        </div>

        <!-- Impact -->
        <p class="text-gray-300 text-sm mb-4">
          {{ item.impact }}
        </p>

        <!-- Footer -->
        <div class="flex items-center justify-between">
          <!-- Departments -->
          <div class="flex flex-wrap gap-2">
            <span
              v-for="dept in item.departments"
              :key="dept"
              class="text-xs bg-green-600/20 text-green-400 px-2 py-1 rounded"
            >
              {{ dept }}
            </span>
          </div>

          <!-- Link -->
          <a
            :href="item.link"
            target="_blank"
            class="text-sm text-white bg-white/10 px-4 py-2 rounded-lg hover:bg-white/20 transition"
          >
            Lihat AI →
          </a>
        </div>
      </div>
    </div>
  </div>
</template>
