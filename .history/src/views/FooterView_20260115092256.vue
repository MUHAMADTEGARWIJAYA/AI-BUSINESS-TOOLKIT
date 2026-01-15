<template>
  <footer class="border-t text-gray-400 border-neutral-700 mt-16">
    <div class="max-w-7xl mx-auto px-6 py-10 grid gap-8 md:grid-cols-3">
      <!-- About -->
      <div>
        <h3 class="text-gray-400 text-lg font-semibold mb-3">AI Tools Explorer</h3>
        <p class="text-gray-400 text-sm leading-relaxed">
          Platform untuk mengenal dan mengeksplorasi penggunaan AI dalam dunia bisnis, mulai dari
          operasional, pengelolaan SDM, sampai membantu pengambilan keputusan.
        </p>
      </div>

      <!-- Navigation -->
      <div>
        <h3 class="text-gray-400 text-lg font-semibold mb-3">Navigasi</h3>
        <ul class="space-y-2 text-sm">
          <li>
            <router-link to="/" class="text-gray-400 hover:text-gray-900 transition">
              Home
            </router-link>
          </li>
          <li>
            <router-link to="/ai/operasional" class="text-gray-400 hover:text-gray-900 transition">
              Operasional AI
            </router-link>
          </li>
          <li>
            <router-link to="/ai/sdm" class="text-gray-400 hover:text-gray-900 transition">
              AI untuk SDM
            </router-link>
          </li>
          <li>
            <router-link to="/ai/strategi" class="text-gray-400 hover:text-gray-900 transition">
              Strategi AI
            </router-link>
          </li>
          <li>
            <router-link to="/ai/pemasaran" class="text-gray-400 hover:text-gray-900 transition">
              AI untuk Pemasaran
            </router-link>
          </li>
          <li>
            <router-link to="/ai/keuangan" class="text-gray-400 hover:text-gray-900 transition">
              AI untuk Keuangan & Akuntansi
            </router-link>
          </li>
        </ul>
      </div>

      <!-- Contact / Social -->
      <div>
        <h3 class="text-gray-400 text-lg font-semibold mb-3">Kontak</h3>
        <ul class="space-y-2 text-sm text-gray-400">
          <li>Instagram: @ab23.generation</li>
          <li>Administrasi bisnis 2023</li>
          <li>Universitas Sahid Surakarta</li>
          <li class="flex gap-4 mt-3 items-center">
            <!-- Instagram -->
            <a
              href="https://instagram.com/ab23.generation"
              target="_blank"
              rel="noopener noreferrer"
              class="hover:text-pink-500 transition"
              title="Instagram"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  d="M7.75 2h8.5C19.44 2 22 4.56 22 7.75v8.5C22 19.44 19.44 22 16.25 22h-8.5C4.56 22 2 19.44 2 16.25v-8.5C2 4.56 4.56 2 7.75 2Zm0 1.5C5.4 3.5 3.5 5.4 3.5 7.75v8.5c0 2.35 1.9 4.25 4.25 4.25h8.5c2.35 0 4.25-1.9 4.25-4.25v-8.5c0-2.35-1.9-4.25-4.25-4.25h-8.5Z"
                />
                <path
                  d="M12 7a5 5 0 1 0 0 10 5 5 0 0 0 0-10Zm0 1.5a3.5 3.5 0 1 1 0 7 3.5 3.5 0 0 1 0-7Z"
                />
                <circle cx="17.5" cy="6.5" r="1.25" />
              </svg>
            </a>

            <!-- Email -->
            <!-- <a
              href="mailto:emailkamu@gmail.com"
              class="hover:text-blue-400 transition"
              title="Email"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2Zm0 4-8 5-8-5V6l8 5 8-5v2Z"
                />
              </svg>
            </a> -->
          </li>
        </ul>
      </div>
    </div>

    <!-- Bottom -->
    <div class="border-t border-neutral-700 text-center py-4">
      <p class="text-gray-500 text-sm">
        © {{ new Date().getFullYear() }} AI Business Toolkit. All rights reserved.
      </p>
    </div>
  </footer>
</template>
