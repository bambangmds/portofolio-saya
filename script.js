// 1. Cari tombol dan body di dalam halaman web berdasarkan ID / Tag-nya
const tombolTema = document.getElementById("theme-toggle");
const elemenBody = document.body;

// 2. Beri perintah: "Jika tombol diklik, lakukan sesuatu!"
tombolTema.addEventListener("click", function () {
  // 3. Logika: Tambah atau hapus kelas 'dark-mode' yang ada di CSS tadi
  elemenBody.classList.toggle("dark-mode");

  // 4. Bonus: Mengubah tulisan tombolnya secara interaktif
  if (elemenBody.classList.contains("dark-mode")) {
    tombolTema.innerHTML = "☀️ Mode Terang";
  } else {
    tombolTema.innerHTML = "🌙 Mode Gelap";
  }
});


// --- LOGIKA JAM DIGITAL ---

function perbaruiJam() {
    // 1. Ambil data waktu saat ini dari sistem komputer/HP
    const waktuSekarang = new Date();
    
    // 2. Ambil Jam, Menit, dan Detik secara terpisah
    let jam = waktuSekarang.getHours();
    let menit = waktuWindows = waktuSekarang.getMinutes();
    let detik = waktuSekarang.getSeconds();
    
    // 3. Logika Kondisi (If): Jika angka di bawah 10, tambahkan angka "0" di depannya (misal: jam 9 jadi 09)
    if (jam < 10) { jam = "0" + jam; }
    if (menit < 10) { menit = "0" + menit; }
    if (detik < 10) { detik = "0" + detik; }
    
    // 4. Gabungkan menjadi format string "HH:MM:SS"
    const formatWaktu = jam + ":" + menit + ":" + detik;
    
    // 5. Masukkan teks waktu tersebut ke dalam HTML yang punya ID "clock"
    document.getElementById('clock').innerHTML = formatWaktu;
}

// 6. Jalankan fungsi jam pertama kali saat web dibuka
perbaruiJam();

// 7. Mantra JavaScript: Jalankan fungsi 'perbaruiJam' secara berulang setiap 1000 milidetik (1 detik)
setInterval(perbaruiJam, 1000);
