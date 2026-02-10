"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";

/* ═══════════════════════════════════════════════════════════════════════════════
   TYPES & DATA
   ═════════════════════════════════════════════════════════════════════════════ */

interface Section {
  id: string;
  label: string;
  title: string;
  summary: string;
}

const sections: Section[] = [
  {
    id: "overview",
    label: "Überblick",
    title: "Junge Gebrauchtwagen direkt kaufen",
    summary: "Zugang zu Fahrzeugen aus Flotten und Remarketing – ohne Auktionen.",
  },
  {
    id: "benefits",
    label: "Vorteile",
    title: "Ihre Vorteile auf einen Blick",
    summary: "Live-Inventar, feste Preise und vollständig digitale Abwicklung.",
  },
  {
    id: "how",
    label: "So funktioniert's",
    title: "In 5 Schritten zum Fahrzeug",
    summary: "Von der Registrierung bis zur digitalen Übergabe – alles über eine Plattform.",
  },
  {
    id: "testimonials",
    label: "Feedback",
    title: "Das sagen unsere Partner",
    summary: "Erfahrungen von Händlern, die bereits über die Plattform einkaufen.",
  },
  {
    id: "faq",
    label: "FAQ",
    title: "Häufige Fragen",
    summary: "Antworten zu Zugang, Preisen, Dokumenten und Abwicklung.",
  },
  {
    id: "cta",
    label: "Partner werden",
    title: "Bereit für den direkten Zugang?",
    summary: "Fordern Sie jetzt Ihren Partnerzugang an.",
  },
];

/* ═══════════════════════════════════════════════════════════════════════════════
   ICONS
   ═════════════════════════════════════════════════════════════════════════════ */

function IconInventory({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="3" width="7" height="7" rx="1" />
      <rect x="14" y="3" width="7" height="7" rx="1" />
      <rect x="3" y="14" width="7" height="7" rx="1" />
      <rect x="14" y="14" width="7" height="7" rx="1" />
    </svg>
  );
}

function IconPrice({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="9" />
      <path d="M14.5 9.5c-.5-1-1.5-1.5-2.5-1.5-1.5 0-3 1-3 2.5s1.5 2 3 2.5 3 1 3 2.5-1.5 2.5-3 2.5c-1 0-2-.5-2.5-1.5" />
      <path d="M12 6v2m0 8v2" />
    </svg>
  );
}

function IconDigital({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="4" width="20" height="14" rx="2" />
      <path d="M8 21h8" />
      <path d="M12 18v3" />
      <path d="M7 10l3 3 7-7" />
    </svg>
  );
}

function IconChevron({ className, isOpen }: { className?: string; isOpen?: boolean }) {
  return (
    <svg
      className={`${className} transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="6 9 12 15 18 9" />
    </svg>
  );
}

/* ═══════════════════════════════════════════════════════════════════════════════
   BENEFITS DATA
   ═════════════════════════════════════════════════════════════════════════════ */

const benefits = [
  {
    icon: IconInventory,
    title: "Live-Inventar",
    description: "Echtzeit-Zugriff auf Fahrzeuge aus Flotten und Remarketing – mit Zustandsdaten und Dokumentation.",
  },
  {
    icon: IconPrice,
    title: "Feste Preise",
    description: "Keine Gebote, keine Wartezeit. Transparente Preise und strukturierter Direktkauf.",
  },
  {
    icon: IconDigital,
    title: "Digitale Abwicklung",
    description: "Reservierung, Vertrag und Übergabe – alles zentral über eine Plattform.",
  },
];

/* ═══════════════════════════════════════════════════════════════════════════════
   PROCESS STEPS
   ═════════════════════════════════════════════════════════════════════════════ */

const steps = [
  { num: "01", title: "Registrierung als Gewerbepartner", desc: "Antrag über das Portal mit Gewerbenachweis" },
  { num: "02", title: "Verifizierung", desc: "Prüfung und Freischaltung innerhalb von 24 Stunden" },
  { num: "03", title: "Zugriff auf verfügbares Inventar", desc: "Live-Bestand mit Zustandsdaten, Laufleistung und Dokumentation" },
  { num: "04", title: "Fahrzeugauswahl & Reservierung", desc: "Direkte Reservierung ohne Auktionsprozess" },
  { num: "05", title: "Digitaler Kaufabschluss", desc: "Vertrag, Rechnung und Übergabe vollständig digital" },
];

/* ═══════════════════════════════════════════════════════════════════════════════
   TESTIMONIALS
   ═════════════════════════════════════════════════════════════════════════════ */

const testimonials = [
  {
    quote: "Endlich ein Kanal ohne Auktionsstress. Die Fahrzeugdaten sind vollständig, die Preise fair – und der Prozess läuft digital.",
    name: "Thomas Müller",
    role: "Geschäftsführer, Autohaus Müller GmbH",
  },
  {
    quote: "Wir kaufen seit 6 Monaten über die Plattform. Die Standzeiten sind deutlich kürzer als bei klassischen Kanälen.",
    name: "Sandra Weber",
    role: "Einkaufsleitung, Weber Automobile",
  },
  {
    quote: "Transparente Zustandsberichte und schnelle Abwicklung. Genau das, was wir im Tagesgeschäft brauchen.",
    name: "Michael Schmidt",
    role: "Inhaber, Schmidt Fahrzeughandel",
  },
];

/* ═══════════════════════════════════════════════════════════════════════════════
   FAQ DATA
   ═════════════════════════════════════════════════════════════════════════════ */

const faqItems = [
  {
    question: "Wer kann Partnerzugang beantragen?",
    answer: "Der Zugang steht gewerblichen Fahrzeughändlern mit gültigem Gewerbenachweis offen. Die Verifizierung erfolgt innerhalb von 24 Stunden.",
  },
  {
    question: "Welche Kosten fallen an?",
    answer: "Es gibt keine Auktionsgebühren. Sie zahlen den angegebenen Festpreis plus transparente Abwicklungskosten – keine versteckten Gebühren.",
  },
  {
    question: "Welche Fahrzeugdaten sind verfügbar?",
    answer: "Jedes Fahrzeug wird mit digitalem Zustandsgutachten, Laufleistung, Service-Historie und vollständiger Dokumentation gelistet.",
  },
  {
    question: "Wie funktioniert die Reservierung?",
    answer: "Fahrzeuge können direkt im Portal reserviert werden. Die Reservierung ist verbindlich und wird sofort bestätigt – kein Bieterverfahren.",
  },
  {
    question: "Wie läuft die Übergabe ab?",
    answer: "Nach Kaufabschluss erhalten Sie alle Dokumente digital. Die Fahrzeugübergabe wird über die Plattform koordiniert.",
  },
];

/* ═══════════════════════════════════════════════════════════════════════════════
   FAQ ACCORDION ITEM
   ═════════════════════════════════════════════════════════════════════════════ */

function FaqItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-100 last:border-0">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full items-center justify-between py-5 text-left transition hover:text-[#0087eb]"
      >
        <span className="font-medium text-gray-900">{question}</span>
        <IconChevron className="h-5 w-5 shrink-0 text-gray-400" isOpen={isOpen} />
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-40 pb-5" : "max-h-0"
        }`}
      >
        <p className="text-sm leading-relaxed text-gray-600">{answer}</p>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════════════════════
   MAIN SCROLL STORY COMPONENT
   ═════════════════════════════════════════════════════════════════════════════ */

export function ScrollStory() {
  const [activeSection, setActiveSection] = useState("overview");
  const sectionRefs = useRef<Map<string, HTMLElement>>(new Map());

  // Set up IntersectionObserver
  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    sections.forEach((section) => {
      const el = sectionRefs.current.get(section.id);
      if (!el) return;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setActiveSection(section.id);
            }
          });
        },
        {
          root: null,
          rootMargin: "-30% 0px -50% 0px",
          threshold: 0,
        }
      );

      observer.observe(el);
      observers.push(observer);
    });

    return () => {
      observers.forEach((obs) => obs.disconnect());
    };
  }, []);

  const scrollToSection = (id: string) => {
    const el = sectionRefs.current.get(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const activeData = sections.find((s) => s.id === activeSection) || sections[0];

  return (
    <div className="relative mx-auto max-w-screen-2xl px-4 sm:px-6">
      {/* Mobile: Horizontal navigation chips */}
      <div className="sticky top-16 z-30 -mx-4 overflow-x-auto bg-white/95 px-4 py-3 backdrop-blur lg:hidden">
        <div className="flex gap-2">
          {sections.map((section) => (
            <button
              key={section.id}
              onClick={() => scrollToSection(section.id)}
              className={`shrink-0 rounded-full px-4 py-1.5 text-sm font-medium transition ${
                activeSection === section.id
                  ? "bg-[#0087eb] text-white"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
            >
              {section.label}
            </button>
          ))}
        </div>
      </div>

      <div className="lg:grid lg:grid-cols-12 lg:gap-12">
        {/* ═══════════════════════════════════════════════════════════════════════
           LEFT COLUMN: Page content
           ═══════════════════════════════════════════════════════════════════════ */}
        <div className="lg:col-span-8">
          {/* ─────────────────────────────────────────────────────────────────────
             SECTION 1: Hero / Overview
             ───────────────────────────────────────────────────────────────────── */}
          <section
            id="overview"
            ref={(el) => {
              if (el) sectionRefs.current.set("overview", el);
            }}
            className="pb-20 pt-12 lg:pt-20"
          >
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
              Der direkte Weg zu
              <br />
              <span className="text-[#0087eb]">jungen Gebrauchtwagen.</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg text-gray-600 sm:text-xl">
              Kaufen Sie Fahrzeuge aus Flotten und Remarketing-Programmen – mit festen Preisen, transparenten Zustandsdaten und vollständig digitaler Abwicklung.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
              <Link
                href="#cta"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("cta");
                }}
                className="inline-flex items-center justify-center rounded-xl bg-[#0087eb] px-8 py-3 text-base font-medium text-white transition hover:bg-[#006fc7]"
              >
                Partnerzugang anfragen
              </Link>
              <Link
                href="/"
                className="text-sm font-medium text-gray-500 transition hover:text-gray-900"
              >
                Zur Startseite
              </Link>
            </div>
          </section>

          {/* ─────────────────────────────────────────────────────────────────────
             SECTION 2: Benefits
             ───────────────────────────────────────────────────────────────────── */}
          <section
            id="benefits"
            ref={(el) => {
              if (el) sectionRefs.current.set("benefits", el);
            }}
            className="border-t border-gray-100 py-20"
          >
            <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
              Ihre Vorteile auf einen Blick
            </h2>
            <p className="mt-3 max-w-xl text-gray-600">
              Warum immer mehr Händler auf den digitalen Direktkanal setzen.
            </p>

            <div className="mt-12 grid gap-6 sm:grid-cols-3">
              {benefits.map((benefit) => (
                <div
                  key={benefit.title}
                  className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition hover:shadow-md"
                >
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-[#0087eb]/10">
                    <benefit.icon className="h-6 w-6 text-[#0087eb]" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900">{benefit.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-gray-600">{benefit.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* ─────────────────────────────────────────────────────────────────────
             SECTION 3: How it works
             ───────────────────────────────────────────────────────────────────── */}
          <section
            id="how"
            ref={(el) => {
              if (el) sectionRefs.current.set("how", el);
            }}
            className="border-t border-gray-100 py-20"
          >
            <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
              So funktioniert&apos;s
            </h2>
            <p className="mt-3 max-w-xl text-gray-600">
              In fünf Schritten zum ersten Fahrzeug – vollständig digital.
            </p>

            <div className="relative mt-12">
              {/* Vertical line */}
              <div className="absolute left-5 top-2 bottom-2 w-px bg-gray-200" aria-hidden />

              <ul className="space-y-1">
                {steps.map((step) => (
                  <li key={step.num} className="relative flex gap-5 rounded-2xl p-5">
                    <span className="relative z-10 flex h-11 w-11 shrink-0 items-center justify-center rounded-full border-2 border-gray-200 bg-white text-sm font-bold text-gray-400">
                      {step.num}
                    </span>
                    <div className="pt-1">
                      <h4 className="font-semibold text-gray-900">{step.title}</h4>
                      <p className="mt-1 text-sm text-gray-600">{step.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* ─────────────────────────────────────────────────────────────────────
             SECTION 4: Testimonials
             ───────────────────────────────────────────────────────────────────── */}
          <section
            id="testimonials"
            ref={(el) => {
              if (el) sectionRefs.current.set("testimonials", el);
            }}
            className="border-t border-gray-100 py-20"
          >
            <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
              Das sagen unsere Partner
            </h2>
            <p className="mt-3 max-w-xl text-gray-600">
              Erfahrungen von Händlern, die bereits über die Plattform einkaufen.
            </p>

            <div className="mt-12 grid gap-6 sm:grid-cols-3">
              {testimonials.map((t) => (
                <div
                  key={t.name}
                  className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm"
                >
                  <p className="text-sm leading-relaxed text-gray-700">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                  <div className="mt-5 border-t border-gray-100 pt-4">
                    <p className="font-medium text-gray-900">{t.name}</p>
                    <p className="text-xs text-gray-500">{t.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* ─────────────────────────────────────────────────────────────────────
             SECTION 5: FAQ
             ───────────────────────────────────────────────────────────────────── */}
          <section
            id="faq"
            ref={(el) => {
              if (el) sectionRefs.current.set("faq", el);
            }}
            className="border-t border-gray-100 py-20"
          >
            <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
              Häufige Fragen
            </h2>
            <p className="mt-3 max-w-xl text-gray-600">
              Alles, was Sie über den Partnerzugang wissen müssen.
            </p>

            <div className="mt-10 rounded-2xl border border-gray-200 bg-white px-6 shadow-sm">
              {faqItems.map((item) => (
                <FaqItem key={item.question} question={item.question} answer={item.answer} />
              ))}
            </div>
          </section>

          {/* ─────────────────────────────────────────────────────────────────────
             SECTION 6: Final CTA
             ───────────────────────────────────────────────────────────────────── */}
          <section
            id="cta"
            ref={(el) => {
              if (el) sectionRefs.current.set("cta", el);
            }}
            className="border-t border-gray-100 py-20"
          >
            <div className="rounded-2xl bg-gray-50 p-8 text-center sm:p-12">
              <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
                Bereit für den direkten Zugang?
              </h2>
              <p className="mx-auto mt-4 max-w-md text-gray-600">
                Fordern Sie jetzt Ihren Partnerzugang an und erhalten Sie sofort Zugriff auf verfügbare Fahrzeuge.
              </p>
              <Link
                href="#cta"
                className="mt-8 inline-flex items-center justify-center rounded-xl bg-[#0087eb] px-8 py-3 text-base font-medium text-white transition hover:bg-[#006fc7]"
              >
                Partnerzugang anfragen
              </Link>
            </div>
          </section>
        </div>

        {/* ═══════════════════════════════════════════════════════════════════════
           RIGHT COLUMN: Sticky guide panel (desktop only)
           ═══════════════════════════════════════════════════════════════════════ */}
        <div className="hidden lg:col-span-4 lg:block">
          <div className="sticky top-28">
            {/* Table of contents */}
            <nav className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
              <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-gray-400">
                Inhalt
              </p>
              <ul className="space-y-1">
                {sections.map((section) => {
                  const isActive = activeSection === section.id;
                  return (
                    <li key={section.id}>
                      <button
                        onClick={() => scrollToSection(section.id)}
                        className={`flex w-full items-center gap-3 rounded-lg px-3 py-2 text-left text-sm transition ${
                          isActive
                            ? "bg-[#0087eb]/5 font-medium text-gray-900"
                            : "text-gray-500 hover:bg-gray-50 hover:text-gray-900"
                        }`}
                      >
                        {/* Indicator */}
                        <span
                          className={`h-1.5 w-1.5 shrink-0 rounded-full transition-colors ${
                            isActive ? "bg-[#0087eb]" : "bg-gray-300"
                          }`}
                        />
                        {section.label}
                      </button>
                    </li>
                  );
                })}
              </ul>
            </nav>

            {/* Guide card */}
            <div className="mt-4 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition-all duration-300">
              <p className="text-xs font-semibold uppercase tracking-widest text-[#0087eb]">
                Gerade ansehen
              </p>
              <h3 className="mt-3 text-lg font-bold text-gray-900 transition-all duration-300">
                {activeData.title}
              </h3>
              <p className="mt-2 text-sm text-gray-600 transition-all duration-300">
                {activeData.summary}
              </p>

              {/* Mini visual placeholder */}
              <div className="mt-5 flex h-24 items-center justify-center rounded-xl bg-gradient-to-br from-[#0087eb]/10 to-[#0087eb]/5 border border-[#0087eb]/10">
                <span className="text-2xl font-bold text-[#0087eb]/30">
                  {sections.findIndex((s) => s.id === activeSection) + 1}/{sections.length}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
