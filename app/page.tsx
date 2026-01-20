"use client"

import Link from "next/link"
import { ArrowRight, Building2, Hammer, TrendingUp, Shield, ChevronRight } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { useLanguage } from "@/lib/language-context"

export default function HomePage() {
  const { t } = useLanguage()

  const businessAreas = [
    {
      icon: Building2,
      title: t.nav.realEstate,
      description: t.home.realEstateDesc,
      href: "/business/real-estate",
    },
    {
      icon: Hammer,
      title: t.nav.construction,
      description: t.home.constructionDesc,
      href: "/business/construction",
    },
    {
      icon: TrendingUp,
      title: t.nav.financialServices,
      description: t.home.financialDesc,
      href: "/business/financial-services",
    },
    {
      icon: Shield,
      title: t.nav.investments,
      description: t.home.investmentsDesc,
      href: "/business/investments",
    },
  ]

  const stats = [
    { value: "2012", label: t.home.statsEstablished },
    { value: "CHE", label: t.home.statsSwissRegistered },
    { value: "12+", label: t.home.statsExperience },
    { value: "Döttingen", label: t.home.statsHeadquarters },
  ]

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 pt-16">
        {/* Hero Section */}
        <section className="relative min-h-[85vh] flex items-center">
          <div className="absolute inset-0 bg-primary/5" />
          <div className="absolute inset-0">
            <img
              src="/modern-swiss-architecture-building-with-mountains-.jpg"
              alt="Modern Swiss architecture"
              className="w-full h-full object-cover opacity-20"
            />
          </div>
          <div className="relative mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
            <div className="max-w-3xl">
              <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-4">
                {t.home.heroSubtitle}
              </p>
              <h1 className="font-serif text-4xl font-medium tracking-tight text-foreground sm:text-5xl lg:text-6xl text-balance">
                {t.home.heroTitle}
              </h1>
              <p className="mt-6 text-lg text-muted-foreground leading-relaxed max-w-2xl">
                {t.home.heroDescription}
              </p>
              <div className="mt-10 flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg">
                  <Link href="/investment-strategy">
                    {t.home.ourStrategy}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href="/contact">{t.nav.contactUs}</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="bg-secondary py-12">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <p className="font-serif text-3xl font-medium text-foreground">{stat.value}</p>
                  <p className="mt-1 text-sm text-muted-foreground">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Business Areas */}
        <section className="py-24 lg:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="font-serif text-3xl font-medium tracking-tight text-foreground sm:text-4xl">
                {t.home.businessAreasTitle}
              </h2>
              <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
                {t.home.businessAreasDescription}
              </p>
            </div>

            <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {businessAreas.map((area) => (
                <Card key={area.title} className="group hover:shadow-lg transition-shadow border-border">
                  <CardContent className="p-6">
                    <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-secondary">
                      <area.icon className="h-6 w-6 text-foreground" />
                    </div>
                    <h3 className="font-semibold text-foreground">{area.title}</h3>
                    <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{area.description}</p>
                    <Link
                      href={area.href}
                      className="mt-4 inline-flex items-center text-sm font-medium text-foreground hover:text-accent transition-colors"
                    >
                      {t.home.learnMore}
                      <ChevronRight className="ml-1 h-4 w-4" />
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Value Proposition */}
        <section className="bg-primary text-primary-foreground py-24 lg:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
              <div>
                <h2 className="font-serif text-3xl font-medium tracking-tight sm:text-4xl">
                  {t.home.valueTitle}
                </h2>
                <p className="mt-6 text-lg text-primary-foreground/80 leading-relaxed">
                  {t.home.valueDescription}
                </p>
                <ul className="mt-8 space-y-4">
                  {t.home.valuePoints.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <div className="mt-1 h-2 w-2 rounded-full bg-accent flex-shrink-0" />
                      <span className="text-primary-foreground/90">{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-10">
                  <Button asChild variant="secondary" size="lg">
                    <Link href="/about">
                      {t.home.aboutOurCompany}
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
              <div className="relative">
                <img
                  src="/swiss-business-professionals-in-modern-office-meet.jpg"
                  alt="Professional business meeting"
                  className="rounded-lg shadow-xl"
                />
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 lg:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="font-serif text-3xl font-medium tracking-tight text-foreground sm:text-4xl">
                {t.home.ctaTitle}
              </h2>
              <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
                {t.home.ctaDescription}
              </p>
              <div className="mt-10">
                <Button asChild size="lg">
                  <Link href="/contact">
                    {t.home.getInTouch}
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
