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
    <section className="py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <h2 className="text-center text-xl font-bold tracking-tight text-gray-900 sm:text-2xl">
          Ein Portal für Einkauf, Steuerung und Vermarktung.
        </h2>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {features.map(({ title, description, Icon }) => (
            <div
              key={title}
              className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm transition-shadow hover:shadow-md"
            >
              <div className="flex h-10 w-10 items-center justify-center bg-[#0072ea]/10 text-[#0072ea]">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 text-sm font-semibold text-gray-900">
                {title}
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-gray-600">
                {description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
