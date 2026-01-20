"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { Mail, Phone, Building2, Clock } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Card, CardContent } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useLanguage } from "@/lib/language-context"

export default function ContactPage() {
  const { t } = useLanguage()
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    subject: "",
    message: "",
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

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
                {t.contact.title}
              </h1>
              <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
                {t.contact.description}
              </p>
            </div>
          </div>
        </section>

        {/* Contact Form & Info */}
        <section className="py-24 lg:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-3 lg:gap-16">
              {/* Contact Information */}
              <div className="lg:col-span-1">
                <h2 className="font-serif text-2xl font-medium text-foreground">{t.contact.getInTouch}</h2>
                <p className="mt-4 text-muted-foreground leading-relaxed">
                  {t.contact.getInTouchDesc}
                </p>

                <div className="mt-8 space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 h-10 w-10 rounded-lg bg-secondary flex items-center justify-center">
                      <Building2 className="h-5 w-5 text-foreground" />
                    </div>
                    <div>
                      <h3 className="font-medium text-foreground">{t.contact.registeredOffice}</h3>
                      <p className="mt-1 text-sm text-muted-foreground">
                        Sternen FinImmo AG
                        <br />
                        Döttingen, {t.footer.company === "Unternehmen" ? "Schweiz" : "Switzerland"}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 h-10 w-10 rounded-lg bg-secondary flex items-center justify-center">
                      <Mail className="h-5 w-5 text-foreground" />
                    </div>
                    <div>
                      <h3 className="font-medium text-foreground">{t.contact.email}</h3>
                      <a
                        href="mailto:info@sternen-finimmo.ch"
                        className="mt-1 text-sm text-muted-foreground hover:text-foreground transition-colors"
                      >
                        info@sternen-finimmo.ch
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 h-10 w-10 rounded-lg bg-secondary flex items-center justify-center">
                      <Phone className="h-5 w-5 text-foreground" />
                    </div>
                    <div>
                      <h3 className="font-medium text-foreground">{t.contact.phone}</h3>
                      <a
                        href="tel:+41000000000"
                        className="mt-1 text-sm text-muted-foreground hover:text-foreground transition-colors"
                      >
                        +41 00 000 00 00
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 h-10 w-10 rounded-lg bg-secondary flex items-center justify-center">
                      <Clock className="h-5 w-5 text-foreground" />
                    </div>
                    <div>
                      <h3 className="font-medium text-foreground">{t.contact.businessHours}</h3>
                      <p className="mt-1 text-sm text-muted-foreground whitespace-pre-line">
                        {t.contact.businessHoursValue}
                      </p>
                    </div>
                  </div>
                </div>

                <Card className="mt-8 bg-secondary border-0">
                  <CardContent className="p-6">
                    <h3 className="font-medium text-foreground">{t.contact.companyRegistration}</h3>
                    <dl className="mt-3 space-y-2 text-sm">
                      <div className="flex justify-between">
                        <dt className="text-muted-foreground">{t.about.cheNumber}</dt>
                        <dd className="text-foreground">CHE-101.307.157</dd>
                      </div>
                      <div className="flex justify-between">
                        <dt className="text-muted-foreground">{t.footer.registered}:</dt>
                        <dd className="text-foreground">25 Mai 2012</dd>
                      </div>
                    </dl>
                  </CardContent>
                </Card>
              </div>

              {/* Contact Form */}
              <div className="lg:col-span-2">
                <Card className="border-border">
                  <CardContent className="p-8">
                    {submitted ? (
                      <div className="text-center py-12">
                        <div className="mx-auto h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                          <Mail className="h-6 w-6 text-primary" />
                        </div>
                        <h3 className="font-serif text-2xl font-medium text-foreground">{t.contact.thankYou}</h3>
                        <p className="mt-2 text-muted-foreground">
                          {t.contact.thankYouMessage}
                        </p>
                        <Button
                          className="mt-6 bg-transparent"
                          variant="outline"
                          onClick={() => {
                            setSubmitted(false)
                            setFormState({
                              name: "",
                              email: "",
                              phone: "",
                              company: "",
                              subject: "",
                              message: "",
                            })
                          }}
                        >
                          {t.contact.sendAnother}
                        </Button>
                      </div>
                    ) : (
                      <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid gap-6 sm:grid-cols-2">
                          <div className="space-y-2">
                            <Label htmlFor="name">{t.contact.fullName}</Label>
                            <Input
                              id="name"
                              required
                              value={formState.name}
                              onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                              placeholder={t.contact.yourName}
                            />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="email">{t.contact.emailAddress}</Label>
                            <Input
                              id="email"
                              type="email"
                              required
                              value={formState.email}
                              onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                              placeholder={t.contact.yourEmail}
                            />
                          </div>
                        </div>

                        <div className="grid gap-6 sm:grid-cols-2">
                          <div className="space-y-2">
                            <Label htmlFor="phone">{t.contact.phoneNumber}</Label>
                            <Input
                              id="phone"
                              type="tel"
                              value={formState.phone}
                              onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                              placeholder="+41 00 000 00 00"
                            />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="company">{t.contact.companyOrg}</Label>
                            <Input
                              id="company"
                              value={formState.company}
                              onChange={(e) => setFormState({ ...formState, company: e.target.value })}
                              placeholder={t.contact.yourOrg}
                            />
                          </div>
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="subject">{t.contact.subject}</Label>
                          <Select
                            value={formState.subject}
                            onValueChange={(value) => setFormState({ ...formState, subject: value })}
                          >
                            <SelectTrigger>
                              <SelectValue placeholder={t.contact.selectSubject} />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="investment">{t.contact.subjectOptions.investment}</SelectItem>
                              <SelectItem value="partnership">{t.contact.subjectOptions.partnership}</SelectItem>
                              <SelectItem value="real-estate">{t.contact.subjectOptions.realEstate}</SelectItem>
                              <SelectItem value="financial">{t.contact.subjectOptions.financial}</SelectItem>
                              <SelectItem value="general">{t.contact.subjectOptions.general}</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="message">{t.contact.message}</Label>
                          <Textarea
                            id="message"
                            required
                            rows={5}
                            value={formState.message}
                            onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                            placeholder={t.contact.messagePlaceholder}
                          />
                        </div>

                        <div className="text-sm text-muted-foreground">
                          {t.contact.privacyConsent}{" "}
                          <Link href="/legal/privacy" className="underline hover:text-foreground">
                            {t.footer.privacyPolicy}
                          </Link>
                          .
                        </div>

                        <Button type="submit" size="lg" className="w-full sm:w-auto">
                          {t.contact.sendMessage}
                        </Button>
                      </form>
                    )}
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
