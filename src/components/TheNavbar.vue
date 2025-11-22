<template>
  <nav class="bg-[#D4F6FF] shadow-md py-4 sticky top-0 w-full">
    <div class="max-w-6xl mx-auto flex justify-center">
      <div class="flex space-x-24">
        <!-- Link navigasi -->
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
      </div>
    </div>
  </nav>
</template>

<script setup>
import TheDropDown from './TheDropDown.vue'
</script>

<style scoped></style>
