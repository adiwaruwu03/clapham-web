"use client"

export default function PartnerClapham() {
  return (
    <section id="partner" className="py-24 bg-background">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        
        {/* Heading */}
        <div className="mb-12 text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
            Our Partner
          </p>
          <h2 className="mt-4 text-3xl font-serif font-bold tracking-tight text-foreground sm:text-4xl">
            Clapham Strategic Collaboration
          </h2>
        </div>

        {/* Landscape Image */}
        <div className="relative overflow-hidden rounded-3xl shadow-2xl">
          <img
            src="/images/partners.png"
            alt="Clapham Partner"
            className="w-full h-auto object-cover"
          />
        </div>

      </div>
    </section>
  )
}