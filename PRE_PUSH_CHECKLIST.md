# Pre-Push Checklist

- Tidak ada data sensitif hardcoded di kode, komponen, route server, atau script.
- File `.env`, `.env.local`, `.env.migrate.local`, dan `.env.*.local` tidak ikut commit.
- `NEXT_PUBLIC_SUPABASE_ANON_KEY` hanya dipakai sebagai publishable key.
- `SUPABASE_SERVICE_ROLE_KEY` hanya dipakai di server atau script lokal, bukan di frontend/client component.
- `.env.example` sudah berisi semua variable yang dibutuhkan dengan placeholder aman.
- Build output seperti `.next/`, `dist/`, `build/`, `coverage/`, dan `node_modules/` tidak ikut ke GitHub.
- Repository aman untuk dipublikasikan tanpa membocorkan key, token, password, atau secret lain.
