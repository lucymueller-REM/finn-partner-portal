"use client";

import { useEffect, useRef, useState } from "react";

/* ─────────────────────────────────────────────────────────────────────────────
   PROCESS STEPS DATA
   ───────────────────────────────────────────────────────────────────────────── */
const steps = [
  {
    id: "step-01",
    num: "01",
    title: "Registrierung als Gewerbepartner",
    desc: "Antrag über das Portal mit Gewerbenachweis",
    preview: {
      headline: "Schneller Einstieg",
      text: "Registrieren Sie sich in wenigen Minuten mit Ihrem Gewerbenachweis. Keine langen Formulare, keine Papierdokumentation.",
    },
  },
  {
    id: "step-02",
    num: "02",
    title: "Verifizierung",
    desc: "Prüfung und Freischaltung innerhalb von 24 Stunden",
    preview: {
      headline: "Schnelle Freischaltung",
      text: "Unser Team prüft Ihre Angaben und schaltet Ihren Zugang innerhalb von 24 Stunden frei.",
    },
  },
  {
    id: "step-03",
    num: "03",
    title: "Zugriff auf verfügbares Inventar",
    desc: "Live-Bestand inkl. Zustandsdaten, Laufleistung und Dokumentation",
    preview: {
      headline: "Transparenter Bestand",
      text: "Sehen Sie alle verfügbaren Fahrzeuge mit vollständigen Zustandsdaten, Laufleistung und Dokumentation – in Echtzeit.",
    },
  },
  {
    id: "step-04",
    num: "04",
    title: "Fahrzeugauswahl & Reservierung",
    desc: "Direkte Reservierung ohne Auktionsprozess",
    preview: {
      headline: "Direkter Zugriff",
      text: "Wählen Sie Ihr Fahrzeug und reservieren Sie es sofort. Keine Gebote, keine Wartezeit – feste Preise.",
    },
  },
  {
    id: "step-05",
    num: "05",
    title: "Digitaler Kaufabschluss",
    desc: "Vertrag, Rechnung und Übergabe vollständig digital",
    preview: {
      headline: "Vollständig digital",
      text: "Vertrag, Rechnung und Übergabekoordination erfolgen komplett über die Plattform. Kein Papierkram.",
    },
  },
];

export function ScrollProcess() {
  const [activeIndex, setActiveIndex] = useState(0);
  const stepsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    stepsRef.current.forEach((el, idx) => {
      if (!el) return;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setActiveIndex(idx);
            }
          });
        },
        {
          root: null,
          rootMargin: "-40% 0px -40% 0px",
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

  const activeStep = steps[activeIndex];

  return (
    <section className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-screen-2xl px-4 sm:px-6">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
          So funktioniert&apos;s
        </h2>
        <p className="mt-3 max-w-2xl text-gray-600">
          In fünf Schritten zum ersten Fahrzeug – vollständig digital.
        </p>

        <div className="mt-16 grid gap-12 lg:grid-cols-2 lg:gap-16">
          {/* LEFT: Steps list */}
          <div className="space-y-1">
            {steps.map((step, idx) => {
              const isActive = idx === activeIndex;
              return (
                <div
                  key={step.id}
                  id={step.id}
                  ref={(el) => {
                    stepsRef.current[idx] = el;
                  }}
                  className={`
                    relative flex gap-5 rounded-2xl p-5 transition-all duration-300
                    ${
                      isActive
                        ? "bg-[#0087eb]/5 border border-[#0087eb]/20"
                        : "border border-transparent"
                    }
                  `}
                >
                  {/* Number circle */}
                  <span
                    className={`
                      flex h-11 w-11 shrink-0 items-center justify-center rounded-full border-2 text-sm font-bold transition-all duration-300
                      ${
                        isActive
                          ? "border-[#0087eb] bg-[#0087eb] text-white"
                          : "border-gray-200 bg-white text-gray-400"
                      }
                    `}
                  >
                    {step.num}
                  </span>
                  {/* Content */}
                  <div className="pt-1">
                    <h4
                      className={`font-semibold transition-colors duration-300 ${
                        isActive ? "text-gray-900" : "text-gray-500"
                      }`}
                    >
                      {step.title}
                    </h4>
                    <p
                      className={`mt-1 text-sm transition-colors duration-300 ${
                        isActive ? "text-gray-600" : "text-gray-400"
                      }`}
                    >
                      {step.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* RIGHT: Sticky preview panel */}
          <div className="hidden lg:block">
            <div className="sticky top-32">
              <div className="rounded-2xl border border-gray-200 bg-gray-50 p-8 shadow-sm transition-all duration-500">
                {/* Visual placeholder */}
                <div className="mb-6 flex h-40 items-center justify-center rounded-xl bg-gradient-to-br from-[#0087eb]/10 to-[#0087eb]/5 border border-[#0087eb]/10">
                  <span className="text-5xl font-bold text-[#0087eb]/30">
                    {activeStep.num}
                  </span>
                </div>
                {/* Headline + text */}
                <h3 className="text-xl font-bold text-gray-900 transition-all duration-300">
                  {activeStep.preview.headline}
                </h3>
                <p className="mt-3 text-gray-600 transition-all duration-300">
                  {activeStep.preview.text}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile: Show preview below (non-sticky) */}
        <div className="mt-10 lg:hidden">
          <div className="rounded-2xl border border-gray-200 bg-gray-50 p-6 shadow-sm">
            <div className="mb-4 flex h-32 items-center justify-center rounded-xl bg-gradient-to-br from-[#0087eb]/10 to-[#0087eb]/5 border border-[#0087eb]/10">
              <span className="text-4xl font-bold text-[#0087eb]/30">
                {activeStep.num}
              </span>
            </div>
            <h3 className="text-lg font-bold text-gray-900">
              {activeStep.preview.headline}
            </h3>
            <p className="mt-2 text-sm text-gray-600">
              {activeStep.preview.text}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
