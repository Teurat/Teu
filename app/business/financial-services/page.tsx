"use client"

import Link from "next/link"
import { ArrowRight, Calculator, Landmark, PiggyBank, FileCheck, ChevronRight } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { useLanguage } from "@/lib/language-context"

const icons = [Calculator, Landmark, PiggyBank, FileCheck]

export default function FinancialServicesPage() {
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
                <Link href="/business/financial-services" className="hover:text-foreground transition-colors">
                  {t.financial.breadcrumb}
                </Link>
                <ChevronRight className="h-4 w-4" />
                <span className="text-foreground">{t.nav.financialServices}</span>
              </nav>
              <h1 className="font-serif text-4xl font-medium tracking-tight text-foreground sm:text-5xl text-balance">
                {t.financial.title}
              </h1>
              <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
                {t.financial.description}
              </p>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-24 lg:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid gap-8 md:grid-cols-2">
              {t.financial.services.map((service, index) => {
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

        {/* Additional Services */}
        <section className="border-t border-border py-16">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <h3 className="text-xl font-semibold text-foreground mb-8">{t.financial.additionalTitle}</h3>
            <div className="grid gap-6 md:grid-cols-2">
              {t.financial.additionalServices.map((service) => (
                <div key={service.title} className="flex gap-4">
                  <div className="mt-2 h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0" />
                  <div>
                    <h4 className="font-medium text-foreground">{service.title}</h4>
                    <p className="mt-1 text-sm text-muted-foreground">{service.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Expertise */}
        <section className="bg-secondary py-24 lg:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
              <div>
                <h2 className="font-serif text-3xl font-medium tracking-tight text-foreground sm:text-4xl">
                  {t.financial.expertiseTitle}
                </h2>
                <div className="mt-6 space-y-4 text-muted-foreground leading-relaxed">
                  <p>{t.financial.expertiseText1}</p>
                  <p>{t.financial.expertiseText2}</p>
                </div>
                <ul className="mt-8 space-y-3">
                  {t.financial.expertisePoints.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <div className="mt-2 h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0" />
                      <span className="text-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <img src="/professional-financial-advisor-meeting-with-client.jpg" alt="Financial consultation" className="rounded-lg shadow-xl" />
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 lg:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="font-serif text-3xl font-medium tracking-tight text-foreground sm:text-4xl">
                {t.financial.exploreOther}
              </h2>
              <div className="mt-10 flex flex-wrap justify-center gap-4">
                <Button asChild variant="outline">
                  <Link href="/business/real-estate">{t.nav.realEstate}</Link>
                </Button>
                <Button asChild variant="outline">
                  <Link href="/business/construction">{t.nav.construction}</Link>
                </Button>
                <Button asChild variant="outline">
                  <Link href="/business/investments">{t.nav.investments}</Link>
                </Button>
              </div>
              <div className="mt-8">
                <Button asChild size="lg">
                  <Link href="/contact">
                    {t.financial.scheduleConsultation}
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
