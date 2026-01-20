"use client"

import type React from "react"
import { createContext, useContext, useState, useEffect } from "react"
import { type Locale, getTranslation } from "./translations"

type LanguageContextType = {
  locale: Locale
  setLocale: (locale: Locale) => void
  t: ReturnType<typeof getTranslation>
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("de")
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const stored = localStorage.getItem("locale") as Locale | null
    if (stored && (stored === "de" || stored === "en")) {
      setLocaleState(stored)
    }
  }, [])

  const setLocale = (newLocale: Locale) => {
    setLocaleState(newLocale)
    localStorage.setItem("locale", newLocale)
  }

  const t = getTranslation(locale)

  if (!mounted) {
    return (
      <LanguageContext.Provider value={{ locale: "de", setLocale, t: getTranslation("de") }}>
        {children}
      </LanguageContext.Provider>
    )
  }

  return (
    <LanguageContext.Provider value={{ locale, setLocale, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}
