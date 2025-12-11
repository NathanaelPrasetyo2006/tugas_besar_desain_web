<template>
  <nav class="bg-[#D4F6FF] shadow-md py-4 sticky top-0 w-full z-50">
    <div class="max-w-6xl mx-auto px-4 flex justify-between items-center">
      <div class="flex items-center gap-3 md:hidden">
        <button @click="isOpen = !isOpen" class="text-gray-700 focus:outline-none">
          <svg
            v-if="!isOpen"
            xmlns="http://www.w3.org/2000/svg"
            class="w-8 h-8"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>

          <svg
            v-else
            xmlns="http://www.w3.org/2000/svg"
            class="w-8 h-8"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        <div>
          <router-link
            v-if="activePage === 'beranda'"
            to="/"
            class="text-lg font-medium text-gray-700 hover:text-blue-600"
          >
            Beranda
          </router-link>

          <the-drop-down v-if="activePage === 'produk'" mobile />

          <router-link
            v-if="activePage === 'carapesan'"
            to="/carapesan"
            class="text-lg font-medium text-gray-700 hover:text-blue-600"
          >
            Cara Pesan
          </router-link>

          <router-link
            v-if="activePage === 'tentangkami'"
            to="/tentangkami"
            class="text-lg font-medium text-gray-700 hover:text-blue-600"
          >
            Tentang Kami
          </router-link>

          <router-link
            v-if="activePage === 'aboutme'"
            to="/aboutme"
            class="text-lg font-medium text-gray-700 hover:text-blue-600"
          >
            About Me
          </router-link>
        </div>
      </div>

      <div class="hidden md:flex space-x-24 items-center mx-auto">
        <router-link
          to="/"
          class="text-gray-700 text-xl font-medium hover:text-blue-600 transition duration-200"
          active-class="text-blue-700 border-b-2 border-blue-700 pb-1"
        >
          Beranda
        </router-link>

        <the-drop-down />

        <router-link
          to="/carapesan"
          class="text-gray-700 text-xl font-medium hover:text-blue-600 transition duration-200"
          active-class="text-blue-700 border-b-2 border-blue-700 pb-1"
        >
          Cara Pesan
        </router-link>

        <router-link
          to="/tentangkami"
          class="text-gray-700 text-xl font-medium hover:text-blue-600 transition duration-200"
          active-class="text-blue-700 border-b-2 border-blue-700 pb-1"
        >
          Tentang Kami
        </router-link>

        <router-link
          to="/aboutme"
          class="text-gray-700 text-xl font-medium hover:text-blue-600 transition duration-200"
          active-class="text-blue-700 border-b-2 border-blue-700 pb-1"
        >
          About Me
        </router-link>
      </div>
    </div>

    <transition name="fade">
      <div v-if="isOpen" class="md:hidden bg-[#D4F6FF] px-6 pb-2 flex flex-col space-y-4 text-lg">
        <router-link @click="closeMenu" to="/">Beranda</router-link>

        <router-link @click="closeMenu" to="/produk">Produk</router-link>

        <router-link @click="closeMenu" to="/carapesan">Cara Pesan</router-link>

        <router-link @click="closeMenu" to="/tentangkami">Tentang Kami</router-link>

        <router-link @click="closeMenu" to="/aboutme">About Me</router-link>
      </div>
    </transition>
  </nav>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useRoute } from 'vue-router'
import TheDropDown from './TheDropDown.vue'

const isOpen = ref(false)
const route = useRoute()

const closeMenu = () => {
  isOpen.value = false
}

const activePage = computed(() => {
  if (route.path === '/') return 'beranda'
  if (route.path.startsWith('/produk')) return 'produk'
  if (route.path === '/carapesan') return 'carapesan'
  if (route.path === '/tentangkami') return 'tentangkami'
  if (route.path === '/aboutme') return 'aboutme'
  return null
})
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
