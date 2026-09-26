# Postingan Grup Facebook (pemasaran matriks)

> Satu kali setup: banyak grup × banyak teks × banyak akun di browser fingerprint. Jangkauan lebih luas, lebih sedikit copy-paste.

**Languages:** [English](README.md) · [简体中文](README.zh-CN.md) · [繁體中文](README.zh-TW.md) · [日本語](README.ja.md) · [한국어](README.ko.md) · [ไทย](README.th.md) · [Bahasa Indonesia](README.id.md) · [Bahasa Melayu](README.ms.md) · [Tiếng Việt](README.vi.md) · [Deutsch](README.de.md) · [Español](README.es.md) · [Português](README.pt-BR.md) · [Français](README.fr.md) · [Русский](README.ru.md)

**Repositori:** [https://github.com/yuhaya/facebook-group-post](https://github.com/yuhaya/facebook-group-post) · `git@github.com:yuhaya/facebook-group-post.git`

---

## Apa yang dilakukan otomatisasi ini

Proyek untuk klien desktop **AutoAI**. Setelah diimpor:

| Kemampuan | Hasil |
|---|---|
| **Posting ke grup Facebook** | Buka grup dan publikasikan teks + gambar, atau teks + satu video |
| **Skala matriks** | Banyak URL + banyak teks → **setiap grup mendapat semua teks** (tugas = grup × teks) |
| **Multi-akun browser** | Tugas dibagi **round-robin** ke fingerprint yang dipilih (1 browser = 1 akun) |
| **Pool media** | Pool gambar (N per post, berulang) atau video (1 per post) |
| **Anonim opsional** | Nyalakan “Posting anonim” jika composer punya sakelar |
| **Jadwal mirip manusia** | Batas harian, interval acak, jendela waktu (mendukung lintas malam) |

### Mengapa “matriks”

Pemasaran grup manual sulit diskalakan.

Contoh:

- **20 grup × 5 teks = 100 tugas**, dijadwalkan di beberapa browser  
- Penawaran yang sama dengan copy/media berbeda ke komunitas berbeda  
- Jendela malam agar posting saat audiens online  

**Eksekusi production hampir tidak memakai token AI.** Token terutama untuk develop, adaptasi, atau perbaikan lewat agen.

> Gunakan hanya akun/grup milik Anda atau yang diizinkan. Patuhi aturan Facebook dan hukum setempat.

---

## Persyaratan

- **Klien desktop AutoAI** ([Unduh](https://www.xrobot.tech/id/download/))
  - **Windows:** hanya x86 / x64 (bukan ARM)
  - **macOS:** hanya Apple silicon (seri M; bukan Intel)
- Akun AutoAI ([Daftar](https://www.xrobot.tech/id/register/) · [Masuk](https://www.xrobot.tech/id/login/))
- Minimal satu **browser fingerprint** yang sudah login Facebook
- **Kuota:** AutoAI memberi **1 lingkungan fingerprint gratis**. Untuk matriks / multi-akun, **beli tambahan** di klien atau [pusat akun](https://www.xrobot.tech/id/account/)

---

## Mulai cepat

### 1. Unduh klien

👉 [https://www.xrobot.tech/id/download/](https://www.xrobot.tech/id/download/)

### 2. Daftar dan masuk

1. [Daftar](https://www.xrobot.tech/id/register/) (email + kode / kata sandi).
2. Login web opsional. **Masuk dengan akun yang sama di klien desktop.**

### 3. Siapkan browser Facebook

AutoAI menyertakan **1 lingkungan fingerprint gratis** (**Browser platform**). Cukup untuk satu akun. Matriks lebih baik dengan **beberapa browser (akun)** — beli kuota dan buat lingkungan tambahan sesuai kebutuhan.

1. Sidebar **Browser**.
2. Utamakan **Browser platform** (gratis bawaan); BitBrowser / AdsPower juga bisa.
3. **Buat** → **Mulai** → nyalakan **Cast** jika ingin melihat layar.
4. **Login Facebook secara manual**.
5. Lebih banyak akun: beli kuota → buat browser → login masing-masing → pilih semua saat membuat grup tugas.

### 4. Impor dari GitHub

1. **Otomatisasi → Impor**.
2. Tempel: `https://github.com/yuhaya/facebook-group-post` (atau `yuhaya/facebook-group-post` / `git@github.com:yuhaya/facebook-group-post.git`).
3. **Mulai impor**.
4. Muncul di **Otomatisasi → Otomatisasi saya**.

### 5. Buat grup tugas (jalankan matriks)

1. **Otomatisasi saya**.
2. **Klik badan kartu** (bukan tombol ahli di bawah).
3. URL grup, teks (`==sep==`), browser, media, jadwal.
4. **Buat** → periksa waktu dan jumlah.
5. Nyalakan sakelar master **Tugas** kanan atas jika diminta.
6. Pantau di **Manajemen grup tugas**.

**Aturan:** `jumlah grup × jumlah teks`. Lalu round-robin ke browser.

---

## Bidang formulir

| Bidang | Arti |
|---|---|
| URL grup | Satu URL per baris; setiap grup mendapat semua teks |
| Teks | Pisahkan dengan `==sep==` |
| Posting anonim | On → nyalakan sakelar jika ada |
| Jenis media | Gambar (banyak) / Video (satu per post) |
| Gambar / Video | Pool berurutan lalu berulang |
| Gambar per post | Berapa dari pool |
| Browser | Lingkungan fingerprint yang menjalankan |
| Batas harian | Maks per browser dalam jendela |
| Interval min / max | Jeda acak (detik) |
| Mulai / akhir harian | **mulai > akhir** = lintas malam (mis. `22:00`→`06:00`) |

---

## Kustomisasi

Skrip resmi mungkin tidak cocok dengan bahasa UI / wilayah Anda — sesuaikan dengan agen bawaan.

### Isi daya komputasi (untuk chat agen)

Production ≈ 0 token. **Ubah / perbaiki lewat agen** memakai **komputasi AI**.

1. Di situs **isi saldo USD**.  
2. Di klien, profil / dompet → **Beli komputasi AI**.  
3. Lalu buka chat agen.

### Minta ke agen

**A. Mode pengembangan** — kartu → **Ahli otomatisasi browser** → browser debug yang sudah jalan → jelaskan → **uji coba skrip**.

**B. Mode pemecahan masalah** — **Manajemen grup** → **Selidiki dan perbaiki**.

### Selanjutnya

- [Mulai](https://www.xrobot.tech/blog/id/guide/getting-started) · [Bangun dari nol](https://www.xrobot.tech/blog/id/guide/custom-automation)
- [Kasus](https://www.xrobot.tech/id/cases/) · [Unduh](https://www.xrobot.tech/id/download/) · [Daftar](https://www.xrobot.tech/id/register/) · [Login](https://www.xrobot.tech/id/login/)

---

## Tips

- Utamakan **beberapa browser (akun)**. Coba dulu yang **gratis**; beli slot fingerprint saat scale.  
- Interval dan batas longgar; jendela malam untuk siang di luar negeri.  
- Variasikan teks dan media.  
- Sebelum batch besar, cek login Facebook.  
- Production ≈ **0 token**.

---

## Info proyek

| | |
|---|---|
| ID paket | `fb-group-post` |
| Nama tampilan | Postingan Grup Facebook |
| Runtime | AutoAI desktop (otomatisasi browser) |

`AGENTS.md` untuk pengembang agen di klien. Pelanggan ikuti README ini.

---

## Dukungan

- Situs: [https://www.xrobot.tech](https://www.xrobot.tech)

Jika gagal, utamakan **mode pengembangan / pemecahan masalah**.
