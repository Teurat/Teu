"use client"

import Link from "next/link"
import { ChevronRight } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { useLanguage } from "@/lib/language-context"

export default function ImpressumPage() {
  const { t } = useLanguage()

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 pt-16">
        <section className="py-24 lg:py-32">
          <div className="mx-auto max-w-3xl px-6 lg:px-8">
            <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-8">
              <Link href="/" className="hover:text-foreground transition-colors">
                {t.common.home}
              </Link>
              <ChevronRight className="h-4 w-4" />
              <Link href="/legal/impressum" className="hover:text-foreground transition-colors">
                {t.impressum.breadcrumb}
              </Link>
              <ChevronRight className="h-4 w-4" />
              <span className="text-foreground">{t.footer.impressum}</span>
            </nav>

            <h1 className="font-serif text-4xl font-medium tracking-tight text-foreground">{t.impressum.title}</h1>

            <div className="mt-12 prose prose-slate max-w-none">
              <h2 className="font-serif text-xl font-medium text-foreground mt-8 mb-4">{t.impressum.companyInfo}</h2>
              <dl className="space-y-4 text-muted-foreground">
                <div>
                  <dt className="font-medium text-foreground">{t.impressum.legalName}</dt>
                  <dd>Sternen FinImmo AG</dd>
                </div>
                <div>
                  <dt className="font-medium text-foreground">{t.impressum.legalForm}</dt>
                  <dd>{t.impressum.legalFormValue}</dd>
                </div>
                <div>
                  <dt className="font-medium text-foreground">{t.impressum.registeredOffice}</dt>
                  <dd>{t.impressum.registeredOfficeValue}</dd>
                </div>
                <div>
                  <dt className="font-medium text-foreground">{t.impressum.commercialRegister}</dt>
                  <dd>CHE-101.307.157</dd>
                </div>
                <div>
                  <dt className="font-medium text-foreground">{t.impressum.dateOfIncorporation}</dt>
                  <dd>25 Mai 2012</dd>
                </div>
              </dl>

              <h2 className="font-serif text-xl font-medium text-foreground mt-8 mb-4">{t.impressum.contact}</h2>
              <dl className="space-y-4 text-muted-foreground">
                <div>
                  <dt className="font-medium text-foreground">{t.impressum.email}</dt>
                  <dd>
                    <a href="mailto:info@sternen-finimmo.ch" className="hover:text-foreground transition-colors">
                      info@sternen-finimmo.ch
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="font-medium text-foreground">{t.impressum.phone}</dt>
                  <dd>+41 00 000 00 00</dd>
                </div>
              </dl>

              <h2 className="font-serif text-xl font-medium text-foreground mt-8 mb-4">{t.impressum.businessActivities}</h2>
              <p className="text-muted-foreground leading-relaxed">
                {t.impressum.businessActivitiesIntro}
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground mt-4">
                {t.impressum.activities.map((activity) => (
                  <li key={activity}>{activity}</li>
                ))}
              </ul>

              <h2 className="font-serif text-xl font-medium text-foreground mt-8 mb-4">{t.impressum.disclaimer}</h2>
              <p className="text-muted-foreground leading-relaxed">
                {t.impressum.disclaimerText1}
              </p>
              <p className="text-muted-foreground leading-relaxed mt-4">
                {t.impressum.disclaimerText2}
              </p>

              <h2 className="font-serif text-xl font-medium text-foreground mt-8 mb-4">{t.impressum.copyright}</h2>
              <p className="text-muted-foreground leading-relaxed">
                © {new Date().getFullYear()} Sternen FinImmo AG. {t.impressum.copyrightText}
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
