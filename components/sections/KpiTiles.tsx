const kpis = [
  {
    label: "Fahrzeuge heute neu gelistet",
    value: "42",
    sub: "Live im Portal",
  },
  {
    label: "Ø Remarketing-Standzeit",
    value: "14 Tage",
    sub: "Live im Portal",
  },
  {
    label: "Aktive Händler im Netzwerk",
    value: "1.200+",
    sub: "Live im Portal",
  },
  {
    label: "Verkäufe diese Woche",
    value: "80+",
    sub: "Live im Portal",
  },
];

export function KpiTiles() {
  return (
    <section className="border-t border-gray-200 bg-gray-50 py-20">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        <h2 className="mb-12 text-center text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
          Aktuell im Netzwerk
        </h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {kpis.map((kpi) => (
            <div
              key={kpi.label}
              className="rounded-2xl border border-gray-200 bg-white p-8 text-center shadow-sm"
            >
              <p className="text-xs font-medium uppercase tracking-wider text-[#0087eb]">
                {kpi.sub}
              </p>
              <p className="mt-2 text-3xl font-bold text-gray-900 lg:text-4xl">
                {kpi.value}
              </p>
              <p className="mt-2 text-sm text-gray-600">{kpi.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
