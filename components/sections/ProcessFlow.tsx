const haendlerSteps = [
  { num: "01", title: "Registrierung als Gewerbepartner", desc: "Antrag über das Portal mit Gewerbenachweis" },
  { num: "02", title: "Verifizierung durch FINN", desc: "Prüfung und Freischaltung innerhalb von 24 Stunden" },
  { num: "03", title: "Zugriff auf verfügbares Inventar", desc: "Live-Bestand mit Zustandsdaten, Laufleistung und Dokumentation" },
  { num: "04", title: "Fahrzeugauswahl & Reservierung", desc: "Direkte Reservierung ohne Auktionsprozess" },
  { num: "05", title: "Digitaler Kaufabschluss inkl. Dokumentation", desc: "Vertrag, Rechnung und Übergabe vollständig im Portal" },
];

const remarketingSteps = [
  { num: "01", title: "Bestandsintegration", desc: "Anbindung von Rückläufern und Remarketing-Beständen" },
  { num: "02", title: "Fahrzeug-Listing im Portal", desc: "Automatisierte Veröffentlichung mit Zustandsdaten" },
  { num: "03", title: "Nachfrage durch Händlernetzwerk", desc: "Direkte Sichtbarkeit bei 1.200+ verifizierten Händlern" },
  { num: "04", title: "Transparente Reporting-Daten", desc: "Echtzeit-Einblicke in Absatz, Standzeiten und Nachfrage" },
  { num: "05", title: "Strukturierter Verkauf", desc: "Prozessgesteuerte Abwicklung über feste Preise" },
];

function TimelineColumn({
  title,
  steps,
}: {
  title: string;
  steps: { num: string; title: string; desc: string }[];
}) {
  return (
    <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm sm:p-6">
      <h3 className="text-base font-bold text-gray-500">{title}</h3>
      <div className="mt-6 relative">
        <div className="absolute left-4 top-2 bottom-2 w-px bg-gray-200" aria-hidden />
        <ul className="space-y-0">
          {steps.map((s) => (
            <li key={s.num} className="relative flex gap-4 pb-6 last:pb-0">
              <span className="relative z-10 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border-2 border-gray-300 bg-white text-xs font-bold text-gray-400">
                {s.num}
              </span>
              <div className="flex-1 pt-0.5">
                <h4 className="text-sm font-semibold text-gray-900">{s.title}</h4>
                <p className="mt-0.5 text-xs text-gray-600">{s.desc}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export function ProcessFlow() {
  return (
    <section className="border-t border-gray-200 bg-gray-50 py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <h2 className="text-center text-xl font-bold tracking-tight text-gray-900 sm:text-2xl">
          Die Infrastruktur hinter dem FINN Partner Portal
        </h2>
        <p className="mx-auto mt-3 max-w-xl text-center text-sm text-gray-600">
          Ein strukturierter Prozess für Einkauf und Remarketing – vollständig
          digital gesteuert.
        </p>

        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          <TimelineColumn title="Händler-Zugang" steps={haendlerSteps} />
          <TimelineColumn title="Remarketing über FINN" steps={remarketingSteps} />
        </div>
      </div>
    </section>
  );
}
