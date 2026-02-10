const testimonials = [
  {
    quote:
      "Seit wir über die Plattform einkaufen, haben wir unsere Beschaffungszeit um 60% reduziert. Die Fahrzeugdaten sind transparent und der Prozess läuft reibungslos.",
    name: "Stefan Krause",
    role: "Geschäftsführer, Autohaus Krause GmbH",
    type: "buyer",
  },
  {
    quote:
      "Die Integration war unkompliziert und das Reporting gibt uns volle Transparenz über unsere Remarketing-Performance. Ein echter Mehrwert für unser Fleet-Management.",
    name: "Dr. Julia Hoffmann",
    role: "Head of Remarketing, Premium Leasing AG",
    type: "supplier",
  },
  {
    quote:
      "Endlich keine Auktionen mehr. Feste Preise, schnelle Abwicklung und top Fahrzeugqualität – genau das, was wir gesucht haben.",
    name: "Markus Weber",
    role: "Einkaufsleiter, Weber Automobile",
    type: "buyer",
  },
  {
    quote:
      "Mit dem Partner Portal erreichen wir ein qualifiziertes Händlernetzwerk ohne großen Vertriebsaufwand. Die Standzeiten haben sich deutlich verkürzt.",
    name: "Thomas Richter",
    role: "Director Fleet Sales, OEM Partner",
    type: "supplier",
  },
];

export function HomeTestimonials() {
  return (
    <section className="bg-gray-50 py-20 sm:py-24">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
            Das sagen unsere Partner
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-gray-600">
            Erfahrungen von Händlern und Einlieferern, die bereits über die Plattform arbeiten.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="flex flex-col rounded-2xl bg-white p-6 shadow-sm"
            >
              {/* Quote icon */}
              <svg
                className="h-6 w-6 text-[#0087eb]/30"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>

              {/* Quote text */}
              <p className="mt-4 flex-1 text-sm leading-relaxed text-gray-700">
                &ldquo;{t.quote}&rdquo;
              </p>

              {/* Author */}
              <div className="mt-6 border-t border-gray-100 pt-4">
                <p className="text-sm font-medium text-gray-900">{t.name}</p>
                <p className="text-xs text-gray-500">{t.role}</p>
                <span
                  className={`mt-2 inline-block rounded-full px-2 py-0.5 text-xs font-medium ${
                    t.type === "buyer"
                      ? "bg-blue-50 text-[#0087eb]"
                      : "bg-emerald-50 text-emerald-600"
                  }`}
                >
                  {t.type === "buyer" ? "Händler" : "Einlieferer"}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
