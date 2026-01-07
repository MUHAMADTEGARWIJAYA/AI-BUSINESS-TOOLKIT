<template>
  <footer class="border-t border-neutral-700 mt-16">
    <div class="max-w-7xl mx-auto px-6 py-10 grid gap-8 md:grid-cols-3">
      <!-- About -->
      <div>
        <h3 class="text-white text-lg font-semibold mb-3">AI Tools Explorer</h3>
        <p class="text-gray-400 text-sm leading-relaxed">
          Platform eksplorasi penerapan Artificial Intelligence pada berbagai bidang operasional,
          SDM, dan strategi pengambilan keputusan.
        </p>
      </div>

      <!-- Navigation -->
      <div>
        <h3 class="text-white text-lg font-semibold mb-3">Navigasi</h3>
        <ul class="space-y-2 text-sm">
          <li>
            <router-link to="/" class="text-gray-400 hover:text-white transition">
              Home
            </router-link>
          </li>
          <li>
            <router-link to="/ai/operasional" class="text-gray-400 hover:text-white transition">
              Operasional AI
            </router-link>
          </li>
          <li>
            <router-link to="/ai/sdm" class="text-gray-400 hover:text-white transition">
              AI untuk SDM
            </router-link>
          </li>
          <li>
            <router-link to="/ai/strategi" class="text-gray-400 hover:text-white transition">
              Strategi AI
            </router-link>
          </li>
        </ul>
      </div>

      <!-- Contact / Social -->
      <div>
        <h3 class="text-white text-lg font-semibold mb-3">Kontak</h3>
        <ul class="space-y-2 text-sm text-gray-400">
          <li>Email: admin@aitools.com</li>
          <li>Universitas / Institusi</li>
          <li class="flex gap-3 mt-3">
            <a href="#" class="hover:text-white transition" title="GitHub"> 🐙 </a>
            <a href="#" class="hover:text-white transition" title="LinkedIn"> 💼 </a>
            <a href="#" class="hover:text-white transition" title="Website"> 🌐 </a>
          </li>
        </ul>
      </div>
    </div>

    <!-- Bottom -->
    <div class="border-t border-neutral-700 text-center py-4">
      <p class="text-gray-500 text-sm">
        © {{ new Date().getFullYear() }} AI Tools Explorer. All rights reserved.
      </p>
    </div>
  </footer>
</template>
