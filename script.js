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
