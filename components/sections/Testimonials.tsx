const testimonials = [
  {
    quote:
      "Durch das FINN Portal erhalten wir Zugang zu jungen Gebrauchten zu fairen Konditionen.",
    label: "Faire Konditionen",
    sub: "Multimarken-Händler aus Norddeutschland, ca. 10.000 Fahrzeuge/Jahr",
  },
  {
    quote:
      "Das Portal bietet eine große Auswahl von A bis Z. Verfügbarkeiten werden direkt angezeigt, wodurch der Lieferplan individuell geplant werden kann.",
    label: "Transparenter Prozess",
    sub: "Multimarken-Händler, ca. 10.000 Fahrzeuge/Jahr",
  },
  {
    quote:
      "Mit FINN haben wir einen zuverlässigen Partner für unseren Fahrzeugankauf gefunden. Der Ankauf von Premium Gebrauchtwagen war noch nie so reibungslos.",
    label: "Professionelle Abwicklung",
    sub: "Herstellerunabhängige Autohauskette, ca. 8.000 Fahrzeuge/Jahr",
  },
];

export function Testimonials() {
  return (
    <section className="py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="text-center text-xl font-bold tracking-tight text-gray-900 sm:text-2xl">
          Eingesetzt von Händlergruppen, OEMs und Leasinggesellschaften.
        </h2>
        <p className="mx-auto mt-3 max-w-xl text-center text-sm text-gray-600">
          Das FINN Partner Portal ist Teil der Remarketing- und
          Einkaufsprozesse führender Marktteilnehmer.
        </p>
        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {testimonials.map((t) => (
            <div
              key={t.label}
              className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm"
            >
              <p className="text-[10px] font-semibold uppercase tracking-wider text-[#0087eb]">
                {t.label}
              </p>
              <blockquote className="mt-2 text-sm leading-relaxed text-gray-700">
                &bdquo;{t.quote}&ldquo;
              </blockquote>
              <p className="mt-3 text-xs text-gray-500">{t.sub}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
