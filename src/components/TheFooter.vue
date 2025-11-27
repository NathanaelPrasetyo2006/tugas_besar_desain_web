<template>
  <footer class="bg-[#FFDDAE] text-black py-6">
    <!-- Bagian 2 kolom -->
    <div
      class="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-40 lg:gap-60 px-6 md:px-10"
    >
      <!-- Kolom kiri -->
      <div>
        <div class="flex items-center mb-3">
          <img src="../assets/logo.png" class="w-6 h-6 mr-2" alt="Logo Buaya Bakery" />
          <h2 class="font-semibold text-lg md:text-xl">Buaya Bakery</h2>
        </div>

        <!-- WhatsApp -->
        <div class="flex items-center mb-2 text-base md:text-lg">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 24 24"
            class="w-5 h-5 mr-2 text-green-600"
          >
            <path
              d="M20.52 3.48A11.86 11.86 0 0 0 12 .01C5.37 0 .01 5.37.01 12c0 2.11.55 4.16 1.6 5.98L0 24l6.2-1.62A11.96 11.96 0 0 0 12 24c6.63 0 12-5.37 12-12 0-3.19-1.24-6.19-3.48-8.52zM12 22a9.93 9.93 0 0 1-5.09-1.38l-.36-.22-3.69.96.98-3.6-.23-.37A9.92 9.92 0 1 1 12 22zm5.07-7.25c-.28-.14-1.65-.82-1.9-.91-.25-.09-.43-.14-.61.14-.18.27-.7.91-.85 1.09-.16.18-.31.2-.59.07-.28-.14-1.19-.44-2.26-1.41-.84-.75-1.41-1.67-1.58-1.95-.16-.27-.02-.42.12-.56.12-.12.28-.31.43-.47.14-.16.18-.27.27-.45.09-.18.05-.34-.02-.48-.07-.14-.61-1.47-.84-2.02-.22-.52-.44-.45-.61-.46-.16-.01-.34-.01-.52-.01s-.48.07-.73.34c-.25.27-.96.94-.96 2.29s.98 2.66 1.11 2.85c.14.18 1.93 2.94 4.67 4.12.65.28 1.16.45 1.55.58.65.21 1.25.18 1.72.11.52-.08 1.65-.67 1.88-1.32.23-.65.23-1.2.16-1.32-.07-.12-.25-.18-.52-.32z"
            />
          </svg>
          <span>WhatsApp: +62 XXX-XXXX-XXXX</span>
        </div>

        <!-- Email -->
        <div class="flex items-center mb-2 text-base md:text-lg">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 24 24"
            class="w-5 h-5 mr-2 text-gray-600"
          >
            <path d="M12 13.065 1.8 6h20.4L12 13.065zM1.5 18V8.337l10.5 7.066 10.5-7.066V18h-21z" />
          </svg>
          <span>Email: buayabakery@gmail.com</span>
        </div>

        <!-- Instagram -->
        <a
          @click.prevent="showPopup = true"
          class="flex items-center mt-3 text-blue-700 hover:underline cursor-pointer text-base md:text-lg"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-5 h-5 mr-2 text-pink-600"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M7.5 3h9A4.5 4.5 0 0 1 21 7.5v9A4.5 4.5 0 0 1 16.5 21h-9A4.5 4.5 0 0 1 3 16.5v-9A4.5 4.5 0 0 1 7.5 3z"
            />
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M16.5 7.5h.008v.008H16.5V7.5zM12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6z"
            />
          </svg>
          Instagram
        </a>
        <the-pop-up
          v-model="showPopup"
          title="Perhatian"
          message="Apakah Anda yakin ingin membuka Instagram?"
          confirmText="Ya, Buka"
          cancelText="Batal"
          @confirm="bukaInstagram"
        />
      </div>

      <!-- Kolom kanan -->
      <div>
        <h2 class="font-semibold text-lg md:text-xl mb-3">FAQ</h2>
        <ul class="space-y-1 text-base md:text-lg">
          <li>
            <router-link
              to="/kebijakanpengembaliandanpembatalan"
              class="underline hover:text-blue-700"
              >Kebijakan Pengembalian & Pembatalan</router-link
            >
          </li>
          <li>
            <router-link to="/syaratdanketentuan" class="underline hover:text-blue-700"
              >Syarat & Ketentuan</router-link
            >
          </li>
          <li>
            <router-link to="/kebijakanprivasi" class="underline hover:text-blue-700"
              >Kebijakan Privasi</router-link
            >
          </li>
        </ul>
      </div>
    </div>

    <!-- Garis pemisah -->
    <div class="border-t border-gray-300 my-4"></div>

    <!-- Bagian bawah center -->
    <div class="text-center text-sm md:text-base">© 2025 Buaya Bakery. All Rights Reserved.</div>
  </footer>
</template>

<script setup>
import { ref } from 'vue'
import ThePopUp from './ThePopUp.vue'

const showPopup = ref(false)

function bukaInstagram() {
  window.open('https://www.instagram.com/', '_blank')
}
</script>
