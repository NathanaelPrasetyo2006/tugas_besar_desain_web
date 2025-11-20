<template>
  <div class="min-h-screen flex flex-col">
    <the-header />
    <the-navbar />

    <main class="content-area bg-[#FBFBFB] grow">
      <router-view />
    </main>

    <the-footer />
  </div>
</template>

<script setup>
import { defineOptions } from 'vue'

import TheFooter from './components/TheFooter.vue'
import TheHeader from './components/TheHeader.vue'
import TheNavbar from './components/TheNavbar.vue'

defineOptions({
  name: 'App',
})
</script>

<style></style>
