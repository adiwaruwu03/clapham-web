"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Send } from "lucide-react"

export function ContactSection() {
  const [isHuman, setIsHuman] = useState(false)
  const [status, setStatus] = useState("")

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (!isHuman) {
      setStatus("Harap centang verifikasi bahwa Anda bukan robot.")
      return
    }

    const form = e.currentTarget

    const name = (form.elements.namedItem("name") as HTMLInputElement).value
    const org = (form.elements.namedItem("org") as HTMLInputElement).value
    const email = (form.elements.namedItem("email") as HTMLInputElement).value
    const date = (form.elements.namedItem("date") as HTMLInputElement).value
    const message = (form.elements.namedItem("message") as HTMLTextAreaElement).value

    const text = `Halo Clapham,%0A%0A
Nama: ${name}%0A
Organisasi: ${org}%0A
Email: ${email}%0A
Perkiraan Tanggal: ${date}%0A%0A
Pesan:%0A${message}`

    const whatsappURL = `https://wa.me/6285353729190?text=${text}`

    window.open(whatsappURL, "_blank")

    setStatus("Mengalihkan ke WhatsApp...")
  }

  return (
    <section id="contact" className="bg-card py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-16 lg:grid-cols-2">
          <div>
            <p className="text-sm font-medium uppercase tracking-widest text-muted-foreground">
              Get In Touch
            </p>
            <h2 className="mt-3 font-serif text-3xl font-bold text-foreground md:text-4xl">
              {"Let's Collaborate"}
            </h2>
            <p className="mt-6 text-base leading-relaxed text-muted-foreground max-w-md">
              Ceritakan ide event Anda, kami akan membantu membentuknya menjadi pengalaman yang bermakna.
            </p>
          </div>

          <form
            onSubmit={handleSubmit}
            className="space-y-6 rounded-xl border border-border bg-background p-8"
          >
            <div className="grid gap-6 sm:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="name">Nama</Label>
                <Input id="name" name="name" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="org">Organisasi</Label>
                <Input id="org" name="org" />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                name="email"
                type="email"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="date">Perkiraan Tanggal</Label>
              <Input id="date" name="date" type="date" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="message">Pesan</Label>
              <Textarea
                id="message"
                name="message"
                className="min-h-[120px] resize-none"
                required
              />
            </div>

            {/* Verifikasi sederhana */}
            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                checked={isHuman}
                onChange={(e) => setIsHuman(e.target.checked)}
              />
              <Label>Saya bukan robot</Label>
            </div>

            <Button type="submit" className="w-full rounded-full gap-2" size="lg">
              <Send className="h-4 w-4" />
              {"Let's Collaborate"}
            </Button>

            {status && (
              <p className="text-sm text-muted-foreground mt-2">{status}</p>
            )}
          </form>
        </div>
      </div>
    </section>
  )
}