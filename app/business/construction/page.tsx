"use client"

import Link from "next/link"
import { ArrowRight, Hammer, PaintBucket, FolderKanban, HardHat, ChevronRight } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { useLanguage } from "@/lib/language-context"

const icons = [Hammer, PaintBucket, FolderKanban, HardHat]

export default function ConstructionPage() {
  const { t } = useLanguage()

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 pt-16">
        {/* Hero */}
        <section className="relative py-24 lg:py-32">
          <div className="absolute inset-0 bg-secondary/50" />
          <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
            <div className="max-w-3xl">
              <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
                <Link href="/" className="hover:text-foreground transition-colors">
                  {t.common.home}
                </Link>
                <ChevronRight className="h-4 w-4" />
                <Link href="/business/construction" className="hover:text-foreground transition-colors">
                  {t.construction.breadcrumb}
                </Link>
                <ChevronRight className="h-4 w-4" />
                <span className="text-foreground">{t.nav.construction}</span>
              </nav>
              <h1 className="font-serif text-4xl font-medium tracking-tight text-foreground sm:text-5xl text-balance">
                {t.construction.title}
              </h1>
              <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
                {t.construction.description}
              </p>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-24 lg:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid gap-8 md:grid-cols-2">
              {t.construction.services.map((service, index) => {
                const Icon = icons[index]
                return (
                  <Card key={service.title} className="border-border">
                    <CardContent className="p-8">
                      <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-secondary">
                        <Icon className="h-6 w-6 text-foreground" />
                      </div>
                      <h3 className="text-xl font-semibold text-foreground">{service.title}</h3>
                      <p className="mt-3 text-muted-foreground leading-relaxed">{service.description}</p>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="bg-secondary py-24 lg:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
              <div className="order-2 lg:order-1">
                <img src="/modern-construction-site-with-cranes-and-professio.jpg" alt="Construction site" className="rounded-lg shadow-xl" />
              </div>
              <div className="order-1 lg:order-2">
                <h2 className="font-serif text-3xl font-medium tracking-tight text-foreground sm:text-4xl">
                  {t.construction.processTitle}
                </h2>
                <div className="mt-6 space-y-4 text-muted-foreground leading-relaxed">
                  <p>{t.construction.processText1}</p>
                  <p>{t.construction.processText2}</p>
                </div>
                <ul className="mt-8 space-y-3">
                  {t.construction.processPoints.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <div className="mt-2 h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0" />
                      <span className="text-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 lg:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="font-serif text-3xl font-medium tracking-tight text-foreground sm:text-4xl">
                {t.construction.exploreOther}
              </h2>
              <div className="mt-10 flex flex-wrap justify-center gap-4">
                <Button asChild variant="outline">
                  <Link href="/business/real-estate">{t.nav.realEstate}</Link>
                </Button>
                <Button asChild variant="outline">
                  <Link href="/business/financial-services">{t.nav.financialServices}</Link>
                </Button>
                <Button asChild variant="outline">
                  <Link href="/business/investments">{t.nav.investments}</Link>
                </Button>
              </div>
              <div className="mt-8">
                <Button asChild size="lg">
                  <Link href="/contact">
                    {t.construction.discussProject}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
