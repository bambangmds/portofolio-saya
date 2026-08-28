// 1. Komputer mengacak angka rahasia antara 1 sampai 20
const angkaRahasia = Math.floor(Math.random() * 20) + 1;

// 2. Ambil elemen-elemen HTML ke dalam JavaScript
const inputUser = document.getElementById("tebakan-input");
const tombolCek = document.getElementById("cek-btn");
const pesanGame = document.getElementById("pesan-game");

// 3. Buat perintah: "Jika tombol Tebak! diklik, jalankan aturan game"
tombolCek.addEventListener("click", function () {
  // Ambil angka yang diketik oleh user dan ubah formatnya menjadi angka asli
  const tebakan = Number(inputUser.value);

  // LOGIKA IF-ELSE BERUNTUN (Makin dalam belajar JavaScript!)
  if (!tebakan) {
    // Jika kolom input kosong
    pesanGame.innerHTML = "⚠️ Masukkan angka dulu, mas bro!";
    pesanGame.style.color = "orange";
  } else if (tebakan === angkaRahasia) {
    // Jika tebakan BENAR 🎉
    pesanGame.innerHTML = "🎉 TOP MARKOTOP! Tebakanmu BENAR!";
    pesanGame.style.color = "green";
    tombolCek.disabled = true; // Matikan tombol karena game sudah selesai
  } else if (tebakan > angkaRahasia) {
    // Jika tebakan terlalu besar
    pesanGame.innerHTML = "📈 Terlalu TINGGI! Coba angka lebih kecil.";
    pesanGame.style.color = "crimson";
  } else if (tebakan < angkaRahasia) {
    // Jika tebakan terlalu kecil
    pesanGame.innerHTML = "📉 Terlalu RENDAH! Coba angka lebih besar.";
    pesanGame.style.color = "crimson";
  }
});
