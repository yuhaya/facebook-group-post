# Siaran Kumpulan Facebook (pemasaran matriks)

> Satu tetapan: banyak kumpulan × banyak teks × banyak akaun pelayar fingerprint. Jangkauan lebih luas, kurang salin-tampal.

**Languages:** [English](README.md) · [简体中文](README.zh-CN.md) · [繁體中文](README.zh-TW.md) · [日本語](README.ja.md) · [한국어](README.ko.md) · [ไทย](README.th.md) · [Bahasa Indonesia](README.id.md) · [Bahasa Melayu](README.ms.md) · [Tiếng Việt](README.vi.md) · [Deutsch](README.de.md) · [Español](README.es.md) · [Português](README.pt-BR.md) · [Français](README.fr.md) · [Русский](README.ru.md)

**Repositori:** [https://github.com/yuhaya/facebook-group-post](https://github.com/yuhaya/facebook-group-post) · `git@github.com:yuhaya/facebook-group-post.git`

---

## Apa yang dilakukan automasi ini

Projek untuk klien desktop **AutoAI**. Selepas diimport:

| Keupayaan | Hasil |
|---|---|
| **Siar dalam kumpulan Facebook** | Buka kumpulan dan siarkan teks + imej, atau teks + satu video |
| **Skala matriks** | Banyak URL + banyak teks → **setiap kumpulan mendapat semua teks** (tugas = kumpulan × teks) |
| **Pelayar berbilang akaun** | Tugas dibahagi **round-robin** ke fingerprint dipilih (1 pelayar = 1 akaun) |
| **Kolam media** | Kolam imej (N setiap siaran, berulang) atau video (1 setiap siaran) |
| **Tanpa nama pilihan** | Hidupkan “Siar tanpa nama” jika komposer ada suis |
| **Jadual seperti manusia** | Had harian, selang rawak, tetingkap masa (menyokong merentas malam) |

### Mengapa “matriks”

Pemasaran kumpulan manual sukar diskalakan.

Contoh:

- **20 kumpulan × 5 teks = 100 tugas**, dijadualkan merentas beberapa pelayar  
- Tawaran sama dengan copy/media berbeza ke komuniti berbeza  
- Tetingkap malam supaya siaran apabila audiens dalam talian  

**Larian production hampir tidak guna token AI.** Token terutamanya untuk bangunkan, sesuaikan atau baiki melalui ejen.

> Guna hanya akaun/kumpulan milik anda atau yang dibenarkan. Patuhi peraturan Facebook dan undang-undang tempatan.

---

## Keperluan

- **Klien desktop AutoAI** ([Muat turun](https://www.xrobot.tech/ms/download/))
  - **Windows:** hanya x86 / x64 (bukan ARM)
  - **macOS:** hanya Apple silicon (siri M; bukan Intel)
- Akaun AutoAI ([Daftar](https://www.xrobot.tech/ms/register/) · [Log masuk](https://www.xrobot.tech/ms/login/))
- Sekurang-kurangnya satu **pelayar fingerprint** yang sudah log masuk Facebook
- **Kuota:** AutoAI beri **1 persekitaran fingerprint percuma**. Untuk matriks / berbilang akaun, **beli lagi** dalam klien atau [pusat akaun](https://www.xrobot.tech/ms/account/)

---

## Mula pantas

### 1. Muat turun klien

👉 [https://www.xrobot.tech/ms/download/](https://www.xrobot.tech/ms/download/)

### 2. Daftar dan log masuk

1. [Daftar](https://www.xrobot.tech/ms/register/) (e-mel + kod / kata laluan).
2. Log masuk web pilihan. **Log masuk dengan akaun sama dalam klien desktop.**

### 3. Sediakan pelayar Facebook

AutoAI disertakan **1 persekitaran fingerprint percuma** (**Pelayar platform**). Cukup untuk satu akaun. Matriks lebih baik dengan **beberapa pelayar (akaun)** — beli kuota dan cipta lebih persekitaran mengikut keperluan.

1. Bar sisi **Pelayar**.
2. Utamakan **Pelayar platform** (percuma terbina); BitBrowser / AdsPower juga boleh.
3. **Cipta** → **Mula** → hidupkan **Cast** jika mahu lihat skrin.
4. **Log masuk Facebook secara manual**.
5. Lebih akaun: beli kuota → cipta pelayar → log masuk setiap satu → pilih semua semasa cipta kumpulan tugas.

### 4. Import dari GitHub

1. **Automasi → Import**.
2. Tampal: `https://github.com/yuhaya/facebook-group-post` (atau `yuhaya/facebook-group-post` / `git@github.com:yuhaya/facebook-group-post.git`).
3. **Mula import**.
4. Muncul di **Automasi → Automasi saya**.

### 5. Cipta kumpulan tugas (larian matriks)

1. **Automasi saya**.
2. **Klik badan kad** (bukan butang pakar di bawah).
3. URL kumpulan, teks (`==sep==`), pelayar, media, jadual.
4. **Cipta** → semak masa dan bilangan.
5. Hidupkan suis induk **Tugas** kanan atas jika diminta.
6. Pantau di **Pengurusan kumpulan tugas**.

**Peraturan:** `bilangan kumpulan × bilangan teks`. Kemudian round-robin ke pelayar.

---

## Medan borang

| Medan | Maksud |
|---|---|
| URL kumpulan | Satu URL setiap baris; setiap kumpulan mendapat semua teks |
| Teks | Asingkan dengan `==sep==` |
| Siar tanpa nama | On → hidupkan suis jika ada |
| Jenis media | Imej (banyak) / Video (satu setiap siaran) |
| Imej / Video | Kolam ikut urutan lalu berulang |
| Imej setiap siaran | Berapa dari kolam |
| Pelayar | Persekitaran fingerprint yang laksana |
| Had harian | Maks setiap pelayar dalam tetingkap |
| Selang min / max | Tunggu rawak (saat) |
| Mula / akhir harian | **mula > akhir** = merentas malam (cth `22:00`→`06:00`) |

---

## Suai sendiri

Skrip rasmi mungkin tidak sepadan bahasa UI / wilayah anda — sesuaikan dengan ejen terbina.

### Top up kuasa pengiraan (untuk sembang ejen)

Production ≈ 0 token. **Ubah / baiki melalui ejen** guna **kuasa pengiraan AI**.

1. Di laman **top up baki USD**.  
2. Dalam klien, profil / dompet → **Beli kuasa pengiraan AI**.  
3. Kemudian buka sembang ejen.

### Minta ejen

**A. Mod pembangunan** — kad → **Pakar automasi pelayar** → pelayar nyahpepijat yang sudah mula → terangkan → **cuba skrip**.

**B. Mod penyelesaian masalah** — **Pengurusan kumpulan** → **Siasat dan baiki**.

### Lanjut

- [Mula](https://www.xrobot.tech/blog/ms/guide/getting-started) · [Bina dari sifar](https://www.xrobot.tech/blog/ms/guide/custom-automation)
- [Kes](https://www.xrobot.tech/ms/cases/) · [Muat turun](https://www.xrobot.tech/ms/download/) · [Daftar](https://www.xrobot.tech/ms/register/) · [Log masuk](https://www.xrobot.tech/ms/login/)

---

## Tip

- Utamakan **beberapa pelayar (akaun)**. Cuba dulu yang **percuma**; beli slot fingerprint bila scale.  
- Selang dan had longgar; tetingkap malam untuk siang di luar negara.  
- Pelbagaikan teks dan media.  
- Sebelum batch besar, semak log masuk Facebook.  
- Production ≈ **0 token**.

---

## Maklumat projek

| | |
|---|---|
| ID pakej | `fb-group-post` |
| Nama paparan | Siaran Kumpulan Facebook |
| Runtime | AutoAI desktop (automasi pelayar) |

`AGENTS.md` untuk pembangun ejen dalam klien. Pelanggan ikut README ini.

---

## Sokongan

- Laman: [https://www.xrobot.tech](https://www.xrobot.tech)

Jika gagal, utamakan **mod pembangunan / penyelesaian masalah**.
