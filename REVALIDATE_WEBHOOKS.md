# Revalidate Webhook

Gunakan endpoint ini untuk mengosongkan cache `events` setelah data Supabase berubah:

```bash
POST /api/revalidate/events
Authorization: Bearer <REVALIDATE_SECRET>
```

Atau:

```bash
POST /api/revalidate/events?secret=<REVALIDATE_SECRET>
```

Efek endpoint:

- `revalidateTag("events")`
- `revalidatePath("/")`
- `revalidatePath("/events/[slug]", "page")`

Contoh `curl`:

```bash
curl -X POST http://localhost:3000/api/revalidate/events \
  -H "Authorization: Bearer your-secret"
```

Supabase bisa memanggil endpoint ini lewat Database Webhook ketika tabel `events`,
`event_content_blocks`, `event_highlights`, `event_gallery_images`, atau
`event_story_sections` mengalami `insert`, `update`, atau `delete`.
