import { Download } from "lucide-react"
import { Button } from "@/components/ui/button"

import { 
  Instagram, 
  Linkedin, 
  Youtube, 
  Mail, 
  MapPin, 
  MessageCircle 
} from "lucide-react"

const socials = [
  { icon: Instagram, href: "https://www.instagram.com/claphamco/" },
  { icon: Linkedin, href: "https://linkedin.com/company/clapham-collective/" },
  { icon: Youtube, href: "https://www.youtube.com/@clapham1604" },
]

const kontak = [
  { icon: Mail, href: "mailto:hello@clapham.id" },
  { icon: MapPin, href: "https://share.google/g08ZHD1iQsYRntBuh" },
  { icon: MessageCircle, href: "https://wa.me/6285353729190?text=Halo%20Clapham,%0A%0A%20Saya%20ingin%20berkolaborasi%20dengan%20Clapham." }
]

export function SiteFooter() {
  return (
    <footer className="bg-[#2F6DB3] py-16 text-background">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
       <div className="grid gap-12 md:grid-cols-3 justify-items-center text-center">

  {/* Brand */}
  <div>
    <span className="font-serif text-xl font-bold">
      Clapham Collective
    </span>
    <p className="mt-4 text-sm leading-relaxed text-background/60 max-w-xs mx-auto">
      Manajemen event strategis untuk brand, organisasi, dan komunitas.
    </p>
  </div>

  {/* Social */}
  <div>
    <p className="text-xs font-medium uppercase tracking-widest text-background/40">
      Social Media
    </p>
    <div className="mt-4 flex justify-center gap-6">
      {socials.map((item, index) => {
        const Icon = item.icon
        return (
          <a
            key={index}
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-background/60 hover:text-background transition"
          >
            <Icon size={30} />
          </a>
        )
      })}
    </div>
  </div>

  {/* Contact */}
  <div>
    <p className="text-xs font-medium uppercase tracking-widest text-background/40">
      Kontak
    </p>
    <div className="mt-4 flex justify-center gap-6">
      {kontak.map((item, index) => {
        const Icon = item.icon
        return (
          <a
            key={index}
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-background/60 hover:text-background transition"
          >
            <Icon size={30} />
          </a>
        )
      })}
    </div>
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