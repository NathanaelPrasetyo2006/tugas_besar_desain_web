<template>
  <section class="max-w-7xl mx-auto px-6 py-12 space-y-16">
    <div class="grid grid-cols-1 md:grid-cols-2 gap-10">
      <div class="space-y-6">
        <h1 class="text-xl md:text-2xl text-center md:text-justify font-bold">
          Nathanael Prasetyo
        </h1>
        <p class="text-lg md:text-xl text-uppercase text-center md:text-justify leading-relaxed">
          NIM : 11241070 - Informatika - ITK
        </p>
        <p class="text-lg md:text-xl text-center md:text-justify leading-relaxed">
          Saya adalah seorang mahasiswa Institut Teknologi Kalimanntan dengan jurusan Informatika.
          Saya memiliki minat dan pengetahuan yang luas tentang dunia teknologi dan pemrograman.
          Saya dapat membuat sesuatu dengan teknologi dan pemrograman yang efisien dan mudah
          digunakan.
        </p>
      </div>

      <div class="hidden md:flex justify-center">
        <img
          src="../assets/Pas Foto Putih.jpg"
          alt="Foto Profil Nathanael Prasetyo"
          class="w-60 h-60 sm:w-72 sm:h-72 md:w-96 md:h-96 object-contain"
        />
      </div>
    </div>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
      <TheCard
        image="/src/assets/Roti Buaya Cokelat.png"
        title="Skill Gue"
        description="Dapat membuat roti buaya ini menggunakan teknologi vue dan tailwind serta buaya impor dari china"
      />
      <TheCard
        image="/src/assets/Roti Bakso Sapi.png"
        title="Skill Gue"
        description="Dapat membuat roti bakso sapi ini menggunakan teknologi PHP dan menggunakan sapi pilihan berkualitas"
      />
      <TheCard
        image="/src/assets/Roti Keju.png"
        title="Skill Gue"
        description="Dapat membuat roti keju ini menggunakan perhitungan vektor eigen dan perhitungan matematis sederhana"
      />
    </div>
  </section>
</template>

<script setup>
import TheCard from './TheCard.vue'
</script>
