<template>
  <div class="mx-6 my-4">
    <h1 class="text-2xl font-bold">Best Seller</h1>
  </div>
  <div
    class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 px-4 sm:px-6 py-6"
  >
    <TheCard
      image="/src/assets/Roti Buaya Cokelat.png"
      title="Roti Buaya Cokelat"
      description="Rp. 15.000"
    />

    <TheCard
      image="/src/assets/Roti Smoked Beef Cheese.png"
      title="Roti Smoked Beef Cheese"
      description="Rp. 18.000"
    />

    <TheCard
      image="/src/assets/Roti Tuna Cheese.png"
      title="Roti Tuna Cheese"
      description="Rp. 18.000"
    />

    <TheCard
      image="/src/assets/Roti Kacang Merah.png"
      title="Roti Kacang Merah"
      description="Rp. 12.000"
    />
  </div>
  <div class="mx-6 my-4">
    <h1 class="text-2xl font-bold">Recommended</h1>
  </div>
  <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 p-6">
    <TheCard
      image="/src/assets/Roti Buaya Cokelat.png"
      title="Roti Buaya Cokelat"
      description="Rp. 15.000"
    />

    <TheCard image="/src/assets/Roti Keju.png" title="Roti Keju" description="Rp. 15.000" />

    <TheCard
      image="/src/assets/Roti Bakso Sapi.png"
      title="Roti Bakso Sapi"
      description="Rp. 18.000"
    />

    <TheCard
      image="/src/assets/Roti Tawar Kismis.png"
      title="Roti Tawar Kismis"
      description="Rp. 15.000"
    />
  </div>
  <p class="text-center text-xl sm:text-2xl text-gray-700 max-w-3xl mx-6 sm:mx-auto mt-10">
    Terima kasih atas kepercayaan Anda! Berikut adalah pencapaian toko kami yang terus tumbuh setiap
    hari.
  </p>
  <section
    ref="counterSection"
    class="w-full flex items-center justify-center py-14 transition-all duration-700 ease-out opacity-0 translate-y-5"
  >
    <div class="flex flex-col sm:flex-row items-center gap-6 sm:gap-10">
      <div
        class="flex flex-col items-center justify-center bg-white shadow-xl rounded-2xl w-full sm:w-80 md:w-96 h-56 sm:h-64 px-6 sm:px-10 py-8"
      >
        <div class="relative">
          <StarIcon
            class="w-14 h-14 sm:w-20 sm:h-20 text-yellow-400 animate-pulse drop-shadow-lg"
          />
          <div
            class="absolute inset-0 bg-linear-to-r from-transparent via-white/60 to-transparent animate-shine rounded-full"
          ></div>
        </div>
        <p class="text-3xl sm:text-4xl font-bold mt-3">{{ displayedRating.toFixed(1) }}</p>
        <p class="text-gray-600 text-sm sm:text-base mt-1">Rating</p>
      </div>
      <div
        class="flex flex-col items-center justify-center bg-white shadow-xl rounded-2xl w-full sm:w-80 md:w-96 h-56 sm:h-64 px-6 sm:px-10 py-8"
      >
        <UsersIcon class="w-12 h-12 sm:w-16 sm:h-16 text-blue-500 drop-shadow-sm" />
        <p class="text-3xl sm:text-4xl font-bold mt-3">{{ formattedBuyers }}</p>
        <p class="text-gray-600 text-sm sm:text-base mt-1">Total Buyers</p>
      </div>
    </div>
  </section>
  <p class="text-center text-xl sm:text-2xl text-gray-600 max-w-2xl mx-6 sm:mx-auto my-6">
    Kepercayaan Anda adalah motivasi terbesar kami untuk terus memberikan yang terbaik.
  </p>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue'
import { StarIcon, UsersIcon } from '@heroicons/vue/24/solid'
import TheCard from './TheCard.vue'

const displayedRating = ref(0)
const finalRating = 5.0

const buyers = ref(0)
const finalBuyers = 10000000

const formattedBuyers = computed(() => {
  return buyers.value.toLocaleString('en-US') + '+'
})

const counterSection = ref(null)

function startAnimation() {
  displayedRating.value = 0
  buyers.value = 0

  const duration = 1000
  let start = 0
  const stepTime = 10

  const ratingInterval = setInterval(() => {
    start += stepTime
    displayedRating.value += (finalRating / duration) * stepTime
    if (displayedRating.value >= finalRating) {
      displayedRating.value = finalRating
      clearInterval(ratingInterval)
    }
  }, stepTime)

  const buyersInterval = setInterval(() => {
    buyers.value += (finalBuyers / duration) * stepTime
    if (buyers.value >= finalBuyers) {
      buyers.value = finalBuyers
      clearInterval(buyersInterval)
    }
  }, stepTime)
}

onMounted(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      if (entries[0].isIntersecting) {
        counterSection.value.classList.add('opacity-100', 'translate-y-0')
        startAnimation()
      } else {
        counterSection.value.classList.remove('opacity-100', 'translate-y-0')
      }
    },
    {
      threshold: 0.5,
    },
  )
  observer.observe(counterSection.value)
})
</script>

<style scoped>
@keyframes shine {
  0% {
    transform: translateX(-120%);
  }
  100% {
    transform: translateX(120%);
  }
}
.animate-shine {
  animation: shine 2s infinite linear;
}
</style>
