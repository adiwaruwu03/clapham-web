"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Send } from "lucide-react"

interface ContactSectionProps {
  lang?: "id" | "en"
}

export function ContactSection({ lang = "id" }: ContactSectionProps) {
  const [isHuman, setIsHuman] = useState(false)
  const [status, setStatus] = useState("")

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (!isHuman) {
      setStatus(
        lang === "id"
          ? "Harap centang verifikasi bahwa Anda bukan robot."
          : "Please check the verification that you are not a robot."
      )
      return
    }

    const form = e.currentTarget
    const name = (form.elements.namedItem("name") as HTMLInputElement).value
    const org = (form.elements.namedItem("org") as HTMLInputElement).value
    const email = (form.elements.namedItem("email") as HTMLInputElement).value
    const date = (form.elements.namedItem("date") as HTMLInputElement).value
    const message = (form.elements.namedItem("message") as HTMLTextAreaElement).value

    const text =
      lang === "id"
        ? `Halo Clapham,%0A%0ANama: ${name}%0APerusahaan: ${org}%0AEmail: ${email}%0APerkiraan Tanggal: ${date}%0A%0ADetail Kebutuhan:%0A${message}`
        : `Hello Clapham,%0A%0AName: ${name}%0ACompany: ${org}%0AEmail: ${email}%0AEstimated Date: ${date}%0A%0ADetail Request:%0A${message}`

    const whatsappURL = `https://wa.me/6285353729190?text=${text}`
    window.open(whatsappURL, "_blank")

    setStatus(lang === "id" ? "Mengalihkan ke WhatsApp..." : "Redirecting to WhatsApp...")
  }

  return (
    <section id="contact" className="bg-card py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-16 lg:grid-cols-2">
          <div>
            <p className="text-sm font-medium uppercase tracking-widest text-muted-foreground">
              {lang === "id" ? "Get In Touch" : "Get In Touch"}
            </p>
            <h2 className="mt-3 font-serif text-3xl font-bold text-foreground md:text-4xl">
              {lang === "id" ? "Let's Collaborate" : "Let's Collaborate"}
            </h2>
            <p className="mt-6 text-base leading-relaxed text-muted-foreground max-w-md">
              {lang === "id"
                ? "Sampaikan konsep dan tujuan acara Anda. Tim kami akan membantu mengembangkan strategi, desain, dan eksekusi untuk menciptakan pengalaman yang relevan dan memberikan dampak nyata."
                : "Share your event concept and goals. Our team will help develop strategy, design, and execution to create meaningful experiences that deliver real impact."}
            </p>
          </div>

          <form
            onSubmit={handleSubmit}
            className="space-y-6 rounded-xl border border-border bg-background p-8"
          >
            <div className="grid gap-6 sm:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="name">{lang === "id" ? "Nama" : "Name"}</Label>
                <Input id="name" name="name" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="org">{lang === "id" ? "Nama Perusahaan" : "Company Name"}</Label>
                <Input id="org" name="org" />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">{lang === "id" ? "Email" : "Email"}</Label>
              <Input id="email" name="email" type="email" required />
            </div>

            <div className="space-y-2">
              <Label htmlFor="date">{lang === "id" ? "Perkiraan Tanggal" : "Estimated Date"}</Label>
              <Input id="date" name="date" type="date" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="message">{lang === "id" ? "Detail Kebutuhan" : "Request Details"}</Label>
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
              <Label>{lang === "id" ? "Saya bukan robot" : "I am not a robot"}</Label>
            </div>

            <Button type="submit" className="bg-[#2F6DB3] w-full rounded-full gap-2" size="lg">
              <Send className="h-4 w-4" />
              {lang === "id" ? "Let's Collaborate" : "Let's Collaborate"}
            </Button>

            {status && <p className="text-sm text-muted-foreground mt-2">{status}</p>}
          </form>
        </div>
      </div>
    </section>
  )
}