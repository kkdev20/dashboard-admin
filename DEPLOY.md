# Panduan Deploy ke Vercel dengan Nama "admin"

## Langkah-langkah Deploy

### 1. Login ke Vercel
- Buka https://vercel.com
- Login dengan akun GitHub Anda (recommended untuk auto-connect)

### 2. Import Project
1. Klik **"Add New Project"** atau **"Import Project"**
2. Pilih repository: **`kkdev20/dashboard-admin`**

### 3. Configure Project
Isi konfigurasi berikut:

#### Project Settings:
- **Project Name**: `admin` (ini yang akan muncul sebagai nama project di Vercel)
- **Framework Preset**: Next.js (auto-detect)
- **Root Directory**: `./` (default)
- **Build Command**: `npm run build` (default)
- **Output Directory**: `.next` (default)
- **Install Command**: `npm install` (default)

#### Environment Variables:
- Tidak perlu ditambahkan untuk saat ini (bisa ditambahkan nanti jika diperlukan)

### 4. Deploy
1. Pastikan semua settings sudah benar
2. Klik tombol **"Deploy"**
3. Tunggu proses build selesai (~2-5 menit)

### 5. Hasil
Setelah deploy selesai, aplikasi akan live di:
- **URL**: `https://admin.vercel.app` (atau `https://admin-xxx.vercel.app` jika nama sudah digunakan)
- **Custom Domain**: Bisa ditambahkan di Project Settings → Domains

## Catatan Penting

✅ **Nama Repository vs Nama Project:**
- Repository GitHub: `dashboard-admin` (tetap)
- Nama Project Vercel: `admin` (bisa di-set saat import)

✅ **Auto-Deploy:**
- Setelah setup pertama, setiap push ke branch `main` akan otomatis trigger deployment baru

✅ **Custom Domain:**
- Bisa ditambahkan di: **Project Settings → Domains**
- Pastikan DNS sudah di-configure dengan benar

## Troubleshooting

Jika ada error saat build:
1. Cek **Build Logs** di Vercel Dashboard
2. Pastikan Node.js version: 18+ (Vercel auto-detect)
3. Pastikan semua dependencies terinstall dengan benar

## Quick Commands (via CLI)

Alternatif menggunakan Vercel CLI:

```bash
npm install -g vercel
vercel login
vercel --name admin
```

Follow prompts di terminal.

