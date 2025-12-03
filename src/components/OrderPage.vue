<template>
  <section class="max-w-5xl lg:max-w-6xl xl:max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-6">
    <div class="my-4">
      <h1 class="text-xl sm:text-2xl md:text-3xl font-bold mb-4 leading-tight">
        CARA PEMESANAN ROTI BUAYA DI BUAYA BAKERY
      </h1>
      <p class="text-base sm:text-lg md:text-xl leading-relaxed">
        Kami menjamin kualitas dan kesegaran roti buaya Anda. Oleh karena itu, semua pesanan dibuat
        fresh sesuai permintaan. Ikuti langkah mudah berikut untuk memesan:
      </p>
    </div>
    <div class="my-4">
      <ol class="list-decimal list-inside text-base sm:text-lg md:text-xl space-y-4">
        <li class="font-bold">JADWAL PEMESANAN (Penting!)</li>
        <div class="pl-6 space-y-2">
          <p>
            Semua pemesanan wajib dilakukan
            <span class="font-bold">minimal H-3 (3 hari)</span> sebelum tanggal
            pengambilan/pengiriman.
          </p>
          <p>
            Contoh: Jika Anda ingin roti buaya siap pada hari Sabtu, pesanan dan pembayaran harus
            dikonfirmasi paling lambat hari Rabu.
          </p>
          <p>
            Kami sarankan untuk memesan lebih awal, terutama pada hari libur besar, untuk memastikan
            ketersediaan slot produksi.
          </p>
        </div>

        <li class="font-bold">MINIMAL PEMESANAN</li>
        <div class="pl-6">
          <p>
            Minimal pemesanan adalah
            <span class="font-bold"
              >50 roti (JIKA LEBIH DARI 1 JENIS ROTI, MINIMAL 1 JENIS = 10 ROTI).</span
            >
          </p>
        </div>

        <li class="font-bold">METODE PEMESANAN</li>
        <div class="pl-6 space-y-2">
          <p>
            Kami menerima pemesanan melalui layanan chat cepat atau melalui form. Pesan via
            WhatsApp: Kirimkan pesan ke nomor: +62 878-8106-8967
          </p>
          <p>
            Format Pemesanan: Mohon lengkapi data berikut saat mengirimkan chat/form pesanan Anda:
          </p>
          <ul class="list-disc list-inside space-y-1">
            <li>Nama Lengkap</li>
            <li>Nomor Kontak</li>
            <li>Jenis Roti</li>
            <li>Jumlah Roti</li>
            <li>Tanggal Pengiriman/Pengambilan</li>
            <li>Alamat Lengkap (Jika Diantar)</li>
            <li>Catatan Khusus (misalnya: request dekorasi/topping)</li>
          </ul>
        </div>

        <div class="p-4 sm:p-6 md:p-8">
          <OrderForm />
        </div>

        <li class="font-bold">METODE PEMBAYARAN</li>
        <div class="pl-6 space-y-2">
          <p>
            Konfirmasi pesanan akan diproses setelah pembayaran diterima. Kami menerima pembayaran
            melalui:
          </p>
          <p>Transfer Bank: Bank Mandiri - No. Rekening: (Nomor Rekening) - Atas Nama: (Nama)</p>
          <p>Dompet Digital: GoPay / DANA / OVO) - Nomor: +62 878-8106-8967</p>
        </div>

        <li class="font-bold">PENGIRIMAN & PENGAMBILAN</li>
        <div class="pl-6 space-y-2">
          <p>Anda dapat memilih salah satu opsi berikut:</p>
          <p class="font-semibold">A. Ambil di Toko (Gratis Biaya)</p>
          <p>Alamat Toko: (Alamat Lengkap Toko)</p>
          <p>Waktu Pengambilan: Jam Operasional <span class="font-bold">(08.00 - 22.00)</span></p>
          <p>
            <span class="font-bold">Petunjuk:</span> Tunjukkan bukti pembayaran yang sudah
            dikonfirmasi kepada staf kami saat pengambilan.
          </p>
          <p class="font-semibold">B. Pengiriman Kurir Internal (Rekomendasi!)</p>
          <p>
            Kami menggunakan kurir internal yang berpengalaman untuk menjamin roti buaya Anda sampai
            di lokasi dengan aman.
          </p>
          <p>
            Biaya Pengiriman: Berlaku biaya tambahan berdasarkan jarak. Kami akan menginformasikan
            total biaya pengiriman setelah Anda memberikan alamat lengkap.
          </p>
          <p><span class="font-bold">Area Layanan:</span> Hanya melayani area Jabodetabek</p>
        </div>
      </ol>
    </div>
  </section>
</template>

<script setup>
import OrderForm from './OrderForm.vue'
</script>

<style scoped></style>
