# QuickNote: Aplikasi To-Do List CRUD

Sebuah aplikasi web CRUD (Create, Read, Update, Delete) yang sederhana dan responsif untuk manajemen tugas harian. Aplikasi ini menyimpan semua data di `localStorage` browser, sehingga tidak memerlukan *database* atau *backend*.

Proyek ini dibuat sebagai *Capstone Project* untuk program HACKTIV8 & IBM, dengan fokus mendemonstrasikan pengembangan web front-end yang efisien dengan bantuan AI *code-assistant*.

---

## 🚀 Fitur (Features)

Aplikasi ini mengimplementasikan fungsionalitas CRUD penuh dengan beberapa tambahan modern:

* **Create:** Menambahkan tugas baru melalui formulir input.
* **Read:** Menampilkan semua tugas yang ada dalam sebuah daftar.
* **Update:** Mengubah teks tugas yang sudah ada melalui tombol "Edit".
* **Delete:** Menghapus tugas dari daftar dengan tombol "Hapus" dan konfirmasi.
* **Tandai Selesai (Toggle Complete):** Cukup klik pada teks tugas untuk menandainya sebagai selesai (dengan efek coretan yang tebal).
* **Penyimpanan Persisten:** Tugas tetap tersimpan di `localStorage` bahkan setelah browser ditutup atau di-*refresh*.
* **Jam & Tanggal Real-Time:** Menampilkan jam, tanggal, dan hari secara *real-time* di bagian atas aplikasi.
* **Tampilan "Daftar Kosong":** Menampilkan pesan ramah ("Selamat! Tidak ada tugas hari ini.") saat tidak ada tugas dalam daftar.
* **Animasi Halus:** Setiap tugas baru yang ditambahkan akan muncul dengan efek *fade-in* yang halus.

---

## 🛠️ Teknologi yang Digunakan

* **HTML5:** Untuk struktur dasar dan konten web.
* **CSS3:** Untuk *styling* modern, *layout* (Flexbox), animasi, dan responsivitas.
* **JavaScript (Vanilla JS ES6+):** Untuk semua logika aplikasi, manipulasi DOM, dan manajemen *event*.
* **Browser `localStorage`:** Digunakan sebagai *database* sisi klien untuk menyimpan data tugas.

---

## Setup Instructions

Untuk menjalankan proyek ini secara lokal:

1.  Clone repositori ini: `git clone [URL_GITHUB_ANDA_DI_SINI]`
2.  Masuk ke direktori proyek: `cd [NAMA_FOLDER_ANDA]`
3.  Buka file `index.html` langsung di browser pilihan Anda (misalnya, Google Chrome, Firefox).

Tidak ada *dependencies* atau *build step* yang diperlukan.

---

## 🤖 Penjelasan Dukungan AI (AI Support Explanation)

Sesuai arahan proyek, AI (dalam hal ini, IBM Granite) tidak disertakan dalam produk akhir, namun digunakan secara ekstensif selama fase pengembangan untuk mempercepat, meningkatkan, dan mendokumentasikan kode.

Penjelasan ini mencakup dampak nyata penggunaan AI terhadap pengembangan aplikasi.

### 1. Pembuatan Kode Dasar (Boilerplate CRUD)

* **Tantangan:** Saya perlu membuat fondasi kode yang solid untuk operasi CRUD (Create, Read, Update, Delete) di *client-side* menggunakan JavaScript dan `localStorage`.
* **Prompt (Perintah) ke AI:** "Buatkan saya *snippet* kode awal untuk 4 fungsi dasar (Create, Read, Update, Delete) menggunakan JavaScript dan `localStorage` untuk aplikasi To-Do List."
* **Hasil:** AI memberikan *boilerplate* (kode dasar) yang fungsional untuk `index.html` dan `app.js`. Ini termasuk struktur HTML, fungsi `getTodos()` dan `saveTodos()` di `localStorage`, fungsi `renderTodos()` (Read), *event listener* formulir (Create), dan pola *event delegation* untuk tombol Edit (Update) dan Hapus (Delete).
* **Dampak Nyata:** Ini menghemat waktu pengembangan awal saya secara signifikan. Saya tidak perlu menulis semua logika dasar dari nol dan bisa langsung fokus pada *styling* dan fungsionalitas inti.

### 2. Pembuatan Styling (CSS)

* **Tantangan:** Aplikasi saya sudah fungsional, tetapi tampilannya sangat polos (plain HTML) dan tidak profesional.
* **Prompt (Perintah) ke AI:** "Tolong buatkan *styling* CSS dasar untuk aplikasi To-Do List saya agar terlihat modern dan rapi."
* **Hasil:** AI memberikan satu blok kode CSS (`style.css`) yang lengkap. Ini mencakup *layout* yang terpusat, *styling* modern untuk formulir dan tombol, serta pewarnaan yang jelas untuk tombol "Edit" dan "Hapus".
* **Dampak Nyata:** Saya bisa langsung mendapatkan tampilan yang profesional tanpa menghabiskan waktu berjam-jam untuk *trial-and-error* CSS. Ini memungkinkan saya fokus pada fungsionalitas dan persiapan *deployment*.