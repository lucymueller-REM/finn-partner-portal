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
    title: "Erstgespräch & Bedarfsanalyse",
    desc: "Wir analysieren Ihre Flotte und Remarketing-Ziele gemeinsam.",
  },
  {
    num: "02",
    title: "Technische Integration",
    desc: "Anbindung Ihrer Systeme via API oder manuellem Upload.",
  },
  {
    num: "03",
    title: "Bestandsübernahme",
    desc: "Fahrzeuge werden inkl. Zustandsdaten und Dokumentation eingestellt.",
  },
  {
    num: "04",
    title: "Vermarktung im Händlernetzwerk",
    desc: "Ihre Fahrzeuge werden über 1.200+ verifizierten Händlern angeboten.",
  },
  {
    num: "05",
    title: "Reporting & Steuerung",
    desc: "Echtzeit-Einblicke in Absatz, Standzeiten und Restwertentwicklung.",
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
    q: "Welche Fahrzeugtypen können wir vermarkten?",
    a: "Alle Fahrzeugtypen aus Flotten, Leasing-Rückläufern oder Mietwagen. Wir fokussieren uns auf junge Gebrauchtwagen bis ca. 24 Monate.",
  },
  {
    q: "Wie funktioniert die technische Anbindung?",
    a: "Wir bieten eine REST-API für automatisierten Datenaustausch oder alternativ einen manuellen Upload via Dashboard.",
  },
  {
    q: "Welche Händler kaufen über die Plattform?",
    a: "Über 1.200 verifizierte Gewerbehändler in Deutschland – vom Markenhändler bis zum spezialisierten Gebrauchtwagenhandel.",
  },
  {
    q: "Wie werden Restwerte gesteuert?",
    a: "Sie behalten volle Kontrolle über Preise. Wir liefern Marktdaten und Empfehlungen zur optimalen Preisgestaltung.",
  },
  {
    q: "Welche Reportings sind verfügbar?",
    a: "Echtzeit-Dashboards zu Absatz, Standzeiten, Restwertentwicklung und Händlerperformance.",
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
   BENEFITS DATA
   ═════════════════════════════════════════════════════════════════════════════ */

const benefits = [
  {
    icon: IconNetwork,
    title: "Qualifizierte Abnehmer",
    desc: "Über 1.200 verifizierte Gewerbehändler – vom Markenhändler bis zum Spezialisten.",
  },
  {
    icon: IconChart,
    title: "Volle Transparenz",
    desc: "Echtzeit-Dashboards zu Verkaufsstatus, Performance und Marktentwicklung.",
  },
  {
    icon: IconProcess,
    title: "Flexible Zusammenarbeit",
    desc: "Ob automatisiert oder manuell – wir passen uns Ihren Prozessen an.",
  },
];

/* ═══════════════════════════════════════════════════════════════════════════════
   TESTIMONIALS DATA
   ═════════════════════════════════════════════════════════════════════════════ */

const testimonials = [
  {
    quote:
      "Die Plattform hat unsere Remarketing-Prozesse komplett digitalisiert. Kürzere Standzeiten und bessere Restwerte.",
    name: "Dr. Martin K.",
    role: "Leiter Remarketing, Premium-OEM",
    featured: true,
  },
  {
    quote:
      "Endlich ein Kanal, der Transparenz bietet. Das Reporting hilft uns bei der strategischen Planung.",
    name: "Julia S.",
    role: "Fleet Manager, Leasinggesellschaft",
    featured: false,
  },
  {
    quote:
      "Die Integration war unkompliziert und das Händlernetzwerk ist qualitativ hochwertig.",
    name: "Andreas B.",
    role: "Geschäftsführer, Captive Bank",
    featured: false,
  },
];

/* ═══════════════════════════════════════════════════════════════════════════════
   SUPPLIER PAGE
   ═════════════════════════════════════════════════════════════════════════════ */

export default function SupplierPage() {
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
      <Header variant="subpage" />
      <main className="min-h-screen bg-white pt-16">
        {/* ═══════════════════════════════════════════════════════════════════
           TWO-COLUMN LAYOUT: TOC (left) + Content (right)
           ═══════════════════════════════════════════════════════════════════ */}
        <div className="mx-auto max-w-screen-2xl px-4 sm:px-6">
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
                      Einlieferer
                    </p>
                    <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
                      Flotten effizient vermarkten.{" "}
                      <span className="text-[#0087eb]">Strukturiert & transparent.</span>
                    </h1>
                    <p className="mt-5 text-lg text-gray-600">
                      Remarketing über ein qualifiziertes Händlernetzwerk – mit
                      Echtzeit-Reporting, Restwertsteuerung und prozessgesteuerter
                      Abwicklung.
                    </p>
                    <div className="mt-8">
                      <Link
                        href="#partner-werden"
                        className="inline-flex items-center rounded-xl bg-[#0087eb] px-7 py-3 text-sm font-medium text-white transition hover:bg-[#006fc7]"
                      >
                        Partnerzugang anfragen
                      </Link>
                    </div>
                  </div>

                  {/* Right: Key facts from homepage */}
                  <div className="rounded-2xl border border-gray-100 bg-gray-50/50 p-5 lg:p-6 lg:max-w-sm">
                    <p className="text-xs font-semibold uppercase tracking-widest text-[#0087eb]">
                      Auf einen Blick
                    </p>
                    <ul className="mt-4 space-y-3">
                      <li className="flex items-center gap-3 text-gray-700">
                        <span className="h-2 w-2 shrink-0 rounded-full bg-[#0087eb]" />
                        Zusätzlicher Remarketing-Kanal
                      </li>
                      <li className="flex items-center gap-3 text-gray-700">
                        <span className="h-2 w-2 shrink-0 rounded-full bg-[#0087eb]" />
                        Restwert- & Standzeit-Steuerung
                      </li>
                      <li className="flex items-center gap-3 text-gray-700">
                        <span className="h-2 w-2 shrink-0 rounded-full bg-[#0087eb]" />
                        Wettbewerbsfähige Preise
                      </li>
                      <li className="flex items-center gap-3 text-gray-700">
                        <span className="h-2 w-2 shrink-0 rounded-full bg-[#0087eb]" />
                        Full-Service zubuchbar
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Hero image - full width aligned with text */}
                <div>
                  <div className="relative h-[280px] w-full overflow-hidden rounded-2xl shadow-sm md:h-[340px]">
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
              <section id="vorteile" className="pt-12 pb-20">
                <ScrollReveal>
                  <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
                    Ihre Vorteile als Einlieferer
                  </h2>
                  <p className="mt-3 max-w-xl text-gray-600">
                    Warum OEMs und Leasinggesellschaften auf unsere Plattform setzen.
                  </p>
                  <div className="mt-12 grid gap-6 sm:grid-cols-3">
                    {benefits.map((b) => (
                      <div
                        key={b.title}
                        className="rounded-xl border border-gray-100 bg-gray-50/50 p-6"
                      >
                        <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-[#0087eb]/10">
                          <b.icon className="h-5 w-5 text-[#0087eb]" />
                        </div>
                        <h3 className="font-semibold text-gray-900">{b.title}</h3>
                        <p className="mt-2 text-sm text-gray-600 leading-relaxed">{b.desc}</p>
                      </div>
                    ))}
                  </div>
                </ScrollReveal>
              </section>

              {/* ─────────────────────────────────────────────────────────────
                 HOW IT WORKS (editorial timeline + sticky image)
                 ───────────────────────────────────────────────────────────── */}
              <section id="so-funktionierts" className="py-20 border-t border-gray-100">
                <ScrollReveal>
                  <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
                    So funktioniert die Zusammenarbeit
                  </h2>
                  <p className="mt-3 max-w-xl text-gray-600">
                    Von der Integration bis zum ersten Verkauf – strukturiert und transparent.
                  </p>
                </ScrollReveal>

                <div className="mt-12 grid gap-12 lg:grid-cols-2">
                  {/* Left: Steps */}
                  <ProcessTimeline activeStep={activeStep} />

                  {/* Right: Sticky image */}
                  <div className="hidden lg:block">
                    <div className="sticky top-32">
                      <div className="overflow-hidden rounded-xl border border-gray-100 shadow-lg">
                        <Image
                          src="/hero-dashboard2.jpg"
                          alt="Supplier Dashboard"
                          width={600}
                          height={400}
                          className="h-auto w-full object-cover"
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
              <section id="feedback" className="py-20 border-t border-gray-100">
                <ScrollReveal>
                  <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
                    Das sagen unsere Partner
                  </h2>
                  <p className="mt-3 max-w-xl text-gray-600">
                    Erfahrungen von OEMs und Leasinggesellschaften, die bereits über die Plattform vermarkten.
                  </p>

                  <div className="mt-12 grid gap-6 lg:grid-cols-2">
                    {/* Featured testimonial */}
                    <div className="rounded-2xl bg-gray-50 p-8 lg:row-span-2">
                      <svg className="h-8 w-8 text-[#0087eb]/30" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                      </svg>
                      <p className="mt-4 text-lg text-gray-700 leading-relaxed">
                        {testimonials[0].quote}
                      </p>
                      <div className="mt-6">
                        <p className="font-medium text-gray-900">{testimonials[0].name}</p>
                        <p className="text-sm text-gray-500">{testimonials[0].role}</p>
                      </div>
                    </div>

                    {/* Smaller testimonials */}
                    {testimonials.slice(1).map((t) => (
                      <div key={t.name} className="rounded-xl border border-gray-100 p-6">
                        <p className="text-sm text-gray-700 leading-relaxed">
                          &ldquo;{t.quote}&rdquo;
                        </p>
                        <div className="mt-4">
                          <p className="text-sm font-medium text-gray-900">{t.name}</p>
                          <p className="text-xs text-gray-500">{t.role}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </ScrollReveal>
              </section>

              {/* ─────────────────────────────────────────────────────────────
                 FAQ
                 ───────────────────────────────────────────────────────────── */}
              <section id="faq" className="py-20 border-t border-gray-100">
                <ScrollReveal>
                  <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
                    Häufige Fragen
                  </h2>
                  <p className="mt-3 max-w-xl text-gray-600">
                    Alles, was Sie über die Zusammenarbeit wissen müssen.
                  </p>
                  <div className="mt-10 max-w-2xl">
                    <FaqAccordion />
                  </div>
                </ScrollReveal>
              </section>

              {/* ─────────────────────────────────────────────────────────────
                 CTA
                 ───────────────────────────────────────────────────────────── */}
              <section id="partner-werden" className="py-20 border-t border-gray-100">
                <ScrollReveal>
                  <div className="rounded-2xl bg-gray-50 p-8 text-center sm:p-12">
                    <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
                      Partnerzugang anfragen
                    </h2>
                    <p className="mx-auto mt-4 max-w-md text-gray-600">
                      Starten Sie mit der digitalen Vermarktung Ihrer Flotte über
                      unser qualifiziertes Händlernetzwerk.
                    </p>
                    <Link
                      href="#partner-werden"
                      className="mt-8 inline-flex items-center rounded-xl bg-[#0087eb] px-8 py-3 text-sm font-medium text-white transition hover:bg-[#006fc7]"
                    >
                      Jetzt Kontakt aufnehmen
                    </Link>
                    <p className="mt-4 text-xs text-gray-500">
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
