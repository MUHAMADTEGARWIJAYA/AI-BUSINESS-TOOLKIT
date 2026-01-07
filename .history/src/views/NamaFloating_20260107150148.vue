<template>
  <div class="min-h-screen bg-white overflow-hidden py-10">
    <div class="space-y-12">
      <!-- Line 1 - Nama 1-10 Gerak ke Kanan -->
      <div class="relative h-20 flex items-center overflow-hidden">
        <div class="scroll-container animate-scroll-right flex gap-4 whitespace-nowrap absolute">
          <div
            v-for="(nama, idx) in line1Double"
            :key="idx"
            class="floating-card inline-block px-8 py-3 bg-white border-2 border-black rounded-full"
          >
            <span class="text-black font-medium text-base">{{ nama }}</span>
          </div>
        </div>
      </div>

      <!-- Line 2 - Nama 11-21 Gerak ke Kiri -->
      <div class="relative h-20 flex items-center overflow-hidden">
        <div class="scroll-container animate-scroll-left flex gap-4 whitespace-nowrap absolute">
          <div
            v-for="(nama, idx) in line2Double"
            :key="idx"
            class="floating-card inline-block px-8 py-3 bg-white border-2 border-black rounded-full"
          >
            <span class="text-black font-medium text-base">{{ nama }}</span>
          </div>
        </div>
      </div>
    </div>

    <!-- Title -->
    <div class="text-center mt-16">
      <h1 class="text-5xl font-bold text-black mb-3">Floating Names</h1>
      <p class="text-gray-600 text-lg">Hover untuk menghentikan animasi</p>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'

// Line 1: Nama 1-10 (gerak ke kanan)
const line1 = [
  'Ahmad Fauzi',
  'Budi Santoso',
  'Citra Lestari',
  'Dewi Anggraini',
  'Eko Prasetyo',
  'Fajar Ramadhan',
  'Gita Permata',
  'Hadi Saputra',
  'Indah Puspitasari',
  'Joko Widodo',
]

// Line 2: Nama 11-21 (gerak ke kiri)
const line2 = [
  'Kurniawan Dwi',
  'Lia Amelia',
  'Muhammad Rizki',
  'Nanda Putri',
  'Oki Setiawan',
  'Putra Pratama',
  'Rina Oktaviani',
  'Sandi Mahendra',
  'Tia Ayuningtyas',
  'Umar Hakim',
  'Vina Safitri',
]

// Duplicate arrays untuk seamless loop
const line1Double = computed(() => [...line1, ...line1])
const line2Double = computed(() => [...line2, ...line2])
</script>

<style scoped>
@keyframes scrollRight {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
}

@keyframes scrollLeft {
  0% {
    transform: translateX(-50%);
  }
  100% {
    transform: translateX(0);
  }
}

.animate-scroll-right {
  animation: scrollRight 50s linear infinite;
}

.animate-scroll-left {
  animation: scrollLeft 50s linear infinite;
}

.floating-card {
  transition: all 0.3s ease;
}

.floating-card:hover {
  transform: translateY(-3px);
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
}

.scroll-container:has(.floating-card:hover) {
  animation-play-state: paused;
}
</style>
