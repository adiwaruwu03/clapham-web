import { Button } from "@/components/ui/button"
import { Download, Play } from "lucide-react"

export function CompanyProfile() {
  return (
    <section className="bg-foreground py-24 text-background">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          
          {/* LEFT SIDE */}
          <div>
            <p className="text-sm font-medium uppercase tracking-widest text-background/50">
              Company Profile
            </p>

            <h2 className="mt-3 font-serif text-3xl font-bold leading-tight md:text-4xl">
              Lebih dari Sekadar Event: Kami Membangun Pengalaman
            </h2>

            <p className="mt-6 text-base leading-relaxed text-background/70">
              Sejak 2016, Clapham Collective telah menjadi ekosistem yang 
              menghubungkan ide, komunitas, dan dampak. Kami percaya setiap 
              event adalah kesempatan untuk menciptakan perubahan nyata.
            </p>
          </div>

          {/* RIGHT SIDE - YOUTUBE VIDEO */}
          <div className="relative aspect-video overflow-hidden rounded-2xl shadow-2xl bg-black">
  
            <iframe
              className="absolute top-1/2 left-1/2 min-w-full min-h-full -translate-x-1/2 -translate-y-1/2"
              src="https://www.youtube.com/embed/SLSkMD3GjQs?autoplay=1&mute=1&controls=0&loop=1&playlist=SLSkMD3GjQs&modestbranding=1&rel=0&vq=hd1080"
              title="Company Profile Video"
              frameBorder="0"
              allow="autoplay; fullscreen"
              allowFullScreen
            ></iframe>

            <div className="absolute inset-0 bg-black/20 pointer-events-none"></div>
          </div>

        </div>
      </div>
    </section>
  )
}