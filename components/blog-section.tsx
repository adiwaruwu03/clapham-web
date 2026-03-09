"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowRight, ArrowUpRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { blogData } from "@/lib/blog-data"

interface BlogSectionProps {
  lang?: "id" | "en"
}

export function BlogSection({ lang = "id" }: BlogSectionProps) {
  return (
    <section id="blog" className="bg-background py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex items-end justify-between">
          <div>
            <p className="text-sm font-medium uppercase tracking-widest text-muted-foreground">
              {lang === "id" ? "Insight & Cerita" : "Insight & Stories"}
            </p>
            <h2 className="mt-3 font-serif text-3xl font-bold text-foreground md:text-4xl">
              {lang === "id" ? "Insight & Cerita" : "Insight & Stories"}
            </h2>
          </div>
          <Button
            variant="outline"
            className="hidden rounded-full gap-2 md:inline-flex"
          >
            {lang === "id" ? "Baca Selengkapnya" : "Read More"}
            <ArrowRight className="h-4 w-4" />
          </Button>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {blogData.map((article) => (
            <Link
              key={article.slug}
              href={`/blog/${article.slug}`}
              className="group block"
            >
              <article>
                <div className="relative aspect-[16/10] overflow-hidden rounded-xl">
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 flex items-end bg-gradient-to-t from-foreground/50 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <div className="flex w-full items-center justify-between p-5">
                      <span className="text-sm font-medium text-background">
                        {lang === "id" ? "Baca Artikel" : "Read Article"}
                      </span>
                      <ArrowUpRight className="h-4 w-4 text-background" />
                    </div>
                  </div>
                </div>
                <div className="mt-5">
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                      {article.category}
                    </span>
                    <span className="text-xs text-border">|</span>
                    <span className="text-xs text-muted-foreground">
                      {article.date}
                    </span>
                  </div>
                  <h3 className="mt-3 text-lg font-semibold leading-snug text-foreground group-hover:underline text-pretty">
                    {article.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {article.excerpt}
                  </p>
                </div>
              </article>
            </Link>
          ))}
        </div>

        <div className="mt-10 flex justify-center md:hidden">
          <Button variant="outline" className="rounded-full gap-2">
            {lang === "id" ? "Baca Selengkapnya" : "Read More"}
            <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  )
}