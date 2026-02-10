import Image from "next/image";
import Link from "next/link";

const leftContent = {
  kicker: "Händler",
  headline: "Junge Gebrauchtwagen direkt einkaufen.",
  bullets: [
    "Zugriff auf 5.000+ junge Gebrauchtwagen",
    "Durchschnittsalter ca. 12 Monate, nur 1. Vorbesitzer",
    "Kein Auktionsprozess, strukturierter Direktkauf oder Gebotsverkauf",
    "Alle relevanten Fahrzeugdokumente digital verfügbar",
  ],
  href: "/buyer",
  cta: "Ich bin Händler",
};

const rightContent = {
  kicker: "Einlieferer",
  headline: "Flotten effizient vermarkten und steuern.",
  bullets: [
    "Zusätzlicher Remarketing-Kanal",
    "Steuerung von Restwerten & Standzeiten",
    "Wettbewerbsfähige Preise durch breites Händlernetzwerk",
    "Defleeting-Abwicklung flexibel zubuchbar",
    "Full-Service Abwicklung über uns",
  ],
  href: "/supplier",
  cta: "Ich bin Einlieferer",
};

function SplitPanel({
  image,
  kicker,
  headline,
  bullets,
  href,
  cta,
}: {
  image: string;
  kicker: string;
  headline: string;
  bullets: string[];
  href: string;
  cta: string;
}) {
  return (
    <Link
      href={href}
      className="group relative block h-[460px] w-full overflow-hidden rounded-2xl sm:h-[520px]"
    >
      {/* Background image with hover zoom */}
      <div className="absolute inset-0 z-0">
        <Image
          src={image}
          alt=""
          fill
          className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
          sizes="(max-width: 1024px) 100vw, 50vw"
          priority
          unoptimized
        />
      </div>
      {/* Gradient overlay for readability */}
      <div
        className="absolute inset-0 z-10 bg-gradient-to-t from-black/75 via-black/40 to-black/20"
        aria-hidden
      />
      {/* Content */}
      <div className="relative z-20 flex h-full flex-col justify-end p-8 sm:p-10">
        <p className="text-xs font-semibold uppercase tracking-widest text-white">
          {kicker}
        </p>
        <h2 className="mt-2 text-3xl font-bold text-white sm:text-4xl">
          {headline}
        </h2>
        <ul className="mt-4 space-y-2">
          {bullets.map((b) => (
            <li
              key={b}
              className="flex items-center gap-2 text-sm text-white/90 sm:text-base"
            >
              <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#0087eb]" />
              {b}
            </li>
          ))}
        </ul>
        <span className="mt-8 inline-flex w-fit items-center justify-center rounded-xl bg-[#0087eb] px-6 py-2.5 text-sm font-medium text-white transition group-hover:bg-[#006fc7]">
          {cta}
        </span>
      </div>
    </Link>
  );
}

export function BuyerSupplierOverview() {
  return (
    <section className="bg-white py-4 sm:py-8">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-8 lg:grid-cols-2">
          <SplitPanel
            image="/hero-buyer.jpg"
            kicker={leftContent.kicker}
            headline={leftContent.headline}
            bullets={leftContent.bullets}
            href={leftContent.href}
            cta={leftContent.cta}
          />
          <SplitPanel
            image="/hero-supplier.jpg"
            kicker={rightContent.kicker}
            headline={rightContent.headline}
            bullets={rightContent.bullets}
            href={rightContent.href}
            cta={rightContent.cta}
          />
        </div>
      </div>
    </section>
  );
}
