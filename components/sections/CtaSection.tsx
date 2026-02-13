import Link from "next/link";
import { Button } from "@/components/ui/Button";

export function CtaSection() {
  return (
    <section className="border-t border-gray-200 bg-gray-50 py-24">
      <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Partner werden
        </h2>
        <p className="mt-6 text-lg text-gray-600">
          Erhalten Sie Zugang zum FINN Fahrzeugbestand oder nutzen Sie das
          Portal als strukturierten Remarketing-Kanal.
        </p>
        <Button
          asChild
          className="mt-10 bg-[#0072ea] px-8 py-3 text-base text-white hover:bg-[#005fc4]"
        >
          <Link href="#partnerzugang">Partnerzugang beantragen</Link>
        </Button>
        <p className="mt-6 text-sm text-gray-500">
          Verifizierung für Gewerbekunden innerhalb von 24h.
        </p>
      </div>
    </section>
  );
}
