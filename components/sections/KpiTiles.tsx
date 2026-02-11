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
    <section className="border-t border-gray-200 bg-gray-50 py-14">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <h2 className="mb-8 text-center text-xl font-bold tracking-tight text-gray-900 sm:text-2xl">
          Aktuell im Netzwerk
        </h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {kpis.map((kpi) => (
            <div
              key={kpi.label}
              className="rounded-xl border border-gray-200 bg-white p-5 text-center shadow-sm"
            >
              <p className="text-[10px] font-medium uppercase tracking-wider text-[#0087eb]">
                {kpi.sub}
              </p>
              <p className="mt-1.5 text-2xl font-bold text-gray-900 lg:text-3xl">
                {kpi.value}
              </p>
              <p className="mt-1.5 text-xs text-gray-600">{kpi.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
