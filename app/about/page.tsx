"use client"

import Link from "next/link"
import { ArrowRight, Target, Eye, Award, Users } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { useLanguage } from "@/lib/language-context"

export default function AboutPage() {
  const { t } = useLanguage()

  const values = [
    {
      icon: Target,
      title: t.about.longTermFocus,
      description: t.about.longTermFocusDesc,
    },
    {
      icon: Eye,
      title: t.about.transparency,
      description: t.about.transparencyDesc,
    },
    {
      icon: Award,
      title: t.about.excellence,
      description: t.about.excellenceDesc,
    },
    {
      icon: Users,
      title: t.about.partnership,
      description: t.about.partnershipDesc,
    },
  ]

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 pt-16">
        {/* Hero Section */}
        <section className="relative py-24 lg:py-32">
          <div className="absolute inset-0 bg-secondary/50" />
          <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-4">{t.about.subtitle}</p>
              <h1 className="font-serif text-4xl font-medium tracking-tight text-foreground sm:text-5xl text-balance">
                {t.about.title}
              </h1>
              <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
                {t.about.description}
              </p>
            </div>
          </div>
        </section>

        {/* Company Overview */}
        <section className="py-24 lg:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
              <div>
                <h2 className="font-serif text-3xl font-medium tracking-tight text-foreground sm:text-4xl">
                  {t.about.companyTitle}
                </h2>
                <div className="mt-6 space-y-4 text-muted-foreground leading-relaxed">
                  <p>{t.about.companyText1}</p>
                  <p>{t.about.companyText2}</p>
                  <p>{t.about.companyText3}</p>
                </div>
                <div className="mt-8 p-6 bg-secondary rounded-lg">
                  <h3 className="font-semibold text-foreground">{t.about.companyDetails}</h3>
                  <dl className="mt-4 space-y-3 text-sm">
                    <div className="flex justify-between">
                      <dt className="text-muted-foreground">{t.about.legalName}</dt>
                      <dd className="font-medium text-foreground">Sternen FinImmo AG</dd>
                    </div>
                    <div className="flex justify-between">
                      <dt className="text-muted-foreground">{t.about.registeredOffice}</dt>
                      <dd className="font-medium text-foreground">Döttingen, {t.footer.company === "Unternehmen" ? "Schweiz" : "Switzerland"}</dd>
                    </div>
                    <div className="flex justify-between">
                      <dt className="text-muted-foreground">{t.about.cheNumber}</dt>
                      <dd className="font-medium text-foreground">CHE-101.307.157</dd>
                    </div>
                    <div className="flex justify-between">
                      <dt className="text-muted-foreground">{t.about.incorporated}</dt>
                      <dd className="font-medium text-foreground">25 Mai 2012</dd>
                    </div>
                  </dl>
                </div>
              </div>
              <div className="relative">
                <img src="/swiss-alps-landscape-with-modern-architecture--pro.jpg" alt="Swiss landscape" className="rounded-lg shadow-xl" />
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="bg-secondary py-24 lg:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="font-serif text-3xl font-medium tracking-tight text-foreground sm:text-4xl">{t.about.valuesTitle}</h2>
              <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
                {t.about.valuesDescription}
              </p>
            </div>

            <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {values.map((value) => (
                <Card key={value.title} className="bg-card border-border">
                  <CardContent className="p-6 text-center">
                    <div className="mx-auto mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                      <value.icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="font-semibold text-foreground">{value.title}</h3>
                    <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{value.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="py-24 lg:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="font-serif text-3xl font-medium tracking-tight text-foreground sm:text-4xl">
                {t.about.journeyTitle}
              </h2>
              <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
                {t.about.journeyDescription}
              </p>
            </div>

            <div className="mt-16 relative">
              <div className="absolute left-1/2 top-0 bottom-0 w-px bg-border hidden lg:block" />
              <div className="space-y-12">
                {t.about.timeline.map((item, index) => (
                  <div
                    key={item.year}
                    className={`relative lg:grid lg:grid-cols-2 lg:gap-8 ${index % 2 === 0 ? "" : "lg:flex-row-reverse"}`}
                  >
                    <div className={`${index % 2 === 0 ? "lg:text-right lg:pr-16" : "lg:col-start-2 lg:pl-16"}`}>
                      <span className="inline-block font-serif text-2xl font-medium text-primary">{item.year}</span>
                      <h3 className="mt-2 font-semibold text-foreground">{item.title}</h3>
                      <p className="mt-2 text-muted-foreground leading-relaxed">{item.description}</p>
                    </div>
                    <div className="hidden lg:block absolute left-1/2 top-0 -translate-x-1/2">
                      <div className="h-4 w-4 rounded-full bg-primary border-4 border-background" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-primary text-primary-foreground py-24 lg:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="font-serif text-3xl font-medium tracking-tight sm:text-4xl">{t.about.ctaTitle}</h2>
              <p className="mt-4 text-lg text-primary-foreground/80 leading-relaxed">
                {t.about.ctaDescription}
              </p>
              <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
                <Button asChild variant="secondary" size="lg">
                  <Link href="/business/real-estate">
                    {t.about.ourServices}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 bg-transparent"
                >
                  <Link href="/contact">{t.nav.contactUs}</Link>
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
