# Supabase Media Migration

Script ini meng-upload file gambar dari folder `public/` ke Supabase Storage lalu meng-update URL gambar di database.

## Yang Diupdate

- `blogs.image_url`
- `events.image_url`
- `event_story_sections.image_url`

Judul, slug, deskripsi, dan urutan story section tidak diubah. Script hanya mengganti URL gambar.

## Env Yang Diperlukan

Buat file `.env.migrate.local` di root project:

```env
NEXT_PUBLIC_SUPABASE_URL=https://your-project-ref.supabase.co
SUPABASE_SERVICE_ROLE_KEY=your_supabase_service_role_key
SUPABASE_STORAGE_BUCKET=media
```

Catatan:

- `SUPABASE_SERVICE_ROLE_KEY` hanya dipakai lokal saat migrasi.
- Jangan commit file `.env.migrate.local`.
- Nama bucket default adalah `media` kalau env bucket tidak diisi.
- Lihat `.env.example` untuk daftar env yang aman dibagikan ke repo.

## Persiapan Di Supabase

1. Buat bucket storage, misalnya `media`
2. Pastikan bucket bisa diakses publik jika ingin URL public langsung dipakai website
3. Pastikan data `blogs`, `events`, dan `event_story_sections` sudah terisi

## Menjalankan Script

```bash
npm run migrate:supabase-media
```

## Cara Kerja

- Script membaca mapping dari `lib/blog-data.ts` dan `lib/events-data.ts`
- File di-upload dengan path yang sama seperti di folder `public`
- Contoh:
  - `/images/2.avif` -> `media/images/2.avif`
  - `/comunity/Geraldez.jpg` -> `media/comunity/Geraldez.jpg`
- Setelah upload berhasil, database di-update ke public URL Supabase Storage

## Kalau Script Gagal Di Tengah Jalan

Script aman dijalankan ulang karena:

- upload memakai `x-upsert: true`
- update database memakai filter `slug` atau `id`

Jadi kamu cukup perbaiki error lalu jalankan lagi perintah yang sama.
