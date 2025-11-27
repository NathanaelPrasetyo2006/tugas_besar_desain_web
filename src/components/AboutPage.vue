<template>
  <section class="max-w-7xl mx-auto px-6 py-12 space-y-16">
    <div class="grid grid-cols-2 gap-10">
      <div class="space-y-6">
        <h1 class="text-2xl font-bold">Tentang Toko Roti Kami</h1>
        <p class="text-xl text-justify leading-relaxed">
          Kami adalah toko roti yang berdiri sejak tahun 2010 dengan visi untuk menghadirkan roti
          berkualitas tinggi yang selalu segar setiap hari. Sejak awal, kami berkomitmen menggunakan
          bahan-bahan terbaik agar setiap produk yang kami hasilkan memiliki cita rasa yang
          konsisten dan memuaskan. Dalam proses pembuatannya, setiap roti dipanggang dengan penuh
          perhatian oleh tim yang berpengalaman dan mencintai dunia per-bakery-an. Kami juga terus
          berinovasi menghadirkan berbagai varian roti yang mengikuti perkembangan selera pelanggan
          tanpa menghilangkan ciri khas rasa kami. Dengan pengalaman lebih dari satu dekade, kami
          berusaha menjadi toko roti yang tidak hanya menghadirkan produk lezat, tetapi juga
          memberikan pengalaman menyenangkan bagi setiap pelanggan yang datang.
        </p>
      </div>

      <div class="flex justify-center">
        <img src="../assets/logo.png" alt="Logo Toko Roti" class="w-96 h-96 object-contain" />
      </div>
    </div>
    <div class="grid grid-cols-2 gap-10">
      <div class="text-center space-y-6">
        <h2 class="text-2xl font-semibold">Visi Kami</h2>
        <p class="max-w-3xl mx-auto text-xl leading-relaxed">
          Menjadi toko roti terbaik yang selalu memberikan pengalaman terbaik kepada pelanggan
          melalui produk yang segar, inovasi, dan pelayanan yang sepenuh hati.
        </p>

        <h2 class="text-2xl font-semibold">Tujuan Website</h2>
        <p class="max-w-3xl mx-auto text-xl leading-relaxed">
          Website ini dibuat untuk memudahkan pelanggan memesan produk kami, melihat katalog roti
          terbaru, dan mendapatkan informasi seputar promo serta lokasi toko kami.
        </p>
      </div>
      <div class="flex justify-center">
        <img src="../assets/Roti Buaya.png" alt="Roti Buaya" class="w-96 h-96 object-contain" />
      </div>
    </div>

    <div class="grid grid-cols-2 gap-12 items-start">
      <!-- Maps -->
      <div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126912.67429151542!2d106.790497!3d-6.200000!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f5f3acaefdff%3A0x6c14d6dfeadc182f!2sJakarta!5e0!3m2!1sid!2sid!4v1699733333333"
          class="w-full h-64 rounded-xl shadow"
          allowfullscreen=""
          loading="lazy"
        ></iframe>
      </div>

      <div class="space-y-4">
        <h3 class="text-2xl font-semibold">Kontak</h3>
        <div class="border-t"></div>
        <p class="text-xl">Alamat: Jalan Kemerdekaan No. 45, Jakarta</p>
        <div class="flex items-center mb-1">
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
          <span class="text-xl">WhatsApp: +62 XXX-XXXX-XXXX</span>
        </div>
        <div class="flex items-center mb-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 24 24"
            class="w-5 h-5 mr-2 text-gray-600"
          >
            <path d="M12 13.065 1.8 6h20.4L12 13.065zM1.5 18V8.337l10.5 7.066 10.5-7.066V18h-21z" />
          </svg>
          <span class="text-xl">Email: buayabakery@gmail.com</span>
        </div>
        <a
          @click.prevent="showPopup = true"
          class="flex items-center mt-2 text-xl text-blue-700 hover:underline cursor-pointer"
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
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import ThePopUp from './ThePopUp.vue'

const showPopup = ref(false)

function bukaInstagram() {
  window.open('https://www.instagram.com/buayabakery/', '_blank')
}
</script>
