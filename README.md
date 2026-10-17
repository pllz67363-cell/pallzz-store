# PALLZZ STORE — Website

Website statis responsif bertema gelap/neon biru. Tidak membutuhkan framework atau instalasi.

## Isi folder
- `index.html` — struktur dan konten halaman
- `style.css` — desain responsif, animasi, dan tata letak
- `script.js` — menu mobile, filter galeri, formulir pesanan, dan tautan WhatsApp
- `pallzz-logo.png` — gambar logo asli yang diberikan pengguna, dipakai tanpa menggambar ulang

## Cara mencoba
1. Ekstrak ZIP.
2. Buka `index.html` di browser.
3. Uji tombol WhatsApp dan formulir. Formulir menyusun pesan lalu membuka WhatsApp; pengguna tetap perlu menekan tombol Kirim.

## WAJIB diedit sebelum publikasi
Buka `script.js` dan ubah objek `STORE`:
- `whatsapp`: sudah diisi `628812940024`, hasil konversi dari nomor yang diberikan. Pastikan nomor ini benar dan terdaftar di WhatsApp.
- `address`: isi alamat toko yang benar, atau biarkan kosong jika tidak ingin menampilkan alamat.
- `mapsUrl`: masukkan tautan berbagi Google Maps untuk lokasi yang benar.

Edit nama kategori dan harga contoh di `index.html`. Harga yang ada sekarang hanyalah contoh desain. Kotak galeri juga masih visual demo; ganti dengan foto/video asli sebelum website dipublikasikan.

## Cara mengganti galeri
Untuk foto, ganti isi elemen `.gallery-art` dengan tag `<img src="images/nama-foto.jpg" alt="Deskripsi foto">` dan letakkan gambar dalam folder `images`. Untuk video, gunakan `<video controls playsinline><source src="videos/video-toko.mp4" type="video/mp4"></video>` dan simpan video di folder `videos`. Sesuaikan CSS agar media memenuhi kotak galeri.

## Publikasi gratis dengan GitHub Pages
1. Buat akun di GitHub jika belum punya.
2. Buat repository baru, misalnya `pallzz-store`.
3. Unggah `index.html`, `style.css`, `script.js` dan folder media jika ada ke repository.
4. Buka **Settings → Pages**.
5. Di bagian **Build and deployment**, pilih **Deploy from a branch**, branch `main`, folder `/(root)`, lalu **Save**.
6. Tunggu proses publikasi dan buka URL yang diberikan GitHub Pages (biasanya `https://USERNAME.github.io/pallzz-store/`).
7. Setelah mengubah file, unggah perubahan dan tunggu Pages selesai memperbarui situs.

Alternatif: Netlify Drop atau layanan hosting statis lain. Jangan masukkan kata sandi, data pelanggan, atau informasi rahasia ke dalam file frontend.

## Catatan
- Ini adalah website statis: tidak memiliki dashboard admin, database pesanan, pembayaran online, atau sistem stok. Pesanan diarahkan ke WhatsApp.
- Peta dan alamat belum dikonfigurasi karena alamat bisnis yang benar belum diberikan.
- Google Fonts memerlukan internet; font cadangan tetap tersedia jika tidak termuat.
