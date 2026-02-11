"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState, useRef, ReactNode } from "react";
import { Header } from "@/components/sections/Header";
import { Footer } from "@/components/sections/Footer";
import { useLanguage } from "@/i18n/LanguageContext";

/* ═══════════════════════════════════════════════════════════════════════════════
   SCROLL REVEAL - Fade in/out on scroll
   ═════════════════════════════════════════════════════════════════════════════ */

function ScrollReveal({ children, className = "" }: { children: ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsVisible(entry.isIntersecting);
        });
      },
      { rootMargin: "-15% 0px -15% 0px", threshold: 0.1 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`transition-all duration-500 ease-out ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-20 translate-y-4"
      } ${className}`}
    >
      {children}
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════════════════════
   TABLE OF CONTENTS - Subtle sticky navigation
   ═════════════════════════════════════════════════════════════════════════════ */

function TableOfContents({ activeSection, items }: { activeSection: string; items: { id: string; label: string }[] }) {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <nav className="space-y-1">
      {items.map((item) => {
        const isActive = activeSection === item.id;
        return (
          <button
            key={item.id}
            onClick={() => scrollTo(item.id)}
            className={`block w-full text-left py-1.5 text-sm transition-all duration-200 ${
              isActive
                ? "text-gray-900 font-medium translate-x-1"
                : "text-gray-400 hover:text-gray-600"
            }`}
          >
            {item.label}
          </button>
        );
      })}
    </nav>
  );
}

/* ═══════════════════════════════════════════════════════════════════════════════
   PROCESS STEPS with scroll highlighting
   ═════════════════════════════════════════════════════════════════════════════ */

function ProcessTimeline({ activeStep, steps }: { activeStep: number; steps: { title: string; desc: string }[] }) {
  return (
    <div className="space-y-8">
      {steps.map((step, idx) => {
        const isActive = idx === activeStep;
        const num = String(idx + 1).padStart(2, '0');
        return (
          <div
            key={idx}
            id={`step-${idx}`}
            className={`transition-all duration-300 ${
              isActive ? "opacity-100" : "opacity-50"
            }`}
          >
            <div className="flex items-start gap-4">
              <span
                className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2 text-sm font-bold transition-all ${
                  isActive
                    ? "border-[#0087eb] bg-[#0087eb] text-white"
                    : "border-gray-200 bg-white text-gray-400"
                }`}
              >
                {num}
              </span>
              <div className="pt-1">
                <h4 className={`font-semibold transition-colors ${isActive ? "text-gray-900" : "text-gray-600"}`}>
                  {step.title}
                </h4>
                <p className="mt-1 text-sm text-gray-500">{step.desc}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════════════════════
   FAQ ACCORDION
   ═════════════════════════════════════════════════════════════════════════════ */

function FaqAccordion({ items }: { items: { q: string; a: string }[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="divide-y divide-gray-100">
      {items.map((item, idx) => (
        <div key={idx} className="py-4">
          <button
            onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
            className="flex w-full items-center justify-between text-left"
          >
            <span className="font-medium text-gray-900">{item.q}</span>
            <svg
              className={`h-5 w-5 shrink-0 text-gray-400 transition-transform ${
                openIndex === idx ? "rotate-180" : ""
              }`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          {openIndex === idx && (
            <p className="mt-3 text-sm text-gray-600 leading-relaxed">{item.a}</p>
          )}
        </div>
      ))}
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════════════════════
   ICONS
   ═════════════════════════════════════════════════════════════════════════════ */

function IconInventory({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <rect x="3" y="3" width="7" height="7" rx="1" />
      <rect x="14" y="3" width="7" height="7" rx="1" />
      <rect x="3" y="14" width="7" height="7" rx="1" />
      <rect x="14" y="14" width="7" height="7" rx="1" />
    </svg>
  );
}

function IconPrice({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <circle cx="12" cy="12" r="9" />
      <path d="M14.5 9.5c-.5-1-1.5-1.5-2.5-1.5-1.5 0-3 1-3 2.5s1.5 2 3 2.5 3 1 3 2.5-1.5 2.5-3 2.5c-1 0-2-.5-2.5-1.5" />
      <path d="M12 6v2m0 8v2" />
    </svg>
  );
}

function IconDigital({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <rect x="2" y="4" width="20" height="14" rx="2" />
      <path d="M8 21h8M12 18v3M7 10l3 3 7-7" />
    </svg>
  );
}

/* ═══════════════════════════════════════════════════════════════════════════════
   BUYER PAGE
   ═════════════════════════════════════════════════════════════════════════════ */

export default function BuyerPage() {
  const { t } = useLanguage();
  const [activeSection, setActiveSection] = useState("ueberblick");
  const [activeStep, setActiveStep] = useState(0);

  // Create TOC items from translations
  const tocItems = [
    { id: "ueberblick", label: t.buyer.nav.overview },
    { id: "vorteile", label: t.buyer.nav.benefits },
    { id: "sortiment", label: t.buyer.nav.assortment },
    { id: "so-funktionierts", label: t.buyer.nav.howItWorks },
    { id: "feedback", label: t.buyer.nav.feedback },
    { id: "faq", label: t.buyer.nav.faq },
    { id: "partner-werden", label: t.buyer.nav.becomePartner },
  ];

  // Create process steps from translations
  const processSteps = t.buyer.process.steps;

  // Observe sections for TOC highlighting
  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    const tocIds = ["ueberblick", "vorteile", "sortiment", "so-funktionierts", "feedback", "faq", "partner-werden"];

    tocIds.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setActiveSection(id);
            }
          });
        },
        { rootMargin: "-20% 0px -60% 0px", threshold: 0 }
      );

      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  // Observe steps for process timeline highlighting
  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    processSteps.forEach((_, idx) => {
      const el = document.getElementById(`step-${idx}`);
      if (!el) return;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setActiveStep(idx);
            }
          });
        },
        { rootMargin: "-40% 0px -40% 0px", threshold: 0 }
      );

      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, [processSteps]);

  return (
    <>
      <Header variant="buyer" />
      <main className="min-h-screen bg-white pt-14">
        {/* ═══════════════════════════════════════════════════════════════════
           TWO-COLUMN LAYOUT: TOC (left) + Content (right)
           ═══════════════════════════════════════════════════════════════════ */}
        <div className="mx-auto max-w-7xl pl-4 pr-12 sm:pl-6 sm:pr-20 lg:pr-32">
          <div className="xl:grid xl:grid-cols-[200px_1fr] xl:gap-12">
            {/* LEFT: Sticky TOC (xl+ only) */}
            <aside className="hidden xl:block">
              <div className="sticky top-24 pt-8">
                <TableOfContents activeSection={activeSection} items={tocItems} />
              </div>
            </aside>

            {/* RIGHT: Main content */}
            <div>
              {/* ─────────────────────────────────────────────────────────────
                 HERO - Text above, Image below
                 ───────────────────────────────────────────────────────────── */}
              <section id="ueberblick" className="pt-24 pb-8">
                {/* Text content + Bullets side by side */}
                <div className="mb-10 grid gap-10 lg:grid-cols-[1fr_auto] lg:items-center">
                  {/* Left: Text content */}
                  <div>
                    <p className="text-sm font-medium uppercase tracking-widest text-[#0087eb]">
                      {t.buyer.hero.kicker}
                    </p>
                    <h1 className="mt-3 text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl lg:text-4xl">
                      {t.buyer.hero.headline}
                    </h1>
                    <p className="mt-4 text-base text-gray-600">
                      {t.buyer.hero.description}
                    </p>
                    <div className="mt-8">
                      <a
                        href="https://partners.one.finn.auto/p/login"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center rounded-lg bg-[#0087eb] px-5 py-2 text-xs font-medium text-white transition hover:bg-[#006fc7]"
                      >
                        {t.buyer.hero.cta}
                      </a>
                    </div>
                  </div>

                  {/* Right: Key facts from homepage */}
                  <div className="rounded-xl border border-gray-100 bg-gray-50/50 p-4 lg:p-5 lg:max-w-xs">
                    <p className="text-[10px] font-semibold uppercase tracking-widest text-[#0087eb]">
                      {t.buyer.hero.atAGlance}
                    </p>
                    <ul className="mt-3 space-y-2">
                      {t.buyer.hero.bullets.map((bullet, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-xs text-gray-700">
                          <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#0087eb]" />
                          {bullet}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Hero image - full width aligned with text */}
                <div>
                  <div className="relative h-[220px] w-full overflow-hidden rounded-xl shadow-sm md:h-[280px]">
                    <Image
                      src="/hero-buyer.jpg"
                      alt="Fahrzeuge im Partner Portal"
                      fill
                      className="object-cover"
                      priority
                      unoptimized
                    />
                  </div>
                </div>
              </section>

              {/* ─────────────────────────────────────────────────────────────
                 BENEFITS (3 cards)
                 ───────────────────────────────────────────────────────────── */}
              <section id="vorteile" className="pt-10 pb-14">
                <ScrollReveal>
                  <h2 className="text-xl font-bold tracking-tight text-gray-900 sm:text-2xl">
                    {t.buyer.benefits.headline}
                  </h2>
                  <p className="mt-2 max-w-lg text-sm text-gray-600">
                    {t.buyer.benefits.description}
                  </p>
                  <div className="mt-8 grid gap-4 sm:grid-cols-3">
                    {t.buyer.benefits.items.map((b, idx) => (
                      <div
                        key={idx}
                        className="rounded-lg border border-gray-100 bg-gray-50/50 p-4"
                      >
                        <div className="mb-3 flex h-8 w-8 items-center justify-center rounded-md bg-[#0087eb]/10">
                          {idx === 0 && <IconInventory className="h-4 w-4 text-[#0087eb]" />}
                          {idx === 1 && <IconPrice className="h-4 w-4 text-[#0087eb]" />}
                          {idx === 2 && <IconDigital className="h-4 w-4 text-[#0087eb]" />}
                        </div>
                        <h3 className="text-sm font-semibold text-gray-900">{b.title}</h3>
                        <p className="mt-1.5 text-xs text-gray-600 leading-relaxed">{b.desc}</p>
                      </div>
                    ))}
                  </div>
                </ScrollReveal>
              </section>

              {/* ─────────────────────────────────────────────────────────────
                 SALES TYPES (Stock & Pre-Sales)
                 ───────────────────────────────────────────────────────────── */}
              <section id="sortiment" className="py-14 border-t border-gray-100">
                <ScrollReveal>
                  <h2 className="text-xl font-bold tracking-tight text-gray-900 sm:text-2xl">
                    {t.buyer.assortment.headline}
                  </h2>
                  <p className="mt-2 max-w-lg text-sm text-gray-600">
                    {t.buyer.assortment.description}
                  </p>
                  
                  <div className="mt-8 grid gap-6 lg:grid-cols-2">
                    {/* Stock Purchase - links (einfacher, schneller) */}
                    <div className="rounded-xl border border-gray-200 bg-white p-6 relative overflow-hidden">
                      <div className="absolute top-0 left-0 w-1 h-full bg-[#0087eb]" />
                      <div className="flex items-center gap-3 mb-4">
                        <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#0087eb] text-white text-sm font-bold">1</span>
                        <div>
                          <h3 className="text-base font-bold text-gray-900">{t.buyer.assortment.stock.title}</h3>
                          <p className="text-xs text-gray-500">{t.buyer.assortment.stock.subtitle}</p>
                        </div>
                      </div>
                      <ul className="space-y-3">
                        {t.buyer.assortment.stock.bullets.map((bullet, idx) => (
                          <li key={idx} className="flex items-start gap-3">
                            <svg className="h-5 w-5 shrink-0 text-green-500 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                            </svg>
                            <div>
                              <p className="text-sm font-medium text-gray-900">{bullet}</p>
                            </div>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Pre-Sales - rechts (für Planung) */}
                    <div className="rounded-xl border border-gray-200 bg-white p-6 relative overflow-hidden">
                      <div className="absolute top-0 left-0 w-1 h-full bg-[#0087eb]" />
                      <div className="flex items-center gap-3 mb-4">
                        <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#0087eb] text-white text-sm font-bold">2</span>
                        <div>
                          <h3 className="text-base font-bold text-gray-900">{t.buyer.assortment.preSales.title}</h3>
                          <p className="text-xs text-gray-500">{t.buyer.assortment.preSales.subtitle}</p>
                        </div>
                      </div>
                      <ul className="space-y-3">
                        {t.buyer.assortment.preSales.bullets.map((bullet, idx) => (
                          <li key={idx} className="flex items-start gap-3">
                            <svg className="h-5 w-5 shrink-0 text-green-500 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                            </svg>
                            <div>
                              <p className="text-sm font-medium text-gray-900">{bullet}</p>
                            </div>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </ScrollReveal>
              </section>

              {/* ─────────────────────────────────────────────────────────────
                 HOW IT WORKS (editorial timeline + sticky image)
                 ───────────────────────────────────────────────────────────── */}
              <section id="so-funktionierts" className="py-14 border-t border-gray-100">
                <ScrollReveal>
                  <h2 className="text-xl font-bold tracking-tight text-gray-900 sm:text-2xl">
                    {t.buyer.process.headline}
                  </h2>
                  <p className="mt-2 max-w-lg text-sm text-gray-600">
                    {t.buyer.process.description}
                  </p>
                </ScrollReveal>

                <div className="mt-8 grid gap-8 lg:grid-cols-2">
                  {/* Left: Steps */}
                  <ProcessTimeline activeStep={activeStep} steps={processSteps} />

                  {/* Right: Sticky image */}
                  <div className="hidden lg:block">
                    <div className="sticky top-32">
                      <div className="relative w-full max-w-lg overflow-hidden rounded-xl border border-gray-100 shadow-lg">
                        <Image
                          src="/hero-dashboard.jpg"
                          alt="Partner Portal Dashboard"
                          width={800}
                          height={600}
                          className="w-full h-auto object-contain"
                          unoptimized
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* ─────────────────────────────────────────────────────────────
                 FEEDBACK (1 featured + 2 smaller)
                 ───────────────────────────────────────────────────────────── */}
              <section id="feedback" className="py-14 border-t border-gray-100">
                <ScrollReveal>
                  <h2 className="text-xl font-bold tracking-tight text-gray-900 sm:text-2xl">
                    {t.buyer.feedback.headline}
                  </h2>
                  <p className="mt-2 max-w-lg text-sm text-gray-600">
                    {t.buyer.feedback.description}
                  </p>

                  <div className="mt-8 grid gap-4 lg:grid-cols-2">
                    {/* Featured testimonial */}
                    <div className="rounded-xl bg-gray-50 p-5 lg:row-span-2">
                      <svg className="h-6 w-6 text-[#0087eb]/30" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                      </svg>
                      <p className="mt-3 text-sm text-gray-700 leading-relaxed">
                        {t.buyer.feedback.testimonials[0].quote}
                      </p>
                      <div className="mt-4">
                        <p className="text-sm font-medium text-gray-900">{t.buyer.feedback.testimonials[0].name}</p>
                        <p className="text-xs text-gray-500">{t.buyer.feedback.testimonials[0].role}</p>
                      </div>
                    </div>

                    {/* Smaller testimonials */}
                    {t.buyer.feedback.testimonials.slice(1).map((testimonial, idx) => (
                      <div key={idx} className="rounded-lg border border-gray-100 p-4">
                        <p className="text-xs text-gray-700 leading-relaxed">
                          &ldquo;{testimonial.quote}&rdquo;
                        </p>
                        <div className="mt-3">
                          <p className="text-xs font-medium text-gray-900">{testimonial.name}</p>
                          <p className="text-[10px] text-gray-500">{testimonial.role}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </ScrollReveal>
              </section>

              {/* ─────────────────────────────────────────────────────────────
                 FAQ
                 ───────────────────────────────────────────────────────────── */}
              <section id="faq" className="py-14 border-t border-gray-100">
                <ScrollReveal>
                  <h2 className="text-xl font-bold tracking-tight text-gray-900 sm:text-2xl">
                    {t.buyer.faq.headline}
                  </h2>
                  <p className="mt-2 max-w-lg text-sm text-gray-600">
                    {t.buyer.faq.headline}
                  </p>
                  <div className="mt-6 max-w-3xl">
                    <FaqAccordion items={t.buyer.faq.items} />
                  </div>
                </ScrollReveal>
              </section>

              {/* ─────────────────────────────────────────────────────────────
                 CTA
                 ───────────────────────────────────────────────────────────── */}
              <section id="partner-werden" className="py-14 border-t border-gray-100">
                <ScrollReveal>
                  <div className="rounded-xl bg-gray-50 p-6 text-center sm:p-8">
                    <h2 className="text-xl font-bold tracking-tight text-gray-900 sm:text-2xl">
                      {t.buyer.cta.headline}
                    </h2>
                    <p className="mx-auto mt-3 max-w-sm text-sm text-gray-600">
                      {t.buyer.cta.description}
                    </p>
                    <a
                      href="https://partners.one.finn.auto/p/login"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-6 inline-flex items-center rounded-lg bg-[#0087eb] px-6 py-2 text-xs font-medium text-white transition hover:bg-[#006fc7]"
                    >
                      {t.buyer.cta.button}
                    </a>
                    <p className="mt-3 text-[10px] text-gray-500">
                      {t.buyer.cta.note}
                    </p>
                  </div>
                </ScrollReveal>
              </section>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
