"use client"

import Link from "next/link"
import Image from "next/image"
import { Mail, Phone, MapPin, Building2 } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

export function Footer() {
  const { t } = useLanguage()

  const footerNavigation = {
    company: [
      { name: t.footer.aboutUs, href: "/about" },
      { name: t.nav.investmentStrategy, href: "/investment-strategy" },
      { name: t.nav.contact, href: "/contact" },
    ],
    business: [
      { name: t.nav.realEstate, href: "/business/real-estate" },
      { name: t.nav.construction, href: "/business/construction" },
      { name: t.nav.financialServices, href: "/business/financial-services" },
      { name: t.nav.investments, href: "/business/investments" },
    ],
    legal: [
      { name: t.footer.impressum, href: "/legal/impressum" },
      { name: t.footer.privacyPolicy, href: "/legal/privacy" },
    ],
  }

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-3">
              <Image
                src="/logo.png"
                alt="Sternen FinImmo AG"
                width={48}
                height={48}
                className="h-12 w-auto"
              />
              <span className="font-serif text-xl font-semibold">Sternen FinImmo AG</span>
            </Link>
            <p className="mt-4 text-sm text-primary-foreground/80 leading-relaxed">
              {t.footer.tagline}
            </p>
            <div className="mt-6 space-y-3 text-sm text-primary-foreground/80">
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 flex-shrink-0" />
                <span>Döttingen, {t.footer.company === "Unternehmen" ? "Schweiz" : "Switzerland"}</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 flex-shrink-0" />
                <a href="mailto:info@sternen-finimmo.ch" className="hover:text-primary-foreground transition-colors">
                  info@sternen-finimmo.ch
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 flex-shrink-0" />
                <a href="tel:+41000000000" className="hover:text-primary-foreground transition-colors">
                  +41 00 000 00 00
                </a>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider">{t.footer.company}</h3>
            <ul className="mt-4 space-y-3">
              {footerNavigation.company.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider">{t.nav.businessAreas}</h3>
            <ul className="mt-4 space-y-3">
              {footerNavigation.business.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider">{t.footer.legal}</h3>
            <ul className="mt-4 space-y-3">
              {footerNavigation.legal.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-6 pt-6 border-t border-primary-foreground/20">
              <p className="text-xs text-primary-foreground/60">CHE-101.307.157</p>
              <p className="text-xs text-primary-foreground/60 mt-1">{t.footer.registered}: 25 Mai 2012</p>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-primary-foreground/20">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-primary-foreground/60">
              © {new Date().getFullYear()} Sternen FinImmo AG. {t.footer.allRightsReserved}
            </p>
            <div className="flex gap-6">
              <Link
                href="/legal/impressum"
                className="text-sm text-primary-foreground/60 hover:text-primary-foreground transition-colors"
              >
                {t.footer.impressum}
              </Link>
              <Link
                href="/legal/privacy"
                className="text-sm text-primary-foreground/60 hover:text-primary-foreground transition-colors"
              >
                {t.footer.privacyPolicy}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
