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

function IconNetwork({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <circle cx="12" cy="5" r="3" />
      <circle cx="5" cy="19" r="3" />
      <circle cx="19" cy="19" r="3" />
      <path d="M12 8v4m-5.2 4.8L10 14m4 0l3.2 2.8" />
    </svg>
  );
}

function IconChart({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M3 3v18h18" />
      <path d="M7 16l4-4 4 4 5-6" />
    </svg>
  );
}

function IconProcess({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M12 2v4m0 12v4M4.93 4.93l2.83 2.83m8.48 8.48l2.83 2.83M2 12h4m12 0h4M4.93 19.07l2.83-2.83m8.48-8.48l2.83-2.83" />
      <circle cx="12" cy="12" r="4" />
    </svg>
  );
}

/* ═══════════════════════════════════════════════════════════════════════════════
   SUPPLIER PAGE
   ═════════════════════════════════════════════════════════════════════════════ */

export default function SupplierPage() {
  const { t } = useLanguage();
  const [activeSection, setActiveSection] = useState("ueberblick");
  const [activeStep, setActiveStep] = useState(0);

  // Create TOC items from translations
  const tocItems = [
    { id: "ueberblick", label: t.supplier.nav.overview },
    { id: "vorteile", label: t.supplier.nav.benefits },
    { id: "full-service", label: t.supplier.nav.fullService },
    { id: "so-funktionierts", label: t.supplier.nav.howItWorks },
    { id: "feedback", label: t.supplier.nav.feedback },
    { id: "faq", label: t.supplier.nav.faq },
    { id: "partner-werden", label: t.supplier.nav.becomePartner },
  ];

  // Create process steps from translations
  const processSteps = t.supplier.process.steps;

  // Observe sections for TOC highlighting
  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    const tocIds = ["ueberblick", "vorteile", "full-service", "so-funktionierts", "feedback", "faq", "partner-werden"];

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
      <Header variant="supplier" />
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
                      {t.supplier.hero.kicker}
                    </p>
                    <h1 className="mt-3 text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl lg:text-4xl">
                      {t.supplier.hero.headlinePart1}
                      <span className="text-[#0087eb]">{t.supplier.hero.headlineHighlight}</span>
                    </h1>
                    <p className="mt-4 text-base text-gray-600">
                      {t.supplier.hero.description}
                    </p>
                    <div className="mt-8">
                      <a
                        href="https://partners.one.finn.auto/p/login"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center rounded-lg bg-[#0087eb] px-5 py-2 text-xs font-medium text-white transition hover:bg-[#006fc7]"
                      >
                        {t.supplier.hero.cta}
                      </a>
                    </div>
                  </div>

                  {/* Right: Key facts from homepage */}
                  <div className="rounded-xl border border-gray-100 bg-gray-50/50 p-4 lg:p-5 lg:max-w-xs">
                    <p className="text-[10px] font-semibold uppercase tracking-widest text-[#0087eb]">
                      {t.supplier.hero.atAGlance}
                    </p>
                    <ul className="mt-3 space-y-2">
                      {t.supplier.hero.bullets.map((bullet, idx) => (
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
                      src="/hero-supplier.jpg"
                      alt="Supplier Dashboard"
                      fill
                      className="object-cover object-[30%_60%]"
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
                    {t.supplier.benefits.headline}
                  </h2>
                  <p className="mt-2 max-w-lg text-sm text-gray-600">
                    {t.supplier.benefits.description}
                  </p>
                  <div className="mt-8 grid gap-4 sm:grid-cols-3">
                    {t.supplier.benefits.items.map((b, idx) => (
                      <div
                        key={idx}
                        className="rounded-lg border border-gray-100 bg-gray-50/50 p-4"
                      >
                        <div className="mb-3 flex h-8 w-8 items-center justify-center rounded-md bg-[#0087eb]/10">
                          {idx === 0 && <IconNetwork className="h-4 w-4 text-[#0087eb]" />}
                          {idx === 1 && <IconChart className="h-4 w-4 text-[#0087eb]" />}
                          {idx === 2 && <IconProcess className="h-4 w-4 text-[#0087eb]" />}
                        </div>
                        <h3 className="text-sm font-semibold text-gray-900">{b.title}</h3>
                        <p className="mt-1.5 text-xs text-gray-600 leading-relaxed">{b.desc}</p>
                      </div>
                    ))}
                  </div>
                </ScrollReveal>
              </section>

              {/* ─────────────────────────────────────────────────────────────
                 MODULAR SERVICES
                 ───────────────────────────────────────────────────────────── */}
              <section id="full-service" className="py-14 border-t border-gray-100">
                <ScrollReveal>
                  <h2 className="text-xl font-bold tracking-tight text-gray-900 sm:text-2xl">
                    {t.supplier.fullService.headline}
                  </h2>
                  <p className="mt-2 max-w-lg text-sm text-gray-600">
                    {t.supplier.fullService.description}
                  </p>
                  <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                    {t.supplier.fullService.services.map((service, idx) => (
                      <div key={idx} className="rounded-lg border border-gray-100 bg-white p-4 text-center">
                        <div className="mx-auto mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-[#0087eb]/10">
                          {idx === 0 && (
                            <svg className="h-5 w-5 text-[#0087eb]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                            </svg>
                          )}
                          {idx === 1 && (
                            <svg className="h-5 w-5 text-[#0087eb]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                            </svg>
                          )}
                          {idx === 2 && (
                            <svg className="h-5 w-5 text-[#0087eb]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                            </svg>
                          )}
                          {idx === 3 && (
                            <svg className="h-5 w-5 text-[#0087eb]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0" />
                            </svg>
                          )}
                        </div>
                        <h3 className="text-sm font-semibold text-gray-900">{service.title}</h3>
                        <p className="mt-1 text-xs text-gray-500">{service.desc}</p>
                      </div>
                    ))}
                  </div>
                  <div className="mt-6 rounded-lg bg-[#0087eb]/5 border border-[#0087eb]/20 p-4 flex items-center gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#0087eb]/10">
                      <svg className="h-5 w-5 text-[#0087eb]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-gray-900">{t.supplier.fullService.accountManager.title}</p>
                      <p className="text-xs text-gray-600">{t.supplier.fullService.accountManager.desc}</p>
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
                    {t.supplier.process.headline}
                  </h2>
                  <p className="mt-2 max-w-lg text-sm text-gray-600">
                    {t.supplier.process.description}
                  </p>
                </ScrollReveal>

                <div className="mt-8 grid gap-8 lg:grid-cols-2">
                  {/* Left: Steps */}
                  <ProcessTimeline activeStep={activeStep} steps={processSteps} />

                  {/* Right: Sticky image */}
                  <div className="hidden lg:block">
                    <div className="sticky top-32">
                      <div className="relative aspect-[3/2] w-full max-w-lg overflow-hidden rounded-xl border border-gray-100 shadow-lg">
                        <Image
                          src="/hero-dashboard3.jpg"
                          alt="Supplier Dashboard"
                          fill
                          className="object-cover"
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
                    {t.supplier.feedback.headline}
                  </h2>
                  <p className="mt-2 max-w-lg text-sm text-gray-600">
                    {t.supplier.feedback.description}
                  </p>

                  <div className="mt-8 grid gap-4 lg:grid-cols-2">
                    {/* Featured testimonial */}
                    <div className="rounded-xl bg-gray-50 p-5 lg:row-span-2">
                      <svg className="h-6 w-6 text-[#0087eb]/30" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                      </svg>
                      <p className="mt-3 text-sm text-gray-700 leading-relaxed">
                        {t.supplier.feedback.testimonials[0].quote}
                      </p>
                      <div className="mt-4">
                        <p className="text-sm font-medium text-gray-900">{t.supplier.feedback.testimonials[0].name}</p>
                        <p className="text-xs text-gray-500">{t.supplier.feedback.testimonials[0].role}</p>
                      </div>
                    </div>

                    {/* Smaller testimonials */}
                    {t.supplier.feedback.testimonials.slice(1).map((testimonial, idx) => (
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
                    {t.supplier.faq.headline}
                  </h2>
                  <p className="mt-2 max-w-lg text-sm text-gray-600">
                    {t.supplier.faq.headline}
                  </p>
                  <div className="mt-6 max-w-3xl">
                    <FaqAccordion items={t.supplier.faq.items} />
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
                      {t.supplier.cta.headline}
                    </h2>
                    <p className="mx-auto mt-3 max-w-sm text-sm text-gray-600">
                      {t.supplier.cta.description}
                    </p>
                    <a
                      href="https://partners.one.finn.auto/p/login"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-6 inline-flex items-center rounded-lg bg-[#0087eb] px-6 py-2 text-xs font-medium text-white transition hover:bg-[#006fc7]"
                    >
                      {t.supplier.cta.button}
                    </a>
                    <p className="mt-3 text-[10px] text-gray-500">
                      {t.supplier.cta.note}
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
