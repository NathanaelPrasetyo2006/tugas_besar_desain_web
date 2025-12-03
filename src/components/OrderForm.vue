<template>
  <form
    @submit.prevent="submitForm"
    class="bg-white rounded-xl overflow-hidden shadow-lg p-4 sm:p-6 md:p-10 max-w-md sm:max-w-2xl md:max-w-3xl w-full space-y-6 transition"
  >
    <div>
      <label class="block font-semibold mb-1 sm:mb-2 text-sm sm:text-base">Nama Lengkap</label>
      <input
        v-model="form.nama"
        type="text"
        class="w-full border rounded-lg p-2 sm:p-3 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-blue-500 scroll-mt-24"
        placeholder="Masukkan nama Anda"
        required
      />
    </div>

    <div>
      <label class="block font-semibold mb-1 sm:mb-2 text-sm sm:text-base">Nomor Kontak</label>
      <input
        v-model="form.whatsapp"
        type="tel"
        class="w-full border rounded-lg p-2 sm:p-3 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-blue-500 scroll-mt-24"
        placeholder="08xxxxxxxxxx"
        required
      />
    </div>

    <div>
      <h2 class="font-semibold text-base sm:text-lg mb-2">Produk Dipesan</h2>
      <div
        v-for="(item, index) in form.produk"
        :key="index"
        class="border p-3 sm:p-4 rounded-lg mb-4 bg-gray-50 space-y-4"
      >
        <div>
          <label class="block font-semibold mb-1 sm:mb-2 text-sm sm:text-base">Jenis Roti</label>
          <input
            v-model="item.jenis"
            type="text"
            class="w-full border rounded-lg p-2 sm:p-3 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-blue-500 scroll-mt-24"
            placeholder="Contoh: Roti Buaya"
            required
          />
        </div>

        <div>
          <label class="block font-semibold mb-1 sm:mb-2 text-sm sm:text-base">Jumlah Roti</label>
          <input
            v-model.number="item.jumlah"
            type="number"
            min="10"
            class="w-full border rounded-lg p-2 sm:p-3 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-blue-500 scroll-mt-24"
            placeholder="10"
            required
          />
        </div>

        <button
          type="button"
          class="text-red-500 mt-2 underline text-sm sm:text-base hover:text-red-700 transition"
          @click="hapusProduk(index)"
          v-if="form.produk.length > 1"
        >
          Hapus Produk
        </button>
      </div>

      <button
        type="button"
        class="bg-green-500 text-white py-2 px-4 rounded-lg text-sm sm:text-base hover:bg-green-600 transition"
        @click="tambahProduk"
      >
        + Tambah Produk
      </button>
    </div>

    <div>
      <label class="block font-semibold mb-1 sm:mb-2 text-sm sm:text-base"
        >Tanggal Pengiriman/Pengambilan</label
      >
      <input
        v-model="form.tanggal"
        type="date"
        class="w-full border rounded-lg p-2 sm:p-3 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-blue-500 scroll-mt-24"
        required
      />
    </div>

    <div>
      <label class="block font-semibold mb-1 sm:mb-2 text-sm sm:text-base"
        >Alamat Lengkap (Jika Diantar)</label
      >
      <input
        v-model="form.alamat"
        type="text"
        class="w-full border rounded-lg p-2 sm:p-3 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder="Masukkan alamat lengkap"
      />
    </div>

    <div>
      <label class="block font-semibold mb-1 sm:mb-2 text-sm sm:text-base">Catatan Khusus</label>
      <textarea
        v-model="form.catatan"
        rows="4"
        class="w-full border rounded-lg p-2 sm:p-3 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder="Tambahkan catatan khusus (opsional)"
      ></textarea>
    </div>

    <button
      type="submit"
      class="w-full bg-blue-500 text-white font-semibold py-2 sm:py-3 rounded-lg text-sm sm:text-base hover:bg-blue-600 transition"
    >
      Kirim Pesanan
    </button>
  </form>

  <ThePopUp
    v-model="showPopUp"
    :title="popup.title"
    :message="popup.message"
    :confirmText="popup.button"
    @confirm="handleConfirm"
  />
</template>

<script setup>
import { ref, reactive, watch } from 'vue'
import ThePopUp from './ThePopUp.vue'

const defaultForm = {
  nama: '',
  whatsapp: '',
  produk: [{ jenis: '', jumlah: 10 }],
  tanggal: '',
  alamat: '',
  catatan: '',
}

const saved = localStorage.getItem('orderForm')
const form = reactive(saved ? JSON.parse(saved) : defaultForm)

const showPopUp = ref(false)
const popup = ref({
  title: '',
  message: '',
  button: 'OK',
})

function showMsg(title, message, button = 'OK') {
  popup.value = {
    title,
    message,
    button,
  }
  showPopUp.value = true
}

watch(
  form,
  (newVal) => {
    localStorage.setItem('orderForm', JSON.stringify(newVal))
  },
  { deep: true },
)

function tambahProduk() {
  form.produk.push({ jenis: '', jumlah: 10 })
}

function hapusProduk(index) {
  form.produk.splice(index, 1)
}

function validateOrder() {
  const totalProduk = form.produk.length
  const totalJumlah = form.produk.reduce((sum, item) => sum + Number(item.jumlah), 0)
  if (totalProduk === 1 || totalProduk > 1) {
    if (totalJumlah < 50) {
      return {
        valid: false,
        message: 'Jumlah minimal pemesanan adalah 50.',
      }
    }
  }
  return { valid: true }
}

function submitForm() {
  const check = validateOrder()
  if (!check.valid) {
    showMsg('Gagal Mengirim Pemesanan', check.message, 'Mengerti')
    return
  }

  showMsg('Berhasil!', 'Pemesanan berhasil dikirim.', 'Tutup')
  console.log('Form dikirim:', form)

  localStorage.removeItem('orderForm')

  form.nama = ''
  form.whatsapp = ''
  form.produk = [{ jenis: '', jumlah: 10 }]
  form.tanggal = ''
  form.alamat = ''
  form.catatan = ''
}

function handleConfirm() {
  showPopUp.value = false
}
</script>
