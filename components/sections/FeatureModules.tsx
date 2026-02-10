import {
  IconInventory,
  IconDocument,
  IconChart,
  IconTransaction,
} from "@/components/ui/Icons";

const features = [
  {
    title: "Echtzeit-Inventar",
    description:
      "Live-Zugriff auf verfügbare Fahrzeuge inkl. Zustandsdaten, Laufleistung und Dokumentation.",
    Icon: IconInventory,
  },
  {
    title: "Dokumenten-Management",
    description:
      "Gutachten, Rechnungen und Fahrzeugdaten zentral im Portal.",
    Icon: IconDocument,
  },
  {
    title: "Performance & Reporting",
    description:
      "Daten zu Verkaufsdauer, Restwertentwicklung und Nachfrage.",
    Icon: IconChart,
  },
  {
    title: "Digitale Transaktionsabwicklung",
    description:
      "Von Reservierung bis Kaufabschluss vollständig im Portal.",
    Icon: IconTransaction,
  },
];

export function FeatureModules() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-screen-2xl px-4 sm:px-6">
        <h2 className="text-center text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Ein Portal für Einkauf, Steuerung und Vermarktung.
        </h2>
        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {features.map(({ title, description, Icon }) => (
            <div
              key={title}
              className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm transition-shadow hover:shadow-md"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#0087eb]/10 text-[#0087eb]">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="mt-5 text-lg font-semibold text-gray-900">
                {title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-gray-600">
                {description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
