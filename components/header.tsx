"use client"

import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import { Menu, X, ChevronDown, Globe } from "lucide-react"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { useLanguage } from "@/lib/language-context"

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const { locale, setLocale, t } = useLanguage()

  const navigation = [
    { name: t.nav.home, href: "/" },
    { name: t.nav.about, href: "/about" },
    {
      name: t.nav.businessAreas,
      href: "/business",
      children: [
        { name: t.nav.realEstate, href: "/business/real-estate" },
        { name: t.nav.construction, href: "/business/construction" },
        { name: t.nav.financialServices, href: "/business/financial-services" },
        { name: t.nav.investments, href: "/business/investments" },
      ],
    },
    { name: t.nav.investmentStrategy, href: "/investment-strategy" },
    { name: t.nav.contact, href: "/contact" },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5 flex items-center gap-3">
            <Image
              src="/logo.png"
              alt="Sternen FinImmo AG"
              width={40}
              height={40}
              className="h-10 w-auto"
            />
            <span className="font-serif text-lg font-semibold text-foreground tracking-tight hidden sm:block">Sternen FinImmo AG</span>
          </Link>
        </div>

        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-foreground"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Menu className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>

        <div className="hidden lg:flex lg:gap-x-8">
          {navigation.map((item) =>
            item.children ? (
              <DropdownMenu key={item.name}>
                <DropdownMenuTrigger className="flex items-center gap-x-1 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
                  {item.name}
                  <ChevronDown className="h-4 w-4" aria-hidden="true" />
                </DropdownMenuTrigger>
                <DropdownMenuContent align="start" className="w-48">
                  {item.children.map((child) => (
                    <DropdownMenuItem key={child.name} asChild>
                      <Link href={child.href} className="w-full">
                        {child.name}
                      </Link>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                {item.name}
              </Link>
            ),
          )}
        </div>

        <div className="hidden lg:flex lg:flex-1 lg:justify-end lg:items-center lg:gap-4">
          {/* Language Switcher */}
          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center gap-1.5 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              <Globe className="h-4 w-4" />
              {locale.toUpperCase()}
              <ChevronDown className="h-3 w-3" />
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem onClick={() => setLocale("de")} className={locale === "de" ? "bg-muted" : ""}>
                Deutsch
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setLocale("en")} className={locale === "en" ? "bg-muted" : ""}>
                English
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          
          <Button asChild variant="default" size="sm">
            <Link href="/contact">{t.nav.inquiries}</Link>
          </Button>
        </div>
      </nav>

      {/* Mobile menu - Compact dropdown style */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-50">
          <div className="fixed inset-0 bg-foreground/30 backdrop-blur-sm" onClick={() => setMobileMenuOpen(false)} />
          <div className="fixed top-0 left-0 right-0 z-50 bg-background border-b border-border shadow-lg">
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-border">
              <Link href="/" className="flex items-center gap-2" onClick={() => setMobileMenuOpen(false)}>
                <Image
                  src="/logo.png"
                  alt="Sternen FinImmo AG"
                  width={32}
                  height={32}
                  className="h-8 w-auto"
                />
                <span className="font-serif text-base font-semibold text-foreground">Sternen FinImmo</span>
              </Link>
              <button
                type="button"
                className="rounded-md p-2 text-foreground hover:bg-muted transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <X className="h-5 w-5" aria-hidden="true" />
              </button>
            </div>
            
            {/* Navigation Grid */}
            <div className="px-4 py-4">
              <div className="grid grid-cols-2 gap-2">
                {navigation.map((item) =>
                  item.children ? (
                    item.children.map((child) => (
                      <Link
                        key={child.name}
                        href={child.href}
                        className="px-3 py-2.5 text-sm font-medium text-foreground hover:bg-muted rounded-md transition-colors text-center"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {child.name}
                      </Link>
                    ))
                  ) : (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="px-3 py-2.5 text-sm font-medium text-foreground hover:bg-muted rounded-md transition-colors text-center"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ),
                )}
              </div>
            </div>

            {/* Footer: Language + Contact */}
            <div className="px-4 pb-4 flex items-center justify-between gap-3">
              <div className="flex items-center gap-1 bg-muted rounded-md p-1">
                <button
                  type="button"
                  onClick={() => setLocale("de")}
                  className={`px-3 py-1.5 text-xs font-medium rounded transition-colors ${
                    locale === "de" ? "bg-background text-foreground shadow-sm" : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  DE
                </button>
                <button
                  type="button"
                  onClick={() => setLocale("en")}
                  className={`px-3 py-1.5 text-xs font-medium rounded transition-colors ${
                    locale === "en" ? "bg-background text-foreground shadow-sm" : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  EN
                </button>
              </div>
              <Button asChild size="sm" className="flex-1 max-w-[200px]">
                <Link href="/contact" onClick={() => setMobileMenuOpen(false)}>
                  {t.nav.contactUs}
                </Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
