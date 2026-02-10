const stats = [
  { value: "42", label: "Fahrzeuge heute neu gelistet" },
  { value: "14 Tage", label: "Ø Remarketing-Standzeit" },
  { value: "1.200+", label: "Aktive Händler im Netzwerk" },
  { value: "80+", label: "Verkäufe diese Woche" },
];

export function LiveTracker() {
  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <p className="mb-8 text-center text-xs font-semibold uppercase tracking-widest text-[#0087eb]">
          Live im Portal
        </p>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <p className="text-3xl font-bold text-gray-900 sm:text-4xl">
                {s.value}
              </p>
              <p className="mt-1 text-sm text-gray-500">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
