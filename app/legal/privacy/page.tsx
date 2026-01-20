"use client"

import Link from "next/link"
import { ChevronRight } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { useLanguage } from "@/lib/language-context"

export default function PrivacyPage() {
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
              <Link href="/legal/privacy" className="hover:text-foreground transition-colors">
                {t.privacy.breadcrumb}
              </Link>
              <ChevronRight className="h-4 w-4" />
              <span className="text-foreground">{t.footer.privacyPolicy}</span>
            </nav>

            <h1 className="font-serif text-4xl font-medium tracking-tight text-foreground">{t.privacy.title}</h1>
            <p className="mt-4 text-muted-foreground">{t.privacy.lastUpdated}</p>

            <div className="mt-12 space-y-8">
              <section>
                <h2 className="font-serif text-xl font-medium text-foreground mb-4">{t.privacy.sections.intro.title}</h2>
                <p className="text-muted-foreground leading-relaxed">
                  {t.privacy.sections.intro.text}
                </p>
              </section>

              <section>
                <h2 className="font-serif text-xl font-medium text-foreground mb-4">{t.privacy.sections.collection.title}</h2>
                <h3 className="font-medium text-foreground mt-4 mb-2">{t.privacy.sections.collection.personalTitle}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {t.privacy.sections.collection.personalText}
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground mt-2">
                  {t.privacy.sections.collection.personalList.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
                <p className="text-muted-foreground leading-relaxed mt-4">
                  {t.privacy.sections.collection.personalNote}
                </p>

                <h3 className="font-medium text-foreground mt-4 mb-2">{t.privacy.sections.collection.autoTitle}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {t.privacy.sections.collection.autoText}
                </p>
              </section>

              <section>
                <h2 className="font-serif text-xl font-medium text-foreground mb-4">{t.privacy.sections.usage.title}</h2>
                <p className="text-muted-foreground leading-relaxed">{t.privacy.sections.usage.text}</p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground mt-2">
                  {t.privacy.sections.usage.list.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </section>

              <section>
                <h2 className="font-serif text-xl font-medium text-foreground mb-4">{t.privacy.sections.sharing.title}</h2>
                <p className="text-muted-foreground leading-relaxed">
                  {t.privacy.sections.sharing.text}
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground mt-2">
                  {t.privacy.sections.sharing.list.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </section>

              <section>
                <h2 className="font-serif text-xl font-medium text-foreground mb-4">{t.privacy.sections.security.title}</h2>
                <p className="text-muted-foreground leading-relaxed">
                  {t.privacy.sections.security.text}
                </p>
              </section>

              <section>
                <h2 className="font-serif text-xl font-medium text-foreground mb-4">{t.privacy.sections.rights.title}</h2>
                <p className="text-muted-foreground leading-relaxed">
                  {t.privacy.sections.rights.text}
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground mt-2">
                  {t.privacy.sections.rights.list.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </section>

              <section>
                <h2 className="font-serif text-xl font-medium text-foreground mb-4">{t.privacy.sections.cookies.title}</h2>
                <p className="text-muted-foreground leading-relaxed">
                  {t.privacy.sections.cookies.text}
                </p>
              </section>

              <section>
                <h2 className="font-serif text-xl font-medium text-foreground mb-4">{t.privacy.sections.changes.title}</h2>
                <p className="text-muted-foreground leading-relaxed">
                  {t.privacy.sections.changes.text}
                </p>
              </section>

              <section>
                <h2 className="font-serif text-xl font-medium text-foreground mb-4">{t.privacy.sections.contactUs.title}</h2>
                <p className="text-muted-foreground leading-relaxed">
                  {t.privacy.sections.contactUs.text}
                </p>
                <div className="mt-4 text-muted-foreground">
                  <p>Sternen FinImmo AG</p>
                  <p>Döttingen, {t.footer.company === "Unternehmen" ? "Schweiz" : "Switzerland"}</p>
                  <p>
                    {t.impressum.email}:{" "}
                    <a href="mailto:info@sternen-finimmo.ch" className="hover:text-foreground transition-colors">
                      info@sternen-finimmo.ch
                    </a>
                  </p>
                </div>
              </section>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
