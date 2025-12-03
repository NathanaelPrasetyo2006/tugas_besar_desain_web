<template>
  <div class="bg-white shadow-md rounded-xl overflow-hidden hover:shadow-lg transition">
    <img v-if="image" :src="image" alt="Product Image" class="w-full h-auto object-cover" />
    <div class="p-4">
      <h3 class="text-xl lg:text-2xl font-semibold mb-2">{{ title }}</h3>
      <p class="text-gray-600 text-lg lg:text-xl mb-4">{{ description }}</p>
    </div>
  </div>
</template>

<script setup>
defineProps({
  image: String,
  title: String,
  description: String,
})
</script>
