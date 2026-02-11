import { CheckIcon, CrossIcon } from "@/components/ui/Icons";

const rows = [
  { label: "Preismodell", klassisch: "Bieterverfahren", finn: "Feste Preise" },
  { label: "Kosten", klassisch: "Gebühren", finn: "Klare Kostenstruktur" },
  { label: "Zustand", klassisch: "Unklare Zustände", finn: "Digitale Gutachten" },
  {
    label: "Prozess",
    klassisch: "Lange Prozesse",
    finn: "Prozessgesteuerte Abwicklung",
  },
];

export function Comparison() {
  return (
    <section className="py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="text-center text-xl font-bold tracking-tight text-gray-900 sm:text-2xl">
          Warum nicht mehr über Auktionen?
        </h2>
        {/* Table left-aligned: no mx-auto, full width within section */}
        <div
          className="mt-10 w-full overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm"
          style={{ maxWidth: "100%" }}
        >
          {/* Fixed 3-column layout: labels ~25%, Klassisch ~37.5%, FINN ~37.5% */}
          <div
            className="grid border-b border-gray-100"
            style={{ gridTemplateColumns: "25% 37.5% 37.5%" }}
          >
            <div className="p-3 text-xs font-semibold text-gray-700"> </div>
            <div className="border-l border-gray-100 p-3 text-xs font-semibold text-gray-700">
              Klassischer Kanal
            </div>
            <div className="border-l border-gray-100 bg-blue-50 p-3 text-xs font-semibold text-gray-700">
              FINN Portal
            </div>
          </div>
          {rows.map((row) => (
            <div
              key={row.label}
              className="grid border-b border-gray-100 last:border-0"
              style={{ gridTemplateColumns: "25% 37.5% 37.5%" }}
            >
              <div className="flex items-center p-3 text-xs font-medium text-gray-600">
                {row.label}
              </div>
              <div className="flex items-center gap-1.5 border-l border-gray-100 p-3 text-xs text-gray-600">
                <span className="shrink-0 text-slate-400">
                  <CrossIcon className="h-4 w-4" />
                </span>
                {row.klassisch}
              </div>
              <div className="flex items-center gap-1.5 border-l border-gray-100 bg-blue-50 p-3 text-xs font-medium text-gray-900">
                <span className="shrink-0 text-[#0087eb]">
                  <CheckIcon className="h-4 w-4" />
                </span>
                {row.finn}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
