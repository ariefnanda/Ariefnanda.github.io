/**
 * Program JavaScript sederhana untuk Demonstrasi I/O
 * (Input/Output) dasar.
 *
 * Catatan: Fungsi 'prompt()' hanya bekerja di lingkungan browser.
 * Di lingkungan Node Terminal (Spck Pro), Anda perlu
 * menggunakan modul 'readline' atau sejenisnya.
 * Contoh ini mengasumsikan dijalankan di lingkungan Preview/Browser.
 */

// --- INPUT (I) ---
// Mengambil input dari pengguna. Ini akan memunculkan pop-up di browser.
const nama = prompt("Masukkan nama Anda:");

// --- PROSES ---
const waktuSaatIni = new Date().toLocaleTimeString();
let pesanSapaan;

if (nama) {
  pesanSapaan = `Halo, ${nama}!`;
} else {
  pesanSapaan = "Halo, Pengguna tanpa nama!";
}

const pesanLengkap = `${pesanSapaan} Sekarang jam ${waktuSaatIni}.`;

// --- OUTPUT (O) ---
// Menampilkan output ke Konsol Browser
console.log(pesanLengkap);

// Menampilkan output ke dalam elemen HTML (DOM)
// (Hanya akan berfungsi jika file JS ini dihubungkan ke file HTML)
try {
    const outputElement = document.createElement('p');
    outputElement.textContent = pesanLengkap;
    document.body.appendChild(outputElement);
    console.log("Output juga telah ditambahkan ke dokumen HTML.");
} catch (e) {
    console.log("Gagal menambahkan output ke DOM. Pastikan kode dijalankan di browser (mode Preview).");
}

// Catatan Tambahan
console.log("Untuk melihat hasil input dan output, buka 'Console' di mode Preview/Browser Anda.");