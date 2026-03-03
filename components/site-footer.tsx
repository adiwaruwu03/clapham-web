import { Download } from "lucide-react"
import { Button } from "@/components/ui/button"



const socials = [
  { label: "Instagram", href: "https://www.instagram.com/claphamco/" },
  { label: "LinkedIn", href: "linkedin.com/company/clapham-collective/" },
  { label: "YouTube", href: "https://www.youtube.com/@clapham1604" },
]

const kontak =[
  { label: "Email: hello@clapham.id", href: "hello@clapham.id"},
  { label: "Google Maps", href: "https://share.google/g08ZHD1iQsYRntBuh"},
  { label: "WhatsApp", href: "https://wa.me/6285353729190?text=Halo%20Clapham,%0A%0A%20Saya%20ingin%20berkolaborasi%20dengan%20Clapham.%20Bisakah%20kita%20diskusi%20lebih%20lanjut?"}
]

export function SiteFooter() {
  return (
    <footer className="bg-foreground py-16 text-background">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-4">
          {/* Brand */}
          <div className="md:col-span-1">
            <span className="font-serif text-xl font-bold">Clapham Collective</span>
            <p className="mt-4 text-sm leading-relaxed text-background/60">
              Manajemen event strategis untuk brand, organisasi, dan komunitas.
            </p>
          </div>

          

          {/* Social */}
          <div>
            <p className="text-xs font-medium uppercase tracking-widest text-background/40">
              Social Media
            </p>
            <ul className="mt-4 space-y-3">
              {socials.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-background/60 transition-colors hover:text-background"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="text-xs font-medium uppercase tracking-widest text-background/40">
              Kontak
            </p>
            <ul className="mt-4 space-y-3">
              {kontak.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-background/60 transition-colors hover:text-background"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
            
          </div>
        </div>

        <div className="mt-16 border-t border-background/10 pt-8">
          <p className="text-center text-xs text-background/40">
            &copy; {new Date().getFullYear()} Clapham Collective. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
