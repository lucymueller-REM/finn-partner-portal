"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState, useRef, ReactNode } from "react";
import { Header } from "@/components/sections/Header";
import { Footer } from "@/components/sections/Footer";

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

const tocItems = [
  { id: "ueberblick", label: "Überblick" },
  { id: "vorteile", label: "Vorteile" },
  { id: "verkaufstypen", label: "Verkaufstypen" },
  { id: "so-funktionierts", label: "So funktioniert's" },
  { id: "feedback", label: "Feedback" },
  { id: "faq", label: "FAQ" },
  { id: "partner-werden", label: "Partner werden" },
];

function TableOfContents({ activeSection }: { activeSection: string }) {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <nav className="space-y-1">
      {tocItems.map((item) => {
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

const processSteps = [
  {
    num: "01",
    title: "Registrierung als Gewerbepartner",
    desc: "Kostenfreie Anmeldung über das Portal inkl. Gewerbenachweis.",
  },
  {
    num: "02",
    title: "Verifizierung",
    desc: "Prüfung und Freischaltung innerhalb von 24 Stunden.",
  },
  {
    num: "03",
    title: "Zugriff auf Inventar & Forecast",
    desc: "Live-Bestand inkl. Gutachten, Konfiguration, COC und Volumen-Forecast.",
  },
  {
    num: "04",
    title: "Fahrzeugauswahl & Reservierung",
    desc: "Bieten oder zum Sofortpreis kaufen – ohne klassisches Auktionsverfahren.",
  },
  {
    num: "05",
    title: "Abholung oder Lieferung",
    desc: "Kostenfreie Selbstabholung oder Lieferung direkt zu Ihnen.",
  },
  {
    num: "06",
    title: "After-Sales & Dokumentation",
    desc: "Alle Dokumente inkl. Zulassungsbescheinigung jederzeit im Portal abrufbar.",
  },
];

function ProcessTimeline({ activeStep }: { activeStep: number }) {
  return (
    <div className="space-y-8">
      {processSteps.map((step, idx) => {
        const isActive = idx === activeStep;
        return (
          <div
            key={step.num}
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
                {step.num}
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

const faqItems = [
  {
    q: "Wie kann ich einen Partnerzugang für das FINN Partner Portal beantragen?",
    a: "Über das Formular auf dieser Seite. Wir prüfen Ihren Gewerbenachweis und schalten Sie innerhalb von 24 Stunden frei.",
  },
  {
    q: "Welche Kosten fallen für die Nutzung des Portals an?",
    a: "Die Registrierung und Nutzung ist komplett kostenfrei. Sie zahlen nur den Fahrzeugpreis – keine versteckten Gebühren oder Provisionen.",
  },
  {
    q: "Welche Fahrzeugdaten und Dokumentationen sind verfügbar?",
    a: "Für jedes Fahrzeug: Gutachten, Konfiguration, COC, Laufleistung, Servicehistorie, Fotos und alle relevanten Dokumente.",
  },
  {
    q: "Wie funktioniert der Kauf eines Fahrzeugs im Portal?",
    a: "Sie können entweder ein Gebot abgeben oder zum Sofortpreis kaufen. Kein klassisches Auktionsverfahren mit Wartezeiten.",
  },
  {
    q: "Wie läuft die Fahrzeugübergabe nach dem Kauf ab?",
    a: "Sie wählen zwischen kostenfreier Selbstabholung oder Lieferung direkt zu Ihrem Standort. Alle Dokumente inkl. Zulassungsbescheinigung sind im Portal abrufbar.",
  },
  {
    q: "Kann ich das Fahrzeuginventar in mein eigenes System exportieren?",
    a: "Ja, über Excel-Export oder API-Anbindung können Sie Fahrzeugdaten einfach in Ihre eigenen Systeme übernehmen.",
  },
];

function FaqAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="divide-y divide-gray-100">
      {faqItems.map((item, idx) => (
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
   BENEFITS DATA
   ═════════════════════════════════════════════════════════════════════════════ */

const benefits = [
  {
    icon: IconInventory,
    title: "Umfassende Fahrzeugdaten",
    desc: "Gutachten, Konfiguration, COC und Volumen-Forecast – alle Infos auf einen Blick.",
  },
  {
    icon: IconPrice,
    title: "Keine versteckten Kosten",
    desc: "Sie zahlen nur den Fahrzeugpreis – keine Gebühren, keine Provisionen.",
  },
  {
    icon: IconDigital,
    title: "Flexible Kaufoptionen",
    desc: "Bieten oder Sofortpreis – plus Abholung auf eigene Kosten oder Lieferung.",
  },
];

/* ═══════════════════════════════════════════════════════════════════════════════
   TESTIMONIALS DATA
   ═════════════════════════════════════════════════════════════════════════════ */

const testimonials = [
  {
    quote:
      "Endlich ein Kanal ohne Auktionsstress. Die Fahrzeugdaten sind vollständig und der Prozess läuft komplett digital.",
    name: "Thomas M.",
    role: "Geschäftsführer, Autohaus in Bayern",
    featured: true,
  },
  {
    quote:
      "Die Standzeiten sind deutlich kürzer als bei klassischen Kanälen.",
    name: "Sandra W.",
    role: "Einkaufsleitung, Fahrzeughandel NRW",
    featured: false,
  },
  {
    quote:
      "Transparente Zustandsberichte und schnelle Abwicklung.",
    name: "Michael S.",
    role: "Inhaber, Gebrauchtwagenhandel",
    featured: false,
  },
];

/* ═══════════════════════════════════════════════════════════════════════════════
   BUYER PAGE
   ═════════════════════════════════════════════════════════════════════════════ */

export default function BuyerPage() {
  const [activeSection, setActiveSection] = useState("ueberblick");
  const [activeStep, setActiveStep] = useState(0);

  // Observe sections for TOC highlighting
  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    tocItems.forEach((item) => {
      const el = document.getElementById(item.id);
      if (!el) return;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setActiveSection(item.id);
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
  }, []);

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
                <TableOfContents activeSection={activeSection} />
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
                      Händler
                    </p>
                    <h1 className="mt-3 text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl lg:text-4xl">
                      Der direkte Weg zu{" "}
                      <span className="text-[#0087eb]">jungen Gebrauchtwagen.</span>
                    </h1>
                    <p className="mt-4 text-base text-gray-600">
                      Kaufen Sie Fahrzeuge aus Flotten und Remarketing-Programmen –
                      mit festen Preisen, transparenten Zustandsdaten und
                      vollständig digitaler Abwicklung.
                    </p>
                    <div className="mt-8">
                      <a
                        href="https://partners.one.finn.auto/p/login"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center rounded-lg bg-[#0087eb] px-5 py-2 text-xs font-medium text-white transition hover:bg-[#006fc7]"
                      >
                        Partnerzugang anfragen
                      </a>
                    </div>
                  </div>

                  {/* Right: Key facts from homepage */}
                  <div className="rounded-xl border border-gray-100 bg-gray-50/50 p-4 lg:p-5 lg:max-w-xs">
                    <p className="text-[10px] font-semibold uppercase tracking-widest text-[#0087eb]">
                      Auf einen Blick
                    </p>
                    <ul className="mt-3 space-y-2">
                      <li className="flex items-center gap-2 text-xs text-gray-700">
                        <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#0087eb]" />
                        Keine Gebühren – nur Fahrzeugpreis
                      </li>
                      <li className="flex items-center gap-2 text-xs text-gray-700">
                        <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#0087eb]" />
                        Bieten oder Sofortpreis
                      </li>
                      <li className="flex items-center gap-2 text-xs text-gray-700">
                        <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#0087eb]" />
                        Abholung oder Lieferung
                      </li>
                      <li className="flex items-center gap-2 text-xs text-gray-700">
                        <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#0087eb]" />
                        Export via Excel & API
                      </li>
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
                    Ihre Vorteile als Händler
                  </h2>
                  <p className="mt-2 max-w-lg text-sm text-gray-600">
                    Warum immer mehr Händler auf diesen Direktkanal setzen.
                  </p>
                  <div className="mt-8 grid gap-4 sm:grid-cols-3">
                    {benefits.map((b) => (
                      <div
                        key={b.title}
                        className="rounded-lg border border-gray-100 bg-gray-50/50 p-4"
                      >
                        <div className="mb-3 flex h-8 w-8 items-center justify-center rounded-md bg-[#0087eb]/10">
                          <b.icon className="h-4 w-4 text-[#0087eb]" />
                        </div>
                        <h3 className="text-sm font-semibold text-gray-900">{b.title}</h3>
                        <p className="mt-1.5 text-xs text-gray-600 leading-relaxed">{b.desc}</p>
                      </div>
                    ))}
                  </div>
                </ScrollReveal>
              </section>

              {/* ─────────────────────────────────────────────────────────────
                 SALES TYPES (Pre-Sales & Stock)
                 ───────────────────────────────────────────────────────────── */}
              <section id="verkaufstypen" className="py-14 border-t border-gray-100">
                <ScrollReveal>
                  <h2 className="text-xl font-bold tracking-tight text-gray-900 sm:text-2xl">
                    Zwei Wege zum Fahrzeug
                  </h2>
                  <p className="mt-2 max-w-lg text-sm text-gray-600">
                    Wählen Sie zwischen sofort verfügbaren Fahrzeugen oder sichern Sie sich Ihren Supply im Voraus.
                  </p>
                  
                  <div className="mt-8 grid gap-6 lg:grid-cols-2">
                    {/* Pre-Sales */}
                    <div className="rounded-xl border border-gray-200 bg-white p-6 relative overflow-hidden">
                      <div className="absolute top-0 left-0 w-1 h-full bg-[#0087eb]" />
                      <div className="flex items-center gap-3 mb-4">
                        <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#0087eb] text-white text-sm font-bold">1</span>
                        <div>
                          <h3 className="text-base font-bold text-gray-900">Pre-Sales</h3>
                          <p className="text-xs text-gray-500">Fahrzeuge verfügbar in 1–12 Monaten</p>
                        </div>
                      </div>
                      <ul className="space-y-3">
                        <li className="flex items-start gap-3">
                          <svg className="h-5 w-5 shrink-0 text-green-500 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                          </svg>
                          <div>
                            <p className="text-sm font-medium text-gray-900">Mittelfristige Volumenplanung</p>
                          </div>
                        </li>
                        <li className="flex items-start gap-3">
                          <svg className="h-5 w-5 shrink-0 text-green-500 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                          </svg>
                          <div>
                            <p className="text-sm font-medium text-gray-900">Hohe Planungssicherheit</p>
                            <p className="text-xs text-gray-500">für Nachfrage und Preise</p>
                          </div>
                        </li>
                        <li className="flex items-start gap-3">
                          <svg className="h-5 w-5 shrink-0 text-green-500 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                          </svg>
                          <div>
                            <p className="text-sm font-medium text-gray-900">Definierte Parameter</p>
                            <p className="text-xs text-gray-500">für Km, Schäden und Alter</p>
                          </div>
                        </li>
                      </ul>
                    </div>

                    {/* Stock Purchase */}
                    <div className="rounded-xl border border-gray-200 bg-white p-6 relative overflow-hidden">
                      <div className="absolute top-0 left-0 w-1 h-full bg-[#0087eb]" />
                      <div className="flex items-center gap-3 mb-4">
                        <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#0087eb] text-white text-sm font-bold">2</span>
                        <div>
                          <h3 className="text-base font-bold text-gray-900">Stock Purchase</h3>
                          <p className="text-xs text-gray-500">Sofort verfügbare Fahrzeuge inkl. Gutachten</p>
                        </div>
                      </div>
                      <ul className="space-y-3">
                        <li className="flex items-start gap-3">
                          <svg className="h-5 w-5 shrink-0 text-green-500 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                          </svg>
                          <div>
                            <p className="text-sm font-medium text-gray-900">Kurzfristige Nachfrage-Erfüllung</p>
                          </div>
                        </li>
                        <li className="flex items-start gap-3">
                          <svg className="h-5 w-5 shrink-0 text-green-500 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                          </svg>
                          <div>
                            <p className="text-sm font-medium text-gray-900">Schnelle Abwicklung</p>
                          </div>
                        </li>
                        <li className="flex items-start gap-3">
                          <svg className="h-5 w-5 shrink-0 text-green-500 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                          </svg>
                          <div>
                            <p className="text-sm font-medium text-gray-900">Gutachten vorhanden</p>
                          </div>
                        </li>
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
                    So funktioniert der Händler-Zugang
                  </h2>
                  <p className="mt-2 max-w-lg text-sm text-gray-600">
                    In fünf Schritten zum ersten Fahrzeug – vollständig digital.
                  </p>
                </ScrollReveal>

                <div className="mt-8 grid gap-8 lg:grid-cols-2">
                  {/* Left: Steps */}
                  <ProcessTimeline activeStep={activeStep} />

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
                    Das sagen unsere Partner
                  </h2>
                  <p className="mt-2 max-w-lg text-sm text-gray-600">
                    Erfahrungen von Händlern, die bereits über die Plattform einkaufen.
                  </p>

                  <div className="mt-8 grid gap-4 lg:grid-cols-2">
                    {/* Featured testimonial */}
                    <div className="rounded-xl bg-gray-50 p-5 lg:row-span-2">
                      <svg className="h-6 w-6 text-[#0087eb]/30" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                      </svg>
                      <p className="mt-3 text-sm text-gray-700 leading-relaxed">
                        {testimonials[0].quote}
                      </p>
                      <div className="mt-4">
                        <p className="text-sm font-medium text-gray-900">{testimonials[0].name}</p>
                        <p className="text-xs text-gray-500">{testimonials[0].role}</p>
                      </div>
                    </div>

                    {/* Smaller testimonials */}
                    {testimonials.slice(1).map((t) => (
                      <div key={t.name} className="rounded-lg border border-gray-100 p-4">
                        <p className="text-xs text-gray-700 leading-relaxed">
                          &ldquo;{t.quote}&rdquo;
                        </p>
                        <div className="mt-3">
                          <p className="text-xs font-medium text-gray-900">{t.name}</p>
                          <p className="text-[10px] text-gray-500">{t.role}</p>
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
                    Häufige Fragen
                  </h2>
                  <p className="mt-2 max-w-lg text-sm text-gray-600">
                    Alles, was Sie über den Partnerzugang wissen müssen.
                  </p>
                  <div className="mt-6 max-w-3xl">
                    <FaqAccordion />
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
                      Partnerzugang anfragen
                    </h2>
                    <p className="mx-auto mt-3 max-w-sm text-sm text-gray-600">
                      Erhalten Sie Zugriff auf verfügbare Fahrzeuge inkl. Zustandsdaten
                      und digitaler Abwicklung.
                    </p>
                    <a
                      href="https://partners.one.finn.auto/p/login"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-6 inline-flex items-center rounded-lg bg-[#0087eb] px-6 py-2 text-xs font-medium text-white transition hover:bg-[#006fc7]"
                    >
                      Jetzt Zugang beantragen
                    </a>
                    <p className="mt-3 text-[10px] text-gray-500">
                      Wir melden uns innerhalb von 24 Stunden.
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
