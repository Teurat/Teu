"use client"

import Link from "next/link"
import { ArrowRight, Target, Shield, TrendingUp, Handshake } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { useLanguage } from "@/lib/language-context"

export default function InvestmentStrategyPage() {
  const { t } = useLanguage()

  const principles = [
    {
      icon: Target,
      title: t.strategy.longTermPerspective,
      description: t.strategy.longTermPerspectiveDesc,
    },
    {
      icon: Shield,
      title: t.strategy.riskManagement,
      description: t.strategy.riskManagementDesc,
    },
    {
      icon: TrendingUp,
      title: t.strategy.valueCreation,
      description: t.strategy.valueCreationDesc,
    },
    {
      icon: Handshake,
      title: t.strategy.stakeholderAlignment,
      description: t.strategy.stakeholderAlignmentDesc,
    },
  ]

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 pt-16">
        {/* Hero */}
        <section className="relative py-24 lg:py-32">
          <div className="absolute inset-0 bg-secondary/50" />
          <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="font-serif text-4xl font-medium tracking-tight text-foreground sm:text-5xl text-balance">
                {t.strategy.title}
              </h1>
              <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
                {t.strategy.description}
              </p>
            </div>
          </div>
        </section>

        {/* Principles */}
        <section className="py-24 lg:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="font-serif text-3xl font-medium tracking-tight text-foreground sm:text-4xl">
                {t.strategy.principlesTitle}
              </h2>
              <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
                {t.strategy.principlesDescription}
              </p>
            </div>

            <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              {principles.map((principle) => (
                <Card key={principle.title} className="text-center border-border">
                  <CardContent className="p-6">
                    <div className="mx-auto mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                      <principle.icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="font-semibold text-foreground">{principle.title}</h3>
                    <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{principle.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Investment Focus */}
        <section className="bg-primary text-primary-foreground py-24 lg:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
              <div>
                <h2 className="font-serif text-3xl font-medium tracking-tight sm:text-4xl">{t.strategy.focusTitle}</h2>
                <p className="mt-4 text-lg text-primary-foreground/80 leading-relaxed">
                  {t.strategy.focusDescription}
                </p>
              </div>
              <div className="space-y-6">
                {t.strategy.focusAreas.map((item, index) => (
                  <div key={item.title} className="flex gap-4">
                    <div className="flex-shrink-0 flex h-8 w-8 items-center justify-center rounded-full bg-primary-foreground/10 text-sm font-semibold">
                      {index + 1}
                    </div>
                    <div>
                      <h3 className="font-semibold">{item.title}</h3>
                      <p className="mt-1 text-sm text-primary-foreground/80">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="py-24 lg:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
              <div>
                <h2 className="font-serif text-3xl font-medium tracking-tight text-foreground sm:text-4xl">
                  {t.strategy.processTitle}
                </h2>
                <div className="mt-6 space-y-4 text-muted-foreground leading-relaxed">
                  <p>{t.strategy.processDescription}</p>
                </div>
                <div className="mt-8 space-y-6">
                  {t.strategy.processSteps.map((item) => (
                    <div key={item.step} className="flex gap-4">
                      <div className="h-2 w-2 mt-2 rounded-full bg-primary flex-shrink-0" />
                      <div>
                        <h3 className="font-semibold text-foreground">{item.step}</h3>
                        <p className="text-sm text-muted-foreground">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <img src="/financial-charts-and-analysis-documents-on-desk--p.jpg" alt="Investment analysis" className="rounded-lg shadow-xl" />
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-secondary py-24 lg:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="font-serif text-3xl font-medium tracking-tight text-foreground sm:text-4xl">
                {t.strategy.ctaTitle}
              </h2>
              <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
                {t.strategy.ctaDescription}
              </p>
              <div className="mt-10">
                <Button asChild size="lg">
                  <Link href="/contact">
                    {t.strategy.startConversation}
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
